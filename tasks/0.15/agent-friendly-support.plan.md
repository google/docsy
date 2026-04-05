---
title: Plan for Agent-friendly support
date: 2026-04-04
status: draft
cSpell:ignore: Dachary llms imgproc readfile tabpane
---

## Goal

Add experimental agent-friendly support to the Docsy theme without breaking
existing HTML, RSS, or `print` outputs.

This should provide:

- opt-in Markdown outputs for all page kinds
- opt-in top-level [llms.txt][]
- validation on `docsy.dev` and field-testing on real Docsy sites
- docs showing how a Docsy site enables the feature

This plan is informed by community work, including Dachary Carey's [Make Your
Hugo Site Agent-Friendly][dc26], but Docsy's API and docs remain the primary
design drivers.

## Scope

In:

1. Theme support for Markdown outputs via a single `all.md` catch-all template.
2. `docsy.dev` as the proving ground; field-testing on external Docsy sites
   (e.g. OTel) before investing in more complex approaches.
3. Theme support for `llms.txt`.
4. Docs for enabling the experimental feature.

Out:

- HTTP content negotiation such as `Accept: text/markdown`
- hidden HTML discovery hints
- HTML parity in Markdown outputs
- default-on behavior for all Docsy sites

## Constraints

- Keep the feature opt-in and explicitly experimental.
- Keep the theme API small.
- Preserve existing HTML, RSS, and `print` behavior.
- Prefer clean Markdown over reproducing theme chrome.
- Start with the simplest viable rendering path and document limitations.
- Field-test on real sites before deciding whether more complex approaches are
  worth the investment.

## Approach

### One template for all page kinds

Docsy's `layouts/all.html` is the catch-all fallback for any page kind that
doesn't match a more specific template. `layouts/all.md` mirrors this for the
Markdown output format. A single template covers home, section, and single
pages:

- **Title** as an H1 heading
- **Description** if present, as plain text followed by a horizontal rule.
  Rendered without a label or blockquote — the positional convention (first
  paragraph after title, before `---`) is unambiguous. Alternatives considered:
  `**Description:**` prefix (awkward for humans and requires i18n), blockquote
  (fragile with multi-line Markdown links), front matter (conflicts with `---`
  thematic breaks), or dropping it entirely (too sparse for bodyless sections)
- **Body content** via `.RenderShortcodes` (renders shortcodes while preserving
  surrounding Markdown)
- **Child page index** with links and descriptions (for section pages; empty for
  leaf pages)

This is intentionally simple. The output is not perfect for every page — home
pages with HTML-heavy shortcodes (like `blocks/cover`) will include rendered
HTML in the Markdown — but it is still more useful to agents than scraping the
full HTML page with all its theme chrome.

### Progressive override path

Sites and developers can improve Markdown output progressively without changes
to the theme:

- **Per-layout**: a `home.md`, `docs/single.md`, or `blog/list.md` in the site
  or theme overrides `all.md` for specific page kinds
- **Per-shortcode**: output-format-specific shortcode templates can emit
  Markdown instead of HTML
- **Per-page**: a site can provide custom content for any page that needs
  hand-tuned agent-facing output

The theme's job is to provide a reasonable default. The override path is
documented in Phase 3.

### Output format definition

