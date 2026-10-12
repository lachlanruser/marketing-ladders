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

  function finished(anim) {
    return new Promise(function (r) { anim.onfinish = r; });
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
      thrower.animate(bounce, { duration: duration, fill: 'forwards' });
      shadow.animate([
        { transform: 'scale(0.2)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1, offset: 0.45 },
        { transform: 'scale(0.6)', opacity: 0.6, offset: 0.62 },
        { transform: 'scale(1)', opacity: 1, offset: 0.78 },
        { transform: 'scale(1)', opacity: 1 }
      ], { duration: duration, fill: 'forwards' });

      await finished(spin);
      cube.style.transform = end;
      spin.cancel();
      // Little "ta-da" pop and the number.
      thrower.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15)' }, { transform: 'scale(1)' }],
        { duration: 260, easing: 'ease-out' });
      label.textContent = value;
      label.classList.add('show');
      await this.wait(550);
      await finished(stage.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220 }));
      stage.hidden = true;
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
