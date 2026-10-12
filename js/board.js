// Renders the continuous path: one section per level, stacked bottom-up.
// Each section is self-contained (its own 6x5 grid + start banner), so sections can be reordered.
(function (ML) {
  var COLS = 6, ROWS = 5;            // square rows; plus one start/banner row underneath
  var SVG_NS = 'http://www.w3.org/2000/svg';

  // Centre of square n as fractions (0..1) of the board's width/height.
  function center(n) {
    if (n === 0) return { x: 0.5 / COLS, y: (ROWS + 0.5) / (ROWS + 1) };
    var row = Math.floor((n - 1) / COLS);
    var idx = (n - 1) % COLS;
    var col = row % 2 === 0 ? idx : COLS - 1 - idx;   // boustrophedon: rows wind back and forth
    return { x: (col + 0.5) / COLS, y: (ROWS - 1 - row + 0.5) / (ROWS + 1) };
  }

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

  function buildSection(level, index) {
    var section = el('section', 'section');
    section.dataset.level = level.id;
    section.style.setProperty('--theme', level.theme);
    section.style.setProperty('--theme-dark', level.themeDark || level.theme);

    var board = el('div', 'board');
    for (var n = 1; n <= level.size; n++) {
      var c = center(n);
      var cell = el('div', 'cell');
      cell.dataset.square = n;
      cell.style.left = (c.x - 0.5 / COLS) * 100 + '%';
      cell.style.top = (c.y - 0.5 / (ROWS + 1)) * 100 + '%';
      if (n % 2 === 0) cell.classList.add('alt');
      var f = ML.logic.featureAt(level, n);
      if (f) cell.classList.add(f.type);
      if (n === level.size) cell.classList.add('final');
      cell.appendChild(el('div', 'cell-inner', n === level.size ? '★' : String(n)));
      board.appendChild(cell);
    }

    var banner = el('div', 'banner');
    banner.appendChild(el('span', 'banner-start', 'GO'));
    var text = el('div', 'banner-text');
    text.appendChild(el('div', 'banner-title', 'Level ' + (index + 1) + ': ' + level.name));
    if (level.subtitle) text.appendChild(el('div', 'banner-sub', level.subtitle));
    banner.appendChild(text);
    board.appendChild(banner);

    board.appendChild(buildOverlay(level));
    section.appendChild(board);
    return section;
  }

  // ---------- Ladder and snake artwork (600x600 coordinate space over the board) ----------
  var SIZE = 600;
  var SNAKE_COLOURS = [
    { body: '#ff4b4b', dark: '#c41e1e', spots: '#ffd23f' },
    { body: '#ce82ff', dark: '#8f3fd1', spots: '#fff1a8' },
    { body: '#ff9600', dark: '#c46a00', spots: '#fff1a8' }
  ];
  var paths = {}; // levelId -> { ladder: {foot: [pts]}, snake: {head: [pts]} } used by climb/slide animations

  function pt(n) { var c = center(n); return { x: c.x * SIZE, y: c.y * SIZE }; }
  function poly(points) { return points.map(function (p) { return p.x.toFixed(1) + ',' + p.y.toFixed(1); }).join(' '); }

  function drawLadder(svg, a, b) {
    var dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
    var ux = dx / len, uy = dy / len;          // along the ladder
    var px = -uy * 15, py = ux * 15;           // half-width, perpendicular
    var g = svgEl('g', { class: 'ladder-art' });
    var rails = [[px, py], [-px, -py]].map(function (o) {
      return { x1: a.x + o[0] - ux * 12, y1: a.y + o[1] - uy * 12, x2: b.x + o[0] + ux * 12, y2: b.y + o[1] + uy * 12 };
    });
    var rungs = [];
    for (var d = 22; d < len; d += 30) {
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

  function buildOverlay(level) {
    var svg = svgEl('svg', { class: 'overlay', viewBox: '0 0 ' + SIZE + ' ' + SIZE, preserveAspectRatio: 'none' });
    var store = paths[level.id] = { ladder: {}, snake: {} };
    level.ladders.forEach(function (l) {
      var a = pt(l[0]), b = pt(l[1]);
      drawLadder(svg, a, b);
      store.ladder[l[0]] = [a, b];
    });
    level.snakes.forEach(function (s, i) {
      var pts = snakePoints(pt(s[0]), pt(s[1]));
      drawSnake(svg, pts, SNAKE_COLOURS[i % SNAKE_COLOURS.length]);
      store.snake[s[0]] = pts;
    });
    return svg;
  }

  var token = null;

  ML.board = {
    center: center,

    render: function (container, order) {
      container.innerHTML = '';
      order.forEach(function (id, i) {
        container.appendChild(buildSection(ML.levels[id], i));
      });
    },

    section: function (levelId) {
      return document.querySelector('.section[data-level="' + levelId + '"]');
    },

    // Puts the token on a square of a level's section.
    placeToken: function (levelId, square) {
      var board = this.section(levelId).querySelector('.board');
      if (!token) { token = el('div', 'token'); token.setAttribute('aria-hidden', 'true'); }
      if (token.parentNode !== board) board.appendChild(token);
      var c = center(square);
      token.style.left = c.x * 100 + '%';
      token.style.top = c.y * 100 + '%';
      return token;
    },

    token: function () { return token; },

    // Points (600x600 space) for a ladder climb or snake slide starting at `from`.
    featurePath: function (levelId, type, from) {
      return paths[levelId] && paths[levelId][type][from];
    },

    // Animate the token along a list of points, then leave it at the last one.
    travelPath: function (levelId, points, duration, easing) {
      var t = token; // already on this level's board, sitting at points[0]
      var lengths = [0];
      for (var i = 1; i < points.length; i++) {
        lengths.push(lengths[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y));
      }
      var total = lengths[lengths.length - 1];
      t.classList.add('no-trans');
      return new Promise(function (resolve) {
        var start = null;
        function frame(now) {
          if (start === null) start = now;
          var k = Math.min(1, (now - start) / duration);
          var d = easing(k) * total, j = 1;
          while (j < lengths.length - 1 && lengths[j] < d) j++;
          var seg = (d - lengths[j - 1]) / ((lengths[j] - lengths[j - 1]) || 1);
          var x = points[j - 1].x + (points[j].x - points[j - 1].x) * seg;
          var y = points[j - 1].y + (points[j].y - points[j - 1].y) * seg;
          t.style.left = (x / SIZE) * 100 + '%';
          t.style.top = (y / SIZE) * 100 + '%';
          if (k < 1) requestAnimationFrame(frame);
          else { t.classList.remove('no-trans'); resolve(); }
        }
        requestAnimationFrame(frame);
      });
    },

    // Scroll so the given square is comfortably in view.
    scrollTo: function (levelId, square, smooth) {
      var board = this.section(levelId).querySelector('.board');
      var scroller = document.getElementById('scroller');
      var c = center(square);
      var rect = board.getBoundingClientRect();
      var sRect = scroller.getBoundingClientRect();
      var y = rect.top - sRect.top + scroller.scrollTop + c.y * rect.height;
      scroller.scrollTo({ top: y - scroller.clientHeight * 0.55, behavior: smooth ? 'smooth' : 'auto' });
    }
  };
})(window.ML);
