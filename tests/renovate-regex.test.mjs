// The Renovate custom manager's matchString must extract exactly the
// annotated pin's version: nothing on decoy shapes (comments, blank lines),
// and never a nearby number (path segments, prose versions). A mis-extraction
// is silent: Renovate "bumps" the wrong span while the real pin goes stale
// and every other check stays green. Fixtures reproduce the shapes from the
// 2026-08-09 adversarial review.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

const config = JSON.parse(
  fs.readFileSync(path.join(repoRoot, 'renovate.json'), 'utf8'),
);
const manager = config.customManagers?.[0];
const matchString = manager?.matchStrings?.[0];
assert.ok(matchString, 'renovate.json declares a customManager matchString');

// Renovate runs matchStrings with the ECMAScript flavor (RE2 subset) over the
// whole file; global matchAll mirrors that.
const re = new RegExp(matchString, 'g');

const extractions = [
  {
    name: 'YAML pin (the Mermaid annotation this repo ships)',
    text: '  mermaid:\n    # renovate: datasource=npm depName=mermaid\n    version: 11.16.1\n',
    expect: { datasource: 'npm', depName: 'mermaid', currentValue: '11.16.1' },
  },
  {
    name: 'quoted YAML pin',
    text: '# renovate: datasource=npm depName=mermaid\nversion: "11.16.1"\n',
    expect: { datasource: 'npm', depName: 'mermaid', currentValue: '11.16.1' },
  },
  {
    name: 'prerelease pin is captured whole, suffix included',
    text: '# renovate: datasource=npm depName=mermaid\nversion: 11.16.1-rc.1\n',
    expect: {
      datasource: 'npm',
      depName: 'mermaid',
      currentValue: '11.16.1-rc.1',
    },
  },
  {
    name: 'script-tag pin (the markmap/KaTeX shape)',
    text: '{{/* renovate: datasource=npm depName=markmap-autoloader */}}\n<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.18.12"></script>\n',
    expect: {
      datasource: 'npm',
      depName: 'markmap-autoloader',
      currentValue: '0.18.12',
    },
  },
  {
    name: 'scoped-package script-tag pin',
    text: '{{/* renovate: datasource=npm depName=@docsearch/js */}}\n<script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3.8.2"\n',
    expect: {
      datasource: 'npm',
      depName: '@docsearch/js',
      currentValue: '3.8.2',
    },
  },
  {
    name: 'version-decoy path segment before @version is skipped',
    text: '<!-- renovate: datasource=npm depName=markmap-autoloader -->\n<script src="https://cdn.jsdelivr.net/npm/v1.0/markmap-autoloader@0.18.12"></script>\n',
    expect: {
      datasource: 'npm',
      depName: 'markmap-autoloader',
      currentValue: '0.18.12',
    },
  },
];

const nonMatches = [
  {
    name: 'intermediate comment line (version mention is not the pin)',
    text: '    # renovate: datasource=npm depName=mermaid\n    # note: was 9.0.0 before migration\n    version: 11.16.1\n',
  },
  {
    name: 'blank line between annotation and pin',
    text: '# renovate: datasource=npm depName=mermaid\n\nversion: 11.16.1\n',
  },
  {
    name: 'unanchored number near the annotation',
    text: '# renovate: datasource=npm depName=foo\nsomething 1.2 nearby\n',
  },
  {
    name: 'version-like prose on the next line',
    text: '# renovate: datasource=npm depName=foo\n# supports node 20.11.1 runtimes\n',
  },
  {
    name: 'unannotated CDN script line',
    text: '<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.18.12"></script>\n',
  },
];

for (const { name, text, expect } of extractions) {
  test(`extracts: ${name}`, () => {
    const matches = [...text.matchAll(re)];
    assert.equal(matches.length, 1, 'exactly one dependency is extracted');
    const { datasource, depName, currentValue } = matches[0].groups;
    assert.deepEqual({ datasource, depName, currentValue }, expect);
  });
}

for (const { name, text } of nonMatches) {
  test(`ignores: ${name}`, () => {
    const matches = [...text.matchAll(re)];
    assert.equal(matches.length, 0, 'decoy shape extracts nothing');
  });
}

test('theme/hugo.yaml yields exactly the Mermaid pin', () => {
  const text = fs.readFileSync(path.join(repoRoot, 'theme/hugo.yaml'), 'utf8');
  const matches = [...text.matchAll(re)];
  assert.equal(matches.length, 1, 'exactly one annotated pin in the file');
  assert.equal(matches[0].groups.depName, 'mermaid');
  assert.match(
    matches[0].groups.currentValue,
    /^\d+\.\d+\.\d+$/,
    'extracted value is an exact version',
  );
});
