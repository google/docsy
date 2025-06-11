---
title: Secret Detection Group
description: "The Secret Detection group protects you against leaking credentials, tokens, or other secrets on GitLab."
layout: single
---

## Secret Detection

The Secret Detection group maintains the [Secret Detection](https://about.gitlab.com/direction/application_security_testing/secret-detection/secret-detection/) feature category for customer software repositories.

### Common Links

* Main Slack channel: [`#g_ast-secret-detection`](https://gitlab.enterprise.slack.com/archives/C06NY8LDMT2)
* Stand-up updates: [`#g_ast-secret-detection-standup`](https://gitlab.enterprise.slack.com/archives/C06PZ8QJQNA)
* Slack aliases: `@g_ast_secret_detection`

#### Secret Detection Shared Calendar

The [Secret Detection Shared Calendar](https://calendar.google.com/calendar/embed?src=c_b4fda90478cfc15d4ec5fa18952c0c976d3078df887cc3548f8d6592d22de032%40group.calendar.google.com) is used to make sure PTO events are visible to everyone on the team.

Below are the steps to add the calendar to Time Off by Deel:

* In Slack, jump to **Time Off by Deel** > **Home**, click on the dropdown **Your Events**, and select **Calendar Sync**.
* Under **Additional calendars to include?**, click on **Add calendar**.
* Add the following calendar ID: `c_b4fda90478cfc15d4ec5fa18952c0c976d3078df887cc3548f8d6592d22de032@group.calendar.google.com`.
* Great job! 🎉 Your PTO events will be synced to Static Anaylsis Shared Calendar from now on. 🚀

### Our Team

{{< team-by-manager-role role="Engineering(.)Manager(.)Secure:Secret Detection" team="Engineer" >}}

## How We Work

The Secret Detection group is largely aligned with GitLab's [Product Development Flow](/handbook/product-development-flow/), however there are some notable differences in
how we seek to deliver software. The engineering team predominantly concerns itself with the delivery of software, which is the portion of the workflow states where
we deviate the most. What follows is how we manage the handoff from product management to engineering to deliver software.

Issues worked by this team can span analyzers, vendored templates, and GitLab's Rails monolith.

### Issue Boards

* [Secret Detection Delivery Board](https://gitlab.com/groups/gitlab-org/-/boards/7430307?milestone_title=Started&label_name[]=group%3A%3Asecret%20detection) - Primary board for engineers, columns are workflow labels.
* [Secret Detection Planning Board](https://gitlab.com/groups/gitlab-org/-/boards/7708245?label_name%5B%5D=group%3A%3Asecret%20detection) - Milestone-centric board primarily used by product management to gauge work in current and upcoming milestones.
* [Secret Detection EM Board](https://gitlab.com/groups/gitlab-org/-/boards/77082627) - Engineer-centric board used by engineering management to gauge how heavy a load engineer is carrying.
* [Secret Detection Bug Scrub Board](https://gitlab.com/groups/gitlab-org/-/boards/7708271?label_name%5B%5D=group%3A%3Asecret%20detection&label_name%5B%5D=type%3A%3Abug)- Bug board, columns are severity.

#### Issue and Merge Requests labels

GitLab has a labeling convention for issues and Merge Requests. We follow this convention, though there are specific labels required to route artifacts to us. We
use these labels to filter issues meant for us on our issue boards. They are also used for metrics and KPI reporting.

| Label | Meaning |
| ----- | ------- |
| ~section::sec | Identifies the issue or MR as belonging to the Sec Section's roadmap. |
| ~devops::application security testing | Identifies the issue or MR as belonging to the Secure Stage's roadmap. |
| ~group::secret detection | Identifies the Secret Detection group as the collection of individuals who will work on the issue or MR. |
| ~Category:Secret Detection | Identifies the issue or MR as being part of the Secret Detection feature category. |
| ~backend | Identifies the issue or MR as being part of GitLab's backend. |
| ~frontend | Identifies the issue or MR as being part of GitLab's frontend. |

#### Refinement

We have recently experimented with a [new refinement process](/handbook/engineering/development/sec/secure/planning/#refinement) when refining the issues for the [Secret Push Protection Beta epic](https://gitlab.com/groups/gitlab-org/-/epics/12729). This process draws a lot of inspiration from other sections/stages but also aligns with the current [Secure Engineering Refinement](/handbook/engineering/development/sec/secure/planning).

Following a set of [discussions and feedback](https://gitlab.com/gitlab-org/secure/general/-/issues/306) of said process, we have decided to make the improved refinement process a part of our software delivery workflow.

The goal of the process is to:

* Clarify any outstanding questions or concerns.
* Add a proposal or an implementation plan.
* Determine if the issue is the smallest iteration possible, and break it down if not.
* Determine if the issue requires support from other teams.
* Assign a weight to the issue.
* Ensure the issue is labeled correctly.
* Ensure issue is marked as ready to be worked on.

##### Workflow

The refinement process doesn't concern itself with how issues are picked up to be refined. This is assumed to be done in an earlier process that triages issues from the backlog (whether via the [MoSCoW process](/handbook/engineering/development/sec/secure/static-analysis/#moscow-process) or a similar variant). Normally, before issues are refined, a planning issue is created to select which issues are picked up in an upcoming milestone to be refined and delivered. This could possibly be done in the Looking Forward section of the planning issue.

This workflow can summarized as follows:

1. Triaging: issues from backlog are triaged to determine the must/should/would/could-haves.
2. Planning/Prioritization: issues are selected for a specific milestone.
3. Refinement: issues are refined and prepared to be picked up.

##### Steps

Below is a list of steps followed during the refinement process.

* The refinement process is kicked off when a planning issue is finalized.
* A bot or an automated script assigns a number of issues (e.g. 2-3) randomly to each engineer.
* An engineer is responsible for refining their assigned issues, but could ask for help if needed.
* Engineers would follow a certain [checklist](#checklist) to determine if an issue is refined and ready to be picked up.
* The refinement process is time-boxed (e.g. one week), after which all issues ready for development is picked up.
* When an engineer completes refining an issue, they pass it on to another engineer (a reviewer) for review.
* The reviewer should follow the guidelines outlined in the checklist as much as possible:
  * If the reviewer agrees with the engineer, the issue is marked as ready for development.
  * If they are in disagreement, they should discuss the reason and find a way forward.
  * If a disagreement cannot be resolved, the issue is brought to next team meeting for discussion.
* Pending issues can continue to be refined, and depending on their status they may or may not be included in the milestone.

##### Checklist

The following checklist is to be copied either in the issue description or posted as a comment in the issue being refined. This is used to clarify the refinement and refinement review progress for all interested stakeholders.

```markdown
**Please copy the list below into the issue you are refining, and check them as you deem appropriate.**

#### Refinement Progress

If a checkbox is not relevant for the issue, please remove or strikethrough it.

- [ ] This issue describes a problem to solve, or a task to complete, and it's confirmed.
- [ ] This issue describes a proposal or an implementation plan that outlines a way to solve the problem or complete the task.
- [ ] This issue requires assistance or support from other groups, and it's indicated in the issue description.
- [ ] This issue could affect application security or performance, and the concern is explained in the issue description.
- [ ] This issue is the smallest iteration possible and doesn't require further break down.
- [ ] This issue has weight set - according to [this list of possible values](/handbook/engineering/development/sec/secure/workflow/#possible-values) - and ~"needs weight" label is removed.
- [ ] This issue has a success criteria defined, and it is outlined in the issue description.
- [ ] This issue is labeled correctly.
- [ ] This issue is reviewed by another team member to confirm proposal/implementation plan and weight.
- [ ] Finally, add ~"workflow::ready for development" label to this issue and unassign yourself.

#### Refinment Review Guidelines

If you're assigned this issue to review its refinement, please follow the guidelines below.

1. Please validate the proposal or the implementation plan described in the issue.
1. Please validate the weight of the issue according to [this list of possible values](/handbook/engineering/development/sec/secure/workflow/#possible-values).
1. If in disagreement, please state your thoughts/reasoning and notify the engineer refining this issue.
1. If the disagreement can't be resolved, please bring this issue to the next team meeting for discussion.

##### Issue Assignmet

Issues are assigned randomly to engineers using [`triage-ops`](https://gitlab.com/gitlab-org/quality/triage-ops) bot. The process works like follows:

1. Planning issue is created, and a number of issues are selected for the next milestone (marked with labels defined below).
1. Issues selected are labeled with:
    1. `~"group::secret detection"`
    1. `~"workflow::planning breakdown"`
1. A [scheduled policy](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/doc/scheduled/index.md) is triggered monthly before the upcoming milestone begins (on 2nd Thursday of a month, or exactly one week before the new milestone starts).
1. The scheduled operation runs and does the following:
    1. Pick up issues with the following conditions:
        1. State: `Opened`
        1. Labels:
            1. `~"group::secret detection"`
            1. `~"workflow::planning breakdown"`
        1. Weight:
            1. `None`.
        1. Milestone:
            1. Issue has a milestone.
            1. Issue's milestone title = [`next_milestone`](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/de25e11d0c006551eaece0dcb95c5b5bf8216b90/lib/milestone_helper.rb#L13-15).
    1. Actions:
        1. Assigns the issue to a random engineer from the Secure:Secret Detection group.
        1. Adds the following labels:
            1. `~"worfklow::refinement"`
            1. `~"needs weight"`
        1. Removes the following labels:
            1. `~"worfklow::planning breakdown"`
        1. Adds the comment below.

##### Comment

```markdown
Hi #{secret_detection_engineer}

As a preparation for the upcoming milestone #{milestone.succ}, you have been assigned this issue to refine.

The goal of the process is to:

- Clarify any outstanding questions or concerns.
- Add a proposal or an implementation plan.
- Determine if the issue is the smallest iteration possible, and break it down if not.
- Determine if the issue requires support from other teams.
- Assign a weight to the issue.
- Ensure the issue is labeled correctly.
- Ensure issue is marked as ready to be worked on.

Please check the [steps to follow](/handbook/engineering/development/sec/secure/secret-detection/#steps) and the [checklist](/handbook/engineering/development/sec/secure/secret-detection/#checklist) to use for keeping refinement progress transparent.

If you have any questions, don't hesitate to ask in `#g_secure_secret-detection` channel.

[Bot policy](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/policies/groups/gitlab-org/secret-detection/assign-refinement.yml).

/assign #{secret_detection_engineer}
```

### Unplanned work

In general, the Secret Detection group has two sources of unplanned work: community contributions and ~severity::1 bugs. We will reserve capacity each
release so we can respond quickly and efficiently. In both scenarios, we will route community contributions to the engineer who "owns" the analyzer.

We do, however, own and contribute to projects beyond the analyzers shipped as part of GitLab's product. Where possible, unplanned work requiring
the attention of an engineer in Secret Detection will be routed according to that project's `CODEOWNERS` file. Otherwise, unplanned work will be
considered and handled on a case-by-base basis.

#### Support to customers and prospects

While we plan our work on a monthly basis, customers and customer-facing team members may need support on an unplanned basis.
We aim to support these requests quickly because they affect the success of our customers and our business.

Generally, we aim to provide an initial response and triage the question/report as quickly as is reasonable.
"Reasonable" means, for example, that team members are answering during their normal working hours and are continuing their normal work activities.
Whoever is available and can contribute to a solution is encouraged to make first contact with the questioner and ask any clarifying questions—remember, you can always tag in another group member later if you're unable to resolve the question.

The aim of the triage is to support other team members in moving forward; if development work is required to address the problem, it is not automatically a top priority for the group and should not automatically displace existing planned work.
If there is any question of whether a bug fix or improvement should be taken up immediately, the Engineering Manager and Product Manager should be alerted to facilitate a decision.

### Observability

For GitLab.com, we monitor performance of our code within the Rails application, metrics around our CI build performance, and traffic to our container registries. These dashboards are accessible on the [Monitoring](/handbook/engineering/monitoring) page.

* [Secure::Secret Detection Group Error Budget](https://dashboards.gitlab.net/d/stage-groups-detail-secret_detection/)

#### Metrics

The process to add metrics to our projects is documented in our
[Metrics](metrics/) page.

#### Runbooks

The process for monitoring, responding to, and mitigating incidents is documented within our [Secret Detection Runbooks](runbooks/) page.
