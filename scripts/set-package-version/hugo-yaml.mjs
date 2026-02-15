#!/usr/bin/env node

// cSpell:ignore docsy

/**
 * Utilities for reading and writing version fields in docsy.dev/hugo.yaml.
 */

import fs from 'fs';
import path from 'path';

export const configDir = 'docsy.dev/config';
export const defaultParamsYamlPath = '_default/params.yaml';

/**
 * Resolves the path to hugo.yaml. The docsy repo uses docsy.dev/hugo.yaml;
 * docsy-example and similar sites use hugo.yaml at the repo root.
 */
export function getHugoYamlPath() {
  const cwd = process.cwd();
  const docsDevHugo = path.join(cwd, 'docsy.dev', 'hugo.yaml');
  const rootHugo = path.join(cwd, 'hugo.yaml');
  if (fs.existsSync(docsDevHugo)) {
    return docsDevHugo;
  }
  return rootHugo;
}

/**
 * Parses version and tdBuildId from YAML content.
 *
 * @param {string} content - YAML file content
 * @param {{ inParams?: boolean }} [options] - If true (default), parse top-level version fields (no params section)
 * @returns {{ params: { version?: string, tdBuildId?: string } }}
 */
export function parseParamsVersion(content, { inParams = true } = {}) {
  const lines = content.split('\n');
  const result = { params: {} };
  const lineRegex = /^(\s*)(version|tdBuildId):\s*(.+)$/;
  const expectedPrefix = inParams ? '' : '  ';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!inParams) {
      if (trimmed === 'params:') {
        inParams = true;
        continue;
      }
      if (
        line.match(/^[a-z_]+:/) &&
        !line.match(/^params:/) &&
        !line.match(/^  /)
      ) {
        inParams = false;
        continue;
      }
    }

    if (!inParams) continue;

    const lineMatch = line.match(lineRegex);
    if (!lineMatch) continue;
    const prefix = lineMatch[1];
    if (prefix !== expectedPrefix) continue;
    const key = lineMatch[2];
    if (key !== 'version' && key !== 'tdBuildId') continue;

    const rawValueToken = lineMatch[3].trim();
    const valueMatch = rawValueToken.match(
      /^(?:&\w+\s+)?["']?(.+?)["']?(?:\s+#.*)?$/,
    );
    if (!valueMatch) continue;
    result.params[key] = valueMatch[1].trim();
  }

  return result;
}

export function readHugoYaml(filePath) {
  const pathToUse = filePath ?? getHugoYamlPath();
  const content = fs.readFileSync(pathToUse, 'utf8');
  const inParams = /^(version|tdBuildId):/m.test(content);
  return parseParamsVersion(content, { inParams });
}

export function writeParamsFile(filePath, data) {
  const content = fs.readFileSync(filePath, 'utf8');
  const inParams = /^(version|tdBuildId):/m.test(content);
  const newContent = updateYamlWithVersions(content, data, { inParams });
  fs.writeFileSync(filePath, newContent);
}

/**
 * Updates version and tdBuildId in YAML content.
 *
 * @param {string} content - YAML file content
 * @param {{ params?: { version?: string, tdBuildId?: string } }} hugoYaml
 * @param {{ inParams?: boolean }} [options] - If true (default), update top-level version fields (no params section)
 * @returns {string} Updated YAML content
 */
