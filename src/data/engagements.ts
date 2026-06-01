export interface Engagement {
  title: string;
  duration?: string;
  body: string;
  href?: string;
}

/** How a consulting relationship typically starts and grows. */
export const engagements: Engagement[] = [
  {
    title: 'AI Opportunity Assessment',
    duration: '2-4 weeks',
    body: 'Identify the bottlenecks, and the automation and AI opportunities worth pursuing first.',
    href: '/ai-opportunity-assessment/',
  },
  {
    title: 'ServiceNow Modernization',
    body: 'Improve workflows, clean up the platform, and lift adoption across teams.',
  },
  {
    title: 'AI & ServiceNow Implementation',
    body: 'Build practical AI solutions on the platform, with outcomes you can measure.',
  },
  {
    title: 'Team Enablement',
    body: 'Workshops and training so your team can run and extend what we build together.',
  },
];
