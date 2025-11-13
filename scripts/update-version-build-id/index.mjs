#!/usr/bin/env node

/**
 * Updates the version in package.json by adding a build ID.
 *
 * Usage: see usage() function below.
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

const usageText = `
Usage: node scripts/update-version-build-id/index.mjs [BUILD-ID] [options]
  Options:
    --silent, -s    Don't log any messages
    --help, -h      Show this help message
    --id BUILD-ID   Use BUILD-ID as the build ID

  Behavior:
    - If no BUILD-ID is provided: uses current UTC timestamp in YYYYMMDD-HHmmZ format
    - If empty string "" is provided: removes the build ID (sets version to base version only)
    - If a BUILD-ID is provided: uses that BUILD-ID
`;

const maybeLog = (isSilent = false, log = console.log) => (message) => {
  if (isSilent) return;
  log(message);
};

export function parseArgsAndResolveBuildId(args, { logger = console } = {}) {
  function usage(exitCode = 0) {
    logger?.log?.(usageText);
    process.exit(exitCode);
  }

  let buildId;
  let silent = false;
  const log = maybeLog(silent, logger?.log || console.log);
  const warn = maybeLog(silent, logger?.warn || console.warn);

  let i = 0;
  for (; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--help':
      case '-h':
        usage();
        break;
      case '--silent':
      case '-s':
        silent = true;
        break;
      case '--id':
        if (++i >= args.length) usage(1);
        buildId = args[i];
        break;
      default:
        if (buildId === undefined) {
          buildId = arg;
        } else {
          warn?.(`Unexpected argument: ${arg}`);
          usage(1);
        }
    }
  }

  if (buildId === undefined) {
    buildId = generateTimestamp();
  } else if (buildId === '' && !silent) {
    logger?.log?.(
      'Build-ID argument is empty, so we will remove the build ID from the version.',
    );
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
