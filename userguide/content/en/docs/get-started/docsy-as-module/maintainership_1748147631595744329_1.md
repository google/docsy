---
title: "Maintainership"
description: "Improve the Development Department Maintainership to be sustainable for the next 5 years"
---

## Attributes

| Property        | Value      |
|-----------------|------------|
| Date Created    | 2022-04-19 |
| End Date        | 2023-02-02 |
| Slack           | [#wg_maintainership](https://gitlab.slack.com/archives/C03CGL9DDL4) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1RuWhO2q7rsgSKrnSCf2xsOrp56SXBHe_z5XKDls5px8/edit#heading=h.epyavtxljcb2)  |
| Task Board      | [Issue board](https://gitlab.com/groups/gitlab-com/-/boards/4208478?label_name[]=WorkingGroup%3A%3AMaintainership) |
| Epic            | [Link](https://gitlab.com/groups/gitlab-com/-/epics/1808) |

## Business Goal

We have seen overall inconsistent results with maintainership in the last quarter. Examples: A subset of maintainers are taking the burden of reviews which can lead to serious problems in job satisfaction issues and burnout. We are growing (both in headcount as well as community contributions), but the number of maintainers has stabilized. The number of repos which need maintainer support is increasing while coverage of them has decreased. We want transparency that seniors who are maintainers are having a positive impact in the multiple areas listed here, which leads to more career opportunities for them than it does non-maintainers.

Our objective is to change our processes and culture to have an organization which we know can sustain maintainership for the next 5 years that meets the demand of both the company and the open core project. This includes, but is not limited to:

- Increasing current maintainers and having a forecasting to know we will increase in the future.
- Availability measures which demonstrate maintainers are able to meet demands of code reviews
- Load balancing measures to distribute MR reviews evenly among maintainers
- Improvements in code review features and CI/tooling to support the maintainers and reduce work needed for reviews
- Coverage/monitoring measures to know when a part of the code base is adequately supported or needs help
- Improvements in onboarding maintainers at our new scale
- Have some fun

## Tracking Progress

Progress will be tracked on the Working Group [issue board](https://gitlab.com/groups/gitlab-com/-/boards/4208478?label_name[]=WorkingGroup%3A%3AMaintainership) using the following labels:

- ~"workflow::In dev"
  - The issue is currently in progress and actively being worked on
- ~"workflow::In review"
  - The issue is currently being reviewed by broader Engineering Team
- ~"workflow::blocked"
  - The issue is blocked by another issue.  Please refer to the blocking issue.
- ~"workflow::production"
  - The issue has been completed and should be closed.

### Exit Criteria (100% completed)

Exit criteria for this working group has been completed, however monthly follow up meetings are still active until February 2, 2023.

## Maintainership Process

The maintainership process is described [on this page](/handbook/engineering/workflow/code-review/#maintainer).

### Exit Criteria (100% completed)

| #  | Start Date | Target Completion Date | Completed Date | DRI        | Criteria |
| -- | ------     | ------ | ------         | ------     | ------   |
| 1  |  2022-06-01       | 2022-07-22 | 2022-10-28            | @nhxnguyen | [Create an implementation plan to remedy gaps in Maintainership coverage](https://gitlab.com/groups/gitlab-com/-/epics/1817)|
| 2  |  2022-04-26       | 2022-07-22 | 2022-07-18      | @mwoolf | [Develop metrics to provide more transparency into the health of the Maintainership program](https://gitlab.com/groups/gitlab-com/-/epics/1816) |
| 3  |  2022-05-04       | 2022-08-05 | 2022-10-04            | @robotmay_gitlab | [Update expected behaviors and responsibilities for Engineers and Maintainers](https://gitlab.com/groups/gitlab-com/-/epics/1815) |
| 4  |  2022-05-18       | 2022-08-05 | 2022-10-04            | @oregand | [Improve the Trainee Maintainer process to make the process more efficient](https://gitlab.com/groups/gitlab-com/-/epics/1814) |
| 5  |  2022-06-01       | 2022-08-05 | 2022-11-16            | @sabrams | [Develop and implement a communication plan for Maintainership changes](https://gitlab.com/groups/gitlab-com/-/epics/1813) |

### Data and dashboards

- [Reviewer/Maintainer availability and capacity](/handbook/engineering/workflow/code-review/#maintainerreviewer-availability) - Shows the maintainer/reviewer availability rate over time and incoming/forecasted review requests
- [Maintainers and Trainees](/handbook/engineering/development/performance-indicators/#maintainers-and-trainees)
- [Maintainership Demand](/handbook/engineering/workflow/code-review/#maintainer-demand)

### Roles and Responsibilities

| Working Group Role    | Person                                               | Title                                                      |
|-----------------------|------------------------------------------------------|------------------------------------------------------------|
| Executive Sponsor                         | Christopher Lefelhocz                  | VP of Development    |
| Facilitator                               | Michelle Gill                          | Senior Engineering Manager, Manage   |
| Functional Lead (Enablement)              | Alex Ives                              | Engineering Manager, Database     |
| Functional Lead (Fulfillment)              | Jerome Ng                              | Senior Manager of Fulfillment |
| Functional Lead (Ops)                      | Sam Goldstein                          | Director of Ops |
| Functional Lead (Dev)                      | Max Woolf                              | Senior Backend Engineer, Govern:Compliance |
| Functional Lead (Sec, Data Science, Growth)   | Thomas Woodham                         | Sr. Engineering Manager, Secure Analyzers |
| Functional Lead (Maintainer - Frontend)         | Natalia Tepluhina | Staff Frontend Engineer |
| Functional Lead (Non-Maintainer - Backend)      | Manoj M J | Senior Backend Engineer |
| Functional Lead (Trainee - Registry DB)          | Steve Abrams | Intermediate Backend Engineer |
| Functional Lead (Maintainer - Workhorse, Shell) | Robert May | Senior Backend Engineer |
| Functional Lead (Maintainer - Frontend)         | Ezekiel Kigbo | Senior Frontend Engineer |
| Functional Lead (Maintainer - Omnibus)          | Balasankar C       | Senior Backend Engineer |
| Functional Lead (Maintainer - CNG, Operator)    | Mitchell Nielsen | Senior Backend Engineer |
| Member            | Sean McGivern                | Staff Backend    |
| Member            | Allen Cook                 | Senior Backend   |
| Member            | Terri Chu                     | Senior Backend   |
| Member            | Doug Stull                      | Staff Fullstack  |
| Member            | Pavel Shutsin                 | Senior Backend   |
| Member            | Sincheol Kim                 | Senior Backend   |
| Member            | Michał Zając                | Senior Backend   |
| Member            | Douglas Barbosa Alexandre  | Staff Backend    |
| Member              | Paul Gascou-Vaillancourt   | Senior Frontend,   |
| Member            | Dennis Tang                  | Engineering Manager, Govern:Compliance |
| Member            | Nick Nguyen                  | Senior Engineering Manager, Datastores |
| Member            | Darva Satcher              | Senior Engineering Manager, Create / Ecosystem Stage |
| Member            | Jiaan Louw                  | Senior Frontend Engineer, Govern:Compliance |
| Member            | Rémy Coutable          | Staff Backend Engineer, Contributor Success |

## Communicating changes

### Labels

We have two sets of labels to help facilitate communications:

**Type of changes and their impact**

Use these labels to identify the type of change being made:

- `~"Maintainership WG::process change"` - This update changes an existing process or workflow
- `~"Maintainership WG::new process"` - This update introduces a new process or workflow
- `~"Maintainership WG::responsibility change"` - This update changes or introduces a responsibility
- `~"Maintainership WG::other change"` - This is an update that may warrant an announcement but does not fit in the above categories

**Communication status**

Use these labels to identify if a change is ready to be communicated or if it has been communicated:

- `~"Maintainership WG Comms::ToDo"` - This update is ready to be communicated
- `~"Maintainership WG Comms::Needs Support"` - This update needs something additional to support it when it is announced. This could be things like handbook updates, an FAQ, or an AMA.
- `~"Maintainership WG Comms::Done"` - This update has been communicated

### Runbook

#### Levels of announcements

There are generally three types of announcements that could apply to any update:

1. **Alert** - Something certain individuals *might want to be aware of*.

  Example: letting trainees and maintainers know that the program is meant to last one year, at which time it should be evaluated.

  Alerts are the lowest priority type of announcement. If some people miss it, that is not a problem. Alerts can usually be announced one time.

1. **Change** - Something certain individuals *need to be aware of*.

  Example: changing the number of approvals necessary to become a maintainer.

  Changes usually require adoption, which is not something that happens after a single announcement. So it is important to not only communicate to the effected individuals, but also those who can endorse and promote the changes such as engineering managers or higher levels of management.

  Some announcements may gain a wider audience if they come from someone in senior management. If the subject matter is high enough in priority, consider reaching out to your sub-department director for guidance or asking in an engineering staff meeting for help with the announcement.

1. **Action** - Something that requires certain individuals to take action within a given time period of the announcment.

  Example: requesting survey feedback or communicating a behavior change that needs to be adopted within a certain time frame.

  Depending on the priority and urgency of the action needed, additional reminders are appropriate. For surveys, reposting a few times within the time frame before the survey closes is appropriate.

#### Making an announcement

Consider the following questions when making an announcement:

- **Are there any other areas of the docs or handbook that should be updated?** Ensure there is no conflicting information that could cause confusion.
- **Do you have links to the handbook or docs to accompany the announcement?** Ensure more information is available for those who need it.
- **Do you have a place where people can go with more questions or clarifications?** Provide an issue/doc/slack channel/AMA if it is expected that people may want further details.
- **Does this change disrupt an established process?** If so, it may make sense to prompt managers to take action to raise awareness and adoption of the process.
- **Is the change large enough that we may have a large number of questions?** Consider opening an FAQ file or scheduling an AMA (`@sabrams` can also facilitate these items).

- [ ] Include links to the most relevant piece of information. Do not overcrowd the announcement with non-primary links.
- [ ] If the announcement is for **awareness**:
  - [ ] Communicate it to the most [relevant slack channel](#communication-channels) and cross-post to other relevant channels
  - [ ] Add it to eng-week-in-review
- [ ] If the announcement is for **action**
  - [ ] Communicate as above and consider adding it to management staff meetings.
- [ ] If you are seeking feedback as a result, provide a link to where feedback can be given

##### Divisive changes

Sometimes changes are controversial or involve subjects where people might have deep opinions. It is important that when such changes occur, everyone has access to resources and information to help them understand:

- How they are affected
- Why the change was made
- Where they can give feedback

An FAQ or AMA can be helpful in supplying much of this information.

Ideally, we want people to embrace a change, but at the least, we need to start with adoption. To help guide embracement, the "why" behind the change has to be strongly defined, optimally with strong data backing it.

#### Conducting a survey

- [ ] Establish the goal of the survey
- [ ] Share in the most [relevant slack channel](#communication-channels) and cross-post to other relevant channels
- [ ] Communicate the end date or due date for the survey
- [ ] Define a minimum number of responses to make the results representative/useful
- [ ] Add a question to distinguish between different subgroups if applicable (frontend/backend, reviewer/trainee/maintainer) for pivoting the results.

#### Communication channels

It is appropriate for almost any changes to be communicated in:

- `#development`
- `#eng-week-in-review`

Communicating in `#whats-happening-at-gitlab` is also a good idea for changes that effect large groups of people.

Here are a few different categorizations of changes that can help you decide which channels to consider communicating to.

##### By exit criteria

| Exit Criteria | Relevant Channels |
| ----------- | ----------------- |
| [Create an implementation plan to remedy gaps in Maintainership coverage](https://gitlab.com/groups/gitlab-com/-/epics/1817) | Channels for the projects directly effected by the changes. |
| [Develop metrics to provide more transparency into the health of the Maintainership program](https://gitlab.com/groups/gitlab-com/-/epics/1816) | `#eng_managers`<br />Engineering staff meetings |
| [Update expected behaviors and responsibilities for Engineers and Maintainers](https://gitlab.com/groups/gitlab-com/-/epics/1815) | `#trainee_maintainers`<br />`#backend_maintainers`<br />`#frontend_maintainers`<br />`#database_maintainers`<br />`#eng_managers`<br />Engineering staff meetings |
| [Improve the Trainee Maintainer process to make the process more efficient](https://gitlab.com/groups/gitlab-com/-/epics/1814) | `#trainee_maintainers`<br />`#backend_maintainers`<br />`#frontend_maintainers`<br />`#database_maintainers`<br />`#eng_managers`<br />Engineering staff meetings |

##### For `gitlab-org/gitlab` (GitLab Rails)

| Topic | Relevant Channels |
| ----- | ----------------- |
| Backend | `#backend`<br />`#backend_maintainers` |
| Frontend | `#frontend`<br />`#frontend_maintainers` |
| Database | `#database`<br />`#database_maintainers` |
| Trainee updates | `#backend_maintainers`<br />`#frontend_maintainers`<br />`#trainee_maintainers` |
| Responsibility/process updates | Any of the above channels and `#eng_managers` |

##### Other projects

For changes concerning a specific project, try to notify the group that owns the project in addition to specific channels for that project. For example, workhorse changes should be communicated to `#workhorse` and `#g_create_source_code` as the owners of that project.

The [product category page](/handbook/product/categories/) and the [projects page](/handbook/engineering/projects) may be helpful for determining which groups and stages own specific projects. If it is not apparent, another way to determine ownership include filtering the project members by direct membership and asking the owners or maintainers directly who owns the project.
