export interface FrameworkStep {
  n: number;
  title: string;
  body: string;
}

/** The signature methodology. Process first, AI where it earns its place. */
export const framework: FrameworkStep[] = [
  { n: 1, title: 'Find Bottlenecks', body: 'Identify where work gets stuck and where time is lost.' },
  { n: 2, title: 'Improve Process', body: 'Simplify and redesign the workflow for clarity and scale.' },
  { n: 3, title: 'Automate Workflow', body: 'Remove the repetitive tasks and handoffs with automation.' },
  { n: 4, title: 'Apply AI', body: 'Introduce AI only where it creates meaningful business value.' },
  { n: 5, title: 'Measure Impact', body: 'Track outcomes, then optimize and scale what works.' },
];
