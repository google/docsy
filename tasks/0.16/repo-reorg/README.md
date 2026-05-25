---
title: TOF (0.16 repo reorg) — index
date: 2026-05-24
issue: https://github.com/google/docsy/issues/2617
cSpell:ignore: fontawesome
---

Planning materials for the **Theme-Only Folder (TOF)** refactor in Docsy 0.16.
Upstream tracking: issue [#2617][].

## In this folder

| File                                   | Purpose                                                                                |
| -------------------------------------- | -------------------------------------------------------------------------------------- |
| [theme-only-folder.plan.md][plan]      | Design contract: end state, package boundary, acceptance criteria, non-goals.          |
| [theme-only-folder.execution.md][exec] | Sequencing roadmap: Phases 0–5, with per-phase exit criteria and status notes.         |
| [spike-notes.md][spike]                | Living log of the compatibility spike (commands, consumer-config edits, observations). |
| [monorepo-extra-analysis.md][analysis] | Earlier analysis that informed the spike and shaped TOF; retained for context.         |

[plan]: ./theme-only-folder.plan.md
[exec]: ./theme-only-folder.execution.md
[spike]: ./spike-notes.md
[analysis]: ./monorepo-extra-analysis.md
[#2617]: https://github.com/google/docsy/issues/2617

## Status at a glance

Updated 2026-05-24. Per-phase detail (with exit criteria) lives in the
[execution plan][exec].

| Phase                                | Status                                                       |
| ------------------------------------ | ------------------------------------------------------------ |
| 0 — structural move                  | Landed; `_prepare` + `_diff:check` regression pending        |
| 1 — `docsy.dev` consumes TOF         | Local build green; Netlify preview pending                   |
| 2 — local smoke tests (CI emulation) | Done; all 3 modes build locally (clone setup → Phase 5 docs) |
| 3 — GitHub CI                        | Pending                                                      |
| 4 — `docsy-example`                  | Pending (post-pre-release)                                   |
| 5 — docs and release notes           | Pending                                                      |

Next concrete steps, in order:

1. Re-run `npm run _prepare` and `npm run _diff:check` end-to-end against the
   new layout to close out Phase 0.
2. Push the branch and confirm a Netlify deploy preview of `docsy.dev` builds.
3. Phase 3: lift the now-green local smoke matrix into GitHub Actions
   (`smoke.yaml` / `test.yaml`) and watch the Windows + Ubuntu matrix. This is
   the decision gate to merge to `main`.
4. Phase 5 carry-over: update the get-started "clone" docs for the new
   non-module setup procedure recorded in [spike-notes][spike] Phase 2.
