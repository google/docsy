---
title: Project and website documentation
linkTitle: Project docs
description: How Docsy theme and website are built, maintained, and deployed.
aliases: [site]
cascade:
  outputs: [HTML]
  type: docs
  params:
    hide_feedback: true
params:
  FA: <i class="fa-solid fa-{1} text-{2}"></i>
cSpell:ignore: docsydocs
---

Planned content organization (tentative)

- **info** — High-level information about the website project, including its
  purpose, ownership, and overall status.
- **design** — Architectural design, Information Architecture (IA), layout, UX
  choices, theme related decisions, and other design-level artifacts.
- **implementation** — Code-level structure and conventions, Hugo/Docsy
  templates, SCSS/JS customizations, patches, and internal shims.
- **build** — Tooling, local development setup, CI/CD workflows, deployment
  environments, and automation details.
- **quality** — Link checking, accessibility standards, tests, review practices,
  and other quality-related processes.
- **roadmap** — Milestones, backlog, priorities, technical debt, and
  design/implementation decisions.

{{% _param FA person-digging " pe-2" %}} This section is under development. {{%
_param FA person-digging " ps-2" %}}

## Site build information

{{% td/site-build-info/netlify team="docsydocs" %}}
