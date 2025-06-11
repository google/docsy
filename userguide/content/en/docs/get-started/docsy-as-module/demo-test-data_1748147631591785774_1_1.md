---
title: "Demo & Test data working group"
description: "TBD"
status: active
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2022-01-19 |
| End Date        | 2023-04-30 |
| Slack           | [#wg_demo-test-data](https://gitlab.slack.com/archives/C02M7GX1SBE) (only accessible from within the company) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1XmTGP1pNBDaC6LduW8rygYBdd8BrS5el2zjGvI7Dtyc/edit#heading=h.epyavtxljcb2) |
| Issues      | [Issue List](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=milestone&state=opened&label_name%5B%5D=wg_demo-test-data&first_page_size=20) / [Issue Board](https://gitlab.com/gitlab-org/gitlab/-/boards/3766722) |
| Overview & Status | See [Board](https://gitlab.com/gitlab-org/gitlab/-/boards/3766722) |

## Business Goal

The efficiency of both demo and test data is key to moving our business faster. We have fragmented locations where these data resides and are provisioned. There is also a knowledge gap between what is used in technical sales and what is used in test and validation.

We will benefit from tooling efficiency together and broaden visiblity of demo data in the field and test data in Engineering.

### Exit Criteria (100% completed)

1. [x] [Identify differences and gaps between demo and test data](https://gitlab.com/gitlab-org/gitlab/-/issues/351370)
1. [x] [Provide ability to seed demo data on-demand](https://gitlab.com/gitlab-org/gitlab/-/issues/361989)
1. [x] [Delivery of first iteration](https://gitlab.com/gitlab-org/gitlab/-/issues/361989) of [working demo data](https://gitlab.com/gitlab-org/gitlab/-/issues/351370) usable by SAs in the field
1. [x] [Define "beautiful test data" for SAs to use in the field](https://gitlab.com/gitlab-org/gitlab/-/issues/373741)
1. [x] [Deliver MVP based on the defined set of "beautiful test data"](https://gitlab.com/gitlab-org/gitlab/-/issues/373741#mvp-for-working-group)
1. [x] [Delivery of second iteration of working demo data more easily usable by SAs in the field](https://gitlab.com/gitlab-org/gitlab/-/issues/361997)
1. [x] [Rename AwesomeCo to GitLab Data Seeder](https://gitlab.com/gitlab-org/gitlab/-/issues/407261)
1. [x] [Publish GitLab Data Seeder Handbook Page](https://gitlab.com/gitlab-org/gitlab/-/issues/408123)

### Roles and Responsibilities

| Working Group Role    | Person                 | Title                             |
|-----------------------|------------------------|-----------------------------------|
| Facilitator           | Grant Young            | Staff Software Engineer in Test   |
| Stakeholder           | Tim Poffenbarger       | Senior Manager, Solutions Architects |
| Stakeholder           | Vincy Wilson           | Senior Manager, Quality Engineering |
| Executive Sponsor     | Mek Stittri            | VP of Quality                     |
| Technical Lead        | Dan Davison            | Staff Software Engineer in Test  |
| Member                | Marshall Cottrell      | Principal, Strategy and Operations (Technical) |
| Member                | Tim Zallmann           | Senior Director of Engineering    |
| Member                | Mark Wood              | Senior Product Manager            |
| Member                | Sameer Kamani          | Staff Federal Solution Architect  |
| Member                | Joe Randazzo           | Solutions Architect               |
| Member                | Darwin Sanoy           | Staff Solutions Architect         |
| Member                | Siddharth Mathur       | Solutions Architect               |
| Member                | Julie Byrne            | Senior Solutions Architect        |

## Result

The [GitLab Data Seeder](https://gitlab-org.gitlab.io/quality/data-seeder) was created as a result of this working group.

An internal [Slack channel](https://gitlab.slack.com/archives/C055Y333MM1) was created.

A [video](https://www.youtube.com/watch?v=4ZMLr8oDhqI) showing demo data was created.

## Future iterations and known issues

At the time of closing this Working Group, the following tasks are still outstanding.

- [Perform a live demo using seeded data](https://gitlab.com/gitlab-org/gitlab/-/issues/351373)
- [Import should render URLs correctly.](https://gitlab.com/gitlab-org/gitlab/-/issues/414981) ([example](https://youtu.be/4ZMLr8oDhqI?t=1274))
- [Allow multi-user setup](https://gitlab.com/gitlab-org/gitlab/-/issues/361994) and for ownership to be defined for issues/comments/etc. This will become more important as our "New UI" comes out.
- [Extend YAML parsing to allow raw ruby objects](https://gitlab.com/gitlab-org/gitlab/-/issues/403079)
- Better Documentation that is generated from the `spec`
- [Allow seed-wide variables](https://gitlab.com/gitlab-org/gitlab/-/issues/403849)
- [Implement a button on GitLab UI for Group Seeding](https://gitlab.com/gitlab-org/gitlab/-/issues/362005)
- [Complete stretch goals for what good looks like (Beautiful Data)](https://gitlab.com/gitlab-org/gitlab/-/issues/414979)

For a complete list, see the [Data Seeder Issue Tracker](https://gitlab.com/gitlab-org/gitlab/-/boards/3766722?label_name[]=data%20seeder).

## Feedback

For any questions, issues, or feedback, please reach out to [`#data-seeder`](https://gitlab.slack.com/archives/C055Y333MM1), create an issue with the label `~"data seeder"`, or add a comment to [the feedback issue](https://gitlab.com/gitlab-org/gitlab/-/issues/414671).
