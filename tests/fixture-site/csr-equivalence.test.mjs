// Full-page equivalence: a CSR (lean) build, inlined by the real shipped client,
// vs a full build of the same fixture. Unlike csr-nav.test.mjs (which checks the
// functional nav facets: links, active, active-path), this asserts the stronger
// *structural* bar — the inlined left-nav HTML matches the full build's modulo
// class-token order — and documents the one remaining whole-page gap (the navbar
// and footer, which CSR does not yet restore).
//
// The fixture runs foldable (the Docsy default for real docs sites such as
// docsy.dev and otel.io), so the nav reveals via checked checkboxes.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';
import {
  inlineCsr,
  normalize,
  navRegion,
  bodyWithout,
} from '../site-equivalence/lib/equivalence.mjs';

const BASE = 'https://example.org';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md': '---\ntitle: Guide\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
  'content/docs/guide/setup.md': '---\ntitle: Setup\n---\nSetup\n',
  'content/docs/other.md': '---\ntitle: Other\n---\nOther\n',
};

// Foldable nav, matching real docs sites.
const extraConfig = `params:
  ui:
    sidebar_menu_foldable: true
`;

const full = buildSite('equiv-full', { files, extraConfig });
const csr = buildSite('equiv-csr', {
  files,
  extraConfig,
  env: { HUGOxPARAMSxTDxLEAN_RENDER: 'csr' },
});

// Inline a CSR page by running the client, with donors resolved from the CSR
// build (the kept docs landing).
async function inlinePage(page, url) {
  return normalize(
    await inlineCsr(csr.publicFile(page), {
      url,
      resolveDonor: (pathname) => {
        const rel = pathname.replace(/^\/+/, '').replace(/\/$/, '');
        const file = rel ? `${rel}/index.html` : 'index.html';
        try {
          return csr.publicFile(file);
        } catch {
          return null;
        }
      },
    }),
  );
}

test('CSR-inlined left-nav structurally matches the full build', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);
  assert.equal(csr.status, 0, `csr build succeeds:\n${csr.stderr}`);

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

test('CSR page matches the full build everywhere except navbar and footer', async () => {
  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;
  const chrome = ['.td-navbar', '.td-footer'];

  const got = bodyWithout(await inlinePage(page, url), chrome);
  const want = bodyWithout(normalize(full.publicFile(page)), chrome);

  assert.equal(
    got,
    want,
    'page bodies match once navbar and footer are excluded',
  );
});
