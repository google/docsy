---
title: Plugins
description:
  Configure Docsy's JavaScript features and add your own scripts without
  overriding layout templates.
---

Each optional Docsy JavaScript feature is a **plugin**: an entry under
`params.docsy.plugins` in your site configuration.

## Configure Docsy's plugins

| Plugin            | What it does                               | Default                  | Loads on                                                                  | Turn it off                                                   | Docs                           |
| ----------------- | ------------------------------------------ | ------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------ |
| `click-to-copy`   | Adds a copy button to code blocks          | On; Prism brings its own | Every page                                                                | `click-to-copy: false`                                        | [Copy to clipboard][]          |
| `tabpane-persist` | Remembers the selected tab across pages    | On                       | Every page ([why not only tabbed pages](#page-flags-in-included-content)) | `tabpane-persist: false`; for one tabpane, `persist=disabled` | [`tabpane`][]                  |
| `markmap`         | Renders `markmap` code blocks as mind maps | Off                      | Pages with a `markmap` code block                                         | `markmap: false`                                              | [Activating MarkMap support][] |

To turn a plugin off, set its entry to `false`:

<!-- markdownlint-disable no-shortcut-ref-link -->
<!-- prettier-ignore-start -->
{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[params.docsy.plugins]
click-to-copy = false
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
params:
  docsy:
    plugins:
      click-to-copy: false
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "params": {
    "docsy": {
      "plugins": { "click-to-copy": false }
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}
<!-- prettier-ignore-end -->
<!-- markdownlint-enable no-shortcut-ref-link -->

## Add a custom script

For a script that should load at the end of every page, register it as a plugin;
for markup in `<head>`, inline snippets, or third-party tags, use the [head and
body hooks][] instead.

1. Save the script as `assets/js/plugins/`_`NAME`_`.js`, with _`NAME`_ in
   lowercase.
2. Register it:

   <!-- markdownlint-disable no-shortcut-ref-link -->
   <!-- prettier-ignore-start -->

   {{< tabpane >}} {{< tab header="Configuration file:" disabled=true />}}
   {{< tab header="hugo.toml" lang="toml" >}} [params.docsy.plugins] NAME = {}
   {{< /tab >}} {{< tab header="hugo.yaml" lang="yaml" >}} params: docsy:
   plugins: NAME: {} {{< /tab >}} {{< tab header="hugo.json" lang="json" >}} {
   "params": { "docsy": { "plugins": { "NAME": {} } } } } {{< /tab >}}
   {{< /tabpane >}}
   <!-- prettier-ignore-end -->
   <!-- markdownlint-enable no-shortcut-ref-link -->

Docsy builds, fingerprints, and loads the script with [subresource
integrity][SRI]. For the entry fields (`options`, `defer`, `pageGate`, `weight`)
and the full contract, see the [registry contract][].

## Page flags in included content

Some plugins load only on pages that need them: a `pageGate` names a page flag,
and Docsy's `markmap` render hook sets one whenever a page has a `markmap` code
block. A flag counts only when it lands on the page that ships.

- A **render hook** runs in the context of the page being rendered, so a
  `markmap` block in content pulled in through [`.RenderShortcodes`][] flags the
  page that includes it.
- A **shortcode** runs in the context of the page whose file contains it, so a
  `tabpane` in included content flags the _included_ page, and the including
  page never sees the flag.
- Content pulled in through `.Content` flags the included page in both cases.

That is why Docsy ships `tabpane-persist` ungated. Gate it yourself
(`tabpane-persist: { pageGate: hasTabs }`) only if your tabpanes are never
included. For MarkMap's authoring paths and how to clear its gate, see
[Activating MarkMap support][].

<!-- prettier-ignore-start -->
[`.RenderShortcodes`]: https://gohugo.io/methods/page/rendershortcodes/
[`tabpane`]: /docs/content/shortcodes/#tabpane
[Activating MarkMap support]: /docs/content/diagrams-and-formulae/#activating-markmap-support
[Copy to clipboard]: /docs/content/lookandfeel/#copy-to-clipboard
[head and body hooks]: /docs/content/lookandfeel/#add-code-to-head-or-before-body-end
[registry contract]: /project/implementation/script-loading/
[SRI]: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
<!-- prettier-ignore-end -->
