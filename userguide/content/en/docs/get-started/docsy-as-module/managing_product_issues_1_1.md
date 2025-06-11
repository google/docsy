---

title: Managing Product Issues
description: "The collaborative process between Support and Fulfillment for managing product issues"
category: General
---

The Fulfillment Product Team and the L&R Support Team work closely together to
identify, understand and prioritize issues in the Fulfillment-related parts of
our product.

### Reporting a product problem

When you encounter a product problem while working on a Zendesk ticket, use
this workflow.

1. Search [Fulfillment Meta](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues)
   and [GitLab.org Fulfillment Section](https://gitlab.com/gitlab-org/gitlab/-/issues/?state=opened&label_name%5B%5D=section%3A%3Afulfillment)
   for an issue that matches the problem. Search also the parent groups of
   those projects for a matching epic.
1. If there is an existing issue or epic, then add a link to it in the ticket
   and include in the issue or epic any relevant information which will help
   with prioritization
1. Otherwise:
   1. For a new bug, open an issue in the relevant project using the
      appropriate one of the following templates:
      1. [customers.gitlab.com (including /Admin) issues](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/new?issue&issuable_template=Bug)
      1. [GitLab product issues](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issue&issuable_template=Bug)
   1. For a new feature or tooling request, open an issue using the
      [Fulfillment meta intake request](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/new?issue&issuable_template=intake)
      template. A Fulfillment PM will review the request and move it to the
      relevant team and trackers if they accept it.
1. Add the appropriate labels and priority indicators to the issue or epic:
    1. If you feel confident that you can appropriately calculate a
       [Support Priority Score](#support-priority-score) for the issue or epic,
       do that and add `Support Priority::Scored` to the issue. Otherwise,
       add `Support Priority::Categorize` to indicate that GitLab Support wants
       to see this addressed.
    1. Add `Support Priority` to ensure inclusion of issues and epics on various product boards
       and reports that are not priority-based.
    1. If it is impacting a customer's ability to use the GitLab licensing
       functionality successfully, then add `Customer::Impact` and `UX`

- For general guidance on adding comments and required labels for issues, please
  see the [Working with issues workflow]({{< ref "working-with-issues#adding-comments-on-existing-issues" >}})
- Fulfillment Product Management will decide the appropriate section and PM to
  which to assign each new issue
- If you believe a high priority issue is not being addressed quickly enough,
  then please contact any of the L&R Support [Regional DRIs](/handbook/support/license-and-renewals/#support-management-contacts)

### Support's issue list for Fulfillment

The Support and Fulfillment teams use a combination of one epic board and two
issue boards to prioritize and manage the issues and epics of interest to
Support. Collectively, these can be thought of as `Support's Issue List for
Fulfillment`.

The list is the single source of truth for describing the product issues
that are of concern to L&R Support. For updates and discussions about
Fulfillment's actions related to the issues and epics, see the monthly
[Fulfillment Support Priority Monthly Review issue](https://gitlab.com/gitlab-com/Product/-/issues/?state=all&label_name%5B%5D=Fulfillment%20Support%20Priority%20Review),
which is created from this
[template](https://gitlab.com/gitlab-com/Product/-/tree/main/.gitlab/issue_templates/Fulfillment-Support-Priority-Monthly-Review.md).

#### Accessing the list

The issue and epic boards that comprise the list are available to all GitLab
Team Members. They are:

- GitLab.org: [Support Priority epic board](https://gitlab.com/groups/gitlab-org/-/epic_boards/39981?label_name[]=Support%20Priority&label_name[]=devops%3A%3Afulfillment)
- GitLab.org: [Fulfillment Support Priority issue board](https://gitlab.com/groups/gitlab-org/-/boards/2543339?label_name%5B%5D=section::fulfillment)
- fulfillment-meta: [Fulfillment Support Priority issue board](https://gitlab.com/gitlab-org/fulfillment-meta/-/boards/5530967?label_name[]=Support%20Priority)

#### List contents

Each board in the list presents issues or epics that have one of the
`Support Priority::X` scoped labels attached, and organizes them into lists by
support priority number.

Within each list on a board, Fulfillment PMs and EMs will sort the cards to
indicate further prioritization.

##### `Support Priority::1` - The Top 10 List

At any given time there should be no more than 10 issues and epics labeled
`Support Priority::1`. Together, those items are known as the `Top 10 List`.
They are the items that L&R Support has decided are the most important
product issues for the Fulfillment Team to address.

##### `Support Priority::2` - The Next 10 List

At any given time there should be no more than 10 issues and epics labeled
`Support Priority::2`. Together, those items are known as the `Next 10 List`.
They are the items that fell just short of getting selected for the
Top 10. L&R Support would like Fulfillment to select items to work from this
list if not all resources are devoted to the Top 10.

##### `Support Priority::3` and `Support Priority::4` - All the Rest

Issues and epics set to priorities three and four are still of interest to L&R
Support, but the expectation is that they will be addressed last.

#### Review for possible reprioritization

Anyone who wants to request that any issue or epic in the list be reviewed for
possible reprioritization should:

1. Apply the `Support Priority::Review` label
1. Add a comment to the issue or epic outlining how they think it should be
   prioritized and their reasoning

#### Primary contributors

- Product Managers:
  - indicate product group ownership and product DRI assignment
  - provide progress state updates
  - select items to be worked

- Engineering Managers
  - provide progress state updates
- L&R Support [Regional DRIs](/handbook/support/license-and-renewals/#support-management-contacts)
  - facilitate the monthly review of items labeled
    `Support Priority::Categorize` or `Support Prioritize::Review`
  - set the priority of each item based on the
    [Support Priority Score](#support-priority-score)
  - ask and answer questions
- L&R SEs
  - create the [Support Priority Score](#support-priority-score) for each new
    or under-review item
  - record the Support Priority Score for each item in its description

#### Prioritizing Support's issue list for Fulfillment

On a monthly basis, aligned with the product release cycle, L&R Support will
determine what changes, if any, are needed in the list. At this time the
[Regional DRIs](/handbook/support/license-and-renewals/#support-management-contacts) will:

1. Request that L&R Support Engineers set a Support Priority Score for each
   issue and epic labeled `Support Priority::Categorize` by creating a new
   issue from the [Monthly Prioritization](https://gitlab.com/gitlab-com/support/licensing-subscription/fulfillment-requests/-/issues/new?issuable_template=monthly_prioritization)
   template
1. Open a discussion with the L&R SEs about any issues or epics labeled
   `Support Priority::Review`, and change the score for those accordingly
1. Discuss with the Fulfillment Product Management Team any expected changes
   to the Top 10 list based on the new scores

By agreement with the Fulfillment Product Management Team, Support will keep
the Top 10 list as stable as possible, making changes only when:

- a Top 10 item was fixed or otherwise closed within the last month
- an item of exceptionally high importance arises and must be added to the
  Top 10, in which case another item will be displaced
- Fulfillment and Support agree that priorities within the Top 10 should be
  changed to represent customer or Support needs more accurately

#### Support Priority Score

L&R Support wants it to be fairly easy for anyone in L&R to decide the most
appropriate priority for any issue or epic on the list. And, we want to have a
framework for those decisions that will allow us to be reasonably consistent
and fact-based. For those reasons, we have defined a set of factors to be
considered when prioritizing, and we have created a simple calculator to
combine "scores" from each factor into a single number, which we call the
`Support Priority Score`.

##### Factors

1. Is there a **sustainable workaround**?
   - *e.g.* anything requiring Mechanizer or Console Access is NOT sustainable
1. Customer Impact: **Frequency** (daily, weekly, monthly, ...)
1. Customer and Support Impact: Volume (**count**) of related support tickets
1. Support Impact: **Effort** per ticket to resolve
1. Support Impact: Level of **risk** posed by the ticket **resolution**
1. Support Impact: Level of **disruption** - frequency of STARs and emergencies
   on related tickets
1. Expected Benefit of Product Solution: **Ticket prevention**
1. Expected Benefit of Product Solution: **Ticket TTR decrease**
   - lower expected effort, easier to diagnose, etc.
1. Expected Benefit of Product Solution: **Higher Usabilty, SSAT**
1. Expected Benefit of Product Solution: **Increase sales**
   - fewer lost sales (*e.g.* user can't purchase subscription due to lack of
     credit card security, so either stays a free user or switches to another
     platform)
1. Expected Benefit of Product Solution: Better **product availability** due to
   valid subscription (happier customer)

All of the factors must be considered in order to paint the full picture of the
importance of a given issue or epic. Even so, consider them as general
guidelines that leave us room to make decisions without having to gather hard
data for every one of them. In other words, we will exercise our best judgment
using the information at hand.

##### Calculator

The calculator is a simple
[spreadsheet](https://docs.google.com/spreadsheets/d/1pjntNPQ_7F8ZTWvGxl8w4msMDg2tYTIMQqGP-5O2WUY/edit#gid=581132234).
You'll find the instructions on the right. Just fill in the value for each
factor, and the Priority Score is automatically calculated. In addition,
below the score is an automatically generated bit of markdown that you may
copy in order to paste at the end of the issue's or epic's description field.

So why have a calculator if we're being subjective rather than objective? The
calculator reminds us of the factors we want to consider and gives us a
standard way to combine all of them consistently.

#### What to do if an epic and one or more of its issues are both on the list?

<!-- See https://gitlab.com/gitlab-com/support/licensing-subscription/fulfillment-requests/-/issues/10 -->
We want to be clear about whether Support's interest is in the full Epic or in
only one or more of the child issues and epics. The process will vary a little
between these two situations.

##### Situation 1

Support wants to see the entire epic addressed and resolved. Seeing the
individual child epics and issues in our list is not useful here. Only progress
on the epic matters. In this situation, we will:

1. Relabel all child epics and issues that currently have a
   `~Support Priority::1-4` label with the label, `~Support Priority::See Epic`
   (*Note: this will result in the relabeled items no longer being visible on
   our epic/issue boards*)
1. Ensure that the epic has the appropriate Support Priority set

In this way we will show and track only the epic in the list. In the event that
one or more children of interest to us are removed from the epic, we should at
that time add those children back to the list by re-prioritizing them. We can
detect this type of event by looking for items that have the
`~Support Priority::See Epic` label but do not have an associated epic.

### Situation 2

The epic is not the item of interest to us. Rather, one or more (but not all)
of the children are. In this situation, we will:

1. Remove the Support Priority label from the epic (which removes the epic from
   the list)
1. Retain the Support Priority labels on the children and keep them on the list

### How to get help from the Fulfillment Section development team

If you require technical assistance from any Fulfillment Development Section Sub Group for issues that are not bugs or feature requests, then you can use GitLab.com to create an issue and request help. The workflow for this process is documented in the following handbook section [How to Use GitLab.com to Formally Request Help from the GitLab Development Team](/handbook/support/workflows/how-to-get-help#how-to-use-gitlabcom-to-formally-request-help-from-the-gitlab-development-team).
