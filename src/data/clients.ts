export interface Sector {
  name: string;
}

/**
 * Sectors Lukasz has delivered ServiceNow work in. Deliberately sector-level,
 * NOT named clients or partners. Per his content boundaries, specific client
 * and consulting-partner names stay off public, cross-referenceable surfaces.
 */
export const clients: Sector[] = [
  { name: 'Banking' },
  { name: 'Insurance' },
  { name: 'Manufacturing' },
  { name: 'Enterprise IT' },
];
