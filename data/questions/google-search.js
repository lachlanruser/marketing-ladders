// Google Ads: Search question bank.
// Every question is checked against the official Google Ads Help page in sourceUrl on the lastVerified date.
// Writing rules (balanced lengths, believable wrong answers, trick questions): see README.md.
// "trick": true marks trick-style questions. Set "flagged": true on anything that can't be verified.
ML.registerQuestions('google-search', [
  {
    id: 'pq-001', level: 'google-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'On what scale, and at what level, does Google Ads report Quality Score?',
    options: ['1–10, at the keyword level', '1–100, at the ad group level', '1–10, at the campaign level', '1–5, at the ad level'],
    correctIndex: 0,
    explanation: 'Quality Score is a 1–10 diagnostic reported for each keyword. It compares your ad and landing page quality with other advertisers who showed for the exact same search over the last 90 days.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6167118',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-002', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Which of these is NOT one of the three Quality Score components?',
    options: ['Expected clickthrough rate', 'Ad relevance to the search', 'Landing page experience', 'Your maximum CPC bid'],
    correctIndex: 3,
    explanation: 'Quality Score combines expected CTR, ad relevance and landing page experience, each rated Above average, Average or Below average. Your bid matters for Ad Rank, but it isn\'t part of Quality Score.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6167118',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-003', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
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
    id: 'pq-004', level: 'google-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-005', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-006', level: 'google-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'Which keyword match type reaches the widest range of searches?',
    options: ['Broad match', 'Phrase match', 'Exact match', 'Negative match'],
    correctIndex: 0,
    explanation: 'Broad match reaches the widest set of searches. It covers everything the same keyword would match as phrase or exact, plus additional related searches.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7478529',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-007', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-008', level: 'google-search', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'You add the negative broad match keyword "flowers". Which search can your ad still show for?',
    options: ['red flower', 'red flowers', 'flowers today', 'buy flowers'],
    correctIndex: 0,
    explanation: 'Negative keywords don\'t match close variants. Excluding "flowers" blocks "red flowers", but not the singular "red flower". To block both, add each form as a negative.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2453972',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-009', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
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
    id: 'pq-010', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
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
    id: 'pq-011', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-012', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-015', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'According to Google, which match type does Smart Bidding work best with?',
    options: ['Broad match', 'Exact match', 'Phrase match', 'Close variants'],
    correctIndex: 0,
    explanation: 'Google says Smart Bidding works best with broad match, because the wider set of searches lets it learn what performs best. Close variants are a matching behaviour, not a match type.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7478529',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-018', level: 'google-search', difficulty: 4, type: 'scenario', platform: 'Google',
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
    id: 'pq-024', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-025', level: 'google-search', difficulty: 4, type: 'scenario', platform: 'Google',
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
    id: 'pq-027', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-028', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-029', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-030', level: 'google-search', difficulty: 3, type: 'scenario', platform: 'Google',
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
    id: 'pq-039', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-040', level: 'google-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
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
  },

  // ---------- Added for the v2 Google Ads: Search level ----------
  {
    id: 'gs-041', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'You add the negative broad match keyword "running shoes". Which search would still let your ad show?',
    options: ['running shoe', 'shoes running', 'blue running shoes', 'running shoes'],
    correctIndex: 0,
    explanation: 'Negative broad blocks searches containing all the terms in any order, so "shoes running" and "blue running shoes" are blocked. Negatives don\'t cover singular or plural variants, so "running shoe" can still show.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2453972',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-042', level: 'google-search', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'With the negative EXACT match keyword "running shoes", which search can your ad still show for?',
    options: ['blue running shoes', 'running shoes', 'Running Shoes', 'runing shoes'],
    correctIndex: 0,
    explanation: 'Negative exact blocks only the exact terms in the same order with no extra words, so "blue running shoes" can still show. Casing and misspellings are handled automatically, so those are blocked too.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2453972',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-043', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'How does a negative phrase match keyword block searches?',
    options: [
      'When the search has all the terms in the same order, extra words allowed',
      'When the search contains any one of the keyword\'s terms, in any order at all',
      'When the search is the exact phrase with no extra words at all',
      'When the search is a close variant or synonym of the phrase'
    ],
    correctIndex: 0,
    explanation: 'Negative phrase blocks searches that include the keyword terms in the same order, even with extra words around them. Negative exact needs the phrase with no extra words.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2453972',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-044', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'What do you need to add yourself when building a negative keyword list?',
    options: [
      'Synonyms and singular or plural versions',
      'Every misspelling of each keyword',
      'Upper and lower case versions of each term',
      'The same keyword in each match type'
    ],
    correctIndex: 0,
    explanation: 'Negative keywords automatically account for casing and misspellings, but not close variants, so add synonyms and singular or plural forms yourself.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2453972',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-045', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'Where does an account-level negative keyword list apply?',
    options: [
      'All eligible Search and Shopping inventory in the account',
      'Every campaign type in the account, including Display and Video',
      'The campaign you created the list in, and no others',
      'Brand campaigns using exact match keywords'
    ],
    correctIndex: 0,
    explanation: 'An account-level negative keyword list automatically applies to all eligible Search and Shopping inventory across relevant campaign types, so you don\'t have to add the same negatives everywhere.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2453972',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-046', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does the "Optimize" ad rotation setting do?',
    options: [
      'Prioritises the ads in an ad group expected to perform better',
      'Rotates every ad in the ad group evenly, whatever its results',
      'Shows all the ads in an ad group at the same time',
      'Pauses any ad with Below average Ad Strength'
    ],
    correctIndex: 0,
    explanation: '"Optimize" uses signals like keyword, search term, device and location to favour ads expected to get more clicks (and conversions with Smart Bidding). "Do not optimize" rotates ads more evenly.',
    sourceUrl: 'https://support.google.com/google-ads/answer/112876',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-047', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'Why do the ads in one ad group rotate rather than all showing at once?',
    options: [
      'No more than one ad from your account can show at a time',
      'Google randomly hides half of the ads in each auction',
      'Each ad must wait 24 hours between impressions',
      'Ads rotate to keep Quality Score stable over time'
    ],
    correctIndex: 0,
    explanation: 'Only one ad from your account can show at a time, so ads in an ad group rotate. The ad rotation setting controls how often each one is served.',
    sourceUrl: 'https://support.google.com/google-ads/answer/112876',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-048', level: 'google-search', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'What can Google Keyword Planner show you?',
    options: [
      'Keyword ideas, monthly search estimates and estimated costs',
      'Your competitors\' exact bids for each of their keywords in real time',
      'Guaranteed clicks and conversions for each keyword',
      'The organic ranking of your website for each keyword'
    ],
    correctIndex: 0,
    explanation: 'Keyword Planner suggests related keywords and estimates monthly searches and the cost to target them. Forecasts are estimates, not guarantees, and it doesn\'t reveal competitors\' bids.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7337243',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-049', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'Which set of features does AI Max for Search campaigns bring together?',
    options: [
      'Search term matching, text customisation and final URL expansion',
      'Audience signals, asset groups and automatic video creation for YouTube',
      'Manual CPC, ad schedules and location bid adjustments',
      'Shopping feeds, product groups and merchant promotions'
    ],
    correctIndex: 0,
    explanation: 'AI Max adds improved search term matching, text customisation of headlines and descriptions, and final URL expansion, which sends people to the most relevant landing page.',
    sourceUrl: 'https://support.google.com/google-ads/answer/15910366',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-050', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'A client turns on AI Max. Will their existing negative keywords still be respected?',
    options: [
      'Yes, negative keywords are still respected',
      'No, AI Max ignores negatives to widen reach',
      'Partly, just exact match negatives are kept',
      'No, they must be rebuilt as brand exclusions'
    ],
    correctIndex: 0,
    explanation: 'Google confirms negative keywords are respected even with AI Max turned on, so expanded matching won\'t override your exclusions.',
    sourceUrl: 'https://support.google.com/google-ads/answer/15913066',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-051', level: 'google-search', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'A search could match both an AI Max Search campaign and a Performance Max campaign. Which serves?',
    options: [
      'Whichever can produce the ad with the higher Ad Rank',
      'AI Max, as Search campaigns take priority over PMax',
      'Performance Max, as it covers more channels',
      'Whichever campaign has the larger daily budget'
    ],
    correctIndex: 0,
    explanation: 'As with broad match and Performance Max, when a query is eligible for both AI Max and Performance Max, the one with the higher Ad Rank serves. (An identical exact match keyword would get priority.)',
    sourceUrl: 'https://support.google.com/google-ads/answer/15913066',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-052', level: 'google-search', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'Google describes AI Max as an evolution of which earlier features?',
    options: [
      'Dynamic Search Ads and Performance Max final URL expansion',
      'Expanded text ads and modified broad match keywords from older accounts',
      'Smart campaigns and Display remarketing lists',
      'Enhanced CPC and manual bid adjustments'
    ],
    correctIndex: 0,
    explanation: 'AI Max builds on Dynamic Search Ads (DSA) and Performance Max final URL expansion, using a broader understanding of the URLs on your domain, while keeping the control of Search campaigns.',
    sourceUrl: 'https://support.google.com/google-ads/answer/15913066',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-053', level: 'google-search', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'In Google Ads reporting, what is an "absolute top" impression?',
    options: [
      'Your ad shown as the very first ad among the top ads',
      'Your ad shown anywhere among the top ads on the page',
      'Your ad shown above the first organic result, in any slot',
      'Your ad shown first on the Search partner network'
    ],
    correctIndex: 0,
    explanation: 'Absolute top means the very first ad among the top ads. A "top" impression is anywhere among the top ads, usually above the organic results.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7501826',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-054', level: 'google-search', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'Why doesn\'t Google recommend using top and absolute top impression rates as bidding targets?',
    options: [
      'They can fall as bids rise, when you win tougher auctions lower down',
      'They update just once a month, so they lag behind your bid changes',
      'They exclude mobile searches, so most traffic isn\'t counted',
      'They\'re estimates for brand keywords and nothing else'
    ],
    correctIndex: 0,
    explanation: 'Higher bids can get you into more competitive auctions where you show in a worse position, so these rates can drop as bids rise. Use them to understand CTR changes, not as bid targets.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7501826',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-055', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does an ad status of "Eligible (limited)" mean?',
    options: [
      'The ad complies, but policy limits where, when or to whom it shows',
      'The ad is still under review by Google, so it isn\'t serving to anyone yet',
      'The ad broke a policy and can\'t show anywhere',
      'The ad\'s budget is limited, so it shows less often'
    ],
    correctIndex: 0,
    explanation: '"Eligible (limited)" ads comply with policy but are restricted by location, age or device, under policies such as Alcohol, Gambling, Healthcare or Trademarks. A disapproved ad can\'t show at all.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2684542',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-056', level: 'google-search', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'A keyword shows "—" in the Quality Score column. What does that usually mean?',
    options: [
      'Too few searches exactly match the keyword to score it',
      'The keyword was disapproved for breaking a policy',
      'The keyword has the lowest possible Quality Score',
      'The keyword is paused, so it has no current score'
    ],
    correctIndex: 0,
    explanation: 'A "—" means there aren\'t enough searches exactly matching the keyword to calculate Quality Score. Keyword Planner can help you find higher-volume keywords.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6167118',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-057', level: 'google-search', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'You switch a keyword from phrase match to exact match. What happens to its Quality Score?',
    options: [
      'Nothing: it\'s based on exact searches of the keyword',
      'It resets to 5 while the keyword relearns',
      'It rises, because exact match is more relevant',
      'It drops, because exact match gets fewer impressions'
    ],
    correctIndex: 0,
    explanation: 'Quality Score is based on historical impressions for exact searches of your keyword, so changing the match type doesn\'t change it.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6167118',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-058', level: 'google-search', difficulty: 5, type: 'multiple_choice', platform: 'Google',
    prompt: 'In each auction, what is Ad Rank calculated for?',
    options: [
      'First to decide eligibility, then to rank you against other ads',
      'Once a day, to set your average position for that day',
      'Once, after the auction, to decide your actual CPC',
      'Weekly, to update the Quality Score of each keyword'
    ],
    correctIndex: 0,
    explanation: 'Ad Rank is calculated first to decide whether your ad is eligible to show, then again to decide where it ranks against other eligible ads. That\'s why position can change from search to search.',
    sourceUrl: 'https://support.google.com/google-ads/answer/1752122',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gs-059', level: 'google-search', difficulty: 3, type: 'scenario', platform: 'Google',
    prompt: 'A user searches in Spanish, but Google is confident they also understand English. Can your English ad for the keyword "blue shoes" show?',
    options: [
      'Yes, multilingual users may see ads in another language',
      'No, ads must match the language of the search',
      'Just if you add the Spanish keyword "zapatos azules"',
      'Just on Search partner sites, not on Google'
    ],
    correctIndex: 0,
    explanation: 'Google may show an ad in a different language from the search when it\'s confident the user understands that language. For example, an English "blue shoes" ad for "zapatos azules".',
    sourceUrl: 'https://support.google.com/google-ads/answer/7478529',
    lastVerified: '2026-10-21'
  }
]);
