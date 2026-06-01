export interface Problem {
  title: string;
  body: string;
}

/** Enterprise pain points. A visitor should recognize at least one as theirs. */
export const problems: Problem[] = [
  { title: 'Too much manual work', body: 'Your team spends hours on repetitive, low-value tasks.' },
  { title: 'Growing ticket volumes', body: 'More requests, the same resources, rising pressure.' },
  { title: 'Underused ServiceNow', body: "You're not getting the full value from the platform you pay for." },
  { title: 'Slow processes', body: 'Bottlenecks and handoffs delay the outcomes the business needs.' },
  { title: 'Poor knowledge access', body: 'Information is scattered and hard to find the moment someone needs it.' },
  { title: 'Unclear AI strategy', body: "You're not sure where AI creates real value, or where it's just noise." },
];
