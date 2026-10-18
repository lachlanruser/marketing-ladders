// Renders the continuous path: one section per level, stacked bottom-up.
// Each section is self-contained (its own winding path of circles + level banner),
// so sections can be reordered or shuffled later.
(function (ML) {
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var geos = {};   // levelId -> geometry from ML.path.layout
  var paths = {};  // levelId -> { ladder: {foot: [pts]}, snake: {head: [pts]} } for climb/slide animations
  var token = null;
  var onSelect = null; // called with a level id when an unlocked level's banner is tapped

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function svgEl(tag, attrs) {
    var e = document.createElementNS(SVG_NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  function geo(levelId) {
    if (!geos[levelId]) geos[levelId] = ML.path.layout(ML.levels[levelId]);
    return geos[levelId];
  }

  // Centre of square n as fractions (0..1) of the board's width/height.
  function center(levelId, n) {
    var g = geo(levelId), p = g.points[n];
    return { x: p.x / g.width, y: p.y / g.height };
  }

  function poly(points) { return points.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' '); }

  // Tiny badge icons for ladder-foot and snake-head circles.
  function badge(type) {
    var b = el('span', 'stone-badge stone-badge-' + type);
    var svg = svgEl('svg', { viewBox: '0 0 20 20', 'aria-hidden': 'true' });
    if (type === 'ladder') {
      svg.appendChild(svgEl('path', { d: 'M6 3v14M14 3v14M6 6h8M6 10h8M6 14h8', stroke: '#fff', 'stroke-width': 2.4, 'stroke-linecap': 'round', fill: 'none' }));
    } else {
      svg.appendChild(svgEl('path', { d: 'M4 15c3 0 3-5 6-5s3 5 6 5M14 5a2 2 0 1 0 0.1 0', stroke: '#fff', 'stroke-width': 2.4, 'stroke-linecap': 'round', fill: 'none' }));
    }
    b.appendChild(svg);
    return b;
  }

  function buildSection(level, index) {
    var g = geo(level.id);
    var section = el('section', 'section');
    section.dataset.level = level.id;
    section.style.setProperty('--theme', level.theme);
    section.style.setProperty('--theme-dark', level.themeDark || level.theme);

    var board = el('div', 'board');
    board.style.aspectRatio = g.width + ' / ' + g.height.toFixed(1);

    // Dotted trail linking the circles, so the order is obvious round the bends.
    var trail = svgEl('svg', { class: 'trail', viewBox: '0 0 ' + g.width + ' ' + g.height.toFixed(1), preserveAspectRatio: 'none' });
    trail.appendChild(svgEl('polyline', { points: poly(g.trail), class: 'trail-line' }));
    board.appendChild(trail);

    var stones = el('div', 'stones');
    g.points.forEach(function (p, n) {
      var stone = el('div', 'stone');
      stone.dataset.square = n;
      stone.style.left = ((p.x - g.radius) / g.width) * 100 + '%';
      stone.style.top = ((p.y - g.radius) / g.height) * 100 + '%';
      var label = n === 0 ? 'GO' : n === level.size ? '★' : String(n);
      if (n === 0) stone.classList.add('start');
      if (n === level.size) stone.classList.add('final');
      stone.appendChild(el('div', 'stone-face', label));
      var f = n > 0 && ML.logic.featureAt(level, n);
      if (f) { stone.classList.add(f.type); stone.appendChild(badge(f.type)); }
      stones.appendChild(stone);
    });
    board.appendChild(stones);
    board.appendChild(buildOverlay(level, g));
    section.appendChild(board);

    // Level banner: where the path enters this level (sits just below its start circle).
    // Tapping it plays or replays the level when it's unlocked.
    var banner = el('div', 'banner');
    var text = el('div', 'banner-text');
    text.appendChild(el('div', 'banner-title', 'Level ' + (index + 1) + ': ' + level.name));
    if (level.subtitle) text.appendChild(el('div', 'banner-sub', level.subtitle));
    banner.appendChild(text);
    banner.appendChild(el('div', 'banner-status'));
    function select() { if (section.classList.contains('selectable') && onSelect) onSelect(level.id); }
    banner.addEventListener('click', select);
    banner.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(); }
    });
    section.appendChild(banner);
    return section;
  }

  // ---------- Ladder and snake artwork (board units) ----------
  var SNAKE_COLOURS = [
    { body: '#ff4b4b', dark: '#c41e1e', spots: '#ffd23f' },
    { body: '#ce82ff', dark: '#8f3fd1', spots: '#fff1a8' },
    { body: '#ff9600', dark: '#c46a00', spots: '#fff1a8' }
  ];

  // Pull the ends in from the circle centres so the circle numbers stay visible.
  function inset(a, b, byA, byB) {
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
    return [
      { x: a.x + (dx / len) * byA, y: a.y + (dy / len) * byA },
      { x: b.x - (dx / len) * byB, y: b.y - (dy / len) * byB }
    ];
  }

  function drawLadder(svg, a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
    var ux = dx / len, uy = dy / len;          // along the ladder
    var px = -uy * 15, py = ux * 15;           // half-width, perpendicular
    var g = svgEl('g', { class: 'ladder-art' });
    var rails = [[px, py], [-px, -py]].map(function (o) {
      return { x1: a.x + o[0], y1: a.y + o[1], x2: b.x + o[0], y2: b.y + o[1] };
    });
    var rungs = [];
    for (var d = 14; d < len - 6; d += 30) {
      rungs.push({ x1: a.x + ux * d + px, y1: a.y + uy * d + py, x2: a.x + ux * d - px, y2: a.y + uy * d - py });
    }
    // Dark outline pass, then the bright wood pass on top, for a chunky cartoon look.
    [['#8a4b12', 13, 11], ['#f0a040', 7, 6]].forEach(function (style) {
      rungs.forEach(function (r) { g.appendChild(svgEl('line', Object.assign({ stroke: style[0], 'stroke-width': style[2], 'stroke-linecap': 'round' }, r))); });
      rails.forEach(function (r) { g.appendChild(svgEl('line', Object.assign({ stroke: style[0], 'stroke-width': style[1], 'stroke-linecap': 'round' }, r))); });
    });
    svg.appendChild(g);
  }

  // A wiggly body from head (a) to tail (b), returned as points for drawing and for the slide animation.
  function snakePoints(a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
    var nx = -dy / len, ny = dx / len;
    var waves = Math.max(1.5, len / 110), amp = 20, pts = [];
    for (var i = 0; i <= 48; i++) {
      var t = i / 48;
      var fade = Math.sin(Math.PI * Math.min(1, t * 1.15)); // straighter near head and tail
      var off = Math.sin(t * Math.PI * 2 * waves) * amp * fade;
      pts.push({ x: a.x + dx * t + nx * off, y: a.y + dy * t + ny * off });
    }
    return pts;
  }

  function drawSnake(svg, pts, colours) {
    var g = svgEl('g', { class: 'snake-art' });
    function width(i) { return 8 + 14 * (1 - i / (pts.length - 1)); } // tapers towards the tail
    [[colours.dark, 6], [colours.body, 0]].forEach(function (style) {
      for (var i = 0; i < pts.length - 1; i++) {
        g.appendChild(svgEl('line', {
          x1: pts[i].x, y1: pts[i].y, x2: pts[i + 1].x, y2: pts[i + 1].y,
          stroke: style[0], 'stroke-width': width(i) + style[1], 'stroke-linecap': 'round'
        }));
      }
    });
    g.appendChild(svgEl('polyline', {
      points: poly(pts.slice(3, -4)), fill: 'none', stroke: colours.spots,
      'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-dasharray': '1 16'
    }));

    // Head: facing away from the body, with eyes and a forked tongue.
    var h = pts[0], n = pts[3];
    var angle = Math.atan2(h.y - n.y, h.x - n.x) * 180 / Math.PI;
    var head = svgEl('g', { transform: 'translate(' + h.x.toFixed(1) + ' ' + h.y.toFixed(1) + ') rotate(' + angle.toFixed(1) + ')' });
    head.appendChild(svgEl('path', { d: 'M20 0 L32 0 M32 0 L39 -6 M32 0 L39 6', stroke: '#ff5a8a', 'stroke-width': 3.5, 'stroke-linecap': 'round', fill: 'none' }));
    head.appendChild(svgEl('ellipse', { cx: 2, cy: 0, rx: 23, ry: 18, fill: colours.body, stroke: colours.dark, 'stroke-width': 3.5 }));
    [-8, 8].forEach(function (y) {
      head.appendChild(svgEl('circle', { cx: 7, cy: y, r: 6, fill: '#fff' }));
      head.appendChild(svgEl('circle', { cx: 9, cy: y, r: 3, fill: '#222' }));
    });
    g.appendChild(head);
    svg.appendChild(g);
  }

  function buildOverlay(level, g) {
    var svg = svgEl('svg', { class: 'overlay', viewBox: '0 0 ' + g.width + ' ' + g.height.toFixed(1), preserveAspectRatio: 'none' });
    var store = paths[level.id] = { ladder: {}, snake: {} };
    var pull = g.radius * 0.7;
    level.ladders.forEach(function (l) {
      var a = g.points[l[0]], b = g.points[l[1]], ends = inset(a, b, pull, pull);
      drawLadder(svg, ends[0], ends[1]);
      store.ladder[l[0]] = [a, b];
    });
    level.snakes.forEach(function (s, i) {
      // The head sits just outside its circle so it doesn't cover the number.
      var a = g.points[s[0]], b = g.points[s[1]], ends = inset(a, b, g.radius * 1.3, pull);
      var pts = snakePoints(ends[0], ends[1]);
      drawSnake(svg, pts, SNAKE_COLOURS[i % SNAKE_COLOURS.length]);
      store.snake[s[0]] = [a].concat(pts, [b]);
    });
    return svg;
  }

  ML.board = {
    center: center,
    geometry: geo,

    render: function (container, order, selectHandler) {
      onSelect = selectHandler || null;
      container.innerHTML = '';
      order.forEach(function (id, i) {
        container.appendChild(buildSection(ML.levels[id], i));
      });
    },

    // Show a level as locked / completed / currently playing, and whether its banner can be tapped.
    // status: { locked, completed, current, selectable, label }
    setStatus: function (levelId, status) {
      var section = this.section(levelId);
      section.classList.toggle('locked', !!status.locked);
      section.classList.toggle('completed', !!status.completed);
      section.classList.toggle('current', !!status.current);
      section.classList.toggle('selectable', !!status.selectable);
      var banner = section.querySelector('.banner');
      banner.querySelector('.banner-status').textContent = status.label || '';
      if (status.selectable) { banner.setAttribute('role', 'button'); banner.tabIndex = 0; }
      else { banner.removeAttribute('role'); banner.removeAttribute('tabindex'); }
    },

    section: function (levelId) {
      return document.querySelector('.section[data-level="' + levelId + '"]');
    },

    // Circles up to the player's square are full colour; ones ahead are a lighter tint.
    setProgress: function (levelId, square) {
      var stones = this.section(levelId).querySelectorAll('.stone');
      Array.prototype.forEach.call(stones, function (s) {
        s.classList.toggle('passed', Number(s.dataset.square) <= square);
      });
    },

    // Token position as CSS percentages for square n.
    tokenPos: function (levelId, n) {
      var c = center(levelId, n);
      return { left: c.x * 100 + '%', top: c.y * 100 + '%' };
    },

    // Puts the token on a square of a level's section (no animation).
    placeToken: function (levelId, square) {
      var board = this.section(levelId).querySelector('.board');
      if (!token) {
        token = el('div', 'token');
        token.setAttribute('aria-hidden', 'true');
        token.appendChild(el('div', 'token-body'));
      }
      if (token.parentNode !== board) board.appendChild(token);
      var pos = this.tokenPos(levelId, square);
      token.style.left = pos.left;
      token.style.top = pos.top;
      return token;
    },

    token: function () { return token; },

    // Points (board units) for a ladder climb or snake slide starting at `from`.
    featurePath: function (levelId, type, from) {
      return paths[levelId] && paths[levelId][type][from];
    },

    // Animate the token along a list of points (board units), then leave it at the last one.
    travelPath: function (levelId, points, duration, easing) {
      var g = geo(levelId), t = token;
      var lengths = [0];
      for (var i = 1; i < points.length; i++) {
        lengths.push(lengths[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y));
      }
      var total = lengths[lengths.length - 1];
      return new Promise(function (resolve) {
        var start = null, done = false;
        function finish() {
          if (done) return;
          done = true;
          var end = points[points.length - 1];
          t.style.left = (end.x / g.width) * 100 + '%';
          t.style.top = (end.y / g.height) * 100 + '%';
          resolve();
        }
        // Fallback in case the browser stops animation frames (e.g. a background tab).
        setTimeout(finish, duration + 150);
        function frame(now) {
          if (done) return;
          if (start === null) start = now;
          var k = Math.min(1, (now - start) / duration);
          var d = easing(k) * total, j = 1;
          while (j < lengths.length - 1 && lengths[j] < d) j++;
          var seg = (d - lengths[j - 1]) / ((lengths[j] - lengths[j - 1]) || 1);
          var x = points[j - 1].x + (points[j].x - points[j - 1].x) * seg;
          var y = points[j - 1].y + (points[j].y - points[j - 1].y) * seg;
          t.style.left = (x / g.width) * 100 + '%';
          t.style.top = (y / g.height) * 100 + '%';
          if (k < 1) requestAnimationFrame(frame);
          else finish();
        }
        requestAnimationFrame(frame);
      });
    },

    // Scroll so the given square sits a little below the middle of the view.
    scrollTo: function (levelId, square, smooth) {
      var board = this.section(levelId).querySelector('.board');
      var scroller = document.getElementById('scroller');
      var c = center(levelId, square);
      var rect = board.getBoundingClientRect();
      var sRect = scroller.getBoundingClientRect();
      var y = rect.top - sRect.top + scroller.scrollTop + c.y * rect.height;
      scroller.scrollTo({ top: y - scroller.clientHeight * 0.55, behavior: smooth ? 'smooth' : 'auto' });
    }
  };
})(window.ML);
