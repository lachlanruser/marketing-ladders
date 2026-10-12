# Marketing Ladder Game — Project Brief

## Core idea
A fun, Duolingo-style game for keeping marketing skills sharp and learning new ones, with interview prep as a second use. The game is a path of themed levels. Each level is a snakes-and-ladders board section with several ladders (and snakes), and every question in a level is about that level's topic. I roll a dice to move, then answer a question that decides whether the move sticks. Landing well climbs a ladder; answering badly slides me down a snake, with a short explanation of what I missed so the fall teaches something.

## Purpose
- Main focus: maintaining existing skills and upskilling.
- Second use: practising before interviews where I may be asked to explain or set up marketing tasks.
- Long term the scope is much wider than paid media (analytics, email, SEO and so on), so levels must be easy to add as data rather than code changes.

## Levels
- The game is a sequence of levels played in order. Each level has a topic name, and all of its questions relate to that topic.
- **V1 levels:** Level 1 is **Paid social** (Meta, TikTok, LinkedIn), Level 2 is **Paid search** (Google Ads).
- Each level's board section contains multiple ladders and multiple snakes, not just one.
- Reaching the top of a level completes it and unlocks the next one.
- Future levels (analytics, email, SEO and so on) are added later by adding data: a question file and a level config.
- Open: whether the levels render as one long continuous path or as separate board screens (see open decisions).

## V1 scope
- Two levels: Paid social, then Paid search.
- Question types: mostly multiple choice, plus scenario questions (e.g. "A client's conversions dropped overnight, what do you check first?").
- Web app, local browser storage, no live API calls.

## Board and turn mechanic
Question-first design: the board only raises the stakes, the question decides the outcome.
1. Roll the dice and move that many squares.
2. Answer a question for the square I landed on, drawn from that level's topic.
3. **Correct:** I keep the square. If it's the foot of a ladder, I climb it.
4. **Wrong:** I return to where my turn started. If it was a snake's head, I slide down the snake.
5. Every answer, right or wrong, shows a short explanation. Every snake slide also shows what was missed.
6. Reaching the top square completes the level.
- Difficulty rises with board position within a level (bands of squares map to easier-to-harder questions).
- Single player only. Exact board size and the number and placement of snakes and ladders per level to be decided when building (start small, around 30 squares per level).

## Look and feel
This is a fun, playful game, not a plain quiz. V1 keeps the artwork simple (no custom illustration or detailed scenes), but it must still feel like Duolingo: bright, friendly and animated.
- **Visuals:** a bright, saturated colour palette, rounded shapes, chunky friendly buttons, clear colour-coded right and wrong states, and a distinct colour theme per level. Simple CSS or SVG shapes are fine for v1.
- **Animations in v1:**
  - Dice roll.
  - Player token hopping square by square.
  - Ladder climb and snake slide, both clearly animated.
  - Correct answer: a happy bounce or pop. Wrong answer: a gentle shake.
  - Level complete: a confetti or celebration moment.
  - Progress shown as an animated bar or path.
- Animations should be short and snappy so they add fun without slowing play.
- Respect the system's reduced-motion setting by toning animations down.
- Sound effects and music are a later addition. If added, browsers block audio until the user taps, so include a start or unmute button.
- Richer art (characters, illustrated scenes, mascot) can come after v1.

## Question format
Stored as a data file, one entry per question:
- `id`, `level` (paid-social | paid-search), `difficulty` (1–5), `type` (multiple_choice | scenario)
- `prompt`, `options` (3–4), `correctIndex`
- `explanation` (shown after every answer)
- `sourceUrl` (official documentation) and `lastVerified` (date)
- `platform` where relevant (Meta, TikTok, LinkedIn, Google)

Content rules:
- Every question needs an official source and a last-verified date, so stale ones are easy to catch.
- Every question in a level must relate to that level's topic.
- Favour concepts and workflows over exact button clicks, which go out of date faster. Paid social changes especially fast.
- No live API calls: questions are written and refreshed in Claude Code sessions using web search, then shipped as data.
- Adding a new level should only mean adding a new question file and a level config (name, theme colour, board layout).

## Progress and storage (v1, rough)
- `Level` config: id, name, order, theme colour, board layout (size, ladders, snakes).
- `Progress` per level: current square, completed (bool), questions answered and correct, last played date. A level is unlocked when the previous one is completed.
- `MissedQuestion`: question ids I got wrong, available to resurface later (optional for v1, see open decisions).
- Local browser storage only. Add an export/backup option later.

## Out of scope for v1
- Levels beyond Paid social and Paid search.
- Multiplayer or leaderboards.
- Mini-games beyond multiple choice and scenario questions (matching, step-ordering and arcade formats come later).
- Accounts, sync across devices, any server.
- Custom illustrations, a mascot, detailed scenes, and sound or music (the bright palette and the animations listed above are in scope).

## Content plan
- Start with about 20 questions per level (40 in total), spread across difficulty bands so every range of board squares has something.
- Build a repeatable review process: periodically ask Claude (with web search) to re-check each question against current documentation and draft replacements for any that are out of date.

## Build approach
- Platform: web app, local browser storage (consistent with the other project apps).
- Model workflow: `/model opusplan`, plan on Opus and build on Sonnet.
- Plan mode before writing code.
- Build in slices: (1) Level 1 board with dice, questions, correct/wrong outcomes and explanations; (2) ladders and snakes with their animations; (3) the bright look and feel and the remaining animations; (4) Level 2, level unlocking and level selection; (5) progress saving.
- Add tests for the board logic (dice moves, ladder/snake triggers, overshooting the final square, wrong-answer return, level unlocking).
- Commit to git at each working stage.
- After the first working version: ask Claude to review its own work for gaps before adding more features.

## Open decisions to confirm while building
- Whether levels are one long continuous board path or separate boards shown one at a time (assumed: separate boards played in order, each unlocking the next).
- Board size per level and the number and placement of ladders and snakes.
- Exact finish rule: must I land exactly on the final square, or can I overshoot?
- Whether questions repeat within a level, and how I avoid seeing the same one too soon.
- Whether missed questions resurface later (built-in spaced repetition) in v1 or later.
- Who writes the first question bank: drafted by Claude Code from official documentation, then spot-checked by me.
