// Hugo's partialCached with no variant key caches the first execution's
// output under the partial name alone — one result for the whole site.
// scripts.html emits per-page-varying output (.Page.Store gates such as
// hasmermaid and hasMath), so a variant-less `partialCached "scripts.html" .`
// poisons every page with whichever page rendered first. The docs, blog, and
// swagger baseofs already call plain `partial "scripts.html"`; only the root
// baseof cached. This test pins the fix by exercising pages that resolve
// through the root baseof: exactly one page carries a mermaid diagram (its
// render hook sets the Store flag), with plain siblings on both sides so
// first-execution caching would poison the result in either direction.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

test('mermaid script emission is per-page on root-baseof pages', () => {
  const files = {
    'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
    'content/misc/page-m-diagram.md':
      '---\ntitle: Diagram\n---\n\n```mermaid\ngraph LR;\na-->b;\n```\n',
  };
  for (const c of 'abcdefghij') {
    files[`content/misc/page-${c}.md`] =
      `---\ntitle: Page ${c}\n---\nPlain page ${c}\n`;
  }

  const r = buildSite('partial-cached-gating', { files });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);

  assert.match(
    r.publicFile('misc/page-m-diagram/index.html'),
    /mermaid@/,
    'diagram page carries the mermaid script',
  );
  for (const rel of [
    'index.html',
    ...[...'abcdefghij'].map((c) => `misc/page-${c}/index.html`),
  ]) {
    assert.doesNotMatch(
      r.publicFile(rel),
      /mermaid@/,
      `plain page ${rel} ships no mermaid script`,
    );
  }
});
