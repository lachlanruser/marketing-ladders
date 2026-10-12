ML.registerLevel({
  id: 'paid-social',
  name: 'Paid social',
  subtitle: 'Meta, TikTok and LinkedIn',
  theme: '#1cb0f6',
  themeDark: '#1899d6',
  size: 30,
  // [foot, top]: a correct answer on the foot climbs to the top.
  // Laid out in separate columns so ladders and snakes never cross.
  ladders: [[5, 17], [12, 24], [16, 28]],
  // [head, tail]: a wrong answer on the head slides to the tail.
  snakes: [[14, 2], [19, 7], [27, 15]]
});
