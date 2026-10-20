// Checks the real level configs and question files.
(function () {
  var L = ML.logic;

  ML.LEVEL_ORDER.forEach(function (id) {
    var level = ML.levels[id];
    var questions = ML.questions[id] || [];

    test(id + ': level config loads and is valid', function () {
      assert(level, 'missing data/levels/' + id + '.js');
      ['id', 'name', 'theme', 'size'].forEach(function (k) { assert(level[k], 'missing ' + k); });
      eq(level.id, id);
      eq(L.validateLevel(level), []);
      assert(level.ladders.length >= 2 && level.snakes.length >= 2, 'needs multiple ladders and snakes');
    });

    test(id + ': every question has the required fields', function () {
      var errors = [];
      questions.forEach(function (q) { errors = errors.concat(L.validateQuestion(q, id)); });
      eq(errors, []);
    });

    test(id + ': question ids are unique', function () {
      var ids = questions.map(function (q) { return q.id; });
      eq(ids.length, new Set(ids).size);
    });

    test(id + ': about 40 playable questions', function () {
      var playable = questions.filter(function (q) { return !q.flagged; });
      assert(playable.length >= 36, 'only ' + playable.length + ' playable questions');
    });

    // ---- Answer quality: the right answer shouldn't be guessable from its shape ----
    function lengths(q) { return q.options.map(function (o) { return o.length; }); }
    function avg(arr) { return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length; }

    test(id + ': option lengths are balanced (each 0.6x-1.4x of the average)', function () {
      var bad = questions.filter(function (q) {
        var l = lengths(q), m = avg(l);
        return l.some(function (n) { return n > m * 1.4 || n < m * 0.6; });
      }).map(function (q) { return q.id; });
      eq(bad, [], 'unbalanced options');
    });

    test(id + ': correct answer is the longest in at most 30% of questions, and the shortest in at least one', function () {
      var longest = 0, shortest = 0;
      questions.forEach(function (q) {
        var l = lengths(q), c = l[q.correctIndex];
        if (c === Math.max.apply(null, l)) longest++;
        if (c === Math.min.apply(null, l)) shortest++;
      });
      assert(longest <= Math.floor(questions.length * 0.3), 'correct is longest in ' + longest + ' of ' + questions.length);
      assert(shortest >= 1, 'correct is never the shortest');
    });

    test(id + ': at least 1 in 5 questions is a trick question', function () {
      var n = questions.filter(function (q) { return q.trick; }).length;
      assert(n >= Math.ceil(questions.length / 5), 'only ' + n + ' marked trick: true');
    });

    test(id + ': "always", "never" and "only" don\'t appear only in wrong answers', function () {
      var absolute = /\b(always|never|only)\b/i;
      var bad = questions.filter(function (q) {
        var wrongHas = q.options.some(function (o, i) { return i !== q.correctIndex && absolute.test(o); });
        return wrongHas && !absolute.test(q.options[q.correctIndex]);
      }).map(function (q) { return q.id; });
      eq(bad, [], 'give-away wording');
    });

    test(id + ': average 3-6 rolls per level at 75-85% accuracy (2,000 games each)', function () {
      [0.75, 0.85].forEach(function (acc) {
        var rng = L.seededRng(42), total = 0, games = 2000;
        for (var g = 0; g < games; g++) total += L.simulate(level, acc, rng);
        var avg = total / games;
        assert(avg >= 3 && avg <= 6, 'avg ' + avg.toFixed(2) + ' turns at ' + acc * 100 + '%');
      });
    });
  });
})();
