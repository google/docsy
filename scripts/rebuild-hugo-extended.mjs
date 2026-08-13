import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';

export const RETRY_DELAYS_SECONDS = [0, 2, 5, 10];
export const UNSAFE_HUGO_ENV = [
  'HUGO_BIN_PATH',
  'HUGO_FORCE_STANDARD',
  'HUGO_MIRROR_BASE_URL',
  'HUGO_NO_EXTENDED',
  'HUGO_OVERRIDE_VERSION',
  'HUGO_SKIP_CHECKSUM',
  'HUGO_SKIP_DOWNLOAD',
  'HUGO_SKIP_VERIFY',
];

export function runNpmRebuild({
  env = process.env,
  error = console.error,
  spawn = spawnSync,
} = {}) {
  const npmExecPath = env.npm_execpath;
  if (!npmExecPath) {
    error('npm_execpath is unavailable; run _rebuild:hugo through npm');
    return 1;
  }

  // Use npm's JavaScript CLI directly so Windows needs no command shell.
  const result = spawn(
    process.execPath,
    [npmExecPath, 'rebuild', 'hugo-extended', '--ignore-scripts=false'],
    { env, stdio: 'inherit' },
  );
  if (result.error) {
    error(`Unable to start the Hugo rebuild: ${result.error.message}`);
  }
  return result.status ?? 1;
}

export async function rebuildHugoExtended({
  env = process.env,
  error = console.error,
  log = console.log,
  run,
  wait = (delay) => sleep(delay * 1000),
} = {}) {
  for (const name of UNSAFE_HUGO_ENV) {
    if ((env[name] ?? '') !== '') {
      error(`${name} must be unset for the pinned Hugo rebuild`);
      return 1;
    }
  }

  const rebuild = run ?? (() => runNpmRebuild({ env, error }));
  if (!run && !env.npm_execpath) {
    // Fail before the retry loop: a missing npm CLI path is deterministic.
    return rebuild();
  }
  const attemptCount = RETRY_DELAYS_SECONDS.length;
  for (const [index, delay] of RETRY_DELAYS_SECONDS.entries()) {
    if (delay > 0) {
      log(`Retrying Hugo install in ${delay}s...`);
      await wait(delay);
    }

    log(`Hugo install attempt ${index + 1}/${attemptCount}`);
    if (rebuild() === 0) return 0;
  }

  error(`Hugo install failed after ${attemptCount} attempts`);
  return 1;
}

// Realpaths on both sides so a symlinked invocation can't silently no-op
// (adversarial round 9); importing this module never runs the rebuild.
// No try/catch: an entry-time realpath throw must crash loud, not exit 0.
const isMain =
  Boolean(process.argv[1]) &&
  fs.realpathSync(process.argv[1]) ===
    fs.realpathSync(fileURLToPath(import.meta.url));
if (isMain) process.exitCode = await rebuildHugoExtended();
