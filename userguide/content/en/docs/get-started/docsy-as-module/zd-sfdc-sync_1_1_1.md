---
title: ZD-SFDC Sync
description: Operations documentation page for the Zendesk-Salesforce sync
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/zd-sfdc-sync"
---

{{% alert title="Note" color="danger" %}}

This is an informational page for the Zendesk-Salesforce sync.

If you are looking for information about managing it, please see [Zendesk-Salesforce sync workflow](../../workflows/zendesk/zd-sfdc-sync)

{{% /alert %}}

## What is the Zendesk-Salesforce Sync?

The Zendesk-Salesforce Sync (ZD<>SFDC sync for short) is a set of scripts that
are run via GitLab CI/CD to handle the interaction between Zendesk and
Salesforce. What it does exactly depends on the project itself:

| Name                    | What it does |
|-------------------------|--------------|
| salesforce-cases | Creates and updates Salesforce cases based on Zendesk tickets |
| zd-sfdc-sync-global | Syncs Salesforce account data into Zendesk organizations |
| zd-sfdc-sync-us-federal | Syncs Salesforce account data into Zendesk organizations |
| | Syncs Salesforce contacts data into Zendesk users |

## Zendesk Global organizations sync

This first gathers the data from Salesforce. This is done via the following SOQL (Salesforce Object Query Language) query:

<details>
<summary>SOQL query used</summary>

```sql
SELECT
  Account_ID_18__c,
  Name,
  Type,
  Ultimate_Parent_Sales_Segment_Employees__c,
  Account_Owner_Calc__c,
  Technical_Account_Manager_Name__c,
  GS_Health_Score_Color__c,
  Restricted_Account__c,
  Solutions_Architect_Lookup__r.Name,
  Account_Demographics_Geo__c,
  Latest_Sold_To_Contact__r.Email,
  Latest_Sold_To_Contact__r.Name,
  Partner_Track__c,
  Partners_Partner_Type__c,
  Support_Hold__c,
  Account_Risk_Level__c,
  Support_Instance__c,
  (
    SELECT
      Id,
      Name,
      Zuora__ProductName__c,
      Zuora__EffectiveEndDate__c,
      Zuora__Quantity__c,
      Zuora__TotalContractValue__c,
      Subscription_Status__c
    FROM Zuora__R00N40000001lGjTEAU__r
    WHERE
      Zuora__EffectiveEndDate__c != NULL
  ),
  (
    SELECT
      Name,
      Zuora__SoldToWorkEmail__c
    FROM Zuora__R00N40000001kyLcEAI__r
    WHERE
      IsDeleted = false
    ORDER BY CreatedDate ASC
    LIMIT 1
  )
FROM Account
WHERE
  Type != 'Prospect' AND
  (
    Type IN ('Customer', 'Former Customer') OR
    (
      Type = 'Partner' AND
      Partners_Partner_Status__c IN ('Authorized', 'Former') AND
      Partners_Partner_Type__c IN ('Alliance', 'Channel') AND
      Partner_Track__c IN ('Open', 'Select', 'Technology')
    )
  )
```

</details>

This data is then processed by the script to verify the account's subscriptions (both Customer and Zuora). It also locates the sold-to emails of the subscriptions to later attempt user creation (if it is a new organization in Zendesk).

While doing this, it also locates accounts that are classified as "greatly expired" (meaning they have been expired for 3 or more years). It puts these into a separate object for use later.

From here, it then gathers all the organization data from Zendesk Global. This does very little actual processing of the data, short of ignoring tags that aren't related to the sync itself.

The scripts then compares the data from Salesforce and the data from Zendesk Global. From this comparison, it locates Zendesk Global organizations that need to be updated and ones that need to be created.

The scripts will then begin syncing this information to Zendesk Global, updating organizations that need updating and creating the ones that need creation. For organizations that need to be created, it will also attempt to create contacts for them based off the information of the subscriptions (gathered earlier).

{{% alert title="Note" color="danger" %}}

