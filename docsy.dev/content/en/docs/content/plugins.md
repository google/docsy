---
title: Plugins
description:
  Load your own scripts, and turn Docsy's off, through one registry entry each,
  without overriding a template.
---

A **plugin** is a script that Docsy builds, fingerprints, and loads for you:
drop the file at `assets/js/plugins/`_`NAME`_`.js` and declare it in your site
config, where _`NAME`_ is your plugin's name in lowercase (Hugo lowercases
configuration keys, so the file name must be lowercase too):

```yaml
params:
  docsy:
    plugins:
      NAME: {}
```

The script loads at the end of every page with [subresource integrity][SRI]. An
entry can also pass `options` (which reach the module as [build
parameters][js-params]), set `defer`, or gate loading on a page flag; for the
full registry contract, see the [implementation notes][plugins-impl].

## Docsy's plugins

Docsy's own plugins are registered for you: `click-to-copy` (the [copy button][]
on code blocks) and `tabpane-persist` ([tab selection persistence][tabpane]) are
on, and `markmap` is off until you [enable it][markmap]. Set a plugin to `false`
to turn it off:

```yaml
params:
  docsy:
    plugins:
      click-to-copy: false
```

## Page flags and included content

A page flag counts only when the page's own render sets it. If your site's
templates or shortcodes pull content in through [`.RenderShortcodes`][], a
render hook inside that content still flags the page that ships, but a shortcode
flags the _included_ page; content pulled in through `.Content` flags the
included page either way. That is why Docsy ships tab persistence ungated; gate
it yourself (`tabpane-persist: { pageGate: hasTabs }`) only if your tabpanes are
never included.

<!-- prettier-ignore-start -->
[`.RenderShortcodes`]: https://gohugo.io/methods/page/rendershortcodes/
[copy button]: /docs/content/lookandfeel/#copy-to-clipboard
[js-params]: https://gohugo.io/functions/js/build/#params
[markmap]: /docs/content/diagrams-and-formulae/#activating-markmap-support
[plugins-impl]: /project/implementation/script-loading/
[SRI]: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
[tabpane]: /docs/content/shortcodes/#tabpane
<!-- prettier-ignore-end -->
