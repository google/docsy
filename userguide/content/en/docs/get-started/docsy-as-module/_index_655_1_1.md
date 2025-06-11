---
title: "Verify:Pipeline Authoring Group"
description: "The GitLab team page for the Pipeline Authoring Group"
---

## Useful Links

### Product

- [Product Vision](https://about.gitlab.com/direction/ops/#verify)
- [Pipeline Authoring Category direction](https://about.gitlab.com/direction/verify/pipeline_composition/)
- [number of unique users who trigger ci_pipelines (Performance indicator)](https://internal.gitlab.com/handbook/company/performance-indicators/product/ops-section/#verifypipeline-authoring---gmau---number-of-unique-users-interacting-with-gitlab-ciyml-file) - Internal link
- [CI/CD Development Documentation](https://docs.gitlab.com/ee/development/cicd/index.html)
- [CI/CD Components Documentation](https://docs.gitlab.com/ee/ci/components/)
- [CI/CD Catalog Documentation](https://docs.gitlab.com/ee/ci/components/#cicd-catalog)

## Team Handles

| Category | Handle |
|---------------|------|
|GitLab Team Handle | @verify-pa-team |
| Slack Channel | [#g_pipeline-authoring](https://gitlab.slack.com/archives/C019R5JD44E) |
| Slack Handle (Engineers) | @verify-pa-engineering |

### Team Resources

- [Team Resources](/handbook/engineering/development/ops/verify/pipeline-authoring/team-resources/)
- [Workflow board: `~group::pipeline authoring`](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started)

### Videos

- [GitLab Unfiltered: Pipeline Execution group (CI Related)](https://www.youtube.com/playlist?list=PL05JrBw4t0KpsVi6PG4PvDaVM8lKmB6lV)
- [CI Backend Architectural Walkthrough - May 2020](https://www.youtube.com/watch?v=ew4BwohS5OY)
- [Frontend CI product / codebase overview - June 2020](https://www.youtube.com/watch?v=7CUd7aAUiWo)
- [CI/CD Catalog Demo](https://www.youtube.com/watch?v=oNcJCU-a-bM)

## Core domain

### Products

| Product | Navigation | Documentation |
| ------- | ---------- | ------------- |
| **CI/CD Pipelines** | [Build >> Pipelines](https://gitlab.com/gitlab-org/gitlab/-/pipelines) | [GitLab docs](https://docs.gitlab.com/ee/ci/pipelines/) |
| **Pipeline editor** | [Build >> Pipeline editor](https://gitlab.com/gitlab-org/gitlab/-/ci/editor?branch_name=master) | [GitLab docs](https://docs.gitlab.com/ee/ci/pipeline_editor/) |
| **CI/CD Catalog** | [Explore >> CI/CD Catalog](https://gitlab.com/explore/catalog) | [GitLab docs](https://docs.gitlab.com/ee/ci/components/) |

### Features

- [Pipeline creation](https://docs.gitlab.com/ee/ci/quick_start/)
- [YAML syntax](https://docs.gitlab.com/ee/ci/yaml/)
- [CI/CD configuration lint tool](https://docs.gitlab.com/ee/ci/yaml/lint.html)
- [CI/CD Variables](https://docs.gitlab.com/ee/ci/variables/)
- Additional features can be found [here](/handbook/product/categories/features/#pipeline-authoring)

## Technical Roadmap

`Remainder of FY25`

These areas are our high-level engineering driven goals for the remainder of `FY25`. Though they are ambitious and subject to change, it gives insight into where our focus will be in these areas.

### Performance & Cost Reduction

**Pipeline Creation Speed**

**NOTE:** Pipeline creation feedback [issue](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/34984).  We welcome your thoughts on your experience with the pipeline creation process.

Goals:

- Understand the components of the pipeline creation service to improve speed.
  - This [graph](https://log.gprd.gitlab.net/app/r/s/r5Owf) captures data around the pipeline creation performance.
- Top 3 identified issues to optimize pipeline creation performance.
  - [Bulk insert Sidekiq jobs when creating a pipeline](https://gitlab.com/gitlab-org/gitlab/-/issues/348553)
  - [Expand CI variables lazily and selectively](https://gitlab.com/gitlab-org/gitlab/-/issues/410143)
  - [Evaluate rules once for parallel jobs](https://gitlab.com/gitlab-org/gitlab/-/issues/450687)

### Efficiency

Goals:

- Transition from entry classes to JSON schema for data structure validation. - [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/463062)

### Visibility

**CI Catalog instrumentation**

Goals:

- Top 3 identified issues to add more visibility for usage in CI/CD Catalog with adding instrumentation.
  - [Capture GraphQL call times](https://gitlab.com/gitlab-org/gitlab/-/issues/452247)
  - [Implement instrumentation to track performance of Ci::Catalog::Listing queries](https://gitlab.com/gitlab-org/gitlab/-/issues/435440)
  - [Capture page load times](https://gitlab.com/gitlab-org/gitlab/-/issues/452246)

### FY26 top of mind

- Support for GraphQL subscriptions - [epic](https://gitlab.com/groups/gitlab-org/-/epics/15108)
- Pipeline performance improvements - [epic](https://gitlab.com/groups/gitlab-org/-/epics/15244)
- CI Variables improvements - [epic](https://gitlab.com/groups/gitlab-org/-/epics/15250)
- MR Pipeline Tab migration to GraphQL - [epic](https://gitlab.com/groups/gitlab-org/-/epics/15133)

## Exciting things and accomplishments

This section will list the top three most recent, exciting accomplishments from the team.

- Recently, we released the CI/CD Catalog to [GA](https://gitlab.com/groups/gitlab-org/-/epics/12153).
- We added usage statistics and a sort option for popularity in the CI/CD Catalog [index page](https://gitlab.com/gitlab-org/gitlab/-/issues/434333)

## Team Members

{{< team-by-manager-role "Engineering Manager(.*)Verify:Pipeline Authoring" >}}

## Stable Counterparts

To find our stable counterparts, look at the Pipeline Authoring [product category listing](/handbook/product/categories/#pipeline-authoring-group).

## Capturing User Feedback

We highly value user feedback! Please use the issue below to capture feedback and insights for our newest feature, CI/CD Catalog:

- [CI/CD Catalog Feedback](https://gitlab.com/gitlab-org/gitlab/-/issues/407556)

## Community Contributions

Pipeline authoring at GitLab involves a deep understanding of our CI/CD system and its intricate interactions with various components. This complexity can present challenges for those unfamiliar with the codebase and underlying architecture.

We encourage community contributors to work on issues with the ~"seeking community contribution" label. These issues are specifically selected to provide a clear and manageable path for external contributions.

Due to the inherent complexity of pipeline authoring, contributions to issues not marked for community contribution may require significant domain knowledge and familiarity with GitLab's internals. While we appreciate all contributions, Merge Requests for these issues may require more extensive review and may not be merged if they don't align with our architectural vision or best practices.

### Guidance for Reviewers

When reviewing Merge Requests from community contributors, please consider the following:

- Issue Selection: Verify if the contribution addresses an issue labeled ~"seeking community contribution". If not, assess the complexity and required domain knowledge.
- Mentorship: If the contribution shows promise but needs guidance, provide constructive feedback and consider offering mentorship to help the contributor succeed.
- Clear Communication: Explain the rationale behind any required changes or decisions clearly and respectfully, ensuring the contributor understands the context and reasoning.

If the issue picked up by the community does not have the ~'seeking community contribution' label and/or is too complex please consider using the following template:

```markdown
"Thank you for your interest in contributing to GitLab! We appreciate you taking the initiative to work on this. This particular area involves complexities that may require deeper domain knowledge of GitLab's CI/CD system. To ensure a smoother review process and increase the likelihood of your contribution being merged, we recommend focusing on issues with the ~'seeking community contribution' label. These are specifically curated for external contributors. A curated list of issues is available here: https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=popularity&state=opened&label_name%5B%5D=group%3A%3Apipeline%20authoring&label_name%5B%5D=Seeking%20community%20contributions&first_page_size=100"
```

## Group Meetings

For every meeting, it is expected that it contains a list of agenda items to discuss along with the meeting notes when the meeting takes place. This will make it easier for people to catch up if they are unable to attend.

Please note that sync meeting schedules are flexible and can be moved to accomodate required participants. For an up-to-date schedule of all team meetings, please consult the [Group's Calendar](https://calendar.google.com/calendar/u/0/embed?src=c_n7totcsnoi7l2j0a2n9ps08g7s@group.calendar.google.com&ctz=UTC).

The table below briefly outlines the objectives and key details of regular team meetings:

| Meeting Title | Cadence | DRI | What |
|---------------|------|------|------|
| Team weekly sync * | Weekly | Everyone | Discuss everything team related, meeting rotates across timezones each week. |
| Design discussions | Bi-Weekly | UX | Review current design work that needs collaboration or feedback from Engineering. |
| Technical discussions | Bi-Weekly | Engineers | Discuss current work and open questions that team members have for each other |

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="pipeline authoring" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="pipeline authoring" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="pipeline authoring" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="pipeline authoring" >}}
{{< /tableau >}}

### Cross-functional prioritisation

UX, Product Manager and Engineering Manager meet weekly to discuss cross-functional prioritisation in addition to any other topics that require the quad to collaborate on. Additionally, the quad also reviews the [dashboard](/handbook/engineering/development/ops/verify/pipeline-authoring/#merged-merge-request-types) which shows the % of MRs that are bugs vs maintenance vs features to ensure the team's efforts are properly aligned to the prioritisation.

### Design Collaboration

We hold a bi-weekly design sync meeting open to all team members where we discuss any design-related topic.

## How We Work

### Planning

Issues are refined and weighted prior to assigning them to a milestone. We use `candidate::` scoped labels to help with planning work in future milestones. This label allows us to filter on the issues we are planning, allowing Product, Engineering, and UX to refine issues async that have `workflow::design` and `workflow::ready for development` labels applied. Weighting also helps with capacity planning with respect to how issues are scheduled in future milestones.

We create a [planning issue](https://gitlab.com/gitlab-org/ci-cd/pipeline-authoring/-/blob/master/.gitlab/issue_templates/Planning_issue_PA.md) as part of our milestone planning process and the [workflow board](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started) is the single source of truth ([SSOT](https://docs.gitlab.com/ee/development/documentation/styleguide/#documentation-is-the-single-source-of-truth-ssot)) for current and upcoming work. Product is the DRI in prioritizing work, with input from Engineering, UX, and Technical Writers. The planning issue is used to discuss questions and team capacity. Prior to the beginning of each milestone, issues identified in the planning issue will be assigned to that milestone and engineers can assign prioritized issues to themselves from the top of the `workflow::ready for development` column in the [workflow board](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started).

#### Finding issues that need refinement

Issues that needs to be refined are listed in the [planning issue](https://gitlab.com/gitlab-org/ci-cd/pipeline-authoring/-/issues/?sort=closed_at_desc&state=opened&label_name%5B%5D=Planning%20Issue&first_page_size=100) associated with the upcoming milestone(s)

#### How Engineering Refines Issues

*side note: we prefer [using Refining over Grooming](/handbook/communication/top-misused-terms)*

The purpose of refining an issue is to ensure the problem statement is clear enough to provide a rough effort sizing estimate; the intention is not to provide **solution validation** during refinement.

##### Checklist for Refining Issues

1. Does the issue have a problem statement in the description?
1. Does the issue have the expected behaviour described well enough for anyone to understand?
1. Does the issue explicitly define who the stakeholders are (e.g. BE, FE, PM, UX and/or Tech Writer)?
1. Does the issue have a proposal in the description? *If so:*
    1. Does the proposal address the problem statement?
    1. Are there any unintended side effects of the implementation?
1. Does the issue have proper labeling matching the job to be done? (e.g. bug, feature, performance)
1. If the issue is a `type::bug`, is it clear how to reproduce the behavior and can a sample CI configuration file be provided?

Any one on the team can contribute to answering the questions in this checklist, but the final decisions are up to the PM and EMs.

##### Use of Sub-tasks

We use sub-tasks in issues to help with refinement. The goal is that we have one SSOT issue that contains threaded discussions around all aspects of the feature which include backend, frontend, UX, Product, and documentation.

##### Steps for Refining and Weighting Issues

Engineers will:

1. Go through the checklist above for refining issues they assign to themselves prior to each milestone.
1. Add a [weight based on the definitions](#weighting-issues).
1. Update the `~workflow::` label to the appropriate status, for example:
   - ~"workflow::design" if further design refinement is needed, and let the designer know.
   - ~"workflow::ready for development" when refinement is complete and a weight has been applied, signaling that it's ready for implementation and the issue can be scheduled accordingly.
   - ~"workflow::planning breakdown" if more investigation or research is needed, the status does not move, and the PM and EMs should be pinged.
1. Unassign themselves from the issue when they are done refining and weighting the issue.

#### Weighting Issues

The weights we use are:

| Weight     | Extra investigation | Surprises    | Collaboration |
| ---------- | ------------------- | ------------ | --------      |
| 1: Trivial | not expected        | not expected | not required  |
| 2: Small   | possible            | possible     | possible      |
| 3: Medium  | likely              | likely       | likely        |
| 5: Large   | guaranteed          | guaranteed   | guaranteed    |

The above table is contextual. Domain knowledge, experience level, and time at GitLab can impact an engineer's perspective on whether an issue requires extra investigation or surprises.

Weights are not set in stone. We do our best to get it right during refinement, but we want to be transparent and accurate. If an issue is taking more effort than is reflected in the existing weight, the DRI on the issue is encouraged to change the weight. We want accurate documentation of the level of effort that was required.

Anything weighted as a 5 or larger should be broken down. These should not be `ready for development`.

### Syntax deprecation process

Our CI syntax keeps evolving. We cannot support all keywords indefinitely, so deprecating and removing keywords is inevitable.

GitLab does not have a versioning system for CI/CD configuration. Therefore, it is critical to over-communicate our deprecation purposes to our users and take the necessary precautions to reduce the impact on their projects. Deprecating a keyword is risky because it will break all pipelines using it, and in some cases, users are not aware of the keyword they use in their pipeline. The deprecation process described below is similar to the [deprecating and removing features](https://docs.gitlab.com/ee/development/deprecation_guidelines/) process, with additional steps to reduce the risks which involved with removing a CI/CD keyword.

1. Deprecation notice - Syntax removal introduces a breaking change, as outlined in our deprecation process, we must notify the community and customers, which means including a deprecation notice in the monthly release post.
1. Track keyword usage - Tracking keyword usage should begin as early as possible. It is a mandatory step that helps estimate the user impact, timing, and needed effort. The more users use the keyword, the more time it takes to remove it (It took more than four years to move from [remove](https://gitlab.com/gitlab-org/gitlab-foss/-/merge_requests/9766) to [deprecation](https://gitlab.com/gitlab-org/gitlab/-/issues/346823) for 'type' keyword).
1. In-app warning - Provide our users with an in-app notification that we plan to remove a keyword they use in their pipeline. Our customers will get a notification in each run of the pipeline that uses the deprecated keyword. The warning will be printed:
   - At run time on the pipeline page and logs.
   - In the pipeline editor, while authoring a pipeline.

    This step is optional if the keyword usage is relatively low (Recommend minimal reach of ~5% impacted users).
1. Keyword removal - The keyword will be removed from our code and schema and should happen in a major version. Once removed,  using the keyword will result in a lint error.

### Workflow

We use the [Pipeline Authoring Workflow issue board](https://gitlab.com/gitlab-org/gitlab/-/boards/5726606?label_name[]=group%3A%3Apipeline%20authoring&milestone_title=Started) to track what we work on in the current milestone.

We follow the [product development flow](/handbook/product-development-flow/) to ensure that the problems we're solving are well understood and the solutions are well defined and validated before the implementation.

Our UX counterpart is the DRI for the SSOT designs, and they have the right to push any enhancement discussions in MRs into follow-up efforts in created and linked issues.

We use workflow labels to efficiently communicate an issue's state. Using these labels enables collaboration across teams and communicates an issue's current state. Issues that have been refined but are not scheduled (are in Backlog) should have the `workflow::scheduling` label applied

The DRIs throughout each phase of the workflow are responsible for keeping the workflow labels up-to-date.

#### Async Issue Updates

In order to optimize async collaboration we use issue updates to share progress completed on a specific issue or epic.

Weekly updates on progress and status will be added to each issue by its assignee. A weekly update may be skipped if there was no progress. The update should be provided in the issue rather than in the related merge requests, as those do not provide a view of the overall progress. This applies to issues with the labels `workflow::in dev`, `workflow::in review`, or `workflow::design`.

The status comment can include what percentage complete the work is, the confidence of the person that their estimate is correct and, a brief note on what was done. It's perfectly acceptable to have multiple updates if more than one DRI is working on the issue.

As a part of the async update it's important to verify that the issue and related MRs workflow labels are correctly set.

##### Example

```markdown
## Async status update

- Complete: 80%
- Confidence: 90%
- Notes: expecting to go into review tomorrow
```

#### Aligning on feature development

The Engineering DRI works with the Product Designer throughout the `workflow:in dev` phase to uncover possible problems with the solution early enough that exhibit unexpected behaviour to what was originally agreed upon. If there are changes to be added that weren't agreed upon in the initial issue - a followup issue should be made and the Engineering DRI should work with the Product Manager to schedule that issue in a following iteration. This allows us to focus on [cleanup over signoff](/handbook/values/#cleanup-over-sign-off), iterate quickly on issues with [a low level of shame](/handbook/values/#low-level-of-shame), and still make sure we accomplish what we've agreed upon. We should be careful not to hold off on completing these followup issues so that we don't build up a significant amount of Deferred UX issues.

If we find that solutions are consistently not matching the agreed upon design, we will hold a retrospective with the DRI, designer, and product manager to discuss where the gaps in communication are so that we can improve. It may be necessary to begin requiring a UX approval for merge requests on certain issues to help the Engineering DRI meet the requirements.

### Technical Debt

- We track our team's technical debt using the following the [Technical Debt Prioritization board](https://gitlab.com/gitlab-org/gitlab/-/boards/7735063?label_name[]=group%3A%3Apipeline%20authoring&label_name[]=type%3A%3Amaintenance), where we track issues with upcoming candidate labels and compare against current milestone.
- In an effort to promote more transparency across the stage where collaboration may be needed, starting in August 2024, we've introduced a [Verify Pipeline teams Technical Debt board](https://gitlab.com/groups/gitlab-org/-/boards/1438885?not%5Blabel_name%5D%5B%5D=group%3A%3Ahosted%20runners&not%5Blabel_name%5D%5B%5D=group%3A%3Arunner&label_name%5B%5D=devops%3A%3Averify&label_name%5B%5D=type%3A%3Amaintenance) that shows the top of mind priorities in the Pipeline teams.

### Retrospectives

{{% include "includes/engineering/verify-retrospectives.md" %}}

[View the current Pipeline Authoring retrospective](https://gitlab.com/gl-retrospectives/verify-stage/pipeline-authoring/-/issues/?sort=created_date&state=opened&label_name%5B%5D=retrospective).

### Team Communication

{{% engineering/verify-team-communication slack-channel="g_pipeline-authoring" slack-url="https://gitlab.slack.com/archives/CPCJ8CCCX', group_label: 'group::pipeline authoring', group_issues_url: 'https://gitlab.com/groups/gitlab-org/-/issues?label_name%5B%5D=group%3A%3Apipeline+authoring&scope=all', gitlab_subgroup: 'pipeline-authoring-group" %}}

#### Shared Team Calendar

The Pipeline Authoring team has a shared calendar that integrates with the [`#g_pipeline-authoring`](https://gitlab.slack.com/archives/C019R5JD44E) Slack channel to inform the team of important dates from Time Off by Deel.

Instructions on how to integrate with the `Verify:Pipeline Authoring` calendar can be found [here](https://gitlab.com/gitlab-org/ci-cd/pipeline-authoring/-/issues/28).

## Developer Onboarding

Refer to the [Developer Onboarding in Verify](/handbook/engineering/development/ops/verify/#developer-onboarding-in-verify) section.
