// Equivalence tests for client-side nav hydration (assets/js/csr-nav.js).
//
// A lean build drops the repeated left-nav and either (a) leaves a placeholder
// the client fills from the section's navfragment, or (b) ships a hidden, shared
// cached nav with no server-baked active state. Either way, once csr-nav.js
// runs, the docs left-nav must match a full (non-lean) build's: the same
// entries, the same active page, and the same active-path trail.
//
// Each test builds the same fixture full and lean, runs the real shipped script
// in jsdom over the lean HTML, and compares the resulting nav to the full build.

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

const optInNavfragment = [
  'outputs:',
  '  section: [HTML, navfragment]',
  '',
].join('\n');

const forceCache = ['params:', '  ui:', '    sidebar_cache_limit: 1', ''].join(
  '\n',
);

// The full (non-lean) build is the reference: it bakes the active state server
// side and keeps the inline nav on every page. Built once for all tests.
const full = buildSite('csr-full', { files, extraConfig: optInNavfragment });

// The left-nav facets that must match between a full and a hydrated-lean nav:
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

// Run the real shipped csr-nav.js inside a jsdom window over `html` served at
// `url`, with fetch resolving the placeholder's data-nav-src to `fragment`.
// Resolves once the nav is hydrated (menu revealed).
async function hydrate(html, url, fragment) {
  const { window } = new JSDOM(html, { url, runScripts: 'outside-only' });
  window.fetch = async () => ({ ok: true, text: async () => fragment });
  window.eval(csrNavSrc);
  for (let i = 0; i < 50; i++) {
    const menu = window.document.getElementById('td-sidebar-menu');
    if (menu && !menu.classList.contains('d-none')) break;
    await new Promise((r) => setTimeout(r, 5));
  }
  return window.document;
}

const docOf = (html, url) => new JSDOM(html, { url }).window.document;

test('CSR-injected lean nav matches the full build on an inner page', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);

  const lean = buildSite('csr-lean', {
    files,
    extraConfig: optInNavfragment,
    env: { HUGOxPARAMSxTDxLEAN_RENDER: 'remove' },
  });
  assert.equal(lean.status, 0, `lean build succeeds:\n${lean.stderr}`);

  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;
  const leanHtml = lean.publicFile(page);

  // Precondition: the lean page really is on the placeholder path.
  assert.match(
    leanHtml,
    /data-nav-src="\/docs\/_nav\.html"/,
    'lean inner page carries the fragment placeholder',
  );
  assert.ok(
    !/id="td-section-nav"/.test(leanHtml),
    'lean inner page omits the inline nav',
  );

  const got = navState(
    await hydrate(leanHtml, url, lean.publicFile('docs/_nav.html')),
  );
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

test('CSR-hydrated cached inline nav matches the full build on the docs landing', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);

  const lean = buildSite('csr-lean-cached', {
    files,
    extraConfig: optInNavfragment + forceCache,
    env: { HUGOxPARAMSxTDxLEAN_RENDER: 'remove' },
  });
  assert.equal(lean.status, 0, `lean build succeeds:\n${lean.stderr}`);

  const page = 'docs/index.html';
  const url = `${BASE}/docs/`;
  const leanHtml = lean.publicFile(page);

  // Precondition: the cached path ships the inline menu hidden, no placeholder.
  assert.match(
    leanHtml,
    /id="td-sidebar-menu"[^>]*\bd-none\b/,
    'cached menu ships hidden on the docs landing',
  );
  assert.ok(
    !/data-nav-src=/.test(leanHtml),
    'docs landing carries no placeholder',
  );

  const got = navState(await hydrate(leanHtml, url, ''));
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
