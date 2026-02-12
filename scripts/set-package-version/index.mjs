#!/usr/bin/env node

/**
 * Updates the version in package.json and optionally docsy.dev/hugo.yaml.
 * Can set the entire version, set build metadata, or strip to release version.
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

function getPackagePath() {
  return path.join(process.cwd(), 'package.json');
}

const usageText = `
Usage: node scripts/set-package-version/index.mjs [-h] [-s] [-v VERS | --id [BUILD-ID]]

  Options:
    --silent|-s        Don't log any messages
    --help|-h          Show this help message
    --version|-v VERS  Set version in target files according to VERS
    --id [BUILD-ID]    Set build ID metadata to BUILD-ID, if provided; otherwise,
                       set it to a timestamp-based value. Version is unchanged.

  Updates the version in the TARGET FILES: package.json and docsy.dev/hugo.yaml.
  The VERS specifier is a semver string of the form X.Y.Z-pre-rel+BUILD-ID.

  The target files are updated as follows:

  - In package.json, the version is set to the full version.
  - In docsy.dev/hugo.yaml: the version and versionWithBuildId fields are set,
    where version omits the build ID metadata.

  The default behavior is to strip the pre-release suffix and build ID, if any, from
  the target files. Useful for preparing a non-dev release.
`;

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
  } else if (buildId !== undefined) {
    // --id updates/sets build metadata, preserving any pre-release suffix.
    newVersion = adjustVersionForBuildId(currentVersion, buildId);
  } else {
    // Default: strip pre-release and build metadata for release preparation.
    newVersion = getReleaseVersion(currentVersion);
  }

  let updated = false;
  let hugoYamlUpdated = false;

  if (newVersion !== currentVersion) {
    pkg.version = newVersion;
    writePackageJson(pkg);
    updated = true;
  }

  const nextVersionNoBuild = removeBuildId(newVersion);
  const nextVersionFull = newVersion;

  // Keep hugo.yaml's version/versionWithBuildId view aligned with package.json.
  const currentHugoVersion = hugoYaml.params?.version || '';
  const currentHugoVersionWithBuildId =
    hugoYaml.params?.versionWithBuildId || '';
  if (
    nextVersionNoBuild !== currentHugoVersion ||
    nextVersionFull !== currentHugoVersionWithBuildId
  ) {
    if (!hugoYaml.params) {
      hugoYaml.params = {};
    }
    hugoYaml.params.version = nextVersionNoBuild;
    hugoYaml.params.versionWithBuildId = nextVersionFull;
    writeHugoYamlFn(hugoYaml);
    hugoYamlUpdated = true;
  }

  if (updated || hugoYamlUpdated) {
    logger.log?.(`✓ Updated version: ${currentVersion} → ${newVersion}`);
    if (hugoYamlUpdated) {
      logger.log?.(
        `✓ Updated hugo.yaml version: ${currentHugoVersion || '(none)'} → ${nextVersionNoBuild}`,
      );
      logger.log?.(
        `✓ Updated hugo.yaml versionWithBuildId: ${currentHugoVersionWithBuildId || '(none)'} → ${nextVersionFull || '(none)'}`,
      );
    }
  } else if (!silent) {
    logger.log?.(`Package version is already set to ${currentVersion}.`);
  }

  return newVersion;
}

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
      case '-v':
        if (++i >= args.length) {
          usage(1);
        }
        version = args[i];
        break;
      case '--id':
        if (i + 1 >= args.length || args[i + 1].startsWith('-')) {
          buildId = '';
        } else {
          i += 1;
          buildId = args[i];
        }
        break;
      default:
        warn?.(`Unexpected argument: ${arg}`);
        usage(1);
    }
  }

  if (version === undefined && buildId === '') {
    buildId = generateTimestamp();
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
 * Returns the core X.Y.Z version from a semver-like string.
 *
 * @param {string} version - Full or partial version string
 * @returns {string} Core X.Y.Z version
 */
export function getReleaseVersion(version) {
  const match = version.match(/^(\d+\.\d+\.\d+)/);
  if (match) {
    return match[1];
  }

  // Fallback for non-standard strings.
  return version.split('+')[0].split('-')[0];
}

/**
 * Returns the build metadata from a version string.
 *
 * @param {string} version - Full version string
 * @returns {string} Build ID or empty string
 */
export function getBuildId(version) {
  const plusIndex = version.indexOf('+');
  return plusIndex === -1 ? '' : version.slice(plusIndex + 1);
}

/**
 * Returns the input version without build metadata (+...).
 *
 * @param {string} version - Full version string
 * @returns {string} Version without build metadata
 */
export function removeBuildId(version) {
  return version.split('+')[0];
}

/**
 * Adds/removes BUILD-ID on top of version without build metadata.
 *
 * @param {string} version - Any version string
 * @param {string} buildId - The build ID to add
 * @returns {string} VERSION or VERSION+BUILD-ID
 */
export function adjustVersionForBuildId(version, buildId) {
  const baseVersion = removeBuildId(version);
  return buildId ? `${baseVersion}+${buildId}` : baseVersion;
}

// Backward compatible alias retained for callers/tests.
export function removeDevSuffix(version) {
  return getReleaseVersion(version);
}

function defaultReadPackageJson() {
  return JSON.parse(fs.readFileSync(getPackagePath(), 'utf8'));
}

function defaultWritePackageJson(pkg) {
  fs.writeFileSync(getPackagePath(), JSON.stringify(pkg, null, 2) + '\n');
}

const modulePath = __filename;
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath) {
  main();
}
