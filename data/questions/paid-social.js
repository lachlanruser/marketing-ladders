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
  },

  // ---------- Batch 2 (questions are drawn at random; difficulty is kept for reference) ----------
  {
    id: 'ps-021', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'Which of these is NOT one of the six campaign objectives in Meta Ads Manager?',
    options: ['Awareness', 'Engagement', 'App promotion', 'Conversions'],
    correctIndex: 3,
    explanation: 'The six objectives are Awareness, Traffic, Engagement, Leads, App promotion and Sales. "Conversions" was one of the original objectives, and it now maps into Engagement, Leads and Sales.',
    sourceUrl: 'https://www.facebook.com/business/help/1438417719786914',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-022', level: 'paid-social', difficulty: 3, type: 'scenario', platform: 'Meta',
    prompt: 'A week-long ad set with a lifetime budget starts during a spell of expensive, competitive auctions. What does Meta\'s pacing do?',
    options: [
      'Holds some budget back for cheaper results later in the week',
      'Spends faster early on to secure delivery while it\'s available',
      'Splits the budget into seven equal daily amounts and spends each',
      'Pauses delivery until auction prices fall back to normal levels'
    ],
    correctIndex: 0,
    explanation: 'Without pacing, the whole budget could go in a few days on expensive results. Pacing spreads spend over the schedule, saving budget for later in the week when cheaper results are likely. It doesn\'t split spend into rigid equal days.',
    sourceUrl: 'https://www.facebook.com/business/help/1754368491258883',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-023', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'In Meta Ads Manager, when does an ad show "Creative fatigue" rather than "Creative limited"?',
    options: [
      'When cost per result is at least twice that of your past ads',
      'When cost per result is up to twice that of your past ads',
      'When frequency passes 3 impressions per person in 7 days',
      'When the same creative has run for more than 30 days'
    ],
    correctIndex: 0,
    explanation: 'Meta compares cost per result with ads you\'ve run before. Higher but less than double shows "Creative limited". Double or more shows "Creative fatigue". It also counts recent exposures of the same image or video, including in other campaigns from your Page.',
    sourceUrl: 'https://www.facebook.com/business/help/1346816142327858',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-024', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'Two of your ad sets target overlapping audiences, so both are eligible for the same auction. What happens?',
    options: [
      'Both bid, so you push up your own costs by competing',
      'Meta enters only the one with the highest total value',
      'Meta alternates between them in successive auctions',
      'The ad with the higher budget is entered in the auction'
    ],
    correctIndex: 1,
    explanation: 'This is auction overlap. Meta picks your ad with the highest total value and leaves the others out, so your ads don\'t bid against each other. The real cost is that overlap can stop ad sets spending their budget or exiting learning.',
    sourceUrl: 'https://www.facebook.com/business/help/537699989762051',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-025', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta',
    prompt: 'Which Meta bid strategy sets the maximum you\'ll bid in every single auction?',
    options: [
      'Bid cap (manual bidding)',
      'Cost per result goal (goal-based)',
      'ROAS goal (goal-based bidding)',
      'Highest volume (spend-based)'
    ],
    correctIndex: 0,
    explanation: 'Bid cap sets your maximum bid in each auction, so it suits advertisers who can predict conversion rates. Cost per result and ROAS goals are averages Meta aims near, and they aren\'t guaranteed. Highest volume spends the budget to get the most results.',
    sourceUrl: 'https://www.facebook.com/business/help/1619591734742116',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-026', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'You want every USD 100 of spend to bring in about USD 110 of purchases. What ROAS goal do you enter?',
    options: ['1.100', '0.110', '11.00', '110.0'],
    correctIndex: 0,
    explanation: 'The ROAS goal is entered as a ratio of purchase value to spend: USD 110 back on USD 100 is a 110% return, entered as 1.100. Meta aims to stay near this average, but it isn\'t guaranteed.',
    sourceUrl: 'https://www.facebook.com/business/help/1619591734742116',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-027', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'For goal-based bidding (cost per result or ROAS goal), how many weekly conversions does Meta recommend for best performance?',
    options: ['25 or more', '50–100 or more', '10–20 or more', '200 or more'],
    correctIndex: 1,
    explanation: 'Meta recommends 50–100 or more weekly conversions for goal-based bid strategies. With fewer, the system has too little signal to hit a cost or ROAS goal reliably.',
    sourceUrl: 'https://www.facebook.com/business/help/1619591734742116',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-028', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'Meta',
    prompt: 'What does Meta\'s event match quality (EMQ) score tell you?',
    options: [
      'How well the customer details sent with server events match to Meta accounts',
      'How closely your pixel and server events match, so duplicates are removed',
      'How well your ad\'s landing page matches the promise made in the ad',
      'How many of your server events arrived within 48 hours of the conversion'
    ],
    correctIndex: 0,
    explanation: 'EMQ is a 0–10 score for Conversions API web events. It\'s based on the customer information you send and the share of events matched to Meta accounts over the last 48 hours. Removing duplicates is a separate process, deduplication.',
    sourceUrl: 'https://www.facebook.com/business/help/765081237991954',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-029', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'Meta', trick: true,
    prompt: 'As a guide, what does Meta say a campaign needs before you can run a self-serve conversion lift test?',
    options: [
      'USD 5,000+ spend and 500+ conversions, started in the past year',
      'USD 1,000+ spend and 100+ conversions, started in the past year',
      'USD 5,000+ spend and 50+ conversions, started in the past 90 days',
      'USD 10,000+ spend and 1,000+ conversions in any time frame'
    ],
    correctIndex: 0,
    explanation: 'Meta\'s guide is a campaign started in the past year with USD 5,000 or more spend and at least 500 conversions. Campaigns longer than 90 days are prorated, so 180 days means USD 10,000 and 1,000 conversions. There\'s also a signal-quality requirement, such as Conversions API with an EMQ above 5.',
    sourceUrl: 'https://www.facebook.com/business/help/221353413010930',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-030', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'Meta',
    prompt: 'What does Meta\'s "maximise value of conversions" performance goal do?',
    options: [
      'Gets the most conversions possible at the lowest cost per result',
      'Prioritises people likely to make higher-value purchases',
      'Raises your bids for the products with the highest margins',
      'Shows your ads to past customers with the highest order values'
    ],
    correctIndex: 1,
    explanation: 'Value optimisation aims for the highest total conversion value from your budget, not the most conversions. It needs value signals sent through the Conversions API (required) and the Meta Pixel.',
    sourceUrl: 'https://www.facebook.com/business/help/296463804090290',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-031', level: 'paid-social', difficulty: 3, type: 'scenario', platform: 'Meta',
    prompt: 'A client launches 40 ads across 10 ad sets on a small budget, and few of them exit learning. What\'s the most likely fix?',
    options: [
      'Combine ad sets and run fewer ads so each one gets more delivery',
      'Add more ads so the system has more options to choose from',
      'Raise bids on each ad set so all 40 ads get some delivery',
      'Duplicate the best ad sets so learning restarts with a clean slate'
    ],
    correctIndex: 0,
    explanation: 'When too many ads run at once, each one delivers less often, so fewer exit learning and more budget is spent before optimisation kicks in. Meta recommends combining ad sets and managing ad volume.',
    sourceUrl: 'https://www.facebook.com/business/help/2720085414702598',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-032', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What do you need to give TikTok to set up a Smart+ campaign?',
    options: [
      'Your KPIs, creative assets, and target geography and language',
      'Detailed interest targeting, bids for each ad group, and a schedule',
      'A Spark Ads authorisation code from every creator you work with',
      'A finished set of ad variations for every placement and format'
    ],
    correctIndex: 0,
    explanation: 'Smart+ is TikTok\'s AI-driven campaign type. You supply KPIs, creative assets, and target geography and language, and TikTok automates targeting, optimisation and creative combinations.',
    sourceUrl: 'https://ads.tiktok.com/help/article/about-smart-plus-campaign?lang=en',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-033', level: 'paid-social', difficulty: 4, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'In TikTok Ads Manager (Self-Attributing Network), which view-through attribution (VTA) window options can you choose?',
    options: ['Off or 1 day', '1 day or 7 days', '7 days or 28 days', 'Off, 1 day or 7 days'],
    correctIndex: 0,
    explanation: 'VTA can be off or 1 day. Click-through (CTA) and engaged view-through (EVTA) can each be 1 or 7 days, which is why "1 day or 7 days" is a tempting wrong answer.',
    sourceUrl: 'https://ads.tiktok.com/help/article/about-the-attribution-window-on-tiktok-ads-manager?lang=en',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-034', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What must be set up before you can use TikTok\'s Web Conversions objective?',
    options: [
      'The TikTok Pixel or the Events API',
      'A TikTok Shop with a product catalogue',
      'A Business Center and a Spark Ads code',
      'An instant form and a CRM integration'
    ],
    correctIndex: 0,
    explanation: 'A Pixel or Events API setup is a prerequisite for Web Conversions. For best results, TikTok recommends using both together, with deduplication.',
    sourceUrl: 'https://ads.tiktok.com/help/article/events-api',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-035', level: 'paid-social', difficulty: 3, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'Which objective is NOT available for Spark Ads bought with the Reach & Frequency buying type?',
    options: ['Traffic', 'Video Views', 'Conversions'],
    correctIndex: 2,
    explanation: 'With Reach & Frequency, Spark Ads support Reach, Traffic and Video Views. Conversions, along with objectives such as Lead generation and Sales, needs the Auction buying type.',
    sourceUrl: 'https://ads.tiktok.com/help/article/spark-ads?lang=en',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-036', level: 'paid-social', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'What is the minimum audience size for a LinkedIn ad set?',
    options: ['100 member accounts', '300 member accounts', '1,000 member accounts', '50,000 member accounts'],
    correctIndex: 1,
    explanation: 'The minimum is 300 member accounts. Location is a required targeting facet, so check that a Matched Audiences segment is comfortably above 300 before location narrows it.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a424450',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-037', level: 'paid-social', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'How are LinkedIn ad sets using maximum delivery bidding charged?',
    options: [
      'By impressions (CPM), with no option to set a bid or cost cap',
      'By clicks (CPC), with a bid limit that you can adjust anytime',
      'By key result, at the average cost cap you set for the ad set',
      'By impressions (CPM), with an optional cost cap per key result'
    ],
    correctIndex: 0,
    explanation: 'Maximum delivery bids automatically to spend your whole budget for the most key results. It charges by impressions (CPM), with no bid or cost cap setting. Want a cost target? Use cost cap. Want full control? Use manual bidding.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a421112',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-038', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'With LinkedIn cost cap bidding, what does the cost you set represent?',
    options: [
      'An average cost per key result Campaign Manager tries to stay under',
      'A hard limit that no single key result is allowed to exceed',
      'The fixed price you pay for every click, whatever the result',
      'The daily spend limit, after which the ad set stops delivering'
    ],
    correctIndex: 0,
    explanation: 'The cost cap is an average target. Campaign Manager tries to stay under it by going after the lowest-cost results first, so individual results can cost more. Cost cap ad sets are charged by impressions.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a421112',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-039', level: 'paid-social', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'How many custom questions and selectable fields can a LinkedIn Lead Gen Form include?',
    options: [
      'Up to 3 custom questions and 12 fields',
      'Up to 5 custom questions and 15 fields',
      'Up to 3 custom questions and 7 fields',
      'Up to 10 custom questions and 20 fields'
    ],
    correctIndex: 0,
    explanation: 'Lead Gen Forms support up to three custom questions and 12 selectable fields, with multiple-choice or single-line text answers. Fewer fields usually means more completions, so only ask what you need.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423447',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-040', level: 'paid-social', difficulty: 1, type: 'scenario', platform: 'LinkedIn',
    prompt: 'A pharmacy client wants the LinkedIn Insight Tag on every page, including consumer pages about specific medications. What do you advise?',
    options: [
      'Go ahead: Insight Tag data is anonymised, so any page is fine',
      'Keep it off pages that collect or contain sensitive health data',
      'Install it everywhere, but exclude those pages from retargeting',
      'Install it everywhere, but turn off Website Actions on those pages'
    ],
    correctIndex: 1,
    explanation: 'LinkedIn\'s terms say the Insight Tag shouldn\'t be installed on pages that collect or contain sensitive data, such as consumer pages for certain medications. A generic pharmacy homepage may be fine. Leaving the tag on and excluding those pages later doesn\'t solve it.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a424450',
    lastVerified: '2026-10-13'
  }
]);
