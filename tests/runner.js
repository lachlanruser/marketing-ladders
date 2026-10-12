// Tiny in-browser test runner: no install needed.
(function () {
  var tests = [];
  window.test = function (name, fn) { tests.push({ name: name, fn: fn }); };
  window.assert = function (cond, msg) { if (!cond) throw new Error(msg || 'assertion failed'); };
  window.eq = function (actual, expected, msg) {
    var a = JSON.stringify(actual), e = JSON.stringify(expected);
    if (a !== e) throw new Error((msg ? msg + ': ' : '') + 'expected ' + e + ', got ' + a);
  };

  window.runTests = function () {
    var out = document.getElementById('results');
    var passed = 0, failed = 0;
    tests.forEach(function (t) {
      var li = document.createElement('li');
      try {
        t.fn();
        passed++;
        li.className = 'pass';
        li.textContent = '✔ ' + t.name;
      } catch (err) {
        failed++;
        li.className = 'fail';
        li.textContent = '✘ ' + t.name + ' — ' + err.message;
        console.error(t.name, err);
      }
      out.appendChild(li);
    });
    var summary = document.getElementById('summary');
    summary.textContent = passed + ' passed, ' + failed + ' failed';
    summary.className = failed ? 'fail' : 'pass';
    document.title = (failed ? '✘ ' : '✔ ') + summary.textContent;
    window.testResults = { passed: passed, failed: failed };
  };
})();
