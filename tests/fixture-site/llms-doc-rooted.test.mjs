// Doc-rooted sites (docs section published at the site root, home link-only;
// recipe: docsy.dev/content/en/docs/content/adding-content.md § Doc-rooted
// sites) have no rendered home, so llms.txt must come from the page that
// publishes the root. Pins the llms.txt publication and content, the
// directive, the Markdown alternate's llms.txt link, and the root URL the theme
// links as home; plus the two consequences the layout move has for every site:
// the Markdown link is omitted when no llms.txt is published, and a site's own
// home-specific llms.txt layout keeps precedence. See docsy/docsy#2834.

import test from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const frontMatter = (fields) =>
  `---\n${Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')}\n---\n`;
const linkOnlyHome = (fields) =>
  frontMatter({ ...fields, build: '{ render: link }' });

// en: only the link-only home carries a description, so llms.txt falls back
// to it; fr: the landing page's own description wins.
const docRootedFiles = (docsOutputs = '[HTML, RSS, markdown, LLMS]') => ({
  'content/_index.md': linkOnlyHome({
    title: 'Home',
    description: 'Fixture docs, doc-rooted',
  }),
  'content/_index.fr.md': linkOnlyHome({ title: 'Accueil' }),
  'content/docs/_index.md':
    frontMatter({ title: 'Docs', outputs: docsOutputs }) + 'Docs landing\n',
  'content/docs/_index.fr.md':
    frontMatter({
      title: 'Documentation',
      description: 'Documentation en français',
      outputs: docsOutputs,
    }) + 'Accueil docs\n',
  'content/docs/guide/_index.md': frontMatter({ title: 'Guide' }) + 'Guide\n',
  'content/docs/install.md': frontMatter({ title: 'Install' }) + 'Leaf page\n',
});

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
  en: { weight: 1, label: English }
  fr: { weight: 2, label: Français }
`;

function build(name, files, extraConfig) {
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

// The enabled fixture is read-only across its tests: build it once.
let docRootedBuild;
const docRooted = () =>
  (docRootedBuild ??= build(
    'llms-doc-rooted',
    docRootedFiles(),
    docRootedConfig,
  ));

test('doc-rooted site publishes llms.txt at each language root', () => {
  const b = docRooted();
  const en = b.publicFile('llms.txt');
  assert.ok(
    en.startsWith('# Docsy fixture site'),
    'en llms.txt opens with the site title',
  );
  assert.ok(
    en.includes('- [Home page](https://example.org/index.md)'),
    'en llms.txt links the root Markdown alternate as the home page',
  );
  assert.ok(
    en.includes('- [Guide](https://example.org/guide/index.md)'),
    'en llms.txt lists the docs subsection at its root-level Markdown alternate',
  );
  const fr = b.publicFile('fr/llms.txt');
  assert.ok(
    fr.includes('- [Home page](https://example.org/fr/index.md)'),
    'fr llms.txt links the fr root Markdown alternate as the home page',
  );
  for (const [lang, content] of [
    ['en', en],
    ['fr', fr],
  ]) {
    assert.ok(
      content.includes('- [English](https://example.org/index.md)') &&
        content.includes('- [Français](https://example.org/fr/index.md)'),
      `${lang} llms.txt lists both locales by their root Markdown alternate`,
    );
  }
});

test('doc-rooted llms.txt description comes from the root page, else the home', () => {
  const b = docRooted();
  assert.ok(
    b.publicFile('llms.txt').includes('\n> Fixture docs, doc-rooted\n'),
    'en llms.txt quotes the link-only home description',
  );
  assert.ok(
    b.publicFile('fr/llms.txt').includes('\n> Documentation en français\n'),
    'fr llms.txt quotes the landing page description',
  );
});

test('doc-rooted pages carry the directive, pointing at their language llms.txt', () => {
  const b = docRooted();
  for (const [page, llms] of [
    ['index.html', '/llms.txt'],
    ['install/index.html', '/llms.txt'],
    ['fr/index.html', '/fr/llms.txt'],
  ]) {
    assert.ok(
      b
        .publicFile(page)
        .includes(`For AI agents: the site's llms.txt is at ${llms}`),
      `${page} directive points at ${llms}`,
    );
  }
});

test('doc-rooted Markdown alternates link their language llms.txt', () => {
  const b = docRooted();
  assert.ok(
    b.publicFile('index.md').includes('Site [llms.txt](/llms.txt)'),
    'root Markdown alternate links /llms.txt',
  );
  assert.ok(
    b.publicFile('fr/index.md').includes('Site [llms.txt](/fr/llms.txt)'),
    'fr root Markdown alternate links /fr/llms.txt',
  );
});

// The home page's permalink stays the language root: publishing llms.txt
// from the home page as its only output would make it /llms.txt instead.
test('doc-rooted theme home links point at the language root', () => {
  const b = docRooted();
  for (const [page, root] of [
    ['install/index.html', '/'],
    ['fr/index.html', '/fr/'],
  ]) {
    assert.ok(
      b.publicFile(page).includes(`class="navbar-brand" href="${root}"`),
      `${page} navbar brand links ${root}`,
    );
  }
});

// The reporter's shape: LLMS configured for the home, which publishes nothing,
// and not for the landing page.
test('doc-rooted site whose landing page lacks LLMS publishes no llms.txt, directive, or link', () => {
  const b = build(
    'llms-doc-rooted-off',
    docRootedFiles('[HTML, RSS, markdown]'),
    docRootedConfig,
  );
  for (const llms of ['llms.txt', 'fr/llms.txt']) {
    assert.throws(() => b.publicFile(llms), `${llms} stays unpublished`);
  }
  const html = b.publicFile('install/index.html');
  assert.ok(html.includes('td-navbar'), 'page renders');
  assert.ok(!html.includes('For AI agents'), 'page omits the directive');
  assert.ok(
    !b.publicFile('index.md').includes('Site [llms.txt]'),
    'root Markdown alternate omits the llms.txt link',
  );
});

test('site without llms.txt omits the Markdown llms.txt link', () => {
  const b = build(
    'llms-md-link-off',
    {
      'content/_index.md': frontMatter({ title: 'Home' }) + 'Home body\n',
      'content/docs/install.md':
        frontMatter({ title: 'Install' }) + 'Leaf page\n',
    },
    'outputs:\n  home: [HTML, markdown]\n  page: [HTML, markdown]\n',
  );
  const md = b.publicFile('docs/install/index.md');
  assert.ok(md.startsWith('# Install'), 'Markdown alternate renders');
  assert.ok(
    !md.includes('Site [llms.txt]'),
    'Markdown alternate omits the llms.txt link',
  );
});

// The theme's layout moved from index.llms.txt to all.llms.txt; a site's own
// home-specific override keeps precedence for the home page.
test("a site's layouts/index.llms.txt override still renders the home index", () => {
  const b = build(
    'llms-home-override',
    {
      'content/_index.md': frontMatter({ title: 'Home' }) + 'Home body\n',
      'content/docs/install.md':
        frontMatter({ title: 'Install' }) + 'Leaf page\n',
      'layouts/index.llms.txt': 'SITE OVERRIDE for {{ .Site.Title }}\n',
    },
    'outputs:\n  home: [HTML, markdown, LLMS]\n',
  );
  assert.ok(
    b.publicFile('llms.txt').startsWith('SITE OVERRIDE for'),
    'home llms.txt renders from the site override',
  );
});
