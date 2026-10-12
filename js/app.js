// Turn flow: roll -> move -> question -> feedback -> resolve (ladder / snake / stay / return).
(function (ML) {
  var L = ML.logic;
  function $(id) { return document.getElementById(id); }

  var PRAISE = ['Nice!', 'Great job!', 'Spot on!', 'You got it!', 'Correct!'];

  var state = { levelId: null, square: 0, used: {}, answered: 0, correct: 0, busy: false };
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
  }

  function say(msg) { $('dockMsg').textContent = msg; }

  function setRollEnabled(on) {
    state.busy = !on;
    $('rollBtn').disabled = !on;
  }

  // ---------- Level ----------
  function startLevel(id) {
    state.levelId = id;
    state.square = 0;
    state.answered = 0;
    state.correct = 0;
    updateHud();
    ML.board.placeToken(id, 0);
    ML.board.scrollTo(id, 0, false);
    say('Roll the dice to start ' + level().name + '!');
    setRollEnabled(true);
  }

  // ---------- Movement ----------
  async function travel(to) {
    ML.board.placeToken(state.levelId, to);
    ML.board.scrollTo(state.levelId, to, true);
    await ML.fx.wait(450);
  }

  // ---------- Roll ----------
  async function roll() {
    if (state.busy) return;
    setRollEnabled(false);
    var value = L.rollDie();
    ML.fx.drawDie($('die'), value);
    var start = state.square;
    var landed = L.move(start, value, level().size);
    say('You rolled a ' + value + '!');
    await travel(landed);
    askQuestion(start, landed);
  }

  // ---------- Question ----------
  function askQuestion(start, landed) {
    var lv = level();
    var picked = L.pickQuestion(ML.questions[lv.id] || [], state.used[lv.id] || [], L.difficultyFor(landed, lv.size));
    if (!picked.question) { say('No questions found for this level.'); return; }
    state.used[lv.id] = picked.used;

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
    addTag(tags, 'Difficulty ' + '●'.repeat(q.difficulty) + '○'.repeat(5 - q.difficulty));

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

    if (r.final !== landed) await travel(r.final);
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

  // ---------- Level complete ----------
  function showComplete() {
    var lv = level();
    $('completeTitle').textContent = lv.name + ' complete!';
    $('completeText').textContent = 'You answered ' + state.correct + ' of ' + state.answered + ' questions correctly.';
    var actions = $('completeActions');
    actions.innerHTML = '';
    var again = document.createElement('button');
    again.type = 'button';
    again.className = 'btn btn-primary';
    again.textContent = 'Play again';
    again.addEventListener('click', function () {
      $('complete').hidden = true;
      startLevel(lv.id);
    });
    actions.appendChild(again);
    $('complete').hidden = false;
    again.focus();
    say('Level complete!');
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
    ML.board.render($('path'), ML.LEVEL_ORDER);
    $('rollBtn').addEventListener('click', roll);
    $('checkBtn').addEventListener('click', onCheck);
    startLevel(ML.LEVEL_ORDER[0]);
  }

  ML.app = { state: state };
  init();
})(window.ML);
