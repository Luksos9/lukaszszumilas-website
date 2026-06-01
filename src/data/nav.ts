/** Primary navigation. Consulting-first: courses live off the main nav. */
export interface NavItem {
  label: string;
  href: string;
  /** Render as the single accent button (book a consultation). */
  cta?: boolean;
  /** External links open in a new tab. */
  external?: boolean;
}

export const primaryNav: NavItem[] = [
  { label: 'Services', href: '/services/' },
  { label: 'AI & ServiceNow', href: '/ai-servicenow/' },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'Insights', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Book a consultation', href: '/contact/', cta: true },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Services',
    items: [
      { label: 'AI Opportunity Assessment', href: '/services/#assessment' },
      { label: 'AI & ServiceNow Implementations', href: '/services/#implementations' },
      { label: 'ServiceNow Development', href: '/services/#development' },
      { label: 'Architecture & Code Reviews', href: '/services/#reviews' },
      { label: 'Training & Workshops', href: '/services/#training' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Insights', href: '/blog/' },
      { label: 'Case studies', href: '/case-studies/' },
      { label: 'Newsletter', href: '/newsletter/' },
      { label: 'Teaching', href: '/teaching/' },
      { label: 'Lucky X courses', href: 'https://luckyx.dev', external: true },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
    ],
  },
];
