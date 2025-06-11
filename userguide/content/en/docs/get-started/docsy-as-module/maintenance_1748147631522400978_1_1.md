---
title: "Content Websites"
---

## Overview

This area has traditionally been referred to as *"the handbook"*, but over time has grown in scope to include multiple sites, projects, repos, and types of content.

Therefore, we are using the term "content websites" here to avoid ambiguity and properly frame discussions around this scope of responsibility.

See our [direction page](direction.md) for more.

If you need help, please see the [editing handbook section](editing-handbook/_index.md#need-help), or [escalation information](../about/escalation.md) if it's urgent.

## Team Structure

The maintainer of this page (as indicated in the sidebar) is considered the [DRI](/handbook/people-group/directly-responsible-individuals/) for GitLab's "content websites". At present, the roles and responsibilities are as follows:

| Role | Owner | Current Individual(s) | Responsibilities |
| ------ | ------ | ------ | ------ |
| Handbook DRI | Learning & Development | Tre Ely, Jamie Allen | Prioritize work, make decisions on content sites, coordinate major changes |
| Keep pipeline green | Group of volunteers  | See [Escalation page](escalation.md#keep-main-green-group) | Help fix the pipeline if jobs are failing (as needed) |
| Code Maintainer[^1] | Group of volunteers | DRI, plus [`@gitlab-com/content-sites/handbook-tools`](https://gitlab.com/groups/gitlab-com/content-sites/handbook-tools/-/group_members?with_inherited_permissions=exclude) | Code reviews, escalation point for "Keep pipeline green" group, and as time allows, development work |

[^1]: Note: Team members are added to the `handbook-tools` group as Maintainer or Owner. The group has Maintainer access to the handbook projects, and the Docsy theme project.

This page further documents the scope and responsibilities of the DRI and their engineering reports.

## What are the content websites?

1. The public [`handbook.gitlab.com`](/) website:
   1. While often referred to as "the handbook", this website also serves a wide variety of other content including the [job families](/job-families), and the [TeamOps](/teamops) pages.
   1. `handbook.gitlab.com` is primarily backed by the [`gitlab-com/content-sites/handbook`](https://gitlab.com/gitlab-com/content-sites/handbook/)  project and repo.
   1. Data (YML) files currently resides in the [`gitlab-com/www-gitlab-com`](https://gitlab.com/gitlab-com/www-gitlab-com) repository.
1. The ["Internal Handbook" at `internal.gitlab.com`](https://internal.gitlab.com/):
   1. This website contains content that falls into the [not public](/handbook/communication/confidentiality-levels/#not-public) category. More details are available in [the Internal Handbook usage page](/handbook/about/handbook-usage/#the-internal-handbook)
   1. The Internal Handbook is backed by the [`gitlab-com/content-sites/internal-handbook`](https://gitlab.com/gitlab-com/content-sites/internal-handbook) project and repo.
1. The theme for the handbook sites is in the [`gitlab-com/content-sites/docsy-gitlab`](https://gitlab.com/gitlab-com/content-sites/docsy-gitlab) project.

### What are NOT content websites?

1. The [`about.gitlab.com`](https://about.gitlab.com) marketing website.
1. The [`gitlab.com`](https://gitlab.com) site.
1. The [`docs.gitlab.com`](https://docs.gitlab.com) product documentation site.
1. Any other GitLab-managed or GitLab-owned website other than what is described above.

## Issue triage

The following guidelines are used for triaging issues in [content sites projects](https://gitlab.com/gitlab-com/content-sites/)
that are [in-scope](#what-are-the-content-websites).

The triage guidelines use the [product issue triage](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority)
information as a basis. However, as the group structure and resources differ for the content
sites, so do the guidelines.

A [triage bot](https://gitlab.com/gitlab-com/content-sites/handbook-tools/triage-bot) exists to help triage issues.

### Types of issues and resourcing

Handbook issues typically fall under one of the following:

1. Content: Anything related to updating the text in the handbook, including required fixes.
1. Feature: New or an enhancement of how the handbook works, such as theme, or shortcode.
1. Operations: Theme, pipeline, local development, linters, other maintenance, and related documentation.

Issues may be considered a bug separately from the category when applicable (not a feature).

The team overseeing the content websites generally only resources operations issues,
unless the issue is a blocker for contributing or using the handbook.

### Priority

The priority label is used to indicate the importance of an issue and guide its scheduling.
Priority labels are expected to be set based on the needs of GitLab.
Priority can apply to any type of issue.

For bug issues, priority typically matches the [severity](#severity).
Match the priority to the severity if uncertain.

| Priority | Importance | Intention |
| -------- | ---------- | --------- |
| `~"hb-priority::1"` | Urgent | We will address this as soon as possible regardless of the limit on our team capacity. Our target resolution time is 30 days. |
| `~"hb-priority::2"` | High   | We will address this soon and will provide capacity from our team for it. Our target resolution time is 30-90 days. |
| `~"hb-priority::3"` | Medium | We want to address this but don't have visibility when this will be addressed. No timeline designated. |
| `~"hb-priority::4"` | Low    | We don't have visibility when this will be addressed. No timeline designated. |

We encourage contributions for all issues, especially priority 3 and 4 issues, in order to be addressed sooner.

### Severity

Severity labels help us determine urgency and clearly communicate the impact of a ~"Handbook::Operations" issue on users.

The severity should be determined based the various factors in the table below.
When an issue falls under multiple categories, use your best judgment.

Once you've determined a severity for an issue, add a note that explains in summary why you selected the severity you did. This will help future team members understand your rationale so they will know how to proceed with acting upon the issue.

| `~"Handbook::Operations" ~"type::bug"` | `~"hb-severity::1"`: Blocker | `~"hb-severity::2"`: High | `~"hb-severity::3"`: Medium  | `~"hb-severity::4"`: Low |
|----------------|--------------------------|---------------------------|-------------------------|----------------------|
| General bugs   | Broken feature with no workaround or any data-loss. | Broken feature with an unacceptably complex workaround. | Broken feature with a workaround. | Functionality is inconvenient. |
| Impact on users | Impacts 20% or more of users without an available workaround | Impacts 20% or more of users, but a reasonable workaround is available<br/><br/>**AND/OR**<br/><br/>Impacts between 5%-20% of users without an available workaround | Impacts up to 20% of users with a reasonable workaround, or workaround not required. | Minimal impact on typical user's workflow. Workaround is available or not needed. |
| User experience problem | Users are blocked and/or likely to make risky errors. | Users are significantly delayed by the available workaround. | Users are self sufficient in completing the task with the workaround, but may be somewhat delayed. | Usability isn't ideal or there is a small cosmetic issue. |

Timeline for resolution is based on [priority](#priority).

### Triage bot

Please see the relevant project readme for implementation information.
