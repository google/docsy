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
  // Coverage below is existence-relative: a deleted file drops out of
  // both sides, so the structural guards anchor each other by name; this
  // file is pinned from the supply-chain audit.
  for (const guard of [
    'tests/runner-lint.test.mjs',
    'tests/supply-chain-audit.test.mjs',
  ]) {
    assert.ok(
      fs.existsSync(path.join(repoRoot, guard)),
      `structural guard ${guard} exists`,
    );
  }
  const resolved = new Set();
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
    // globSync returns platform separators; compare in posix form.
    for (const file of testFiles) resolved.add(file.replaceAll(path.sep, '/'));
  }

  // Coverage, derived from the filesystem: every existing .test.mjs under
  // the suite roots must be resolved by some test:repo argument, so no
  // guard can be renamed or moved out of glob reach while the rest stays
  // green.
  const deliberatelyUnwired = [
    'tests/lychee/', // own suite: test:lychee
    'tests/visual/', // own suite: test:visual (needs an installed browser)
  ];
  const allTestFiles = ['tests', 'scripts', 'theme/scripts']
    .flatMap((dir) =>
      fs
        .readdirSync(path.join(repoRoot, dir), {
          recursive: true,
          withFileTypes: true,
        })
        .filter((entry) => entry.isFile() && entry.name.endsWith('.test.mjs'))
        .map((entry) =>
          path
            .relative(repoRoot, path.join(entry.parentPath, entry.name))
            .replaceAll(path.sep, '/'),
        ),
    )
    .filter((file) => !deliberatelyUnwired.some((dir) => file.startsWith(dir)))
    .sort();
  assert.deepEqual(
    allTestFiles.filter((file) => resolved.has(file)),
    allTestFiles,
    'test:repo arguments resolve every test file under the suite roots',
  );
});
