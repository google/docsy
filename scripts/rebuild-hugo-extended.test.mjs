import test from 'node:test';
import assert from 'node:assert/strict';
import {
  chmodSync,
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

function runProbe(succeedAt) {
  const tmp = mkdtempSync(path.join(os.tmpdir(), 'docsy-hugo-rebuild-'));
  const attempts = path.join(tmp, 'attempts');
  const delays = path.join(tmp, 'delays');
  const npm = path.join(tmp, 'npm');
  const sleep = path.join(tmp, 'sleep');

  writeFileSync(
    npm,
    `#!/bin/bash
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

  const result = spawnSync('bash', [script], {
    encoding: 'utf8',
    env: {
      ...process.env,
      ATTEMPTS: attempts,
      DELAYS: delays,
      PATH: `${tmp}${path.delimiter}${process.env.PATH}`,
      SUCCEED_AT: String(succeedAt),
    },
  });
  const count = Number(readFileSync(attempts, 'utf8').trim());
  const waited = readFileSync(delays, 'utf8').trim().split('\n');
  rmSync(tmp, { recursive: true, force: true });

  return { result, count, waited };
}

test('Hugo rebuild retries with backoff until it succeeds', () => {
  const { result, count, waited } = runProbe(3);

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
  const { result, count, waited } = runProbe(5);

  assert.equal(result.status, 1, 'exhausted retry wrapper exits nonzero');
  assert.equal(count, 4, 'retry wrapper makes four attempts');
  assert.deepEqual(waited, ['2', '5', '10'], 'retry wrapper uses every delay');
  assert.match(result.stderr, /Hugo install failed after 4 attempts/);
});
