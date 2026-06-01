export interface CaseStudy {
  sector: string;
  title: string;
  situation: string;
  action: string;
  outcome: string;
}

/**
 * Anonymized, representative engagements in Situation / Action / Outcome form.
 * Qualitative on purpose. TODO(Lukasz): add real, cleared figures where you have
 * them. Never publish invented numbers.
 */
export const caseStudies: CaseStudy[] = [
  {
    sector: 'Banking',
    title: 'AI-assisted ticket classification',
    situation: 'Ticket volumes were rising and manual triage was eating fulfiller time.',
    action: 'Redesigned the intake, added automation, and introduced AI-assisted routing and classification.',
    outcome: 'Less manual effort, more consistent routing, and faster handling.',
  },
  {
    sector: 'Insurance',
    title: 'Streamlined request management',
    situation: 'A request process had drifted over the years and handoffs had become slow.',
    action: 'Standardized the workflow and automated the repetitive steps.',
    outcome: 'Fewer handoffs, and SLA targets that are realistic to hit again.',
  },
  {
    sector: 'Manufacturing',
    title: 'Automated employee onboarding',
    situation: 'Onboarding new starters meant chasing access and equipment by email.',
    action: 'Automated the onboarding workflow end to end on ServiceNow.',
    outcome: 'New starters get the access and equipment they need without manual chasing.',
  },
];
