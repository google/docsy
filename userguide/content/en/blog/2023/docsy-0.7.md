---
title: Upgrading to Docsy 0.7 & Bootstrap 5
linkTitle: Upgrading to Docsy 0.7
description: A guide to upgrading to Docsy 0.7 and Bootstrap 5 with examples
author: >
  [Patrice Chalin](https://github.com/chalin), [CNCF](https://www.cncf.io/) &
  Docsy Steering Committee
date: 2023-08-03
cSpell:ignore: CNCF Chalin opentelemetry namespacing docsy
---

Last June, Docsy celebrated a significant milestone with the release of version
[0.7.0](https://github.com/google/docsy/releases/tag/v0.7.0). This major upgrade
was the result of
[six months of meticulous work (#470)](https://github.com/google/docsy/issues/470)
focused on the migration to Bootstrap 5.2. For highlights and the rationale
behind that journey, see
[Migrating to Bootstrap 5.2](/blog/2023/bootstrap-5-migration/).

This blog post is intended to help those who are upgrading to Docsy 0.7 and
Bootstrap 5, based on my Docsy 0.7 upgrade experiences, specifically related to
Bootstrap. The post starts with general guidance for Docsy-based projects
wishing to upgrade. Every project's migration experience will be unique, but
hopefully this post, and the two included case studies, will make your upgrade
process easier and faster.

If you're here, you probably want to upgrade your Docsy-based project---so,
let's jump in!

## Upgrading your project

As was mentioned in the
[first post](/blog/2023/bootstrap-5-migration/#migrating-docsy-based-projects),
each project uses its own specific set of Bootstrap and Docsy features, so in
all likelihood, **your upgrade journey will be unique**. This section offers
some general guidance.

### Upgrade Docsy

If you haven't already, upgrade your project all the way up to Docsy 0.6 first.
Each release of Docsy can bring its own set of upgrade challenges that will vary
in size and effort depending on your project and the features it uses, as well
as how long it's been since your version of Docsy has been upgraded. You'll want
to get all pre-0.7 upgrade issues out of the way so that you can focus on
Bootstrap 5 issues. Once you are done, upgrade to the latest Docsy 0.7.x
release.

### Address Bootstrap changes

I recommend that you first walk through the Bootstrap 5.2
[migration page](https://getbootstrap.com/docs/5.2/migration/) to get an
appreciation of the scope of the changes made to Bootstrap 5 relative to 4.
Identify the breaking changes to those Bootstrap features used by your project,
and address each individually. I mention a few breaking changes next and close
the section with a comment about what to do about the rest.

Some Bootstrap changes will break your website's layout or functionality in
obvious ways. This is the case for the
[rename](https://getbootstrap.com/docs/5.2/migration/#utilities)[ of utility classes](https://getbootstrap.com/docs/5.2/migration/#utilities),
like `ml-1` and `pr-2`. Using regular-expression based search-and-replace over
your project's custom layouts or doc-page inline HTML is a good way to tackle
this. I've used regex like these:

- Margin and padding: `\b([mp])[lr](-([0-5]|auto))\b`
- Left/right classes: `\b((float|border|rounded|text)-)(left|right)\b`

If your project uses Bootstrap
[JavaScript plugins](https://getbootstrap.com/docs/5.2/migration/#javascript)
such as dropdowns, popovers, and tooltips, these will stop working until you
adjust data attribute names, which are now "namespaced" using the `data-bs`
prefix. For example, use `data-bs-toggle` instead of `data-toggle`.

Other Bootstrap breaking changes will require more work to address, such as the
following that were mentioned in the
[TL;DR](/blog/2023/bootstrap-5-migration/#tldr) of the first post:

- [Mixin `media-breakpoint-down()` argument shift](/blog/2023/bootstrap-5-migration/#mixin-media-breakpoint-down-argument-shift)
- [Grid `.row` and `.col` style changes](/blog/2023/bootstrap-5-migration/#grid-row-and-col-style-changes-are-breaking)
- [Import ordering of Bootstrap Sass files: functions first](/blog/2023/bootstrap-5-migration/#import-ordering-of-bootstrap-sass-files-functions-first)

The Docsy blog layout used the `.media` class, which was
[dropped from Bootstrap 5](https://getbootstrap.com/docs/5.2/migration/#grid-updates).
This, and the
[`.row` and `.col` style changes](/blog/2023/bootstrap-5-migration/#grid-row-and-col-style-changes-are-breaking),
required a couple of iterated changes to the blog layouts, such as
[PR #1566](https://github.com/google/docsy/pull/1566). If your project
customizes blog layouts, then you'll want to walk through the updates carefully.
Otherwise, your project will get these updates automatically, without any
further required changes.

Should you encounter a Bootstrap-5 breaking change affecting your project that
hasn't been mentioned above, you might find the opening comment of Docsy
[issue #470 · Upgrade to Bootstrap 5.2](https://github.com/google/docsy/issues/470)
useful: it lists 50 tasks, each addressing a distinct migration problem,
accompanied by notes or cross-referenced PRs that illustrate how each problem
was resolved.

### Address Docsy-specific changes

It is worth mentioning in passing some of the main Docsy 0.7 changes that aren't
related to Bootstrap, such as:

- Default and accepted values of the `blocks/section`'s `type` argument have
  changed ([#1472](https://github.com/google/docsy/issues/1472))
- Pre-Hugo-0.54.x behavior of `{{%/* */%}}` is no longer supported
  ([#939](https://github.com/google/docsy/issues/939))
- [Hugo release](https://github.com/gohugoio/hugo/releases) 0.110.0 or later is
  required

For the complete list of changes, see the
[CHANGELOG at 0.7.0](https://github.com/google/docsy/blob/main/CHANGELOG.md#070).

## Case studies

Our two case study projects to illustrate the Docsy upgrade process are the
OpenTelemetry project and the Docsy example template repository.

### opentelemetry.io

[Several CNCF projects](https://www.cncf.io/blog/2023/01/19/fast-and-effective-tools-for-cncf-and-open-source-project-websites/)
use the Docsy theme, including [opentelemetry.io](https://opentelemetry.io/),
which I used as a Docsy pre-release test site. As suggested earlier, I first
upgraded Docsy from 0.4 to 0.6
([opentelemetry.io issue #2419](https://github.com/open-telemetry/opentelemetry.io/issues/2419)).

The upgrade to Docsy 0.7 went
[fairly smoothly](https://github.com/open-telemetry/opentelemetry.io/issues?q=label%3Adocsy+is%3Aclosed+closed%3A%3E2023-03-03).
In addition to addressing the "obvious changes" related to utility class renames
and data-attribute namespacing, the OTel website required these project-specific
changes:

- [Breaking changes to](https://getbootstrap.com/docs/5.2/migration/#forms)
  [forms](https://getbootstrap.com/docs/5.2/migration/#forms) required a
  significant rework of the
  [Registry](https://opentelemetry.io/ecosystem/registry/) form
- While the OTel website has no blog layout overrides, it made use of the
  `.media` class (which was dropped) for registry entries. Flex styles were used
  instead.

That's it! To see how both of the above were resolved, see OTel
[PR #2490](https://github.com/open-telemetry/opentelemetry.io/pull/2490).

### Docsy-example

The [docsy-example](https://github.com/google/docsy-example) repository is a
[GitHub template](https://gitprotect.io/blog/how-to-use-github-repository-templates/)
that we suggest as a possible starting point for users looking to adopt
[Docsy for a new website](/docs/get-started/docsy-as-module/example-site-as-template/).
The example site features [multi-language support](/docs/language/), which had
an impact on the required upgrades.

The example-site upgrade was even simpler than for the OTel website. The key
changes ([PR #221](https://github.com/google/docsy-example/pull/221)) were
mainly confined to the landing page of each natural language:

- Utility-class renames, such as `.ml-*` and `.mr-*` to `.ms-*` and `.me-*`
- [blocks/section](/docs/adding-content/shortcodes/#blockssection) changes
  ([PR #1472](https://github.com/google/docsy/pull/1472)):
  - Language landing pages had to be renamed from `.html` to `.md` in support of
    using blocks shortcodes to render markdown content
  - Switched to `type="row"` for `blocks/section` elements that are rows (also
    from [PR #220](https://github.com/google/docsy-example/pull/220))

That was it.

## What next?

If your project doesn't override any Docsy layouts, then your upgrade experience
should be relatively straightforward. Reviewing layout file changes, on the
other hand, always warrants special attention.

With the tips shared here, I hope that your journey to Docsy 0.7 will be more
streamlined. Consider sharing your experiences by adding a comment to the
[discussion of 0.7.0](https://github.com/google/docsy/discussions/1555) or any
[later 0.7.x release](https://github.com/google/docsy/discussions/categories/announcement?discussions_q%3Dis%253Aopen%2Bcategory%253AAnnouncement).
Wishing you a successful upgrade journey!

A special thanks to [Erin McKean](https://github.com/emckean) for detailed and
valuable feedback on this post, and to all who contributed to the 0.7.x releases
of Docsy and the Docsy example!
