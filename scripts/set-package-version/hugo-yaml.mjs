#!/usr/bin/env node

/**
 * Utilities for reading and writing the version field in docsy.dev/hugo.yaml.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const hugoYamlPath = path.join(
  __dirname,
  '..',
  '..',
  'docsy.dev',
  'hugo.yaml',
);

export function readHugoYaml() {
  const content = fs.readFileSync(hugoYamlPath, 'utf8');
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
    }
  }

  return result;
}

export function writeHugoYaml(hugoYaml) {
  const content = fs.readFileSync(hugoYamlPath, 'utf8');
  const lines = content.split('\n');

  // Update the version line under params
  let inParams = false;
  let updated = false;
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
        updated = true;
        return `  version: ${hugoYaml.params.version}`;
      }
    }

    return line;
  });

  // If version line wasn't found, add it after params:
  if (!updated && hugoYaml.params?.version !== undefined) {
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

  fs.writeFileSync(hugoYamlPath, newLines.join('\n'));
}
