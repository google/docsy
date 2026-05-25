#!/usr/bin/env node
// Resolve the installed `hugo-extended` and exec it with the forwarded args.
// Reuses docsy.dev's install (the repo's single hugo-extended declaration,
// version-pinned via package.json `config.hugo_version`) rather than `npx hugo`.
// Cross-OS: runs the package's Node bin wrapper, not a POSIX symlink / Win shim.

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const searchBases = [path.join(repoRoot, 'docsy.dev'), repoRoot];

function resolveHugoBin() {
  for (const base of searchBases) {
    // By node_modules path, not require.resolve('hugo-extended/package.json'):
    // the package's `exports` blocks that (ERR_PACKAGE_PATH_NOT_EXPORTED).
    const pkgDir = path.join(base, 'node_modules', 'hugo-extended');
    const pkgJson = path.join(pkgDir, 'package.json');
    if (!existsSync(pkgJson)) continue;
    const { bin } = JSON.parse(readFileSync(pkgJson, 'utf8'));
    const rel = typeof bin === 'string' ? bin : bin?.hugo;
    if (rel) return path.join(pkgDir, rel);
  }
  return null;
}

const hugoBin = resolveHugoBin();
if (!hugoBin) {
  console.error(
    '[run-hugo] hugo-extended not found — run `npm run install:all` first.',
  );
  process.exit(127);
}

const { status, error } = spawnSync(
  process.execPath,
  [hugoBin, ...process.argv.slice(2)],
  { stdio: 'inherit' },
);
if (error) {
  console.error(`[run-hugo] ${error.message}`);
  process.exit(1);
}
process.exit(status ?? 1);
