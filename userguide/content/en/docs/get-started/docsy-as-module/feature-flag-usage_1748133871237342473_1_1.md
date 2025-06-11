---
title: "Feature Flag usage Working Group"
description: "The feature flag usage working group aims to establish global policies and processes around the usage of feature flags in the development of GitLab"
---

## Attributes

| Property     | Value                                                                                                                  |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------|
| Date Created | Dec 3, 2020 |
| End Date     | July 28, 2021 |
| Slack        | [#wg_feature-flag-usage](https://gitlab.slack.com/archives/C01GACLFVT3)      (only accessible from within the company) |
| Google Doc   | [Working Group Agenda](https://docs.google.com/document/d/1Q_GyFSMep0SXGxnNW_PgrX2Xzq6EOOx7ZFbtyR_9DvY/edit#) (only accessible from within the company)  |

### Charter

This working group will co-ordinate the organization of the effort to improve the usage of feature flags in the development of GitLab. There are many asynchronous and currently ongoing discussions in the organization about internal feature flag usage. We aim to collect and co-ordinate these conversations in order to create uniform policies and processes for the usage of feature flags within GitLab. The uniformity of these policies is key in order for internal stakeholders, community members, and customers have more consistent insight into the availiabilty of GitLab features.

### Scope and Definitions

This group will create processes and policies that are as lean as possible in order to ensure that the way feature flags are used by engineers meets the needs of all stakeholders. Stakeholders for feature flags generally are individuals who care about the current state of features on GitLab.com and self-managed GitLab instances of a particular version.

#### Definitions

- **Feature Flag** - this isn't necessarily the [feature flag feature](https://docs.gitlab.com/ee/operations/feature_flags.html) but rather the way we [use feature flags in the development of GitLab](https://docs.gitlab.com/ee/development/feature_flags/index.html)

### Exit Criteria

1. ✅ Fulfillment of the feature flag [architectural blueprint](https://docs.gitlab.com/ee/architecture/blueprints/feature_flags_development/)
1. ✅ Completion of all issues labeled with the working group scoped label on [GitLab.org](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=WorkingGroup%3A%3AFeatureFlagUsage) and [GitLab.com](https://gitlab.com/groups/gitlab-com/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=WorkingGroup%3A%3AFeatureFlagUsage)
1. ✅ Refinement and assignment of [Feature Flag Training](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/80476d9861756b3a9c8a062267288f36ff6156ca/.gitlab/issue_templates/feature-flag-training.md), and [Feature Flag Monitoring training](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/80476d9861756b3a9c8a062267288f36ff6156ca/.gitlab/issue_templates/monitoring-training.md) for GitLab engineers
1. ✅ Audit, refine, and communicate the [Feature flags in development of GitLab documentation](https://docs.gitlab.com/ee/development/feature_flags/)
1. ✅ [Each functional lead is satisfied](https://gitlab.com/gitlab-org/gitlab/-/issues/336142) of the state of the feature flag processes in place in the development of GitLab
1. ✅ Provide data to support long-term feature flag management so we can monitor the lifecycle of feature flags and take action on them as appropriate.

### Work in Progress

- [Capturing the current feature flag lifecycle](/handbook/product-development/product-development-flow/feature-flag-lifecycle/)

## Roles and Responsibilities

The functional leads will be responsible for:

- Representing the needs of individual stakeholders in their department/sub-dept
- Gathering and consolidating feedback on specific proposals from their department/sub-dept
- Communicating the output from the working group (if any) and answering questions from their dept/sub-dept

Ideally the functional lead is someone who is an IC that might be affected by the policy put in place. but anyone capable of representing a department or sub-department in the fashion mentioned above is welcome.

The stakeholder departments in the table are the ones identified in the [architectural blueprint](https://docs.gitlab.com/ee/architecture/blueprints/feature_flags_development/), and listed here for reference: Engineer, Engineering Manager, Engineering Director, Product Manager, Technical Writer, Delivery Engineer, SRE.

| Working Group Role                     | Person | Stakeholder Department | Title |
|:---------------------------------------|:-------|:------|:------|
| Executive Sponsor                      | Christopher Lefelhocz |  | VP of Development           |
| Facilitator                            | Ricky Wiens | Engineering Manager | Backend Engineering Manager, Verify:Testing        |
| Functional Lead                        | Kamil Trzciński | Engineer | Distinguished Engineer, Ops and Enablement     |
| Functional Lead                        | Kenny Johnston | Product Manager | Senior Director of Product Management, Ops |
| Functional Lead                        | James Heimbuck | Product Manager | Senior Product Manager, Verify:Pipeline Execution          |
| Member                                 | Grzegorz Bizon | Engineer | Staff Backend Engineer, Verify                  |
| Member                                 | Craig Gomes | Engineering Manager | Backend Engineering Manager, Memory and Database   |
| Member                                 | Michelle Gill | Engineering Manager | Engineering Manager, Create:Source Code          |
| Member                                 | Doug Stull | Engineer | Senior Fullstack Engineer, Growth:Expansion         |
| Member                                 | Andrew Fontaine | Engineer | Senior Frontend Engineer, Release              |
| Member                                 | Rémy Coutable | Engineer | Staff Backend Engineer, Engineering Productivity |
| Member                                 | Marin Jankovski | Delivery Engineer | Senior Engineering Manager, Infrastructure, Delivery & Scalability |
| Member                                 | Marcia Ramos | Technical Writing | Senior Technical Writer, Create, Development Guidelines |
