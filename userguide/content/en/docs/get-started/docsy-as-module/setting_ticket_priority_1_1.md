---

title: Setting ticket priority
category: Zendesk
description: How to set and change priority for a ZenDesk ticket.
---



## Definitions

The [definitions of support impact](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) are in the Statment of Support.

## Setting Ticket Priority

If a customer submits a ticket via the web ticket form, they can choose the starting priority of the ticket - this is based on the `Customer Severity` field you will see in Zendesk. On ticket creation a trigger sets the main `Priority` field (not visible to the customer) to match the `Customer Severity` choice. After ticket creation, changes to `Customer Severity` do not affect the `Priority` field or SLAs.

If a customer emails the emergency contact email address, the ticket will get a `Priority` of 'Urgent'.

Manually setting a ticket's priority in the `Priority` field (not `Customer Priority`) in Zendesk will change the overall ticket [SLA](/handbook/support/workflows/working-on-tickets#understanding-slas), for both the first and next replies. This allows support to prioritize tickets and update the urgency during the life of the ticket (for example the initial request may be 'High' priority and then follow up questions may need 'Low' priority.) Customers don't receive automatic notifications upon priority change.

## Resetting Ticket Priority

There is a Zendesk Macro [`General::Changed priority`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360093631494) that includes language and links that will be helpful if you need to do this.

Note that the amount of time that passes between our last response and the next response from the customer does not impact the priority of the ticket. For example, if the ticket should have High priority based on the [definitions of support impact](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) and the customer only responds to our initial query after a month, the ticket priority should still remain High (assuming the nature of the problem did not change).

### Guidelines and Effects

Changing the priority in a ticket will change the SLA, because different priorities have shorter or longer SLAs. Please refer to the [guidelines and SLA listed in our statement of support](https://about.gitlab.com/support/#standard-support).
