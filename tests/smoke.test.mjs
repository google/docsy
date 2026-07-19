// Smoke tests: builds a Docsy-based site several ways and asserts each produces
// a real, fully-styled site (not merely a zero exit code).
//
// Uses Node's built-in test runner (node:test) — no extra test deps.
//
//   Usage: npm run test:smoke -- [options]
//   Options:
//     --repo <repo>    GitHub org+repo to fetch Docsy from.
//                      Format: GITHUB_USER/DOCSY_REPO. Fallback: google/docsy
//     --branch <branch>
//                      Docsy branch to fetch. Fallback: main
//
// When no flags are given and the current branch has a GitHub upstream other
// than main, that upstream (repo and branch) is used as the default target —
// the common case when smoke-testing a PR branch pushed to a fork.
//
// NOTE: slow and network-bound (npm + Hugo fetch from GitHub). Deliberately
// kept OUT of `test:tooling` / CI `ci:post`, which must stay fast and offline.

import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeSync,
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const TMP = path.join(os.tmpdir(), 'docsy-smoke');
const MAKE_SITE = path.join(repoRoot, 'scripts', 'make-site.sh');
// Smoke sites build under the OS temp dir, outside the repo, so Node can't
// resolve the repo's own node_modules and mask a packaging gap. Only Hugo (the
// build tool, not a dependency under test) is borrowed from the repo install.
const HUGO_BIN = path.join(repoRoot, 'node_modules', '.bin', 'hugo');

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

// Default target: the GitHub upstream of the current branch, when it exists
// and isn't main; otherwise google/docsy main.
function gitUpstreamTarget() {
  const opts = { cwd: repoRoot, encoding: 'utf8' };
  const upstream = spawnSync(
    'git',
    ['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}'],
    opts,
  );
  if (upstream.status !== 0) return undefined;
  const [remote, ...rest] = upstream.stdout.trim().split('/');
  const branch = rest.join('/');
  if (!branch || branch === 'main') return undefined;
  const url = spawnSync('git', ['remote', 'get-url', remote], opts);
  const m = (url.stdout ?? '')
    .trim()
    .match(/github\.com[:/]([^/]+\/[^/]+?)(?:\.git)?$/);
  if (url.status !== 0 || !m) return undefined;
  return { repo: m[1], branch };
}

const upstream = gitUpstreamTarget();
const REPO = arg('repo', upstream?.repo ?? 'google/docsy');
const BRANCH = arg('branch', upstream?.branch ?? 'main');
const TARGET = `repo "${REPO}", branch "${BRANCH}"`;

// Run a command; surface its output only on failure.
function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', ...opts });
  if (r.status !== 0) {
    process.stderr.write(
      `\n$ ${cmd} ${args.join(' ')}\n${r.stdout ?? ''}${r.stderr ?? ''}\n`,
    );
  }
  return r;
}

function hugo(args, opts = {}) {
  return run(HUGO_BIN, args, opts);
}

// Stream a progress line via fd 2 directly: node:test buffers a test's console
// output until the test finishes, which would otherwise hide progress mid-build.
function progress(msg) {
  writeSync(2, `[smoke] ${msg}\n`);
}

// Assert a real, fully-styled build (not just a zero exit): a non-trivial
// compiled stylesheet that the home page actually links, plus a sitemap.
function assertBuilt(name) {
  const pub = path.join(TMP, name, 'public');

  const scssDir = path.join(pub, 'scss');
  const mainCss = existsSync(scssDir)
    ? readdirSync(scssDir).find((f) => /^main\.min.*\.css$/.test(f))
    : undefined;
  assert.ok(mainCss, 'compiled main.min.*.css exists');
  assert.ok(
    statSync(path.join(scssDir, mainCss)).size > 100_000,
    'compiled CSS is non-trivial (> 100 KB)',
  );

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

  const sitemap = readFileSync(path.join(pub, 'sitemap.xml'), 'utf8');
  assert.match(sitemap, /<urlset/, 'sitemap.xml is a <urlset>');
  assert.match(
    sitemap,
    /<loc>https?:\/\/[^<]+<\/loc>/,
    'sitemap.xml lists a page URL',
  );
}

