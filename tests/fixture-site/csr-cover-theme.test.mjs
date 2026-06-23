// CSR cover/theme per-page hint: the navbar's cover (translucent) styling and
// dark theme are *per-page* traits. When the home donor is a cover page and/or
// sets a dark navbar theme, those traits must NOT leak onto restored inner
// pages. The client reads a server-baked per-page hint on the placeholder and
// re-applies the page-correct cover/theme after cloning the donor navbar, so an
// inner page's restored navbar matches the full build.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';
import {
  inlineCsr,
  normalize,
  regionOf,
} from '../site-equivalence/lib/equivalence.mjs';

const BASE = 'https://example.org';

// The home (the navbar/footer donor) is a cover page with a dark navbar theme;
// the inner page under test is neither, so restoring its navbar from the home
// donor must drop both traits.
const files = {
  'content/_index.md':
    '---\ntitle: Home\nui:\n  navbar_theme: dark\n---\n' +
    '{{< blocks/cover >}}\nCover\n{{< /blocks/cover >}}\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
};

const extraConfig = `params:
  ui:
    sidebar_menu_foldable: true
menus:
  main:
    - name: Docs
      pageRef: /docs
      weight: 10
`;

const title = 'Docsy cover/theme fixture';
const full = buildSite('cover-full', { files, extraConfig, title });
const csr = buildSite('cover-csr', {
  files,
  extraConfig,
  title,
  env: { HUGOxPARAMSxTDxCSR_ENABLE: 'true' },
});

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

test('home donor navbar carries cover + dark theme (precondition)', () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);
  assert.equal(csr.status, 0, `csr build succeeds:\n${csr.stderr}`);

  const homeNav = regionOf(
    normalize(full.publicFile('index.html')),
    '.td-navbar',
  );
  assert.match(homeNav, /td-navbar-cover/, 'home navbar is a cover navbar');
  assert.match(homeNav, /data-bs-theme="dark"/, 'home navbar is dark');
});

test('inner page full navbar has neither cover nor dark theme (precondition)', () => {
  const innerNav = regionOf(
    normalize(full.publicFile('docs/guide/intro/index.html')),
    '.td-navbar',
  );
  assert.doesNotMatch(innerNav, /td-navbar-cover/, 'inner navbar is plain');
  assert.doesNotMatch(
    innerNav,
    /data-bs-theme/,
    'inner navbar has the page theme',
  );
});

test('CSR restores an inner navbar without leaking the cover/dark theme', async () => {
  const page = 'docs/guide/intro/index.html';
  const url = `${BASE}/docs/guide/intro/`;

  const opts = { canonical: true };
  const got = regionOf(await inlinePage(page, url), '.td-navbar', opts);
  const want = regionOf(normalize(full.publicFile(page)), '.td-navbar', opts);

  assert.ok(got.length > 0, 'inlined page carries a navbar');
  assert.equal(got, want, 'restored navbar matches the full build');
});
