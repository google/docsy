// Cases: CCR-03 (navbar), CCR-04 (footer), CCR-05 (side-nav), CCR-06 (active state), CCR-09 (version selector). See the CCR case registry in tasks/0.16/ccr/.
// Full-page equivalence: a shared mode (lean) build, inlined by the real shipped client,
// vs a full build of the same fixture. Unlike chrome-nav.test.mjs (which checks the
// functional nav facets: links, active, active-path), this asserts the stronger
// *structural* bar — the inlined left-nav, navbar (incl. the per-page version
// selector the client re-derives exactly), footer, and whole page match the full
// build modulo class-token order. The language selector, restored only by
// best-effort prefix-swap, is neutralized on both sides (see equivalence.mjs).
//
// The fixture runs foldable (the Docsy default for real docs sites such as
// docsy.dev and otel.io), so the nav reveals via checked checkboxes.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';
import {
  inlineChrome,
  normalize,
  navRegion,
  regionOf,
  bodyWithout,
} from '../site-equivalence/lib/equivalence.mjs';

const BASE = 'https://example.org';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/about.md': '---\ntitle: About\n---\nAbout\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md': '---\ntitle: Guide\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
  'content/docs/guide/setup.md': '---\ntitle: Setup\n---\nSetup\n',
  'content/docs/other.md': '---\ntitle: Other\n---\nOther\n',
};

// Foldable nav (the Docsy default for real docs sites) plus a main menu, so the
// restored navbar has a per-page active link the client must re-derive. The
// `versions` give the navbar a version selector whose links are per-page
// (`version_menu_pagelinks`), exercising the selector-placeholder path.
const extraConfig = `params:
  ui:
    sidebar_menu_foldable: true
  version: v2.0
  version_menu: Releases
  version_menu_pagelinks: true
  versions:
    - version: v2.0
      url: https://example.org
    - version: v1.0
      url: https://v1.example.org
menus:
  main:
    - name: Docs
      pageRef: /docs
      weight: 10
    - name: About
      pageRef: /about
      weight: 20
`;

// Both builds share a title so they differ only by output dir and shared mode;
// otherwise the navbar brand (`.Site.Title`) would diverge.
const title = 'Docsy equivalence fixture';
const full = buildSite('equiv-full', { files, extraConfig, title });
const ccr = buildSite('equiv-ccr', {
  files,
  extraConfig,
  title,
  env: { HUGO_PARAMS_TD_CHROME: 'shared' },
});

// Inline a shared-mode page by running the client, with donors resolved from the shared mode
// build (the kept docs landing).
async function inlinePage(page, url) {
  return normalize(
    await inlineChrome(ccr.publicFile(page), {
      url,
      resolveDonor: (pathname) => {
        const rel = pathname.replace(/^\/+/, '').replace(/\/$/, '');
        const file = rel ? `${rel}/index.html` : 'index.html';
        try {
          return ccr.publicFile(file);
        } catch {
          return null;
        }
      },
    }),
  );
}

test('inlined left-nav structurally matches the full build', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);
  assert.equal(ccr.status, 0, `CCR build succeeds:\n${ccr.stderr}`);

  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;

  // Precondition: the fixture really is foldable (reveals via checkboxes).
  assert.match(
    full.publicFile(page),
    /type="checkbox"/,
    'fixture nav is foldable',
  );

  const got = navRegion(await inlinePage(page, url), { canonical: true });
  const want = navRegion(normalize(full.publicFile(page)), { canonical: true });

  assert.ok(got.length > 0, 'inlined nav region is present');
  assert.equal(got, want, 'inlined left-nav matches the full build');
});

test('shared mode restores the footer to match the full build', async () => {
  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;

  const got = regionOf(await inlinePage(page, url), '.td-footer');
  const want = regionOf(normalize(full.publicFile(page)), '.td-footer');

  assert.ok(got.length > 0, 'inlined page carries a footer');
  assert.equal(got, want, 'restored footer matches the full build');
});

test('shared mode restores the navbar to match the full build', async () => {
  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;

  // Precondition: the full build's navbar carries a per-page active link, so the
  // restore really exercises the client's active-state fix-up.
  const fullNav = regionOf(normalize(full.publicFile(page)), '.td-navbar');
  assert.match(
    fullNav,
    /nav-link[^"]*\bactive\b/,
    'full navbar has an active link',
  );

  const opts = { canonical: true };
  const got = regionOf(await inlinePage(page, url), '.td-navbar', opts);
  const want = regionOf(normalize(full.publicFile(page)), '.td-navbar', opts);

  assert.ok(got.length > 0, 'inlined page carries a navbar');
  assert.equal(got, want, 'restored navbar matches the full build');
});

test('shared mode restores the per-page version selector to match the full build', async () => {
  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;

  // Precondition: the full build's version selector links are per-page (each
  // version's counterpart of this page), so restoring them from the home donor
  // genuinely exercises the client's re-derivation.
  const fullNav = regionOf(normalize(full.publicFile(page)), '.td-navbar');
  assert.match(
    fullNav,
    /href="https:\/\/v1\.example\.org\/docs\/guide\/intro\//,
    'full version selector links are per-page',
  );

  // The client strips the donor's (home) path and appends this page's, so the
  // restored version menu matches the full build exactly.
  const opts = { canonical: true };
  const got = regionOf(await inlinePage(page, url), '.td-version-menu', opts);
  const want = regionOf(
    normalize(full.publicFile(page)),
    '.td-version-menu',
    opts,
  );
  assert.ok(got.length > 0, 'inlined page carries a version selector');
  assert.equal(got, want, 'restored version selector matches the full build');
});

test('shared-mode page matches the full build (whole page)', async () => {
  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;

  const got = bodyWithout(await inlinePage(page, url), []);
  const want = bodyWithout(normalize(full.publicFile(page)), []);

  assert.equal(got, want, 'inlined shared-mode page matches the full build');
});
