export interface Area {
  title: string;
  body: string;
}

/** The four areas of work, framed by business outcome rather than tech. */
export const areas: Area[] = [
  {
    title: 'AI Agents',
    body: 'Intelligent agents that take on repetitive work and support employees and customers.',
  },
  {
    title: 'MCP Integrations',
    body: 'Connect AI to enterprise systems securely, through the Model Context Protocol.',
  },
  {
    title: 'ServiceNow Automation',
    body: 'End-to-end platform automation that improves speed and accuracy for the people doing the work.',
  },
  {
    title: 'Workflow Optimization',
    body: 'Better processes and cleaner data across your operations.',
  },
];
