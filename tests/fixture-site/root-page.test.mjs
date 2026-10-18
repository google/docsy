// The root-page lookup (_partials/td/root-page.html, all.llms.txt) on the
// shapes that defeat a by-name lookup (docsy/docsy#2875) and on the recipe's
// multilingual and subpath variants. Case inventory:
// docsy.dev/content/en/project/design/root-page.md

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCleanSite } from './lib/build-site.mjs';
import {
  chrome,
  describedbyLinks,
  docRootedConfig,
  docRootedHomes,
  frontMatter,
  llmsOutputs,
} from './lib/fixtures.mjs';

const page = (title, body = title, extra = {}) =>
  frontMatter({ title, ...extra }) + `${body}\n`;

const home = {
  'content/_index.md': page('Home', 'Home body', {
    description: 'Site summary',
  }),
  'content/guides/_index.md': page('Guides', 'Guides landing'),
};
// A nested section named docs, with a subsection of its own (what llms.txt's
// documentation index would list if it mistook it for the docs section).
const nestedDocsSection = {
  'content/guides/docs/_index.md': page('Guides docs', 'Nested'),
  'content/guides/docs/sub/_index.md': page('Sub'),
};
const oneNestedDocs = { ...home, ...nestedDocsSection };
// Plus a nested leaf named docs: two candidates, no `/docs` section.
const twoNestedDocs = {
  ...oneNestedDocs,
  'content/reference/_index.md': page('Reference'),
  'content/reference/docs.md': page('Reference docs', 'Leaf'),
};

test('a site with no /docs section and two pages named docs builds, rooted at the home', () => {
  const b = buildCleanSite('root-page-two-docs', {
    files: twoNestedDocs,
    extraConfig: llmsOutputs,
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
    'llms.txt omits the documentation index without a /docs section',
  );
});

test('a single nested page named docs is left out of the docs section lookup', () => {
  const b = buildCleanSite('root-page-one-docs', {
    files: oneNestedDocs,
    extraConfig: llmsOutputs,
  });
  const llms = b.publicFile('llms.txt');
  assert.ok(
    !llms.includes('## Documentation index'),
    'llms.txt omits the documentation index without a /docs section',
  );
  assert.ok(
    !llms.includes('guides/docs/sub'),
    'llms.txt leaves the nested docs section unindexed',
  );
});

// Doc-rooted, bilingual, with the French docs landing left to Hugo's
// auto-created section (no _index.fr.md): its outputs come from the cascade.
const docRootedFiles = {
  ...docRootedHomes(),
  'content/docs/_index.md': page('Docs', 'Docs landing', {
    description: 'Docs summary',
  }),
  'content/docs/install.md': page('Install', 'Leaf'),
  'content/docs/install.fr.md': page('Installation', 'Feuille'),
};
const landingOutputs = `cascade:
  - target: { path: /docs }
    outputs: [HTML, RSS, markdown, LLMS]
`;

const buildDocRooted = (name, args = [], extraConfig = '') =>
  buildCleanSite(name, {
    files: docRootedFiles,
    extraConfig: docRootedConfig + llmsOutputs + landingOutputs + extraConfig,
    env: { HUGO_PARAMS_TD_CHROME: 'shared' },
    args,
  });

test("an auto-created docs landing is the root page of its language; the default language's subdirectory only moves the URLs", () => {
  const b = buildDocRooted(
    'root-page-auto-landing',
    [],
    'defaultContentLanguageInSubdir: true\n',
  );
  assert.ok(
    chrome.navbar(b.publicFile('en/index.html')),
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
    chrome.navbar(b.publicFile('fr/index.html')),
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
    chrome.placeholder(b.publicFile('install/index.html'), 'navbar', '/sub/'),
    'inner page names the subpath root as chrome donor',
  );
  assert.ok(
    chrome.navbar(b.publicFile('index.html')),
    'root page under the subpath is the chrome donor',
  );
});
