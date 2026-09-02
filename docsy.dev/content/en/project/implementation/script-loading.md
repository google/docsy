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
        defer: false # optional; adds `defer` to the script tag
        pageGate: FLAG # optional; a .Page.Store flag name
        options: {} # optional; reaches the module as @params
      - NAME # bare-name shorthand for { name: NAME }
```

- A bare (non-map) entry is shorthand for `{ name: NAME }`.
- Names are coerced to strings (`printf "%v"`): YAML auto-types entries like
  `name: 2048`, and the loop must resolve the same asset path either way.
- Registry order is emission order.
- With `pageGate` set, the plugin is emitted only on pages carrying the named
  `.Page.Store` flag.

## Shape guards

The registry read must not break sites that already carry a `params.docsy`
value:

- A scalar `params.docsy` is left untouched (the read is gated on
  `reflect.IsMap`) and the loop emits nothing.
- A non-list `params.docsy.plugins`, falsy scalars included, warns and is
  ignored.
- An entry with no usable name warns and is skipped.
- A registered name with no asset at `assets/js/plugins/NAME.js` warns --
  regardless of `pageGate`, so a typo can't hide behind a gate.

Warnings are issued with `warnidf`, so each is suppressible through Hugo's
`ignoreLogs`:

| Warning ID             | Cause                                         |
| ---------------------- | --------------------------------------------- |
| `docsy-plugins-config` | `params.docsy.plugins` is not a list          |
| `docsy-plugin-unnamed` | a registry entry has no name                  |
| `docsy-plugin-missing` | no asset found at `assets/js/plugins/NAME.js` |

## Build and emission

- The script asset resolves through the union file system: theme, project, or
  module-mounted, with a same-named project file shadowing the theme's.
- Each plugin builds individually with `js.Build`; the entry's `options` travel
  as build `params`, so the module reads them with
  `import * as params from '@params'`. Production builds add `minify`.
- **Fingerprinting runs in every environment**, not just production: distinct
  builds of one source -- per-language sites, duplicate registrations with
  different options -- must publish distinct paths, or the last write wins
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

[design]: /project/design/script-loading/
[design-ordering]: /project/design/script-loading/#plugin-loop
[plugins.html]:
  https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
