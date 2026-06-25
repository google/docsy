// Cases: CCR-05 (side-nav restore), CCR-06 (active state), CCR-08 (cached nav). See the CCR case registry in tasks/0.16/ccr/.
// Equivalence tests for client-side nav hydration (assets/js/chrome-nav.js).
//
// In shared mode the build drops the repeated left-nav and either (a) leaves a
// placeholder pointing at the section's donor page (the kept docs landing) for
// the client to fetch and inject, or (b) — on the donor itself — ships the
// shared cached nav hidden, with no server-baked active state. Either way, once
// chrome-nav.js runs, the docs left-nav must match a full build's: the
// same entries, the same active page, and the same active-path trail.
//
// Each test builds the same fixture full and shared, runs the real shipped script
// in jsdom over the shared build's HTML, and compares the resulting nav to the full build.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { buildSite } from './lib/build-site.mjs';

const chromeNavSrc = readFileSync(
  fileURLToPath(
    new URL('../../theme/assets/js/chrome-nav.js', import.meta.url),
  ),
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

// The full build is the reference: it bakes the active state server
// side and keeps the inline nav on every page. Built once for all tests.
const full = buildSite('chrome-full', { files });

// The left-nav facets that must match between a full build and a restored nav:
// the link entries, the active link, and the active-path trail.
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

// Run the real shipped chrome-nav.js inside a jsdom window over `html` served at
// `url`, with fetch resolving the placeholder's donor to `donorHtml` (a full
// page from which the script extracts the left-nav). Resolves once the nav is
// hydrated (menu revealed).
async function hydrate(html, url, donorHtml) {
  const { window } = new JSDOM(html, { url, runScripts: 'outside-only' });
  window.fetch = async () => ({ ok: true, text: async () => donorHtml });
  window.eval(chromeNavSrc);
  for (let i = 0; i < 50; i++) {
    const menu = window.document.getElementById('td-sidebar-menu');
    if (menu && !menu.classList.contains('d-none')) break;
    await new Promise((r) => setTimeout(r, 5));
  }
  return window.document;
}

const docOf = (html, url) => new JSDOM(html, { url }).window.document;

test('injected shared nav matches the full build on an inner page', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);

  const ccr = buildSite('chrome-shared', {
    files,
    env: { HUGO_PARAMS_TD_CHROME: 'shared' },
  });
  assert.equal(ccr.status, 0, `CCR build succeeds:\n${ccr.stderr}`);

  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;
  const ccrHtml = ccr.publicFile(page);

  // Precondition: the shared page really is on the donor-placeholder path.
  assert.match(
    ccrHtml,
    /data-nav-donor="\/docs\/"/,
    'shared inner page carries the donor placeholder',
  );
  assert.ok(
    !/id="td-section-nav"/.test(ccrHtml),
    'shared inner page omits the inline nav',
  );

  // The donor is the docs landing's full page; the script extracts its left-nav.
  const donorHtml = ccr.publicFile('docs/index.html');
  const got = navState(await hydrate(ccrHtml, url, donorHtml));
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

test('hydrated cached inline nav matches the full build on the docs landing', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);

  // shared mode forces the neutral cached shape, so the donor landing ships the
  // shared nav hidden with no server-baked active state.
  const ccr = buildSite('chrome-shared-landing', {
    files,
    env: { HUGO_PARAMS_TD_CHROME: 'shared' },
  });
  assert.equal(ccr.status, 0, `CCR build succeeds:\n${ccr.stderr}`);

  const page = 'docs/index.html';
  const url = `${BASE}/docs/`;
  const ccrHtml = ccr.publicFile(page);

  // Precondition: the landing ships the inline menu hidden, with no placeholder.
  assert.match(
    ccrHtml,
    /id="td-sidebar-menu"[^>]*\bd-none\b/,
    'cached menu ships hidden on the docs landing',
  );
  assert.ok(
    !/td-sidebar-chrome-placeholder/.test(ccrHtml),
    'docs landing carries no placeholder',
  );

  const got = navState(await hydrate(ccrHtml, url, ''));
  const want = navState(docOf(full.publicFile(page), url));

  assert.deepEqual(got.links, want.links, 'same nav entries as the full build');
  assert.deepEqual(
    got.active,
    ['/docs/'],
    'the landing is the sole active entry',
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
