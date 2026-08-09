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

const defaults = {
  manifestPath: path.join(repoRoot, 'theme', 'package.json'),
  backupPath: path.join(repoRoot, 'tmp', 'pack-stamp', 'package.json'),
  getSha: () =>
    execFileSync('git', ['-C', repoRoot, 'rev-parse', '--short=8', 'HEAD'], {
      encoding: 'utf8',
    }).trim(),
  logger: console,
};

const strandedStampRegex = /^(.*-dev)\+g[0-9a-f]{7,8}$/;

export function packStamp(mode, opts = {}) {
  const { manifestPath, backupPath, getSha, logger } = {
    ...defaults,
    ...opts,
  };
  const readManifest = () => JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const writeManifest = (manifest) =>
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  const removeBackup = () =>
    fs.rmSync(path.dirname(backupPath), { recursive: true, force: true });

  if (mode === 'pre') {
    const manifest = readManifest();
    // Self-heal after an interrupted pack (postpack skipped). The manifest is
    // authoritative: strip a stranded stamp from it directly, and discard any
    // leftover backup rather than restoring it -- a stale backup could
    // predate the committed version.
    const stranded = manifest.version.match(strandedStampRegex);
    if (stranded) {
      manifest.version = stranded[1];
      writeManifest(manifest);
      logger.warn('pack-stamp: stripped stamp left by an interrupted pack');
    }
    if (fs.existsSync(backupPath)) {
      removeBackup();
      logger.warn('pack-stamp: discarded leftover backup');
    }
    if (!manifest.version.endsWith('-dev')) return;
    let sha;
    try {
      sha = getSha();
    } catch (err) {
      logger.warn(`pack-stamp: no git HEAD, packing as-is (${err.message})`);
      return;
    }
    fs.mkdirSync(path.dirname(backupPath), { recursive: true });
    fs.copyFileSync(manifestPath, backupPath);
    manifest.version = `${manifest.version}+g${sha}`;
    writeManifest(manifest);
    logger.log(`pack-stamp: packing as version ${manifest.version}`);
  } else if (mode === 'post') {
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, manifestPath);
      removeBackup();
    }
  } else {
    throw new Error('Usage: node scripts/pack-stamp.mjs pre|post');
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    packStamp(process.argv[2]);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
