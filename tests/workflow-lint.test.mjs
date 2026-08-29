// Workflow lint: the committed workflows must actually execute the checks
// they claim to. Sibling of tests/supply-chain-audit.test.mjs, which owns
// install/provenance invariants over the same files; this file owns
// check-execution integrity. Both walk the workflow YAML independently: an
// independent walk beats cross-test-file coupling.
//
// Current subject: the authoritative visual net (tests/visual/). A lint
// over careless workflow edits, not a security boundary: it catches the
// mistakes that would silently weaken the net (an env entry that flips the
// update refusal, a dropped or condition-gated comparison step, a redirect
// to the wrong working tree). Deliberate subversion is diff review's job.

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

// Env keys that flip or gate the visual suite's update refusal, or steer
// Puppeteer's browser download/launch (PUPPETEER_* covers executable-path
// and download-origin overrides): a workflow env entry touching any of
// them weakens the net.
const visualEnvDeny = (key) => {
  const k = key.toUpperCase();
  return (
    k === 'UPDATE_VISUAL_GOLDENS' ||
    k === 'CI' ||
    k === 'GITHUB_ACTIONS' ||
    k.startsWith('PUPPETEER_')
  );
};
// Run-step shapes reaching the update lane or the browser configuration:
// the env-shadow prefix and the direct script call.
const updateLaneRe =
  /UPDATE_VISUAL_GOLDENS|update:visual-goldens|\b(?:CI|GITHUB_ACTIONS|PUPPETEER_\w+)=/;

test('workflows: the visual net runs unconditionally as reviewed', () => {
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
            !visualEnvDeny(key),
            `${id} env ${key} leaves the visual update refusal intact`,
          );
        }
      }
      for (const step of job.steps ?? []) {
        for (const key of Object.keys(step.env ?? {})) {
          assert.ok(
            !visualEnvDeny(key),
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
      if (jobId === 'visual') {
        visualJobs += 1;
        assert.ok(!('if' in job), `${id} job runs unconditionally`);
        assert.ok(
          !('continue-on-error' in job),
          `${id} job failures fail the workflow`,
        );
        // Reachability: a needs edge can skip the job (skipped-by-needs is
        // neutral, the workflow stays green), and moving it behind narrower
        // triggers un-runs it on PRs while every step pin still passes.
        assert.ok(!('needs' in job), `${id} runs without needs gating`);
        assert.ok(
          'pull_request' in (workflow.on ?? {}) &&
            workflow.on.pull_request == null,
          `${file} keeps an unfiltered pull_request trigger`,
        );
        // A defaults.run.working-directory (workflow- or job-level, or on
        // a step) would re-point the pinned npm commands at a different
        // package.json whose scripts can no-op the whole net.
        assert.ok(!('defaults' in job), `${id} uses the workflow defaults`);
        assert.ok(
          !workflow.defaults?.run?.['working-directory'],
          `${file} sets no workflow-level working directory`,
        );
        assert.equal(
          job['runs-on'],
          'ubuntu-latest',
          `${id} runs on the authoritative platform`,
        );
        // Positive execution pin: the deny rules above can't see an edit
        // that simply drops or conditions the comparison step, so the
        // visual job's step sequence is asserted whole — action steps
        // included: an inserted action could replace the workspace, and a
        // checkout `ref`/`repository`/`path` override would test a branch
        // other than the PR's (SHA pinning stays the supply-chain audit's
        // job). Job-level fields can skip or error-mask the whole job
        // before any step runs, and the runner is what makes Linux
        // authoritative. The job id is the contract: renaming `visual`
        // fails the count assertion at the end.
        assert.deepEqual(
          (job.steps ?? []).map((step) => ({
            uses: step.uses ? step.uses.split('@')[0] : null,
            run: step.run ?? null,
            conditioned: 'if' in step || 'continue-on-error' in step,
            redirected: 'working-directory' in step || 'shell' in step,
            with: Object.keys(step.with ?? {}).sort(),
          })),
          [
            {
              uses: 'actions/checkout',
              run: null,
              conditioned: false,
              redirected: false,
              with: ['persist-credentials'],
            },
            {
              uses: 'actions/setup-node',
              run: null,
              conditioned: false,
              redirected: false,
              with: ['cache', 'node-version-file'],
            },
            {
              uses: null,
              run: 'npm run install:safe',
              conditioned: false,
              redirected: false,
              with: [],
            },
            {
              uses: null,
              run: 'npm run install:browser',
              conditioned: false,
              redirected: false,
              with: [],
            },
            {
              uses: null,
              run: 'npm run test:visual',
              conditioned: false,
              redirected: false,
              with: [],
            },
            {
              uses: null,
              run: 'npm run -s is:clean',
              conditioned: false,
              redirected: false,
              with: [],
            },
            {
              uses: 'actions/upload-artifact',
              run: null,
              conditioned: true,
              redirected: false,
              with: ['name', 'path'],
            },
          ],
          `${id} matches the reviewed step shape (with values stay in-diff review's job)`,
        );
        // The one allowed condition: diffs upload on failure only.
        assert.equal(
          job.steps.at(-1).if,
          'failure()',
          `${id} uploads diffs only on failure`,
        );
      }
    }
  }
  assert.equal(visualJobs, 1, 'the visual job exists and was pinned');
});
