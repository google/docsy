import test from 'node:test';
import assert from 'node:assert/strict';
import {
  chmodSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(
  new URL('rebuild-hugo-extended.sh', import.meta.url),
);
const unsafeHugoEnv = [
  'HUGO_BIN_PATH',
  'HUGO_FORCE_STANDARD',
  'HUGO_MIRROR_BASE_URL',
  'HUGO_NO_EXTENDED',
  'HUGO_OVERRIDE_VERSION',
  'HUGO_SKIP_CHECKSUM',
  'HUGO_SKIP_DOWNLOAD',
  'HUGO_SKIP_VERIFY',
];

function runProbe(succeedAt, extraEnv = {}) {
  const tmp = mkdtempSync(path.join(os.tmpdir(), 'docsy-hugo-rebuild-'));
  const attempts = path.join(tmp, 'attempts');
  const delays = path.join(tmp, 'delays');
  const invocations = path.join(tmp, 'invocations');
  const npm = path.join(tmp, 'npm');
  const sleep = path.join(tmp, 'sleep');

  writeFileSync(
    npm,
    `#!/bin/bash
echo "$*" >> "$INVOCATIONS"
if [ "$*" = "run -s _check:hugo" ]; then
  exit 0
fi
if [ "$*" != "run __rebuild:hugo" ]; then
  exit 64
fi
count=$(cat "$ATTEMPTS" 2>/dev/null || echo 0)
count=$((count + 1))
echo "$count" > "$ATTEMPTS"
[ "$count" -ge "$SUCCEED_AT" ]
`,
  );
  writeFileSync(
    sleep,
    `#!/bin/bash
echo "$1" >> "$DELAYS"
`,
  );
  chmodSync(npm, 0o755);
  chmodSync(sleep, 0o755);

  const env = {
    ...process.env,
    ATTEMPTS: attempts,
    DELAYS: delays,
    INVOCATIONS: invocations,
    PATH: `${tmp}${path.delimiter}${process.env.PATH}`,
    SUCCEED_AT: String(succeedAt),
    ...extraEnv,
  };
  for (const name of unsafeHugoEnv) {
    if (!(name in extraEnv)) delete env[name];
  }
  const result = spawnSync('bash', [script], {
    encoding: 'utf8',
    env,
  });
  const count = existsSync(attempts)
    ? Number(readFileSync(attempts, 'utf8').trim())
    : 0;
  const waited = existsSync(delays)
    ? readFileSync(delays, 'utf8').trim().split('\n')
    : [];
  const invoked = existsSync(invocations)
    ? readFileSync(invocations, 'utf8').trim().split('\n')
    : [];
  rmSync(tmp, { recursive: true, force: true });

  return { result, count, invoked, waited };
}

test('Hugo rebuild retries with backoff until it succeeds', () => {
  const { result, count, invoked, waited } = runProbe(3);

  assert.deepEqual(
    invoked,
    [
      'run __rebuild:hugo',
      'run __rebuild:hugo',
      'run __rebuild:hugo',
      'run -s _check:hugo',
    ],
    'retry wrapper invokes only the raw rebuild and Hugo check',
  );
  assert.equal(result.status, 0, 'retry wrapper exits successfully');
  assert.equal(count, 3, 'retry wrapper stops after the successful attempt');
  assert.deepEqual(
    waited,
    ['2', '5'],
    'retry wrapper uses the first two delays',
  );
  assert.match(result.stdout, /Hugo install attempt 3\/4/);
});

test('Hugo rebuild fails after four attempts', () => {
  const { result, count, invoked, waited } = runProbe(5);

  assert.deepEqual(
    invoked,
    Array(4).fill('run __rebuild:hugo'),
    'every exhausted attempt invokes the raw rebuild',
  );
  assert.equal(result.status, 1, 'exhausted retry wrapper exits nonzero');
  assert.equal(count, 4, 'retry wrapper makes four attempts');
  assert.deepEqual(waited, ['2', '5', '10'], 'retry wrapper uses every delay');
  assert.match(result.stderr, /Hugo install failed after 4 attempts/);
});

test('Hugo rebuild rejects installer control variables', () => {
  for (const name of unsafeHugoEnv) {
    const { result, count, invoked } = runProbe(1, { [name]: '1' });

    assert.equal(result.status, 1, `${name} makes the rebuild fail`);
    assert.equal(count, 0, `${name} permits no rebuild attempt`);
    assert.deepEqual(invoked, [], `${name} permits no npm invocation`);
    assert.match(result.stderr, new RegExp(`${name} must be unset`));
  }
});
