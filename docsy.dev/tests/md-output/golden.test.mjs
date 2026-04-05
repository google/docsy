import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const goldenDir = fileURLToPath(new URL('./goldens/', import.meta.url));
const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));

const manifest = JSON.parse(
  readFileSync(new URL('./goldens.json', import.meta.url), 'utf8'),
);

for (const { path, kind, covers } of manifest) {
  test(`${path} (${kind}) — ${covers.join(', ')}`, () => {
    const expected = readFileSync(join(goldenDir, path), 'utf8');
    const actual = readFileSync(join(publicDir, path), 'utf8');
    assert.equal(actual, expected);
  });
}
