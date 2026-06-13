// Refresh favicon-link goldens from the latest build.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { extractFaviconLinks, pages } from './extract.mjs';

const goldenDir = fileURLToPath(new URL('./goldens/', import.meta.url));
const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));

for (const page of pages) {
  const snapshot = extractFaviconLinks(
    readFileSync(join(publicDir, page), 'utf8'),
  );
  writeFileSync(join(goldenDir, `${page}.txt`), snapshot);
  console.log(`updated: goldens/${page}.txt`);
}
