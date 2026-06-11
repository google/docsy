import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteDir = fileURLToPath(new URL('../../', import.meta.url));

function buildSite() {
  const res = spawnSync('npm run build', {
    cwd: siteDir,
    shell: true,
    encoding: 'utf8',
  });
  const output = `${res.stdout ?? ''}${res.stderr ?? ''}`;
  const deprecations = output
    .split('\n')
    .filter((line) => /deprecated/i.test(line));
  return { res, output, deprecations };
}

test('site build logs no Hugo deprecation notices', (t) => {
  // The `_hugo` script builds with `--logLevel info`, the level at which
  // Hugo first reports deprecated API usage.
  const { res, output, deprecations } = buildSite();
  assert.equal(res.status, 0, `Build failed:\n${output}`);
  assert.deepEqual(deprecations, [], 'Hugo build logged deprecation notice(s)');
  t.diagnostic(`Scanned ${output.split('\n').length} build-log lines`);
});

// Sanity check that the test above can actually detect deprecation notices:
// seed a deprecated API call via the theme's head-end hook and ensure that
// Hugo reports it. Guards against, e.g., Hugo demoting deprecation notices
// below the info log level.
test('build with seeded deprecated API call logs a deprecation notice', (t) => {
  const hookPath = join(
    siteDir,
    'layouts',
    '_partials',
    'hooks',
    'head-end.html',
  );
  assert.ok(
    !existsSync(hookPath),
    `${hookPath} already exists; this test needs to create it`,
  );
  mkdirSync(dirname(hookPath), { recursive: true });
  writeFileSync(
    hookPath,
    '{{/* Temporary file seeded by no-deprecations.test.mjs. */}}\n' +
      '{{ .Language.LanguageName }}\n',
  );
  try {
    const { deprecations } = buildSite();
    assert.ok(
      deprecations.length > 0,
      'Seeded deprecated API call was not reported by the Hugo build',
    );
    t.diagnostic(`Seeded deprecation reported as: ${deprecations[0].trim()}`);
  } finally {
    rmSync(hookPath);
  }
});
