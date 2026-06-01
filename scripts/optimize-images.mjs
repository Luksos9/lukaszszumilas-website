// Convert migrated blog PNGs to resized WebP and rewrite the Markdown
// references. Big payload win: screenshots as WebP are far smaller than PNG.
// Run: node scripts/optimize-images.mjs
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const IMG_DIR = path.resolve('public/images/blog');
const BLOG_DIR = path.resolve('src/content/blog');
const MAX_WIDTH = 1200;
const QUALITY = 80;

const files = (await fs.readdir(IMG_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));
const map = {};
let before = 0;
let after = 0;

for (const f of files) {
  const src = path.join(IMG_DIR, f);
  before += (await fs.stat(src)).size;
  const out = f.replace(/\.(png|jpe?g)$/i, '.webp');
  const img = sharp(src);
  const meta = await img.metadata();
  const pipe = meta.width && meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img;
  await pipe.webp({ quality: QUALITY }).toFile(path.join(IMG_DIR, out));
  await fs.rm(src);
  after += (await fs.stat(path.join(IMG_DIR, out))).size;
  map[f] = out;
}

const mds = (await fs.readdir(BLOG_DIR)).filter((f) => /\.(md|mdx)$/.test(f));
let edited = 0;
for (const m of mds) {
  const p = path.join(BLOG_DIR, m);
  let c = await fs.readFile(p, 'utf8');
  let changed = false;
  for (const [oldN, newN] of Object.entries(map)) {
    if (c.includes(oldN)) {
      c = c.split(oldN).join(newN);
      changed = true;
    }
  }
  if (changed) {
    await fs.writeFile(p, c);
    edited += 1;
  }
}

console.log(
  `Converted ${files.length} images, updated ${edited} posts. ` +
    `${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`
);
