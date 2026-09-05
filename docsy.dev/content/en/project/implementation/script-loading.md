---
title: Script loading
description: Runtime and security contracts of Docsy's plugin loop
---

[`_partials/scripts/plugins.html`][plugins.html] implements
`params.docsy.plugins`. For the design rationale, see the [design
notes][design]; for site configuration and diagnostics, the [plugins
guide][guide]; for the tests that pin this contract, the [quality
notes][quality].

## Registry contract

`params.docsy` is the configuration namespace Docsy reserves for theme settings;
`params.docsy.plugins` is its map of plugin entries keyed by name ([why a
map][design-shape]). The loop reads the theme's schema directly, for defaults,
the field allowlist, and the name rule:

{{< readfile file="/data/docsy/schema/params/docsy.yaml" code="true" lang="yaml" >}}

The theme declares its own plugins in [`theme/hugo.yaml`][theme-defaults]. Under
Hugo's default deep merge for `params`, a site's entries layer over them by name
and field, so the loop knows no plugin names.

Hugo lowercases configuration keys. Plugin names, entry fields, and option keys
arrive in lowercase: config examples keep Hugo's camelCase, templates and plugin
scripts read `.Plugin.pagegate` and `params.apikey`.

Booleans are read with Hugo's own idiom, `in (slice false "false" 0)` and its
complement: `false`, `"false"`, and `0` are false; `true`, `"true"`, and `1` are
true; any other spelling keeps the default. The string forms exist for
environment overrides, which reach registry entries but arrive as strings (Hugo
applies them before the theme's configuration merges, so a theme-declared key
has no type to convert to). Because `HUGO_` cannot spell a hyphen, an override
names its delimiter with the character after `HUGO`:
`HUGOxPARAMSxDOCSYxPLUGINSxCLICK-TO-COPYxENABLE=false`. Two further coercions
have a semantic reason: a boolean or empty `pageGate` means no gate (`false` is
the natural spelling of "none", and the flag `"false"` would silently never
match), and `weight` is cast to one integer kind (YAML yields `int` or `uint64`
by source, and `sort` compares a mix as strings).

## Pre-registry parameters

A plugin whose behavior a parameter controlled before the registry ships a shim
partial, `_partials/scripts/plugins/`_`NAME`_`_docsy-shim.html` (the suffix the
schema reserves). The loop applies it to the plugin's merged entry before the
enable and gate checks, invoked with `(dict "Page" PAGE "Plugin" ENTRY)`. It
must return the adjusted entry, a map; anything else fails the build.
Parameter-specific behavior lives in the shim, and the shim is deleted when its
parameter's deprecation cycle ends.

## Shape guards

Every configuration warning the loop emits carries the id `docsy-config`, so a
site silences the class with one `ignoreLogs` entry. The build continues with
what conforms: an unknown field, a non-map `options`, a name outside the rule,
or a non-false scalar entry is ignored. A non-map `params.docsy` or
`params.docsy.plugins` leaves the registry empty (`plugins: {}` keeps the
theme's entries; a valueless `plugins:` is null and drops them), so no plugin,
and so no shim, runs.

Asset lookup precedes gating: an enabled entry with no
`assets/js/plugins/`_`NAME`_`.js` warns (`docsy-plugin-missing`) whatever its
gate.

## Build and emission

A plugin is one to three files, resolved through Hugo's union file system (a
project file shadows the theme's):

| File                                        | Contract                                                                                        |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `assets/js/plugins/`_`NAME`_`.js`           | Required. Built on its own with `js.Build`; `options` reach it as `@params`.                    |
| `_partials/scripts/plugins/`_`NAME`_`.html` | Optional companion partial (vendored libraries, markup, config providers); invoked like a shim. |
| `assets/scss/plugins/`_`NAME`_`.scss`       | Optional companion stylesheet, through the Sass pipeline.                                       |

Companions emit before the script ([why][design-ordering]). Script and
stylesheet are minified in production and fingerprinted in **every**
environment, so both tags always carry `integrity` and
`crossorigin="anonymous"`.

## Security constraints

- Never pipe `Plugin.options` through `safeHTML`, `safeJS`, or `safeURL` in a
  companion partial: options are site-configured strings, and Hugo's contextual
  autoescaping is the defense.
- `options`, like anything reaching a module as `@params`, ship world-readable
  in the built JavaScript: never route secrets through them.
- Validate a configuration value against an allowlist before it reaches a fetch
  URL (`params.markmap.version`: version characters only).
- Pin third-party dependencies, never `latest`; vendor build-time fetches and
  serve them with SRI; and use no loader that pulls unpinned secondary code (SRI
  on a loader is worthless if the loader fetches unpinned dependencies).
- Remote-capable plugins get a `pageGate`, so their code ships only where used.
- Residual exposure: the vendored MarkMap autoloader's runtime libraries still
  load from the CDN, pinned by the autoloader itself but without SRI.
- Imported Hugo modules are trusted: their `params` merge into the site's, so a
  module can register, re-gate, or turn off plugins, as it already supplies
  layouts and assets.

<!-- prettier-ignore-start -->
[design]: /project/design/script-loading/
[design-ordering]: /project/design/script-loading/#ordering-decisions
[design-shape]: /project/design/script-loading/#registry-shape
[guide]: /docs/content/plugins/
[plugins.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
[quality]: /project/quality/script-loading/
[theme-defaults]: https://github.com/google/docsy/blob/main/theme/hugo.yaml
<!-- prettier-ignore-end -->
