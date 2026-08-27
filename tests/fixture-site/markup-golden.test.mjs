// Chrome markup goldens: rendered region markup matches the committed
// goldens byte for byte (provenance and review story: README.md).
// Refresh: npm run update:markup-goldens.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import {
  buildFixture,
  extractRegions,
  goldenDir,
  regions,
} from './lib/markup-goldens.mjs';

const rendered = extractRegions(buildFixture());

for (const { name, page, html } of rendered) {
  test(`markup golden: ${name} (${page})`, () => {
    const golden = readFileSync(path.join(goldenDir, `${name}.html`), 'utf8');
    assert.equal(html, golden, `${name} matches goldens/${name}.html`);
  });
}

test('markup goldens: every golden file is a tracked region', () => {
  assert.ok(regions.length > 0, 'region list is non-empty');
  const tracked = regions.map(({ name }) => `${name}.html`).sort();
  const committed = readdirSync(goldenDir)
    .filter((f) => f.endsWith('.html'))
    .sort();
  assert.deepEqual(committed, tracked, 'goldens/ matches the region list');
});
