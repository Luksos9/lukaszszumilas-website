/**
 * Central site configuration. Single source of truth for name, URLs,
 * social links, and headline copy reused across pages and metadata.
 *
 * NOTE: items marked TODO need Lukasz to confirm before launch.
 */
export const site = {
  name: 'Lukasz Szumilas',
  shortName: 'Lukasz Szumilas',
  role: 'ServiceNow & AI Consultant',
  url: 'https://lukaszszumilas.com',
  defaultTitle: 'Lukasz Szumilas · ServiceNow & AI Consulting',
  description:
    'I help companies improve operations with AI and ServiceNow, from platform implementations to AI solutions that cut manual work. Backed by 17 ServiceNow certifications and enterprise delivery experience.',
  // TODO(confirm): preferred public contact email.
  email: 'contact@lukaszszumilas.com',
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
