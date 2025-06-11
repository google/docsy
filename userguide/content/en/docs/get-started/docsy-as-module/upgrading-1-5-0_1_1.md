<h1>Upgrading to 1.5.0</h1>

This document is intended for developers, to help with the process of upgrading to version 1.5.0 of Open SDG, from 1.4.0 or higher.

## Breaking changes

Though we strive to avoid any breaking changes, there may be a minor issue in the unlikely case that you are overriding the `_includes/assets/js/accessibility.js` file. In this case, you may see a duplicated non-functional contrast toggle. To resolve it, please update your overridden version to match the latest code, and then re-apply your changes.

## Upgrade data repository to sdg-build 1.5.0

In your data repository, update your `requirements.txt` file to:

```
git+git://github.com/open-sdg/sdg-build@1.5.0
```

## Upgrade translations to sdg-translations 1.5.0

In your data repository's config file, update the version of sdg-translations in the "translations" section:

```
translations:
  - class: TranslationInputSdgTranslations
    source: https://github.com/open-sdg/sdg-translations.git
    tag: 1.5.0
```

## Update version of Open SDG to 1.5.3

> Due to hotfix releases, the latest and recommended version for Open SDG is 1.5.3.

In your site repository's `_config.yml` file, update the version of Open SDG in `remote_theme`, like so:

```
remote_theme: open-sdg/open-sdg@1.5.3
```

## Update version of jekyll-open-sdg-plugins to 1.5.0

In your site repository's `Gemfile`, update the version of jekyll-open-sdg-plugins like so:

```
gem "jekyll-open-sdg-plugins", "1.5.0"
```

## Recommended updates to the site configuration

In 1.5.0 we have introduced two new optional features:

* `hide_single_unit`: If enabled (`true`) this will hide the unit of measurement toggle when there is only one choice.
* `hide_single_series`: If enabled (`true`) this will hide the series toggle when there is only one choice.

These settings can help reduce unnecessary elements on the indicator pages, so we recommend enabling both of these.
