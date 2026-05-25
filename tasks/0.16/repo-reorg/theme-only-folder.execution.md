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

Exit criterion: all three install modes build locally; the spike-notes matrix is
complete with exact one-line edits.

Status (2026-05-24): **exit criterion met.** All three install modes built
locally against the pushed spike branch
(`chalin/docsy@chalin-m24-monorepo-2026-0520`), each with full styling (~370 KB
compiled CSS + Font Awesome webfonts). NPM and HUGO_MODULE are a clean one-line
consumer config edit. The non-module clone is a one-line _config_ edit too, but
its _setup procedure_ gained a step (theme deps now install into
`themes/docsy/theme/`, and the empty Hugo-module placeholder dirs must be
generated explicitly since `theme/package.json` carries no lifecycle scripts) —
a Phase 5 get-started docs follow-up, not a merge blocker. Full matrix and exact
commands are in [spike-notes][] Phase 2.

[spike-notes]: ./spike-notes.md

### Phase 3: GitHub CI

Lift Phase 2 into Actions on the same branch.

- Update `.github/workflows/smoke.yaml` and `.github/workflows/test.yaml` for
  the new paths.
- Push the spike branch and watch the Windows + Ubuntu matrix go green.
- Fix any platform-specific issues (Windows in particular).

Exit criterion: full CI matrix green on the spike branch. **Decision gate to
merge to `main`.** If everything above held, the canonical move lands.

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

## Out of scope (this plan)

See the plan's [What this plan does not change][plan-defer] section for the
canonical list of deferred work.

[plan-defer]: ./theme-only-folder.plan.md#tof-repo-layout

## Tracking

- Parent issue: [#2617][]. Keep a phase checklist there (or sub-issues, if the
  team prefers) so progress is visible.
- Spike notes: `tasks/0.16/repo-reorg/spike-notes.md`, grown through Phases 1–3.
- One feature branch (currently `chalin-m24-monorepo-2026-0520`) carries Phases
  0–3. Phases 4–5 land as separate PRs against `main` after the spike merges.

[#2617]: https://github.com/google/docsy/issues/2617