In the event the contact creation fails (or there is no contact), a message will be posted in the [#support_operations](https://gitlab.enterprise.slack.com/archives/C018ZGZAMPD) slack channel. We act on these to attempt manual association wherever possible.

{{% /alert %}}

## Zendesk US Government organizations sync

This first gathers the data from Salesforce. This is done via the following SOQL (Salesforce Object Query Language) query:

<details>
<summary>SOQL query used</summary>

```sql
SELECT
  Account_ID_18__c,
  Name,
  Ultimate_Parent_Sales_Segment_Employees__c,
  Account_Owner_Calc__c,
  Technical_Account_Manager_Name__c,
  GS_Health_Score_Color__c,
  Restricted_Account__c,
  Solutions_Architect_Lookup__r.Name,
  Support_Hold__c,
  (
    SELECT
      Id,
      Name,
      Zuora__ProductName__c,
      Zuora__EffectiveEndDate__c,
      Zuora__Quantity__c,
      Zuora__TotalContractValue__c,
      Subscription_Status__c
    FROM Zuora__R00N40000001lGjTEAU__r
  )
FROM Account
WHERE
  Id IN
    (
      SELECT
        Zuora__Account__c
      FROM Zuora__SubscriptionProductCharge__c
      WHERE
        Subscription_Status__c = 'Active' AND
        Zuora__EffectiveEndDate__c >= #{(Date.today - 91.days).iso8601} AND
        (
          Name IN (
            '12x5 US Citizen Support - 1 Year',
            '12x5 US Citizen Support - 2 Year',
            '12x5 US Citizen Support - 3 Year',
            '12x5 US Citizen Support - Monthly',
            '24x7 US Citizen Support - 1 Year',
            '24x7 US Citizen Support - 2 Year',
            '24x7 US Citizen Support - 3 Year',
            '24x7 US Citizen Support - Monthly'
          ) OR
          Zuora__Account__r.Support_Instance__c = 'federal-support'
        )
    )
```

</details>

This data is then processed by the script to verify the account's subscriptions (both Customer and Zuora).

From here, it then gathers all the organization data from Zendesk US Government.

The scripts then compares the data from Salesforce and the data from Zendesk US Government. From this comparison, it locates Zendesk US Government organizations that need to be updated and ones that need to be created.

The scripts will then begin syncing this information to Zendesk US Government, updating organizations that need updating and creating the ones that need creation.

## Zendesk US Government users sync

This first gathers the data from Salesforce. This is done via the following SOQL (Salesforce Object Query Language) query:

<details>
<summary>SOQL query used</summary>

```sql
SELECT
  Name,
  Email,
  Account.Account_ID_18__c,
  Account.Name
FROM Contact
WHERE
  Inactive_Contact__c = false AND
  Name != '' AND
  Email != '' AND
  Role__c INCLUDES ('Gitlab Admin') AND
  (
    NOT Email LIKE '%gitlab.com'
  ) AND
  Account.Type IN ('Customer', 'Former Customer') AND
  AccountId IN (
    SELECT
      Zuora__Account__c
    FROM Zuora__SubscriptionProductCharge__c
    WHERE
      Subscription_Status__c = 'Active' AND
      Zuora__EffectiveEndDate__c >= #{(Date.today - 91.days).iso8601} AND
      (
        Name IN (
          '12x5 US Citizen Support - 1 Year',
          '12x5 US Citizen Support - 2 Year',
          '12x5 US Citizen Support - 3 Year',
          '12x5 US Citizen Support - Monthly',
          '24x7 US Citizen Support - 1 Year',
          '24x7 US Citizen Support - 2 Year',
          '24x7 US Citizen Support - 3 Year',
          '24x7 US Citizen Support - Monthly'
        ) OR
        Zuora__Account__r.Support_Instance__c = 'federal-support'
      )
  )
```

</details>

This data is then processed to remove any contacts with duplicate emails or missing data.

From here, it then gathers all the user data from Zendesk US Government.

The scripts then compare the data from Salesforce and the data from Zendesk US Government. From this comparison, it locates Zendesk US Government users that need to be updated and ones that need to be created. It will use the organization data from the
[Zendesk US Government organizations sync](#zendesk-us-government-organizations-sync) to determine the organization ID.

The scripts will then begin syncing this information to Zendesk US Government, updating users that need updating and creating the ones that need creation.

## Zendesk Salesforce cases sync

This is runs at two periods of time:

- whenever a ticket with an organization associated is created
- whenever a ticket with a matching Salesforce case is closed

For when a ticket is created, it will create a Salesforce case based off the Zendesk Global ticket data.

For when a ticket is closed, it will update the corresponding case to indicate it has been closed.
