---
title: Techstackapplications
doc_type: doc
doc_id: doc-805
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

# Tech Stack Applications

[Unsupported block type: image]
Instructions for how to access the GitLab tech stack and request updates to it
## Definition and Access
> 
The Tech Stack is a list of all the technology that GitLab currently uses to support the business. The Tech Stack lists systems/applications/tools/data used by all departments and details the business purpose/description, the owners, the provisioners, the teams that access the tool and other details.
- The Tech Stack single source of truth is the [**Tech Stack YAML file**](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)**.**
- The browsable [**Tech Stack Index**](https://handbook.gitlab.com/handbook/business-technology/tech-stack/) is built from the YAML file.
- Many applications have a [**Tech Stack Guide**](https://handbook.gitlab.com/handbook/business-technology/tech-stack-guide/) to help you understand how the app is used and implemented.
- This [Jupyter Notebook view](https://colab.research.google.com/drive/1C0sikfvoY46p2-dbYNtHwo77VJLixCe2?usp=sharing) of the Tech Stack enables filtering and copying CSV/JSON/Markdown versions of the Tech Stack.
The historical spreadsheets (deprecated on 2020-10-16 and 2021-03-03) can be found [here](https://docs.google.com/spreadsheets/d/1mTNZHsK3TWzQdeFqkITKA0pHADjuurv37XMuHv12hDU/edit#gid=0). Both are protected in case they are needed in future audits. Only Editors of the file (currently the BSAs and Team Member Enablement team) can unhide and unprotect the spreadsheets in case it is needed.
## Roles and Responsibilities
[Unsupported block type: table]
## Tech Stack Definitions
- **Business Owner**: The Business Owner is the individual(s) responsible for all budget and decision making around the tool. They should define how the tool is used and by whom. This person(s) usually has login access to the tool as `Owner` but login access isn’t necessary in all cases. Please make sure you list individual people in this field, rather than teams.
- **Technical Owner**: This may be the same as the Business Owner based on the nature of the system, for instance, if the system isn’t centrally managed and or/requires little to no configuration. For systems that are centrally managed and/or heavily configured, the Technical Owner is someone with understanding of the application’s architecture, functionality (including types of data involved), and overall criticality/impact to GitLab. Technical Owner(s) are typically `administrators` of a tool. This includes everyone with the administrative clearance to provision and deprovision access of a tool and/or as the technical expertise needed to manage it.
- **Provisioner/Deprovisioner**: People in charge of granting and removing team member access to a tool. At least two provisioners/deprovisioners should be named for every tool in the handbook. Provisioners can be contacted as a group in Slack using the `@provisioners` handle and in GitLab using the `@tech-stack-provisioner` handle.
## Tech Stack Updates
***We recommend using the Web IDE for Tech Stack Updates as we have a ***[***JSON Schema***](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/schemas/tech_stack.schema.json)*** that will automatically validate your changes.***
There are three main reasons you would want to change our Tech Stack:
- [Adding a new system to the tech stack](https://handbook.gitlab.com/handbook/business-technology/tech-stack-applications/#add-new-system-to-the-tech-stack)
- [Updating the tech stack](https://handbook.gitlab.com/handbook/business-technology/tech-stack-applications/#update-tech-stack-information) 
- [Removing a system from the tech stack](https://handbook.gitlab.com/handbook/business-technology/tech-stack-applications/#removing-a-system-from-the-tech-stack)
### **What data lives in the Tech Stack?**
Please ensure that whenever you update the tech stack, you follow the instructions below and use the right type of data in each field.
[Unsupported block type: table]
- For Booleans, you need to type out either `true` or `false`.
- *Unknown: If information is unknown, please don’t leave the field empty, type `null` instead.
### **Add new system to the tech stack**
***We recommend using the Web IDE for Tech Stack Updates as we have a ***[***JSON Schema***](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/schemas/tech_stack.schema.json)*** that will automatically validate your changes.***
To add a new system to the tech stack, you must start a merge request in the [tech stack yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and follow the steps below.
**Step 1**
Copy the content below (including the `-` before `title`) and please add your system to the stack in its appropriate alphabetical placement. Make sure you fill out anything that the ‘MR Author and contributors’ are responsible for according to [Tech Stack Data section](https://handbook.gitlab.com/handbook/business-technology/tech-stack-applications/#what-data-lives-in-the-tech-stack). Make sure to use the correct data type for each required field.
[Unsupported block type: code]
**Step 2**
Submit MR and select the template `tech-stack-add-new-system.md`. Fill out all the information required in the description.
**Step 3**
The Legal, IT Compliance, Internal Audit, Security Risk, and Business Systems team will be automatically cc’d in the MR when you use the correct template. These teams will review and update the MR by filling out the missing fields relevant to their teams. Once it is all done, the Business Systems Analysts will merge.
### **Update Tech Stack Information**
***We recommend using the Web IDE for Tech Stack Updates as we have a ***[***JSON Schema***](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/schemas/tech_stack.schema.json)*** that will automatically validate your changes.***
To update any system information listed in the Tech Stack, you must start a merge request in the [tech stack yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). Please use the `tech-stack-update-existing-system.md` template when submitting your MR and follow the instructions in the template. Ensure to update the information following the instructions in the [Tech Stack Data section](https://handbook.gitlab.com/handbook/business-technology/tech-stack-applications/#what-data-lives-in-the-tech-stack).
### **Removing a system from the Tech Stack**
Occasionally systems listed in our tech stack will be deprecated. If a system is being offboarded (no longer being used and/or being replaced), please create an MR in the [tech stack yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) to remove the entry for the tool (DON’T MERGE IT), and then create [an issue following this template](https://gitlab.com/gitlab-com/business-technology/business-technology/-/issues/new?issuable_template=offboarding_tech_stack). Once the issue has been submitted, link the MR in the comments. The Business Owner will need to work with Legal and IT Compliance to ensure that the data deletion process is being completed as outlined in the vendor contract regarding their process and responsibilities.
## Other Related Processes
### Access Requests
Please review our [Access Requests handbook page](https://handbook.gitlab.com/handbook/it/end-user-services/onboarding-access-requests/access-requests/) to find more information on how to request access to systems. Choose the right template for your use case and follow the instructions.
### Procurement
Do you want to procure a new application/system? Visit the [Procurement handbook page](https://handbook.gitlab.com/handbook/finance/procurement/) to find out more information on how to get started. Only applications which go through this process can be added to the tech stack.
### Support
Are you experiencing issues with an application/system? Visit our [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and under `Group Owner/Slack Channel`, you can find out what Slack channel you need to reach out to request support.
### Compliance
Many applications listed in the Tech Stack are in-scope for regulatory or other compliance activities. For more information please reach out to the DRIs listed below:
- FedRAMP: Corey Oas (@corey-oas), Security Compliance
- GitLab SaaS SOC2: Liz Coleman (@lcoleman), Security Compliance
- GitLab Dedicated SOC2: Corey Oas (@corey-oas), Security Compliance
- ISO 27001: Liz Coleman (@lcoleman), Security Compliance
- SOX: Sean Brown (@sbrown10), Internal Audit
### Updating the Offboarding Templates
The offboarding templates need to be updated when a new system is added to the Tech Stack in order for GitLab to be compliant and remove Team Members from systems once they leave GitLab. There are two different ways to update the offboarding templates. Pick the option which best suits the usage of the new system. Once the MR is ready to be merged, tag the People Connect team - `@gl-people-connect-team` - for approval and merge.
[Unsupported block type: toggle]
[Unsupported block type: toggle]
### Exceptions
There are exceptions to adding technologies to the Tech Stack which are handled on a case-by-case basis.
Last modified January 15, 2025: [Add Accessibility Details to Tech Stack and Update Add New System Process in tech-stack-applications.md file (](https://gitlab.com/gitlab-com/content-sites/handbook/commit/9911b37f)[`9911b37f`](https://gitlab.com/gitlab-com/content-sites/handbook/commit/9911b37f)[)](https://gitlab.com/gitlab-com/content-sites/handbook/commit/9911b37f)
