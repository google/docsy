---
title: People Connect bot
description: Information on Slack People Connect bot created by the People Engineering team.
---

We're using a custom Slack app, the [People Connect Bot](https://gitlab.com/gitlab-com/people-group/peopleops-eng/people-connect-bot/)
to setup the connection between Slack and GitLab Service Desk for the People Connect team.

Although the bot can technically be added to any channel, code-wise the bot is setup to only read the messages from:

- the public [`#people-connect`](https://gitlab.slack.com/archives/C02360SQQFR) channel
- the DM channel one start with the bot.

Every time someone adds a new message to this channel or in the DM, the bot will pick this up and create a new issue on the private GitLab People Connect project. This project is also set up to use Service Desk with a specific email.

When a PEA adds a note to an issue started by a Slack comment, a GitLab webhook will be
triggered to the People Connect bot and this will add the note as a comment on the Slack
thread. When the team member replies, this will trigger a note on the ongoing issue and so
on.

In case the PEA closes the issue and the team member replies to the thread, the issue will
be reopened. This way no issue gets lost.

## Connection to Workday

There is a read connection between Workday and the People Connect bot. When a new issue
is created on GitLab (either triggered through Slack or email), this will be augmented with labels related to the team member's:

- department
- division
- tenure
- region

So for example if someone in their first week in People Success wrote a message asking something to the bot, the following labels would be added:

- `Department::People Success`
- `Division::People Group`
- `Tenure:: < 6 months`
- `Region::JAPAC`

This means we have read access to those fields on Workday.

## Survey

Once the People Connect team labels an issue with the label `Status::Resolved`, a survey will be send to the team member who started the request. This answers to the survey are transformed into labels and also added to the issue. For example `Survey::Satisfaction::Neutral`, would be added if someone answers they felt neutral to how happy they were with the interaction.

Currently this only works for issues that were started by a Slack message or DM. We are aiming to have this enabled for issues started by email by 2021-07-07. We will then send the survey retro-actively for those who might have already had an issue labeled as resolved.

## Requests and or bugs

Issues with the bot and/or feedback about the process can be created [here](https://gitlab.com/gitlab-com/people-group/peopleops-eng/people-connect-bot/-/issues/new)
