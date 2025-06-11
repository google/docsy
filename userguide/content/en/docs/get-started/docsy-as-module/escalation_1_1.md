---
title: Handbook Escalation
---

For information on team members' roles and responsibilities, see [Content Websites page](maintenance.md).

## Introduction

The Handbook is a critical part of empowering team members to do their jobs effectively. As such, we have a group of team members who assist in resolving issues affecting all team members.

## Reporting an issue

If you're looking for general help, please see the [editing handbook page](editing-handbook/_index.md#need-help).

Any work stopping issues should be reported in the [#handbook-escalation](https://gitlab.slack.com/archives/CVDP3HG5V) channel in Slack.
Otherwise, consider creating an issue in the relevant [content sites repository](https://gitlab.com/gitlab-com/content-sites/) and posting in the [#handbook Slack channel](https://gitlab.enterprise.slack.com/archives/C81PT2ALD).

### When to escalate an issue

Issues should only be escalated if it relates to:

1. Default branch being broken
1. Broken infrastructure
1. Time sensitive updates to the handbook where there is an issue in making the update

## "Keep main green" group

If after posting in `#handbook-escalation`, you are not receiving a response, please ping the [issue triager](maintenance.md#team-structure) if it's within their working hours.

If they are not available, the following team members (in the table below) have volunteered to assist when available. Please take into consideration the listed timezone where they are generally located and their Slack status on whether they're out of office.

Additionally, any GitLab team member can volunteer to join the [#handbook-escalation](https://gitlab.slack.com/archives/CVDP3HG5V) channel and help out.

| Slack username | Usual timezone(s) |
| ----- | ----- |
| `@Arty-chan` | Pacific Time (UTC-8/-7) |
| `@mayra` | Central Time (UTC-6) |
| `@David Nelson` | Central Time (UTC-6/-5) |
| `@A.J. Romaniello` | Eastern Time (UTC-5/-4) |
| `@Max Woolf` | GMT (UTC+0/+1) |
| `@Filip` | Central European (UTC+1/+2) |
| `@Marcin SJ` | Central European (UTC+1/+2) |
| `@arpit` | India Time (UTC+5:30) |
| `@jaime` | Australia Eastern Time (UTC+10/+11) |

### Expectations for the group

1. Make sure you are in and do not mute the [#handbook-escalation](https://gitlab.slack.com/archives/CVDP3HG5V) channel.
1. When an issue is reported:
   1. Acknowledge the team member and let them know you are looking into it.
   1. You can check on `#production`, `#incident-management`, and `#is-this-known` to see if it's a known issue with infrastructure or other problems.
   1. Provide an update as soon as you are able to confirm their problem.
   1. You can also post updates in `#mr-buddies` and/or `#handbook` as appropriate.
   1. Offer to have a Zoom call to help replicate or resolve the issue if it is not straight forward.
   1. Resolve the problem, or provide feedback to the team member on how they can resolve it.
   1. If you do not believe you can resolve it and need further assistance, consider any or all of the following:
      1. Ping another member of the [Keep main green group](#keep-main-green-group).
      1. Ping the [handbook DRI](maintenance.md#team-structure), or a member of the code maintainer group.
      1. [Create a bug issue](https://gitlab.com/gitlab-com/content-sites/handbook/-/issues/new) with details.

### When to hand over to Reliability Engineering

Handbook escalation deals specifically with matters relating to the `content-sites` projects.
If a reported issue relates to the GitLab product or the infrastructure running the handbook, then it should be escalated to the Reliability Engineering team.
To report an incident follow the instructions on the Incident Management page: <https://handbook.gitlab.com/handbook/engineering/infrastructure/incident-management/#reporting-an-incident>

## Common Incidents and Tips

### Failing pipeline

Please see the [handbook editing page](editing-handbook/_index.md#failing-pipelines) for guidance and examples.

### Managing broken main alerts in #handbook-escalation

All broken CI pipelines for the `main` branch of the `handbook` repository are automatically posted in the Slack channel.
These reports should be investigated and addressed where needed.

Once a report has been looked at, please leave a comment stating the nature of the problem, action taken, and add a ✅ reaction to the message to show that it has been handled.

If for some reason there is a large amount of failures resulting in spamming the channel, the error reporting can be turned off in the repository settings: <https://gitlab.com/gitlab-com/content-sites/handbook/-/settings/integrations>

### Stuck Merge Train

To see the status of the merge train (useful when team members are reporting that their MRs seem 'stuck' on the train), see [this issue to check the status and perform a workaround, if necessary](https://gitlab.com/gitlab-org/gitlab/-/issues/217908#when-the-merge-train-in-the-www-gitlab-com-project-might-be-stuck).

TL;DR for workaround: If the first/oldest MR `iid` in [the FIFO list](https://gitlab.com/api/v4/projects/7764/merge_trains?scope=active&per_page=100&sort=asc) (`sort=asc` by ID) is actively running a pipeline and eventually gets merged, then things are moving along, just slowly.  If the first one in the list isn't currently running any pipeline, remove it from the train and re-add it (it should go to the end).

### Runbook for `about.gitlab.com`

While the handbook is no longer on `about.gitlab.com`, some of the information in the [runbook for about.gitlab.com incident handling](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/uncategorized/about-gitlab-com.md) may be helpful.
