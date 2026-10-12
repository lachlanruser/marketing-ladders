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

    test(id + ': about 20 questions, every difficulty band covered', function () {
      var playable = questions.filter(function (q) { return !q.flagged; });
      assert(playable.length >= 18, 'only ' + playable.length + ' playable questions');
      for (var d = 1; d <= 5; d++) {
        assert(playable.some(function (q) { return q.difficulty === d; }), 'no difficulty ' + d);
      }
    });

    test(id + ': average 5-10 turns per level at 75-85% accuracy (2,000 games each)', function () {
      [0.75, 0.85].forEach(function (acc) {
        var rng = L.seededRng(42), total = 0, games = 2000;
        for (var g = 0; g < games; g++) total += L.simulate(level, acc, rng);
        var avg = total / games;
        assert(avg >= 5 && avg <= 10, 'avg ' + avg.toFixed(2) + ' turns at ' + acc * 100 + '%');
      });
    });
  });
})();
