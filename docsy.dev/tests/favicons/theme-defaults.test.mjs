import test, { before } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { extractFaviconLinks } from './lib/extract.mjs';

const repoDir = fileURLToPath(new URL('../../../', import.meta.url));
const themesDir = repoDir.replace(/\/$/, '');
const hugoBin = join(repoDir, 'node_modules', '.bin', 'hugo');
const hugo = existsSync(hugoBin) ? hugoBin : 'hugo';

// Create the empty placeholder module dirs the theme build needs; a clean CI
// checkout has no Hugo module cache to fall back on.
before(() => {
  const res = spawnSync(
    'node',
    [join(repoDir, 'scripts', 'mkdirp-hugo-mod.js'), themesDir],
    { encoding: 'utf8' },
  );
  assert.equal(res.status, 0, `mkdirp-hugo-mod failed:\n${res.stderr ?? ''}`);
});

// Build a throwaway site that uses the theme, optionally with a site-supplied
// favicons partial, and return the favicon `<link>` tags it emits. Guards #2595:
// the theme must ship no default favicons of its own.
function buildSiteFavicons(partial) {
  const dir = mkdtempSync(join(tmpdir(), 'docsy-theme-favicons-'));
  try {
    writeFileSync(
      join(dir, 'hugo.toml'),
      [
        'baseURL = "http://localhost/"',
        'title = "Minimal"',
        'theme = "theme"',
        'disableKinds = ["taxonomy","term","RSS","sitemap","404"]',
        '',
      ].join('\n'),
    );
    mkdirSync(join(dir, 'content'));
    writeFileSync(join(dir, 'content', '_index.md'), '---\ntitle: Home\n---\n');
    if (partial !== undefined) {
      mkdirSync(join(dir, 'layouts', '_partials'), { recursive: true });
      writeFileSync(
        join(dir, 'layouts', '_partials', 'favicons.html'),
        partial,
      );
    }
    const res = spawnSync(
      hugo,
      [
        '--themesDir',
        themesDir,
        '--cleanDestinationDir',
        '--logLevel',
        'error',
      ],
      {
        cwd: dir,
        encoding: 'utf8',
        // Ensure the theme's PostCSS/SCSS pipeline binaries resolve even when
        // the test runs outside an `npm run` PATH.
        env: {
          ...process.env,
          PATH: `${join(repoDir, 'node_modules', '.bin')}:${process.env.PATH}`,
        },
      },
    );
    const output = `${res.stdout ?? ''}${res.stderr ?? ''}`;
    assert.equal(res.status, 0, `Build failed:\n${output}`);
    return extractFaviconLinks(
      readFileSync(join(dir, 'public', 'index.html'), 'utf8'),
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test('theme emits no favicon links without a site override', () => {
  assert.equal(buildSiteFavicons(), '');
});

// Sanity check: a site-supplied partial is emitted and detected, so the
// assertion above can't silently pass on a broken detector or override hook.
test('site-supplied favicons partial is used', () => {
  const links = buildSiteFavicons('<link rel="icon" href="/favicon.ico" />\n');
  assert.match(links, /rel="icon"/);
});
