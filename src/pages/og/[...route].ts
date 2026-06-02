import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

// TTFs ship in this devDependency (Satori needs ttf/otf, not woff2).
const INTER = 'node_modules/@expo-google-fonts/inter';
const FONTS = [`${INTER}/700Bold/Inter_700Bold.ttf`, `${INTER}/400Regular/Inter_400Regular.ttf`];

// Branded share card per route. Key = path under /og/ (astro-og-canvas appends
// `.png`), value = { title, tagline }.
const staticPages: Record<string, { title: string; tagline: string }> = {
  index: { title: 'Reduce manual work. Scale operations.', tagline: 'ServiceNow · AI · Operational improvement' },
  services: { title: 'Services', tagline: 'How I help organizations improve operations' },
  'ai-servicenow': { title: 'Governed AI on ServiceNow', tagline: 'AI a security team will actually sign off on' },
  'ai-opportunity-assessment': { title: 'AI Opportunity Assessment', tagline: 'Flagship engagement · 2–4 weeks' },
  'case-studies': { title: 'From symptom to outcome', tagline: 'Selected enterprise work' },
  about: { title: 'About Lukasz Szumilas', tagline: 'Operational Efficiency Advisor' },
  newsletter: { title: 'ServiceNow Accelerator', tagline: 'Practical ServiceNow & AI, in your inbox' },
  contact: { title: 'Book a consultation', tagline: 'ServiceNow, AI & operational improvement' },
  teaching: { title: 'Teaching', tagline: 'ServiceNow instructor · 10,000+ students taught' },
  blog: { title: 'Insights', tagline: 'Practical writing on ServiceNow & AI' },
};

const posts = await getCollection('blog');
const postPages = Object.fromEntries(
  posts
    .filter((p) => !p.data.draft)
    .map((p) => [`blog/${p.id}`, { title: p.data.title, tagline: 'Insights · Lukasz Szumilas' }])
);

const pages = { ...staticPages, ...postPages };

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page: { title: string; tagline: string }) => ({
    title: page.title,
    description: page.tagline,
    bgGradient: [
      [13, 13, 13],
      [13, 13, 13],
    ],
    border: { color: [232, 115, 58], width: 20, side: 'inline-start' },
    padding: 72,
    font: {
      title: { families: ['Inter'], weight: 'Bold', color: [255, 255, 255], size: 62, lineHeight: 1.12 },
      description: { families: ['Inter'], weight: 'Normal', color: [232, 115, 58], size: 30 },
    },
    fonts: FONTS,
  }),
});
