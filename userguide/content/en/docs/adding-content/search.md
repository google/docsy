---
title: Search
date: 2017-01-05
weight: 3.5
description: >
   Let users search your Docsy site with a choice of configurable search options.
---

Docsy offers multiple options that let your readers search your site content, so you can pick one that suits your needs. You can choose from:

* [Google Custom Search Engine](#configure-search-with-a-google-custom-search-engine) (GCSE), the default option, which uses Google's index of your public site to generate a search results page.
* [Algolia DocSearch](#algolia-docsearch), which uses Algolia's indexing and search mechanism. Search results are displayed as a pop-up. Algolia DocSearch is free for public documentation sites.
* [Local search with Lunr](#local-search-with-lunr), which uses Javascript to index and search your site without the need to connect to external services. This option doesn't require your site to be public.

If you enable any of these search options in your project [configuration file], a search box displays in the right of your top navigation bar. By default a search box also displays at the top of the section menu in the left navigation pane, which you can disable if you prefer, or if you're using a search option that only works with the top search box.

{{% alert title="You can only enable a single search option at a time" color=warning %}}

If you accidentally enable more than one search option in your project
configuration file, you will get a warning at build time, and undetermined
behavior when serving your site.

{{% /alert %}}

## Disabling the sidebar search box

By default, the search box appears in both the top navigation bar and at the top of the sidebar left navigation pane. If you don't want the sidebar search box, set `sidebar_search_disable` to `true` in `hugo.toml`/`hugo.yaml`/`hugo.json`:

{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
sidebar_search_disable = true
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
sidebar_search_disable: true
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
"sidebar_search_disable": true
{{< /tab >}}
{{< /tabpane >}}

## Configure search with a Google Custom Search Engine

By default Docsy uses a [Google Custom Search Engine](https://cse.google.com/cse/all) (GCSE) to search your site. To enable this feature, you'll first need to make sure that you have built and deployed [a production version of your site](/docs/deployment#build-environments-and-indexing), as otherwise your site won't be crawled and indexed.

### Setting up site search

1.  Create a Google Custom Search Engine for your deployed site by clicking **New search engine** on the [Custom Search page](https://cse.google.com/cse/all) and following the instructions. Make a note of the ID for your new search engine.
1.  Add any further configuration you want to your search engine using the **Edit search engine** options. In particular you may want to do the following:

    * Select **Look and feel**. Change from the default **Overlay** layout to **Results only**, as this option means your search results are embedded in your search page rather than appearing in a separate box. Click **Save** to save your changes.
    * Edit the default result link behavior so that search results from your site don't open in a new tab. To do this, select **Search Features** - **Advanced** - **Websearch Settings**. In the **Link Target** field, type "\_parent". Click **Save** to save your changes.

{{% alert title="Tip" %}}
Your site search results should show up within a couple of days. If it takes longer than that, you can manually request that your site is indexed by [submitting a sitemap through the Google Search Console](https://support.google.com/webmasters/answer/183668?hl=en).
{{% /alert %}}

### Adding the search page

Once you have your search engine set up, you can add the feature to your site:

1. Ensure you have a Markdown file in `content/en/search.md` (and one per other languages if needed) to display your search results. It only needs a title and `layout: search`, as in the following example:

    {{< tabpane >}}
{{< tab header="Front matter:" disabled=true />}}
{{< tab header="toml" lang="toml" >}}
+++
title = "Search Results"
layout = "search"
+++
{{< /tab >}}
{{< tab header="yaml" lang="yaml" >}}
---
title: Search Results
layout: search
---
{{< /tab >}}
{{< tab header="json" lang="json" >}}
{
    "title": "Search Results",
    "layout": "search"
}
{{< /tab >}}
    {{< /tabpane >}}

1. Add your Google Custom Search Engine ID to the site params in `hugo.toml`/`hugo.yaml`/`hugo.json`. You can add different values per language if needed.

    {{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
gcs_engine_id = "011737558837375720776:fsdu1nryfng"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
gcs_engine_id: '011737558837375720776:fsdu1nryfng'
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "gcs_engine_id": "011737558837375720776:fsdu1nryfng"
}
{{< /tab >}}
    {{< /tabpane >}}


### Disabling GCSE search

If you don't specify a Google Custom Search Engine ID for your project and haven't enabled any other search options, the search box won't appear in your site. If you're using the default `hugo.toml` from the example site and want to disable search, just comment out or remove the relevant line.

## Algolia DocSearch

As an alternative to GCSE, you can use [Algolia
DocSearch](https://docsearch.algolia.com), which is
free for public documentation sites. Docsy supports **Algolia DocSearch v3**.

{{% alert title="Algolia v2 is deprecated" %}}
Docsy previously supported Algolia DocSearch v2, which is now deprecated. If you
are an existing Algolia DocSearch v2 user and want to use the latest Docsy
version, [follow the migration
instructions](https://docsearch.algolia.com/docs/migrating-from-v2) in the
DocSearch documentation to update your DocSearch code snippet.
{{% /alert %}}

### Sign up for Algolia DocSearch

Complete the form at <https://docsearch.algolia.com/apply>.
Proceed to the next step once you've received Algolia DocSearch
parameters for your project.

### Eager to test DocSearch?

Docsy defaults to the [Algolia test][]-site parameters when
none are provided. To enable search over the Algolia test, define
`params.search.algolia` without any other fields, as outlined next.

### Configure Algolia DocSearch

1.  Ensure that [GCSE search](#disabling-gcse-search) is disabled.
2.  Add your project's Algolia DocSearch parameters to
    `hugo.toml`/`hugo.yaml`/`hugo.json`, for example (using [Algolia test][] values):

    {{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[params.search.algolia]
appId = "R2IYF7ETH7"
apiKey = "599cec31baffa4868cae4e79f180729b"
indexName = "docsearch"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
params:
  search:
    algolia:
      appId: R2IYF7ETH7
      apiKey: 599cec31baffa4868cae4e79f180729b
      indexName: docsearch
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "params": {
    "search": {
      "algolia": {
        "appId": "R2IYF7ETH7",
        "apiKey": "599cec31baffa4868cae4e79f180729b",
        "indexName": "docsearch"
      }
    }
  }
}
{{< /tab >}}
    {{< /tabpane >}}

To learn more about Algolia DocSearch V3, see [Getting
started](https://docsearch.algolia.com/docs/DocSearch-v3).

When you've completed these steps, Algolia search should be enabled on your
site. Search results are displayed as a pop-up, so you don't need to add any
search results page.

### Customizing Algolia templates

You can customize or disable Docsy's default Algolia support by creating the
following template files:

- `layouts/partials/algolia/head.html` used by `head.html` to load Algolia
  DocSearch styles. It also issues a deprecation warning for
  `params.algolia_docsearch`.
- `layouts/partials/algolia/scripts.html` used by `scripts.html` to load and
  configure Algolia DocSearch.

Leave either file empty to disable Docsy's implementation.

## Local search with Lunr

[Lunr](https://lunrjs.com/) is a Javascript-based search option that lets you index your site and make it searchable without the need for external, server-side search services. This is a good option particularly for smaller or non-public sites.

To add Lunr search to your Docsy site:

1. Enable local search in `hugo.toml`/`hugo.yaml`/`hugo.json`.

    {{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
offlineSearch = true
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
offlineSearch: true
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "offlineSearch": true
}
{{< /tab >}}
    {{< /tabpane >}}

2. Remove or comment out any GCSE ID in `hugo.toml`/`hugo.yaml`/`hugo.json` and ensure Algolia DocSearch is set to `false`, as you can only have one type of search enabled. See [Disabling GCSE search](#disabling-gcse-search).

Once you've completed these steps, local search is enabled for your site and results appear in a drop down when you use the search box.

{{% alert title="Tip" %}}
If you're [testing this locally](/docs/deployment/#serving-your-site-locally) using Hugo’s local server functionality, you need to build your `offline-search-index.xxx.json` file first by running `hugo`. If you have the Hugo server running while you build `offline-search-index.xxx.json`, you may need to stop the server and restart it in order to see your search results.
{{% /alert %}}

### Changing the summary length of the local search results

You can customize the summary length by setting `offlineSearchSummaryLength` in `hugo.toml`/`hugo.yaml`/`hugo.json`.

{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
#Enable offline search with Lunr.js
offlineSearch = true
offlineSearchSummaryLength = 200
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
offlineSearch: true
offlineSearchSummaryLength: 200
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "offlineSearch": true,
  "offlineSearchSummaryLength": 200
}
{{< /tab >}}
{{< /tabpane >}}

### Changing the maximum result count of the local search

You can customize the maximum result count by setting `offlineSearchMaxResults` in `hugo.toml`/`hugo.yaml`/`hugo.json`.

{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
offlineSearch = true
offlineSearchMaxResults = 25
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
offlineSearch: true
offlineSearchMaxResults: 25
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "offlineSearch": true,
  "offlineSearchMaxResults": 25
}
{{< /tab >}}
{{< /tabpane >}}

### Changing the width of the local search results popover

The width of the search results popover will automatically widen according to the content.

If you want to limit the width, add the following scss into `assets/scss/_variables_project.scss`.

```scss
.td-offline-search-results {
  max-width: 460px;
}
```

### Excluding pages from local search results

To exclude pages from local search results, add `exclude_search: true` to the the frontmatter of each page:

{{< tabpane >}}
{{< tab header="Front matter:" disabled=true />}}
{{< tab header="toml" lang="toml" >}}
+++
title = "Index"
weight = 10
exclude_search = true
+++
{{< /tab >}}
{{< tab header="yaml" lang="yaml" >}}
---
title: "Index"
weight: 10
exclude_search: true
---
{{< /tab >}}
{{< tab header="json" lang="json" >}}
{
  "title": "Index",
  "weight": 10,
  "exclude_search": true
}
{{< /tab >}}
{{< /tabpane >}}

[algolia test]: https://docsearch.algolia.com/docs/legacy/dropdown/#testing
[configuration file]: https://gohugo.io/getting-started/configuration/#configuration-file
