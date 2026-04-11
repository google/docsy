---
title: Plan for Agent-friendly support
date: 2026-04-04
status: draft
cSpell:ignore: Dachary llms imgproc readfile tabpane opentelemetry
---

## Goal

Add _experimental_ agent-friendly support to the Docsy theme without breaking
existing HTML, RSS, or `print` outputs.

This should provide:

- opt-in Markdown outputs at least for home, section, and page outputs
- HTML page metadata linking directly to the Markdown alternate output
- opt-in top-level [llms.txt][]
- validation on `docsy.dev` and field-testing on real Docsy sites
- docs showing how a Docsy site enables the feature

This plan draws on several sources, including Dachary Carey's [Make Your Hugo
Site Agent-Friendly][dc26], but Docsy-specific API, output, and documentation
constraints drive the design.

## Scope

In:

1. Theme support for Markdown outputs.
2. Page-level discovery via HTML metadata linking to the Markdown alternate
   output.
3. `docsy.dev` as the proving ground; field-testing on external Docsy sites
   (e.g. OTel) before investing in more complex approaches (if needed).
4. Theme support for `llms.txt`.
5. Docs for enabling the experimental feature.

Out:

- Server-side HTTP content negotiation such as `Accept: text/markdown`
- Hidden HTML discovery hints
- HTML parity in Markdown outputs
- Default-on behavior for all Docsy sites

## Constraints

- Keep the feature opt-in and explicitly experimental.
- Keep the theme API small.
- Preserve existing HTML, RSS, and `print` behavior.
- Prefer clean Markdown over reproducing theme chrome.
- Start with the simplest viable rendering path and document limitations.
- Field-test on real sites before deciding whether more complex approaches are
  worth the investment.

## Approach

### One template as the default Markdown fallback

Docsy's `layouts/all.html` is the catch-all fallback for any page kind that
doesn't match a more specific template. `layouts/all.md` mirrors this for the
Markdown output format. In the current rollout, one template covers the
field-tested page kinds: home, section, and single pages. Sites can still opt
specific pages out of Markdown output when that content is not useful to agents
(for example, a JavaScript-driven search page).

- **Title** as an H1 heading
- **Description** if present, as a blockquote (`>`), followed by a horizontal
  rule. The blockquote structurally distinguishes the description from body
  content, making it easy for agents to extract. Alternatives considered:
  `**Description:**` prefix (awkward for humans, requires i18n), front matter
  (conflicts with `---` thematic breaks), plain text with positional convention
  (implicit), or dropping it entirely (too sparse for sections without body
  content)
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
documented in Phase 4.

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

