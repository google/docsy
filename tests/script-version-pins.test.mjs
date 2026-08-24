// Docsy's default versions of CDN-loaded script dependencies (Mermaid,
// KaTeX, markmap-autoloader) must stay exact, pinned X.Y.Z values (see
// maintainer notes, "Default script-dependency versions"). Fast and offline.
//
// This is the only guard against a regression to a floating version like
// `latest`: dependency scanners can't see CDN URLs embedded in an HTML
// partial. The file is parsed as YAML, not regex-matched: decoy key
// shapes have fooled regex extraction while Hugo resolved a different
// value.

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

const SEMVER = /^\d+\.\d+\.\d+$/;

const PINS = [
  {
    param: 'mermaid',
    partial: 'theme/layouts/_partials/scripts/mermaid.html',
    cdnPackage: 'mermaid',
  },
  {
    param: 'katex',
    partial: 'theme/layouts/_partials/scripts/katex.html',
    cdnPackage: 'katex',
  },
  {
    param: 'markmap',
    partial: 'theme/layouts/_partials/scripts.html',
    cdnPackage: 'markmap-autoloader',
  },
];

const themeConfig = parse(
  fs.readFileSync(path.join(repoRoot, 'theme/hugo.yaml'), 'utf8'),
);

for (const { param, partial, cdnPackage } of PINS) {
  test(`theme/hugo.yaml pins an exact ${cdnPackage} version`, () => {
    const version = themeConfig?.params?.[param]?.version;
    assert.ok(
      version !== undefined,
      `params.${param}.version is declared in theme/hugo.yaml`,
    );
    assert.equal(
      typeof version,
      'string',
      `params.${param}.version is a string`,
    );
    // Prerelease pins (X.Y.Z-rc.N) are deliberately rejected: the theme
    // default stays on stable releases. Sites can still pin one; they get the
    // suppressible floating-version warning.
    assert.match(
      version,
      SEMVER,
      `params.${param}.version is X.Y.Z, not a floating version like \`latest\``,
    );
  });

  // The pin's other home-in-waiting: a fallback or hardcoded version
  // reintroduced in the partial would ship a version the YAML assertion above
  // never sees.
  test(`the ${cdnPackage} partial takes its version from the config param alone`, () => {
    // Template comments are stripped first: an inert `{{/* ... */}}` line
    // must satisfy no assertion (adversarial round 2's decoy-comment
    // false-clean); with real URLs mutated away, the urlLines non-empty
    // assertion below goes red.
    const text = fs
      .readFileSync(path.join(repoRoot, partial), 'utf8')
      .replace(/\{\{-?\/\*[\s\S]*?\*\/\s*-?\}\}/g, '');
    // The read is anchored at both ends: the action closes right after
    // TrimSpace, so nothing can wrap the param or append a pipeline stage
    // (a call-form or multiline `default` included) without breaking this
    // match (adversarial rounds 1-2).
    assert.match(
      text,
      new RegExp(
        String.raw`\$version := \.Site\.Params\.${param}\.version \| string \| strings\.TrimSpace -\}\}`,
      ),
      `the partial reads params.${param}.version bare, as the whole action`,
    );
    // A second `:=` or a `=` reassignment could replace the param-sourced
    // value after the anchored read above (adversarial round 1).
    const versionAssignments = text.match(/\$version\s*:?=/g) ?? [];
    assert.equal(
      versionAssignments.length,
      1,
      '$version is assigned exactly once',
    );
    // Both `| default` (pipe form) and `default "x" .Site...` (call form),
    // scoped to version-bearing lines: scripts.html also hosts unrelated,
    // legitimate `default` calls (docsearch settings). The argument shape
    // keeps prose mentions of "default" out of scope.
    for (const line of text.split('\n').filter((l) => /version/i.test(l))) {
      assert.doesNotMatch(
        line,
        /\bdefault\s+["'`([\d$.]/,
        'the version read has no default fallback, pipe or call form',
      );
    }
    // The CDN URL interpolates the configured version: `@%s` in printf-built
    // URLs (Mermaid, KaTeX), `@{{ $version }}` in a literal src (markmap).
    // Requiring $version on every URL-bearing line closes the false-clean
    // where a printf keeps `@%s` but fills it with a literal (adversarial
    // round 1).
    const urlLines = text
      .split('\n')
      .filter((l) => l.includes(`${cdnPackage}@`));
    assert.ok(urlLines.length > 0, 'the partial builds a CDN URL');
    for (const line of urlLines) {
      assert.match(
        line,
        new RegExp(String.raw`${cdnPackage}@(%s|\{\{ \$version \}\})`),
        'the CDN URL interpolates the configured version',
      );
      assert.doesNotMatch(
        line,
        new RegExp(String.raw`${cdnPackage}@(?!%s|\{\{ \$version \}\})`),
        'CDN URLs carry no hardcoded version',
      );
      assert.ok(
        line.includes('$version'),
        'the CDN URL line carries $version itself',
      );
    }
  });
}
