// Checks the winding path geometry and that each level's snakes and ladders sit cleanly on it.
(function () {
  var P = ML.path;
  // Phone reference: 375px wide screen -> 343px board (16px gutters), ~530px of board visible.
  var PHONE_BOARD_PX = 343, PHONE_VIEW_PX = 530;

  ML.LEVEL_ORDER.forEach(function (id) {
    var level = ML.levels[id];
    var g = P.layout(level);

    test(id + ': path has one circle per square plus the start', function () {
      eq(g.points.length, level.size + 1);
    });

    test(id + ': circles never overlap', function () {
      var min = Infinity;
      g.points.forEach(function (p, i) {
        for (var j = i + 1; j < g.points.length; j++) min = Math.min(min, Math.hypot(p.x - g.points[j].x, p.y - g.points[j].y));
      });
      assert(min >= P.DIAMETER * 1.05, 'closest circles are ' + min.toFixed(1) + ' apart');
    });

    test(id + ': circles stay inside the board width', function () {
      g.points.forEach(function (p, n) {
        assert(p.x - g.radius >= 0 && p.x + g.radius <= g.width, 'square ' + n + ' sticks out');
      });
    });

    test(id + ': path always climbs (each square is higher than the last)', function () {
      for (var n = 1; n < g.points.length; n++) assert(g.points[n].y < g.points[n - 1].y, 'square ' + n + ' is not higher');
    });

    test(id + ': level is about 1-1.6 phone screens tall (short and snappy)', function () {
      var screens = (g.height * PHONE_BOARD_PX / g.width) / PHONE_VIEW_PX;
      assert(screens >= 1 && screens <= 1.6, screens.toFixed(2) + ' phone screens');
    });

    test(id + ': same path every time it loads', function () {
      eq(P.layout(level).points, g.points);
    });

    var features = level.ladders.map(function (l) { return { type: 'Ladder', from: l[0], to: l[1] }; })
      .concat(level.snakes.map(function (s) { return { type: 'Snake', from: s[0], to: s[1] }; }));

    test(id + ': no ladder or snake passes over another circle', function () {
      var bad = [];
      features.forEach(function (f) {
        var hit = P.circlesCrossed(g, f.from, f.to);
        if (hit.length) bad.push(f.type + ' ' + f.from + '->' + f.to + ' crosses ' + hit.join(','));
      });
      eq(bad, []);
    });

    test(id + ': ladders and snakes never cross or touch each other', function () {
      var bad = [];
      for (var i = 0; i < features.length; i++) {
        for (var j = i + 1; j < features.length; j++) {
          var a = features[i], b = features[j];
          var d = P.segmentDistance(g.points[a.from], g.points[a.to], g.points[b.from], g.points[b.to]);
          if (d < 60) bad.push(a.type + ' ' + a.from + ' & ' + b.type + ' ' + b.from + ' (' + d.toFixed(0) + ')');
        }
      }
      eq(bad, []);
    });

    test(id + ': every ladder rises and every snake falls by 4-9 squares', function () {
      features.forEach(function (f) {
        var d = Math.abs(f.to - f.from);
        assert(d >= 4 && d <= 9, f.type + ' ' + f.from + '->' + f.to + ' moves ' + d);
      });
    });
  });
})();
