---
title: Google Calendar Delegation Guide
---

## Overview

You can allow other team members to manage events on your calendar. This is particularly helpful for Executive Business Administrators or for managers that need to make changes to an offboarded team member's calendar events.

- [Vendor Docs](https://support.google.com/a/users/answer/168126)
- [Vendor Docs](https://support.google.com/calendar/answer/37082)

## Calendar Permission Levels

- `See only free/busy (hide details)` - The team member will only be able to see if you are free or busy on the calendar. This is the only option for external (outside of GitLab) sharing.
- `See all event details` - The team member will be able to see all of your calendar events, but will not be able to edit them
- `Make changes to events` - The team member will be able to edit your calendar events. They will also gain the ability to edit the event details.
- `Make changes and manage sharing` - The team member will be able to edit your calendar events. They will also gain the ability to edit the event details. They will also gain the ability to change your calendar sharing settings.

## Delegate Your Calendar

1. Sign in to [https://calendar.google.com](https://calendar.google.com) with your GitLab email address.

1. In the top right click on the `Gear` icon to go into the [Google Calendar Settings](https://support.google.com/calendar/answer/6084644?hl=en&co=GENIE.Platform%3DAndroid)

1. Select your calendar under the `Settings for my calendars`

1. Select `Share with specific people` under your calendar settings drop down menu.

   <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_settings.png" alt="Google Calendar Settings" width="200"/><br>

1. Select `+ Add People`

1. Add the email addresses of the individual to share your calendar with.

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_settings_share.png" alt="Google Calendar Settings Share" width="400"/>

1. Select the `Permissions` drop down menu and give the individual the appropriate access. Please refer to [Calendar Permission Levels](#calendar-permission-levels).

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_settings_share_permissions.png" alt="Google Calendar Settings Share Permissions" width="400"/>

1. Select `Send`

## Access a Delegated Calendar

1. Log into `calendar.google.com` with your GitLab email address.

1. On the left-hand side menu bar, navigate to `Other calendars` and click on the `+` symbol to `Subscribe to calendar`.

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_add_other_calendars.png" alt="Google Calendar Add Other Calendars" width="300"/>

1. Search for the team member whose calendar you want to subscribe to.

    <img src="/images/security/corporate/systems/google/calendar/delegation/google_calendar_add_calendar.png" alt="Google Calendar Add Calendar" width="300"/>

1. Now when you go back to your calendar you will see the team member's calendar under `My calendars`.

1. Depending on the permissions the team member has given you, you will be able to either `view` or `view and edit` their calendar events.
