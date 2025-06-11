<h1>Upgrading to 2.0.0</h1>

This document is intended for developers, to help with the process of upgrading to version 2.0.0 of Open SDG, from 1.8.0 or higher.

**Because this is a major upgrade, please ensure you are upgraded to 1.8.0 or higher, and have read this entire document, before proceeding..**

## Upgrade data repository to sdg-build 2.0.0

In your data repository, update your `requirements.txt` file to:

```
git+https://github.com/open-sdg/sdg-build@2.0.0
```

## Upgrade translations to sdg-translations 2.0.0

In your data repository's config file, update the version of sdg-translations in the "translations" section:

```
translations:
  - class: TranslationInputSdgTranslations
    source: https://github.com/open-sdg/sdg-translations.git
    tag: 2.0.0
```

## Update version of Open SDG to 2.0.0

In your site repository's `_config.yml` file, update the version of Open SDG in `remote_theme`, like so:

```
remote_theme: open-sdg/open-sdg@2.0.0
```

## Update version of jekyll-open-sdg-plugins to 2.0.0

In your site repository's `Gemfile`, update the version of jekyll-open-sdg-plugins like so:

```
gem "jekyll-open-sdg-plugins", "2.0.0"
```

## Changes in 2.0.0

Because 2.0.0 is a major upgrade, there are many changes to be aware of:

### accessible_charts - always on

The `accessible_charts` site configuration has been removed because the platform now automatically includes the accessibility improvements to charts.

### accessible_tabs - always on

The `accessible_tabs` site configuration has been removed because the platform now automatically includes the accessibility improvements to tabs.

### bootstrap_5 - always on

The `bootstrap_5` site configuration that was added in 1.8.0 has been removed because the platform now automatically uses Bootstrap 5.

Notably, any "include" files that were placed into the "bootstrap5" subfolder have been moved out of that folder, and any "layout" files that ended with "-bootstrap5" have been renamed to remove that suffix. See the "Overrides" section below for more details on this.

### chartjs_3 - always on

The `chartjs_3` site configuration that was added in 1.8.0 has been removed because the platform now automatically uses Chart.js 3.

Notably, any "include" files that ended with "-chartjs3" have been renamed to remove that suffix. See the "Overrides" section below for more details on this.

### contrast_type - removed

The `contrast_type` site configuration has been removed and the platform will behave as though the "single" option were chosen, there the contrast toggle button is a single button in the top right corner.

### create_goals - layout removed

The `layout` option in the `create_goals` site configuration has been removed, and the platform will always use the "goal" layout.

### create_pages - automate two pages

Throughout 1.x the `create_pages` site configuration has been expected to contain items for the frontpage and for an "indicators.json" file. These can now be removed from `create_pages` because they will be automatically created. For example, see the difference between the `create_pages` settings from the 1.8.0 site starter and the 2.0.0 site starter (links TBD).

### create_pages - deprecated structure removed

