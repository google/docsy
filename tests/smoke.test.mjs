// Smoke tests: builds a Docsy-based site three ways and asserts each produces a
// real, fully-styled site (not merely a zero exit code).
//
// Uses Node's built-in test runner (node:test) — no extra test deps.
//
//   Run:      npm run test:smoke
//   Prereqs:  npm run install:all   (provides hugo-extended for run-hugo.mjs)
//   Target:   defaults to repo "google/docsy", branch "main"; override with
//             flags, e.g. npm run test:smoke -- --repo myfork/docsy --branch wip
//
// NOTE: slow and network-bound (npm + Hugo fetch from GitHub). Deliberately
// kept OUT of `test:tooling` / CI `ci:post`, which must stay fast and offline.

import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  appendFileSync,
  existsSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeSync,
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

// Read a `--name value` or `--name=value` CLI flag (after the `--` that npm
// forwards), falling back to a default. Last occurrence wins, so a flag passed
// on the command line overrides one baked into the `test:smoke` npm script.
function arg(name, fallback) {
  let value = fallback;
  for (let i = 2; i < process.argv.length; i++) {
    const a = process.argv[i];
    if (a === `--${name}`) value = process.argv[i + 1] ?? value;
    else if (a.startsWith(`--${name}=`)) value = a.slice(name.length + 3);
  }
  return value;
}

// Target the smoke test installs Docsy from: a repo and a branch/ref. Defaults
// to repo "google/docsy", branch "main"; override with `--repo` / `--branch`.
// NOTE: during the TOF rollout the `test:smoke` npm script passes
// `--branch task/repo-reorg-2026-05`; drop that flag once the move merges to main.
const REPO = arg('repo', 'google/docsy');
const BRANCH = arg('branch', 'main');
const TARGET = `repo "${REPO}", branch "${BRANCH}"`;

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

// Live progress line. Write straight to fd 2 so it streams immediately —
// `node --test` captures a test's console output and only emits it once the
// test finishes, which would hide progress during the (multi-second) builds.
function progress(msg) {
  writeSync(2, `[smoke] ${msg}\n`);
}

// A real, fully-styled build has: a non-trivial compiled stylesheet (Bootstrap +
// Docsy SCSS), a rendered home page that actually links that stylesheet, and a
// generated sitemap. The CSS size plus the HTML->CSS link guard against "Hugo
// succeeded but styling silently broke".
function assertBuilt(name) {
  const pub = path.join(TMP, name, 'public');

  // Compiled stylesheet: present and non-trivial.
  const scssDir = path.join(pub, 'scss');
  const mainCss = existsSync(scssDir)
    ? readdirSync(scssDir).find((f) => /^main\.min.*\.css$/.test(f))
    : undefined;
  assert.ok(mainCss, 'compiled main.min.*.css exists');
  assert.ok(
    statSync(path.join(scssDir, mainCss)).size > 100_000,
    'compiled CSS is non-trivial (> 100 KB)',
  );

  // Home page: rendered (has a <title>) and wired to the compiled stylesheet
  // (references the exact fingerprinted CSS filename).
  const indexHtml = readFileSync(path.join(pub, 'index.html'), 'utf8');
  assert.match(
    indexHtml,
    /<title>[^<]+<\/title>/,
    'index.html has a rendered <title>',
  );
  assert.ok(
    indexHtml.includes(mainCss),
    'index.html links the compiled stylesheet',
  );

  // Sitemap: generated with at least one page URL.
  const sitemap = readFileSync(path.join(pub, 'sitemap.xml'), 'utf8');
  assert.match(sitemap, /<urlset/, 'sitemap.xml is a <urlset>');
  assert.match(
    sitemap,
    /<loc>https?:\/\/[^<]+<\/loc>/,
    'sitemap.xml lists a page URL',
  );
}

before(() => {
  progress(`Target — ${TARGET}  (override with --repo / --branch)`);
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
    progress(`${src}: make-site (npm/Hugo fetch + build) — ${TARGET}…`);
    const r = run(
      'bash',
      [MAKE_SITE, '-s', src, '-r', REPO, '-v', BRANCH, '-f', '-n', name],
      { cwd: TMP },
    );
    assert.equal(r.status, 0, `${src} site build exited 0`);
    assertBuilt(name);
    progress(`${src}: ok`);
  });
}

// --- non-module clone into themes/docsy/ (no CI smoke coverage otherwise) ---
test('non-module clone into themes/docsy', () => {
  const name = 'smoke-clone';
  const site = path.join(TMP, name);
  rmSync(site, { recursive: true, force: true });

  // New site, then clone the whole Docsy repo under themes/docsy.
  progress('clone: hugo new site…');
  assert.equal(
    hugo(['new', 'site', '--format', 'yaml', '--quiet', site], { cwd: TMP })
      .status,
    0,
    'hugo new site',
  );
  const themesDocsy = path.join(site, 'themes', 'docsy');
  progress(`clone: git clone ${TARGET} into themes/docsy…`);
  assert.equal(
    run('git', [
      'clone',
      '-b',
      BRANCH,
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
  progress('clone: npm install theme deps (themes/docsy/theme)…');
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
  progress('clone: generate empty Hugo-module placeholder dirs…');
  assert.equal(
    run('node', [path.join('scripts', 'mkdirp-hugo-mod.js'), '..'], {
      cwd: themesDocsy,
    }).status,
    0,
    'create empty Hugo-module dirs under themes/',
  );

  // PostCSS at the site root (unchanged prerequisite for non-module installs).
  progress('clone: npm install postcss at site root…');
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
  progress('clone: hugo build…');
  assert.equal(hugo([], { cwd: site }).status, 0, 'hugo build');
  assertBuilt(name);
  progress('clone: ok');
});
