// Docsy's default versions of CDN-loaded script dependencies (Mermaid,
// KaTeX, markmap-autoloader, Redoc) must stay exact, pinned X.Y.Z values
// (see maintainer notes, "Default script-dependency versions"). Fast and
// offline.
//
// The YAML assertions are the canary proper: a pin regressing to a value
// like `latest` goes red here and nowhere else (dependency scanners can't
// see these values, and Renovate would silently stop matching). The
// template-side assertions are a lint against carelessly reintroducing a
// fallback or hardcoded version, not a boundary against deliberate
// evasion: code review owns that.

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
    template: 'theme/layouts/_partials/scripts/mermaid.html',
    cdnPackage: 'mermaid',
    // How the template interpolates $version into its CDN URL: a printf
    // format (%s) or a literal src ({{ $version }}). Row-specific so a
    // literal-src template can't pass with an inert %s.
    urlForm: '%s',
  },
  {
    param: 'katex',
    template: 'theme/layouts/_partials/scripts/katex.html',
    cdnPackage: 'katex',
    urlForm: '%s',
  },
  {
    param: 'markmap',
    // The autoloader is vendored (GetRemote) since the plugin conversion; the
    // pin feeds the vendor fetch rather than a browser-facing CDN tag.
    template: 'theme/layouts/_partials/scripts/plugins/markmap.html',
    cdnPackage: 'markmap-autoloader',
    urlForm: '%s',
  },
  {
    param: 'redoc',
    template: 'theme/layouts/_shortcodes/redoc.html',
    cdnPackage: 'redoc',
    urlForm: '{{ $version }}',
  },
];

const themeConfig = parse(
  fs.readFileSync(path.join(repoRoot, 'theme/hugo.yaml'), 'utf8'),
);

for (const { param, template, cdnPackage, urlForm } of PINS) {
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
    // suppressible non-exact-version warning.
    assert.match(
      version,
      SEMVER,
      `params.${param}.version is X.Y.Z, not a value like \`latest\``,
    );
  });

  test(`the ${cdnPackage} template takes its version from the config param alone`, () => {
    const text = fs.readFileSync(path.join(repoRoot, template), 'utf8');
    assert.match(
      text,
      new RegExp(
        // Companion partials receive a { Page, Plugin } dict, hence the
        // optional .Page prefix.
        String.raw`\$version := (\.Page)?\.Site\.Params\.${param}\.version \| string \| strings\.TrimSpace`,
      ),
      `the template reads params.${param}.version bare, first in its pipeline`,
    );
    // Both `| default` (pipe form) and `default "x" .Site...` (call form);
    // the argument shape keeps prose mentions of "default" out of scope.
    assert.doesNotMatch(
      text,
      /\bdefault\s+["'`([\d$.]/,
      'the version read is fallback-free, in pipe and call form alike',
    );
    const urlFormPattern = urlForm.replace(/[${}()|[\]\\]/g, '\\$&');
    assert.match(
      text,
      new RegExp(String.raw`${cdnPackage}@${urlFormPattern}`),
      'the CDN URL interpolates the configured version',
    );
    assert.doesNotMatch(
      text,
      new RegExp(String.raw`${cdnPackage}@(?!${urlFormPattern})`),
      'CDN URLs carry no hardcoded version',
    );
  });
}
