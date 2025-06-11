---
title: Calendly Setup for Support
category: References
description: "Workflow for setting up and using Calendly in Support Engineering"
---

**Note**: Always use [single-use Calendly links](#generating-a-single-use-calendly-link) when offering a call with customers.

## Calendly setup

You will have set up Calendly as part of your GitLab onboarding, following [the instructions in tools and tips](/handbook/tools-and-tips/other-apps/#calendly).

Modify your setup as follows

- [log in](https://calendly.com/login)
- Set up Zoom integration on your Calendly account in [integrations](https://calendly.com/integrations)
- Ensure you have a one-hour event available.
- Edit your Calendly events:
  - Ensure the event names have 'Support' in their title.
  - Consider changing your availability increment (see below)
  - Location may show as 'Zoom conference call' but won't actually be using the integration. Edit the location, and select zoom (with the blue camcorder icon)

## Availability schedule setup

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/QeqvcjZEVpM" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

Setting up your availability schedules is very important. This ensures you get scheduled calls during your intended hours as well as ensures you can be added to the various events we use.

The above video shows how to set this up, but the general gist is:

- Navigate to [https://calendly.com/app/availability/schedules](https://calendly.com/app/availability/schedules)
- Set the timezone for your default schedule
- Rename the default schedule to "Working hours"
- Edit the hours you are available

### GitLab Support group account

You need to be added to the GitLab Support group account to enable the
Calendly Pro account features, including the ability to add multiple
["event types"](https://help.calendly.com/hc/en-us/articles/14073251046807-How-to-customize-your-event-types)
for scheduling calls with customers and colleagues as recommended in the
[suggestions](#suggestions) below.

To get added to the group account:

1. Open a [Schedule update request](https://gitlab.com/gitlab-com/support/support-ops/other-software/calendly/-/issues/new?issuable_template=Schedule%20update%20request) issue
1. Assign to your manager, and they'll approve and assign it over to a team
member who provisions Calendly.

This access is also included as part of [support onboarding](/handbook/support/#onboarding) for GitLab Support Engineers that will be handling tickets for self-managed customers.

### Availability increment

Calendly 60 minute meetings default to an 'availability Increment' of 60 minutes.

Only slots starting at the top of the hour are offered. If you've got 90 minutes available,
or a (say) a 14:30-15:30 window available, then reducing the increment to 30 minutes increases your availability.

- Log in and edit the event type
- Click on `Scheduling settings`
- Under `Additional options`, select a time interval under `Start time increments`

If you have any other meeting lengths available, consider whether it makes sense to offer different start times.
You can view your calendly availability using a private/incognito browser session.

### Temporarily changing your timezone

If you are temporarily working hours different to your usual schedule, you can update Calendly so that customer calls will be booked during your updated timezone.

1. Log in to Calendly. Click the `Availability` tab (or use [this URL](https://calendly.com/app/availability/schedules)).
1. In the `Schedule` > `Working hours` area, use the `Time zone` dropdown to select your updated timezone. Changes are automatically saved.
1. Set a calendar reminder for yourself to reset your timezone when your working hours have reverted to usual.

### Set the minimum amount of notice that is required for an event

You can specify scheduling conditions that disallow scheduling events within a configurable interval
of an event start time.

1. Log in and edit the event type
1. Click `Scheduling settings`
1. Under `Event limits`, select a time interval under `Minimum notice`
1. Click `Save and close`

## Support calls in the team calendar

We copy customer calls to the *GitLab Support* Google calendar using a [Zapier zap](https://zapier.com/app/editor/33897756?redirect=true). For this to work

- Your calendly account must be part of the group account.
- The word 'support' triggers the integration. Ensure 'support' is in the event name in Calendly.

If the Zap is working, you should see the calendar event copied within a minute or two. If the customer cancels, similarly, it'll be removed from the Support calendar.

### Ticket ID in calendar events

Please [add a **required question**](https://help.calendly.com/hc/en-us/articles/226893168#invitee-question-and-answer-types-0-5) to your personal Calendly customer events. This question should ask the customer to enter the GitLab Support ticket number when they schedule with you. This ensures the ticket number is shown on the calendar events, and provides context for others to join and help out on a call.

## Generating a single-use Calendly link

### using Chrome plug-in / Firefox extension

Calendly has a
[Chrome plug-in](https://chrome.google.com/webstore/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp)
and a [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/calendly-meeting-scheduling/)
that makes it easy to generate a single-use link to send to the customer. After adding it to your browser, look for
the Calendly icon at the top right in your browser. Sign in to Calendly, then you will see a list of events.
Then simply click on the `Copy link` icon under the event of your choice to generate a link you can paste into
your message to the customer.

![Browser plug-in](/images/support/workflows/assets/calendly.png)

If you do not want to use a supported browser, you can generate a link from your Calendly home page according to [the Calendly documentation](https://help.calendly.com/hc/en-us/articles/1500001292022-How-to-create-and-share-a-single-use-link-to-a-specific-event).

### using curl

Set your Calendly API token:

```plaintext
t=<your Calendly API token>
```

Get your personal URI:

```plaintext
uri=$(curl -s -H "Authorization: Bearer $t" \
  https://api.calendly.com/users/me | jq -r '.resource.uri')
```

List your available events:

```plaintext
curl -sG -H "Authorization: Bearer $t" \
  -d user=$uri \
  "https://api.calendly.com/event_types" \
  | jq -r '.collection[]|select(.active == true)|([.name,.uri] | join(","))' \
  | column -s',' -t -d
```

This will generate a table such as this:

```plaintext
15 Minute Meeting                   https://api.calendly.com/event_types/DGFGYBLAHK4CNXJF
30 Minute Coffee Call               https://api.calendly.com/event_types/DEBLAHWQSO3GGUES
GitLab Government Customer Call        https://api.calendly.com/event_types/DADPABBLAHWZY57A
GitLab Support Call                 https://api.calendly.com/event_types/CEGFRWO2BLAHSAQE
Upgrade Assistance             https://api.calendly.com/event_types/AHBRCBLAH6ECV5E6
Pairing Session                     https://api.calendly.com/event_types/EBLAHIHDJDJRSS42
Support call with me                https://api.calendly.com/event_types/DBLAH4WXTM7ADUB2
US Government Upgrade Assistance  https://api.calendly.com/event_types/BLAHTQKLLSHV3GL3
```

To generate a single-use link for the "Support call with me" event:

```plaintext
curl -s -H "Authorization: Bearer <your Calendly API token>" \
  -F max_event_count=1 \
  -F owner_type=EventType \
  -F owner=https://api.calendly.com/event_types/DBLAH4WXTM7ADUB2 \
  https://api.calendly.com/scheduling_links \
  | jq -r '.resource.booking_url'
```

This will output something like the following:

```plaintext
https://calendly.com/d/m6we-x8r7/support-call-with-me
```

### using `httpie`

The following uses the same setup, patterns, and output as above with [`httpie`](https://github.com/httpie/cli).

Get your personal URI:

```plaintext
uri=$(https https://api.calendly.com/users/me \
  Authorization:"Bearer $t" \
  | jq -r '.resource.uri')
```

List your available events:

```plaintext
https -b  api.calendly.com/event_types \
  user==$uri \
  Authorization:"Bearer $t" \
  | jq -r '.collection[]|select(.active == true)|([.name,.uri] | join(","))' \
  | column -s',' -t -d
```

Generate a single-use link:

```plaintext
https -b  api.calendly.com/scheduling_links \
  Authorization:"Bearer $t" \
  max_event_count=1 \
  owner_type=EventType \
  owner=https://api.calendly.com/event_types/DBLAH4WXTM7ADUB2 \
  | jq -r '.resource.booking_url'
```

## Protecting Customer Call events by making them Secret in Calendly

Customer Calls should be invitation-only. To do this, ensure all your Customer Call events are a `Secret event`. By doing this, only those who have the Calendly link to the specific event can see the meeting with you.

**NOTE:** If you do not take this action, then anyone can see your Customer Call events on your public Calendly page.

1. Edit any of your events (specifically, the ones that you use for Customer Calls).
1. Click the **Settings** (**{settings}**) icon in the sidebar on the left side of the page.
1. Click `Make secret`.
1. Leave the page. Check the [Calendly documentation](https://help.calendly.com/hc/en-us/articles/1500004754122-Managing-additional-rules-for-your-availability#make-an-event-secret-0-6) in case of any issues.

## Auto block PagerDuty shifts in Calendly

It is possible to automate the blocking of your PagerDuty shifts in Calendly, so you are not booked for a customer call while you are on duty. This works by subscribing to your PagerDuty on-call schedule in Google Calendar, and then having Calendly use this when checking for conflicts. To set this up:

1. In PagerDuty, navigate to **Your profile > On-Call Shifts > Export > WebCal feed**. Right-click and copy the URL.
1. Add the PagerDuty calendar to your Google Calendar **Other calendars > + > From URL** and paste the WebCal URL from step 1.
1. In Calendly, [navigate](https://calendly.com/app/personal/availability/connected_calendars) to **Account > Calendar Sync > Configuration > Check for conflicts** and click the **Edit** button.
1. Ensure that the PagerDuty calendar added in step 2 is selected here (it will be listed as "On Call Schedule for *Your Name*", not the name you gave it in Google), and then click the **Update** button. If your calendar does not appear in the list, you can disconnect and reconnect your Google Calendar account from Calendly to refresh the calendar list.

## Send customers the combined availability suggestions of multiple colleagues

Using a similar principle as for blocking your PagerDuty shifts,
it is also possible to make Calendly present only those time slots
which are available for multiple GitLab colleagues.
This is useful when other Support Engineers, developers or managers
need to attend a customer call

1. In Google Calendar **Other calendars > + > Subscribe to calendar**,
   start typing the name of your colleague and
   click on their auto-completed name to subscribe.
1. In Calendly, [navigate](https://calendly.com/app/personal/availability/connected_calendars) to **Account > Calendar Sync > Configuration > Check for conflicts**
   and click the **Edit** button.
1. Add your colleague's calendar to the availability check via their `…@gitlab.com` entry.
1. After the call has been scheduled, remove that entry again.

## Suggestions

Ben Prescott

- I have a 25 minute and 50 minute meeting available for internal GitLab meetings, and separate 30 minute and 60 minute ones called 'GitLab Customer support'. These are the ones I send links to in Zendesk.
- I offer 60 minutes by default, and changed the description/instructions as follows. I include the last line as we had a customer book for 3am their time, and can only assume Calendly got their time zone wrong.

> This will be a Zoom Meeting.
>
> Let me know via the ticket if you have any questions, will need to use a different conference platform, or if you want a link to schedule a 30 minute call instead (which may be available sooner.)
>
> Check that your time zone and current time are displayed correctly on this page (below the calendar.)
