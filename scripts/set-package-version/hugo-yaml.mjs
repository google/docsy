#!/usr/bin/env node

// cSpell:ignore docsy

/**
 * Utilities for reading and writing version fields in docsy.dev/hugo.yaml.
 */

import assert from 'node:assert';
import fs from 'fs';

const KEY_AND_ANCHOR = {
  latest: 'tdLatestVers',
  dev: 'tdDevVers',
  buildId: 'tdBuildId',
};

const VERSION_KEYS = Object.keys(KEY_AND_ANCHOR);
const VERSION_IDS = Object.values(KEY_AND_ANCHOR);
const versionKeysLineRegex = new RegExp(
  `^(\\s{0,4})(${VERSION_KEYS.join('|')}):\\s*(.+)$`,
);
const versionIdsLineRegex = new RegExp(`(${VERSION_IDS.join('|')})`);

/**
 * @typedef {Object} VersionInfo
 * @property {string} [latest]
 * @property {string} [dev]
 * @property {string} [buildId]
 */

/**
 * Parses version info from YAML content.
 *
 * @param {string} yamlConfig - YAML config
 * @returns {VersionInfo}
 */
export function parseParamsVersion(yamlConfig) {
  const result = {};
  for (const line of yamlConfig.split('\n')) {
    // Match version IDs either as YAML aliases or in a comment
    // (actually, anywhere in the line):
    //   latest: &tdLatestVers v0.14.3
    //   dev: 0.14.4-dev # tdDevVers
    if (!line.match(versionIdsLineRegex)) continue;

    const match = line.match(versionKeysLineRegex);
    if (!match) continue;
    const [, _indentation, key, rawValueToken] = match;
    if (!VERSION_KEYS.includes(key)) continue;

    // Matching, e.g.:
    //   `v0.14.3`
    //   `&tdLatestVers v0.14.3`
    //   `&tdDevVers 0.14.4-dev # comment`
    const valueMatch = rawValueToken.match(
      /^(?:&\w+\s+)?["']?(.*?)["']?\s*(?:#.*)?$/,
    );
    if (!valueMatch) continue;
    result[key] = valueMatch[1];
  }

  return result;
}

export function readHugoYaml(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return parseParamsVersion(content);
}

/**
 * Writes version info to YAML file.
 *
 * @param {VersionInfo} versionInfo
 * @param {string} filePath
 */
export function writeHugoYaml(versionInfo, filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = updateYamlWithVersions(content, versionInfo);
  fs.writeFileSync(filePath, newContent);
}

/**
 * Updates version info in YAML content.
 *
 * @param {string} yamlConfig - YAML file content
 * @param {VersionInfo} data
 * @returns {string} Updated YAML content
 */
export function updateYamlWithVersions(yamlConfig, { latest, dev, buildId }) {
  const data = {
    latest,
    dev: dev ?? (latest ? nextDevVersion(latest) : undefined),
    buildId: buildId ?? '',
  };
  return yamlConfig
    .split('\n')
    .map((line) => {
      if (!line.match(versionIdsLineRegex)) return line;
      const match = line.match(versionKeysLineRegex);
      if (!match) return line;
      const [_, indentation, key, rawValueToken] = match;
      if (!VERSION_KEYS.includes(key)) return line;
      const newValue = data[key];
      if (newValue === undefined) return line;

      const anchorMatch = rawValueToken.match(/^(&\w+\s+)/);
      const anchor = anchorMatch ? anchorMatch[1] : '';
      const commentMatch = rawValueToken.match(/(\s+#.*)$/);
      const comment = commentMatch ? commentMatch[1] : '';
      const value =
        (key === 'latest' || key === 'dev') && !newValue.startsWith('v')
          ? `v${newValue}`
          : yamlScalar(newValue);
      if (anchor) assert.strictEqual(anchor, `&${KEY_AND_ANCHOR[key]} `);
      return `${indentation}${key}: ${anchor}${value}${comment}`;
    })
    .join('\n');
}

/**
 * Derives dev version from latest: patch + 1, then "-dev", with v prefix (e.g. v0.14.4 → v0.14.5-dev).
 *
 * @param {string} latest - e.g. "0.14.4" or "v0.14.4"
 * @returns {string} e.g. "v0.14.5-dev"
 */
export function nextDevVersion(latest) {
  const s = String(latest).replace(/^v/i, '');
  const m = s.match(/^(\d+)\.(\d+)\.(\d+)/);
  if (!m) return `v${s}-dev`;
  const [, major, minor, patch] = m;
  return `v${major}.${minor}.${Number(patch) + 1}-dev`;
}

function yamlScalar(value) {
  if (value === '') {
    return "''";
  }
  return String(value);
}
