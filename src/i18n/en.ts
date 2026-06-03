// English strings. The default locale; also the fallback for any missing key.
// Structural data (anchors, icons) stays in src/data/*; only display text lives here.
export const en = {
  common: {
    role: 'Operational Efficiency Advisor',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    home: 'Home',
    homeAria: 'home',
    toggleTheme: 'Toggle light or dark theme',
    themeTitle: 'Toggle theme',
    language: 'Language',
    chooseLanguage: 'Choose language',
  },
  footer: {
    blurb:
      'Operational Efficiency Advisor. I help organizations reduce manual work and improve operations with ServiceNow, AI, and process design.',
    rights: 'All rights reserved.',
    builtPre: 'Built with',
    builtPost: ', hosted on GitHub Pages.',
  },
  home: {
    metaDescription:
      'I help organizations reduce manual work and improve operations using ServiceNow, AI, and process design: identifying bottlenecks, automating repetitive work, and applying AI where it creates measurable business value.',
    rail: {
      start: 'Start',
      aiReality: 'AI reality',
      multiplier: 'Multiplier',
      framework: 'Framework',
      symptoms: 'Symptoms',
      services: 'Services',
      work: 'Work',
      insights: 'Insights',
      book: 'Book',
    },
    hero: {
      eyebrow: 'Operational Efficiency Advisor',
      title1: 'Reduce Manual Work.',
      title2: 'Improve Productivity.',
      title3: 'Scale <span class="accent">Operations.</span>',
      lead: 'I help organizations <span class="mark">get more done with less manual work</span>, using ServiceNow, AI, and process design.',
      ctaPrimary: 'Book a consultation',
      ctaSecondary: 'Explore my approach',
      cred: 'ServiceNow instructor · 10,000+ students taught',
    },
    contrarian: {
      eyebrow: 'The AI reality check',
      title1: "Most companies don't",
      title2: 'need more AI tools.',
      sub: 'They need <span class="mark">better processes</span>, automation, and the right AI use cases.',
      bodyLead:
        'Most AI projects underwhelm because they start with the model. The results come from fixing the work first, in order:',
      order: [
        'Fix the process.',
        'Automate the repetitive parts.',
        'Improve how people find knowledge.',
        'Then apply AI where it creates real value.',
      ],
      bodyEnd: "That's the order I work in with every client.",
    },
    multiplier: {
      eyebrow: 'The multiplier problem',
      title: 'Add AI to a broken process and you just get faster chaos',
      sub: 'AI multiplies whatever it runs on. Fix the process first, and the same AI creates real business impact.',
    },
    framework: {
      eyebrow: 'My methodology',
      title: 'The Operations Improvement Loop',
      sub: 'A repeatable system, not a one-off project. Every engagement runs the loop.',
    },
    loop: {
      eyebrow: 'The loop',
      title: 'Operations<br />Improvement',
      step: 'Step',
    },
    equation: {
      broken: 'A broken process',
      chaos: 'Faster chaos',
      good: 'A good process',
      impact: 'Business impact',
    },
    symptoms: {
      eyebrow: 'Symptoms → Outcomes',
      title: 'Does any of this look familiar?',
      sub: 'Every symptom on the left has a fix on the right. The method in between is always the same.',
      colProblem: 'Problem',
      colMethod: 'Method',
      colOutcome: 'Outcome',
      pattern:
        'This isn\'t six features — it\'s one method shown six times: <span class="accent">every symptom resolves into an outcome the loop produces.</span>',
      bridge: 'See how I turn these into outcomes',
    },
    services: {
      eyebrow: 'How I help',
      title: 'Services',
      seeAll: 'All services →',
      learnMore: 'Learn more',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'From symptom to outcome',
      seeAll: 'All case studies →',
      stageProblem: 'Problem',
      stageApproach: 'Approach',
      stageResult: 'Result',
    },
    insights: {
      eyebrow: 'Latest insights',
      title: 'Writing on ServiceNow & AI',
      seeAll: 'All articles →',
      empty: 'New articles are landing soon.',
    },
    finalCta: {
      eyebrow: 'Start here',
      title: 'Ready to find the AI opportunities inside your ServiceNow environment?',
      sub: "Book a free consultation. You'll leave with a clear view of where a better process and the right AI move the needle — whether or not we build it together.",
      cta: 'Book a consultation',
    },
    pilot: {
      eyebrow: 'Start small',
      title: 'Begin with a 2–4 week AI Opportunity Assessment',
      body: 'A fixed-scope pilot: we map where AI actually pays off — with a clear, prioritized plan before anyone writes code.',
      cta: 'See the assessment',
    },
  },
} as const;
