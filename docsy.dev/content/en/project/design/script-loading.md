---
title: Script loading
description:
  Loading mechanisms, the dispatcher and plugin loop, ordering decisions, and
  override points
---

Docsy loads its body-end JavaScript through
[`_partials/scripts.html`][scripts.html]: a small dispatcher over per-feature
sub-partials under [`_partials/scripts/`][scripts-dir]. (Head-side JS, such as
theme initialization and analytics, is emitted by `_partials/head.html` and is
out of scope here.)

## Loading mechanisms

Before 0.18, `scripts.html` mixed a few sub-partial dispatches (MarkMap,
Mermaid, KaTeX) with the other mechanisms' logic inline. The decomposition moved
every mechanism out of the dispatcher into sub-partials without changing the
default rendered output; the 0.18 plugin conversions then moved the first
integrations onto the [plugin loop](#plugin-loop):

- **Static theme scripts**, emitted as plain script tags: `deflate.js`
  (PlantUML), `prism.js`.
- **The main bundle**: Bootstrap plus the theme's core and feature scripts
  (search, PlantUML, draw.io; dark mode and ScrollSpy when enabled),
  concatenated into `main.js` (`scripts/main-bundle.html`), minified and
  fingerprinted in production. A site param picks which search script is
  bundled, `search.js` or `offline-search.js`.
- **Theme plugins**: markmap, tab-pane persistence, and click-to-copy ride the
  plugin loop as theme-default registry entries, their legacy params aliased for
  a deprecation cycle ([implementation notes][impl]).
- **Pinned CDN tags with inline configuration**: Algolia DocSearch.
- **Build-time remote fetches**: KaTeX, whose CSS and fonts are copied and
  re-served as local assets; Mermaid, whose pinned version is validated at build
  time while the browser imports the module straight from the CDN; and the
  MarkMap autoloader, vendored at build time and served same-origin with SRI
  (its runtime libraries still load from the CDN, at versions the autoloader
  pins).

Gating lives at two levels. The dispatcher gates PlantUML (site param) and
Mermaid and KaTeX (`.Page.Store` flags); the plugin loop's `pageGate` carries
the same page-flag pattern for markmap (`hasMarkmap`) and tab-pane persistence
(`hasTabs`), while the remaining sub-partials gate internally (Algolia search
configuration, Prism, search bundle choice, dark mode, ScrollSpy).

## The dispatcher as a seam

The decomposition has two design consequences:

- **Independent overrides**: each sub-partial resolves through Hugo's union file
  system, so a site can replace one sub-partial by shadowing one file instead of
  copying all of `scripts.html`.
- **A landing point**: the dispatcher is where the [plugin loop](#plugin-loop)
  plugged in, and where the first built-in integrations (markmap, tab-pane
  persistence, click-to-copy) converted onto the loop in 0.18 ([#2789][]).

### Override points

- Every sub-partial the dispatcher routes to under `_partials/scripts/`.
- `_partials/algolia/head.html` and `_partials/scripts/algolia.html`: real
  partials as of 0.18, replacing inline `define`s whose documented override
  paths did not work (the internal template names `algolia/head` and
  `algolia/scripts` no longer exist).
- Per plugin: the script asset `assets/js/plugins/NAME.js`, its companion
  partial, and its companion stylesheet ([implementation notes][impl]).

## The plugin loop {#plugin-loop}

[`scripts/plugins.html`][plugins.html] emits each eligible plugin registered in
`params.docsy.plugins`. `pageGate` generalizes the Mermaid/KaTeX page-flag
pattern. For the registry contract, shape guards, and build details, see the
[implementation notes][impl].

### Registry shape: a map, layered by Hugo's config merge {#registry-shape}

The registry is a **map keyed by plugin name**, and the theme declares its own
plugins in `theme/hugo.yaml` under the same key. Hugo's theme-to-site
configuration merge is deep for maps, so a site's map layers over the theme's:

- **Supersession and inheritance come free**: a site entry for a theme plugin
  merges field by field (`markmap: { enable: true }` keeps the theme's
  `pageGate`), and a scalar `false` replaces the theme's entry outright, which
  is the turn-off shorthand.
- **Duplicates are impossible**: map keys are unique. The loop needs no
  deduplication, no first-wins rule, no supersession bookkeeping.
- **The loop is generic**: it knows no plugin names. Theme defaults are
  configuration, not template code; plugin-specific behavior lives in the
  plugin's own files: its script, its companion partial, and, for parameters
  that predate the registry, a per-plugin shim partial that decorates the
  plugin's entry and is deleted with the parameter's deprecation cycle.
- **Plugins are site-wide**: the registry is read from site configuration and is
  not a per-language surface; per-language divergence is unsupported.
- **Order** is `weight` ascending, then name; Hugo's idiom for ordering named
  things.

Alternatives considered, and why not:

- **A list of entries** (the initial shape, superseded before release): lists
  are replaced, not merged, by Hugo's config merge, so theme defaults had to
  live in template code and every override, turn-off, or duplicate needed loop
  logic, which grew a name-keyed defaults table and plugin-specific branches
  inside the generic loop.
- **A per-plugin manifest file** next to the script: plugin-owned defaults, but
  a third artifact per plugin, and the theme still needs a configuration home
  for which plugins are on by default. Revisit if module-shipped plugins need
  self-describing metadata; manifests must never auto-register (the explicit
  registry is a security property).
- **Metadata partials** returning a defaults dict: pure Hugo, but metadata as
  template code is less inspectable than configuration.

Named collections in Hugo's own configuration (`outputFormats`, `mediaTypes`,
`languages`, `taxonomies`) are maps keyed by name; the registry follows that
idiom.

### Ordering decisions

- **Companions before the script**: a plugin's companion partial and stylesheet
  emit before its script tag, so a synchronous plugin script can rely on
  companion markup and styles being present.
- **Body-end CSS (interim placement)**: the companion stylesheet's `<link>` is
  emitted where the loop runs (at the end of `<body>`), not in `<head>`, because
  `pageGate` reads `.Page.Store` flags that are only reliable after content
  render. Moving companion CSS into the head is a possible later refinement, and
  has to solve that constraint or gated CSS silently drops ([#2789][]).

**Print output**: print layouts render descendant pages into one page, so they
merge descendant page-gate flags onto the print page
(`_partials/print/page-flags.html`) before the dispatcher runs; page-gated
scripts reach print output through that merge.

## Related pages

- [Implementation: script loading][impl]
- [Quality: script loading][quality]: the test nets that pin this behavior

<!-- prettier-ignore-start -->
[#2789]: https://github.com/google/docsy/issues/2789
[impl]: /project/implementation/script-loading/
[plugins.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
[quality]: /project/quality/script-loading/
[scripts-dir]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/
[scripts.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts.html
<!-- prettier-ignore-end -->
