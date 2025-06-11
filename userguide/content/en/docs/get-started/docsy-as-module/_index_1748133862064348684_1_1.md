---
title: "People Group Engineering"
description: "Information about GitLab's People Group Engineering team and its projects, workflow, and sources of data."
---

## Overview

As GitLab continues to scale, our need for tools and automation to manage our growth expands
along with it. To help the People Group, we have a People Group Engineering team, that consists out of [People Group Fullstack Engineers](/job-families/people-group/people-ops-fullstack-engineer) to make our team more efficient and improve the effectiveness of our core [People Group](/handbook/people-group).

Responsibilities include (but are not limited to):

- Automation and API integrations in talent acquisition
- Employment issues automation
- Integrations to assure SSoT
- Manage the code that runs the [Employment Bot](https://gitlab.com/employment-bot)

### Quick Links

Quick navigation to some of our other pages.

| **Page** | **Description** |
|---|---|
| [Organization Change](/handbook/people-group/engineering/organization-change) | Our automation flow on how we streamile on processes. |
| [Employment Issues](/handbook/people-group/engineering/employment-issues) | Information regarding our onboarding and offboarding issue automations. |
| [Nominator Bot](/handbook/people-group/engineering/nominatorbot) | Information regarding our custom Slack app, how to use it, FAQ's, and engineer guides. |
| [Offboarding](/handbook/people-group/engineering/offboarding) | Our `offboarding` automation flow and everything you may need to know regarding this. |
| [Onboarding](/handbook/people-group/engineering/onboarding) | Our `onboarding` automation flow and everything you may need to know regarding this. |
| [Internal Handbook](/handbook/people-group/engineering/pops-internal-handbook) | Our People Group Engineering internal handbook. |
| [Slack Integrations](/handbook/people-group/engineering/slack-integrations) | Information on some of our slack integrations like birthday announcments, PTO, etc. |
| [Miscellaneous](/handbook/people-group/engineering/miscellaneous) | Some extra information regarding PTO, sensitive data, accruals, and more. |

### Working with us

If you'd like to request engineering assistance with an issue, bug fixes, urgent requests related to People Group processes
or tools ([like Workday](/handbook/people-group#using-workday)) or anything relating to People Group Engineering, please start by
[creating an issue](https://gitlab.com/gitlab-com/people-group/peopleops-eng/people-group-engineering/-/issues/new)
in the People Group Engineering project. All issues are reviewed and prioritized to a specific team through our [kanban board](https://gitlab.com/groups/gitlab-com/people-group/peopleops-eng/-/boards/2641488). If you require general support with MR's, kindly collaborate with all of GitLab team members in [`#mr-buddies`](https://gitlab.slack.com/archives/CLM8K5LF4) in slack.

If you are looking for help regarding general inquiries such as: payroll, paid time off, benefits, etc. Please reach out to our People Connect team via HelpLab.

If you are looking to bring the People Group Engineering team into a discussion/issue/merge request on GitLab, please utilize our group tag: `@gl-people-engineering` to ping the appropriate team members.

### Report bugs

If you want to report bugs about existing integrations, you can use any of the following templates:

- [Bug with a /pops command](https://gitlab.com/gitlab-com/people-group/peopleops-eng/employment-automation/-/issues/new?issuable_template=bug_pops_command)
- [Bug with Nominations](https://gitlab.com/gitlab-com/people-group/peopleops-eng/nominatorbot/-/issues/new?issuable_template=general_bug)

#### Urgent attention

We have monitoring setup in case some of our applications are no longer accessible. This is the case for **all** of our integrations. This will trigger notifications to the People Group Engineer(s). If you need our immediate attention, feel free to use our [`#peopleops-eng`](https://gitlab.slack.com/archives/CNDBF4DFT) Slack channel. Avoid pinging people directly unless there is a real urgency to the matter.

### Our workflow

The [People Group Engineering board](https://gitlab.com/groups/gitlab-com/people-group/peopleops-eng/-/boards/2641488)
serves as the single source of truth on the engineering team's priorities. Issues follow a linear sequence, with a `Workflow::`
label indicating an issue's current status:

1. `Workflow::Triage`: Issues start here. Issues in triage must be further defined before they're able to
   be made ready for development. Once the problem and a proposal for solving it is defined to the point where an
   engineer can begin work, it can be moved to `Workflow::Ready for Development`.
1. `Workflow::Ready for Development`: Issues that are groomed and are ready for an engineer to begin work. They're
   well defined in terms of the problem, and have a proposal that's defined enough for us to begin work; not every detail
   needs to have been defined, but an engineer should be able to start work on this issue by reading the issue description alone.
1. `Workflow::Next Up`: These issues are determined as the next ones that we should work on. We try to keep this list to about 4 / engineer in the team.
1. `Workflow::In Progress`: Issues that are actively being worked on by a developer.
1. `Workflow::Verification`: Issues that have engineering work complete and ready for evaluation. At this point, the developed solution
   should be evaluated (by the issue reporter or another stakeholder) to verify that it solves the original problem.
1. `Workflow::Complete`: Once signed off, the issue should be closed and `Workflow::Complete` should be applied to signal
the work is verified and complete.

There are three more states an issue can be placed in:

- `Workflow::Waiting`: Issues that are waiting from input from someone or are waiting on a dependency. These are
   issues that need input or progress from others before they can progress.
- `Workflow::Blocked`: These issues are either blocked by another issue or by missing API endpoints. The People
Ops Engineer always adds the reason why an issue is moved to blocked.
- `Workflow::On Hold`: These issues are currently on hold and the requester has been informed about this. It is still an important idea but there may not be capacity or resources to move the request forward. When a change in capacity and/or resources happens, we will re-evaluate the status of the ticket.

#### Triaging new tickets

We have a [performance indicator](/handbook/people-group/people-success-performance-indicators/#people-group-engineering-new-requests-are-triaged)
set to having new tickets being triaged within 7 working days. Everyone in the People Engineering team can triage new tickets. What we do when a new ticket comes in:

- check if everything in the template is filled in, if not ask the author to fill it in and add the label `Workflow::Waiting`
- check if we have any follow up questions for the creator, if we do, ping the author of the issue and ask them the questions, add the label `Workflow::Waiting`
- determine the project labels (for example `~p-compensation-calculator`, `~p-employment-automation`, etc)
- determine the priority label (see [priorities](#priorities))
- determine the team label `PopsEng::Team::Tech`, `PopsEng::Team::Engineering`, etc). You can also find a GitLab board, with the issues sorted by team [here](https://gitlab.com/groups/gitlab-com/people-group/peopleops-eng/-/boards/3107533).
- determine if it is a new project `~PopsEng::New Project` or a bug `~PopsEng::Bug` or an addition to an existing project or integration `~PopsEng::Addition`
- when we have all the information needed to start working on the ticket, label it with either `Workflow::Ready for Development` or `Workflow::Next Up`

Note: for bugs, we have another [performance indicator](/handbook/people-group/people-success-performance-indicators/#people-group-engineering-bug-to-first-action)
that requires us to take action within one working day. This is because often a bug in any of the integrations would lead to inefficiences and manual work
for the People Group.

#### Priorities

Before we state a ticket as fully triaged, we need to have the following information:

- is it compliance related?
- how often does the problem occur?  Daily, weekly, monthly, annually?
- how many team members are affected by this?
- what is the manual effort (in time) currently required to accomplish this work today?

With that knowledge in mind we determine the priority of a ticket, with the following table:

| Priority Level               | Compliance | Impact                       | Occurrence               | Project involved                      |
| --------------               | ---------- |-----------------             | ---------------          |-----------------------                |
| p1 (`~PopsEng::Priority::1`) | yes        | Any                          | daily, weekly or monthly | n/a                                   |
| p1 (`~PopsEng::Priority::1`) | no         | OKR progression              | n/a                      | n/a                                   |
| p2 (`~PopsEng::Priority::2`) | no         | Company                      | daily, weekly            | comp calc, nom bot, or conservatory |
| p3 (`~PopsEng::Priority::3`) | no         | Division, Department or Team | daily, weekly            | nom bot or conservatory            |
| p4 (`~PopsEng::Priority::4`) | no         | Any                          | daily, weekly          | n/a                                   |
| p5 (`~PopsEng::Priority::5`) | no         | Any                          | monthly, yearly        | n/a                                   |

Our issues will be labeled according to the priority level. Anything that falls outside of the table won't be labeled with a priority and will be added to our backlog and worked after priority items are completed.  As this is a first iteration, we will review those without labels to see if they should've been labeled differently and if we need to rework this table.

#### Kanban

Currently we moved away from monthly milestone and are trying out a Kanban approach for our work. The board
can be found [here](https://gitlab.com/groups/gitlab-com/people-group/peopleops-eng/-/boards/2641488). The column
`Workflow::Next Up` is the one that determines our next work.

The People Engineering team, tries to keep that column at about 4 tickets / engineer, so it's clear what our next
priorities are. To determine what gets moved into that column, we use our priority labels. However there are two
exceptions on the priority labels:

- issues labeled `bug`: these are tickets that often need to be fixed asap as this is usual an existing project or integration that is broken
- issues labeled `code maintenance`: these are tickets like library updates or refactors that we need to plan in to make sure our code stays up to standards and secure

### Review process

1. Assign your merge request to anyone in the People Group Engineering team
1. They will review it. Once the review is done, they will assign it back to you.
1. If the merge request was not approved yet, address the feedback and assign it back to the reviewer.
1. Continue the previous two steps until the merge request is approved.
1. If you have merge rights, merge the merge request. If you don't have merge rights, ask the reviewer to merge it.

## Current projects

We've build several automations and tools to support our People Group. In the following pages, you can find more details about all the different projects or automations we've created:

### Team member's employment

- [Onboarding Automations](/handbook/people-group/engineering/onboarding)
- [Organization Change Automations](/handbook/people-group/engineering/organization-change)
- [Offboarding Automations](/handbook/people-group/engineering/offboarding)

### Supportive tools for People Group

- [Nominator Bot](/handbook/people-group/engineering/nominatorbot/)
- [Compensation Calculator](https://gitlab.com/gitlab-com/people-group/peopleops-eng/compensation-calculator/)
- [Inclusive Language Check on Job Families](/handbook/hiring/job-families/#inclusive-language-check)
- [People Ops Internal Handbook](/handbook/people-group/engineering/pops-internal-handbook/)

### Uncategorized

- [Smaller syncs](/handbook/people-group/engineering/miscellaneous)
- [Slack Integrations](/handbook/people-group/engineering/slack-integrations)

## Data

### Single Source of truth

For all automations we use 2 main sources:

- Workday: their database acts as the single source of truth for everything related to the team member. We make use of a [custom middleware](https://gitlab.com/gitlab-com/people-group/peopleops-eng/connectors-gem/) from the [People Group Engineering Team](https://gitlab.com/gitlab-com/people-group/peopleops-eng/)'s Ruby gem, and interact with Workday using a bot user with limited access to employee details.
- Greenhouse: this is our single source of truth for everything related to candidates (so before
 they are hired). We make use of a [fork](https://gitlab.com/gitlab-com/people-group/peopleops-eng/greenhouse_io/) from the [Greenhouse](https://github.com/grnhse/greenhouse_io) Ruby gem, and interact with Greenhouse using a user with access to candidates details.

If any other sources are used for a specific integration or automation, it is mentioned on the section.

### Confidentiality

When a project uses API tokens with a certain level of access, we mirror
the public project to a private project on [ops.gitlab.net](https://ops.gitlab.net/).
These projects are only used to execute the scheduled jobs. For all planning, coding
and collaboration we use the public projects.

## Access to ChatOps for PeopleOps Team

Before the PeopleOps team member can excute the chat commands mentioned on this page, they need
to be invited to the [employment-automation](https://ops.gitlab.net/gitlab-people-engineering/employment-automation/)
project. This can be done by the owners of the project.

Once you are a member of the project, you can run any `/pops` command. The PeopleOps bot will respond that you
first have to connect your GitLab account. You can click the provided URL and authorize. Now you are able to run
the `/pops` commands.
