---
title: Plan for Agent-friendly support
date: 2026-04-04
status: draft
cSpell:ignore: Dachary llms
---

## Goal

Add experimental agent-friendly support to the Docsy theme without breaking
existing HTML, RSS, or `print` outputs.

This should provide:

- opt-in Markdown outputs for key page kinds
- opt-in top-level [llms.txt][]
- validation on `docsy.dev`
- docs showing how a Docsy site enables the feature

This plan is informed by community work, including Dachary Carey's [Make Your
Hugo Site Agent-Friendly][dc26], but Docsy's API and docs remain the primary
design drivers.

## Scope

In:

1. Theme support for Markdown outputs.
2. `docsy.dev` as the proving ground.
3. Theme support for `llms.txt`.
4. Docs for enabling the experimental feature.

Out:

- HTTP content negotiation such as `Accept: text/markdown`
- hidden HTML discovery hints
- HTML parity in Markdown outputs
- default-on behavior for all Docsy sites

## Current State

Docsy does not currently provide built-in agent-facing outputs.

`docsy.dev` is the right validation target because it covers multilingual
content, docs/blog/generic pages, custom `print` output, mounted repository
content, and the documentation that will describe the feature.

Current `docsy.dev` outputs:

- `home: [HTML]`
- `page: [HTML]`
- `section: [HTML, RSS, print]`

## Constraints

- Keep the feature opt-in and explicitly experimental.
- Keep the theme API small.
- Preserve existing HTML, RSS, and `print` behavior.
- Prefer clean Markdown over reproducing theme chrome.
- Start with the simplest viable rendering path and document limitations.

## Rollout

Given that Docsy has layouts for `single` and `list`, we'll use those file names
rather than `page` and `section`.

- Phase 1:
  - Step 1: `list`
  - Step 2: `single`
  - Step 3: `home`
  - Step 4: `term` and `taxonomy` if still in scope
- Phase 2: `llms.txt`
- Phase 3: docs

## Phase 1: Markdown outputs

Provide opt-in Markdown outputs with stable URLs.

### 1.1 `list`

Start with section pages:

- section title
- section summary
- child page index

Validate section landing pages on `docsy.dev`, and confirm RSS and `print`
behavior is unchanged.

### 1.2 `single`

Add regular content pages:

- title
- optional description metadata
- `.RawContent` or another Markdown-safe rendering path

Validate representative docs, blog, and project pages on `docsy.dev`.

### 1.3 `home`

Add home page support:

- site summary
- links to key sections

Validate both English and French home behavior.

### 1.4 `term` and `taxonomy` (optional)

Add these only if they are useful for discovery in the first experimental
release.

### Phase 1 validation

- `docsy.dev` builds with Markdown outputs enabled
- HTML, RSS, and `print` outputs still build
- generated Markdown excludes theme chrome
- URL conventions are stable enough to reference from `llms.txt`

## Phase 2: `llms.txt`

Provide opt-in generation of a top-level `llms.txt`.

The first version should stay curated and small:

- site name and short description
- canonical site URL
- markdown home URL
- links to the main documentation entry points
- brief guidance to prefer Markdown URLs

For `docsy.dev`, start with English entry points unless multilingual discovery
proves necessary.

Validate that `llms.txt` is generated at the site root, links resolve, and home
outputs do not regress.

## Phase 3: Docs

Document:

- what the feature provides
- how to enable Markdown outputs
- how to enable `llms.txt`
- what theme templates are provided
- known limitations and experimental status

Link the feature docs from the most relevant Docsy docs pages and verify the
instructions are sufficient when followed on `docsy.dev`.

## Risks

- Custom output formats may interact with existing template resolution in
  unexpected ways.
- `.RawContent` may be too raw for some pages, while rendered output may be too
  HTML-heavy.
- Multilingual home handling may need special treatment.
- Early URL decisions will shape `llms.txt` and should not churn.
- The docs must not overstate the maturity of the feature.

## Follow-up

- hidden HTML discovery hints
- support for `Accept: text/markdown`
- a fuller `llms-full.txt` style index if needed

[dc26]: https://dachary.org/2025/11/21/make-your-hugo-site-agent-friendly/
[llms.txt]: https://docs.llmstack.com/llms/llms-txt
