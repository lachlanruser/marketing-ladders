# Marketing Ladders

A Duolingo-style snakes-and-ladders game for practising marketing skills. The full brief is in `CLAUDE.md`.

## Play
Double-click **`index.html`**. It opens in your browser, and there's nothing to install.

## Run the tests
Double-click **`tests.html`**. You get a green or red list of results for the board logic and the question data.

## How a turn works
1. Roll the dice and move (overshooting the last square lands you on it).
2. Answer a question. Difficulty rises with your square, in bands of 6.
3. **Correct:** keep the square, and climb if it's a ladder foot. **Wrong:** go back to where the turn started, or slide down if it's a snake head.
4. Answer the question on the final square correctly to finish the level.

## Add a level
1. Copy `data/levels/paid-social.js` to `data/levels/<new-id>.js` and change the id, name, theme colour, ladders and snakes.
2. Create `data/questions/<new-id>.js` with `ML.registerQuestions('<new-id>', [...])`.
3. Add `'<new-id>'` to `ML.LEVEL_ORDER` in `data/manifest.js`.
4. Open `tests.html` to check that the new level and questions are valid.

## Question format
`id`, `level`, `difficulty` (1–5), `type` (`multiple_choice` | `scenario`), `platform`, `prompt`, `options` (3–4), `correctIndex`, `explanation`, `sourceUrl` (official docs), `lastVerified` (YYYY-MM-DD). Add `flagged: true` to take a question out of play until it's verified.

## Flagged questions (need checking)
None so far. Every question was checked against its official source on 2026-10-13.

## Dev note
`.claude/serve.ps1` is a tiny local web server Claude uses to test the game in its browser pane. You don't need it to play.
