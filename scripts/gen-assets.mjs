// Generate raster brand assets from SVG sources, committed to /public.
// Run after changing the brand mark: node scripts/gen-assets.mjs
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const PUB = path.resolve('public');

// --- favicon + apple touch icon (geometric mark, font-independent) ---
const favSvg = await fs.readFile(path.join(PUB, 'favicon.svg'));
await sharp(favSvg, { density: 512 }).resize(32, 32).png().toFile(path.join(PUB, 'favicon-32.png'));
await sharp(favSvg, { density: 512 }).resize(180, 180).png().toFile(path.join(PUB, 'apple-touch-icon.png'));

// --- default Open Graph image (1200x630) ---
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#141414"/>
  <rect x="0" y="0" width="1200" height="12" fill="#e8733a"/>
  <g transform="translate(80,150)">
    <rect width="96" height="96" rx="20" fill="#e8733a"/>
    <path d="M30 26 L66 70 M66 26 L30 70" stroke="#141414" stroke-width="10" stroke-linecap="round"/>
  </g>
  <text x="80" y="340" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="800" fill="#faf8f4">Lukasz Szumilas</text>
  <text x="82" y="410" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#e8733a">ServiceNow &amp; AI Specialist</text>
  <text x="82" y="470" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#b9b3a8">Governed AI on ServiceNow · 17 certs · 10,000+ Udemy students</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(path.join(PUB, 'og-default.png'));

console.log('Generated: favicon-32.png, apple-touch-icon.png, og-default.png');
