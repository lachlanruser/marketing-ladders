ML.registerLevel({
  id: 'paid-search',
  name: 'Paid search',
  subtitle: 'Google Ads',
  theme: '#58cc02',
  themeDark: '#46a302',
  size: 30,
  // Positions are chosen for this level's winding path (js/path.js) so that no ladder or
  // snake crosses another or passes over a circle; tests/path.test.js checks this.
  ladders: [[6, 14], [10, 18], [19, 26]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[9, 3], [17, 11], [29, 23]],
  // Path shape: seed picks the quirky bend pattern. Optional: amplitude: [min, max], bendHeight: [min, max].
  path: { seed: 29 }
});
