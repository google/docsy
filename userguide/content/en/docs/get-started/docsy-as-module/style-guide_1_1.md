---
title: "Handbook Style Guide"
aliases:
- /handbook/style-guide/
---

## Introduction

GitLab's general communications practices are detailed at [GitLab Communication](/handbook/communication/), but beyond those we do have some channel-specific guidance available. This page is for Handbook-specific guidance that does not necessarily apply to the company overall or to other specific channels, such as [GitLab Documentation](https://docs.gitlab.com/) or the [GitLab Blog](https://about.gitlab.com/blog/).

In the absence of Handbook-specific guidance, you can't go wrong by following GitLab's [Writing Style Guidelines](/handbook/communication/#writing-style-guidelines) and [Documentation Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/). The GitLab Documentation site also offers a list of [topic-specific style guides](https://docs.gitlab.com/ee/development/contributing/style_guides.html). If something is not covered in any of those, there's also the [marketing site content style guide](/handbook/marketing/brand-and-product-marketing/brand/content-style-guide.md).

So what is style? Is it aesthetics? Information architecture? Interaction design? Technical implementation conventions? It can be all of these things, but we'll start this style guide with some information about common elements and tasks.

## Headings

Content headings should be descriptive enough to suggest their corresponding content when they or corresponding fragment identifiers are seen out of context.

Content headings should be second-level headings and below. First-level headings are reserved for page titles.

Fragment identifiers are automatically generated from most headings. Keep that in mind when choosing your headings.

## Capitalization

### Use sentence case for titles and headings

Handbook content currently uses both `Title Case` and `Sentence case` for titles and headlines. Moving forward, we recommend using [sentence case](https://www.thoughtco.com/sentence-case-titles-1691944), which is the conventional way of using capital letters in a sentence or capitalizing only the first word and any proper nouns. This aligns the handbook with our [pajamas design system](https://design.gitlab.com/content/punctuation/).

### Capitalize brand names

Brand names such as "Apple" and "Slack" are proper nouns, so they should be capitalized, unless a brand name uses unusual capitalization, as in "eBay" and "VMware". If that is the case, then follow the brand's convention.

### Use kebab case for file and directory names

For easy reading, typing, and consistency use kebab case—lowercase letters with hyphens between words—for all file and directory names. This holds unless you have a specific reason for doing otherwise (e.g., due to a programming convention where underscores are preferred or because a file is primarily intended for download and you want it to have a certain name when downloaded). An example of kebab case would be `descriptive-variable-name`.

See [URL Guidelines](#url-guidelines) for more information about best practices for URLs.

## Links

### Link guidelines

*In the [GitLab Unfiltered video](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq7QUX-Ux5fOunQotqJbECc), GitLab's [Shane R.](https://gitlab.com/shanerice) explains the importance of cross-linking and re-using links on `about.gitlab.com` to build authority and contribute to a single source of truth.*

Links from the Handbook should conform to a few general guidelines:

- Linked text should describe the content the link leads to. A page title or description is usually a good choice and preferable to something like "see the information here".
- Link URLs should not result in unnecessary redirection. HTTP redirection (e.g., via [redirect.rb](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/lib/redirect.rb) and [redirects.yml](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/data/redirects.yml)) can be helpful, especially for handling external links and bookmarks, but it is better for link and bookmark reliability (and sometimes loading speed) to skip redirection whenever possible.
- Link URLs should not specify default file names or extensions unless excluding them would result in redirection. Overly specific link URLs are more likely to break in response to future changes.
- Same-site links should use root-relative URLs, not absolute URLs or document-relative URLs.
- Same-page URLs should just be fragment identifiers (e.g., `#link-guidelines`).
- For SEO purposes, try to have links open in a new tab. You can do this by adding the `{:target="_blank"}` link attribute to the end of an inline link. Ex: `[Text to display](link){:target="_blank"}`

See [Understanding Absolute and Relative URLs](#understanding-absolute-and-relative-urls) for more information about each type of URL.

## URLs

### URL guidelines

In general, Handbook URLs should describe their content and be as clean and easy to remember as possible. Unless there is a good reason for formatting URLs otherwise (e.g., language conventions or technical limitations), they should be entirely lower case. Also, any two words should be separated by a single hyphen, and ampersands should be replaced by "and", *not* an additional hyphen.

Files and directories should *never* be given names that differ from the names of other files or directories in the same location only by letter case. Case-sensitive file systems allow this kind of naming, but our source code is shared with people using various different file systems, including case-*insensitive* file systems, in which the mere existence of such similarly named files in a repository can cause problems. For example, new macOS systems use case-insensitive APFS by default and in those systems Git can end up alternately showing two differently-capitalized files as modified when no changes have actually been made to either.

### Understanding absolute and relative URLs

When you’re adding or editing links in the Handbook (or really, *anywhere* on the marketing site) please keep in mind that root-relative URLs are preferable for our same-site links.

Absolute URLs are the ones that look like this:

```text
https://handbook.gitlab.com/handbook/
```

With absolute URLs, links always load the *live* version of the site—even when run from a development, testing, or staging context. They're great for sharing URLs via Slack, issue and merge request comments, email, and social media. However, they are *not* good for same-site links.

Document-relative URLs are the ones that look like this:

```text
../product/technical-writing/
```

With document-relative URLs, links can break when either a linking document or a linked document is moved separately from another document. These kinds of URLs can be great for maintaining relationships between documents in different contexts, but links that use this kind of URL are best managed by automated systems that won't forget to update them.

Root-relative URLs, *the kind we prefer for use in the Handbook*, look like this:

```text
/handbook/communication/
```

With root-relative URLs same-site links can work properly during local development and testing, during automated tests and staging, and on the live site. And unlike with links that use document-relative URLs, moving a document won't break its same-site links to other pages that do not move with it.

## Related Resources

- [GitLab Communication](/handbook/communication/)
- [Markdown guide](/handbook/markdown-guide/)
- [GitLab Documentation guidelines](https://docs.gitlab.com/ee/development/documentation/)
  - [Documentation style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/)
- [GitLab style guides](https://docs.gitlab.com/ee/development/contributing/style_guides.html)
- [Pajamas Design System](https://design.gitlab.com/)
- [Marketing site content style guide](/handbook/marketing/brand-and-product-marketing/brand/content-style-guide.md)
- [Blog style guide](/handbook/marketing/brand-and-product-marketing/content/editorial-team/)
