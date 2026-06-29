#!/usr/bin/env node
// The `lychee-norm-cache` bin: run lychee over a built site and normalize
// .lycheecache for byte-stable reruns. Runs in the cwd (the site root), so any
// Docsy-based site can reuse it. Run with `--help` for usage.
//
// When GITHUB_TOKEN is unset, a token is bridged from the gh CLI — lychee reads
// GITHUB_TOKEN, which also lifts the github.com rate limit; CI sets it directly.

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const INSTALL_HINT = 'https://github.com/lycheeverse/lychee#installation';

const USAGE = `Usage: lychee-norm-cache [lychee args...]

Run lychee over this site's built ./public output, then normalize .lycheecache
so reruns stay byte stable. Bridges a GitHub token from the gh CLI when
GITHUB_TOKEN isn't set; extra arguments pass through to lychee.

  -h, --help   show this help

Requires the lychee binary on your PATH and a lychee.toml at the site root.
Run \`lychee --help\` for all link-checking options.`;

// --- pure helpers (unit-tested) --------------------------------------------

// Prefer an existing GITHUB_TOKEN; otherwise fall back to the gh CLI; '' if neither.
export function resolveToken({ env = process.env, runGh = ghAuthToken } = {}) {
  const fromEnv = (env.GITHUB_TOKEN ?? '').trim();
  if (fromEnv) return fromEnv;
  return (runGh() ?? '').trim();
}

// Sort .lycheecache by raw byte value (matching `LC_ALL=C sort`) and terminate
// with a single newline, so lychee's nondeterministic cache writes diff cleanly.
// Byte order via Buffer.compare — not JS string order, which compares UTF-16
// code units and can diverge from LC_ALL=C on non-ASCII URLs.
export function sortCacheText(text) {
  const lines = text.split('\n');
  if (lines.length && lines[lines.length - 1] === '') lines.pop();
  if (lines.length === 0) return '';
  lines.sort((a, b) => Buffer.compare(Buffer.from(a), Buffer.from(b)));
  return lines.join('\n') + '\n';
}

// --- lychee invocation -----------------------------------------------------

function ghAuthToken() {
  const r = spawnSync('gh', ['auth', 'token'], { encoding: 'utf8' });
  return r.error || r.status !== 0 ? '' : (r.stdout ?? '').trim();
}

function hasLychee() {
  return !spawnSync('lychee', ['--version'], { stdio: 'ignore' }).error;
}

function main(argv) {
  if (argv.includes('-h') || argv.includes('--help')) {
    console.log(USAGE);
    return 0;
  }

  if (!hasLychee()) {
    process.stderr.write(`[help] lychee not found. Install: ${INSTALL_HINT}\n`);
    return 1;
  }

  const cwd = process.cwd();
  let publicDir;
  try {
    publicDir = realpathSync(path.join(cwd, 'public'));
  } catch {
    process.stderr.write(
      `[help] ${path.join(cwd, 'public')} not found. Build the site first.\n`,
    );
    return 1;
  }

  const token = resolveToken();
  const status =
    spawnSync(
      'lychee',
      ['--config', 'lychee.toml', '--root-dir', publicDir, ...argv, publicDir],
      { stdio: 'inherit', env: { ...process.env, GITHUB_TOKEN: token } },
    ).status ?? 1;

  // Normalize the cache even on failure, so a partial run still leaves a stable
  // .lycheecache.
  const cachePath = path.join(cwd, '.lycheecache');
  if (existsSync(cachePath)) {
    writeFileSync(cachePath, sortCacheText(readFileSync(cachePath, 'utf8')));
  }

  return status;
}

// Real-path compare, not `file://${argv[1]}`: npm links bins as symlinks, so
// argv[1] is the symlink while import.meta.url is the real path.
function isEntryPoint() {
  try {
    return realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
}

if (isEntryPoint()) {
  process.exit(main(process.argv.slice(2)));
}
