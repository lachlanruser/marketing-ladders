// Paid search question bank (Level 2): Google Ads.
// Every question is checked against the official Google Ads Help page in sourceUrl on the lastVerified date.
// Writing rules (balanced lengths, believable wrong answers, trick questions): see README.md.
// "trick": true marks trick-style questions. Set "flagged": true on anything that can't be verified.
ML.registerQuestions('paid-search', [
  {
    id: 'pq-001', level: 'paid-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'On what scale, and at what level, does Google Ads report Quality Score?',
    options: ['1–10, at the keyword level', '1–100, at the ad group level', '1–10, at the campaign level', '1–5, at the ad level'],
    correctIndex: 0,
    explanation: 'Quality Score is a 1–10 diagnostic reported for each keyword. It compares your ad and landing page quality with other advertisers who showed for the exact same search over the last 90 days.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6167118',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-002', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Which of these is NOT one of the three Quality Score components?',
    options: ['Expected clickthrough rate', 'Ad relevance to the search', 'Landing page experience', 'Your maximum CPC bid'],
    correctIndex: 3,
    explanation: 'Quality Score combines expected CTR, ad relevance and landing page experience, each rated Above average, Average or Below average. Your bid matters for Ad Rank, but it isn\'t part of Quality Score.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6167118',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-003', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Is Quality Score used as an input in the Google Ads auction?',
    options: [
      'No, it\'s a diagnostic tool, not an auction input',
      'Yes, it\'s multiplied by your bid to set Ad Rank',
      'Yes, though just for keywords set to exact match type',
      'No, it\'s used to set your actual CPC instead'
    ],
    correctIndex: 0,
    explanation: 'Google is explicit that Quality Score isn\'t an auction input. It\'s a diagnostic for spotting where ads, landing pages or keywords could improve. The auction uses real-time ad quality signals within Ad Rank instead.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6167118',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-004', level: 'paid-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'Which best describes what Google Ads Ad Rank is based on?',
    options: [
      'Bid, ad and landing page quality, thresholds and search context',
      'Your bid and daily budget, compared with rival advertisers\' budgets',
      'Your Quality Score multiplied by your account\'s total spend',
      'Your bid and the age and history of your Google Ads account'
    ],
    correctIndex: 0,
    explanation: 'Ad Rank weighs your bid, the quality of your ads and landing page, Ad Rank thresholds, auction competitiveness, the context of the search, and the expected impact of assets. Highly relevant ads can win a higher position for less.',
    sourceUrl: 'https://support.google.com/google-ads/answer/1752122',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-005', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'In the Google Ads auction, what do you usually pay for a click?',
    options: [
      'Enough to clear thresholds and beat the ad ranked below',
      'Your full max. CPC bid, every single time your ad is clicked',
      'The average CPC of every advertiser in that auction',
      'The bid of the highest-ranked ad above your own ad'
    ],
    correctIndex: 0,
    explanation: 'You pay what\'s minimally needed to clear Ad Rank thresholds and beat the Ad Rank of the advertiser just below you, which is often much less than your max. CPC. With no competitor below, you pay the reserve price.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6297',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-006', level: 'paid-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'Which keyword match type reaches the widest range of searches?',
    options: ['Broad match', 'Phrase match', 'Exact match', 'Negative match'],
    correctIndex: 0,
    explanation: 'Broad match reaches the widest set of searches. It covers everything the same keyword would match as phrase or exact, plus additional related searches.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7478529',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-007', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'Compared with the same keyword in phrase and exact match, what does a broad match keyword cover?',
    options: [
      'All their searches, plus additional related searches',
      'Searches containing all of the keyword\'s words in order',
      'Exact match searches, but not phrase match ones',
      'Related searches, excluding those exact match would get'
    ],
    correctIndex: 0,
    explanation: 'Broader match types capture all the queries of narrower ones, plus more. So you get the benefit of all three match types without repeating the keyword.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7478529',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-008', level: 'paid-search', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'You add the negative broad match keyword "flowers". Which search can your ad still show for?',
    options: ['red flower', 'red flowers', 'flowers today', 'buy flowers'],
    correctIndex: 0,
    explanation: 'Negative keywords don\'t match close variants. Excluding "flowers" blocks "red flowers", but not the singular "red flower". To block both, add each form as a negative.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2453972',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-009', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'How many headlines and descriptions can a single responsive search ad have?',
    options: [
      'Up to 15 headlines and 4 descriptions',
      'Up to 10 headlines and 5 descriptions',
      'Up to 15 headlines and 2 descriptions',
      'Up to 3 headlines and 2 descriptions'
    ],
    correctIndex: 0,
    explanation: 'An RSA takes up to 15 headlines and 4 descriptions, which Google mixes and tests. Up to 3 headlines and 2 descriptions can show at once, which is why those numbers are tempting.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7684791',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-010', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'What are the character limits for responsive search ad headlines and descriptions?',
    options: [
      '30 for headlines, 90 for descriptions',
      '25 for headlines, 80 for descriptions',
      '30 for headlines, 80 for descriptions',
      '35 for headlines, 90 for descriptions'
    ],
    correctIndex: 0,
    explanation: 'Headlines allow up to 30 characters, descriptions up to 90, and each display path up to 15. Double-width characters (e.g. Japanese) count as 2.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7684791',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-011', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'When should you pin text in a responsive search ad?',
    options: [
      'When it has to appear in every ad, e.g. a legal disclaimer',
      'Whenever you want Google to test that particular text more often',
      'When a headline is longer than the 30-character limit',
      'When the ad has fewer than 15 headlines written'
    ],
    correctIndex: 0,
    explanation: 'Text that must appear in every ad has to be pinned to Headline 1, Headline 2 or Description 1. Otherwise assets can show in any order, so pin sparingly, because pinning reduces the combinations Google can test.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7684791',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-012', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does Ad Strength tell you about a responsive search ad?',
    options: [
      'Its potential effectiveness, rated from Poor to Excellent',
      'Its actual click-through rate compared with similar advertisers\' ads',
      'How much it adds to the keyword\'s Quality Score',
      'Its share of impressions within the ad group'
    ],
    correctIndex: 0,
    explanation: 'Ad Strength rates potential effectiveness (Incomplete, Poor, Average, Good, Excellent) and lists actions to improve it. Google recommends at least 2 RSAs per ad group rated Good or Excellent.',
    sourceUrl: 'https://support.google.com/google-ads/answer/9921843',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-013', level: 'paid-search', difficulty: 1, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Which of these is NOT a Smart Bidding strategy?',
    options: ['Target CPA bidding', 'Target ROAS bidding', 'Maximize conversions', 'Maximize clicks'],
    correctIndex: 3,
    explanation: 'Smart Bidding strategies optimise for conversions or conversion value at auction time: Target CPA, Target ROAS, Maximize conversions and Maximize conversion value. Maximize clicks is an automated strategy, but not Smart Bidding.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7065882',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-014', level: 'paid-search', difficulty: 2, type: 'scenario', platform: 'Google',
    prompt: 'An online shop wants the most sales revenue it can get from a fixed budget. Which bid strategy fits best?',
    options: ['Maximize conversion value', 'Maximize conversions', 'Target impression share bidding', 'Maximize clicks'],
    correctIndex: 0,
    explanation: 'Maximize conversion value aims for the highest total value (revenue) within your budget, whereas Maximize conversions counts every sale the same. Target impression share targets visibility, not revenue.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7065882',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-015', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'According to Google, which match type does Smart Bidding work best with?',
    options: ['Broad match', 'Exact match', 'Phrase match', 'Close variants'],
    correctIndex: 0,
    explanation: 'Google says Smart Bidding works best with broad match, because the wider set of searches lets it learn what performs best. Close variants are a matching behaviour, not a match type.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7478529',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-016', level: 'paid-search', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'After you change a bid strategy, roughly how long does Google say it takes to calibrate?',
    options: [
      'A few conversion cycles, typically 1–2',
      'Exactly 7 days, whatever the volume',
      'About 50 conversions within 7 days',
      'About 90 days, until Quality Score updates'
    ],
    correctIndex: 0,
    explanation: 'Calibration typically takes 1–2 conversion cycles. It depends on conversion volume, how long conversions take, and the bid strategy. "50 conversions in 7 days" is Meta\'s learning phase rule, not Google\'s.',
    sourceUrl: 'https://support.google.com/google-ads/answer/13020501',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-017', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'What is a Performance Max campaign?',
    options: [
      'One goal-based campaign that can serve across all Google Ads inventory',
      'A Search campaign that automatically bids on every keyword in your account',
      'A YouTube campaign type built for brand awareness goals',
      'A reporting view that combines all your campaign types'
    ],
    correctIndex: 0,
    explanation: 'Performance Max is a goal-based campaign type that reaches YouTube, Display, Search, Discover, Gmail and Maps from one campaign. It\'s designed to complement keyword-based Search campaigns.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10724817',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-018', level: 'paid-search', difficulty: 4, type: 'scenario', platform: 'Google',
    prompt: 'A search is identical to an eligible exact match keyword in your Search campaign, and a Performance Max campaign could also serve. Which one is used?',
    options: [
      'The Search campaign\'s exact match keyword gets priority',
      'Performance Max, as it covers more channels',
      'Whichever campaign has the larger daily budget',
      'Both serve, splitting the impression and cost between the two'
    ],
    correctIndex: 0,
    explanation: 'Exact match keywords identical to the search term are prioritised over phrase, broad and Performance Max. When priorities tie, the highest Ad Rank wins, not the biggest budget.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7478529',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-019', level: 'paid-search', difficulty: 5, type: 'multiple_choice', platform: 'Google',
    prompt: 'In Performance Max, which inventory do brand exclusions apply to?',
    options: [
      'Search, Shopping and YouTube search inventory',
      'Every channel, including Display and Gmail',
      'Display and YouTube video placements',
      'Search ads on partner sites, not on Google'
    ],
    correctIndex: 0,
    explanation: 'In Performance Max, brand exclusions apply to Search, Shopping and YouTube search inventory, and you can still let Shopping ads appear for excluded brands. They stop you serving on branded queries you want to avoid.',
    sourceUrl: 'https://support.google.com/google-ads/answer/14505308',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-020', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'How does enhanced conversions improve conversion measurement?',
    options: [
      'It sends hashed first-party data, like emails, using SHA256',
      'It sends customers\' raw, unhashed email addresses to Google securely',
      'It models conversions from users who decline cookies',
      'It extends the conversion window from 30 to 90 days'
    ],
    correctIndex: 0,
    explanation: 'Enhanced conversions supplements your tags with first-party data (such as email or phone) hashed with SHA256 before it\'s sent. Modelling for users who decline cookies is part of consent mode.',
    sourceUrl: 'https://support.google.com/google-ads/answer/9888656',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-021', level: 'paid-search', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does Google\'s consent mode do?',
    options: [
      'Passes users\' consent choices to Google tags so they adapt',
      'Shows visitors a cookie banner and records their choice',
      'Blocks Google Ads from tracking any conversions across the EEA',
      'Hashes customer data before it\'s sent to Google'
    ],
    correctIndex: 0,
    explanation: 'Consent mode passes the choices from your cookie banner to Google tags, which then adjust their behaviour. It doesn\'t provide the banner itself, so you still need a consent banner or platform.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10000067',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-022', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'What is the default attribution model for most Google Ads conversion actions?',
    options: ['Data-driven', 'Last click', 'Time decay', 'Position-based'],
    correctIndex: 0,
    explanation: 'Data-driven attribution is the default. Google retired first click, linear, time decay and position-based, so the models you can still choose are data-driven and last click.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6259715',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-023', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'What is the default conversion window in Google Ads?',
    options: ['30 days', '7 days', '90 days', '1 day'],
    correctIndex: 0,
    explanation: 'The default is 30 days. You can change it for each conversion action, for example shorter for a week-long promotion or longer for slow buying cycles. Conversions outside the window aren\'t recorded.',
    sourceUrl: 'https://support.google.com/google-ads/answer/3123169',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-024', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does impression share measure?',
    options: [
      'Impressions received divided by impressions you were eligible for',
      'Your share of all clicks in the auctions you entered',
      'Impressions as a share of every Google search containing your keywords',
      'How often your ad showed in the very first position'
    ],
    correctIndex: 0,
    explanation: 'Impression share is impressions divided by eligible impressions, estimated from targeting, approval status and quality. It shows whether a bigger bid or budget could reach more people.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2497703',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-025', level: 'paid-search', difficulty: 4, type: 'scenario', platform: 'Google',
    prompt: 'A campaign\'s Search lost IS (rank) is high and its lost IS (budget) is near zero. What\'s most likely to help?',
    options: [
      'Improve Ad Rank: ad quality, relevance or bids',
      'Raise the daily budget so ads stop running out early',
      'Narrow the ad schedule to fewer hours',
      'Add more ad groups with the same keywords'
    ],
    correctIndex: 0,
    explanation: 'Lost IS (rank) means impressions missed because of poor Ad Rank, so improve ad quality, relevance or bids. Budget isn\'t the constraint here, because lost IS (budget) is near zero.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7103314',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-026', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'A campaign\'s average daily budget is £100. What\'s the most it can spend on one day?',
    options: [
      'Up to £200, within about £3,040 over the month',
      'Up to £120, within about £3,000 over the month',
      'Up to £100, with any unspent budget rolled over',
      'Up to £300, within about £3,040 over the month'
    ],
    correctIndex: 0,
    explanation: 'On a given day, a campaign can spend up to twice its average daily budget to catch traffic spikes. Over a month it won\'t spend more than 30.4 times the daily budget (£3,040 here).',
    sourceUrl: 'https://support.google.com/google-ads/answer/1704443',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-027', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'Are you charged for clicks that Google identifies as invalid?',
    options: [
      'No, they\'re filtered out of billing and metrics',
      'Yes, unless you file a dispute with Google within 60 days',
      'Yes, but they\'re excluded from your reports',
      'Partly, at a reduced rate per invalid click'
    ],
    correctIndex: 0,
    explanation: 'Invalid clicks (accidental, automated or deliberately inflating costs) are filtered out of metrics and billing. If they\'re found after you\'ve paid, Google credits you where possible.',
    sourceUrl: 'https://support.google.com/google-ads/answer/42995',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-028', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'You add an audience segment to a Search campaign using the "Observation" setting. What happens?',
    options: [
      'Reach is unchanged; you can monitor it and adjust bids',
      'Ads show exclusively to people in that audience segment',
      'People in that audience are excluded from your ads',
      'Bids rise automatically for people in that segment'
    ],
    correctIndex: 0,
    explanation: 'Observation doesn\'t restrict who sees your ads. It lets you monitor how the segment performs and set bid adjustments. The "Targeting" setting is the one that narrows reach.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7365594',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-029', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'Who does Google Ads\' default location option, "Presence or interest", reach?',
    options: [
      'People in, regularly in, or interested in your locations',
      'People physically inside your targeted locations at that moment',
      'People who have searched in your targeted language',
      'People whose Google account address is in the area'
    ],
    correctIndex: 0,
    explanation: 'The default reaches people who are in or regularly in your locations, plus people who\'ve shown interest in them, for example through searches. "Presence" alone limits it to people in or regularly in the area.',
    sourceUrl: 'https://support.google.com/google-ads/answer/1722038',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-030', level: 'paid-search', difficulty: 3, type: 'scenario', platform: 'Google',
    prompt: 'A local plumber\'s ads keep getting clicks from people abroad who are researching the city. Which change fixes this?',
    options: [
      'Switch the location option to Presence',
      'Add a negative keyword for each country',
      'Lower bids with an ad schedule adjustment',
      'Switch to Presence or interest targeting'
    ],
    correctIndex: 0,
    explanation: 'Presence shows ads to people who are in or regularly in the targeted area, cutting out people elsewhere who are just interested in it. "Presence or interest" is the default that\'s causing the issue.',
    sourceUrl: 'https://support.google.com/google-ads/answer/1722038',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-031', level: 'paid-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'Why turn on auto-tagging in Google Ads?',
    options: [
      'To track conversions on all browsers and link Analytics',
      'To add UTM parameters to every ad by hand',
      'To label campaigns automatically by theme and goal',
      'To tag high-performing keywords for automatic bid increases'
    ],
    correctIndex: 0,
    explanation: 'Auto-tagging is needed to track conversions on all browsers, import key events from Google Analytics or a CRM, and share cost and engagement data with Analytics. It\'s on by default for new accounts.',
    sourceUrl: 'https://support.google.com/google-ads/answer/3095550',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-032', level: 'paid-search', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'What\'s the difference between primary and secondary conversion actions?',
    options: [
      'Primary are used for bidding; secondary are for observation',
      'Primary count online sales; secondary count offline sales',
      'Primary use data-driven; secondary use last click attribution',
      'Primary show in reports; secondary are hidden from reports'
    ],
    correctIndex: 0,
    explanation: 'Primary actions appear in the Conversions column and are used for bidding. Secondary actions appear in All conversions for observation, and aren\'t used for bidding unless they\'re part of a custom goal.',
    sourceUrl: 'https://support.google.com/google-ads/answer/11461796',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-033', level: 'paid-search', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'When should you use a seasonality adjustment with Smart Bidding?',
    options: [
      'For a short 1–7 day event with a big conversion rate change',
      'For every public holiday, so Smart Bidding knows they\'re coming',
      'For the whole of Q4, to tell bidding that sales are higher',
      'After a conversion tracking outage, to discount the bad data'
    ],
    correctIndex: 0,
    explanation: 'Seasonality adjustments are for short events (1–7 days) where you expect a major conversion rate change, like a flash sale. Smart Bidding already handles normal seasonality, and tracking outages need data exclusions instead.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10369906',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-034', level: 'paid-search', difficulty: 5, type: 'scenario', platform: 'Google',
    prompt: 'A broken site tag meant no conversions were recorded for 3 days. What should you do so Smart Bidding isn\'t misled?',
    options: [
      'Add a data exclusion covering the clicks from those days',
      'Add a negative seasonality adjustment for those three days',
      'Pause all campaigns until conversion volume recovers',
      'Switch to Manual CPC until the tag has been fixed'
    ],
    correctIndex: 0,
    explanation: 'Data exclusions tell Smart Bidding to ignore data from a tracking problem. They work on clicks, so cover the clicks that could have led to the missing conversions. Seasonality adjustments are for expected conversion rate changes, not outages.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10370710',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-035', level: 'paid-search', difficulty: 5, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Target impression share bidding counts impressions on which network?',
    options: [
      'Google Search, excluding Search Partners',
      'Google Search, including Search Partners',
      'Search and Display networks combined',
      'All Google Ads inventory, as in PMax'
    ],
    correctIndex: 0,
    explanation: 'Impression share for this strategy covers the Google Search Network only, excluding Search Partners. You can aim for the absolute top, the top, or anywhere on the page, and it\'s often used for brand terms.',
    sourceUrl: 'https://support.google.com/google-ads/answer/9121108',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-036', level: 'paid-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'What is a portfolio bid strategy?',
    options: [
      'One automated strategy shared across several campaigns',
      'A manual bid you copy to every keyword in an account',
      'A report comparing bid strategies across campaigns',
      'A single budget shared between several campaigns'
    ],
    correctIndex: 0,
    explanation: 'A portfolio bid strategy groups campaigns, ad groups and keywords under one automated, goal-driven strategy, managed in the Shared library. A single budget shared across campaigns is a shared budget, which is a different thing.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6263072',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-037', level: 'paid-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'How does a Google Ads custom experiment work?',
    options: [
      'It splits your campaign\'s traffic and budget to test a change',
      'It copies the campaign into a new one with twice the budget',
      'It runs on Search Partners to test changes away from Google Search',
      'It tests changes on past data without serving any ads'
    ],
    correctIndex: 0,
    explanation: 'A custom experiment shares the original campaign\'s traffic and budget, so you can compare a changed version against the original. For Search you can split by cookie or by search.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6261395',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-038', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does optimization score estimate?',
    options: [
      'How well your account is set up to perform, from 0–100%',
      'Your account\'s average Quality Score as a percentage',
      'How much of your budget is spent on converting clicks',
      'Your share of the maximum possible conversions'
    ],
    correctIndex: 0,
    explanation: 'Optimization score (0–100%) estimates how well an account is set up to perform, alongside recommendations showing their impact. Treat recommendations as suggestions to review, not targets to blindly hit.',
    sourceUrl: 'https://support.google.com/google-ads/answer/9061546',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-039', level: 'paid-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does Customer Match let you do in Google Ads?',
    options: [
      'Use your own customer data to reach those customers on Google',
      'Match search terms to the closest matching keyword in your account',
      'Find the customers of competitors from their websites',
      'Import offline sales so they show as conversions'
    ],
    correctIndex: 0,
    explanation: 'Customer Match uses the first-party data you\'ve collected, online and offline, to reach and re-engage those customers (and similar people) across Search, Shopping, Gmail, YouTube and Display.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6379332',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-040', level: 'paid-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'Do you pay extra to add assets such as sitelinks to a campaign?',
    options: [
      'No, but clicks on assets are charged like ad clicks',
      'Yes, a small monthly fee for each asset you add',
      'No, and clicks on sitelinks are free of charge',
      'Yes, every asset impression is charged as a CPM'
    ],
    correctIndex: 0,
    explanation: 'Adding assets is free, but clicks on them (sitelinks, calls, and so on) are charged as usual, except seller ratings. Google charges no more than two clicks per impression for an ad and its assets.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7331111',
    lastVerified: '2026-10-18'
  }
]);
