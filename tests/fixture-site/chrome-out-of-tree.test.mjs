// Cases: CCR-17 (out-of-tree active-path). See the CCR case registry in tasks/0.16/ccr/.
// Equivalence test for the active-path of an "out-of-tree" page: one that isn't
// itself a left-nav entry because it (or a cascade) sets toc_hide. The full
// build still marks the page's ancestor sections as the active path (sidebar
// tree: active-path when the current page IsDescendant of a section). A lean
// build drops the nav and restores it from the donor; with no nav entry for the
// page, the client must still mark the nearest ancestor's active path, matching
// the full build — see assets/js/chrome-nav.js (applyActiveState longest-prefix).

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

const BASE = 'https://example.org';

// A docs tree whose `repo` subsection is hidden from the nav via a cascade,
// mirroring docsy.dev's project/repo (repo-root files): the section's pages are
// real pages but absent from their own sidebar.
const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md': '---\ntitle: Guide\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
  'content/docs/repo/_index.md':
    '---\ntitle: Repo\ncascade:\n  params:\n    toc_hide: true\n---\nRepo landing\n',
  'content/docs/repo/readme.md': '---\ntitle: Readme\n---\nReadme body\n',
};
const extraConfig = 'params:\n  ui:\n    sidebar_menu_foldable: true\n';

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

const full = buildSite('csr-oot-full', { files, extraConfig });
const lean = buildSite('csr-oot-lean', {
  files,
  extraConfig,
  env: { HUGO_PARAMS_TD_CHROME: 'shared' },
});

test('an out-of-tree page is absent from its own donor nav', () => {
  assert.equal(lean.status, 0, `lean build succeeds:\n${lean.stderr}`);
  const donor = lean.publicFile('docs/index.html');
  assert.ok(
    !/href="\/docs\/repo\/readme\/"/.test(donor),
    'the toc_hide page is not a nav entry',
  );
});

test('chrome marks the ancestor active-path for an out-of-tree page', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);
  assert.equal(lean.status, 0, `lean build succeeds:\n${lean.stderr}`);

  const page = 'docs/repo/readme/index.html';
  const url = `${BASE}/docs/repo/readme/`;

  // Precondition: the page itself carries no nav entry, so the client has no
  // exact link to anchor on — exercising the longest-prefix fallback.
  const want = navState(docOf(full.publicFile(page), url));
  assert.ok(
    want.activePath.length > 0,
    'full build marks an ancestor active-path',
  );
  assert.deepEqual(want.active, [], 'full build marks no active link');

  const donorHtml = lean.publicFile('docs/index.html');
  const got = navState(await hydrate(lean.publicFile(page), url, donorHtml));

  assert.deepEqual(
    got.activePath,
    want.activePath,
    'same active-path trail as the full build',
  );
  assert.deepEqual(got.active, want.active, 'no active link, as in full');
});
