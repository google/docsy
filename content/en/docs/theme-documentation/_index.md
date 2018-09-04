
---
title: "Theme User Guide"
linkTitle: "Theme Docs"
weight: 2
date: 2018-07-30
description: >
  This page describes how to use this theme: How to install it, how to configure it, and the different components it contains.
resources:
- src: "**spruce*.jpg"
  params:
    byline: "Photo: Bjørn Erik Pedersen / CC-BY-SA"
---

## Install Theme

You need a [recent version](https://github.com/gohugoio/hugo/releases) of Hugo to run this project (if you install from the release page, make sure to get the `extended` Hugo version). Can be isntalled via Brew if you're running MacOs.

```bash
cd <your-hugo-project>/themes
git submodule add TODO(bep) 
git submodule update --init --recursive
```

If you want to do stylesheet changes, you will also need `PostCSS` to create the final assets:

```
npm install -D --save autoprefixer
npm install -D --save postcss-cli
```

You can also install these tools globally on your computer:

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

For Hugo documentation, see [gohugo.io](https://gohugo.io/)

## Configure Site

See the examples with comments in `config.toml` in this project for how to add community links, configure Google Analytics etc.

## Content Sections

The theme comes with templates for the top level sections `docs` and `blog`, and a default landing page type of template for any other section.

### RSS Feeds

Hugo will, by default, create an RSS feed for the home age and any section. For the main RSS feed you can control which sections to include by setting a site param in your `config.toml`. This is the default configuration:

```toml
rss_sections = ["blog"]
```

## Configure Navigation

### Top Level Menu

Add a page or section to the top level menu by adding it to the `main` menu in either `config.toml` or in page front matter. It is ordered by its weight:

```yaml
menu:
  main:
    weight: 20
```

### Section Menu

The section menu, as shown in the left side of the `docs` section, is automatically built from the content tree. It is ordered by page or section `weight` (the `date` if `weight` is not set).

To hide a page or section from the menu, set `toc_hide: true` in front matter.

By default, the section menu will show the current section fully expanded all the way down. This may make it too big for bigger sites. Try setting site param `ui.sidebar_menu_compact = true` in `config.toml`.

### Disable Breadcrumb

To disable breadcrumb navigation, set site param `ui.breadcrumb_disable = true` in `config.toml`.

## Change the Look and Feel

### Color Palette etc.

SCSS variable project overrides can be added to `assets/scss/_variables_project.scss`. A simple example changing the primary and secondary color to two shades of purple:

```scss
$primary: #390040;
$secondary: #A23B72;
```

* See `assets/scss/_variables.scss` in the theme for color variables etc. that can be set to change the look and feel.
* Also see available variables in Bootstrap 4: https://getbootstrap.com/docs/4.0/getting-started/theming/ and https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

The theme has features suchs as rounded corners and gradient backgrounds enabled by default. These can be turned off:

```scss
$enable-gradients: true;
$enable-rounded: true;
$enable-shadows: true;
```

{{% alert title="Tip" %}}
PostCSS (autoprefixing of CSS browser-prefixes) is not enabled when running in server mode (it is a little slow), so Chrome is the recommended choice for development.
{{% /alert %}}

Also note that any SCSS import will try the project before the theme, so you can -- as one example -- create your own `_assets/scss/_content.scss` and get full control over how your Markdown content is styled.

### Fonts

The theme uses [Open Sans](https://fonts.google.com/specimen/Open+Sans) as its primary font. To disable Google Fonts and use a system font, set this SCSS variable:

```scss
$td-enable-google-fonts: false;
```

To configure another Google Font:

```scss
$google_font_name: "Open Sans";
$google_font_family: "Open+Sans:300,300i,400,400i,700,700i";
```

Note that if you decide to go with a font with different weights (in the built-in configuration this is `300` (light), `400` (medium) and `700` (bold)), you also need to adjust the weight related variables, i.e. variables starting with `$font-weight-`.


## Custom Shortcodes

### Shortcode Blocks

The theme comes with a set of custom  **Page Blocks** as [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/) that can be used to compose landing pages, about pages and similar.

These blocks share some common parameters:

height
: A pre-defined height of the block container. One of `min`, `med`, `max`, `full`, or `auto`. Setting it to `full` will fill the Viewport Height, which can be useful for landing pages.

color
: The block will be assigned a color from the theme palette if not provided, but you can set your own if needed. You can use all of Bootstrap's color names, theme color names or a grayscale shade. Some examples would be `primary`, `white`, `dark`, `warning`, `light`, `success`, `300`, `blue`, `orange`. This will become the **bakground color** of the block, but text colors will adapt to get proper contrast.

#### blocks/cover

The **blocks/cover** shortcode is meant to create a landing page type of block that fills the top of the page.

```html
{{</* blocks/cover title="Welcome!" image_anchor="center" height="full" color="primary" */>}}
<div class="mx-auto">
	<a class="btn btn-lg btn-primary mr-3 mb-4" href="{{</* relref "/docs" */>}}">
		Learn More <i class="fas fa-arrow-alt-circle-right ml-2"></i>
	</a>
	<a class="btn btn-lg btn-secondary mr-3 mb-4" href="https://example.org">
		Download <i class="fab fa-github ml-2 "></i>
	</a>
	<p class="lead mt-5">This program is now available in <a href="#">AppStore!</a></p>
	<div class="mx-auto mt-5">
		{{</* blocks/link-down color="info" */>}}
	</div>
</div>
{{</* /blocks/cover */>}}
```

Note that the relevant shortcode parameters above will have sensible defaults, but is included here for completeness.

{{% alert title="Hugo Tip" %}}
> Using the bracket styled shortcode delimiter, `>}}`, tells Hugo that the inner content is HTML/plain text and needs no further processing. Changing it to `%}}` will treat it as Markdown. These can be mixed.
{{% /alert %}}


| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| title | | The main display title for the block. | 
| image_anchor | |
| height | | See above.
| color | | See above. 


To set the background image, place an image with the word "background" in the name inside the [Page Bundle](https://gohugo.io/content-management/page-bundles/).

{{% alert title="Tip" %}}
If you also include the word **featured** in the image name, e.g. `my-featured-background.jpg`, it will also be used as the Twitter Card image when shared.
{{% /alert %}}

For available icons, see [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free).

#### blocks/lead

The **blocks/lead** block shortcode is a simple lead/title block with centred text and an arrow down pointing to the next section.

```go-html-template
{{%/* blocks/lead color="dark" */%}}
TechOS is the OS of the future. 

Runs on **bare metal** in the **cloud**!
{{%/* /blocks/lead */%}}
```

| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| height | | See above.
| color | | See above. 

#### blocks/section

The **blocks/section** shortcode is meant as a general-purpose content container. The example below shows it wrapping 3 feature sections.


```go-html-template
{{</* blocks/section color="dark" */>}}
{{%/* blocks/feature icon="fa-lightbulb" title="Fastest OS **on the planet**!" */%}}
The new **TechOS** operating system is an open source project. It is a new project, but with grand ambitions.
Please follow this space for updates!
{{%/* /blocks/feature */%}}
{{%/* blocks/feature icon="fab fa-github" title="Contributions welcome!" url="https://github.com/gohugoio/hugo" */%}}
We do a [Pull Request](https://github.com/gohugoio/hugo/pulls) contributions workflow on **GitHub**. New users are always welcome!
{{%/* /blocks/feature */%}}
{{%/* blocks/feature icon="fab fa-twitter" title="Follow us on Twitter!" url="https://twitter.com/GoHugoIO" */%}}
For announcement of latest features etc.
{{%/* /blocks/feature */%}}
{{</* /blocks/section */>}}
```

| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| height | | See above.
| color | | See above. 


#### blocks/feature

```go-html-template

{{%/* blocks/feature icon="fab fa-github" title="Contributions welcome!" url="https://github.com/gohugoio/hugo" */%}}
We do a [Pull Request](https://github.com/gohugoio/hugo/pulls) contributions workflow on **GitHub**. New users are always welcome!
{{%/* /blocks/feature */%}}

```

| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| title | | The title to use.
| url | | The URL to link to.
| icon | | The icon class to use.


#### blocks/link-down

The **blocks/link-down** shortcode creates a navigation link down to the next section. It's meant to be used in combination with the other blocks shortcodes.

```go-html-template

<div class="mx-auto mt-5">
	{{</* blocks/link-down color="info" */>}}
</div>
```

| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| color | info | See above. 

### Shortcode Helpers

####  alert

THe **alert** shortcode creates an alert block that can be used to display notices or warnings.

```go-html-template
{{%/* alert title="Warning" color="warning" */%}}
This is a warning.
{{%/* /alert */%}}

```

Renders to:

{{% alert title="Warning" color="warning" %}}
This is a warning.
{{% /alert %}}

| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| color | primary | One of the theme colors, eg `primary`, `info`, `warning` etc.


####  imgproc

The **imgproc** shortcode finds an image in the current [Page Bundle](https://gohugo.io/content-management/page-bundles/) and scales it given a set of processing instructions.


```go-html-template
{{</* imgproc spruce Fill "400x450" */>}}
Norway Spruce Picea abies shoot with foliage buds.
{{</* /imgproc */>}}
```

{{< imgproc spruce Fill "400x450" >}}
Norway Spruce Picea abies shoot with foliage buds.
{{< /imgproc >}}

The example above has also a byline with photo attribution added. When using illustrations with a free license from [WikiMedia](https://commons.wikimedia.org/) and simlilar, you will in most situations need a way to attribute the author or licensor. You can add metadata to your page resources in the page front matter. The `byline` param is used by convention in this theme:


```yaml
resources:
- src: "**spruce*.jpg"
  params:
    byline: "Photo: Bjørn Erik Pedersen / CC-BY-SA"
```


| Parameter        | Description  |
| ----------------: |------------|
| 1 | The image filename or enough of it to identify it (we do Glob matching)
| 2 | Command. One of `Fit`, `Resize` or `Fill`. See [Image Processing Methods](https://gohugo.io/content-management/image-processing/#image-processing-methods).
| 3 | Processing options, e.g. `400x450`. See [Image Processing Options](https://gohugo.io/content-management/image-processing/#image-processing-methods).


## CSS Utilitiies

For documentation of available CSS utility classes, see the [Bootstrap Documentation](https://getbootstrap.com/). This theme adds very little on its own in this area. But we have added some some color state CSS classes that can be useful in a dynamic context (when you don't know if the `primary` color is dark or light or you receive the color code as a shortcode parameter):

* `.-bg-<color>`
* `.-text-<color>`

The value of `<color>` can be any of the color names, `primary`, `white`, `dark`, `warning`, `light`, `success`, `300`, `blue`, `orange` etc.

For `.-bg-<color>`, the text colors will be adjusted to get proper contrast:

```html
<div class="-bg-primary p-3 display-4">Background: Primary</div>
<div class="-bg-200 p-3 display-4">Background: Gray 200</div>
```

<div class="-bg-primary p-3 display-4 w-75">Background: Primary</div>
<div class="-bg-200 p-3 display-4 mb-5 w-50 w-75">Background: Gray 200</div>

`.-text-<color>` sets the text color only:

```html
<div class="-text-blue pt-3 display-4">Text: Blue</div>
```

<div class="-text-blue pt-3 display-4">Text: Blue</div>


## Multilingual

### Navigation

If you configure more than one language in `config.toml, a language selector will be added to the top-level menu. It will take you to the translated version of the current page, or the home page for the given language.

### i18n bundles

All UI strings (text for buttons etc.) are bundled inside `/i18n` in the theme. Translations (e.g. create a copy of `en.toml` to `jp.toml`) should be done in the theme, so it can be reused by others. Additional strings or overridden values can be added to the project's `/i18n` folder.

{{% alert title="Hugo Tip" %}}
Run `hugo server --i18n-warnings` when doing translation work, as it will give you warnings on what strings are missing.
{{% /alert %}}

### Content

For `content`, each language can have its own language configuration and configured each its own content root, e.g. `content/en`. See the [Hugo Docs](https://gohugo.io/content-management/multilingual) on this for more information.

## Add your logo

Add it to `assets/icons/logo.svg` in your project.

## Add your favicons

The easiest is to create a set of favicons via http://cthedot.de/icongen and put them inside `static/favicons` in your Hugo project.

If you have special requirements, you can create your own `layouts/partials/favicons.html` with your links.

## Configure Search

1. Add you Google Custom Search Engine ID to the site params in `config.toml`. You can add different values per language if needed.
2. Add a content file in `content/en/search.md` (and one per other languages if needed). It only needs a title and `layout: search.


## Customize Templates

### Add code to head or before body end

If you need to add some code (CSS import or similar) to the `head` section on every page, add a partial to your project:

```
layouts/partials/hooks/head-end.html
```

And add the code you need in that file.

Similar, if you want to add some code right before the `body` end:

```
layouts/partials/hooks/body-end.html
```

## Images used on this site

Images used as background images in this example site are in the [public domain](https://commons.wikimedia.org/wiki/User:Bep/gallery#Wed_Aug_01_16:16:51_CEST_2018) and can be used freely.



	