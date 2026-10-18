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

  // Cube rotation that brings each face to the front (faces are placed in buildCube).
  var FACE_ROT = { 1: [0, 0], 2: [0, -90], 3: [-90, 0], 4: [90, 0], 5: [0, 90], 6: [0, 180] };
  var FACE_POS = {
    1: 'rotateY(0deg)', 2: 'rotateY(90deg)', 3: 'rotateX(90deg)',
    4: 'rotateX(-90deg)', 5: 'rotateY(-90deg)', 6: 'rotateY(180deg)'
  };

  function buildCube(cube) {
    if (cube.childElementCount) return;
    // Solid inner core: fills the gaps at the rounded edges and corners, so the
    // board never shows through the dice while it tumbles.
    for (var c = 1; c <= 6; c++) {
      var core = document.createElement('div');
      core.className = 'cube-core';
      core.style.transform = FACE_POS[c] + ' translateZ(calc(var(--half) - 4px))';
      cube.appendChild(core);
    }
    for (var v = 1; v <= 6; v++) {
      var face = document.createElement('div');
      face.className = 'cube-face';
      face.style.transform = FACE_POS[v] + ' translateZ(var(--half))';
      PIPS[v].forEach(function (p) {
        var pip = document.createElement('span');
        pip.className = 'cube-pip';
        pip.style.gridRow = p[0];
        pip.style.gridColumn = p[1];
        face.appendChild(pip);
      });
      cube.appendChild(face);
    }
  }

  // Resolves when the animation ends, with a timer fallback in case the browser pauses
  // animations (e.g. the tab is in the background).
  function finished(anim, ms) {
    return new Promise(function (r) {
      var done = false;
      function finish() { if (!done) { done = true; r(); } }
      anim.onfinish = finish;
      setTimeout(finish, (ms || 0) + 150);
    });
  }

  ML.fx = {
    reducedMotion: function () {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },

    wait: function (ms) {
      return new Promise(function (r) { setTimeout(r, ms); });
    },

    // Big 3D dice thrown into the middle of the screen; resolves once it has landed on `value`.
    rollDice: async function (value) {
      var stage = document.getElementById('diceStage');
      var thrower = document.getElementById('diceThrow');
      var cube = document.getElementById('cube');
      var shadow = document.getElementById('diceShadow');
      var label = document.getElementById('diceLabel');
      var backdrop = document.getElementById('diceBackdrop');
      buildCube(cube);
      var rot = FACE_ROT[value];
      var end = 'rotateX(' + rot[0] + 'deg) rotateY(' + rot[1] + 'deg)';
      label.textContent = '';
      label.classList.remove('show');
      stage.hidden = false;

      if (this.reducedMotion()) {
        cube.style.transform = end;
        label.textContent = value;
        label.classList.add('show');
        await this.wait(700);
        stage.hidden = true;
        return;
      }

      // Extra whole turns (multiples of 360) keep the final face while making it tumble.
      var spinX = 360 * (2 + Math.floor(Math.random() * 2)) + rot[0];
      var spinY = 360 * (2 + Math.floor(Math.random() * 2)) + rot[1];
      var startX = Math.random() * 90, startY = Math.random() * 90;
      var duration = 1600;

      var spin = cube.animate([
        { transform: 'rotateX(' + startX + 'deg) rotateY(' + startY + 'deg)' },
        { transform: 'rotateX(' + spinX + 'deg) rotateY(' + spinY + 'deg)' }
      ], { duration: duration, easing: 'cubic-bezier(0.15, 0.6, 0.25, 1)', fill: 'forwards' });

      // Thrown in from above, two bounces, settles.
      var bounce = [
        { transform: 'translateY(-75vh) scale(0.7)', offset: 0 },
        { transform: 'translateY(0) scale(1)', offset: 0.45, easing: 'ease-out' },
        { transform: 'translateY(-70px) scale(1)', offset: 0.62, easing: 'ease-in' },
        { transform: 'translateY(0) scale(1)', offset: 0.78, easing: 'ease-out' },
        { transform: 'translateY(-18px) scale(1)', offset: 0.88, easing: 'ease-in' },
        { transform: 'translateY(0) scale(1)', offset: 1 }
      ];
      var throwAnim = thrower.animate(bounce, { duration: duration, fill: 'forwards' });
      var shadowAnim = shadow.animate([
        { transform: 'scale(0.2)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1, offset: 0.45 },
        { transform: 'scale(0.6)', opacity: 0.6, offset: 0.62 },
        { transform: 'scale(1)', opacity: 1, offset: 0.78 },
        { transform: 'scale(1)', opacity: 1 }
      ], { duration: duration, fill: 'forwards' });

      await finished(spin, duration);
      cube.style.transform = end;
      spin.cancel();
      throwAnim.cancel();
      // Little "ta-da" pop and the number.
      thrower.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }],
        { duration: 260, easing: 'ease-out' });
      label.textContent = value;
      label.classList.add('show');
      await this.wait(550);

      // Exit: shrink the dice away and fade only the flat backdrop. Fading the whole stage
      // would flatten the 3D cube and make it look see-through for a moment.
      var exitMs = 220;
      thrower.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], { duration: exitMs, easing: 'ease-in', fill: 'forwards' });
      shadowAnim.cancel();
      shadow.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], { duration: exitMs, easing: 'ease-in', fill: 'forwards' });
      label.classList.remove('show');
      await finished(backdrop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: exitMs, fill: 'forwards' }), exitMs);
      stage.hidden = true;
      // Clear finished animations so they don't pile up between rolls.
      [thrower, shadow, backdrop].forEach(function (el) {
        el.getAnimations().forEach(function (a) { a.cancel(); });
      });
    },

    // One hop of the playing piece between two positions ({left, top} CSS percentages).
    // opts: { duration, last (bigger squash on the final landing) }
    hop: async function (token, from, to, opts) {
      opts = opts || {};
      var duration = opts.duration || 200;
      var body = token.querySelector('.token-body');
      var move = token.animate(
        [{ left: from.left, top: from.top }, { left: to.left, top: to.top }],
        { duration: duration, easing: 'linear', fill: 'forwards' }
      );
      if (!this.reducedMotion()) {
        var lift = token.offsetWidth * 0.85;  // arc height scales with the piece
        var squash = opts.last ? 'scale(1.3, 0.72)' : 'scale(1.14, 0.86)';
        body.animate([
          { transform: 'translateY(0) scale(1, 1)' },
          { transform: 'translateY(' + -lift + 'px) scale(0.94, 1.08)', offset: 0.45, easing: 'ease-in' },
          { transform: 'translateY(0) scale(1, 1)', offset: 0.78 },
          { transform: 'translateY(0) ' + squash, offset: 0.88 },
          { transform: 'translateY(0) scale(1, 1)' }
        ], { duration: duration, easing: 'ease-out' });
      }
      await finished(move, duration);
      token.style.left = to.left;
      token.style.top = to.top;
      move.cancel();
      if (opts.last && !this.reducedMotion()) {
        // A little settle wobble after the final, bigger squash.
        await finished(body.animate([
          { transform: 'scale(1.3, 0.72)' }, { transform: 'scale(0.92, 1.1)' }, { transform: 'scale(1, 1)' }
        ], { duration: 220, easing: 'ease-out' }), 220);
      }
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
