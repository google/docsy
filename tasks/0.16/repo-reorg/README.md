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

Updated 2026-05-25. Per-phase detail (with exit criteria) lives in the
[execution plan][exec]. **Phases 2 and 3 are now iterated as a pair** (like 0
and 1): a local-only smoke pass does not close Phase 2 until the same matrix is
green in CI.

| Phase                                | Status                                                           |
| ------------------------------------ | ---------------------------------------------------------------- |
| 0 — structural move                  | Merged; `_prepare` + `_diff:check` regression pending            |
| 1 — `docsy.dev` consumes TOF         | Local build green; Netlify preview pending                       |
| 2 — local smoke tests (CI emulation) | In progress (paired w/ 3); local builds OK, CI blocked           |
| 3 — GitHub CI                        | In progress; CI red — no Hugo executable on runners (fix in TBD) |
| 4 — `docsy-example`                  | Pending (post-pre-release)                                       |
| 5 — docs and release notes           | Pending                                                          |

Next concrete steps, in order:

1. **Phases 2 + 3 loop (active):** make a Hugo executable available to the smoke
   matrix in CI, then get the Windows + Ubuntu matrix green — the decision gate
   to merge. Root cause and solution options (A–E, leaning C) are in
   [spike-notes][spike] Phase 3.
2. Phase 0 carry-over: re-run `npm run _prepare` and `npm run _diff:check`
   end-to-end against the new layout.
3. Phase 1 carry-over: confirm a Netlify deploy preview of `docsy.dev` builds.
4. Phase 5 carry-over: update the get-started "clone" docs for the new
   non-module setup procedure recorded in [spike-notes][spike] Phase 2.
5. Later (after Phases 2–3): formalize the smoke matrix as a local Vitest/TS
   test harness — see the execution plan's "Later" section.
