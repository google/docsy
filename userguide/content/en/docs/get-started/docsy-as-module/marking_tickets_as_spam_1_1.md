---

title: Marking tickets as spam in Zendesk
description: "Workflow for marking Zendesk tickets as spam or unsolicited email"
category: Zendesk
---



### Marking tickets as spam in Zendesk

Sometimes it can be necessary to mark a ticket as spam in Zendesk. There are two ways to do it:

**Recommended way:** click the arrow in the right part of a ticket and select `Mark as spam`:

  ![Zendesk Mark as Spam](/handbook/support/workflows/assets/zendesk-mark-as-spam.png)

Marking a ticket as spam using this method suspends the end-user, and they won't be able to
submit tickets or access our Service Desk anymore. If you are unsure this measure should be applied, use the alternative method below.

**Alternative method:** open the ticket and select [Spam macro](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Unsorted/Spam.yaml) in the list of macros.
It will add a tag and solve the ticket once applied. The CSAT survey won't be sent for tickets with this tag.

For more details about spam in Zendesk, see the issue [Managing Spam Tickets](https://gitlab.com/gitlab-com/support/support-team-meta/issues/1775).
