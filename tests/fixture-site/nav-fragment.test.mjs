// Tests for the `navfragment` output format: Hugo emits each docs section's
// left-nav as a standalone HTML fragment (e.g. public/docs/_nav.html) that a
// lean build can fetch and inject client-side. The fragment is the cached
// sidebar core only — no page chrome — so a link checker reads its internal
// links exactly as it reads the inline nav today.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/page-a/_index.md': '---\ntitle: Page A\n---\nDeep page\n',
};

const navLinks = (h) => [...h.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);

// A consuming site opts the docs section into the theme-provided format, exactly
// as it would for the "print" format (the theme ships the definition only).
const optInNavfragment = [
  'outputs:',
  '  section: [HTML, navfragment]',
  '',
].join('\n');

const chrome = {
  htmlEl: (h) => /<html[\s>]/.test(h),
  head: (h) => /<head[\s>]/.test(h),
  navbar: (h) => /class="[^"]*td-navbar/.test(h),
  footer: (h) => /class="[^"]*td-footer/.test(h),
};

test('navfragment emits a chrome-free docs left-nav fragment', () => {
  const r = buildSite('navfragment', { files, extraConfig: optInNavfragment });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stdout}${r.stderr}`);

  const frag = r.publicFile('docs/_nav.html');

  // Carries the nav element and its internal links.
  assert.match(frag, /id="td-section-nav"/, 'fragment carries the nav element');
  assert.ok(
    navLinks(frag).includes('/docs/page-a/'),
    'fragment links to the deep page',
  );

  // Bare fragment: no page chrome leaked in from baseof.
  assert.ok(!chrome.htmlEl(frag), 'html wrapper absent from the fragment');
  assert.ok(!chrome.head(frag), 'head wrapper absent from the fragment');
  assert.ok(!chrome.navbar(frag), 'navbar absent from the fragment');
  assert.ok(!chrome.footer(frag), 'footer absent from the fragment');
});
