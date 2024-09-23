---
title: Navigation and Menus
date: 2017-01-05
weight: 3
description: Customize site navigation for your Docsy site.
---

Docsy provides multiple built-in navigation features for your sites, including site menus, section menus, and page menus. This page shows you how they work and how to configure and customize them to meet your needs.

## Top-level menu

The top level menu (the one that appears in the top navigation bar for the entire site) uses your site's [`main` menu](https://gohugo.io/content-management/menus/). All Hugo sites have a `main` menu array of menu entries, accessible via the `.Site.Menus` site variable and populatable via page front matter or your site's `hugo.toml`/`hugo.yaml`/`hugo.json`.

To add a page or section to this menu, add it to the site's `main` menu in either `hugo.toml`/`hugo.yaml`/`hugo.json` or in the destination page's front matter (in `_index.md` or `_index.html` for a section, as that's the section landing page). For example, here's how we added the Documentation section landing page to the main menu in this site:

{{< tabpane >}}
{{< tab header="Front matter:" disabled=true />}}
{{< tab header="toml" lang="toml" >}}
+++
title = "Welcome to Docsy"
linkTitle = "Documentation"

[menu.main]
weight = 20
pre = "<i class='fa-solid fa-book'></i>"
+++
{{< /tab >}}
{{< tab header="yaml" lang="yaml" >}}
---
title: "Welcome to Docsy"
linkTitle: "Documentation"
menu:
  main:
    weight: 20
    pre: <i class='fa-solid fa-book'></i>
---
{{< /tab >}}
{{< tab header="json" lang="json" >}}
{
  "title": "Welcome to Docsy",
  "linkTitle": "Documentation",
  "menu": {
    "main": {
      "weight": 20,
      "pre": "<i class='fa-solid fa-book'></i>"
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}

The menu is ordered from left to right by page `weight`. So, for example, a section index or page with `weight: 30` would appear after the Documentation section in the menu, while one with `weight: 10` would appear before it.

If you want to add a link to an external site to this menu, add it in `hugo.toml`/`hugo.yaml`/`hugo.json`, specifying the `weight`.

{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[[menu.main]]
    name = "GitHub"
    weight = 50
    url = "https://github.com/google/docsy/"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
menu:
  main:
    - name: GitHub
      weight: 50
      url: 'https://github.com/google/docsy/'
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "menu": {
    "main": [
      {
        "name": "GitHub",
        "weight": 50,
        "url": "https://github.com/google/docsy/"
      }
    ]
  }
}
{{< /tab >}}
{{< /tabpane >}}

### Adding icons to the top-level menu

As described in the [Hugo docs](https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu), you can add icons to the top-level menu by using the pre and/or post parameter for main menu items defined in your site's `hugo.toml`/`hugo.yaml`/`hugo.json` or via page front matter. For example, the following configuration adds the GitHub icon to the GitHub menu item, and a **New!** alert to indicate that this is a new addition to the menu.

{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[[menu.main]]
    name = "GitHub"
    weight = 50
    url = "https://github.com/google/docsy/"
    pre = "<i class='fa-brands fa-github'></i>"
    post = "<span class='alert'>New!</span>"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
menu:
  main:
    - name: GitHub
      weight: 50
      url: 'https://github.com/google/docsy/'
      pre: <i class='fa-brands fa-github'></i>
      post: <span class='alert'>New!</span>
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "menu": {
    "main": [
      {
        "name": "GitHub",
        "weight": 50,
        "url": "https://github.com/google/docsy/",
        "pre": "<i class='fa-brands fa-github'></i>",
        "post": "<span class='alert'>New!</span>"
      }
    ]
  }
}
{{< /tab >}}
{{< /tabpane >}}

You can find a complete list of icons to use in the [FontAwesome documentation](https://fontawesome.com/icons?d=gallery&p=2). Docsy includes the free FontAwesome icons by default.

### Adding a version drop-down

If you add some `[params.versions]` in `hugo.toml`, the Docsy theme adds a
version selector drop down to the top-level menu.

You can find out more in the guide to
[versioning your docs](/docs/adding-content/versioning/).

### Adding a language drop-down

If you configure more than one language in `hugo.toml`, the Docsy theme adds a language selector drop down to the top-level menu. Selecting a language takes the user to the translated version of the current page, or the home page for the given language.

You can find out more in [Multi-language support](/docs/language/).

## Section menu

The section menu, as shown in the left side of the `docs` section, is automatically built from the `content` tree. Like the top-level menu, it is ordered by page or section index `weight` (or by page creation `date` if `weight` is not set), with the page or index's `Title`, or `linkTitle` if different, as its link title in the menu. If a section subfolder has pages other than `_index.md` or `_index.html`, those pages will appear as a submenu, again ordered by `weight`. For example, here's the metadata for this page showing its `weight` and `title`:


{{< tabpane >}}
{{< tab header="Front matter:" disabled=true />}}
{{< tab header="toml" lang="toml" >}}
+++
title = "Navigation and Search"
linkTitle = "Navigation and Search"
date = 2017-01-05T00:00:00.000Z
weight = 3
description = '''
Customize site navigation and search for your Docsy site.
'''
+++
{{< /tab >}}
{{< tab header="yaml" lang="yaml" >}}
---
title: "Navigation and Search"
linkTitle: "Navigation and Search"
date: 2017-01-05
weight: 3
description: >
  Customize site navigation and search for your Docsy site.
---
{{< /tab >}}
{{< tab header="json" lang="json" >}}
{
  "title": "Navigation and Search",
  "linkTitle": "Navigation and Search",
  "date": "2017-01-05T00:00:00.000Z",
  "weight": 3,
  "description": "Customize site navigation and search for your Docsy site.\n"
}
{{< /tab >}}
{{< /tabpane >}}

To hide a page or section from the left navigation menu, set `toc_hide: true` in the front matter.

To hide a page from the section summary on a [docs section landing page]({{< ref "content#docs-section-landing-pages" >}}), set `hide_summary: true` in the front matter. If you want to hide a page from both the TOC menu and the section summary list, you need to set both `toc_hide` and `hide_summary` to `true` in the front matter.

{{< tabpane >}}
{{< tab header="Front matter:" disabled=true />}}
{{< tab header="toml" lang="toml" >}}
+++
title = "My Hidden Page"
weight = 99
toc_hide = true
hide_summary = true
description = '''
Page hidden from both the TOC menu and the section summary list.
'''
+++
{{< /tab >}}
{{< tab header="yaml" lang="yaml" >}}
---
title: "My Hidden Page"
weight: 99
toc_hide: true
hide_summary: true
description: >
  Page hidden from both the TOC menu and the section summary list.
---
{{< /tab >}}
{{< tab header="json" lang="json" >}}
{
  "title": "My Hidden Page",
  "weight": 99,
  "toc_hide": true,
  "hide_summary": true,
  "description": "Page hidden from both the TOC menu and the section summary list.\n"
}
{{< /tab >}}
{{< /tabpane >}}

### Section menu options

By default, the section menu shows the current section fully expanded all the way down. This may make the left nav too long and difficult to scan for bigger sites. Try setting site parameter `ui.sidebar_menu_compact = true` in `hugo.toml`.

With the compact menu (`.ui.sidebar_menu_compact = true`), only the current page's ancestors, siblings and direct descendants are shown. You can use the optional parameter `.ui.ul_show` to set a desired menu depth to always be visible. For example, with `.ui.ul_show = 1` the first menu level is always displayed.

The number of sidebar entries shown per section can be configured using the `.ui.sidebar_menu_truncate` parameter (default: 100).

As well as the completely expanded and compact menu options, you can also create a foldable menu by setting the site parameter `ui.sidebar_menu_foldable = true` in `hugo.toml`. The foldable menu lets users expand and collapse menu sections by toggling arrow icons beside the section parents in the menu.

On large sites (default: > 2000 pages) the section menu is not generated for each page, but cached for the whole section. The HTML classes for marking the active menu item (and menu path) are then set using JS. You can adjust the limit for activating the cached section menu with the optional parameter `.ui.sidebar_cache_limit`.

The tabbed pane below lists the menu section options you can define in your project [configuration file].

{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}{{< tab header="hugo.toml" lang="toml" >}}
[params.ui]
sidebar_menu_compact = true
ul_show = 1
sidebar_menu_foldable = true
sidebar_cache_limit = 1000
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
params:
  ui:
    sidebar_menu_compact: true
    ul_show: 1
    sidebar_menu_foldable: true
    sidebar_cache_limit: 1000
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "params": {
    "ui": {
      "sidebar_menu_compact": true,
      "ul_show": 1,
      "sidebar_menu_foldable": true,
      "sidebar_cache_limit": 1000,
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}


### Add icons to the section menu

You can add icons to the section menu in the sidebar by setting the `icon` parameter in the page front matter (e.g. `icon: fa-solid fa-screwdriver-wrench`).

You can find a complete list of icons to use in the [FontAwesome documentation](https://fontawesome.com/icons?d=gallery&p=2). Docsy includes the free FontAwesome icons by default.

Out of the box, if you want to use icons, you should define icons for all items on the same menu level in order to ensure an appropriate look. If the icons are used in a different way, individual CSS adjustments are likely necessary.

### Add manual links to the section menu

By default the section menu is entirely generated from your section's pages. If you want to add a manual link to this menu, such as a link to an external site or a page in a different section of your site, you can do this by creating a *placeholder page file* in the doc hierarchy with the appropriate weight and some special parameters in its metadata (frontmatter) to specify the link details.

To create a placeholder page, create a page file as usual in the directory where you want the link to show up in the menu, and add a `manualLink` parameter to its metadata. If a page has `manualLink` in its metadata, Docsy generates a link for it in the section menu for this page and in the section index (the list of the child pages of a section on a landing page - see [description in the Docsy docs](/docs/adding-content/content/#docs-section-landing-pages)), but the link destination is replaced by the value of `manualLink`. The link text is the `title` (or `linkTitle` if set) of your placeholder page. You can optionally also set the `title` attribute of the link with the parameter `manualLinkTitle` and a link target with `manualLinkTarget` - for example if you want an external link to open in a new tab you can set the link target to `_blank`. Docsy automatically adds `rel=noopener` to links that open new tabs as a security best practice.

 You can also use `manualLink` to add an additional cross reference to another existing page of your site. For internal links you can choose to use the parameter `manualLinkRelref` instead of `manualLink` to use the built-in Hugo function [relref](https://gohugo.io/functions/relref/ "External link to official Hugo Docs"). If `relref` can't find a unique page in your site, Hugo throws a error message.

 {{% alert title="Note" %}}
 Although all generated menu and landing page links based on your placeholder file are set according to the parameters `manualLink` or `manualLinkRelref`, Hugo still generates a regular HTML site page for the file, albeit one with no generated links to it. To avoid confusion if users accidentally land on a generated placeholder page, we recommend specifying the URL for the external link in the normal content and / or page description of the page.
 {{% /alert %}}

## Breadcrumb navigation

Breadcrumb navigation links appear at the top of each page by default. To disable breadcrumb navigation, set site param `ui.breadcrumb_disable = true` in `hugo.toml`.

Breadcrumb navigation links are also shown for each item on the taxonomy results page (i.e. when you click one of the taxonomy labels, e.g. Tags/Categories). These breadcrumbs can be disabled in `hugo.toml` by setting site param `ui.taxonomy_breadcrumb_disable = true`.

The tabbed pane below lists the breadcrumb navigation options you can define in your project [configuration file].

{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}{{< tab header="hugo.toml" lang="toml" >}}
[params.ui]
breadcrumb_disable = true
taxonomy_breadcrumb_disable = true
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
params:
  ui:
    breadcrumb_disable: true
    taxonomy_breadcrumb_disable: true
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "params": {
    "ui": {
      "breadcrumb_disable": true,
      "taxonomy_breadcrumb_disable": true
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}

## Heading self links

Docsy supports build-time generation of heading self links using Hugo's
`render-heading.html` [hook].

To enable this feature in
your project, define `layouts/_default/_markup/render-heading.html` as:

```go-html-template
{{ template "_default/_markup/td-render-heading.html" . }}
```

The heading self-link anchor class is `.td-heading-self-link`, which you can
customize for your project. By default, the heading self-link style has these defaults:

- The self-link symbol is `#`.
- The symbol is always visible on mobile and touch devices, otherwise it is only
  visible on hover or focus.

Your projects can also reuse (in your own custom heading render hook) or
override the heading self-link template
`_default/_markup/_td-heading-self-link.html`, which is defined in
[layouts/_default/_markup/td-render-heading.html].

[configuration file]:
  https://gohugo.io/getting-started/configuration/#configuration-file
[layouts/_default/_markup/td-render-heading.html]:
  https://github.com/google/docsy/tree/main/layouts/_default/_markup/td-render-heading.html
[hook]: https://gohugo.io/templates/render-hooks/
