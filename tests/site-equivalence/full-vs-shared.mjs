// Whole-site chrome equivalence scoreboard.
//
// Builds a single git tree from a full (non-lean) build, commits it as the
// baseline, then overlays the same pages from a shared mode (lean) build *after running
// the real shipped client* (assets/js/chrome-nav.js) over each one in jsdom —
// fetching the donor, injecting/re-rooting/hydrating the nav and restoring the
// navbar/footer exactly as a browser would. Both sides pass through the same
// jsdom serializer, so `git diff` shows only semantic differences. An empty diff
// means the shared build is equivalent to the full build; a non-empty diff is the
// scoreboard of what's left (e.g. navbar cover/theme, scoped-sidebar structure).
//
// Usage (run from the worktree root; scratch lands under ./tmp for inspection).
// The shared build sets the td.chrome param directly rather than via the `chrome`
// npm decorator, since that decorator swallows the `--` that forwards `-d`:
//   ( cd docsy.dev && npm run build -- -d "$PWD/../tmp/equiv-full" )
//   ( cd docsy.dev && HUGO_PARAMS_TD_CHROME=shared \
//       npm run build -- -d "$PWD/../tmp/equiv-shared" )
//   node tests/site-equivalence/full-vs-shared.mjs \
//     --full tmp/equiv-full --shared tmp/equiv-shared [--out tmp/equiv-tree] \
//     [--base http://localhost] [--pages docs/a,docs/b] [--canonical]
//
// Leaves the committed/overlaid tree at <out> (default ./tmp/equiv-tree) and the
// full unified diff at <out>.diff. Prints a concise summary; read the .diff file
// for detail (keeps terminal output small).

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  rmSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import {
  inlineChrome,
  normalize,
  sortClassTokens,
  neutralizeSelectorMenus,
  neutralizeBuildTimestamps,
} from './lib/equivalence.mjs';
import { JSDOM } from 'jsdom';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.replace(/^--/, '');
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      args[key] = true; // boolean flag
    } else {
      args[key] = next;
      i++;
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const fullDir = args.full;
const sharedDir = args.shared;
const base = (args.base || 'http://localhost').replace(/\/$/, '');
const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
const outDir = args.out
  ? join(repoRoot, args.out)
  : join(repoRoot, 'tmp/equiv-tree');
const canonical = !!args.canonical;

if (!fullDir || !sharedDir) {
  console.error(
    'Usage: --full <dir> --shared <dir> [--out dir] [--base url] [--pages a,b] [--canonical]',
  );
  process.exit(2);
}

const fullAbs = join(repoRoot, fullDir);
const sharedAbs = join(repoRoot, sharedDir);

// A page is a directory holding an index.html, keyed by its posix-relative path
// ('' for the site root). Served at <base>/<page>/ and stored at <dir>/<page>/index.html.
function listPages(root) {
  const pages = [];
  const walk = (dir, rel) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === '.git') continue;
      const abs = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(abs, rel ? `${rel}/${entry.name}` : entry.name);
      } else if (entry.name === 'index.html') {
        pages.push(rel);
      }
    }
  };
  walk(root, '');
  return pages.sort();
}

const pages = args.pages
  ? String(args.pages).split(',').filter(Boolean)
  : listPages(sharedAbs);

const fileFor = (dir, p) => join(dir, p, 'index.html');
const urlFor = (p) => `${base}/${p ? p + '/' : ''}`;
const resolveDonor = (pathname) => {
  const file = join(sharedAbs, pathname, 'index.html');
  return existsSync(file) ? readFileSync(file, 'utf8') : null;
};

// Does this shared-mode page have any client-side restore work to do? If not, the lean
// build kept the chrome as-is, so it equals the full build and we skip jsdom.
function hasSharedWork(html) {
  return (
    html.includes('td-chrome-placeholder') ||
    html.includes('td-sidebar-chrome-placeholder') ||
    html.includes('td-sidebar-menu')
  );
}

// Optional canonicalization: sort class tokens, neutralize the per-page
// language selector (its prefix-swap restore is best-effort) and the build-time
// timestamp (non-deterministic between builds), matching the structural-
// equivalence bar the fixture tests use.
function canonicalize(html) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  neutralizeBuildTimestamps(document.body);
  neutralizeSelectorMenus(document.body);
  sortClassTokens(document.body);
  return dom.serialize();
}

function writePage(p, html) {
  const dest = fileFor(outDir, p);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
}

function git(cwd, ...argv) {
  const res = spawnSync('git', ['--no-pager', ...argv], {
    cwd,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  return res.stdout || '';
}

// Fresh tree.
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

// Phase 1 — full baseline.
let missingFull = 0;
for (const p of pages) {
  const f = fileFor(fullAbs, p);
  if (!existsSync(f)) {
    missingFull++;
    continue;
  }
  let html = normalize(readFileSync(f, 'utf8'));
  if (canonical) html = canonicalize(html);
  writePage(p, html);
}

git(outDir, 'init', '-b', 'main');
git(outDir, 'add', '-A');
git(
  outDir,
  '-c',
  'user.email=chrome@example.com',
  '-c',
  'user.name=chrome equivalence',
  'commit',
  '-q',
  '-m',
  'full build baseline',
);

// Phase 2 — overlay the shared build, inlined as a browser would render it.
let inlined = 0;
let skipped = 0;
let missingShared = 0;
for (const p of pages) {
  const f = fileFor(sharedAbs, p);
  if (!existsSync(f)) {
    missingShared++;
    continue;
  }
  const sharedHtml = readFileSync(f, 'utf8');
  let out;
  if (hasSharedWork(sharedHtml)) {
    out = await inlineChrome(sharedHtml, { url: urlFor(p), resolveDonor });
    inlined++;
  } else {
    out = sharedHtml;
    skipped++;
  }
  let html = normalize(out);
  if (canonical) html = canonicalize(html);
  writePage(p, html);
}

// Scoreboard.
const stat = git(outDir, 'diff', '--stat');
const names = git(outDir, 'diff', '--name-only').split('\n').filter(Boolean);
const fullDiff = git(outDir, 'diff');
const diffPath = `${outDir}.diff`;
writeFileSync(diffPath, fullDiff);

console.log(`pages:        ${pages.length}`);
console.log(`  inlined:    ${inlined}`);
console.log(`  unchanged:  ${skipped} (no chrome markers; kept as-is)`);
if (missingFull) console.log(`  full-only missing: ${missingFull}`);
if (missingShared) console.log(`  shared-only missing:  ${missingShared}`);
console.log(`canonical:    ${canonical}`);
console.log(`differing pages: ${names.length}`);
console.log(`tree:  ${outDir}`);
console.log(`diff:  ${diffPath}`);
if (names.length) {
  console.log('\n--- differing pages ---');
  for (const n of names) console.log('  ' + n.replace(/\/index\.html$/, '/'));
  console.log('\n--- diffstat (tail) ---');
  console.log(stat.split('\n').slice(-1)[0]);
} else {
  console.log('\n✓ EQUIVALENT — no differences.');
}
