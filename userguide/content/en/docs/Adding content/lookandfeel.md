---
title: "Look and Feel"
linkTitle: "Look and Feel"
date: 2017-01-05
weight: 2
description: >
  Customize colors, fonts, and more for your site.
---

By default, a site using Docsy has the theme's default fonts, colors, and general look and feel. However, if you want your own color scheme (and you probably will!) you can very easily override the theme defaults with your own project-specific values - Hugo will look in your project files first when looking for information to build your site. Also because Docsy uses Bootstrap 4 and SCSS for styling, you can override just single values in its special SCSS project variables file, or do more serious customization by creating your own versions of entire SCSS files.

## Color palette and other styles 

To quickly change your site's colors, add SCSS variable project overrides to `assets/scss/_variables_project.scss`. A simple example changing the primary and secondary color to two shades of purple:

```scss
$primary: #390040;
$secondary: #A23B72;
```

* See `assets/scss/_variables.scss` in the theme for color variables etc. that can be set to change the look and feel.
* Also see available variables in Bootstrap 4: https://getbootstrap.com/docs/4.0/getting-started/theming/ and https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

The theme has features such as rounded corners and gradient backgrounds enabled by default. These can also be toggled in your project variables file:

```scss
$enable-gradients: true;
$enable-rounded: true;
$enable-shadows: true;
```

{{% alert title="Tip" %}}
PostCSS (autoprefixing of CSS browser-prefixes) is not enabled when running in server mode (it is a little slow), so Chrome is the recommended choice for development.
{{% /alert %}}

Also note that any SCSS import will try the project before the theme, so you can -- as one example -- create your own `_assets/scss/_content.scss` and get full control over how your Markdown content is styled.

## Fonts

