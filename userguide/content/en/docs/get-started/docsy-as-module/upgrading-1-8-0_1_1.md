<h1>Upgrading to 1.8.0</h1>

This document is intended for developers, to help with the process of upgrading to version 1.8.0 of Open SDG, from 1.7.0 or higher.

## Upgrade data repository to sdg-build 1.8.0

In your data repository, update your `requirements.txt` file to:

```
git+https://github.com/open-sdg/sdg-build@1.8.0
```

## Upgrade translations to sdg-translations 1.8.0

In your data repository's config file, update the version of sdg-translations in the "translations" section:

```
translations:
  - class: TranslationInputSdgTranslations
    source: https://github.com/open-sdg/sdg-translations.git
    tag: 1.8.0
```

## Update version of Open SDG to 1.8.0

In your site repository's `_config.yml` file, update the version of Open SDG in `remote_theme`, like so:

```
remote_theme: open-sdg/open-sdg@1.8.0
```

## Update version of jekyll-open-sdg-plugins to 1.8.0

In your site repository's `Gemfile`, update the version of jekyll-open-sdg-plugins like so:

```
gem "jekyll-open-sdg-plugins", "1.8.0"
```

## Preparation for the following release: 2.0.0

The next planned release of Open SDG will be 2.0.0, which means that this will be the final 1.x release.

Several site configurations are deprecated and will no longer be used in 2.0.0. After upgrading 1.8.0 according to these instructions, the site build process (which you can followin the Github Actions logs) should provde feedback if you are using any deprecated settings.

Many include files, layout files, javascript files, and Sass files will be changing in 2.0.0. In order preview these changes, you can enable two site configuration settings:

```
bootstrap_5: true
chartjs_3: true
```

See [this blog post on preparing for Open SDG 2.0.0](https://open-sdg.org/blog/2022-04-01-preparing-for-open-sdg-2/) for a more detailed description.
