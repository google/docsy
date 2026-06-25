// Cases: CSR-18 (no-left-sidebar layout). See the CSR case registry in tasks/0.16/csr/.
// Equivalence guard for the no-left-sidebar layout (body_class
// td-no-left-sidebar), mirroring docsy.dev's tests/layouts/no-left-sidebar. The
// left sidebar is hidden by CSS, but the full build still renders it in the DOM;
// a lean build drops it and restores it from the donor. The inlined page must
// still match the full build, so CSR stays equivalent on this layout too.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';
import {
  inlineCsr,
  normalize,
  bodyWithout,
} from '../site-equivalence/lib/equivalence.mjs';

const BASE = 'https://example.org';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md': '---\ntitle: Guide\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
  'content/docs/plain.md':
    '---\ntitle: Plain\nparams:\n  body_class: td-no-left-sidebar\n---\nPlain body\n',
};
const extraConfig = 'params:\n  ui:\n    sidebar_menu_foldable: true\n';
const title = 'Docsy no-left-sidebar fixture';

const full = buildSite('no-left-sidebar-full', { files, extraConfig, title });
const csr = buildSite('no-left-sidebar-csr', {
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

test('a no-left-sidebar page carries the body class and CSR markers', () => {
  assert.equal(csr.status, 0, `csr build succeeds:\n${csr.stderr}`);
  const html = csr.publicFile('docs/plain/index.html');
  assert.match(
    html,
    /td-no-left-sidebar/,
    'page uses the no-left-sidebar layout',
  );
  assert.match(
    html,
    /td-sidebar-csr-placeholder/,
    'lean page still drops the sidebar behind a placeholder',
  );
});

test('CSR no-left-sidebar page matches the full build (whole page)', async () => {
  assert.equal(full.status, 0, `full build succeeds:\n${full.stderr}`);

  const page = 'docs/plain/index.html';
  const url = `${BASE}/docs/plain/`;

  const got = bodyWithout(await inlinePage(page, url), []);
  const want = bodyWithout(normalize(full.publicFile(page)), []);

  assert.equal(
    got,
    want,
    'inlined no-left-sidebar page matches the full build',
  );
});
