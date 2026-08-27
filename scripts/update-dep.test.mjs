import test from 'node:test';
import assert from 'node:assert/strict';

import {
  STABLE_SEMVER,
  planUpdate,
  themeDeps,
  updateDep,
} from './update-dep.mjs';

const deps = ['bootstrap', '@fortawesome/fontawesome-free'];

test('version guard accepts exactly stable X.Y.Z', () => {
  for (const ok of ['0.164.0', '5.3.9', '10.0.1']) {
    assert.match(ok, STABLE_SEMVER, `${ok} is a stable version`);
  }
  for (const bad of [
    'latest',
    '^0.164',
    '0.164',
    '00.164.0',
    '0.0164.0',
    '0.164.0-rc.1',
    'v0.164.0',
    '',
    undefined,
  ]) {
    const plan = planUpdate('hugo', bad, { deps });
    assert.equal(typeof plan, 'string', `${bad} is rejected with usage text`);
    assert.match(plan, /^usage:/, 'the rejection is the usage line');
  }
});

test('hugo bumps are a single root install', () => {
  assert.deepEqual(planUpdate('hugo', '0.165.0', { deps }), [
    ['install', '-DE', '--ignore-scripts', 'hugo-extended@0.165.0'],
  ]);
});

test('theme bumps install, sync locks, restore the tree, and remind', () => {
  const plan = planUpdate('bootstrap', '5.3.9', { deps });
  assert.deepEqual(plan[0], [
    'install',
    '-E',
    '--ignore-scripts',
    '-w',
    'theme',
    'bootstrap@5.3.9',
  ]);
  assert.deepEqual(
    plan.slice(1).map((args) => args.at(-1)),
    ['_sync:theme-lock', 'install:theme-deps', 'update::post'],
    'the follow-up chain runs in order',
  );
});

test('non-theme dependencies are rejected', () => {
  for (const name of ['nosuchdep', 'lodash', 'hugo-extended']) {
    assert.equal(
      planUpdate(name, '1.2.3', { deps }),
      `not a theme dependency: ${name}`,
      `${name} is rejected`,
    );
  }
});

test('the real theme manifest lists the managed dependencies', () => {
  const actual = themeDeps();
  for (const name of deps) {
    assert.ok(actual.includes(name), `${name} is a theme dependency`);
  }
});

test('a failing step stops the chain', () => {
  const calls = [];
  const status = updateDep(['bootstrap', '5.3.9'], {
    env: { npm_execpath: '/npm-cli.js' },
    spawn: (_cmd, args) => {
      calls.push(args);
      return { status: calls.length === 2 ? 1 : 0 };
    },
  });
  assert.equal(status, 1, 'the failing step status propagates');
  assert.equal(calls.length, 2, 'later steps do not run');
});
