#!/usr/bin/env node
//
// Pack-time build-ID stamp for theme/package.json: `prepack` swaps a bare
// -dev version for one carrying the packed commit's SHA inside the tarball;
// `postpack` restores the committed manifest. Release and RC versions pack
// unchanged.

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

function restoreBackup() {
  if (!fs.existsSync(backupPath)) return false;
  fs.copyFileSync(backupPath, manifestPath);
  fs.rmSync(path.dirname(backupPath), { recursive: true, force: true });
  return true;
}

const mode = process.argv[2];
if (mode === 'pre') {
  // A failed pack skips postpack; self-heal the stranded manifest here.
  if (restoreBackup()) {
    console.warn('pack-stamp: restored manifest left by an interrupted pack');
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!manifest.version.endsWith('-dev')) process.exit(0);
  let sha;
  try {
    sha = execFileSync(
      'git',
      ['-C', repoRoot, 'rev-parse', '--short=8', 'HEAD'],
      { encoding: 'utf8' },
    ).trim();
  } catch (err) {
    console.warn(`pack-stamp: no git HEAD, packing as-is (${err.message})`);
    process.exit(0);
  }
  fs.mkdirSync(path.dirname(backupPath), { recursive: true });
  fs.copyFileSync(manifestPath, backupPath);
  manifest.version = `${manifest.version}+g${sha}`;
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`pack-stamp: packing as version ${manifest.version}`);
} else if (mode === 'post') {
  restoreBackup();
} else {
  console.error('Usage: node scripts/pack-stamp.mjs pre|post');
  process.exit(1);
}
