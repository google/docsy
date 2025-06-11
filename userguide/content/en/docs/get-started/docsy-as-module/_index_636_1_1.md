---
title: "Software Supply Chain Security:Pipeline Security Group"
description: "The GitLab Software Supply Chain Security:Pipeline Security Group Handbook page"
---

## Vision

We provide security in the software supply chain process, ensuring the right level of visibility to pipelines and jobs. This enables organizations to operate their CI pipelines securely.

Our team is responsible for delivering on the following categories:

- [Build Artifacts](https://about.gitlab.com/direction/verify/)
- [Secrets Management](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/secrets_management/)

The current and planned category maturity can be found on the [Maturity page](https://about.gitlab.com/direction/#maturity).

## Mission

Our mission is to give organizations features which enable secure pipeline operations, in an operationally efficient and highly secure way at scale.

## Performance Indicators

We measure the value we contribute by using a [Product Performance Indicator](https://internal.gitlab.com/handbook/company/performance-indicators/product/). One of the PI process goals is to ensure that, as a product team, we are focused on strategic and operational improvements to improve leading indicators, precursors of future success.
<!-- Our current PI for the Pipeline Security group is the [GMAU (internal handbook)](https://internal.gitlab.com/handbook/company/performance-indicators/product/ops-section/#verifytesting---gmau---count-of-active-users-engaging-with-the-test-summary-mr-widget). This is a rolling count of unique users who have triggered a pipeline that uploads a test or coverage report. This is not currently instrumented and we are tracking progress of instrumentation in [gitlab&4528](https://gitlab.com/groups/gitlab-org/-/epics/4528). -->

## Team Members

The following people are permanent members of the Software Supply Chain Security:Pipeline Security group:

{{< stable-counterparts role="Software Supply Chain Security:Pipeline Security" >}}

## Stable Counterparts

To find our stable counterparts look at the Pipeline Security [product category listing](/handbook/product/categories/#pipeline-security-group).

## JTBD

You can view and contribute to our current list of JTBD and job statements [here](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/JTBD/#jobs-to-be-done).

## Technologies

Like most GitLab backend teams we spend a lot of time working in Rails on the main [GitLab app](https://gitlab.com/gitlab-org/gitlab). Familiarity with Docker and Kubernetes is also useful on our team.

## Common Links

- [Issue Tracking Board](https://gitlab.com/groups/gitlab-org/-/boards/364216?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group::pipeline+security)
- [Issue Backlog](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Apipeline%20security)
- [Slack Channel](https://gitlab.slack.com/archives/g_pipeline-security)
- [Roadmap](https://about.gitlab.com/direction/security/#govern)
- [GitLab Unfiltered YouTube Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq53VUOvTk3VdXN79PA0SXT)

## Our Repositories

- [GitLab](https://gitlab.com/gitlab-org/gitlab)

## Our active feature flags

Our active feature flags can be found on the [feature flag dashboard](https://10az.online.tableau.com/t/gitlab/views/Engineering-Featureflags/Engineering-FeatureFlags/4c520fa3-d6da-433a-9f8c-f949df8cdf9c/8c157ebd-0c70-4db2-839f-a9e528a213b7). Make sure to apply the `Gitlab Team` testing filter.

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="pipeline security" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="pipeline security" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="pipeline security" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="pipeline security" >}}
{{< /tableau >}}

## How we work

### Planning

#### General planning

Our team does not use Quad-Planning process because we do not have an assigned Software Engineer in Test. Instead we deploy a "tripod" approach where PM, EM, and UX work together to plan at least three milestones worth of work at a high level. During planning, the PM sets the general direction for the team and works with the EM to ensure the team's plans are ambitious, yet achievable based on the team's capacity. This ensures checks and balances during the planning discussions to minimize carryover and ensure engineering priorities are addressed along with feature priories in the roadmap. UX will work with PM to ensure research and design issue are ready in time for implementation. Planning is mostly asynchronous via the release planning issue (see below), with additional discussion during weekly 1:1 sessions and team meetings as needed. This tripod approach allows us to address dependencies early on and ensure Design and Engineering are aligned on our product roadmap.

#### Release planning issue

We use a [release planning issue](https://gitlab.com/gitlab-org/ci-cd/pipeline-security-group/-/issues/new?issuable_template=ReleasePlan) to plan our release-level priorities over each milestone. This issue is used to highlight deliverables, capacity, team member holidays, and more. This allows team members and managers to see at a high-level what we are planning on accomplishing for each release, and serves as a central location for collecting information. It is important to note this planning issue is static once the milestone starts and will not be updated to reflect changes to the milestone (e.g. a higher priority item is added to the milestone post-start and a planned issue is removed). This allows us to compare our baseline plan to final release as part of the retrospective issue.

#### Issue weighting and refinement

Before issues can be moved from the `workflow::planning breakdown` status into the  `workflow::ready for development` status, they must have a weight greater than 0 applied to the issue.

We will apply a two-step estimating process:

- Phase 1: High-level/Rough estimate. Our intention here is to enable the PM to schedule issues according to capacity multiple milestones in advance, the EM will add a high-level estimated weight to issues. The PM will then schedule the issue to a specific milestone.
- Phase 2: Refinement/Validated estimate. Engineers will be assigned to refine and adjust the estimated weight (if necessary) during the first two weeks of the milestone prior to the issue's scheduled milestone.

The intention of this phased process is to enable agile planning and reduce the burden of our engineers in frequent context-switching required to investigate and refine issues throughout each milestone. Additionally, this provides our team a quarterly look ahead in the group's direction.

#### Issue weight system

An issue weight is determined based on the complexity in the following criteria:

- Code change - How difficult is it to make the required code changes?
- Interaction and dependency on other teams - How much interaction with other teams are needed?
- Path to production - What needs to be done to get the code changes safely in production (e.g feature flag, backward compatibility, etc)?
- Performance impact - What it takes to maintain high performance in the system?

Based on these criteria, an issue can have one of the following weights:

| Weight | Description  |
| --- | --- |
| 1: Trivial | Issues that are very well understood. The exact solution is already known and straight forward. The scope of change is very isolated. <br><br>Examples are documentation updates, simple regressions, and bugs or technical debt that can be fixed with a few lines of code. |
| 2: Small | Issues that are well understood and have an outlined solution. No surprises are expected. No coordination with other teams or people is required.<br><br>Examples are simple features, like a new API endpoint to expose existing data or functionality, or regular bugs or performance issues. |
| 3: Medium | Issues that are well understood and have an outlined solution. These issues require external team involvement or coordination to be released, such as a feature flag.<br><br>Examples are regular features, potentially with a backend and frontend component, or most bugs or performance issues. |
| 5: Large | Issues that are known to be complex. A solution has been outlined. There are many major edge cases that need to be catered for. Surprises are expected. Extensive coordination with other teams is required. Careful release process needs to be considered. These issues may have potential for adverse performance impact or catastrophic failures. They may also involve more one components (backend, frontend, gitaly, workhorse, runner, etc) or changes the interaction between the components.<br><br>Examples are issues that changes API contracts requiring backward compatibility, requires multiple feature flags to be safely released. It could also be issues where the team does not have any existing expertise or knowledge, or require changes in components that the team does not usually work on. |
| 8: Unknown | An issue that is weight 8 will not be scheduled and instead should be investigated further in order to be broken down into smaller issues<br><br>Examples are bugs that are not well understood or easily replicated, bugs or features that do not have a suggested solution. |

If the weight of an issue cannot be determined within a day, create a separate [investigation issue](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#technical-investigation) for an in-depth investigation.

#### Design and Development collaboration

When issues require a design proposal, we follow the [Product Development Flow](/handbook/product-development-flow/). Design and development should work together from the start to ensure the issue follows our [MVC guidelines](/handbook/product/product-principles/#the-minimal-valuable-change-mvc), while still providing value and a usable experience.

To maintain a SSOT, the same issue should be used for design and development. This creates less duplicated work for both teams. Product designers should use the [UX Definition of Done](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done) template to clearly state where the issue stands in the product development flow. An example of this in practice is https://gitlab.com/gitlab-org/gitlab/-/issues/33418/.

Once the design is complete, and appropriate workflow labels are applied, design, quality, and development (include FE, BE, and EM) should work together to break down the issue further for implementation, if necessary.

#### Technical Investigation

In the process of refinement we may discover a new feature will require a [blueprint](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/doc/workflow.md) or the team feels input from maintainers will help scope down the problem, ensure the feature is performant and/or reduce future technical debt. When this happens the team will create a Technical Investigation issue for the investigation. This issue will be assigned to one team member. That team member should spend the minimum amount of time to create documentation, a [poc](/handbook/engineering/development/ops/release/poc/), or some other artifact that clarifies the approach to the problem, ideally in less than 5 working days. This will help us to gather information, validate the solution with others, and propose a plan to execute. They will answer specific questions outlined in the Technical Investigation issue before work on the feature is started. This process is analogous to the concept of a [Spike](/handbook/product/product-processes/#spikes).

When possible, the assigned team member is encouraged to schedule synchronous time with another developer to pair on the investigation and publishing of the results (Example Technical Investigation issue [gitlab#336617](https://gitlab.com/gitlab-org/gitlab/-/issues/336617)). By default Technical Investigation issues are weighted at a 2 and we timebox them to 3 business days from start to presentation of data. Team members may change this weight and/or time frame at their discretion.

We limit the number of technical investigation issues assigned in each milestone to two so that we can maintain overall velocity and [MR Rate](../engineering/metrics/#merge-request-rate).

#### Splitting issues

If an issue has several components (e.g. ~frontend, ~backend, or ~documentation) we should split it up into separate implementation issues. When these issues are created, the issues should be titled `Frontend: [Issue title]` or `Backend: [Issue title]`, and marked as `blocked by` in case one is blocking the other. The original issue should hold all the discussion around the feature, with the implementation issues being used to track the work done. By splitting issues, there are several benefits:

1. There's only one DRI per issue.
1. Workflow labels and health statuses are more relevant.
1. We can weight issues with more accuracy.
1. We can mark one implementation as a blocker for another.
1. It's easier to see what work can be picked up by each functional group.
1. We can schedule feature work across multiple milestones.
1. When team members are selecting work from the [group workflow board](https://gitlab.com/groups/gitlab-org/-/boards/4876910?label_name[]=group%3A%3Apipeline%20security), it simplifies what issue relates to which component.

#### Error Budget issues

[Error Budgets](/handbook/engineering/error-budgets/) for stage groups have been established in order to help groups identify and prioritize issues that are impacting customers and infrastructure performance.

The [Pipeline Security group Error Budget dashboard](https://dashboards.gitlab.net/d/stage-groups-pipeline_security/stage-groups-pipeline-security-group-dashboard?orgId=1) is used to identify issues that are contributing to the Pipeline Security group's error budget spend.

The engineering manager will review the error budget dashboard weekly to determine whether we're exceeding our budget, determine what (if anything) is contributing to our error budget spend, and create issues addressing root cause for product manager prioritization. Issues created to address error budget spend should be created using appropriate labels and prioritized according to our [technical debt process](#prioritizing-technical-debt-and-deferred-ux).

#### Prioritizing technical debt and deferred UX

We follow the [company guidance](/handbook/engineering/development/principles/#prioritizing-technical-decisions) in how we prioritize technical debt and [Deferred UX](/handbook/product/ux/performance-indicators/#deferred-ux). In order to manage this effectively we have decided to keep track of technical debt, Deferred UX, and feature maintenance issues that are ready to be worked on in the "~workflow::scheduling" column, prioritized by Product, but informed by the impact these issues will have on our future velocity. We will try to dedicate a certain percentage (~30%) of our capacity by weight in each milestone to paying down technical debt and deferred UX. We do not consider bugs to be debt, and they are prioritized as part of the remaining capacity by weight.

#### Deliverables in a Milestone

Engineering managers apply the `Deliverable` label on issues that meet the following criteria:

- It is delivering value that is visible to the user
- It is near the top of the issue board (high priority)
- The issue is well-defined
- UX DoD is applied
- The issue is weighted
- The engineering manager believes we have the capacity to complete the work in the assigned milestone
- The team has accepted the issue into the milestone and moved it to ~"workflow::ready for development" status

#### Definition of Ready

Before the team will accept an issue into a milestone for work it must meet these criteria:

- Issues labeled with ~"type::feature" include a well stated "why" and customer problem
- Issues labeled ~"type::bug" include steps to reproduce
- Designs are in the design tab if needed
- If the issue will be worked on by Software Supply Chain Security:Pipeline Security engineers, it has a [weight](/handbook/engineering/development/dev/create/source-code/backend/#weighting-issues)
- Design proposal satisfies the [UX Definition of Done (DoD)](https://docs.gitlab.com/development/contributing/merge_request_workflow/#definition-of-done)

#### Definition of Blocked

Issues that depend on another issue to be completed before they can be validated on `Canary` are considered blocked, and should have the `~workflow::blocked` label applied. The issues should also be marked as blocked within the [related issues section](https://docs.gitlab.com/ee/user/project/issues/related_issues.html#adding-a-related-issue) of the issues.

#### Follow-up Issues

We utilize a process wherein issues that are follow-ups to other issues and are being worked on in the same milestone they are created will have a `~follow-up` label added to them. Examples of items the team may create and label as `~follow-up` include but is not limited to feature scope-creep, non-blocking requests from code review, additional UI polish, non-blocking refactoring that can be done, Low Priority (P2 or lower) bug fixes, etc.

#### Release post checklist issue

During each milestone, we create a [Release Post Checklist](https://gitlab.com/gitlab-org/ci-cd/pipeline-security-group/-/issues/new?issuable_template=Release-Post-Issue) issue that is used by team members to help track the progress of the team [release posts](/handbook/marketing/blog/release-posts/). We use the checklist issue to associate release post merge requests with links to the implementation issue, links to updated documentation, and list which engineers are working on each issue. The checklist issue provides a single place to see all this information.

### Workflow

Unless specifically mentioned below, the Software Supply Chain Security:Pipeline Security group follows the standard [engineering](/handbook/engineering/workflow/), [product](/handbook/product-development-flow/), and [UX](/handbook/product/ux/ux-department-workflow/) workflows.

#### Starting New Work

Software Supply Chain Security:Pipeline Security team members are encouraged to start looking for work starting **_Right to left_** on [our milestone board](https://gitlab.com/groups/gitlab-org/-/boards/364216?label_name[]=group%3A%3Apipeline%20security&milestone_title=Started). This is also known as _"Pulling from the right"_. If there is an issue that a team member can help along on the board, they should do so instead of starting new work. This includes conducting code review on issues that the team member may not be assigned to if they feel that they can add value and help move the issue along the board.

Specifically this means, in order:

- Doing verification that code has made it to staging, canary, or production
- Conducting code reviews on issues that are `workflow::in review`
- Unblocking anyone in the `workflow::in development` column
- Then, finally, picking a `Deliverable` from the `workflow::ready for development` column.

The goal with this process is to reduce WIP. Reducing WIP forces us to "Start less, finish more", and it also reduces cycle time. Engineers should keep in mind that the DRI for a merge request is the **author(s)**, just because we are putting emphasis on the importance of teamwork does not mean we should dilute the fact that having a [DRI is encouraged by our values](/handbook/people-group/directly-responsible-individuals/#dris-and-our-values).

##### What do I do when there are no more Deliverable issues to take?

If there are no more `Deliverable` issues that a team member can "pull from the right", the team member can do one of the following:

- Take on an issue with the `workflow::ready for development` and `Verify::P2` labels.
- Refine issues with the `workflow::planning breakdown` and `needs weight` labels to help us prepare for upcoming milestones.
- Take the opportunity to work on a technical debt or low-hanging fruit issue that you are interested in. These issues often are not a high enough priority to be planned as deliverables, so engineers are encouraged to proactively tackle these issues when they have capacity.

##### Priority

We use a series of labels to indicate the highest priority issues in the milestone.

- The highest priorities for a given milestone would be issues labeled as `Deliverable` and `Verify::P1` issues.
- If there are `Deliverable` issues with the `bug::vulnerability` label as well, those should take top priority over other deliverables.
- We use the `Verify::P2` and `Verify::P3` labels to prioritize issues planned for future milestone deliverables.

If a team member believes a specific issue should be considered a `Deliverable` or a higher priority, they are encouraged to ping the product and engineering managers on the issues where we can discuss and decide. Note that issues need to be refined with a weight for them to be considered for the `Deliverable` label.

#### Code Review

Code reviews follow the standard process of using the reviewer roulette to choose a reviewer and a maintainer. The roulette is **optional**, so if a merge request contains changes that someone outside our group may not fully understand in depth, it is encouraged that a member of the Software Supply Chain Security:Pipeline Security team be chosen for the preliminary review to focus on correctly solving the problem. The intent is to leave this choice to the discretion of the engineer but raise the idea that fellow Software Supply Chain Security:Pipeline Security team members will sometimes be best able to understand the implications of the features we are implementing. The maintainer review will then be more focused on quality and code standards.

We also recommend that team members take some time to review each others merge requests even if they are not assigned to do so, as described in the [GitLab code review process](/handbook/engineering/workflow/code-review/#reviewer). It is not necessary to assign anyone except the initial domain reviewer to your Merge Request. This process augmentation is intended to encourage team members to review Merge Requests that they are not assigned to. As a new team, reviewing each others merge requests allows us to build familiarity with our product area, helps reduce the amount of investigation that needs to be done when implementing features and fixes, and increases our [lottery factor](https://en.wikipedia.org/wiki/Bus_factor). The more review we can do ourselves, the less work the maintainer will have to do to get the merge request into good shape.

This tactic also creates an environment to ask for early review on a WIP merge request where the solution might be better refined through collaboration and also allows us to share knowledge across the team.

##### UX Review

As part of the code review process, when an MR makes a user-facing change (no matter how small), it should be reviewed by a Product Designer. When in doubt, if the MR is related to an issue with the ~UX label, involve a Product Designer. Include screenshots or screen recordings of the changes in the MR description whenever possible to make the review process easier for everyone.

For iterations on features behind feature flags, even when the changes won't be user-facing right away, involve a Product Designer. If they feel that it would be more efficient to do so, the Product Designer may choose to defer their review of the feature-flagged feature until it is closer to being complete. This option gives them the flexibility to prioritize their workload as they see fit and avoid some of the noise generated by the MR review process.

#### Issue Health Status Definitions

- **On Track** - We are confident this issue will be completed and live for the current milestone. It is all [downhill from here](https://basecamp.com/shapeup/3.4-chapter-13#work-is-like-a-hill).
- **Needs Attention** - There are concerns, new complexity, or unanswered questions that if left unattended will result in the issue missing its targeted release. Collaboration needed to get back `On Track` within the week.
  - If you are moving an item into this status please mention individuals in the issue you believe can help out in order to unstick the item so that it can get back to an `On Track` status.
- **At Risk** - The issue in its current state will not make the planned release and immediate action is needed to get it back to `On Track` today.
  - If you are moving an item into this status please consider posting in the [#g_pipeline-security](https://gitlab.slack.com/archives/CPANF553J) channel in slack. Try to include anything that can be done to unstick the item so that it can get back to an `On Track` status in your message.
  - Note: It is possible that there is nothing to be done that can get the item back on track in the current milestone. If that is the case please let your manager know as soon as you are aware of this.

#### Issue progress updates

When an engineer is actively working (workflow of ~workflow::"In dev" or further right on current milestone) on an issue they will periodically leave status updates as top-level comments in the issue. The status comment should include the updated health status, any blockers, notes on what was done, if review has started, and anything else the engineer feels is beneficial. If there are multiple people working on it also include whether this is a front end or back end update. An update for each of MR associated with the issue should be included in the update comment. Engineers should also update the [health status](https://docs.gitlab.com/ee/user/project/issues/#health-status) of the issue at this time.

This update need not adhere to a particular format. Some ideas for formats:

```text
Health status: (On track|Needs attention|At risk)
Notes: (Share what needs to be shared specially when the issue needs attention or is at risk)
```

```text
Health status: (On track|Needs attention|At risk)
What's left to be done:
What's blocking: (probably empty when on track)
```

```text
## Update <date>
Health status: (On track|Needs attention|At risk)
What's left to be done:

#### MRs
1. !MyMR1
1. !MyMR2
1. !MyMR3
```

There are several benefits to this approach:

- Team members can better identify what they can do to help the issue move along the board
- Creates an opening for other engineers to engage and collaborate if they have ideas
- Leaving a status update is a good prompt to ask questions and start a discussion
- The wider GitLab community can more easily follow along with product development
- A history of the roadblocks the issue encountered is readily available in case of retrospection
- Product and Engineering managers are more easily able to keep informed of the progress of work

Some notes/suggestions:

- We typically expect engineers to leave at least one status update per week, barring special circumstances
- Ideally status updates are made at a logical part of an engineers workflow, to minimize disruption
- It is not necessary that the updates happen at the same time/day each week
- Generally when there is a logical time to leave an update, that is the best time
- Engineers are encouraged to use these updates as a place to collect some technical notes and thoughts or "think out loud" as they work through an issue

#### Monitoring changes behind feature flags

In addition to the steps documented for [developing with feature flags at GitLab](https://docs.gitlab.com/ee/development/feature_flags/) Software Supply Chain Security:Pipeline Security engineers monitor their changes' impact on infrastructure using dashboards and logs where possible. Because feature flags allow engineers to have complete control over their code in production it also enables them to take ownership of monitoring the impact their changes have against production infrastructure. In order to monitor our changes we use this [helpful selection of dashboards](/handbook/engineering/monitoring/#selection-of-useful-dashboards-from-the-monitoring) and specifically the [Rails controller dashboard](https://dashboards.gitlab.net/d/web-rails-controller/web-rails-controller) (Internal Only) for monitoring our changes in production. Metrics we evaluate include latency, throughput, CPU usage, memory usage, and database calls, depending on what our change's expected impact will be and any considerations called out in the issue.

The goal of this process is to reduce the time that a change could potentially have on production infrastructure to the smallest possible window. A side benefit of this process is to increase engineer familiarity with our monitoring tools, and develop more experience with predicting the outcomes of changes as they relate to infrastructure metrics.

#### Closing Issues

After an engineer has ensured that the [Definition of Done](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done) is met for an issue, they are the ones responsible for closing it. The engineer responsible for verifying an issue is done is the engineer who is the DRI for that issue, or the DRI for the final merge request that completes the work on an issue.

#### Issues for community contributions

We want to create a welcoming environment for everyone who is interested in contributing to GitLab in anyway be it code, documentation, UX, or others.

If an issue is being resolved in a merge request that is made by a [community contributor](https://about.gitlab.com/community/contribute/), the engineering manager will assign the associated issue to themselves to keep better track of it. The engineering manager will help to coach the community contributor through the merge request process, or be responsible for delegating that coaching to a team member engineer.

### Labels

#### Category Labels

The Pipeline Security group supports the product marketing categories described below:

| Label                 | |  | | |
| ----------------------| -------| ----|------------| ---|
| `Category:Secrets Management` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Category:Secrets+Management) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=Category%3ASecrets%20Management) | [Direction](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/secrets_management/) | [Documentation](https://docs.gitlab.com/ee/ci/secrets/index.html) |
| `Category:Secure Artifacts` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues?sort=created_date&state=opened&label_name[]=Category:Secure+Artifacts) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=Category%3ASecure%20Artifacts) | [Direction](https://about.gitlab.com/direction/software_supply_chain_security/pipeline_security/secure_artifacts/) | Documentation - TBD |

#### Feature Labels

| Label                 | |  | Description |
| ----------------------| -------| ----|------------|
| `CI job token` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=CI%20job%20token) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=CI%20job%20token) | Relates to functionality surrounding `CI_JOB_TOKEN` available in the Build environment. |
| `secrets storage` | [Issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=secrets%20storage) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=secrets%20storage) | Relates to functionality surrounding the usage of secrets managers, including integration with secrets storage providers, in the Build environment. |
| `external authentication` | [Issues](https://gitlab.com/groups/gitlab-org/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=external%20authentication) | [MRs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=opened&label_name[]=external%20authentication) | Relates to functionality surrounding tokens for external authentication available in the Build environment. |

### Meetings

#### Pipeline Security Group Weekly Meeting

This synchronous meeting is to discuss anything that is blocking, or notable from the past week. This meeting acts as a team touchpoint. We have two sessions of this meeting each week - one for APAC/EMEA timezones and another for AMER timezones. We record each meeting so that everyone can benefit from the discussions asynchronously.

#### Async Daily Standups

We use [geekbot](https://geekbot.com/) integrated with Slack for our daily async standup. The purpose of the daily standup meeting is to keep the team informed about what everyone is working on, and to surface blockers so we can eliminate them. The standup bot will run at 10am in the team members local time and ask 2 questions:

1. What will you do today?
1. Anything blocking your progress?

#### Async Monthly Retrospectives

We use a GitLab issue in [this project](https://gitlab.com/gl-retrospectives/verify-stage/pipeline-security/-/issues/) for our monthly retrospective. The issue is created automatically towards the end of the current milestone. The purpose of the monthly retrospective issue is to reflect on the milestone and talk about what went well, what didn't go so well, and what we can do better.
Instead of waiting until the end of the milestone to add items to the retrospective issue, we encourage team members to add comments throughout the month. We have a slack reminder on our #g_pipeline-security channel to remind us to add items to the issue each Friday.

## How to work with us

### On issues

Issues worked on by the Pipeline Security group have a group label of ~"group::pipeline security". Issues that contribute to the verify stage of the DevOps toolchain have the ~"devops::verify" label.

You can tag a team member with `@mention` in the issue if you have someone specific to address. If you need to call the attention of the entire group, you can tag `@gitlab-com/pipeline-security-group` which notifies the entire team.
