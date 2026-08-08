#!/usr/bin/env node
//
// Pack-time build-ID stamp for theme/package.json: `prepack` swaps a bare
// -dev version for a git-derived build ID inside the tarball; `postpack`
// restores the committed manifest. Release and RC versions pack unchanged.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const manifestPath = path.join(repoRoot, 'theme', 'package.json');
const backupPath = path.join(repoRoot, 'tmp', 'pack-stamp', 'package.json');

function buildVersion(version) {
  try {
    return execFileSync(path.join(repoRoot, 'scripts', 'get-build-id.sh'), {
      cwd: repoRoot,
      encoding: 'utf8',
    }).trim();
  } catch {
    // Shallow or tagless checkout (CI): the HEAD SHA still identifies the build.
    const sha = execFileSync(
      'git',
      ['-C', repoRoot, 'rev-parse', '--short=8', 'HEAD'],
      { encoding: 'utf8' },
    ).trim();
    return `${version}+g${sha}`;
  }
}

const mode = process.argv[2];
if (mode === 'pre') {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!manifest.version.endsWith('-dev')) process.exit(0);
  let version;
  try {
    version = buildVersion(manifest.version);
  } catch (err) {
    console.warn(
      `pack-stamp: no build ID available, packing as-is (${err.message})`,
    );
    process.exit(0);
  }
  fs.mkdirSync(path.dirname(backupPath), { recursive: true });
  fs.copyFileSync(manifestPath, backupPath);
  manifest.version = version;
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`pack-stamp: packing as version ${version}`);
} else if (mode === 'post') {
  if (fs.existsSync(backupPath)) {
    fs.copyFileSync(backupPath, manifestPath);
    fs.rmSync(path.dirname(backupPath), { recursive: true, force: true });
  }
} else {
  console.error('Usage: node scripts/pack-stamp.mjs pre|post');
  process.exit(1);
}
