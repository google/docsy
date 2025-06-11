---
title: Slack
description: Information on Slack automations created by the People Engineering team.
---

## Integrations

For several smaller automations we use integrations with Slack. On this
page you can find an overview of all the integrations we've set up. Most
of these integrations use a Slack bot named `PeopleOps Bot`.

### Anniversary announcements

A scheduled pipeline is configured to automatically send a message
congratulating all team members celebrating a work anniversary that week to the
Slack channel [`#team-member-updates`](https://gitlab.slack.com/archives/CL55Q4U0K). The message will contain list of all such
team members and the number of years they are celebrating at GitLab.

Currently, the pipeline is scheduled to be run at 10:00 AM UTC on every
Thursday.

### Birthday announcements

Every monday morning, a scheduled pipeline is configured to automatically send a message
congratulating team members celebrating their birthday that week to the
[`#celebrations`](https://gitlab.slack.com/archives/C7RLMNSFJ) Slack channel. Only team members who have opted-into GitLab birthdays
on their Slack profile will be listed in the congratulatory message.

To opt-in, follow these steps on Slack

1. Click on your profile photo in the top right corner
1. Click on `Edit profile`
1. Scroll down to the `GitLab Birthdays` field and select `Yes`

### Informing People Connect Team about details missing in Workday for upcoming new hires

For the new hire announcements to be accurate, it is required to ensure the
Workday details of team members joining the following week is as complete as
possible. To help the People Connect team in this task, another scheduled pipeline is
run to verify if the Workday details of all incoming team members is complete.
This pipeline notifies the People Connect Specialists in [`#peopleops-alerts`](https://gitlab.slack.com/archives/CLTBQ9XC7) channel
about people whose details are missing and the details that are missing for each
person.

Since the People Connect Specialists should have enough time to fix these missing
details before new hire announcements are sent, it is necessary this job should
be run an adequate amount of time before the new hire announcements job is run.
Currently, the pipeline is scheduled to be run at 02:00 PM on every Wednesday.

### Employment survey

Whenever a team member fills in on of the following surveys, the form entrance
is put into a slack message to the private Slack channel `employment-survey`. This way the
People Connect team can discuss and take action.

- Onboarding Survey
- Values Check-In
- Career Mobility Value Check-In
- Career Mobility Satisfactory Survey

### GitLab Usernames

Often times, team members won't follow the procedure outlined on the [tools and tips page](/handbook/tools-and-tips#change-your-username-at-gitlabcom) to change their GitLab username. This leads to inaccurate or outdated data in Workday.
To remedy this situation, every Wednesday, we audit all GitLab usernames stored on Workday (`GitLab Username` field) and verify that those usernames are members of the [gitlab-com group](https://gitlab.com/groups/gitlab-com/-/group_members). When a Workday `GitLab Username` is not in the group, a message is automatically sent in `#peopleops-alerts` on Slack.

### Pops Commands

We have more documentation regarding available `/pops` commands in Slack in the [internal handbook here](https://internal.gitlab.com/handbook/people-group/people-operations/engineering/employment-automation/pops-commands/).

### Template Paths

People Connect associates can type `/pops run templatepaths <EMPLOYEE_NUMBER>` to output
the list of locations where the bot looks to fill-in role/specialty based access request
and onboarding tasks. This command is useful when it is unclear why an automated issue
creation did not pick up a given template. This will show exactly what path the bot expects.
