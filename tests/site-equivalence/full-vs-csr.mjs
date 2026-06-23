// Whole-site CSR equivalence scoreboard.
//
// Builds a single git tree from a full (non-lean) build, commits it as the
// baseline, then overlays the same pages from a CSR (lean) build *after running
// the real shipped client* (assets/js/csr-nav.js) over each one in jsdom —
// fetching the donor, injecting/re-rooting/hydrating the nav and restoring the
// navbar/footer exactly as a browser would. Both sides pass through the same
// jsdom serializer, so `git diff` shows only semantic differences. An empty diff
// means the CSR build is equivalent to the full build; a non-empty diff is the
// scoreboard of what's left (e.g. navbar cover/theme, scoped-sidebar structure).
//
// Usage (run from the worktree root; scratch lands under ./tmp for inspection).
// The CSR build sets the csr_enable param directly rather than via the `csr`
// npm decorator, since that decorator swallows the `--` that forwards `-d`:
//   ( cd docsy.dev && npm run build -- -d "$PWD/../tmp/equiv-full" )
//   ( cd docsy.dev && HUGOxPARAMSxTDxCSR_ENABLE=true \
//       npm run build -- -d "$PWD/../tmp/equiv-csr" )
//   node tests/site-equivalence/full-vs-csr.mjs \
//     --full tmp/equiv-full --csr tmp/equiv-csr [--out tmp/equiv-tree] \
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
  inlineCsr,
  normalize,
  sortClassTokens,
  neutralizeSelectorMenus,
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
const csrDir = args.csr;
const base = (args.base || 'http://localhost').replace(/\/$/, '');
const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
const outDir = args.out
  ? join(repoRoot, args.out)
  : join(repoRoot, 'tmp/equiv-tree');
const canonical = !!args.canonical;

if (!fullDir || !csrDir) {
  console.error(
    'Usage: --full <dir> --csr <dir> [--out dir] [--base url] [--pages a,b] [--canonical]',
  );
  process.exit(2);
}

const fullAbs = join(repoRoot, fullDir);
const csrAbs = join(repoRoot, csrDir);

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
  : listPages(csrAbs);

const fileFor = (dir, p) => join(dir, p, 'index.html');
const urlFor = (p) => `${base}/${p ? p + '/' : ''}`;
const resolveDonor = (pathname) => {
  const file = join(csrAbs, pathname, 'index.html');
  return existsSync(file) ? readFileSync(file, 'utf8') : null;
};

// Does this CSR page have any client-side restore work to do? If not, the lean
// build kept the chrome as-is, so it equals the full build and we skip jsdom.
function hasCsrWork(html) {
  return (
    html.includes('td-csr-chrome-placeholder') ||
    html.includes('td-sidebar-csr-placeholder') ||
    html.includes('td-sidebar-menu')
  );
}

// Optional canonicalization: sort class tokens and neutralize the per-page
// language selector (its prefix-swap restore is best-effort), matching the
// structural-equivalence bar the fixture tests use.
function canonicalize(html) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
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
  'user.email=csr@example.com',
  '-c',
  'user.name=CSR Equivalence',
  'commit',
  '-q',
  '-m',
  'full build baseline',
);

// Phase 2 — overlay the CSR build, inlined as a browser would render it.
let inlined = 0;
let skipped = 0;
let missingCsr = 0;
for (const p of pages) {
  const f = fileFor(csrAbs, p);
  if (!existsSync(f)) {
    missingCsr++;
    continue;
  }
  const csrHtml = readFileSync(f, 'utf8');
  let out;
  if (hasCsrWork(csrHtml)) {
    out = await inlineCsr(csrHtml, { url: urlFor(p), resolveDonor });
    inlined++;
  } else {
    out = csrHtml;
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
console.log(`  unchanged:  ${skipped} (no CSR markers; kept as-is)`);
if (missingFull) console.log(`  full-only missing: ${missingFull}`);
if (missingCsr) console.log(`  csr-only missing:  ${missingCsr}`);
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
