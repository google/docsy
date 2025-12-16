#!/usr/bin/env node

/**
 * Updates the version in package.json and optionally docsy.dev/hugo.yaml.
 * Can set the entire version or add/remove a build ID suffix.
 * The hugo.yaml file is only updated when --version is used.
 *
 * For usage, see the usage() function below.
 *
 * cSpell:ignore docsy
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readHugoYaml, writeHugoYaml } from './hugo-yaml.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packagePath = path.join(__dirname, '..', '..', 'package.json');

export function main(
  args = process.argv.slice(2),
  {
    logger = console,
    readPackageJson = defaultReadPackageJson,
    writePackageJson = defaultWritePackageJson,
    readHugoYaml: readHugoYamlFn = readHugoYaml,
    writeHugoYaml: writeHugoYamlFn = writeHugoYaml,
  } = {},
) {
  const pkg = readPackageJson();
  const hugoYaml = readHugoYamlFn();

  const { version, buildId, silent } = parseArgsAndResolveBuildId(args, {
    logger,
  });

  const currentVersion = pkg.version;
  let newVersion;

  if (version !== undefined) {
    // --version takes precedence: set the entire version directly
    newVersion = version;
  } else {
    // Use build ID logic: add/remove build ID from base version
    const baseVersion = currentVersion.split('+')[0]; // Remove existing build ID if present
    newVersion = adjustVersionForBuildId(baseVersion, buildId, { logger });
  }

  let updated = false;
  let hugoYamlUpdated = false;

  if (newVersion !== currentVersion) {
    pkg.version = newVersion;
    writePackageJson(pkg);
    updated = true;
  }

  // Only update hugo.yaml when --version is used
  let currentHugoVersion = '';
  if (version !== undefined) {
    const baseVersion = newVersion.split('+')[0]; // Remove build ID if present
    currentHugoVersion = hugoYaml.params?.version || '';
    if (baseVersion !== currentHugoVersion) {
      if (!hugoYaml.params) {
        hugoYaml.params = {};
      }
      hugoYaml.params.version = baseVersion;
      writeHugoYamlFn(hugoYaml);
      hugoYamlUpdated = true;
    }
  }

  if (updated || hugoYamlUpdated) {
    logger.log?.(`✓ Updated version: ${currentVersion} → ${newVersion}`);
    if (hugoYamlUpdated) {
      const baseVersion = newVersion.split('+')[0];
      logger.log?.(
        `✓ Updated hugo.yaml version: ${currentHugoVersion || '(none)'} → ${baseVersion}`,
      );
    }
  } else if (!silent) {
    logger.log?.(`Package version is already set to ${currentVersion}.`);
  }

  return newVersion;
}

const usageText = `
Usage: node scripts/set-package-version/index.mjs [options]
  Options:
    --silent, -s       Don't log any messages
    --help, -h         Show this help message
    --version VERS     Set the entire version to VERS
    --id BUILD-ID      Set build ID to BUILD-ID (ignored if --version is used)

  Behavior:
    - If --version VERS is provided: sets the version to VERS in both package.json and hugo.yaml
    - If --id BUILD-ID is provided: adds BUILD-ID to the base version (package.json only)
    - If --id "" is provided: removes the build ID (package.json only)
    - If no --version or --id is provided: auto-generates build ID from timestamp (package.json only)
`;

export function parseArgsAndResolveBuildId(args, { logger = console } = {}) {
  function usage(exitCode = 0) {
    logger?.log?.(usageText);
    process.exit(exitCode);
  }

  let version;
  let buildId;
  let silent = false;
  const warn = logger?.warn || console.warn;

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
      case '--version':
        if (++i >= args.length) usage(1);
        version = args[i];
        break;
      case '--id':
        if (++i >= args.length) usage(1);
        buildId = args[i];
        break;
      default:
        warn?.(`Unexpected argument: ${arg}`);
        usage(1);
    }
  }

  // If --version is provided, ignore --id
  if (version === undefined) {
    if (buildId === undefined) {
      buildId = generateTimestamp();
    } else if (buildId === '' && !silent) {
      logger?.log?.(
        'Build-ID argument is empty, so we will remove the build ID from the version.',
      );
    }
  }

  return { version, buildId, silent };
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

/**
 * Adjusts the base version if needed when adding a build ID.
 * If the version doesn't end with -dev, increments the minor version and adds -dev suffix.
 *
 * @param {string} baseVersion - The base version (without build ID)
 * @param {string} buildId - The build ID to add
 * @param {object} logger - Logger object with warn method
 * @returns {string} The adjusted version with build ID
 */
export function adjustVersionForBuildId(
  baseVersion,
  buildId,
  { logger = console } = {},
) {
  if (!buildId || baseVersion.endsWith('-dev')) {
    // No adjustment needed: either no build ID or already a dev version
    return buildId ? `${baseVersion}+${buildId}` : baseVersion;
  }

  // Need to adjust: version doesn't end with -dev
  logger?.warn?.(
    `Warning: Adding build ID to non-dev version. Incrementing patch version and adding -dev suffix.`,
  );

  // Parse version and increment patch
  const versionMatch = baseVersion.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (versionMatch) {
    const major = parseInt(versionMatch[1], 10);
    const minor = parseInt(versionMatch[2], 10);
    const patch = parseInt(versionMatch[3], 10);
    const incrementedBase = `${major}.${minor}.${patch + 1}-dev`;
    return `${incrementedBase}+${buildId}`;
  }

  // Fallback: just append -dev if version format doesn't match
  logger?.warn?.(
    `Warning: Version format not recognized (${baseVersion}). Appending -dev suffix.`,
  );
  return `${baseVersion}-dev+${buildId}`;
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
