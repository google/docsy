---
title: "Best Practices: Technical Documentation with Docsy and Hugo"
linkTitle: "Best Practices"
weight: 9
description: >
  Optional guidance and recommendations about organizing, authoring, and managing your technical documentation.
---

As mentioned in the [About](/about') page, Docsy is a pre-configured theme for the [Hugo](https://gohugo.io/) site 
generator. Therefore, you will eventually reach a point where you need to know a bit more about Hugo. Use this page
to gain insight into the best practices around your content, as well as how to optimize for Hugo. 

## Organizing your content

If you have a look at our [example site](https://goldydocs.netlify.com/about/), you'll see that we've organized 
the Documentation section into a number of subsections, each with some recommendations about what you might put 
in that section.

### Do I need to use this structure?

Absolutely not! The site structure in the Example Site was created to meet the needs of large docsets for large
products with lots of features, potential tasks, and reference elements. For a simpler docset (like this one!),
it's fine to just structure your docs around specific features that your users need to know about.  Even for larger
documentation sets, you may find that the structure isn't useful "as is", or that you don't need to use all the 
section types. 

We do recommend that (as we've done here) you provide at least:

* An **Overview** of the product (either on the docs landing page or a separate Overview page) that tells the user why they should be interested in your project.
* A **Getting Started** page.
* Some **Examples**.

You may also want to create some tasks/how-tos for your project's features. Feel free to copy the [Docsy user guide site](/link/to/eventual/repo) or docs section instead if you like this simpler structure better. 

[Learn more about how Hugo and Docsy use folders and other files to organize your site](/docs/adding-content/content/#organizing-your-documentation).

### Why this structure?

We based the Example Site structure on our own experiences creating (and using) large documentation sets for different types of project and on user research carried out on some of our bigger sites. In user studies we saw that users cared most about and immediately looked for a Get Started or Getting Started section (so they could, well, get started), and some examples to explore and copy, so we made those into prominent top-level doc sections in our site. Users also wanted to find "recipes" that they could easily look up to perform specific tasks and put together to create their own applications or projects, so we suggest that you add this kind of content as Tasks. Other content types such as conceptual docs, reference docs, and end-to-end tutorials are less important for all doc sets, particularly for smaller projects. We emphasize in our example site that these sections are optional.

We hope to improve the Example Site structure further as we learn more about how users interact with technical documentation, particularly for Open Source projects.

## Writing style guide

This guide and the example site just address how to organize your documentation content into pages and sections. For some guidance on how to organize and write the content in each page, we recommend the [Google Developer Documentation Style Guide](https://developers.google.com/style/), particularly the [Style Guide Highlights](https://developers.google.com/style/highlights).

## Hugo guidance and tips

The following include some of the differences you should be aware of when authoring for Docsy and Hugo.

### Content nested within nested lists

Hugo currently uses the [Blackfriday](https://github.com/russross/blackfriday) markdown processor, which can be 
sensitive when it come to content that's deeply nested in a list. If you stick to good markdown practices and 
syntax, you might not come across any of your content that unexpectedly renders poorly. 

Although, you should be aware that [this known issue](https://github.com/russross/blackfriday/issues/329) can surface 
if or when you have multiple authors and other contributors who might mix 'tabs' and 'spaces', or fail to indent properly.
Blackfriday is particularly sentsitive about the markdown syntax for content that is nested within lists (and sub lists).
Another factor might be how GitHub markdown and the editor UI renders list and nested lists as expected, while Blackfriday 
acutaly processes it differently and might render that same content poorly. For example, the count in a numbered list 
might restart, or your nested content within a list is not indented 
(shows as a peer element instead of a nested child element).

**Tip**: [Per the known issue](https://github.com/russross/blackfriday/issues/329#issuecomment-277602856), some
have found that using 4 spaces instead of a 'tab' results in consistent behavior. For example, consider
configuring your local editor to use 4 spaces when the **Tab** key is pressed.

### Linking

Hugo has its own conventions for linking between files and depending on your configuration, some hardcoded relative 
links like `../../peer-folder/sub-file.md` might behave differently. However, switching to a Hugo supported option
might make things easier for you. For example a `{< ref "filename.md" >}` link in Hugo will actually find and 
automatically link to your file named `filename.md`. 
[Learn more about linking](https://gohugo.io/content-management/cross-references/). 
