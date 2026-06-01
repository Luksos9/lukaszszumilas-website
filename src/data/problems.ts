export type Severity = 'Very Common' | 'Common' | 'Emerging';

export interface Problem {
  icon: string;
  title: string;
  body: string;
  severity: Severity;
  /** The future state this symptom resolves into — the outcome the method produces. */
  outcome: string;
  /** Icon for the outcome (destination) chip. */
  outIcon: string;
}

/**
 * Operational symptoms shown as a "symptom -> outcome" diagnostic ledger.
 * Ordered so the two "Very Common" anchors lead and the lone "Emerging" item
 * (AI strategy) sits last as the natural pivot toward AI.
 */
export const problems: Problem[] = [
  {
    icon: 'clock',
    title: 'Too much manual work',
    body: 'Your team spends hours on repetitive, low-value tasks.',
    severity: 'Very Common',
    outcome: 'Automated workflows',
    outIcon: 'gear',
  },
  {
    icon: 'trend',
    title: 'Growing ticket volumes',
    body: 'More requests, the same resources, rising pressure.',
    severity: 'Very Common',
    outcome: 'AI-assisted resolution',
    outIcon: 'agent',
  },
  {
    icon: 'gauge',
    title: 'Slow processes',
    body: 'Bottlenecks and handoffs delay the outcomes the business needs.',
    severity: 'Common',
    outcome: 'Faster fulfillment',
    outIcon: 'flow',
  },
  {
    icon: 'cube',
    title: 'Underused ServiceNow',
    body: "You're not getting the full value from the platform you pay for.",
    severity: 'Common',
    outcome: 'Platform at full value',
    outIcon: 'trophy',
  },
  {
    icon: 'book',
    title: 'Poor knowledge access',
    body: 'Information is scattered and hard to find the moment someone needs it.',
    severity: 'Common',
    outcome: 'Knowledge on demand',
    outIcon: 'search',
  },
  {
    icon: 'target',
    title: 'Unclear AI strategy',
    body: "You're not sure where AI creates real value, or where it's just noise.",
    severity: 'Emerging',
    outcome: 'A prioritized AI roadmap',
    outIcon: 'chart',
  },
];
