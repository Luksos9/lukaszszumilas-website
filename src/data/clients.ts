export interface Sector {
  name: string;
}

/**
 * Industries worked in. Shown as "industry experience", never as a "trusted by"
 * client wall. Sector-level only, no named clients.
 */
export const clients: Sector[] = [
  { name: 'Banking' },
  { name: 'Insurance' },
  { name: 'Manufacturing' },
  { name: 'Consulting' },
];
