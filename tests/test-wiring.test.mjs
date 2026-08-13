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

  // Coverage, derived from the filesystem: every .test.mjs under the suite
  // roots must be resolved by some test:repo argument, so no guard can be
  // dropped, renamed, or moved out of glob reach while the rest stays green
  // (adversarial rounds 11-12). Exclusions are named and deliberate.
  const deliberatelyUnwired = ['tests/lychee/']; // own suite: test:lychee
  const resolved = new Set(
    args
      .flatMap((arg) =>
        fs.globSync(arg.replace(/^(['"])(.*)\1$/, '$2'), { cwd: repoRoot }),
      )
      // globSync returns platform separators; compare in posix form.
      .map((file) => file.replaceAll(path.sep, '/')),
  );
  const allTestFiles = ['tests', 'scripts', 'theme/scripts']
    .flatMap((dir) =>
      fs
        .readdirSync(path.join(repoRoot, dir), { recursive: true })
        .filter((file) => file.endsWith('.test.mjs'))
        .map((file) => `${dir}/${file.replaceAll(path.sep, '/')}`),
    )
    .filter((file) => !deliberatelyUnwired.some((dir) => file.startsWith(dir)))
    .sort();
  assert.deepEqual(
    allTestFiles.filter((file) => resolved.has(file)),
    allTestFiles,
    'test:repo arguments resolve every repo .test.mjs file',
  );
});
