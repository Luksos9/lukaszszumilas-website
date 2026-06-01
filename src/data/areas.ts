export interface Area {
  icon: string;
  title: string;
  body: string;
}

/**
 * Capabilities, framed for the people who buy (managers), with the underlying
 * tech named inside so practitioners recognize it too.
 */
export const areas: Area[] = [
  {
    icon: 'gear',
    title: 'Operational Automation',
    body: 'Automate repetitive work and handoffs across ServiceNow, from ITSM to custom workflows.',
  },
  {
    icon: 'sparkle',
    title: 'AI-Powered Workflows',
    body: 'Now Assist, AI Agents, and MCP integrations applied where they cut real effort.',
  },
  {
    icon: 'flow',
    title: 'ServiceNow Transformation',
    body: 'Modernize the platform: cleaner processes, better adoption, less technical debt.',
  },
  {
    icon: 'sitemap',
    title: 'Process Optimization',
    body: 'Redesign how work flows so the platform serves the process, not the other way around.',
  },
];
