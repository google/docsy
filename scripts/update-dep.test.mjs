import test from 'node:test';
import assert from 'node:assert/strict';

import {
  STABLE_SEMVER,
  declaredDeps,
  planUpdate,
  updateDep,
} from './update-dep.mjs';

const deps = {
  root: ['hugo-extended'],
  theme: ['bootstrap', '@fortawesome/fontawesome-free'],
};

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
    const plan = planUpdate(['hugo-extended', bad], { deps });
    assert.equal(typeof plan, 'string', `${bad} is rejected with usage text`);
    assert.match(plan, /^usage:/, 'the rejection is the usage line');
  }
});

test('extra or missing arguments are rejected', () => {
  for (const argv of [
    [],
    ['hugo-extended'],
    ['hugo-extended', '0.164.0', '0.165.0'],
    ['bootstrap', '5.3.9', '9.9.9'],
  ]) {
    assert.match(
      String(planUpdate(argv, { deps })),
      /^usage:/,
      `argv [${argv}] is rejected with usage text`,
    );
  }
});

test('root devDependencies get a single root install', () => {
  assert.deepEqual(planUpdate(['hugo-extended', '0.165.0'], { deps }), [
    ['install', '-DE', '--ignore-scripts', 'hugo-extended@0.165.0'],
  ]);
});

test('theme deps install, sync locks, restore the tree, and remind', () => {
  for (const dep of deps.theme) {
    assert.deepEqual(
      planUpdate([dep, '5.3.9'], { deps }),
      [
        ['install', '-E', '--ignore-scripts', '-w', 'theme', `${dep}@5.3.9`],
        ['run', '-s', '_sync:theme-lock'],
        ['run', '-s', 'install:theme-deps'],
        ['run', '-s', 'update::post'],
      ],
      `${dep} plan is the full reviewed chain`,
    );
  }
});

test('undeclared packages are rejected', () => {
  for (const name of ['nosuchdep', 'lodash', 'hugo']) {
    assert.equal(
      planUpdate([name, '1.2.3'], { deps }),
      `not a declared dependency: ${name}`,
      `${name} is rejected`,
    );
  }
});

test('the real manifests declare the managed dependencies', () => {
  const actual = declaredDeps();
  assert.ok(
    actual.root.includes('hugo-extended'),
    'hugo-extended is a root devDependency',
  );
  for (const name of deps.theme) {
    assert.ok(actual.theme.includes(name), `${name} is a theme dependency`);
  }
});

test('spawns run npm-cli.js under the current node, from the repo root', () => {
  const calls = [];
  const env = { npm_execpath: '/npm/bin/npm-cli.js' };
  const status = updateDep(['hugo-extended', '0.165.0'], {
    env,
    spawn: (file, args, options) => {
      calls.push({ file, args, options });
      return { status: 0 };
    },
  });
  assert.equal(status, 0, 'the planned spawn succeeds');
  assert.equal(calls.length, 1, 'one spawn per plan step');
  const { file, args, options } = calls[0];
  assert.equal(file, process.execPath, 'the current node runs the CLI');
  assert.equal(args[0], '/npm/bin/npm-cli.js', 'npm_execpath is the CLI');
  assert.deepEqual(
    declaredDeps({ root: options.cwd }).theme,
    declaredDeps().theme,
    'the spawn cwd is the repo root',
  );
  assert.equal(options.env, env, 'the environment passes through');
  assert.equal(options.stdio, 'inherit', 'output streams to the terminal');
});

test('a missing npm_execpath fails closed without spawning', () => {
  const calls = [];
  const status = updateDep(['hugo-extended', '0.165.0'], {
    env: {},
    spawn: (...args) => {
      calls.push(args);
      return { status: 0 };
    },
  });
  assert.equal(status, 1, 'the helper reports failure');
  assert.equal(calls.length, 0, 'nothing is spawned');
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
