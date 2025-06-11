---
title: SFDC Docs
description: Support Operations documentation page for Salesforce
canonical_path: "/handbook/support/readiness/operations/docs/salesforce/"
---

### Sections of a Salesforce Account page

There are many sections to an account page, but the ones most important to us in
Support Ops are detailed here.

#### Account Detail

This section details a good bit of information, but the most important ones to
Support Ops are:

| Field                | API Name              | Why its important                                                                                              |
|----------------------|-----------------------|----------------------------------------------------------------------------------------------------------------|
| Account Name         | Name                  | The account's name, this syncs to the Org's name in Zendesk                                                    |
| Type                 | Type                  | Tells us the type of account. As we don't sync all types of accounts, this is important for syncing to Zendesk |
| Account Owner (Text) | Account_Owner_Calc__c | The Account Manager, we use this when we need assistance with the customer                                     |

#### Territory

This section details a good bit of information, but the most important ones to
Support Ops are:

| Field             | API Name                                   | Why its important                                                             |
|-------------------|--------------------------------------------|-------------------------------------------------------------------------------|
| Sales Segment     | Ultimate_Parent_Sales_Segment_Employees__c | This tells us the sales segmentation of the account, which we sync to Zendesk |
| Account Territory | Account_Territory__c                       | This tells us the account territory, which we use for US Federal syncing      |
| Region            | Region__c                                  | This tells us the region, which we sync to Zendesk                            |

#### GitLab Subscription Information

This section details a good bit of information, but the most important ones to
Support Ops are:

| Field                                  | API Name                           | Why its important                                                        |
|----------------------------------------|------------------------------------|--------------------------------------------------------------------------|
| Next Renewal Date                      | Next_Renewal_Date__c               | We use this to help determine false expired accounts in the Zendesk sync |
| CARR (This Account)                    | CARR_This_Account__c               | The ARR of the account, we sync this to Zendesk                          |
| Number of Licenses Sold (This Account) | Number_of_Licenses_This_Account__c | The number of seats in a license, we sync this to Zendesk                |

#### Customer Success

This section details a good bit of information, but the most important ones to
Support Ops are:

| Field                      | API Name                          | Why its important                                   |
|----------------------------|-----------------------------------|-----------------------------------------------------|
| [GS] Health Score Color    | GS_Health_Score_Color__c          | The Gainsight health score, we sync this to Zendesk |
| Customer Success Manager   | Technical_Account_Manager_Name__c | The CSM, we sync this to Zendesk                    |
| Solutions Architect        | Solutions_Architect_Lookup__r     | The SA, we sync this to US Federal Zendesk          |

#### Contacts

This section contains a list of approved contacts for the Account. These users
are auto-associated in Zendesk.

#### Subscriptions

Here, all subscriptions the account has had are listed. This is important as we
often need to review these to determine if an account's support level is
incorrectly set or not. The most important parts to look at are the start and
end dates.

#### Subscription Product & Charges

This section contains the products tied to subscriptions. Here we can determine
if the support level is accurate or not based on the subscription name and the
effective end date.

### Searching in Salesforce

Go to the any Salesforce page (the main page works, but all pages contain the
search form) and click in the textbox in the top-left of the page. In this box,
type your search term (see
[recommended search methods](#recommended-search-methods) to help here). After
you have entered your search term, hit the enter/return key on your keyboard to
perform the search.

#### Recommended search methods

There is an art to performing a solid search which takes time and practice to
get the hang of. That said, there are some general recommendations that can
help you ensure you get the results you are aiming for:

- When search for an organization, try to use the more unique and specific
  parts of the organization name. Many contain words like `Inc`, `GmbH`, etc.
  Try to omit those and other common word pairs that might muddle your results.
- When searching for a contact, try using the email address or domain of the
  email address. This often will remove common results that are found based on
  common names.

#### Understanding search results

A standard search in Salesforce will search through the following objects:

- Accounts
- Contacts
- Leads
- Opportunities

While there are many other objects you could expand the search to, this is
often not needed and can complicate (and lengthen) the search process. Once you
perform the search, locate the section that corresponds what you were looking
for.

If you are searching for an Account (i.e. Organization), the top section of the
search results is your go-to. In the results, you can see the names of the
found results, as well as the `Type` of Account. Knowing what type of account
you are looking for (i.e prospect vs customer vs partners) will help you in
locating the correct Account to click on for further review.

If you are searching for a Contact (i.e. User), the second section of the
search results is your go-to. In the results, you can see name, email, and
account name. You can use these to help locate the contact you wish to find and
be sure it corresponds to the organization the contact should be a part of.
