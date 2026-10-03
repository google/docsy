// Doc-rooted sites (docs section published at the site root, home link-only;
// recipe: docsy.dev/content/en/docs/content/adding-content.md § Doc-rooted
// sites) have no rendered home, so the LLMS index must come from the page that
// publishes the root. Pins the llms.txt publication, the directive, and the
// Markdown alternate's index link; see docsy/docsy#2834.

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const linkOnlyHome = (title) =>
  `---\ntitle: ${title}\nbuild: { render: link }\n---\n`;
const docsRoot = (title) =>
  `---\ntitle: ${title}\noutputs: [HTML, RSS, markdown, LLMS]\n---\nDocs landing\n`;

const files = {
  'content/_index.md': linkOnlyHome('Home'),
  'content/_index.fr.md': linkOnlyHome('Accueil'),
  'content/docs/_index.md': docsRoot('Docs'),
  'content/docs/_index.fr.md': docsRoot('Documentation'),
  'content/docs/install.md': '---\ntitle: Install\n---\nLeaf page\n',
};

const docRootedConfig = `permalinks:
  page:
    docs: /:sections[1:]/:slug/
  section:
    docs: /:sections[1:]
outputs:
  home: [HTML, markdown, LLMS]
  page: [HTML, markdown]
  section: [HTML, RSS, markdown]
languages:
  en: { weight: 1 }
  fr: { weight: 2 }
`;

function build(name, extraConfig) {
  const r = buildSite(name, {
    files,
    extraConfig,
    args: ['--printPathWarnings'],
  });
  assert.equal(
    r.status,
    0,
    `fixture hugo build succeeds:\n${r.stdout}${r.stderr}`,
  );
  assert.ok(
    !/WARN/.test(r.stdout + r.stderr),
    `build is warning-free:\n${r.stdout}${r.stderr}`,
  );
  return r;
}

test('doc-rooted site publishes llms.txt at each language root', () => {
  const b = build('llms-doc-rooted', docRootedConfig);
  const en = b.publicFile('llms.txt');
  assert.ok(
    en.startsWith('# Docsy fixture site'),
    'en llms.txt opens with the site title',
  );
  assert.ok(
    en.includes('- [Home page](https://example.org/index.md)'),
    'en index links the root Markdown alternate as the home page',
  );
  const fr = b.publicFile('fr/llms.txt');
  assert.ok(
    fr.includes('- [Home page](https://example.org/fr/index.md)'),
    'fr index links the fr root Markdown alternate as the home page',
  );
});

test('doc-rooted pages carry the directive, pointing at their language index', () => {
  const b = build('llms-doc-rooted', docRootedConfig);
  for (const [page, index] of [
    ['index.html', '/llms.txt'],
    ['install/index.html', '/llms.txt'],
    ['fr/index.html', '/fr/llms.txt'],
  ]) {
    assert.ok(
      b
        .publicFile(page)
        .includes(
          `For AI agents: a documentation index is available at ${index}`,
        ),
      `${page} directive points at ${index}`,
    );
  }
});

test('doc-rooted Markdown alternates link their language index', () => {
  const b = build('llms-doc-rooted', docRootedConfig);
  assert.ok(
    b.publicFile('index.md').includes('LLMS index: [llms.txt](/llms.txt)'),
    'root Markdown alternate links /llms.txt',
  );
  assert.ok(
    b
      .publicFile('fr/index.md')
      .includes('LLMS index: [llms.txt](/fr/llms.txt)'),
    'fr root Markdown alternate links /fr/llms.txt',
  );
});

test('site without llms.txt omits the Markdown index link', () => {
  const b = buildSite('llms-md-link-off', {
    files: {
      'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
      'content/docs/install.md': '---\ntitle: Install\n---\nLeaf page\n',
    },
    extraConfig:
      'outputs:\n  home: [HTML, markdown]\n  page: [HTML, markdown]\n',
  });
  assert.equal(
    b.status,
    0,
    `fixture hugo build succeeds:\n${b.stdout}${b.stderr}`,
  );
  const md = b.publicFile('docs/install/index.md');
  assert.ok(md.startsWith('# Install'), 'Markdown alternate renders');
  assert.ok(
    !md.includes('LLMS index'),
    'Markdown alternate omits the index link',
  );
});
