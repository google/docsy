// Docsy's default Mermaid version must stay an exact, pinned X.Y.Z (see
// maintainer notes, "Default Mermaid version"). Fast and offline.
//
// This is the only guard against a regression to a floating version like
// `latest`: Scorecard-class tooling can't see CDN URLs embedded in an HTML
// partial, so a linter or dependency scanner won't catch this.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

const SEMVER = /^\d+\.\d+\.\d+$/;

function mermaidVersion() {
  const text = fs.readFileSync(path.join(repoRoot, 'theme/hugo.yaml'), 'utf8');
  const m = text.match(/^\s*mermaid:\s*\n\s+version:\s*(\S+)/m);
  assert.ok(m, 'params.mermaid.version is declared in theme/hugo.yaml');
  return m[1];
}

test('theme/hugo.yaml pins an exact Mermaid version', () => {
  const version = mermaidVersion();
  assert.match(
    version,
    SEMVER,
    'params.mermaid.version is X.Y.Z, not a floating version like `latest`',
  );
});
