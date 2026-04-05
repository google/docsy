import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const goldenDir = fileURLToPath(new URL('./goldens/', import.meta.url));
const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));

function* walk(dir, base = dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      yield* walk(full, base);
    } else if (entry.endsWith('.md')) {
      yield relative(base, full);
    }
  }
}

for (const rel of walk(goldenDir)) {
  test(`md-output golden: ${rel}`, () => {
    const expected = readFileSync(join(goldenDir, rel), 'utf8');
    const actual = readFileSync(join(publicDir, rel), 'utf8');
    assert.equal(actual, expected);
  });
}
