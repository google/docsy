---
title: About this website
linkTitle: Website docs
description: How this site is built, maintained, and deployed.
aliases: [site]
outputs: [HTML]
cascade:
  - type: docs
  - params:
      ui:
        breadcrumb_disable: true
      github_subdir: ''
      path_base_for_github_subdir:
        from: '^(.*)/(\w+\.md)'
        to: $2
    target:
      path: /site/readme
  - params:
      toc_hide: true
    target:
      path: /site/repo**
params:
  github_subdir: docsy.dev # cSpell:disable-line
  path_base_for_github_subdir: ''
  FA: <i class="fa-solid fa-{1} text-{2}"></i>
---

{{% _param FA person-digging " pe-2" %}} Coming soon: Design, implementation,
and ops docs for the project {{% _param FA person-digging " ps-2" %}}
