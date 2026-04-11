import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const goldenDir = fileURLToPath(new URL('./goldens/', import.meta.url));
const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));

// `kind` is descriptive only (for readable test names); it doesn't affect test logic.
// `skip: true` omits the assertion (manifest entry is kept for docs / update-goldens).
const manifest = JSON.parse(
  readFileSync(new URL('./goldens.json', import.meta.url), 'utf8'),
);

for (const { path, kind, covers, skip } of manifest) {
  const name = `${path} (${kind}) — ${covers.join(', ')}`;
  const run = () => {
    const expected = readFileSync(join(goldenDir, path), 'utf8');
    const actual = readFileSync(join(publicDir, path), 'utf8');
    assert.equal(actual, expected);
  };
  if (skip) {
    test.skip(name, run);
  } else {
    test(name, run);
  }
}