export function updateYamlWithVersions(
  content,
  hugoYaml,
  { inParams = true } = {},
) {
  const lines = content.split('\n');

  if (inParams) {
    return lines
      .map((line) => {
        const lineMatch = line.match(/^(version|tdBuildId):\s*(.+)$/);
        if (!lineMatch) return line;
        const key = lineMatch[1];
        if (key !== 'version' && key !== 'tdBuildId') return line;
        const newValue =
          key === 'version'
            ? hugoYaml.params?.version
            : hugoYaml.params?.tdBuildId;
        if (newValue === undefined) return line;
        const rawValueToken = lineMatch[2];
        const anchorMatch = rawValueToken.match(/^(&\w+\s+)/);
        const prefix = anchorMatch ? anchorMatch[1] : '';
        const commentMatch = rawValueToken.match(/(\s+#.*)$/);
        const suffix = commentMatch ? commentMatch[1] : '';
        const value = key === 'version' ? newValue : yamlScalar(newValue);
        return `${key}: ${prefix}${value}${suffix}`;
      })
      .join('\n');
  }

  // params section format
  let versionUpdated = false;
  let tdBuildIdUpdated = false;
  const newLines = lines.map((line) => {
    const trimmed = line.trim();

    // Check if we're entering or leaving the params section
    if (trimmed === 'params:') {
      inParams = true;
      return line;
    }

    // If we hit a top-level key (starts at column 0, not params), exit params section
    if (
      line.match(/^[a-z_]+:/) &&
      !line.match(/^params:/) &&
      !line.match(/^  /)
    ) {
      inParams = false;
      return line;
    }

    if (inParams) {
      const lineMatch = line.match(/^  (version|tdBuildId):\s*(.+)$/);
      if (!lineMatch) return line;

      const key = lineMatch[1];
      if (key !== 'version' && key !== 'tdBuildId') return line;

      const rawValueToken = lineMatch[2];
      const newValue =
        key === 'version'
          ? hugoYaml.params?.version
          : hugoYaml.params?.tdBuildId;
      if (newValue === undefined) return line;

      const anchorMatch = rawValueToken.match(/^(&\w+\s+)/);
      const prefix = anchorMatch ? anchorMatch[1] : '';
      const commentMatch = rawValueToken.match(/(\s+#.*)$/);
      const suffix = commentMatch ? commentMatch[1] : '';

      if (key === 'version') versionUpdated = true;
      else tdBuildIdUpdated = true;

      const value = key === 'version' ? newValue : yamlScalar(newValue);
      return `  ${key}: ${prefix}${value}${suffix}`;
    }

    return line;
  });

  // Add missing version line under params.
  if (!versionUpdated && hugoYaml.params?.version !== undefined) {
    for (let i = 0; i < newLines.length; i++) {
      if (newLines[i].trim() === 'params:') {
        // Find the next non-indented line or end of params section
        let insertIndex = i + 1;
        while (
          insertIndex < newLines.length &&
          (newLines[insertIndex].match(/^  /) ||
            newLines[insertIndex].trim() === '')
        ) {
          insertIndex++;
        }
        newLines.splice(
          insertIndex,
          0,
          `  version: ${hugoYaml.params.version}`,
        );
        break;
      }
    }
  }

  // Add missing tdBuildId line under params.
  if (!tdBuildIdUpdated && hugoYaml.params?.tdBuildId !== undefined) {
    for (let i = 0; i < newLines.length; i++) {
      if (newLines[i].trim() === 'params:') {
        // Prefer placing tdBuildId immediately after version.
        let insertIndex = -1;
        for (let j = i + 1; j < newLines.length; j++) {
          if (newLines[j].match(/^  version:\s*/)) {
            insertIndex = j + 1;
            break;
          }
          if (
            newLines[j].match(/^[a-z_]+:/) &&
            !newLines[j].match(/^params:/) &&
            !newLines[j].match(/^  /)
          ) {
            break;
          }
        }

        if (insertIndex === -1) {
          insertIndex = i + 1;
          while (
            insertIndex < newLines.length &&
            (newLines[insertIndex].match(/^  /) ||
              newLines[insertIndex].trim() === '')
          ) {
            insertIndex++;
          }
        }

        newLines.splice(
          insertIndex,
          0,
          `  tdBuildId: ${yamlScalar(hugoYaml.params.tdBuildId)}`,
        );
        break;
      }
    }
  }

  return newLines.join('\n');
}

export function writeHugoYaml(hugoYaml, filePath) {
  if (filePath) {
    writeParamsFile(filePath, hugoYaml);
    return;
  }
  const pathToUse = getHugoYamlPath();
  const content = fs.readFileSync(pathToUse, 'utf8');
  const newContent = updateYamlWithVersions(content, hugoYaml);
  fs.writeFileSync(pathToUse, newContent);
}

function yamlScalar(value) {
  if (value === '') {
    return "''";
  }
  return String(value);
}
