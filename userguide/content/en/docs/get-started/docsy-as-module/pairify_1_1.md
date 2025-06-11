---
title: Pairify
description: "This document provides information on what Pairify is and how to use it to record pairing sessions."
category: References
---

## Overview

This document provides information on what Pairify is and how to use it to record pairing sessions.

## What is Pairify?

[Pairify](https://gitlab.com/gitlab-com/support/toolbox/pairify) is a Slack bot application that will scan monitored Slack channels on a schedule for any conversations reacted with ![Pairify emoji](../assets/pairify.png "Pairify emoji") (`:pairify:`).

It will then extract all Zendesk URLs, Slack participants/mentions and automatically create a pairing issue with the Zendesk URLs,
participants (converted to GitLab.com usernames) and closes out the issue.

![Pairify demo](../assets/pairify_demo.gif)

## Using Pairify

**NOTE**: For Pairify to correctly map your Slack user to your GitLab.com user, you must configure your Slack profile's **GitLab.com profile** field. See [edit your profile](https://slack.com/intl/en-gb/help/articles/204092246-Edit-your-profile) for more details.

To incorporate Pairify into your pairing session workflow:

1. Create a thread in one of the [supported channels](#channels-monitored-by-pairify) and pair with your colleagues!

1. Ensure that the thread conversation contains the following information:

   a. All Zendesk ticket URLs worked on

   b. All participants in the pairing session need to comment on the thread, or mentioned `@slack_username` in the thread

1. Optional. [Specify the pairing session type](#specifying-the-pairing-session-type).

1. React to the thread with the ![Pairify emoji](../assets/pairify.png "Pairify emoji") (`:pairify:`) emoji to mark a conversation for Pairify to process.

You then need to wait for the next scheduled execution of Pairify, as explained in [how Pairify works](#how-pairify-works).

## How Pairify works

Pairify executes every 30 minutes via a [scheduled pipeline](https://gitlab.com/gitlab-com/support/toolbox/pairify#production). When the pipeline begins, Pairify will search [all monitored channels](#channels-monitored-by-pairify)
for any conversation reacted with the ![Pairify emoji](/support/workflows/assets/pairify.png "Pairify emoji") (`:pairify:`) emoji that was created within the last 6 hours.

Pairify will then:

1. Extract any Zendesk URLs, participants and mentions within the conversation
1. Convert all Slack users to their GitLab.com counterparts
1. Create a GitLab issue in the [Support Pairing](https://gitlab.com/gitlab-com/support/support-pairing) project with the details extracted. The `pairify` label will be automatically applied to the issue, along with any other labels determined during processing.
1. Creates a message on the conversation thread indicating that the conversation has been processed. The response will also include a link to the issue created
1. React to the conversation with an ![Issue created emoji](../assets/pairify_issue-created.png "Issue created emoji") (`:issue-created:`) emoji so the conversation is not processed again on subsequent executions.

## Specifying the pairing session type

Pairify can apply additional labels to pairing issues to indicate the pairing session type if you react with additional emojis.

The reactions in this table are mutually exclusive - Pairify will only process the first reaction added to the conversation if multiple reactions are found:

| Emoji                                                                           | Shortcode        | Description                                           |
|---------------------------------------------------------------------------------|------------------|-------------------------------------------------------|
| ![Baobab emoji](../assets/pairify_baobab.png "Baobab emoji")                    | `:baobab:`       | Adds the `SGG::Baobab` label to the pairing issue     |
| ![Ginkgo emoji](../assets/pairify_ginkgoleaf.png "Ginkgo emoji")                | `:ginkgoleaf:`   | Adds the `SGG::Ginkgo` label to the pairing issue     |
| ![Kapok emoji](../assets/pairify_kapok.png "Kapok emoji")                       | `:kapok:`        | Adds the `SGG::Kapok` label to the pairing issue      |
| ![Maple emoji](../assets/pairify_maple_leaf.png "Maple emoji")                  | `:maple_leaf:`   | Adds the `SGG::Maple` label to the pairing issue      |
| ![Pine emoji](../assets/pairify_pine.png "Pine emoji")                          | `:pine:`         | Adds the `SGG::Pine` label to the pairing issue       |
| ![Crush emoji](../assets/pairify_crush.png "Crush emoji")                       | `:crush:`        | Adds the `crush` label to the pairing issue           |
| ![Office hours emoji](../assets/pairify_office-hours.png "Office hours emoji")  | `:office-hours:` | Adds the `office hours` label to the pairing issue    |

To ensure these reactions are picked up by Pairify, you should add these reactions before adding the `:pairify:` emoji to your conversation.

## Channels monitored by Pairify

Pairify can be used in the following Slack channels:

- [`#spt_pairing`](https://gitlab.enterprise.slack.com/archives/C03UW0HPBGD)
- [`#spt_us-government`](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2)
- [`#support_team-chat`](https://gitlab.enterprise.slack.com/archives/CCBJYEWAW)
- [Support Pod](https://gitlab.com/gitlab-com/support/support-pods) channels
- [Support Global Group](/handbook/support/support-global-groups/) channels

## Troubleshooting

- Refer to the [troubleshooting](https://gitlab.com/gitlab-com/support/toolbox/pairify#troubleshooting) section in the Pairify project.
- Review the [issue tracker](https://gitlab.com/gitlab-com/support/toolbox/pairify/-/issues) as you might be encountering a known issue.
