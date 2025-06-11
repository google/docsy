---
title: "Dex Bot"
description: "Digital Experience team Slack application"
---

The Digital Experience team has created a Slack application to automate important messages and alerts to the team, the app configuration can be found [here](https://api.slack.com/apps/A06K6EK7VHP/general)

### Collaborators

Currently this application is managed by the following members of the Digital Experience team:

- [Nathan Dubord](https://gitlab.com/ndubord)
- [Lauren Barker](https://gitlab.com/laurenbarker)
- [Megan Filo](https://gitlab.com/meganfilo)
- [Laura Duggan](https://gitlab.com/lduggan)
- [Mateo Penagos](https://gitlab.com/mpenagos-ext)

### Contentful integration

Currently the main use for this bot is to notify the team as soon as one of the main pages is changed in our CMS platform, this will send a message that contains the following information to the team:

- Entry Title
- User ID of the user who made the changes
- Update time
- Entry ID
- Entry version after the changes

and also includes a button to open the comparison with the previous version in the CMS

![DexBot Message](/images/marketing/digital-experience/engineering/DexBot-message.png)

this integration is done using two webhooks:

a [Contentful Webhook](https://app.contentful.com/spaces/xz1dnu24egyd/settings/webhooks/0phOTSfD0tLisCEgn7hN53/settings) which has been configured to send a custom payload containing the entry information to our [Slack webhook](https://api.slack.com/apps/A06K6EK7VHP/incoming-webhooks) which will then trigger the message from slack bot, this message is then sent to the `dex-alerts` channel in Slack

### Slack blocks

The message that is sent was made using the slack [Block system](https://api.slack.com/block-kit), which uses pre-made slack UI components to structure the message and add interactivity in the form of inputs and buttons, this is built in the form of JSON, this is the payload being used for the CMS alerts message:

```json
{
  "blocks": [
    {
      "type": "header",
      "text": {
        "type": "plain_text",
        "text": "Monitored page content updated",
        "emoji": true
      }
    },
    {
      "type": "section",
      "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "Entry title: {/payload/fields/title/en-US}"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Updated by user:* {/payload/sys/updatedBy/sys/id} \n\n *Update time:* {/payload/sys/updatedAt} \n\n *Entry ID:* {/payload/sys/id} \n\n *Version*: {/payload/sys/revision}"
      },
      "accessory": {
        "type": "image",
        "image_url": "https://assets.stickpng.com/images/5a81af7d9123fa7bcc9b0793.png",
        "alt_text": "calendar thumbnail"
      }
    },
    {
      "type": "divider"
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "View changes in Contentful"
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "View changes",
          "emoji": true
        },
        "url": "https://app.contentful.com/spaces/{/payload/sys/space/sys/id}/entries/{/payload/sys/id}/compare"
      }
    }
  ]
}

```
