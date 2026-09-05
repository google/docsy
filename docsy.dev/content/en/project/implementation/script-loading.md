---
title: Script loading
description: Runtime and security contracts of Docsy's plugin loop
---

[`_partials/scripts/plugins.html`][plugins.html] implements
`params.docsy.plugins`. For the configuration reference and the plugin file
contract, see the [plugins guide][guide]; for the design rationale, the [design
notes][design]; for the tests that pin this contract, the [quality
notes][quality].

## Loop mechanics

The loop reads the theme's schema, `theme/data/docsy/schema/params/docsy.yaml`,
directly (`hugo.Data`), for the entry defaults, the field allowlist, and the
name rule; the guide [includes the same file][guide-config], so shape and
defaults have one home. Hugo lowercases `params` keys but not data keys, so the
loop lowercases the schema's field names before matching.

A normalization pass builds one entry per registered name: defaults, then the
entry's known fields; a scalar `false` becomes `enable: false`. Two coercions
have a semantic reason: a boolean or empty `pageGate` means no gate (`false` is
the natural spelling of "none", and the flag `"false"` would silently never
match), and `weight` is cast to one integer kind (YAML yields `int` or `uint64`
by source, and `sort` compares a mix as strings). Booleans are tested with
Hugo's own idiom, `in (slice false "false" 0)` and its complement, because an
environment override of a theme-declared key arrives as a string: Hugo applies
the environment before the theme's configuration merges, so there is no type to
convert to. Entries are then sorted by weight, then name.

## Pre-registry parameters

A plugin whose behavior a parameter controlled before the registry ships a shim
partial, `_partials/scripts/plugins/`_`NAME`_`_docsy-shim.html` (the suffix the
schema reserves). The loop applies it to the plugin's merged entry before the
enable and gate checks, invoked with `(dict "Page" PAGE "Plugin" ENTRY)`. It
must return the adjusted entry, a map; anything else fails the build.
Parameter-specific behavior lives in the shim, and the shim is deleted when its
parameter's deprecation cycle ends.

## Shape guards

Enforcement is hand-coded in the loop against the schema, and every warning it
emits carries the id `docsy-config`; what each guard ignores or empties is the
guide's [Warnings][guide-warnings] list. Asset lookup precedes gating, so a
registered name with no script warns whatever its gate.

## Build and emission

Each plugin's script is built on its own with `js.Build`, `options` passed as
`params`, minified in production and fingerprinted in **every** environment; its
companion partial runs first and its companion stylesheet goes through the Sass
pipeline ([file contract][guide-files]; [why companions
first][design-ordering]).

## Security constraints

Docsy's own plugins follow the guide's [rules for plugin
authors][guide-security]. In addition:

- Validate a configuration value against an allowlist before it reaches a fetch
  URL (`params.markmap.version`: version characters only).
- Residual exposure: the vendored MarkMap autoloader's runtime libraries still
  load from the CDN, pinned by the autoloader itself but without SRI (disclosed
  in the guide's [MarkMap version][guide-markmap] section).
- Imported Hugo modules are trusted: their `params` merge into the site's, so a
  module can register, re-gate, or turn off plugins, as it already supplies
  layouts and assets.

<!-- prettier-ignore-start -->
[design]: /project/design/script-loading/
[design-ordering]: /project/design/script-loading/#ordering-decisions
[guide]: /docs/content/plugins/
[guide-config]: /docs/content/plugins/#configuration-reference
[guide-files]: /docs/content/plugins/#plugin-files
[guide-markmap]: /docs/content/diagrams-and-formulae/#markmap-version
[guide-security]: /docs/content/plugins/#security
[guide-warnings]: /docs/content/plugins/#warnings
[plugins.html]: https://github.com/google/docsy/blob/main/theme/layouts/_partials/scripts/plugins.html
[quality]: /project/quality/script-loading/
<!-- prettier-ignore-end -->