The theme uses [Open Sans](https://fonts.google.com/specimen/Open+Sans) as its primary font. To disable Google Fonts and use a system font, set this SCSS variable in `assets/scss/_variables_project.scss`:

```scss
$td-enable-google-fonts: false;
```

To configure another Google Font:

```scss
$google_font_name: "Open Sans";
$google_font_family: "Open+Sans:300,300i,400,400i,700,700i";
```

Note that if you decide to go with a font with different weights (in the built-in configuration this is `300` (light), `400` (medium) and `700` (bold)), you also need to adjust the weight related variables, i.e. variables starting with `$font-weight-`.

## CSS utilities

For documentation of available CSS utility classes, see the [Bootstrap Documentation](https://getbootstrap.com/). This theme adds very little on its own in this area. However, we have added some color state CSS classes that can be useful in a dynamic context:

* `.-bg-<color>`
* `.-text-<color>`

You can use these classes, for example, to style your text in an appropriate color when you don't know if the `primary` color is dark or light, to ensure proper color contrast. They are also useful when you receive the color code as a [shortcode](/docs/adding-content/shortcodes/) parameter.

The value of `<color>` can be any of the color names, `primary`, `white`, `dark`, `warning`, `light`, `success`, `300`, `blue`, `orange` etc.

When you use `.-bg-<color>`, the text colors will be adjusted to get proper contrast:

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

## Code highlighting with Chroma

With Hugo version 0.60 and higher, you can choose from a range of code block highlight and colour styles using [Chroma](https://github.com/alecthomas/chroma) that are applied to your fenced code blocks by default. If you copied a recent `config.toml` your site uses Tango (like this site), otherwise the Hugo default is Monokai. You can switch to any of the [available Chroma styles](https://xyproto.github.io/splash/docs/all.html) (including our Docsy default Tango) using your `config.toml`:

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.highlight]
      # See a complete list of available styles at https://xyproto.github.io/splash/docs/all.html
      style = "tango"
 ```

By default code highlighting styles are not applied to code blocks without a specified language, instead you get Docsy's default style of grey with black text. If you would like the code highlighting style to apply to all code blocks, even without a language, uncomment or add the following line under `[markup.highlight]` in your `config.toml`.

```toml
# Uncomment if you want your chosen highlight style used for code blocks without a specified language
guessSyntax = "true"
```

You can find out more about code highlighting in Hugo with Chroma in [Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/).

## Code highlighting with Prism

Optionally, you can enable Prism syntax highlighting in your `config.toml`:

```toml
# Enable syntax highlighting and copy buttons on code blocks with Prism
prism_syntax_highlighting = true
```

When this option is enabled your site uses [Prism](https://prismjs.com/index.html) instead of Chroma for code block highlighting.

Prism is a popular open source syntax highlighter which supports over 200 [languages](https://prismjs.com/index.html#supported-languages) and various [plugins](https://prismjs.com/index.html#plugins).

Docsy includes JavaScript and CSS files for a basic Prism configuration, which supports:

* Code blocks styled with the Prism `Default` theme
* Copy to clipboard buttons on code blocks
* Syntax highlighting for a number of common languages, as specified in the following Prism download link:

```none
    https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+c+csharp+cpp+go+java+markdown+python+scss+sql+toml+yaml&plugins=toolbar+copy-to-clipboard    
```

### Code blocks with no language

By default Prism code highlighting styles are not applied to code blocks without a specified language, instead you get Docsy's default style of grey with black text. To apply Prism styling to code blocks with no language or a language not supported by Prism, specify `none` as the language after your triple backticks.

### Extending Prism for additional languages or plugins

If the included Prism configuration is not sufficient for your requirements, and you want to use additional languages or plugins you can replace the included files with your own.

1. Download your own Prism JS and CSS files from <https://prismjs.com/download.html>
2. Replace the included Prism JS and CSS with the files you downloaded:
    * Copy the Javascript file to `static/js/prism.js`
    * Copy the CSS file to `static/css/prism.css`

## Diagrams with Mermaid

[Mermaid](https://mermaid-js.github.io) is a Javascript library for rendering simple text definitions to useful diagrams in the browser.  It can generate a variety of different diagram types, including flowcharts, sequence diagrams, class diagrams, state diagrams, ER diagrams, user journey diagrams, Gantt charts and pie charts.

With Mermaid support enabled in Docsy, you can include the text definition of a Mermaid diagram inside a code block, and it will automatically be rendered by the browser as soon as the page loads.

The great advantage of this is anyone who can edit the page can now edit the diagram - no more hunting for the original tools and version to make a new edit.

For example, the following defines a simple flowchart:

````
```mermaid
graph LR
  Start --> Need{"Do I need diagrams"}
  Need -- No --> Off["Set params.mermaid.enable = false"]
  Need -- Yes --> HaveFun["Great!  Enjoy!"]
```
````

Automatically renders to:

```mermaid
graph LR
  Start --> Need{"Do I need diagrams"}
  Need -- No --> Off["Set params.mermaid.enable = false"]
  Need -- Yes --> HaveFun["Great!  Enjoy!"]

```

To enable/disable Mermaid, update `config.toml`:

```toml
[params.mermaid]
enable = true
```

You can also update settings for Mermaid, such as themes, padding, etc:

```toml
[params.mermaid]
enable = true
theme = "neutral"

[params.mermaid.flowchart]
diagramPadding = 6
```

See the [Mermaid documentation](https://mermaid-js.github.io/mermaid/getting-started/Setup.html#mermaidapi-configuration-defaults) for a list of defaults that can be overriden.

Settings can also be overridden on a per-diagram basis by making use of the `%%init%%` header at the start of the diagram definition.  See the [Mermaid theming documentation](https://mermaid-js.github.io/mermaid/getting-started/theming.html#themes-at-the-local-or-current-level).

## Customizing templates

### Add code to head or before body end

If you need to add some code (CSS import or similar) to the `head` section on every page, add a partial to your project:

```
layouts/partials/hooks/head-end.html
```

And add the code you need in that file. Your partial code is automatically included at the end of the theme partial [head.html](https://github.com/google/docsy/blob/master/layouts/partials/head.html) (the [theme version](https://github.com/google/docsy/blob/master/layouts/partials/head.html) of `head-end.html` is empty):


Similar, if you want to add some code right before the `body` end, create your own version of the following file:

```
layouts/partials/hooks/body-end.html
```

Any code in this file is included automatically at the end of the theme partial [`scripts.html`](https://github.com/google/docsy/blob/master/layouts/partials/head.html).

Both `head.html` and `scripts.html` are then used to build Docsy's [base page layout](https://github.com/google/docsy/blob/master/layouts/_default/baseof.html), which is used by all the other page templates:

```html
<!doctype html>
<html lang="{{ .Site.Language.Lang }}" class="no-js">
  <head>
    {{ partial "head.html" . }}
  </head>
  <body class="td-{{ .Kind }}">
    <header>
      {{ partial "navbar.html" . }}
    </header>
    <div class="container-fluid td-default td-outer">
      <main role="main" class="td-main">
        {{ block "main" . }}{{ end }}
      </main>
      {{ partial "footer.html" . }}
    </div>
    {{ partialCached "scripts.html" . }}
  </body>
</html>
```

