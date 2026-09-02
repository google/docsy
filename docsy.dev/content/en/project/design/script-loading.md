---
title: Script loading
description:
  Dispatcher-and-sub-partials architecture, ordering decisions, and override
  points
---

Docsy emits its JavaScript at the end of `<body>` through
[`_partials/scripts.html`][scripts.html]: a small dispatcher that routes each
feature to its own sub-partial under [`_partials/scripts/`][scripts-dir].

## Loading mechanisms

Before 0.18, `scripts.html` mixed a few sub-partial dispatches (MarkMap,
Mermaid, KaTeX) with the other mechanisms' logic inline. The decomposition moved
every mechanism into a per-feature sub-partial without changing the default
rendered output:

- **Static theme scripts**, emitted as plain script tags: `deflate.js`
  (PlantUML), `tabpane-persist.js`, `prism.js`.
- **The main bundle**: Bootstrap and the theme's core scripts, concatenated into
  `main.js` (`scripts/main-bundle.html`), minified and fingerprinted in
  production.
- **Individually processed theme scripts**: `click-to-copy.js`.
- **Pinned CDN tags with inline configuration**: the MarkMap autoloader and
  Algolia DocSearch.
- **Build-time remote fetches**: KaTeX, whose CSS and fonts are copied and
  re-served as local assets, and Mermaid, whose pinned version is validated at
  build time while the browser imports the module straight from the CDN.

The dispatcher preserves each mechanism's original gating, for example site
params (MarkMap, PlantUML, Prism vs click-to-copy), `.Page.Store` flags
(Mermaid, KaTeX), and search configuration (Algolia); some sub-partials carry
further param gates internally (search bundle choice, dark mode, ScrollSpy).

## The dispatcher as a seam

The decomposition has two design consequences:

- **Independent overrides**: each sub-partial resolves through Hugo's union file
  system, so a site can replace one feature's emission by shadowing its
  sub-partial instead of copying all of `scripts.html`.
- **A landing point**: the dispatcher is where the [plugin loop](#plugin-loop)
  plugged in, and where converting built-in integrations onto the loop is
  planned ([#2789][]).

### Override points

- Every sub-partial the dispatcher routes to under `_partials/scripts/`.
- `_partials/algolia/head.html` and `_partials/scripts/algolia.html`: real
  partials as of 0.18. They were previously inline `define`s whose documented
  override paths did not work; the internal template names `algolia/head` and
  `algolia/scripts` no longer exist.
- Per plugin: the script asset `assets/js/plugins/NAME.js` (a same-named project
  file shadows the theme's), its companion partial, and its companion
  stylesheet.

## The plugin loop {#plugin-loop}

[`scripts/plugins.html`][plugins.html] emits each plugin registered in
`params.docsy.plugins`. `pageGate` generalizes the Mermaid/KaTeX page-flag
pattern, so any plugin can ship only on the pages that use its feature. For the
registry contract, shape guards, and build details, see the [implementation
notes][impl].

Two ordering decisions:

- **Companions before the script**: a plugin's companion partial and stylesheet
  emit before its script tag, so a synchronous plugin script can rely on
  companion markup and styles being present.
- **Body-end CSS, an interim placement**: the companion stylesheet's `<link>` is
  emitted where the loop runs (at the end of `<body>`), not in `<head>`, because
  `pageGate` reads `.Page.Store` flags that are only reliable after content
  render. Moving companion CSS into the head is a possible later refinement, and
  has to solve that constraint or gated CSS silently drops ([#2789][]).

## Related pages

- [Implementation: script loading][impl]
- [Quality: script loading][quality]: the test nets that pin this behavior

[#2789]: https://github.com/google/docsy/issues/2789
[impl]: /project/implementation/script-loading/
[plugins.html]:
  https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
[quality]: /project/quality/script-loading/
[scripts-dir]:
  https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/
[scripts.html]:
  https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts.html
