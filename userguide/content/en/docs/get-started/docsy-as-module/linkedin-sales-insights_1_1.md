---
title: "LinkedIn Sales Insights"
description: "LinkedIn Sales Insights provides access to LinkedIn data and insights at scale, giving sales operations the clarity they need to do smarter sales planning."
---

### About LinkedIn Sales Insights

LSI is a tool that lets us view and export data from LinkedIn's database onto our SFDC Account records.

- NOTE: All of the data provided by this tool is based solely on what people have entered on their LinkedIn resumes. This means that if LinkedIn is not used by all employees at a company, or if LinkedIn is not very widely used in a particular country, the LinkedIn data may not answer all of our business questions.

GitLab's main use case for this tool currently is to populate developer count numbers into the LinkedIn Developer Count field on the SFDC Account object.

- This field can be viewed by Sales to help prioritize their prospect accounts. If sales managers disagree with LinkedIn Developer Count, they can populate the Potential Users field.
- We will also use the LinkedIn Developer Count as an input to our LAM calculation, which will help us understand potential future growth of our accounts.

LSI also provides info on employee count, industry, location of the HQ and/or the person, as well as how many jobs have been posted recently on LinkedIn for that company (an indicator of growth), and connectivity (how many employees from this company are connected to GitLab employees on LinkedIn).

- Since we are already getting employee count, industry, and address data from other more reliable sources, we do not intend to use that information from LSI.  We will continue to follow the steps and data sources outlined in the [ROE](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#account-ownership-rules-of-engagement) for segmentation and assignment.

### Login

This tool is currently only accessible by Sales Ops and Sales Leadership (ASMs and up).

You can log in to LinkedIn Sales Insights (LSI) using your regular LinkedIn username/password here: https://www.linkedin.com/sales-insights/.

To request access please create an [Access Request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#how-do-i-choose-which-template-to-use).

### Sales Leadership (ASMs and up) Use Cases

1. Sales Leadership can use this tool to compare data from our Salesforce Account records to what LinkedIn has in their database.
   - On the Sources tab, you can upload a .csv file of Accounts you have exported from SFDC.
   - On the Reports tab, you select your list as the Source, and the tool will give back LinkedIn data about those companies.
   - Alternatively, on the Reports tab, you can select Salesforce CRM as the Source, and the tool will give back LinkedIn data about every Salesforce account record that it can match.
   - You will be able to view Report results on the screen within the LSI tool. You cannot export the Report results.
   - The tool does all of the matching between our Salesforce Account records and the LinkedIn company records itself, and this is not customizable. The matching relies on our SFDC account name, website, and address fields. LinkedIn provides a Match Score (0-5, 5 is the highest) which tells us how confident they are that they are matching the correct company.

1. The tool can also be used by Sales Leadership to assess and research whitespace (companies that are potential GitLab customers but that do not yet exist as accounts in our SFDC instance).
   - This is also not a true outbound prospecting tool. While it does allow you to research whitepace by viewing accounts that exist in LinkedIn's database but not in our Salesforce CRM, it does not currently have the capability of creating new SFDC account records to fill in the whitespace.  This would need to be done manually.

### Sales Operations Use Cases

1. In order to get software developer counts, we can set up Personas to look for people with a particular job title or job function. When you run a report against a specific Persona, it will give you employee counts for LinkedIn resumes that match your Persona. For example, we are currently using the "Eng/IT (by job function)" Persona to get LinkedIn software developer counts.
   - We are only allowed as set number of Personas (3-6).
   - Creating new Personas should be done with the input of Sales Strategy & Analytics.
1. Sales Ops can export the results of a report directly into Salesforce onto the matching Salesforce account record.
   - Once a LinkedIn company has been exported to our Salesforce CRM, it will continue to auto-enrich with LinkedIn data daily at midnight PST.
   - Exporting records from LSI uses 1 credit per record. We purchase annual credits in increments of 20k records.
   - Purchasing additional credits will need to be approved by Senior Director, Director of Sales Operations and Senior Director, Sales Strategy & Analytics
1. For further Sales Operations use cases such as buying credits and info on the initial implementation, reference the LSI Sync Doc [Here](https://docs.google.com/document/d/1acxMAloxho4y3EjFb47OjuMhA0QvuTai-CQs-X89KN4/edit)
