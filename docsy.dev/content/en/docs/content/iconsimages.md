---
title: Logos and Images
# date: 2017-01-05
description: Add and customize logos, icons, and images in your project.
cSpell:ignore: Icongen lookandfeel cthedot icongen imgproc
---

## Add your logo

By default, Docsy shows a site logo at the start of the navbar, that is, at the
extreme left. Place your project's SVG logo in `assets/icons/logo.svg`. This
overrides the default Docsy logo in the theme.

If you don't want a logo to appear in the navbar, then set site parameter
`navbar_logo` to `false` in your project's config:

<!-- markdownlint-disable no-shortcut-ref-link -->
<!-- prettier-ignore-start -->
{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[params.ui]
navbar_logo = false
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
params:
  ui:
    navbar_logo: false
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}

{
  "params": {
    "ui": {
      "navbar_logo": false
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}
<!-- prettier-ignore-end -->
<!-- markdownlint-enable no-shortcut-ref-link -->

For information about styling your logo, see [Styling your project logo and
name][].

[Styling your project logo and name]:
  /docs/content/lookandfeel/#styling-your-project-logo-and-name

## Use icons

Docsy includes the free FontAwesome icons by default, including logos for sites
like GitHub and Stack Overflow. You can view all available icons in the
[FontAwesome documentation](https://fontawesome.com/icons/), including the
FontAwesome version when the icon was added and whether it is available for free
tier users. Check Docsy's
[`package.json`](https://github.com/google/docsy/blob/main/package.json) and
release notes for Docsy's currently included version of FontAwesome.

You can add FontAwesome icons to your
[navbar](/docs/content/navigation/#adding-icons-to-the-navbar),
[side nav](/docs/content/navigation/#adding-icons-to-the-side-nav), or anywhere
in your text.

## Add your favicons

The theme ships **no** favicons, so you need to add your own. Docsy generates
the favicon `<link>` tags from a single source image, resizing it to the
required sizes via Hugo's [image processing][], and publishes the files at your
site **root** (for example `/favicon.ico` and `/apple-touch-icon.png`) where
browsers and other clients look for them by convention. Put your files in your
site's `assets/` directory (at the root or under `favicons/`):

- `favicon.png` — a square source image (ideally 512&times;512 or larger).
  Docsy resizes it to each configured size and to a 180&times;180
  `apple-touch-icon`.
- `favicon.svg` — _optional_. Published as-is for browsers that prefer SVG
  icons.
- `favicon.ico` — _optional_. Published as-is for legacy browsers.

You can customize the behavior under `params.td.favicons` (defaults shown):

```yaml
params:
  td:
    favicons:
      path: favicon.* # base path of your icon files; the extension is ignored
      sizes: [16, 32, 48] # PNG sizes generated from the source image
      no_apple_precomposed: false # set true to skip apple-touch-icon-precomposed.png
```

Docsy resolves `path` against your `assets/` directory, trying the given
location first and then a `favicons/` subdirectory, so files at either the root
or under `favicons/` are found.

If no favicons are found, Docsy logs a build warning. Suppress it by adding
`ignoreLogs: ['docsy-no-favicons']` to your site configuration.

To create a source image from text, [favicon.io](https://favicon.io) is handy.
For special requirements, override the partial by creating your own
`layouts/_partials/favicons.html`.

[image processing]: https://gohugo.io/content-management/image-processing/

## Add images

### Landing pages

Docsy's [`blocks/cover` shortcode](/docs/content/shortcodes/#blocks-cover) makes
it easy to add cover images (also known as hero images) to landing pages. The
shortcode looks for an image with the word "background" in the name within the
landing page's [page bundle](adding-content/#page-bundles).

For example, the example site's landing page `content/en/_index.md` uses the
image `content/en/featured-background.jpg`, which is in the same directory --
see the [content/en][] folder on GitHub.

[content/en]: https://github.com/google/docsy-example/tree/main/content/en

Use the block's [`height` parameter][] to set the preferred display height of
the cover container (and therefore its image). For a full viewport height, use
`full`, along with the `td-below-navbar` helper class to position the cover
below the navbar:

[`height` parameter]: shortcodes/#blocks

```go-html-template
{{%/* blocks/cover
  title="Welcome to Docsy!"
  image_anchor="top"
  height="full td-below-navbar"
*/%}}
...
{{%/* /blocks/cover */%}}
```

For a shorter image, as in the [example site's About][] page, use one of `min`,
`med`, `max`, or `auto` (the image's natural height):

```go-html-template
{{%/* blocks/cover
  title="About the Docsy Example"
  image_anchor="bottom"
  height="min td-below-navbar"
*/%}}
...
{{%/* /blocks/cover */%}}
```

[example site's About]: <{{% param example_site_url %}}/about/>

### Other pages

To add inline images to other pages, use the
[`imgproc` shortcode](/docs/content/shortcodes/#imgproc). Alternatively, if you
prefer, just use regular Markdown or HTML images and add your image files to
your project's `static` directory. You can find out more about using this
directory in
[Adding static content](/docs/content/adding-content/#adding-static-content).
