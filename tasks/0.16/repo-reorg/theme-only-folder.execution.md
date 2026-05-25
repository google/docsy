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

Status (2026-05-24): structural move landed on `chalin-m24-monorepo-2026-0520`.
`theme/`, `scripts/sync-theme-deps.mjs`, `docsy.dev`'s `_install-theme-deps`
postinstall, and the `.prettierignore` / `.markdownlint-cli2.yaml` path updates
are all in place. `_prepare` / `_diff:check` regression check is still pending —
Phase 0 / Phase 1 ran as a tight loop and `docsy.dev` already builds (see Phase
1), but the maintainer `_prepare` chain has not yet been re-exercised end-to-end
against the new layout.

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
- Confirm Netlify deploy previews work from the spike branch (update
  `docsy.dev/scripts/_install.sh` so the Netlify command sequence
  `scripts/_install.sh && npm run build:preview` installs both the repo-root and
  `docsy.dev` packages).

Exit criterion: `docsy.dev` builds locally and on Netlify against the spike
branch.

Status (2026-05-24): **local build exit criterion met.** `docsy.dev` builds from
`theme/` with the one-line `theme: [docsy/theme]` consumer config change and no
symlinks anywhere (223 EN + 218 FR pages). `docsy.dev/scripts/_install.sh` now
installs both the root and `docsy.dev` packages (workspaces are empty), so the
Netlify command sequence works in principle. Netlify deploy preview verification
is still pending.

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

Status (2026-05-25): **reopened — local builds pass, CI does not.** All three
modes build locally against the spike branch, each with full styling (~370 KB
compiled CSS + Font Awesome webfonts); matrix and exact one-line edits are in
[spike-notes][] Phase 2. But the local runs **masked a CI gap**: each set `HUGO`
to an extended binary explicitly (`docsy.dev/node_modules/.bin/hugo`). On CI,
`make-site.sh`'s default `npx hugo` finds no executable, because `docsy.dev` is
no longer an npm workspace — root `npm install` used to hoist `hugo-extended`
(declared in `docsy.dev/devDependencies`) into the repo-root
`node_modules/.bin/` where the smoke test's upward `npx hugo` search resolved
it; with `workspaces: []` that binary is gone. So Phase 2 is **not** complete:
it is now iterated together with Phase 3 (the Hugo-availability fix and the CI
run land as one loop). The non-module-clone setup-step follow-up for Phase 5
still stands.

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
  `install:all` root script (`npm install && npm run docsy.dev-install`) and
  switched `smoke.yaml`'s "Setup workspace" step to `npm run install:all`, so
  `docsy.dev`'s `hugo-extended` is installed where `run-hugo.mjs` looks. Chose
  `install:all` over a lean targeted install for consistency + onboarding value.
- Update `.github/workflows/smoke.yaml` and `.github/workflows/test.yaml` for
  the new paths.
- Push the spike branch and watch the Windows + Ubuntu matrix go green.
- Fix any platform-specific issues (Windows in particular).

Exit criterion: full CI matrix green on the spike branch (which also closes
Phase 2). **Decision gate to merge to `main`.** If everything above held, the
canonical move lands.

Status (2026-05-25): **implemented locally; awaiting a real CI run.** Hugo
resolution decided and built (`scripts/run-hugo.mjs`, the `make-site.sh`
default), and the smoke job now runs `npm run install:all` to provide
`hugo-extended`. All verified locally (NPM + HUGO_MODULE build green with no
`HUGO` override). Remaining: push and confirm the Windows + Ubuntu matrix — the
merge gate.

### Phase 4: `docsy-example`

Coordinated PR in the `docsy-example` repo that bumps the import path.

- Land the `docsy-example` PR after a Docsy 0.16 pre-release (or against a
  pinned commit) so the example tracks reality.

Exit criterion: `docsy-example` builds against 0.16-pre and passes its own smoke
checks.

### Phase 5: docs and release notes

The user-facing payload, derived from the spike notes.

- Update get-started pages with the new theme path / import path.
- Update the changelog and release blog post; the migration section reads the
  exact snippets out of `spike-notes.md`.
- Update `README.md` if it references the old install shape.

Exit criterion: a reviewer who has not seen the design conversation can upgrade
to 0.16 by following only the release notes.

## Local test harness

**Seed (done):** `tests/smoke.test.mjs`, run via `npm run test:smoke`. It uses
Node's built-in test runner (`node --test`) — **no new deps** — to drive the
three install modes on the developer's own OS and assert each produces a real,
fully-styled site — a rendered home page that links the exact compiled
stylesheet (> 100 KB), plus a generated sitemap — not just a zero exit. It
covers what the CI smoke matrix runs (NPM, HUGO_MODULE) **plus** the non-module
clone, which CI does not exercise. Target is parameterized via `DOCSY_REPO` /
`DOCSY_VERS` (defaults `google/docsy@task/repo-reorg-2026-05`). Prereq:
`npm run install:all` (for `hugo-extended`). It is deliberately kept out of
`test:tooling` / CI `ci:post` (slow, network-bound).

**Later (not started):** upgrade the seed to a **Vitest** harness with all code
in **TypeScript executed directly under Node** (no separate compile step). The
`node:test` `describe`/`test` shape maps closely onto Vitest, so the seed is the
migration starting point, not throwaway. This is a follow-on to TOF, not part of
the move.

## Out of scope (this plan)

See the plan's [What this plan does not change][plan-defer] section for the
canonical list of deferred work.

[plan-defer]: ./theme-only-folder.plan.md#tof-repo-layout

## Tracking

- Parent issue: [#2617][]. Keep a phase checklist there (or sub-issues, if the
  team prefers) so progress is visible.
- Spike notes: `tasks/0.16/repo-reorg/spike-notes.md`, grown through Phases 1–3.
- The first spike branch (the Phase 0 structural move,
  `chalin-m24-monorepo-2026-0520`) has merged. Phases 2–3 continue on a
  follow-up branch atop it. Phases 4–5 land as separate PRs against `main`.

[#2617]: https://github.com/google/docsy/issues/2617
