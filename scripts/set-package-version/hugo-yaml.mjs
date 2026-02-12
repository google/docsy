#!/usr/bin/env node

// cSpell:ignore docsy

/**
 * Utilities for reading and writing version fields in docsy.dev/hugo.yaml.
 */

import fs from 'fs';
import path from 'path';

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

export function readHugoYaml() {
  const content = fs.readFileSync(getHugoYamlPath(), 'utf8');
  const lines = content.split('\n');
  const result = { params: {} };

  // Simple YAML parser for the version field
  // Look for "  version: <value>" under params section
  let inParams = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check if we're entering or leaving the params section
    if (trimmed === 'params:') {
      inParams = true;
      continue;
    }

    // If we hit a top-level key (starts at column 0, not params), exit params section
    if (
      line.match(/^[a-z_]+:/) &&
      !line.match(/^params:/) &&
      !line.match(/^  /)
    ) {
      inParams = false;
      continue;
    }

    // Look for version line within params section
    if (inParams) {
      const versionMatch = line.match(/^  version:\s*(.+)$/);
      if (versionMatch) {
        result.params.version = versionMatch[1].trim();
      }

      const versionWithBuildIdMatch = line.match(
        /^  versionWithBuildId:\s*(.*)$/,
      );
      if (versionWithBuildIdMatch) {
        result.params.versionWithBuildId = stripYamlQuotes(
          versionWithBuildIdMatch[1].trim(),
        );
      }
    }
  }

  return result;
}

export function writeHugoYaml(hugoYaml) {
  const content = fs.readFileSync(getHugoYamlPath(), 'utf8');
  const lines = content.split('\n');

  // Update version fields under params.
  let inParams = false;
  let versionUpdated = false;
  let versionWithBuildIdUpdated = false;
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

    // Update version line within params section
    if (inParams) {
      const versionMatch = line.match(/^  version:\s*(.+)$/);
      if (versionMatch && hugoYaml.params?.version !== undefined) {
        versionUpdated = true;
        return `  version: ${hugoYaml.params.version}`;
      }

      const versionWithBuildIdMatch = line.match(
        /^  versionWithBuildId:\s*(.*)$/,
      );
      if (
        versionWithBuildIdMatch &&
        hugoYaml.params?.versionWithBuildId !== undefined
      ) {
        versionWithBuildIdUpdated = true;
        return `  versionWithBuildId: ${yamlScalar(hugoYaml.params.versionWithBuildId)}`;
      }
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

  // Add missing versionWithBuildId line under params.
  if (
    !versionWithBuildIdUpdated &&
    hugoYaml.params?.versionWithBuildId !== undefined
  ) {
    for (let i = 0; i < newLines.length; i++) {
      if (newLines[i].trim() === 'params:') {
        // Prefer placing versionWithBuildId immediately after version.
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
          `  versionWithBuildId: ${yamlScalar(hugoYaml.params.versionWithBuildId)}`,
        );
        break;
      }
    }
  }

  fs.writeFileSync(getHugoYamlPath(), newLines.join('\n'));
}

function stripYamlQuotes(value) {
  if (
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function yamlScalar(value) {
  if (value === '') {
    return "''";
  }
  return String(value);
}
