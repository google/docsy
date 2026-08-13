// Suite-wiring guard: node --test silently succeeds when a glob matches
// nothing, so a rename can't silently empty a test:repo suite. Resolve
// every argument against the real filesystem. Single quotes are safe under
// the pinned bash script shell (see .npmrc), but wildcards must stay
// quoted: bash without globstar would pre-expand `**` as `*`, silently
// dropping top-level test files.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

test('manifests: every test:repo argument resolves to test files', () => {
  const { scripts } = JSON.parse(
    fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
  );
  assert.match(
    scripts['test:repo'],
    /^node --test /,
    'test:repo uses the node test runner',
  );
  const args = scripts['test:repo'].replace(/^node --test /, '').split(' ');
  for (const arg of args) {
    if (arg.includes('*')) {
      assert.match(
        arg,
        /^(['"]).*\1$/,
        `test:repo wildcard argument ${arg} is quoted for node's own globbing`,
      );
    }
    const pattern = arg.replace(/^(['"])(.*)\1$/, '$2');
    // globSync also returns directories, which node --test can't run.
    const testFiles = fs
      .globSync(pattern, { cwd: repoRoot })
      .filter(
        (match) =>
          match.endsWith('.test.mjs') &&
          fs.statSync(path.join(repoRoot, match)).isFile(),
      );
    assert.ok(
      testFiles.length > 0,
      `test:repo argument ${arg} matches test files`,
    );
  }

  // Membership, derived from the filesystem: every top-level guard in
  // tests/ must ride in test:repo, so no single guard file can be dropped
  // from the suite while the rest stays green (adversarial round 11).
  // Exclusions are named and deliberate: smoke is slow and network-bound
  // (its header), run manually.
  const deliberatelyUnwired = new Set(['tests/smoke.test.mjs']);
  const topLevelGuards = fs
    .globSync('tests/*.test.mjs', { cwd: repoRoot })
    .filter((file) => !deliberatelyUnwired.has(file))
    .sort();
  assert.deepEqual(
    args.filter((arg) => !arg.includes('*')).sort(),
    topLevelGuards,
    'test:repo names every top-level tests/*.test.mjs guard',
  );
});
