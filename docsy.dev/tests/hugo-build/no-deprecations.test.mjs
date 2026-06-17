import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = fileURLToPath(new URL('../../', import.meta.url));
const tmpDir = join(siteDir, 'tmp');

// Build the real site to a throwaway destination under the gitignored `tmp/` so
// this probe build never clobbers the published `public/` that `test:base`
// produces and other tests (e.g. published-head) read.
function buildSite() {
  mkdirSync(tmpDir, { recursive: true });
  const destDir = mkdtempSync(join(tmpDir, 'no-deprecations-'));
  try {
    const res = spawnSync('npm run build -- -d ' + destDir, {
      cwd: siteDir,
      shell: true,
      encoding: 'utf8',
    });
    const output = `${res.stdout ?? ''}${res.stderr ?? ''}`;
    const deprecations = output
      .split('\n')
      .filter((line) => /deprecated/i.test(line));
    return { res, output, deprecations };
  } finally {
    rmSync(destDir, { recursive: true, force: true });
  }
}

test('site build logs no Hugo deprecation notices', (t) => {
  // The `_hugo` script builds with `--logLevel info`, the level at which
  // Hugo first reports deprecated API usage.
  const { res, output, deprecations } = buildSite();
  assert.equal(res.status, 0, `Build failed:\n${output}`);
  assert.deepEqual(deprecations, [], 'Hugo build logged deprecation notice(s)');
  t.diagnostic(`Scanned ${output.split('\n').length} build-log lines`);
});

// The check above can only catch deprecations if the build runs at a log level
// where Hugo surfaces them (`info` or more verbose). Rather than re-derive that
// with a second build that seeds a deprecated API call -- which would have to
// mutate tracked source -- assert the invariant statically against the `_hugo`
// script. If someone raises the level (e.g. to `warn`), this fails fast.
test('the site build runs at a log level that surfaces deprecations', () => {
  const pkg = JSON.parse(
    readFileSync(new URL('../../package.json', import.meta.url), 'utf8'),
  );
  const hugoScript = pkg.scripts?._hugo ?? '';
  const match = hugoScript.match(/--logLevel\s+(\w+)/);
  assert.ok(match, `_hugo script has no --logLevel flag: ${hugoScript}`);
  assert.ok(
    ['info', 'debug'].includes(match[1]),
    `_hugo --logLevel ${match[1]} is too quiet to surface Hugo deprecation ` +
      'notices; use info (or more verbose)',
  );
});
