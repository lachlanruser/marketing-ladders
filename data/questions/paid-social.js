// Paid social question bank (Level 1).
// Every question is checked against the official page in sourceUrl on the lastVerified date.
// Writing rules (balanced lengths, believable wrong answers, trick questions): see README.md.
// "trick": true marks trick-style questions (NOT questions, near-miss numbers, myth-busters).
// Set "flagged": true on any question that can't be verified; the game skips flagged questions.
ML.registerQuestions('paid-social', [
  // ---------- Difficulty 1 ----------
  {
    id: 'ps-001', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'In Meta\'s ad auction, which ad wins?',
    options: [
      'The ad with the highest bid, adjusted for how evenly its budget is pacing',
      'The ad with the highest total value: bid, estimated action rates and ad quality',
      'The ad with the best quality, engagement and conversion rate rankings combined',
      'The ad with the highest predicted click-through rate that clears the price floor'
    ],
    correctIndex: 1,
    explanation: 'Total value combines the bid, estimated action rates and ad quality, so a more relevant ad can beat a higher bid. The quality, engagement and conversion rate rankings sound similar, but they belong to ad relevance diagnostics, and Meta says those aren\'t auction inputs.',
    sourceUrl: 'https://www.facebook.com/business/help/430291176997542',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-002', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'Meta',
    prompt: 'What does a Meta lookalike audience do?',
    options: [
      'Reaches new people who share traits with a source audience you choose',
      'Re-targets people who visited your website, using data from the Meta Pixel',
      'Matches an uploaded customer list to Meta profiles so you can reach them',
      'Expands targeting to people interested in pages similar to a competitor\'s'
    ],
    correctIndex: 0,
    explanation: 'A lookalike finds new people similar to your source audience, such as your best customers. Re-targeting site visitors and matching an uploaded customer list are both custom audiences, not lookalikes.',
    sourceUrl: 'https://www.facebook.com/business/help/164749007013531',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-003', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What is distinctive about TikTok Spark Ads?',
    options: [
      'Engagement from the paid run is credited to the original organic post',
      'They are shown in TikTok search results rather than in the For You feed',
      'They let you run video ads that don\'t appear on any TikTok profile',
      'They use a creator\'s follower list to target that creator\'s audience'
    ],
    correctIndex: 0,
    explanation: 'Spark Ads boost organic posts (yours, or a creator\'s with their authorisation), and the views, likes, comments, shares and follows all go to the original post. Ads that don\'t appear on any profile are standard in-feed ads, not Spark Ads.',
    sourceUrl: 'https://ads.tiktok.com/help/article/spark-ads?lang=en',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-004', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What\'s the main reason LinkedIn Lead Gen Forms reduce drop-off compared with a landing page?',
    options: [
      'They auto-fill contact and profile details from the member\'s profile',
      'They\'re charged per completed lead rather than per click or impression',
      'They\'re shown to members who already follow your Company Page',
      'They skip the privacy policy step, so the form is quicker to finish'
    ],
    correctIndex: 0,
    explanation: 'Dynamic prefill fills in details from the member\'s profile, so there\'s far less typing. Lead Gen Forms cost nothing extra beyond the ads themselves, and every form needs a privacy policy URL.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423447',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 2 ----------
  {
    id: 'ps-005', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'Roughly when does a Meta ad set usually exit the learning phase?',
    options: [
      'After about 25 results in the week after its last significant edit',
      'After about 50 results in the week after its last significant edit',
      'After about 50 results in the 14 days after its last significant edit',
      'After about 100 results in the week after its last significant edit'
    ],
    correctIndex: 1,
    explanation: 'Meta\'s benchmark is about 50 results (optimisation events) in the week, not 14 days, after the last significant edit. Ad sets exit as soon as they can deliver stably.',
    sourceUrl: 'https://www.facebook.com/business/help/112167992830700',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-006', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta',
    prompt: 'You want to reach people who visited your website but didn\'t buy. Which audience fits best?',
    options: [
      'A lookalike audience built from your website visitors',
      'A website custom audience built from your Meta Pixel data',
      'A customer list custom audience of your past buyers',
      'An interest audience based on your product category'
    ],
    correctIndex: 1,
    explanation: 'A website custom audience uses Meta Pixel data to retarget people who visited your site. A lookalike of those visitors would find new people instead, and a list of past buyers targets the wrong group.',
    sourceUrl: 'https://www.facebook.com/business/help/744354708981227',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-007', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta',
    prompt: 'When building a lookalike audience, what does choosing a smaller percentage range give you?',
    options: [
      'A smaller audience that more closely matches your source',
      'A larger audience with a broader match to your source',
      'A smaller audience limited to people in your source list',
      'A cheaper audience, because fewer advertisers compete for it'
    ],
    correctIndex: 0,
    explanation: 'Smaller percentages match the source audience more closely, while larger ones trade similarity for reach. A lookalike is still made up of new people, not the people in your source.',
    sourceUrl: 'https://www.facebook.com/business/help/164749007013531',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-008', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'Which LinkedIn conversion tracking method does NOT need the Insight Tag installed on your site?',
    options: [
      'Event-specific tracking with an image pixel',
      'Website Actions that auto-tag clicks and form fills',
      'Page load conversions set up with URL rules',
      'Event-specific conversions added to a button'
    ],
    correctIndex: 0,
    explanation: 'Website Actions, page load conversions and event-specific conversions all need the Insight Tag. An event-specific image pixel is the one method that works without it.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425606',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 3 ----------
  {
    id: 'ps-009', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'Meta',
    prompt: 'With Advantage+ campaign budget on, one ad set is taking most of the spend. What should you do?',
    options: [
      'Judge results at campaign level, since uneven spend is expected',
      'Pause the low-spend ad sets so the budget isn\'t spread too thin',
      'Move each ad set into its own campaign to get equal budgets',
      'Switch to a lifetime budget so spend is split evenly over time'
    ],
    correctIndex: 0,
    explanation: 'Advantage+ campaign budget moves spend in real time to the ad sets with the best opportunities, so uneven spend is normal. Meta says to analyse results at the campaign level. A lifetime budget changes the time frame, not how spend is shared between ad sets.',
    sourceUrl: 'https://www.facebook.com/business/help/153514848493595',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-010', level: 'paid-social', difficulty: 3, type: 'scenario', platform: 'Meta', trick: true,
    prompt: 'A client sees that Instagram has a higher cost per result than Facebook in their Advantage+ placements campaign, and wants to turn Instagram off. What do you advise?',
    options: [
      'Turn Instagram off and move its budget to the cheaper Facebook placement',
      'Leave it on: Meta aims for the lowest average cost across all placements',
      'Keep it on, but set a cost per result goal on Instagram to cap its cost',
      'Split Instagram into its own ad set so each placement optimises alone'
    ],
    correctIndex: 1,
    explanation: 'The system goes after the cheapest opportunities across all placements, not the lowest cost in each one. Turning Instagram off removes some cheap results too, which can push the overall average cost up. This is the "breakdown effect".',
    sourceUrl: 'https://www.facebook.com/business/help/965529646866485',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-011', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'Meta',
    prompt: 'What is the main job of Meta\'s Conversions API?',
    options: [
      'Sending events from your server, app or CRM directly to Meta',
      'Reporting Meta ad results back into your own CRM or BI tool',
      'Firing browser events from your site without a tag manager',
      'Uploading customer lists to build custom audiences'
    ],
    correctIndex: 0,
    explanation: 'The Conversions API sends marketing data (web, app, offline and messaging events) from your systems to Meta, for optimisation and measurement. Firing events in the browser is what the Meta Pixel does, and it runs the other way to reporting.',
    sourceUrl: 'https://www.facebook.com/business/help/2041148702652965',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-012', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What setup does TikTok recommend for website conversion tracking?',
    options: [
      'The TikTok Pixel alone, because server events add duplicates',
      'The Events API alone, because browsers lose too many events',
      'The Pixel and Events API together, with event deduplication',
      'The Pixel, plus offline uploads for any CRM conversions'
    ],
    correctIndex: 2,
    explanation: 'TikTok recommends using the Pixel and Events API together, with deduplication. The server connection recovers conversions the Pixel misses, and deduplication stops the same event being counted twice.',
    sourceUrl: 'https://ads.tiktok.com/help/article/events-api',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 4 ----------
  {
    id: 'ps-013', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'Which statement about Meta\'s ad relevance diagnostics is NOT true?',
    options: [
      'They are inputs the ad auction uses to pick the winning ad',
      'They compare your ad with ads competing for the same audience',
      'They aren\'t shown for ads with fewer than 500 impressions',
      'They include quality, engagement rate and conversion rate rankings'
    ],
    correctIndex: 0,
    explanation: 'The diagnostics help you spot creative, post-click or audience problems by comparing your ad with ads competing for the same audience. They need at least 500 impressions, and Meta is clear that they aren\'t auction inputs.',
    sourceUrl: 'https://www.facebook.com/business/help/403110480493160',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-014', level: 'paid-social', difficulty: 4, type: 'scenario', platform: 'Meta',
    prompt: 'A client wants to test two audiences by switching one ad set off and the other on each week. What\'s the better approach?',
    options: [
      'Keep alternating weekly, but run the test for at least a month',
      'Run an A/B test so the audience is split and nobody sees both',
      'Run both at once in one campaign and compare their cost per click',
      'Put both audiences in one ad set and check the age breakdown'
    ],
    correctIndex: 1,
    explanation: 'Meta advises against informal testing, like switching ad sets on and off, because it gives overlapping audiences and unreliable results. An A/B test splits people evenly so the versions are comparable. Use the same budget for both.',
    sourceUrl: 'https://www.facebook.com/business/help/1738164643098669',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-015', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'Which of these changes is NOT a significant edit that sends a Meta ad set back into learning?',
    options: [
      'Adding a new ad to the ad set',
      'Changing the optimisation event',
      'Raising the daily budget from $100 to $101',
      'Pausing the ad set for 8 days, then restarting'
    ],
    correctIndex: 2,
    explanation: 'Adding an ad, changing the optimisation event, targeting, creative or bid strategy, and pausing for 7 days or more are all significant edits. A budget change depends on its size: $100 to $101 is unlikely to reset learning, while $100 to $1,000 might.',
    sourceUrl: 'https://www.facebook.com/business/help/316478108955072',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-016', level: 'paid-social', difficulty: 4, type: 'scenario', platform: 'Meta',
    prompt: 'A recruitment client wants to advertise job vacancies on Meta. What must you do at campaign setup?',
    options: [
      'Choose the employment Special Ad Category, which limits targeting',
      'Add a "Paid for by" disclaimer and complete ad authorisation first',
      'Choose the employment category and use a 1% lookalike of current staff',
      'Run it as a standard campaign, as job ads have no extra requirements'
    ],
    correctIndex: 0,
    explanation: 'Ads about employment, housing or financial products and services need a Special Ad Category, which limits audience options (lookalikes included). "Paid for by" disclaimers are for social issue, election and political ads.',
    sourceUrl: 'https://www.facebook.com/business/help/298000447747885',
    lastVerified: '2026-10-13'
  },

  // ---------- Difficulty 5 ----------
  {
    id: 'ps-017', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'You send purchases through both the Meta Pixel and the Conversions API. What\'s the recommended way to stop them being counted twice?',
    options: [
      'Send the server event within 48 hours of the browser event',
      'Give both the same event ID and the same event name',
      'Give both the same event name and the same timestamp',
      'Give both the same event ID but different event names'
    ],
    correctIndex: 1,
    explanation: 'Meta deduplicates when the Pixel\'s eventID matches the Conversions API\'s event_id and the event names match. Both are needed: the same ID with different names won\'t match. The alternative method uses fbp or external_id, not timestamps.',
    sourceUrl: 'https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-018', level: 'paid-social', difficulty: 5, type: 'scenario', platform: 'Meta',
    prompt: 'Ad set A uses standard attribution and ad set B uses incremental attribution. A client wants to pick the winner from the campaign overview table. What do you tell them?',
    options: [
      'Pick B, as incremental attribution counts more conversions',
      'Don\'t compare them there; use compare attribution settings',
      'Pick whichever shows more conversions over the same 7 days',
      'Set both to 1-day view first, then compare in that table'
    ],
    correctIndex: 1,
    explanation: 'Standard and incremental attribution count conversions differently, so comparing them in the overview table leads to wrong conclusions. Meta points to its compare attribution settings feature, or to your external analytics tool.',
    sourceUrl: 'https://www.facebook.com/business/help/460276478298895',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-019', level: 'paid-social', difficulty: 5, type: 'scenario', platform: 'Meta',
    prompt: 'An ad set optimising for purchases on a small budget shows "Learning limited". Which change does Meta suggest?',
    options: [
      'Split it into smaller ad sets so each one can learn faster',
      'Optimise for a more frequent event, such as add to basket',
      'Add several new ads so the system has more to test',
      'Lower the bid control so each purchase costs less'
    ],
    correctIndex: 1,
    explanation: 'Learning limited means about 50 optimisation events a week is unlikely. Meta\'s fixes: combine (not split) ad sets, expand the audience, raise the budget or bid, or optimise for a more frequent event. Extra ads and lower bids make it harder to get there.',
    sourceUrl: 'https://www.facebook.com/business/help/269269737396981',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-020', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Which is true of LinkedIn Thought Leader Ads?',
    options: [
      'They sponsor an individual member\'s post once the author approves',
      'They let you add your own headline and CTA button to the post',
      'They promote Company Page posts written by your exec team',
      'They send a sponsored message to an exec\'s 1st-degree connections'
    ],
    correctIndex: 0,
    explanation: 'Thought Leader Ads sponsor posts by individuals (employees, experts, customers or creators) after the author approves the request in Campaign Manager. Edits to the post come from its author, and LinkedIn doesn\'t add call-to-action buttons.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/sponsored-content/thought-leader-ads',
    lastVerified: '2026-10-13'
  }
]);
