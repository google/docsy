---
title: "Multi-language Support"
linkTitle: "Multi-language Support"
weight: 7
description: >
  Support multiple languages in your site.
---

The Docsy theme and Hugo are both designed to make it easy to add multiple language versions to your site.

### Navigation

If you configure more than one language in `config.toml`, a language selector will be added to the top-level menu. It will take you to the translated version of the current page, or the home page for the given language.

### i18n bundles

All UI strings (text for buttons etc.) are bundled inside `/i18n` in the theme. Translations (e.g. create a copy of `en.toml` to `jp.toml`) should be done in the theme, so it can be reused by others. Additional strings or overridden values can be added to the project's `/i18n` folder.

{{% alert title="Hugo Tip" %}}
Run `hugo server --i18n-warnings` when doing translation work, as it will give you warnings on what strings are missing.
{{% /alert %}}

### Content

For `content`, each language can have its own language configuration and its own content root, e.g. `content/en`. See the [Hugo Docs](https://gohugo.io/content-management/multilingual) on multi-language support for more information.

