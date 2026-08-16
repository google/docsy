// Workflow lint: the committed workflows must actually execute the checks
// they claim to, unsubverted. Sibling of tests/supply-chain-audit.test.mjs,
// which owns install/provenance invariants over the same files; this file
// owns check-execution integrity. Both walk the workflow YAML
// independently (see the audit's stance on duplicated walks).
//
// Current subject: the authoritative visual net (tests/visual/). The
// in-suite CI refusal can't resist a workflow step that rewrites its own
// environment (CI= GITHUB_ACTIONS= npm run …) or a dropped/if-guarded
// comparison step, so committed workflows are the right boundary.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const workflowsDir = path.join(repoRoot, '.github', 'workflows');

// Env keys that flip or gate the visual suite's update refusal: a workflow
// env entry touching any of them subverts the net.
const visualEnvDeny = new Set([
  'UPDATE_VISUAL_GOLDENS',
  'CI',
  'GITHUB_ACTIONS',
]);
// Run-step shapes reaching the update lane: the env-shadow prefix and the
// direct script call.
const updateLaneRe =
  /UPDATE_VISUAL_GOLDENS|update:visual-goldens|\b(?:CI|GITHUB_ACTIONS)=/;

test('workflows: the visual net runs unconditionally and unsubverted', () => {
  const files = fs.readdirSync(workflowsDir).filter((f) => /\.ya?ml$/.test(f));
  assert.ok(files.length > 0, 'workflow files were found');

  let visualJobs = 0;
  for (const file of files) {
    const workflow = parse(
      fs.readFileSync(path.join(workflowsDir, file), 'utf8'),
    );
    for (const [jobId, job] of Object.entries(workflow.jobs ?? {})) {
      const id = `${file} ${jobId}`;
      for (const env of [workflow.env, job.env]) {
        for (const key of Object.keys(env ?? {})) {
          assert.ok(
            !visualEnvDeny.has(key.toUpperCase()),
            `${id} env ${key} leaves the visual update refusal intact`,
          );
        }
      }
      for (const step of job.steps ?? []) {
        for (const key of Object.keys(step.env ?? {})) {
          assert.ok(
            !visualEnvDeny.has(key.toUpperCase()),
            `${id} step env ${key} leaves the visual update refusal intact`,
          );
        }
        if (typeof step.run === 'string') {
          assert.doesNotMatch(
            step.run.replace(/\\\r?\n/g, ' '),
            updateLaneRe,
            `${id} run step leaves the visual-goldens update lane untouched`,
          );
        }
      }
      // Positive execution pin: the deny rules above can't see an edit
      // that simply drops or conditions the comparison step, so the
      // visual job's run sequence is asserted whole (deletion,
      // reordering, continue-on-error, and step conditions all fail).
      // Job-level fields can skip or error-mask the whole job before any
      // step runs, and the runner is what makes Linux authoritative.
      // The job id is the contract: renaming `visual` fails the count
      // assertion at the end.
      if (jobId === 'visual') {
        visualJobs += 1;
        assert.ok(!('if' in job), `${id} job carries no condition`);
        assert.ok(
          !('continue-on-error' in job),
          `${id} job failures fail the workflow`,
        );
        assert.equal(
          job['runs-on'],
          'ubuntu-latest',
          `${id} runs on the authoritative platform`,
        );
        assert.deepEqual(
          (job.steps ?? [])
            .filter((step) => typeof step.run === 'string')
            .map(({ run, ...rest }) => ({
              run,
              conditioned: 'if' in rest || 'continue-on-error' in rest,
            })),
          [
            { run: 'npm run install:safe', conditioned: false },
            { run: 'npm run install:browser', conditioned: false },
            { run: 'npm run test:visual', conditioned: false },
          ],
          `${id} runs exactly the reviewed unconditional sequence`,
        );
      }
    }
  }
  assert.equal(visualJobs, 1, 'the visual job exists and was pinned');
});
