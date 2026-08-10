// The Renovate custom manager's matchStrings must extract exactly the
// annotated pins' versions: nothing on decoy shapes (comments, blank lines,
// version-like prose) and never a nearby number (URL path segments, other
// attributes). A mis-extraction is silent: Renovate "bumps" the wrong span
// while the real pin goes stale and every other check stays green. Fixtures
// reproduce the shapes from the 2026-08-09 adversarial reviews (rounds 2-3).

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

const config = JSON.parse(
  fs.readFileSync(path.join(repoRoot, 'renovate.json'), 'utf8'),
);

const managers = config.customManagers ?? [];
const matchStrings = managers.flatMap((m) => m.matchStrings ?? []);
const filePatterns = managers.flatMap((m) => m.managerFilePatterns ?? []);

test('config declares the expected manager and pattern counts', () => {
  // Growing either list is fine, but must come through this file: every
  // pattern below runs against every fixture, so an unfixtured addition
  // fails here instead of shipping untested.
  assert.equal(managers.length, 1, 'one custom manager');
  assert.equal(matchStrings.length, 2, 'a YAML and an HTML/URL matchString');
});

test('matchStrings stay within RE2 (no lookaround, no backreferences)', () => {
  // Renovate compiles matchStrings with RE2; V8 (this test) accepts more.
  // A pattern that only V8 accepts would pass every fixture here while the
  // live app rejects it.
  for (const s of matchStrings) {
    assert.doesNotMatch(s, /\(\?<?[=!]/, 'no lookaround');
    assert.doesNotMatch(s, /\\[1-9]/, 'no backreferences');
  }
});

// Renovate runs each matchString with the g flag over the whole file
// (strategies.ts: regEx(matchString, 'g'); matchStrings are not templated).
const extractAll = (text) =>
  matchStrings.flatMap((s) => [...text.matchAll(new RegExp(s, 'g'))]);

// Mirrors Renovate's auto-replace: replaceString is the whole regex match;
// the FIRST textual occurrence of currentValue inside it is replaced, then
// re-extraction must confirm the new value (auto-replace.ts). A fixture whose
// captured value also occurs earlier in its match would fail this round-trip.
function assertBumpRoundTrip(text, match) {
  const replaceString = match[0];
  const newValue = '999.999.999';
  const newString = replaceString.replace(match.groups.currentValue, newValue);
  const updated = text.replace(replaceString, newString);
  const re = extractAll(updated);
  assert.equal(re.length, 1, 'bumped text still extracts one dependency');
  assert.equal(
    re[0].groups.currentValue,
    newValue,
    'the bump landed on the captured pin',
  );
}

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
    name: 'prerelease pin is captured whole',
    text: '# renovate: datasource=npm depName=mermaid\nversion: 11.16.1-rc.1\n',
    expect: {
      datasource: 'npm',
      depName: 'mermaid',
      currentValue: '11.16.1-rc.1',
    },
  },
  {
    name: 'hyphenated prerelease is captured whole',
    text: '# renovate: datasource=npm depName=foo\nversion: 1.2.3-alpha-beta.1\n',
    expect: {
      datasource: 'npm',
      depName: 'foo',
      currentValue: '1.2.3-alpha-beta.1',
    },
  },
  {
    name: 'build metadata is captured whole',
    text: '# renovate: datasource=npm depName=foo\nversion: 1.2.3+build.7\n',
    expect: {
      datasource: 'npm',
      depName: 'foo',
      currentValue: '1.2.3+build.7',
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
    name: 'version-decoy URL path segment before @version is skipped',
    text: '<!-- renovate: datasource=npm depName=markmap-autoloader -->\n<script src="https://cdn.jsdelivr.net/npm/v1.0/markmap-autoloader@0.18.12"></script>\n',
    expect: {
      datasource: 'npm',
      depName: 'markmap-autoloader',
      currentValue: '0.18.12',
    },
  },
  {
    name: '@version-decoy attribute before the URL is skipped',
    text: '<!-- renovate: datasource=npm depName=foo -->\n<script data-owner="ops@1.2.3" src="https://cdn.jsdelivr.net/npm/foo@0.18.12"></script>\n',
    expect: { datasource: 'npm', depName: 'foo', currentValue: '0.18.12' },
  },
];

