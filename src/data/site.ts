/**
 * Central site configuration. Single source of truth for name, URLs,
 * social links, and headline copy reused across pages and metadata.
 *
 * NOTE: items marked TODO need Lukasz to confirm before launch.
 */
export const site = {
  name: 'Lukasz Szumilas',
  shortName: 'Lukasz Szumilas',
  role: 'Operational Efficiency Advisor',
  url: 'https://lukaszszumilas.com',
  defaultTitle: 'Lukasz Szumilas · ServiceNow, AI & Operational Improvement',
  description:
    'I help organizations reduce manual work and improve operations using ServiceNow, AI, and process design: identifying bottlenecks, automating repetitive work, and applying AI where it creates measurable business value.',
  email: 'lukasz.szumilas97@gmail.com',
  newsletterName: 'ServiceNow Accelerator',
  socials: {
    linkedin: 'https://www.linkedin.com/in/lukasz-szumilas-servicenowdeveloper/',
    udemy: 'https://www.udemy.com/user/lukasz-szumilas-22/',
    github: 'https://github.com/Luksos9',
    luckyx: 'https://luckyx.dev',
  },
  booking: {
    // TODO(launch): your Calendly scheduling link, e.g.
    // 'https://calendly.com/lukaszszumilas/consultation'. While empty, the
    // Contact page shows email + LinkedIn instead of an inline booking embed.
    calendly: '',
  },
  analytics: {
    // TODO(launch): set THIS site's own GA4 Measurement ID (G-XXXXXXXXXX).
    // Do NOT reuse the luckyx.dev property id. While empty, no analytics loads.
    ga4Id: '',
  },
  newsletter: {
    // TODO(launch): Kit/ConvertKit form id for the "ServiceNow Accelerator" list.
    kitFormId: '',
  },
} as const;

export type Site = typeof site;
