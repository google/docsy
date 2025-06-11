<h1>Open SDG features</h1>

Open SDG platforms are very customisable and there are a variety of optional features which can be easily configured.

## Fully Customisable ##
The home page, goals pages and indicator pages can all be adapted to fit the requirements and design specifications.

Further detail on the customisations available can be found in the [indicator](indicator-configuration.md), [site](configuration.md) and [data](data-configuration.md) configuration options.

## Display data for national indicators as well as global indicators
There are various approaches to publishing national and global indicators:

* National indiators can be displayed next to global indicators but are tagged as 'national' to distinguish them.

* Separate pages for national and global indicators can be created within the same site.

* Separate sites for national and global indicators can be created.

## Add pages
By default, there are four pages which show in the menu bar: Reporting status, About, Guidance and FAQ.

Even though only four pages are linked to in the menu by default, there are other pages provided for use (e.g. Contacts, News) as well as the option to easily create your own pages.

For guidance on how to add more pages to the menu, see the Configuration page [menu](configuration.md#menu) section.

## Site search
Open SDG platforms have a search function, where users can search for terms to quickly help them find information.

By default, the following fields are searched:

- The title of an indicator, goal, or page i.e. words within an indicator title, short goal title, long goal title or page title e.g. FAQ
- The content on the indicator page including any supplementary information you have added
- The content of pages such as the About or FAQ pages
- The ID number of an indicator or goal e.g. 3 or 3.1.2

The search functionality also includes fuzzy search meaning the search function will also find pages that are likely to be relevant to a search term even when the term doesn't correspond exactly to the wanted information. For example, pages with searched fields that contain "smoke" or "smoker" may be returned when a user searches for "smoking". However, the project that is used for fuzzy search has implemented the feature for a set of languages, but not all. Currently, Open SDG languages supported include Arabic, English, French, German, Russian and Spanish (see the [full list of supported languages](https://lunrjs.com/guides/language_support.html)). If a language is not supported, the search feature will still work but it will find fewer results as the search query must be exact. For example, "smoking" would not return "smoke".

It is possible to "boost" one or more fields in the search index, so that more relevant fields will appear in search results. See the [search_index_boost configuration option](https://open-sdg.readthedocs.io/en/latest/configuration/#search_index_boost) for more information and guidance on how to configure this option.

It is also possible to index additional metadata fields, so that more fields are searched e.g. if you wanted the search to return pages where the graph title contains the search term. See the [search_index_extra_fields configuration option](https://open-sdg.readthedocs.io/en/latest/configuration/#search_index_extra_fields) for how to configure this.

## Accessibility High Contrast version
As well as the default contrast version, Open SDG also offers a high contrast version. There is a toggle to allow users to choose between the different contrast levels.

For guidance on how to use the more accessible contrast button, see the Configuration page [contrast_type](configuration.md) section.

## Multilingual
The Open SDG platform can be either monolingual or multilingual. All aspects of the platform are included in the translation system, including page content, indicator metadata, indicator data disaggregations, menus and interface elements, etc.

## Charts

Open SDG supports several types of charts for displaying indicator data:

## Filter by disaggregation
Open SDG platforms allow data to be displayed in a way in which it can be filtered by disaggregation. This allows user to compare different breakdowns for a particular indicator.

This feature is configured with the data files. For guidance on how to provide disaggregation filtering, see the [Data format page](data-format.md).

## Maps
By default, data uploaded to an Open SDG platform is displayed on a chart and a table. You can configure your platform and data to also display data on a map so long as the correct Geo data is present.

For guidance on how set up your site and data in order to be able to display data on a map (as well as on a chart and table), see the [Maps page](maps.md).

## Embedded content
Another way of showing data/information on a indicator page is by embedding content from other websites/applications. Content can also be embedded on a data tab next to the Chart and Table tabs.

Embedded features are configured in the indicator configuration files. See the [Embedded feature settings](indicator-configuration.md#embedded-feature-settings) section for more guidance.

## Reporting status options
By default, the reporting status options dispayed are **Complete**, **In progress** and **Exploring data sources**. However, these options can be changed to meet your needs. For example, options can be removed or another option, **Not applicable**, can be used.

For more detailed information see the [Reporting status](reporting-status.md) page.

## News, posts, and categories
Open SDG includes the ability to post news and updates to your site. In all respects, this functionality matches what is described in [this Jekyll documentation](https://jekyllrb.com/docs/posts/).

The [site starter](https://github.com/open-sdg/open-sdg-site-starter) includes 2 pages to support this functionality:

* a News page, which lists your posts (see an [example](https://open-sdg.github.io/open-sdg-site-starter/news/) and the [code](https://github.com/open-sdg/open-sdg-site-starter/blob/develop/_pages/news.md))
* a Categories page which lists the "categories" used in your posts (see an [example](https://open-sdg.github.io/open-sdg-site-starter/categories/) and the [code](https://github.com/open-sdg/open-sdg-site-starter/blob/develop/_pages/categories.md))

> *Note for multilingual sites*: The News and Categories pages mentioned above, as
> well as any posts you create, will need to be duplicated for each of your
> languages, and translated individually.

## Monitoring traffic
Google Analytics functionality is built in to Open SDG so it's easy to start monitoring traffic to an Open SDG platform. A number of events can be tracked straight of out the box e.g. data downloads and more custom event tracking can easily be added.

For more information about using Google Analytics with an Open SDG platform, see the [Analytics section](analytics.md).
