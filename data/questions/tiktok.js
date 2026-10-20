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
  }
]);
