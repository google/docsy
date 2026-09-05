---
title: Configuration
description: >-
  How Docsy reads your site configuration: theme defaults and your overrides,
  key spelling, environment variables, and configuration warnings
---

Docsy is configured through your site's Hugo configuration, mostly under
`params`. Each parameter is documented with its feature; this page covers what
applies to all of them. `params.docsy` is the namespace Docsy reserves for its
own settings (today, [plugins][]); parameters that predate it stay where they
are.

## Theme defaults and your overrides

Docsy declares its defaults in its own [`hugo.yaml`][theme-defaults]. Hugo
merges your `params` over them key by key, at any depth, so you set only what
you change; a list replaces the theme's list rather than extending it. Any Hugo
module you import contributes its `params` the same way; your project's values
win. For the mechanics, see Hugo's [configuration merge][hugo-merge].

## Key spelling

- Keys are case-insensitive: Hugo lowercases them, so `pageGate` and `pagegate`
  name the same key. Examples in these docs use camelCase.
- Write booleans unquoted: `enable: false`, not `enable: "false"`. A quoted
  value is a string, and a non-empty string is true to a Hugo template whatever
  it says; only parameters that spell out their accepted strings, such as the
  plugin registry's ([Plugins § Configuration reference][plugins-config]), read
  `"false"` as false.

## Environment variables

Any configuration key can be set from the environment, which suits CI jobs that
build a variant without touching the committed configuration: `HUGO_`, then the
key path in upper case with `_` between levels ([Hugo's environment
configuration][hugo-env]). For example, the [link-checking build][chrome-ci]
runs `HUGO_PARAMS_TD_CHROME=shared hugo`.

- **The character after `HUGO` is the delimiter**, and the only character split
  on. So `HUGO_` cannot name a key that itself contains `_` or `-`; pick another
  delimiter: `HUGOxPARAMSxDOCSYxPLUGINSxCLICK-TO-COPYxENABLE=false`. A name like
  that isn't a POSIX shell identifier, so pass it with `env NAME=value hugo` or
  a CI `env:` block rather than `export`.
- **Values arrive as strings** for any key that only the theme declares, because
  Hugo applies the environment before the theme's configuration merges: `=false`
  lands as `"false"`. Whether that reads as false is the parameter's call, per
  [Key spelling](#key-spelling).

## Configuration warnings

Docsy reports a misconfiguration as a build warning that names its id and the
page to read; the build continues with what conforms. Once you've read one,
Hugo's [`ignoreLogs`][hugo-ignorelogs] silences its class:

```yaml
ignoreLogs: [docsy-config]
```

`docsy-config` is the id of every plugin-registry warning; deprecation warnings
carry their own ids, named in the warning.

<!-- prettier-ignore-start -->
[chrome-ci]: /docs/deployment/chrome/
[hugo-env]: https://gohugo.io/configuration/introduction/#environment-variables
[hugo-ignorelogs]: https://gohugo.io/configuration/all/#ignorelogs
[hugo-merge]: https://gohugo.io/configuration/introduction/#merge-configuration-settings
[plugins]: /docs/content/plugins/
[plugins-config]: /docs/content/plugins/#configuration-reference
[theme-defaults]: https://github.com/google/docsy/blob/main/theme/hugo.yaml
<!-- prettier-ignore-end -->
