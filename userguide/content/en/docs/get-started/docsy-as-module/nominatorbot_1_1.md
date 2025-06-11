---

title: Nominator bot
description: Information on Slack Nominator bot created by the People Engineering team.
---

We're using a custom Slack app, the [Nominator Bot](https://gitlab.com/gitlab-com/people-group/peopleops-eng/nominatorbot/), that team members can use to nominate other team members for discretionary bonuses.

To nominate someone you type in `/nominate`. The bot will open a dialog
with additional details to fill in. Once filled in, you can submit the nomination. This nomination will be stored in a database and sent through Slack to the nominee's manager.

> The manager can then decide to approve or reject this nomination.

On approval, the bot will send this nomination to the second level manager, and if approved, to the People Connect Team for final approval. On the final approval, it is added to Workday as a one time bonus payment. The nominator AND the manager of the nominee are also updated about a final approval. The manager will receive a message with the full nomination and will be asked to share this with the nominee and to share it in the #thanks channel on Slack.

On rejection, an additional modal will pop-up asking for the rejection reason. This reason is only to be used in an aggregated way to get details about why nominations are rejected. This is not shared with anyone else or shown in the Home views. The nominator will see that the nomination was rejected but they won't see why. The bot will send a message to the person who rejected asking to share feedback with the nominator.

## Features

### Update a nomination

Since 2021-03-05 all approvers also have the uption to `update` a nomination. Sometimes
the nomination although valid, doesn't contain enough information. By clicking the update button the
approver can edit the nomination message. Once updated, it can be approved (or rejected) and it will be
send to the next approver with the updated message.

### Retrigger the approver

Sometimes a nomination is "stuck" with an approver. A nominator can use the home section of the nominatorbot
to let the bot send a new message to the person who needs to approve. We only allow a retrigger when:

- the nomination has not been approved or rejected yet
- AND the nomination was either created more than 24 hours ago or the last review has happened more than 24 hours ago
- AND in case a retrigger was already send out, it also needs to be more than 24 hours ago

Please be mindful using this retrigger functionality. There could be a valid reason why the approver is taking a few days
to approve or reject the nomination.

### Follow the state of a nomination as a manager

When you've approved a nomination and you want to be able to follow up the nomination. In the home section of the
nominator bot, there is a button `Reviewed Nominations`. Upon clicking that button a list will be loaded with all
the nominations you've reviewed and their current status.

## Frequenty asked questions

### How can I nominate someone?

Anywhere in Slack, just type `/nominate` and a modal should open where you can submit the form.
Alternatively, you can go to the Home tab of the `Nominator` and click the `Nominate!` button. This
will do the same as when you just type `/nominate`.

### I don't seem to be able to submit my nomination?

Sometimes people report that Slack does not allow them to submit the nomination. Please make sure to
check you've filled in all the fields. It's not always clear you need to scroll down to fill in the
`How does this meet the criteria?` question as well.

### I nominated someone recently and I still haven't heard back?

The first step you should do is have a look at the Nominator's Home section in Slack. There you
will see a list of all the nominations you've made and what the status is. For every nomination we show:

- the nominee
- the status
- values
- the message

The status is what you can use to see where the nomination might be stuck. Different options:

- Waiting for manager approval: this means that the manager of the nominee has not approved it yet.
- Waiting for second level approval: this means that the manager of the manager of the nominee has not approved it yet.
- Waiting for People Group approval: this means that someone from the People Group team still need to approve it

There are also the following statuses, although at this point the nomination approval flow is wrapped up:

- Rejected: sadly the nomination was rejected. The bot doesn't reach out when this happens, as we ask the rejector to reach out
- Approved: great news, this means the nomination was approved. The bot should've reached out to let you know about this.

Secondly, if the current person who needs to approve has been notified of a nomination more than 24hours ago, you can use the
`Remind Approver` button next to the nomination in this home section. This will ping the current approver by starting a thread on
the original message with the following message:

`:waves: <@#{channel}> Friendly ping not to forget about this nomination.`

If all of the above doesn't help you move the process forward, feel free to reach out to someone from People Group Engineering.
We will need the name of the nominee, please only do this in DM.

### I approved a nomination but I haven't heard back?

First thing to note is that only the manager of the nominee will hear back when the nomination is fully approved. So if you're the second level approver, you will not get any notifications.

However, every approver will have a section in the Nominator's Home tab on Slack where they can see all the nominations they've approved.

1. In Slack, open the Nominator conversation
1. Click on the `Home` tab
1. Click on `Reviewed nominations`

This will load all the nominations you've reviewed, you will be able to see the state that nominations are in. These states are all the
same as mentioned in the above `I nominated someone recently and I still haven't heard back?` question.

### I was informed that I had a Nomination pending my approval, but I haven't received any notifications?

Due to limitations in place by Slack, we might not be notified of an approval request if the Nominatorbot App has become hidden from the `App` list. To prevent missing these notifications it is recommended to **star** your conversation with the Bot or move to a channel grouping, so it doesn't go missing if you haven't interacted with the Bot for a while.

We can move this by following these steps:

1. Right click on your conversation with the Nominator bot.
1. Select `Move Conversation` from the menu.
1. Select `Starred` or another channel grouping.

To check up on any requests awaiting your approval we can also follow these steps:

1. In Slack, open the Nominator conversation.
1. Click on the `Messages` tab.

## Actions performed by engineers

### Offboarding

When a people manager offboards, it could be that the person still had pending nominations.
To make sure these don't get stuck, we are pinged in the offboarding issue and we have to
run the following snippet on the production shell:

```text
/cnb/lifecycle/launcher bundle exec rake offboarding:run[EMPLOYEE_NUMBER]
```

This will do a lookup on nominations that are pending for a manager or second level manager approver
and will resend the nomination approval to the new manager.

To take into account:

- you can only perform this if the reports have been assigned new managers
- if you're uncomfortable running an executing script, you can first to the `dry run` version: `/cnb/lifecycle/launcher bundle exec rake offboarding:dry_run[EMPLOYEE_NUMBER]`. This will print out the nominations that we would retrigger.

Don't forget to check off the task on the offboarding issue so the People Connect team knows it's been done.

## Requests and or bugs

Upcoming iterations can be found [here](https://gitlab.com/groups/gitlab-com/people-group/peopleops-eng/-/boards/1655060?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=p-nominatorbot)
Issues with the bot and/or feedback about the process can be created [here](https://gitlab.com/gitlab-com/people-group/peopleops-eng/nominatorbot/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=). We welcome contributions to the project!
