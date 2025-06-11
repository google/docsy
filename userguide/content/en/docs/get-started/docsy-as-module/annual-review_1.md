---
title: Annual Review
description: Operations workflow for thhe annual review
canonical_path: "/handbook/security/customer-support-operations/workflows/annual-review"
---

Once a year, in December, we review all unused items to determine if they need to be kept around. This is done to keep our systems and repos clean.

## Zendesk

### Articles

If you see archived items older than 6 months, you are good to delete them (this should be done directly in Zendesk).

### Automations

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.

### Macros

We do two levels of review here, one for long-standing deactivated items and one for unused macros.

#### Long-standing deactivated macros

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.

#### Unused macros

This is a bit more involved and takes more time. You will start by generating a list of macros that have no been used in 30 days ([Seeing macro usage information](../docs/zendesk/macros#seeing-macro-usage-information)).

With that list, you will create an issue in the correct tracker:

- For Zendesk Global: [support-team-meta](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/new)
- For Zendesk US Government: [us-government-support-meta](https://gitlab.com/gitlab-com/support/us-government/us-government-support-meta)

The issue should use the following information:

- Title: xxxx
- Description:

  ```plaintext
  ## Annual Unused Macro review

  Greetings Support! We are doing our annual review of our Zendesk instance!

  Part of this is reviewing unused macros. The following macros have not been used in the last 30 days:

  - [x] LIST
  - [x] OF
  - [x] ITEMS

  Please review the above list and **uncheck** thhe box of macros you wish to keep in place. All checked boxes after the due date will be deactivated.

  /due in two weeks

  /assign me

  /label ~"request-for-comments" ~"FY26 OKR::Not Applicable"
  ```

Make sure to replace the list with the list of actual macro names (and that the boxes are checked by default).

After creation, make sure to create a SWIR item for this issue.

After two weeks, take the list of checked boxes and go deactivate those macros ([see Macros workflow](./zendesk/macros/#deactivating-a-macro)).

### Organization Fields

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.

### Ticket Fields

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.

### Ticket Forms

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.

### Triggers

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.

### User Fields

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.

### Views

If you see deactivated items older than 6 months, you are good to delete them. Remember you need to delete them from the repo and from Zendesk itself.