before(() => {
  if (!existsSync(TMP)) mkdirSync(TMP);
  progress(`Target — ${TARGET}  (override with --repo / --branch)`);
  const v = hugo(['version']);
  assert.match(
    v.stdout ?? '',
    /extended/,
    'extended Hugo not found — run `npm install` at the repo root first',
  );
});

// An npm install of @docsy/theme wires the package bins into
// node_modules/.bin; assert the shim exists, then run it with
// `npx --no-install`: when the shim is missing, a bare `npx NAME` offers to
// fetch a same-named package from the public registry instead (an unrelated
// `gen-favicons` package exists there).
function assertGenFaviconsBin(site) {
  assert.ok(
    existsSync(path.join(site, 'node_modules', '.bin', 'gen-favicons')),
    'gen-favicons bin shim is wired into node_modules/.bin',
  );
  progress('npx --no-install gen-favicons --help…');
  const help = run('npx', ['--no-install', 'gen-favicons', '--help'], {
    cwd: site,
  });
  assert.equal(help.status, 0, 'npx gen-favicons --help exits 0');
  assert.match(
    help.stdout ?? '',
    /Usage: gen-favicons/,
    'npx gen-favicons --help prints usage',
  );
}

// --- make-site.sh modes (mirror the CI smoke matrix) -----------------------
for (const src of ['NPM', 'HUGO_MODULE']) {
  test(`make-site.sh -s ${src}`, () => {
    const name = `smoke-${src.toLowerCase()}`;
    progress(`${src}: make-site (npm/Hugo fetch + build) — ${TARGET}…`);
    const r = run(
      'bash',
      [MAKE_SITE, '-s', src, '-r', REPO, '-v', BRANCH, '-f', '-n', name],
      { cwd: TMP, env: { ...process.env, HUGO: HUGO_BIN } },
    );
    assert.equal(r.status, 0, `${src} site build exited 0`);
    assertBuilt(name);
    if (src === 'NPM') assertGenFaviconsBin(path.join(TMP, name));
    progress(`${src}: ok`);
  });
}

// --- consumer installs of @docsy/theme --------------------------------------
// Install the theme-only package into a scratch site outside the repo and
// exercise the consumer contract: a styled build plus the wired gen-favicons
// bin. The tarball test packs theme/ from this checkout — the pre-publish
// check that covers the code under review. The registry test installs a
// published spec — the post-publish check.

function buildThemeConsumerSite(name, pkgSpec) {
  const site = path.join(TMP, name);
  rmSync(site, { recursive: true, force: true });

  progress(`${name}: hugo new site…`);
  assert.equal(
    hugo(['new', 'site', '--format', 'yaml', '--quiet', site], { cwd: TMP })
      .status,
    0,
    'hugo new site',
  );

  progress(`${name}: npm install ${pkgSpec}…`);
  // npm is npm.cmd on Windows, and .cmd files require a shell.
  const npmOpts = { cwd: site, shell: process.platform === 'win32' };
  assert.equal(run('npm', ['init', '-y'], npmOpts).status, 0, 'npm init');
  assert.equal(
    run('npm', ['install', '--no-audit', '--no-fund', pkgSpec], npmOpts).status,
    0,
    `${pkgSpec} installs`,
  );

  // The one-line consumer config change (@ must be quoted in YAML).
  appendFileSync(
    path.join(site, 'hugo.yaml'),
    "\ntheme: '@docsy/theme'\nthemesDir: node_modules\n",
  );
  progress(`${name}: hugo build…`);
  assert.equal(hugo([], { cwd: site }).status, 0, 'hugo build');
  assertBuilt(name);
  assertGenFaviconsBin(site);
  progress(`${name}: ok`);
}

test('tarball install of @docsy/theme packed from this checkout', () => {
  const packDest = path.join(TMP, 'theme-pack');
  rmSync(packDest, { recursive: true, force: true });
  mkdirSync(packDest, { recursive: true });
  progress('tarball: npm pack theme/…');
  const pack = run(
    'npm',
    ['pack', '--pack-destination', packDest, '--silent'],
    {
      cwd: path.join(repoRoot, 'theme'),
      shell: process.platform === 'win32',
    },
  );
  assert.equal(pack.status, 0, 'npm pack exits 0');
  const tgz = readdirSync(packDest).find((f) => f.endsWith('.tgz'));
  assert.ok(tgz, 'npm pack produced a tarball');
  buildThemeConsumerSite('smoke-tarball', path.join(packDest, tgz));
});

