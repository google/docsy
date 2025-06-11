---
title: GitLab Runner Support Pod
description: A space to collaborate and for Support Engineers to get help on Runner.
---

## Purpose

Provide a space to collaborate and for Support Engineers to get help on Runner.

## Scope

Everything runner related. Compliments CI/CD.

## Current objectives

- Gain and share knoweledge
- Documentation updates

## Support Pod members

- Lead: {{< member-by-name "Justin Farmiloe" >}} (`@jfarmiloe`)
- Lead: {{< member-by-name "Tony Marsh" >}} (`@tmarsh1`)
- {{< member-by-name "Kenneth Chu" >}} (`@kenneth`)
- {{< member-by-name "Michael Trainor" >}} (`@tmike`)

## Collaboration channels

- [#spt_pod_runner](https://gitlab.slack.com/archives/C05MBS5RZ50)
- (Bi)weekly meetings: TBD - if you'd like to lead, please add it to the Support calendar and mention it here!

## Zendesk view

Since limitations in Zendesk prevent each pod from having a shared view, you will have to create one manually.
Follow the steps below and you should have a personal view in no time.

1. Click on `Manage views`
1. In the new Window on the top right click `Add view`
1. Give the view a name
1. Move to `Conditions`
   1. `Tickets must meet all of these conditions to appear in the view`
      1. Click `Add condition` and from left to right
         - `Status`
         - `Less than`
         - `Pending`
      1. Click `Add condition` and from left to right
         - `Tags`
         - `Contains at least one of the following`
         - `support_category_runners support_category_category_runners support_category_runners_shared support_category_runners_shared_installation support_category_runners_shared_configuration support_category_runners_shared_questions support_category_runners_shared_errors support_category_runners_shared_other_topic support_category_runners_docker support_category_runners_docker_installation support_category_runners_docker_configuration support_category_runners_docker_questions support_category_runners_docker_errors support_category_runners_docker_other_topic support_category_runners_freebsd support_category_runners_freebsd_installation support_category_runners_freebsd_configuration support_category_runners_freebsd_questions support_category_runners_freebsd_errors support_category_runners_freebsd_other_topic support_category_runners_helm support_category_runners_helm_installation support_category_runners_helm_configuration support_category_runners_helm_questions support_category_runners_helm_errors support_category_runners_helm_other_topic support_category_runners_agent support_category_runners_agent_installation support_category_runners_agent_configuration support_category_runners_agent_questions support_category_runners_agent_errors support_category_runners_agent_other_topic support_category_runners_operator support_category_runners_operator_installation support_category_runners_operator_configuration support_category_runners_operator_questions support_category_runners_operator_errors support_category_runners_operator_other_topic support_category_runners_linux support_category_runners_linux_installation support_category_runners_linux_configuration support_category_runners_linux_questions support_category_runners_linux_errors support_category_runners_linux_other_topic support_category_runners_macos support_category_runners_macos_installation support_category_runners_macos_configuration support_category_runners_macos_questions support_category_runners_macos_errors support_category_runners_macos_other_topic support_category_runners_windows support_category_runners_windows_installation support_category_runners_windows_configuration support_category_runners_windows_questions support_category_runners_windows_errors support_category_runners_windows_other_topic support_category_runners_other support_category_runners_other_installation support_category_runners_other_configuration support_category_runners_other_questions support_category_runners_other_errors support_category_runners_other_other`
1. Move on to `Formatting options`
   1. Update it to show the columns to your preference
1. Change `Order by` to `Next SLA breach`, `Ascending`
1. Click `Save`
