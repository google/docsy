<h1>Upgrading to 1.4.0</h1>

This document is intended for developers, to help with the process of upgrading to version 1.4.0 of Open SDG, from 1.3.0 or higher.

## Breaking changes

We try not to introduce breaking changes in minor releases, but some minor changes were necessary due to enhancements with the high-contrast toggle button and configuration forms. In the uncommon case that you are overriding any of the following files, you may need to update your overrides according to the latest code:

* _includes/assets/js/accessibility.js
* _includes/components/header/header-menu-left-aligned.html
* _includes/navigation.html
* _includes/components/indicator/edit-buttons.html

## Upgrade data repository to sdg-build 1.4.0

In your data repository, update your `requirements.txt` file to:

```
git+git://github.com/open-sdg/sdg-build@1.4.0
```

## Upgrade translations to sdg-translations 1.4.0

In your data repository's config file, update the version of sdg-translations in the "translations" section:

```
translations:
  - class: TranslationInputSdgTranslations
    source: https://github.com/open-sdg/sdg-translations.git
    tag: 1.4.0
```

## Update version of Open SDG to 1.4.0

In your site repository's `_config.yml` file, update the version of Open SDG in `remote_theme`, like so:

```
remote_theme: open-sdg/open-sdg@1.4.0
```

## Update version of jekyll-open-sdg-plugins to 1.4.0

In your site repository's `Gemfile`, update the version of jekyll-open-sdg-plugins like so:

```
gem "jekyll-open-sdg-plugins", "1.4.0"
```
