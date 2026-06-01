/** Primary navigation. Order = equal billing for the three pillars. */
export interface NavItem {
  label: string;
  href: string;
  /** When true, render as the single accent button (newsletter CTA). */
  cta?: boolean;
  /** External links open in a new tab. */
  external?: boolean;
}

export const primaryNav: NavItem[] = [
  { label: 'Work with me', href: '/consulting/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Newsletter', href: '/newsletter/', cta: true },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Explore',
    items: [
      { label: 'Work with me', href: '/consulting/' },
      { label: 'Teaching', href: '/teaching/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'About', href: '/about/' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Newsletter', href: '/newsletter/' },
      { label: 'Lucky X courses', href: 'https://luckyx.dev', external: true },
      { label: 'Udemy profile', href: 'https://www.udemy.com/user/lukasz-szumilas-22/', external: true },
      { label: 'RSS feed', href: '/rss.xml', external: true },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Terms', href: '/terms/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];
