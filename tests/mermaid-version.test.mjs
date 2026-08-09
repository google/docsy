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
  assert.match(
    version,
    SEMVER,
    'params.mermaid.version is X.Y.Z, not a floating version like `latest`',
  );
});
