// Saving: tested against a fake storage backend so it doesn't touch real saved progress.
(function () {
  function fake() {
    var mem = {};
    return { getItem: function (k) { return k in mem ? mem[k] : null; }, setItem: function (k, v) { mem[k] = String(v); }, mem: mem };
  }

  test('storage starts empty', function () {
    var s = ML.storage.create(fake());
    var d = s.load();
    eq([d.bestStreak, d.completed, d.seen, d.newBest], [0, {}, {}, false]);
  });

  test('best streak only goes up, and flags a new best for the home screen', function () {
    var s = ML.storage.create(fake());
    assert(s.recordStreak(3), '3 is a new best');
    assert(!s.recordStreak(2), '2 is not');
    assert(s.recordStreak(5), '5 is a new best');
    var d = s.load();
    eq([d.bestStreak, d.newBest], [5, true]);
    assert(/^\d{4}-\d{2}-\d{2}$/.test(d.bestStreakDate), 'date saved');
    s.clearNewBest();
    eq(s.load().newBest, false);
  });

  test('completed levels and seen questions are remembered', function () {
    var backend = fake();
    ML.storage.create(backend).markCompleted('meta');
    ML.storage.create(backend).setSeen('meta', ['q1', 'q2']);
    var again = ML.storage.create(backend); // e.g. after a page reload
    eq(again.load().completed, { meta: true });
    eq(again.seen('meta'), ['q1', 'q2']);
    eq(again.seen('tiktok'), []);
  });

  test('broken or blocked storage never crashes the game', function () {
    var broken = { getItem: function () { throw new Error('blocked'); }, setItem: function () { throw new Error('blocked'); } };
    var s = ML.storage.create(broken);
    eq(s.load().bestStreak, 0);
    s.recordStreak(4); // must not throw
    var junk = fake(); junk.setItem('climbTheFunnel.v2', '{not json');
    eq(ML.storage.create(junk).load().bestStreak, 0);
  });
})();
