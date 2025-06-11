---
aliases: /handbook/engineering/infrastructure/core-platform/systems/distribution/triage.html

title: "Distribution Team Triage"
description: "Overview and Summary of the Distribution Team's issue triage process"
---

## Common links

* [Engineering Team Triage](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/)

## Triaging Issues

### Terminologies

* Triaging: Triaging issues involves investigating and applying labels and milestones to issues.
* Partially Triaged issues: Issues are considered **partially** triaged if they have been assigned `for scheduling` or `awaiting feedback` labels.
* Fully Triaged issues: Issues are **fully** triaged when they have been assigned a Milestone, even if it is `Backlog`. They should have appropriate group, priority and product category labels applied.

Note: An issue that has been assigned to a user, but has no milestone, is not triaged, but is considered the responsibility of that user, and is not part of our triage queue at this time.

#### Issue severity

See the [CE documentation](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md#severity-labels) for an explanation of the severity labels.

#### Label glossary

| Label | What it means | How to handle it |
| - | - | - |
| awaiting feedback | Information has been requested from the user | If no reply has been received in two weeks, the issue can be closed. |
| maintainer-discussion | Issues for further discussion by project Maintainers | Projects maintainers should review status and provide input within 2 weeks. |
| needs investigation | Information has been provided by the user, but is waiting on the team to further dive in | The team member who added the label should try to find some time to investigate or engage other team members within 4 weeks. |

During triage, an appropriate `group::` label should be applied to the issue.

* `group::distribution::build` for [Distribution Build team responsibilities](index.html.md.erb#distribution-build)
* `group::distribution::deploy` for [Distribution Deploy team responsibilities](index.html.md.erb#distribution-deploy)
* `group::distribution` for [Distribution team shared responsibilities](index.html.md.erb#team-responsibility)
* The otherwise appropriate group to assign based on [GitLab Features by Group](/handbook/product/categories/features/)

During triage additional labels should be added to indicate what part of the product is impacted by the issue. Descriptions for the labels that Distribution often uses can be found the [Distribution Frequently Used Labels Page](https://gitlab.com/gitlab-org/distribution/team-tasks/-/blob/master/frequently-used-labels.md).

### Resources

Issues for triaging can be identified using the following criteria:

* They have no milestone
* They have no assignee
* They do **not** have any of the following labels applied:
  * `awaiting feedback`
  * `for scheduling`
  * `maintainer-discussion`
  * `needs investigation`

Such issues can be listed using the [issues filter](https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues?scope=all&utf8=%E2%9C%93&state=opened&assignee_id=None&milestone_title=None&not[label_name][]=For%20Scheduling&not[label_name][]=awaiting%20feedback&not[label_name][]=maintainer-discussion)

### Process

Distribution team implements issue triaging on a rotating schedule, where each
person in the team gets assigned to do it for one week. This is done in the
order of joining the company. The process which one follows while on issue
triage duty can be summarized as follows

1. The previous team member on triage duty should have created and assigned the
   weekly meta issue to you at the end of their week. The issue title should be
   `Issue triage rotation week of <starting date>`
1. We follow the policy of closing an issue if it has been 14 days since
   `awaiting feedback` label was added and no response was received from
   submitter. Check out the issue list with `awaiting feedback` label for such
   issues and close them with the ["for issues with no reply" response](#for-issues-with-no-reply).
1. Check out the issues to be triaged and assign [appropriate labels](#label-glossary) to them.
   While it is normal for some issues to demand a bit of research to get to the
   bottom, do keep in mind issue triaging need not end up in issue resolution.
   Triaging is intended only to identify and classify issues so that appropriate
   action can be taken on them, based on priority.
1. If an issue doesn't fall directly under the domain of the project it is logged in (for
   example, needs changes to gitlab-rails application, but was made in the omnibus-gitlab project), move the issue to the
   appropriate issue tracker and add the team label which may be the most
   appropriate. If you can't identify which project's tracker should the issue
   reside or which team's label should be applied, you can ask for Quality
   team's help for doing it by mentioning `@gitlab-org/issue-triage` in the
   comments.
1. If an issue doesn't deal with the code base or work flow of the project
  but is more of a request for help for
   installing/configuring/troubleshooting a GitLab instance, close the issue
   using the ["problems not related to package installation and configuration" response](#for-problems-not-related-to-the-gitlab-codebases).
1. If an issue doesn't have all necessary information to successfully triage the
   issue, request the information using the ["issues that lack enough information" response](#for-issues-that-lack-enough-information) and
   add the `awaiting feedback` label.
1. If an issue couldn't be triaged in reasonable time, add the `needs investigation`
   label to it.
1. Issues occasionally would be best inspected by a project maintainer. When
   this occurs, label them with `maintainer-discussion`. Example cases where
   maintainers should be notified with this label:
   1. An issue was accurate at the time of creation, but is questionable at this time.
   1. An issue was not accurate or in line with our vision at the time, but may be now.
   1. The viability of the issue is of interest, but may not be reasonable as proposed.
1. If an issue is identified as a valid one, make it partially triaged by
   assigning `For Scheduling` label so that it gets scheduled for one of the
   upcoming milestones (or even `Backlog` milestone). Also apply the severity
   labels as applicable.
1. If an issue is a valid issue, and there is a valid workaround. Close the issue with details on the
   workaround, and open a follow up issue to fix the bug. Ensure the issue includes:
   1. Details on how to recreate the bug
   1. How to workaround the issue
   1. What the expected behavior is
   1. The user issue as a related issue
   1. The appropriate priority and severity
1. Once an issue is triaged, either partially or fully, add the link to that
   issue as a comment to the meta issue. Preferably in the format of
   `<action> <url>` where `<action>` can be moved, closed, triaged, resolved or
   marked as needs investigation. This helps in keeping track of the issue
   triaged per week. Related issues feature of GitLab should not be used for
   this purpose as it generates an incorrect association between the issues.
1. Use the `/spend` quick action feature of GitLab to track the time you spent in
   triaging issues. There are no hard limits for this, but a reasonable amount
   of time would be 3 to 5 hours a week.
1. Since issues piling up is almost inevitable in any software project, we
   should try to bring down the issue count as much as possible. This mainly
   involves tackling existing backlog of untriaged issues.
1. During the next weekly meeting, inform the team about the triage week - link
   to the meta issue, number of issues triaged and time spent. And discuss if
   you think something should be changed regarding the process. Also, create a
   similar header for the next presenter as an agenda item for the next week's
   meeting in the meeting doc.

#### Response templates

Copy and paste into issues where appropriate

##### For problems not related to the GitLab codebases

If someone is asking for support in our projects, point them to the correct place to look

```text
We are sorry you are having troubles. The provided issue description seems to indicate that the problem is not related to this project. Commonly this indicates other troubles such as network connectivity or filesystem permissions.

For this reason, I will close this issue and recommend checking out [how to get further help](https://about.gitlab.com/get-help/) on the GitLab website.

/close
```

##### For problems related to GitLab code but not specifically Omnibus

If someone is asking for help with a bug that seems related to GitLab code other than Omnibus

```text
We are sorry you are having troubles. The provided issue description seems to indicate that the problem is not related to Omnibus.

For this reason, we are moving this report to a more appropriate issue queue.  Please review the bug templates for the new project in case they require additional information to help diagnose the problem.

We also recommend checking out [how to get further help](https://about.gitlab.com/get-help/) on the GitLab website.
```

##### For issues that lack enough information

If someone opened a ticket without enough information, make sure they use the `Bug` template, and fill it in

```text
We can't reproduce the issue with the information you provided here.

Can you please use our `Bug` template to help gather more details?

1. Click on the pencil icon near the issue title to edit the description
1. From the **Choose a template** drop down, select the **Bug** template
1. Read the template, and provide as much information as you can that we ask for
1. Click on the **Save changes** button to apply your changes.
1. Add a comment mentioning you updated the description.

/label ~"awaiting feedback"
```

##### For issues with no reply

If an issue has been labeled `awaiting feedback` for two weeks, and we haven't received a response, it can be closed

```text
We haven't heard back from you, so we're going to go ahead and close the issue.

If you're still experiencing the problem, please re-open the issue and provide the requested information.

/close
```

#### For issues closed with no reply with new comments from a different reporter

If an issue was closed for no reply and someone comments who is not the original reporter, we ask them to open a new issue. Be sure to tag the contributor who made the comment.

```text
Thank you for letting us know about your issue COMMENTOR. Unfortunately, this issue was already closed. Please [open a new issue](https://gitlab.com/gitlab-org/omnibus-gitlab/issues/new?issue) following the ***BUG*** template and mark this closed issue as related.
```

#### For issues where a maintainer should review the current viability

If an issue appears to need review directly by a project maintainer to ascertain relevance,

```text
I'm going to ask that this issue be reviewed by the project maintainers directly.
This is so that we can make the most accurate decision regarding further work and viability.
/label ~maintainer-discussion
```

### Onboarding to Triage

We start looking to onboard new Distribution team members to Triage duty after 3 months. This can be sooner if a team member feels they are familiar enough with the team processes to start working on triage.

To onboard to triage, a team member will shadow an experienced triage team member for a week. Expectations are:

* The mentor and shadow were made aware and agreed to mentoring prior to the triage week.
* The shadow reads the triage process document in advance.
* The mentor and shadow have a synchronous call earlier in the triage week for the mentor to go over how they approach triage.
* The shadow attempts to triage a few issues asynchronously during the week.
* A followup sync call is scheduled for later in the week for mentor and shadow to try triaging some issues together.

A shadow may need multiple weeks on shadow before they feel comfortable on a solo triage week.

## Triaging Pipelines

Pipeline failures are a shared team responsibility and need to be handled as soon as possible by whomever is available. That said, the team member on triage duty has a responsibility to follow up on any failures which occurred and provide a summarized tally in the Triage notes.

Note that we are in the process of automating issue creation for every time a critical pipeline fails. Some pipelines failures are notified in our `#g_distribution` Slack channel, but do not yet have issues automatically created for it. See [this epic](https://gitlab.com/groups/gitlab-org/distribution/-/epics/14) to track ongoing work.

### Recommended workflow for pipeline failure triage

1. Optionally, share on the Slack message any initial thoughts, or leave a comment indicating your action plan.
1. Check if an issue was automatically created for it. If not, please create one.
1. Link the issue in the inital Slack message so that everybody contributing to solve the problem can use the issue as a single source of truth.
1. Once you started investigating the issue, add the `pipeline failure::under investigation` label to it.
1. Comment on the issue with the following format: `@gitlab-bot retry_job <job-id>`. This will trigger [triage-ops bot](https://gitlab.com/gitlab-org/quality/triage-ops) to retry the given job without requiring you to have Maintainer permissions on the project.
1. Repeat the retry command as needed. If this causes the failed job(s) to pass, close the issue. If not, either fix the root cause manually and retry again, or create a new related issue to track the root cause.
1. If you managed to mitigate the problem and make the pipeline pass, but the issue could comeback in the future, then:
   * Write a comment explaining which actions did you take to mitigate it.
   * Check if there's an existing follow-up issue to investigate/implement a definitive fix for the problem, and link it to this pipeline issue failure. If such a follow-up issue does not yet exist, create one and link it.
   * If you had to restart a release which had already been stopped, after you fix the pipeline, manually stop the environment with `@gitlab-bot retry_job <job-id of stop-review-*>`. This is necessary because that job won't be automatically re-triggered, and dangling releases can cause ELBs quota exhaustion. See chart issue [#5326](https://gitlab.com/gitlab-org/charts/gitlab/-/issues/5326).
1. Failures requiring follow up issue(s) to fix pipelines that are still in a broken state should also be noted to increase team awareness. Those issues should be labeled with `Broken Pipeline`.
1. Failures caused by upstream failure should be labeled with [`Upstream bug`](https://gitlab.com/groups/gitlab-org/-/labels?search=upstream+bug) and linked with the related upstream issue.
1. Before closing the issue, don't forget to set the milestone and double check that you have added `pipeline failure::under investigation`. This is important for metric purposes.

Details on the various pipelines and jobs implemented by different projects
under Distribution are listed below:

1. [`omnibus-gitlab`](https://docs.gitlab.com/omnibus/development/pipelines.html)
