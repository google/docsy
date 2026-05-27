---
title: TOF execution plan (compatibility spike work)
date: 2026-05-21
status: draft
companion: ./theme-only-folder.plan.md
issue: https://github.com/google/docsy/issues/2617
cSpell:ignore: fontawesome
---

## About this doc

Very-high-level execution roadmap for the [TOF plan][plan]. It defines the order
of operations for the compatibility spike work and the canonical move, broken
into phases that are independently checkable and, where practical, independently
mergeable.

The plan itself is the design contract. This doc is purely about sequencing. For
a bird's-eye view of where we are and what's next, see the folder
[README][readme].

[plan]: ./theme-only-folder.plan.md
[readme]: ./README.md

## Working principles

- **Incremental as far as practical.** Phase 0 (the structural move) is
  unavoidably large. Phases 1+ are surgical and validate one consumer surface at
  a time.
- **Phases 0 and 1 are intertwined in practice.** Expect to cycle between moving
  files (Phase 0) and trying the `docsy.dev` build (Phase 1) until both exit
  criteria are met. Treat them as a tight loop, not two sequential blocks.
- **Phases 2 and 3 are a pair, too.** Local smoke (Phase 2) and CI smoke
  (Phase 3) validate the _same_ install matrix on two surfaces. A local-only
  green does **not** close Phase 2 if it relies on environment fixups (e.g. an
  ad-hoc `HUGO` override) that CI does not have. Iterate them as one loop until
  the same matrix passes both locally and in CI.
- **Single feature branch through Phases 0–3.** All consumer-surface validation
  runs against the same tree. Merge to `main` only after Phase 3 passes.
- **Running spike notes** live at `tasks/0.16/repo-reorg/spike-notes.md`. They
  accumulate the exact per-install-mode commands and confirmed config edits. The
  release-note migration snippets are read out of this file at Phase 5.
- **One-line promise.** The TOF plan promises a single-line consumer config edit
  per install mode. If any phase shows the migration growing past that, halt and
  iterate on the design before continuing.

## Phases

### Phase 0: structural move

The bulk-change phase. Done in a single feature branch, ideally one PR (or a
small stack) so the move is reviewable as a unit.

- Create `theme/` and move the canonical theme files into it (`assets`, `i18n`,
  `images`, `layouts`, `static`, `hugo.yaml`, `theme.toml`, `go.mod`, `go.sum`).
- Update `theme/go.mod` `module` declaration to `github.com/google/docsy/theme`.
- Drop the legacy `../../node_modules/*` escape mounts from `theme/hugo.yaml`;
  keep only the canonical `node_modules/<pkg>` form.
- Update generators and patch scripts under `scripts/` to read/write under
  `theme/` (`mkdirp-hugo-mod.js`, `_gen-chroma-style.sh`,
  `refresh-sass-variables.pl`, `scrollspy-patch/*`, `getHugoModules/`,
  `make-site.sh`). Update root `package.json` script globs accordingly.
- Add `theme/package.json` as a private mirror of root's theme deps, plus
  `scripts/sync-theme-deps.mjs` and the hook wiring (`_prepare`,
  `postupdate:dep`, `postupdate:packages`).
- Confirm `_prepare` (and downstream `ci:prepare`) succeeds against the new
  paths and `_diff:check` is clean.

Exit criterion: file move is clean; `_prepare` + `_diff:check` pass; no consumer
surface validated yet.

