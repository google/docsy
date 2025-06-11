<h1>Site configuration</h1>

In addition to the [usual Jekyll configuration options](https://jekyllrb.com/docs/configuration/), there are many options specific to Open SDG. These are detailed below, along with usage examples. **All of these settings go in the `_data/site_config.yml` file.** Alternatively, you can make changes using the site configuration forms. See more [details on the site configuration forms](site-configuration-forms.md).

This document covers the "site configuration", which is distinct from "data configuration". See more [details on data configuration](data-configuration.md).

_Note about "strings": Many of the settings detailed here contain human-readable "strings" (ie, text). In most cases, they can be replaced by [translation keys](translation.md) for better multilingual support. For example, "Indicator" could be replaced with "general.indicator"._

> To see many of these options in action, the [site starter repository](https://github.com/open-sdg/open-sdg-site-starter) contains an [example config file](https://github.com/open-sdg/open-sdg-site-starter/blob/develop/_config.yml).

### analytics

_Optional_: This setting can be used to facilitate the installation of Google Analytics. You can do this in multiple ways:

* ua (analytics.js)
* gtag (gtag.js)
* gtm (Google Tag Manager)

Google provides a number that would be used in each of these cases. The numbers typically have the following prefixes:

* UA-xxxxxxxx
* G-xxxxxxxx
* GTM-xxxxxxxx

To use this setting, put the appropriate number next to the corresponding item. For example:

```nohighlight
analytics:
  ua: UA-xxxxxxxx
  gtag: G-xxxxxxxx
  gtm: GTM-xxxxxxxx
```

Notes:

1. The don't need to use all of them. You can use 1, 2, or none at all.
1. The `ua` option was previously called `ga_prod` which also still works.
1. As an alternative to using these settings, you can alternatively override the `_includes/head-custom.html` and/or `_includes/scripts-custom.html` files in order to insert any Google Analytics snippets you might need.
1. The `ua` option also captures certain custom events, such as the clicking of the contrast toggle button.
1. If you are using the `cookie_consent_form` setting, these analytics will be automatically included in the cookie consent form. This allows the user to decline the setting of the following cookies: "_gat", "_gid", and "ga". If using the `gtag` approach, then some additional cookies may be set (see the [official documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage#gtagjs_google_analytics_4_-_cookie_usage)). You can specify these with an `extra_cookies` option, for example:

```
analytics:
  gtag: G-xxxxxxxx
  extra_cookies:
    - _ga_123456789
    - _gac_gb_123456789
```

### breadcrumbs

_Optional_: This setting can contain breadcrumb settings for each of the supported collection types: `goal`, `indicator`, and `post`. Each should have a list of label/path objects. For example, the following configuration would add the breadcumbs `Home > Updates` at the top of each post:

```nohighlight
breadcrumbs:
  post:
    - label: Home
      path: /
    - label: Updates
      path: news/
```

Or with the addition of translation keys for multilingual sites:

```nohighlight
breadcrumbs:
  post:
    - label: general.home
      path: /
    - label: menu.updates
      path: news/
```

Here is a full exmaple including `goal` and `indicator` as well:

```nohighlight
breadcrumbs:
  post:
    - label: general.home
      path: /
    - label: menu.updates
      path: news/
  goal:
    - label: general.home
      path: /
    - label: general.goals
      path: goals/
  indicator:
    - label: general.home
      path: /
    - label: general.goals
      path: goals/
```

Note that `indicator` will automatically add a final item, which is a link to the goal that the indicator belongs to. You do not need to specify this, since it is done dynamically and automatically.

### configuration_edit_url

_Optional_: This setting controls the URL of the "Edit Configuration" that appear on the staging site's indicator pages. Open SDG comes with a built-in configuration form at a sub-path called "config", so the default value for this setting should simply be "config".

```nohighlight
configuration_edit_url: config
```

However, if you do not want to use the built-in configuration forms, this can alternatively be a full URL -- such as if you wanted to link directly to a particular file in Github. Note that you can include `[id]` in the URL, and it will be dynamically replaced with the indicator's id (dash-delimited).

```nohighlight
configuration_edit_url: http://github.com/my-org/my-repo/tree/develop/indicator-config/[id].yml
```

### cookie_consent_form

_Optional_: This setting allows you to turn on a cookie consent form that users will see as soon as they visit the site, which allows users to control whether the certain services and cookies are used. See the [cookies and privacy documentation](cookies.md) for more details.

Here is an example showing the available options and their default values:

```nohighlight
cookie_consent_form:
  enabled: false
```

### country

**_Required_**: This setting should contain two more (indented) settings: `name` and `adjective`. This are intended to allow the platform to refer to the country (or if appropriate, locality or organisation) using the platform.

```nohighlight
country:
  name: Australia
  adjective: Australian
```

### create_goals

_Optional_: This setting can be used to automatically create the goal pages. Without this setting, you will need a file for each goal (per language), in a `_goals` folder.

This setting can contain several (indented) sub-settings:
* `goal_content_heading`: Text entered here will appear as an H2 heading above any content configured below in 'goals'.
* `previous_next_links`: You can set this to `true` to turn on previous/next links on goal pages, allowing users to "page" through the goals, directly from one to the next.
* `goals`: This optional item can include an array of objects, each with can have these optional fields:

    * `goal`: This can specify the goal number. For example: `goal: 1`. This is optional but recommended. If you omit this, then it is your responsibility to make sure that all of the objects in this array are *in order*. In other words, the first object is goal 1, the second object is goal 2, etc.
    * `heading`: Text entered here will appear as an H1 heading at the top of the goal page. This is optional and overrides the default (eg, 'Goal 1: No Poverty'). This is useful for SEO purposes, and can be plain text or a translation key.
    * `content`: Use this to specify specific content for goal pages, which can include Markdown, or can be a translation key.
    * `content_heading`: Text entered here will appear as an H2 heading above the `content` configured above. Note that this overrides the site-wide `goal_content_heading` option above as well.

```nohighlight
create_goals:
  goal_content_heading: About
  previous_next_links: true
  goals:
    - heading: My heading for goal 1
      content: My content for goal 1
    - content: My content for goal 2 with a [link](https://example.com)
      content_heading: My sub-heading for the content on goal 2
    - content: custom.my_translation_key_for_goal_3
```

It is recommend that each object in the `goals` section specify the `goal` number of each item. This is preferred because it allows you to have the objects in any order. For example:

```nohighlight
create_goals:
  goal_content_heading: About
  previous_next_links: true
  goals:
    - goal: 3
      content: custom.my_translation_key_for_goal_3
    - goal: 2
      content: My content for goal 2 with a [link](https://example.com)
      content_heading: My sub-heading for the content on goal 2
    - goal: 1
      heading: My heading for goal 1
      content: My content for goal 1
```

### create_indicators

_Optional_: This setting can be used to automatically create the indicator pages. Without this setting, you will need a file for each indicator (per language), in an `_indicators` folder. So this is highly recommended.

This setting can contain the following (indented) sub-settings:
* `previous_next_links`: You can set this to `true` to turn on previous/next links on indicator pages, allowing users to "page" through the indicators, directly from one to the next.

Here is an example of usage:

```nohighlight
create_indicators:
  previous_next_links: true
```

### create_pages

_Optional_: This setting can be used to automatically create 4 platform-dependent pages:

* the home page
* the indicators.json page
* the search results page
* the reporting status page

Without this setting, you will need a file for each of these 4 pages (per language), in a `_pages` folder. This setting can include more advanced settings (see this [jekyll-open-sdg-plugins code](https://github.com/open-sdg/jekyll-open-sdg-plugins/blob/master/lib/jekyll-open-sdg-plugins/create_pages.rb#L18)) but can also simply be set to `true`.

```nohighlight
create_pages: true
```

If you would like to use the alternative frontpage (`frontpage-alt`) alongside a dedicated "goals" page, you can used this configuration:

```nohighlight
create_pages:
  - folder: /
    layout: frontpage-alt
  - folder: /goals
    layout: goals
  - folder: /reporting-status
    layout: reportingstatus
  - filename: indicators.json
    folder: /
    layout: indicator-json
  - folder: /search
    layout: search
```

The `folder` property is required, and controls the URL path of the page. The `filename` property is optional, and is needed only in the rare case where your page needs an unusual filename (such as "indicators.json" in the example above). All other properties are treated like "frontmatter" in a regular Jekyll page, such as the `layout` properties above.

### custom_css

_Optional_: This setting can be used to load additional CSS files on each page. It should be a list of relative paths to CSS files.

```
custom_css:
  - /assets/css/custom.css
```

NOTE: This approach is deprecated. It is recommended to instead [put your custom styles into a _sass folder](customisation.md#adding-custom-css).

### custom_js

_Optional_: This setting can be used to load additional JavaScript files on each page. It should be a list of relative paths to JavaScript files, or remote paths to third-party Javascript files.

```
custom_js:
  - /assets/js/custom.js
  - https://example.com/index.js
```

### data_edit_url

**_Required_**: This setting controls the URL of the "Edit Data" that appear on the staging site's indicator pages. Open SDG comes with a built-in data form at a sub-path called "data", so the default value for this setting should simply be "data".

```nohighlight
data_edit_url: data
```

Alternatively, it could also be a full URL -- such as if you wanted to link directly to a file in Github. Note that you can include `[id]` in the URL, and it will be dynamically replaced with the indicator's id (dash-delimited).

```nohighlight
data_edit_url: http://github.com/my-org/my-repo/tree/develop/data/indicator_[id].csv
```

### data_fields

_Optional_: This setting can be used if your data source has non-standard fields for unit and/or series -- for example, if you have CSV files with units in a "UNIT_MEASURE" column, rather than the usual "Units". If this is omitted, the following defaults are used:

```nohighlight
data_fields:
  series: Series
  units: Units
```

If your data source is coming directly from SDMX, for example, you might use something like this:

```nohighlight
data_fields:
  series: SERIES
  units: UNIT_MEASURE
```

### date_formats

_Optional_: This setting can be used to control date formats for use in the site, such as in the news/category/post layouts. Any number date formats can be entered, and each must have an arbitrary `type`, such as "standard". Make sure that each `type` has a variant for each of your languages. For example, here is how you might configure a "standard" date format:

```nohighlight
date_formats:
  - type: standard
    language: en
    format: "%b %d, %Y"
  - type: standard
    language: es
    format: "%d de %b de %Y"
```

The `%` variables in the formats correspond to the variables listed in this [Ruby DateTime documentation](https://ruby-doc.org/stdlib-2.6.1/libdoc/date/rdoc/DateTime.html#method-i-strftime).

Note that the "standard" type is used in Open SDG's news/post functionality. Additional format types can be added for custom purposes.

### decimal_separator

_Optional_: This setting can be used to replace the default decimal separator -- `.` -- with any other symbol. For example, the following is how you could use a comma as a decimal separator:

```
decimal_separator: ','
```

NOTE: This setting is most likely not needed, because Open SDG will automatically take advantage of browsers' ability to format numbers for the current language. You should only use this setting if the automatic behavior is not working for you.

### disclaimer

_Optional_: This setting controls the content of the disclaimer that appears at the top of each page. If you are not happy with the default ("ALPHA: This is a development website. We welcome your feedback.") then you can use something like the following example configuration:

```nohighlight
disclaimer:
  phase: BETA
  message: This is my disclaimer message.
```

The above configuration would result in: "BETA: This is my disclaimer message."

If you only want to change the phase (to "BETA" for example), you can omit the `message` like so:

```
disclaimer:
  phase: BETA
```

As always, you can use translation keys.

You can also hide the entire disclaimer, like so:

```
disclaimer:
  hidden: true
```

Here is an example of what this looks like on the platform:

![Screenshot of disclaimer functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/disclaimer.PNG)

### email_contacts

**_Required_**: This setting should contain three more (indented) settings for email addresses: `questions`, `suggestions`, and `functional`. This allows the platform to direct users to appropriate inboxes from various parts of your site.

```nohighlight
email_contacts:
  questions: test@example.com
  suggestions: test@example.com
  functional: test@example.com
```

### empty_metadata_placeholder

_Optional_: This setting controls the text that displays for any metadata field which has no content. Note that this setting is not used if `hide_empty_metadata` is set to `true`. If the omitted, the following default is used:

```nohighlight
empty_metadata_placeholder: indicator.empty_metadata_placeholder
```

The above default refers to a translation key which currently translates to "Not available for this indicator" in English.

Here is an example of what this looks like on the platform:

![Screenshot of empty metadata placeholder functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/empty_metadata_placeholder.png)

### empty_metadata_placeholder_sources

_Optional_: This setting controls the text that displays for any *sources* field which has no content. Note that this setting is not used if `hide_empty_metadata` is set to `true`. If the omitted, the following default is used:

```nohighlight
empty_metadata_placeholder_sources: indicator.empty_metadata_placeholder_sources
```

The above default refers to a translation key which currently translates to "Not available for this source" in English.

Here is an example of what this looks like on the platform:

![Screenshot of empty source placeholder functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/empty_source_placeholder.png)

### environment

**_Required_**: This setting should be either `staging` or `production`. Certain features of the platform, such as data management links, will only appear on `staging`. Typically you will have this set to `staging` in the `_config.yml` file, and set to `production` in the `_config_prod.yml` file.

```nohighlight
environment: staging
```

### footer_language_toggle

_Optional_: This setting controls the type of language toggle to be used in the footer. Possible settings are `dropdown`, `links`, and `none`. If this is omitted, the default is `none`.

```nohighlight
footer_language_toggle: none
```

Here is an example of what this looks like on the platform:

![Screenshot of footer language toggle functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/footer_language_toggles.png)

### footer_menu

**_Required_**: This setting controls the footer menu for the platform. It should contain a list of menu items, each containing a `path` and a [translation key](translation.md).

The following example provides a footer menu matching older versions of Open SDG, which included options for social media and email contacts.

```nohighlight
footer_menu:
  - path: mailto:my-email-address@example.com
    translation_key: menu.contact_us
  - path: https://twitter.com/MyTwitterAccount
    translation_key: general.twitter
  - path: https://facebook.com/MyFacebookAccount
    translation_key: general.facebook
  - path: faq/
    translation_key: menu.faq
  - path: cookies/
    translation_key: menu.cookies
```

Note that the `path` of an item can be a translation key itself. This is useful if you want the link to go to different URLs depending on what language is active (for example if you have multiple language-specific Twitter accounts).

Here is an example of what this looks like on the platform:

![Screenshot of footer menu functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/footer_menu.PNG)

### frontpage_cards

_Optional_: This setting is used on the frontpage. It can display any number of "cards" in 3-column rows, beneath the grid of goal tiles. It should be a list of cards. Each configuration is optional, and here is an displaying one card with all of the options:

```
frontpage_cards:
    -
      # This controls the color of the line at the top of the card.
      rule_color: orange
      # This sets the title of the card.
      title: My card title
      # This sets the content of the card. Markdown is supported. Note that all
      # internal links should be relative to the frontpage. For example, instead
      # of [link](/path) you should use [link](path).
      content: |
        * List item
        * List item with [link](https://example.com)
      # This displays any file in the `_includes` folder.
      include: components/download-all-data.html
      # This controls the text for a call-to-action button.
      button_label: My button text
      # This controls the URL the button links to.
      button_link: https://example.com
    -
      title: My second card
      etc...
```

Here is an example of what this looks like on the platform:

![Screenshot of frontpage cards functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/frontpage_cards.png)

### frontpage_goals_grid

_Optional_: This setting is used on the frontpage. It can display a title and description above the grid of goal tiles. It can be configured in the following way:

```
frontpage_goals_grid:
    title: title goes here
    description: description goes here
```

Markdown is supported in the description. However note that all internal links
should be relative to the frontpage. For example, instead of `[link](/path)` you should use `[link](path)`.

### frontpage_introduction_banner

_Optional_: This setting adds a banner to your site's homepage, in order to introduce your users to your site. This setting is used on the frontpage. To add a banner update the site configuration with these settings:

```yaml
frontpage_introduction_banner:
    title: title goes here
    description: description goes here
```

Here is an example of what this looks like on the platform:

![Screenshot of frontpage introduction banner functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/frontpage_introduction_banner.png)

### goal_image_base

_Optional_: This setting controls the base URL for downloading the imagery for the goal images. The platform will use this as a base, and complete the URLs (behind the scenes) by adding a language and number. For example, if you set this to `https://example.com`, then the platform will try to download the Spanish image for Goal 4 at: `https://example.com/en/4.png`.

If omitted, the following default will be used:

```nohighlight
goal_image_base: https://open-sdg.org/sdg-translations/assets/img/goals
```

### goal_image_extension

_Optional_: This setting controls the type of file (the file "extension") that will be used for the goal images. If omitted, the default will be `png`. The precending dot (eg, `.png`) is **not** needed.

```nohighlight
goal_image_extension: png
```

**NOTE**: Please ensure that files of this type are available at the location specified in `goal_image_base` in each language that you use. For example, if your `goal_image_base` is `https://example.com`, and your `goal_image_extension` is `svg`, and your language is French, the goal 5 icon should be available at: `https://example.com/fr/5.svg`.

### goals_page

_Optional_: This setting controls certain aspects of the `goals` layout. The available settings are:

* `title`: Controls the title of the goals page. Defaults to "Goals".
* `description`: Controls the introductory text under the title. If omitted there will be no introductory text.

Here is an example of using these settings:

```yaml
goals_page:
    title: title goes here
    description: description goes here
```

As always, for multilingual support, these settings can refer to translation keys, and the description can include Markdown.

Here is an example of what this looks like on the platform:

![Screenshot of goals page functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/goals_page.PNG)

### graph_color_headline

_Optional_: This setting can be used to control the color of the "headline" (eg, the national dataset, without any disaggregations selected) on charts. The default is #004466.

### graph_color_headline_high_contrast

_Optional_: This setting can be used to control the color of the "headline" (eg, the national dataset, without any disaggregations selected) on charts, in high-contrast mode. The default is #55a6e5.

### graph_color_set

_Optional_: This setting can be used to customize the color set used in the charts. There are five possible entries:

* `graph_color_set: 'accessible'` a 6-color set that is specifically chosen for optimal accessibility (default)
* `graph_color_set: 'classic'` a deprecated 6-color set that was the default in Open SDG 1.x (it was previously called 'default' but was renamed to 'classic' in Open SDG 2.0.0)
* `graph_color_set: 'sdg'` to use the 17 SDG colors in all charts
* `graph_color_set: 'goal'` to use shades of the color of the current indicator's goal
* `graph_color_set: 'custom'` to use a set of customized colors. In this case, write the hexadecimal color codes of the colors you want to use to the list in `graph_color_list` (see below).

> **NOTE**: Whatever color scheme you choose here, please ensure that all colors satisfy
> the accessibility (minimum contrast) standards in your region. These colors will need to
> be visible on white and black backgrounds. The `accessible` color scheme is designed to
> meet this requirement, and so it is recommended, and it is the default.

### graph_color_list

_Optional_: This setting can be used to define a set of colors to be used in the charts. Precondition is `graph_color_set` to be `custom`. Enter a list of hexadecimal color codes.
```yaml
graph_color_list': ['3fd64f','cfd63f','4eecec','ec4ed9']
```

### graph_color_number

_Optional_: This setting can be used to limit the length of the list of colors selected via `graph_color_set`. The maximum value for `graph_color_set: 'default'` is 6, for `graph_color_set: 'sdg'` is 17, for `graph_color_set: 'goal'` is 9 and for `graph_color_set: 'custom'` the length of `graph_color_list`. If nothing is defined here, the corresponding maximum is used. Be aware that the number selected here affects how many datasets can be displayed simultaneously in the charts (2 times this value - once as a normal line or bar and once as a dashed line or bar).

### graph_title_from_series

_Optional_: This setting can be set to `true` to use the currently-selected series as the chart title, whenever possible. Example:

```yaml
graph_title_from_series: true
```

### header_language_toggle

_Optional_: This setting controls the type of language toggle to be used in the header. Possible settings are `dropdown`, `links`, and `none`. If this is omitted, the default is `dropdown`. The general recommendation is to use `dropdown` if you have more than 3 languages, and otherwise to use `links`.

```nohighlight
header_language_toggle: dropdown
```

Here is an example of what the dropdown option looks like on the platform:

![Screenshot of header language toggle dropdown functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/header_language_toggles_dropdown.png)

Here is an example of what the links option looks like on the platform:

![Screenshot of header language toggle links functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/header_language_toggles_links.png)

### hide_empty_metadata

_Optional_: This setting can be used to hide any metadata fields that are empty. In other words, this setting can ensure that if an indicator has no data for a particular metadata field, that field will not display at all. The default behavior if for all metadata fields to be displayed, regardless of whether the indicator has the required data.

```nohighlight
hide_empty_metadata: true
```

### hide_single_series

_Optional_: This setting can be used to hide the "Series" toggle on indicator pages whenever there is only a single series to chose from.

```nohighlight
hide_single_series: true
```

### hide_single_unit

_Optional_: This setting can be used to hide the "Unit" toggle whenever there is only a single unit to chose from.

```nohighlight
hide_single_unit: true
```

### ignored_disaggregations

_Optional_: This setting causes any number of disaggregations (eg, columns in CSV files) to be ignored. This means that they will not receive drop-downs in the left sidebar on indicator pages.

This can be useful in cases where the source data may contain columns that you prefer not to appear in the platform. For example, perhaps your source data is SDMX, and contains required SDMX fields like UNIT_MULT, which you do not need visible on the platform. You could ignore it with this configuration:

```
ignored_disaggregations:
  - UNIT_MULT
```

### indicator_config_form

_Optional_: This setting controls the behavior of the indicator config forms. The available settings are:

* `enabled`: Whether or not to generate these configuration forms
* `dropdowns`: This can be used to convert any `string` field into a dropdown. Each item should have these properties:

    * `jsonschema`: The path into the jsonschema's `properties` object, to the property that you would like to convert into a dropdown. In most cases this is simply the name of the property, but in nested situations, you can use dot-syntax to drill down into the jsonschema object.
    * `values`: A list of values for the dropdown.
    * `labels`: An optional list of human-readable labels, corresponding to the `values` list.

  For example, the following would convert the `reporting_status` property into a dropdown:

      site_config_form:
        dropdowns:
          - jsonschema: reporting_status
            values:
              - complete
              - notstarted

* `repository_link`: This will display a "Go to repository" link on the configuration page. You can enter a pattern with the placeholder `[id]` and it will be replaced with the indicator id (eg, 1-1-1). For example, on indicator 1-1-1, `https://example.com/[id]` will link to `https://example.com/1-1-1`.
* `translation_link`: This will display a  "Go to translation" link beneath each metadata field. This is used to give the editor a shortcut to whereever it is that the translations are maintained. You can enter a pattern with the placeholder `[id]` it will be replaced as described above. In addition, your pattern can include these other placeholders:
    * `[language]`: This will be replaced with the current language.
    * `[group]`: This will be replaced with the first part of the translation key. Eg, if the translation key is `foo.bar` then `[group]` will be replaced with `foo`.
    * `[key]`: This will be replaced with the second part of the translation key. Eg, if the translation key is `foo.bar` then `[key]` will be replaced with `bar`.

  The appropriate value for this translation_link setting depends on the specifics of how you maintain translations. For example, if your translations are maintained in Weblate then you might take advantage of Weblate's useful search feature, but having a translation_link of:

  `https://hosted.weblate.org/search/my-project/[group]/?q=+context%3A%3D[key]`

  For another example, if you are maintaining translations in the `translations` folder in your data repository, then you might have a translation_link of:

  `https://github.com/my-org/my-data-repo/tree/develop/translations/[language]/[group].yml`

Links to the forms appear in the "Edit" tab on indicator pages.

### indicator_data_form

_Optional_: This setting controls the behavior of the indicator data forms. The available settings are:

* `enabled`: Whether or not to generate these data forms
* `repository_link`: This will display a "Go to repository" link on the configuration page. You can enter a pattern with the placeholder `[id]` and it will be replaced with the indicator id (eg, 1-1-1). For example, on indicator 1-1-1, `https://example.com/[id]` will link to `https://example.com/1-1-1`.

Links to the forms appear in the "Edit" tab on indicator pages.

### indicator_metadata_form

_Optional_: This setting controls the behavior of the indicator metadata forms. The available settings are the same as in  `indicator_config_form` above, plus the following extra options:

* `scopes`: A list of the "scopes" that you would like to include in the form. If let blank, this will default to "national" and "global".
* `exclude_fields`: A list of the fields that you would like to omit from the form.
* `translated`: This setting is only for multilingual implementations that are using the "subfolder approach" for multilingual metadata. When this option is enabled, the contents of the metadata forms are translated (based on the current language), to allow you to save different files for each language. If you are not using the "subfolder approach" for multilingual metadata (or you don't know what that is) then you can safely leave this disabled.

For example:

```
indicator_metadata_form:
  enabled: true
  scopes:
    - national
    - global
  exclude_fields:
    - my_excluded_field_name
  translated: false
```

Links to the forms appear in the "Edit" tab on indicator pages.

### indicator_tabs

**_Optional_**: This setting controls the order and contents of the data tabs on indicator pages. This can be used to rearrange the tabs, or to hide particular tabs. This can also be overridden for particular indicators in the indicator configuration.

For each of the four tab slots, you can set either: `chart`, `table`, `map`, `embed`, or `hide`.

* `chart`: This will display the chart/graph in the specified tab.
* `table`: This will display the data table in the specified tab.
* `map`: This will display map in the specified, so long as the other requirements for displaying a map are met (such as the `data_show_map` setting and a `GeoCode` data column).
* `embed`: This will display embedded content in the specified tab, so long as the other requirements for displaying embedded content are met (such as the `embedded_feature_url` or `embedded_feature_html` settings).
* `hide`: This will hide the specified tab altogether.

The default settings, if omitted are the following:

```nohighlight
indicator_tabs:
  tab_1: chart
  tab_2: table
  tab_3: map
  tab_4: embed
```

But for example, if you would like your indicators to start with the table selected, you could do this:

```nohighlight
indicator_tabs:
  tab_1: table
  tab_2: chart
  tab_3: map
  tab_4: embed
```

Or if you would like your indicators to only have tables and maps, you could do this:

```nohighlight
indicator_tabs:
  tab_1: table
  tab_2: map
  tab_3: hide
  tab_4: hide
```

Here is an example of what this looks like on the platform:

![Screenshot of header indicator tabs functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/indicator_tabs.PNG)

### languages

**_Required_**: This setting controls the languages to be used on the site. This should be a list of language codes, and the first is assumed to be the default.

```nohighlight
languages:
  - es
  - en
```

### languages_public

_Optional_: This setting can be used if you are not happy with any of the standard language codes. For example, if the standard code for a language is `xyz` but you would prefer that it show up in your URLs as `abc`, then you could do the following:

```nohighlight
languages_public:
  - language: xyz
    language_public: abc
```

### logos

_Optional_: Normally Open SDG uses a logo at `assets/img/SDG_logo.png`, with the alt text of "Sustainable Development Goals - 17 Goals to Transform our World". However you can use this setting to take full control of the logo and alt text:

```nohighlight
logos:
  - src: assets/img/my-other-image-file.png
    alt: My other alt text
```

You can also specify multiple logos, one per language:

```nohighlight
logos:
  - language: en
    src: assets/img/en/logo.png
    alt: my alt text
  - language: es
    src: assets/img/es/logo.png
    alt: mi texto alternativo
```

Here is an example of what this looks like on the platform:

![Screenshot of logos functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/logos.PNG)

### map_layers

_Optional_: This setting configures the layers that will be visible on maps on indicator pages. Each layer is a set of boundaries. For example, one layer might be for the province boundaries, and another layer might be for the district boundaries. For more information on this setting, see the [Maps guidance](maps.md).

### map_options

_Optional_: This setting configures general options for maps on indicator pages. For more information on this setting, see the [Maps guidance](maps.md).

### menu

**_Required_**: This setting controls the main navigation menu for the platform. It should contain a list of menu items, each containing a `path` and a [translation key](translation.md).

```nohighlight
menu:
  - path: reporting-status/
    translation_key: menu.reporting_status
  - path: about/
    translation_key: menu.about
  - path: faq/
    translation_key: menu.faq
```

Menu items can also be turned into dropdowns by putting additional menu items under a `dropdown` setting. For example, this would move "about/" and "faq/" under a "More information" dropdown:

```nohighlight
menu:
  - path: reporting-status/
    translation_key: menu.reporting_status
  - translation_key: More information
    dropdown:
      - path: faq/
        translation_key: menu.faq
      - path: about/
        translation_key: menu.about
```

Here is an example of what this looks like on the platform:

![Screenshot of menu functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/menu.PNG)

### metadata_edit_url

**_Required_**: This setting controls the URL of the "Edit Metadata" that appear on the staging site's indicator pages. Open SDG comes with a built-in metadata form at a sub-path called "metadata", so the default value for this setting should simply be "metadata".

```nohighlight
metadata_edit_url: metadata
```

Alternatively, it could also be a full URL -- such as if you wanted to link directly to a file in Github. Note that you can include `[id]` in the URL, and it will be dynamically replaced with the indicator's id (dash-delimited).

```nohighlight
metadata_edit_url: http://github.com/my-org/my-repo/tree/develop/meta/[id].yml
```

### metadata_tabs

_Optional_: This setting can control the metadata tabs which appear on the indicator pages. This is directly tied to the "schema" of your data repository (ie, the `_prose.yml` file). The "scope" in each object must correspond to the "scope" of the fields in that schema file. The following configuration is assumed if this setting is omitted:

```nohighlight
metadata_tabs:
  - scope: national
    title: indicator.national_metadata
    description: indicator.national_metadata_blurb
  - scope: global
    title: indicator.global_metadata
    description: indicator.global_metadata_blurb
  - scope: sources
    title: indicator.sources
    description: ''
```

In addition to the self-explanatory `title` and `description` properties above, each item can optionally have a `placeholder` property, which should contain text to display when the tab pane would otherwise be empty.

About the scopes:

While the "scopes" above, such as "national" and "global", are arbitrary, there are four special scopes that take their content in a particular way:

* `sources`: This deprecated scope takes its content from the `source_*_1`, `source_*_2`, etc, metadata fields. This scope is deprecated and `sources_alt` (see below) is recommended instead.
* `sources_alt`: This scope takes its content from the [`sources` indicator configuration](indicator-configuration.md#sources).
* `publications`: This scope takes its content from the [`publications` indicator configuration](indicator-configuration.md#publications).
* `related_indicators`: This scope takes its content from the [`related_indicators` indicator configuration](indicator-configuration.md#related_indicators).

Here is an example configuration of `metadata_tabs` that uses all of these special scopes:

```nohighlight
metadata_tabs:
  - scope: national
    title: indicator.national_metadata
    description: indicator.national_metadata_blurb
  - scope: global
    title: indicator.global_metadata
    description: indicator.global_metadata_blurb
  - scope: sources_alt
    title: Sources
    description: My blurb about the sources tab
    placeholder: No sources are available at this time
  - scope: related_indicators
    title: Related indicators
    description: My blurb about the related indicators tab
    placeholder: There are no other indicators related to this one
  - scope: publications
    title: Publications
    description: My blurb about the publications tab
    placeholder: There are no publications available for this indicator
```

Here is an example of what this looks like on the platform:

![Screenshot of metadata tabs functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/metadata_tabs.PNG)

### meta_tags

_Optional_: This setting can be used to set [meta tags](https://www.w3schools.com/tags/tag_meta.asp) on any of the paths within the site. It should contain a list of items, each containing a `path`, a `name`, and `content`.

```nohighlight
meta_tags:
  - path: about
    name: description
    content: My description text for the About page
  - path: '1'
    name: keywords
    content: my list of keywords for Goal 1
```

Note that the homepage should have a `path` of `''`, eg:

```nohighlight
meta_tags:
  - path: ''
    name: description
    content: My description text for the homepage
```

If your platform is multilingual, note that the `content` can be a [translation key](translation.md), and the `path` should not contain any language abbreviations.

### news

_Optional_: This setting can be used to control the behavior of the `news` and `post` layouts. The available settings are:

* `category_links`: Whether you would like the `categories` of posts to generate links to dedicated category pages. Default is `true`, but set to `false` to disable category links.

### observation_attributes

_Optional_: This setting controls the data columns that should be considered "observation attributes", as well as the labels that should be used for these columns when displaying their values in the footer beneath charts and tables.

Here is a recommended example that would set "COMMENT_OBS" as an observation attribute:

```
observation_attributes:
  - field: COMMENT_OBS
    label: ''
```

As you can see in the defaults above, the labels can be empty, in which case the label is not displayed. They can also be translation keys.

The "field" above is what is expected to be the column name in the data (eg, the CSV file). The "label" is what you would like to appear in the footer as the label (if anything).

For example, given the following CSV data and the defaults above:

Year | Units | COMMENT_OBS | Value
--- | --- | --- | ---
2020 | Percent | | 50
2021 | Percent | | 60
2020 | Total | estimate | 5000
2021 | Total | estimate | 6000

The footnote "estimate" would be associated with the observation values 5000 and 6000.

By contrast, setting a label on the observation attribute will prepend that label in the footnotes. For example, using these settings instead:

```
observation_attributes:
  - field: COMMENT_OBS
    label: Comment
```

...would result in the footnote "Comment: estimate" being associated with the values 5000 and 6000.

> NOTE: For full support (including on maps) a corresponding change should also be made in the data configuration in the "indicator_options" setting. See [more details on the "indicator_options" data configuration setting](data-configuration.md#indicator_options).

Here is an example of what this looks like on the platform:

![Screenshot of observation attributes functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/observation_attributes.PNG)

### plugins

**_Required_**: This is a general Jekyll setting, but it is mentioned here to indicate the required plugins. At a minimum you should include the following:

```
plugins:
  - jekyll-remote-theme
  - jekyll-open-sdg-plugins
```

### progress_status

_Optional_: This setting controls certain aspects of the progress status functionality. 

For the progress status icons to display, you will need to include the relevant setting for progress_status in both the site and data configuration files. The site configuration settings for progress_status sets up the desired options for reporting progress, including the category names and images to display.

The available settings in the site configuration are:

* `status_heading`: Controls the heading that describes the progress status, whenever it appears.
* `status_help`: Controls the help text that displays as a header above the progress column. This should describe what the progress types are intended to convey. This defaults to: "How are we doing against the 2030 targets?"
* `status_types`: A list of progress status types to use. Each item should have these settings:
    * `value`: The value of the status type, as it is set in the indicator configuration (eg, 'target_achieved').
    * `label`: The human-readable label for the status type. Can be a translation key (eg, 'status.target_achieved').
    * `image`: The internal path to the image to use (if any) for this progress status. We have default images available to use by including the file names in the below examples (links to Open SDG image files), however you can choose any image to represent each of your reporting progress categories and add these to your assets/img folder in your own site repository. You will then need to change the file name to reflect your new images.
    * `alt`: An alt tag for the image above.

Here is the default example of these settings:

```yaml
progress_status:
  status_heading: ''
  status_help: ''
  status_types:
    - value: not_available
      label: status.progress_not_available
      alt: status.progress_not_available
    - value: deterioration
      label: status.deterioration
      image: assets/img/progress/red-gauge.png
      alt: status.deterioration
    - value: limited_progress
      label: status.limited_progress
      image: assets/img/progress/orange-gauge.png
      alt: status.limited_progress
    - value: moderate_progress
      label: status.moderate_progress
      image: assets/img/progress/yellow-gauge.png
      alt: status.moderate_progress
    - value: substantial_progress
      label: status.substantial_progress
      image: assets/img/progress/green-gauge.png
      alt: status.substantial_progress
    - value: target_achieved
      label: status.target_achieved
      image: assets/img/progress/target-achieved-gauge.png
      alt: status.target_achieved
```

As always, for multilingual support, the label/alt/heading settings can refer to translation keys.

For the relevant indicators, you will need to specify the progress_status in the indicator configuration - see the [indicator configuration setting for `progress_status`](indicator-configuration.md#progress_status) for how to do this. 

Here is an example of what this looks like on the platform:

![Screenshot of progress status functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/progress_status.PNG)

### progressive_web_app

_Optional_: This setting can be used to make the platform a
[progressive web app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps),
which users can add to their mobile device's home screen and
use while offline. The available settings are:

* `enabled`: Whether or not this platform will be a progressive web app
* `name`: The full name of the app, to be displayed on the splash screen
* `short_name`: The short name of the app, to be displayed under the homescreen icon
* `precaching`: Whether all indicator and goal pages should be precached when the app is installed

```nohighlight
progressive_web_app:
  enabled: true
  name: Indicators For The Sustainable Development Goals - Mexico
  short_name: SDG Mexico
  precaching: true
```

Here is an example of how this functionality appears in a web browser on your phone:

![Screenshot of progressive web app functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/progressive_web_app.png)

### proxy_indicators

_Optional_: This setting can be used to override the default label and description that are displayed
for [proxy indicators](indicator-configuration.md#proxy). The available settings are:

* `label`: The label to display when flagging a proxy indicator. Defaults to 'Proxy'.
* `description`: The description to display at the top of indicator pages, explaining what 'Proxy' means.

```nohighlight
proxy_indicators:
  label: My alternate proxy label
  description: My alternate proxy description
```

Here is an example of what this looks like on the platform:

![Screenshot of proxy indicators functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/proxy_indicators.PNG)

### remote_data_prefix

**_Required_**: This setting tells the platform where to find your hosted [data repository](glossary.md#data-repository).

```nohighlight
remote_data_prefix: https://my-github-org.github.io/my-data-repository
```

Note that this is typically a remote URL, but it also works as a relative path to a local folder on disk. For example:

```nohighlight
remote_data_prefix: my-data-build-folder
```

### remote_theme

**_Required_**: This is not specific to Open SDG, but it is very important to always use a specific version of Open SDG (as opposed to using the latest version). For example, to use version 0.8.0 of the platform, use the following:

```nohighlight
remote_theme: open-sdg/open-sdg@0.8.0
```

This is far safer and more recommended than using the latest version, such as the following (which is **not recommended**):

```nohighlight
remote_theme: open-sdg/open-sdg
```

### reporting_status

_Optional_: This setting controls certain aspects of the reporting status page. The available settings are:

* `title`: Controls the title of the reporting status page. Defaults to "Reporting status".
* `description`: Controls the introductory text under the title. If omitted there will be no introductory text.
* `disaggregation_indicator_count_label`: An alternative label to use for the indicator count on the disaggregation tab, to be displayed after a number. For example, if set to `indicators in scope`, then it would display something like `12 indicators in scope` in the disaggregation status tab. The default is `indicators`.
* `disaggregation_tabs`: Whether or not to display disaggregation status tabs. If omitted, this defaults to false. If you enable this setting, you should also use "expected_disaggregations" in your indicator configuration, in order to provide the disaggregation status report with useful metrics. For more information see [expected_disaggregations](indicator-configuration.md#expected_disaggregations).
* `status_types`: A list of reporting status types to use. Each item should have these settings:
    * `value`: The value of the status type, as it is set in the indicator configuration (eg, 'complete').
    * `label`: The human-readable label for the status type. Can be a translation key (eg, 'status.reported_online').
    * `hide_on_goal_pages`: _Optional_: Whether to hide this status type on goal pages. Useful for the most commonly-occuring type.

Here is an example of using these settings:

```yaml
reporting_status:
    title: title goes here
    description: description goes here
    disaggregation_indicator_count_label: indicators in scope
    disaggregation_tabs: true
    status_types:
      - value: notstarted
        label: status.exploring_data_sources
        hide_on_goal_pages: false
      - value: complete
        label: status.reported_online
        hide_on_goal_pages: true
      - value: notapplicable
        label: status.not_applicable
        hide_on_goal_pages: false
```

As always, for multilingual support, the title/description settings can refer to translation keys, and description can include Markdown.

Here is an example of what this looks like on the platform:

![Screenshot of reporting status functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/reporting_status.PNG)

### repository_url_data

_Optional_: This setting specifies the URL of the data repository, which is used in other settings. Currently this -- if available -- will be used as a prefix for the "repository_link" options in `indicator_config_form`, `indicator_metadata_form`, and `indicator_data_form`.

Here is an example of using this setting:

```yaml
repository_url_data: https://github.com/my-github-org/data
```

### repository_url_site

_Optional_: This setting specifies the URL of the site repository, which is used in other settings. Currently this -- if available -- will be used as a prefix for the "repository_link" option in `site_config_form`.

Here is an example of using this setting:

```yaml
repository_url_site: https://github.com/my-github-org/site
```

### search_index_boost

_Optional_: This setting can be used to give a "boost" to one or more fields in the search index. The boost number should be a positive integer. The higher the number, the more "relevant" that field will be in search results. If omitted, the following defaults will be used:

```
search_index_boost:
  - field: title
    boost: 10
```

The following example shows additional fields that can be boosted:

```
search_index_boost:
  # The title of the indicator, goal, or page.
  - field: title
    boost: 10
  # The content of the indicator, goal, or page.
  - field: content
    boost: 1
  # The id number of the indicator or goal.
  - field: id
    boost: 5
```

Additionally, any fields set in the `search_index_extra_fields` setting may also be boosted. For example:

```
search_index_boost:
  # Assumes that "national_agency" was set in "search_index_extra_fields".
  - field: national_agency
    boost: 5
```

### search_index_extra_fields

_Optional_: This setting can be used to "index" additional metadata fields in your indicators, for the purposes of affecting the site-wide search. For example, if you have a metadata field called `national_agency` and you would like the sitewide search to include that field, add it in a list here, like so:

```nohighlight
search_index_extra_fields:
  - national_agency
```

Another example of how `search_index_extra_fields` could be used, is to configure search terms for indicator pages. For example, if you wanted indicator 3.a.1 to show as a result of 'smoking' or 'smokers' being searched for, you could set an indicator configuration field called `data_keywords` and then "index" that field, like so:

```nohighlight
search_index_extra_fields:
  - data_keywords
```

Then in your indicator configuration you would have:

```nohighlight
data_keywords: smoking, smokers
```

### site_config_form

_Optional_: This setting controls the behavior of the site config form. The available settings are the same as in the `indicator_config_form` described above.

The default location for the site configuration page is `/config`.

### time_series_attributes

_Optional_: This setting controls the data columns that should be considered "time-series attributes", as well as the labels that should be used for these columns when displaying their values in the footer beneath charts and tables.

If this setting is left empty, the following defaults are assumed:

```
time_series_attributes:
  - field: COMMENT_TS
    label: indicator.footnote
  - field: DATA_LAST_UPDATE
    label: metadata_fields.national_data_update_url
```

As you can see in the defaults above, the labels can be translation keys.

The "field" above is what is expected to be the column name in the data (eg, the CSV file). The "label" is what you would like to appear in the footer as the label.

These columns are expected to be "time-series attributes" - in other words, they are expected to have the same value for all rows in the same time-series. For example, the following would be a correct way to use a time-series attribute "COMMENT_TS":

Year | Units | COMMENT_TS | Value
--- | --- | --- | ---
2020 | Percent | My comment for percentages | 50
2021 | Percent | My comment for percentages | 60
2020 | Total | My comment for totals | 5000
2021 | Total | My comment for totals | 6000

### x_axis_label

_Optional_: This setting, if provided, will display as a label beneath the X axis on charts. Note that this is also available on the configuration of individual indicators, where it will override this setting.

Here is an example of what this looks like on the platform:

![Screenshot of x axis label functionality](https://open-sdg.org/open-sdg-docs/img/siteconfiguration/x_axis_label.PNG)
