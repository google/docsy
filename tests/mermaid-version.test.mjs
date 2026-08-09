// Docsy's default Mermaid version must stay an exact, pinned X.Y.Z (see
// maintainer notes, "Default Mermaid version"). Fast and offline.
//
// This is the only guard against a regression to a floating version like
// `latest`: dependency scanners can't see CDN URLs embedded in an HTML
// partial. The file is parsed as YAML, not regex-matched: two adversarial
// review rounds each produced decoy key shapes that fooled regex extraction
// while Hugo resolved a different value.

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

function mermaidVersion() {
  const text = fs.readFileSync(path.join(repoRoot, 'theme/hugo.yaml'), 'utf8');
  const version = parse(text)?.params?.mermaid?.version;
  assert.ok(
    version !== undefined,
    'params.mermaid.version is declared in theme/hugo.yaml',
  );
  return version;
}

test('theme/hugo.yaml pins an exact Mermaid version', () => {
  const version = mermaidVersion();
  assert.equal(typeof version, 'string', 'params.mermaid.version is a string');
  // Prerelease pins (X.Y.Z-rc.N) are deliberately rejected: the theme
  // default stays on stable releases. Sites can still pin one; they get the
  // suppressible floating-version warning.
  assert.match(
    version,
    SEMVER,
    'params.mermaid.version is X.Y.Z, not a floating version like `latest`',
  );
});

// The pin's other home-in-waiting: a fallback or hardcoded version
// reintroduced in the partial would ship a version the YAML assertion above
// never sees.
test('the Mermaid partial takes its version from the config param alone', () => {
  const partial = fs.readFileSync(
    path.join(repoRoot, 'theme/layouts/_partials/scripts/mermaid.html'),
    'utf8',
  );
  assert.match(
    partial,
    /\$version :=\s*\.Site\.Params\.mermaid\.version/,
    'the partial reads params.mermaid.version',
  );
  assert.doesNotMatch(
    partial,
    /\|\s*default\b/,
    'the version read has no template-level default fallback',
  );
  assert.match(
    partial,
    /mermaid@%s\//,
    'the CDN URL interpolates the configured version',
  );
  assert.doesNotMatch(
    partial,
    /mermaid@(?!%s)/,
    'CDN URLs carry no hardcoded version',
  );
});
