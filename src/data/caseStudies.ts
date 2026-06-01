export interface CaseStudy {
  sector: string;
  title: string;
  summary: string;
}

/**
 * Anonymized, representative engagements. Deliberately qualitative.
 * TODO(Lukasz): add real, verifiable metrics where you have them and are
 * cleared to share. Do not publish invented numbers.
 */
export const caseStudies: CaseStudy[] = [
  {
    sector: 'Financial services',
    title: 'AI-assisted ticket classification',
    summary:
      'Replaced manual triage with AI-assisted classification, so incidents land in the right queue faster and fulfillers spend less time sorting and more time resolving.',
  },
  {
    sector: 'Insurance',
    title: 'Streamlined request management',
    summary:
      'Standardized and automated a request process that had drifted over the years, cutting handoffs and making SLA targets realistic to hit again.',
  },
  {
    sector: 'Manufacturing',
    title: 'Automated employee onboarding',
    summary:
      'Automated a manual onboarding workflow so new starters get the access and equipment they need without anyone chasing approvals by email.',
  },
];
