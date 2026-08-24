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

// For each pin: the params key in theme/hugo.yaml, the partial that reads
// it, and the package name as it appears in the partial's CDN URL.
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
    const text = fs.readFileSync(path.join(repoRoot, partial), 'utf8');
    // The read is anchored at the expression's front: nothing can wrap the
    // param (e.g. a call-form `default`) without breaking this match.
    assert.match(
      text,
      new RegExp(
        String.raw`\$version := \.Site\.Params\.${param}\.version \| string \| strings\.TrimSpace`,
      ),
      `the partial reads params.${param}.version bare, first in its pipeline`,
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
    assert.match(
      text,
      new RegExp(String.raw`${cdnPackage}@(%s|\{\{ \$version \}\})`),
      'the CDN URL interpolates the configured version',
    );
    assert.doesNotMatch(
      text,
      new RegExp(String.raw`${cdnPackage}@(?!%s|\{\{ \$version \}\})`),
      'CDN URLs carry no hardcoded version',
    );
  });
}