The theme's `hugo.yaml` defines a `Markdown` output format (named to match
Docsy's existing `PRINT` convention and Carey's article rather than using `MD`).
The format uses `isPlainText: true` so Hugo emits raw Markdown rather than
HTML-escaped output. No `mediaTypes` declaration is needed because
`text/markdown` is a
[Hugo built-in](https://gohugo.io/configuration/media-types/).

Sites opt in by adding `Markdown` to their `outputs` config. Hugo's `outputs`
config is a full override, not additive — if a site forgets to include existing
formats like `RSS` or `print`, those break silently. The docs (Phase 3) must
call this out.

## Testing strategy

`docsy.dev/public` is maintained as a git repo. After each build
(`npm run build` from the repo root, then `./tmp/sort.sh` to normalize
sitemaps), `git diff` in `public/` shows exactly what changed. Expected noise is
limited to build timestamps; everything else should be traceable to the current
increment.

### Golden file tests

Add golden files for a representative set of generated `index.md` pages. After
each build, a test script diffs the generated output against the goldens and
fails on unexpected changes.

Candidate golden pages (covering different template code paths):

- `docs/index.md` — description + child links, no body content
- `docs/get-started/index.md` — description + body content + child links
- `docs/content/index.md` — description only, many children
- `blog/index.md` — no description, no body, children with mixed descriptions
- `community/index.md` — different section type

## Rollout

- Phase 1: Markdown outputs via `all.md` (done in prototype)
- Phase 2: field-test on `docsy.dev` and external Docsy sites
- Phase 3: `llms.txt`
- Phase 4: docs

### Phase 1: Markdown outputs (prototype complete)

The `Markdown` output format is defined in `hugo.yaml`. The `layouts/all.md`
template provides Markdown output for all page kinds. `docsy.dev` enables the
format via:

```yaml
outputs:
  home: [HTML, Markdown]
  page: [HTML, Markdown]
  section: [HTML, RSS, print, Markdown]
```

HTML output gains a `<link rel="alternate" type="text/markdown">` tag
automatically — this is Hugo's built-in behavior for alternate output formats.

### Phase 2: Field-testing

Validate the approach on real Docsy sites before investing in more complex
alternatives:

- Enable Markdown output on `docsy.dev` and review generated pages
- Field-test on an external Docsy site (e.g. OpenTelemetry) to evaluate whether
  the `all.md` output is useful enough for agents in practice
- Gather feedback on which pages benefit most, which are too noisy, and whether
  the progressive override path is sufficient
- Decide whether to invest in type-specific templates, Markdown-aware
  shortcodes, or other refinements — or whether the simple approach is good
  enough

### Phase 3: `llms.txt`

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

### Phase 4: Docs

Document:

- what the feature provides
- how to enable Markdown outputs
- how to enable `llms.txt`
- the progressive override path (per-layout, per-shortcode, per-page)
- known limitations and experimental status

Link the feature docs from the most relevant Docsy docs pages and verify the
instructions are sufficient when followed on `docsy.dev`.

## Risks

- Shortcodes that produce HTML (like `blocks/cover`) appear as HTML in the
  Markdown output. This is acceptable as a baseline but may need per-shortcode
  overrides for high-value pages.
- Hugo's `outputs` config is a full override; sites may accidentally drop
  existing formats when adding `Markdown`.
- Multilingual home handling may need special treatment.
- Early URL decisions will shape `llms.txt` and should not churn.
- The docs must not overstate the maturity of the feature.

## Follow-up

- hidden HTML discovery hints
- support for `Accept: text/markdown`
- Markdown outputs for `term` and `taxonomy` if a real discovery need emerges
- Markdown-aware shortcode templates for high-value Docsy shortcodes
- type-specific `.md` layouts if field-testing reveals the need
- i18n key for the "Section pages" label in `all.md` (currently hardcoded)
- a fuller `llms-full.txt` style index if needed

## Appendix: Differences from Carey's article

[Carey's article][dc26] documents retrofitting agent-friendly patterns onto
existing Hugo sites, including one using Docsy. This plan draws on that work but
diverges in several places:

| Area                    | Carey's approach                                                         | This plan                   | Why                                                                            |
| ----------------------- | ------------------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------ |
| Template strategy       | Separate templates per page kind (`single.md`, `section.md`, `index.md`) | Single `all.md` catch-all   | Mirrors Docsy's `all.html`; covers all page kinds with minimal API surface     |
| Content rendering       | `.RawContent` (shortcodes unexpanded)                                    | `.RenderShortcodes`         | Resolves shortcodes while preserving Markdown; available since Hugo 0.117      |
| `llms.txt` generation   | Shell script parsing front matter with `sed`, run before `hugo build`    | Hugo output format template | Participates in Hugo's build pipeline; no external script for sites to wire up |
| Content negotiation     | Apache `.htaccess` rewrite rules for `Accept: text/markdown`             | Out of scope (follow-up)    | Server-specific; not something a theme can control                             |
| HTML discovery hint     | Hidden `sr-only` div in `baseof.html`                                    | Out of scope (follow-up)    | Adds theme chrome to HTML output; evaluate after Markdown URLs are stable      |
| `term`/`taxonomy` pages | Included for content-parity completeness                                 | Out of scope                | No real discovery need yet                                                     |
| `baseof.html` overrides | Site-level overrides of each type-specific `baseof.html`                 | Not needed                  | Markdown output format templates don't use `baseof`; they render standalone    |

The core pattern — Markdown output format, `isPlainText: true` — is shared. The
differences reflect Docsy's position as a theme (not a site) and the strategy of
field-testing a simple approach before investing in complexity.

[dc26]: https://dacharycarey.com/2026/03/01/make-hugo-site-agent-friendly/
[llms.txt]: https://llmstxt.org/
