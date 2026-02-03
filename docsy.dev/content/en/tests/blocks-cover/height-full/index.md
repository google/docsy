---
title: Height full with td-below-navbar
type: home
layout: home
description: A Hugo theme for creating great technical documentation sites
params:
  ui: { navbar_theme: dark}
---

{{% blocks/cover title="Welcome to Docsy!" image_anchor="top" height="full td-below-navbar" %}}
{{% param description %}}
{.display-6}

<a class="btn btn-lg btn-primary me-3" href="/about/">Learn More</a>
<a class="btn btn-lg btn-secondary" href="/docs/get-started/">Get started</a>
{.p-initial .my-5}

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
