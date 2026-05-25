#!/usr/bin/env node
// Resolve an installed `hugo-extended` and run it, forwarding all CLI args.
//
// Why this exists: the smoke tests (scripts/make-site.sh) need an *extended*
// Hugo binary, but the repo declares `hugo-extended` only in
// docsy.dev/devDependencies (single source of truth, version pinned via
// package.json `config.hugo_version`). This helper reuses that install instead
// of relying on `npx hugo` resolving a binary on PATH.
//
// Why it is cross-OS: `hugo-extended`'s bin entry is a Node ESM wrapper
// (`dist/cli.mjs`) that selects and execs the correct platform binary itself.
// We invoke that wrapper with the current `node`, so there is no dependency on
// POSIX symlinks or Windows `.cmd`/`.ps1` shims.

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');

// Search order: docsy.dev (canonical declaration) first, then the repo root in
// case `hugo-extended` is ever hoisted/declared there. We look the package up
// by its node_modules path rather than via `require.resolve(...package.json)`,
// which an `exports` map can block (ERR_PACKAGE_PATH_NOT_EXPORTED).
const searchBases = [path.join(repoRoot, 'docsy.dev'), repoRoot];

function resolveHugoBin() {
  for (const base of searchBases) {
    const pkgDir = path.join(base, 'node_modules', 'hugo-extended');
    const pkgJsonPath = path.join(pkgDir, 'package.json');
    if (!existsSync(pkgJsonPath)) continue;
    try {
      const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf8'));
      const binRel = typeof pkg.bin === 'string' ? pkg.bin : pkg.bin?.hugo;
      if (binRel) {
        const binPath = path.join(pkgDir, binRel);
        if (existsSync(binPath)) return binPath;
      }
    } catch {
      // Unreadable/!JSON manifest under this base; try the next one.
    }
  }
  return null;
}

const hugoBin = resolveHugoBin();
if (!hugoBin) {
  console.error(
    '[run-hugo] Could not find an installed `hugo-extended`.\n' +
      '          Install it first, e.g.:  npm run docsy.dev-install',
  );
  process.exit(127);
}

const result = spawnSync(
  process.execPath,
  [hugoBin, ...process.argv.slice(2)],
  {
    stdio: 'inherit',
  },
);

if (result.error) {
  console.error(`[run-hugo] Failed to run Hugo: ${result.error.message}`);
  process.exit(1);
}
process.exit(result.status ?? 1);
