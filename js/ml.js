// Global namespace + data registration.
// Classic scripts (not ES modules) so the game works when index.html is opened straight from disk.
window.ML = window.ML || {};

(function (ML) {
  ML.levels = {};
  ML.questions = {};

  // Called by data/levels/<id>.js
  ML.registerLevel = function (config) {
    ML.levels[config.id] = config;
  };

  // Called by data/questions/<id>.js
  ML.registerQuestions = function (levelId, list) {
    ML.questions[levelId] = list;
  };

  ML.loadScript = function (src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  };

  // Loads the level config + question file for every id in data/manifest.js.
  ML.loadLevels = async function (base) {
    base = base || '';
    for (var i = 0; i < ML.LEVEL_ORDER.length; i++) {
      var id = ML.LEVEL_ORDER[i];
      await ML.loadScript(base + 'data/levels/' + id + '.js');
      await ML.loadScript(base + 'data/questions/' + id + '.js');
    }
  };
})(window.ML);