Throughout 1.x the `create_pages` site configuration has supported an older structure, but in 2.0.0 this will no longer work. Your `create_pages` setting will need to fit the structure [detailed in our documentation](https://open-sdg.readthedocs.io/en/latest/configuration/#create_pages).

### data build - indicator property changes

The data build automatically assigns various properties as metadata to each indicator. A few of these properties were being duplicated for backwards compatibility, but those duplicates will now be removed. These will likely not affect you unless you had some custom code (such as data or metadata alterations) which was relying on the older properties. The changes are:

* `indicator_number` instead of `indicator`
* `target_number` instead of `target_id`
* `goal_number` instead of `sdg_goal`

### data build - SDMX inputs, import_translation_keys change

The parameter for SDMX inputs called `import_translation_keys` has been removed, and replaced with `import_codes`.

### data columns/fields - default sorting change

Throughout 1.x the default sorting logic for disaggregation dropdowns and options has been "alphabetical", but now the default will be "default" -- where the sorting is based on position in the data. See the [`datapackage` "sorting" option](https://open-sdg.readthedocs.io/en/latest/data-configuration/#datapackage) for more information. To keep alphabetical sorting, you will need to configure your data build as described in the link above, to 'alphabetical'.

### date_formats - deprecated structure removed

Throughout 1.x the `date_formats` site configuration has supported an older structure, but in 2.0.0 this will no longer work. Your `data_formats` setting will need to fit the structure [detailed in our documentation](https://open-sdg.readthedocs.io/en/latest/configuration/#date_formats).

### favicons - removed

The `favicons` site configuration has been removed and the platform will always use the `favicon.io` approach. This may be a breaking change for any implementation still using older favicon images, and in this case you would need to create new favicon images according to [this favicon tutorial](https://open-sdg.readthedocs.io/en/latest/tutorials/change-logo/#find-a-favicon).

### frontpage-alt layout removed

The `frontpage-alt` layout has been removed. Now there is only a single layout for frontpage, called `frontpage`.

### frontpage_goals_grid - required

The `frontpage_goals_grid` is now required if you would like the goal icons to display on your frontpage. Existing implementations of Open SDG may be using a particular frontpage layout in which the goals grid displays automatically. However, as of 2.0.0, if you would like the goals grid to display, you must use the `frontpage_goals_grid` site configuration. For example:

```
frontpage_goals_grid:
  title: frontpage.heading_short
  description: frontpage.instructions_short
```

You may also want to add the frontpage introduction banner as well, with the following:

```
frontpage_introduction_banner:
  title: frontpage.intro_title
  description: frontpage.intro_body
```

### frontpage_heading - removed

The `frontpage_heading` site configuration has been removed. The new setting used to control this text on the frontpage is [`frontpage_introduction_banner`](https://open-sdg.readthedocs.io/en/latest/configuration/#frontpage_introduction_banner). Any custom text that you have in `frontpage_heading` should be copied to `frontpage_introduction_banner`.

### frontpage_instructions - removed

The `frontpage_instructions` site configuration has been removed. The new setting used to control this text on the frontpage is [`frontpage_goals_grid`](https://open-sdg.readthedocs.io/en/latest/configuration/#frontpage_goals_grid). Any custom text that you have in `frontpage_instructions` should be copied to `frontpage_goals_grid`.

### graph_color_set - default changed to "accessible"

The default color set for graphs is now the `accessible` option. Previously it was a different set called `default`. If you would like to continue using this `default` color set, you can change this setting to `classic`.

### header - removed

The `header` site configuration has been removed, and the platform will always use a consistent header. The "include file" that is used for the header is: `_includes/header.html`

### languages - required

The `languages` setting is now required, in both the [site configuration](https://open-sdg.readthedocs.io/en/latest/configuration/#languages) and [data configuration](https://open-sdg.readthedocs.io/en/latest/data-configuration/#languages) and must have at least one language. These two settings should be identical to each other.

A more technical consequence is that, while previously there was a distinction between a "translated build" and "non-translated build", now all builds will be translated. This will make no difference in practice, but you may notice that your data builds are placed in a subfolder for each language, if you were not already using languages.

### non_global_metadata - removed

The `non_global_metadata` setting has been removed. The only affects platforms that were using something other than "National" for the non-global metadata tab. In order to maintain this feature you will need to use the [`metadata_tabs` site configuration](https://open-sdg.readthedocs.io/en/latest/configuration/#metadata_tabs) to specify the labels used for each tab.

### series_toggle - always on

The `series_toggle` setting has been removed and the platform will behave as if it were always on. This means that the series column in your data will be rendered more like a *unit* and less like a *disaggregation*. Note that you can [control the name of the series column](https://open-sdg.readthedocs.io/en/latest/configuration/#data_fields), and you also have control over your data columns, so there are multiple ways to continue to have your series behave like a disaggregation if you would prefer that.

## Upgrading from 1.8.0 with Bootstrap 5

If you are already using Bootstrap 5 (you have `bootstrap_5` set to `true`), and you have overriden any files in `bootstrap/` subfolders, then you will need to change the location of those overrides. Whereas in 1.8.0, using Bootstrap 5 was optional, in 2.0.0 it is required. So, in 2.0.0 we no longer need to use the `bootstrap5` subfolders. Here is a list of these files, and the new location of them in 2.0.0.

**In short, if you are overriding any of the files on the left, you should move your overrides to the location on the right.**

| 1.8.0 location                                                            | 2.0.0 location                                             |
|---------------------------------------------------------------------------|------------------------------------------------------------|
| _includes/assets/js/**bootstrap5**/accessibility.js                       | _includes/assets/js/accessibility.js                       |
| _includes/assets/js/**bootstrap5**/accessibleTabs.js                      | _includes/assets/js/accessibleTabs.js                      |
| _includes/**bootstrap5**/components/card.html                             | _includes/components/card.html                             |
| _includes/**bootstrap5**/components/contrast-toggle.html                  | _includes/components/contrast-toggle.html                  |
| _includes/**bootstrap5**/components/goal/breadcrumbs.html                 | _includes/components/goal/breadcrumbs.html                 |
| _includes/**bootstrap5**/components/goal/header.html                      | _includes/components/goal/header.html                      |
| _includes/**bootstrap5**/components/indicator/breadcrumbs.html            | _includes/components/indicator/breadcrumbs.html            |
| _includes/**bootstrap5**/components/indicator/data-main.html              | _includes/components/indicator/data-main.html              |
| _includes/**bootstrap5**/components/indicator/data-panes.html             | _includes/components/indicator/data-panes.html             |
| _includes/**bootstrap5**/components/indicator/data-tabs.html              | _includes/components/indicator/data-tabs.html              |
| _includes/**bootstrap5**/components/indicator/header.html                 | _includes/components/indicator/header.html                 |
| _includes/**bootstrap5**/components/indicator/indicator-main.html         | _includes/components/indicator/indicator-main.html         |
| _includes/**bootstrap5**/components/indicator/indicator-progress.html     | _includes/components/indicator/indicator-progress.html     |
| _includes/**bootstrap5**/components/indicator/metadata-panes-default.html | _includes/components/indicator/metadata-panes-default.html |
| _includes/**bootstrap5**/components/indicator/metadata-panes.html         | _includes/components/indicator/metadata-panes.html         |
| _includes/**bootstrap5**/components/indicator/metadata-section.html       | _includes/components/indicator/metadata-section.html       |
| _includes/**bootstrap5**/components/indicator/metadata-tabs-default.html  | _includes/components/indicator/metadata-tabs-default.html  |
| _includes/**bootstrap5**/components/indicator/metadata-tabs.html          | _includes/components/indicator/metadata-tabs.html          |
| _includes/**bootstrap5**/components/indicator/tags.html                   | _includes/components/indicator/tags.html                   |
| _includes/**bootstrap5**/components/language-toggle-dropdown.html         | _includes/components/language-toggle-dropdown.html         |
| _includes/**bootstrap5**/components/language-toggle-links.html            | _includes/components/language-toggle-links.html            |
| _includes/**bootstrap5**/components/language-toggle.html                  | _includes/components/language-toggle.html                  |
| _includes/**bootstrap5**/components/previous-next-links.html              | _includes/components/previous-next-links.html              |
| _includes/**bootstrap5**/components/post/breadcrumbs.html                 | _includes/components/post/breadcrumbs.html                 |
| _includes/**bootstrap5**/footer.html                                      | _includes/footer.html                                      |
| _includes/**bootstrap5**/header.html                                      | _includes/header.html                                      |
| _includes/**bootstrap5**/navigation-link.html                             | _includes/navigation-link.html                             |
| _includes/**bootstrap5**/navigation.html                                  | _includes/navigation.html                                  |
| _includes/**bootstrap5**/search.html                                      | _includes/search.html                                      |

In addition, some layouts have had `-bootstrap5` removed from their name. **If you are overriding any of the following files on the left, you should rename them to the version on the right.**

1.8.0 file | 2.0.0 file
--- | ---
_layouts/goal<strong>-bootstrap5</strong>.html | _layouts/goal.html
_layouts/reportingstatus<strong>-bootstrap5</strong>.html | _layouts/reportingstatus.html
_layouts/indicator<strong>-bootstrap5</strong>.html | _layouts/indicator.html

## Upgrading from 1.8.0 with Chart.js 3

If you are already using Chart.js 3 (you have `chartjs_3` set to `true`), and you have overriden any files with `chartjs3` in the filename, then you will need to rename those overrides. Whereas in 1.8.0, using Chart.js 3 was optional, in 2.0.0 it is required. So, in 2.0.0 we no longer need `chartjs3` versions of files. Here is a list of these files, and the new name for them in 2.0.0.

**In short, if you are overriding any of the files on the left, you should rename them to the version on the right.**

1.8.0 file | 2.0.0 file
--- | ---
_includes/assets/js/chartjs/accessibleCharts<strong>-chartjs3</strong>.js | _includes/assets/js/chartjs/accessibleCharts.js
_includes/assets/js/indicatorView<strong>-chartjs3</strong>.js | _includes/assets/js/indicatorView.js

## Relevant blog posts

Here are blog posts for particular issues related to this upgrade:

* [Details on custom chart types](https://open-sdg.org/blog/2022-04-01-preparing-for-open-sdg-2/#custom-chart-types-in-chartjs-3)
* [Using a 2-column goal-by-target layout for goal pages](https://open-sdg.org/blog/2022-06-08-goal-by-target-override/)
