---
title: Script loading
description:
  Dispatcher-and-sub-partials architecture, ordering decisions, and override
  points
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
default rendered output:

- **Static theme scripts**, emitted as plain script tags: `deflate.js`
  (PlantUML), `tabpane-persist.js`, `prism.js`.
- **The main bundle**: Bootstrap plus the theme's core and feature scripts
  (search, PlantUML, MarkMap, draw.io; dark mode and ScrollSpy when enabled),
  concatenated into `main.js` (`scripts/main-bundle.html`), minified and
  fingerprinted in production. A site param picks which search script is
  bundled, `search.js` or `offline-search.js`.
- **Individually processed theme scripts**: `click-to-copy.js` (Prism's mutually
  exclusive alternative; the two share `scripts/code-copy.html`).
- **Pinned CDN tags with inline configuration**: the MarkMap autoloader and
  Algolia DocSearch.
- **Build-time remote fetches**: KaTeX, whose CSS and fonts are copied and
  re-served as local assets, and Mermaid, whose pinned version is validated at
  build time while the browser imports the module straight from the CDN.

Gating lives at two levels, preserved from before the decomposition. The
dispatcher itself gates MarkMap and PlantUML (site params) and Mermaid and KaTeX
(`.Page.Store` flags); the other sub-partials are always dispatched, some gating
internally (Algolia search configuration, Prism vs click-to-copy, search bundle
choice, dark mode, ScrollSpy) and some unconditional (tab-pane persistence).

## The dispatcher as a seam

The decomposition has two design consequences:

- **Independent overrides**: each sub-partial resolves through Hugo's union file
  system, so a site can replace one sub-partial by shadowing one file instead of
  copying all of `scripts.html`.
- **A landing point**: the dispatcher is where the [plugin loop](#plugin-loop)
  plugged in, and where converting built-in integrations onto the loop is
  planned ([#2789][]).

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
pattern. For the
registry contract, shape guards, and build details, see the [implementation
notes][impl].

Two ordering decisions:

- **Companions before the script**: a plugin's companion partial and stylesheet
  emit before its script tag, so a synchronous plugin script can rely on
  companion markup and styles being present.
- **Body-end CSS (interim placement)**: the companion stylesheet's `<link>` is
  emitted where the loop runs (at the end of `<body>`), not in `<head>`, because
  `pageGate` reads `.Page.Store` flags that are only reliable after content
  render. Moving companion CSS into the head is a possible later refinement, and
  has to solve that constraint or gated CSS silently drops ([#2789][]).

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
