/**
 * Central site configuration. Single source of truth for name, URLs,
 * social links, and headline copy reused across pages and metadata.
 *
 * NOTE: items marked TODO need Lukasz to confirm before launch.
 */
export const site = {
  name: 'Lukasz Szumilas',
  shortName: 'Lukasz Szumilas',
  role: 'ServiceNow & AI Specialist',
  url: 'https://lukaszszumilas.com',
  defaultTitle: 'Lukasz Szumilas · ServiceNow & AI Specialist',
  description:
    'ServiceNow & AI Specialist shipping governed AI on ServiceNow, and a Udemy teacher with 10,000+ students. Consulting, courses, and writing on ServiceNow, MCP, and Claude.',
  // TODO(confirm): preferred public contact email.
  email: 'contact@lukaszszumilas.com',
  newsletterName: 'ServiceNow Accelerator',
  socials: {
    linkedin: 'https://www.linkedin.com/in/lukasz-szumilas-servicenowdeveloper/',
    udemy: 'https://www.udemy.com/user/lukasz-szumilas-22/',
    github: 'https://github.com/Luksos9',
    luckyx: 'https://luckyx.dev',
  },
  analytics: {
    // TODO(launch): set THIS site's own GA4 Measurement ID (G-XXXXXXXXXX).
    // Do NOT reuse the luckyx.dev property id — it would mix the two datasets.
    // While empty, no analytics script is emitted.
    ga4Id: '',
  },
  newsletter: {
    // TODO(launch): Kit/ConvertKit form id for the "ServiceNow Accelerator" list.
    // While empty, the form renders but points nowhere (clearly a placeholder).
    kitFormId: '',
  },
} as const;

export type Site = typeof site;
