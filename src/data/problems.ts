export interface Problem {
  icon: string;
  title: string;
  body: string;
}

/** Enterprise pain points. A visitor should recognize at least one as theirs. */
export const problems: Problem[] = [
  { icon: 'clock', title: 'Too much manual work', body: 'Your team spends hours on repetitive, low-value tasks.' },
  { icon: 'trend', title: 'Growing ticket volumes', body: 'More requests, the same resources, rising pressure.' },
  { icon: 'cube', title: 'Underused ServiceNow', body: "You're not getting the full value from the platform you pay for." },
  { icon: 'gauge', title: 'Slow processes', body: 'Bottlenecks and handoffs delay the outcomes the business needs.' },
  { icon: 'book', title: 'Poor knowledge access', body: 'Information is scattered and hard to find the moment someone needs it.' },
  { icon: 'target', title: 'Unclear AI strategy', body: "You're not sure where AI creates real value, or where it's just noise." },
];
