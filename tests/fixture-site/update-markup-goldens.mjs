// Refresh the chrome markup goldens from a fresh fixture build.
// Run via: npm run update:markup-goldens

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildFixture,
  extractRegions,
  goldenDir,
} from './lib/markup-goldens.mjs';

mkdirSync(goldenDir, { recursive: true });
for (const { name, html } of extractRegions(buildFixture())) {
  const file = path.join(goldenDir, `${name}.html`);
  writeFileSync(file, html);
  console.log(`wrote ${path.relative(process.cwd(), file)}`);
}
