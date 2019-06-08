---
title: "Guidance and tips for authoring in Docsy"
linkTitle: "Docsy guidance and tips"
weight: 9
description: >
  Optional guidance about authoring Docsy and Hugo based website content.
---

The following include some of the differences you should be aware of when authoring content for 
your Docsy and Hugo base website.

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
