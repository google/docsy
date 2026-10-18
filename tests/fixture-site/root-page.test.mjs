// Pins the root-page lookup (_partials/td/root-page.html) and all.llms.txt's
// docs-section lookup on sites with no `/docs` section but pages named docs
// elsewhere (docsy/docsy#2875), plus the auto-created translated landing and
// baseURL-subpath cases. Covered cases:
// docsy.dev/content/en/project/design/root-page.md

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCleanSite } from './lib/build-site.mjs';
import {
  describedbyLinks,
  docRootedConfig,
  docRootedHomes,
} from './lib/fixtures.mjs';

const llmsConfig = `outputs:
  home: [HTML, markdown, LLMS]
  page: [HTML, markdown]
  section: [HTML, RSS, markdown]
`;

const home = {
  'content/_index.md':
    '---\ntitle: Home\ndescription: Site summary\n---\nHome body\n',
  'content/guides/_index.md': '---\ntitle: Guides\n---\nGuides landing\n',
};
// A nested section named docs, with a subsection of its own (what llms.txt's
// documentation index would list if it mistook it for the docs section).
const nestedDocsSection = {
  'content/guides/docs/_index.md': '---\ntitle: Guides docs\n---\nNested\n',
  'content/guides/docs/sub/_index.md': '---\ntitle: Sub\n---\nSub\n',
};
const oneNestedDocs = { ...home, ...nestedDocsSection };
// Plus a nested leaf named docs: two candidates, no `/docs` section.
const twoNestedDocs = {
  ...oneNestedDocs,
  'content/reference/_index.md': '---\ntitle: Reference\n---\nReference\n',
  'content/reference/docs.md': '---\ntitle: Reference docs\n---\nLeaf\n',
};

test('a site with no /docs section and two pages named docs builds, rooted at the home', () => {
  const b = buildCleanSite('root-page-two-docs', {
    files: twoNestedDocs,
    extraConfig: llmsConfig,
  });
  for (const page of [
    'index.html',
    'guides/docs/index.html',
    'reference/docs/index.html',
    '404.html',
  ]) {
    assert.deepEqual(
      describedbyLinks(b.publicFile(page)),
      ['<link rel="describedby" href="https://example.org/llms.txt">'],
      `${page} head links the home's llms.txt as describedby, once`,
    );
  }
  const llms = b.publicFile('llms.txt');
  assert.ok(llms.includes('\n> Site summary\n'), 'llms.txt quotes the home');
  assert.ok(
    !llms.includes('## Documentation index'),
    'llms.txt has no documentation index without a /docs section',
  );
});

test('a single nested page named docs is not taken for the docs section', () => {
  const b = buildCleanSite('root-page-one-docs', {
    files: oneNestedDocs,
    extraConfig: llmsConfig,
  });
  const llms = b.publicFile('llms.txt');
  assert.ok(
    !llms.includes('## Documentation index'),
    'llms.txt has no documentation index without a /docs section',
  );
  assert.ok(
    !llms.includes('guides/docs/sub'),
    'llms.txt does not index the nested docs section as the docs section',
  );
});

// Doc-rooted, bilingual, with the French docs landing left to Hugo's
// auto-created section (no _index.fr.md): its outputs come from the cascade.
const docRootedFiles = {
  ...docRootedHomes(),
  'content/docs/_index.md':
    '---\ntitle: Docs\ndescription: Docs summary\n---\nDocs landing\n',
  'content/docs/install.md': '---\ntitle: Install\n---\nLeaf\n',
  'content/docs/install.fr.md': '---\ntitle: Installation\n---\nFeuille\n',
};
const landingOutputs = `cascade:
  - target: { path: /docs }
    outputs: [HTML, RSS, markdown, LLMS]
`;

const buildDocRooted = (name, args = [], extraConfig = '') =>
  buildCleanSite(name, {
    files: docRootedFiles,
    extraConfig: docRootedConfig + llmsConfig + landingOutputs + extraConfig,
    env: { HUGO_PARAMS_TD_CHROME: 'shared' },
    args,
  });

test('an auto-created docs landing is the root page of its language', () => {
  const b = buildDocRooted(
    'root-page-auto-landing',
    [],
    'defaultContentLanguageInSubdir: true\n',
  );
  assert.ok(
    /class="td-navbar/.test(b.publicFile('en/index.html')),
    'default language under its subdirectory keeps its own root page as donor',
  );
  assert.deepEqual(
    describedbyLinks(b.publicFile('en/install/index.html')),
    ['<link rel="describedby" href="https://example.org/en/llms.txt">'],
    'default-language page head links its subdirectory llms.txt as describedby, once',
  );
  assert.ok(
    b
      .publicFile('fr/llms.txt')
      .startsWith('# root-page-auto-landing fixture\n'),
    'fr publishes llms.txt from the cascade outputs of its auto-created landing',
  );
  assert.deepEqual(
    describedbyLinks(b.publicFile('fr/installation/index.html')),
    ['<link rel="describedby" href="https://example.org/fr/llms.txt">'],
    'fr page head links the fr llms.txt as describedby, once',
  );
  assert.ok(
    /class="td-navbar/.test(b.publicFile('fr/index.html')),
    'fr auto-created landing is the chrome donor',
  );
});

test('a baseURL subpath moves every root-page URL together', () => {
  const b = buildDocRooted('root-page-subpath', [
    '--baseURL',
    'https://example.org/sub/',
  ]);
  assert.deepEqual(
    describedbyLinks(b.publicFile('install/index.html')),
    ['<link rel="describedby" href="https://example.org/sub/llms.txt">'],
    'page head links the subpath llms.txt as describedby, once',
  );
  assert.ok(
    b
      .publicFile('llms.txt')
      .includes('- [Home page](https://example.org/sub/index.md)'),
    'llms.txt links the root Markdown version under the subpath',
  );
  assert.ok(
    /data-chrome-donor="\/sub\/" data-chrome-region="navbar"/.test(
      b.publicFile('install/index.html'),
    ),
    'inner page names the subpath root as chrome donor',
  );
  assert.ok(
    /class="td-navbar/.test(b.publicFile('index.html')),
    'root page under the subpath is the chrome donor',
  );
});
