(function () {
  var L = ML.logic;
  // A small fixed board, so these tests don't depend on the real level data.
  var board = { id: 't', size: 30, ladders: [[4, 14], [11, 22]], snakes: [[15, 5], [29, 18]] };

  // ---- Dice moves ----
  test('rollDie always returns 1-6', function () {
    var rng = L.seededRng(1);
    var seen = {};
    for (var i = 0; i < 1000; i++) {
      var r = L.rollDie(rng);
      assert(r >= 1 && r <= 6 && r === Math.floor(r), 'bad roll ' + r);
      seen[r] = true;
    }
    eq(Object.keys(seen).length, 6, 'every face appears');
  });

  test('rollDie maps rng edges to 1 and 6', function () {
    eq(L.rollDie(function () { return 0; }), 1);
    eq(L.rollDie(function () { return 0.9999; }), 6);
  });

  test('move adds the roll', function () {
    eq(L.move(0, 3, 30), 3);
    eq(L.move(10, 6, 30), 16);
  });

  // ---- Overshooting ----
  test('overshooting the final square lands on it', function () {
    eq(L.move(27, 6, 30), 30);
    eq(L.move(29, 1, 30), 30);
    eq(L.move(25, 5, 30), 30);
  });

  // ---- Ladder and snake triggers ----
  test('featureAt finds ladders and snakes, null elsewhere', function () {
    eq(L.featureAt(board, 4).type, 'ladder');
    eq(L.featureAt(board, 15).type, 'snake');
    eq(L.featureAt(board, 14), null, 'ladder top is not a trigger');
    eq(L.featureAt(board, 5), null, 'snake tail is not a trigger');
  });

  test('correct answer on a ladder foot climbs it', function () {
    var r = L.resolveTurn({ start: 1, landed: 4, correct: true, level: board });
    eq([r.final, r.event], [14, 'ladder']);
  });

  test('wrong answer on a ladder foot returns to turn start (no climb)', function () {
    var r = L.resolveTurn({ start: 1, landed: 4, correct: false, level: board });
    eq([r.final, r.event], [1, 'return']);
  });

  test('wrong answer on a snake head slides to its tail', function () {
    var r = L.resolveTurn({ start: 12, landed: 15, correct: false, level: board });
    eq([r.final, r.event], [5, 'snake']);
  });

  test('correct answer on a snake head stays safe', function () {
    var r = L.resolveTurn({ start: 12, landed: 15, correct: true, level: board });
    eq([r.final, r.event], [15, 'stay']);
  });

  // ---- Wrong-answer return ----
  test('wrong answer on a plain square returns to turn start', function () {
    var r = L.resolveTurn({ start: 7, landed: 10, correct: false, level: board });
    eq([r.final, r.event, r.complete], [7, 'return', false]);
  });

  test('wrong answer from the start pad returns to 0', function () {
    var r = L.resolveTurn({ start: 0, landed: 3, correct: false, level: board });
    eq(r.final, 0);
  });

  test('correct answer on a plain square keeps it', function () {
    var r = L.resolveTurn({ start: 7, landed: 10, correct: true, level: board });
    eq([r.final, r.event], [10, 'stay']);
  });

  // ---- Finishing ----
  test('correct answer on the final square completes the level', function () {
    var r = L.resolveTurn({ start: 27, landed: 30, correct: true, level: board });
    eq([r.final, r.complete], [30, true]);
  });

  test('wrong answer on the final square does not complete', function () {
    var r = L.resolveTurn({ start: 27, landed: 30, correct: false, level: board });
    eq([r.final, r.complete], [27, false]);
  });

  test('a ladder reaching the final square completes the level', function () {
    var b = { size: 30, ladders: [[20, 30]], snakes: [] };
    var r = L.resolveTurn({ start: 17, landed: 20, correct: true, level: b });
    eq([r.final, r.event, r.complete], [30, 'ladder', true]);
  });

  // ---- Question picking (fully random, no repeats within a game) ----
  var pool = [
    { id: 'a', difficulty: 1 }, { id: 'b', difficulty: 1 }, { id: 'c', difficulty: 3 },
    { id: 'd', difficulty: 5 }, { id: 'x', difficulty: 1, flagged: true }
  ];

  test('pickQuestion draws from every difficulty with equal chance', function () {
    var counts = { a: 0, b: 0, c: 0, d: 0 }, rng = L.seededRng(3);
    for (var i = 0; i < 4000; i++) counts[L.pickQuestion(pool, [], rng).question.id]++;
    Object.keys(counts).forEach(function (id) {
      assert(counts[id] > 850 && counts[id] < 1150, id + ' picked ' + counts[id] + ' times of 4000');
    });
  });

  test('pickQuestion never repeats until the pool is used up, then resets', function () {
    var used = [], seen = [];
    for (var i = 0; i < 4; i++) {
      var r = L.pickQuestion(pool, used, L.seededRng(i));
      assert(seen.indexOf(r.question.id) === -1, 'repeat of ' + r.question.id);
      seen.push(r.question.id);
      used = r.used;
    }
    eq(seen.slice().sort(), ['a', 'b', 'c', 'd']);
    var again = L.pickQuestion(pool, used, L.seededRng(9));
    eq(again.used.length, 1, 'pool reset after all used');
  });

  test('pickQuestion skips flagged questions', function () {
    for (var i = 0; i < 50; i++) {
      assert(L.pickQuestion(pool, [], L.seededRng(i)).question.id !== 'x');
    }
  });

  test('shuffleOptions keeps the correct answer tracked', function () {
    var q = { options: ['w', 'x', 'RIGHT', 'z'], correctIndex: 2 };
    for (var i = 0; i < 20; i++) {
      var s = L.shuffleOptions(q, L.seededRng(i));
      eq(s.options[s.correctIndex], 'RIGHT');
      eq(s.options.slice().sort(), ['RIGHT', 'w', 'x', 'z']);
    }
  });

  // ---- Level unlocking ----
  test('first level in the order is always unlocked', function () {
    assert(L.isUnlocked('a', ['a', 'b'], {}));
  });

  test('next level locked until the previous one is completed', function () {
    assert(!L.isUnlocked('b', ['a', 'b'], {}));
    assert(!L.isUnlocked('b', ['a', 'b'], { a: { completed: false } }));
    assert(L.isUnlocked('b', ['a', 'b'], { a: { completed: true } }));
  });

  test('unlocking follows the current order (shuffle-ready)', function () {
    var progress = { b: { completed: true } };
    assert(L.isUnlocked('a', ['b', 'a'], progress), 'a follows completed b');
    assert(!L.isUnlocked('a', ['c', 'a'], progress), 'a follows incomplete c');
  });

  // ---- Level validation ----
  test('validateLevel accepts a good board', function () {
    eq(L.validateLevel(board), []);
  });

  test('validateLevel rejects bad boards', function () {
    assert(L.validateLevel({ size: 30, ladders: [[10, 5]], snakes: [] }).length, 'ladder going down');
    assert(L.validateLevel({ size: 30, ladders: [], snakes: [[5, 10]] }).length, 'snake going up');
    assert(L.validateLevel({ size: 30, ladders: [[5, 10]], snakes: [[5, 1]] }).length, 'shared square');
    assert(L.validateLevel({ size: 30, ladders: [[5, 10]], snakes: [[10, 2]] }).length, 'chained');
    assert(L.validateLevel({ size: 30, ladders: [], snakes: [[30, 2]] }).length, 'snake on final square');
  });
})();
