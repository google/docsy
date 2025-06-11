<h1>Upgrading to 2.1.0</h1>

This document is intended for developers, to help with the process of upgrading to version 2.1.0 of Open SDG, from 2.0.0 or higher.

## Upgrade data repository to sdg-build 2.1.0

In your data repository, update your `requirements.txt` file to:

```
git+https://github.com/open-sdg/sdg-build@2.1.0
```

## Upgrade translations to sdg-translations 2.1.0

In your data repository's config file, update the version of sdg-translations in the "translations" section:

```
translations:
  - class: TranslationInputSdgTranslations
    source: https://github.com/open-sdg/sdg-translations.git
    tag: 2.1.0
```

## Update version of Open SDG to 2.1.0

In your site repository's `_config.yml` file, update the version of Open SDG in `remote_theme`, like so:

```
remote_theme: open-sdg/open-sdg@2.1.0
```

## Update version of jekyll-open-sdg-plugins to 2.1.0

In your site repository's `Gemfile`, update the version of jekyll-open-sdg-plugins like so:

```
gem "jekyll-open-sdg-plugins", "2.1.0"
```

## Updating overridden files

If you are overriding certain files, you may need to adjust your version in order to benefit from the latest features, bugfixes, and design changes. If you are unsure, check the `_includes` and `_layouts` folders in your site repository. If they contain any of the following files, you may want to incorporate the latest changes into your overrides. The links below will show you the exact changes for each file.

