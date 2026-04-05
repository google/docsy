// Refresh golden files from the latest build output.
// Reads goldens.json as the manifest of files to update.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(readFileSync(join(here, 'goldens.json'), 'utf8'));
const publicDir = join(here, '../../public');
const goldensDir = join(here, 'goldens');

for (const entry of manifest) {
  const rel = entry.path;
  if (!rel) continue;
  const dest = join(goldensDir, rel);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(join(publicDir, rel), dest);
  console.log(`updated: goldens/${rel}`);
}
