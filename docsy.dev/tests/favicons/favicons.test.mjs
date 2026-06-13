import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { extractFaviconLinks, pages } from './extract.mjs';

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
