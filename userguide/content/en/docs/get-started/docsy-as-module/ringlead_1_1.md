---

title: "Ringlead"
description: "The Ringlead platform orchestrates Salesforce and Marketing Automation processes like managing duplicates, data normalization, segmentation, enrichment."
---







### About Ringlead

RingLead is a SaaS application designed to enable sales and marketing to become efficient and productive.

The Ringlead platform orchestrates Salesforce and Marketing Automation processes like managing duplicates, data normalization, segmentation, enrichment.

As an introduction, below are a few items that will help with using the platform and understand how their tools help us reach our data goals.

<table>
  <tr>
        <td style = "text-align: center;"> <b>Product</b> </td>
                 <td style = "text-align: center;"> <b>Overview</b> </td>
                         <td style = "text-align: center;"> <b>Feature</b> </td>
                                 <td style = "text-align: center;"> <b>Description </b> </td>
   </tr>
   <tr>
        <td rowspan = "4" style = "text-align: left; vertical-align: top;"> <b> Cleanse </b> </td>
          <td rowspan = "4" style = "text-align: left; vertical-align: top;">Cleanse your database by removing costly duplicates or hundreds of custom object records while creating data records that are standardized and easily update with Cleanse. </td>
              <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/352714791/Deduplicate"> Deduplication</a> </td>
                <td style= "text-align: left; vertical-align: top;"> Scan    your database for duplicates based on specific criteria                                             that you define. Once you've identified your duplicates, easily merge them saving you storage costs and time. </td>
   </tr>
     <tr>
         <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/676462594">Normalize/Segment</a> </td>
            <td style= "text-align: left; vertical-align: top;"> Standardize your    addresses, websites, phone numbers, and more to keep data easy to    navigate and search on </td>
  </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/229539841/Mass+Update">Mass Update</a> </td>
            <td style= "text-align: left; vertical-align: top;"> Update fields on custom and standard objects after filtering and defining your new values </td>
   </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/229539841/Mass+Update">Mass Delete</a> </td>
            <td style= "text-align: left; vertical-align: top;"> Clean out your Salesforce by deleting custom and standard objects </td>
  </tr>
     <tr>
         <td rowspan = "6" style= "text-align: left; vertical-align: top;"> <b>Enrichment </b> </td>
            <td rowspan = "6" style= "text-align: left; vertical-align: top;"> Make the most out of the data you have and fill in the gaps where you don't. Company firmographics and contact data can be completed and updated with this tool. Use your existing vendor, or let us help you find the best data from any vendor. </td>
            <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/                                    pages/1526366213/Mass+Enrich">Mass Enrich</a> </td>
            <td style= "text-align: left; vertical-align: top;"> Enrich records directly from any data vendor. </td>
   </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/67604991/                    Intelligent+Forms">Intelligent Forms</a> </td>
          <td style= "text-align: left; vertical-align: top;"> Allow web form users    to spend less time entering data with a RingLead powered address search    right on your form </td>
   </tr>
     <tr>
          <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/279805953/Enrich+API">API Enrichment</a> </td>
            <td style= "text-align: left; vertical-align: top;"> Enable expanded data    such as addresses and company information to come in with your form submissions </td>
  </tr>
     <tr>
         <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/646774785/                    Unique+Entry+Enrichment">On-Demand Enrichment</a> </td>
          <td style= "text-align: left; vertical-align: top;"> Enrich data directly within your Salesforce Lead, Contact, and Account objects </td>
  </tr>
  <tr>
        <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/848494823/                    Vendor+Key+Management">Outside Enrichment Vendor</a> </td>
          <td style= "text-align: left; vertical-align: top;"> Enrich data using a data vendor outside of RingLead. </td>
   </tr>
  <tr>
        <td style= "text-align: left; vertical-align: top;"> <a href = "https://ringlead.atlassian.net/wiki/spaces/DUG/pages/1376518149/                    Package+Manage">Package Manage</a> </td>
          <td style= "text-align: left; vertical-align: top;"> Having multiple vendors with multiple delivery mechanisms can be challenging and Package Management offers a way to consolidate these into an easy to use and codeless system. </td>
  </tr>
</table>

