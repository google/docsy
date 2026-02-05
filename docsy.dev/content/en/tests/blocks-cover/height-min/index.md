---
title: Height min with td-below-navbar and dark navbar
linkTitle: Height min dark
type: home
layout: home
description: A Hugo theme for creating great technical documentation sites
params:
  ui: { navbar_theme: dark }
  btn-lg: class="btn btn-lg btn-{1}" type="button"
---

{{% blocks/cover
  title="Welcome to Docsy!"
  image_anchor="top"
  height="min td-below-navbar"
%}}

<!-- prettier-ignore -->
{{% param description %}}
{.display-6}

<!-- prettier-ignore -->
<div class="td-cta-buttons my-5">
  <button {{% _param btn-lg primary %}} href="/about/">
    Learn more
  </button>
  <button {{% _param btn-lg secondary %}} href="/docs/get-started/">
    Get started
  </button>
</div>

{{% blocks/link-down color="info" %}}

{{% /blocks/cover %}}

{{% blocks/lead color="primary" %}}

Docsy is a theme for the Hugo static site generator that's specifically designed
for technical documentation sets. Our aim is to help you get a working
documentation site up and running as easily as possible, so you can concentrate
on creating great content for your users.

<a href="https://www.netlify.com/" target="_blank" rel="noopener">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
</a>
{{% /blocks/lead %}}

{{% blocks/section color="dark" type="row" %}}

{{% blocks/feature icon="fa-lightbulb" title="See Docsy in action!" url="/docs/examples/" %}}
As well as our example site, there's a growing number of projects using Docsy for their doc sites.
{{% /blocks/feature %}}


{{% blocks/feature icon="fa-brands fa-github" title="Contributions welcome!" url="https://github.com/google/docsy" %}}
We do a [Pull Request](https://github.com/google/docsy/pulls) contributions workflow on **GitHub**. New users are always welcome!
{{% /blocks/feature %}}


{{% blocks/feature icon="fa-brands fa-x-twitter" title="Follow us on Twitter!" url="https://twitter.com/docsydocs" %}}
Find out about new features and how our users are using Docsy.
{{% /blocks/feature %}}

{{% /blocks/section %}}
