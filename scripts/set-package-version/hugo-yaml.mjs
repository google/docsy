#!/usr/bin/env node

// cSpell:ignore docsy

/**
 * Utilities for reading and writing version fields in docsy.dev/hugo.yaml.
 */

import fs from 'fs';

/**
 * Parses version and tdBuildId from YAML content. Finds first occurrence of
 * version.
 *
 * @param {string} yamlConfig - YAML config
 * @returns {{ version?: string, tdBuildId?: string }}
 */
export function parseParamsVersion(yamlConfig) {
  const result = {};
  const lineRegex = /^(\s{0,2})(version|tdBuildId):\s*(.+)$/;
  for (const line of yamlConfig.split('\n')) {
    const match = line.match(lineRegex);
    if (!match) continue;
    const [, _prefix, key, value] = match;
    if (key !== 'version' && key !== 'tdBuildId') continue;

    const rawValueToken = value;
    // Matching, e.g.:
    //   `0.14.3-dev`
    //   `&docsyVersion 0.14.3-dev # comment`
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
 * Writes version and tdBuildId to YAML file.
 *
 * @param {{ version?: string, tdBuildId?: string }} data
 * @param {string} filePath
 */
export function writeHugoYaml(versionInfo, filePath) {
  console.log('writeHugoYaml', filePath, versionInfo);
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = updateYamlWithVersions(content, versionInfo);
  fs.writeFileSync(filePath, newContent);
}

/**
 * Updates version and tdBuildId in YAML content. Uses the same regex as
 * parseParamsVersion to handle both params file (0 indent) and params section (2 indent).
 *
 * @param {string} yamlConfig - YAML file content
 * @param {{ version?: string, tdBuildId?: string }} data
 * @returns {string} Updated YAML content
 */
export function updateYamlWithVersions(yamlConfig, { version, tdBuildId }) {
  const lineRegex = /^(\s{0,2})(version|tdBuildId):\s*(.+)$/;
  return yamlConfig
    .split('\n')
    .map((line) => {
      const match = line.match(lineRegex);
      if (!match) return line;
      const [_, prefix, key, rawValueToken] = match;
      const newValue = key === 'version' ? version : tdBuildId;
      if (newValue === undefined) return line;

      const anchorMatch = rawValueToken.match(/^(&\w+\s+)/);
      const anchor = anchorMatch ? anchorMatch[1] : '';
      const commentMatch = rawValueToken.match(/(\s+#.*)$/);
      const comment = commentMatch ? commentMatch[1] : '';
      const value = key === 'version' ? newValue : yamlScalar(newValue);
      return `${prefix}${key}: ${anchor}${value}${comment}`;
    })
    .join('\n');
}

function yamlScalar(value) {
  if (value === '') {
    return "''";
  }
  return String(value);
}
