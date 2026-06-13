// cSpell:ignore hrefs
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { extractFaviconLinks, faviconHrefs, pages } from './lib/extract.mjs';

const goldenDir = fileURLToPath(new URL('./goldens/', import.meta.url));
const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));

// Reference snapshot of the favicon `<head>` links; intended changes surface as
// a golden diff. Regenerate with `npm run update:favicon-goldens`.
for (const page of pages) {
  test(`favicon <head> links: ${page}`, () => {
    const actual = extractFaviconLinks(
      readFileSync(join(publicDir, page), 'utf8'),
    );
    const expected = readFileSync(join(goldenDir, `${page}.txt`), 'utf8');
    assert.equal(actual, expected);
  });
}

// Smoke check that links point at real assets; the golden above pins the rest.
test('linked favicon files exist in the build output', () => {
  const hrefs = faviconHrefs(readFileSync(join(publicDir, pages[0]), 'utf8'));
  assert.ok(hrefs.length, 'favicon links are present');
  for (const href of hrefs) {
    assert.ok(
      existsSync(join(publicDir, href.replace(/^\//, ''))),
      `linked favicon asset exists in the build output: ${href}`,
    );
  }
});
