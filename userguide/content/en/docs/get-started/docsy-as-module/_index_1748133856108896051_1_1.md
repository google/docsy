---
title: "Go-To-Market Technical Documentation"
description: "This page is the key GitLab Handbook page for all the technical documentation relating to the main projects and automations that the sales systems has worked on, developed and deployed. It includes a high level business overview as well as technical details revolving around each project's technical lift."
---

## How to use this documentation

The documentation below is organized by feature.  Each section will have links to the appropriate business process page, the relevant inputs and outputs for the feature, as well as references to the specific logic that processes the input and outputs.

---

## ARR

Please see the dedicated [ARR Technical Documentation Page](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/sfdc-booking-metric-fields/)

## Gainsight

Please see the dedicated [Gainsight Technical Documentation Page](/handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-gtm/)

## Xactly

More information to come. If you need a new field brought into Xactly please leverage the `AddFieldToXactlySales` [issue template](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new?issue%5Bmilestone_id%5D=#) in the Sales Systems Project

## Territory Success Planning

**Business Process this supports:** [Territory Success Planning](/handbook/sales/field-operations/sales-operations/)

**Overview:** The goal of TSP is to keep a set of staging fields consistently up to date from a variety of data sources, then at given intervals copy these values to the "Actual" set of fields for general use. This allows for us to constantly receive changes but only apply those changes in a controlled fashion. This also allows us to easily track exceptions. Note: This project was originally referred to as ATAM, which is why the API names of the fields reference that instead of TSP.

**Logic Locations:** [AccountJob.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/AccountJob.cls)

Code Units:

- highestEmpsAndTSPAddress
- ownerTransfer

**Inputs:** DataFox, Zoominfo, Manually Entered Address & Employee Data, Account Parenting Hierarchy

**Outputs:** Here is the outline between two sets of fields we are setting on the Account object. The Staging(TSP / ATAM) fields are set nightly via an APEX job. Actuals are set at given intervals found in the business documentation.

| **Data Name**     | **Actual - Field API Name**                  | **TSP - Field API Name**        |
|---------------|--------------------------------------------|-----------------------------|
| Owner         | Owner                                      | ATAM_Approved_Next_Owner__c |
| Owner Role    | Owner.Role                                 | ATAM_Next_Owner_Role__c     |
| Owner Team    | Account_Owner_Team__c                      | ATAM_Next_Owner_Team__c     |
| Sales Segment | Ultimate_Parent_Sales_Segment_Employees__c | JB_Test_Sales_Segment__c    |
| Territory     | Account_Territory__c                       | ATAM_Territory__c           |

## Landed Addressable Market (LAM)

**Business Process this supports:** [Landed Addressable Market (LAM)](https://internal.gitlab.com/handbook/sales/lam/)

**Overview:** LAM is a measure of how much more expansion or growth we can achieve with the customers we already have. This value is calculated in Salesforce daily based on several inputs.

**Logic Locations:** [AccountJob.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/AccountJob.cls), [AccountJob_SetParentLAMFields.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/AccountJob_SetParentLAMFields.cls)

Code Units:

- AccountJob_SetZuoraSubInfo (all methods)
- AccountJob_SetParentLAMFields (all methods)
- AccountTrigger
- AccountClass.SetLAMOnAccounts

**Inputs:** Zuora, Zoominfo,LinkedIn, Manually Entered Employee Data, Account Parenting Hierarchy,

**Outputs:** Here are the various fields used in the solution, along with how they are set.

The LAM calculation runs in four parts:

1. The AccountJob executes and calculates subscription data for all Accounts.
1. The AccountJob_SetZuoraSubInfo executes and calculates subscription data for each Account.
1. The AccountJob_SetParentLAMValues executes and calculates subscription data across Account hierarchies.
1. The AccountTrigger fires when the Account's LAM calculation changes, and sets the 'LAM__c' field based on logic for each territory and geo.

| **Data Name**       | **Actual - Field API Name**                  | **Data Type** | **Set By** |
|----------------|----------------|----------------|----------------|
| LAM                                 | LAM__c|Currency| AccountTrigger, AccountClass.SetLAMOnAccounts|
| LAM Tier (Industry)                 | LAM_Tier_Industry__c| Formula | SFDC |
| LAM Tier (Dev Count)                | LAM_Tier__c | Formula | SFDC |
| LAM Seat (Industry)                 | LAM_Seat_Industry__c | Formula | SFDC |
| LAM Seat (Dev Count)                | LAM_Seat__c | Formula | SFDC |
| LAM Price (Industry)                | LAM_Price_Industry__c| Formula | SFDC |
| LAM Price (Dev Count)               | LAM_Price__c | Formula | SFDC |
| LAM Max (Industry)                  | LAM_Max_Industry__c| Formula | SFDC |
| LAM Max (Dev Count)                 | LAM_Max__c | Formula | SFDC |
| LAM Dev Count | LAM_Dev_Count__c | Formula | SFDC |
| LAM: Ultimate Annualized Seat Price | LAM_Ultimate_Annualized_Seat_Price__c | Formula | SFDC |
| LAM:Ult. Avg Seat Price, this Account    | LAM_Ult_Avg_Seat_Price_this_Account__c | Formula | SFDC |
| LAM:Starter Avg Seat Price, this Account | LAM_Starter_Avg_Seat_Price_this_Account__c | Formula | SFDC |
| LAM: Starter Annualized Seat Price  | LAM_Starter_Annualized_Seat_Price__c | Formula | SFDC |
| LAM: Prevalent Tier Avg Price, this Acct | LAM_Prevalent_Tier_Avg_Price_this_Acct__c | Formula | SFDC |
| LAM: Prevalent Tier Avg Price, Acct Fam |LAM_Prevalent_Tier_Avg_Price_Acct_Fam__c | Formula | SFDC |
| LAM:Premium Avg Seat Price, this Account |LAM_Premium_Avg_Seat_Price_this_Account__c | Formula | SFDC |
| LAM: Premium Annualized Seat Price  | LAM_Premium_Annualized_Seat_Price__c | Formula | SFDC |
| LAM: Est Dev Percent by Industry    | LAM_Est_Dev_Percent_by_Industry__c | Formula | SFDC |
| LAM: Count of Ultimate Subscriptions| LAM_Count_of_Ultimate_Subscriptions__c | Currency | AccountJob_SetZuoraSubInfo |
| LAM: Count of Ultimate Subs, Acct Family| LAM_Count_of_Ultimate_Subs_Acct_Family__c  | Currency | AccountJob_SetParentLAMFields |
| LAM: Count of Starter Subscriptions | LAM_Count_of_Starter_Subscriptions__c  | Currency | AccountJob_SetZuoraSubInfo |
| LAM: Count of Starter Subs, Acct Family | LAM_Count_of_Starter_Subs_Acct_Family__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Count of Premium Subscriptions | LAM_Count_of_Premium_Subscriptions__c | Currency | AccountJob_SetZuoraSubInfo |
| LAM: Count of Premium Subs, Acct Family  | LAM_Count_of_Premium_Subs_Acct_Family__c | Currency | AccountJob_SetParentLAMFields |
| LAM:Aggregate Annual Ultimate Seat Price | LAM_Aggregate_Annual_Ultimate_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Aggregate Annual Starter Seat Price | LAM_Aggregate_Annual_Starter_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Aggregate Annual Premium Seat Price | LAM_Aggregate_Annual_Premium_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| LAM: Acct Below Land Line            | LAM_Acct_Below_Cut_Line_Form__c | Formula | SFDC |
| CARR (Acct Family)                  | CARR_Acct_Family__c | Formula | SFDC |
| CMRR (Acct Family)                  | CMRR_All_Child_Accounts__c | Currency | AccountJob_SetParentLAMFields |
| Number of Licenses Sold (This Account)    |  Number_of_Licenses_This_Account__c | Number | AccountJob_SetZuoraSubInfo |
| Ultimate license count              | Ultimate_License_Count__c | Number | AccountJob_SetZuoraSubInfo |
| Starter license count               | Starter_License_Count__c | Number | AccountJob_SetZuoraSubInfo |
| Prevalent Tier (Account)            | Prevalent_Tier__c | Formula | SFDC |
| Prevalent Tier (Hierarchy)          | Prevalent_Tier_Hierarchy__c | Formula | SFDC |
| Premium license count               | Premium_License_Count__c | Number | AccountJob_SetZuoraSubInfo |
| Parent LAM: Aggregate Developer Count | Aggregate_Developer_Count__c | Formula | SFDC |
| Estimated Developer Count | Estimated_Developer_Count__c | Formula | SFDC |
| Parent LAM: Sum Ultimate Seat Price | Parent_LAM_Sum_Ultimate_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| Parent LAM: Sum Starter Seat Price  | Parent_LAM_Sum_Starter_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| Parent LAM: Sum Premium Seat Price  | Parent_LAM_Sum_Premium_Seat_Price__c | Currency | AccountJob_SetParentLAMFields |
| Parent LAM: Sum of Num of Licenses  | Parent_LAM_Sum_of_Num_of_Licenses__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Max ZI Number of Developers | Parent_LAM_Max_ZI_Number_of_Developers__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Max Potential Users     | Parent_LAM_Max_Potential_Users__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: LinkedIn Developer Count| Parent_LAM_Max_Decision_Makers_LinkedIn__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Industry (Acct Heirarchy) | Parent_LAM_Industry_Acct_Heirarchy__c | Picklist | AccountJob_SetParentLAMFields |
| Parent LAM: Count of Ultimate Subs  | Parent_LAM_Count_of_Ultimate_Subs__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Count of Starter Subs   | Parent_LAM_Count_of_Starter_Subs__c | Number | AccountJob_SetParentLAMFields |
| Parent LAM: Count of Premium Subs   | Parent_LAM_Count_of_Premium_Subs__c  | Number | AccountJob_SetParentLAMFields |

## Contact Ownership

**Business Process this supports:** This supports our [contact ownership rules](/handbook/sales/field-operations/gtm-resources/)

**Overview:** The goal of the Contact Ownership code is to ensure that contacts are owned by the appropriate user within salesforce in an automated fashion so that contact ownership is maintained without any work needed by team members.

**Logic Locations:** [ContactJob](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/ContactJob.cls)
Code Units:

- maintainContactOwnership

**Inputs:** Contact Owner, Account Owner, Account SDR Assigned, Account Type, Sales Segment

**Outputs:** Contact Owner

## Salesforce SAFE: Record Sharing And Visibility Settings

Please see our internal [document](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.7meftl8rz0pi) for details.

For manual sharing of opportunity record, please refer Field Operations handbook [here](/handbook/sales/field-operations/gtm-resources/#how-to-share-an-opportunity)

## Quote Approval System

**Business Process this supports:** Discount Approvals

**Overview:** According to the [Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit) Quotes must have discounts approved by different management levels depending on discount percentage and term length. To achieve this, we have written automation to stamp a quote with each potential approver, revised the code that determines which approvals are required, and revised the actual approval process in Salesforce.

**Quote Management Stamp** When a Quote is inserted, get the owner of the related Opportunity. Then, find the manager of the owner and the manager of the manager for each manager, five managers down. Record the first active Regional Director, Area Sales Manager, and Vice President on the Quote. These lookup fields will be used in the Approval Process, if needed.

**Quote Approval Code** This is a table of the Quote (API Name: zqu__Quote__c) fields that trigger quoteApprovals to recalculate and what must happen to them.

|**Field API Name**|    **What Must Happen**|
|----|----|
|Rate_Plan_Count__c|Change|
|zqu__Previewed_TCV__c|Change|
|zqu__Previewed_SubTotal__c|Change|
|zqu__Previewed_Discount__c|Change|
|Non_Standard_Contract_Terms__c|Change|
|Reseller_PO_Status__c|Change|
|zqu__PaymentTerm__c|Change|
|zqu__Previewed_Total__c|Change|
|zqu__Previewed_Discount__c|Change|
|Quote_Amendment_Last_Modified_Date__c|Change|
|zqu__InitialTerm__c|Change|
|zqu__RenewalTerm__c|Change|
|X_Trigger_Quote_Approval_Check__c|Become true|

If any of these events happen, all "Required_Approvals" fields (Required_Approvals_From_CEO__c, Required_Approvals_From_CFO__c, Required_Approvals_From_CRO__c, Required_Approvals_From_CS__c, Required_Approvals_From_Legal__c, Required_Approvals_From_VP_of_Channel__c, Required_Approvals_From_VP_of_Sales_RD__c, Required_Approvals_From_RD__c, Required_Approvals_From_ASM__c) are cleared. These are the rich text area fields that show which management levels need to approve the Quote on the page layouts.
Then, all relevant Quote Rate Plan Charges (API Name: zqu__QuoteRatePlanCharge__c) related to the Quote are queried, these are what hold the term, product, and discount information we need to determine what approvals are required. Following the [Deal Approval Matrix](https://docs.google.com/document/d/1-CH-uH_zr0qaVaV1QbmVZ1rF669DsaUeq9w-q1QiKPE/edit), we determine what level of management the Quote Rate Plan Charge needs and stamp the correct "Required_Approvals" fields with the discount percentage, type, and term. Similar logic is then run for any Quote Rate Plan Charges related to Professional Services products.
Finally, the Quote's Approval_Stage__c field records whether it needs approval, doesn't need approval, or has been approved.

**Quote Approval Process**
This utilizes Salesforce's built-in Approval Process functionality.
We have two Approval Processes for Zuora Quotes, the first for undiscounted, and the other for ones with discounts.
The Quote must be submitted using the "Submit for Approval" button on the page layout to enter the correct Approval Process.

- Undiscounted Approval Process
  - If the Quote's Approval Stage is "Approvals Not Required" or null, the Approval Stage is updated to "In Review" and the Owner of the Quote is emailed confirming submission for approval. Then, if there are any Special Terms and Notes or has been flagged as Requires Deal Desk Review, a member of the Deal Desk team must approve. If neither of those are true, the deal auto-approves. Upon approval, the Owner of the Quote is emailed to inform them of the approval and the Approval Stage is updated to "Approved". If the Quote is rejected, the Approval Stage is set to "Rejected" and the Owner is emailed informing them.
- Discounted Approval Process
  - If the Quote's Approval Stage is "Approvals Required" or "Rejected", the Approval Stage is updated to "In Review" and the Owner of the Quote is emailed confirming the submission for approval. Then, based on the "Required_Approvals" fields, the Quote waits for approval by the people in that step. Once all approvals are acquired, the Approval Stage is set to "Approved" and the Owner of the Quote is emailed. If any approval step is rejected, the Approval Stage is set to "Rejected" and the Owner is emailed as well.

**Logic Locations:**

- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
Code Unit:
  - stampManagerStack
- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
Code Unit:
  - quoteApprovals
- [Salesforce Approval Process Setup](https://gitlab.lightning.force.com/lightning/setup/ApprovalProcesses/home)
Manage Approval Process For:
  - Quote (Installed Package: Zuora Quotes)

## Salesforce Chatter to Cases

**Business Process this supports:** The field needs a streamlined process to address their concerns on specific salesforce records [within salesforce](/handbook/sales/field-operations/sales-operations/). This is also used by the finance team to help address record specific billing issues, as well as the Community Advocate team to manage the influx of requests the team receives.

**Overview:** The goal of the Chatter To Cases functionality is to allow a streamlined communication channel that the field can leverage while also providing a streamlined case management system for the supporting team members to manage the requests that are sent to them from the field. If a team member uses an appropriate tag in salesforce a salesforce case record will automatically be created. Once these records are created supporting team members can work through the respective cases that are created to address the needs and concerns of the field team.

**Inputs:** Chatter text within Salesforce

**Outputs:** Salesforce Case Records

**Logic Locations:**
Code Units:

- Triggers
  - [ChatterFeedCommentTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ChatterFeedCommentTrigger.trigger)
  - [ChatterFeedItemTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ChatterFeedItemTrigger.trigger)
- Clases
  - [ChatterFeedCommentClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedCommentClass.cls)
  - [ChatterFeedItemClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedItemClass.cls)
- Tests
  - [ChatterFeedItemTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedItemTest.cls)
  - [ChatterFeedCommentTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ChatterFeedCommentTest.cls)

**Supported Groups**

- `@sales-support`: Used by the Deal Desk team to manage inbound requests from the Sales Team.
- `@billing ops`: Used by the Billing team to manage inbound requests as they pertain to Billing.
- `@revenue`: Used by the Revenue team to review Opportunities and how we will record revenue.[Detailed Response Here](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/859#note_386593491).
- `@SMB Flat Renewals`: Used by our SMB team for flat renewal support. Please see this Section of the handbook for how this is used.
- `@Partner Help Desk`: Used by the Channel Partner Help Desk (PHD) Team. Please see this [Section of the handbook](/handbook/sales/field-operations/channel-operations/#partner-help-desk-support-and-communication) for more information.
- `@Sales-Comp`: Used by our Compensation Team and should be used to reach out to them regarding, splits, compensation etc. as it pertains to specific opportunities.
- `@Partner-Ops`: Used by our Partner Operations team and should be used to reach out to them - Link to their business section coming soon
- `MktgOps-Support`: Used by our Marketing Operations team and should be used to reach out to them - Link to their business section coming soon

**Steps to add a Group:**

- Do to limitations with Salesforce much of the minor updates must be implemented manually in production
- (In Production:Pre Deployment) Create a Chatter Group with the alias that you want the end users to be able to chatter in Salesforce.
- (In Production:Pre Deployment) Add a picklist value to the `Origin` field on the case object
- (Changeset) Update the `ChatterFeedCommentClass` and the `ChatterFeedItemClass` to monitor for the use of the Chatter Group in chatters within Salesforce
- (Changeset) Update the `CaseClass` to include the new groups Id so that it updates the case owner what ownd by this queue.
- (Changeset) Create a Queue that will own the Case until it is automatically switched into a user's name who will work the case.
- (In Production: Post Deployment) Review Queue member and email options with requester

**Related Epic**

- [@Sales-Ops Case Epic](https://gitlab.com/groups/gitlab-com/sales-team/field-operations/-/epics/7)

## Legal Request System

**Business Process this supports** The sales cycle, if a GitLab sales rep encounters an issue that requires legal knowledge, opinion, or action.

**Overview** A sales rep can quickly and easily create a Case for our legal team directly from an Opportunity's page layout in Salesforce. The legal team has access to a Salesforce dashboard to see how many Cases have been created for them, how many are in their name, etc. Clicking the "Legal Request" button on each Opportunity's page will bring the user to a page that asks a few questions that the legal team would like to know. Once the page is submitted, a Case is created with the Origin marked as "Legal Request." The legal team has dashboards that view Cases with Origin equal to "Legal Request" and can assign and take action from there.

**Logic Locations**

- Custom Buttons:
  - [In Setup, under Opportunity, "Buttons, Links, and Actions", Legal Request](https://gitlab.my.salesforce.com/00b4M000001ZNps)
- Visualforce Pages:
  - [LegalCaseCreate.page](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/pages/LegalCaseCreate.page)
- Apex Classes:
  - [LegalCaseCreateController.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LegalCaseCreateController.cls)

## Primary Quote System

**Business Process this supports** The sales cycle and the financial processes around deals.

**Overview** We are now ensuring Opportunities in Salesforce have only one Quote that is marked as Primary. If multiple Quotes are being inserted under an Opportunity marked as primary in the same transaction, only the first in the list will be the primary. If a Quote is being inserted as primary, and there is an existing primary Quote, the existing will become not-primary and the incoming will be the new primary. If more than one Quote under the same Opportunity is being updated to become primary in the same transaction, an error message will prevent the update. A primary quote will not be allowed to be deleted. To change which Quote is primary, simply navigate to the Quote you want to be primary and update it as such, the previous primary Quote will automatically be updated to no longer be primary.

**Logic Locations**

- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
Code Unit:
  - primaryCheck

## Opportunity Stage Progression Tracking

**Business Process this supports** The sales cycle and analytics.

**Overview** The goal of this functionality is to capture the progression of an opportunity through the stages in the sales process.  To support this, a checkbox and date stamp will be automatically populated for each stage as the opportunity advances and or moves back in stage.  The tracking begins at stage 0-Pending Acceptance.  In the event an opportunity advances forward and skips stages, all of the skipped stages will be stamped with the same date as the resting stage. In the event of Closed Lost and Unqualified, the checks and dates will only apply for the stages that were actually met.  To avoid data loss and confusion, the stage progression tracking will only run once, the first time through the stages.

**Logic Locations**

- To be added once functionality is in Production

## Opportunity Validation Rule for Closed Accounting Period

**Business Process this supports**  The Sales Finance & Analytics

**Overview** The goal is to have a static opportunity population in salesforce once the opportunity close date is past accounting close date ( which is 10th day of the month) so it ties to everything that was reported to the Board. And to ensure the bookings data don't change as there are other downstream implications such as Commissions Calculation, Booking Reporting & Adaptive Bookings Data,need to build a mechanism to lock the booking related opportunity fields after green light from Deal Desk & Finance. If there are any minor adjustments ( if needed ) to historical periods we have specific permission sets to make the appropriate changes.

**Logic Locations**

- [Validation Rule](https://gitlab.my.salesforce.com/03d4M000001113V?setupid=OpportunityValidations)

## Block Salesforce From Transferring Historical Opp Owners On Account Owner Transfers

**Business Process this supports:** In order to provide reliable and accurate historical data to the analytics team, the sales organization and to the company as a whole we need to ensure that historical opportunities and relevant information on opportunities is not changed once the opportunity is closed.

**Overview:** The goal of this blocking logic is to close a backdoor that Salesforce has built into the system. While we have a number of validation rules in place to prevent information from changing on closed opportunities it is possible to change historical opportunity owners (as well as fields that are derived from the owner field) while transferring accounts. Anyone who could have been able to change the owner on an account would have been able change historical opportunity data that they would not be able to edit otherwise. This logic still allows users to complete this account ownership transfer without any impact to historical opportunities while also allowing the various business teams at GitLab to manually update the owners of opportunities at month close.

**Inputs:** Account records that are changing ownership

**Outputs:** Reverts opportunity owners to their original owners if the user attempted to change them

**Logic Locations:**

- Code Units:
  - ProtectClosedOppOwnersBefore
  - ProtectClosedOppOwnersAfter
- Triggers
  - [AccountTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/AccountTrigger.trigger)
- Classes
  - [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)
- Tests
  - [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)

## Order Type System

**Business Process this supports:** [New vs Connected New vs Growth](/handbook/sales/sales-term-glossary/)

**Overview:** The goal of the Order Type system is to determine a given Opportunity's relationship with the business. Did it start a new customer relationship, cross into a related segment of the customer, or grow an existing relationship.

**Design Presentation:** [https://docs.google.com/presentation/d/1G95aExDMTT1of6TkVWMPsx1FhNp3sNBl431t5PsKZmE/edit?usp=sharing](https://docs.google.com/presentation/d/1G95aExDMTT1of6TkVWMPsx1FhNp3sNBl431t5PsKZmE/edit?usp=sharing)

**Logic Locations:** [AccountJob.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/blob/master/force-app/main/default/classes/AccountJob.cls)

Code Units:

- determineOpportunityRevenueTypes

**Inputs:** Salesforce Account Hierarchy, Salesforce Opportunity Close Date and Stage.

**Outputs:** Populates the Order Type field on the Opportunity with New - First Order, New - Connected or Growth based on the following logic:

| **Order Type**     | **Description** |
|---------------|--------------------------------------------|
| New - First Order | The First Closed Won Opportunity in an Account Family. |
| New - Connected | The First Closed Won Opportunity on an individual Account, that is not the first one in the Account Family.|
| Growth | All opportunities that follow the `New - First Order` or `New - Connected` opportunities. This includes Add-ons, Renewals, and additional Subscriptions. |

## Lead Segmentation

**Business Process this supports:** [Sales Segmentation](/handbook/sales/field-operations/gtm-resources/)

**Overview:** Leads should be sorted into different Sales Segments based on their company's employee count so the appropriate salesperson can pursue them. We have a number of different information sources to get company size, so we must also establish a hierarchy for them.

| **Info Source** | **Salesforce Lead Field API Name** |
| ---- | ---- |
| Lean Data | Lean_Data_Matched_Account_Sales_Segment__c |
| Web Portal | Web_Portal_Purchase_Company_Size__c |
| Marketing | Employee_Buckets__c |
| DemandBase | DB_Employee_Count__c |
| Zoominfo|    ZI_Employees__c |
| Salesforce User | NumberOfEmployees |

**Logic Locations:** [LeadClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LeadClass.cls)
Code Unit:

- determineSegment

## Force Management / Command of The Message / Command Plan

**Business Process this supports:** [Command of The Message](/handbook/sales/command-of-the-message/)

**Overview:** This Visualforce page and supporting controller provide the sales team with an easy to use button on their opportunities to populate the needed information.

**Logic Locations:**

- [ForceManagement.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ForceManagement.cls)
- [ForceManagement.page](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/pages/ForceManagement.page)

## Linear Attribution

Please see our internal [document](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.80dgbbehbanq) for details.

## Mavenlink

**Business Process this supports:** This supports our professional services team. They leverage Mavenlink projects to coordinate their projects, the hours they spend on each project and their associated tasks, schedules and more.

**Overview:** The following sections of code control the process by which Mavenlink projects in Salesforce are created, which in turn are then pushed over to Mavenlink by leveraging an extension class that was provided by Mavenlink. Currently a Mavenlink Project is created when one of the following scenarios is met

- A primary quote is created, that has a flagged Quote Rate Plan Charge on it (Mavenlink flag), where its associated opportunity is in stage 5 or later and their is not already an existing Mavenlink project for the related Opportunity
- A Opportunity is moved into stage 5 or later, and it's primary quote has a flagged Quote Rate Plan Charge on it (Mavenlink flag) and their is not already an existing Mavenlink project for the related Opportunity
- In the above two cases if there is an associated Mavenlink project the project is updated with the new updated information that has been changed

**Logic Locations:**

- [OpportunityClass.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L176)
- [QuoteRatePlanChargeClass.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/QuoteRatePlanChargeClass.cls#L3)
- [MavenlinkProjectClass.upsertMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/MavenlinkProjectClass.cls)
- [GitlabMavenlinkExtension.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/GitlabMavenlinkExtension.cls)
- [OpportunityClassTests.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClassTests.cls#L227)
- [QuoteRatePlanChargeClassTest.CreateAndMaintainMavenLinkProject](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/QuoteRatePlanChargeClassTest.cls#L3)
- [GitlabMavenlinkExtensionTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/GitlabMavenlinkExtensionTest.cls)

## Opportunity Splits

**Business Process this supports:** This supports the automatic creation validation of our opportunity split that supports our compensation team. This helps ensure that our team members are compensated for the opportunities that they are associated with in an automated fashion

**Overview:**

- **Split Creation and Automation**
- Below we'll see some key points as they pertain to Opportunity splits and below that we attempt to summarize the automation by end user story.
- Split for any Opportunity can only be created by an individual on one of the teams Below. To clarify the current permission does not aim to say who should be creating opportunity splits but rather who can create them based on our current permission set assignments.
      - Compensation Team
      - Deal Desk
      - Sales Ops
      - System Admins
- `Account Executives` / `Opportunity Owner`
  - All of these splits should only ever appear in ``Opportunity - Incremental ACV 2`` split type
  - When the Opportunity Owner is updated, the splits for the Opportunity Owner are updated.
  - If a split is needed for the Owner the split needs to be created manually by an approved user
- `Sales Development Representatives` / `Primary Solutions Architect` / `Channel Manager`: Base split automation rules
  - When the corresponding lookup field on the Opportunity is populated (created or updated) a split for 100% is created for the user in the lookup field and added to the opportunity
  - The population of the above lookup fields follow the same rules and processes as they have before the rollout of this automation
  - If a lookup field is changed from User A to User B then ALL splits for that User Role on the Opportunity are deleted and a split for 100% is assigned to User B
  - If a lookup field is changed from a User to Null/Empty then ALL splits for that User Role on the Opportunity are deleted, and there will be not splits for that Team Role on the Opportunity
  - If a split is needed for any of these roles the split needs to be created manually by an approved user
- `Customer Success Manager` Special Use Cases
  - This is handeled through the CSM Stamping process for some teams and are aligned with the SA Team for other CSM Teams. Splits aren't relevant for Customer Success Managers and Compensation. Please see [CSM Team Stamping](#csm-team-stamping) on this page for more details
- `Channel Manager` Special Use Cases
  - This is handeled through several matrixes that either stamp channel managers on the Opportunity and difffernt opportunity splits depending on a nuber of layers of criteria.
   More detail coming soon to the handbook. Refernce this [Epic](https://gitlab.com/groups/gitlab-com/sales-team/field-operations/-/epics/87) and related Issues in the meantime

**Split Validation**

- `OpportunityClass.checkAndConfirmSplitPercentages`
  - When an Opportunity has its stage changed there is a validation run against the splits on the opportunity. The validation aims to ensure that all splits on the Opportunity when grouped by Role add up to 100%. If the splits do not add up to 100% an error is thrown and the splits must be updated prior to moving the opportunity forward
  - For the purposes of this validation the Team Roles of `Opportunity Owner`, `Account Executive`, `null/Empty` are assumed to be the same role and are summed accordingly.
- Validation Rules
  - For individual end users to avoid having their splits erased - see the general automation notes for more details - a number of validation rules have been created. These validation rule prevent the Opportunity Owner from ever being the same user as either the `Sales Development Representatives`, `Primary Solutions Architect`.
    - `Channel Managers` are not included in this Validation rule because they are not paid until after the close, the validation rule would conflict with existing automations and because it is expected that Channel Managers will never have a split Opportunity.

**Logic Locations:**

- [OpportunityClass.maintainTamTeamLookup](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L315)
- [OpportunityClass.maintainTeamMembersToSplits](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L399)
- [OpportunityClass.checkAndConfirmSplitPercentages](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L337)
- Please also see the [OpportunityClass.singleWonOppSplitOwnerUpdate](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls#L126) where split are also handled but not directly in alignment with the needs for this process

**General Automation Notes**

- Salesforce has a default behavior that when an opportunity is updated, any opportunity split that is owned by the old owner of the opportunity is updated to the new owner of the opportunity. This is irregardless of what type of split it is, if it is split or not. Even if we try to work around this exception with an After trigger the SFDC automation fires after any after triggers we write.

## Refund Opportunity

**Business Process this supports:** [Decommission Opportunity Process](/handbook/sales/field-operations/sales-operations/deal-desk/#creating-decomission-opportunties)

**Overview:**  For this process to function properly there is a button that has been added to the Opportunity layout. This button should only be visible to users who should be working on our bookings (Deal Desk, Finance Users, etc.). This button, when clicked, updated a checkbox on that opportunity to mark it as a refunded opportunity. If the button is clicked for an already refunded Opportunity, the user will be presented with an error informing them that the refund has already been completed.

Selecting this checkbox on an Opportunity causes the Opportuntiy trigger to execute a method which will create a full clone of the existing opportunity.  Additionally, if the owner of the original opportunity is no longer active, the refund opportunity owner is updated to that user's Manager. If that manager is also no longer active, then the refund opportunity is assigned to the user who triggered the process.

The action does change several values on the Opportunity, mostly to update a number of fields to null or override fields are used to negate our bookings numbers. Specific changes include:

The values in the following fields will be carried over and flipped to negative on the refund opportunity (i.e. grab the value from the originating opportunity, and stamp the inverse on the refund opportunity created via button):

- Recurring Amount
- True Up Amount
- ProServ Amount
- Other Non-Recurring Amount

The values in the following fields will be carried over as is from the originating opportunity:

- DR - Partner
- Resale Partner
- DR - Partner Deal Type
- DR - Channel Manager
- Distributor
- Resale Channel Manager

Note: Because this process uses a checkbox field, it is also possible to trigger refunds through a data load or similar mass update.

**Logic Locations:**

- [OpportunityClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls)
Code Unit:
  - CreateRefundOpp
- Create Refund Opportunity Button

## Link Credit Opportunities and Contract Reset Opportunities

**Business Process this supports:** This supports the Deal Desk process of processing Credit Opportunities and Contract Reset Opportunities. See the Sales Order Processing [Handbook Page](/handbook/sales/field-operations/order-processing/#what-quotes-can-deal-desk-assist-me-with)

**Relevant fields**

- Opportunity.Contract_Reset_Opportunity__c
- Opportunity.Total_Net_ARR_Credit__c

**Overview:**

- When an Opportunity meets our entry criteria and it is looking up to another opportunity through the `Contract_Reset_Opportunity__c` field the `Total_Net_ARR_Credit__c` on the related Contract Reset Opportunuty is updated to be the Sum of the Net ARR of any Credit Opportunity that meets our criteria. Some of the changes that may cause this code to run would be:
  - A Credit Opportunity moving from a valid stage to(from) a invalid sage (ex: Closed won to Duplicate)
  - The Net ARR on the credit Opportunity changes (and it is in a valid stage)
  - The lookup field to the Contract Reset Opportunity is inserted, deleted or changed
  - The credit opportunity with a Contract Reset Opportunity populated is inserted, deleted or undeleted

**Logic Locations:**

- OpportunityClass.LinkCreditOppsToContractResetOpps
- OpportunityClassTests.LinkCreditOppsToContractResetOpps

## SQS [ Sales Qualified Source] Override

  **Business Process this supports:** Sales Cycle & Operations  [Tracking Sales Qualified Source in the Opportunity](/handbook/sales/field-operations/gtm-resources/#tracking-sales-qualified-source-in-the-opportunity)

  **Overview:** There are times in which we may need to override Sales Qualified Source. In this event, we have a system that will allow this. This ability is limited to James Harrison and Colleen Farris. To override Sales Qualified Source, enabling user with perform the following steps:

1. Check the Override SQS checkbox
2. Select the updated value in Sales Qualified Source

Once this is complete, a validation rule will prohibit anyone other than the above mentioned users from editing this field. All automation that updates this field includes criteria that excludes them from firing if the Override SQS checkbox is checked.

**Logic Locations:**

- Permission Set : [Edit SQS Override](https://gitlab.my.salesforce.com/0PS4M00000113aW)
- Validation Rule : [Cannot edit overridden SQS](https://gitlab.my.salesforce.com/03d4M000001118T?setupid=OpportunityValidations )

## Maintain Channel Manager

**Business Process this supports:** This automation maintains the correct Channel Manager on Opportunities. This is important for tracking which Channel Manager gets compensated on which Opportunity.

**Overview:**

- Currently the process that stamps Channel Managers on Opportunity records is being updated more details are coming soon

**Logic Locations:**

- Coming soon!

## SA Team Stamping

Please see our internal [document](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.327gn0f9tf3c) for details.

## CSM Team Stamping

**Business Process this supports:** This process supports our CSM Team Tracking Alignment and Compensation. See the business handbook section Coming Soon

**Relevant fields**

- User Object:
  - `[Comp] CSM Team` (`TAM_Team__c`)
- Account Object:
  - `Customer Success Manager` (`Technical_Account_Manager_LU__c`)
- Opportunity Object:
  - `[Comp] CSM Team` (`Comp_TAM_Team__c`)

**Overview:**

- On Opportunity creation and closure the CSM Team of the user in the Customer Success Manager on the Opportunities related account is stamped onto the Opportunity in either of the following cases
  - If the CSM Team of the user in the lookup field is `Scale`
  - If the Order Type on the Opportunity is one of the following: `2. New - Connected`, `3. Growth`, `4. Contraction`, `5. Churn - Partial`, `6. Churn - Final`

**Logic Locations:**

- OpportunityClass.stampTAMTeam
- OpportunityClassTests.stampTAMTeam
- OpportunityTrigger

## GitLab Admin Contact Required

**Business Process this supports:** Digital Journey - In order to deliver the digital journey enablement series to new customers, we need a way to identify contact roles for certain personas in the business to receive the right material.

**Overview:** For the Commercial and Enterprise markets, we will require identifying the GitLab admins at each Account at the time of Opportunity approval submission. When the "Submit for Approval" button is clicked in the Opportunity, logic will run the check criteria (defined below) on if a GitLab Admin is required and if there is currently one defined. Providing a GitLab Admin is defined by having at least one contact on the Account that has `Role` CONTAIN GitLab Admin. Note: This contact can have other roles defined in this field in addition to GitLab Admin.

There will be Salesforce validation checks at stages 4+ to ensure at least one `gitlab admin` has been identified to support the account via Digital Programs. At Stages 4+ and deal close and if the criteria below is met, there are two potential results:

1. There is already a GitLab Admin defined on the Account.
   - Result: The submission continues to the normal screen for advancing stages or  Closed Won Reason requirements for approvals.
1. There is not a GitLab Admin defined on the Account
   - Result: An error screen will display instructing the user to define a GitLab Admin. Once the GitLab Admin is defined, they can re-submit the Opportunity to advance the stage or closed-won for approval.

  **Criteria to enter this logic:**

- `Web Portal Purchase` is Unchecked (false value)
- `Order Type 2.0` is 1. New - First Order OR 2. New - Connected OR 3. Growth OR 4. Contraction

**Logic Locations:**

- Flow: [Opp Approval Field Check 3.0 GitLab Admin Check](https://gitlab.lightning.force.com/lightning/setup/Flows/page?address=%2F3004M000000brYQQAY%3FretUrl%3D%2Flightning%2Fsetup%2FFlows%2Fhome)

## Downgrade Reason Required

Please see our internal [document](https://docs.google.com/document/d/1UaKPTQePAU1RxtGSVb-BujdKiPVoepevrRh8q5bvbBg/edit#heading=h.2mv9t4m7u0jo) for details.

## Next Steps History

**Business Process this supports:** Sales tracks their next steps in the `Next Steps` field. It is important to have a historical log of these "Next Steps" values so that they can be referenced in the future. We have created a system to streamline this process so that sales will only need to update what the true "Next Step" is and the system will log the historical data.

**Overview:** On the Opportunity, when the `Next Steps` field is updated, the previous value of this field will be stamped into the `Next Steps History` field. This will be complete with a timestamp and will keep the previously existing value of `Next Steps History` to keep a full log.

**Criteria to enter this logic:**

- `Next Steps` has been changed/updated OR the Opportunity has just been created.
- `Next Steps` previous value was not a "blank" value.

**Logic Locations:**

- Workflow Rule: [Next Steps History](https://gitlab.my.salesforce.com/01Q4M000000sslN)
- Field Update Action: [Update Next Steps History](https://gitlab.my.salesforce.com/04Y4M000000saO7)

## Integrations

## Integration Users

- An Integration User is a dedicated (not used by any human) full Salesforce license that has a custom Profile, Permission Set, and is used for any third-party integrations, like marketing automation, CTIs, data enrichment tools, and for custom API work.Sales Systems will have dedicated integration user for every integration & connections Integration user credentials shouldn't be cycled without lots of warning and a week lead up.
- Here is a [list](https://gitlab.my.salesforce.com/005?isUserEntityOverride=1&retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DUsers&setupid=ManageUsers&fcf=00B8X000009vjvp) of integration users in Salesforce.
- For any new requests to establish a new integration, please follow up with systems team by creating an [issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) with the use case & pertaining to the integration, an [AR](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) needs to created by the DRI to create a new integration user.
- All the integration users credentials will be stored in `SalesSystems 1Password Vault`

## Tesorio Integration

**Business Process this supports:** Finance Systems Team implements a new Collections Management Tool (Tesorio). Tesorio will be connected to Zuora and get most of the data it needs to manage running process which also requires Tesorio to be integrated with Salesforce to get some additional data on the customer accounts (i.e. account owner).

**Overview:** Tesorio integrates with Salesforce using REST APIs. The integration requires a Connected App to be created within Salesforce. The data import from Salesforce are:

- Accounts - One-way sync of account data into Tesorio. Account data is matched with Customers only if a custom field containing the internal id of the customer record from the ERP system is present.
- Contacts - One-way sync of all contacts into Tesorio. Contacts associated with Accounts are linked with customers automatically. If an account has custom fields which are lookups of contacts, they will also come over as contacts within Tesorio.

**Logic Locations:**

- [Tesorio Client](https://gitlab.my.salesforce.com/_ui/core/application/force/connectedapp/ForceConnectedApplicationPage/d?applicationId=06P4M000000XZXs)

## Automations

### Email Alerts

**Business Process this supports:** Sales Cycle & All Operations

**Overview:** Email alerts are emails generated by an automated process and sent to designated recipients. These actions consist of the standard text and list of recipients for an email. Email alerts are associated with processes, flows, workflow rules & approval processes. Here is the [Email Alert Document](https://docs.google.com/spreadsheets/d/1F_4Cs46wmHAG-HipRT2Ltu0iafhcE1Z-Lhr5U7XQGRU/edit#gid=859280293) which lists all the email alerts with associated automation details, email template details & target audience information that are sent from the Salesforce instance. To request deactivating and/or updating these emails alerts for business reasons please create an [issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) in SalesSystems Board for Systems Team Member to review & make necessary updates.

**Logic Locations:**

- [Email Alerts](https://gitlab.my.salesforce.com/01W?setupid=WorkflowEmails&fcf=00B61000001XPLx)

### Late Renewals Notifications and Closure

**Business Process this supports:** Sales Cycle - [Late Renewal Notification & Auto Close Process](/handbook/sales/sales-renewal-process/#closed-lost-renewal-management)
**Overview:** To keep the Sales Pipeline clean and for a systematic way to notify opportunity owners (and their managers) of renewal opportunities that are at risk of lapsing, automatically close late renewals that fall out of adherence to our [Bookings Policy](/handbook/sales/field-operations/order-processing/#fy22-bookings-policy). This automation triggers for all Open Renewal Opportunities based on Quote Start Date in the opportunity. There is an exception process that is built into this functionality as well. This allows Sales Ops to accept exceptions for this automation that would exptend the window of when an Opportunity is automatically Closed Lost to `90` days after the Opportunity Quote Start Date. This is acchomplished by checking the `Exempt Late Renewal Automation` checkbox on the relevant Opportunity.
This logic is included in the `OpportunityJob` to trigger the action (Field Update) & alert. The recipients who receive these emails are Opportunity Owner, Opportunity Owner's Manager & Renewals Manager. Specific templates have been created to match up with the notifications. The field updates made to the `Admin Poke` field are used to trigger `Troops` to send email alerts to the SAs(Primary Solution Architect).
To request updating these emails alerts/recipients/actions, please create an [issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new) in SalesSystems Board for Systems Team Member to review & make necessary updates.
Here is the config table for the automation logic for reference:

| For Open Renewal Opportunity Only                                 | Email Template ID used  | Logic[Quote Date in Opportunity]  | Field Update      | Email Alerts Sent To                         | Troops Alerts Sent To |
|-------------------------------------------------------|--------------------|-------------------|-------------------------------------------|--------------|-------------|
| First Notification - Email Alert - 15 days prior to Quote Start Date                      | 00X4M00000121nCUAQ | Today = Quote Start Date - 15 Days  | Admin Poke = 15 days prior lapsed renewal alert1 sent                                                                                                                                                                                       | Opportunity owner, RM, opp owner manager | SAs          |
| Second Notification - Email Alert - Day of Quote Start Date                    | 00X4M00000121nFUAQ | Today = Quote Start Date      | Admin Poke = on the day lapsed renewal alert2 sent                                                                                                                                                                                         | Opportunity owner, RM, opp owner manager | SAs          |
| Third Notification - Email Alert -30 days after Quote Start Date                      | 00X4M00000121nDUAQ | Today = Quote Start Date + 30 Days  | Admin Poke = 30 days prior lapsed renewal alert3 sent                                                                                                                                                                                      | Opportunity owner, RM, opp owner manager | SAs          |
| Final Notification - Email Alert + Closed Lost Update -46 days after Quote Start Date | 00X4M00000121nEUAQ | Today = Quote Start Date + 46 Days    | Admin Poke = opp closed lapsed renewal alert4 sent,        Opportunity Stage = Closed Lost,                                 Closed Lost/Unqualified Reason = Other,               Closed Lost/Unqualified Details = Auto closed lapsed renewal | Opportunity owner, RM, opp owner manager | SAs          |

| For Renewal Opportunities with Exceptions Only  | Email Template ID used  | Logic[Quote Date in Opportunity]  | Field Update      | Email Alerts Sent To | Troops Alerts Sent To |
|---|---|---|---|---|---|
| First Notification - Email Alert - 30 days prior to Late Renewal Exception Expiration Date | 00X8X000002aJxm | Today = Late Renewal Exception Expiration Date - 30 Days  | Admin Poke = 30 days before late renewal exception expiration | Opportunity owner, RM, opp owner manager | N/A          |
| Second Notification - Email Alert - 15 days prior to Late Renewal Exception Expiration Date | 00X8X000002aJxr | Today = Late Renewal Exception Expiration Date - 15 | Admin Poke = 15 days before late renewal exception expiration | Opportunity owner, RM, opp owner manager | N/A          |
| Final Notification - Email Alert + Closed Lost Update on Late Renewal Exception Expiration Date  | 00X8X000002aJxw | Today = Late Renewal Exception Expiration Date | Admin Poke = 0 days before late renewal exception expiration, opp closed, Opportunity Stage = Closed Lost, Closed Lost/Unqualified Reason = Other, Closed Lost/Unqualified Details = Auto closed lapsed renewal | Opportunity owner, RM, opp owner manager |  N/A         |

**Logic Locations:**

- [Email Templates](https://gitlab.my.salesforce.com/00X?setupid=CommunicationTemplatesEmail&retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DCommunicationTemplates)
- [OpportunityJob.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityJob.cls)

### Opportunity New Logo Tracking (Comp/Clari)

**Business Process this supports:** This supports the sales compensation and forecasting processes. This process is used to identify Opportunities that should be compensated for a New Logo.
**Overview:** This process maintains the values on two field on the Opportunity Recrod, `Comp_New_Logo_Override__c` and `New_Logo_Override_Clari__c`. As the names suggest the `Comp_New_Logo_Override__c` is a field that feeds into the Compensation process and is leveraged by the compensation team in Xactly and `New_Logo_Override_Clari__c` is a corresponding field that shares similar characteristics as the Comp field but feeds directly into Clari for forecasting needs.
**Related Issues:**

- [New_Logo_Override_Clari__c Issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3138)

**Logic Locations:**

- [OpportunityClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClass.cls)
  - `stampCompNewLogoOverride`
- [OpportunityClassTests.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/OpportunityClassTests.cls)
  - `stampCompNewLogoOverrideEnt`
  - `stampCompNewLogoOverrideEntAPAC`
  - `stampCompNewLogoOverrideCom`
  - `stampCompNewLogoOverrideSMB`
- [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)
  - `reviewAccOppsLamDevChangingComp`
- [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)
  - `reviewAccOppsLamDevChangingCompNewLogo`

### Account Pub Sec Type

**Business Process this supports:** This is the process of how the Pub Sec Type (`PubSec_Type__c`) is determined on an account. This is important in order to determine Public Sector status on the basis of account demogrpahic information instead of ownership.
**Overview:** The criteria that is used to determine if an account is Public Sector or not is based on the inputs listed below. Additionally if the Account needs to be over written to a Pub Sec type that is different from what the job is producing that is possible using the `PubSec_Type_Override__c` field

- `Website`
- `zi_sub_industry__c`
- `Industry`
- `Account_Demographics_UPA_Country__c`

**Related Issues:**

- [Pub Sec Type](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/2663)

**Logic Locations:**

- [AccountJob_SetPubSecType.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountJob_SetPubSecType.cls)
- [AccountJob_SetPubSecTypeTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountJob_SetPubSecTypeTest.cls)
- [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)

  - `setPubSecType`
  - `determinePubSecType`

- [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)

  - `determinePubSecType`

### Set Lead Address on Account on Lead Conversion

**Business Process this supports:** This is a part of the process of how the Billing Address is determined on an Account - by stamping the lead address on the account. The Lead address is one of the layers of the data hierarchy that is used in determining where the account is.
**Overview:** This process catches the lead on a lead conversion and uses the lead address to stamp either a blank lead address field on the account or to populate missing informaiton on the lead address on the account.

- If the Lead address on the account is blank and there is any info in the lead address on the conversion the lead address will be stamped into the lead address fields on the account
- If there is a partial address in the lead address fields on the account when the lead is converted and ALL of the information on the account matches the corressponding info on the lead - any additional new address information will be stamped into the currently blank field on the account. If the overlapping infromation between the account and lead is different then no new information is stamped onto the account even if their is a partial match (Example same state but different Zip Code)

**Related Issues:**

- [Address Waterfall](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3139)

**Logic Locations:**

- [LeadTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/LeadTrigger.trigger)
- [LeadClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LeadClass.cls)
  - `stampConvertedLeadAddressData`
- [LeadClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/LeadClassTest.cls)
  - `stampConvertedLeadAddressDataTest`

### Set Billing Address on Account

**Business Process this supports:** This is the process of how the Billing Address is determined on an Account.
**Overview:** The Billing Address fields on the account is determined through a hierarchy of data that is brought in from several sources. Going through the hierachy (from first to last), if there is any field in the set of fields that has any data in it then it is used to automatically set the Billing Address on the account, otherwise we look at the next set of field. Many of the fields used in the hierarchy are only visibile to admins only to avoid confusion with the field.

**Related Issues:**

- [Address Waterfall](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3139)

**Logic Locations:**

- [AccountTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/AccountTrigger.trigger)
- [AccountClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClass.cls)
  - `SetBillingAddressOnAccounts`
- [AccountClassTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/AccountClassTest.cls)
  - All tests that start with `setBillingAddressOnAccounts_`
  - `validateBillingAddress` (Helper Functions)

### Stamp Segments based on Opportunity Owner

 **Business Process this supports**-  The sales cycle and analytics

**Overview** -

This automation stamps User/Owner Segment  fields (Segment, Geo, Area, Role Type, Region) in the opportunity record every time when an opportunity is created or transferred to a different owner except for  openprise hybrid users.

**Fields that are stamped by automation** -

Stamped Opp Owner User Segment
Stamped Opp Owner User Geo
Stamped Opp Owner User Region
Stamped Opp Owner User Area
Stamped Opp Owner User Role Type

**Logic** -

- When an opportunity is created, the automation stamps the fields depending on user's  profile attributes
- When `Stamped fields edited by OP` is checked, the flow will not run. Preventing the field updates regardless of when an opportunity owner is changed.

**Logic Locations**

[Flow](https://gitlab.lightning.force.com/builder_platform_interaction/flowBuilder.app?flowId=3018X000000oZL0QAM)

### Changes to Net ARR formula logic

 **Business Process this supports**-  Net ARR for renewal opportunities with new business quotes, lookup value from comp table

**Overview** -

Net ARR formula(ARR_Net__c) in opportunity is calculated based on stage 1 Net ARR(Stage_1_XDR_Net_ARR__c) in stage 1 if there is no quote. If the opportunity is a renewal opportunity related to a primary quote of type New Subscription, Net ARR is driven by Primary quote's MRR(zqu__Previewed_Delta_MRR__c from Zuora Quote) * 12) - Opportunity ARR Basis(ARR_Basis__c from Opportunity). For all other use cases, existing logic in Net ARR field prevails

**Fields that are stamped by automation** -

Net_ARR_Automation__c
ARR_Net__c(formula field driven by automation)

**Logic** -

- TF_OpportunityAfterCreateUpdateNetARRAutomation flow is fired when an opportunity is created or updated and has a primary quote of type new subscription. If there is no primary quote of type subscription, stage 1 XDR net arr is stamped to Net arr automation field which in turn will reach the Net arr formula field
- TF_OpportunityAfterUpdate_StampNetARRAutomation fires only on opportunity update and checks whether Stamped_ARR_Basis__c is changed. If so, the flow calculates the net arr automation field(based on primary quote's zqu__Previewed_Delta_MRR__c or stage 1 xdr net arr if there is no primary quote). Right value is stamped to Net arr automation field which in turn will reach the Net arr formula field
- TF_QuoteAfterCreateUpdate_StampNetARRAutomation flow is written from a quote perpective. When a primary quote of type new subscription is created or updated, flow checks whether the opportunity satisfies #4349 and then stamps Net arr automation field which in turn will reach the Net arr formula field
- TF_OpportunityAfterUpdate_SyncStage1NetARR flow fires on opportnity update and populates stage 1 net arr with right net arr formula value
Changes to existing net arr formula field : Two additional layers are added. Layer 1 -> To check if stage 1 xdr net arr drives net arr when no quote is present & opp is in stage 1. Layer 2 -> To check if the opportunity is a renewal opportunity, without net arr override and has a primary quote of type subscription. If so, net arr formula field is driven by net arr automation. For all other scenarios, existing formula logic works

**Logic Locations**
TF_OpportunityAfterCreateUpdateNetARRAutomation flow
TF_OpportunityAfterUpdate_StampNetARRAutomation flow
TF_QuoteAfterCreateUpdate_StampNetARRAutomation flow
TF_OpportunityAfterUpdate_SyncStage1NetARR flow
Net_ARR_Automation__c field in Opportunity
ARR_Net__c field in Opportunity

### Opportunity Product

Please see the dedicated [Opportunity Product](https://internal.gitlab.com/handbook/it-enterprise-applications/documentation/guides/opportunity-product/)
