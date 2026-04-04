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
- Markdown outputs for `term` and `taxonomy` pages
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
- Phase 2: `llms.txt`
- Phase 3: docs

## Phase 1: Markdown outputs

Provide opt-in Markdown outputs with stable URLs.

### Output format definition

The theme's `hugo.yaml` should define a `Markdown` output format (named to match
Docsy's existing `PRINT` convention and Carey's article rather than using `MD`).
The format must use `isPlainText: true` so Hugo emits raw Markdown rather than
HTML-escaped output.

Sites opt in by adding `Markdown` to their `outputs` config. Hugo's `outputs`
config is a full override, not additive — if a site forgets to include existing
formats like `RSS` or `print`, those break silently. The docs (Phase 3) must
call this out.

### Template lookup

Root-level templates (`layouts/list.md`, `layouts/single.md`, `layouts/home.md`)
serve as the fallback for all content types. Docsy's existing HTML layouts use
type-specific directories (`layouts/docs/`, `layouts/blog/`, etc.) which take
precedence in Hugo's lookup order. The same applies to Markdown templates: a
`layouts/docs/single.md` would win over `layouts/single.md`.

Start with root-level templates only. Type-specific Markdown templates can be
added later if docs vs. blog rendering needs diverge.

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

`.RawContent` returns the source file before Hugo processing, so shortcodes
appear literally in the output. For Docsy sites that use `tabpane`, `alert`,
`imgproc`, `readfile`, `card`, etc., this means structural content is lost or
garbled. The alternative (`.Content`) outputs fully rendered HTML, which defeats
the purpose of a Markdown output format. Start with `.RawContent` and document
the shortcode limitation; revisit if a practical rendering path emerges.

Validate representative docs, blog, and project pages on `docsy.dev`.

### 1.3 `home`

Add home page support:

- site summary
- links to key sections

Validate both English and French home behavior.

### Phase 1 validation

- `docsy.dev` builds with Markdown outputs enabled
- HTML, RSS, and `print` outputs still build — verify explicitly, since the
  `outputs` config override can silently drop existing formats
- generated Markdown excludes theme chrome
- shortcodes in `.RawContent` output are noted but not blocking
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
- Markdown outputs for `term` and `taxonomy` if a real discovery need emerges
- Markdown-aware support for high-value Docsy shortcodes, including possible
  `.md`-specific shortcode templates or Markdown-friendly shortcode variants
- a fuller `llms-full.txt` style index if needed

## Appendix: Differences from Carey's article

[Carey's article][dc26] documents retrofitting agent-friendly patterns onto
existing Hugo sites, including one using Docsy. This plan draws on that work but
diverges in several places:

| Area                    | Carey's approach                                                      | This plan                                              | Why                                                                                        |
| ----------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `llms.txt` generation   | Shell script parsing front matter with `sed`, run before `hugo build` | Hugo output format template (`layouts/index.llms.txt`) | Participates in Hugo's build pipeline; no external script for sites to wire up             |
| Content negotiation     | Apache `.htaccess` rewrite rules for `Accept: text/markdown`          | Out of scope (follow-up)                               | Server-specific; not something a theme can control                                         |
| HTML discovery hint     | Hidden `sr-only` div in `baseof.html`                                 | Out of scope (follow-up)                               | Adds theme chrome to HTML output; evaluate after Markdown URLs are stable                  |
| `term`/`taxonomy` pages | Included for content-parity completeness                              | Out of scope                                           | No real discovery need yet; avoids expanding the initial template surface                  |
| Template naming         | `_default/section.md`, `index.md`                                     | `list.md`, `home.md`                                   | Aligns with Docsy's existing `list.html`/`single.html` naming; Hugo >= 0.146 supports both |
| `baseof.html` overrides | Site-level overrides of each type-specific `baseof.html`              | Not needed                                             | Markdown output format templates don't use `baseof`; they render standalone                |

The core pattern — Markdown output format, `isPlainText: true`, `.RawContent` —
is the same. The differences reflect Docsy's position as a theme (not a site)
and the goal of keeping the initial API surface small.

## Appendix 2: Notes on Markdown rendering options

Recent Hugo releases added features that may become relevant to this work:

- `RenderShortcodes`, which renders shortcodes while preserving surrounding
  Markdown
- `transform.HTMLToMarkdown`, which converts rendered HTML back to Markdown

These are promising, but neither changes the initial recommendation for Phase
1.2:

- `.RawContent` is still the simplest baseline and keeps the first
  implementation easy to reason about
- `RenderShortcodes` may become the better path if it handles enough shortcode
  use cases cleanly in Docsy content
- `transform.HTMLToMarkdown` is better treated as an experimental fallback than
  as the primary design, since it starts from HTML rather than Markdown-shaped
  content

For now, the plan should continue to start with `.RawContent`, document its
shortcode limitations, and revisit these newer Hugo functions once the basic
output format and template structure are in place.

[dc26]: https://dacharycarey.com/2026/03/01/make-hugo-site-agent-friendly/
[llms.txt]: https://llmstxt.org/
