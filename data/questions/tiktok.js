// TikTok question bank.
// Every question is checked against the official page in sourceUrl on the lastVerified date.
// Writing rules (balanced lengths, believable wrong answers, trick questions): see README.md.
// "trick": true marks trick-style questions. Set "flagged": true on anything that can't be verified.
ML.registerQuestions('tiktok', [
  {
    id: 'ps-003', level: 'tiktok', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
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
    id: 'ps-012', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
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
  {
    id: 'ps-032', level: 'tiktok', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
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
    id: 'ps-033', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'In TikTok Ads Manager (Self-Attributing Network), which view-through attribution (VTA) window options can you choose?',
    options: ['Off or 1 day', '1 day or 7 days', '7 days or 28 days', 'Off, 1 day or 7 days'],
    correctIndex: 0,
    explanation: 'VTA can be off or 1 day. Click-through (CTA) and engaged view-through (EVTA) can each be 1 or 7 days, which is why "1 day or 7 days" is a tempting wrong answer.',
    sourceUrl: 'https://ads.tiktok.com/help/article/about-the-attribution-window-on-tiktok-ads-manager?lang=en',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-034', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
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
    id: 'ps-035', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'Which objective is NOT available for Spark Ads bought with the Reach & Frequency buying type?',
    options: ['Traffic', 'Video Views', 'Conversions'],
    correctIndex: 2,
    explanation: 'With Reach & Frequency, Spark Ads support Reach, Traffic and Video Views. Conversions, along with objectives such as Lead generation and Sales, needs the Auction buying type.',
    sourceUrl: 'https://ads.tiktok.com/help/article/spark-ads?lang=en',
    lastVerified: '2026-10-13'
  },

  // ---------- Added for the v2 TikTok level ----------
  {
    id: 'tt-041', level: 'tiktok', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'Which TikTok objective sits in the Awareness category?',
    options: ['Reach objective', 'Traffic objective', 'Video views objective', 'Lead generation objective'],
    correctIndex: 0,
    explanation: 'Reach is TikTok\'s awareness objective: show your ad to as many people as possible. Traffic and Video views are consideration objectives, and Lead generation is a conversion objective.',
    sourceUrl: 'https://ads.tiktok.com/help/article/choose-right-objective?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-042', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What is TikTok\'s Community interaction objective for?',
    options: [
      'Getting followers, profile or page visits, or livestream promotion',
      'Collecting leads through an instant form inside TikTok',
      'Sending people to a destination on your website or app',
      'Getting app installs at the lowest possible cost'
    ],
    correctIndex: 0,
    explanation: 'Community interaction focuses on growing your presence on TikTok: more followers, profile or page visits, or promoting a livestream.',
    sourceUrl: 'https://ads.tiktok.com/help/article/choose-right-objective?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-043', level: 'tiktok', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'You want to sell products from your TikTok Shop, website and app. Which objective fits?',
    options: ['Sales objective', 'Reach objective', 'Traffic objective', 'Video views objective'],
    correctIndex: 0,
    explanation: 'The Sales objective (a conversion objective) is for selling products from your TikTok Shop, website or app.',
    sourceUrl: 'https://ads.tiktok.com/help/article/choose-right-objective?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-044', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'Which of these is NOT a Consideration objective in TikTok Ads Manager?',
    options: ['Traffic objective', 'Video views objective', 'Community interaction objective', 'Lead generation objective'],
    correctIndex: 3,
    explanation: 'Consideration covers Traffic, Video views, Community interaction and Branded Mission. Lead generation sits in Conversion, alongside App promotion and Sales.',
    sourceUrl: 'https://ads.tiktok.com/help/article/choose-right-objective?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-045', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'According to TikTok, roughly when does performance volatility in the learning phase start to decline?',
    options: [
      'After about 25 results or 7 days',
      'After about 50 results in 7 days',
      'After about 100 results or 14 days',
      'After exactly 3 days, whatever the results'
    ],
    correctIndex: 0,
    explanation: 'TikTok says volatility typically starts to decline after about 25 campaign results or 7 days in the learning phase. "50 results in 7 days" is Meta\'s benchmark.',
    sourceUrl: 'https://ads.tiktok.com/help/article?aid=11234',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-046', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'Which of these should you avoid while a TikTok campaign is in the learning phase?',
    options: [
      'Pausing it or making edits that retrigger learning',
      'Letting it run with the same budget and the same creative',
      'Checking its results in Ads Manager each day',
      'Leaving its targeting broad while it learns'
    ],
    correctIndex: 0,
    explanation: 'TikTok advises against pausing campaigns or ad groups, edits that retrigger learning, and unreasonable budget or creative volumes during the learning phase.',
    sourceUrl: 'https://ads.tiktok.com/help/article?aid=11234',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-047', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What is TikTok\'s Maximum Results bidding strategy designed to do?',
    options: [
      'Get the most conversions within your budget, without a CPA target',
      'Keep cost per action as close as possible to a target you set',
      'Cap the highest price TikTok can pay in each auction',
      'Spend the whole budget in the first hours of each day'
    ],
    correctIndex: 0,
    explanation: 'Maximum Results is spend-based: it aims for the highest volume of conversions within your budget. Target Cost per Result is the goal-based option that aims to keep CPA near your target.',
    sourceUrl: 'https://ads.tiktok.com/help/article/bidding-best-practices?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-048', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'When is TikTok\'s Target Cost per Result bidding strategy most useful?',
    options: [
      'When you have a specific budget in mind for each conversion',
      'When you want as many conversions as possible, at any cost',
      'When you\'re promoting a livestream that starts in an hour',
      'When your campaign has no conversion tracking set up'
    ],
    correctIndex: 0,
    explanation: 'Target Cost per Result aims to keep cost per action close to the target CPA you set, which suits advertisers with a specific cost per conversion in mind.',
    sourceUrl: 'https://ads.tiktok.com/help/article/bidding-best-practices?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-049', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'With Maximum Results bidding, what daily budget does TikTok suggest to pass the learning phase?',
    options: [
      '10× your average daily CPA from the past 7 days',
      '2× your average daily CPA from the past 7 days',
      '50× your average daily CPA from the past 30 days',
      'Exactly $50 a day, whatever your CPA'
    ],
    correctIndex: 0,
    explanation: 'TikTok suggests a daily budget of 10 times your average daily CPA over the past 7 days, so the ad group gets enough conversions to pass learning.',
    sourceUrl: 'https://ads.tiktok.com/help/article/bidding-best-practices?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-050', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'After a TikTok campaign has exited learning, what\'s the most you should raise its budget by in one adjustment?',
    options: ['30%', '40%', '50%', '100%'],
    correctIndex: 0,
    explanation: 'TikTok suggests raising the budget by no more than 30% per adjustment after learning (no more than 40% during learning), and not adjusting more often than every two days.',
    sourceUrl: 'https://ads.tiktok.com/help/article/budget?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-051', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'How often does TikTok suggest you adjust a campaign\'s budget, at most?',
    options: ['Every two days', 'Every few hours', 'Twice a day', 'Every hour'],
    correctIndex: 0,
    explanation: 'To keep CPA stable and support optimisation, TikTok advises against adjusting the budget more often than every two days.',
    sourceUrl: 'https://ads.tiktok.com/help/article/budget?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-052', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'What are TikTok\'s minimum daily budgets at the campaign and ad group levels?',
    options: [
      'Over $50 per campaign, over $20 per ad group',
      'Over $20 per campaign, over $50 per ad group',
      'Over $10 per campaign, over $5 per ad group',
      'Over $100 per campaign, over $50 per ad group'
    ],
    correctIndex: 0,
    explanation: 'Daily budgets must exceed $50 at campaign level and $20 at ad group level. Swapping the two is a common slip.',
    sourceUrl: 'https://ads.tiktok.com/help/article/budget?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-053', level: 'tiktok', difficulty: 5, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'An ad group runs for 31 days on a lifetime budget. What\'s its minimum lifetime budget?',
    options: ['$620', '$310', '$930', '$20'],
    correctIndex: 0,
    explanation: 'An ad group\'s minimum lifetime budget is total days times the minimum daily budget: 31 × $20 = $620.',
    sourceUrl: 'https://ads.tiktok.com/help/article/budget?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-054', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'Once a TikTok campaign or ad group is live, what can\'t you change about its budget?',
    options: [
      'Switch between daily and lifetime budget',
      'Increase the budget amount at any time later',
      'Decrease the budget amount',
      'Extend the schedule to resume delivery'
    ],
    correctIndex: 0,
    explanation: 'You can update the budget amount at any time, but you can\'t switch between daily and lifetime budget types once a campaign or ad group is live.',
    sourceUrl: 'https://ads.tiktok.com/help/article/budget?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-055', level: 'tiktok', difficulty: 4, type: 'scenario', platform: 'TikTok',
    prompt: 'A campaign\'s budget is set lower than one of its ad group budgets, and delivery is patchy. What does TikTok advise?',
    options: [
      'Keep the campaign budget no lower than the ad group budget',
      'Lower the ad group budget to $5 so it fits under the campaign',
      'Switch the ad group to a lifetime budget with no end date',
      'Pause the campaign for 7 days to reset its delivery'
    ],
    correctIndex: 0,
    explanation: 'TikTok says the campaign budget shouldn\'t be lower than the ad group budget, because that can cause delivery issues. Ad group daily budgets also have to exceed $20.',
    sourceUrl: 'https://ads.tiktok.com/help/article/budget?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-056', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What do you need before you can create a TikTok Lookalike Audience?',
    options: [
      'A Custom Audience to use as the source',
      'A Spark Ads authorisation code',
      'At least 10,000 followers on your account',
      'An active Smart+ campaign'
    ],
    correctIndex: 0,
    explanation: 'A Lookalike Audience is built from a Custom Audience source, such as a customer file you\'ve uploaded, to reach people similar to your current customers.',
    sourceUrl: 'https://ads.tiktok.com/help/article/create-lookalike-audience?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-057', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'When creating a TikTok Lookalike Audience, what does choosing "Omit" for the source do?',
    options: [
      'Shows ads to the lookalike people, but not the source audience',
      'Shows ads to the source audience and the lookalike together',
      'Deletes the source Custom Audience once the lookalike is built',
      'Hides the lookalike from reports in Audience Manager'
    ],
    correctIndex: 0,
    explanation: 'Omit excludes the source Custom Audience, so ads reach only the lookalike. Contain includes both the lookalike and the source audience.',
    sourceUrl: 'https://ads.tiktok.com/help/article/create-lookalike-audience?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-058', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'How long does TikTok usually take to create a Lookalike Audience?',
    options: ['24–48 hours', 'About 1 hour', '5–7 days', '2–4 weeks'],
    correctIndex: 0,
    explanation: 'Lookalike audiences are usually created within 24–48 hours, and show as unavailable in Audience Manager while they\'re building.',
    sourceUrl: 'https://ads.tiktok.com/help/article/create-lookalike-audience?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-059', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'How does a TikTok split test keep its comparison fair?',
    options: [
      'It splits the audience into two equal groups, each seeing one version',
      'It shows both versions to everyone and averages the results',
      'It runs the versions one after another in different weeks',
      'It sends more budget to the leading version as it runs'
    ],
    correctIndex: 0,
    explanation: 'Split testing divides the audience into two equal groups, each seeing only one ad group, which avoids "squeezing" where the two versions compete for the same people.',
    sourceUrl: 'https://ads.tiktok.com/help/article/split-testing?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-060', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'When does a TikTok split test declare a winning ad group?',
    options: [
      'Only when the result is statistically significant (90% confidence)',
      'After 48 hours, picking whichever ad group has the lower CPA overall',
      'When one ad group spends its budget before the other',
      'When the advertiser picks one in Ads Manager'
    ],
    correctIndex: 0,
    explanation: 'Split testing aims for a 90% confidence level, and only selects a winner when the result is statistically significant. You can then keep running the winner in one click.',
    sourceUrl: 'https://ads.tiktok.com/help/article/split-testing?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-061', level: 'tiktok', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'Which video shape does TikTok recommend for Non-Spark in-feed ads?',
    options: ['Vertical 9:16', 'Square 1:1', 'Horizontal 16:9', 'Portrait 4:5'],
    correctIndex: 0,
    explanation: 'Vertical 9:16 (at least 540×960px) is recommended. Horizontal 16:9 and square 1:1 are accepted too, but they don\'t fill the screen.',
    sourceUrl: 'https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-062', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'What\'s the maximum video length for a Non-Spark TikTok in-feed ad?',
    options: ['Up to 10 minutes', 'Up to 60 seconds', 'Up to 3 minutes', 'Up to 15 seconds'],
    correctIndex: 0,
    explanation: 'Non-Spark in-feed videos can be up to 10 minutes long (older guides said 60 seconds). Spark Ads pulled from organic posts have no duration restriction. Shorter videos often still work best creatively.',
    sourceUrl: 'https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-063', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What\'s true of captions on Non-Spark TikTok in-feed ads?',
    options: [
      'They can\'t include clickable links, @ symbols or hashtags',
      'They can use any custom font and colour that matches your brand',
      'They\'re copied from your most recent organic post',
      'They can be up to 4 lines, with clickable hashtags'
    ],
    correctIndex: 0,
    explanation: 'Non-Spark captions show in a fixed white font and don\'t support clickable links, @ symbols or hashtags. Spark Ads take their caption (up to 4 lines) from the organic post.',
    sourceUrl: 'https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-064', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'Where does the caption on a Spark Ad come from?',
    options: [
      'The organic post\'s caption, showing up to 4 lines',
      'A new caption you write in Ads Manager, up to 2 lines',
      'TikTok writes it automatically from your landing page',
      'The creator\'s profile bio, cut to 100 characters'
    ],
    correctIndex: 0,
    explanation: 'Spark Ads pull the caption directly from the organic video, showing a maximum of 4 lines including emojis.',
    sourceUrl: 'https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-065', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What is TikTok\'s Global App Bundle placement?',
    options: [
      'Ads on ByteDance\'s other apps, like CapCut',
      'A bundle of TikTok ads sold at a fixed price',
      'Ads shown on every app installed on a phone',
      'TikTok ads translated into several languages'
    ],
    correctIndex: 0,
    explanation: 'Global App Bundle places ads on ByteDance\'s emerging apps, such as CapCut, Fizzo and Melolo, to reach audiences beyond TikTok in premium ad slots.',
    sourceUrl: 'https://ads.tiktok.com/help/article/global-app-bundle-placement?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-066', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'What was the TikTok Ad Network previously called?',
    options: ['Pangle', 'Lemon8', 'TopView', 'Pulse'],
    correctIndex: 0,
    explanation: 'The TikTok Ad Network was formerly called Pangle, and it serves ads across third-party publisher apps. TopView and Pulse are premium in-app ad formats, and Lemon8 is a separate ByteDance app.',
    sourceUrl: 'https://ads.tiktok.com/help/article/block-list?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-067', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What does the TikTok Ad Network block list control?',
    options: [
      'Which TikTok Ad Network apps your ads won\'t appear on',
      'Which videos inside the TikTok app your ads appear next to',
      'Which users are blocked from seeing any of your ads',
      'Which keywords stop your Search ads from showing'
    ],
    correctIndex: 0,
    explanation: 'The block list stops your ads appearing on chosen TikTok Ad Network placements (by bundle ID). For brand safety inside the TikTok app, you use the Brand Safety Hub instead.',
    sourceUrl: 'https://ads.tiktok.com/help/article/block-list?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-068', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'For engaged view-through attribution (EVTA), how long must someone watch a TikTok ad before converting?',
    options: ['6 seconds or more', '2 seconds or more', '15 seconds or more', 'The full video'],
    correctIndex: 0,
    explanation: 'An engaged view-through is recorded when someone watches an ad for 6 seconds or more without clicking, then converts.',
    sourceUrl: 'https://ads.tiktok.com/help/article/attribution-overview?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-069', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'Why does TikTok highly recommend turning on view-through attribution (VTA)?',
    options: [
      'It gives a fuller picture of ad value and more data for optimisation',
      'It removes duplicate conversions between the Pixel and Events API',
      'It lowers your CPM by counting fewer impressions',
      'It stops conversions from being counted after 1 day'
    ],
    correctIndex: 0,
    explanation: 'VTA credits conversions from people who saw but didn\'t click an ad. That gives a more complete view of TikTok\'s value and more conversion data for the system to optimise with.',
    sourceUrl: 'https://ads.tiktok.com/help/article/attribution-overview?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-070', level: 'tiktok', difficulty: 5, type: 'multiple_choice', platform: 'TikTok', trick: true,
    prompt: 'What do you need before you can use Value-based Optimization (VBO) for a website?',
    options: [
      'At least 20 complete payment events with value in any 7 days',
      'At least 50 purchases with value recorded in the last 30 days',
      'At least 100 add-to-cart events in the last 7 days',
      'A TikTok Shop with at least 10 product listings'
    ],
    correctIndex: 0,
    explanation: 'Web VBO becomes available after at least 20 attributed unique complete payment events with value and currency over any 7 consecutive days. Purchase events must send value and currency.',
    sourceUrl: 'https://ads.tiktok.com/help/article/how-to-promote-a-website-using-value-based-optimization',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-071', level: 'tiktok', difficulty: 4, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'To promote a website with Value-based Optimization, which objective and optimisation event do you choose?',
    options: [
      'Sales objective, optimising for Purchase',
      'Traffic objective, optimising for clicks',
      'Reach objective, optimising for impressions',
      'Lead generation, optimising for form submits'
    ],
    correctIndex: 0,
    explanation: 'Web VBO is set up with the Sales objective, your TikTok Pixel, and Purchase as the optimisation event, so the system can favour higher-value buyers.',
    sourceUrl: 'https://ads.tiktok.com/help/article/how-to-promote-a-website-using-value-based-optimization',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-072', level: 'tiktok', difficulty: 2, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What is a TikTok Search campaign?',
    options: [
      'A campaign using keywords to serve ads in TikTok search results',
      'A campaign that targets people by their Google search history',
      'A campaign that finds trending sounds for your creative',
      'A report showing which searches led to your profile'
    ],
    correctIndex: 0,
    explanation: 'A Search campaign uses keywords to serve ads within TikTok\'s search results page. Manual and Smart+ campaigns are the other campaign types.',
    sourceUrl: 'https://ads.tiktok.com/help/article/how-to-promote-a-website-using-value-based-optimization',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-073', level: 'tiktok', difficulty: 1, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'What is the TikTok Pixel?',
    options: [
      'Code on your website that shares website events with TikTok',
      'A tiny image ad that appears between videos in the For You feed',
      'A score showing how sharp your video quality is',
      'A tool for designing thumbnails for video ads'
    ],
    correctIndex: 0,
    explanation: 'The TikTok Pixel is a piece of code on your website that shares website events with TikTok. It can be set up manually or through partners such as Shopify or Google Tag Manager.',
    sourceUrl: 'https://ads.tiktok.com/help/article/get-started-pixel?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-074', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'How does Smart+ automated creative help reduce ad fatigue?',
    options: [
      'It detects fatigue, refreshes combinations and moves budget to the best creative',
      'It pauses the whole campaign as soon as CTR drops below 1%',
      'It replaces your videos with stock footage after 7 days',
      'It shows each creative to every person at most once'
    ],
    correctIndex: 0,
    explanation: 'Smart+ automated creative uses ad group fatigue detection and auto-refresh to vary creative combinations. It shifts budget towards the highest-performing creative and pauses poor performers.',
    sourceUrl: 'https://ads.tiktok.com/help/article/about-smart-plus-campaign?lang=en',
    lastVerified: '2026-10-20'
  },
  {
    id: 'tt-075', level: 'tiktok', difficulty: 3, type: 'multiple_choice', platform: 'TikTok',
    prompt: 'For Spark Ads, what can you customise to suit your campaign and help minimise costs?',
    options: [
      'The duration of the post\'s authorisation code',
      'The number of likes shown on the original post',
      'The creator\'s follower count shown on the ad',
      'The length of the original organic video'
    ],
    correctIndex: 0,
    explanation: 'Spark Ads let you customise how long an authorisation code lasts, to match campaign needs. Engagement shown on the post is real organic and paid activity, so you can\'t change it.',
    sourceUrl: 'https://ads.tiktok.com/help/article/spark-ads?lang=en',
    lastVerified: '2026-10-20'
  }
]);