* [_includes/assets/js/accessibility.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-c4b47d3a7ddaad00a7ebccf86e2c8c981b91515687c19abb7efdc6069bab0ccf)
* [_includes/assets/js/chartjs/accessibleCharts.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-2947e02401f2edf7c289455a2552f5132ddcbf5733b817062d363fdb89f89227)
* [_includes/assets/js/indicatorModel.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-899e3bbfb5eeef11ac59cd311c1cf8fa874cb773986b5982832f44ff68f04a8d)
* [_includes/assets/js/indicatorView.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-acba7023c8817a67d9425348551a51700b2bdb142fad73af0bfb272bbdd08a01)
* [_includes/assets/js/mapView.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-4fc5a820f12b634018e2047fcc6eb1d47d5d8c8a8bb7b0f1d2c6a16ebae5a3af)
* [_includes/assets/js/model/dataHelpers.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-40499d815f640efd89f9d2f3d1a27d4bef263c2f9d54e5116ca880d0da808e6a)
* [_includes/assets/js/plugins/jquery.sdgMap.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-090de3bceb9b3c5022e042a3d45e82f32e68f7e0c63ca881da87eb4bfec071a3)
* [_includes/assets/js/plugins/leaflet.disaggregationControls.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-9204baadb9a4b331bcb7bd572063083f64b02abcc94dd9b7c5a6608a738f27a2)
* [_includes/assets/js/plugins/leaflet.searchAccessible.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-664332b96a442d745e9274cb8349b74900de8fecd9bd9e5da88dd26a6e095fb6)
* [_includes/assets/js/plugins/leaflet.selectionLegend.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-5b45cc89aa89199087e159a10272920587714223033a722798f925e6296d18f4)
* [_includes/assets/js/plugins/leaflet.yearSlider.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-e0faf161480b7d08815e0d8c56ae84772d7dac7faa5d6c156d01137a36f88e2a)
* [_includes/assets/js/view/chartHelpers.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-57ca50c7583a665d330ac4d254cffa269768af5b0a14612501fa2c1bae4ddcd2)
* [_includes/assets/js/view/chartTypeBase.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-e3635ad86f7d677a190cb5cedee17194dd3c3602e9cace3f6df122997575dda4)
* [_includes/assets/js/view/dataHelpers.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-9f387ea8e9baf11ade17fb7ac6121eb36698c6bc77cb2832dd696085867eb9be)
* [_includes/assets/js/view/seriesHelpers.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-5e61772ea34953912ec178644f6e5982baf4a262c6a2026bfd897cc45c70b196)
* [_includes/assets/js/view/utils.js](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-7096028ef491827ec58c1f4dbdeb630aa47553de7f1418f6c478198ad4d475e5)
* [_includes/components/charts/chart.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-ed38e7f6a92c1d9f02d5a18618afd07986c88c8d7718cfe9605c7588b39ca3ca)
* [_includes/components/download-all-data.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-4f295183567e9e81c009bb8c7f9fdfd558818c87cb900241e873545a25e330ff)
* [_includes/components/goal-tiles.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-b917910c6504fadf58981aa0458062bec07909e945d3498555ce6b9e9553aa2e)
* [_includes/components/goal/goal-content.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-c59c74d5a960ffb79a02e183d20d1d05209031ca4e571bede2c45047a24e9c8a)
* [_includes/components/header/logo.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-8382db83d6ec3733bdd628a801ae4218e8b5f544a0ecf3dce2c083aec70b260a)
* [_includes/components/indicator/breadcrumbs.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-d5d885f0a09a3b05aea78a7556845e27b8f4c13fca8d065bf696b9e5ad10bbd9)
* [_includes/components/indicator/embedded-feature.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-e0553faa845b14f0678709398d3040e41b9d51e3b3f08d5af38f8f48db1615fe)
* [_includes/components/indicator/header.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-0e21c05fe296898b14f4254b21ad6f71d5a44b90141c230d3de366a176da2273)
* [_includes/components/indicator/metadata-panes.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-2fbe43c361b480b71a69db9b4dc9fca7bc1ffc401638db6ae7d2c979f56dda3c)
* [_includes/components/indicator/metadata.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-cc11e6eba01919f63fddb176ed9baefe4741bd0777924fd167c93627e3d59a9a)
* [_includes/components/reportingstatus/reporting-status-by-goal.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-b16d540c8f7a1606591d39a587008fa8dbe96036a4a5a70d79df96d8ff57ea2d)
* [_includes/header.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-c0311c1df17d5d714db46ca1401ad374a35de861a461d211c6c947f1b2194034)
* [_includes/javascript-variables.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-e96a4a24ce2e1564e7270837c5a918377e2f6b428937ea0b02517fdd9239473e)
* [_includes/scripts.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-d2aabec5480c331c0119175a7e808edf76bfb7e63bf903691b6c5f4f84eb4476)
* [_includes/search.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-c3188fec879251e12fd5aadb9f4a907c34e50c902724735a3f0aedf37582ddea)
* [_layouts/config-builder.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-cfd16c1ebd077a07473ba538af4d790d819243bdf0d212cbd078b5fb602ff78b)
* [_layouts/data-editor.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-c65f37aeacf840ed2df9fa6171af20edfe03504795b26cd1c92c170c4d7bf326)
* [_layouts/goal.html](https://github.com/open-sdg/open-sdg/compare/2.0.0-dev...2.1.0-dev#diff-29b883eaf3e68ad8ccd26059a23a975223f16095706fb071bfe1dfa886157085)

Note that we strive to avoid any breaking changes, so this process of updating overridden files is optional. However we strongly recommend keeping your overridden files as current as possible.

## New features for the indicator metadata section

This release introduces some optional features that you may be interested in adding to your platform. The following are all related to the metadata section on indicator pages.

### empty_metadata_placeholder

Normally when an indicator has no content for a metadata field, Open SDG will display the field label without any content. One way to avoid this is the [`hide_empty_metadata`](https://open-sdg.readthedocs.io/en/latest/configuration/#hide_empty_metadata) site configuration, which can be used to hide empty fields altogether.

As of version 2.1.0, if you are not using `hide_empty_metadata`, fields without content will display a placeholder instead which is controlled by the new site configuration `empty_metadata_placeholder` (by default it is "Not available for this indicator"). Here is the [documentation for `empty_metadata_placeholder](https://github.com/open-sdg/open-sdg/blob/2.1.0-dev/docs/configuration.md#empty_metadata_placeholder).

### empty_metadata_placeholder_sources

This is similar to `empty_metadata_placeholder` above, but it is used instead in the "Sources" metadata tab.

### sources

Open SDG has always had a mechanism for displaying multiple "sources" by using metadata fields like `source_active_1`, `source_active_2`, etc. While this method is still supported, there is an alternative solution now, in the [`sources` indicator configuration](https://github.com/open-sdg/open-sdg/blob/2.1.0-dev/docs/indicator-configuration.md#sources) which you may prefer to use instead. One benefit of this approach is that it has a dedicated field for an image, which will display at the top of each source.

### related_indicators

Open SDG now has functionality for displaying a "Related indicators" tab in the metadata section on indicator pages. Here is the [documentation on how to use the `related_indicators` indicator configuration](https://github.com/open-sdg/open-sdg/blob/2.1.0-dev/docs/indicator-configuration.md#related_indicators).

### publications

Similarly, Open SDG now has functionality for displaying a "Publications" tab in the metadata section on indicator pages. Here is the [documentation on how to use the `publications` indicator configuration](https://github.com/open-sdg/open-sdg/blob/2.1.0-dev/docs/indicator-configuration.md#publications).

### Subheading for goal pages

If you would like to add the same subheading (such as "About this goal") on each goal page, you can use the new `goal_content_heading` property in the `create_goals` setting. For example, if you would like to have "About this goal" appear as a subheading on each goal page, you use can something like this for your `create_goals` site configuration:

```
create_goals:
  goal_content_heading: About this goal
  previous_next_links: true
  goals:
    - goal: 1
      content: My content for goal 1
    - goal: 2
      content: My content for goal 2
```
