export interface Client {
  name: string;
  /** Consulting partner the engagement was delivered through. */
  via?: string;
}

/**
 * Selected organizations Lukasz has delivered ServiceNow work for, through
 * consulting partners. Shown as a credibility strip (names only, no logos).
 */
export const clients: Client[] = [
  { name: 'Generali', via: 'Accenture' },
  { name: 'PwC', via: 'CoolPeople' },
  { name: 'DZ Bank', via: 'Reply' },
  { name: 'dormakaba', via: 'Nelem' },
  { name: 'Commerzbank', via: 'Nelem' },
  { name: 'ABB' },
];
