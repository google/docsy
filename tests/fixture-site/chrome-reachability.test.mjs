// Cases: CCR-02 (kept reference instances / donor reachability). See the CCR case registry in tasks/0.16/ccr/.
// No-JS link-checker reachability: a `shared` build must expose the same unique
// chrome links to a checker — which runs no JavaScript — as a full build does.
//
// `shared` mode drops the repeated navbar, footer, and left-nav from inner pages
// but keeps one donor instance of each per locale. This is the static-HTML
// counterpart to the jsdom restoration-parity tests (chrome-nav,
// chrome-equivalence): nothing runs the client here — we read the built HTML as
// htmltest or Lychee would, and assert those donors leave no chrome link
// unreachable. Mirrors docsy.dev's link-check-matrix.mjs at fixture scale.
//
// The fixture is foldable (the Docsy default for real docs sites), so the donor
// left-nav carries the whole tree in the HTML. The one documented exception —
// per-page navbar links under `version_menu_pagelinks`, which the single kept
// navbar surfaces only for the home page — is deliberately not configured here,
// so the contract holds exactly.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import { buildSite } from './lib/build-site.mjs';

const ORIGIN = 'https://example.org';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  // A navbar (main-menu) target outside the docs tree, so the navbar donor
  // carries a link the inner docs pages never would.
  'content/about.md': '---\ntitle: About\n---\nAbout\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md': '---\ntitle: Guide\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
  'content/docs/guide/setup.md': '---\ntitle: Setup\n---\nSetup\n',
  'content/docs/other.md': '---\ntitle: Other\n---\nOther\n',
};

const extraConfig = `params:
  ui:
    sidebar_menu_foldable: true
menus:
  main:
    - name: Docs
      pageRef: /docs
      weight: 10
    - name: About
      pageRef: /about
      weight: 20
`;

// Both builds share a title so they differ only by output dir and build mode.
const title = 'Docsy reachability fixture';
const full = buildSite('reach-full', { files, extraConfig, title });
const shared = buildSite('reach-shared', {
  files,
  extraConfig,
  title,
  env: { HUGO_PARAMS_TD_CHROME: 'shared' },
});

// Every built HTML file under a build's public/ dir.
function* walkHtml(dir) {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const child = path.join(dir, ent.name);
    if (ent.isDirectory()) yield* walkHtml(child);
    else if (ent.name.endsWith('.html')) yield child;
  }
}

// The set of unique internal link targets a no-JS checker reaches across a whole
// build: every `<a href>` on every page, resolved to a normalized root-relative
// path. External targets are out of scope for chrome-link reachability here.
function reachableInternalLinks(build) {
  const links = new Set();
  for (const file of walkHtml(path.join(build.site, 'public'))) {
    const { document } = new JSDOM(readFileSync(file, 'utf8')).window;
    for (const a of document.querySelectorAll('a[href]')) {
      let url;
      try {
        url = new URL(a.getAttribute('href'), `${ORIGIN}/`);
      } catch {
        continue;
      }
      if (url.origin !== ORIGIN) continue;
      links.add(url.pathname.replace(/\/$/, '') || '/');
    }
  }
  return links;
}

test('shared mode (no JS) leaves every chrome link reachable, as in a full build', () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);
  assert.equal(shared.status, 0, `shared build succeeds:\n${shared.stderr}`);

  // Precondition: shared mode really dropped the inline left-nav from an inner
  // page, so reachability is carried by the donor rather than holding trivially.
  const inner = shared.publicFile('docs/guide/intro/index.html');
  assert.ok(
    !/id="td-section-nav"/.test(inner),
    'shared inner page drops the inline left-nav',
  );

  const fullLinks = reachableInternalLinks(full);
  const sharedLinks = reachableInternalLinks(shared);

  // Precondition: the full build exposes the chrome links most at risk when
  // chrome is dropped — the deep left-nav tree and the navbar's About target.
  for (const p of [
    '/docs',
    '/docs/guide/intro',
    '/docs/guide/setup',
    '/docs/other',
    '/about',
  ]) {
    assert.ok(fullLinks.has(p), `full build reaches ${p}`);
  }

  // The contract: a no-JS shared build reaches every link the full build does.
  const dropped = [...fullLinks].filter((p) => !sharedLinks.has(p)).sort();
  assert.deepEqual(
    dropped,
    [],
    'shared mode reaches every link the full build does, without JavaScript',
  );
});
