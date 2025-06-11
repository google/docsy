---
title: Import and Integrate Group
description: The Import and Integrate facilitates migrations, third-party integrations, and API use.
---

## About

The Import and Integrate group is a part of the [Foundations Stage](/handbook/product/categories/#foundations-stage).
The group supports the product

- by migrating between GitLab instances and from other providers
- with 3rd party integrations and webhooks
- by supporting foundational REST API GraphQL code.

This page covers processes and information specific to the Import and Integrate group. See also the [group direction page](https://about.gitlab.com/direction/foundations/) and the [features we support per category](/handbook/product/categories/features/#import-and-integrate).

## How to reach us

To get in touch with the Import and Integrate group, it's best to create an
issue in the relevant project (typically [GitLab](https://gitlab.com/gitlab-org/gitlab)) and add the
`~"group::import and integrate"` label, along with any other [appropriate labels](#issue-labels). Then,
feel free to ping the relevant Product Manager and/or Engineering Manager.

For more urgent items, feel free to use the Slack Channel (internal): [#g_import_and_integrate](https://gitlab.slack.com/archives/g_import_and_integrate).

Note that while we own the foundations of GitLab's APIs, the behaviour of most individual API endpoints is owned by
other teams. Please check the [feature categorizatiob page](/handbook/product/categories/features/) to ensure your
query is being directed to the correct group.

## Team Members

The following people are permanent members of the group:

{{< stable-counterparts role="Foundations:Import and Integrate" >}}

## Metrics

Our Engineering Metrics Dashboards can be found [here](/handbook/product/groups/product-analysis/engineering/dashboards/#dashboards).

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="import and integrate" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="import and integrate" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="import and integrate" >}}
{{< /tableau >}}

## Work

The Product Manager uses milestone priority labels and compiles the list of Deliverable and Stretch issues following
the [product prioritization process](/handbook/product/product-processes/#prioritization),
with input from the team, Engineering Managers, and other stakeholders.
The iteration cycle lasts from the 18th of one month until the 17th of the next,
and is identified by the GitLab version set to be released.

### Issue Development Workflow

In general, we use the standard GitLab [engineering workflow](/handbook/engineering/workflow/).

The easiest way for Engineering Managers, Product Managers, and other stakeholders
to get a high-level overview of the status of all issues in the current milestone,
or all issues assigned to a specific person, is through the [Current milestone board](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name%5B%5D=group%3A%3Aimport%20and%20integrate),
which has columns for each of the workflow labels.

As owners of the issues assigned to them, engineers are expected to keep the
workflow labels on their issues up to date, either by manually assigning the new
label, or by dragging the issue from one column on the board to the next.

Once an engineer starts working an issue, they mark it with the `workflow::"in
dev"` label as the starting point and continue [updating the issue throughout development](/handbook/engineering/workflow/#updating-issues-throughout-development).
The process primarily follows the guideline:

``` mermaid
graph LR

  classDef workflowLabel fill:#428BCA,color:#fff;

  A(workflow::in dev):::workflowLabel
  B(workflow::in review):::workflowLabel
  C(workflow::verification):::workflowLabel
  F(workflow::complete):::workflowLabel

  A -- Push an MR --> B
  B -- Merged --> C
  C --> D{Works on production?}
  D -- YES --> F
  F --> CLOSE
  D -- NO --> E[New MR]
  E --> A
```

If someone starts working on an issue but it has the same workflow label for a
week, the assignee has to leave a comment explaining the status of the issue.
We should write at least one comment every week that the issue is not moving.

### Issue Boards

The work for the Import and Integrate group can be tracked on the following issue boards:

- [Current milestone board](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport%20and%20integrate)

### Issue Labels

To maintain good label hygiene, please apply the correct labels when creating or triaging issues.

All issues should have:

- All of our section, stage and group labels:
  - `~"section::core platform"`
  - `~"devops::foundations"`
  - `~"group::import and integrate"`
- One or more of the category labels:
  - `~"Category:API"`
  - `~"Category:Importers"`
  - `~"Category:Integrations"`
  - `~"Category:Internationalization"`
  - `~"Category:Webhooks"`
- A [type label](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification)
- A [workflow label](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development)
- `~"backend"` or `~"frontend"` if appropriate

For issues related to importers, also apply an `Importer:` label. For example: `~"Importer:GitHub"` or `~"Importer:Direct Transfer"`.

For issues related to integrations, also apply a scoped `Integration::` label. For example: `~"Integration::Slack"` or `~"Integration::Jira"`.

For issues related to our APIs, also apply either `~"api"` for REST or `~"GraphQL"` for GraphQL.

Once you have completed an issue and closed it make sure to add `~"workflow::complete"`.

Team members might find it helpful to use a comment template to help apply labels correctly. See [an example here](https://gitlab.com/gitlab-org/foundations/import-and-integrate/discussions/-/issues/76#note_1718035490).

### Capacity Planning

We use a lightweight system of issue weighting to help with capacity planning.
These weights help us ensure that the amount of scheduled work in a cycle is
reasonable, both for the team as a whole and for each individual. The "weight
budget" for a given cycle is determined based on the team's recent output, as
well as the upcoming availability of each engineer.

Since [things take longer than you think](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html),
it's OK if an issue takes longer than the weight indicates. The weights are
intended to be used in aggregate, and what takes one person a day might take
another person a week, depending on their level of background knowledge about
the issue. **That's explicitly OK and expected.** We should strive to be
accurate, but understand that they are estimates!  Change the weight if it is
not accurate or if the issue becomes harder than originally expected. Leave a
comment indicating why the weight was changed and tag your EM so that we can
better understand weighting and continue to improve.

#### Weights

The weights we use are:

| Weight | Description  |
| --- | --- | --- |
| 1: Trivial | The problem is very well understood, no extra investigation is required, the exact solution is already known and just needs to be implemented, no surprises are expected, and no coordination with other teams or people is required.<br><br>Examples are documentation updates, simple regressions, and other bugs that have already been investigated and discussed and can be fixed with a few lines of code, or technical debt that we know exactly how to address, but just haven't found time for yet. |
| 2: Small | The problem is well understood and a solution is outlined, but a little bit of extra investigation will probably still be required to realize the solution. Few surprises are expected, if any, and no coordination with other teams or people is required.<br><br>Examples are simple features, like a new API endpoint to expose existing data or functionality, or regular bugs or performance issues where some investigation has already taken place. |
| 3: Medium | Features that are well understood and relatively straightforward. A solution will be outlined, and most edge cases will be considered, but some extra investigation will be required to realize the solution. Some surprises are expected, and coordination with other teams or people may be required.<br><br>Bugs that are relatively poorly understood and may not yet have a suggested solution. Significant investigation will definitely be required, but the expectation is that once the problem is found, a solution should be relatively straightforward.<br><br>Examples are regular features, potentially with a backend and frontend component, or most bugs or performance issues. |
| 5: Large | Features that are well understood, but known to be hard. A solution will be outlined, and major edge cases will be considered, but extra investigation will definitely be required to realize the solution. Many surprises are expected, and coordination with other teams or people is likely required.<br><br>Bugs that are very poorly understood, and will not have a suggested solution. Significant investigation will be required, and once the problem is found, a solution may not be straightforward.<br><br>Examples are large features with a backend and frontend component, or bugs or performance issues that have seen some initial investigation but have not yet been reproduced or otherwise "figured out". |

Anything larger than 5 should be broken down if possible.

Weights should account for both development and review time.

Security issues are typically weighted one level higher than they would normally
appear from the table above. This is to account for the extra rigor of the
[patch release process](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/engineer.md).
In particular, the fix usually needs more-careful consideration, and must also
be backported across several releases.

### Backlog Refinement

Every week the engineering team completes a backlog refinement process
to review upcoming issues. The goal of this effort is for all issues to have a
weight so we can more accurately plan each milestone using the estimated
capacity for the team and the estimated issue weights.

In addition to this backlog refinement process, engineers on the team can add
weights to any issues that are straight-forward and do not need backlog
refinement.

This process happens in three steps.

#### Step 1: Identifying Issues for Refinement

The engineering manager will identify issues that need to be
refined. On average we will try to refine up to 6 backend and up to 3 frontend issues per
week. If there are issues that are good candidates for the backlog refinement
process, please let the engineering manager know in the issue.

When picking issues to refine, we try to have themed refinements to reduce the
context switching while the issues are being investigated. Here are some places
to look:

- [Infradev Issues](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=infradev&weight=None)
- [Issues scheduled for the next milestone without weight](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&milestone_title=%23upcoming&weight=None)
- [Security Issues](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=security&weight=None)
- [Performance issues](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=performance&weight=None)
- [Application Limits](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=Application%20Limits&weight=None)
- [Missed-SLO](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=missed-SLO&weight=None)
- [Approaching-SLO](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=approaching-SLO&weight=None)
- [Bugs](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&label_name[]=type::bug&weight=None)
- [Issues without weight](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name[]=group%3A%3Aimport%20and%20integrate&weight=None)

Once identified, the engineering manager will apply the `ready for next refinement` label, which will indicate the issues are ready for
refinement.

The engineering manager will use the [Refinement Bot](https://gitlab.com/gitlab-org/foundations/import-and-integrate/refinement-bot)
to generate an issue with all the issues that have been identified for
refinement.

#### Step 2: Refining Issues

Over the week, each engineer on the team will look at the list of issues
selected for backlog refinement. [Current backlog refinement issues](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&state=opened&label_name%5B%5D=ready%20for%20next%20refinement).

For each issue, each team member will review the issues and provide the
following information:

- Estimated weight.
- How to break down the issue into different issues or merge requests.

Some considerations:

- Keep the conversation on the original issues.
- During this process, the issue description and [labels](#issue-labels) should be updated as
more information is gathered.
- Does the issue need a feature flag?
- For efficiency, engineers can also skip the refinement of some issues
depending on the feedback that we already have.
- Where the fix is clear and easy, we can assign the issue to
ourselves, give it a weight of 1 and push the fix.

#### Step 3: Finalizing Refinement

After engineers have had a chance to provide input, the engineering manager will then:

- Apply a final weight. This could be the average of weights provided by the
engineers, but the final decision is up to the engineering manager taking into
consideration the uncertainty.
- Inform stable counterparts if there are any testing or security concerns.
- Remove the `ready for next refinement` label.
- Apply the right `workflow::` label based on the outcome of the refinement. Example `workflow::ready for development`.

For any issues that were not discussed and given a weight, the engineering
manager will work with the engineers to see if we need to get more information
from PM or UX.

### Requesting help

If you are not part of the Support organization, we recommend reaching out to them first, as they have greater availability and can assist with most common issues. There's a dedicated Slack channel [#spt_pod_import_and_integrate](https://gitlab.enterprise.slack.com/archives/C052K0Z1F8T) you can join, follow and ask questions in. However, there are times when in-depth technical knowledge is needed to resolve a customer issue, requiring the involvement of an engineer from the team.

Before requesting help from the Engineering team, please first review the [GitLab documentation](https://docs.gitlab.com/) for the topic of your interest and the additional resources listed below:

- [Importer Runbook](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/runbook.md?ref_type=heads)
- [GitLab Log Analysis Tool](https://gitlab.com/gitlab-org/foundations/import-and-integrate/gitlab-logs-analysis)
- [Jira playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Koazgli_PmMQCER2pVH7vUT)

If you cannot find the answer to your question in the resources listed above, please open a [Request for Help (RFH) issue](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Import-Integrate) and use the `SupportRequestTemplate-Import-Integrate` template. Please ensure that you provide all the required information before reaching out to the team; otherwise, we will be unable to proceed with your request. New issues will be prioritized according to our internal triage process. Please note that we can only support requests for issues affecting the current and the two most recent minor GitLab versions (N-2). We cannot offer a fix for older versions. This is aligned with our [maintenance policy for backports](https://docs.gitlab.com/ee/policy/maintenance.html#patch-releases).

### Milestone Doctors

In FY2025, on average 4-5 `Request for Help` (RFH) issues per month have been opened for feature categories that are owned by our team. Most of these issues are high-priority requests that involve the Engineering team to help resolve blocking issues for our customers. This type of ad-hoc work causes a lot of interruption while working on milestone Deliverables. To ensure these RFH issues are processed as quickly as possible by the Engineering team and to reduce context-switching time within the team, two engineers take on the "Milestone Doctor" role at every milestone. Their capacity for Deliverable work is reduced to 60% to allow taking over additional responsibilities as "Milestone Doctors".

#### Responsibilities

- Engage with Support and PS on new [RFH issues](https://gitlab.com/gitlab-com/request-for-help/-/issues?label_name%5B%5D=Help%20group%3A%3Aimport%20and%20integrate)
- Follow-up on long-lasting open issues
- Assist the Support team on customer calls
- Maintain team runbook documentation on how Milestone Doctors have successfully diagnosed problems
- Respond to questions in our team Slack channel #g_manage_import_and_integrate
- Update our [FAQ](https://gitlab.com/gitlab-org/foundations/import-and-integrate/team/-/blob/main/importers/faq.md?ref_type=heads) with any learnings from the shift

#### Rotation schedule

- Each milestone two Backend Engineers take the role of a Milestone Doctor.
- Engineers claim shifts themselves on the [Milestone Doctor schedule spreadsheet](https://docs.google.com/spreadsheets/d/1N6ObBcCnliu4uZS-_IbpsjzgrF5f-etcLohYKAzR6KQ/edit?usp=sharing).
- At the beginning of a new milestone, Milestone Doctors update assignee section of the [RFH template](https://gitlab.com/gitlab-com/request-for-help/-/edit/main/.gitlab/issue_templates/SupportRequestTemplate-Import-Integrate.md) with their usernames.
- Given the current team size, every Backend Engineer is expected to sign up as Milestone Doctor once per quarter.
- At the end of each quarter, the EM assigns unassigned shifts for the upcoming quarter to engineers.

### Working with Security

The group has an existing [threat model](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/threat-models/-/blob/master/gitlab-org/gitlab/GitLab%20Migration.md) to assist in identifying issues that may have security implications, but there are other considerations.

An [Application Security Review](/handbook/security/product-security/application-security/appsec-reviews/) should be requested when the issue or MR might have security implications. These include, but aren't limited to, issues or MRs which:

- falls under the threat model
- handles binary files (downloading, decompressing, extracting, moving, deleting)
- modifies or uses file manipulation services
- uses methods from Import/Export `CommandLineUtil`

### Longer lived feature flags

This is a supplement to GitLab's common [development guidance](https://docs.gitlab.com/ee/development/feature_flags/)
for use of feature flags. It applies to all flag types besides the [`ops` type](https://docs.gitlab.com/ee/development/feature_flags/#ops-type).

Changes to Import and Integrate features often happen in high-traffic code paths and have
led to outages on GitLab.com in the past. Outages are often to do with resource contention that can
be difficult to see ahead of time in code review or in QA testing.

- Large imports can trigger thousands of workers.
- Integrations and webhooks are executed millions of times a day.
- Contention problems sometimes do not surface immediately, and only when large customers trigger the new code path.

For this reason we should prefer to keep feature flags in the codebase for a longer period of time than normal.
During this time the flag is enabled by default but can still be disabled quickly in the event of an incident.

In the past, we were able to quickly mitigate several incidents by disabling the feature:

- [2023-09-21: Group import allows impersonation of users in CI pipelines](https://gitlab.com/gitlab-sirt/shared-incidents/incident_4304/-/issues/1)
- [2023-10-30: GitLab.com is down](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17054)
- [2024-01-30: Sidekiq Apdex SLO](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17504)

For changes within importers, integrations or webhooks we should prefer to:

1. Roll out the flag with `/chatops` as normal.
1. QA the changes using large data to proactively flush out any problems at scale.
   For importers, see [our runbook](https://gitlab.com/gitlab-org/manage/import-and-integrate/team/-/blob/main/importers/runbook.md)
   for tips.
1. When you come to release the feature, change the feature flag to be `default_enabled: true`
   rather than to remove it. This is the
   [optional release the feature with the flag](https://gitlab.com/gitlab-org/gitlab/-/blob/e730c474ed80143ebae33df90900b342020ad7c0/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md?plain=1#L83)
   step on the flag rollout issue.
1. At this point the feature is considered released within the milestone, and can be
   announced in the release post as it will ship to self-managed customers.
1. **Wait between 1-3 weeks** where the flag exists in the codebase but remains enabled by default.
   Use the longer period for changes in areas of more contention, or if you feel it may take
   longer to detect problems for any reason.
1. After that period, remove the feature flag to complete the flag rollout process.

### During a release

- When an issue is introduced into a release after Kickoff, an equal amount of weight must be removed to account for the unplanned work.
- Development should not begin on an issue before it's been estimated and given a weight.
- By the 15th, engineering merge requests should be merged. In other words, we assume code merged after the 15th will not be in the release. That allows time for the release to be finalized, and any associated [release posts](/handbook/marketing/blog/release-posts/) to be merged by the 17th. (This is an [experiment starting with 13.11](https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17330).)

### Release posts

For issues which need to be announced in more detail, a release post can be automatically created using the issue.
When working on an issue, either in planning, or during design and development, you can use the
[release post item generator](/handbook/marketing/blog/release-posts/#release-post-item-generator)
to have the release post created and notify all the relevant people.

If you do not want an issue to have a release post, make sure that the issue does not have a
release notes section or do not use a `release post item::` label.

### Proof-of-concept MRs

We strongly believe in [Iteration](/handbook/values/#iteration) and delivering value in small increments. Iteration can be hard, especially when you lack product context or are working on a particularly risky/complex part of the codebase. If you are struggling to estimate an issue or determine whether it is feasible, it may be appropriate to first create a proof-of-concept MR. The goal of a proof-of-concept MR is to remove any major assumptions during planning and provide early feedback, therefore reducing risk from any future implementation.

- Create an MR, prefixed with `PoC:`.
- Explain what problem the PoC MR is trying to solve for in the MR description.
- Timebox it. Can you determine feasibility or a plan in less than 2-3 days?
- Identify a reviewer to provide feedback at the end of this period.
- Close the MR. Provide a summary in the original issue on what you learned from the PoC, including product and performance implications.
  - State whether you are able to move forwards with implementation or not.
  - Please do not close the issue.

The need for a proof-of-concept MR may signal that parts of our codebase or product have become overly complex. It's always worth discussing the MR as part of the retrospective so we can discuss how to avoid this step in the future.

### Retrospectives

We have 1 regularly scheduled "Per Milestone" retrospective, and can have ad-hoc "Per Project" retrospectives.

#### Per Milestone

The Import and Integrate group conducts [milestone retrospectives in GitLab issues](https://gitlab.com/gl-retrospectives/manage-stage/import-and-integrate/-/issues). These include the engineers, UX, PM, and
all stable counterparts who have worked with that team during the milestone.

Participation by our team members is highly encouraged for every milestone.

These are confidential during the initial discussion, then made public in time
for each month's [GitLab retrospective](/handbook/engineering/workflow/#retrospective). For more information, see [group retrospectives](/handbook/engineering/management/group-retrospectives/).

#### Per Project

If a particular issue, feature, or other sort of project turns into a
particularly useful learning experience, we may hold a synchronous or
asynchronous retrospective to learn from it. If you feel like something you're
working on deserves a retrospective:

1. [Create an issue](https://gitlab.com/gitlab-org/manage/import-and-integrate/discussions/-/issues) explaining why you want to have a retrospective and indicate whether this should be synchronous or asynchronous.
1. Include your EM and anyone else who should be involved (PM, counterparts, etc).
1. Coordinate a synchronous meeting if applicable.

All feedback from the retrospective should ultimately end up in the issue for reference purposes.

### Tech Leads

Our group works with tech leads to help organize work on different topics and identify DRIs for them.

#### Characteristics of a Tech Lead

A tech lead is:

- an individual contributor with additional responsibilities. Every engineer regardless of their seniority is qualified to be a tech lead.
- a temporary role that is tied to a specific topic/project. We allow the team to have multiple tech leads at the same time for different topics/projects.
- **not** a manager.
- **not** an additional seniority level.

The Tech Lead role provides growth opportunity for engineers who are interested in adopting leadership skills.

#### Responsibilities of a Tech Lead

Tech leads wear many hats. Their responsibilities may differ from project to project but may include:

- Technical Vision and Architecture - Defining and evolving the overall technical architecture for a given project
- Technical Guidance - Providing technical guidance and mentoring to other developers on the team
- Planning and Prioritizing Work - Organizing the work by breaking down bigger tasks into smaller actionable items
- Tracking Progress -  Tracking progress on commitments and reporting status updates
- Risk Management - Identifying, assessing and managing technical risks that may impact deliverables
- Coordination - Overseeing the work of others and helping remove blockers
- Technical documentation - Maintaining documentation of the technical architecture and code structure for other developers

#### Current Tech Leads

Below is an overview of topics that are overseen by a tech lead:

| Topic | Tech Lead | Topic Link | Notes |
| ------ | ------ | ------ | ------ |
| Direct Transfer - User contribution mapping | Rodrigo Tomonari | [Epic](https://gitlab.com/groups/gitlab-org/-/epics/12378) | - |
| Improve the efficiency of developer contributions to the importers | James Nutt | [OKR](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6658) | - |
| Congregate | tbd | https://gitlab.com/gitlab-org/gitlab/-/issues/428657 | |
| GitHub Actions | tbd | https://gitlab.com/gitlab-org/manage/general-discussion/-/issues/17652 | |
|  | | |  |

## Merge request roulette reviews

When areas of the Import and Integrate codebase are changed, the [reviewer roulette](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)
will recommend that the merge request is reviewed by an Import and Integrate team member. This will only happen when the merge request is
authored by people outside of the Import and Integrate team. See [this example](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/74338#note_731247058) of how the review recommendation looks.

The [reasoning](https://gitlab.com/gitlab-org/gitlab/-/issues/343486) behind these special recommendations
is that other groups have some ownership of certain integrations or webhooks. Reviewing
changes made by non-team members allows us to act as owners of foundational code and maintain
a better quality of the Import and Integrate codebase.

### How roulette matches work

File paths of changes in a merge request are matched against a
[list of regular expressions](https://gitlab.com/gitlab-org/gitlab/-/blob/240d4c37c955878c224718e47f4d527bea250299/tooling/danger/project_helper.rb#L42-62).
The roulette uses these hash values to recommend reviewer groups. For example, `:import_integrate_be` and
`:import_and_integrate_fe` will recommend Import and Integrate backend and frontend reviews respectively. As the regex matches
are [first match wins](https://gitlab.com/gitlab-org/gitlab/-/blob/54e182410219d1c77c5c6b2b7c88a6639f622cc6/tooling/danger/project_helper.rb#L18)
and not cumulative, any other relevant reviewer groups like `:backend` or `:frontend` must also be included
in each hash value.

The regex list should be updated to match integrations or webhooks code whenever needed. The list matches our
commonly namespaced files, so new code in existing namespaces will always match.

To see which files in the GitLab repository produce a match, paste the following in a Rails console:

```ruby
require Rails.root.join('tooling/danger/project_helper.rb')

ALL_FILES = Dir.glob('**/*');

def category_regexs(category)
  matching_categories = Tooling::Danger::ProjectHelper::CATEGORIES.select do |regexs, categories|
    next if regexs.is_a?(Array)

    Array.wrap(categories).include?(category)
  end

  regexes = matching_categories.map(&:first)
  Regexp.union(*regexes)
end

def print_files(category)
  regex = category_regexs(category)

  puts ALL_FILES.grep(regex).reject { |path| File.directory?(path) }.sort
end

puts "Backend:\n"
print_files(:import_integrate_be)

puts "Frontend:\n"
print_files(:import_integrate_fe)
```

## Monitoring

This is a collection of links for monitoring our features.

### Grafana dashboards

- [Import and Integrate group dashboard](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1) which contain:
  - Links to various Kibana logs, filtered to our feature categories
  - Our [error budget](#error-budgets) spend attribution
- [Worker queues](https://dashboards.gitlab.net/d/sidekiq-queue-detail/sidekiq-queue-detail?orgId=1&var-PROMETHEUS_DS=Global&var-environment=gprd&var-stage=main&var-queue=jira_connect:jira_connect_sync_branch) where you can switch queues with the `queue` dropdown

### Sentry errors

- [Matching "IntegrationsController"](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+IntegrationsController&referrer=issue-list&statsPeriod=14d)
- [Matching "Integrations"](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Integrations&referrer=issue-list&statsPeriod=14d)
- [Matching "Jira"](https://new-sentry.gitlab.net/organizations/gitlab/issues/?project=3&query=is%3Aunresolved+Jira&referrer=issue-list&statsPeriod=14d)

### Kibana dashboards

See a [list of all Import and Integrate Kibana dashboards](https://log.gprd.gitlab.net/app/dashboards#/list?s=tag:(group::import)&sort=title&sortdir=asc).

Importer dashboards:

- [Project Import/Export](https://log.gprd.gitlab.net/app/dashboards#/view/03a11c50-ba46-11ec-b73f-692cc1ae8214)
- [GitHub Import - Overview](https://log.gprd.gitlab.net/app/dashboards#/view/62965d10-9c0e-11ed-9f43-e3784d7fe3ca)
- [GitHub Import - Project import debug](https://log.gprd.gitlab.net/app/dashboards#/view/be0fb6d0-9c24-11ed-85ed-e7557b0a598c)
- [GitLab Direct Transfer](https://log.gprd.gitlab.net/app/dashboards#/view/f2640580-a8bd-11ed-85ed-e7557b0a598c)
- [User contributions mapping](https://log.gprd.gitlab.net/app/dashboards#/view/f9c66d73-50a1-43e2-89ab-56b71645df33)

API/Webhooks dashboards:

- [REST and GraphQL API](https://log.gprd.gitlab.net/app/dashboards#/view/ee792100-cfc7-11ec-afaf-2bca15dfbf33)
- [Webhooks](https://log.gprd.gitlab.net/app/dashboards#/view/deec2320-3914-11ed-b86b-d963a1a6788e)

### Kibana logs

GitLab for Jira Cloud app workers:

- [`JiraConnect::SyncMergeRequestWorker`](https://log.gprd.gitlab.net/goto/309f97d4a5c3e918e2c07754fefc94ee) errors.
- [`JiraConnect::SyncBranchWorker`](https://log.gprd.gitlab.net/goto/96364e957898896c4dc7e9ee5534b6de) errors.
- [`JiraConnect::SyncProjectWorker`](https://log.gprd.gitlab.net/goto/5f0e03847ddc1b074d6346199c8bc4d2) errors.
- [All JiraConnect sync worker](https://log.gprd.gitlab.net/goto/39348f2d169e6929c41dba2d6fb063ee) timeout errors.

### Error budgets

GitLab uses [error budgets](/handbook/engineering/error-budgets/) to measure the availability and performance of our features.
Each engineering group has its own budget spend. The current 28-day spend for the Import and Integrate team
shows in this [Grafana dashboard](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1).

Error budget spend happens when either of the following exceeds a certain threshold:

- Error rate of an endpoint or worker
- Apdex (latency) of an endpoint

#### Determine the highest-impact fixes

To determine the highest-priority problems in our [Grafana dashboard](https://dashboards.gitlab.net/d/stage-groups-import_and_integrate/stage-groups-import-and-integrate-group-dashboard?orgId=1):

1. Go to the **Error budget** panel.
1. Expand **Budget spend attribution**. The **Budget failures** panel is ordered by top failures.
1. In **Failure log links**, click the corresponding links.

Fixing the top offenders will have the biggest impact on the budget spend.

#### Further resources

Learn more about error budgets with these resources:

- [Error budgets and how they are calculated](/handbook/engineering/error-budgets/)
- [What Apdex is and how it works](https://docs.gitlab.com/ee/development/application_slis/rails_request.html)
- [Error budget in Grafana dashboards](https://docs.gitlab.com/ee/development/stage_group_observability/index.html#error-budget)
- [Feature categorization](https://docs.gitlab.com/ee/development/feature_categorization/): our code is attributed to us by `feature_category: :api`, `feature_category: :integrations`, `feature_category: :internationalization`, `feature_category: :importers`, and `feature_category: :webhooks`

## Links and resources {#links}

{{% include "includes/engineering/foundations/shared-links.md" %}}

- [Milestone retrospectives](https://gitlab.com/gl-retrospectives/manage-stage/import-and-integrate/-/issues)
- Our Slack channels
  - Manage:Import and Integrate [#g_manage_import_and_integrate](https://gitlab.slack.com/archives/C04RDL3MEH5)
  - Daily standups [#g_manage_import_and_integrate_daily](https://gitlab.slack.com/archives/C04UYQV7716)
- Issue boards
  - [Current milestone board](https://gitlab.com/groups/gitlab-org/-/boards/1459244?milestone_title=Upcoming&label_name[]=group%3A%3Aimport%20and%20integrate)
- Contribution guides
  - [Principles of importer design](https://docs.gitlab.com/ee/development/import/principles_of_importer_design/)
  - [Contributing to Direct Transfer](https://docs.gitlab.com/ee/development/bulk_imports/contributing/)
    - [Feedback issue](https://gitlab.com/gitlab-org/gitlab/-/issues/456468)
- Onboarding videos (GitLab Unfiltered Youtube)
  - [Direct Transfer](https://www.youtube.com/watch?v=vVQ6Ex9fSl8) (formerly known as GitLab Migration)
  - [Introduction to GitHub Importer](https://www.youtube.com/watch?v=TxHopzXop5s)
  - [File based GitLab Import/Export](https://www.youtube.com/watch?v=A4kdpnbhmcw)
  - [Remote S3 Import Example](https://www.youtube.com/watch?v=I85SXNmiS_k)
