---
title: Script loading
description: >-
  The params.docsy.plugins contract: entry fields, theme defaults and their
  legacy-parameter shims, shape guards, build and emission, companions, and
  security constraints
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

- `weight` is an integer.
- **Keys are lowercase.** Hugo lowercases configuration keys, so plugin names,
  entry fields, and option keys all arrive in lowercase: name plugin files in
  lowercase, and in templates and plugin scripts read fields and options as
  lowercase (`.Plugin.pagegate`, `params.apikey`). Config examples keep Hugo's
  camelCase convention; it's what arrives that is lowercase.
- Names are restricted to `^[a-z0-9_-]+$`: they address assets and partials by
  path, so anything that could traverse outside the plugin namespaces is refused
  with a warning (`docsy-plugin-name`). The entry's key is its name; names
  ending in `_docsy-shim` are refused with the same warning id, the suffix being
  reserved for [shims](#pre-registry-parameters).
- Entry fields outside `enable`, `defer`, `pageGate`, `weight`, and `options`
  warn (`docsy-plugin-entry`) and are ignored, so a misspelled field can't pass
  as a setting; non-map `options` warn the same way and count as none.
- With `pageGate` set, the plugin is emitted only on pages carrying the named
  `.Page.Store` flag; `pageGate: ''` (or a boolean) clears an inherited gate.
- `enable` and `defer` accept `false` and the string `"false"` (any case; YAML
  strings are truthy in Go templates). A scalar entry value of `false`, or of
  the string `"false"` (any case), turns the entry off; any other scalar has
  already replaced the theme's entry in Hugo's merge, so it warns
  (`docsy-plugin-entry`) and is skipped.

### Theme plugins

The theme registers its own plugins in `theme/hugo.yaml` under the same key;
Hugo's config merge layers a site's map over it, so a site changes one field
(`markmap: { enable: true }` keeps the theme's `pageGate`) or turns a plugin off
(`tabpane-persist: false`) without the loop knowing which plugins are the
theme's:

- `click-to-copy`: on, deferred.
- `tabpane-persist`: on, ungated ([why][design-gating]): every page, as before
  0.18.
- `markmap`: off, page-gated on `hasMarkmap`.
  - Its code-block render hook sets the flag and renders Hugo's default code
    block ([why][design-gating]); like the theme's mermaid, math, and chem
    hooks, it takes precedence over a project-wide `render-codeblock.html` for
    its fence.
  - Its companion partial vendors the autoloader at the pinned
    `params.markmap.version`, served same-origin with SRI and minified in
    production.

### Pre-registry parameters

A plugin whose behavior was once controlled by other parameters ships a shim
partial, `_partials/scripts/plugins/NAME_docsy-shim.html`, that the loop applies
to the plugin's merged entry before the enable and gate checks: it receives
`(dict "Page" PAGE "Plugin" ENTRY)` and returns the adjusted entry (a map;
anything else fails the build). A non-false scalar entry is skipped, with its
warning, before shims run; a scalar `false` reaches them as `enable: false`, so
a legacy parameter still wins over it. Each retires with its parameter's
deprecation cycle by deleting the file:

- `markmap_docsy-shim.html`: `params.markmap.enable` (deprecated,
  `docsy-markmap-legacy`), when set, turns markmap on and **ungated**, exactly
  the pre-0.18 site-wide behavior (custom render hooks and raw markmap HTML
  never set the flag), whatever the registry entry says; the warning asks for
  its removal.
- `click-to-copy_docsy-shim.html`: `params.disable_click2copy_chroma`
  (deprecated, `docsy-c2c-legacy`) turns the plugin off; `click-to-copy: false`
  is the registry form. `params.prism_syntax_highlighting` also turns it off
  (Prism ships its own copy button), with no deprecation warning: Prism stays
  supported.

## Shape guards

The theme's plugins live under `params.docsy.plugins`, so a site value that is
not a map there, or at `params.docsy`, has already replaced them in Hugo's
config merge. The registry is then empty: **no theme plugin loads** (the build
succeeds; the site ships without the copy button, tab persistence, or MarkMap),
and because shims run per registry entry, the deprecated `params.markmap.enable`
and `params.disable_click2copy_chroma` have no effect either. Both cases warn
with id `docsy-plugins-config`:

- **`params.docsy` is not a map**: the site set a `docsy` parameter of its own,
  which Docsy reserves for theme settings. Rename it. (If the site set no such
  key, it isn't receiving the theme's configuration; the version canaries report
  that case with their own error.)
- **`params.docsy.plugins` is not a map**: `null` from an emptied `plugins:`
  key, a scalar, or the pre-release list shape. Write `plugins: {}` to keep the
  theme's plugins, or a map of entries to layer over them.
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
- Third-party dependencies are pinned, never CDN-`latest`; build-time fetches
  are vendored and served with SRI; and a loader must not pull unpinned
  secondary code (SRI on a loader is worthless if the loader fetches unpinned
  dependencies).
- Remote-capable plugins get a `pageGate` so their code ships only where used.
- A parameter that reaches a fetch URL is validated first:
  `params.markmap.version` accepts `[0-9A-Za-z.+-]` only (and warns when not an
  exact `X.Y.Z`), so a version string can't address another registry path.
- Residual exposure: the vendored markmap autoloader's runtime libraries still
  load from the CDN, pinned by the autoloader itself but without SRI.
- Module trust: every imported Hugo module's `params` merge into the site's, so
  a module can register, re-gate, or turn off plugins through its own config.
  The registry is explicit per configuration source, not per site; a module
  already controls layouts and assets, so this adds no exploitable surface.

<!-- prettier-ignore-start -->
[design]: /project/design/script-loading/
[design-shape]: /project/design/script-loading/#registry-shape
[design-ordering]: /project/design/script-loading/#ordering-decisions
[design-gating]: /project/design/script-loading/#gating-decisions
[plugins.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
<!-- prettier-ignore-end -->
