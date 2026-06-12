import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
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

// Depends on the build from the test above (tests in this file run
// sequentially; keep this one right after it).
//
// Guards the rendered-HTML escaping of `&` in Markdown link URLs: Hugo
// 0.159.2 double-escaped them (`&amp;amp;`, gohugoio/hugo#14715; fixed in
// 0.160.0) on sites using goldmark's plain link rendering. This site is
// shielded — multilingual single-host sites get `useEmbedded: fallback`,
// i.e. the embedded link render hook — so this is an invariant check on the
// output rather than a reproduction of the bug.
test('ampersands in Markdown link URLs are escaped exactly once', () => {
  const htmlPath = join(
    siteDir,
    'public',
    'docs',
    'content',
    'navigation',
    'index.html',
  );
  assert.ok(existsSync(htmlPath), `${htmlPath} not found; build first`);
  const html = readFileSync(htmlPath, 'utf8');
  assert.match(html, /fontawesome\.com\/icons\?d=gallery&amp;p=2/);
  assert.doesNotMatch(html, /&amp;amp;/);
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
    const { res, output, deprecations } = buildSite();
    assert.equal(res.status, 0, `Seeded build failed:\n${output}`);
    assert.ok(
      deprecations.length > 0,
      'Seeded deprecated API call was not reported by the Hugo build',
    );
    t.diagnostic(`Seeded deprecation reported as: ${deprecations[0].trim()}`);
  } finally {
    rmSync(hookPath);
  }
});
