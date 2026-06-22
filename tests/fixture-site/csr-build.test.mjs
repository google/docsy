// Build-contract tests for CSR mode (params.td.lean_render="csr").
//
// CSR mode is lean render plus client-side restoration: it drops the repeated
// left-nav from inner pages just like "remove", but additionally leaves a
// placeholder pointing at the section's "donor" page (the kept docs landing).
// The client (assets/js/csr-nav.js) fetches that donor, extracts its left-nav,
// and injects it — no separate output format or per-site opt-in required.
//
// These tests pin the server-rendered contract the client depends on; the
// full-vs-hydrated equivalence is checked separately in csr-nav.test.mjs.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/guide/_index.md': '---\ntitle: Guide\n---\nGuide\n',
  'content/docs/guide/intro.md': '---\ntitle: Intro\n---\nIntro\n',
};

test('CSR mode leaves a donor placeholder on inner pages, no opt-in needed', () => {
  const r = buildSite('csr-build', {
    files,
    env: { HUGOxPARAMSxTDxLEAN_RENDER: 'csr' },
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stdout}${r.stderr}`);

  // An inner page drops the inline nav and points at the kept docs landing as
  // its donor, with zero site configuration.
  const inner = r.publicFile('docs/guide/intro/index.html');
  assert.match(
    inner,
    /class="td-sidebar-csr-placeholder"[^>]*data-nav-donor="\/docs\/"/,
    'inner page carries a donor placeholder targeting the docs landing',
  );
  assert.ok(
    !/id="td-section-nav"/.test(inner),
    'inline section nav is absent on the inner page',
  );

  // The docs landing is the donor: it keeps the left-nav in the neutral cached
  // shape (hidden, no server-baked active state) so the client can apply the
  // per-page active state after fetching it.
  const landing = r.publicFile('docs/index.html');
  assert.match(
    landing,
    /id="td-sidebar-menu"[^>]*\bd-none\b/,
    'docs landing ships the neutral cached nav, hidden',
  );
  assert.ok(
    !/td-sidebar-csr-placeholder/.test(landing),
    'docs landing carries no placeholder',
  );
});

test('CSR mode emits no standalone nav fragment file', () => {
  const r = buildSite('csr-build-nofrag', {
    files,
    env: { HUGOxPARAMSxTDxLEAN_RENDER: 'csr' },
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stdout}${r.stderr}`);
  assert.throws(
    () => r.publicFile('docs/_nav.html'),
    'the donor approach emits no per-section fragment file',
  );
});

test('remove mode drops the nav without a CSR placeholder', () => {
  const r = buildSite('csr-build-remove', {
    files,
    env: { HUGOxPARAMSxTDxLEAN_RENDER: 'remove' },
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stdout}${r.stderr}`);

  const inner = r.publicFile('docs/guide/intro/index.html');
  assert.ok(
    !/id="td-section-nav"/.test(inner),
    'inline section nav is absent on the lean inner page',
  );
  assert.ok(
    !/td-sidebar-csr-placeholder/.test(inner),
    'plain remove mode adds no CSR placeholder',
  );
});
