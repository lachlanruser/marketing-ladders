// Paid social question bank (Level 1).
// Every question is checked against the official page in sourceUrl on the lastVerified date.
// Set "flagged": true on any question that can't be verified; the game skips flagged questions.
ML.registerQuestions('paid-social', [
  // ---------- Difficulty 1 ----------
  {
    id: 'ps-001', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'Meta',
    prompt: 'In Meta\'s ad auction, which ad wins?',
    options: [
      'The ad with the highest bid',
      'The ad with the highest total value: bid, estimated action rates and ad quality combined',
      'The ad from the advertiser with the biggest budget',
      'The newest ad in the auction'
    ],
    correctIndex: 1,
    explanation: 'Meta picks the ad with the highest total value, which combines the bid, estimated action rates and ad quality. A more relevant ad can beat an ad with a higher bid.',
    sourceUrl: 'https://www.facebook.com/business/help/430291176997542',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-002', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'Meta',
    prompt: 'What is a lookalike audience on Meta?',
    options: [
      'People who have already bought from you',
      'New people who share similar characteristics with a source audience, such as your existing customers',
      'Everyone who follows a competitor\'s Page',
      'A list of email addresses you upload'
    ],
    correctIndex: 1,
    explanation: 'A lookalike audience reaches new people who look like your source audience, based on signals such as demographics, interests and behaviours. It\'s a prospecting tool, not retargeting.',
    sourceUrl: 'https://www.facebook.com/business/help/164749007013531',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-003', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What makes TikTok Spark Ads different from standard in-feed ads?',
    options: [
      'They only run on TikTok\'s search results page',
      'They use organic TikTok posts, and the likes, comments, shares and follows they earn go to the original post',
      'They can\'t include a call to action',
      'They are free to run'
    ],
    correctIndex: 1,
    explanation: 'Spark Ads boost organic posts, either your own or a creator\'s with their authorisation. Engagement from the paid run builds up on the original organic post, so the impact lasts beyond the campaign.',
    sourceUrl: 'https://ads.tiktok.com/help/article/spark-ads?lang=en',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-004', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Why do LinkedIn Lead Gen Forms often get more completions than sending people to a landing page?',
    options: [
      'They pre-fill contact and profile details from the member\'s LinkedIn profile',
      'They are shown only to people who already follow your Page',
      'They pay members for every completed form',
      'They skip LinkedIn\'s ad review'
    ],
    correctIndex: 0,
    explanation: 'Lead Gen Forms fill in a member\'s contact and profile information automatically when they click the call to action, so there\'s far less typing. There\'s no extra cost beyond the ads themselves.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423447',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 2 ----------
  {
    id: 'ps-005', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta',
    prompt: 'Roughly when does a Meta ad set usually exit the learning phase?',
    options: [
      'After 24 hours, whatever the results',
      'After about 50 results in the week after its last significant edit',
      'After 1,000 impressions',
      'After you spend the whole budget'
    ],
    correctIndex: 1,
    explanation: 'Ad sets exit learning once they can deliver stably, which usually happens after about 50 results (optimisation events) in the week after the last significant edit.',
    sourceUrl: 'https://www.facebook.com/business/help/112167992830700',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-006', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta',
    prompt: 'You want to show ads to people who visited your website but didn\'t buy. Which audience type fits best?',
    options: [
      'A lookalike audience',
      'A website custom audience built from Meta Pixel data',
      'Broad targeting with no audience at all',
      'A Special Ad Category audience'
    ],
    correctIndex: 1,
    explanation: 'A website custom audience uses Meta Pixel data to reach people who visited your site. It\'s the classic retargeting audience. Lookalikes are for finding new people.',
    sourceUrl: 'https://www.facebook.com/business/help/744354708981227',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-007', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta',
    prompt: 'When creating a lookalike audience, what does choosing a smaller percentage range do?',
    options: [
      'Creates a bigger, broader audience',
      'Matches your source audience more closely, giving a smaller audience',
      'Lowers your cost per click automatically',
      'Excludes your existing customers'
    ],
    correctIndex: 1,
    explanation: 'A smaller percentage gives you a closer match to the source audience. Larger percentages trade similarity for reach. Source quality matters too: a list of your best customers can beat a list of all customers.',
    sourceUrl: 'https://www.facebook.com/business/help/164749007013531',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-008', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What must be on your website before LinkedIn can verify and report Insight Tag conversions?',
    options: [
      'A LinkedIn Lead Gen Form',
      'The LinkedIn Insight Tag',
      'A Showcase Page link',
      'A Google Tag Manager account'
    ],
    correctIndex: 1,
    explanation: 'Insight Tag conversions only report once they\'re verified, and they can only be verified if the Insight Tag is installed on your site. (An event-specific image pixel is the one method that doesn\'t need the tag.)',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425606',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 3 ----------
  {
    id: 'ps-009', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'Meta',
    prompt: 'With Advantage+ campaign budget on, one ad set gets most of the spend. How should you judge results?',
    options: [
      'Pause the ad set that spends least, because it\'s clearly failing',
      'Look at results at the campaign level, because budget flows to the best opportunities',
      'Split every ad set into its own campaign straight away',
      'Force equal spend by setting the same bid on each ad set'
    ],
    correctIndex: 1,
    explanation: 'Advantage+ campaign budget moves budget in real time to the ad sets with the best opportunities, so uneven spend is expected. Meta says to analyse results at the campaign level, not the ad set level.',
    sourceUrl: 'https://www.facebook.com/business/help/153514848493595',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-010', level: 'paid-social', difficulty: 3, type: 'scenario', platform: 'Meta',
    prompt: 'A client sees that Instagram has a higher cost per result than Facebook in their Advantage+ placements campaign, and wants to turn Instagram off. What do you advise?',
    options: [
      'Turn it off: cheaper placements are always better',
      'Leave it on: the system aims for the lowest average cost overall, and removing placements can raise total cost',
      'Turn off Facebook instead',
      'Double the Instagram budget'
    ],
    correctIndex: 1,
    explanation: 'Meta optimises for the most results at the lowest average cost overall, not the lowest cost in each placement. Cutting a placement removes cheap opportunities too, which can make the overall cost per result worse.',
    sourceUrl: 'https://www.facebook.com/business/help/965529646866485',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-011', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'Meta',
    prompt: 'What is the main job of Meta\'s Conversions API?',
    options: [
      'To design ad creatives automatically',
      'To send marketing data from your server, website platform, app or CRM directly to Meta for optimisation and measurement',
      'To replace Ads Manager reporting',
      'To block ads from showing to existing customers'
    ],
    correctIndex: 1,
    explanation: 'The Conversions API creates a direct, more reliable connection between your marketing data and Meta. That helps optimise delivery, lower cost per result and measure outcomes, including offline and CRM events.',
    sourceUrl: 'https://www.facebook.com/business/help/2041148702652965',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-012', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What does TikTok recommend for website conversion tracking?',
    options: [
      'Use the TikTok Pixel only',
      'Use the Events API only',
      'Use the Pixel and Events API together, with event deduplication',
      'Use neither and rely on in-platform clicks'
    ],
    correctIndex: 2,
    explanation: 'TikTok recommends using the Pixel and Events API together, with deduplication. The server connection recovers conversions the browser misses, for example because of connectivity issues or browser inconsistencies.',
    sourceUrl: 'https://ads.tiktok.com/help/article/events-api',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 4 ----------
  {
    id: 'ps-013', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'Meta',
    prompt: 'Which of these is true about Meta\'s ad relevance diagnostics (quality, engagement rate and conversion rate rankings)?',
    options: [
      'They are direct inputs into the ad auction',
      'They aren\'t auction inputs, and aren\'t shown for ads with fewer than 500 impressions',
      'They compare your ad with every ad on Facebook',
      'They only appear for video ads'
    ],
    correctIndex: 1,
    explanation: 'The rankings compare your ad with ads competing for the same audience, to help you diagnose creative, post-click or audience issues. They aren\'t auction inputs, and need at least 500 impressions.',
    sourceUrl: 'https://www.facebook.com/business/help/403110480493160',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-014', level: 'paid-social', difficulty: 4, type: 'scenario', platform: 'Meta',
    prompt: 'A client wants to test two audiences by switching one ad set off and the other on each week. What\'s the better approach?',
    options: [
      'Keep switching weekly, but run it for longer',
      'Run a proper A/B test, which splits the audience so nobody sees both versions',
      'Run both ad sets with different budgets and compare cost per click',
      'Put both audiences in one ad set'
    ],
    correctIndex: 1,
    explanation: 'Meta advises against informal testing, like turning ad sets on and off, because it can lead to overlapping audiences and unreliable results. A/B testing splits people evenly so the versions are comparable. Use the same budget for both.',
    sourceUrl: 'https://www.facebook.com/business/help/1738164643098669',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-015', level: 'paid-social', difficulty: 4, type: 'scenario', platform: 'Meta',
    prompt: 'Two days into a new campaign, a client adds new ads and changes the targeting, and cost per result jumps. What\'s the most likely reason?',
    options: [
      'Meta is penalising the account',
      'Those are significant edits, so the ad set re-entered the learning phase, where results are less stable',
      'The budget is too high',
      'The pixel stopped working'
    ],
    correctIndex: 1,
    explanation: 'Changing targeting or creative, or adding a new ad, counts as a significant edit, and it restarts learning. During learning, performance is less stable and cost per result is usually higher. Only make edits you expect to improve results.',
    sourceUrl: 'https://www.facebook.com/business/help/316478108955072',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-016', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'Meta',
    prompt: 'You\'re advertising job vacancies on Meta. What must you do when setting up the campaign?',
    options: [
      'Nothing different from any other campaign',
      'Choose the relevant Special Ad Category, which limits some audience selection options',
      'Only use lookalike audiences',
      'Add a "Paid for by" disclaimer'
    ],
    correctIndex: 1,
    explanation: 'Ads about employment, housing or financial products and services need a Special Ad Category. It limits audience selection tools to help prevent unlawful discrimination. "Paid for by" disclaimers are for social issue, election and political ads.',
    sourceUrl: 'https://www.facebook.com/business/help/298000447747885',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 5 ----------
  {
    id: 'ps-017', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'Meta',
    prompt: 'You send purchases through both the Meta Pixel and the Conversions API. What\'s the recommended way to stop them being counted twice?',
    options: [
      'Send server events one day later than browser events',
      'Use a matching event ID and the same event name on both the Pixel and the server event',
      'Turn off the Pixel for purchases',
      'Use different event names for browser and server'
    ],
    correctIndex: 1,
    explanation: 'In a "redundant setup", Meta deduplicates when the Pixel\'s eventID matches the Conversions API\'s event_id and the event names match. This is the recommended method, with fbp or external_id as the alternative.',
    sourceUrl: 'https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-018', level: 'paid-social', difficulty: 5, type: 'scenario', platform: 'Meta',
    prompt: 'Ad set A uses standard attribution and ad set B uses incremental attribution. A client wants to pick the winner from the campaign overview table. What do you tell them?',
    options: [
      'Pick whichever shows more conversions',
      'Don\'t compare them directly: the models count conversions differently. Use the compare attribution settings feature or an external analytics tool',
      'Incremental always reports more conversions, so B wins',
      'Switch both to view-through only, then compare'
    ],
    correctIndex: 1,
    explanation: 'Standard and incremental attribution count conversions differently, so comparing across them leads to inaccurate conclusions. Meta points to its compare attribution settings feature, or evaluating in your external analytics tool.',
    sourceUrl: 'https://www.facebook.com/business/help/460276478298895',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-019', level: 'paid-social', difficulty: 5, type: 'scenario', platform: 'Meta',
    prompt: 'An ad set optimising for purchases has a small budget and shows "Learning limited". Which change is most likely to help?',
    options: [
      'Split it into several smaller ad sets',
      'Combine ad sets, expand the audience, raise the budget, or optimise for a more frequent event such as add to basket',
      'Add more ads to the ad set each day',
      'Wait. Learning limited always fixes itself within 24 hours'
    ],
    correctIndex: 1,
    explanation: 'An ad set is learning limited when it\'s unlikely to get about 50 optimisation events in a week. Meta\'s fixes: combine ad sets, expand the audience, raise the budget or bid, or pick a more frequent optimisation event.',
    sourceUrl: 'https://www.facebook.com/business/help/269269737396981',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-020', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What do LinkedIn Thought Leader Ads let a brand do?',
    options: [
      'Sponsor posts from individuals, such as employees, executives, experts or customers, as ads',
      'Send private messages to any LinkedIn member',
      'Boost only Company Page posts with a lead form',
      'Promote job postings to passive candidates'
    ],
    correctIndex: 0,
    explanation: 'Thought Leader Ads sponsor posts from individual voices rather than the Company Page, with the author\'s permission. LinkedIn positions them for building credibility and brand trust.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/sponsored-content/thought-leader-ads',
    lastVerified: '2026-10-13'
  }
]);