const nonMatches = [
  {
    name: 'intermediate comment line (annotation must sit directly above the pin)',
    text: '    # renovate: datasource=npm depName=mermaid\n    # note: was 9.0.0 before migration\n    version: 11.16.1\n',
  },
  {
    name: 'intermediate comment containing "version:" is not the pin',
    text: '# renovate: datasource=npm depName=mermaid\n# previous version: 9.0.0\nversion: 11.16.1\n',
  },
  {
    name: 'blank line between annotation and pin',
    text: '# renovate: datasource=npm depName=mermaid\n\nversion: 11.16.1\n',
  },
  {
    name: 'a key merely ending in "version:" is not a pin',
    text: '# renovate: datasource=npm depName=foo\nconversion: 1.2.3\n',
  },
  {
    name: 'version-like prose on the next line',
    text: '# renovate: datasource=npm depName=foo\n# supports node 20.11.1 runtimes\n',
  },
  {
    name: 'digits trailing on the annotation line disable the annotation',
    text: '<!-- renovate: datasource=npm depName=foo observed=1.2.3 -->\n<script src="https://cdn.jsdelivr.net/npm/foo@0.18.12"></script>\n',
  },
  {
    name: 'four-part version is not a pin',
    text: '# renovate: datasource=npm depName=foo\nversion: 1.2.3.4\n',
  },
  {
    name: 'semver with trailing junk is not a pin',
    text: '# renovate: datasource=npm depName=foo\nversion: 1.2.3foo\n',
  },
  {
    name: 'two-part version is not a pin (exact X.Y.Z policy)',
    text: '# renovate: datasource=npm depName=foo\nversion: 1.2\n',
  },
  {
    name: 'unanchored number near the annotation',
    text: '# renovate: datasource=npm depName=foo\nsomething 1.2.3 nearby\n',
  },
  {
    name: 'unannotated CDN script line',
    text: '<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.18.12"></script>\n',
  },
];

for (const { name, text, expect } of extractions) {
  test(`extracts: ${name}`, () => {
    const matches = extractAll(text);
    assert.equal(matches.length, 1, 'exactly one dependency is extracted');
    const { datasource, depName, currentValue } = matches[0].groups;
    assert.deepEqual({ datasource, depName, currentValue }, expect);
    assertBumpRoundTrip(text, matches[0]);
  });
}

for (const { name, text } of nonMatches) {
  test(`ignores: ${name}`, () => {
    assert.equal(extractAll(text).length, 0, 'decoy shape extracts nothing');
  });
}

test('two annotated pins in one file both extract (KaTeX growth path)', () => {
  const text =
    'params:\n  mermaid:\n    # renovate: datasource=npm depName=mermaid\n    version: 11.16.1\n  katex:\n    # renovate: datasource=npm depName=katex\n    version: 0.16.28\n';
  const got = extractAll(text)
    .map((m) => `${m.groups.depName}@${m.groups.currentValue}`)
    .sort();
  assert.deepEqual(got, ['katex@0.16.28', 'mermaid@11.16.1']);
});

// managerFilePatterns declare regex form (slash-delimited).
const pathRegexes = filePatterns.map((p) => {
  assert.match(p, /^\/.*\/$/, 'pattern is slash-delimited regex form');
  return new RegExp(p.slice(1, -1));
});
const matchesSomePattern = (file) => pathRegexes.some((re) => re.test(file));

test('managerFilePatterns cover the pin files and nothing surprising', () => {
  for (const file of [
    'theme/hugo.yaml',
    'theme/layouts/_partials/scripts.html',
    'theme/layouts/_partials/scripts/katex.html',
  ]) {
    assert.ok(matchesSomePattern(file), `covers ${file}`);
  }
  for (const file of [
    'docsy.dev/hugo.yaml',
    'theme/hugo.yml',
    'renovate.json',
    'package.json',
  ]) {
    assert.ok(!matchesSomePattern(file), `excludes ${file}`);
  }
});

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

test('every live annotation in covered files extracts (no orphans)', () => {
  const files = [...walk(path.join(repoRoot, 'theme'))]
    .map((p) => path.relative(repoRoot, p))
    .filter(matchesSomePattern);
  assert.ok(files.includes('theme/hugo.yaml'), 'live file set is non-empty');
  for (const file of files) {
    const text = fs.readFileSync(path.join(repoRoot, file), 'utf8');
    const annotations = text.match(/renovate:\s+datasource=/g) ?? [];
    const extracted = extractAll(text);
    assert.equal(
      extracted.length,
      annotations.length,
      `${file}: every annotation yields exactly one extraction`,
    );
  }
});

test('the extracted Mermaid version equals the YAML pin', () => {
  const text = fs.readFileSync(path.join(repoRoot, 'theme/hugo.yaml'), 'utf8');
  const mermaid = extractAll(text).filter(
    (m) => m.groups.depName === 'mermaid',
  );
  assert.equal(mermaid.length, 1, 'exactly one Mermaid pin');
  assert.equal(
    mermaid[0].groups.currentValue,
    parse(text)?.params?.mermaid?.version,
    'Renovate and Hugo read the same version',
  );
});
