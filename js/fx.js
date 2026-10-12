// Visual effects and small animation helpers.
(function (ML) {
  // Pip positions on a 3x3 grid (row, col) for each face.
  var PIPS = {
    1: [[2, 2]],
    2: [[1, 1], [3, 3]],
    3: [[1, 1], [2, 2], [3, 3]],
    4: [[1, 1], [1, 3], [3, 1], [3, 3]],
    5: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3]],
    6: [[1, 1], [1, 3], [2, 1], [2, 3], [3, 1], [3, 3]]
  };

  ML.fx = {
    reducedMotion: function () {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    wait: function (ms) {
      return new Promise(function (r) { setTimeout(r, ms); });
    },

    drawDie: function (dieEl, value) {
      dieEl.innerHTML = '';
      PIPS[value].forEach(function (p) {
        var pip = document.createElement('span');
        pip.className = 'pip';
        pip.style.gridRow = p[0];
        pip.style.gridColumn = p[1];
        dieEl.appendChild(pip);
      });
    }
  };
})(window.ML);
