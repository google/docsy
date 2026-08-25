// Pins the llms-directive partial's contract (rationale and gating:
// theme/layouts/_partials/llms-directive.html): two fixture builds cover both
// gate sides; the enabled build also pins position (ahead of the navbar) and
// the per-page Markdown pointer.

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const files = {
  'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
  'content/docs/_index.md': '---\ntitle: Docs\n---\nDocs landing\n',
  'content/docs/install.md': '---\ntitle: Install\n---\nLeaf page\n',
};

const llmsConfig = `outputs:
  home: [HTML, markdown, LLMS]
  page: [HTML, markdown]
  section: [HTML, RSS, markdown]
`;

function build(name, extraConfig) {
  const r = buildSite(name, { files, extraConfig });
  assert.equal(
    r.status,
    0,
    `fixture hugo build succeeds:\n${r.stdout}${r.stderr}`,
  );
  return r;
}

test('llms.txt-enabled site carries the directive on every page kind', () => {
  const b = build('llms-directive-on', llmsConfig);
  for (const page of [
    'index.html',
    'docs/index.html',
    'docs/install/index.html',
  ]) {
    const html = b.publicFile(page);
    const at = html.indexOf(
      'For AI agents: a documentation index is available at /llms.txt',
    );
    assert.ok(at > 0, `directive is present in ${page}`);
    const nav = html.indexOf('td-navbar');
    assert.ok(at < nav, `directive precedes the navbar in ${page}`);
  }
});

test('directive names the page Markdown alternate when one exists', () => {
  const b = build('llms-directive-on', llmsConfig);
  assert.ok(
    b
      .publicFile('docs/install/index.html')
      .includes('This page has a Markdown version at /docs/install/index.md'),
    'leaf page directive links its Markdown version',
  );
});

test('site without llms.txt emits no directive', () => {
  const b = build('llms-directive-off');
  for (const page of ['index.html', 'docs/install/index.html']) {
    assert.ok(
      !b.publicFile(page).includes('For AI agents'),
      `no directive in ${page}`,
    );
  }
});
