// Equivalence tests for CSR re-rooting on sidebar_root_for ("scoped") pages.
//
// Kept separate from csr-nav.test.mjs because this exercises one self-contained
// concern — sidebar-root scoping — so it is easy to review or pull out. On a
// scoped page a lean build still ships a single donor (the full docs-landing
// tree); the client prunes that tree to the subtree rooted at data-nav-root and
// re-points the root item "up" to its parent, matching a full build's scoped
// sidebar. Parity here is *functional* (same links, same active item, root
// links up), not structural (wrappers/numbering may differ).

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

// A docs tree with a self-rooted section (guide) alongside an unscoped page.
const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md':
    '---\ntitle: Guide\nsidebar_root_for: self\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
  'content/docs/guide/setup.md': '---\ntitle: Setup\n---\nSetup\n',
  'content/docs/other.md': '---\ntitle: Other\n---\nOther\n',
};
const extraConfig = [
  'params:',
  '  ui:',
  '    sidebar_root_enabled: true',
  '',
].join('\n');

// The left-nav facets that must match between a full and a hydrated-lean nav.
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

// Run the real shipped csr-nav.js in jsdom over `html` served at `url`, with
// fetch resolving the placeholder's donor to `donorHtml`. Resolves once the nav
// is hydrated (menu revealed).
async function hydrate(html, url, donorHtml) {
  const { window } = new JSDOM(html, { url, runScripts: 'outside-only' });
  window.fetch = async () => ({ ok: true, text: async () => donorHtml });
  window.eval(csrNavSrc);
  for (let i = 0; i < 50; i++) {
    const menu = window.document.getElementById('td-sidebar-menu');
    if (menu && !menu.classList.contains('d-none')) break;
    await new Promise((r) => setTimeout(r, 5));
  }
  return window.document;
}

const docOf = (html, url) => new JSDOM(html, { url }).window.document;

const full = buildSite('csr-scoped-full', { files, extraConfig });
const lean = buildSite('csr-scoped-lean', {
  files,
  extraConfig,
  env: { HUGOxPARAMSxTDxLEAN_RENDER: 'csr' },
});

test('a lean scoped page carries a data-nav-root hint; an unscoped one does not', () => {
  assert.equal(lean.status, 0, `lean build succeeds:\n${lean.stderr}`);

  const scoped = lean.publicFile('docs/guide/intro/index.html');
  assert.match(
    scoped,
    /data-nav-donor="\/docs\/"/,
    'scoped page points at the docs-landing donor',
  );
  assert.match(
    scoped,
    /data-nav-root="\/docs\/guide\/"/,
    'scoped page names its sidebar-root subtree',
  );

  const unscoped = lean.publicFile('docs/other/index.html');
  assert.match(
    unscoped,
    /data-nav-donor="\/docs\/"/,
    'unscoped page points at the docs-landing donor',
  );
  assert.ok(
    !/data-nav-root=/.test(unscoped),
    'unscoped page omits the sidebar-root hint',
  );
});

test('CSR re-roots the donor tree to match a full self-root build', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);
  assert.equal(lean.status, 0, `lean build succeeds:\n${lean.stderr}`);

  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;

  // The donor is the docs landing's full page; the client prunes it to the
  // guide subtree using the data-nav-root hint.
  const donorHtml = lean.publicFile('docs/index.html');
  const got = navState(await hydrate(lean.publicFile(page), url, donorHtml));
  const want = navState(docOf(full.publicFile(page), url));

  assert.ok(got.links.length > 0, 'hydrated scoped nav carries link entries');
  assert.deepEqual(
    got.links,
    want.links,
    'same scoped entries as the full build (subtree only, root links up)',
  );
  assert.ok(
    got.links.includes('/docs/'),
    'the scope-root item links up to its parent',
  );
  assert.ok(
    !got.links.includes('/docs/other/'),
    'links outside the subtree are pruned',
  );
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
