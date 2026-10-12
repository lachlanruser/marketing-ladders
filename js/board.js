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

  // Ladders and snakes, drawn in a 600x600 coordinate space over the board.
  function buildOverlay(level) {
    var svg = svgEl('svg', { class: 'overlay', viewBox: '0 0 600 600', preserveAspectRatio: 'none' });
    function pt(n) { var c = center(n); return { x: c.x * 600, y: c.y * 600 }; }
    level.ladders.forEach(function (l) {
      var a = pt(l[0]), b = pt(l[1]);
      svg.appendChild(svgEl('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y, stroke: '#58cc02', 'stroke-width': 10, 'stroke-linecap': 'round', opacity: 0.8 }));
    });
    level.snakes.forEach(function (s) {
      var a = pt(s[0]), b = pt(s[1]);
      svg.appendChild(svgEl('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y, stroke: '#ff4b4b', 'stroke-width': 10, 'stroke-linecap': 'round', 'stroke-dasharray': '4 18', opacity: 0.8 }));
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
