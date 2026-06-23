// Full-site CSR equivalence spike.
//
// Compares a full (non-lean) build against a CSR (lean) build that has been
// "inlined" by running the real shipped client (assets/js/csr-nav.js) over each
// page in jsdom — fetching the donor, injecting/re-rooting/hydrating the nav,
// exactly as a browser would. Both sides are then re-serialized through the
// same jsdom serializer so the diff is semantic, not serializer noise.
//
// Usage (run from the worktree root; scratch output lands under ./tmp so it's
// easy to inspect afterwards):
//   npm run -C docsy.dev build      -- -d "$PWD/tmp/equiv-full"
//   npm run -C docsy.dev csr build  -- -d "$PWD/tmp/equiv-csr"
//   node tests/site-equivalence/inline-and-diff.mjs \
//     --full tmp/equiv-full --csr tmp/equiv-csr --pages docs/a,docs/b
//
// For each page it writes <out>/<page>.{full,csr}.html (normalized) plus
// .nav / .nav.canon variants, and prints `git diff --no-index` for (a) the whole
// page and (b) the left-nav region (#td-sidebar-menu), raw and canonicalized.
// <out> defaults to ./tmp/equiv-out.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { JSDOM } from 'jsdom';

const csrNavSrc = readFileSync(
  new URL('../../theme/assets/js/csr-nav.js', import.meta.url),
  'utf8',
);

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    args[argv[i].replace(/^--/, '')] = argv[i + 1];
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const fullDir = args.full;
const csrDir = args.csr;
const base = (args.base || 'http://localhost').replace(/\/$/, '');
const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
const outDir = args.out || join(repoRoot, 'tmp/equiv-out');
const pages = (args.pages || '').split(',').filter(Boolean);

if (!fullDir || !csrDir || pages.length === 0) {
  console.error(
    'Usage: --full <dir> --csr <dir> --pages a,b [--base url] [--out dir]',
  );
  process.exit(2);
}

const NAV_REGION = 'td-sidebar-menu';

// A page path like "docs/content/navigation" maps to "<dir>/<path>/index.html"
// and is served at "<base>/<path>/".
const fileFor = (dir, p) => join(dir, p, 'index.html');
const urlFor = (p) => `${base}/${p}/`;

// Normalize HTML by parsing and re-serializing through jsdom: identical
// formatting on both sides, so only semantic differences remain.
const normalize = (html) => new JSDOM(html).serialize();

// Run the real shipped csr-nav.js over a CSR page in jsdom, with fetch resolving
// any donor request to the matching file under csrDir. Resolves once the nav has
// been revealed (or after a bounded wait if there is nothing to do).
async function inlineCsr(html, pageUrl) {
  const dom = new JSDOM(html, { url: pageUrl, runScripts: 'outside-only' });
  const { window } = dom;

  window.fetch = async (resource) => {
    const path = new URL(resource, pageUrl).pathname; // e.g. /docs/
    const file = join(csrDir, path, 'index.html');
    if (!existsSync(file)) return { ok: false, status: 404 };
    const body = readFileSync(file, 'utf8');
    return { ok: true, status: 200, text: async () => body };
  };

  window.eval(csrNavSrc);

  // Wait until the menu is present and revealed (d-none removed), or give up.
  for (let i = 0; i < 100; i++) {
    const menu = window.document.getElementById(NAV_REGION);
    if (menu && !menu.classList.contains('d-none')) break;
    await new Promise((r) => setTimeout(r, 5));
  }
  return dom.serialize();
}

function regionOf(html, id) {
  const el = new JSDOM(html).window.document.getElementById(id);
  return el ? el.outerHTML + '\n' : '';
}

// Canonicalize away differences that are equivalent-by-construction: class-token
// order, the transient expansion signals (server uses `checked`; the client uses
// a `show` class plus the checkbox .checked property, invisible to a static
// serializer), and the reveal toggle (`d-none`). What remains is structure,
// links, and the active/active-path state.
const TRANSIENT_CLASSES = new Set(['show', 'd-none']);
function canonicalRegion(html, id) {
  const { document } = new JSDOM(html).window;
  const root = document.getElementById(id);
  if (!root) return '';
  for (const el of root.querySelectorAll('*')) {
    if (el.hasAttribute('class')) {
      const toks = [...el.classList].filter((c) => !TRANSIENT_CLASSES.has(c));
      if (toks.length) el.setAttribute('class', toks.sort().join(' '));
      else el.removeAttribute('class');
    }
    if (el.tagName === 'INPUT' && el.getAttribute('type') === 'checkbox') {
      el.removeAttribute('checked');
    }
  }
  return root.outerHTML + '\n';
}

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
  const csrHtml = readFileSync(fileFor(csrDir, p), 'utf8');

  const normFull = normalize(fullHtml);
  const normCsr = normalize(await inlineCsr(csrHtml, urlFor(p)));

  const safe = p.replace(/\//g, '__');
  const fFull = join(outDir, `${safe}.full.html`);
  const fCsr = join(outDir, `${safe}.csr.html`);
  writeFileSync(fFull, normFull);
  writeFileSync(fCsr, normCsr);

  // (a) Whole-page diff stat.
  console.log('--- whole page (diffstat) ---');
  process.stdout.write(gitDiff(fFull, fCsr) || '  (identical)\n');

  // (b) Nav-region diff: is the inlined left-nav exact?
  const navFull = join(outDir, `${safe}.full.nav.html`);
  const navCsr = join(outDir, `${safe}.csr.nav.html`);
  writeFileSync(navFull, regionOf(normFull, NAV_REGION));
  writeFileSync(navCsr, regionOf(normCsr, NAV_REGION));
  const navDiff = gitDiffFull(navFull, navCsr);
  console.log(`--- nav region (#${NAV_REGION}), raw ---`);
  if (!navDiff) {
    console.log('  ✓ EXACT MATCH');
  } else {
    const lines = navDiff.split('\n');
    console.log(`  ✗ differs (${lines.length} diff lines)`);
  }

  // (c) Nav-region diff after canonicalizing equivalent-by-construction noise.
  const cNavFull = join(outDir, `${safe}.full.nav.canon.html`);
  const cNavCsr = join(outDir, `${safe}.csr.nav.canon.html`);
  writeFileSync(cNavFull, canonicalRegion(normFull, NAV_REGION));
  writeFileSync(cNavCsr, canonicalRegion(normCsr, NAV_REGION));
  const cNavDiff = gitDiffFull(cNavFull, cNavCsr);
  console.log(`--- nav region (#${NAV_REGION}), canonicalized ---`);
  if (!cNavDiff) {
    console.log('  ✓ EXACT MATCH');
  } else {
    const lines = cNavDiff.split('\n');
    console.log(`  ✗ still differs (${lines.length} diff lines); first 40:`);
    console.log(lines.slice(0, 40).join('\n'));
  }
}
