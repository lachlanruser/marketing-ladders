// Google Ads: Bidding & measurement question bank.
// Every question is checked against the official Google Ads Help page in sourceUrl on the lastVerified date.
// Writing rules (balanced lengths, believable wrong answers, trick questions): see README.md.
// "trick": true marks trick-style questions. Set "flagged": true on anything that can't be verified.
ML.registerQuestions('google-bidding', [
  {
    id: 'pq-013', level: 'google-bidding', difficulty: 1, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Which of these is NOT a Smart Bidding strategy?',
    options: ['Target CPA bidding', 'Target ROAS bidding', 'Maximize conversions', 'Maximize clicks'],
    correctIndex: 3,
    explanation: 'Smart Bidding strategies optimise for conversions or conversion value at auction time: Target CPA, Target ROAS, Maximize conversions and Maximize conversion value. Maximize clicks is an automated strategy, but not Smart Bidding.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7065882',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-014', level: 'google-bidding', difficulty: 2, type: 'scenario', platform: 'Google',
    prompt: 'An online shop wants the most sales revenue it can get from a fixed budget. Which bid strategy fits best?',
    options: ['Maximize conversion value', 'Maximize conversions', 'Target impression share bidding', 'Maximize clicks'],
    correctIndex: 0,
    explanation: 'Maximize conversion value aims for the highest total value (revenue) within your budget, whereas Maximize conversions counts every sale the same. Target impression share targets visibility, not revenue.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7065882',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-016', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
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
    id: 'pq-017', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-019', level: 'google-bidding', difficulty: 5, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-020', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-021', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-022', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'What is the default attribution model for most Google Ads conversion actions?',
    options: ['Data-driven', 'Last click', 'Time decay', 'Position-based'],
    correctIndex: 0,
    explanation: 'Data-driven attribution is the default. Google retired first click, linear, time decay and position-based, so the models you can still choose are data-driven and last click.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6259715',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-023', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'What is the default conversion window in Google Ads?',
    options: ['30 days', '7 days', '90 days', '1 day'],
    correctIndex: 0,
    explanation: 'The default is 30 days. You can change it for each conversion action, for example shorter for a week-long promotion or longer for slow buying cycles. Conversions outside the window aren\'t recorded.',
    sourceUrl: 'https://support.google.com/google-ads/answer/3123169',
    lastVerified: '2026-10-18'
  },
  {
    id: 'pq-026', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
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
    id: 'pq-031', level: 'google-bidding', difficulty: 1, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-032', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-033', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-034', level: 'google-bidding', difficulty: 5, type: 'scenario', platform: 'Google',
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
    id: 'pq-035', level: 'google-bidding', difficulty: 5, type: 'multiple_choice', platform: 'Google', trick: true,
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
    id: 'pq-036', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-037', level: 'google-bidding', difficulty: 1, type: 'multiple_choice', platform: 'Google',
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
    id: 'pq-038', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google',
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

  // ---------- Added for the v2 Google Ads: Bidding & measurement level ----------
  {
    id: 'gb-041', level: 'google-bidding', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'What does the Maximize clicks bid strategy aim for?',
    options: [
      'As many clicks as possible within your budget',
      'The highest impression share on the page',
      'The most conversions at your target CPA',
      'The highest return on ad spend possible'
    ],
    correctIndex: 0,
    explanation: 'Maximize clicks sets bids to get as many clicks as possible within your budget. It doesn\'t optimise for impression share or conversions.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6268626',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-042', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'With Maximize clicks, how can you stop CPCs getting higher than you want?',
    options: [
      'Set a maximum CPC bid limit',
      'Add a target ROAS to the campaign',
      'Switch on Target impression share',
      'Lower the campaign\'s daily budget'
    ],
    correctIndex: 0,
    explanation: 'A maximum CPC bid limit caps the bids Maximize clicks can set. Without one, Google adjusts bids to get as many clicks as possible while spending your budget.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6268626',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-043', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'You switch a campaign to Maximize conversions. What happens to your existing bid adjustments?',
    options: [
      'They aren\'t used, except device adjustments set to -100%',
      'They\'re applied on top of every bid the strategy sets',
      'They\'re converted into audience signals for bidding',
      'They\'re deleted, and you must rebuild them afterwards'
    ],
    correctIndex: 0,
    explanation: 'Smart Bidding sets bids from real-time signals, so existing bid adjustments aren\'t used. The exception is a -100% device adjustment, which still stops ads on that device. You don\'t need to remove the adjustments.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7381968',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-044', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'A client has a specific cost-per-conversion goal. Which strategy does Google suggest over plain Maximize conversions?',
    options: ['Target CPA bidding', 'Maximize clicks bidding', 'Manual CPC bidding', 'Target impression share'],
    correctIndex: 0,
    explanation: 'Maximize conversions aims to spend your budget for the most conversions. If you have a specific ROI or cost-per-conversion goal, Google points to Target CPA.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7381968',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-045', level: 'google-bidding', difficulty: 1, type: 'multiple_choice', platform: 'Google',
    prompt: 'What must you set up before you can use Maximize conversions?',
    options: [
      'Conversion tracking',
      'A shared budget',
      'Customer Match lists',
      'A Merchant Center feed'
    ],
    correctIndex: 0,
    explanation: 'Maximize conversions optimises towards conversions, so conversion tracking is required before you can use it.',
    sourceUrl: 'https://support.google.com/google-ads/answer/7381968',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-046', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'How does Target ROAS decide how much to bid on a search?',
    options: [
      'It predicts conversion value, bidding higher where value is likely high',
      'It bids the same amount on every search to keep ROAS steady',
      'It bids highest on whichever keywords drove the most clicks over the last month',
      'It copies the bid of the advertiser ranked just above you'
    ],
    correctIndex: 0,
    explanation: 'Target ROAS uses Google AI to predict the value of a potential conversion at auction time. It bids more on searches likely to bring high-value conversions and less on others. Conversion values must be set up first.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6268637',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-047', level: 'google-bidding', difficulty: 5, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'From June 2026, what is "Maximize conversions with a Target CPA" labelled as in Google Ads?',
    options: ['Target CPA', 'Smart CPA', 'Enhanced CPA', 'Maximize CPA'],
    correctIndex: 0,
    explanation: 'Google is relabelling "Maximize conversions with a Target CPA" as "Target CPA" (and the ROAS equivalent as "Target ROAS"). The bidding behaviour stays exactly the same.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6268637',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-048', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Which campaign type can NOT use a portfolio bid strategy?',
    options: ['Performance Max', 'Search campaigns', 'Display campaigns', 'Shopping campaigns'],
    correctIndex: 0,
    explanation: 'Portfolio bid strategies group campaigns under one automated strategy, but they aren\'t available for Performance Max campaigns.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6263072',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-049', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'For an online shop tracking sales, which conversion counting option does Google suggest?',
    options: [
      'Every conversion, as every sale adds value',
      'One conversion, so repeat buyers aren\'t counted',
      'One conversion per day for each customer',
      'Every conversion, but from new visitors alone'
    ],
    correctIndex: 0,
    explanation: '"Every" counts each conversion after an ad interaction, which suits sales because every sale adds value. "One" suits leads, where one unique lead per click matters.',
    sourceUrl: 'https://support.google.com/google-ads/answer/3438531',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-050', level: 'google-bidding', difficulty: 4, type: 'scenario', platform: 'Google',
    prompt: 'Using "One" conversion counting, someone clicks your ad and fills in 3 auto-insurance forms and 2 home-insurance forms (each its own conversion action). How many conversions are counted?',
    options: ['2', '5', '1', '3'],
    correctIndex: 0,
    explanation: '"One" counts a single conversion per ad click for each conversion action: one for auto, one for home, so 2 in total. "Every" would count all 5.',
    sourceUrl: 'https://support.google.com/google-ads/answer/3438531',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-051', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'Why would you import offline conversions into Google Ads?',
    options: [
      'To measure sales that happen offline, e.g. by phone, after an ad click',
      'To show ads to customers who visited your physical store',
      'To upload extra keywords from an offline spreadsheet',
      'To stop ads showing to people who have already bought from you in store'
    ],
    correctIndex: 0,
    explanation: 'Offline conversion import measures what happens offline (for example a sale over the phone or in your office) after someone clicks your ad. For new setups, Google recommends starting with enhanced conversions for leads.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2998031',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-052', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'If you haven\'t set up offline conversion import yet, what does Google recommend starting with?',
    options: [
      'Enhanced conversions for leads',
      'Manual CSV uploads every week',
      'Call tracking with a forwarding number',
      'Store visit conversions'
    ],
    correctIndex: 0,
    explanation: 'Google recommends enhanced conversions for leads instead. It\'s an upgraded, easier-to-set-up form of offline import with more durable, accurate reporting.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2998031',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-053', level: 'google-bidding', difficulty: 5, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'What changed about enhanced conversions settings from April 2026?',
    options: [
      'Web and leads were combined into one on/off setting',
      'Enhanced conversions became paid for small accounts',
      'Enhanced conversions now needs a separate tag per page',
      'Leads data can no longer be sent from website tags'
    ],
    correctIndex: 0,
    explanation: 'Enhanced conversions for web and for leads are now one on/off setting. Google accepts user-provided data from website tags, Data Manager and API connections without choosing a method.',
    sourceUrl: 'https://support.google.com/google-ads/answer/2998031',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-054', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'With BASIC consent mode, what happens when a visitor declines consent?',
    options: [
      'Google tags stay blocked and no data is sent, not even consent status',
      'Google tags load and send cookieless pings to Google while consent is denied',
      'Google tags load as normal and set cookies anyway',
      'Google tags send the visitor\'s hashed email instead of cookies'
    ],
    correctIndex: 0,
    explanation: 'In basic consent mode, tags don\'t load until the user interacts with the banner. If they decline, nothing is sent and modelling relies on a general model. Cookieless pings are the advanced mode.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10000067',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-055', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'In ADVANCED consent mode, what do Google tags do while consent is denied?',
    options: [
      'Send cookieless pings',
      'Send nothing at all',
      'Set cookies anyway',
      'Stop the page loading'
    ],
    correctIndex: 0,
    explanation: 'Advanced consent mode loads tags when the page opens, and while consent is denied they send cookieless pings. In basic mode, tags stay blocked until consent is given.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10000067',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-056', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'With the New Customer Acquisition goal, what does Google always use by default to identify new customers?',
    options: [
      'Google auto-detection',
      'Your uploaded Customer Match lists',
      'A tag on your order confirmation page',
      'Your Google Analytics audiences'
    ],
    correctIndex: 0,
    explanation: 'Google auto-detection is always used by default in the New Customer Acquisition goal. You can add your own signals, such as Customer Match lists or conversion tags, on top.',
    sourceUrl: 'https://support.google.com/google-ads/answer/14005876',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-057', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'Which campaign types can use customer lifecycle goals such as New Customer Acquisition?',
    options: [
      'Performance Max, Search, Shopping and Demand Gen',
      'Search campaigns, and no other campaign type',
      'Video and Display campaigns in the YouTube network',
      'App campaigns with in-app purchase tracking'
    ],
    correctIndex: 0,
    explanation: 'Customer lifecycle goals help you prioritise customer segments, such as new customers, in Performance Max, Search, Shopping and Demand Gen campaigns.',
    sourceUrl: 'https://support.google.com/google-ads/answer/14005876',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-058', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Google says Smart Bidding needs a standard learning phase to stabilise. Roughly how long?',
    options: ['7–14 days', '24–48 hours', '30–45 days', '90 days'],
    correctIndex: 0,
    explanation: 'Google notes a standard 7–14 day learning phase for Smart Bidding to gather data and stabilise, and advises against frequent manual changes during it.',
    sourceUrl: 'https://support.google.com/google-ads/answer/11461796',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-059', level: 'google-bidding', difficulty: 4, type: 'multiple_choice', platform: 'Google',
    prompt: 'For Search campaigns, which bid strategies can use seasonality adjustments?',
    options: [
      'Target CPA and Target ROAS',
      'Maximize clicks and Manual CPC',
      'Target impression share, with no others',
      'Every strategy, including Manual CPC'
    ],
    correctIndex: 0,
    explanation: 'Seasonality adjustments are available for Search, Shopping, Demand Gen and Display campaigns using Target CPA or Target ROAS. Performance Max and App campaigns can use them with all bid strategies.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10369906',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-060', level: 'google-bidding', difficulty: 3, type: 'scenario', platform: 'Google',
    prompt: 'You add a +50% seasonality adjustment for a 3-day sale. What should you do when the sale ends?',
    options: [
      'Nothing: bidding returns to normal after the event',
      'Add a -50% adjustment for the following 3 days',
      'Pause the campaign for a day to reset bidding',
      'Switch the campaign to Manual CPC for a week'
    ],
    correctIndex: 0,
    explanation: 'Once the event ends, campaigns go back to their usual performance. No negative adjustment is needed after the promotion.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10369906',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-061', level: 'google-bidding', difficulty: 5, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'Which of these campaign types does NOT support data exclusions?',
    options: ['Hotel campaigns', 'Search campaigns', 'Shopping campaigns', 'Performance Max'],
    correctIndex: 0,
    explanation: 'Data exclusions are available for Search, Display, Shopping and Performance Max campaigns, but not Hotel or Travel campaigns.',
    sourceUrl: 'https://support.google.com/google-ads/answer/10370710',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-062', level: 'google-bidding', difficulty: 2, type: 'multiple_choice', platform: 'Google',
    prompt: 'What changes an account\'s optimization score?',
    options: [
      'Applying or dismissing its recommendations',
      'The number of users with account access',
      'How often you log in to Google Ads',
      'The size of your total monthly budget'
    ],
    correctIndex: 0,
    explanation: 'Optimization score is calculated in real time from your stats, settings and recommendations. Applying or dismissing recommendations changes it.',
    sourceUrl: 'https://support.google.com/google-ads/answer/9061546',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-063', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google', trick: true,
    prompt: 'How many custom experiments can you schedule for one campaign, and how many can run at once?',
    options: [
      'Up to 5 scheduled, 1 running at a time',
      'Up to 3 scheduled, 2 running at a time',
      'Up to 10 scheduled, 5 running at a time',
      'Unlimited scheduled, 1 running a month'
    ],
    correctIndex: 0,
    explanation: 'You can schedule up to 5 experiments for a campaign, but only one can run at a time.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6261395',
    lastVerified: '2026-10-21'
  },
  {
    id: 'gb-064', level: 'google-bidding', difficulty: 3, type: 'multiple_choice', platform: 'Google',
    prompt: 'Which of these is NOT a reason a bid strategy shows "Learning"?',
    options: [
      'Its daily budget was spent early',
      'It was recently created or reactivated',
      'One of its settings was changed',
      'Campaigns or keywords were added to it'
    ],
    correctIndex: 0,
    explanation: 'Learning appears after a new or reactivated strategy, a setting change, or a composition change (campaigns, ad groups or keywords added or removed). Running out of budget shows as Limited, not Learning.',
    sourceUrl: 'https://support.google.com/google-ads/answer/6263057',
    lastVerified: '2026-10-21'
  }
]);
