#!/usr/bin/env node

// cSpell:ignore docsy

/**
 * Utilities for reading and writing version fields in Docsy site YAML / hugo.yaml:
 * tdVersion (latest, dev, buildId) and optional params.version scalars (docsy-example).
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

/**
 * Dev string suitable for docsy-example-style `params.version` scalars (no `v` prefix).
 *
 * @param {string} [dev]
 * @returns {string|undefined}
 */
export function devAsParamsScalar(dev) {
  if (dev === undefined || dev === null || dev === '') return undefined;
  const s = String(dev).trim();
  if (!s) return undefined;
  return s.startsWith('v') ? s.slice(1) : s;
}

/**
 * @param {string} line
 * @param {{ latest?: string, dev?: string, buildId?: string }} data
 * @returns {string|null} updated line, original line if td-handled but unchanged, or null if not td-managed
 */
function applyTdVersionLine(line, data) {
  if (!line.match(versionIdsLineRegex)) return null;
  const match = line.match(versionKeysLineRegex);
  if (!match) return line;
  const [, indentation, key, rawValueToken] = match;
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
}

/**
 * `params.version` scalar (e.g. docsy-example). Skips aliases and `- version:` entries.
 *
 * @param {string} line
 * @param {string} [dev]
 * @returns {string|null} replacement line, or null if not applicable
 */
function applyParamsScalarVersionLine(line, dev) {
  const scalar = devAsParamsScalar(dev);
  if (scalar === undefined) return null;

  const m = line.match(/^(\s*)version:\s*(.*)$/);
  if (!m) return null;

  const rest = m[2];
  const hashIdx = rest.indexOf('#');
  const beforeHash = hashIdx === -1 ? rest : rest.slice(0, hashIdx);
  const commentSuffix = hashIdx === -1 ? '' : rest.slice(hashIdx);
  const valueOnly = beforeHash.trim();
  if (!valueOnly) return null;
  if (valueOnly.startsWith('*') || valueOnly.startsWith('&')) return null;

  const unquoted = valueOnly.replace(/^['"]|['"]$/g, '');
  if (!/^[vV]?\d+\.\d+\.\d/.test(unquoted)) return null;

  const next = `${m[1]}version: ${scalar}${commentSuffix}`;
  return next === line ? null : next;
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
      const tdLine = applyTdVersionLine(line, data);
      if (tdLine !== null) return tdLine;

      const pvLine = applyParamsScalarVersionLine(line, data.dev);
      if (pvLine !== null) return pvLine;

      return line;
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
