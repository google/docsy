---
title: Software Supply Chain Security Sub-department
layout: single
---

The Software Supply Chain Security sub-department teams are the engineering teams in the [Software Supply Chain Security Stage](https://about.gitlab.com/direction/software_supply_chain_security/) of the product.

## Vision

To support GitLab's product vision through alignment with the [Software Supply Chain Security stage](https://about.gitlab.com/direction/software_supply_chain_security/) product direction.

## Groups

- [Authentication](authentication/)
- [Authorization](authorization/) and [Anti-abuse](anti-abuse/)
- [Compliance](compliance/)
- [Pipeline Security](pipeline-security/)

## Priorities

Group priorities are reviewed collaboratively with product counterparts and published on the Software Supply Chain Security direction pages

- [Anti-abuse](https://about.gitlab.com/direction/software_supply_chain_security/#priorities)
- [Authentication](https://about.gitlab.com/direction/software_supply_chain_security/authentication/#priorities)
- [Authorization](https://about.gitlab.com/direction/software_supply_chain_security/authorization/#priorities)
- [Compliance](https://about.gitlab.com/direction/software_supply_chain_security/compliance/tactical-priorities.html#priorities)
- [Pipeline Security](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/#priorities)

### Product Documentation Links

- [Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/)
- [Vulnerability Pages](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/)
- [Security scanner integration](https://docs.gitlab.com/ee/development/integrations/secure.html)
- [Security glossary](https://docs.gitlab.com/ee/user/application_security/terminology/)
- [Software Supply Chain Security testing priorities](/direction/software_supply_chain_security/testing_priorities.html)
- [Pipeline Security](https://docs.gitlab.com/ee/ci/pipelines/pipeline_security.html)

## All Team Members

### Authentication

{{% team-by-manager-slug manager="adil.farrukh" team="Engineer(.*)Software Supply Chain Security:Authentication" %}}

### Authorization and Anti-abuse

{{% team-by-manager-slug manager="jayswain" team="Engineer(.*)Software Supply Chain Security:Authorization|Software Supply Chain Security:Anti-Abuse" %}}

### Compliance

{{% team-by-manager-slug manager="nrosandich" team="Engineer(.*)Software Supply Chain Security:Compliance" %}}

### Pipeline Security

{{< team-by-manager-slug manager="scott-hampton" team="Engineer(.+)Software Supply Chain Security:Pipeline Security" >}}

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

{{% stable-counterparts role="Software Supply Chain Security" other-manager-roles="Engineering Manager(.*)Software Supply Chain Security:(.*)|Director of Engineering(.*)Software Supply Chain Security" %}}

## Software Supply Chain Security staff meeting

The Software Supply Chain Security stage engineering department leaders meet weekly to discuss stage and group topics in the `Software Supply Chain Security staff meeting`. This meeting is open to all team members and is published on the Software Supply Chain Security stage calendar.

Meetings have an agenda and are async-first, where the aim is to resolve discussions async and leave time in the meeting to deep dive into topics that require more discussion.

We use the [Software Supply Chain Security Sub-department Board](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/boards/4833026) to better organize our discussions.

### Weekly updates

The Software Supply Chain Security development teams provide [weekly status updates](https://gitlab.com/groups/gitlab-com/-/epics/2126) using an issue template and CI scheduled job.
As priorities change, engineering managers update the [template](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_weekly_update.md) to include areas of interest such as priorities, opportunities, risks, and security and availability concerns. The updates are GitLab internal.

### Quarterly review updates

Every quarter, an engineering manager for each group in the Software Supply Chain Security Sub-department prepares the quarterly review update using the issue template and records approximately 5 minutes to summarize the last quarter from the engineering perspective and present a high-level plan for the group for the next one to respond to quarterly Product strategy and explain our goals for next quarter.

We aim to foster collaboration and communication between engineering managers in the Software Supply Chain Security Sub-department, align groups on product priorities for the next quarter, and celebrate our successes together.

Quarterly review update template can be found [here](https://gitlab.com/gitlab-com/software_supply_chain_security-sub-department/-/blob/main/.gitlab/issue_templates/sscs_stage_quarterly_review.md)).

### OKR planning

Our OKRs are a mixture of top down, aligned with Company-wide, Product, or Engineering Division OKRs, and bottom up engineering-led initiatives driven by our team members in Software Supply Chain Security. Any team member can propose an OKR for Software Supply Chain Security by creating a [proposal issue](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/) in our internal OKR project. The issue can be used to collaborate and discuss the proposal. When we are ready to commit, we can create or align to an existing Objective, and add specific key results to track through the quarter.

Labels:

- `Sub-Department::software supply chain security` - for top-level sub-department Objectives.
- `devops::software supply chain security` - for Objectives and key results for the stage, and stage groups
- `group::` - for Objectives and key results for a specific group

Each Objective and Key Result should have an assignee who is DRI for providing status updates throughout the quarter. Regular updates are preferred. At a minimum these should be updated

- By end of day, the second Friday of every month
- Ay the end of the quarter

OKRs can be changed or closed during the quarter if they are completed, or as our goals change. This ensures we are focusing on areas that are revelant to our current and future priorities.

### PTO

We follow the [Engineering process for taking time off](/handbook/engineering/#taking-time-off) and [GitLab team members Guide to Time Off](/handbook/people-group/paid-time-off/#a-gitlab-team-members-guide-to-time-off).

#### Engineering Leadership - PTO or unavailable

Team members should contact any Software Supply Chain Security Engineering Manager by mentioning in `#sd_sscs_engineering` or `#sscs-development-people-leaders` if they need management support for a problem that arises, such as a production incident or feature change lock, when their direct manager is not available. The Software Supply Chain Security manager can provide guidance and coordination to ensure that the team member receives the appropriate help.

Some people management tasks, including [Workday](/handbook/people-group/workday-guide) and [Navan Expense](/handbook/business-technology/enterprise-applications/guides/navan-expense-guide), may require for escalation or delegation.

## Skills

Because we have a wide range of domains to cover, it requires a lot of different expertise and skills:

| Technology skills | Areas of interest    |
|-------------------|----------------------|
| Ruby on Rails     | Backend development  |
| Go                | Backend development  |
| Vue, Vuex         | Frontend development |
| GraphQL           | *Various*            |
| SQL (PostgreSQL)  | *Various*            |
| Docker/Kubernetes | Threat Detection     |

## Everyone can contribute

At GitLab our goal is that [everyone can contribute](/handbook/company/mission/#contribute-to-gitlab-application). This applies to GitLab team members and the wider community through community contributions. We welcome contributions to any and all features, but recognize that first time contributors may prefer to start with smaller features. To support this we maintain a list of `quick wins` that may be more suitable for first time contributors, and contributors new to the domains in Software Supply Chain Security.

- [Quick wins](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=quick%20win&label_name%5B%5D=devops%3A%3Asoftware%20supply%20chain%20security&first_page_size=20)

If the contributor needs an EE license, we can point towards the [Contributing to the GitLab Enterprise Edition (EE)](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows/#contributing-to-the-gitlab-enterprise-edition-ee) section on the Community contributors workflows page.

## Testing

During the planning phase of a milestone, the EM for each group will create a new issue using the template in [epic](https://gitlab.com/groups/gitlab-org/quality/quality-engineering/-/epics/70), for any major new features and tag Software Engineer in Test from Software Supply Chain Security. SETs from Test Engineering and EMs can periodically review/discuss the list of open issues, and add appropriate priority labels.

The intent of [shifting left and testing at the right level](https://docs.gitlab.com/ee/development/testing_guide/testing_levels.html#how-to-test-at-the-correct-level) is that teams are responsible for testing and to have engineers doing the feature coverage reviews and adding specs or E2E test as needed. The reason for including the SET is to give oversight across the groups and provide guidance/support. If the SET has capacity then they can contribute as needed, using the priority labels, but this is not the expectation.

## Metrics

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "STAGE_LABEL"="software_supply_chain_security" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "STAGE_LABEL"="software_supply_chain_security" >}}
{{< /tableau >}}

## Links and resources

{{% include "includes/engineering/software_supply_chain_security-shared-links.md" %}}

### Technical Documentation Links

- [End-to-end tests](https://gitlab.com/gitlab-org/gitlab/-/tree/master/qa/qa/specs/features/ee/browser_ui/10_govern)
