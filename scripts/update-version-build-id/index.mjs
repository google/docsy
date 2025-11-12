#!/usr/bin/env node

/**
 * Updates the version in package.json by adding a build ID.
 *
 * Usage: node scripts/update-version-build-id/index.mjs [--silent|-s] [build-id]
 *
 * - If no build-id is provided: uses current UTC timestamp in YYYYMMDD-HHmmZ format
 * - If empty string "" is provided: removes the build ID (sets version to base version only)
 * - If a build-id is provided: uses that build ID
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packagePath = path.join(__dirname, '..', '..', 'package.json');

export function main(
  args = process.argv.slice(2),
  {
    logger = console,
    readPackageJson = defaultReadPackageJson,
    writePackageJson = defaultWritePackageJson,
  } = {},
) {
  const pkg = readPackageJson();

  const { buildId, silent } = parseArgsAndResolveBuildId(args, { logger });

  const currentVersion = pkg.version;
  const baseVersion = currentVersion.split('+')[0]; // Remove existing build ID if present
  const newVersion = buildId ? `${baseVersion}+${buildId}` : baseVersion;

  if (newVersion !== currentVersion) {
    pkg.version = newVersion;
    writePackageJson(pkg);
    logger.log?.(`✓ Updated version: ${currentVersion} → ${newVersion}`);
  } else if (!silent) {
    logger.log?.(`Package version is already set to ${currentVersion}.`);
  }

  return newVersion;
}

export function parseArgsAndResolveBuildId(args, { logger = console } = {}) {
  let buildId;
  let silent = false;

  for (const arg of args) {
    if (arg === '--silent' || arg === '-s') {
      silent = true;
    } else if (buildId === undefined) {
      buildId = arg;
    } else {
      const message = `Ignoring unexpected argument: ${arg}`;
      if (logger?.warn) {
        logger.warn(message);
      } else {
        logger?.log?.(message);
      }
    }
  }

  if (buildId === undefined) {
    buildId = generateTimestamp();
  } else if (buildId === '' && !silent) {
    logger?.log?.('Build-ID argument is empty, so we will remove the build ID from the version.');
  }

  return { buildId, silent };
}

export function generateTimestamp() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  // const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  return `${year}${month}${day}-${hours}${minutes}Z`;
}

function defaultReadPackageJson() {
  return JSON.parse(fs.readFileSync(packagePath, 'utf8'));
}

function defaultWritePackageJson(pkg) {
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
}

const modulePath = __filename;
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath) {
  main();
}

