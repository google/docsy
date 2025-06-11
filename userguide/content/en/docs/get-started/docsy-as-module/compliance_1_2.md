---
title: "Compliance Group"
---

## Mission

The Compliance group's mission is to provide visibility into an organizations compliance posture within GitLab and provide tools for organization's to identify non-compliant activities and scope enforcement of compliance requirements.

## What we work on

- We use the [Group Direction page](https://about.gitlab.com/direction/govern/compliance/) to describe our high-level goals and direction for our group.
- From the high-level goals and direction we filter down to a prioritised list of Epics, we try to keep updated in our [Tactical Priorities](https://about.gitlab.com/direction/govern/compliance/tactical-priorities.html)
- This prioritised list we then use when planning each Milestone. Each Milestone will have its own Issue in our [Planning Epic](https://gitlab.com/groups/gitlab-org/govern/compliance/-/epics/2)
  - In addition to using the high-level goals and direction as an input to planning Milestones, the Compliance Product Manager considers input from Sales, customers, and internal stakeholders (dogfooding) to decide on the priority for the issues added to each Milestone.
- We also use [OKRs](/handbook/company/okrs/) to help prioritise strategic initiatives within the group. We use Issues for planning and collate them in our [OKR Epic](https://gitlab.com/groups/gitlab-org/govern/compliance/-/epics/4)

## Top Priorities FY25

- The biggest priority for FY25 is to continue to integrate Compliance Frameworks with Security Policies. Expanding the abilities within the Compliance Center and moving towards removal of Compliance Pipelines.
- Continue expanding on the Adherence Report by adding more Standards/Checks, while also integrating violations as the other side of the compliance posture (enforcement vs violation).
- We are also looking at building customizable checks and the highest priority standards for our customers.
- Rollout full usage of ClickHouse as the DB for audit events. Unblocking features to give better insights into compliance across the GitLab platform.
- Provide a standard way for adding new Streaming Audit Event destination types and filtering, then increasing our streaming audit event offering through more 3rd party integrations and filtering options.
- Create a platform for easily allowing contributions outside the Compliance group to add audit events throughout the product. This includes planning and standardizing all current open audit event issues, creating easily consumable tutorials and guidelines, and potentially creating an audit event day (similar to pajamas migration days but for backend).

## How we work

- In accordance with our [GitLab values](/handbook/values/).
- Transparently: nearly everything is public, we record/livestream meetings whenever possible (see [links](/handbook/engineering/development/sec/govern/compliance/#links))
- We get a chance to work on the things we want to work on.
- Everyone can contribute; no silos.
  - The goal is to have product give engineering and design the opportunity to be involved with direction and issue definition from the very beginning.
- We do an optional, asynchronous daily stand-up in our stand-up channel:
  - Govern:Compliance [#g_govern_compliance_daily](https://gitlab.slack.com/archives/C013E163FD0)

### Code Review

Because this group works on components of the application that have a [far-reaching impact](/handbook/engineering/expansion-development/#reducing-the-impact-of-far-reaching-work), we take these extra steps in order to reduce our risk of a production incident:

1. To build more institutional knowledge across the team we try to assign our merge requests to another Compliance team member for first review.
1. Compliance merge requests use feature flags where it makes sense to minimise impact. We follow the [Feature Flag Lifecycle](/handbook/product-development-flow/feature-flag-lifecycle/) as closely as possible
1. If a feature flag is used then a feature flag [rollout plan](/handbook/engineering/development/processes/rollout-plans/) will be created. Support (`#support_gitlab-com`) will also be [notified](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L94) if necessary.
1. Compliance related merge requests require a review by a [Compliance Engineer](https://gitlab.com/groups/gitlab-org/govern/compliance/engineering/-/group_members?with_inherited_permissions=exclude). This is guarded by using the `CODEOWNERS` feature of GitLab.

### Working on ad hoc work and questions

From time to time, there will be ad hoc work and questions that arise, such as Slack questions, questions in Issues, Error Budget investigations, etc. All Compliance group members are encouraged to watch these mediums and engage.

As first responder, we will acknowledge the ad hoc work / question in the appropriate medium. This is to ensure that the questioner knows that we are on it.

Similar to [Spikes](#spikes), as a rule of thumb, if the work will take longer than 1 hour to investigate and respond, then create an issue. This is to ensure that this work is accounted for, is transparent and has a DRI. This can be done through asking the questioner to create an issue, or taking ownership and creating the issue ourselves.

We try to ensure that the ad hoc work Issue has as much info as possible, asking for more info where required. Before working on an Issue, we make sure to define a clear question or problem that needs to be delivered.

Next, we take ownership of the Issue, assigning it to ourselves. We also add the :eyes: reaction to the Slack message/Issue comment to indicate that investigation has begun. We also ensure correct label hygiene (~type::, ~group::, ~priority::, ~workflow::). In the comments, ping the Compliance EM and PM to ensure transparency. Depending on priority, it may need to go through [cross-functional prioritization process](#milestone-planning) to get it planned, scheduled, and completed.

Once the investigation is complete, we follow up in the original medium. We also add the :white_check_mark: reaction to the original Slack message/Issue comment to indicate that investigation is complete.

### Spikes

We use [spikes](/handbook/product/product-processes/#spikes) to conduct research, prototype, investigation to gain knowledge, reduce the risk of a technical approach, and better understand a requirement.

When we identify the need for a spike, we will create a new issue, clearly label it as such [example](https://gitlab.com/gitlab-org/gitlab/-/issues/353606), conduct the spike, and document the findings in the spike issue.

Spikes are great for accounting for ad-hoc work and questions that can come through during a Milestone. A rule of thumb, if the work will take longer than 1-2 hours, then create a spike issue.

Spike issues, like any other issue, will go through the [cross-functional prioritization process](#milestone-planning) to get it planned, scheduled, and completed.

Before working on a spike we make sure to clearly define:

1. A time-box of how much time to spend on the issue.
1. A clear question or problem that needs to be delivered.

### Proof-of-concept MRs

We strongly believe in [Iteration](/handbook/values/#iteration) and delivering value in small pieces. Iteration can be hard, especially when you lack product context or are working in a particularly risky/complex part of the codebase. If you are struggling to estimate an issue or determine whether it is feasible, it may be appropriate to first create a proof-of-concept MR. The goal of a proof-of-concept MR is to remove any major assumptions during planning and provide early feedback, therefore reducing risk from any future implementation.

- Create an MR, prefixed with `PoC:`.
- Explain what problem the PoC MR is trying to solve for in the MR description.
- Timebox it. Can you determine feasibility or a plan in less than 2-3 days?
- Identify a reviewer to provide feedback at the end of this period.
- Close the MR. Provide a summary in the original issue on what you learned from the PoC, including product and performance implications.
  - State whether you are able to move forwards with implementation or not.
  - Please do not close the issue.

The need for a proof-of-concept MR may signal that parts of our codebase or product have become overly complex. It's always worth discussing the MR as part of the retrospective so we can discuss how to avoid this step in future.

### Working on unscheduled issues

Everyone at GitLab has the freedom to manage their work as they see fit,
because [we measure results, not hours](/handbook/values/#measure-results-not-hours). Part of this is the
opportunity to work on items that aren't scheduled as part of the
regular monthly release. This is mostly a reiteration of items elsewhere
in the handbook, and it is here to make those explicit:

1. We expect people to be [managers of one](/handbook/values/#managers-of-one), and we [use GitLab ourselves](/handbook/values/#dogfooding). If you see something that you think
   is important, you can request for it to be scheduled, or you can
   [work on a proposal yourself](/handbook/values/#dont-wait), _as long as you keep your
   other priorities in mind_.
1. From time to time, there are events that GitLab team-members can participate
   in, like the [issue bash](https://about.gitlab.com/community/issue-bash/). Anyone is welcome
   to participate in these.

When you pick something to work on, please:

1. Follow the standard workflow and assign it to yourself.
1. Share it in Slack to encourage [transparency](/handbook/values/#transparency)

### Testing

We aim to uphold [GitLab's principle of fostering an environment where Quality is everyone's responsibility](/handbook/engineering/quality/#our-principles).
Testing is an essential part of our [product development workflow](/handbook/product-development-flow/) and
[code review process](https://docs.gitlab.com/ee/development/code_review.html#quality).

Information regarding test coverage can be found via these issues/epics:

- [Unit test coverage of Compliance features](https://gitlab.com/gitlab-org/gitlab/-/issues/392415)
- [Shift-left coverage provided by E2E tests](https://gitlab.com/groups/gitlab-org/-/epics/11644)
- [Increasing E2E test coverage](https://gitlab.com/groups/gitlab-org/infrastructure/test-platform/-/epics/9)

## Milestone Planning

We plan in monthly cycles in accordance with our [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline). Our typical planning cycle is suggested to look like:

### Pre-planning

- By the 4th, Product should have created a planning issue for their group in the [Compliance project](https://gitlab.com/gitlab-org/govern/compliance/general/-/issues) for the coming release using the [template](https://gitlab.com/gitlab-org/govern/compliance/general/-/blob/main/.gitlab/issue_templates/planning_issue.md).
- The Complaince [quad](/handbook/engineering/infrastructure/test-platform/quad-planning/) will add a tentative plan for the release, outlining the highest priority issues within each of their respective areas.
- We prioritize using the [cross-functional prioritization](/handbook/product/cross-functional-prioritization/). The Product Manager will prioritize `type::feature` issues, the Engineering Manager will prioritize `type::maintenance` issues, and the Quality Manager will prioritize `type::bug` issues.
- Pre-planning is completed asynchronously by Product, Engineering, Quality and Design on the issue, this is to identify any unknowns or questions that need to be answered and resolved prior to final planning.
- Issues can be either in Refinement phase (`workflow::planning breakdown` and `workflow::solution validation`) or Implementation phase (`workflow::scheduling` and `workflow::ready for development`).
- Engineering Manager will update issue with the estimated group capacity for the Milestone
  - To assist with capacity planning, we track the cumulative weight of closed issues over the past 3 releases on a rolling basis. The proposed scope of work for the next release should not exceed 80% of this to account for slippage from the previous release.

### Planning

- To review the proposed scope and kick start estimation, there is a synchronous meeting with Engineering and Design on the second Friday of the Month.
- From there, we are able to select a ratio of the top issues to be planned for the milestone by using our [cross-functional issue board](https://gitlab.com/groups/gitlab-org/-/boards/4657720?milestone_title=15.4&label_name[]=group%3A%3Acompliance). Our target ratio is to plan 60% features, 30% maintenance, and 10% bugs per milestone. The data below helps us understand our overall cross-functional status.
- Each area will include a 20% stretch target of issues. EG capacity 40W x 60% features = 24W + 20% = ~28W
- With a list now determined, Milestones and label `workflow::ready for development` can be added to this work, ready for the Milestone to start.
- Engineering Manager will comment and add label to the assigned issues with clear expectations for the Milestone using one of four scoped label types:
  - `goal::planning` - full implementation plan created and if needed reviewed and approved
  - `goal::development` - development has begun and either has in dev or in review workflow
  - `goal::complete` - development complete and issue verified
  - `goal::stretch` - added as a stretch goal, no expectation to start
- We try to plan 1-2 Milestones ahead, we include a max of 2 planning issues (`workflow::planning breakdown` and `workflow::solution validation`) per person at the start of a Milestone, this is a rule of thumb.
  - When a planning issue is included in a Milestone it is also assigned to team members. This is to provide clarity on what and who is doing what planning in the Milestone.
- By the 20th, Product should review the release that just concluded development (currently, we transition development work from one release to the next on the 18th) for issues that slipped from the milestone. Please evaluate issues that weren't merged in time and reschedule them appropriately.
- Identify any issues which may have security implications, and ping the [Application Security Stable Counterpart](/handbook/security/product-security/application-security/stable-counterparts/) and/or [request an Application Security Review](/handbook/security/product-security/application-security/appsec-reviews/#adding-features-to-the-queue--requesting-a-security-review). The Product Manager will list these in the planning issue.

### Issue Prioritization

Our priorities should follow [overall guidance for Product](/handbook/product/product-processes/#how-we-prioritize-work). This should be reflected in the priority label for scheduled issues:

| Priority | Description | Probability of shipping in milestone |
| ------ | ------ | ------ |
| priority::1 | **Urgent**: top priority for achieving in the given milestone. These issues are the most important goals for a release and should be worked on first; some may be time-critical or unblock dependencies. | ~100% |
| priority::2 | **High**: important issues that have significant positive impact to the business or technical debt. Important, but not time-critical or blocking others.  | ~75% |
| priority::3 | **Normal**: incremental improvements to existing features. These are important iterations, but deemed non-critical. | ~50% |
| priority::4 | **Low**: stretch issues that are acceptable to postpone into a future release. | ~25% |

### Weekly Progress Updates

- Engineering manager (EM): Posts a comment on the current planning issue on the first day of the week, to prompt team members to update.
  - Format: | NUMBER | EPIC | GOAL | [DRI](/handbook/people-group/directly-responsible-individuals/) |
- Implementing team member: Posts a short update (1-2 sentences) in comment thread on each item where you are the directly responsible individual (DRI). The update should be in reference to the milestone goal set out during planning. If there is nothing to report omit the item or use "see previous update"

Intention of this is to:

- Have a reference for verbal weekly updates during the Compliance Weekly meetings.
- Document the weekly update for reporting.
- Remove the on-the-spot/ad-hoc nature of the weekly updates.
- Not be a personal performance indicator. The DRI is not necessarily the only individual working on an effort, and there may always be a change in priorities or other factors such as personal time off (PTO) or individuals being out of office (OOO).

## During Milestone

- When an issue is introduced into a release after Kickoff, an equal amount of weight must be removed to account for the unplanned work.
- Development should not begin on an issue before it's been estimated and given a weight.
- By the 15th, engineering merge requests should be merged. In other words, we assume code merged after the 15th will not be in the release. That allows time for the release to be finalized, and any associated [Release Posts](/handbook/marketing/blog/release-posts/) to be merged by the 17th. (This is an [experiment starting with 13.11](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330).)

### Development Flow

We generally follow the [Product Development Flow](/handbook/product-development-flow/#workflow-summary):

1. `workflow::problem validation` - needs clarity on the problem to solve
1. `workflow::design` - needs a clear proposal (and mockups for any visual aspects)
1. `workflow::solution validation` - needs refinement and acceptance from engineering
1. `workflow::planning breakdown` - needs a Weight estimate
1. `workflow::scheduling` - needs a milestone assignment
1. `workflow::ready for development`
1. `workflow::in dev`
1. `workflow::in review`
1. `workflow::verification` - code is in production and pending verification by the [DRI](/handbook/people-group/directly-responsible-individuals/) engineer
1. `workflow::complete` - the work has been verified and the work is complete, the issue should be closed at this stage

Generally speaking, issues are in one of two states:

- Discovery/refinement (1-4): we're still answering questions that prevent us from starting development,
- Implementation (6-9): an issue is waiting for an engineer to work on it, or is actively being built.

While individual groups are free to use as many stages in the [Product Development Flow](/handbook/product-development-flow/#workflow-summary) workflow as they find useful, we should be somewhat prescriptive on how issues transition from discovery/refinement to implementation.

### Discovery/Refinement

**The end goal is defined,** where all direct stakeholders says “yes, this is ready for development”. Some issues get there quickly, some require a few passes back and forth to figure out.

The goal is for engineers to have buy-in and feel connected to the roadmap. By having engineering included earlier on, the process can be much more natural and smooth. To do so, engineering managers, engineers, and designers can be pinged directly from the issue.

To move to the implementation phase all issues should have an Implementation Plan and a Weight

#### Backlog

Backlog management is very challenging, but we try to do so with the use of labels and milestones.

To identify issues that need refinement, use the "Next Up" label.
The purpose of the "Next Up" label is to identify issues that are currently in _any_ workflow stage before `workflow::ready for development`. By using this "Next Up" label in addition to workflow labels, we're able to see exactly what is being refined, e.g., problem, design, solution. This helps identify which issues are closer to being ready to schedule.

Issues shouldn't receive a milestone for a specific release (e.g. 13.0) until they've received a 👍 from both Product and Engineering. This also means the issue should not be labeled as `workflow::ready for development`.

- Product approval is represented by an issue moving into `workflow::planning breakdown`.
- Engineering approval is represented by an issue weight measuring its complexity.

#### Estimation

Before work can begin on an issue, we should estimate it first after a preliminary investigation.

If the scope of work of a given issue touches several disciplines (docs, design, frontend, backend, etc.) and involves significant complexity across them, consider creating separate issues for each discipline (see [an example](https://gitlab.com/gitlab-org/gitlab-ee/issues/9288)).

Issues without a weight should be assigned the `workflow::planning breakdown` label.

When estimating development work, please assign an issue an appropriate weight:

| Weight | Description (Engineering) |
| ------ | ------ |
| 1 | The simplest possible change. We are confident there will be no side effects. |
| 2 | A simple change (minimal code changes), where we understand all of the requirements. |
| 3 | A simple change, but the code footprint is bigger (e.g. lots of different files, or tests affected). The requirements are clear. |
| 5 | A more complex change that will impact multiple areas of the codebase, there may also be some refactoring involved. Requirements are understood but you feel there are likely to be some gaps along the way. We should challenge ourselves to break this issue in to smaller pieces. |
| 8 | A complex change, that will involve much of the codebase or will require lots of input from others to determine the requirements. These issues will often need further investigation or discovery before being `workflow::ready for development` and we will likely benefit from multiple, smaller issues. |
| 13 | A significant change that may have dependencies (other teams or third-parties) and we likely still don't understand all of the requirements. It's unlikely we would commit to this in a milestone, and the preference would be to further clarify requirements and/or break in to smaller Issues. |

As part of estimation, if you feel the issue is in an appropriate state for an engineer to start working on it, please add the ~"workflow::ready for development" label. Alternatively, if there are still requirements to be defined or questions to be answered that you feel an engineer won't be able to easily resolve, please add the `workflow::blocked` label. Issues with the `workflow::blocked` label will appear in their own column on our planning board, making it clear that they need further attention. When applying the `workflow::blocked` label, please make sure to leave a comment and ping the [DRI](/handbook/people-group/directly-responsible-individuals/) on the blocked issue and/or link the blocking issue to raise visibility.

#### Implementation Plan

For engineers, you may want to create an implementation approach when moving an issue out of `~workflow::planning breakdown`. A proposed implementation approach isn't required to be followed, but is helpful to justify a recorded weight.

As the [DRI](/handbook/people-group/directly-responsible-individuals/) for `workflow::planning breakdown`, consider following the example below to signal the end of your watch and the issues preparedness to move into scheduling. While more straightforward issues that have already been broken down may use a shorter format, the plan should (at a minimum) always justify the "why" behind an estimation.

The following is an example of an implementation approach from [https://gitlab.com/gitlab-org/gitlab/-/issues/247900#implementation-plan](https://gitlab.com/gitlab-org/gitlab/-/issues/247900#implementation-plan). It illustrates that the issue should likely be broken down into smaller sub-issues for each part of the work:

```md
### Implementation approach

~database

1. Add new `merge_requests_author_approval` column to `namespace_settings` table (The final table is TBD)

~"feature flag"

1. Create new `group_merge_request_approvers_rules` flag for everything to live behind

~backend

1. Add new field to `ee/app/services/ee/groups/update_service.rb:117`
1. Update `ee/app/services/ee/namespace_settings/update_service.rb` to support more than just one setting
1. *(if feature flag enabled)* Update the `Projects::CreateService` and `Groups::CreateService` to update newly created projects and sub-groups with the main groups setting
1. *(if feature flag enabled)* Update the Groups API to show the settings value
1. Tests tests and more tests :muscle:
   - In particular, cover both happy and unhappy paths, and consider tests for scenarios that could result in false positives or negatives

~frontend

1. *(if feature flag enabled)* Add new `Merge request approvals` section to Groups general settings
1. Create new Vue app to render the contents of the section
1. Create new setting and submission process to save the value
1. Tests tests and more tests :muscle:
   - In particular, cover both happy and unhappy paths, and consider tests for scenarios that could result in false positives or negatives

~documentation

1. Update docs page eg https://docs.gitlab.com/ee/administration/audit_events.html
1. Update the GraphQL examples https://gitlab.com/gitlab-org/govern/compliance/graphql-example-requests

~quality

1. Add new group-level end-to-end test based on existing project-level end-to-end test (include the path to the existing test eg `path/to/existing_test`)

```

The [DRI](/handbook/people-group/directly-responsible-individuals/) will ping a relevant counterpart (Quality, UX, etc) and domain expert (database, backend, frontend) before moving the issue to `workflow::scheduling`. This gives the domain expert the opportunity to approve the implementation plan or raise any potential pitfalls or concerns before work begins.
For domain expert review of development implementation plan, in case of trivial changes, the approval can be solicited from any of the relevant compliance development team members. Do try to find a person who has context around the topic. In case of non-trivial changes, opinions from the whole relevant compliance backend or frontend or both team members should be solicited by tagging respective group (`@gitlab-org/govern/compliance/frontend` or `@gitlab-org/govern/compliance/backend`) in the issue's comment. Deciding whether the implementation is trivial or non-trivial depends on the discretion of DRI and the initial domain expert asked for review.

Once an issue has been estimated, it can then be moved to `workflow::scheduling` to be assigned a milestone before finally being `workflow::ready for development`.

#### Breaking down or promoting issues

Depending on the complexity of an issue, it may be necessary to break down or promote issues. A couple sample scenarios may be:

- We need to do discovery on the design, before we do anything else. A "Discovery:" issue may work best here as it helps to contain the design thinking and discussion there, with the end result being transferred over to a "Implementation:" issue. These prefixes also help to organize what type of issue they are, in the case they are linked to parent issues or epics.
- The scope of work is larger than anticipated, and needs to be broken down further, e.g., it currently has a weight higher than 5. It may suit you to then promote said issue to an epic, to break it down into smaller issues to list out the different iterations or phases of work that need to happen to deliver the overall feature that was originally proposed.
- The scope of work is clear, but a bit unwieldy for one issue. It may make sense to keep the given issue as is, to keep the conversation and activity visible to everyone, but create separate child design, backend, or frontend issues to track the more nuanced progress of a given issue.

If none of the above applies, then the issue is probably fine as-is! It's likely then that the weight of this issue is quite low, e.g., 1-2.

### Implementation

#### Verification

The issue verification should be done by someone else other than the MR author. This decreases the case of defects getting into production and a different perspective to cover more test cases.

The verification process is also about sharing knowledge of development between the rest of the group. In an all remote organisation it is easy to become siloed developing features even in the same team, and this attempts to help bridge this.

- All MRs should have verification steps in the description. In the case where multiple MRs are created for an issue, the engineer who is assigned to the issue should add complete verification steps in the issue description or as a reply to the triage bot's comment.
- When an engineer has merged their work, they should move their issue into the verification status, indicated by the `~workflow:verification` label and wait until they receive notification that their work has been deployed on staging via the release issue email.
  - For ~`~type::bug`, `~type::feature`, or big changes the engineer should verify again once the change is available on .com/production and leave a comment summarizing the testing that was completed. Also provide a link to a project or page, if applicable.
- Issues in the ~workflow:verification state are assigned randomly by the triage bot based on the verification policy to an applicable team engineer. This engineer should then verify the issue. In addition to following the verification steps provided, the verifying engineer is encouraged to do exploratory testing by using the feature in a way that doesn't follow the happy path.
- Once the issue has been verified in production, the verifying engineer will close the issue and unassign themselves. The issue will automatically get the `~workflow::complete` label added.

In cases where verification in staging or production is unfeasible, the [staging-ref environment](/handbook/engineering/infrastructure/environments/staging-ref/) may be used. For complex setups, the DRI for the MR should work with a domain expert to ensure verification steps are clear and correct.

In some cases it may be appropriate for the MR author to verify the change themselves, for example feature flag rollout or monitoring a background migration. In these cases, the author should add the `verified-by-author` label to the issue to prevent the triage bot from assigning another team member, and the author should add a comment in the issue explaining why they are verifying the issue themselves.

##### Handling Discoveries of Issues

**Verifier: the engineer verifying the issue on .com/production (not the MR author)**

1. Verifier: documents findings by commenting on the verification thread on the issue.
1. Verifier: opens new issues ~"type::bug"  or ~"type::feature" based on fiindings.
   1. Verifier: sets the severity and/or priority based on [priority](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#priority)/[severity](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#severity-slos) triage process and the issue type (~"type::bug"  or ~"type::feature").
   1. ~"severity::1" / ~"severity::2" to be pulled directly into the milestone with comment added to ping(`@`) the engineering manager.
1. Verifier: assigns the MR author to newly opened issues.
1. Verifier: closes the issue and unassigns themself. The issue will automatically get the `~workflow::complete` label added.

#### Demos

During the `workflow::verification` process, we determine whether the Issue requires a demo. If unsure, work with PM to determine if a demo is required. Demos are great for showcasing progress and help users quickly understand how to use a features and its benefits. Our process for this is similar to [Single Engineer Groups Demo](/handbook/engineering/demos/#single-engineer-groups-demo):

- Record a video on your computer or via Zoom livestream of the working software. You can also use [loom](/handbook/tools-and-tips/other-apps/#loom) for recording demos.
- Upload to the [GitLab Unfiltered Channel](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A) and add to the [Compliance Group - Product Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqWds1BN41IJxLd1AvpZxGu)
- Post the YouTube link to the appropriate Slack channel and in the Issue

### Release posts

For issues which need to be announced in more detail, a release post can be automatically created using the issue.
When working on an issue, either in planning, or during design and development, you can use the
[release post item generator](/handbook/marketing/blog/release-posts/#release-post-item-generator)
to have the release post created and notify all the relevant people.

If you do not want an issue to have a release post, make sure that the issue does not have a
release notes section or use a `release post item::` label.

## Meetings

Although we have a bias for asynchronous communication, synchronous meetings are necessary and should adhere to our [communication guidelines](/handbook/communication/#video-calls). Some regular meetings that take place in Compliance are:

| Frequency | Meeting                              | DRI         | Possible topics                                                                                        |
|-----------|--------------------------------------|-------------|--------------------------------------------------------------------------------------------------------|
| Weekly (alternating between APAC/EMEA and AMER)    | Group-level meeting                  | Engineering Manager | Ensure current release is on track by walking the board, unblock specific issues                       |
| Monthly   | Planning meeting                    | Product Manager         | See [Planning](#milestone-planning) section |

For one-off, topic specific meetings, please always consider recording these calls and sharing them (or taking notes in a publicly available document).

Agenda documents and recordings can be placed in the [shared Google drive](https://drive.google.com/drive/u/0/folders/0ALpc3GhrDkKwUk9PVA) (internal only) as a single source of truth.

Meetings that are not 1:1s or covering confidential topics should be added to the Govern Shared calendar.

All meetings should have an agenda prepared at least 12 hours in advance. If this is not the case, you are not obligated to attend the meeting. Consider meetings canceled if they do not have an agenda by the start time of the meeting.

## Planning for PTO

We follow the [Govern stage PTO process](/handbook/engineering/sec/govern/#pto) and [GitLab team members Guide to Time Off](/handbook/people-group/paid-time-off/#a-gitlab-team-members-guide-to-time-off).

## Group Shared Calendar

The [Compliance Group Shared Calendar](https://calendar.google.com/calendar/embed?src=c_e21c4d99155603fa2f3b06f41628bebfe6013218000c822ec2fdfe7ed877d3e1%40group.calendar.google.com) is used to make sure PTO events are visible to everyone on the team.

### Syncing your Time Off by Deel entries to the Shared Calendar

Below are the steps to add the calendar to Time Off by Deel:

1. Open Slack
1. Open app in slack "Time Off by Deel"
1. Go to tab "Home",
1. Click on the dropdown "Your Events", and select "Calendar Sync".
1. Under "Additional calendars to include?", click on "Add calendar".
1. Add the following calendar ID: `c_e21c4d99155603fa2f3b06f41628bebfe6013218000c822ec2fdfe7ed877d3e1@group.calendar.google.com`

Great job! 🎉 Your PTO events will be synced to Compliance Group Shared Calendar from now on. 🚀

## Group News

The EM will usually create a general update for the group on what is happening within the company and within the group on a weekly basis.
This update currently takes the form of an issue within the [compliance update Epic](https://gitlab.com/groups/gitlab-org/govern/compliance/-/epics/3)

The Compliance EM also contributes to issues in the [Govern stage weekly updates](https://gitlab.com/groups/gitlab-com/-/epics/2126) epic.

## Group Members

The following people are permanent members of the group:

{{< stable-counterparts role="Govern.+Compliance" >}}

## Dashboards

### Product

[Product performance indicators / North star metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2200383/views)

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="compliance" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="compliance" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="compliance" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="compliance" >}}
{{< /tableau >}}

## Links and resources {#links}

- GitLab
  - [gitlab-org/govern/compliance](https://gitlab.com/gitlab-org/govern/compliance)
  - [General issues and discussions](https://gitlab.com/gitlab-org/govern/compliance/general/-/issues)
  - [Engineering issues and discussions](https://gitlab.com/gitlab-org/govern/compliance/engineering)
  - Compliance alias: `@gitlab-org/govern/compliance`
  - Compliance engineering alias: `@gitlab-org/govern/compliance/engineering`
  - [Milestone retrospectives](https://gitlab.com/gl-retrospectives/govern/compliance/-/issues)
  - Issue boards
    - [Build board](https://gitlab.com/groups/gitlab-org/-/boards/1305010)
    - [Planning board](https://gitlab.com/groups/gitlab-org/-/boards/4657720)
- Our Slack channels
  - Govern:Compliance [#g_govern_compliance](https://gitlab.slack.com/messages/CN7C8029H)
  - Daily standups [#g_govern_compliance_updates](https://gitlab.slack.com/archives/C013E163FD0)
  - Group related sentry errors [#g_govern_compliance_alerts](https://gitlab.slack.com/archives/C05GEBG97V3)
  - Complaince engineering alias: `@govern_compliance`
- Google Group
  - [sec-govern-compliance](https://groups.google.com/a/gitlab.com/g/sec-govern-compliance)

- Compliance group playlists on GitLab Unfiltered channel
  - [Product](https://www.youtube.com/playlist?list=PL05JrBw4t0KqWds1BN41IJxLd1AvpZxGu)
  - [Meetings](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq7_yBKIYHi8qvCWeU0Q3yH)

{{% include "includes/engineering/govern-shared-links.md" %}}
