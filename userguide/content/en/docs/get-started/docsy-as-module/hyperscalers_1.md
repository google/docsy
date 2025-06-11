---
title: Hyperscaler Campaign
---

## Hypercaler Campaign

### Naming Convention Requirements

When working with hyperscaler partners like AWS and Google Cloud, it's important to follow specific naming conventions and configuration procedures. This guide explains each component of this process in detail.

Every campaign involving a hyperscaler partner must specify the Hyperscaler Partner Name after the date:
> YYYYMMDD_HyperscalerName_Campaign_CampaignType_Region

Examples:

- 20251202_AWS_AWSreinvent_Booth
- 20250409_GCP_GoogleCloudNext_Booth
- 20241114_AWS_devops.com_ModernizingFinServe_emea_amer

Reference the [Campaigns and Programs](/handbook/marketing/marketing-operations/campaigns-and-programs/#hybrid-marketo-templates) page for naming conventions for specific campaign types.

### Salesforce Configuration Requirements

When setting up these campaigns in Salesforce, you need to take two critical actions:

1. Set the field `Is Hyperscaler Involved?` to `True` - This flags the campaign as a partnership activity.
2. Select the appropriate partner under the `Hyperscaler` field - Choose either:

   1. Amazon Web Services
   2. Google Cloud (Partner)

This configuration ensures proper attribution and tracking of partnership activities.

### Campaign Types Covered by These Guidelines

These naming conventions and configuration requirements apply to all activities where hyperscalers are involved, including:

- Exhibition booths at hyperscaler-hosted events (such as Google Cloud Next or AWS Summit)
- Presence at major corporate events (like AWS reInvent)
- Joint webinars with hyperscaler partners
- Digital marketing campaigns including content syndication and advertising
- Any events or activities that utilize AWS MDF (Market Development Funds) or Google credits

### Special Instructions for Content Syndication Teams

If you work with content syndication, you have an additional step: You must update the Asset Name in the Marketo token of the Content Syndication Folder to include the Hyperscaler Name.

This ensures consistency across all platforms and makes reporting and attribution more accurate. The Marketo Program Description field has been recently updated to include a reminder about adding hyperscaler partner names to campaign names whenever these partners are involved.

Following these guidelines carefully ensures proper tracking, reporting, and compliance with partnership agreements, while also making campaigns easier to find and manage across systems.

## Hyperscaler Funds

Hyperscaler funds represent a strategic partnership mechanism through which cloud hyperscalers like Amazon Web Services (AWS) and Google Cloud Platform (GCP) provide financial support to partners like GitLab for joint marketing initiatives.

These funding programs operate under different models that reflect each hyperscaler's partnership approach:

- AWS MDF Program: Follows a matching investment model. This means for every dollar AWS contributes, GitLab must match with its own dollar.
- Google Credits Program: Unlike AWS, Google offers 100% reimbursement for approved marketing activities. This model allows GitLab to execute campaigns and receive full reimbursement upon providing proof that the activities were completed successfully.

From GitLab's perspective, these funds enable more expansive marketing campaigns than possible while strengthening strategic partnerships with major cloud providers. The partnership creates a "better together" narrative that helps customers understand the enhanced value proposition of GitLab running on these cloud platforms.

### Key Roles in the Hyperscaler MDF Ecosystem

1. Program Owner (Francine): Primary contact with Hyperscaler Partners

   1. Oversees the entire MDF program
   2. Reviews internal MDF request entries with Hyperscalers
   3. Submit MDF request, when approved, we'll receive a PO
   4. Request an invoice from AR team provide the PO and MDF Approval Email via issue
   5. Submit claim with proof of performance (receipt) to the Hyperscaler portal

2. Partner Marketing Manager (Gabby): Administers fund allocation

   1. Set up the Allocadia activity and GitLab issue assigned to the requester

3. Campaign Owners/Operations (Fund Requester can also be a Campaign Owner)

   1. Create their own Asana project to manage their campaign
   2. Manages execution and setup for Marketo and Salesforce
   3. Open Zip request
   4. Send Partner Marketing Manager receipts for Proof of Performance
   5. Provide the link to the Tableau campaign report to issue

4. Fund Requesters: Initiates funding requests

   1. Fill out the spreadsheet with campaign details
   2. Provides Target MQL and Target Pipeline Goals

### Application Process

1. Complete the Google Sheet:

    1. AWS: [Marketing calendar - spreadsheet](https://docs.google.com/spreadsheets/d/1Ej_QJpTI0u_hPwB-jJKcqTviIAnmS1wgctfabgfUlPM/edit?gid=2978057#gid=2978057)
    2. GCP: [Marketing calendar - spreadsheet](https://docs.google.com/spreadsheets/d/1B2mSraHHhCMbK96Sx0ZQlXTI6J7tIp5LNeWdsnKetrE/edit?usp=sharing)
    3. Complete all required fields, including:

       1. Strategic Alignment
       2. Region
       3. Activity Type and Description
       4. Proposed Start and End Date
       5. Total Cost
       6. Amount Requested
       7. Target MQL
       8. Target Pipeline

2. Submit for Review:

    1. Tag Francine for approval in the Google spreadsheet
    1. Include any supporting materials that strengthen your case (past performance of similar activities, customer interest data, etc.)

### Approval Process

1. Initial Screening: Francine will review your application to ensure it meets basic requirements and aligns with strategic priorities.
2. Hyperscaler Partner Approval: Upon preliminary approval, Francine will review and seek approval for the activity and confirm funding amount from the Hyperscaler Partner.
3. System Configuration: Once approved by the Hyperscaler Partner,

    1. Channel Marketing Manager will open the Allocadia activity and Hyperscaler MDF GitLab
    2. Campaign Owner will be responsible for creating the Marketo campaign and sync to Salesforce using the Allocadia Subcategory ID (found in the Hyperscaler MDF GitLab issue)
    3. Link to the appropriate GitLab issues for tracking

### Field Marketing MDF Scenario

AWS MDF coverages is a 50/50 split arrangement, this means GitLab pays half and AWS coverages for the other half. When activities are co-funded using Field Marketing budgets, we will maintain a streamlined approach that avoids duplication while ensuring accurate tracking across both funding sources. 

The means we'll manage one campaign, two budget entries (amount in FM and amount provided by AWS in Hyperscaler), one GitLab issue, and one FM Asana project.

- Field Marketing will submit one entry in their Allocadia folder for 50% of the total activity for GitLab's matching portion in the Regional Marketing folder

  - When submitting the Zip request, you must enter 50% of the total coverage.

- Partner Marketing will submit both the positive entry for AWS contribution and the negative entry for GitLab's matching portion in the Hyperscaler MDF folder.
- Both entries will reference the same campaign and use identical naming conventions

### Understanding Data Flow: From Lead to Opportunity

One of the most complex aspects of hyperscaler campaigns is tracking the customer journey from initial interest to closed business. This journey involves multiple handoffs:

- Lead Identification: When a lead comes from a hyperscaler campaign, it's tagged with the appropriate CRM Partner ID and campaign information.
- Lead-to-Opportunity Conversion: As leads convert to opportunities, the system maps partner and campaign information to maintain attribution.
- Notification Systems: Automated notifications alert Cloud ESMs (Ecosystem Sales Managers) and regular ESMS are involved when new opportunities arise from hyperscaler campaigns.
- Co-Sell Integration: Labra facilitates referrals between GitLab and Hyperscalers for co-sell opportunities, creating a structured engagement process.

Understanding this flow helps teams recognize that not all Hyperscaler campaign leads will become co-sell opportunities, but tracking remains important to demonstrate overall program impact.
