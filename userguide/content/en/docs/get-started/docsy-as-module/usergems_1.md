---
title: "UserGems"
description: "UserGems is a job changes tracking tool which captures and combines signals to help our teams identify the best buyers, have compelling reasons to reach out, and act on those insights with automation"
---

### Ways to access UserGems data

UserGems data lives inside SFDC, all users are able to visualize it on the lead and contact objects as well as on the custom UserGems object. To view the UserGems Leads go to the App Launcher in Salesforce Ligthning and select UserGems. Once there, you'll be able to reference List Views for All UserGems / My UserGems.

You can know if a lead is created by UserGems by referencing it's Initial Source. UserGems creates leads with two slighly different initial sources based on the two ways of tracking: **Contact Tracking / Target Account Tracking**.

The two initial sources you'll see on UserGems created leads are the following:

- **UserGems Contact Tracking**
- **UserGems - New Hires & Promotions**

### UserGems Contact Tracking

UserGems helps GitLab track up to 50K matched contacts from different, carefully selected cohorts, as follows:

- [CW Opp Associated Contacts (Large)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006Rs2T2AS/view);
- [CW Opp Associated Contacts (Mid-Market)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006Rs8v2AC/view);
- [CW Opp Associated Contacts (PubSec)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsC92AK/view);
- [CW Opp Contacts (SMB, by Titles)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006ZDi62AG/view);
- [Contacts associated with Open Opp (Large)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsFN2A0/view);
- [Contacts associated with Open Opp (Mid-Market)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsGz2AK/view);
- [Contacts associated with Open Opp (PubSec)](https://gitlab.lightning.force.com/lightning/r/Report/00OPL000006RsLp2AK/view).

### UserGems Target Account Tracking

In a separate motion to the contact tracking, UserGems also helps GitLab identify **New Hires & Promotions** into our target accounts.

The current list of target accounts UserGems is tracking for GitLab can be viewed using this [Salesforce Report](https://gitlab.lightning.force.com/lightning/r/Report/00OPL0000044fjp/view).

### What happens when UserGems detects a job change?

When job changes (or new hires/promotions into the target accounts) are detected for the contact cohorts tracked above, UserGems will:

- create a net new lead with the recent account/company info;
- mark the existing contact as No Longer at Company using the **UG - No Longer at Company** checkbox field;
- update the status to **Disqualified**
- set the **Disqualified Reasons** to **No Longer at Company**.

### UserGems Contact Tracking New Lead Creation Frequency

UserGems splits the 50K contacts tracked into two tier buckets:

- **Tier 1 Contacts (1,000 contact records)** from the top cohort (CW Opp Associated Contacts withing Large Segment) - The job changes for these contacts are tracked and if detected, net new leads are created in our SFDC on a *weekly* basis on Tuesdays.
- **Tier 2 Contacts (49,000 contact records)** from the remaining contact records listed in the UserGems Contact Tracking section. The job changes for these contacts are tracked and, if detected, net new leads are created in our SFDC on a *monthly* basis on Tuesdays.

### UserGems Available Fields

Either through reporting or on the lead/contact/UserGems objects, you'll be able to reference a few fields that will be populated by UserGems. Some of the most important ones are:

- *[UG] Company Country*; - As the field name says, this represents the current company country;
- *[UG] Person Country*; - As the field name says, this represents the current person country;
- *[UG] Company State*; - As the field name says, this represents the current company state;
- *[UG] Person State*; - As the field name says, this represents the current person state;
- *[UG] Person LinkedIn URL*; - This is the current LinkedIn URL of the individual;
- *[UG] - Is Target Company*; - This checkbox will be checked if the account is found in the list of target accounts tracked by UG;
- *[UG] - No Longer At Company*; - This checkbox will be checked on the contact object if UserGems identifies a job change for the respective contact;
- *UG - Is Customer Company*; - This checkbox will be checked if the account is found on the list of customer accounts shared with UG;
- *UG - Job Started Date*; - This field will be updated on the lead record and will contain the job started date;
- *UG - Past Account*; - This field will be updated on the net new leads created by UG and will link to the account found on the associated contact;
- *UG - Past Contact*; - This field will be updated on the net new leads created by UG and will link to the previous contact for which the job change was identified;
- *UG - Past Title*; - This field will be updated on the net new leads created by UG with the title the contact had prior to the job change;

### UserGems Meeting Assistant

UserGems Meeting Assistant is a separate stand alone feature of UG that syncs to SDRs/BDRs Google Calendars and captures & enriches the third party contact data present in their meetings. If this contact data meets all necessary criteria, it is added as a contact in our SFDC instance.

The necessary criteria that needs to be met for a contact to be created in SFDC is the following:

- associated account/company exists in our SFDC environment;
- associated account/company matches our set personna;
- contact has a linkedin profile;
- contact's email domain does not match the "free email providers";

Separetely, if an open opportunity also exists for the contact's company, the contact will also be added as a contact role to that open opportunity.

We're starting to leverage Meeting Assistant as a pilot for a group of 6 reps on the 12th of December. With the plan to do a full roll-out to the whole Sales Development org in mid to late January 2025.

The tool is only processing the data of third-parties and data subject rights do not impute from that third-party contact to the Team Member. Even in the case where a team member uses a work calendar to schedule a meeting with friends, that contact will be omitted due to a personal domain exclusion.

### Lead Routing & Notifications

Traction Complete will be used to route the leads created by UserGems as well as for notifying the BDRs/SDRs/AEs using either email or slack or both. The notification will run weekly (on Wednesdays) a day after UserGems data syncs to Salesforce (Tuesdays). We are using scheduled flow to trigger the notifications:

- 1 A/B/C/D Notifications will trigger when: `LeadSource = 'UserGems Contact Tracking' AND CreatedDate = YESTERDAY`
- 3 A/B Notifications will trigger when: `UserGem__NoLongerAtCompany__c =true AND Status = 'Disqualified' AND Unqualified_Reasons__c = 'No Longer At Company' AND Unqualified_DateTime__c = YESTERDAY`

Do keep in mind that the notifications will be turned off for the retro-active leads due to the high volume of these leads, notifications will be turned back on after the first initial batch is completed.

UserGems leads will be marked as high priority with a high priority reason of `UserGems Lead`, which allows leads to be assigned at creation. Leads that are SMB and have no BDR assigned on a matched account will round robin to SDRs, while the remaining will be assigned to BDRs.

| Notifications                                                                                                                                | Related Object | Recipients | Filter                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1A. Tracked Contacts that joined a new business, no open opps (less than 3 months)                                                           | Lead           | BDR/SDR    | Source = UserGems Contact Tracking<br>Count of Open Opps = 0<br>UG - Started Within the Last 3 month = Yes                                                                                                               |
| 1B. Tracked Contacts that joined a new business, no open opps (more than 3 months)                                                           | Lead           | BDR/SDR    | Source = UserGems Contact Tracking<br>Count of Open Opps = 0<br>UG - Started Within the Last 3 month = No                                                                                                              |
| 1C. Tracked Contacts that joined a business where we have an open opp at stage 3 or beyond.                                                  | Lead           | AE and Renewal Manager        | Source = UserGems Contact Tracking<br>Count of Open Opps GREATER THAN 0<br>Stage != 0-Pending Acceptance,1-Discovery,2-Scoping<br>UG - Started Within the Last 6 month = Yes                                             |
| 1D. Tracked Contacts that joined a business where we have an open opp at stage 0, 1 or 2 OR are a customer account with an open renewal opp. | Lead           | BDR, AE and Renewal Manager  | Source = UserGems Contact Tracking<br>Count of Open Opps GREATER THAN 0<br>Stage = 0-Pending Acceptance,1-Discovery,2-Scoping<br>Count of Open Renewal Opps GREATER THAN 0<br>UG - Started Within the Last 6 month = Yes |
| 3A. Contact leaves Company with Opportunity is in stage 3 and beyond                                                                         | Contact        | AE and Renewal Manager         | UG - No Longer at Company = True<br>Count of Open Opps GREATER THAN 0<br>Stage != 0-Pending Acceptance,1-Discovery,2-Scoping                                                                                             |
| 3B. Contact leaves Company with Opportunity is in stage 1 or 2.                                                                              | Contact        | BDR, AE and Renewal Manager  | UG - No Longer at Company = True<br>Count of Open Opps GREATER THAN 0<br>Stage = 0-Pending Acceptance,1-Discovery,2-Scoping                                                                                              |

### Dynamic Layouts

On both the lead & contact object, on the top right side, if this is a UserGems Lead or a UserGems Past Contact, you'll be able to reference, at a glance relevant information like: Current Lead Link, Past Contact Link, Current Account, Current Account Type, Current Title, Current Email along with many other fields that are relevant.

### Sales Enablement

A training for SDRs/BDRs took place on 09/19/2024 and the recording can be viewed [here](https://zoom.us/recording/detail?meeting_id=%2F%2Fw2nDCsSKq0S1Z%2FcjwZ1Q%3D%3D). For any questions regarding UserGems feel free to reach out to either Marketing Operations or Sales Development.

### Sales Dev Plays

To get more information regarding the different plays for the UserGems created leads, please visit the [Sales Development Handbook UserGems entry](/handbook/marketing/sales-development/#usergems).
