---
title: "BootstrapVue Removal Group"
description: "Learn more about the BootstrapVue Removal Task Group attributes, goals, roles and responsibilities."
---

## Attributes

| Property        | Value                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Date Created    | 2024-09-10                                                                                                                              |
| Target End Date | 2025-08-31                                                                                                                              |
| Slack           | [#tg_bootstrapvue_removal](https://gitlab.enterprise.slack.com/archives/C07LB4P1FST) (only accessible from within the company)          |
| Google Doc      | [Agenda doc](https://docs.google.com/document/d/1L1-4evYtCATuAYam1ZJOrgBcGZIg0jA1P20gtBfWTsI) (only accessible from within the company) |
| Zoom Recordings | [Recordings](https://drive.google.com/drive/folders/1sHgSixs41YgTN7hnklP7oosWtPLOxWGm) (only accessible from within the company)        |

## Context

Previously, [we chose to use BootstrapVue](https://gitlab.com/groups/gitlab-org/frontend/-/epics/1) because we were already employing Bootstrap, and creating a custom UI library would be a significant undertaking. At that time, BootstrapVue was an appropriate choice. Initially, BootstrapVue was part of the monolithic codebase, but later it was moved to the GitLab UI repository.

While BootstrapVue was suitable in the past, we are now considering migrating away from it. There are several disadvantages that hinder maintenance and usage, as detailed below. The primary reason for migration is that BootstrapVue is now unsupported and impedes the migration of [gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui) (and ultimately, [gitlab](https://gitlab.com/gitlab-org/gitlab/)) to Vue 3.

### Goals

1. **Primary Goal: Enable Vue 3 Migration**: BootstrapVue does not support the Compat Build mode for Vue 3. Previous attempts to build a compat mode have proven as time-consuming as migrating to our own components. While enabling the Vue 3 migration is our immediate priority, removing BootstrapVue would prevent potential future blocks, such as issues with upcoming Vue versions like Vue 3.5, [which had been announced September 1st 2024](https://blog.vuejs.org/posts/vue-3-5), or even Vue 4 in the future. By maintaining our own components, we ensure continued flexibility and freedom from external library constraints.
2. **Secondary Goal: Improve Developer Experience (DX)**
   - **Single Source of Truth**: The GitLab UI repository currently 'mirrors' BootstrapVue components. We maintain two documentation sources: the Pajamas design system and the Storybook for Vue Components. The Storybook advises referring to BootstrapVue documentation for complete information. Consolidating these resources into a single source of truth would enhance DX and facilitate a clearer understanding of our design system.
   - **Design Token Migration**: Using BootstrapVue components complicates the addition of design tokens, requiring workarounds like overriding nested CSS selectors and contending with Bootstrap styles and HTML structure.
   - **Design Systems Team Efficiency**: Expanding components for GitLab developers often requires substantial effort, leading to manual implementations in the Monorepo instead of using BootstrapVue components.
   - **Component Usability**: The component `<table>` proofed to be not useable for most of our usecases, and custom implementations had to be done.
   - **Ownership and Responsibility**: Developing our own components ensures clear responsibilities within the Component System and a dedicated team for building and maintaining them.
   - **Enabling other repositiories**: E.g. transitioning to a Compat Mode or Vue 3 mode could be considered if we no longer rely on BootstrapVue.

### General Advantages of Maintaining Our Own System

- **Reduced Dependencies**: Removing BootstrapVue would eliminate dependencies from our codebase. [See here for a list of dependencies BootstrapVue installs](https://github.com/bootstrap-vue/bootstrap-vue/blob/dev/package.json).
- **Accessibility Improvements**: Some complex components in BootstrapVue (like Popover) have accessibility issues. Creating and maintaining our own UI library would allow us to improve accessibility and reduce time spent on workarounds.
- **Enhanced Flexibility**: We would have the opportunity to integrate various features and tools as needed without relying on an external library.
- **Maintenance Simplification**: Although maintaining a UI Component System involves effort, avoiding reliance on external libraries like BootstrapVue would eliminate the need for ongoing updates and related maintenance challenges.
- **Repository Impact:** The removal of BootstrapVue will take place in the [gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui) repository. This will result in reduced bundle sizes for the [gitlab](https://gitlab.com/gitlab-org/gitlab/) repository by shipping less code and provide increased flexibility to address GitLab's specific needs moving forward.

### Challenges

- **Compatibility**: Ensuring that our custom components maintain the same APIs as before is crucial. As with most migrations, the focus will be on replicating the functionality of BootstrapVue components without unnecessary changes.
- **Global Events**: BootstrapVue supported global events (bv::). Rebuilding this functionality might be complex.

These are the known challenges, but there may be additional issues that have yet to be identified.

## Exit Criteria

1. Unused files from `/src/vendor/bootstrapvue` are removed: [Epic &13075](https://gitlab.com/groups/gitlab-org/-/epics/13075).
2. Documentation is updated and made accessible: [Issue #2754](https://gitlab.com/gitlab-org/gitlab-ui/-/issues/2754).
3. MIT License usage is clarified: [Issue #2318](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/2318).
4. Files are migrated: [Epic &15178](https://gitlab.com/groups/gitlab-org/-/epics/15178)
   1. Directives are moved to the `/src` folder.
   2. Components, plugins, mixins, and constants are rewritten using the 'usual' Vue 2 Options API syntax and moved to the `/src` folder.
5. The directory `/src/vendor/bootstrapvue` is removed.
6. Bootstrap CSS Utilities in GitLab UI are replaced with (TailwindCSS) GitLab CSS Utilities: [Epic &15765](https://gitlab.com/groups/gitlab-org/-/epics/15765).

## Roles and Responsibilities

| Task Group Role | Person                   | Title                                                        |
| --------------- | ------------------------ | ------------------------------------------------------------ |
| DRI             | Peter Hegman             | Senior Frontend Engineer, Tenant Scale::Organizations        |
| Member          | Paul Gascou-Vaillancourt | Senior Frontend Engineer, Foundations::Personal Productivity |
| Member          | Lukas Eipert             | Staff Frontend Engineer, Foundations::Personal Productivity  |
| Member          | Lorenz van Herwaarden    | Senior Frontend Engineer, Govern::Threat Insights            |
| Member          | Chaoyue Zhao             | Frontend Engineer, Create::Source Code                       |