// DOCSY_THEME_PKG selects the registry spec — e.g. @docsy/theme@next to vet
// an RC, or @docsy/theme@0.16.0. Without it the test targets the bare name,
// which resolves to the `latest` dist-tag; it stays skipped until a stable
// version is live there.
const REGISTRY_PKG = process.env.DOCSY_THEME_PKG;
test(
  'registry install of @docsy/theme',
  {
    skip: REGISTRY_PKG
      ? false
      : '@docsy/theme has no version under `latest` yet; ' +
        'set DOCSY_THEME_PKG (e.g. @docsy/theme@next) to target another spec',
  },
  () => {
    buildThemeConsumerSite('smoke-registry', REGISTRY_PKG ?? '@docsy/theme');
  },
);

// --- declared minimum Hugo version actually builds --------------------------
// Pins Hugo to the theme's declared minimum (theme.toml min_version) and
// builds the Hugo-module-mode site — the most version-sensitive path: on
// sub-minimum Hugos, `hugo mod npm pack` emits empty deps and the build
// breaks, historically even silently (exit 0, unstyled site) — the failure
// class that assertBuilt() exists to catch.
test('minimum Hugo version builds the HUGO_MODULE site', () => {
  const min = readFileSync(
    path.join(repoRoot, 'theme', 'theme.toml'),
    'utf8',
  ).match(/^min_version\s*=\s*"([^"]+)"/m)?.[1];
  assert.ok(min, 'theme.toml declares min_version');

  // Scratch-install hugo-extended@min under TMP (cached across runs).
  const minHugo = path.join(TMP, `hugo-${min}`, 'node_modules', '.bin', 'hugo');
  if (!existsSync(minHugo)) {
    progress(`min-hugo: npm install hugo-extended@${min}…`);
    const dir = path.join(TMP, `hugo-${min}`);
    mkdirSync(dir, { recursive: true });
    const install = run(
      'npm',
      ['install', '--no-audit', '--no-fund', `hugo-extended@${min}`],
      { cwd: dir },
    );
    assert.equal(install.status, 0, `hugo-extended@${min} installs`);
  }
  assert.match(
    run(minHugo, ['version']).stdout ?? '',
    new RegExp(`v${min.replaceAll('.', '\\.')}(?!\\d).*extended`),
    `scratch Hugo is extended v${min}`,
  );

  const name = 'smoke-min-hugo';
  progress(`min-hugo: make-site -s HUGO_MODULE with Hugo v${min} — ${TARGET}…`);
  const r = run(
    'bash',
    [
      MAKE_SITE,
      '-s',
      'HUGO_MODULE',
      '-r',
      REPO,
      '-v',
      BRANCH,
      '-f',
      '-n',
      name,
    ],
    { cwd: TMP, env: { ...process.env, HUGO: minHugo } },
  );
  assert.equal(r.status, 0, `min-Hugo site build exited 0`);
  assertBuilt(name);
  progress('min-hugo: ok');
});

// --- non-module clone into themes/docsy/ (no CI smoke coverage otherwise) ---
test('non-module clone into themes/docsy', () => {
  const name = 'smoke-clone';
  const site = path.join(TMP, name);
  rmSync(site, { recursive: true, force: true });

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

  progress('clone: npm run theme postinstall for theme deps etc…');
  assert.equal(
    run('npm', ['run', '--prefix', themesDocsy, 'postinstall'], {}).status,
    0,
    'install theme deps etc',
  );

  // The one-line consumer config change.
  appendFileSync(path.join(site, 'hugo.yaml'), '\ntheme: docsy/theme\n');
  progress('clone: hugo build…');
  assert.equal(hugo([], { cwd: site }).status, 0, 'hugo build');
  assertBuilt(name);
  progress('clone: ok');
});
