// Regression coverage for #2753: the theme toggler's accessible name is
// localized and carries the mode, and the visually hidden #bd-theme-text
// sentinel that dark-mode.js keys on is present: without it the label
// silently never updates on scheme switch (the original bug).

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { buildSite } from './lib/build-site.mjs';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

const site = buildSite('theme-toggler', {
  files: {
    'content/_index.md': '---\ntitle: Home\n---\nHome body\n',
    'content/_index.fr.md': '---\ntitle: Accueil\n---\nAccueil\n',
  },
  extraConfig: `defaultContentLanguage: en
languages:
  en:
    weight: 1
  fr:
    weight: 2
params:
  ui:
    showLightDarkModeMenu: true
`,
});

// Full label per locale: "TOGGLE (AUTO)", from the locale's i18n values.
const cases = [
  ['index.html', 'Toggle theme', 'Toggle theme (Auto)'],
  ['fr/index.html', 'Changer de thème', 'Changer de thème (Automatique)'],
];

for (const [page, toggleText, label] of cases) {
  test(`toggler accessible name is localized on ${page}`, () => {
    assert.equal(site.status, 0, `fixture build succeeds:\n${site.stderr}`);
    const doc = new JSDOM(site.publicFile(page)).window.document;

    const button = doc.querySelector('button#bd-theme');
    assert.ok(button, 'toggler button is present');
    assert.equal(button.getAttribute('aria-label'), label, 'aria-label');
    assert.equal(button.getAttribute('title'), label, 'title');

    // The sentinel span dark-mode.js derives label updates from.
    const sentinel = button.querySelector('span#bd-theme-text');
    assert.ok(sentinel, 'label-update sentinel span is present');
    assert.ok(
      sentinel.classList.contains('visually-hidden'),
      'sentinel is visually hidden',
    );
    assert.equal(sentinel.textContent.trim(), toggleText, 'sentinel text');
  });
}

test('every bundled locale defines ui_theme_toggle', () => {
  const i18nDir = path.join(repoRoot, 'theme', 'i18n');
  const locales = readdirSync(i18nDir).filter((f) => f.endsWith('.yaml'));
  assert.ok(locales.length >= 31, 'locale catalog is present');
  for (const f of locales) {
    const content = readFileSync(path.join(i18nDir, f), 'utf8');
    assert.match(
      content,
      /^ui_theme_toggle: \S/m,
      `${f} defines ui_theme_toggle`,
    );
  }
});
