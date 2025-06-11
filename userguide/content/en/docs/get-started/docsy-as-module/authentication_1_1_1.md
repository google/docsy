---
title: "Authentication Group"
---

### SSCS:Authentication{#welcome}

#### Mission

Our mission is to empower GitLab system administrators with the toolkit they need to create their desired balance of security and accessibility for their GitLab experience. Authentication is the first impression any new customer has when they configure their shiny new GitLab instance, and we aim to make it as seamless as possible: from that moment of first logging in, to onboarding users, to managing the basic security rules for their instance in a secure, flexible and scalable manner.

#### Top Priorities for FY25

Our detailed priority list can be found at the [direction page](https://about.gitlab.com/direction/software_supply_chain_security/authentication/#priorities) however on a higher level the focus would be on:

1. GCP integration
2. Cells readiness
3. Service accounts MVC features
4. Passwordless authentication
5. Enterprise user admin controls and policies management
6. Bringing Credentials inventory to GitLab.com
7. Reducing the number of flakey tests, older FFs, S3 bugs and manual handing of support/CSM questions.
8. Group SCIM Sync support
9. Service accounts UI and enhanced capabilities
10. Token management enhancements
11. Credential Manager enhancements

#### Customer Outcomes we are driving for GitLab

As a result of the above roadmap items, we aim to driver the following outcomes for our customers:

- By supporting Cells work, customers should experience improved reliability and compartmentalization of disruptions on GitLab.com.
- Expanding Service accounts will reduce the human touch points around credentials setup for automation use cases, bolstering customer's security posture and efficiency when using GitLab. At the same time, new Service account UI will allow them to easily setup, manage and revoke these higher privilege accounts providing better transparency and audit-ability. Combined with token management enhancements, customers will be able to confidently manage, enforce and mitigate access token related risks.
- Additional Enterprise user admin controls will result in reduced workload and improved security policy management for organizations while migration of Credential Inventory to SaaS will provide all administrators better visibility and control around credentials in use.
- We aim to improve and unify user provisioning setup for customers by expanding SCIM group sync support such that they don't need to rely on both SAML and SCIM for user provisioning and access management.

#### List of OKRs

Our OKRs are focused on:

- [Improving support and help request experience](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5858)
- [Reducing the number of flaky or slow tests](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5853)
- [Career growth of Authentication team members](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/5643)
- [Adopting Cells and sharing lessons from investigation spikes](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6280)
- [Roadmap completion around GCP Integration](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6186)

#### Metrics the team tracks

In order to ensure we manage our technical debt while making progress on our roadmap, and addressing security vulernabilities or bugs in time, the team tracks the following metrics:

- Engineering productivity metrics
  - MR rates across team to ensure changes are being delivered iteratively.
  - S1, S2 and S3 bugs and burndown rates to ensure that we are moving towards a downward trend on all 3. Currently no S1 are open, with a very small number of S2s.
  - Vulnerability due dates, in particular any that run the risk of hitting SLOs.
  - Error rates for Authentication API, workers and web workflows.
  - Infradev issues SLOs.
  - Maintainer-ship status for the group.
  - Domain knowledge areas and coverage across each one for bus factor tracking.
  - Feature flags associated with the group.
  - Flaky test attributed to the group.

- Product metrics
  - Adoption of auth integrations such as SAML, Identity providers, Group sync
  - Enterprise users claimed

#### What makes us different?

The Authentication group is a central piece to the GitLab product! While many groups focus on single area - like the repository view, or the merge request view, this group has a much broader impact on many areas. Because of this, there are some key topics that we keep on our mind more than other groups might:

##### Security vulnerability issues

Bypassing permissions and authentication mechanisms are, by nature, common security targets. We closely watch new security vulnerability issues and schedule them as quickly as possible based on their [due date](/handbook/security/engaging-with-security/#due-date-on-security-issues). For planning security issues we use [the (filtered) milestone planning issue board](https://gitlab.com/gitlab-org/gitlab/-/boards/4260654?label_name%5B%5D=sec%3A%3Asscs&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=bug%3A%3Avulnerability). We expect all team members to be able to resolve security issues following the [security developer workflow](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md#security-releases-critical-non-critical-as-a-developer).

##### Code Review

Because this group works on components of the application that have a [far-reaching impact](/handbook/engineering/development/#reducing-the-impact-of-far-reaching-work), we take these extra steps in order to reduce our risk of a production incident:

1. Our team's merge requests should be assigned to another Auth team member for first review in order to build more institutional knowledge across the team. This review should be done as a [reviewer](https://docs.gitlab.com/ee/development/code_review.html#the-responsibility-of-the-reviewer). The Auth approval counts as the approval matching the role of the Auth Reviewer, e.g. having a Backend Review from Auth counts as a Backend Review. Once approved, the Auth Reviewer should request a review from a Maintainer from the appropriate [maintainer category](https://docs.gitlab.com/ee/development/code_review.html#approval-guidelines).
1. Auth merge requests will include a comment that needs answered before merging, "Should this be behind a feature flag?" This is an effort to remind engineers about feature flag usage, but also to challenge reasoning as to why changes do not need to be behind a feature flag.
1. Auth related merge requests require a review by an [Auth Engineer](https://gitlab.com/groups/gitlab-org/sscs/authentication/approvers/-/group_members?with_inherited_permissions=exclude). This is guarded by using the [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/) feature of GitLab.

##### Rollout and validation for token related features or destructive data updates

Due to the critical nature of tokens (PAT, PrAT and GrAT) and their associated bot accounts or memberships, a careful rollout process must be followed. This also extends to feature changes that update large datasets in the database. As part of feature completion, the DRI engineer must create a rollout plan and have it peer reviewed by at least 2 other engineers familiar with the domain.

The rollout plan can use any number of the following mechanisms to de-risk the changes:

1. Use of feature flags that can be set to test the feature out with a group or set of actors. If that is not possible, consider running the worker for a narrow batch of users until it has been validated and can be run on larger sets.
1. For database changes, evaluate the count of expected record changes before and after, the last update dates and the associated records to see whether a certain relationship may have been missed from implementation design.
1. Changes should be enabled on lower environments such as staging or staging-ref to verify expected functionality. As much as possible, attempt to replicate the data structures from GitLab.com on these lower environments.
1. Use of internal groups such as quality team or delivery teams which are production systems, but still internal. This would test the feature at a production level, ideally with no negative impact, but still offer a layer of user testing prior to users.
1. Addition of audit events, and log data to leave a trail of operations that can offer traceability in case of unexpected changes.

It's important to consider that while maintainer reviews and test coverage are foundational requirements for feature completion, the rollout plan must be focused on being ready for unknown-unknowns i.e. Mechanisms to identify, prevent and mitigate if the feature doesn't perform as believed at the time of implementation.

Lastly, due to the direct impact of authentication change on the ability to access and use GitLab, it is better to be slower in the rollout than rush to meet milestone dates in almost all situations. Based on our value to place customers first, utilize all available tools to test and rollout features in a graduated manner. If in doubt refer to our [prioritization framework](/handbook/product/product-processes/#prioritization-framework) and apply this here - with security and preventing data loss our main priorities.

### How we work

- In accordance with our [GitLab values](/handbook/values/).
- Transparently: nearly everything is public, we record/livestream meetings whenever possible.
- We get a chance to work on the things we want to work on.
- Everyone can contribute; no silos.
  - The goal is to have product give engineering and design the opportunity to be involved with direction and issue definition from the very beginning.
- We do an optional, asynchronous daily stand-up in our group stand-up channel:
  - SSCS:Authentication [#g_sscs_authentication_daily](https://gitlab.slack.com/archives/C01311Z0LDD)

#### With our counterparts

You are encouraged to work as closely as needed with stable counterparts. We include quality engineering and application security counterparts prior to a release kickoff and as-needed during code reviews or issue concerns.

Quality engineering is included in our workflow via the Quad Planning Process and is responsible for bug prioritization during release planning. They are also the DRI when it comes to adding new [end-to-end tests](https://docs.gitlab.com/ee/development/testing_guide/end_to_end/), though anyone can contribute. Here are some examples of when to engage with your counterpart:

- [Seeking Quality's opinion if an MR would introduce flakiness in existing end-to-end tests](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/92333#note_1033648348)
- [You need help deciding the best way to fix a test](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/93467#note_1042495993)
- [Guidance on setting up your local environment to properly test](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/56923#note_541368575)

Application Security will be involved in our security issue workflow and should participate in other feature, bug, or maintenance issues before they are scheduled if we need to notate any concerns or potential risks that we should be aware of. Here are some examples of engaging with your counterpart:

- [If you want to confirm whether something should be kept confidential](https://gitlab.com/gitlab-org/gitlab/-/issues/460714#note_2026742446)
- [Confirming whether or not something is considered a vulnerability](https://gitlab.com/gitlab-org/gitlab/-/issues/364526#note_1041178738)
- [Collaborating on feature proposals to see if they have any security implications](https://gitlab.com/gitlab-org/gitlab/-/issues/227841#note_1025940760)

#### Support priority requests

As the primary interface between customers and engineering team, support team has insights into product and process improvements that will help reduce friction for our customers along with the need for manual intervention by the support team. Feature or enhancement requests such as these are labelled with `Support Priority` and surfaced by support team counterparts during milestone planning, in the group's planning issue for the respective milestone. At least once a year, when planning for yearly roadmaps, these are also matched against the impact on customers and support. These are then prioritized by the group based on available capacity for each milestone.

#### Keeping yourself informed

- Key channels of interest are `#engineering-fyi`, `#team-member-updates`, `#g_sscs_authentication`, `#sec_section`, `#ceo`, `#cto`
- We create a weekly issue to inform the team members about the company or team updates, to share important links or to be informed about the team availability. Creation of the issue is the responsibility of an Engineering Manager, who can use an issue template located in the [SSCS/Auth repo](https://gitlab.com/gitlab-org/sscs/authentication/discussion). All weekly updates can be found in the project issue list [filtered by weekly update label.](https://gitlab.com/gitlab-org/sscs/authentication/discussion/-/issues/?sort=updated_desc&state=closed&label_name%5B%5D=weekly%20update&first_page_size=20)

#### MR review requests

CODEOWNER file contains commons code areas that can potentially affect authentication related behaviours and is used to request `group::authentication` reviews during development. The request source can be directly related to an authentication feature either coming from a team member within the group or outside. In this case we should complete a `backend`, `frontend` review holistically as we own the feature domain.

However there are frequently instances where a review request primarily pertains to a non-authentication related development outside of the team, but the review is requested due to an overlap with authentication related features. In such case, we will only review changes to authentication specific files and indicate to the assignee via a comment (mentioning them) that the review is for authentication specific portions only, and they should subsequently request `backend` or `frontend` maintainer reviews separately. A similar technique is followed for reviews directed at `database` reviewers.

#### Planning

We plan in monthly cycles in accordance with our [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline). Our typical planning cycle includes:

- At the beginning of each month, Product creates [a planning issue](https://gitlab.com/gitlab-org/software-supply-chain-security/authentication/discussion/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=Planning%20Issue&first_page_size=20) for the coming release.
  - This issue should include the general themes of a release. It should also include placeholders for the quad to put their prioritized feature, bug, and maintenance lists.
  - Issues without estimates should be investigated by engineering throughout the month so weighting does not need to happen at once. Once the prioritized feature list is determined for a milestone, engineering will put a weight on any issues on the list that do not have a weight.
- Within the first 12 days of the month we estimate the issues. We also identify any key issues that our team feels should be addressed in the upcoming milestone, including bugs, maintenance tasks, and new features. This approach helps us build a list of important issues that we all agree should be prioritized in future milestones.
- By the 12th day, all planned issues proposed for the next release should be estimated by engineering and put into `~"workflow::ready for development"`.
  - The EM should add any issues that have the potential to slip. Issues that we are sure will slip should be automatically rescheduled to the upcoming release in advance.
  - After estimation, Product should make any needed adjustments to the proposed scope based on estimates. At this stage, any issues that the team is committing to deliver should have the `~Deliverable` label applied to them by the engineering manager. Critical items such as `~"bug::vulnerability"` or others that should be worked on first to allow for a greater chance of completion can be found in the `~Pick-first` column of our workflow dashboard such as this [one](https://gitlab.com/gitlab-org/gitlab/-/boards/4374016).

Some items may be marked for a certain milestone, but do not have the `~Deliverable` label. This means that they have not been committed to for a milestone and should be moved to the backlog or reconsidered for a future release. The Product Manager facilitates this process.

#### Estimation process

Before work can begin on an issue, we should estimate it first after a preliminary investigation. If the scope of work of a given issue touches several disciplines (docs, design, frontend, backend, etc.) and involves significant complexity across them, consider creating separate issues for each discipline (see [an example](https://gitlab.com/gitlab-org/gitlab/-/issues/9288)).

After the PM creates a [planning issue](https://gitlab.com/groups/gitlab-org/sscs/authentication/-/issues/?sort=popularity&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=20) for the next release, the quad will gather a prioritized list of issues that should be considered. The EM will then create a "breakdown" issue with a checklist of issues that need to be estimated ([example](https://gitlab.com/gitlab-org/sscs/authentication/discussion/-/issues/45)). All Engineers from the group should be assigned to that issue and participate in weighting or breaking down the list.

When estimating development work, please add the appropriate weight to the issue:

| Weight | Description (Engineering) |
| ------ | ------ |
| 1 | The simplest possible change. We are confident there will be no side effects. |
| 2 | A simple change (minimal code changes), where we understand all of the requirements. |
| 3 | A simple change, but the code footprint is bigger (e.g. lots of different files, or tests affected). The requirements are clear. |
| 5 | A more complex change that will impact multiple areas of the codebase, there may also be some refactoring involved. Requirements are understood but you feel there are likely to be some gaps along the way. We should challenge ourselves to break this issue into smaller pieces. |
| 8 | A complex change, that will involve much of the codebase or will require lots of input from others to determine the requirements. These issues will often need further investigation or discovery before being `~"workflow::ready for development"` and we will likely benefit from multiple, smaller issues. |

We do not provide estimates greater than 8. If an issue is bigger, we will split the issue or reduce its scope.

If the issue has weight 5 or less, the Engineer adding an estimate should also put the `~"workflow::ready for development"` label on it.

If the issue has weight more than 5 (or 5 but it seems it might be split into multiple issues) the Engineer will suggest how to split it. If the Engineer is clear about the splitting they should proactively split the issue themself, put estimations on the child issues and leave a comment on the parent one. If it results to multiple issues, creating an epic should be considered.

When an Engineer is done with their estimates they should ask another team member to review their weight. This makes it harder to miss a significant aspect of an issue. If the first Engineer is confident (eg. has deep expertise in the problem or the issue is trivial) they can skip this step.

##### Purpose of Estimation

Our purpose of estimation is to confirm that we

- clearly understand the goal of the issue
- understand what a solution could be, but not necessarily all of the implementation details
- assess whether blockers exist or not

We do not expect that during estimation, implementation details are scrutinized, all blockers are caught, or prove that the proposed solution is the right one. This all happens during development. In development, we, sometimes, reshape the issue, change its solution, or even postpone it. We are proud of doing it.

#### Considerations for Estimation

With keeping the above in mind, some areas to consider when estimating are:

- If this work needs to be broken down into smaller tasks? Including adding a spike for that investigation/break down.
- Impact on unit, feature and QA testing. Sometimes an apparently small modification in the code can lead to many changes in the tests.
- Is there a hidden inter-dependency between the frontend and backend that needs to be agreed upon?
- Are there data persistence requirements e.g in browser, redis or database?
- How would this feature/bug-fix be deployed and is there complexity in managing the rollout?
- Does this work require collaboration across teams? e.g security

#### During a release

Engineers should assign issues to themselves based on the [current release](https://gitlab.com/gitlab-org/gitlab/-/boards/4406395?label_name[]=group%3A%3Aauthentication&label_name[]=Deliverable&milestone_title=Started) and ~Deliverable label. We use the following workflow label cycle on our issues:

1. `~"workflow::ready for development"` - work is ready to begin, but has not yet started
1. `~"workflow::in dev"` - we are looking at the issue, and are either actively investigating, have begun development, or have a draft merge request open
1. `~"workflow::in review"` - a merge request has been submitted and reviews have been requested
1. `~"workflow::verification"` - the work has merged, and needs to be verified
1. `~"workflow::complete"` - the work has been verified by the personed assigned to verify; verifier will close the issue and apply label
1. `~"workflow::awaiting security release"` - (security MRs only) the work is complete, just pending [backports](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineers.md#backports).

Development should not begin on an issue before it's been estimated and given a weight.

Issues with the `~"workflow::verification"` or `~"workflow::awaiting security release"` labels are, for the purposes of release planning, the same as closed issues, because the dev work is complete.

For work items that span greater than 1 week or are high priority deliverables (such as critical infradev issues or bugs), the assignee for the work aims to provide a brief weekly update on the progress of tasks within the issue being worked on. This is intended to be 2-3 lines highlighting what was accomplished recently, and the next steps. We do this to share the progress transparently with our counterparts but also to share domain knowledge and course correct on implementation details if uncovered after work has started.

##### Labels and how we use them

We have [many labels](https://docs.gitlab.com/ee/development/labels/index.html) that can be applied to an issue or merge request. Besides the issue workflow labels above, here are the minimum basic labels to apply to issues and merge requests:

- Type (`type::feature`, `type::bug`, or `type::maintenance`)
- Stage that owns the area (`devops::software supply chain security`)
- Group that owns the area (`group::authentication`)
- Specialization (`frontend`, `backend`, `database`, `documentation`)
- `security` if the issue is related to application security, and `breaking change` if this work is considered a [breaking change](https://docs.gitlab.com/ee/update/terminology.html#breaking-change)

#### Working on unscheduled issues

With the combination of our capacity planning (EM) and estimation (IC) processes above, engineers should have free time to work on ~"Stuff that should just work" or other topics that interest them. If an unscheduled issue should really be prioritized, bring it up in a planning issue or ask your manager to reduce your capacity further.

### How we prioritize for a release

We have [cross-functional prioritization](/handbook/product/product-processes/cross-functional-prioritization/) aligned with our prioritization framework. The engineering manager will prioritize `type::maintenance` issues, the product manager will prioritize `type::feature` issues, and the software engineer in test will prioritize `type::bug` issues. From there, we are able to select a ratio of the top issues to be planned for the release by using our [cross-functional issue board](https://gitlab.com/groups/gitlab-org/-/boards/4453752?label_name[]=group%3A%3Aauthentication). **Starting 16.5, our target ratio is to plan 60% features, 20% bugs, and 20% maintenance per release**. Security issues do not count towards these ratios, but instead take away from the total capacity. The data below helps us understand our overall cross-functional status.

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="authentication" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="authentication" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="authentication" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="authentication" >}}
{{< /tableau >}}

### Roadmap planning and t-shirt sizing

At the start of the fiscal year, product and engineering counterparts collaborate over areas we want to focus on. This allows us to prepare issues that will be added to priorities.yml ahead of each milestone, gauge whether we are overcommitting to the year, and transparently share what the delivery goals are for the upcoming year. As part of this exercise, engineering also performs a high level t-shirt sizing to assist with planning. It's important to highlight that the sizing is high level estimation, based on expected complexity and not the actual length of time taken to complete the work similar to how milestone estimation is done. An example of the scales used would be:

Average story points completed per milestone: 48w. This includes bugs, features, maintenance, and any security vulnerability work.

T-shirt sizing scale:

- Small → < 5w
- Medium → < 8w
- Large → < 16 w
- X-large → 32 w

The roadmap items are then marked with the `Small`, `Medium` labels and a priority to ensure, higher priority work is scheduled and appropriately resourced.

#### Monthly cross-functional dashboard review

We create a monthly issue that is assigned to all counterparts. The issue has to be created manually by an Engineering Manager, but we have an issue template in the [Authentication discussion repo](https://gitlab.com/gitlab-org/sscs/authentication/discussion).

You can read more about this process on the [handbook page](/handbook/product/product-processes/).

---

Although we try to plan as described above, we  understand that there is always a risk to the ideal ratios due to unexpected high priority security, infradev, and escalation issues.

### Meetings

Although we have a bias for asynchronous communication, synchronous meetings are necessary and should adhere to our [communication guidelines](/handbook/communication/#video-calls). Some regular meetings for Authentication are:

| Frequency | Meeting      | DRI    | Attendees |Topics                                                              |
| ----- | ----- | ----- | ----- | ----- |
| Weekly    | [Group-level meeting](https://docs.google.com/document/d/1xbwj81Rv2RfomqoQxbMGTxWsxoYczYfIbh_q74meot8/edit) (internal only)       | Product Manager | PM/EM/UX/SET, optionally engineers | Discuss current or upcoming roadmap topics, bring epics/issues up for attention, provide a current status of priority initiatives |

For one-off, topic specific meetings, please always consider recording these calls and sharing them (or taking notes in a [publicly available document](https://docs.google.com/document/d/1xbwj81Rv2RfomqoQxbMGTxWsxoYczYfIbh_q74meot8/edit)).

Agenda documents and recordings can be placed in the [shared Google drive](https://drive.google.com/drive/u/0/folders/0ALpc3GhrDkKwUk9PVA) (internal only) as a single source of truth.

All meetings and 1-1's should have an agenda prepared in advance. If this is not the case, you are not obligated to attend the meeting. Confirm if the meeting should be canceled if there is not an agenda by the start time of the meeting.

### Group Members

Auth group members who are part of the [Authentication group](https://gitlab.com/groups/gitlab-org/sscs/authentication/) can be `@` mentioned on GitLab with `@gitlab-org/sscs/authentication`.

The following people are permanent members of the group:

{{< stable-counterparts role="SSCS:Authentication" >}}

### Dashboards

- [Error Budget](https://dashboards.gitlab.net/d/stage-groups-detail-authentication/749586f0-be5b-5af4-88ce-3e3bac20b45e?orgId=1&from=now-2d&to=now)

### Links and resources {#links}

{{% include "includes/engineering/software_supply_chain_security-shared-links.md" %}}

- [Milestone retrospectives](https://gitlab.com/gl-retrospectives/sscs/authentication/-/issues/53)
- Our Slack channels
  - SSCS:Authentication [#g_sscs_authentication](https://gitlab.slack.com/archives/CLM1D8QR0)
  - Daily standups [#g_sscs_authentication_daily](https://gitlab.slack.com/archives/C01311Z0LDD)
- Issue boards
  - [Milestone board](https://gitlab.com/gitlab-org/gitlab/-/boards/4374016?not%5Blabel_name%5D%5B%5D=Quality&label_name%5B%5D=group%3A%3Aauthentication&label_name%5B%5D=Deliverable&milestone_title=17.4)
  - [Task assignment board](https://gitlab.com/groups/gitlab-org/-/boards/4490634?label_name[]=Deliverable&label_name[]=group%3A%3Aauthentication&milestone_title=17.4)
