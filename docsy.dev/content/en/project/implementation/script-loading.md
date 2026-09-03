---
title: Script loading
description:
  Registry contract, shape guards, and build details of the plugin loop
---

Code-level notes for [`_partials/scripts/plugins.html`][plugins.html], the loop
behind `params.docsy.plugins`. For the architecture and ordering decisions, see
the [design notes][design].

## Registry contract

`params.docsy.plugins` is a list of plugin entries:

```yaml
params:
  docsy:
    plugins:
      - name: NAME # resolves assets/js/plugins/NAME.js
        enable: true # optional; false skips the entry
        defer: true # optional; adds `defer` to the script tag
        pageGate: FLAG # optional; a .Page.Store flag name
        options: {} # optional; reaches the module as @params
      - NAME # bare-name shorthand for { name: NAME }
```

- Names are coerced to strings (`printf "%v"`): YAML auto-types entries like
  `name: 2048`, and the loop must resolve the same asset path either way.
- Names are restricted to `^[A-Za-z0-9_-]+$`: they address assets and partials
  by path, so anything that could traverse outside the plugin namespaces is
  refused with a warning (`docsy-plugin-name`).
- Registry order is emission order.
- With `pageGate` set, the plugin is emitted only on pages carrying the named
  `.Page.Store` flag.

### Theme-default entries and legacy aliases

The loop appends theme-default entries after the site-declared registry. A
site-declared entry of the same name supersedes its auto-registration but
**inherits the default fields it leaves unset** (`pageGate`, `defer`); an
explicit value, `pageGate: ''` included, always wins:

- `tabpane-persist`, page-gated on `hasTabs` (set by the tabpane shortcode).
- `click-to-copy`, deferred; auto-registered unless
  `params.prism_syntax_highlighting` or `params.disable_click2copy_chroma` is
  set (the pre-plugin gates keep their semantics for the default entry). A
  site-declared entry always emits; combining it with prism draws a warning
  (`docsy-c2c-prism`).
- `markmap`: the registry entry is page-gated on `hasMarkmap` (set by the
  markmap code-block render hook). The legacy `params.markmap.enable` alias
  registers it **ungated** — exact pre-0.18 site-wide behavior, since custom
  render hooks and raw markmap HTML never set the flag — and warns
  (`docsy-markmap-legacy`) for its deprecation cycle.

An entry with `enable: false` is skipped; the string `"false"` counts as `false`
(YAML strings are truthy in Go templates).

## Shape guards

The registry read must not break sites that already carry a `params.docsy`
value:

- A scalar `params.docsy` is left untouched (the read is gated on
  `reflect.IsMap`) and the site registry is treated as empty; theme-default
  entries still emit.
- A non-list `params.docsy.plugins`, falsy scalars included, warns
  (`docsy-plugins-config`) and is ignored.
- An entry with no usable name warns (`docsy-plugin-unnamed`) and is skipped.
- A name registered more than once warns (`warnf`): duplicates still emit, each
  as its own build.
- An enabled registration with no asset at `assets/js/plugins/NAME.js` warns
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
- **Fingerprinting runs in every environment**, not just production: distinct
  builds of one source (per-language sites, duplicate registrations with
  different options) must publish distinct paths, or the last write wins
  site-wide.
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
  fetches unpinned dependencies). Remote-capable plugins get a `pageGate` so
  their code ships only where used. Residual exposure, named: the vendored
  markmap autoloader's runtime libraries still load from the CDN, pinned by the
  autoloader itself but without SRI.

<!-- prettier-ignore-start -->
[design]: /project/design/script-loading/
[design-ordering]: /project/design/script-loading/#plugin-loop
[plugins.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
<!-- prettier-ignore-end -->
