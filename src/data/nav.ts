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
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Book a consultation', href: '/contact/', cta: true },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Work with me',
    items: [
      { label: 'Services', href: '/services/' },
      { label: 'AI & ServiceNow', href: '/ai-servicenow/' },
      { label: 'Book a consultation', href: '/contact/' },
      { label: 'Blog', href: '/blog/' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Newsletter', href: '/newsletter/' },
      { label: 'Teaching', href: '/teaching/' },
      { label: 'Lucky X courses', href: 'https://luckyx.dev', external: true },
      { label: 'Udemy profile', href: 'https://www.udemy.com/user/lukasz-szumilas-22/', external: true },
      { label: 'RSS feed', href: '/rss.xml', external: true },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'About', href: '/about/' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
    ],
  },
];
