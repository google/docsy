// Pins how the theme finds a language's root page (_partials/td/root-page.html)
// and the docs section (all.llms.txt's documentation index): by absolute
// content path, never by page name. A relative `GetPage "docs"` falls back to
// Hugo's by-filename lookup when there is no `/docs` section, which fails the
// build on two pages named docs and silently picks the one page otherwise
// (docsy/docsy#2875). Design record: docsy.dev/content/en/project/design/root-page.md

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

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

const describedbyLinks = (html) =>
  html.split('</head>')[0].match(/<link rel="describedby" [^>]*>/g) ?? [];

test('a site with no /docs section and two pages named docs builds, rooted at the home', () => {
  const b = buildSite('root-page-two-docs', {
    files: twoNestedDocs,
    extraConfig: llmsConfig,
  });
  assert.equal(
    b.status,
    0,
    `fixture hugo build succeeds:\n${b.stdout}${b.stderr}`,
  );
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
  const b = buildSite('root-page-one-docs', {
    files: oneNestedDocs,
    extraConfig: llmsConfig,
  });
  assert.equal(
    b.status,
    0,
    `fixture hugo build succeeds:\n${b.stdout}${b.stderr}`,
  );
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
