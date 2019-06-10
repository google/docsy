---
title: "Guidance and tips for authoring in Docsy"
linkTitle: "Docsy guidance and tips"
weight: 9
description: >
  Optional guidance about authoring Docsy and Hugo based website content.
---

As mentioned in the [About](/about') page, Docsy is a pre-configured theme for the [Hugo](https://gohugo.io/) static site 
generator. If you're not already familiar with working with Hugo and, in particular, its version of Markdown, this page provides some useful tips and potential gotchas for adding and editing content for your site.

### Nested lists

Hugo currently uses the [Blackfriday](https://github.com/russross/blackfriday) Markdown processor, which can be 
sensitive when it come to content that's deeply nested in a list. In particular be aware that
[this known issue](https://github.com/russross/blackfriday/issues/329) can surface if or when you have multiple authors and
other contributors who might mix 'tabs' and 'spaces' when indenting lists, or fail to indent properly.

An additional factor here is that because GitHub uses a different Markdown processor, GitHub markdown and the editor UI may
render some nested lists as expected, while Blackfriday might render that same content poorly. For example, the count in a
numbered list might restart, or your nested content within a list is not indented 
(shows as a peer element instead of a nested child element). You may want to recommend in your contribution guidelines
([as we do](/docs/contribution-guidelines/#contributing-to-these-docs)) that contributors preview their content with Hugo
(or use Netlify's preview feature for PRs if that's your chosen deployment tool) to ensure their content renders correctly
with Blackfriday.

{{% alert title="Tip" %}}
[Per comments on the known issue](https://github.com/russross/blackfriday/issues/329#issuecomment-277602856), some
users have found that using 4 spaces instead of a 'tab' results in consistent behavior. For example, consider
configuring your local editor to use 4 spaces when the **Tab** key is pressed.
{{% /alert %}}

### Linking

Hugo has its own conventions for linking between files and depending on your configuration, some hardcoded relative 
links like `../../peer-folder/sub-file.md` might behave differently. However, switching to a Hugo supported option
might make things easier for you. For example a `{< ref "filename.md" >}` link in Hugo will actually find and 
automatically link to your file named `filename.md`. 
[Learn more about linking](https://gohugo.io/content-management/cross-references/). 
