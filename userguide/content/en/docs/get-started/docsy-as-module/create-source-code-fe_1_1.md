---
title: "Create:Source Code FE Team"
description: The Create:Source Code FE team is responsible for all frontend aspects of the product categories that fall under the Source Code group of the Create stage.
---

## Common Links

| **Category**            | **Handle** |
|-------------------------|-------------|
| **GitLab Team Handle**  | Not available |
| **Slack Channel**               | [`#g_create_source-code-review-fe`](https://gitlab.enterprise.slack.com/archives/CS5NHHBJ7) |
| **Slack Handle**               | Not available |
| **Team Boards**         | [`Current Milestone`](https://gitlab.com/groups/gitlab-org/-/boards/1149629) |
| **Issue Tracker**       | [`group::source code` + `frontend` in `gitlab-org/gitlab`](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Asource%20code&first_page_size=20) |

## Team Vision

A central piece in GitLab users' experience, innovating and keeping the experience delightful for all product categories that fall under the [Source Code group](/handbook/product/categories/#source-code-group) of the [Create stage](/handbook/product/categories/#create-stage) of the [DevOps lifecycle](/handbook/product/categories/#devops-stages).

## Team Mission

Support all our counterparts with frontend engineering expertise, including implementation, tech debt management, and timely frontend insights in discovery phases.

## Commonly Monitored Issue Lists

* [Source Code + Frontend issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=opened&label_name%5B%5D=frontend&label_name%5B%5D=group%3A%3Asource%20code&first_page_size=20)
* [Milestone Planning Issues](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=created_date&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Asource%20code&first_page_size=20)
* [Triage reports](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=type%3A%3Aignore&label_name%5B%5D=group%3A%3Asource%20code&first_page_size=20)
* [Feature flag reports](https://gitlab.com/gitlab-org/quality/triage-reports/-/issues/?sort=created_date&state=opened&label_name%5B%5D=triage%20report&label_name%5B%5D=feature%20flag&label_name%5B%5D=group%3A%3Asource%20code&first_page_size=20)
* [OKRs (confidential)](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&assignee_username%5B%5D=andr3&label_name%5B%5D=group%3A%3Asource%20code&first_page_size=20)

## Team Members

The following people are permanent members of the Create:Source Code FE Team:

{{< team-by-manager-role role="Senior Engineering Manager(.*)Create:Source Code" team=".*Frontend.*Create:Source Code" >}}

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

{{< stable-counterparts role="(Product Manager|Backend Engineer|Technical Writer|Software Engineer in Test|Senior Security Engineer).*(Create:Source Code|Create \(Source)|Dev\:Create" >}}

## Core Responsibilities

* Collaborate with Product and UX on ideation, refinement and scheduling of relevant work
* Provide Frontend support for feature development, bug fixes, under the [Source Code Management Product Category](https://about.gitlab.com/direction/create/source_code_management/)
* Address bug reports and regressions
* Identify and prepare maintenance work to improve developer experience
* Collaborate on efforts across the Frontend department

## Projects

### Active Project Table

| Start Date | Project  | Description | Tech Lead |
| ------ | ------ | ------ |  ------ |
| 2023-09 | [New Diffs](https://docs.gitlab.com/ee/architecture/blueprints/new_diffs/index.html) ([Epic](https://gitlab.com/groups/gitlab-org/-/epics/11559)) | A project to deliver a reusable and performant way of rendering diffs across GitLab | — |
| 2023 | [Blame info in Blob page](https://gitlab.com/groups/gitlab-org/-/epics/11471) | Improve usability of repository by rendering blame information in blob page | — |
| 2023 | [Branch Rules - Edit](https://gitlab.com/groups/gitlab-org/-/epics/8075) | Allow editing the branch rule details in one place | — |

### Archived Project Table

| Start Date | End Date |Project  | Description | Tech Lead |
| ------ | ------ | ------ |  ------ | ------ |
| 2022-09 | 2023-04 | Branch Rules - Overview | Place all settings pertaining to branch rules in one place - overview only | — |
|  2021      | 2022        | [Refactor Repository browser into 1 vue app](https://gitlab.com/groups/gitlab-org/-/epics/5531) | Render the blob page within the Repository frontend app for smoother experience | — |

## Engineering Onboarding

### Work

In general, we use the standard GitLab [engineering workflow](/handbook/engineering/workflow/). To get in touch
with the Create:Source Code FE team, it's best to create an issue in the relevant project
(typically [GitLab](https://gitlab.com/gitlab-org/gitlab)) and add the `~"group::source code"` and `~frontend` labels, along with any other
appropriate labels (`~devops::create`, `~section::dev`). Then, feel free to ping the relevant Product Manager and/or
Engineering Manager as listed above.

For more urgent items, feel free to use [#g_create_source_code](https://gitlab.slack.com/archives/g_create_source-code) or [#g_create_source_code_fe](https://gitlab.slack.com/archives/g_create_source-code-review-fe) on Slack.

[Take a look at the features we support per category here.](/handbook/product/categories/features/#createsource-code-group)

### Code Reviewing

To prevent the creation of knowledge silos and also receiving input from people outside of the team, we follow these principles:

* Not all Merge Requests need to go through the team
* However, Merge Requests that seem important for the team to be aware, let's ensure one of the reviews go through a team member

**MRs important to the team:** these are changes to logic in our apps or meaningful component changes. Sequential work in a larger epic is also beneficial to have oversight from peers within the team. But bottom line, use your best judgement.

### Capacity planning

{{% include "includes/engineering/create/capacity-planning-fe.md" %}}

#### Weights

{{% include "includes/engineering/create/weights-fe.md" %}}

### Workflow labels

{{% engineering/workflow-labels group-label="group::source code" %}}

### Async standup

{{% include "includes/engineering/create-async-standup.md" %}}

### Retrospectives

We have 1 regularly scheduled "Per Milestone" retrospective, and can have ad-hoc "Per Feature" retrospectives more focused at analyzing a specific case, usually looking into the Iteration approach.

#### Per Milestone

{{% engineering/create-retrospectives group-label="Source Code" group-slug="source-code" use-coordinator="1" %}}

### Milestone Kickoff & Retrospective review

At the start of each milestone we have a synchronous **Kickoff** session where every IC take turns at presenting their plan for their Deliverables for the new milestone.

This happens at least 2 working days after all Deliverables are assigned, which happens on the first day of the milestone.

During this call, we also do a quick **Retrospective review** going through the highlights of the discussions in the asynchronous issue mentioned above.

## Other related pages

### Issues

* April 2020: [Frontend: Iteration Retrospective (Source Code)](https://gitlab.com/gl-retrospectives/create-stage/source-code/-/issues/22)
