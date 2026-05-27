#!/usr/bin/env node
// @ts-check
/**
 * Mirror the root package.json's `dependencies` versions into
 * theme/package.json's `dependencies`. Idempotent.
 *
 * The root manifest is the canonical source of truth for theme runtime
 * dependency versions (bootstrap, @fortawesome/fontawesome-free, …). The
 * theme/package.json carries the same list so that consumers of theme/ as a
 * file/tarball (notably docsy.dev's `_install-theme-deps` postinstall, which
 * runs `npm install ../theme --install-links`) see the right versions.
 *
 * Wired into `_prepare`, `postupdate:dep`, and `postupdate:packages` so it
 * runs whenever maintainers refresh deps. Maintainers may also invoke it
 * directly: `npm run _sync:theme-deps`.
 *
 * Behavior:
 *   - For each key in theme/package.json's `dependencies`, adopt the version
 *     declared in the root package.json (if root declares it).
 *   - Keys present in theme but not in root → warning, no change.
 *   - Keys present in root but not in theme → warning, no change. (Theme's
 *     dep set is curated by hand; we only sync versions.)
 *   - If nothing changes, the script is a no-op and writes nothing.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT_PKG = path.join(ROOT, 'package.json');
const THEME_PKG = path.join(ROOT, 'theme', 'package.json');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function writeJson(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

/**
 * @param {object} [io]
 * @param {() => any} [io.readRoot]
 * @param {() => any} [io.readTheme]
 * @param {(data: any) => void} [io.writeTheme]
 * @param {{ log: (s: string) => void, warn: (s: string) => void }} [io.logger]
 * @returns {{ changed: boolean, changes: {name: string, from: string, to: string}[], onlyInTheme: string[], onlyInRoot: string[] }}
 */
export function syncThemeDeps({
  readRoot = () => readJson(ROOT_PKG),
  readTheme = () => readJson(THEME_PKG),
  writeTheme = (data) => writeJson(THEME_PKG, data),
  logger = console,
} = {}) {
  const root = readRoot();
  const theme = readTheme();
  const rootDeps = root.dependencies || {};
  const themeDeps = { ...(theme.dependencies || {}) };

  const changes = [];
  const onlyInTheme = [];

  for (const name of Object.keys(themeDeps)) {
    if (!(name in rootDeps)) {
      onlyInTheme.push(name);
      continue;
    }
    if (themeDeps[name] !== rootDeps[name]) {
      changes.push({ name, from: themeDeps[name], to: rootDeps[name] });
      themeDeps[name] = rootDeps[name];
    }
  }

  const onlyInRoot = Object.keys(rootDeps).filter((k) => !(k in themeDeps));

  if (onlyInTheme.length) {
    logger.warn(
      `sync-theme-deps: warning: theme/package.json declares deps not in root: ${onlyInTheme.join(', ')}`,
    );
  }
  if (onlyInRoot.length) {
    logger.warn(
      `sync-theme-deps: warning: root package.json has deps not in theme: ${onlyInRoot.join(', ')}`,
    );
  }

  if (changes.length === 0) {
    logger.log('sync-theme-deps: theme/package.json already in sync');
    return { changed: false, changes, onlyInTheme, onlyInRoot };
  }

  theme.dependencies = themeDeps;
  writeTheme(theme);
  for (const c of changes) {
    logger.log(`sync-theme-deps: ${c.name} ${c.from} → ${c.to}`);
  }
  return { changed: true, changes, onlyInTheme, onlyInRoot };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  syncThemeDeps();
}
