---
title: "Runtime Update Process"
description: "Streamline the language runtime (version) update process by reducing manual intervention by engineers"
status: active
---

## Attributes

| Property        | Value                                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------------|
| Date Created    | 2022-11-29                                                                                                    |
| Target End Date | TBD                                                                                                           |
| Slack           | [#wg-runtime-update-process](https://gitlab.slack.com/archives/C045H9HDV7T)                                   |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/11HRehnkZqXhFMyM_nrftRS1LNuHqPo8S8wcZpPOry9g/edit#) |
| Task Board      | [Issue board](https://gitlab.com/groups/gitlab-org/-/boards/5467616)                                          |
| Epic            | [Link](https://gitlab.com/groups/gitlab-org/-/epics/10154)                                                     |

## Business Goal

We need to streamline the language framework (version) update process. Language framework updates are driven by multiple teams, cumbersome, and the processes are inconsistent between the multiple frameworks we use today. In the case of Go, a half dozen or more teams are involved. The current upgrade process is difficult to execute at scale and requires manual intervention with a high degree of complexity. Goals include, but are not limited to:

- Create a streamlined Golang runtime (version) update process or possibly a language framework agnostic process
- Reduce update process complexity
- Create documentation around the update process to improve efficiency
- Increase developer and management efficiency

## Tracking Progress

Progress will be tracked on the Working Group [issue board](https://gitlab.com/groups/gitlab-org/-/boards/5467616) using the following labels:

- ~"workflow::In dev"
  - The issue is currently in progress and actively being worked on
- ~"workflow::In review"
  - The issue is currently being reviewed by broader Engineering Team
- ~"workflow::blocked"
  - The issue is blocked by another issue.  Please refer to the blocking issue.
- ~"workflow::production"
  - The issue has been completed and should be closed.

### Exit Criteria (0% completed)

| Criteria | Start Date | Target Completion Date | Completed Date | DRI |
|----------|------------|------------------------|----------------|-----|
| Build and document a repeatable upgrade process that's applicable to our major platforms such as Go, Ruby, Rails, and Vue. | 2023-03-30 | 2023-08-31 | | |
| Upgrade to Go 1.20 | 2023-03-30 | 2023-07-30 | | @rmarshall |
| Evaluate a second framework for an upgrade such as Ruby, Python, or Node | 2023-06-01 | 2023-06-30 | | |
| Upgrade a second framework to validate our process | 2023-07-01 | 2023-09-30 | | |

### Roles and Responsibilities

| Working Group Role | Person                | Title                                   |
|--------------------|-----------------------|-----------------------------------------|
| Executive Sponsor  | Christopher Lefelhocz | VP of Development                       |
| Facilitator        | Matt Nohr             | Engineering Manager, Create             |
| Functional Lead    | Robert Marshall       | Senior Backend                          |
| Member             | Chun Du               | Director of Engineering, Enablement     |
| Member             | Thomas Woodham        | Senior Engineering Manager, Secure      |
| Member             | Ross Fuhrman          | Senior Backend                          |
| Memeber            | Patrick Bajao         | Senior Backend Engineer, Create         |
