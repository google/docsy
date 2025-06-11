---
title: Plan:Knowledge Engineering Team
---

## Plan:Knowledge team

The Plan:Knowledge team develops [Knowledge Management categories](/handbook/product/categories/#knowledge-group):

- Wiki
- GitLab Pages
- Text Editors
- Markdown

Learn more on our [direction page](https://about.gitlab.com/direction/plan/knowledge/).

### Team members

{{< team-by-manager-role role="Engineering Manager(.*)Plan:Knowledge" >}}

### Stable counterparts

{{% stable-counterparts manager-role="Engineering Manager(.*)Plan:Knowledge" role="(.*)Plan:Knowledge$|Product Manager(.*)Plan Stage|Security(.*)Plan|Engineering(.*)Plan$|Principal(.*)Plan$|Group(.*)Plan" %}}

### Hiring chart

Check out our [jobs page](https://about.gitlab.com/jobs/) for current openings.

## How we work

### Picking something to work on

The [build board](https://gitlab.com/groups/gitlab-org/-/boards/5454834) shows
upcoming release work. The ~"workflow::ready for development" column is ordered by priority.

Engineering Manager adds the following labels at the start of the milestone:

| Label | Meaning |
| ---   | ---     |
| `~Deliverable` | We have committed to customers that we will deliver this item in the current milestone. |
| `~Stretch` | We have not committed to deliver the item but will attempt to make progress on it |

It's OK not to take the top item if you are not confident you can solve it, but please post in `#g_knowledge`.

### Capacity

#### Estimating effort

When estimating the effort involved in upcoming work, we use the same approach and numerical scale as other groups in the Plan stage.

{{% include "includes/engineering/plan/estimating-effort.md" %}}

Typically, 3-month rolling average is a good indicator of the team's capacity. Knowledge is a new team and determining capacity will be difficult at the beginning without clear historical data.

The PM and EM will work to fit ~Deliverable issues into no more than 75% of the team's capacity and allocate the rest to ~Stretch issues.

#### Refinement

Engineering manager reviews `~"workflow::refinement"` issues on every team meeting.
Issues with the [highest priority](#priority-labels) are assigned to individual engineers,
who are responsible for moving issue to `~workflow::ready for development`.

Engineers can put the following template into the issue description:

```markdown
### Implementation plan

<!--
Ready for development means replying yes to the following questions:

- Is this issue sufficiently small enough? If not, break it into smaller issues
- Is it assigned to the correct domain (e.g. frontend, backend)? If not, break it into two issues for the respective domains
– Is the issue clear and easy to understand? If not, try asking further clarification questions and update the description once they are received

If more than 2 MRs are needed, consider adding a table like the following to the description (e.g. under `Implementation plan`).
-->

| Description | MR |
|-|-|
| MR 1 | |
| MR 2 | |
| Documentation | |

**Reasoning:**

<!--
Add some initial thoughts on how you might break down this issue. A bulleted list is fine.

This will likely require the code changes similar to the following:

- replace the hex driver with a sonic screwdriver
- rewrite backups to magnetic tape
- send up semaphore flags to warn others

Links to previous examples. Discussions on prior art. Notice examples of the simplicity/complexity in the proposed designs.
-->

/label ~"workflow::ready for development"

/label ~"frontend-weight::X"

/label ~"backend-weight::X"

/weight X
```

#### Weighing bugs

{{% include "includes/engineering/plan/weighing-bugs.md" %}}

### Refinement

#### Board-Walk (weekly)

Team-members meet to walk the [Build Board](https://gitlab.com/groups/gitlab-org/-/boards/5454834) once a week. 25 minutes are allocated for this sync call but it may be completed much more quickly than that. The EM is DRI and attendance is optional except for PM. It is recorded and shared in the [#g_knowledge Slack channel](https://app.slack.com/client/T02592416/C04R571QF5E). The recording will be made public only if no security or other confidential issues are discussed. The [agenda](https://docs.google.com/document/d/1SZrFiipmH5GX5CYL-nOuc8NNqSs-AXCvHOzajwy06vk/edit?usp=sharing) is available internally and all team-members are encouraged to contribute updates and questions.

The purpose of this meeting is to:

- Update on the status of work in progress
- Identify blockers and risk
- Reprioritize
- Ask for help

DRIs should keep issues up to date with [workflow labels](/handbook/engineering/development/dev/plan/knowledge/#use-of-labels) and [health status](/handbook/engineering/development/dev/plan/#keeping-health-status-accurate) on an ongoing basis rather than waiting for this meeting.

#### Planning Meeting (monthly)

A planning meeting is held once per month, prior to the start of the milestone. The Product Manager is the DRI for scheduling it.

Attendance is optional for engineers but participation is not. The meeting will have an agenda and will be recorded. It may involve any or all of the following:

- Setting priorities and expectations.
- Estimating tasks.
- Breaking down and collaborating on scope.
- Clarifying requirements.
- Estimating capacity and carry-over.

As much as possible these tasks should be completed asynchronously, reducing the work required in the meeting. The purpose of the meeting is to start the upcoming milestone in the best possible shape for success.

#### Refinement sessions (ad-hoc)

Team-members are encouraged to propose refinement sync meetings for large issues and/or new features.
The goal is to explore concerns and unknowns while sharing knowledge and gathering different perspectives on the problem.

A refinement meeting might have an agenda with topics like:

- Product requirements
- Technical challenges
- Technical alternatives
- How to iterate on the solution proposed

As an outcome, the meeting could produce a list of issues, with an estimated milestone, to iterate over.

#### Asynchronous-first

Most planning is done asynchronously. Some tools and processes are observed to make this more efficient.

Since issues can only have one milestone attached, the `~"Next Up"` label is used to mark items for the upcoming milestone, regardless of whether they already have a milestone or not. PM and EM should remove this label from any issues prior to the start of planning, then add it to prospective issues and any expected to slip the current milestone during the planning process.

Using this label, it's possible to easily analyze the upcoming milestone. The [Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/7109724) mimics the Build Board but is scoped to this label instead of the current milestone. Use it to:

- View the current workflow state of all proposed issues.
- Plan capacity by totalling weight values for each list.
- Understand blocking relationships that may be resolvable before the milestone starts.

When the new milestone starts, the milestone can be added all issues with the `~"Next Up"` label in a bulk action, and the label itself removed.

### Workflow

#### Use of Labels

Proper labelling of issues helps with the classification, traceability and quantification of work the team can and is doing. Some labels
are essential. The table below describes these and gives the reason why.

| Label | Use | Handbook Guidance | DRI |
|---    | --- | ---               | --- |
| ~workflow::* | Communicates the current workflow state of an issue. Important for understanding progress & quantifying risk during the course of a milestone. | [Updating Issues Throughout Development](/handbook/engineering/workflow/#updating-issues-throughout-development) | Engineer |
| ~type::* | Communicates the type of work being done. Used to quantify and report the split of work to roles inside and outside GitLab. | [Work Type Classification](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) | |
| ~Deliverable/~Stretch | ~Deliverable communicates to customers and stakeholders that we intend to deliver an issue within the assigned milestone. ~Stretch indicates that it might be started during the milestone but is not expected to complete. | [Release Scoping Labels](https://docs.gitlab.com/ee/development/labels/#release-scoping-labels) | Engineering Manager |

#### Async update

We aim to  make the status of each epic and issue clear and easily accessible for our teammates, counterparts and users.

The primary source of truth for this information is the `~workflow::*` label and the health status.

But when the issue spends more than in a week in the `~"workflow::in dev"`, `~"workflow::in review"` or `~"workflow::verification"`
DRI also leaves an async update on the it using the
["Knowledge - async update" comment template](https://gitlab.com/groups/gitlab-org/-/comment_templates/1000436).

To keep the track of what issues may need an async update, you can use the following GLQL query:

````markdown
```glql
---
display: list
fields: title, labels("workflow::*"), healthStatus
---
group = "gitlab-org" and assignee = currentUser() and label in ("workflow::in dev", "workflow::in review", "workflow::verification") and opened = true
```
````

### Priority labels

We use `~Knowledge::P1/P2/P3` labels to indicate issue priority within the `~workflow::*` steps and milestones.

- Product Manager is the DRI for these labels, but everybody on the team can assign/adjust them.
- Before the milestone starts, the PM and EM will review the priorities for all issues included in that milestone. It's expected that:
      - 40% of issues have `~Knowledge::P1`
      - 30% of issues have `~Knowledge::P2`
      - 30% of issues have `~Knowledge::P3`, and those issues can't be `~Deliverable`'s
- We also use these labels outside of milestones to keep track of our highest priorities.
- If anyone on the team wants an issue to be scheduled, they should add the appropriate priority label.
- We don't have a dedicated `P4` label, not having `~Knowledge::P*` label is equivalent to `~Knowledge::P4`.
- When issues are moved to another `~workflow::*` stage, it's likely that the priority will be changed.
- `~Knowledge::P*` labels are completely different from `~priority::*` labels that are used only for bugs.

### Collaboration with other teams

To avoid rework we reach out to other teams early when working on the following domains:

| Team | Domain overlap |
| ---  | ---    |
| [Pipeline Authoring](/handbook/engineering/development/ops/verify/pipeline-authoring/) | GitLab Pages [.gitlab-ci.yml syntax](https://docs.gitlab.com/ee/ci/yaml/) |

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="knowledge" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="knowledge" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="knowledge" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="knowledge" >}}
{{< /tableau >}}

Detailed metrics are available on the [Engineering Metrics page](/handbook/product/groups/product-analysis/engineering/dashboards/).

### Application Performance

Additional dashboards are available in Grafana that show application performance of parts of the application for which the team is responsible.

- [Stage-Group Dashboard](https://dashboards.gitlab.net/d/stage-groups-knowledge/stage-groups-knowledge-group-dashboard?orgId=1) (including 28-day Error Budget)
- [Error Budget Detail](https://dashboards.gitlab.net/d/stage-groups-detail-knowledge/stage-groups-knowledge-group-error-budget-detail?orgId=1)

## Useful links

- [Plan:Knowledge](https://gitlab.com/groups/gitlab-org/-/boards/1569369?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Aknowledge) - Apply a milestone filter to see work in the current release
- [#s_plan](https://gitlab.slack.com/archives/s_plan) in Slack
- [Recorded meetings](https://www.youtube.com/playlist?list=PL05JrBw4t0KouWOCpPdlVZmwr3QCqhQ94)
- [Retrospectives](https://gitlab.com/gl-retrospectives/plan/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=retrospective)
- [Group Conversations](https://gitlab-org.gitlab.io/group-conversations/plan/) (archive; group conversations now happen at a the
  [section level](/handbook/company/structure/#organizational-structure))
