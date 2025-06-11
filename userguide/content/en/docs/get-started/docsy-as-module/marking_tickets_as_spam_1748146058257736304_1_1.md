---
title: Marking tickets as spam in Zendesk
description: "Workflow for marking Zendesk tickets as spam or unsolicited email"
category: Zendesk
---

### Marking tickets as spam in Zendesk

Sometimes it can be necessary to mark a ticket as spam in Zendesk.
This suspends the end-user, and they won't be able to
submit tickets or access our Service Desk anymore.

There are two methods to mark a ticket as spam, depending on your permissions:

1. For `Zendesk administrators` and Support agents with `Support Staff - CMOC` role:
   - Click the dropdown menu on the right side of the ticket
   - Select `Mark as spam`

1. For all other Support agents:
   - Apply the [`Spam` macro](https://gitlab.com/gitlab-support-readiness/zendesk-global/macros/-/blob/master/data/active/Unsorted/Spam.yaml)
   - This will solve the ticket without sending a CSAT survey.
