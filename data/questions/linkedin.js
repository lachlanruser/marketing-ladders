// LinkedIn question bank.
// Every question is checked against the official page in sourceUrl on the lastVerified date.
// Writing rules (balanced lengths, believable wrong answers, trick questions): see README.md.
// "trick": true marks trick-style questions. Set "flagged": true on anything that can't be verified.
ML.registerQuestions('linkedin', [
  {
    id: 'ps-004', level: 'linkedin', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn',
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
  {
    id: 'ps-008', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
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
  {
    id: 'ps-020', level: 'linkedin', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn',
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
  {
    id: 'ps-036', level: 'linkedin', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'What is the minimum audience size for a LinkedIn ad set?',
    options: ['100 member accounts', '300 member accounts', '1,000 member accounts', '50,000 member accounts'],
    correctIndex: 1,
    explanation: 'The minimum is 300 member accounts. Location is a required targeting facet, so check that a Matched Audiences segment is comfortably above 300 before location narrows it.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a424450',
    lastVerified: '2026-10-13'
  },
  {
    id: 'ps-037', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
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
    id: 'ps-038', level: 'linkedin', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn',
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
    id: 'ps-039', level: 'linkedin', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
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
    id: 'ps-040', level: 'linkedin', difficulty: 1, type: 'scenario', platform: 'LinkedIn',
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
  },

  // ---------- Added for the v2 LinkedIn level ----------
  {
    id: 'li-041', level: 'linkedin', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Which LinkedIn budget type do you need in order to set a custom schedule with an end date?',
    options: ['A lifetime budget', 'A daily budget', 'A campaign group cap', 'A cost cap'],
    correctIndex: 0,
    explanation: 'A lifetime budget is the total spend for an ad set\'s whole schedule, and you must set one to use a custom schedule. A daily budget is the average you\'d like to spend per day.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a422101',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-042', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'What is the minimum daily budget needed to start advertising on LinkedIn?',
    options: ['$10', '$5', '$25', '$100'],
    correctIndex: 0,
    explanation: 'The minimum daily budget to start is $10 for any ad format. New, inactive campaigns with a lifetime budget need at least $100.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/best-practices/maximize-your-budget',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-043', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'What is the minimum lifetime budget for a new, inactive LinkedIn campaign?',
    options: ['$100', '$50', '$500', '$250'],
    correctIndex: 0,
    explanation: 'New, inactive campaigns need a lifetime budget of at least $100. Once a campaign launches, the minimum becomes $10 times the number of scheduled days.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/best-practices/maximize-your-budget',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-044', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'With budget optimisation (Dynamic Group Budget) turned on for a LinkedIn campaign, how are ad set budgets handled?',
    options: [
      'Ad sets share the campaign budget instead of having their own',
      'Each ad set keeps its own budget, capped by the campaign',
      'Ad sets split the budget equally, whatever their results',
      'Ad set budgets double while the campaign is learning'
    ],
    correctIndex: 0,
    explanation: 'A campaign-level budget is shared across all of the campaign\'s ad sets. With Dynamic Group Budget on, ad sets don\'t have individual budgets.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a422101',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-045', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'For the most efficient results from your budget, what does LinkedIn recommend?',
    options: [
      'A lifetime budget, backed by lifetime pacing',
      'A daily budget with accelerated delivery on',
      'A daily budget that resets at midnight each day',
      'Switching budgets weekly to reset the pacing'
    ],
    correctIndex: 0,
    explanation: 'LinkedIn uses lifetime pacing, which predicts platform activity over a week and spreads spend to match. It recommends a lifetime budget backed by lifetime pacing.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/best-practices/maximize-your-budget',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-046', level: 'linkedin', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What does LinkedIn Audience Expansion do?',
    options: [
      'Shows ads to members with attributes similar to your audience',
      'Adds every member of your matched company lists',
      'Removes your exclusions so your ads reach more people',
      'Extends your ads to members in neighbouring countries'
    ],
    correctIndex: 0,
    explanation: 'Audience Expansion reaches members whose attributes resemble your targeting, for example a related skill. It suits upper-funnel goals, and any exclusions you set are still respected.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a418929',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-047', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Where LinkedIn Audience Expansion is available, what is its default setting?',
    options: ['Automatically enabled', 'Off until you opt in', 'On for video ads alone'],
    correctIndex: 0,
    explanation: 'Audience Expansion is automatically enabled on ad sets where it\'s available. Clear the checkbox in the Audience section if you want to keep your targeting exact.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a418929',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-048', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'What happened to LinkedIn lookalike audiences?',
    options: [
      'They were discontinued in 2024',
      'They were renamed predictive audiences',
      'They now refresh daily from your source',
      'They became free for every ad account'
    ],
    correctIndex: 0,
    explanation: 'Lookalike audiences were discontinued on 29 February 2024. Existing ones became static, and LinkedIn recommends predictive audiences and Audience Expansion instead. They weren\'t simply renamed.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423698',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-049', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What does LinkedIn recommend using in place of lookalike audiences?',
    options: [
      'Predictive audiences and Audience Expansion',
      'Matched Audiences built from email lists alone',
      'Interest targeting plus job title targeting',
      'Website retargeting with a 90-day window'
    ],
    correctIndex: 0,
    explanation: 'Predictive audiences use your data source and LinkedIn\'s AI to find people likely to act, and Audience Expansion widens your attribute or Matched Audiences targeting.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423698',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-050', level: 'linkedin', difficulty: 4, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'How many member accounts must a data source have to create a LinkedIn predictive audience?',
    options: ['300 or more', '100 or more', '1,000 or more', '10,000 or more'],
    correctIndex: 0,
    explanation: 'A predictive audience needs a data source of 300 or more member accounts. You can combine several sources of the same type (e.g. several Lead Gen Forms) to get there.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423698',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-051', level: 'linkedin', difficulty: 4, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'Which of these is NOT a data source type for a LinkedIn predictive audience?',
    options: ['Uploaded contact list', 'Company list', 'Lead Gen Form', 'Interest category'],
    correctIndex: 3,
    explanation: 'Predictive audiences can be built from a Lead Gen Form, contact list, company list, conversion or retargeting audience, one type at a time. Interest categories are targeting options, not data sources.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423698',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-052', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What can LinkedIn conversation ads do that message ads can\'t?',
    options: [
      'Offer several CTA buttons in a decision-tree conversation',
      'Send a message to members who don\'t follow your Page',
      'Include a Lead Gen Form when using the lead generation objective',
      'Appear in LinkedIn Messaging on mobile and desktop'
    ],
    correctIndex: 0,
    explanation: 'Conversation ads let you set up multiple CTA buttons with replies driven by a decision tree. Message ads have a single CTA button. Both can use Lead Gen Forms and appear in Messaging.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425089',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-053', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Which button does LinkedIn automatically add to the intro message of a new conversation ad?',
    options: ['Not Interested', 'Learn More', 'Contact Sales Team', 'Book a Demo'],
    correctIndex: 0,
    explanation: 'To keep the member experience relevant, a Not Interested CTA is automatically added to new, edited or duplicated conversation ads. It\'s required on message ads too.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425089',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-054', level: 'linkedin', difficulty: 4, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'Which objective can a conversation ad set use, but NOT a message ad set?',
    options: ['Brand awareness', 'Website visits', 'Lead generation', 'Website conversions'],
    correctIndex: 0,
    explanation: 'Conversation ads support brand awareness, website visits, lead generation and website conversions. Message ads support website visits, lead generation and website conversions, but not brand awareness.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a422183',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-055', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Which objectives can a LinkedIn event ad set use?',
    options: [
      'Brand awareness, website visits or engagement',
      'Lead generation, conversions or job applicants',
      'Video views, talent leads or website conversions',
      'Engagement, lead generation or app installs'
    ],
    correctIndex: 0,
    explanation: 'Event ad sets use brand awareness, website visits or engagement to drive registrations and live or lifetime views of your LinkedIn Event.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a424122',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-056', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'Which of these ad formats can NOT appear on the LinkedIn Audience Network?',
    options: ['Single image ads', 'Carousel ads', 'Document ads', 'Message ads'],
    correctIndex: 3,
    explanation: 'Single image, carousel, document and video Sponsored Content can run on the Audience Network. Message ads are delivered in LinkedIn Messaging instead.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425628',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-057', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'How can you run single image and video ads together in one LinkedIn campaign?',
    options: [
      'Select the flexible ads option during setup',
      'Add both formats; they mix together by default',
      'Build a carousel that alternates images and videos',
      'Create the video ads first, then add the images'
    ],
    correctIndex: 0,
    explanation: 'Each campaign supports one ad format, but choosing the flexible ads option during setup lets you use single image and video formats together.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425628',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-058', level: 'linkedin', difficulty: 4, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'When are call-to-action buttons available on LinkedIn carousel ads?',
    options: [
      'When the carousel uses a Lead Gen Form',
      'When the carousel has 5 or more cards',
      'When the ad set uses manual bidding',
      'When the carousel links to a job posting'
    ],
    correctIndex: 0,
    explanation: 'Call-to-action buttons on carousel ads are available only when the carousel uses a Lead Gen Form.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425628',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-059', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What\'s required to run a LinkedIn single job ad?',
    options: [
      'The job must also be posted on LinkedIn',
      'The ad must link to your own careers site',
      'The ad set must use the Engagement objective',
      'The job must be shared by a thought leader'
    ],
    correctIndex: 0,
    explanation: 'Single job ads are Sponsored Content that promotes one job opportunity in the feed, and that job must also be posted on LinkedIn.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425628',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-060', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'How long must a LinkedIn A/B test run?',
    options: ['2 weeks to 90 days', '1 week to 30 days', '3 days to 60 days', '4 weeks to 6 months'],
    correctIndex: 0,
    explanation: 'A/B tests run for a minimum of 2 weeks and a maximum of 90 days, and both ad sets pause when the test ends. You also can\'t activate a test on the day you create it.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a1380554',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-061', level: 'linkedin', difficulty: 4, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Can a LinkedIn A/B test run at the same time as a Brand Lift test in the same account?',
    options: [
      'No, they can\'t run simultaneously in one account',
      'Yes, as long as the two tests target different audiences',
      'Yes, as long as each has its own budget',
      'Yes, if both use the same objective'
    ],
    correctIndex: 0,
    explanation: 'To keep results reliable, an A/B test and a Brand Lift test can\'t run simultaneously in the same account.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a1380554',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-062', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'How does a LinkedIn A/B test keep the comparison fair?',
    options: [
      'It splits the audience so each person sees one version',
      'It shows both versions to everyone, alternating them each day',
      'It runs version B once version A has finished',
      'It gives the better version more budget as it learns'
    ],
    correctIndex: 0,
    explanation: 'The audience is automatically split into two groups for the test, and each group sees only one of the two versions. You can test ad format, creative, audience or placement.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/testing',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-063', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'How does LinkedIn Brand Lift testing measure the impact of your ads?',
    options: [
      'It surveys an exposed group and a control group, then compares',
      'It counts clicks on ads compared with the previous month',
      'It tracks how many people follow your Page after seeing ads',
      'It compares your CTR with similar advertisers\' ads'
    ],
    correctIndex: 0,
    explanation: 'Brand Lift splits people into a control group (not shown your ads) and a test group, surveys both, and compares answers on metrics such as ad recall and brand favourability.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/testing',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-064', level: 'linkedin', difficulty: 4, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'With LinkedIn\'s Conversions API connected, what can lead generation campaigns optimise for?',
    options: [
      'Qualified leads that meet your MQL or SQL criteria',
      'Leads from members who follow your Company Page',
      'Leads that complete every optional form field',
      'Leads from members with a Premium subscription'
    ],
    correctIndex: 0,
    explanation: 'The Conversions API connects your online and offline first-party data. It lets lead gen campaigns optimise for qualified leads (MQLs or SQLs), not just any lead.',
    sourceUrl: 'https://news.linkedin.com/2025/helping-b2b-marketers-prove-campaign-performance-with-new-featur',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-065', level: 'linkedin', difficulty: 5, type: 'multiple_choice', platform: 'LinkedIn', trick: true,
    prompt: 'What lookback window did LinkedIn introduce in the Revenue Attribution Report for long B2B sales cycles?',
    options: ['365 days', '90 days', '180 days', '30 days'],
    correctIndex: 0,
    explanation: 'LinkedIn added a 365-day lookback window to the Revenue Attribution Report, to show how long-running campaigns influence revenue over typical B2B buying cycles.',
    sourceUrl: 'https://news.linkedin.com/2025/helping-b2b-marketers-prove-campaign-performance-with-new-featur',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-066', level: 'linkedin', difficulty: 4, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What do you connect to LinkedIn to use the Revenue Attribution Report?',
    options: [
      'Your CRM opportunity and pipeline data',
      'Your Google Analytics property',
      'Your website\'s Insight Tag and nothing else',
      'Your Company Page follower list'
    ],
    correctIndex: 0,
    explanation: 'The Revenue Attribution Report links your opportunity and pipeline data (directly or through a LinkedIn Marketing Partner) to campaigns, showing revenue influenced, ROAS and pipeline.',
    sourceUrl: 'https://news.linkedin.com/2025/helping-b2b-marketers-prove-campaign-performance-with-new-featur',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-067', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What is LinkedIn\'s accelerated delivery designed for?',
    options: [
      'Spending the budget fast to maximise reach during a live event',
      'Exiting the learning phase faster on any brand new ad set',
      'Spending leftover budget at the very end of the month',
      'Getting new ads reviewed and approved more quickly'
    ],
    correctIndex: 0,
    explanation: 'Accelerated delivery delivers an ad set\'s budget as quickly as possible to maximise reach during a live event. It works with the event ad format and a lifetime budget.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a421112',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-068', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Which LinkedIn bidding strategy gives you the most control over your bid amount?',
    options: ['Manual bidding', 'Maximum delivery', 'Cost cap', 'Target cost'],
    correctIndex: 0,
    explanation: 'Manual bidding lets you set exactly what you\'re willing to bid for a key result. It gives the most control, but may not deliver as well as the optimised strategies.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a421112',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-069', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What are hidden fields in LinkedIn Lead Gen Forms used for?',
    options: [
      'Tracking parameters like UTM source or ad set ID',
      'Asking members questions they can skip',
      'Storing a member\'s phone number privately',
      'Hiding the form from members outside your audience'
    ],
    correctIndex: 0,
    explanation: 'Hidden fields track static or dynamic parameters, such as UTM source, ad set ID or sales rep, and sync to your CRM for richer reporting and attribution.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a423447',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-070', level: 'linkedin', difficulty: 3, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'Which objectives can LinkedIn Thought Leader Ads use?',
    options: [
      'Brand awareness, engagement and video views',
      'Lead generation and website conversions',
      'Website visits, job applicants and app installs',
      'Talent leads and lead generation'
    ],
    correctIndex: 0,
    explanation: 'Thought Leader Ads run with the Brand Awareness, Engagement and Video View objectives, using single image or video content from the author\'s post.',
    sourceUrl: 'https://business.linkedin.com/advertise/ads/sponsored-content/thought-leader-ads',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-071', level: 'linkedin', difficulty: 2, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'When uploading a company list to Matched Audiences, what does LinkedIn suggest including to improve the match rate?',
    options: [
      'The company name and Company Page URL',
      'Each company\'s annual revenue figure in USD',
      'A contact email for every company',
      'The company\'s stock ticker symbol'
    ],
    correctIndex: 0,
    explanation: 'Adding the Company Page URL (linkedin.com/company/NAME) alongside the company name in the template improves match rate and accuracy.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a424450',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-072', level: 'linkedin', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'What does LinkedIn\'s Website Actions conversion method do?',
    options: [
      'Automatically tags actions like button clicks and form fills',
      'Sends every website visit straight to your CRM',
      'Records conversions on your site without needing the Insight Tag',
      'Tracks offline sales imported from spreadsheets'
    ],
    correctIndex: 0,
    explanation: 'Website Actions automatically collects and tags actions like button clicks, page visits and form submissions, without extra coding. It does require the Insight Tag on your site.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a425606',
    lastVerified: '2026-10-20'
  },
  {
    id: 'li-073', level: 'linkedin', difficulty: 1, type: 'multiple_choice', platform: 'LinkedIn',
    prompt: 'In Campaign Manager, a campaign-level budget is shared across which level?',
    options: [
      'The ad sets in that campaign',
      'Every campaign in the ad account',
      'The ads inside one single ad set',
      'All accounts in your Business Manager'
    ],
    correctIndex: 0,
    explanation: 'LinkedIn\'s structure is campaign, then ad set, then ad. A campaign budget is shared across all the ad sets in that campaign. Without one, each ad set has its own budget.',
    sourceUrl: 'https://www.linkedin.com/help/lms/answer/a422101',
    lastVerified: '2026-10-20'
  }
]);
