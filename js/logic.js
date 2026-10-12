// Pure game rules. No DOM access, so everything here is unit-tested in tests.html.
// Squares are numbered 0 (start pad) to level.size (final square).
(function (ML) {
  var DIFFICULTY_BANDS = 5;

  function rollDie(rng) {
    rng = rng || Math.random;
    return 1 + Math.floor(rng() * 6);
  }

  // Overshooting the final square is allowed: you land on it.
  function move(from, roll, size) {
    return Math.min(from + roll, size);
  }

  function featureAt(level, square) {
    for (var i = 0; i < level.ladders.length; i++) {
      if (level.ladders[i][0] === square) return { type: 'ladder', from: square, to: level.ladders[i][1] };
    }
    for (var j = 0; j < level.snakes.length; j++) {
      if (level.snakes[j][0] === square) return { type: 'snake', from: square, to: level.snakes[j][1] };
    }
    return null;
  }

  // Decide where the token ends up after answering.
  // event: 'ladder' | 'stay' | 'snake' | 'return'; complete is true when final === size.
  function resolveTurn(opts) {
    var level = opts.level;
    var feature = featureAt(level, opts.landed);
    var final, event;
    if (opts.correct) {
      if (feature && feature.type === 'ladder') { final = feature.to; event = 'ladder'; }
      else { final = opts.landed; event = 'stay'; }
    } else {
      if (feature && feature.type === 'snake') { final = feature.to; event = 'snake'; }
      else { final = opts.start; event = 'return'; }
    }
    return { final: final, event: event, feature: feature, complete: final === level.size };
  }

  // Bands of squares map to difficulty 1-5 (30 squares: 1-6 -> 1, ..., 25-30 -> 5).
  function difficultyFor(square, size) {
    var band = Math.ceil(square / (size / DIFFICULTY_BANDS));
    return Math.max(1, Math.min(DIFFICULTY_BANDS, band));
  }

  // Pick a random unused question, closest to the target difficulty.
  // When every question has been used, the pool resets.
  // Returns { question, used } where used is the new list of used ids.
  function pickQuestion(pool, usedIds, targetDifficulty, rng) {
    rng = rng || Math.random;
    var playable = pool.filter(function (q) { return !q.flagged; });
    if (!playable.length) return { question: null, used: usedIds || [] };
    var used = (usedIds || []).filter(function (id) {
      return playable.some(function (q) { return q.id === id; });
    });
    var available = playable.filter(function (q) { return used.indexOf(q.id) === -1; });
    if (!available.length) { used = []; available = playable; }

    var best = Infinity;
    available.forEach(function (q) { best = Math.min(best, Math.abs(q.difficulty - targetDifficulty)); });
    var closest = available.filter(function (q) { return Math.abs(q.difficulty - targetDifficulty) === best; });
    var question = closest[Math.floor(rng() * closest.length)];
    return { question: question, used: used.concat(question.id) };
  }

  // Shuffle answer order for display so the right answer isn't always in the same slot.
  // Returns { options, correctIndex } for the shuffled order.
  function shuffleOptions(question, rng) {
    rng = rng || Math.random;
    var order = question.options.map(function (_, i) { return i; });
    for (var i = order.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = order[i]; order[i] = order[j]; order[j] = t;
    }
    return {
      options: order.map(function (i) { return question.options[i]; }),
      correctIndex: order.indexOf(question.correctIndex)
    };
  }

  // Unlocking uses the *current* path order, so it still works if levels are shuffled later.
  function isUnlocked(levelId, order, progress) {
    var i = order.indexOf(levelId);
    if (i === -1) return false;
    if (i === 0) return true;
    var prev = progress && progress[order[i - 1]];
    return !!(prev && prev.completed);
  }

  function validateLevel(level) {
    var errors = [];
    var starts = {};
    function checkStart(sq, label) {
      if (sq <= 0 || sq >= level.size) errors.push(label + ' starts outside 1..' + (level.size - 1));
      if (starts[sq]) errors.push('Square ' + sq + ' has two features');
      starts[sq] = true;
    }
    (level.ladders || []).forEach(function (l) {
      checkStart(l[0], 'Ladder ' + l[0]);
      if (!(l[1] > l[0])) errors.push('Ladder ' + l[0] + ' must go up');
      if (l[1] > level.size) errors.push('Ladder ' + l[0] + ' goes past the board');
    });
    (level.snakes || []).forEach(function (s) {
      checkStart(s[0], 'Snake ' + s[0]);
      if (!(s[1] < s[0])) errors.push('Snake ' + s[0] + ' must go down');
      if (s[1] < 0) errors.push('Snake ' + s[0] + ' goes below the start');
    });
    // No chains: a ladder top or snake tail must not be another feature's start.
    (level.ladders || []).concat(level.snakes || []).forEach(function (f) {
      if (starts[f[1]]) errors.push('Square ' + f[1] + ' is both an end and a start');
    });
    return errors;
  }

  function validateQuestion(q, levelId) {
    var errors = [];
    var need = ['id', 'level', 'difficulty', 'type', 'prompt', 'options', 'correctIndex', 'explanation', 'sourceUrl', 'lastVerified'];
    need.forEach(function (k) { if (q[k] === undefined || q[k] === '') errors.push(q.id + ': missing ' + k); });
    if (q.level !== levelId) errors.push(q.id + ': level should be ' + levelId);
    if (!(q.difficulty >= 1 && q.difficulty <= 5)) errors.push(q.id + ': difficulty must be 1-5');
    if (['multiple_choice', 'scenario'].indexOf(q.type) === -1) errors.push(q.id + ': bad type');
    if (!Array.isArray(q.options) || q.options.length < 3 || q.options.length > 4) errors.push(q.id + ': needs 3-4 options');
    else if (!(q.correctIndex >= 0 && q.correctIndex < q.options.length)) errors.push(q.id + ': correctIndex out of range');
    if (q.trick !== undefined && typeof q.trick !== 'boolean') errors.push(q.id + ': trick must be true/false');
    if (!/^https:\/\//.test(q.sourceUrl || '')) errors.push(q.id + ': sourceUrl must be https');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(q.lastVerified || '')) errors.push(q.id + ': lastVerified must be YYYY-MM-DD');
    return errors;
  }

  // Play one level with a fixed answer accuracy; returns the number of turns taken.
  function simulate(level, accuracy, rng, maxTurns) {
    rng = rng || Math.random;
    maxTurns = maxTurns || 500;
    var square = 0;
    for (var turn = 1; turn <= maxTurns; turn++) {
      var landed = move(square, rollDie(rng), level.size);
      var r = resolveTurn({ start: square, landed: landed, correct: rng() < accuracy, level: level });
      square = r.final;
      if (r.complete) return turn;
    }
    return maxTurns;
  }

  // Seeded RNG for repeatable tests and simulations.
  function seededRng(seed) {
    var s = seed >>> 0;
    return function () {
      s = (s + 0x6D2B79F5) >>> 0;
      var t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  ML.logic = {
    rollDie: rollDie,
    move: move,
    featureAt: featureAt,
    resolveTurn: resolveTurn,
    difficultyFor: difficultyFor,
    pickQuestion: pickQuestion,
    shuffleOptions: shuffleOptions,
    isUnlocked: isUnlocked,
    validateLevel: validateLevel,
    validateQuestion: validateQuestion,
    simulate: simulate,
    seededRng: seededRng
  };
})(window.ML);
