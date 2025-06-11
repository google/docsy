---
title: Calendly docs
description: Support Operations documentation page for Calendly
canonical_path: "/handbook/support/readiness/operations/docs/calendly/"
---

## What is Calendly

Calendly is an online appointment scheduling tool the GitLab Support team uses
for scheduling customer calls.

## User management

User management in Calendly is primarily done via the
[Admin Management page](https://calendly.com/app/organization/users). To access
this page after logging in, you would click `My Account` in the top-right of the
page and then select `Admin Management`.

Within this page, you can invite new users, change roles, and remove members.

**Note**: While this is a baseline entitlement for GitLab Support, it is not a
baseline entitlement for the rest of GitLab. As such, non-support users
requesting access to this must submit an access request and it must be reviewed
and approved by a Support Operations Manager.

### Adding a user

To add a new user, you simply invite them to Calendly via the
[Admin Management page](https://calendly.com/app/organization/users). On that
page, you will click `+ New User` in the top-right of the page. From there, you
will input the email(s) of the user(s) you wish to invite. After inputing the
email(s), click the blue `Next` button. From here, you would select the event
types to add to the user's profile. As we don't do this by default, simply click
the blue `Finish` button. After doing so, the user(s) will be invited to join
the Calendly under our paid subscription.

### Changing roles

To change a role of a user, locate the user on the
[Admin Management page](https://calendly.com/app/organization/users) and click
the checkbox by their name. After doing so, go to the top of the page and click
the `Change Role` button. Doing so will open a new box with a dropdown
containing a list of all roles. Simply select the new role to use and then click
the blue `Apply` button.

### Removing a user

To remove a user, locate the user on the
[Admin Management page](https://calendly.com/app/organization/users) and click
the checkbox by their name. After doing so, go to the top of the page and click
the `Remove members` button. Doing so will open a new box two options to select:

- Remove members
- Remove members and delete their accounts

You should only ever use the first option (`Remove members`). After ensuring
that option is checked, click the blue `Remove` button.

## Team management

Managing teams in Calendly is done via the team page in question. For Support
Ops, this is normally the
[GitLab Support Calendly team page](https://calendly.com/event_types/team/44431).
On this page, you can do several things, such as creating managing event types
and adding/removing members.

### Adding a member

To add a member to a team, click the gear icon to the right of the
`+ New Event Type`. Doing so will open a sub-menu with several options. The one
you will want is `Edit Team`. Clicking this will open the
[team settings editor page](https://calendly.com/teams/44431/edit).
From here, you will go to the `Team Members` section and click in the box that
says `Type to add team member`. From here, start typing the new member's name.
Once the Calendly box shows the user in question, click on their name. Doing
so will add them to the list of team members. Unless the user is going to manage
Calendly, leave the `can manage team` box unchecked. Once you are done there,
click the blue `Save` button at the bottom of the page.

### Removing a member

To remove a member from a team, click the gear icon to the right of the
`+ New Event Type`. Doing so will open a sub-menu with several options. The one
you will want is `Edit Team`. Clicking this will open the
[team settings editor page](https://calendly.com/teams/44431/edit).
From here, locate the member in question and click the blue `Remove` link below
their name. Once you are done there, click the blue `Save` button at the bottom
of the page.

## Creating an event type

To create a new event type for a team, first navigate to the team page. For
Support Ops, this is normally the
[GitLab Support Calendly team page](https://calendly.com/event_types/team/44431).
From there, click the `+ New Event Type` button on the right side of the page.
On the next page, you will need to determine what kind of event type the meeting
is for:

- Round Robin: cycles between all available
- Collective: scheduling for when all selected are available (basically group
  scheduling that takes everyone's availability into effect)
- Group: allows for inviting multiple people to the same meeting

The exact type to use is going to be based on what you are aiming to do.
Normally, we use Round Robin as our default event type.

Once you have decided the event type to use, click the blue button below said
event type. As we use Round Robin as our default, the remaining instructions
will focus on that event type.

The next page will ask for you event details. Here, you will give the event type
a name and a description. You can also specific an event link if you wish to
customize it (it will default to kebab-case). You also are given the option to
pick an event color (we tend to stick to purple to match GitLab).

After you are done with the event details, click the blue `Next` button to
proceed.

On the next page, you will enter the details of when people can book this event.
This can be a bit complicated, so see
[Managing event types](#managing-event-types) for more details there.

After you are done with that, click the blue `Next` button to proceed.

The next page will have you select the team members to use for the event type
and the default location (ie where the meeting is hosted). Click the check boxes
by the names of who you want in the distribution. For the location, you should
always select `Zoom`.

The top of this asks for how the distribution should be done. By default, we
select `Optimize for availability` so that it benefits the customer first and
foremost.

After you are done with that, click the blue `Next` button to proceed.

At this point, your event type is live and ready to be used. There are many more
options you can use for the event type itself, so make sure to review
[Managing event types](#managing-event-types) for more details.

## Managing event types

To manage an event type, locate the event type in question and click on the gear
icon in the top-right of the box. After doing so, click the `Edit` option in the
sub-menu. Doing so will open the event type editor. From here, there are a lot
of options that can be edited.

### What event is this

Here you can edit the event's name, description, link, and color.

### When can people book this event

If you had to pick one section to deem the most complicated part of event types,
this would be it. Here you determine:

- when the event can be booked
- who is available at the various times
- how far one can schedule into the future
- duration of the event_types
- buffer time before and after the event

The exact values to use are going to vary depending on the event and the
preferences of those involved in said event. While most of these values are
straight-forward, the "when the event can be booked" bit is complex and can take
a bit to get the hang of.

Due to the complexity of this section, I highly recommend watching the above
linked video. This section often needs to be tweaked and can be daunting if you
are not familiar with doing so.

### Team members and locations

Here you will determine who is involved in the event type and the default
location the will use. Any team member who could be selected for a meeting
should have the checkbox by their name checked. The default location should
always be Zoom.

While you can set priority for event booking, we do not by default.

### Invitee Questions

Here you can customize the questions asked when a user tries to create an
event. What exactly goes here will vary based on use case, but some good
questions to have in there might be:

- What is the ticket ID?
- If your organization in unbable to use Zoom, what platform would you like us
  to try to use?

As it will vary based on the event itself, your judgement will be the best guide
on what to put here.

### Notifications and Cancellation Policy

Here you can edit the notifications and cancellation policy. By default, we do
not customize this option. It should default to
`Calendar Invitations, No Reminders`.

#### Confirmation Page

At this time we do not use this option. You should not change anything here and
it should default to `Calednly confirmation page, no active links`.

#### Collect Payments

At this time we do not use this option. You should not have anything here and
it should state `no payment method`.

## Calendly Event to Google Calendar Event

Both our Global and US Government support teams have a desire for events booked
via their Calendly links to populate specific team-wide calendars instead of
just their own. To accomplish this, we have setup a combination of Calendly
webhooks and our own GitLab CI/CD.

### CI/CD Project

Creating the webhook is part of this, but ideally before you actually do so, you
need something to *process* the payload Calendly would send. For this, we opt to
use GitLab's CI/CD capabilities.

The source of our project for this can be found at
[this project](https://gitlab.com/gitlab-support-readiness/calendly-events-to-gcal-events).

While the project's code has comments to explain what is going on, a very basic
explaination of it would be:

1. The .gitlab-ci.yml file is setup to only let the pipeline run when started
   via a pipeline trigger
1. The job run used the script
   [bin/run](https://gitlab.com/gitlab-support-readiness/calendly-events-to-gcal-events/-/blob/master/bin/run)
1. That script calls the function `EventProcessor::Process.run!`
1. The script determines if this is a viable event to process
1. The script converts the information in the payload to what is needed to
   create a Google Calendar event
1. The script creates the Google Calendar event

### Calendly Webhooks

The first step of this is making a Calendly webhook to send a payload to our
chosen destination (our [CI/CD Project](#cicd-project) in this case). This can
be done either at the Organization or User level. In the interest of
scalability, we tend to make these at the Organization level.

The very *first* thing you are going to need to do is determine our
Organization's information, as it will be required for the webhook's creation.

To do this, you are going to need to use the
[Get current user](https://developer.calendly.com/api-docs/005832c83aeae-get-current-user)
API endpoint, like so:

```bash
curl --request GET \
  --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json'
```

This will produce output that contains our organization's information (as you
are part of our organization). The exact entry you are wanting is the
`current_organization` value. If using something like
[jq](https://jqlang.github.io/jq/), you can run the entire command like so:

```bash
curl -ss --request GET --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  | jq '.resource.current_organization'
```

You will also need your user reference URL, which you can get from the same
endpoint. In this case, you'll need `uri` value from the output. Using something
like [jq](https://jqlang.github.io/jq/), you can run the entire command like so:

```bash
curl -ss --request GET --url https://api.calendly.com/users/me \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json' \
  | jq '.resource.uri'
```

With that, you can now create the webhook itself. To do this, you will use the
[Create Webhook Subscription](https://developer.calendly.com/api-docs/c1ddc06ce1f1b-create-webhook-subscription)
API endpoint. This is going to require some very specific information to work
correct, so let's break it down item by item:

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

Putting this all together, you will make a POST request, with the data being in
JSON format. To accomplish this, we recommend making a JSON file containing the
parameters to send, verifying it via [jq](https://jqlang.github.io/jq/), and
then making your API call. An example of what this might look like is:

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

The response you get back from this need to be verified, but it should mirror a
lot of the information you just used in your parameters. Once you have verified
it all looks correct, the webhook is live.

### Need a list of all Calendly webhooks?

No worries, it happens from time to time. To do this, you will want to use the
[List Webhook Subscriptions](https://developer.calendly.com/api-docs/faac832d7c57d-list-webhook-subscriptions)
to get that information. This requires you so specify a scope and the
organization itself. This might look like (assuming you URL encode the values,
which isn't "required" but helpful):

```bash
curl -ss --request GET \
  --url 'https://api.calendly.com/webhook_subscriptions?organization=https%3A%2F%2Fapi.calendly.com%2Forganizations%2FAAAAAAAAAAAAAAAA&scope=organization' \
  --header 'Authorization: Bearer TOKEN_GOES_HERE' \
  --header 'Content-Type: application/json'
```
