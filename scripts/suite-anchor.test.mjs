// Cross-root anchor for the structural guards in tests/: those guards ride
// the 'tests/*.test.mjs' glob, so a check riding the same glob can't catch
// its removal -- dropping the glob would unwire subject and check together.
// This file rides the scripts glob instead: removing the tests glob or
// deleting a tests-root guard goes red here while this file still runs. The
// supply-chain audit anchors this file back.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

test('anchor: the tests-root guards stay wired into test:repo', () => {
  const { scripts } = JSON.parse(
    fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
  );
  assert.match(
    scripts['test:repo'],
    /^node --test /,
    'test:repo uses the node test runner',
  );
  const args = scripts['test:repo'].replace(/^node --test /, '').split(' ');
  assert.ok(
    args.includes("'tests/*.test.mjs'"),
    'test:repo runs the top-level tests, the structural guards included',
  );
  for (const guard of [
    'tests/npm-audit.test.mjs',
    'tests/runner-lint.test.mjs',
    'tests/supply-chain-audit.test.mjs',
    'tests/test-wiring.test.mjs',
    'tests/workflow-lint.test.mjs',
  ]) {
    assert.ok(
      fs.existsSync(path.join(repoRoot, guard)),
      `structural guard ${guard} exists`,
    );
  }
});
