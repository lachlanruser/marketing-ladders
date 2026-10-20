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
  }
]);
