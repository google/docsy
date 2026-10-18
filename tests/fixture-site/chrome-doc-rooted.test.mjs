// Cases: CCR-20 (doc-rooted donor page). See the CCR case registry in tests/fixture-site/README.md.
// On a doc-rooted site (docs section published at the site root, home
// link-only; recipe: docsy.dev/content/en/docs/content/adding-content.md §
// Doc-rooted sites) the navbar and footer donor page is the one publishing
// each language's root, not Hugo's home, which renders nothing. Pins that the
// donor page renders exactly once per language and that the placeholders name
// its URL (docsy/docsy#2875 companion fix).

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSite } from './lib/build-site.mjs';

const frontMatter = (fields) =>
  `---\n${Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')}\n---\n`;
const linkOnlyHome = (fields) =>
  frontMatter({ ...fields, build: '{ render: link }' });

const files = {
  'content/_index.md': linkOnlyHome({ title: 'Home' }),
  'content/_index.fr.md': linkOnlyHome({ title: 'Accueil' }),
  'content/docs/_index.md': frontMatter({ title: 'Docs' }) + 'Docs landing\n',
  'content/docs/_index.fr.md':
    frontMatter({ title: 'Documentation' }) + 'Accueil docs\n',
  'content/docs/install.md': frontMatter({ title: 'Install' }) + 'Leaf\n',
  'content/docs/install.fr.md':
    frontMatter({ title: 'Installation' }) + 'Feuille\n',
};

const config = `permalinks:
  page:
    docs: /:sections[1:]/:slug/
  section:
    docs: /:sections[1:]
languages:
  en: { weight: 1, label: English }
  fr: { weight: 2, label: Français }
outputs:
  section: [HTML, RSS, print, markdown]
`;

const has = {
  navbar: (h) => /class="td-navbar/.test(h),
  footer: (h) => /class="td-footer/.test(h),
  placeholder: (h, region, donor) =>
    new RegExp(
      `class="td-chrome-placeholder" data-chrome-donor="${donor}" data-chrome-region="${region}"`,
    ).test(h),
};

test('shared mode keeps the navbar and footer on each language root of a doc-rooted site', () => {
  const r = buildSite('ccr-doc-rooted-donor', {
    files,
    extraConfig: config,
    env: { HUGO_PARAMS_TD_CHROME: 'shared' },
    args: ['--printPathWarnings'],
  });
  assert.equal(r.status, 0, `hugo build succeeds:\n${r.stdout}${r.stderr}`);
  assert.ok(
    !/WARN/.test(r.stdout + r.stderr),
    `build is warning-free:\n${r.stdout}${r.stderr}`,
  );

  for (const [root, donor] of [
    ['index.html', '/'],
    ['fr/index.html', '/fr/'],
  ]) {
    const h = r.publicFile(root);
    assert.ok(has.navbar(h), `navbar kept on the root page ${root}`);
    assert.ok(has.footer(h), `footer kept on the root page ${root}`);
    assert.ok(
      !has.placeholder(h, 'navbar', donor) &&
        !has.placeholder(h, 'footer', donor),
      `root page ${root} carries no chrome placeholder`,
    );
  }

  // The donor is the root page's HTML render; its print render is a page like
  // any other.
  for (const [inner, donor] of [
    ['install/index.html', '/'],
    ['fr/installation/index.html', '/fr/'],
    ['_print/index.html', '/'],
    ['fr/_print/index.html', '/fr/'],
  ]) {
    const h = r.publicFile(inner);
    assert.ok(!has.navbar(h), `navbar dropped on ${inner}`);
    assert.ok(!has.footer(h), `footer dropped on ${inner}`);
    assert.ok(
      has.placeholder(h, 'navbar', donor),
      `${inner} navbar placeholder names the root ${donor} as donor page`,
    );
    assert.ok(
      has.placeholder(h, 'footer', donor),
      `${inner} footer placeholder names the root ${donor} as donor page`,
    );
  }
});
