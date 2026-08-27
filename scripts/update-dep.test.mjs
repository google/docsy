import test from 'node:test';
import assert from 'node:assert/strict';

import {
  STABLE_SEMVER,
  declaredDeps,
  planInstall,
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
    const plan = planInstall(['hugo-extended', '-D', bad], { deps });
    assert.equal(typeof plan, 'string', `${bad} is rejected with usage text`);
    assert.match(plan, /^usage:/, 'the rejection is the usage line');
  }
});

test('empty and version-less argv are rejected', () => {
  for (const argv of [[], ['hugo-extended'], ['bootstrap', '-w', 'theme']]) {
    assert.match(
      String(planInstall(argv, { deps })),
      /^usage:/,
      `argv [${argv}] is rejected with usage text`,
    );
  }
});

test('flags pass through verbatim, after the common flags', () => {
  assert.deepEqual(planInstall(['hugo-extended', '-D', '0.165.0'], { deps }), [
    'install',
    '-E',
    '--ignore-scripts',
    '-D',
    'hugo-extended@0.165.0',
  ]);
  for (const dep of deps.theme) {
    assert.deepEqual(
      planInstall([dep, '-w', 'theme', '5.3.9'], { deps }),
      ['install', '-E', '--ignore-scripts', '-w', 'theme', `${dep}@5.3.9`],
      `${dep} flags arrive in script order`,
    );
  }
});

test('membership follows the targeted manifest', () => {
  assert.match(
    String(planInstall(['bootstrap', '-D', '5.3.9'], { deps })),
    /^not a declared dependency/,
    'a theme dep is not a root dev dependency',
  );
  assert.match(
    String(planInstall(['hugo-extended', '-w', 'theme', '0.165.0'], { deps })),
    /^not a declared dependency/,
    'a root dev dep is not a theme dependency',
  );
  for (const name of ['nosuchdep', 'lodash']) {
    assert.match(
      String(planInstall([name, '-D', '1.2.3'], { deps })),
      /^not a declared dependency/,
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
  const status = updateDep(['hugo-extended', '-D', '0.165.0'], {
    env,
    spawn: (file, args, options) => {
      calls.push({ file, args, options });
      return { status: 0 };
    },
  });
  assert.equal(status, 0, 'the planned spawn succeeds');
  assert.equal(calls.length, 1, 'the plan is a single install');
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
  const status = updateDep(['hugo-extended', '-D', '0.165.0'], {
    env: {},
    spawn: (...args) => {
      calls.push(args);
      return { status: 0 };
    },
  });
  assert.equal(status, 1, 'the helper reports failure');
  assert.equal(calls.length, 0, 'nothing is spawned');
});

test('the install status propagates', () => {
  const status = updateDep(['bootstrap', '-w', 'theme', '5.3.9'], {
    env: { npm_execpath: '/npm-cli.js' },
    spawn: () => ({ status: 7 }),
  });
  assert.equal(status, 7, 'the spawn status is the exit status');
});
