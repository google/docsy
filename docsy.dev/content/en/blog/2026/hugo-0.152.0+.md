---
title: Hugo 0.152.0 to 0.155.x breaking and notable changes
linkTitle: Hugo 0.152.0 to 0.155.x
date: 2026-01-31
author: >-
  [Patrice Chalin](https://github.com/chalin) ([CNCF](https://www.cncf.io/)),
  for the [Docsy Steering Committee](/blog/2022/hello/#introducing-the-psc)
body_class: release-highlights published-draft-post
tags: [hugo, upgrade]
# prettier-ignore
cSpell:ignore: docsy dartsass libsass IPTC multihost libwebp opentelemetry gohugoio
---

This post summarizes the breaking and notable changes in Hugo 0.152.0 to
0.155.1. It is a companion post to the Docsy [0.14.0](0.14.0/) and
[0.13.0](../2025/0.13.0/) release and upgrade guides.

## Breaking changes and deprecations

### 0.153.0

Release [0.153.0] (2025-12-19) introduces, among other things, a powerful new
[multidimensional content model][] (over languages, versions, and roles) through
the new [sites.matrix] configuration option.

Breaking/notable changes related to multidimensional sites are summarized next.

- **Build order**
  - **Description:** Hugo now builds sites based on sorted dimensions (by
    weight, then name) instead of starting with the default content language.
    This also affects `.Site.Sites` sort order.
  - **Impact:** May affect sites relying on specific build order.
  - **Example:** the [opentelemetry.io] Docsy-based site was affected by this
    change in build order. One of the fixes was to fetch the default site using
    the `default` selector rather than index 0 over `.Site.Sites`. For details,
    see [open-telemetry/opentelemetry.io#8850].

- **`lang` mount option deprecated**
  - **Description:** The `lang` option on mounts and segments is deprecated in
    favor of `sites.matrix`.
  - **Impact:** Update configs to use new syntax.
  - See [migration details](#use-sites-matrix).

- **`includeFiles`/`excludeFiles` deprecated**
  - **Description:** File mount options deprecated in favor of `files` filter
    with negation support.
  - **Impact:** Update mount configs.
  - See [migration details](#use-files).

- **Duplicate content path warnings removed**
  - **Description:** No longer logs warnings about potential duplicate content
    paths.
  - **Impact:** Less noisy, but may hide issues.

[opentelemetry.io]: https://opentelemetry.io/
[open-telemetry/opentelemetry.io#8850]:
  https://github.com/open-telemetry/opentelemetry.io/pull/8850

<details>
<summary class="h6 text-primary">Known issues with <b>aliases</b></summary>

The following Hugo 0.153.x issues affected alias handling; they impacted at
least one Docsy-based site ([docsy.dev]):

- **Default language alias**: Changes to default language alias behavior may
  cause refresh page issues. See [gohugoio/hugo#14363][#14363] and
  [gohugoio/hugo#14361][#14361].
- **Page aliases**: Page aliases may refer to the wrong language in some
  configurations. See
  [Docsy #2433](https://github.com/google/docsy/issues/2433). Fixed in 0.154.0
  and 0.155.0 (alias handling improvements).

[#14361]: https://github.com/gohugoio/hugo/issues/14361
[#14363]: https://github.com/gohugoio/hugo/pull/14363

</details>

[docsy.dev]: https://docsy.dev

### 0.152.0

Release [0.152.0] (2025-10-21) upgrades to a more modern YAML library, which
introduces a breaking change to the way that YAML interprets certain tokens
across configuration files and page front matter.

- **Description**: Values or keys like [`yes`, `no`, `on`, `off`,
  etc.][yes-no-list] are treated as **strings** rather than booleans.
- **Action required**: [Check your YAML files](#yaml-yes-no-etc) for these keys
  or values.

## Notable changes

Notable changes that are non-breaking include:

- **[0.155.0]**
  - Support for version and dimension range queries in the sites matrix (e.g.,
    `>= v1.0.0`)
  - Page aliases now work properly in multidimensional sites
  - XMP and IPTC image metadata support added

- **[0.154.0]** - **[0.154.5]**
  - [Partial decorators] introduced (`inner` keyword) for powerful template
    composition
  - New [`Page.OutputFormats.Canonical`] method ([0.154.4])
  - New `reflect.*` functions, such as `reflect.IsPage`
  - Critical fixes for alias handling and site redirects in
    multidimensional/multihost setups

- **[0.153.0]**
  - WebP encoding/decoding now uses `libwebp` via WASM. The extended edition is
    no longer required for WebP.
  - Animated WebP support, including conversion to/from animated GIFs
  - `GoogleAnalytics.RespectDoNotTrack` default changed to `true`
  - **macOS distributions** are solely as signed and notarized `.pkg`
    installers, `.tar.gz` is no longer supported. See the notes below.

> [!NOTE] macOS distributions and the `hugo-extended` NPM package
>
> - You can still extract Hugo executables from macOS installer `.pkg` files;
>   see [hugo-extended#183] for the `pkgutil` command.
> - The [hugo-extended] NPM package briefly required `sudo` in versions
>   0.153.0–0.153.3.

[hugo-extended]: https://www.npmjs.com/package/hugo-extended
[hugo-extended#183]: https://github.com/jakejarvis/hugo-extended/issues/183
[Partial decorators]:
  https://gohugo.io/quick-reference/glossary/#partial-decorator
[`Page.OutputFormats.Canonical`]:
  https://gohugo.io/methods/page/outputformats/#canonical

## Migrating to Hugo 0.155.x {#migrating}

This section describes how to migrate to the latest patch release of Hugo 0.155.

### 1. YAML yes/no etc. are strings {#yaml-yes-no-etc}

Search for these unquoted key or value tokens:

- `yes`, `Yes`, `YES`, `y`, `Y`, `on`, `On`, `ON`: change to `true`
- `no`, `No`, `NO`, `n`, `N`, `off`, `Off`, `OFF`: change to `false`

For example:

```yaml
# OLD (now broken in 0.152.0+)
enabled: yes
disabled: no

# NEW (correct)
enabled: true
disabled: false
```

Also, for Docsy projects that have custom page [Feedback] configuration: search
for quoted keys (or values) containing the previously listed tokens, and in most
cases, you can now drop the quotes. For example:

```yaml
# OLD
params:
  ui:
    feedback:
      enable: true
      "yes": Glad to hear it! ...
      'no': Sorry to hear that. ...

# NEW
params:
  ui:
    feedback:
      enable: true
      yes: Glad to hear it! ...
      no: Sorry to hear that. ...
```

[Feedback]: /docs/content/feedback/#user-feedback

### 2. Use `sites.matrix` instead of `lang` in mounts {#use-sites-matrix}

If using `lang` on mounts, migrate to `sites.matrix` to avoid deprecation
warnings:

```yaml
# OLD (deprecated)
- source: content/fr
  target: content
  lang: fr

# NEW
- source: content/fr
  target: content
  sites:
    matrix:
      languages: ['fr']
```

For example, see [open-telemetry/opentelemetry.io#9070].

### 3. Replace `includeFiles`/`excludeFiles` with `files` {#use-files}

Migrate `includeFiles`/`excludeFiles` to `files` to avoid deprecation warnings:

```yaml
# OLD (deprecated)
- source: content
  target: content
  excludeFiles: ['draft/*']

# NEW
- source: content
  target: content
  files: ['! draft/*']
```

> [!CAUTION]
>
> The file exclusion syntax has a leading `!` **followed by a space**. Without
> the space, the glob pattern is treated as a literal path and so will fail to
> exclude the desired files. For a discussion on the topic, see [Why does glob
> negation require a space after?][56651]

[56651]:
  https://discourse.gohugo.io/t/why-does-glob-negation-require-a-space-after/56651

For example, see [open-telemetry/opentelemetry.io#9070].

---

## Recommended minimum Hugo version

For projects using the new sites matrix features who also want the latest fixes
and updated support for aliases in the context of multidimensional sites, we
recommend using Hugo 0.155.0 or later:

```yaml
module:
  hugoVersion:
    min: 0.155.0
```

[0.152.0]: https://github.com/gohugoio/hugo/releases/tag/v0.152.0
[yes-no-list]: https://github.com/gohugoio/hugo/releases/tag/v0.152.0
[0.153.0]: https://github.com/gohugoio/hugo/releases/tag/v0.153.0
[0.154.0]: https://github.com/gohugoio/hugo/releases/tag/v0.154.0
[0.154.4]: https://github.com/gohugoio/hugo/releases/tag/v0.154.4
[0.154.5]: https://github.com/gohugoio/hugo/releases/tag/v0.154.5
[0.155.0]: https://github.com/gohugoio/hugo/releases/tag/v0.155.0
[sites.matrix]: https://gohugo.io/quick-reference/glossary/#sites-matrix
[multidimensional content model]:
  https://gohugo.io/about/features/#multi-dimensional-content-model
[open-telemetry/opentelemetry.io#9070]:
  https://github.com/open-telemetry/opentelemetry.io/pull/9070
