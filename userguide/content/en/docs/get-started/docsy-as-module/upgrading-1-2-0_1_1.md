<h1>Upgrading to 1.2.0</h1>

This document is intended for developers, to help with the process of upgrading to version 1.2.0 of Open SDG, from 1.0.0 or higher.

## Breaking changes

Although our goal is to avoid introducing breaking changes in minor releases, there were two unavoidable changes made for improved accessibility, which may necessitate some adjustments. In the rare case that your implementation is overriding either of the following files, you may need to adjust your overrides as you upgrade to 1.2.0:

* _includes/components/charts/chart.html
* _includes/components/indicator/table.html

If you are in this situation, and you choose **not** to adjust your overrides of these files, then the "footer fields" (Unit of measurement, Footnote, etc.) may not appear beneath your indicator charts and tables. In order to restore these footer fields, please add the following line to your overridden versions:

`{% include components/indicator/data-footer.html %}`

That code will render the footer fields. The placement of the code is left to your discretion.

## Upgrade data repository to sdg-build 1.2.0

In your data repository, update your `requirements.txt` file to:

```
git+git://github.com/open-sdg/sdg-build@1.2.0
```

## Update version of Open SDG to 1.2.0

In your site repository's `_config.yml` file, update the version of Open SDG in `remote_theme`, like so:

```
remote_theme: open-sdg/open-sdg@1.2.0
```

## Update version of jekyll-open-sdg-plugins to 1.2.0

In your site repository's `Gemfile`, update the version of jekyll-open-sdg-plugins like so:

```
gem "jekyll-open-sdg-plugins", "1.2.0"
```

## Recommended updates to the `_config.yml` file

In your site repository's `_config.yml` file, the following optional changes are recommended, because they enable important accessibility improvements:

```
accessible_tabs: true
accessible_charts: true
```
