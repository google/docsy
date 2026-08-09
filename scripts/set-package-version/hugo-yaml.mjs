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
const mappingKeyLineRegex = /^(\s*)([A-Za-z_][\w-]*):(?:\s|$)/;

function isBuildIdLine(line) {
  return versionKeysLineRegex.exec(line)?.[2] === 'buildId';
}

// The unmarked-buildId match is path-gated to tdVersion.buildId so unrelated
// buildId keys elsewhere in a config are left alone.
function isTdBuildIdPath(yamlPath) {
  return yamlPath.at(-1) === 'buildId' && yamlPath.at(-2) === 'tdVersion';
}

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
  const yamlPathStack = [];
  for (const line of yamlConfig.split('\n')) {
    const yamlPath = yamlPathForLine(line, yamlPathStack);
    // Match version IDs either as YAML aliases or in a comment
    // (actually, anywhere in the line):
    //   latest: &tdLatestVers v0.14.3
    //   dev: 0.14.4-dev # tdDevVers
    // buildId needs no marker: its key name plus the tdVersion path suffices
    // (latest/dev are too common to match unmarked).
    const unmarkedBuildId = isBuildIdLine(line) && isTdBuildIdPath(yamlPath);
    if (!line.match(versionIdsLineRegex) && !unmarkedBuildId) continue;

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
function applyTdVersionLine(line, data, yamlPath) {
  const unmarkedBuildId =
    yamlPath !== undefined && isBuildIdLine(line) && isTdBuildIdPath(yamlPath);
  if (!line.match(versionIdsLineRegex) && !unmarkedBuildId) return null;
  const match = line.match(versionKeysLineRegex);
  if (!match) return line;
  const [, indentation, key, rawValueToken] = match;
  if (!VERSION_KEYS.includes(key)) return line;
  const newValue = data[key];
  if (newValue === undefined) return line;

  const anchorMatch = rawValueToken.match(/^(&\w+\s+)/);
  const anchor = anchorMatch ? anchorMatch[1] : '';
  const { comment } = splitYamlValueAndComment(rawValueToken);
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
 * @param {string[]} yamlPath
 * @param {string} [dev]
 * @returns {string|null} replacement line, or null if not applicable
 */
function applyParamsScalarVersionLine(line, yamlPath, dev) {
  const scalar = devAsParamsScalar(dev);
  if (scalar === undefined) return null;
  if (yamlPath.join('.') !== 'params.version') return null;

  const m = line.match(/^(\s*)version:\s*(.*)$/);
  if (!m) return null;

  const { value, comment } = splitYamlValueAndComment(m[2]);
  if (!value) return null;
  if (value.startsWith('*') || value.startsWith('&')) return null;

  const unquoted = value.replace(/^['"]|['"]$/g, '');
  if (!/^[vV]?\d+\.\d+\.\d/.test(unquoted)) return null;

  const next = `${m[1]}version: ${scalar}${comment}`;
  // An already-correct scalar still counts as a landing line for `dev`.
  return next;
}

/**
 * Splits a simple YAML scalar from a trailing inline comment.
 *
 * @param {string} raw
 * @returns {{ value: string, comment: string }}
 */
function splitYamlValueAndComment(raw) {
  const match = raw.match(/^(.*?)(\s+#.*)?$/);
  return {
    value: (match?.[1] ?? raw).trim(),
    comment: match?.[2] ?? '',
  };
}

/**
 * Tracks the mapping path for simple block YAML while preserving line-oriented edits.
 *
 * @param {string} line
 * @param {{ indent: number, key: string }[]} stack
 * @returns {string[]}
 */
function yamlPathForLine(line, stack) {
  const match = line.match(mappingKeyLineRegex);
  if (!match) return stack.map(({ key }) => key);

  const [, indentation, key] = match;
  const indent = indentation.length;
  while (stack.length > 0 && stack.at(-1).indent >= indent) {
    stack.pop();
  }
  stack.push({ indent, key });
  return stack.map((entry) => entry.key);
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
 * @returns {Set<string>} version keys that had a line to land in
 */
export function writeHugoYaml(versionInfo, filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const appliedKeys = new Set();
  const newContent = updateYamlWithVersions(content, versionInfo, appliedKeys);
  fs.writeFileSync(filePath, newContent);
  return appliedKeys;
}

/**
 * Updates version info in YAML content.
 *
 * @param {string} yamlConfig - YAML file content
 * @param {VersionInfo} data
 * @param {Set<string>} [appliedKeys] - collects version keys that had a line to land in
 * @returns {string} Updated YAML content
 */
export function updateYamlWithVersions(
  yamlConfig,
  { latest, dev, buildId },
  appliedKeys,
) {
  const data = {
    latest,
    dev: dev ?? (latest ? nextDevVersion(latest) : undefined),
    buildId: buildId ?? '',
  };
  const yamlPathStack = [];
  return yamlConfig
    .split('\n')
    .map((line) => {
      const yamlPath = yamlPathForLine(line, yamlPathStack);
      const tdLine = applyTdVersionLine(line, data, yamlPath);
      if (tdLine !== null) {
        const key = versionKeysLineRegex.exec(line)?.[2];
        if (key && VERSION_KEYS.includes(key)) appliedKeys?.add(key);
        return tdLine;
      }

      const pvLine = applyParamsScalarVersionLine(line, yamlPath, data.dev);
      if (pvLine !== null) {
        // The params.version scalar is where `dev` lands in hugo.yaml-style files.
        appliedKeys?.add('dev');
        return pvLine;
      }

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
