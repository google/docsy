---

title: "Freemium SaaS Usage Data"
description: "How to view and use usage data from freemium and trial SaaS namespaces in Salesforce."
---







---

## Purpose

Empower our internal team with lightweight Free/Trial usage insights in Salesforce.

### Expected Outcomes

1. **Identification** of freemium accounts for efficient account targeting
1. **Insights** into freemium accounts of their current GitLab usage
1. **Trial visibility** with an understanding of which accounts have an active trial and their usage

### Using the Data

For more information on general Product Usage Statistics, see [Using Product Usage Reporting in Gainsight](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/).

#### Video Overview

For a high level overview (6 minutes), see:

([**SaaS Free Trial Usage Stats in SFDC: Training Video**](https://youtu.be/28_bgDL__BQ) above is Private on GitLab Unfiltered)

#### Field Definitions

Below are the fields, descriptions, and best practices for each field. These can be used to help us understand what the customer is using GitLab for and how we can help them achieve their desired outcomes. For example, high ci pipeline usage indicates we may want to start the conversation around CI, or that they've already accomplished that objective.

| Field Label                            | Description                                                  | Use Case                                                     |
| -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Number of Active Namespace**         | The number of currently active namespaces attached to this Salesforce Account record with active being defined as used in the last 3 months | Helpful to know if there's just one or many actively used namespaces related to this account |
| **Has Trial Experience**               | Is in a trial (Yes) or is SaaS Free (No)                     | Helpful to differentiate between a Trial and a Free SaaS namespace |
| **Activity Level**                     | Denotes the product activity level based on last 3 month of event stats | Strong indicator if the namespace is actively in use, or has been ignored                                                     |
| **Number of Active Stages in Company** | Measures the number of stages being used in the namespace in the last 3 months (e.g., Create, Verify, and Package would be "3") | Helpful at a high level to see if they're active on just a few stages, or exploring and/or finding value from multiple Product stages |
| **Number of Active Users in Company**  | The number of billable users who have logged in and used 1+ stages in the last 3 months | As a rep, how many users are actively using GitLab? What is the difference between Billable (deployed) and Active (logging in and using it)? |
| **Last Updated Date [Usage Data]**     | The date that this dataset was last updated for the Account  | Use this to know how recent the stats are for this Account     |
| **Total Billable Users**               | The number of users under the account that could be billed for | As a rep, how many billable users do they have? This can differ from Active user count. How many licenses would they likely need? |
| **Git Operations Users**               | The number of users running git operations in the last 28 days (SMAU Create) | As a rep, I want to know how many users are active with git operations (SMAU Create) so I can start a conversation around SCM |
| **Merge Requests Users**               | The number of users creating merge requests in the last 28 days | As a rep, I want to know how many users are actively using merge requests so I can have conversations about SCM and version control |
| **CI Pipeline Users**                  | The number of users creating CI pipelines in the last 28 days (SMAU Verify) | As a rep, I want to know how many users are actively ci pipelines (SMAU Verify) so I can have CI conversations with them |
| **CI Builds Count All Time**           | Total number of CI builds for the namespace                  | As a rep, I want to know the cumulative number of CI builds. This helps me understand their history with us. |
| **Secure Scanners Users**              | The number of users who ran any Secure scan in the last 28 days (SMAU Secure) | As a rep, I want to know how many users are actively using deployments |
| **Deployments Users**                  | The number of users who ran deployments in the last 28 days (SMAU Release) | As a rep, I want to know how many users are actively using deployments |
| **List of Namespaces**                 | The list of namespace stats for the top several namespaces attached to this account | Helpful to see the raw stats from the namespace, such as the contact information, high level usage, and if there are multiple namespaces, what are the top ones? |
| **Account Count**                      | No of accounts sharing the same zoominfo company id          | Useful to see how many Salesforce Accounts are tied to the same Zoominfo company                                                             |
| **List of Shared Accounts**            | List of the accounts that is sharing the same company id     |                                                              |

You can view this on the Salesforce Account page, or create a Salesforce report using "Account" as the type.

#### How to read List of Namespaces in Fields

##### `List of Namespaces` Field Breakdown

| Section | Label | Description |
|---|---|---|
| Namespace details | Plan | Tells if the namespace is in Trial or Free plan |
| Namespace details | Duplicate Note | Tells if the namespace is displayed in other accounts as well or just in this account |
| Owner details | SFDC_ID | If the owner is already a salesforce lead or contact, it shows the person salesforce id |
| Owner details | User Name | Their username for GitLab product |
| Metric | Num of billable users | The number of users in the namespace that could be billed for |
| Metric | Num of active users | The number of billable users in the namespace who have logged in and used 1+ stages in the last 3 months |
| Metric | Num of stages | Measures the number of stages being used in the namespace in the last 3 months (e.g., Create, Verify, and Package would be "3") |
| Metric | Impacted by storage limit | Is the namespace used more than 5GB in storage |
| Metric | Impacted by visibility | The namespace currently has a public project and enjoys certain ultimate features for free. They will lose these free paid features unless they upgrade or upload open source license |
| Metric | Merge_Requests_User_L28D | The number of namespace users creating merge requests in the last 28 days |
| Metric | CI_Pipelines_User_L28D | The number of namespace users creating CI pipelines in the last 28 days (SMAU Verify) |
| Metric | CI_Builds_Count_All_Time | Total number of CI builds for the namespace |
| Metric | CI_Builds_secure_scanners_user_L28D | The number of namespace users who ran any Secure scan in the last 28 days (SMAU Secure) |
| Metric | Deployments_user_L28D | The number of namespace  users who ran deployments in the last 28 days (SMAU Release) |

### About the Data

1. **SaaS only**. This does not include self-managed
1. **Updated weekly**. The data sync to Salesforce will happen once per week
1. [**Accuracy of Namespaces deck**](https://docs.google.com/presentation/d/1CctNjyyoiKTY9Ag0nBWqZGpetQ76VRhRjQrsm4DWWTw/edit#slide=id.gcf1e8c1d1f_7_180)

### FAQs

1. How many namespaces are displayed in List of namespaces field: <br>
With June 7th update, we display upto 10 namespaces for each account

2. What is the priority for displaying namespaces:<br>
Priority 1: Active Trial namespaces<br>
Priority 2: Namespaces with 6+ billable users <br>
Priority 3: Owners with business or EDU email domain<br>
Priority 4: Number of billable members in the namespace<br>
Priority 5: Number of stages used by namespace user in the last 3 months <br>
Priority 6: Number of active users in the namespace using 1+ stages in the last 3 months<br>

### Additional Resources

1. [List of all Free/Trial Accounts in SFDC](https://gitlab.my.salesforce.com/00O8X000008QZom)
1. [SaaS Free/Trial Usage Data Dashboard](https://gitlab.my.salesforce.com/01Z8X000001DgIu)
1. [Personalized Report for Account Owners](https://gitlab.my.salesforce.com/00O8X000008Qa7o) - This report will allow you to see a complete list of your assigned accounts which have Freemium SaaS usage, using an automated filter which should work for most Salesforce users. Please review and edit the date range if the report is lacking data.
1. [Personalized Report for Account Owners](https://gitlab.my.salesforce.com/00O8X000008QaTa) - You can use this report if the one above does not populate for your user profile.  This report will allow you to see a complete list of your assigned accounts which have Freemium SaaS usage by manually inserting your name into the `Account Owner` filter. Please review and edit the date range if the report is lacking data.

### Providing feedback

Please add your questions, data quality concerns, and general feedback on [this issue](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/1031). This is needed for us to continue to improve the SaaS Free/Trial experience!
