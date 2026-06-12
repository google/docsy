// Smoke tests: builds a Docsy-based site three ways and asserts each produces a
// real, fully-styled site (not merely a zero exit code).
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
  writeFileSync,
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
  return run('npx', ['hugo', ...args], opts);
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

// Seed a docs page with a `&`-bearing Markdown link URL; assertAmpEscaping
// then checks it renders escaped exactly once. Guards the regression class of
// gohugoio/hugo#14715 (0.159.2 double-escaped to &amp;amp;, fixed in 0.160.0):
// smoke sites are monolingual with no link render hooks, i.e. goldmark's
// plain link rendering — the only path that was affected. (The docsy.dev
// site can't cover this: multilingual single-host sites silently use the
// embedded link render hook and are immune.)
const AMP_PAGE = 'amp-escaping-check';
function seedAmpPage(site) {
  const dir = path.join(site, 'content', 'docs', AMP_PAGE);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    path.join(dir, '_index.md'),
    '---\ntitle: Amp escaping check\n---\n\n' +
      '[amp link](https://example.com/?a=1&b=2)\n',
  );
}
function assertAmpEscaping(name) {
  const html = readFileSync(
    path.join(TMP, name, 'public', 'docs', AMP_PAGE, 'index.html'),
    'utf8',
  );
  assert.match(
    html,
    /href="https:\/\/example\.com\/\?a=1&amp;b=2"/,
    '& in Markdown link URL is escaped exactly once in rendered HTML',
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

  // PostCSS at the site root: a non-module install prerequisite.
  progress('clone: npm install postcss at site root…');
  assert.equal(run('npm', ['init', '-y'], { cwd: site }).status, 0, 'npm init');
  const flags = '--save-dev --no-audit --no-fund';
  assert.equal(
    run('npm', `install ${flags} autoprefixer postcss-cli`.split(' '), {
      cwd: site,
    }).status,
    0,
    'install postcss at site root',
  );

  // The one-line consumer config change.
  appendFileSync(path.join(site, 'hugo.yaml'), '\ntheme: docsy/theme\n');
  seedAmpPage(site);
  progress('clone: hugo build…');
  assert.equal(hugo([], { cwd: site }).status, 0, 'hugo build');
  assertBuilt(name);
  assertAmpEscaping(name);
  progress('clone: ok');
});
