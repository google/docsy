---
title: Docsy project
linkTitle: Project
description: Docsy project design documentation and other resources
outputs: [HTML]
cascade:
  type: docs
  params:
    ui:
      breadcrumb_disable: true
    github_subdir: ''
    path_base_for_github_subdir:
      from: '^(.*)/(\w+\.md)'
      to: $2
params:
  github_subdir: userguide # cSpell:disable-line
  path_base_for_github_subdir: ''
---

- Docsy build and design notes (TBC)
- Repository files:
  - [CHANGELOG](changelog)
  - [CONTRIBUTING](contributing)
  - [README](readme)
