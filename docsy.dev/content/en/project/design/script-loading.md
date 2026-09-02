---
title: Script loading
description:
  Dispatcher-and-sub-partials architecture, ordering decisions, and override
  points
---

<span class="badge bg-info text-bg-info">As of Docsy 0.18.0</span>

Docsy emits its JavaScript at the end of `<body>` through
[`_partials/scripts.html`][scripts.html]: a small dispatcher that routes each
feature to its own sub-partial under [`_partials/scripts/`][scripts-dir].

## Loading mechanisms

Before 0.18, `scripts.html` had accreted five loading mechanisms inline. The
decomposition moved each into a per-feature sub-partial without changing the
default rendered output:

- **Static theme scripts**, emitted as plain script tags: `deflate.js`
  (PlantUML), `tabpane-persist.js`, `prism.js`.
- **The main bundle**: Bootstrap and the theme's core scripts, concatenated into
  `main.js` (`scripts/main-bundle.html`), minified and fingerprinted in
  production.
- **Individually processed theme scripts**: `click-to-copy.js`.
- **Pinned CDN tags with inline configuration**: the MarkMap autoloader and
  Algolia DocSearch.
- **Build-time remote fetches**, re-served as local assets: Mermaid and KaTeX.

The dispatcher preserves each mechanism's original gating: site params (MarkMap,
PlantUML), `.Page.Store` flags (Mermaid, KaTeX), and search configuration
(Algolia).

## The dispatcher as a seam

The decomposition has two design consequences:

- **Independent overrides**: each sub-partial resolves through Hugo's union file
  system, so a site can replace one mechanism by shadowing one file instead of
  copying all of `scripts.html`.
- **A landing seam**: the dispatcher is where the [plugin loop](#plugin-loop)
  plugged in, and it is the seam for converting built-in integrations onto the
  loop ([#2789][]).

### Override points

- Every sub-partial under `_partials/scripts/`.
- `_partials/algolia/head.html` and `_partials/scripts/algolia.html`: real
  partials as of 0.18. They were previously inline `define`s whose documented
  override paths did not work; the internal template names `algolia/head` and
  `algolia/scripts` no longer exist.
- Per plugin: the script asset `assets/js/plugins/NAME.js` (a same-named project
  file shadows the theme's), its companion partial, and its companion
  stylesheet.

## The plugin loop {#plugin-loop}

[`scripts/plugins.html`][plugins.html] emits each plugin registered in
`params.docsy.plugins`: each script asset builds individually and ships
fingerprinted with SRI, in registry order. `pageGate` generalizes the
Mermaid/KaTeX page-flag pattern, so any plugin can ship only on the pages that
use its feature. For the registry contract, shape guards, and build details, see
the [implementation notes][impl].

Two ordering decisions:

- **Companions before the script**: a plugin's companion partial and stylesheet
  emit before its script tag, so a synchronous plugin script can rely on
  companion markup and styles being present.
- **Body-end CSS, an interim placement**: the companion stylesheet's `<link>` is
  emitted where the loop runs -- at the end of `<body>` -- rather than in
  `<head>`. This keeps the plugin unit self-contained in the loop; moving
  companion CSS into the head is a possible later refinement.

## Related pages

- [Implementation: script loading][impl]
- [Quality: script loading][quality] -- the test nets that pin this behavior

[#2789]: https://github.com/google/docsy/issues/2789
[impl]: /project/implementation/script-loading/
[plugins.html]:
  https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
[quality]: /project/quality/script-loading/
[scripts-dir]:
  https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/
[scripts.html]:
  https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts.html
