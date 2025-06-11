---
title: "gitlab-ui (CSS and Reusable Components)"
description: "gitlab-ui drive forward the roadmap of our CSS Cleanup/Restructuring and the implementation of Reusable Components based on our design system."
---

## Attributes

| Property     | Value |
|--------------|-------|
| Date Created | March 26, 2019 |
| Date Ended   | July 24, 2020 |
| Slack        | [#wg_gitlab-ui](https://gitlab.slack.com/archives/CH9QG9TAQ/p1553587707000300) (only accessible from within the company) |
| Google Doc   | [gitlab-ui Working Group Agenda](https://docs.google.com/document/d/1CBg2XXH6l8h5sTKXSwQXEUD46HzEJVU8nsqYwZbW6O8/edit) (only accessible from within the company) |
| Epic         | [gitlab-ui Codebase](https://gitlab.com/groups/gitlab-org/-/epics/950) |

## Business Goal

Drive forward the [gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui) roadmap of our CSS Cleanup/Restructuring and the implementation of Reusable Components based on our design system. gitlab-ui will from now on have our base CSS implementation and all reusable components in one package to group all efforts of generic styling in one UI project. This will improve engineering productivity and consistency throughout the product. The main target of the working group is not to implement everything themselves but rather keep the effort moving across the whole frontend engineering group in a constant pace and pick up key tasks.

## Exit Criteria

All to-do list items in the main [Epic](https://gitlab.com/groups/gitlab-org/-/epics/950)

Especially the following items:

- Shepherd restructuring for splitting generic CSS in GitLab UI and page
specific in CE/EE by creating a utility-class library based on the design system
- Ensure utility-class library is available and usable within GitLab, ensuring the entire set of classes can be imported into GitLab without clashes and there is documentation to guide consumers on how to use them
- Establish working group FE members as GitLab UI maintainers
- Ensure there is clear documentation written for when and how new components
should be introduced into the design system and the product, including responsible
counterparts
- Ensure there is clear documentation of how to implement GitLab UI components
and utility classes

## Roles and Responsibilities

| Working Group Role    | Person                | Title                          |
|-----------------------|-----------------------|--------------------------------|
| Facilitator           | Tim Zallmann          | Director of Engineering, Dev   |
| Frontend Lead         | Enrique Alcántara     | Senior Frontend Engineer       |
| Member                | Sarah Groff Hennigh-Palermo | Senior Frontend Engineer |
| Member                | Denys Mishunov        | Senior Frontend Engineer       |
| UX Lead               | Taurie Davis          | Staff Product Designer         |
| Member                | Jeremy Elder          | Senior Product Designer        |
| Executive Stakeholder | Christopher Lefelhocz | VP of Development |
| Member                | Paul Gascou-Vaillancourt | Frontend Engineer           |
| Member                | Justin Boyson         | Senior Frontend Engineer       |
