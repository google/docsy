---
title: Calendly
description: Operations documentation page for Calendly
canonical_path: "/handbook/ssecurity/customer-support-operations/docs/calendly/"
---

{{% pageinfo color="info" %}}

This is an informational page for Calendly. It may not reflect the way we actually manage it.

If you are looking for information about maintaining it, please see [our workflows](../../workflows/)

{{% /pageinfo %}}

## What is Calendly

Calendly is an online appointment scheduling tool the GitLab Support team uses
for scheduling customer calls.

## User management

User management in Calendly is primarily done via the [Admin center's Users page](https://calendly.com/app/admin/users). To access this page after logging in, you would click navigate to the `Admin center` by clicking the option at the lower-left of the page. After navigating there, click `Users` on the left-hand side to get to the user management page.

Within this page, you can invite new users, change roles, and remove members.

### Adding a user

To add a new user to our Calendly account, you need to invite them. This is done by navigating to the [Admin center's Users page](https://calendly.com/app/admin/users) and clicking the `Invite users` button (around the top-right of the page). Alternatively you can go directly to the `Invite user` page using [this direct link](https://calendly.com/app/admin/invitations/new).

On the `Invite user` page, you will enter the email of the user you wish to add and the group to put them in (if applicable). After doing so, click the `Next: Set roles` button (at the bottom-righth of the page).

You will then select the role for each user you are adding (`User` or `Admin`). After doing so, click the `Next: Assign event types` button (at the bottom-righth of the page).

You will thhen select the default events to have added to the user's profile. Once you have selected the applicable ones, click the `Send invitiation` button (at the bottom-righth of the page) to finish the process.

### Changing roles

To change the role of a user, locate the user on the [Admin center's Users page](https://calendly.com/app/admin/users), click the three vertical dots at the far right of thier row, and click the `Change Role` option.

This will bring show a pop-up form where you can select the new role to use. Once you have done so, click thhe `Apply` button.

### Removing a user

To remove a user, locate the user on the [Admin center's Users page](https://calendly.com/app/admin/users). click the three vertical dots at the far right of thier row, and click the `Remove` option.

This will bring show a pop-up form where you select the deletion level:

- Remove members
- Remove members and delete their accounts

Once you have selected the deletion level, click the `Remove` button.

## Team management

Managing teams in Calendly is done via the team's page in question. To locate this, go to your [home page](https://calendly.com/event_types/user/me), click the drop-down at the top of the page (it should say `My Calendly` at the time), and select the team you are wishing to manage (should be under the `Teams` section).

### Adding users to a team

To add a member to a team, click the gear icon to the right of the `+ New Event Type` and then select the `Edit Team` option.

On this page, click within the `Team Members` box and start typing out the email of the person you are wishing to add. Click the person in the drop-down that appears from your search.

If the person you are adding should also be able to manage the team, locate them in the user list (below the `Team Members` box) and click the checkbox next to `can manage team`.

Once you are done, click the `Save` button at the bottom of the page.

### Removing users from a team

To remove a member from a team, click the gear icon to the right of the `+ New Event Type` and then select the `Edit Team` option.

On this page, locate the member in question to remove from the list of members (below the `Team Members` box) and click the `Remove` link below their name.

Once you are done, click the `Save` button at the bottom of the page.

## Group management

Group management in Calendly is primarily done via the [Admin center's Groups page](https://calendly.com/app/admin/user_groups). To access this page after logging in, you would click navigate to the `Admin center` by clicking the option at the lower-left of the page. After navigating there, click `Groups` on the left-hand side to get to the group management page.

### Creating a group

To create a group, avigate to the [Admin center's Groups page](https://calendly.com/app/admin/user_groups) and click thhe `New Group` button (at the top-right of the page).

On the pop-up box that appears, enter the name of your new group and click the `Continue` button.

### Deleting a group

To create a group, avigate to the [Admin center's Groups page](https://calendly.com/app/admin/user_groups) and locate the group you wish to delete. Click the three vertical dots to the righht of its row and click the `Delete` option.

A pop-up box will appear for confirmation. To proceed, type the name of the group in the input box. After doing so, click the `Delete group` button.

### Adding users to a group

To add users to a group, navigate to the [Admin center's Groups page](https://calendly.com/app/admin/user_groups), locate the group in question, and click the three vertical dots on the right side of the row. You will then select the `Edit` option.

From here, click the `Add members` button (at the top-right of the page), locate the user by typing their name or email in the search box, and click them in the drop-down. Once you have gotten all the users you wish to add selected, click theh `Add` button.

### Removing users to a group

To remove users to a group, navigate to the [Admin center's Groups page](https://calendly.com/app/admin/user_groups), locate the group in question, and click the three vertical dots on the right side of the row. You will then select the `Edit` option.

From here, locate the user in question from the list of users, click the three vertical dots at the right-side of their row, and click `Remove as member`. A pop-up box will ask you to confirm the removal. Do so by clicking the `Yes, remove` button.

## Creating an event type

To create a new event type, go to your [home page](https://calendly.com/event_types/user/me), click the drop-down at the top of the page (it should say `My Calendly` at the time), and select the person, group, or team you are wishing to create an event type for. You will then clikc the `New Event Type` button at the top-left of thhe page.

On the next page, you will need to determine what kind of event type the meeting is for. The exact options available depend on if you are creating the event type for a person or group or team, but in general the common types are:

- One-on-One: your standard meeting type
- Round Robin: cycles between all available
- Collective: scheduling for when all selected are available (basically group scheduling that takes everyone's availability into effect)
- Group: allows for inviting multiple people to the same meeting

The exact type to use is going to be based on what you are aiming to do.

Once you have decided the event type to use, click the option on the page you are one.

Depending on the type of event, it might ask you to confirm who is hosting the event. Select the person from the drop-down and then click the `Next` button.

This will then bring up a the event creation page, which will have a plethora of options for you to select and use. WE highly recommend reading [How to set up an event type](https://help.calendly.com/hc/en-us/articles/14048303578391-How-to-set-up-an-event-type) for more information.

## Managing event types

To manage an event type, locate the event type in question and click on the gear icon in the top-right of the box. After doing so, click the `Edit` option in the sub-menu. Doing so will open the event type editor. From here, there are a lot of options that can be edited.

## Webhooks

### Creating a webhooks

To create a webhook in Calendly, you have to use the API.

The very *first* thing you are going to need to do is determine our Organization's information, as it will be required for the webhook's creation.

To do this, you are going to need to use the [Get current user](https://developer.calendly.com/api-docs/005832c83aeae-get-current-user) API endpoint, like so:

```bash
curl --request GET \
  --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json'
```

This will produce output that contains our organization's information (as you are part of our organization). The exact entry you are wanting is the `current_organization` value. If using something like [jq](https://jqlang.github.io/jq/), you can run the entire command like so:

```bash
curl -ss --request GET --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  | jq '.resource.current_organization'
```

You will also need your user reference URL, which you can get from the same endpoint. In this case, you'll need `uri` value from the output. Using something like [jq](https://jqlang.github.io/jq/), you can run the entire command like so:

```bash
curl -ss --request GET --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  | jq '.resource.uri'
```

{{% alert title="Note" color="primary" %}}

If you prefer, you can use the [gitlab_support_readiness gem](https://rubygems.org/gems/gitlab_support_readiness) instead to get all this information:

```ruby
require 'support_readiness'
config = Readiness::Calendly::Configuration.new
config.token = 'test123abc'
client = Readiness::Calendly::Client.new(config)
user = Readiness::Calendly::Users.current(client)
puts user.uri
puts user.current_organization
```

{{% /alert %}}

With that, you can now create the webhook itself. To do this, you will use the [Create Webhook Subscription](https://developer.calendly.com/api-docs/c1ddc06ce1f1b-create-webhook-subscription) API endpoint. This is going to require some very specific information to work correct, so let's break it down item by item:

- `url`
  - This is the URL the payload from Calendly is being sent to.
- `events`
  - An array of items the webhook will trigger for. The options currently are:
    - `invitee.created`
    - `invitee.canceled`
    - `invitee_no_show.created`
    - `routing_form_submission.created`
- `organization`
  - The URL for your organization. See above to get this value.
  - **NOTE** The *full* URL should be used.
- `user`
  - Your user reference URL. See above to get this value
  - **NOTE** The *full* URL should be used.
- `scope`
  - The scope this runs on. It can either be `user` or `organization`.

Putting this all together, you will make a POST request, with the data being in JSON format. To accomplish this, we recommend making a JSON file containing the parameters to send, verifying it via [jq](https://jqlang.github.io/jq/), and then making your API call. An example of what this might look like is:

```bash
echo '{' >> temp.json
echo '"url": "https://blah.foo/bar",' >> temp.json
echo '  "events": [' >> temp.json
echo '    "invitee.created",' >> temp.json
echo '    "invitee.canceled",' >> temp.json
echo '    "invitee_no_show.created"' >> temp.json
echo '  ],' >> temp.json
echo '  "organization": "https://api.calendly.com/organizations/AAAAAAAAAAAAAAAA",' >> temp.json
echo '  "user": "https://api.calendly.com/users/BBBBBBBBBBBBBBBB",' >> temp.json
echo '  "scope": "user"' >> temp.json
echo '}' >> temp.json
$ cat temp.json | jq
{
  "url": "https://blah.foo/bar",
  "events": [
    "invitee.created",
    "invitee.canceled",
    "invitee_no_show.created"
  ],
  "organization": "https://api.calendly.com/organizations/AAAAAAAAAAAAAAAA",
  "user": "https://api.calendly.com/users/BBBBBBBBBBBBBBBB",
  "scope": "user"
}

curl -ss --request POST \
  --url https://api.calendly.com/webhook_subscriptions \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  --data @temp.json
```

The response you get back from this need to be verified, but it should mirror a lot of the information you just used in your parameters. Once you have verified it all looks correct, the webhook is live.

### Need a list of all Calendly webhooks?

No worries, it happens from time to time. To do this, you will want to use the [List Webhook Subscriptions](https://developer.calendly.com/api-docs/faac832d7c57d-list-webhook-subscriptions) to get that information. This requires you so specify a scope and the organization itself. This might look like (assuming you URL encode the values, which isn't "required" but helpful):

```bash
curl -ss --request GET \
  --url 'https://api.calendly.com/webhook_subscriptions?organization=https%3A%2F%2Fapi.calendly.com%2Forganizations%2FAAAAAAAAAAAAAAAA&scope=organization' \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json'
```

## Calendly Event to Google Calendar Event

Both our Global and US Government support teams have a desire for events booked via their Calendly links to populate specific team-wide calendars instead of just their own. To accomplish this, we have setup a combination of Calendly webhooks and our own GitLab CI/CD.

This is centered around the [Calendly Events to gCal Events project](https://gitlab.com/gitlab-support-readiness/calendly-events-to-gcal-events).

### How it works

A payload is sent from Calendly via a gitlab.com webhook to the procject. The script then processes this payload to determine the parameters of the Google calendar event to create (if one is to be created at all).
