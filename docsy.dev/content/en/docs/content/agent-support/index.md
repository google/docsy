---
title: AI-agent support
linkTitle: Agent support
description: >-
  Help AI agents discover and use your content with Markdown versions of your
  pages and an llms.txt per site.
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

When your project opts in, these are the user-facing and machine-readable
behaviors Docsy enables:

- **[Markdown output format](#markdown-output)** support. Your project's
  `outputs` configuration controls which page kinds publish Markdown.
- **[Discovery](#discovery)**: how agents find Markdown versions and `llms.txt`.
- **View Markdown**: page meta area includes a **View Markdown** link to the
  Markdown version of the page.
- **[`llms.txt`](#llms-txt)**: a per-[site][] overview linking the site's
  Markdown content.

The remainder of this page explains how to enable each feature, and discusses
[validation and metrics](#validation-and-metrics) supported with examples.

## Markdown output

Hugo comes with several [built-in output formats][output formats], including
`markdown`.

Docsy provides the `markdown` template that Hugo uses to output a Markdown
version of a page, at `index.md` beside its `index.html`. The Markdown version
includes:

- Page title and description
- A link to the [site][]'s [`llms.txt`](#llms-txt), when the site publishes one
- Page content, with shortcodes expanded
- The list of child pages, if any

A shortcode without a Markdown variant emits its HTML there; for how to add one,
see [Shortcodes][shortcode-md-variants].

### Enable Markdown output {#enabling-markdown-output}

To enable Markdown output, add `markdown` to the Hugo [outputs][] configuration
for the page kinds you want to support. For example:

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
> When you add `markdown`, keep every format your project already relies on --
> for example `RSS` and `print` on sections as is shown in the examples above.

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

## `llms.txt` files {#llms-txt}

An `llms.txt` file is a short overview (in Markdown) of the content under its
URL path. Agents use it to discover the content rooted at that path. For
details, see the [llms.txt proposal][llmstxt.org].

Docsy defines an `LLMS` [output format][] and a template that renders
`llms.txt`, one per [site][]. The file links to the following, each at the
target's Markdown version when available, otherwise its HTML version:

- A _site index_ consisting of the following list:
  - [site root][]
  - Main menu entries
- A _documentation index_ consisting of the site's top-level docs sections
- The [project][]'s [sites][site], by language, this one included

This organization is intended for rooted `llms.txt` files, not arbitrary
sections.

### Enable `llms.txt` output {#enabling-llms-txt-output}

To enable `llms.txt` generation for every [site root][] (a practice Docsy
recommends), add `LLMS` to the Hugo `home` [outputs][] configuration. For
example:

```yaml
outputs:
  home: [HTML, markdown, LLMS]
  page: [HTML, markdown]
  section: [HTML, RSS, print, markdown]
```

> [!IMPORTANT]
>
> For a [doc-rooted site][], see the [doc-rooted `llms.txt`
> setup][doc-rooted-agent-support] instead.

For this site's `llms.txt`, see
[`{{% _root-llms-txt-path %}}`](<{{% _root-llms-txt-path %}}>).

## Discovery

Agents find your Markdown content through:

- **Alternate links**: page heads include `rel="alternate"` links to the
  Markdown version of the page.
- **`describedby` link**: when the site publishes `llms.txt`, page heads include
  a `rel="describedby"` link to it, as the [llms.txt proposal][llmstxt.org] (v2)
  recommends. Projects that override the theme's `head.html` partial need to add
  the link themselves.
- **In-body directive**: when the site publishes `llms.txt`, each page body
  opens with a visually-hidden directive pointing agents to it and, when the
  page has one, its Markdown version. Projects that override the theme's
  `baseof` templates need to call the [`llms-directive.html`][] partial
  themselves.

## Customize output

Docsy's templates for the two outputs are:

- [`layouts/all.md`][] ([Markdown output](#markdown-output))
- [`layouts/all.llms.txt`][] ([`llms.txt`](#llms-txt))

Both follow Hugo's [template lookup rules][lookup], so your project's `layouts/`
overrides them. For `llms.txt`, override `all.llms.txt`, or add a template named
for the site root page's kind:

- [`home`][home-tmp-type] for regular sites: `layouts/home.llms.txt` (or
  `index.llms.txt`)
- [`section`][section-tmp-type] for doc-rooted sites: `layouts/section.llms.txt`
  for every section, or `layouts/TYPE/section.llms.txt` for sections of one
  [type][] (`docs`, unless the page sets `type`)

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

For scorecard examples, see the [OpenTelemetry agent-readiness report][] on
CLOMonitor (CLOMonitor runs AFDocs, one check per category; its
`llms-txt-coverage` result reflects the curated-overview trade-off this site's
checks also make) and the AFDocs scorecard for this site:

<details>
<summary><code>docsy.dev</code> scorecard</summary>

Known gaps in this scorecard are tracked under [#2614][].

{{< readfile file="afdocs-scorecard.txt" code="true" lang="text" >}}

</details>

For details on how these checks are configured, see
[Agent-support checks](/project/build/ci-cd/#agent-support-checks).

<!-- prettier-ignore-start -->
[afdocs]: https://afdocs.dev/
[doc-rooted site]: /docs/content/adding-content/#doc-rooted-sites
[doc-rooted-agent-support]: /docs/content/adding-content/#agent-support
[experimental]: /project/about/changelog/#experimental
[home-tmp-type]: https://gohugo.io/templates/types/#home
[`layouts/all.llms.txt`]: https://github.com/docsy/docsy/blob/main/theme/layouts/all.llms.txt
[`layouts/all.md`]: https://github.com/docsy/docsy/blob/main/theme/layouts/all.md
[`llms-directive.html`]: https://github.com/docsy/docsy/blob/main/theme/layouts/_partials/llms-directive.html
[llmstxt.org]: https://llmstxt.org/
[lookup]: https://gohugo.io/templates/lookup-order/
[OpenTelemetry agent-readiness report]: https://clomonitor.io/projects/cncf/open-telemetry#community_agent_readiness
[output format]: https://gohugo.io/quick-reference/glossary/#output-format
[output formats]: https://gohugo.io/configuration/output-formats/
[outputs]: https://gohugo.io/configuration/outputs/
[project]: https://gohugo.io/quick-reference/glossary/#project
[section-tmp-type]: https://gohugo.io/templates/types/#section
[shortcode-md-variants]: /docs/content/shortcodes/#markdown-output-variants
[site]: https://gohugo.io/quick-reference/glossary/#site
[site root]: https://gohugo.io/quick-reference/glossary/#site-root
[type]: https://gohugo.io/content-management/front-matter/#type
<!-- prettier-ignore-end -->
