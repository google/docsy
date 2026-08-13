import test from 'node:test';
import assert from 'node:assert/strict';

import {
  RETRY_DELAYS_SECONDS,
  UNSAFE_HUGO_ENV,
  rebuildHugoExtended,
  runNpmRebuild,
} from './rebuild-hugo-extended.mjs';

const expectedUnsafeHugoEnv = [
  'HUGO_BIN_PATH',
  'HUGO_FORCE_STANDARD',
  'HUGO_MIRROR_BASE_URL',
  'HUGO_NO_EXTENDED',
  'HUGO_OVERRIDE_VERSION',
  'HUGO_SKIP_CHECKSUM',
  'HUGO_SKIP_DOWNLOAD',
  'HUGO_SKIP_VERIFY',
];

async function runProbe(succeedAt, env = {}) {
  const attempts = [];
  const errors = [];
  const logs = [];
  const waited = [];
  const status = await rebuildHugoExtended({
    env,
    error: (message) => errors.push(message),
    log: (message) => logs.push(message),
    run: () => {
      attempts.push(attempts.length + 1);
      return attempts.length >= succeedAt ? 0 : 1;
    },
    wait: async (delay) => waited.push(delay),
  });
  return { attempts, errors, logs, status, waited };
}

test('Hugo rebuild policy is bounded and rejects installer controls', () => {
  assert.deepEqual(
    RETRY_DELAYS_SECONDS,
    [0, 2, 5, 10],
    'retry delays define four bounded attempts',
  );
  assert.deepEqual(
    UNSAFE_HUGO_ENV,
    expectedUnsafeHugoEnv,
    'unsafe Hugo controls stay complete',
  );
});

test('npm rebuild uses the current npm CLI and exact arguments', () => {
  const env = { npm_execpath: '/npm/bin/npm-cli.js' };
  const calls = [];
  const status = runNpmRebuild({
    env,
    execPath: '/node',
    spawn(file, args, options) {
      calls.push({ args, file, options });
      return { status: 0 };
    },
  });

  assert.equal(status, 0, 'successful npm rebuild returns zero');
  assert.deepEqual(
    calls,
    [
      {
        args: [
          '/npm/bin/npm-cli.js',
          'rebuild',
          'hugo-extended',
          '--ignore-scripts=false',
        ],
        file: '/node',
        options: { env, stdio: 'inherit' },
      },
    ],
    'rebuild runs the locked package through the current npm CLI',
  );
});

test('Hugo rebuild retries with backoff until it succeeds', async () => {
  const { attempts, errors, logs, status, waited } = await runProbe(3);

  assert.equal(status, 0, 'retry policy returns zero after success');
  assert.deepEqual(attempts, [1, 2, 3], 'retry policy stops after success');
  assert.deepEqual(waited, [2, 5], 'retry policy uses the first two delays');
  assert.deepEqual(errors, [], 'successful retry policy reports no errors');
  assert.ok(
    logs.includes('Hugo install attempt 3/4'),
    'successful attempt is logged',
  );
});

test('Hugo rebuild fails after four attempts', async () => {
  const { attempts, errors, status, waited } = await runProbe(5);

  assert.equal(status, 1, 'exhausted retry policy returns nonzero');
  assert.deepEqual(attempts, [1, 2, 3, 4], 'retry policy makes four attempts');
  assert.deepEqual(waited, [2, 5, 10], 'retry policy uses every delay');
  assert.deepEqual(
    errors,
    ['Hugo install failed after 4 attempts'],
    'retry exhaustion is reported',
  );
});

test('Hugo rebuild rejects installer control variables', async () => {
  for (const name of expectedUnsafeHugoEnv) {
    const { attempts, errors, status, waited } = await runProbe(1, {
      [name]: '1',
    });

    assert.equal(status, 1, `${name} returns nonzero`);
    assert.deepEqual(attempts, [], `${name} permits no rebuild attempt`);
    assert.deepEqual(waited, [], `${name} permits no retry wait`);
    assert.deepEqual(
      errors,
      [`${name} must be unset for the pinned Hugo rebuild`],
      `${name} rejection is reported`,
    );
  }
});
