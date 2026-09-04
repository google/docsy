---
title: Script loading
description:
  Registry contract, theme defaults, shape guards, build details, and security
  constraints of the plugin loop
---

Code-level notes for [`_partials/scripts/plugins.html`][plugins.html], the loop
behind `params.docsy.plugins`. For the architecture and ordering decisions, see
the [design notes][design].

## Registry contract

`params.docsy.plugins` is a map of plugin entries keyed by name ([why a
map][design-shape]):

```yaml
params:
  docsy:
    plugins:
      NAME: # resolves assets/js/plugins/NAME.js
        enable: true # optional; false skips the entry
        defer: true # optional; adds `defer` to the script tag
        pageGate: FLAG # optional; a .Page.Store flag name
        weight: 0 # optional; emission order, ascending, then by name
        options: {} # optional; reaches the module as @params
      OTHER: false # scalar shorthand: turns the entry off
```

- Names are restricted to `^[A-Za-z0-9_-]+$`: they address assets and partials
  by path, so anything that could traverse outside the plugin namespaces is
  refused with a warning (`docsy-plugin-name`).
- With `pageGate` set, the plugin is emitted only on pages carrying the named
  `.Page.Store` flag; `pageGate: ''` clears an inherited gate.
- `enable` accepts `false` and the string `"false"` (any case; YAML strings are
  truthy in Go templates). A scalar entry value of `false` means the same; any
  other scalar warns (`docsy-plugin-entry`) and counts as `{}`.

### Theme plugins

The theme registers its own plugins in `theme/hugo.yaml` under the same key;
Hugo's config merge layers a site's map over it, so a site changes one field
(`markmap: { enable: true }` keeps the theme's `pageGate`) or turns a plugin off
(`tabpane-persist: false`) without the loop knowing which plugins are the
theme's:

- `click-to-copy`: on, deferred.
- `tabpane-persist`: on, page-gated on `hasTabs` (set by the tabpane shortcode
  when persistence is active).
- `markmap`: off, page-gated on `hasMarkmap` (set by the markmap code-block
  render hook). Its companion partial vendors the autoloader.

### Pre-registry parameters

A plugin whose behavior was once controlled by other parameters ships a
compatibility partial, `_partials/scripts/plugins/NAME.compat.html`, that the
loop applies to the plugin's merged entry before the enable and gate checks: it
receives `(dict "Page" PAGE "Plugin" ENTRY)` and returns the adjusted entry.
Each retires with its parameter's deprecation cycle by deleting the file:

- `markmap.compat.html`: `params.markmap.enable` (deprecated,
  `docsy-markmap-legacy`), when set, turns markmap on and **ungated**, exactly
  the pre-0.18 site-wide behavior (custom render hooks and raw markmap HTML
  never set the flag), whatever the registry says; the warning asks for its
  removal.
- `click-to-copy.compat.html`: `params.disable_click2copy_chroma` (deprecated,
  `docsy-c2c-legacy`) turns the plugin off; `click-to-copy: false` is the
  registry form. `params.prism_syntax_highlighting` also turns it off (Prism
  ships its own copy button); Prism support is a live feature, so only the
  coupling is expressed here.

## Shape guards

The registry read must not break sites that already carry a `params.docsy`
value:

- A scalar `params.docsy` is left untouched (the read is gated on
  `reflect.IsMap`) and the registry is treated as empty.
- A non-map `params.docsy.plugins` warns (`docsy-plugins-config`) and is
  ignored. A list is the pre-release shape and draws the same warning.
- An enabled entry with no asset at `assets/js/plugins/NAME.js` warns
  (`docsy-plugin-missing`), regardless of `pageGate`, so a typo can't hide
  behind a gate.

Warnings are issued with `warnidf`, so each is suppressible through Hugo's
`ignoreLogs`.

## Build and emission

- The script asset resolves through the union file system: theme, project, or
  module-mounted, with a same-named project file shadowing the theme's.
- Each plugin builds individually with `js.Build`; the entry's `options` travel
  as build `params`, so the module reads them with
  `import * as params from '@params'`. Production builds add `minify`.
- **Fingerprinting runs in every environment**, not just production: the script
  tag always carries SRI.
- The script tag carries SRI attributes (`integrity`, `crossorigin`), and
  `defer` when the entry sets it.

## Companions

Optional companions resolve by naming convention and emit **before** the script
tag ([why][design-ordering]):

- `_partials/scripts/plugins/NAME.html`: a partial for vendored libraries,
  component markup, and config-provider patterns; invoked with
  `(dict "Page" PAGE "Plugin" ENTRY)`.
- `assets/scss/plugins/NAME.scss`: a stylesheet compiled through the SCSS
  pipeline, minified in production, fingerprinted, and emitted with SRI.

## Security constraints

- **Never pipe `Plugin.options` through `safeHTML`, `safeJS`, or `safeURL`** in
  a companion partial: options are site-config-controlled strings, and Hugo's
  contextual autoescaping is the defense; a `safe*` cast disables it.
- Plugin `options` (and any value reaching a module as `@params`) ship
  **world-readable in the built JS**: never route secrets or tokens through
  them.
- Third-party libraries are pinned and vendored: no CDN-`latest`, and no loader
  that pulls unpinned secondary code (SRI on a loader is worthless if the loader
  fetches unpinned dependencies).
- Remote-capable plugins get a `pageGate` so their code ships only where used.
- Residual exposure, named: the vendored markmap autoloader's runtime libraries
  still load from the CDN, pinned by the autoloader itself but without SRI.

<!-- prettier-ignore-start -->
[design]: /project/design/script-loading/
[design-shape]: /project/design/script-loading/#registry-shape
[design-ordering]: /project/design/script-loading/#plugin-loop
[plugins.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
<!-- prettier-ignore-end -->
