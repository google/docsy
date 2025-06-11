---

title: "CSM and Support Interaction"
---







View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

## Objective

Define the process for how the CSM interacts with the systems and processes designed to provide customers with technical support.

## Establishing Customers in Support Systems

During the onboarding process, the CSM will ensure that customers are correctly established in the support system. GitLab manages support requests through a system called [Zendesk](/handbook/support/workflows/zendesk-instances.html). GitLab has [integrated the GitLab instance of Salesforce with Zendesk](/handbook/support/workflows/zendesk_organizations_and_users_overview/) to facilitate the establishment of users in Zendesk. The integration synchronizes account-level data so that the Zendesk ticket has accurate information on the customers’ purchase of products that include support.

Though automation exists, the CSM must still ensure customers take additional steps to fully establish their personnel in Zendesk. Specifically, the CSM must work with the customer to establish specific Zendesk users under the Zendesk Account so that tickets submitted by the customer’s personnel are guided by the GitLab support team’s [Service Level Agreements (SLAs)](https://about.gitlab.com/support/#gitlab-support-service-levels).

To add important static notes that will appear on each new ticket to help the support team with context, review the [support handbook](/handbook/support/internal-support/#i-want-to-add-important-information-about-the-organizationuser) to request this be attached to the customer's Zendesk organization.

### Steps for the CSM to take to add support users

1. Identfiy the sold-to email for that account via SFDC
1. Send an email to the sold-to email to follow the procedures outlined in [Managing Support Contacts](https://about.gitlab.com/support/managing-support-contacts/#managing-contacts)

Users who aren't associated with their organization will not be able to access GitLab Support

## Support Ticket Best Practice

GitLab offers [a variety of support options](https://about.gitlab.com/support/) for all customers and users on both paid and free tiers. The CSM should continually review customer tickets and then educate customers on support best practices. In particular, the CSM should ensure that customers are submitting tickets that meet best practices. Please address the below items with customers for when they [open a support ticket](https://support.gitlab.com/hc/en-us):

1. Provide as much detail as possible during the first submission of the ticket
1. Summary of issue (when did it start, how frequently, impact on organization, etc.)
   - Detailed steps to recreate
   - Current behavior
   - Expected behavior
   - Any recent changes to GitLab, its components, dependencies, or the services it's hosted on?
   - Attach logs and screenshots (avoid attaching .doc or .pdf files). Please see [Handling Sensitive Information With GitLab Support](https://about.gitlab.com/support/sensitive-information/) to ensure you are not sharing sensitive information.
1. If you prefer Support to only answer during your business hours, choose your region; please note if you select a region, the SLA will only be within those business hours. Otherwise, choose "All regions" to get the standard SLAs and responses from our global support team. See our [guidelines](https://about.gitlab.com/support/#effect-on-support-hours-if-a-preferred-region-for-support-is-chosen) for more information.
1. Try and avoid requesting a call during the initial ticket submission. We would like to keep all communication within the ticket and attempt to resolve the issue there before going to a call.
1. If a call is necessary, the support engineer will invite your team to a call via the ticket.
1. If a support engineer requests follow up items, please make sure to respond back with these items. This will help us resolve the issue as quickly as possible.

## Automated linking of customer architecture / [Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/) information in Zendesk tickets

For each customer / org in Zendesk managed by a CSM, we can get a link to the collaboration project included, which then can point to the customers architecture details within existing tickets. This link helps our support team to access customer information from the [Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/) without looking up the URL manually each time.

To enable this [linking from ZD to the corresponding collaboration project](/handbook/support/workflows/looking_up_customer_technical_details/#architecture-diagram-and-customer-success-project) and make the life of the GitLab support team easier, you need to review the [Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/) ID set in Zendesk (visible on the left side).

If the [Customer Collaboration Project](/handbook/customer-success/csm/customer-collaboration-project/) id is not correct, you can open a new issue with our support ops team [here](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/organizations/-/issues/new) and let it get changed by using the following information in your request:

---
**Context/Request**: For an ORG I manage, I would like to request that the AM id gets changed which is used to link to the correct collaboration project from ZD org view.

**Org**: https://gitlab.zendesk.com/agent/organizations/11111111/tickets

**The AM ID should therefore be**: 17735787 and finally point to https://gitlab.com/<collaboration_project_url>

**Ref. of handbook**: https://about.gitlab.com/handbook/support/workflows/looking_up_customer_technical_details/#architecture-diagram-and-customer-success-project

---

Once done and the AM id was updated, the link itself will be visible within ZD in an existing ticket, when you click on "Apps" at the top right within the single ticket view.

## Support Ticket Notifications

When a CSM is assigned to an account in Salesforce, any time that a user from that account submits a support ticket, the CSM will receive an email to let them know, which includes a link to the Zendesk ticket and an [automatically-created](/handbook/support/readiness/operations/docs/zendesk/zendesk_salesforce_sync/) Salesforce case. The email will also include the account name, contact name and email, and the date the ticket was opened. CSMs should receive the email within 1-2 hours of the ticket being opened.

In the email notifying CSMs of new tickets, the included Zendesk ticket link currently leads directly to the ticket. In the past, it has been a .json file which is difficult to read and sometimes doesn't load. If you encounter this, there are a few ways to work around this:

1. Open the Salesforce case link instead. You will be unable to take any action on the ticket, but you will be able to read it.
1. Open the Zendesk ticket link, then edit the URL so it takes you to the ticket itself rather than the .json. For example, https://gitlab.zendesk.com/api/v2/tickets/123456.json is the format of the ticket link in the email, but by deleting `/api/v2` and `.json` and then going to that new link, https://gitlab.zendesk.com/tickets/123456, you will be taken directly to the ticket.
1. Go to [Zendesk](https://gitlab.zendesk.com/agent/) and search for the ticket (by copying the ticket number or searching for the customer).
1. Get the [Redirector Chrome extension](https://chrome.google.com/webstore/detail/redirector/ocgpenflpmgnfapjedencafcfakcekcd?hl=en) or the [Redirector Firefox add-on](https://addons.mozilla.org/en-US/firefox/addon/redirector/) and import the below configuration:

```json
{
    "createdBy": "Redirector v3.5.2",
    "createdAt": "2020-03-11T16:25:30.936Z",
    "redirects": [
        {
            "description": "Redirect zendesk tickets",
            "exampleUrl": "https://gitlab.zendesk.com/api/v2/tickets/12345.json",
            "exampleResult": "https://gitlab.zendesk.com/tickets/12345",
            "error": null,
            "includePattern": "https://gitlab.zendesk.com/api/v2/tickets/([0-9]+).json",
            "excludePattern": "",
            "patternDesc": "",
            "redirectUrl": "https://gitlab.zendesk.com/tickets/$1",
            "patternType": "R",
            "processMatches": "noProcessing",
            "disabled": false,
            "appliesTo": [
                "main_frame"
            ]
        }
    ]
}
```

## Provide Customer Feedback on Support Tickets

Sometimes CSMs receive feedback on a support ticket from a customer via email. This feedback can be positive or negative. You can feed back that information to the support management team by following the instructions under points 3 and 4 in the [Sources of feedback](/handbook/support/workflows/how-to-respond-to-feedback.html#sources-of-feedback) section of the Support Satisfaction (SSAT) workflow documentation. The SSAT Reviewing Manager will pick up and action the feedback.

As described at that link, support already collects feedback via an automatic email survey and a mid-ticket feedback link. It can be helpful to remind customers about these options from time to time. You'll still see the feedback when reviewing a customer's support tickets prior to cadence calls.

## Support Contact Management Projects

CSM guidance on [contact management projects](/handbook/support/readiness/operations/docs/gitlab/contact_management_projects/).

Who has access to a Contact Management Projects?

- Due to their sensitive nature for our customers, only Support Readiness and the customers' chosen users have access to a contact management project.

How do I know if my customer has a contacts management project?

- The best source is to check the organization within Zendesk. It will have a field on the left sidebar toward the bottom called `Contact Management Project ID` that points to the project being used. If that field has a value, the customer has a contact management project.

How do I know which customer users can access the contacts management project?

- The people who can access the contact management project are stored in the `CMP Developers` field on the organization page (right below `Contact Management Project ID`)

How do I know which users can open support tickets?

- Within the customer's organization in Zendesk, there is a `Users` tab that syncs with the contacts management project and will show who has support entitlement.

## Helpful links

- [Official GitLab Support Documentation](https://about.gitlab.com/support/)
- [Support Handbook (SLA + Tiers)](/handbook/support/)
- [GitLab.com Status and Notifications](https://status.gitlab.com/)
- [Customer Onboarding](/handbook/customer-success/csm/onboarding/)
- [Escalation Process](/handbook/customer-success/csm/escalations/)
