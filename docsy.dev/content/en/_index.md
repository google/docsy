---
title: Docsy
description: A Hugo theme for creating great technical documentation sites
params:
  body_class: td-navbar-links-all-active
  ui: { navbar_theme: dark }
---

{{% blocks/cover
  title="Welcome to Docsy!"
  image_anchor="top"
  height="full td-below-navbar"
%}}

<!-- prettier-ignore -->
{{% param description %}}
{.display-6}

<!-- prettier-ignore -->
<div class="td-cta-buttons my-5">
  <a {{% _param btn-lg primary %}} href="docs/get-started/">
    Get started with Docsy
  </a>
  <a {{% _param btn-lg secondary %}}
    href="{{% param example_site_url %}}">
    Explore the example site
  </a>
</div>

{{% blocks/link-down color="info" %}}

{{% /blocks/cover %}}

{{% blocks/lead color="primary" %}}

Docsy is a theme for the [Hugo][] static site generator that's specifically
designed for technical documentation sets. Our aim is to help you get a working
documentation site up and running as easily as possible, so you can concentrate
on creating great content for your users.

[![Deploys by Netlify][netlify-badge]][netlify]

[Hugo]: https://gohugo.io/
[netlify]: https://www.netlify.com/
[netlify-badge]: https://www.netlify.com/img/global/badges/netlify-color-accent.svg

{{% /blocks/lead %}}

{{% blocks/section color="dark" type="row" %}}

{{% blocks/feature icon="fa-lightbulb" title="See Docsy in action!" url="docs/examples/" %}}
As well as our example site, there's a growing number of projects using Docsy for their doc sites.
{{% /blocks/feature %}}


{{% blocks/feature icon="fa-brands fa-github" title="Contributions welcome!" url="https://github.com/google/docsy" %}}
We do a [Pull Request](https://github.com/google/docsy/pulls) contributions workflow on **GitHub**. New users are always welcome!
{{% /blocks/feature %}}


{{% blocks/feature icon="fa-brands fa-x-twitter" title="Follow us on Twitter!" url="https://twitter.com/docsydocs" %}}
Find out about new features and how our users are using Docsy.
{{% /blocks/feature %}}

{{% /blocks/section %}}
