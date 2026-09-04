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

- **Keys are lowercase.** Hugo lowercases configuration keys, so plugin names,
  entry fields, and option keys all arrive in lowercase: name plugin files in
  lowercase, and in templates and plugin scripts read fields and options as
  lowercase (`.Plugin.pagegate`, `params.apikey`). Config examples keep Hugo's
  camelCase convention; it's what arrives that is lowercase.
- Names are restricted to `^[a-z0-9_-]+$`: they address assets and partials by
  path, so anything that could traverse outside the plugin namespaces is refused
  with a warning (`docsy-plugin-name`). The entry's key is its name; names
  ending in `-shim` are reserved for [shims](#pre-registry-parameters).
- Entry fields outside `enable`, `defer`, `pageGate`, `weight`, and `options`
  warn (`docsy-plugin-entry`) and are ignored, so a misspelled field can't pass
  as a setting.
- With `pageGate` set, the plugin is emitted only on pages carrying the named
  `.Page.Store` flag; `pageGate: ''` (or `false`) clears an inherited gate.
  `weight` is an integer.
- `enable` and `defer` accept `false` and the string `"false"` (any case; YAML
  strings are truthy in Go templates). A scalar entry value of `false` turns the
  entry off; any other scalar has already replaced the theme's entry in Hugo's
  merge, so it warns (`docsy-plugin-entry`) and is skipped.

### Theme plugins

The theme registers its own plugins in `theme/hugo.yaml` under the same key;
Hugo's config merge layers a site's map over it, so a site changes one field
(`markmap: { enable: true }` keeps the theme's `pageGate`) or turns a plugin off
(`tabpane-persist: false`) without the loop knowing which plugins are the
theme's:

- `click-to-copy`: on, deferred.
- `tabpane-persist`: on, page-gated on `hasTabs` (set by the tabpane shortcode
  when persistence is active).
- `markmap`: off, page-gated on `hasMarkmap`. The markmap code-block render hook
  sets the flag and otherwise renders Hugo's default code block
  (`transform.HighlightCodeBlock`), which the plugin script transforms in the
  browser: a disabled markmap never changes how the fence renders. Like the
  theme's mermaid, math, and chem hooks, it takes precedence over a project-wide
  `render-codeblock.html` for its fence. Its companion partial vendors the
  autoloader.

### Pre-registry parameters

A plugin whose behavior was once controlled by other parameters ships a shim
partial, `_partials/scripts/plugins/NAME-shim.html`, that the loop applies to
the plugin's merged entry before the enable and gate checks: it receives
`(dict "Page" PAGE "Plugin" ENTRY)` and returns the adjusted entry (a map;
anything else fails the build). A non-false scalar entry is skipped, with its
warning, before shims run; a scalar `false` reaches them as `enable: false`, so
a legacy parameter still wins over it. Each retires with its parameter's
deprecation cycle by deleting the file:

- `markmap-shim.html`: `params.markmap.enable` (deprecated,
  `docsy-markmap-legacy`), when set, turns markmap on and **ungated**, exactly
  the pre-0.18 site-wide behavior (custom render hooks and raw markmap HTML
  never set the flag), whatever the registry entry says; the warning asks for
  its removal.
- `click-to-copy-shim.html`: `params.disable_click2copy_chroma` (deprecated,
  `docsy-c2c-legacy`) turns the plugin off; `click-to-copy: false` is the
  registry form. `params.prism_syntax_highlighting` also turns it off (Prism
  ships its own copy button); Prism support is a live feature, so only the
  coupling is expressed here.

## Shape guards

The theme's plugins live under `params.docsy.plugins`, so a site value that is
not a map there, or at `params.docsy`, has already replaced them in Hugo's
config merge:

- Any non-map `params.docsy.plugins` (`null` from an emptied `plugins:` key, a
  scalar, or the pre-release list shape) warns (`docsy-plugins-config`) that the
  theme plugins are off; `plugins: {}` keeps them. A non-map `params.docsy` (a
  site's own pre-0.18 `docsy` param) draws the same warning id, naming the key
  as reserved.
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
- The script tag always carries SRI attributes (`integrity`, `crossorigin`), so
  **fingerprinting runs in every environment**, not just production; `defer` is
  added when the entry sets it.

## Companions

Optional companions resolve by naming convention and emit **before** the script
tag ([why][design-ordering]):

- `_partials/scripts/plugins/NAME.html`: a partial for vendored libraries,
  component markup, and config-provider patterns; invoked with
  `(dict "Page" PAGE "Plugin" ENTRY)`, where the entry carries the lowercase
  keys `name`, `enable`, `defer`, `pagegate`, `weight`, `options`.
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
[design-ordering]: /project/design/script-loading/#ordering-decisions
[plugins.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
<!-- prettier-ignore-end -->
