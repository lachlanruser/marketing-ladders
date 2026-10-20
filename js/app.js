// Screens and game flow.
// Home: pick a level. A run then climbs that level first and every other level shuffled after it.
// Turn: roll -> move -> question -> feedback -> resolve (ladder / snake / stay / return).
(function (ML) {
  var L = ML.logic, store = ML.storage;
  function $(id) { return document.getElementById(id); }

  var PRAISE = ['Nice!', 'Great job!', 'Spot on!', 'You got it!', 'Correct!'];

  var state = {
    run: [], runIndex: 0,          // level ids for this run, and which one we're on
    levelId: null, square: 0,
    asked: [],                     // question ids asked in this level this game (never repeated)
    streak: 0,                     // current streak of correct answers (carries across a run)
    runAnswered: 0, runCorrect: 0,
    busy: false,                   // true while the dice/piece is animating
    playing: false
  };
  var turn = null; // { start, landed, question, shuffled, selected, checked, result }

  function level() { return ML.levels[state.levelId]; }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  // ---------- Home screen ----------
  function renderHome() {
    var data = store.load();
    $('bestValue').textContent = data.bestStreak;
    $('bestSub').textContent = data.bestStreak
      ? 'correct in a row' + (data.bestStreakDate ? ' · set ' + formatDate(data.bestStreakDate) : '')
      : 'Answer questions right in a row to set a streak';
    $('bestNew').hidden = !data.newBest;
    if (data.newBest) store.clearNewBest(); // celebrate once

    var box = $('levelCards');
    box.innerHTML = '';
    ML.LEVEL_ORDER.forEach(function (id) {
      var lv = ML.levels[id];
      var pool = (ML.questions[id] || []).filter(function (q) { return !q.flagged; }).length;
      var seen = Math.min(pool, (data.seen[id] || []).length);
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'level-card';
      card.style.setProperty('--theme', lv.theme);
      card.style.setProperty('--theme-dark', lv.themeDark || lv.theme);
      card.innerHTML =
        '<span class="level-card-badge" aria-hidden="true"></span>' +
        '<span class="level-card-text"><span class="level-card-name"></span><span class="level-card-sub"></span></span>' +
        '<span class="level-card-side"></span>';
      card.querySelector('.level-card-badge').textContent = lv.name.charAt(0);
      card.querySelector('.level-card-name').textContent = lv.name;
      card.querySelector('.level-card-sub').textContent = (lv.subtitle ? lv.subtitle + ' · ' : '') + 'seen ' + seen + '/' + pool;
      var side = card.querySelector('.level-card-side');
      side.textContent = data.completed[id] ? '✓' : '▶';
      if (data.completed[id]) side.classList.add('done');
      card.setAttribute('aria-label', 'Start with ' + lv.name + (data.completed[id] ? ', completed' : ''));
      card.addEventListener('click', function () { startRun(id); });
      box.appendChild(card);
    });
  }

  function formatDate(iso) {
    var p = iso.split('-');
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return Number(p[2]) + ' ' + months[Number(p[1]) - 1] + ' ' + p[0];
  }

  function showScreen(name) {
    $('home').hidden = name !== 'home';
    $('play').hidden = name !== 'play';
    state.playing = name === 'play';
  }

  function goHome() {
    turn = null;
    $('sheet').hidden = true;
    $('complete').hidden = true;
    $('toast').hidden = true;
    document.documentElement.style.removeProperty('--theme');
    document.documentElement.style.removeProperty('--theme-dark');
    showScreen('home');
    renderHome();
    window.scrollTo(0, 0);
  }

  // Home button: confirm first if a run is in progress, because leaving ends it.
  function onHome() {
    if (state.busy) return; // wait for the piece to stop moving
    var inProgress = state.runAnswered > 0 || state.square > 0;
    if (!inProgress) { goHome(); return; }
    showModal('🏠', 'Leave this run?', 'Your current streak will end. Your best streak is already saved.', [
      { label: 'Leave', primary: true, onClick: goHome },
      { label: 'Keep playing', onClick: function () {} }
    ]);
  }

  // ---------- Runs ----------
  function startRun(firstId) {
    state.run = L.runOrder(firstId, ML.LEVEL_ORDER);
    state.runIndex = 0;
    state.streak = 0;
    state.runAnswered = 0;
    state.runCorrect = 0;
    ML.board.render($('path'), state.run);
    showScreen('play');
    startLevel(state.run[0], false);
  }

  function startLevel(id, smooth) {
    state.levelId = id;
    state.square = 0;
    state.asked = [];
    state.run.forEach(function (lid, i) {
      if (lid !== id) ML.board.setProgress(lid, i < state.runIndex ? ML.levels[lid].size : -1);
    });
    updateHud();
    ML.board.placeToken(id, 0);
    ML.board.scrollTo(id, 0, !!smooth);
    say('Roll the dice to start ' + level().name + '!');
    setRollEnabled(true);
  }

  // ---------- HUD ----------
  function updateHud() {
    var lv = level();
    $('hudLevel').textContent = lv.name;
    document.documentElement.style.setProperty('--theme', lv.theme);
    document.documentElement.style.setProperty('--theme-dark', lv.themeDark || lv.theme);
    $('progressFill').style.width = (state.square / lv.size) * 100 + '%';
    $('hudStreak').textContent = '🔥 ' + state.streak;
    ML.board.setProgress(lv.id, state.square);
  }

  function say(msg) { $('dockMsg').textContent = msg; }

  function setRollEnabled(on) {
    state.busy = !on;
    $('rollBtn').disabled = !on;
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
    if (!state.playing) return; // left the run mid-roll
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
    var picked = L.pickQuestion(ML.questions[lv.id] || [], store.seen(lv.id), Math.random, state.asked);
    if (!picked.question) { say('No questions found for this level.'); return; }
    store.setSeen(lv.id, picked.used);
    state.asked.push(picked.question.id);

    var q = picked.question;
    turn = { start: start, landed: landed, question: q, shuffled: L.shuffleOptions(q), selected: null, checked: false };

    // Tags: what's at stake on this square, plus platform.
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
    state.busy = false; // the question is up: Home is allowed again
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
    state.runAnswered++;
    if (correct) {
      state.runCorrect++;
      state.streak++;
      store.recordStreak(state.streak); // saved quietly; the best is only shown on the home screen
    } else {
      state.streak = 0;
    }

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
    setRollEnabled(false);

    if (r.event === 'ladder' || r.event === 'snake') await followFeature(r.event, landed, r.final);
    else if (r.final !== landed) await hops(landed, r.final, 130); // wrong answer: hop back
    if (!state.playing) return;
    state.square = r.final;
    updateHud();

    if (r.complete) { levelComplete(); return; }
    var msgs = {
      ladder: 'Climbed to square ' + r.final + '! Roll again.',
      stay: 'Square ' + r.final + ' is yours. Roll again.',
      snake: 'Slid down to square ' + r.final + '. Shake it off and roll again.',
      'return': (r.final === 0 ? 'Back to the start.' : 'Back to square ' + r.final + '.') + ' Roll again.'
    };
    say(msgs[r.event]);
    setRollEnabled(true);
  }

  // ---------- Level and run complete ----------
  async function levelComplete() {
    var lv = level();
    store.markCompleted(lv.id);
    var nextId = state.run[state.runIndex + 1];
    if (!nextId) { runComplete(); return; }

    // Quick "Next up" moment, then climb straight into the next level.
    say(lv.name + ' complete!');
    var toast = $('toast');
    toast.innerHTML = '';
    var big = document.createElement('div');
    big.className = 'toast-title';
    big.textContent = lv.name + ' complete!';
    var small = document.createElement('div');
    small.className = 'toast-sub';
    small.textContent = 'Next up: ' + ML.levels[nextId].name;
    toast.appendChild(big);
    toast.appendChild(small);
    toast.hidden = false;
    await ML.fx.wait(1700);
    toast.hidden = true;
    if (!state.playing) return;
    state.runIndex++;
    startLevel(nextId, true);
  }

  function runComplete() {
    var n = state.run.length;
    var text = 'You climbed all ' + n + ' levels and answered ' + state.runCorrect + ' of ' + state.runAnswered +
      (state.runAnswered === 1 ? ' question' : ' questions') + ' correctly.';
    showModal('🏆', 'Run complete!', text, [{ label: 'Back to home', primary: true, onClick: goHome }]);
    say('Run complete!');
  }

  // ---------- Modal ----------
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

  // ---------- Boot ----------
  async function init() {
    ML.fx.drawDie($('die'), 1);
    try {
      await ML.loadLevels();
    } catch (err) {
      $('levelCards').textContent = err.message;
      return;
    }
    $('rollBtn').addEventListener('click', roll);
    $('checkBtn').addEventListener('click', onCheck);
    $('homeBtn').addEventListener('click', onHome);
    goHome();
  }

  ML.app = { state: state };
  init();
})(window.ML);
