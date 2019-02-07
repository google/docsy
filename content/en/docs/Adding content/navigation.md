---
title: "Navigation and Search"
date: 2017-01-05
weight: 3
description: >
  This page describes how site navigation works in Docsy, and how to customize it for your site.
---

## Top-level menu

Add a page or section to the top level menu (the one that appears in the top navigation bar for the entire site) by adding it to the site's `main` menu in either `config.toml` or in page front matter (in `_index.md` or `_index.html` for a section, as that's the section landing page). The menu is ordered from left to right by page `weight`:

```yaml
menu:
  main:
    weight: 20
```

So, for example, a section index or page with `weight: 30` would appear after this page in the menu, while one with `weight: 10` would appear before it.

If you want to add a link to an external site to this menu, add it in `config.toml`, specifying the `weight`.

```yaml
[[menu.main]]
    name = "GitHub"
    weight = 50
    url = "https://github.com/google/docsy/"
```

## Section menu

The section menu, as shown in the left side of the `docs` section, is automatically built from the content tree. Like the top-level menu, it is ordered by page or section index `weight` (or by page creation `date` if `weight` is not set), with the page or index's `Title` or `linkTitle` (if different) as its link title in the menu. If a section subfolder has other pages besides its `_index.md` or `_index.html`, those pages will appear as a submenu, again ordered by `weight`. For example, here's the metadata for this page showing its `weight` and `title`:

```yaml
---
title: "Navigation and Search"
linkTitle: "Navigation and Search"
date: 2017-01-05
weight: 3
description: >
  This page describes how site navigation works in Docsy, and how to customize it for your site.
---
```

To hide a page or section from the menu, set `toc_hide: true` in front matter.

By default, the section menu will show the current section fully expanded all the way down. This may make the left nav too long and difficult to scan for bigger sites. Try setting site param `ui.sidebar_menu_compact = true` in `config.toml`.

## Breadcrumb navigation

Breadcrumb navigation is enabled by default. To disable breadcrumb navigation, set site param `ui.breadcrumb_disable = true` in `config.toml`.

## Configure search

By default Docsy uses a [Google Custom Search Engine](https://cse.google.com/cse/all) to search your site. If you want to use this feature, you'll first need to set up the search engine and ensure your site is indexed.

### Setting up site search

1. Deploy your site and ensure that it's built with `HUGO_ENV="production"`, as Google will only crawl and index Docsy sites built with this setting (you probably don't want your not-ready-for-prime-time site to be searchable!). You can specify this variable either as a command line flag to Hugo, or if you're using Netlify, as a Netlify deployment setting along with the Hugo version. It may take a day or so before your site has actual search results available.
2. Create a Google Custom Search Engine for your deployed site by clicking **New Search Engine** on the [Custom Search page](https://cse.google.com/cse/all) and following the instructions. Make a note of the ID for your new search engine.

### Adding the search page

Once you have your search engine, you can add the feature to your site:

1. Add your Google Custom Search Engine ID to the site params in `config.toml`. You can add different values per language if needed.

    ```
    # Google Custom Search Engine ID. Remove or comment out to disable search.
    gcs_engine_id = "011737558837375720776:fsdu1nryfng"
    ```

2. Ensure you have a content file in `content/en/search.md` (and one per other languages if needed). It only needs a title and `layout: search`.

### Disabling search

If you don't specify a Google Custom Search Engine ID for your project, the search box won't appear in your site. If you're using the default `config.toml` from the example site and want to disable search, just comment out or remove the relevant line.

