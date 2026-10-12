ML.registerLevel({
  id: 'paid-social',
  name: 'Paid social',
  subtitle: 'Meta, TikTok and LinkedIn',
  theme: '#1cb0f6',
  themeDark: '#1899d6',
  size: 30,
  // [foot, top]: a correct answer on the foot climbs to the top.
  ladders: [[4, 14], [11, 22], [17, 27]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[15, 5], [23, 12], [29, 18]]
});
