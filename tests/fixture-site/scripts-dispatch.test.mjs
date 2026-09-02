// Legacy dispatch net: scripts.html keeps dispatching the .Page.Store-gated
// partials (mermaid, katex). The real partials fetch remote assets at build
// time, so fixture-site marker overrides stand in for them — what's pinned
// is exactly the dispatcher's gate → partial wiring, offline.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const r = buildSite('scripts-dispatch', {
  files: {
    'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
    'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs body\n',
    'content/docs/math.md':
      '---\ntitle: Math\n---\n{{< set-flag hasMath >}}\nMath body\n',
    'content/docs/diagram.md':
      '---\ntitle: Diagram\n---\n{{< set-flag hasmermaid >}}\nDiagram body\n',
    'layouts/_shortcodes/set-flag.html': '{{ .Page.Store.Set (.Get 0) true }}',
    'layouts/_partials/scripts/mermaid.html':
      '<div data-dispatch="mermaid"></div>\n',
    'layouts/_partials/scripts/katex.html':
      '<div data-dispatch="katex"></div>\n',
  },
});

test('the dispatch fixture builds', () => {
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stderr}`);
});

for (const [flag, page] of [
  ['katex', 'docs/math/index.html'],
  ['mermaid', 'docs/diagram/index.html'],
]) {
  test(`the ${flag} partial is dispatched on flagged pages only`, () => {
    assert.match(
      r.publicFile(page),
      new RegExp(`data-dispatch="${flag}"`),
      `the flagged page carries the ${flag} dispatch`,
    );
    assert.doesNotMatch(
      r.publicFile('index.html'),
      /data-dispatch/,
      'unflagged pages are dispatch-free',
    );
  });
}
