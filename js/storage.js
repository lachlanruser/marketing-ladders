// Saved progress for this browser: best streak, completed levels, and which questions have been seen.
// Everything is wrapped in try/catch: if storage is blocked (e.g. private mode) the game still works,
// it just won't remember anything between visits.
(function (ML) {
  var KEY = 'climbTheFunnel.v2';

  function blank() {
    return { bestStreak: 0, bestStreakDate: null, newBest: false, completed: {}, seen: {} };
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  // backend: anything with getItem/setItem (localStorage, or a fake in tests).
  function create(backend) {
    function load() {
      var data = blank();
      try {
        var raw = backend && backend.getItem(KEY);
        var saved = raw ? JSON.parse(raw) : {};
        if (typeof saved.bestStreak === 'number') data.bestStreak = saved.bestStreak;
        if (saved.bestStreakDate) data.bestStreakDate = saved.bestStreakDate;
        data.newBest = !!saved.newBest;
        if (saved.completed && typeof saved.completed === 'object') data.completed = saved.completed;
        if (saved.seen && typeof saved.seen === 'object') data.seen = saved.seen;
      } catch (e) { /* unreadable or blocked: start fresh */ }
      return data;
    }

    function save(data) {
      try { backend.setItem(KEY, JSON.stringify(data)); return true; } catch (e) { return false; }
    }

    function update(fn) { var d = load(); fn(d); save(d); return d; }

    return {
      load: load,
      // Returns true if this streak is a new best (and saves it, flagged for the home screen).
      recordStreak: function (streak) {
        var isBest = false;
        update(function (d) {
          if (streak > d.bestStreak) { d.bestStreak = streak; d.bestStreakDate = today(); d.newBest = true; isBest = true; }
        });
        return isBest;
      },
      clearNewBest: function () { update(function (d) { d.newBest = false; }); },
      markCompleted: function (levelId) { update(function (d) { d.completed[levelId] = true; }); },
      setSeen: function (levelId, ids) { update(function (d) { d.seen[levelId] = ids.slice(); }); },
      seen: function (levelId) { return load().seen[levelId] || []; }
    };
  }

  function defaultBackend() {
    try {
      var ls = window.localStorage;
      var probe = KEY + '.probe';
      ls.setItem(probe, '1');
      ls.removeItem(probe);
      return ls;
    } catch (e) {
      // Fall back to memory for this visit only.
      var mem = {};
      return { getItem: function (k) { return k in mem ? mem[k] : null; }, setItem: function (k, v) { mem[k] = String(v); } };
    }
  }

  ML.storage = create(defaultBackend());
  ML.storage.create = create;
})(window.ML);
