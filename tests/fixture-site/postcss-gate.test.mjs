// Locks the non-RTL production PostCSS gate in head-css.html: Docsy runs
// `postCSS` for a non-RTL site only when the site provides a project-root
// postcss.config.{js,mjs,cjs}. Without one, the production build must succeed
// with no PostCSS toolchain installed at all (the toolchain is the site's
// concern, not Docsy's). Builds use a curated node_modules that provides only
// the SCSS sources the theme mounts (Bootstrap, Font Awesome) and deliberately
// no `postcss` binary, so the gate is exercised for real. `hugo` (build, not
// server) defaults to the production environment, so hugo.IsProduction is true.

import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = fileURLToPath(new URL('../../', import.meta.url));
const themesDir = repoDir.replace(/[/\\]$/, '');
const hugoBin = join(repoDir, 'node_modules', '.bin', 'hugo');
const hugo = existsSync(hugoBin) ? hugoBin : 'hugo';

// Build a minimal non-RTL site against the local theme, with a node_modules
// holding only the packages the theme mounts as SCSS sources — and no `postcss`.
// When `withConfig` is set, drop a project-root postcss.config.js (autoprefixer)
// to opt the non-RTL pass back in. Returns the build result plus compiled CSS.
function buildNonRtl({ withConfig = false } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'docsy-postcss-gate-'));
  try {
    writeFileSync(
      join(dir, 'hugo.yaml'),
      [
        'title: postcss-gate',
        'baseURL: https://example.org/',
        'theme: theme',
        `themesDir: ${themesDir}`,
        '',
      ].join('\n'),
    );
    mkdirSync(join(dir, 'content'));
    writeFileSync(join(dir, 'content', '_index.md'), '---\ntitle: Home\n---\n');

    // Provide only the mounted SCSS sources; no postcss binary in this tree.
    mkdirSync(join(dir, 'node_modules', '@fortawesome'), { recursive: true });
    symlinkSync(
      join(repoDir, 'node_modules', 'bootstrap'),
      join(dir, 'node_modules', 'bootstrap'),
      'junction',
    );
    symlinkSync(
      join(repoDir, 'node_modules', '@fortawesome', 'fontawesome-free'),
      join(dir, 'node_modules', '@fortawesome', 'fontawesome-free'),
      'junction',
    );

    if (withConfig) {
      writeFileSync(
        join(dir, 'postcss.config.js'),
        'module.exports = { plugins: { autoprefixer: {} } };\n',
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
      { cwd: dir, encoding: 'utf8' },
    );
    const output = `${res.stdout ?? ''}${res.stderr ?? ''}`;
    let css = '';
    const scssDir = join(dir, 'public', 'scss');
    if (res.status === 0 && existsSync(scssDir)) {
      const file = readdirSync(scssDir).find((f) =>
        /^main\.min.*\.css$/.test(f),
      );
      if (file) css = readFileSync(join(scssDir, file), 'utf8');
    }
    return { ...res, output, css };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

test('non-RTL production build succeeds with no PostCSS config or toolchain', () => {
  const r = buildNonRtl();
  assert.equal(r.status, 0, `build succeeds without PostCSS:\n${r.output}`);
  assert.match(
    r.css,
    /position:sticky/,
    'compiled CSS includes position:sticky',
  );
  assert.doesNotMatch(
    r.css,
    /-webkit-sticky/,
    'no Autoprefixer output: the postCSS pass is skipped without a config',
  );
});

test('a project-root postcss.config.js opts the non-RTL pass back in', () => {
  // With a config present, the gate runs postCSS; here the toolchain is absent,
  // so the build fails with a clear PostCSS error — the legible signal that an
  // opt-in site must install its own PostCSS dependencies.
  const r = buildNonRtl({ withConfig: true });
  assert.notEqual(
    r.status,
    0,
    'build fails when opted in without the toolchain',
  );
  assert.match(
    r.output,
    /postcss/i,
    'failure points at the missing PostCSS toolchain',
  );
});
