// Refresh tests/visual/goldens/linux/ from CI: downloads the visual-diffs
// artifact of the current branch's latest test-workflow run (the visual job
// uploads it when it fails) and installs the actual shots as the Linux
// goldens. One-command refresh for devs without a Linux machine; requires
// the GitHub CLI (gh) to be authenticated.
// Run via: npm run update:visual-goldens:linux

import { spawnSync } from 'node:child_process';
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const goldenDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'goldens',
  'linux',
);

function run(cmd, args) {
  const r = spawnSync(cmd, args, { encoding: 'utf8' });
  if (r.status !== 0) {
    throw new Error(`${cmd} ${args.join(' ')} failed:\n${r.stdout}${r.stderr}`);
  }
  return r.stdout.trim();
}

const branch = run('git', ['branch', '--show-current']);
// completed only: an in-progress run's artifact set is racy.
const runId = run('gh', [
  'run',
  'list',
  '--workflow',
  'test',
  '--branch',
  branch,
  '--status',
  'completed',
  '--limit',
  '1',
  '--json',
  'databaseId',
  '--jq',
  '.[0].databaseId',
]);
if (!runId) throw new Error(`no test-workflow run found for branch ${branch}`);
console.log(`downloading visual-diffs from run ${runId} (branch ${branch})`);

const tmp = mkdtempSync(path.join(os.tmpdir(), 'visual-diffs-'));
try {
  run('gh', ['run', 'download', runId, '-n', 'visual-diffs', '-D', tmp]);
  const actuals = readdirSync(tmp).filter((f) => f.endsWith('-actual.png'));
  if (actuals.length === 0) {
    throw new Error('artifact contains no *-actual.png shots');
  }
  mkdirSync(goldenDir, { recursive: true });
  for (const f of actuals) {
    const golden = path.join(goldenDir, f.replace(/-actual\.png$/, '.png'));
    copyFileSync(path.join(tmp, f), golden);
    console.log(`wrote ${path.relative(process.cwd(), golden)}`);
  }
  console.log('review the images, then commit and push; CI must go green');
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
