// Turn flow: roll -> move -> question -> feedback -> resolve (ladder / snake / stay / return).
(function (ML) {
  var L = ML.logic;
  function $(id) { return document.getElementById(id); }

  var PRAISE = ['Nice!', 'Great job!', 'Spot on!', 'You got it!', 'Correct!'];

  // progress: { levelId: { completed } } (kept in memory for now; saved in slice 5)
  var state = { levelId: null, square: 0, used: [], answered: 0, correct: 0, busy: false, progress: {} };
  var turn = null; // { start, landed, question, shuffled, selected, checked, result }

  function level() { return ML.levels[state.levelId]; }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  // ---------- HUD ----------
  function updateHud() {
    var lv = level();
    var idx = ML.LEVEL_ORDER.indexOf(lv.id);
    $('hudLevel').textContent = 'Level ' + (idx + 1) + ': ' + lv.name;
    document.documentElement.style.setProperty('--theme', lv.theme);
    document.documentElement.style.setProperty('--theme-dark', lv.themeDark || lv.theme);
    $('progressFill').style.width = (state.square / lv.size) * 100 + '%';
    $('hudScore').textContent = '✔ ' + state.correct + '/' + state.answered;
    ML.board.setProgress(lv.id, state.square);
  }

  function say(msg) { $('dockMsg').textContent = msg; }

  function setRollEnabled(on) {
    state.busy = !on;
    $('rollBtn').disabled = !on;
  }

  // ---------- Level ----------
  function startLevel(id, smooth) {
    state.levelId = id;
    state.square = 0;
    state.used = []; // fresh random draw each game: no repeats within a game
    state.answered = 0;
    state.correct = 0;
    refreshLevels();
    updateHud();
    ML.board.placeToken(id, 0);
    ML.board.scrollTo(id, 0, !!smooth);
    say('Roll the dice to start ' + level().name + '!');
    setRollEnabled(true);
  }

  // ---------- Movement ----------
  // Jump straight to a square (used for reduced motion and after ladders/snakes).
  async function travel(to) {
    ML.board.placeToken(state.levelId, to);
    ML.board.scrollTo(state.levelId, to, true);
    await ML.fx.wait(300);
  }

  // Hop circle by circle from one square to another (forwards or backwards).
  async function hops(from, to, duration) {
    var token = ML.board.placeToken(state.levelId, from);
    var step = to > from ? 1 : -1;
    ML.board.scrollTo(state.levelId, to, true);
    for (var sq = from; sq !== to; sq += step) {
      await ML.fx.hop(token, ML.board.tokenPos(state.levelId, sq), ML.board.tokenPos(state.levelId, sq + step),
        { duration: duration, last: sq + step === to });
    }
  }

  // Climb a ladder or slide down a snake's body.
  async function followFeature(type, from, to) {
    var points = ML.board.featurePath(state.levelId, type, from);
    if (!points || ML.fx.reducedMotion()) { await travel(to); return; }
    ML.board.scrollTo(state.levelId, to, true);
    if (type === 'ladder') {
      await ML.board.travelPath(state.levelId, points, 800, function (k) { return k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; });
    } else {
      await ML.board.travelPath(state.levelId, points, 1100, function (k) { return k * k * (3 - 2 * k) * 0.3 + k * k * 0.7; });
    }
    ML.board.placeToken(state.levelId, to);
    await ML.fx.wait(150);
  }

  // ---------- Roll ----------
  async function roll() {
    if (state.busy) return;
    setRollEnabled(false);
    var value = L.rollDie();
    say('Rolling…');
    await ML.fx.rollDice(value);
    ML.fx.drawDie($('die'), value);
    var start = state.square;
    var landed = L.move(start, value, level().size);
    say('You rolled a ' + value + '!');
    await hops(start, landed, 200);
    askQuestion(start, landed);
  }

  // ---------- Question ----------
  function askQuestion(start, landed) {
    var lv = level();
    var picked = L.pickQuestion(ML.questions[lv.id] || [], state.used);
    if (!picked.question) { say('No questions found for this level.'); return; }
    state.used = picked.used;

    var q = picked.question;
    turn = { start: start, landed: landed, question: q, shuffled: L.shuffleOptions(q), selected: null, checked: false };

    // Tags: what's at stake on this square, plus platform and difficulty.
    var tags = $('qTags');
    tags.innerHTML = '';
    var feature = L.featureAt(lv, landed);
    if (landed === lv.size) addTag(tags, '★ Final square: answer right to finish!', 'tag-final');
    else if (feature && feature.type === 'ladder') addTag(tags, '🪜 Ladder: answer right to climb to ' + feature.to, 'tag-ladder');
    else if (feature && feature.type === 'snake') addTag(tags, '🐍 Snake: a wrong answer slides you to ' + feature.to, 'tag-snake');
    addTag(tags, 'Square ' + landed);
    if (q.platform) addTag(tags, q.platform);
    if (q.type === 'scenario') addTag(tags, 'Scenario');

    // Emphasise NOT so negative questions are fair, not sneaky.
    var prompt = $('qPrompt');
    prompt.innerHTML = '';
    q.prompt.split(/\b(NOT)\b/).forEach(function (part) {
      if (part === 'NOT') { var s = document.createElement('strong'); s.className = 'q-not'; s.textContent = 'NOT'; prompt.appendChild(s); }
      else prompt.appendChild(document.createTextNode(part));
    });
    var opts = $('qOptions');
    opts.innerHTML = '';
    turn.shuffled.options.forEach(function (text, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'option';
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-checked', 'false');
      b.textContent = text;
      b.addEventListener('click', function () { select(i); });
      opts.appendChild(b);
    });

    var fb = $('feedback');
    fb.className = 'feedback';
    $('fbMissed').hidden = true;
    $('checkBtn').textContent = 'Check';
    $('checkBtn').disabled = true;
    $('sheet').hidden = false;
    opts.firstChild.focus();
  }

  function addTag(parent, text, cls) {
    var t = document.createElement('span');
    t.className = 'tag' + (cls ? ' ' + cls : '');
    t.textContent = text;
    parent.appendChild(t);
  }

  function select(i) {
    if (turn.checked) return;
    turn.selected = i;
    Array.prototype.forEach.call($('qOptions').children, function (b, j) {
      b.classList.toggle('selected', i === j);
      b.setAttribute('aria-checked', String(i === j));
    });
    $('checkBtn').disabled = false;
  }

  function onCheck() {
    if (!turn) return;
    if (!turn.checked) check();
    else continueTurn();
  }

  function check() {
    turn.checked = true;
    var correct = turn.selected === turn.shuffled.correctIndex;
    state.answered++;
    if (correct) state.correct++;

    Array.prototype.forEach.call($('qOptions').children, function (b, j) {
      b.disabled = true;
      b.classList.remove('selected');
      if (j === turn.shuffled.correctIndex) b.classList.add('correct');
      else if (j === turn.selected) b.classList.add('wrong');
    });

    var result = L.resolveTurn({ start: turn.start, landed: turn.landed, correct: correct, level: level() });
    turn.result = result;

    var title;
    if (correct) {
      if (result.complete) title = 'Correct! Level complete!';
      else if (result.event === 'ladder') title = pick(PRAISE) + ' Up the ladder!';
      else title = pick(PRAISE);
    } else {
      title = result.event === 'snake' ? 'Oh no, a snake!' : 'Not quite';
    }

    $('feedback').className = 'feedback ' + (correct ? 'is-correct' : 'is-wrong');
    $('fbTitle').textContent = title;
    var missed = $('fbMissed');
    if (!correct) {
      missed.textContent = 'Correct answer: ' + turn.shuffled.options[turn.shuffled.correctIndex];
      missed.hidden = false;
    }
    $('fbExpl').textContent = turn.question.explanation;
    $('fbSrc').href = turn.question.sourceUrl;
    $('checkBtn').textContent = 'Continue';
    $('checkBtn').focus();
    updateHud();
  }

  async function continueTurn() {
    var r = turn.result;
    var landed = turn.landed;
    turn = null;
    $('sheet').hidden = true;

    if (r.event === 'ladder' || r.event === 'snake') await followFeature(r.event, landed, r.final);
    else if (r.final !== landed) await hops(landed, r.final, 130); // wrong answer: hop back
    state.square = r.final;
    updateHud();

    if (r.complete) { showComplete(); return; }
    var msgs = {
      ladder: 'Climbed to square ' + r.final + '! Roll again.',
      stay: 'Square ' + r.final + ' is yours. Roll again.',
      snake: 'Slid down to square ' + r.final + '. Shake it off and roll again.',
      'return': (r.final === 0 ? 'Back to the start.' : 'Back to square ' + r.final + '.') + ' Roll again.'
    };
    say(msgs[r.event]);
    setRollEnabled(true);
  }

  // ---------- Modal (level complete, switching levels) ----------
  // actions: [{ label, primary, onClick }]
  function showModal(icon, title, text, actions) {
    $('modalIcon').textContent = icon;
    $('completeTitle').textContent = title;
    $('completeText').textContent = text;
    var box = $('completeActions');
    box.innerHTML = '';
    actions.forEach(function (a) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn ' + (a.primary ? 'btn-primary' : 'btn-secondary');
      b.textContent = a.label;
      b.addEventListener('click', function () { $('complete').hidden = true; a.onClick(); });
      box.appendChild(b);
    });
    $('complete').hidden = false;
    box.firstChild.focus();
  }

  function nextLevelId(id) {
    var i = ML.LEVEL_ORDER.indexOf(id);
    return i >= 0 && i < ML.LEVEL_ORDER.length - 1 ? ML.LEVEL_ORDER[i + 1] : null;
  }

  function showComplete() {
    var lv = level();
    state.progress[lv.id] = { completed: true };
    refreshLevels();
    var score = 'You answered ' + state.correct + ' of ' + state.answered + (state.answered === 1 ? ' question' : ' questions') + ' correctly.';
    var next = nextLevelId(lv.id);
    var actions = [];
    if (next) {
      actions.push({ label: 'Next level: ' + ML.levels[next].name, primary: true, onClick: function () { startLevel(next, true); } });
      actions.push({ label: 'Play again', onClick: function () { startLevel(lv.id); } });
    } else {
      score += ' That\'s every level done!';
      actions.push({ label: 'Play again', primary: true, onClick: function () { startLevel(lv.id); } });
    }
    showModal('🏆', lv.name + ' complete!', score, actions);
    say('Level complete!');
  }

  // ---------- Level unlocking and selection ----------
  // Each section shows whether it's locked, being played, completed or ready to play.
  function refreshLevels() {
    var order = ML.LEVEL_ORDER;
    order.forEach(function (id, i) {
      var unlocked = L.isUnlocked(id, order, state.progress);
      var completed = !!(state.progress[id] && state.progress[id].completed);
      var current = id === state.levelId;
      var label;
      if (!unlocked) label = '🔒 Finish Level ' + i + ' first';
      else if (current) label = '▶ Playing now';
      else if (completed) label = '✓ Completed · tap to replay';
      else label = 'Tap to play';
      ML.board.setStatus(id, { locked: !unlocked, completed: completed, current: current, selectable: unlocked && !current, label: label });
      if (!current) ML.board.setProgress(id, completed ? ML.levels[id].size : -1);
    });
  }

  // Tapping an unlocked level's banner. Confirm first if it would abandon a game in progress.
  function selectLevel(id) {
    if (state.busy) return;
    var name = ML.levels[id].name;
    var inProgress = state.square > 0 && state.square < level().size;
    if (!inProgress) { startLevel(id, true); return; }
    showModal('🎲', 'Switch to ' + name + '?', 'You\'ll lose your place in ' + level().name + ' and start ' + name + ' from the beginning.', [
      { label: 'Play ' + name, primary: true, onClick: function () { startLevel(id, true); } },
      { label: 'Keep playing ' + level().name, onClick: function () {} }
    ]);
  }

  // ---------- Boot ----------
  async function init() {
    ML.fx.drawDie($('die'), 1);
    try {
      await ML.loadLevels();
    } catch (err) {
      say(err.message);
      return;
    }
    ML.board.render($('path'), ML.LEVEL_ORDER, selectLevel);
    $('rollBtn').addEventListener('click', roll);
    $('checkBtn').addEventListener('click', onCheck);
    startLevel(ML.LEVEL_ORDER[0]);
  }

  ML.app = { state: state };
  init();
})(window.ML);
