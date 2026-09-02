---
title: Project and website documentation
linkTitle: Project docs
description:
  Architecture and maintainer workflows for the Docsy theme and website
aliases: [site]
cascade:
  type: docs
  params:
    hide_feedback: true
cSpell:ignore: docsydocs
---

This section is for Docsy maintainers and contributors.

<span class="badge bg-warning text-bg-warning fs-6">
{{% _param FAS person-digging " pe-2" %}} Section under construction. {{%
_param FAS person-digging " ps-2" %}}
</span>

## Content (planned) {#content}

Planned content organization (tentative):

- [About](about/): High-level information about the project, including its
  purpose, ownership, and overall status.
- [Design](design/): Architectural design, Information Architecture (IA),
  layout, UX choices, theme related decisions and conventions, and other
  design-level artifacts.
- [Implementation](implementation/): Code-level structure, Hugo/Docsy templates,
  SCSS/JS customizations, patches, and internal shims.
- [Build](build/): Tooling, local development setup, CI/CD workflows, deployment
  environments, and automation details.
- [Quality](quality/): Tests, link checking, accessibility standards, and
  review practices.
- **Roadmap**: Milestones, backlog, priorities, technical debt, and
  design/implementation decisions.

## Site build information

Docsy version: `{{% dev-version %}}`

{{% td/site-build-info/netlify team="docsydocs" %}}
