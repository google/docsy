// Cases: CSR-08 (cached inline nav hydration, non-CSR large-site path). See the CSR case registry in tasks/0.16/csr/.
// Regression guard for the cached-sidebar path on large sites with CSR *off*.
//
// On a site above ui.sidebar_cache_limit, Docsy renders one shared left-nav
// hidden (d-none) with no per-page active state baked in, then keys it per page
// in the browser. This branch routes that activation through the shared
// assets/js/csr-nav.js (hydrate() on d-none menus) instead of the per-page
// inline jQuery it used before — so even a CSR-off large site now relies on the
// script. This test pins that path: a cached inner page must hydrate to the same
// nav a full (non-cached) build bakes server-side.
//
// The cache is forced by lowering sidebar_cache_limit (not by enabling CSR), so
// this exercises the non-CSR regression path specifically.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { buildSite } from './lib/build-site.mjs';

const csrNavSrc = readFileSync(
  fileURLToPath(new URL('../../theme/assets/js/csr-nav.js', import.meta.url)),
  'utf8',
);

// Matches buildSite's baseURL, so href and location resolve consistently.
const BASE = 'https://example.org';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md': '---\ntitle: Guide\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
  'content/docs/guide/setup.md': '---\ntitle: Setup\n---\nSetup\n',
  'content/docs/other.md': '---\ntitle: Other\n---\nOther\n',
};

// The full (non-lean, non-cached) build is the reference: it bakes the active
// state server side and keeps the inline nav on every page.
const full = buildSite('cached-full', { files });

// CSR stays OFF; lowering the cache limit to 1 forces the shared/cached nav.
const cached = buildSite('cached-nav', {
  files,
  extraConfig: 'params:\n  ui:\n    sidebar_cache_limit: 1\n',
});

// The left-nav facets that must match between a full and a hydrated cached nav.
function navState(doc) {
  const nav = doc.querySelector('#td-section-nav');
  assert.ok(nav, 'section nav is present');
  const paths = (sel) =>
    [...nav.querySelectorAll(sel)].map((a) => new URL(a.href).pathname).sort();
  return {
    links: paths('a[href]'),
    active: paths('a.active'),
    activePath: [...nav.querySelectorAll('li.active-path')]
      .map((li) => li.id)
      .sort(),
  };
}

// Run the real shipped csr-nav.js inside a jsdom window over `html` served at
// `url`. The cached path needs no donor fetch (the menu is inline), but fetch is
// stubbed so the script never reaches the network. Resolves once hydrated.
async function hydrate(html, url) {
  const { window } = new JSDOM(html, { url, runScripts: 'outside-only' });
  window.fetch = async () => ({ ok: true, text: async () => '' });
  window.eval(csrNavSrc);
  for (let i = 0; i < 50; i++) {
    const menu = window.document.getElementById('td-sidebar-menu');
    if (menu && !menu.classList.contains('d-none')) break;
    await new Promise((r) => setTimeout(r, 5));
  }
  return window.document;
}

const docOf = (html, url) => new JSDOM(html, { url }).window.document;

test('cached inner page (CSR off) hydrates to the full build via csr-nav.js', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);
  assert.equal(cached.status, 0, `cached build succeeds:\n${cached.stderr}`);

  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;
  const cachedHtml = cached.publicFile(page);

  // Precondition: the inner page ships the shared menu hidden, with no
  // placeholder (CSR is off) and no server-baked active state — so without the
  // client script it would render no active nav at all.
  assert.match(
    cachedHtml,
    /id="td-sidebar-menu"[^>]*\bd-none\b/,
    'cached menu ships hidden on the inner page',
  );
  assert.ok(
    !/td-sidebar-csr-placeholder/.test(cachedHtml),
    'cached inner page carries no CSR placeholder',
  );
  assert.equal(
    navState(docOf(cachedHtml, url)).active.length,
    0,
    'active state is delayed to the client, not baked server-side',
  );

  const got = navState(await hydrate(cachedHtml, url));
  const want = navState(docOf(full.publicFile(page), url));

  assert.ok(got.links.length > 0, 'hydrated nav carries link entries');
  assert.deepEqual(got.links, want.links, 'same nav entries as the full build');
  assert.deepEqual(
    got.active,
    ['/docs/guide/intro/'],
    'the current page is the sole active entry',
  );
  assert.deepEqual(
    got.active,
    want.active,
    'same active link as the full build',
  );
  assert.deepEqual(
    got.activePath,
    want.activePath,
    'same active-path trail as the full build',
  );
});
