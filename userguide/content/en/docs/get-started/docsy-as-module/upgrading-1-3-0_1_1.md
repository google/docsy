<h1>Upgrading to 1.3.1</h1>

This document is intended for developers, to help with the process of upgrading to version 1.3.1 of Open SDG, from 1.2.0 or higher.

## Breaking changes

We try not to introduce breaking changes in minor releases, but there was one change made for improved performance which may require some adjustments. In the rare case that your implementation is overriding the following file, you may need to adjust your overrides as you upgrade to 1.3.1:

* _includes/scripts.html

If you are in this situation, you will need to replace the following line...

```
<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
```

...with this new line:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

Also note that you may not need to override this file at all. If you were overriding the file in order to get javascript into the platform, you might consider using the `custom_js` site configuration, or overriding `_includes/scripts-custom.html` instead.

## Upgrade data repository to sdg-build 1.3.1

In your data repository, update your `requirements.txt` file to:

```
git+git://github.com/open-sdg/sdg-build@1.3.1
```

## Upgrade translations to sdg-translations 1.3.1

In your data repository's config file, update the version of sdg-translations in the "translations" section:

```
translations:
  - class: TranslationInputSdgTranslations
    source: https://github.com/open-sdg/sdg-translations.git
    tag: 1.3.1
```

## Update version of Open SDG to 1.3.1

In your site repository's `_config.yml` file, update the version of Open SDG in `remote_theme`, like so:

```
remote_theme: open-sdg/open-sdg@1.3.1
```

## Update version of jekyll-open-sdg-plugins to 1.3.1

In your site repository's `Gemfile`, update the version of jekyll-open-sdg-plugins like so:

```
gem "jekyll-open-sdg-plugins", "1.3.1"
```

## Recommended updates to the `_config.yml` file

In 1.3.1 we have introduced an optional left-aligned site header. We recommend using it, but it is completely optional. If you would like to use it, try this configuration:

```
header:
    include: header-menu-left-aligned.html
```

In addition, there is a new recommended color set for charts that is optimized for accessibility and contrast. To use this optional color set, try this configuration:

```
graph_color_set: accessible
```
