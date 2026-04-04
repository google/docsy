---
title: Plan for Agent-friendly support
date: 2026-04-04
status: draft
cSpell:ignore: Dachary llms
---

## Goal

Add experimental agent-friendly support to the Docsy theme without destabilizing
existing HTML, RSS, and print outputs.

The result should give us:

- Theme-level support for stable Markdown representations of key page kinds.
- Theme-level support for a machine-readable top-level [llms.txt][].
- A documented, opt-in setup that Docsy adopters can enable in their own sites.
- Validation on `docsy.dev` before the feature is presented as supported
  experimental functionality.

This plan was inspired by various community sources, including [Make Your Hugo
Site Agent-Friendly][dc26] article by Dachary Carey.

## Initial scope

1. Add theme support for generating Markdown output files.
2. Illustrate the feature on `docsy.dev`.
3. Add theme support for generating `llms.txt`.
4. Update the Docsy docs to explain how projects can enable this experimental
   support.

Out of scope for the first pass:

- Theme support for HTTP content negotiation such as `Accept: text/markdown`.
- Hidden HTML discovery hints unless they become necessary after `llms.txt`.
- Perfect parity with every HTML-only affordance in Markdown output.
- Enabling the feature by default for all Docsy sites.

## Current State

Docsy currently has no built-in agent-facing output feature. The `docsy.dev`
site is the most realistic place to prove the feature because it exercises:

- multilingual content
- docs, blog, and generic pages
- existing custom outputs such as `print`
- mounted repository content
- a real user-facing documentation set that can document the feature itself

Current `docsy.dev` outputs are:

- `home: [HTML]`
- `page: [HTML]`
- `section: [HTML, RSS, print]`

Relevant theme constraints:

- Docsy must not break existing HTML, RSS, or `print` outputs.
- The feature should be opt-in and clearly experimental.
- The public theme API should stay small and understandable.

## Phase 1: Markdown outputs

### Deliverable

Docsy should provide opt-in support for publishing Markdown representations
alongside HTML outputs, using predictable URLs and without breaking current
outputs.

### Proposed approach

1. Define a Markdown media type and output format in theme-level configuration
   or documented site configuration.
2. Provide theme templates for the main page kinds:
   - `home`
   - `single`
   - `list`
   - optionally `taxonomy` and `term` if we decide they add value for discovery
3. Document how a site enables the format in its Hugo outputs config.
4. Validate the theme implementation on `docsy.dev`.
5. Keep `print` output unchanged and verify that adding markdown outputs does
   not change existing template resolution for HTML, RSS, or `print`.

### Layout plan

Implement minimal Markdown layouts incrementally, favoring clean content over
perfect HTML layout parity.

Likely theme layout files:

- `layouts/home.md`
- `layouts/single.md`
- `layouts/list.md`
- `layouts/term.md`
- `layouts/taxonomy.md`

#### 1.1: `list`

Add section/list support first:

- section title
- section summary
- child page index

#### 1.2: `single`

Add page/single support next:

- title
- description metadata when useful
- `.RawContent` or a Markdown-safe rendering path

#### 1.3: `home`

Add home support next:

- site summary
- high-value section links

#### 1.4: `term` and `taxonomy` (optional)

TBC.

### Theme design considerations

- Keep the feature opt-in, for example via documented output settings rather
  than hard-wiring it into all sites.
- Preserve the current `print` output for docs and blog sections.
- Do not try to reproduce nav chrome, sidebars, breadcrumbs, or footer in
  Markdown output.
- Prefer canonical content URLs in Markdown indexes.
- Decide explicitly whether pages with heavy shortcode output should use
  `.RawContent` or a rendered form; start simple and document known exceptions.
- Keep template override points obvious so sites can customize the markdown
  representation.
- Decide whether taxonomy support belongs in the initial experimental API or can
  wait.

### `docsy.dev` validation considerations

- Ensure the French home page override still gets a useful markdown output.
- Validate how mounted repository files under `content/project/repo/` behave.
- Verify docs, blog, and generic pages all render acceptably through the theme
  templates.

### Acceptance criteria

- Theme templates and documented config are sufficient for a Docsy site to emit
  Markdown siblings.
- `docsy.dev` builds successfully with the feature enabled.
- HTML, RSS, and `print` outputs still build.
- Core pages gain Markdown siblings.
- Markdown pages are readable without theme boilerplate.
- URL shape is stable enough to reference from `llms.txt`.

## Phase 2: `llms.txt`

### Deliverable

Docsy should provide opt-in support for publishing an `llms.txt` file at the
site root that points agents toward markdown outputs and the most relevant site
entry points.

