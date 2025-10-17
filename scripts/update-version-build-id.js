#!/usr/bin/env node

/**
 * Updates the version in package.json by adding a build ID.
 * Usage: node scripts/update-version-build-id.js [build-id]
 *
 * If no build-id is provided, uses current UTC timestamp in YYYYMMDD-HHmmZ format.
 */

const fs = require('fs');
const path = require('path');

function main() {
  // Get package.json path
  const packagePath = path.join(__dirname, '..', 'package.json');

  // Read package.json
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  // Get build ID from command line or generate timestamp
  const buildId = process.argv[2] || generateTimestamp();

  // Parse current version and add/update build ID
  const currentVersion = pkg.version;
  const baseVersion = currentVersion.split('+')[0]; // Remove existing build ID if present
  const newVersion = `${baseVersion}+${buildId}`;

  // Update version
  pkg.version = newVersion;

  // Write back to package.json with proper formatting
  fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');

  console.log(`✓ Updated version: ${currentVersion} → ${newVersion}`);
}

function generateTimestamp() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  // const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  return `${year}${month}${day}-${hours}${minutes}Z`;
}

main();

