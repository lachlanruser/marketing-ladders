// Path geometry for a level: where each circle sits on the winding, Duolingo-style path.
// Pure maths (no DOM), so it's unit-tested in tests/path.test.js.
//
// Coordinates are in "board units": the board is 600 wide and as tall as the path needs.
// y grows downward (like SVG); square 0 (the start) is at the bottom, the final square at the top.
(function (ML) {
  var W = 600;
  var DIAMETER = 92;        // circle size
  var SPACING = 125;        // distance between neighbouring circles along the path
  var MARGIN = 70;          // space below the start circle and above the final circle
  var SAMPLES_PER_BEND = 80;

  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
    return h >>> 0;
  }

  function between(range, k) { return range[0] + (range[1] - range[0]) * k; }

  // The path is a chain of "bends": half-waves that swing out to one side and back to the
  // middle, alternating sides. Each bend gets its own width and height from a seeded RNG,
  // so the path looks hand-drawn and quirky but is identical every time the level loads.
  function layout(level) {
    var opts = level.path || {};
    var rng = ML.logic.seededRng(opts.seed !== undefined ? opts.seed : hash(level.id));
    var amplitude = opts.amplitude || [185, 222];  // how far each bend swings from the middle
    var bendHeight = opts.bendHeight || [270, 330]; // vertical size of each bend
    var size = level.size;
    var needed = size * SPACING;

    // Sample the curve upward (u = distance up from the bottom), measuring length as we go.
    var side = rng() < 0.5 ? 1 : -1;
    var samples = [{ x: W / 2, u: MARGIN, s: 0 }];
    var bends = [];
    while (samples[samples.length - 1].s < needed) {
      var A = between(amplitude, rng()), L = between(bendHeight, rng());
      var u0 = samples[samples.length - 1].u;
      bends.push({ side: side, amplitude: A, peakU: u0 + L / 2 });
      for (var k = 1; k <= SAMPLES_PER_BEND; k++) {
        var prev = samples[samples.length - 1];
        var u = u0 + (L * k) / SAMPLES_PER_BEND;
        var x = W / 2 + side * A * Math.sin((Math.PI * k) / SAMPLES_PER_BEND);
        samples.push({ x: x, u: u, s: prev.s + Math.hypot(x - prev.x, u - prev.u) });
      }
      side = -side;
    }

    // Place circle n at arc length n * SPACING.
    var circles = [], j = 1;
    for (var n = 0; n <= size; n++) {
      var target = n * SPACING;
      while (j < samples.length - 1 && samples[j].s < target) j++;
      var a = samples[j - 1], b = samples[j];
      var t = n === 0 ? 0 : (target - a.s) / ((b.s - a.s) || 1);
      circles.push({ x: a.x + (b.x - a.x) * t, u: a.u + (b.u - a.u) * t });
    }

    var height = circles[size].u + MARGIN;
    function flip(p) { return { x: p.x, y: height - p.u }; }
    var trail = samples.filter(function (p) { return p.s <= needed; }).map(flip);
    trail.push(flip(circles[size]));

    return {
      width: W,
      height: height,
      radius: DIAMETER / 2,
      points: circles.map(flip),   // points[n] = centre of square n
      trail: trail,                // dense polyline from start to finish, for the dotted trail
      bends: bends.map(function (b) { return { side: b.side, amplitude: b.amplitude, peakY: height - b.peakU }; })
    };
  }

  // ---------- Small geometry helpers (used by tests and feature placement) ----------
  function pointSegmentDistance(p, a, b) {
    var dx = b.x - a.x, dy = b.y - a.y;
    var len2 = dx * dx + dy * dy;
    var t = len2 ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2)) : 0;
    return Math.hypot(p.x - (a.x + dx * t), p.y - (a.y + dy * t));
  }

  function segmentsIntersect(a, b, c, d) {
    function cross(o, p, q) { return (p.x - o.x) * (q.y - o.y) - (p.y - o.y) * (q.x - o.x); }
    var d1 = cross(c, d, a), d2 = cross(c, d, b), d3 = cross(a, b, c), d4 = cross(a, b, d);
    return ((d1 > 0) !== (d2 > 0)) && ((d3 > 0) !== (d4 > 0));
  }

  function segmentDistance(a, b, c, d) {
    if (segmentsIntersect(a, b, c, d)) return 0;
    return Math.min(pointSegmentDistance(a, c, d), pointSegmentDistance(b, c, d),
      pointSegmentDistance(c, a, b), pointSegmentDistance(d, a, b));
  }

  // Squares (other than its own ends) whose circle a ladder/snake passes over or brushes.
  // The clearance allows for the artwork's width (ladder rails, snake wiggle).
  var ART_CLEARANCE = 22;
  function circlesCrossed(geo, from, to) {
    var a = geo.points[from], b = geo.points[to], hit = [];
    geo.points.forEach(function (p, n) {
      if (n !== from && n !== to && pointSegmentDistance(p, a, b) < geo.radius + ART_CLEARANCE) hit.push(n);
    });
    return hit;
  }

  ML.path = {
    layout: layout,
    pointSegmentDistance: pointSegmentDistance,
    segmentDistance: segmentDistance,
    circlesCrossed: circlesCrossed,
    DIAMETER: DIAMETER,
    SPACING: SPACING
  };
})(window.ML);
