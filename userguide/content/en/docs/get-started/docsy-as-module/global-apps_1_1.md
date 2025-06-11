---
title: Global Apps
description: Support Operations documentation page for Zendesk Global apps
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/apps/global-apps"
---

## Advanced Search

Advanced Search is an app that provides a simple visual interface for
constructing complex search queries against tickets, users, and organizations
(orgs). It also enables you to export the search results in a CSV format.

App information:

- Located in the navbar
- This application was developed by
  [Zendesk](https://www.zendesk.com/marketplace/partners/zendesk/) and is
  available in the
  [Zendesk Marketplace](https://www.zendesk.com/apps/support/advanced-search/).

## GitLab Reminders App

<sup>*Introduced via [support-team-meta#3036](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3036)*</sup>

The Reminders App appears in the navbar and allows the agent a more specialized
view of tickets they are involved in. It currently shows:

- Tickets assigned to you with a pending/overdue task that are not in a Closed
  state
- Recent tickets you have viewed
- Tickets assigned to you that are not in a Closed state
- Tickets you are CC'd on that are not in a Closed state

It also allows you to quickly manage your tasks by seeing the notes you have
left for said task, when it is due, and a button to quickly mark the task as
done (remove the notes and due date).

App information:

- Located in the navbar
- This application was developed in-house and can be found
  [GitLab Reminders App project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/reminders-app).

## GitLab Super App

<sup>*Introduced via [support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801)*</sup>

A plugin controlled app that can do several things GitLab related

The current plugins are:

- **User Lookup**
  > This lets you search gitlab.com for a username or email. It then displays information based on the results.
- **Namespace Lookup**
  > This lets you search gitlab.com for a namespace. It then displays information based on the results.
- **Collaboration Project**
  > This checks the organization for a collaboration project ID. If one exists, it then provides a link to said project.
- **Two Factor Auth Helper**
  > This creates a usable form to checking if a 2FA verification has passed. It calculates the Risk Factor from the Data Classification and modifies it to reflect the passed challenges.
- **Email Suppressions**
  > This searches mailgun for suppressions from bounces (note it does not do it on complaints or unsubscribes). It will display the results (with the message for the suppression).
  >
  > It also gives the option of removing the suppression (if one if found). Doing so deletes it from mailgun and adds an intenral comment on the ticket with the results of the suppression deletion.
- **Fieldnotes**
  > This app checks the [Fieldnotes project](https://gitlab.com/gitlab-com/support/fieldnotes/-/issues) for any existing Issues which reference the current Zendesk ticket ID. If no existing Issues are found, then agents are able to create a new Fieldnotes Issue from directly within the Zendesk ticket.

App information:

- Located in the ticket sidebar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
- This application was developed in-house and can be found
  [GitLab Super App project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/gitlab-super-app).

## GitLab Views

The GitLab Views appears in the navbar and allows the agent a more customizable
set if Zendesk views.

App information:

- Located in the navbar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
  - Support Managers
  - Support Ops
- This application was developed in-house and can be found
  [GitLab Views App project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/views-app).

## Mechanizer

<sup>*Introduced via [support-team-meta#4208](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4208)*</sup>

This app incorporates [Mechanizer](/handbook/support/license-and-renewals/workflows/customersdot/mechanizer)
into Zendesk.

App information:

- Located in the ticket sidebar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
- This application was developed in-house and can be found at
  [Mechanizer project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/mechanizer)

## Notifications App

This app handles posting notifications at the top of the screen, depending on
various conditions and user settings.

**Note**: This app is *opt-in*. This means nothing will happen unless you modify
your user settings to receive notifications.

App information:

- Located in the Top Navigation of Zendesk Global
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
  - Support Managers
  - Support Ops
- This applicate was developed in-house and can be found at
  [Notification app project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/notification-app)

### Current events that trigger the app

The following events will send data to the app for notification processing:

- Agent private comment made on ticket
- Agent public comment made on ticket
- Customer public comment made on ticket
- Emergency ticket created
- Escalated ticket created

### User settings

The current user settings, which will determine what notifications you will (and
will not) recieve are:

- Play notification sound
  - Checking this box tells the app to play the notification sound.
- Notify me for
  - This tells the app what kind of tickets to notify you for
  - Values:
    - Assigned tickets only
    - CC'd tickets only
    - Tickets within my SGG only
    - All tickets
- Notify me about
  - This tells the app what kind of events to notify you for
  - Values:
    - All public comments (agent and customer)
    - Only public comments from agents
    - Only public comments from customers
    - Only private comments
    - All types of comments
- Notify me only for tickets with priority
  - This tells the app which priorities to notify you on
  - Values:
    - Urgent
    - High
    - Medium
    - Low
  - **Note** A blank value is assumed to be "all priorities"
- Also notify me for escalated ticket creation
  - This dictates if you want to be notified via the app when an escalated
    organization creates a ticket.
  - **Note** This works *independently* of all other settings.
- Also notify me for emergency ticket creation
  - This dictates if you want to be notified via the app when an emergency
    ticket is created.
  - **Note** This works *independently* of all other settings.
- Also notify me for STARs
- Also notify me for soon to breach tickets on
  - This dictates if you want to be notified via the app when a ticket is about
    to breach (within 2 hours)
  - Values:
    - Assigned tickets only
    - CC'd tickets only
    - Tickets within my SGG only
    - All tickets
  - **Note** This works *independently* of all other settings.
- Also notify me for tickets created via specific orgs
  - This dictates if you want to be notified via the app when a ticket is
    created by a specific organization
  - The list should be comma separated
    - Example, if you want to be notified for organizations 123, 456, and 789,
      use the value `123,456,789` or `123, 456, 789`
  - **Note** This works *independently* of all other settings.

For information on editing your personal user settings, please see
[Zendesk's documentation](https://support.zendesk.com/hc/en-us/articles/4408819930906-Editing-your-personal-settings-in-Zendesk-Chat-Support-accounts#topic_gfh_rqm_4fb).

### Future iterations

This app is slated to grow consistently with new forms of notifications. Keep an eye on
[Support Readiness milestones](https://gitlab.com/groups/gitlab-com/support/support-ops/-/milestones?search_title=Support+Ops+Deployment&state=&sort=),
the [SWIR](/handbook/support/#support-week-in-review),
and other channels of communications for updates (as well as this seciton of the docs).

## Out of Office

<sup>*Introduced via [support-team-meta#4303](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4303)*</sup>

This will enable an agent to mark when they are out of office in Zendesk, which
then updates tickets and makes it visible in the views.

Managers are also able to do this for their reports.

App information:

- Located in the navbar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
- This application was developed in-house and can be found
  [Out of Office project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/out-of-office)

## Support Ops Super App

A plugin controlled app that can do several things Support Ops related

The current plugins are:

- **Namespace Lookup**
  > This lets you search gitlab.com for a namespace. It then displays information based on the results. This is related to the one in the GitLab Super App, but instead it shows less information and shows the SFDC IDs it is associated with.

App information:

- Located in the ticket sidebar
- Restricted by Role:
  - Admin
- This application was developed in-house and can be found
  [Support Ops Super App project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/support-ops-super-app).

## Unbabel

<sup>*Introduced via [support-team-meta#1664](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/1664)*</sup>

Powered by state-of-the-art AI and a worldwide community of translators,
Unbabel delivers translation at enterprise scale. We help you serve customers
in any language, with fast, native-quality translations of your customer
support tickets in Zendesk.

App information:

- Located in the ticket sidebar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
- This application was developed by Unbabel and is available in the
  [Zendesk Marketplace](https://www.zendesk.com/apps/support/unbabel-for-zendesk-support/).

### Configuring Unbabel in Zendesk

Every Agent profile in Zendesk needs to be individually configured so that only
tickets submitted in the [supported languages](https://about.gitlab.com/support/portal/#language-support) are translated.

To do this you can use [a javascript snippet](https://gitlab.com/gitlab-com/support/toolbox/snippets/snippets/1971515) created internally.

You can also do the configuration manually by following these steps.

1. Open any existing ticket in Zendesk and navigate to and open the Apps sidebar.
1. Scroll to the Unbabel app and click on Settings.
   ![App](/images/support/Unbabel_App_New.png)
   ![Settings](/images/support/Unbabel_Settings_New.png)
1. Add all the languages *except* those supported by GitLab to the "Languages you speak" list.
   ![Languages](/images/support/Unbabel_Languages_New.png)
1. When you are finished, click the Save button.

### Replying with a Translation

To request a translation automatically, simply reply as you normally would as
an internal note with the #unbabel hashtag included at the top of your content.
As per our
[working with tickets](/handbook/support/workflows/working-on-tickets#what-is-the-working-on-tickets-workflow)
workflow, please remember to assign yourself to the ticket if the ticket
doesn't currently have an assignee when you respond.

Please also ensure that the `unbabel_en`, `unbabel_reply`,
`unbabeled` tags are included, otherwise your response might not be translated
automatically. Should this happen, you will need to add the missing tags, and
create a new internal note with the #unbabel hashtag included at the top of
your content.

Once you submit your response, it may take several seconds for Unbabel to
automatically translate your internal comment, but it can take several minutes
if a human is required to manually translate your internal comment. To view the
status of the translation, you can open the Apps sidebar in the ticket, and
scroll down to the **Unbabel for Zendesk Support** box.

![Translation required](/images/support/Unbabel_Translation_Required.png)

After a translated response has been sent to the customer via Unbabel it is
necessary to manually set the ticket status as **Pending** since Unbabel will
incorrectly set the ticket status as **Open**. You must do this with an *empty
comment* (remove any `#unbabel` added by the plugin, before you Submit as
Pending).

### Excluding Text from Translation

The highlighted code can be skipped for translation by adding 3 brackets around
the text:

```string
<<< text/code >>>
```

The above can also be used to protect sensitive information from a human
translator when sending a translation request.

### Disabling Unbabel in a Specific Ticket

Sometimes Unbabel is triggered if a customer's signature was written in a
language that requires translation but the customer replies in English, and the
translation is not needed. In this case, there is a way to disable Unbabel in
this specific ticket:

- Open the ticket in question.
- Click Apps > Unbabel for Zendesk Support.
- `Change` the `Customer language` to `English`.

From now on, Unbabel will not be triggered in this ticket.

### Help with Translation

If for some reason you have difficulty in understanding the automated
translation, an actual human intervention can actually be requested. Simply
click the link `Can’t understand the translation?` in the Unbabel app box and
this will send your response for translation to Unbabel editors.

### Best Practices for Unbabel

As indicated in the training session, please keep in mind of the following best
practices when writing a response for translation.

- Respond in one language
  - It is likely that you can speak another language and understand what the
    customer is trying to say. Please ensure that you only use the English
    language when responding tickets as the system may not detect the language
    correctly.
- Copy only the body of the content that needs translation.
  - When referring to a quoted texts from our customers, please only use the
    content that requires translation. Including snippets/code/elements may
    take more time to translate and could result in a mistranslation.
- Mind the punctuation.
  - Punctuation can be sometimes tricky for Unbabel so please be sure there are
    no unnecessary periods/punctuations in between.
- Single Word Use
  - It is likely that the response you are sending may be lost in translation,
    for example the word `pass` would differ to a `boarding pass`.

### Zendesk Triggers

Unbabel relies on two Zendesk triggers to work properly. These should *never*
be changed, as it can cause significant problems.

- [Unbabel for agent](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=20010334&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360057239500)
- [Unbabel for user](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=20010334&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360057239480)

## Zendesk Super App

<sup>*Introduced via [support-ops-project#801](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/801)*</sup>

A plugin controlled app that can do several things Zendesk related

The current plugins are:

- **Create new ticket**
  > Allows an agent to create a new ticket using the same user as the ticket they are currently on.
- **Due date picker**
  > This allows you to customize what the Due Date for a Task ticket is set for. By default, Zendesk only allows setting the date. This enables you to set the date, time, and timezone.
  >
  > You can also set the Due Date Note and disable (or enable) task notifications using this app.
- **Escalated tickets**
  > This searches for tickets under the organization that have been escalated within the last 6 months.
- **Related tickets**
  > This looks for tickets related to the current one based off the category (or subcategory) the ticket is currently using. It then displays up to 5 of them (sorted by the update_at value of the ticket, descending).
- **Attachments**
  > Displays attachments present on the ticket.

App information:

- Located in the ticket sidebar
- Restricted by Group:
  - Support AMER
  - Support APAC
  - Support EMEA
- This application was developed in-house and can be found
  [Zendesk Super App project](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/zendesk-super-app).
