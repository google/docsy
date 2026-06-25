// Full-site chrome equivalence spike.
//
// Compares a full (non-shared) build against a shared-mode build that has been
// "inlined" by running the real shipped client (assets/js/chrome-nav.js) over each
// page in jsdom — fetching the donor, injecting/re-rooting/hydrating the nav,
// exactly as a browser would. Both sides are then re-serialized through the
// same jsdom serializer so the diff is semantic, not serializer noise.
//
// Usage (run from the worktree root; scratch output lands under ./tmp so it's
// easy to inspect afterwards). The shared build sets td.chrome directly rather
// than via the `ccr` npm decorator, since that decorator swallows the `--` that
// forwards `-d`:
//   ( cd docsy.dev && npm run build -- -d "$PWD/../tmp/equiv-full" )
//   ( cd docsy.dev && HUGO_PARAMS_TD_CHROME=shared \
//       npm run build -- -d "$PWD/../tmp/equiv-shared" )
//   node tests/site-equivalence/inline-and-diff.mjs \
//     --full tmp/equiv-full --shared tmp/equiv-shared --pages docs/a,docs/b
//
// For each page it writes <out>/<page>.{full,shared}.html (normalized) plus
// .nav / .nav.canon variants, and prints `git diff --no-index` for (a) the whole
// page and (b) the left-nav region (#td-sidebar-menu), raw and canonicalized.
// <out> defaults to ./tmp/equiv-out.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { inlineChrome, normalize, navRegion } from './lib/equivalence.mjs';

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    args[argv[i].replace(/^--/, '')] = argv[i + 1];
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const fullDir = args.full;
const sharedDir = args.shared;
const base = (args.base || 'http://localhost').replace(/\/$/, '');
const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
const outDir = args.out || join(repoRoot, 'tmp/equiv-out');
const pages = (args.pages || '').split(',').filter(Boolean);

if (!fullDir || !sharedDir || pages.length === 0) {
  console.error(
    'Usage: --full <dir> --shared <dir> --pages a,b [--base url] [--out dir]',
  );
  process.exit(2);
}

const NAV_REGION = 'td-sidebar-menu';

// A page path like "docs/content/navigation" maps to "<dir>/<path>/index.html"
// and is served at "<base>/<path>/".
const fileFor = (dir, p) => join(dir, p, 'index.html');
const urlFor = (p) => `${base}/${p}/`;

// Resolve a donor fetch (e.g. /docs/) to its built file under the shared build dir.
const resolveDonor = (pathname) => {
  const file = join(sharedDir, pathname, 'index.html');
  return existsSync(file) ? readFileSync(file, 'utf8') : null;
};

function gitDiff(aPath, bPath) {
  const res = spawnSync(
    'git',
    ['--no-pager', 'diff', '--no-index', '--stat', '--', aPath, bPath],
    { encoding: 'utf8' },
  );
  return res.stdout || '';
}

function gitDiffFull(aPath, bPath) {
  const res = spawnSync(
    'git',
    ['--no-pager', 'diff', '--no-index', '--', aPath, bPath],
    { encoding: 'utf8' },
  );
  return res.stdout || '';
}

mkdirSync(outDir, { recursive: true });

for (const p of pages) {
  console.log(`\n========== ${p} ==========`);
  const fullHtml = readFileSync(fileFor(fullDir, p), 'utf8');
  const sharedHtml = readFileSync(fileFor(sharedDir, p), 'utf8');

  const normFull = normalize(fullHtml);
  const normShared = normalize(
    await inlineChrome(sharedHtml, { url: urlFor(p), resolveDonor }),
  );

  const safe = p.replace(/\//g, '__');
  const fFull = join(outDir, `${safe}.full.html`);
  const fShared = join(outDir, `${safe}.shared.html`);
  writeFileSync(fFull, normFull);
  writeFileSync(fShared, normShared);

  // (a) Whole-page diff stat.
  console.log('--- whole page (diffstat) ---');
  process.stdout.write(gitDiff(fFull, fShared) || '  (identical)\n');

  // (b) Nav-region diff: is the inlined left-nav exact?
  const navFull = join(outDir, `${safe}.full.nav.html`);
  const navShared = join(outDir, `${safe}.shared.nav.html`);
  writeFileSync(navFull, navRegion(normFull));
  writeFileSync(navShared, navRegion(normShared));
  const navDiff = gitDiffFull(navFull, navShared);
  console.log(`--- nav region (#${NAV_REGION}), raw ---`);
  if (!navDiff) {
    console.log('  ✓ EXACT MATCH');
  } else {
    const lines = navDiff.split('\n');
    console.log(`  ✗ differs (${lines.length} diff lines)`);
  }

  // (c) Nav-region diff modulo class-token order (the structural-equivalence
  // bar): after the client matches the server's reveal mechanism this is exact.
  const cNavFull = join(outDir, `${safe}.full.nav.canon.html`);
  const cNavShared = join(outDir, `${safe}.shared.nav.canon.html`);
  writeFileSync(cNavFull, navRegion(normFull, { canonical: true }));
  writeFileSync(cNavShared, navRegion(normShared, { canonical: true }));
  const cNavDiff = gitDiffFull(cNavFull, cNavShared);
  console.log(`--- nav region (#${NAV_REGION}), modulo class-token order ---`);
  if (!cNavDiff) {
    console.log('  ✓ EXACT MATCH');
  } else {
    const lines = cNavDiff.split('\n');
    console.log(`  ✗ still differs (${lines.length} diff lines); first 40:`);
    console.log(lines.slice(0, 40).join('\n'));
  }
}
