---
title: "Docsy Shortcodes"
linkTitle: "Docsy Shortcodes"
date: 2017-01-05
weight: 5
description: >
  Use Docsy's Hugo shortcodes to quickly build site pages.
resources:
- src: "**spruce*.jpg"
  params:
    byline: "Photo: Bjørn Erik Pedersen / CC-BY-SA"
---

Rather than writing all your site pages from scratch, Hugo lets you define and use [shortcodes](https://gohugo.io/content-management/shortcodes/). These are reusable snippets of content that you can include in your pages, often using HTML to create effects that are difficult or impossible to do in simple Markdown. Shortcodes can also have parameters that let you, for example, add your own text to a fancy shortcode text box. As well as Hugo's [built-in shortcodes](https://gohugo.io/content-management/shortcodes/), Docsy provides some shortcodes of its own to help you build your pages.

## Shortcode blocks

The theme comes with a set of custom  **Page Block** shortcodes that can be used to compose landing pages, about pages, and similar.

These blocks share some common parameters:

height
: A pre-defined height of the block container. One of `min`, `med`, `max`, `full`, or `auto`. Setting it to `full` will fill the Viewport Height, which can be useful for landing pages.

color
: The block will be assigned a color from the theme palette if not provided, but you can set your own if needed. You can use all of Bootstrap's color names, theme color names or a grayscale shade. Some examples would be `primary`, `white`, `dark`, `warning`, `light`, `success`, `300`, `blue`, `orange`. This will become the **background color** of the block, but text colors will adapt to get proper contrast.

### blocks/cover

The **blocks/cover** shortcode creates a landing page type of block that fills the top of the page.

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
> Using the bracket styled shortcode delimiter, `>}}`, tells Hugo that the inner content is HTML/plain text and needs no further processing. Changing the delimiter to `%}}` means Hugo will treat the content as Markdown. You can use both styles in your pages.
{{% /alert %}}


| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| title | | The main display title for the block. | 
| image_anchor | |
| height | | See above.
| color | | See above. 
| byline | Byline text on featured image. |


To set the background image, place an image with the word "background" in the name in the page's [Page Bundle](/docs/adding-content/content/#page-bundles). For example, in our the example site the background image in the home page's cover block is [`featured-background.jpg`](https://github.com/google/docsy-example/tree/master/content/en), in the same directory.

{{% alert title="Tip" %}}
If you also include the word **featured** in the image name, e.g. `my-featured-background.jpg`, it will also be used as the Twitter Card image when shared.
{{% /alert %}}

For available icons, see [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free).

### blocks/lead

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

### blocks/section

The **blocks/section** shortcode is meant as a general-purpose content container. It comes in two "flavors", one for general content and one with styling more suitable for wrapping a horizontal row of feature sections.

The example below shows a section wrapping 3 feature sections.


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
| type  | | Specify "section" if you want a general container,  omit this parameter if you want this section to contain a horizontal row of features.

### blocks/feature

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


### blocks/link-down

The **blocks/link-down** shortcode creates a navigation link down to the next section. It's meant to be used in combination with the other blocks shortcodes.

```go-html-template

<div class="mx-auto mt-5">
	{{</* blocks/link-down color="info" */>}}
</div>
```

| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| color | info | See above. 

## Shortcode helpers

###  alert

The **alert** shortcode creates an alert block that can be used to display notices or warnings.

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

###  pageinfo

The **pageinfo** shortcode creates a text box that you can use to add banner information for a page: for example, letting users know that the page contains placeholder content, that the content is deprecated, or that it documents a beta feature.

```go-html-template
{{%/* pageinfo color="primary" */%}}
This is placeholder content.
{{%/* /pageinfo */%}}

```

Renders to:

{{% pageinfo color="primary" %}}
This is placeholder content
{{% /pageinfo %}}

| Parameter        | Default    | Description  |
| ---------------- |------------| ------------|
| color | primary | One of the theme colors, eg `primary`, `info`, `warning` etc.


###  imgproc

The **imgproc** shortcode finds an image in the current [Page Bundle](/docs/adding-content/content/#page-bundles) and scales it given a set of processing instructions.


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

### swaggerui

The `swaggerui` shortcode can be placed anywhere inside a page with the [`swagger` layout](https://github.com/google/docsy/tree/master/layouts/swagger); it renders [Swagger UI](https://swagger.io/tools/swagger-ui/) using any OpenAPI YAML or JSON file as source. This can be hosted anywhere you like, for example in your site's root [`/static` folder](/docs/adding-content/content/#adding-static-content).

```yaml
---
title: "Pet Store API"
type: swagger
weight: 1
description: Reference for the Pet Store API
---

{{</* swaggerui src="/openapi/petstore.yaml" */>}}
```

You can customize Swagger UI's look and feel by overriding Swagger's CSS or by editing and compiling a [Swagger UI dist](https://github.com/swagger-api/swagger-ui) yourself and replace `themes/docsy/static/css/swagger-ui.css`.

## Tabbed panes

Sometimes its very useful to have tabbed panes at hand when authoring content, especially when documenting software libraries that are targeting different programming languages or different environments. As an example, the table below shows how to code `Hello world!` in different programming languages. Certainly most of you will know the famous `Hello world` program one usually writes when learning a new programming language:

{{< tabpane  paneID="1" tabCount="10" headerTab1="C" headerTab2="C++" headerTab3="Go" headerTab4="Java" headerTab5="Kotlin" headerTab6="Lua" headerTab7="PHP" headerTab8="Python" headerTab9="Rust" headerTab10="Scala" content="code" >}}
  {{< tab ID="1" >}}
```C
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  puts("Hello World!");
  return EXIT_SUCCESS;
}
```
{{< /tab >}}
{{< tab ID="2" >}}
```C++
#include <iostream>

int main()
{
  std::cout << "Hello World!" << std::endl;
}
```
{{< /tab >}}
{{< tab ID="3" >}}
```Go
package main
import "fmt"
func main() {
  fmt.Printf("Hello World!\n")
}
```
{{< /tab >}}
{{< tab ID="4" >}}
```Java
class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}
```
{{< /tab >}}
{{< tab ID="5" >}}
```Kotlin
fun main(args : Array<String>) {
    println("Hello, world!")
}
```
{{< /tab >}}
{{< tab ID="6" >}}
```Lua
fun main(args : Array<String>) {
    println("Hello, world!")
}
```
{{< /tab >}}
{{< tab ID="7" >}}
```PHP
<?php
  // Hello world in PHP
  echo 'Hello World!';
?>
```
{{< /tab >}}
{{< tab ID="8" >}}
```Python
print("Hello World!")
```
{{< /tab >}}
{{< tab ID="9" >}}
```Ruby
puts "Hello World!"
```
{{< /tab >}}
{{< tab ID="10" >}}
```Scala
object HelloWorld extends App {
  println("Hello world!")
}
```
{{< /tab >}}
{{< /tabpane >}}

Fortunately, the Docsy template provides two shortcodes to author such tabbed panes with ease. To get familiar with these shortcodes, have a look at the following code block, which renders to a pane with three tabs:

```go-html-template
{{</* tabpane  paneID="2" tabCount="3" headerTab1="English" headerTab2="German" headerTab3="Swahili" */>}}
  {{</* tab ID="1" */>}}
    Welcome!
  {{</* /tab */>}}
  {{</* tab ID="2" */>}}
    Herzlich willkommen!
  {{</* /tab */>}}
  {{</* tab ID="3" */>}}
    Karibu sana!
  {{</* /tab */>}}
{{</* /tabpane */>}}
```

This code translates to the following tabbed pane, showing a `Welcome!` greeting in English, German or Swahili:

{{< tabpane  paneID="2" tabCount="3" headerTab1="English" headerTab2="German" headerTab3="Swahili" >}}
  {{< tab ID="1" >}}
Welcome!
  {{< /tab >}}
{{< tab ID="2" >}}
Herzlich willkommen!
{{< /tab >}}
{{< tab ID="3" >}}
Karibu sana!
{{< /tab >}}
{{< /tabpane >}}

### Shortcodes explanation

Tabbed panes are implemented using two shortcodes: the `tabpane` shortcode, which is the container element for the tabs, whereby each of the nested tabs it represented by a single `tab` shortcode.

#### Shortcode `tabpane`

The `tabpane` shortcode is the container element of the tabbed pane. This shortcode helds various attributes, listed in the table below:

| Attribute  | Type       | mandatory  | Description |
| ---------- | ---------- | ---------- | ----------- |
| paneID     | Integer    | yes        | This attribute is used to assign a **unique** number to the tab pane, allowing you to have multiple tabbed panes on the same page. Please observe that on a given page **all paneIDs must be different**, otherwise you will run into trouble. |
| tabCount   | Integer    | yes        | Set this attribute to the **amount of tabs** you would like to place on the tabbed pane. In the above example with tabs for English, German and Swahili, this attribute needs to be set to **3**. |
| headerTab1 <br /> … <br /> headerTabN | String     | yes | The *headerTab1* to *headerTabN* attributes hold the **header titles** for the tabs to be placed on the tabbed pane. Make sure that you start with *headerTab1* and that the number of *headerTabX* attributes specified equals the number given as *tabCount*. In the above example, there are **three** nested tabs, so **headerTab1**, **headerTab2** and **headerTab3** were specified. |
| content    | String     | no         | This optional attribute is needed only if you want to place **code blocks** on your tabs. In this case, specify `content="code"` in order to assure the proper alignment of the gray rectangle representing the background of the code block. If you omit this attribute, unwanted margin space is applied to the code block. |

#### Shortcode `tab`

The various `tab` shortcodes inside the container element `tabpane` represent the tabs you would like to show. Each `tab` shortcode has to carry its own numerical `ID` attribute. The first `tab` shortcode should carry the numerical ID **1**, the ID has to be incremented by one for each subsequent `tab` shortcode.  Please observe that on a given page **all IDs** assigned to `tab` shortcodes **must be different**, otherwise you will run into trouble.

### Troubleshooting 

#### One or multiple tabs are not being displayed properly

- Make sure **tabCount** is equal to the total amount of `tab` shortcodes you have. 
- Make sure **headerTabX** exists for each `tab` shortcode in the `tabpane` shortcode. 
- Make sure that the **headerTabX** of your nested `tab` shortcodes are in sequential order. 

#### Multiple tabbed panes are changing with a single click

- Make sure each tabbed pane group has a unique **paneID**. 
