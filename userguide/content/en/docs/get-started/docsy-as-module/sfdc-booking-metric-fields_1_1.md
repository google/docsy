---

title: "Booking Metric Technical Documentation"
---







## How to use this documentation

Below is a Data Dictionary and Technical Documentation for our ARR Booking Metrics fields put into place for FY22.

---

## Field Data Dictionary

### ARR fields

| **Field**     | **Definition**                                | **SFDC API**     | **Replaces**    |
|-----------|-------------------------------------------|--------------|-------------|
| Net ARR   | The net change to ARR of an opportunity   | ARR_Net__c   | iACV        |
| ARR Basis | Current Subscription ARR (Renewals Only)  | ARR_Basis__c | Renewal ACV |
| Booked ARR | Total ARR of Deal (Net ARR + ARR Basis)  | ARR__c | ACV |

### Amount and Time fields

| **Field**                      | **Definition**                                              | **SFDC API**                      |
|----------------------------|---------------------------------------------------------|-------------------------------|
| Amount                     | The total dollars charged on the Opp (All Kinds)        | Amount                        |
| Recurring Amount           | All Recurring dollars (GitLab Seats, Storage)           | Recurring_Amount__c           |
| True Up Amount             | All One-time True Up dollars                            | True_Up_Amount__c            |
| Pro Serv Amount            | All Professional Services Dollars                       | ProServ_Amount__c             |
| Other Non-Recurring Amount | All other one-time fee products (Additional compute minutes) | Other_Non_Recurring_Amount__c |
| Subscription Start Date    | The Start Date of the period for the opportunity        | Start_Date__c                 |
| Subscription End Date      | The End Date of the period for the opportunity          | End_Date__c                   |

## Technical Documentation

### Booking Metrics Fields From Quote

Business Process this supports: [ARR](/handbook/sales/sales-term-glossary/arr-in-practice/)

Overview: The goal of this code is populate the Bookings Metrics field on the Opportunity based on data from the Zuora Quote family of objects. If Zuora data is not present then use an estimated Net ARR amount until the deal is quoted. Here is where an Opp will get it's metric data:

| Opportunity Status          | Net ARR Source                          |
|-----------------------------|-----------------------------------------|
| Sales Assisted - Quoted     | Zuora Quote Data                        |
| Sales Assisted - Not Quoted | Estimated Net ARR                       |
| Web Directs (Current)       | Estimated Net ARR -> EOM Manual Process |
| [Web Directs (Future)](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/911)        | Zuora Quote Data                        |

Inputs: Zuora Quote Data, Opportunity Term and Amount (If manually morecasted without a quote)

Outputs: Populated Net ARR, Amount, Recurring Amount, True Up Amount, ProServ Amount, Other Non-recurring Amounts and Date fields on the related Opportunity.

Logic Locations:

- [ZuoraQuoteClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls)
- [ZuoraQuoteTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ZuoraQuoteTrigger.trigger)

Code Units:

- [stampOpp](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteClass.cls#L115)

Tests:

- [ZuoraQuoteTest.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraQuoteTest.cls)

### ARR Basis from related Subscription for Renewals

Business Process this supports: [ARR](/handbook/sales/sales-term-glossary/arr-in-practice/)

Overview: We receive Zuora Subscription data via the stock Zuora 360 Sync. We then use this data to create renewals, tieing renewals to their related subscription, or if the Subscription receives a change in ARR, update the related Renewal with that ARR in its basis. The end result is that all of our subscriptions should have a renewal opportunity, and that opportunity's renewal basis is equal to the subscriptions current ARR (until the opp closes).

Because Zuora Subscriptions in Salesforce do not persist when their version increments, we have created a "wrapper" objected called the Customer Subscription that allows the concept of a subscription to persist through changes.

Inputs: Zuora Subscription Data from Zuora 360 sync.

Outputs: Renewal Opportunities, up to date ARR Basis on Renewal Opportunities.

Logic Locations:

- [ZuoraSubscriptionClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraSubscriptionClass.cls)
- [ZuoraSubscrioptionTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/ZuoraSubscriptionTrigger.trigger)
- [CustomerSubscriptionClass.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/CustomerSubscriptionClass.cls)
- [CustomerSubscriptionTrigger.trigger](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/triggers/CustomerSubscription.trigger-meta.xml)

Code Units:

- [CustomerSubscriptionClass.createRenewalOpportunity](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/CustomerSubscriptionClass.cls#L2)
- [ZuoraSubscriptionClass.createOrUpdateCustomerSubscription](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraSubscriptionClass.cls#L2)

Tests:

- [ZuoraSubscriptionClassTests.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/ZuoraSubscriptionClassTest.cls)
- [CustomerSubscriptionClassTests.cls](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/force-app/main/default/classes/CustomerSubscriptionClassTests.cls)
