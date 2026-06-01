// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { ghostRedirects } from './src/data/redirects.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://lukaszszumilas.com',
  // Custom domain served at the root => NO `base`.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    sitemap({
      // Keep redirect stubs and the 404 page out of the sitemap.
      filter: (page) => {
        const pathname = new URL(page).pathname;
        if (pathname.startsWith('/404')) return false;
        return !Object.prototype.hasOwnProperty.call(ghostRedirects, pathname);
      },
    }),
  ],
  // Old Ghost root URLs -> new /blog/ URLs (see src/data/redirects.mjs).
  redirects: ghostRedirects,
});
