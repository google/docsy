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

<span class="badge bg-warning text-bg-warning fs-6">
{{% _param FA person-digging " pe-2" %}} Section under construction. {{%
_param FA person-digging " ps-2" %}}
</span>

## Content (planned) {#content}

Planned content organization (tentative):

- [About](about/) — High-level information about the project, including its
  purpose, ownership, and overall status.
- **Design** — Architectural design, Information Architecture (IA), layout, UX
  choices, theme related decisions, and other design-level artifacts.
- [Implementation](implementation/) — Code-level structure and conventions, Hugo/Docsy
  templates, SCSS/JS customizations, patches, and internal shims.
- [Build](build/) — Tooling, local development setup, CI/CD workflows, deployment
  environments, and automation details.
- **Quality** — Link checking, accessibility standards, tests, review practices,
  and other quality-related processes.
- **Roadmap** — Milestones, backlog, priorities, technical debt, and
  design/implementation decisions.

## Site build information

{{% td/site-build-info/netlify team="docsydocs" %}}
