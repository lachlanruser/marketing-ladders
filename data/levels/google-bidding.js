ML.registerLevel({
  id: 'google-bidding',
  name: 'Google Ads: Bidding & measurement',
  subtitle: 'Smart Bidding, budgets, conversions and PMax',
  theme: '#ff9600',
  themeDark: '#e08600',
  size: 15,
  // [foot, top]: a correct answer on the foot climbs to the top.
  // Positions are chosen for this level's winding path (js/path.js) so that no ladder or
  // snake crosses another or passes over a circle; tests/path.test.js checks this.
  ladders: [[2, 10], [6, 13]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[8, 4], [9, 3]],
  // Path shape: seed picks the quirky bend pattern.
  path: { seed: 51 }
});
