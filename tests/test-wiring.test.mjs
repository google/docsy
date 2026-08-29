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

// Directories deliberately outside test:repo, each owned by its own suite
// script: tests/lychee/ needs lychee on PATH; tests/visual/ needs an
// installed browser.
const ownSuites = {
  'tests/lychee/': 'test:lychee',
  'tests/visual/': 'test:visual',
};

// Simulates the runner's resolution: every argument must resolve to test
// files under node's own globbing, so the wildcard-quoting assert is
// load-bearing (an unquoted `**` under bash without globstar pre-expands
// as `*`, dropping files the simulation would still see).
function resolveArgs(command, label) {
  assert.match(command, /^node --test /, `${label} uses the node test runner`);
  const resolved = new Set();
  for (const arg of command.replace(/^node --test /, '').split(' ')) {
    if (arg.includes('*')) {
      assert.match(
        arg,
        /^(['"]).*\1$/,
        `${label} wildcard argument ${arg} is quoted for node's own globbing`,
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
      `${label} argument ${arg} matches test files`,
    );
    // globSync returns platform separators; compare in posix form.
    for (const file of testFiles) resolved.add(file.replaceAll(path.sep, '/'));
  }
  return resolved;
}

const testFilesUnder = (dir) =>
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
    );

test('manifests: every test:repo argument resolves to test files', () => {
  const { scripts } = JSON.parse(
    fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
  );
  const resolved = resolveArgs(scripts['test:repo'], 'test:repo');

  // Coverage, derived from the filesystem: every existing .test.mjs under
  // the suite roots must be resolved by some test:repo argument, so no
  // guard can be renamed or moved out of glob reach while the rest stays
  // green.
  const allTestFiles = ['tests', 'scripts', 'theme/scripts']
    .flatMap(testFilesUnder)
    .filter(
      (file) => !Object.keys(ownSuites).some((dir) => file.startsWith(dir)),
    )
    .sort();
  assert.deepEqual(
    allTestFiles.filter((file) => resolved.has(file)),
    allTestFiles,
    'test:repo arguments resolve every test file under the suite roots',
  );
});

// The same silent-empty-glob hole applies to the own-suite scripts: their
// runner and globs get the test:repo treatment, so a renamed visual test
// file (or a broken script) can't leave a green suite that runs nothing.
test('manifests: own-suite scripts resolve their test files', () => {
  const { scripts } = JSON.parse(
    fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
  );
  for (const [dir, script] of Object.entries(ownSuites)) {
    assert.ok(scripts[script], `script ${script} exists`);
    const resolved = resolveArgs(scripts[script], script);
    const dirTests = testFilesUnder(dir).sort();
    assert.ok(dirTests.length > 0, `${dir} contains test files`);
    assert.deepEqual(
      dirTests.filter((file) => resolved.has(file)),
      dirTests,
      `${script} resolves every test file under ${dir}`,
    );
  }
});
