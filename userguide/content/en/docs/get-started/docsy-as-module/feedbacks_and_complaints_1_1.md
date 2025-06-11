---

title: Feedback and Complaints
category: Handling tickets
subcategory: Writing responses and handling feedback
description: "Support Engineering workflow for receiving and responding to customer feedback"
---



### Overview

24 hours after a ticket is mark as solved, a satisfaction survey will be
automatically sent to the customer.

Use the following workflow when a customer submits feedback or complaints
in some other way.

### Workflow

In all cases, tag the ticket with the `feedback` tag. We may build a separate feedback channel, but until then, simply mark the Zendesk tickets for review. Our community team and support managers will work through these.

### Bugs

For feedback and complaints involving bugs, please follow the appropriate [escalation procedure]({{< ref "working-with-issues" >}}) and provide the customer with the created links.

Advise the customer that it is best for them to subscribe to the created issue for updates and participate in it directly moving forward rather than through Zendesk. While all issues are important, our product and infrastructure teams will [prioritize the issues]({{< ref "working-with-issues#issue-prioritization" >}}) as needed, and support will not have much control of that.

### Feature Proposals

For feature proposals, guide the customer on how to create the issues in [GitLab issue tracker](https://gitlab.com/gitlab-org/gitlab/issues). If it is not a bug, it is preferable that the customer create the issue themselves - this is especially true in cases where the app/feature is working as intended.

### Refunds

If a customer requests a refund, please follow the [Handling Refund Requests](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#refunds) workflow.

### Customer Feedback submitted in the ticket, or feedback provided indirectly to a Sales or CSM team member

A customer always has the option to submit feedback about their support
experience via the
[customer feedback form](https://gitlab-com.gitlab.io/support/customer-feedback/).
The link to this form is included in the signature of all outgoing replies from
Support Engineers in Zendesk.

Sometimes a customer may provide feedback via the ticket directly, or they may provide the feedback to their CSM or Sales contact. To ensure
this feedback is captured, please create an issue in the Customer Feedback
project using the
[Indirect Feedback template](https://gitlab.com/gitlab-com/support/feedback/-/issues/new?issuable_template=Indirect%20Feedback)
and copy the feedback into the new issue. The
[SSAT Reviewing Manager](https://gitlab.pagerduty.com/schedules#P9UIIDY)
will be assigned to the issue and they will review the feedback and take
appropriate action.

In the meantime, you should continue to assist the customer with their queries
and address their feedback if appropriate. If you are unsure on how to proceed,
please ask for help in the
[#support_leadership](https://gitlab.slack.com/archives/C01F9S37AKT) Slack channel.

### Venting

There may be cases where a customer will simply be unsatisfied with all available solutions and/or steps taken to solve problems they are facing or have faced. De-escalate the situation the best you can - apologize as necessary, offer solutions or alternatives that may work. Most importantly, in this situation, allow the customer to vent and assure that their feedback is taken very seriously. In some cases, you may want to CC a manager, especially [if you feel threatened or harassed](/handbook/support/engineering/#what-if-i-feel-threatened-or-harassed-while-handling-a-support-request).

It is important to note that apologies should be sincere - this includes not apologizing when not necessary. Phrases like "I'm sorry that you're having trouble..." can sound disingenuous and "script like". Apologies can also be seen as an admission of guilt, which should not happen when a problem is not the fault of GitLab (such as when a feature works as intended but not the way customer wants).

### Product Feedback

There may be cases where a customer will open a ticket to convey feedback on our products. When these tickets come in, post the feedback in the #product (or other appropriate) slack channel as well as a link to the ticket. Let the customer know that the feedback has been passed on to the product team. It may also be useful to ask if they have any other questions or feedback that they would like to convey. Prior to closing the ticket, tag the ticket with the `feedback` tag.

When the feedback is specific to a feature or service, search for an existing issue and [add the feedback]({{< ref "working-with-issues#adding-comments-on-existing-issues" >}}), or open a new issue as outlined in our [Creating issues section]({{<ref "working-with-issues#creating-issues" >}}).

### Responding to feedback

If a customer rates a ticket by submitting a survey then an email will be sent to the support engineer and the Zendesk SSAT manager. The on-call SSAT Manager will then follow [this workflow]({{< ref "how-to-respond-to-feedback" >}}) to process the responses.

If the customer gives feedback or raises concerns within a ticket, please bring it to your manager's attention. It's important that this feedback is reviewed and acted on. For example, there may be a need to get the Account Manager or CSM involved. Typical examples may include feedback on the product, the support process, the technical handling of a ticket or Support team responsiveness.
