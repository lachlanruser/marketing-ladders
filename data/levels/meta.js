ML.registerLevel({
  id: 'meta',
  name: 'Meta',
  subtitle: 'Facebook and Instagram ads',
  theme: '#1cb0f6',
  themeDark: '#1899d6',
  size: 15,
  // [foot, top]: a correct answer on the foot climbs to the top.
  // Positions are chosen for this level's winding path (js/path.js) so that no ladder or
  // snake crosses another or passes over a circle; tests/path.test.js checks this.
  ladders: [[3, 10], [6, 14]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[9, 4], [12, 7]],
  // Path shape: seed picks the quirky bend pattern.
  path: { seed: 3 }
});
