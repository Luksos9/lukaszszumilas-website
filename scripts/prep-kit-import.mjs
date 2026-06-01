// Convert a Ghost members export into a Kit (ConvertKit) import CSV.
// Keeps only active, non-deleted, email-subscribed members.
// Run: node scripts/prep-kit-import.mjs "<path-to-ghost-members.csv>"
import fs from 'node:fs/promises';

const SRC = process.argv[2] || 'C:/Users/lukasz.a.szumilas/Downloads/members.2026-06-01.csv';
const OUT = 'C:/Users/lukasz.a.szumilas/Downloads/kit-import.csv';

function parseLine(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (q && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else q = !q;
    } else if (c === ',' && !q) {
      out.push(cur);
      cur = '';
    } else cur += c;
  }
  out.push(cur);
  return out;
}

const raw = await fs.readFile(SRC, 'utf8');
const lines = raw.split(/\r?\n/).filter((l) => l.length);
const cols = parseLine(lines.shift());
const idx = (n) => cols.indexOf(n);

const out = [['Email Address', 'First Name']];
let kept = 0;
let skipped = 0;
for (const line of lines) {
  const r = parseLine(line);
  const email = (r[idx('email')] || '').trim();
  const name = (r[idx('name')] || '').trim();
  const sub = (r[idx('subscribed_to_emails')] || '').trim();
  const del = (r[idx('deleted_at')] || '').trim();
  if (!email || sub !== 'true' || del) {
    skipped++;
    continue;
  }
  const first = name ? name.split(/\s+/)[0] : '';
  out.push([email, first]);
  kept++;
}

const csv = out
  .map((row) => row.map((f) => (/[",\n]/.test(f) ? `"${f.replace(/"/g, '""')}"` : f)).join(','))
  .join('\r\n');
await fs.writeFile(OUT, csv);
console.log(`Wrote ${OUT}\nKept ${kept} active subscribers, skipped ${skipped}.`);
