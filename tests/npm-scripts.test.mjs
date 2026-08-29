import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Bans npm's lifecycle namespace from the script names of the root and all
// workspace manifests: npm skips lifecycle hooks under `ignore-scripts`
// installs and configs, so a hook-shaped step silently drops out of a chain
// it appears to be part of, and an unreviewed hook pair rides a trusted
// name's execution path (the supply-chain audit pins the install-path
// scripts themselves). Banning by shape also rejects orphan hooks and names
// a later script would turn into hooks (a `preview` script hooks `view`).
// The bare names are npm's self-initiated lifecycles outside the pre/post
// shape; start/stop/restart/test run only when invoked, so they stay legal.
// Same pattern as docsy-example's tests/npm-scripts.test.mjs.

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const readManifest = (relPath) =>
  JSON.parse(fs.readFileSync(path.join(repoRoot, relPath), 'utf8'));

// The theme's pack-time lifecycle pair is deliberate release machinery
// (pack stamp, LICENSE copy), reviewed with the publish flow.
const reviewedLifecycleScripts = {
  'theme/package.json': ['prepack', 'postpack'],
};

const rootManifest = readManifest('package.json');
const manifests = new Map([['package.json', rootManifest]]);
for (const pattern of rootManifest.workspaces ?? []) {
  for (const dir of fs.globSync(pattern, { cwd: repoRoot })) {
    const rel = path.join(dir, 'package.json');
    manifests.set(rel, readManifest(rel));
  }
}

test('workspace discovery finds manifests to guard', () => {
  assert.ok(
    manifests.size >= 3,
    'the root and both workspace manifests are discovered',
  );
});

test('npm scripts declare no lifecycle or hook-shaped names', () => {
  for (const [manifest, { scripts = {} }] of manifests) {
    const reviewed = reviewedLifecycleScripts[manifest] ?? [];
    for (const name of Object.keys(scripts)) {
      if (reviewed.includes(name)) continue;
      assert.ok(
        !/^(pre|post)/.test(name) &&
          !['install', 'dependencies', 'publish', 'version'].includes(name),
        `${manifest}: ${name} stays outside npm's lifecycle namespace, so every script runs the same with and without ignore-scripts`,
      );
    }
  }
});
