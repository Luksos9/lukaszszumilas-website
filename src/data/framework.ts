export interface FrameworkStep {
  n: number;
  icon: string;
  title: string;
  body: string;
}

/** The signature methodology. Process first, AI where it earns its place. */
export const framework: FrameworkStep[] = [
  { n: 1, icon: 'search', title: 'Find Bottlenecks', body: 'Identify where work gets stuck and where time is lost.' },
  { n: 2, icon: 'flow', title: 'Improve Process', body: 'Simplify and redesign the workflow for clarity and scale.' },
  { n: 3, icon: 'gear', title: 'Automate Workflow', body: 'Remove the repetitive tasks and handoffs with automation.' },
  { n: 4, icon: 'sparkle', title: 'Apply AI', body: 'Introduce AI only where it creates meaningful business value.' },
  { n: 5, icon: 'chart', title: 'Measure Impact', body: 'Track outcomes, then optimize and scale what works.' },
];