Generated links in Markdown outputs should stay canonical (`/docs/get-started/`)
rather than being rewritten to `index.md` (as [Carey's article][dc26]
recommends). Page body links are not rewritten either, so keeping one
internal-link convention is simpler. Future `llms.txt` docs can tell agents to
prefer Markdown URLs when that matters.

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

Current goldens (covering the main template code paths):

- `index.md` — home page with description + body content + child links
- `fr/index.md` — multilingual home page regression coverage
- `docs/index.md` — body content + child links, no description
- `docs/get-started/index.md` — description + body content + child links
- `docs/content/index.md` — description only, many children
- `blog/index.md` — no description, no body, children with mixed descriptions
- `blog/2022/hello/index.md` — page content with description, no children

## Rollout

- Phase 1: Markdown outputs via `all.md` (complete; verified on `docsy.dev`)
- Phase 2: field-test on `docsy.dev` and external Docsy sites (complete)
- Phase 3: `llms.txt` (complete)
- Phase 4: docs (not started)

### Phase 1: Markdown outputs (complete)

The `Markdown` output format is defined in `hugo.yaml`. The `layouts/all.md`
template is the default Markdown fallback used in this rollout. `docsy.dev`
enables the format via:

```yaml
outputs:
  home: [HTML, markdown]
  page: [HTML, markdown]
  section: [HTML, RSS, print, markdown]
```

The JS-driven `search.md` page explicitly opts out with `outputs: [HTML]`,
because an empty search shell adds little value for agents.

HTML output gains a `<link rel="alternate" type="text/markdown">` tag
automatically — this is Hugo's built-in behavior for alternate output formats.

### Phase 2: Field-testing (complete)

Validate the approach on real Docsy sites before investing in more complex
alternatives:

- [x] Enable Markdown output on `docsy.dev` and review generated pages.
- [x] Field-test on an external Docsy site (`opentelemetry.io`) to evaluate
      whether the `all.md` output is useful enough for agents in practice.
- [x] Iterate a few improvements based on field-testing.
- [x] Confirm the simple `all.md` approach is good enough to proceed to
      `llms.txt`.

Current signal:

- `opentelemetry.io` was processed successfully by an agent-ready evaluation
  service.
- The site scored `59%` (via Fern) before `llms.txt` support, which is good
  enough for this phase.

### Phase 3: `llms.txt` (in progress)

Provide opt-in generation of a top-level `llms.txt`.

The first version should stay curated and small:

- Site name and short description
- Canonical site URL
- Markdown home URL
- Links derived from the main menu
- Brief guidance to prefer Markdown URLs

For `docsy.dev`, start with English entry points unless multilingual discovery
proves necessary.

Status:

- [x] Generate `/llms.txt` from the main menu on `docsy.dev`.
- [x] Emit absolute Markdown URLs when a Markdown alternate output exists.
- [x] Keep the first version English-only for `docsy.dev`.

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

- Markdown-aware shortcode templates for high-value Docsy shortcodes
- Type-specific `.md` layouts if field-testing reveals the need
- `i18n` key for the "Section pages" label in `all.md` (currently hardcoded)
- A fuller `llms-full.txt` style index if needed
- Markdown outputs for `term` and `taxonomy` if a real discovery need emerges

> **Note**:Deferred items already listed under **Out** in [Scope](#scope) are
> not repeated here.

## Appendix: Differences from Carey's article

[Carey's article][dc26] documents retrofitting agent-friendly patterns onto
existing Hugo sites, including one using Docsy. This plan draws on that work but
diverges in several places:

| Area                                 | Carey's approach                                                         | This plan                   | Why                                                                            |
| ------------------------------------ | ------------------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------ |
| Template strategy                    | Separate templates per page kind (`single.md`, `section.md`, `index.md`) | Single `all.md` catch-all   | Mirrors Docsy's `all.html`; covers all page kinds with minimal API surface     |
| Content rendering                    | `.RawContent` (shortcodes unexpanded)                                    | `.RenderShortcodes`         | Resolves shortcodes while preserving Markdown; available since Hugo 0.117      |
| `llms.txt` generation                | Shell script parsing front matter with `sed`, run before `hugo build`    | Hugo output format template | Participates in Hugo's build pipeline; no external script for sites to wire up |
| Server-side HTTP content negotiation | Apache `.htaccess` rewrite rules for `Accept: text/markdown`             | Out of scope (follow-up)    | Server-specific; not something a theme can control                             |
| HTML discovery hint                  | Hidden `sr-only` div in `baseof.html`                                    | Out of scope (follow-up)    | Adds theme chrome to HTML output; evaluate after Markdown URLs are stable      |
| `term`/`taxonomy` pages              | Included for content-parity completeness                                 | Out of scope                | No real discovery need yet                                                     |
| `baseof.html` overrides              | Site-level overrides of each type-specific `baseof.html`                 | Not needed                  | Markdown output format templates don't use `baseof`; they render standalone    |

The core pattern — Markdown output format, `isPlainText: true` — is shared. The
differences reflect Docsy's position as a theme (not a site) and the strategy of
field-testing a simple approach before investing in complexity.

[dc26]: https://dacharycarey.com/2026/03/01/make-hugo-site-agent-friendly/
[llms.txt]: https://llmstxt.org/