Status (2026-05-27): **exit criterion met — landed on `main` via [#2641][].**
The structural move plus the `_prepare` / `_diff:check` regression check have
landed.

### Phase 1: `docsy.dev` consumes TOF

Make Docsy's primary end-to-end test (the website) build against the new layout.
This is the most informative single check.

- Update `docsy.dev` config to use the new theme path (`theme: [docsy/theme]`).
- Add the `_install-theme-deps` postinstall to `docsy.dev/package.json` so theme
  runtime deps land in `docsy.dev/node_modules/` (consumer-cwd lookup).
- Build `docsy.dev` locally. Iterate on TOF if anything in the build chain
  surprises.
- Record the exact before/after config change and any maintainer-workflow
  observations in `tasks/0.16/repo-reorg/spike-notes.md`.
- Confirm Netlify deploy previews work from the task branch
  (`docsy.dev/netlify.toml`: `npm run install:all && npm run build:preview`, and
  the production variant; `docsy.dev`'s `install:all` installs the repo root
  then `docsy.dev`).

Exit criterion: `docsy.dev` builds locally and on Netlify against the task
branch.

Status (2026-05-27): **exit criterion met.** `docsy.dev` builds from `theme/`
with the one-line `theme: [docsy/theme]` consumer config change and no symlinks
anywhere (223 EN + 218 FR pages), and the Netlify deploy preview is green on
[#2640][]. Netlify uses `npm run install:all && npm run build:preview` (and
`build:production` in production); `docsy.dev`'s `install:all` installs the repo
root then `docsy.dev` (workspaces are empty).

### Phase 2: local smoke tests (CI emulation)

Emulate locally what GitHub Actions will eventually run, one install mode at a
time.

- Update `scripts/make-site.sh` for the new install paths.
- Run `make-site.sh -s NPM`. Confirm the one-line user edit; record in spike
  notes.
- Run `make-site.sh -s HUGO_MODULE`. Confirm; record.
- Validate non-module theme install: `hugo new site` + `git clone` Docsy into
  `themes/docsy/`. Confirm; record.

Exit criterion (paired with Phase 3): all three install modes build with the
_same_ Hugo-resolution mechanism CI uses, and the spike-notes matrix is complete
with exact one-line edits. A local-only pass that relies on an ad-hoc `HUGO`
override does not count.

Status (2026-05-27): **exit criterion met.** All three install modes build with
the same Hugo-resolution mechanism CI uses (`run-hugo.mjs`, no `HUGO` override),
local smoke tests pass on `main`, and the CI smoke matrix is green ([#2640][]).
Earlier local-only runs had masked a gap — they set `HUGO` explicitly, while
CI's `npx hugo` found nothing once `docsy.dev` stopped being a workspace (so
`hugo-extended` was no longer hoisted to the repo root). Closing that gap is
exactly what `run-hugo.mjs` + `install:all` do (Phase 3). The non-module-clone
setup-step follow-up for Phase 5 still stands.

[spike-notes]: ./spike-notes.md

### Phase 3: GitHub CI

Lift Phase 2 into Actions on the same branch. Paired with Phase 2 (see Working
principles).

- **Resolve Hugo availability on the runner.** Root cause: `docsy.dev` is no
  longer an npm workspace, so root `npm install` no longer hoists
  `hugo-extended` into the repo-root `node_modules/.bin/` where the smoke test's
  `npx hugo` resolved it. **Decided: option E, made cross-OS** —
  `scripts/run-hugo.mjs` reuses `docsy.dev`'s installed `hugo-extended` (version
  single-sourced via `config.hugo_version`) and is now the `make-site.sh`
  default; verified locally for NPM + HUGO_MODULE. See [spike-notes][] Phase 3.
- **Make `hugo-extended` available to the smoke job** (done): added an
  `install:all` root script (`npm run docsy.dev-install && npm install`) and
  switched `smoke.yaml`'s "Setup workspace" step to `npm run install:all`, so
  `docsy.dev`'s `hugo-extended` is installed where `run-hugo.mjs` looks.
  (`docsy.dev-install` runs first so `test.yaml`'s
  `install:all -- --omit=optional` lands the flag on the final root
  `npm install`.) Chose `install:all` over a lean targeted install for
  consistency + onboarding value.
- Update `.github/workflows/smoke.yaml` and `.github/workflows/test.yaml` for
  the new paths (done).
- Push the branch and watch the Windows + Ubuntu matrix go green (done).

Exit criterion: full CI matrix green on the task branch (which also closes Phase
2). **Decision gate to merge to `main`.** If everything above held, the
canonical move could land.

Status (2026-05-27): **exit criterion met — CI matrix green ([#2640][]).** Both
`test` (build; ubuntu + windows) and `smoke` (new-site NPM + HUGO_MODULE; ubuntu

- windows) pass, and the Netlify deploy preview is green. The merge gate is
  satisfied; the canonical move then landed on `main` via [#2641][].

### Phase 4: `docsy-example`

Coordinated work in the `docsy-example` repo that bumps the import path to the
TOF layout. Three parts, in order:

- **(a) Local sibling-repo test (done):** build `docsy-example` against the task
  branch's `theme/` via the local sibling-folder setup, to catch breakage before
  the canonical move lands.
- **(b) Merge the task branch to `main`** via a PR. The canonical move lands.
  Done via [#2641][].
- **(c) Final `docsy-example` config + test against `main`:** bump the
  `docsy-example` import path / `theme:` value to the released `google/docsy`
  layout and confirm a clean build (and its own smoke checks) against `main`.

Exit criterion: `docsy-example` builds against released Docsy from `main` and
passes its own checks.

Status (2026-05-27): (a) done; (b) done via [#2641][]; (c) pending.

### Phase 5: docs and release notes

The user-facing payload, derived from the spike notes.

- Update get-started pages with the new theme path / import path.
- Update the changelog and release blog post; the migration section reads the
  exact snippets out of `spike-notes.md`.
- Update release-process docs so the root release tag and nested module tag
  (`theme/vX.Y.Z`) are created at the same commit.
- Update `README.md` if it references the old install shape.

Exit criterion: a reviewer who has not seen the design conversation can upgrade
to 0.16 by following only the release notes.

## Local test harness

**Seed (done):** `tests/smoke.test.mjs`, run via `npm run test:smoke`. It uses
Node's built-in test runner (node:test) — **no new deps** — to drive the three
install modes on the developer's own OS and assert each produces a real,
fully-styled site — a rendered home page that links the exact compiled
stylesheet (> 100 KB), plus a generated sitemap — not just a zero exit. It
covers what the CI smoke matrix runs (NPM, HUGO_MODULE) **plus** the non-module
clone, which CI does not exercise. Target repo/branch via `--repo` / `--branch`
(defaults: `google/docsy`, `main`; the `test:smoke` npm script also passes
`--branch main`). During TOF rollout on a task branch:
`npm run test:smoke -- --branch task/repo-reorg-2026-05`. Prereq:
`npm run install:all` (for `hugo-extended`). Deliberately kept out of
`test:tooling` / CI `ci:post` (slow, network-bound).

**Later (not started):**

- Upgrade the seed to a **Vitest** harness with all code in **TypeScript
  executed directly under Node** (no separate compile step). The `node:test`
  `describe`/`test` shape maps closely onto Vitest, so the seed is the migration
  starting point, not throwaway.
- Possibly add a 4th smoke case for the `docsy.dev` **sibling-folder** shape
  (`--themesDir ../..`) if/when it is surfaced as a documented power-user setup
  — see [spike-notes][] Phase 1. It is already exercised by the `docsy.dev`
  build, so this is optional coverage, not a gap.

Both are follow-ons to TOF, not part of the move.

## Out of scope (this plan)

See the plan's [What this plan does not change][plan-defer] section for the
canonical list of deferred work.

[plan-defer]: ./theme-only-folder.plan.md#tof-repo-layout

## Tracking

- Parent issue: [#2617][]. Keep a phase checklist there (or sub-issues, if the
  team prefers) so progress is visible.
- Spike notes: `tasks/0.16/repo-reorg/spike-notes.md`, grown through Phases 1–3.
- The main TOF move has merged to `main` via [#2641][].
- Phase 4c and Phase 5 land as follow-up PRs against `main`.

[#2617]: https://github.com/google/docsy/issues/2617
[#2640]: https://github.com/google/docsy/pull/2640
[#2641]: https://github.com/google/docsy/pull/2641
