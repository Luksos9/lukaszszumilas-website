export interface CaseStudy {
  sector: string;
  /** The buyer this engagement was for. */
  persona: string;
  /** One line of sector context — why this kind of org struggles here. */
  sectorNote: string;
  title: string;
  situation: string;
  action: string;
  outcome: string;
  /** A labelled "typical target" — the goal this kind of engagement aims at.
   * Kept qualitative on purpose; real, cleared figures are shared on a call. */
  target: string;
}

/**
 * Anonymized, representative engagements in Situation / Action / Outcome form.
 * Qualitative on purpose. TODO(Lukasz): add real, cleared figures where you have
 * them. Never publish invented numbers.
 */
export const caseStudies: CaseStudy[] = [
  {
    sector: 'Banking',
    persona: 'IT Service Manager',
    sectorNote: 'High ticket volumes under strict audit, security and access controls.',
    title: 'AI-assisted ticket classification',
    situation: 'Ticket volumes were rising and manual triage was eating fulfiller time.',
    action: 'Redesigned the intake, automated the repetitive steps, then added AI-assisted routing and classification — governed end to end.',
    outcome: 'Less manual effort, more consistent routing, and faster handling.',
    target: 'Cut the manual triage load and speed up first response.',
  },
  {
    sector: 'Insurance',
    persona: 'Process Owner',
    sectorNote: 'Legacy request processes that quietly drifted as the business changed.',
    title: 'Streamlined request management',
    situation: 'A request process had drifted over the years and handoffs had become slow.',
    action: 'Mapped the flow, standardized it, and automated the repetitive steps and approvals.',
    outcome: 'Fewer handoffs, and SLA targets that are realistic to hit again.',
    target: 'Fewer handoffs and SLA targets the team can actually meet.',
  },
  {
    sector: 'Manufacturing',
    persona: 'HR & IT operations',
    sectorNote: 'Onboarding across sites, shifts, and systems that don’t talk to each other.',
    title: 'Automated employee onboarding',
    situation: 'Onboarding new starters meant chasing access and equipment by email.',
    action: 'Automated the onboarding workflow end to end on ServiceNow, with the right approvals built in.',
    outcome: 'New starters get the access and equipment they need without manual chasing.',
    target: 'New starters productive from day one, without manual chasing.',
  },
];