Currently, GitLab, uses Ringlead's Cleanse capabilities, specifically Deduplication, while the enrichment is done through [Zoominfo](/handbook/marketing/marketing-operations/zoominfo/), our SSOT when it comes to lead/contact enrichment.

### Set Up & Access

Currently, Sales & Marketing Operations have access to Ringlead. To request access [please follow the access request process](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/) as outlined in the business operations handbook.

### Ways to access Ringlead & Help

Once you have access you can follow [this link](https://dms.ringlead.com/auth/login/?next=/) to login. For more information about Ringlead and it's capabilities please visit the [Ringlead Help center](https://ringlead.atlassian.net/wiki/spaces/DUG/overview).

## Current Process & Order of Operations

Deduplication and cleaning up a CRM database requires some thought on the processes needed to be successful.  It will depend a lot on what our urgent problems are and our final goals. Below you will see the best practices, using Salesforce as the example, recommendations which Ringlead customers can use to help achieve their goal of clean, efficient and usable data by starting with their main object. Your main object is your ultimate parent (Accounts frequently in Salesforce as an example). That object should be cleaned first of duplicates then move down to the next level and so on. Please see below for our basic Salesforce Recommendations.

Finding and merging duplicate records is easy with RingLead DMS while preventing valuable data from being lost. When merging duplicates, Surviving Field Value Rules can be set for each field resulting in the chosen Master record having the best, most recent and most valuable data. Since you will have complete, precise control over the values that survive in the Master, you can safely merge large numbers of duplicate record groups automatically.

Marketing Operations and Sales Operations both work with the tool in order to deduplicate the existing leads, contacts, accounts as well as any other custom objects that need deduplication.

Leads and Contacts objects are being worked by Marketing Operations while the Account object, by Sales Operations.

Increasing the database cleanliness through deduplication is important and there are good ways and bad ways to do it. Organizations need to make sure they follow the correct order of operations in order to achieve this goal. In the current process, MOps and SOps are using the Ringlead's guidance for proper deduplication of our database.

Recommended order of operations:

1. Lead Deduplication (Completed - runs weekly)
2. Account Deduplication
3. Converting Leads to New Contacts (This step is skipped in our case since it would impact sales workflow considerably. We will re-evaluate if the sales team is not as heavily focused on leads as we are now.)
4. Contact Deduplication (In testing phase - this work is to be tackled as a FY23 Q4 OKR with the KR of reducing the contact duplicates by 50%)
5. Lead to Contact Deduplication (On hold until Contact deduplication is complete)
6. Deduplication of Custom Objects (Bizible Person IDs - On hold until Steps 4 & 5 are completed).

### Account Deduplication

Account deduplication is currently being managed by Sales Ops. The deduplication job applies for Prospect Accounts w/o ZI Company ID and runs weekly every Saturday at 12:00 PDT.

### Lead to Lead Deduplication

Lead to Lead deduplication is managed by Marketing Ops and it done using 8 deduplication tasks, each task dividing our leads by Status and doing that deduplication in smaller, more manageable buckets. The deduplication jobs are scheduled to run on Friday at 2AM PST with the only exception being the task for the MQL subset which runs on Saturday at 2AM PST. Currently the setup is still set to manually merge after the jobs ran in order to avoid any possible merging errors.

### Contact to Contact Deduplication

Lead to Lead and Contact to Contact deduplication is currently being managed by Marketing Ops and is in the final testing/troubleshooting phase before it's going to be rolled out. This part will also be done through scheduled runned tasks for different sub-sets of our contact database with the goal of a full refresh/merge of duplicate contacts weekly.

### Lead to Contact Deduplication

Just as Lead to Lead and Contact to Contact deduplication, Lead to Contact Deduplication sits with Marketing Ops and is the final standard fields deduplication phase. As the naming implies this will make sure we have no duplicates between both objects (leads and contacts).

### Custom Object Deduplication

Once all the standard fields have been deduplicated in the correct order of operations, we can move to custom object deduplication to make sure all our custom objects are clean and duplicate free as well. In our case, once Contact to Contact and Lead to Contact deduplication is complete, we're looking to deduplicate our Bizible Person Object, scheduled to be tackled by end of Q4.
