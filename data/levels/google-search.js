ML.registerLevel({
  id: 'google-search',
  name: 'Google Ads: Search',
  subtitle: 'Keywords, ads, Quality Score and the auction',
  theme: '#58cc02',
  themeDark: '#46a302',
  size: 15,
  // [foot, top]: a correct answer on the foot climbs to the top.
  // Positions are chosen for this level's winding path (js/path.js) so that no ladder or
  // snake crosses another or passes over a circle; tests/path.test.js checks this.
  ladders: [[3, 9], [6, 14]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[8, 4], [13, 7]],
  // Path shape: seed picks the quirky bend pattern.
  path: { seed: 27 }
});
