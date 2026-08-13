import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(
  new URL('check-hugo-extended.mjs', import.meta.url),
);

test('installed Hugo is the pinned extended version', () => {
  const result = spawnSync(process.execPath, [script], { encoding: 'utf8' });

  assert.equal(result.status, 0, 'Hugo version check exits successfully');
  assert.match(result.stdout, /^hugo v\d+\.\d+\.\d+.*\+extended\b/);
});