### Proposed approach

1. Add `llms.txt` as a documented home output format for sites that opt in.
2. Implement a dedicated theme template, likely:
   - `layouts/index.llms.txt`
3. Generate the file from site data rather than require a handwritten copy.
4. Let sites override or extend the curation rules as needed.
5. Keep the first version intentionally small and curated.

### Initial content shape

The first version should include:

- Site name and short description
- Canonical site URL
- Link to the markdown home page
- Links to the most important sections in markdown form
- Brief guidance that markdown URLs are preferred for agent consumption

### Theme design considerations

- Keep links absolute so the file is useful outside a browser context.
- Avoid enumerating every page initially; section entry points should be enough
  for v1.
- Decide what minimal site params or data hooks are needed for curation without
  making configuration heavy.
- Reuse the same URL conventions established in Phase 1.

### `docsy.dev` validation considerations

- Favor English entry points in the first version unless multilingual discovery
  is explicitly required.
- Include links that are meaningful for Docsy users, such as docs, blog,
  project, and contributing material.

### Acceptance criteria

- Theme templates and documented config are sufficient for a Docsy site to emit
  `llms.txt`.
- `docsy.dev` generates `llms.txt` at the site root.
- Links resolve to valid markdown outputs.
- The file remains concise and manually inspectable.
- No regressions to existing home outputs.

## Phase 3: Documentation

### Deliverable

Docsy documentation should explain what the experimental feature provides, how
to enable it, and what tradeoffs or limitations site owners should expect.

### Proposed approach

1. Add or update docs under `docsy.dev/content/en/docs/`.
2. Describe:
   - the feature goal
   - required Hugo output configuration
   - what templates the theme provides
   - how to customize or override outputs
   - known limitations, especially shortcode/rendering caveats
   - the experimental status of the feature
3. Include `llms.txt` setup once Phase 2 is ready.
4. Link the feature docs from the most relevant content/navigation pages.

### Acceptance criteria

- A Docsy user can discover the feature in the docs.
- A Docsy user can enable markdown output support by following the docs.
- A Docsy user can enable `llms.txt` by following the docs.
- The docs clearly mark the feature as experimental.

## Suggested Implementation Sequence

1. Design the experimental theme API and opt-in configuration surface.
2. Phase 1.1: add `list` Markdown output support.
3. Validate section landing pages on `docsy.dev`.
4. Phase 1.2: add `single` Markdown output support.
5. Validate representative docs, blog, and project pages on `docsy.dev`.
6. Phase 1.3: add `home` Markdown output support.
7. Validate home page behavior, including French home handling.
8. Decide whether Phase 1.4 (`term` and `taxonomy`) belongs in the first
   release, then implement it if yes.
9. Add theme `llms.txt` output support and validate it on `docsy.dev`.
10. Document how projects enable markdown outputs.
11. Document how projects enable and customize `llms.txt`.

## Validation Checklist

- Run `hugo` for `docsy.dev` with the experimental feature enabled.
- Inspect representative outputs for:
  - `/index.md`
  - `/docs/index.md`
  - a docs leaf page
  - a blog post
  - `/project/index.md`
  - French home page behavior
- Verify `section` pages still emit RSS where expected.
- Verify `print` outputs still resolve for docs and blog sections.
- Confirm theme templates can still be overridden cleanly by site layouts.
- Check that generated markdown does not include HTML chrome or duplicated nav
  content.
- Check that `llms.txt` uses production-style absolute URLs.
- Walk through the docs setup instructions on `docsy.dev` and confirm they are
  sufficient.

## Risks

- Hugo template resolution for custom output formats may interact with existing
  `print` templates in non-obvious ways.
- Theme API choices made now may be hard to unwind if they are too broad.
- `.RawContent` may omit important shortcode expansions on some pages.
- Rendered content may include too much HTML for agent-facing use on some pages.
- Multilingual home handling may need a dedicated override.
- URL conventions chosen for markdown output will affect `llms.txt` and should
  not change casually after release.
- Documentation could over-promise if the experimental limitations are not made
  explicit.

## Follow-up Options

If the first two phases land cleanly, consider later work for:

- hidden HTML discovery hints for `llms.txt`
- optional support for `Accept: text/markdown`
- a fuller `llms-full.txt` style index if the curated file proves insufficient
- revisiting whether any site-level curation hooks should become first-class
  theme params

[dc26]: https://dachary.org/2025/11/21/make-your-hugo-site-agent-friendly/
[llms.txt]: https://docs.llmstack.com/llms/llms-txt
