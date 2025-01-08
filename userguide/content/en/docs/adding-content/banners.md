---
title: "Banners"
date: 2024-02-22
weight: 12
description: >
   Add a banner above the page content.
---

You can add custom banners above the page content of documentation and blog pages.

To display the banner, you have to:

1. Create a file in your project called `layouts/partials/hooks/banner.html`
1. Edit the file to add the content of the banner. You can use HTML code, or anything that [Hugo partial templates](https://gohugo.io/templates/partials/) support. For example:

    ```html
    <div class="pageinfo pageinfo-primary">
      <p>This is a simple banner that appears if you set <code>banner</code> to <code>yes</code> in the front matter of the page.</p>
    </div>
    ```

1. Set the `banner` option to `yes` in the front matter of the page you want the banner on.

    To apply the banner to multiple pages, you can also [cascade](https://gohugo.io/content-management/front-matter/#cascade) the `banner` value.

If you want to use multiple different banners in your docs, you can create multiple separate banner files called `layouts/partials/hooks/<custom-banner-filename>`, and set the `banner` option to `yes`, and the `banner_file` option to `<custom-banner-filename>` in the front matter to display the specified file as banner. Note that currently only one banner can be displayed on a page: if you have both `banner` and `banner_class` set, only `banner_class` takes effect.
