---
title: Agent support
description: >-
  Opt-in features to help agents better use your site, including Markdown
  output, alternate links in HTML, and `llms.txt`.
cSpell:ignore: llmstxt
---

> [!NOTE] Early evaluation
>
> Features described in this page are [experimental][], and are useful for early
> adoption and evaluation. Output details and validation coverage may change in
> future releases.

## Features

When your site opts in, these are the user-facing and machine-readable behaviors
Docsy enables:

- **[Markdown output format](#markdown-output)** support for all site pages.
- **Discovery**: page HTML headers include `rel="alternate"` links to the
  Markdown version of the page.
- **View Markdown**: page meta area includes a **View Markdown** link to the
  Markdown version of the page.
- **[`llms.txt`](#llms-txt)**: site-root file listing.

The remainder of this page explains how to enable each feature, and discusses
[validation and metrics](#validation-and-metrics) supported with examples.

## Enable Markdown output {#markdown-output}

Hugo comes with several [built-in output formats][], including `markdown`. To
enable Markdown output, add `markdown` to the Hugo [outputs][] configuration for
the page kinds you want to support. For example:

{{< tabpane text=true persist=lang >}}
{{< tab header="Configuration file:" disabled=true />}}
{{% tab header="hugo.yaml" lang="yaml" %}}

```yaml
outputs:
  home: [HTML, markdown]
  page: [HTML, markdown]
  section: [HTML, RSS, print, markdown]
```

{{% /tab %}} {{% tab header="hugo.toml" lang="toml" %}}

```toml
[outputs]
home = [ "HTML", "markdown" ]
page = [ "HTML", "markdown" ]
section = [ "HTML", "RSS", "print", "markdown" ]
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

### Opt pages out {#opt-pages-out}

> [!TIP]
>
> By default, Hugo’s `outputs` map (whether in multi-file site config or page
> front matter) is a **full replacement** for each page kind, not a merge [^1].
> When you add `markdown`, keep every format your site already relies on -- for
> example `RSS` and `print` on sections as is shown in the examples above.

[^1]:
    This is contrary to the documented Hugo behavior for front-matter
    configuration, but it is confirmed with our testing as of Hugo 0.157.0.

To opt pages out of Markdown output, set `outputs` in page front matter to
`HTML` only, or whatever your page's default output formats are while excluding
`markdown`. For example:

```yaml
---
title: HTML-only test page
outputs: [HTML]
---
...
```

## Enable `llms.txt` {#llms-txt}

The `llms.txt` format is a simple text format for listing machine-readable links
to site content. It is designed to be easy for agents to discover and parse, and
to complement the richer but more complex Markdown outputs. To learn more, see
[llmstxt.org][].

Docsy generates `llms.txt` at the site root, and includes links to the home
page, main menu pages, and Markdown alternates where they exist. To enable it,
add `LLMS` to the Hugo [outputs][] configuration for the home page. For example:

```yaml
outputs:
  home: [HTML, markdown, LLMS]
  page: [HTML, markdown]
  section: [HTML, RSS, print, markdown]
```

For an example of the generated `llms.txt` for this site, see
[/llms.txt](/llms.txt).

## Customize output

Docsy renders Markdown output via [layouts/all.md][] and generates `llms.txt`
via `layouts/index.llms.txt`. You can override these defaults at several levels:

- **Per kind** — Add templates such as `home.md` or `_default/single.md` under
  `layouts/` in your project to tailor Markdown output for specific [Hugo
  kinds][].
- **Per shortcode** — Add [output-format-specific shortcode templates][sof] to
  project-local shortcodes so they emit Markdown-friendly content when
  appropriate.
- **Per page** — Provide page-specific content or structure for high-value pages
  that need a curated agent-facing view.

## Server-side support

While outside the scope of Docsy's support, sites can facilitate agent discovery
and access to Markdown content by implementing server-side content negotiation.
For example, honoring `Accept: text/markdown` on the same URL as HTML.

## Validation and metrics

The **docsy.dev** workspace ships [AFDocs][afdocs] configuration and npm scripts
so maintainers can score a **deployed** URL against overlapping [Agent-Friendly
Documentation spec][afs] checks (Markdown URLs, `llms.txt`, and related
categories). That is **not** the default GitHub Actions `test` job; see
[Agent-support checks](/project/build/ci-cd/#agent-support-checks). We plan to
broaden validation over time, including syntactic and semantic review of
generated Markdown.

### Scorecard examples

For scorecard examples, see:

- [OpenTelemetry agent score][] online report

- An AFDocs scorecard for this site:

  <details>
  <summary><code>docsy.dev</code> scorecard</summary>

  ```text
  {{< readfile "afdocs-scorecard.txt" >}}
  ```

  </details>

For details on how we have set up p, see
[Agent-support checks](/project/build/ci-cd/#agent-support-checks).

[afdocs]: https://afdocs.dev/
[afs]: https://agentdocsspec.com/
[built-in output formats]: https://gohugo.io/configuration/output-formats/
[experimental]: /project/about/changelog/#experimental
[Hugo kinds]: https://gohugo.io/templates/types/
[layouts/all.md]: https://github.com/google/docsy/blob/main/layouts/all.md
[llmstxt.org]: https://llmstxt.org/
[OpenTelemetry agent score]:
  https://buildwithfern.com/agent-score/company/opentelemetry
[outputs]: https://gohugo.io/configuration/outputs/
[sof]:
  https://gohugo.io/templates/shortcode-templates/#output-format-specific-templates-shortcode-templates
