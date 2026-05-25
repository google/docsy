// Smoke tests for the TOF (theme-only-folder) install modes — repo-reorg
// Phase 2/3. Builds a Docsy-based site three ways and asserts each produces a
// real, fully-styled site (not merely a zero exit code).
//
// Uses Node's built-in test runner (`node --test`) — no extra test deps.
//
//   Run:      npm run test:smoke
//   Prereqs:  npm run install:all   (provides hugo-extended for run-hugo.mjs)
//   Target:   override via env DOCSY_REPO / DOCSY_VERS
//
// NOTE: slow and network-bound (npm + Hugo fetch from GitHub). Deliberately
// kept OUT of `test:tooling` / CI `ci:post`, which must stay fast and offline.

import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  appendFileSync,
  existsSync,
  readdirSync,
  rmSync,
  statSync,
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const TMP = path.join(repoRoot, 'tmp');
const MAKE_SITE = path.join(repoRoot, 'scripts', 'make-site.sh');
const RUN_HUGO = path.join(repoRoot, 'scripts', 'run-hugo.mjs');

const REPO = process.env.DOCSY_REPO ?? 'google/docsy';
const REF = process.env.DOCSY_VERS ?? 'task/repo-reorg-2026-05';

// Run a command, capturing output; print it only when the command fails so a
// passing run stays quiet but a failure is diagnosable.
function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', ...opts });
  if (r.status !== 0) {
    process.stderr.write(
      `\n$ ${cmd} ${args.join(' ')}\n${r.stdout ?? ''}${r.stderr ?? ''}\n`,
    );
  }
  return r;
}

// Run the repo's cross-OS Hugo resolver (the make-site.sh default).
function hugo(args, opts = {}) {
  return run('node', [RUN_HUGO, ...args], opts);
}

// A real, fully-styled build has an index page, a non-trivial compiled
// stylesheet (Bootstrap + Docsy SCSS), and the Font Awesome webfonts. The CSS
// size guards against "Hugo succeeded but styling silently broke".
function assertBuilt(name) {
  const pub = path.join(TMP, name, 'public');
  assert.ok(
    existsSync(path.join(pub, 'index.html')),
    'public/index.html exists',
  );

  const scssDir = path.join(pub, 'scss');
  const mainCss = existsSync(scssDir)
    ? readdirSync(scssDir).find((f) => /^main\.min.*\.css$/.test(f))
    : undefined;
  assert.ok(mainCss, 'compiled main.min.*.css exists');
  assert.ok(
    statSync(path.join(scssDir, mainCss)).size > 100_000,
    'compiled CSS is non-trivial (> 100 KB)',
  );

  const fonts = path.join(pub, 'webfonts');
  assert.ok(
    existsSync(fonts) && readdirSync(fonts).length > 0,
    'Font Awesome webfonts emitted',
  );
}

before(() => {
  const v = hugo(['version']);
  assert.match(
    v.stdout ?? '',
    /extended/,
    'extended Hugo not found — run `npm run install:all` first',
  );
});

// --- make-site.sh modes (mirror the CI smoke matrix) -----------------------
for (const src of ['NPM', 'HUGO_MODULE']) {
  test(`make-site.sh -s ${src}`, () => {
    const name = `smoke-${src.toLowerCase()}`;
    const r = run(
      'bash',
      [MAKE_SITE, '-s', src, '-r', REPO, '-v', REF, '-f', '-n', name],
      { cwd: TMP },
    );
    assert.equal(r.status, 0, `${src} site build exited 0`);
    assertBuilt(name);
  });
}

// --- non-module clone into themes/docsy/ (no CI smoke coverage otherwise) ---
test('non-module clone into themes/docsy', () => {
  const name = 'smoke-clone';
  const site = path.join(TMP, name);
  rmSync(site, { recursive: true, force: true });

  // New site, then clone the whole Docsy repo under themes/docsy.
  assert.equal(
    hugo(['new', 'site', '--format', 'yaml', '--quiet', site], { cwd: TMP })
      .status,
    0,
    'hugo new site',
  );
  const themesDocsy = path.join(site, 'themes', 'docsy');
  assert.equal(
    run('git', [
      'clone',
      '-b',
      REF,
      '--depth',
      '1',
      `https://github.com/${REPO}`,
      themesDocsy,
    ]).status,
    0,
    'git clone theme into themes/docsy',
  );

  // Theme runtime deps must live at the theme-dir-relative node_modules, i.e.
  // inside themes/docsy/theme/, for the `node_modules/bootstrap` mount.
  assert.equal(
    run('npm', ['install', '--no-audit', '--no-fund'], {
      cwd: path.join(themesDocsy, 'theme'),
    }).status,
    0,
    'install theme deps in themes/docsy/theme',
  );

  // theme/package.json has no postinstall (script-less private mirror), so the
  // empty Hugo-module placeholder dirs must be generated explicitly, under
  // themesDir (themes/). Use the cloned repo's own script + go.mod.
  assert.equal(
    run('node', [path.join('scripts', 'mkdirp-hugo-mod.js'), '..'], {
      cwd: themesDocsy,
    }).status,
    0,
    'create empty Hugo-module dirs under themes/',
  );

  // PostCSS at the site root (unchanged prerequisite for non-module installs).
  assert.equal(run('npm', ['init', '-y'], { cwd: site }).status, 0, 'npm init');
  assert.equal(
    run(
      'npm',
      [
        'install',
        '--save-dev',
        '--no-audit',
        '--no-fund',
        'autoprefixer',
        'postcss-cli',
      ],
      { cwd: site },
    ).status,
    0,
    'install postcss at site root',
  );

  // The single consumer config edit, then build.
  appendFileSync(path.join(site, 'hugo.yaml'), '\ntheme: docsy/theme\n');
  assert.equal(hugo([], { cwd: site }).status, 0, 'hugo build');
  assertBuilt(name);
});
