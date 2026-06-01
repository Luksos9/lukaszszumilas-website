export interface Service {
  /** Anchor id used for /services/#<anchor> deep links from the homepage. */
  anchor: string;
  title: string;
  /** One-line summary for the homepage services grid. */
  tagline: string;
  problem?: string;
  examples?: string[];
  deliverables?: string[];
  outcome?: string;
}

/**
 * The consulting offer. Shared by the homepage services grid and the
 * /services/ sales page so the two never drift.
 */
export const services: Service[] = [
  {
    anchor: 'assessment',
    title: 'AI Opportunity Assessment',
    tagline: 'Find the repetitive work worth automating, and the order to do it in.',
    problem:
      'Teams lose hours every week to repetitive, manual work. What is rarely clear is which parts are actually worth automating, and which would cost more to automate than they save.',
    deliverables: [
      'Discovery sessions with your team',
      'A review of how the work actually flows today',
      'An AI opportunity map, scored by effort and payoff',
      'A prioritized roadmap',
    ],
    outcome: 'A clear, ordered plan you can act on, instead of a vague sense that "we should use AI".',
  },
  {
    anchor: 'implementations',
    title: 'AI & ServiceNow Implementations',
    tagline: 'Practical AI on the platform, built to pass a security review.',
    examples: [
      'AI Agents',
      'Claude integrations',
      'MCP integration',
      'Knowledge assistants',
      'Workflow automation',
    ],
    outcome: 'Less manual work and faster processes, with governance that holds up to scrutiny.',
  },
  {
    anchor: 'development',
    title: 'ServiceNow Development',
    tagline: 'Extend and improve the platform without piling on technical debt.',
    examples: ['Catalog items', 'Integrations (REST, JavaScript)', 'Service Portal', 'Custom apps', 'Flows'],
    outcome: 'Clean, supportable builds that survive the next upgrade.',
  },
  {
    anchor: 'reviews',
    title: 'Architecture & Code Reviews',
    tagline: 'A focused second opinion before you commit to a direction.',
    deliverables: [
      'Code review',
      'Platform review',
      'Integration review',
      'Concrete, prioritized recommendations',
    ],
    outcome: 'A short list of what to fix and what to safely leave alone.',
  },
  {
    anchor: 'training',
    title: 'Training & Workshops',
    tagline: 'Bring your team up to speed on ServiceNow, automation, and AI adoption.',
    deliverables: [
      'Team workshops',
      'ServiceNow best-practice sessions',
      'Practical AI adoption training',
      'Hands-on enablement',
    ],
    outcome: 'A team that can run and extend what we build together.',
  },
];
