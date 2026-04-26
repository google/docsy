---
title: Agent-friendly docs support
linkTitle: Agent-friendly docs
description: >-
  Opt-in Markdown alternate output and llms.txt so tools and agents can read
  your site without scraping HTML.
---

> [!NB] :warning: Features described in this page are [experimental][].

Docsy can emit **plain Markdown** alongside HTML for the same logical page, add
**machine-readable discovery** in HTML, and generate a top-level
[`llms.txt`][llmstxt] file. Together these patterns help agents consume your
documentation without having to parse HTML.

Design goals align with the **[Agent-Friendly Documentation spec][afs]**, which
describes how agent-oriented consumers discover and read documentation. The
**[AFDocs][afdocs]** effort implements that spec as automated checks and
scorecards you can run on your own site.

> [!NOTE]
>
> We run AFDocs checks over **docsy.dev**. For details on how we have set this
> up, see [AFDocs checks](/project/build/ci-cd/#afdocs-checks).

## What you get

- **Markdown URLs** — For each page where Markdown output is enabled, Hugo can
  emit `index.md` (or the configured output path) and a
  `<link rel="alternate" type="text/markdown" href="…">` in the HTML head.
- **“View Markdown”** — When a page has a Markdown alternate, Docsy shows a
  **View Markdown** link in the page meta area (same pattern as other repo and
  print links).
- **`layouts/all.md`** — A single catch-all Markdown template (similar in spirit
  to Docsy’s `all.html`) renders title, optional description (as a blockquote),
  body via `.RenderShortcodes`, a pointer to `llms.txt` when present, and a
  short list of child section pages where applicable.
- **`llms.txt`** — Optional home-only output (`LLMS` format) listing key entry
  points, preferring Markdown permalinks when available.

## Enable Markdown output

Hugo’s `outputs` map is a **full replacement** for each page kind, not a merge.
When you add `markdown`, keep every format your site already relies on (for
example `RSS` and `print` on sections).

{{< tabpane text=true persist=lang >}}
{{< tab header="Configuration file:" disabled=true />}}
{{% tab header="hugo.toml" lang="toml" %}}

```toml
[outputs]
home = [ "HTML", "markdown" ]
page = [ "HTML", "markdown" ]
section = [ "HTML", "RSS", "print", "markdown" ]
```

{{% /tab %}} {{% tab header="hugo.yaml" lang="yaml" %}}

```yaml
outputs:
  home: [HTML, markdown]
  page: [HTML, markdown]
  section: [HTML, RSS, print, markdown]
```

{{% /tab %}} {{% tab header="hugo.json" lang="json" %}}

```json
{
  "outputs": {
    "home": ["HTML", "markdown"],
    "page": ["HTML", "markdown"],
    "section": ["HTML", "RSS", "print", "markdown"]
  }
}
```

{{% /tab %}} {{< /tabpane >}}

Use the lowercase name **`markdown`** so it matches Hugo’s built-in Markdown
output format and Docsy’s templates.

### Opt pages out

For pages where Markdown adds little value (for example a JavaScript-only search
shell), set outputs to HTML only in front matter:

```yaml
---
title: Search
outputs: [HTML]
---
```

## Enable `llms.txt`

The theme defines an `LLMS` output format and `layouts/index.llms.txt`. Add
`LLMS` to the **home** outputs list alongside your existing formats:

```yaml
outputs:
  home: [HTML, markdown, LLMS]
  page: [HTML, markdown]
  section: [HTML, RSS, print, markdown]
```

The generated file is published at `/llms.txt` (per language when you use
multilingual builds). Content is derived from the site home, main menu, and
Markdown alternates where they exist.

## Improving Markdown over time

You are not limited to the default `all.md`:

- **Per kind** — Add `home.md`, `_default/single.md`, or other layout names
  under `layouts/` in your project to override Markdown for specific [Hugo
  kinds][].
- **Per shortcode** — Use [output-format-specific shortcode templates][sof] so a
  shortcode can emit Markdown instead of HTML when appropriate.
- **Per page** — Provide dedicated Markdown or structured content for high-value
  pages that need a hand-tuned agent view.

## Limitations

- Markdown is **not** an HTML clone: theme chrome, sidebars, and some shortcodes
  appear as HTML or simplified text where templates do not have
  Markdown-specific variants.
- **Server-side content negotiation** (for example honoring
  `Accept: text/markdown` on the same URL as HTML) is outside what a theme can
  guarantee; static hosts serve `.md` files with their own MIME rules.
- The feature set is **opt-in** by design; existing sites keep prior behavior
  until they add these outputs.

## Further reading

- [Agent-Friendly Documentation spec][afs] — normative goals and terminology.
- [AFDocs][afdocs] — checks, CLI, and scorecards derived from the spec.
- [AFDocs config file format][afdocs-config] — options for
  `agent-docs.config.yml`.
- [llms.txt][llmstxt] — proposed convention for LLM-oriented site summaries.

[afdocs-config]: https://afdocs.dev/reference/config-file
[afdocs]: https://afdocs.dev/
[afs]: https://agentdocsspec.com/
[experimental]: /project/about/changelog/#experimental
[Hugo kinds]: https://gohugo.io/templates/types/
[llmstxt]: https://llmstxt.org/
[sof]:
  https://gohugo.io/templates/shortcode-templates/#output-format-specific-templates-shortcode-templates
