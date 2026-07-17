// The published Hugo floor has three declarations that must agree:
// theme/theme.toml `min_version`, theme/hugo.yaml `module.hugoVersion.min`,
// and docsy.dev `params.hugoMinVersion` (which feeds the user docs).
// Raising the floor is an explicit decision that moves all three in one PR;
// `set:hugo:version` (project build bump) touches none of them.
// Fast and offline; picked up by test:tooling / ci:post.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

const SEMVER = /^\d+\.\d+\.\d+$/;

/** Extract the first regex capture from a file, asserting a match. */
function extract(relPath, re, what) {
  const text = fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
  const m = text.match(re);
  assert.ok(m, `${what} is declared in ${relPath}`);
  return m[1];
}

const declarations = {
  'theme/theme.toml': () =>
    extract('theme/theme.toml', /^min_version\s*=\s*"([^"]+)"/m, 'min_version'),
  'theme/hugo.yaml': () =>
    extract(
      'theme/hugo.yaml',
      /^\s*hugoVersion:\s*\n(?:\s+extended:.*\n)?\s+min:\s*(\S+)/m,
      'module.hugoVersion.min',
    ),
  'docsy.dev/config/_default/hugo.yaml': () =>
    extract(
      'docsy.dev/config/_default/hugo.yaml',
      /^\s*hugoMinVersion:\s*&hugoMinVersion\s+(\S+)/m,
      'params.hugoMinVersion',
    ),
};

test('Hugo floor declarations are in sync', () => {
  const values = Object.entries(declarations).map(([file, get]) => {
    const value = get();
    assert.match(value, SEMVER, `${file} floor is X.Y.Z semver`);
    return [file, value];
  });
  const [, reference] = values[0];
  for (const [file, value] of values) {
    assert.equal(value, reference, `${file} floor matches theme/theme.toml`);
  }
});
