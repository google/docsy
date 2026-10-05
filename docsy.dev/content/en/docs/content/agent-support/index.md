---
title: AI-agent support
linkTitle: Agent support
description: >-
  Opt-in features that help AI agents and automated tools discover and use your
  site content, including Markdown output, alternate links in HTML, and
  llms.txt.
cSpell:ignore: llmstxt
---

> [!NOTE] Early evaluation
>
> Features described in this page are [experimental][], and are useful for early
> adoption and evaluation. Output details and validation coverage may change in
> future releases. To track the phased evolution of the agent-support feature,
> see [Improve support for AI-agent doc consumption #2614][#2614].

[#2614]: https://github.com/docsy/docsy/issues/2614

## Features

When your site opts in, these are the user-facing and machine-readable behaviors
Docsy enables:

- **[Markdown output format](#markdown-output)** support. Your project's
  `outputs` configuration controls which page kinds publish Markdown.
- **[Discovery](#discovery)**: alternate links and a hidden in-body directive
  lead agents to each page's Markdown version and to `llms.txt`.
- **View Markdown**: page meta area includes a **View Markdown** link to the
  Markdown version of the page.
- **[`llms.txt`](#llms-txt)**: per-language overview of the site, linking its
  Markdown content.

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

Each enabled page gets a Markdown version at `index.md` beside its HTML with:

- Page title and description
- Page content, with shortcodes expanded
- For sections, the list of child pages

A shortcode without a Markdown variant emits its HTML there; for how to add one,
see [Shortcodes][shortcode-md-variants].

### Opt pages out {#opt-pages-out}

> [!TIP]
>
> By default, Hugo’s `outputs` map (whether in multi-file site config or page
> front matter) is a **full replacement** for each page kind, not a merge [^1].
> When you add `markdown`, keep every format your site already relies on -- for
> example `RSS` and `print` on sections as is shown in the examples above.

[^1]:
    This is contrary to the documented Hugo behavior for front-matter
    configuration, but it is confirmed with our testing as of Hugo 0.158.0.

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

An `llms.txt` file is a short Markdown overview of a site for agents: a title, a
summary, and lists of links to Markdown versions of its pages. Agents read or
search it, then follow the links they need; the detail stays behind them. For
the format, see [llmstxt.org][].

Docsy defines an `LLMS` output format for `llms.txt` files. To enable it for
home pages, add `LLMS` to the Hugo `home` [outputs][] configuration. For
example:

```yaml
outputs:
  home: [HTML, markdown, LLMS]
  page: [HTML, markdown]
  section: [HTML, RSS, print, markdown]
```

> [!IMPORTANT]
>
> For a [doc-rooted site][], see [Agent support][doc-rooted-agent-support].

The file links to the Markdown version of (where one exists):

- The root page
- Main menu pages
- Top-level docs sections
- Site languages

For this site's `llms.txt`, see
[{{% _root-llms-txt-path %}}](<{{% _root-llms-txt-path %}}>).

## Discovery

Agents find your Markdown content through:

- **Alternate links**: page HTML headers include `rel="alternate"` links to the
  Markdown version of the page.
- **In-body directive**: when `llms.txt` is enabled, each page body opens with a
  visually-hidden directive pointing agents to the language's `llms.txt` and,
  when the page has one, its Markdown version. Sites that override the theme's
  `baseof` templates need to call the `llms-directive.html` partial themselves.

## Customize output

Docsy's templates for the two outputs are:

- [`layouts/all.md`][] ([Markdown output](#markdown-output))
- [`layouts/all.llms.txt`][] ([`llms.txt`](#llms-txt))

Both follow Hugo's [template lookup rules][lookup], so your project's `layouts/`
overrides them. For `llms.txt`, override `all.llms.txt`, or a template named for
the root page's kind:

- [`home`][home-tmp-type] for regular sites; e.g.,
  `layouts/{home,index}.llms.txt`
- [`section`][section-tmp-type] for doc-rooted sites; e.g.,
  `layouts/section.llms.txt`

Shortcodes render into Markdown through [output-format-specific templates][sof];
see [Shortcodes][shortcode-md-variants].

## Server-side support

While outside the scope of Docsy's support, sites can facilitate agent discovery
and access to Markdown content by implementing server-side content negotiation.
For example, honoring `Accept: text/markdown` on the same URL as HTML.

## Validation and metrics

We use [AFDocs][] to assess basic structural support for agent-facing content,
and to validate that generated outputs meet the configured checks. We also
encourage sites to implement their own monitoring and metrics on agent access
patterns—for example logging requests to Markdown URLs or `llms.txt`, and
collecting metrics on their use. For details, see
[Agent-support checks](/project/build/ci-cd/#agent-support-checks).

The `docsy.dev` project contains [AFDocs][] configuration and npm scripts so
maintainers can score a deployed URL against checks that overlap with Docsy’s
agent-support goals, including Markdown URLs, llms.txt, and related categories.

### Scorecard examples

For scorecard examples, see the [OpenTelemetry agent score][] online report and
the AFDocs scorecard for this site:

<details>
<summary><code>docsy.dev</code> scorecard</summary>

Known gaps in this scorecard are tracked under [#2614][].

{{< readfile file="afdocs-scorecard.txt" code="true" lang="text" >}}

</details>

For details on how these checks are configured, see
[Agent-support checks](/project/build/ci-cd/#agent-support-checks).

<!-- prettier-ignore-start -->
[afdocs]: https://afdocs.dev/
[built-in output formats]: https://gohugo.io/configuration/output-formats/
[doc-rooted site]: /docs/content/adding-content/#doc-rooted-sites
[doc-rooted-agent-support]: /docs/content/adding-content/#agent-support
[experimental]: /project/about/changelog/#experimental
[home-tmp-type]: https://gohugo.io/templates/types/#home
[`layouts/all.md`]: https://github.com/docsy/docsy/blob/main/theme/layouts/all.md
[`layouts/all.llms.txt`]: https://github.com/docsy/docsy/blob/main/theme/layouts/all.llms.txt
[llmstxt.org]: https://llmstxt.org/
[lookup]: https://gohugo.io/templates/lookup-order/
[OpenTelemetry agent score]: https://buildwithfern.com/agent-score/company/opentelemetry
[outputs]: https://gohugo.io/configuration/outputs/
[section-tmp-type]: https://gohugo.io/templates/types/#section
[shortcode-md-variants]: /docs/content/shortcodes/
[sof]: https://gohugo.io/templates/shortcode/
<!-- prettier-ignore-end -->
