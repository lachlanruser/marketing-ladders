ML.registerLevel({
  id: 'tiktok',
  name: 'TikTok',
  subtitle: 'Spark Ads, Smart+ and the For You feed',
  theme: '#ff4b9a',
  themeDark: '#e0307d',
  size: 15,
  // [foot, top]: a correct answer on the foot climbs to the top.
  // Positions are chosen for this level's winding path (js/path.js) so that no ladder or
  // snake crosses another or passes over a circle; tests/path.test.js checks this.
  ladders: [[3, 10], [6, 14]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[12, 8], [13, 7]],
  // Path shape: seed picks the quirky bend pattern.
  path: { seed: 29 }
});
