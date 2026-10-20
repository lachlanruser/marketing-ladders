ML.registerLevel({
  id: 'linkedin',
  name: 'LinkedIn',
  subtitle: 'B2B ads in Campaign Manager',
  theme: '#9b5cf6',
  themeDark: '#7c3aed',
  size: 15,
  // [foot, top]: a correct answer on the foot climbs to the top.
  // Positions are chosen for this level's winding path (js/path.js) so that no ladder or
  // snake crosses another or passes over a circle; tests/path.test.js checks this.
  ladders: [[2, 9], [6, 14]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[8, 4], [12, 7]],
  // Path shape: seed picks the quirky bend pattern.
  path: { seed: 22 }
});
