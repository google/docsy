---
title: TOF (0.16 repo reorg) — index
date: 2026-05-24
issue: https://github.com/google/docsy/issues/2617
---

Planning materials for the **Theme-Only Folder (TOF)** refactor in Docsy 0.16.
Upstream tracking: issue [#2617][].

This work is split across phases:

- For phases 0-4b, work is submitted via multiple PRs over the task-working
  branch `task/repo-reorg-2026-05`.
- For phase 4c+, work is submitted via PRs over `main`.

## Reviewer hot path

For release-facing review, start with:

1. [theme-only-folder.plan.md][plan] for the intended end state.
2. [spike-notes.md][spike] "Migration snippets for Phase 5" for the final user
   migration text.
3. This README's status table for what is done and what remains.

Use [theme-only-folder.execution.md][exec] only when phase sequencing or a
specific status decision matters.

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
[#2640]: https://github.com/google/docsy/pull/2640
[#2641]: https://github.com/google/docsy/pull/2641

## Status at a glance

Updated 2026-05-27. Per-phase detail (with exit criteria) lives in the
[execution plan][exec]. The canonical TOF move is now on `main` since [#2641][].

| Phase                                | Status                                                          |
| ------------------------------------ | --------------------------------------------------------------- |
| 0 — structural move                  | Done — landed on task branch, and `main`                        |
| 1 — `docsy.dev` consumes TOF         | Done — local + Netlify deploy preview green ([#2640][])         |
| 2 — local smoke tests (CI emulation) | Done — local smoke passes; CI smoke matrix green ([#2640][])    |
| 3 — GitHub CI                        | Done — run-hugo + install:all; full CI matrix green ([#2640][]) |
| 4 — `docsy-example`                  | In progress — (a)/(b) done; (c) pending                         |
| 5 — docs and release notes           | Pending                                                         |

Next concrete steps, in order:

1. **Phase 4 (active):**
   - (a) local `docsy-example` test against the sibling theme repo — **done**.
   - (b) merge the task branch to `main` via [#2641][] — **done**.
   - (c) final `docsy-example` config + test against Docsy from `main`.
2. Phase 5: update the get-started "clone" docs for the new non-module setup
   procedure recorded in [spike-notes][spike] Phase 2, plus changelog/blog and
   release-process notes for the nested module tag (`theme/vX.Y.Z`).
3. Later: formalize the smoke matrix as a local Vitest/TS harness — see the
   execution plan's "Local test harness" section.
