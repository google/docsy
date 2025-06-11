---
title: "Tech Stack Applications"
description: "Instructions for how to access the GitLab tech stack and request updates to it"
extra_js:
  - libs/vue.min.js
  - tech-stack.js
---

## Definition and Access

> **Note:** Use the **[Tech Stack Index](/handbook/business-technology/tech-stack/)** to browse Tech Stack Apps.

The Tech Stack is a list of all the technology that GitLab currently uses to support the business. The Tech Stack lists systems/applications/tools/data used by all departments and details the business purpose/description, the owners, the provisioners, the teams that access the tool and other details.

- The Tech Stack single source of truth is the **[Tech Stack YAML file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml).**
- The browsable **[Tech Stack Index](/handbook/business-technology/tech-stack/)** is built from the YAML file.
- Many applications have a **[Tech Stack Guide](/handbook/business-technology/tech-stack-guide/)** to help you understand how the app is used and implemented.
- This [Jupyter Notebook view](https://colab.research.google.com/drive/1C0sikfvoY46p2-dbYNtHwo77VJLixCe2?usp=sharing) of the Tech Stack enables filtering and copying CSV/JSON/Markdown versions of the Tech Stack.

The historical spreadsheets (deprecated on 2020-10-16 and 2021-03-03) can be found [here](https://docs.google.com/spreadsheets/d/1mTNZHsK3TWzQdeFqkITKA0pHADjuurv37XMuHv12hDU/edit#gid=0). Both are protected in case they are needed in future audits. Only Editors of the file (currently the BSAs and Team Member Enablement team) can unhide and unprotect the spreadsheets in case it is needed.

## Roles and Responsibilities

|Role|Responsibilities|
|----------|------------------------------|
|Business and Technical Owners of Systems|Accountable for completeness and accuracy of Tech Stack data; Process [Tech Stack updates](/handbook/business-technology/tech-stack-applications/#tech-stack-updates); Primary contacts for system-related inquiries and administration.|
|IT Business Technology| Code Owners of Tech Stack; Advise Business and Technical Owners in supporting systems. |
|Security Risk|Help facilitate Tech Stack updates, including the [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/#business-impact-analysis) for new and existing systems.|

## Tech Stack Definitions

- **Business Owner**: The Business Owner is the individual(s) responsible for all budget and decision making around the tool. They should define how the tool is used and by whom. This person(s) usually has login access to the tool as `Owner` but login access isn't necessary in all cases. Please make sure you list individual people in this field, rather than teams.
- **Technical Owner**: This may be the same as the Business Owner based on the nature of the system, for instance, if the system isn't centrally managed and or/requires little to no configuration. For systems that are centrally managed and/or heavily configured, the Technical Owner is someone with understanding of the application's architecture, functionality (including types of data involved), and overall criticality/impact to GitLab. Technical Owner(s) are typically `administrators` of a tool. This includes everyone with the administrative clearance to provision and deprovision access of a tool and/or as the technical expertise needed to manage it.
- **Provisioner/Deprovisioner**: People in charge of granting and removing team member access to a tool. At least two provisioners/deprovisioners should be named for every tool in the handbook. Provisioners can be contacted as a group in Slack using the `@provisioners` handle and in GitLab using the `@tech-stack-provisioner` handle.

## Tech Stack Updates

***We recommend using the Web IDE for Tech Stack Updates as we have a [JSON Schema](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/schemas/tech_stack.schema.json) that will automatically validate your changes.***

There are three main reasons you would want to change our Tech Stack:

- [Adding a new system to the tech stack](#add-new-system-to-the-tech-stack)
- [Updating the tech stack](#update-tech-stack-information)
  - This includes updating any of the columns in the tech stack, like Provisioner/Deprovisioner, Business Owner or Technical Owner.
- [Removing a system from the tech stack](#removing-a-system-from-the-tech-stack)

### **What data lives in the Tech Stack?**

Please ensure that whenever you update the tech stack, you follow the instructions below and use the right type of data in each field.

| Field | Type of data | Instructions | Responsible for filling out information |
| ------ | ------ |------ |------ |
| title | Text | The name of the system you are adding to the tech stack. Please enter the full and correct brand name associated with the tool. Example: "[Zendesk](https://www.zendesk.com/), not ZenDesk."  | MR Author and contributors |
| team_member_baseline_entitlement | Boolean* | A baseline entitlement is a system that **ALL** GitLab Team Members get access to. Example: "Zoom". Most systems in our Tech Stack are not baseline entitlements. | MR Author and contributors |
| description | Text/Markdown | Business Purpose of the system. Please add links to handbook pages or websites that can provide people with more information on what the system is used for. Example: "[ContractWorks](https://www.contractworks.com/) is a contract managing software. [This process](/handbook/legal/vendor-contract-filing-process/) is used to file contract or related vendor documents after they are fully executed." | MR Author and contributors |
| access_to | Text | Define which individuals or teams need access to this system. Example: Strategic Marketing and Product Managers | MR Author and contributors |
| provisioner | Text in single quotes, GitLab Username | Add the username of the people in charge of provisioning access to this system, separated by commas. We require at least 2 people to be listed as provisioners of a tool. Example: '`@username`, `@username1`'  | MR Author and contributors |
| deprovisioner | Text in single quotes, GitLab Username | Add the username of the people in charge of removing access to this system, separated by commas. We require at least 2 people to be listed as deprovisioners of a tool. Team members can serve as both provisioners and deprovisioners of a tool. Example: '`@username`, `@username1`'  | MR Author and contributors |
| group_owner | Text | Add the group owner of the tool (team/department/function). Example: Infrastructure  | MR Author and contributors |
| group_owner_slack_channel | Text | Add the Slack channel where the group owner  can be reached out for help. Example: #infrastructure-lounge | MR Author and contributors |
| business_owner | Text | The Business Owner is the individual(s) responsible for all budget and decision making around the tool. They should define how the tool is used and by whom. This person(s) usually has login access to the tool as `Owner` but login access isn't necessary in all cases. Please make sure you list individual people in this field, rather than teams. Example: Jane Doe, John Doe | MR Author and contributors |
| technical_owner | Text | The Technical Owner(s) all the `administrators` of a tool. This includes everyone with the administrative clearance to provision and deprovision access of a tool and/or as the technical expertise needed to manage it. Example: Jane Doe, John Doe. See guidance [above](/handbook/business-technology/tech-stack-applications/#tech-stack-definitions) for instances where a system does not require/have an administrator function | MR Author and contributors |
| data_classification | Text (Red, Orange, Yellow, Green) or Unknown** | Decided upon by the Security team, please leave as `null` while this process is completed. More information on [Data Classification Standards](/handbook/security/standards/data-classification-standard/).| Security Risk |
| authentication_method | Text (Okta SWA, Okta SAML, ID and password, other) or Unknown** | Authentication method used to access the system. It can be [SWA](https://help.okta.com/en-us/content/topics/apps/apps_overview_of_managing_apps_and_sso.htm), [SAML](https://support.okta.com/help/s/article/okta-saml?language=en_US) or other such as direct access (email and password login).  | MR Author and contributors |
|critical_systems_tier|Text (Tier 1 Mission Critical, Tier 2 Business Critical, Tier 3 Business Operational, Tier 4 Administrative, TBD) or Unknown**|This field classifies the system based on GitLab's [Critical System Tier Definitions](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/). The assignment of a critical system tier is dependent on the completion of a [Business Impact Analysis](/handbook/security/security-assurance/security-risk/storm-program/business-impact-analysis/) (BIA) questionnaire. The Security Risk Team will coordinate the completion of a BIA if it has not yet been completed at the time a system is being added to the Tech Stack.|Security Risk|
| collected_data | Text or Unknown**  | Data that is collected by the tool | MR Author and contributors |
| employee_or_customer_facing_app | Text (employee, customer) | If access is limited to GitLab team members, then please add the `employee` word. If access can be granted to external parties, then add `customer` | MR Author and contributors |
| notes | Text or Unknown** | Additional relevant information about the system that is not captured in any other field. Examples include the GitLab Epic for implementation and rollout. | Optional, MR Author and contributors |
| handbook_link | Text/Markdown or Unknown** | Link to the `Tech Stack Guide` handbook page that includes function and system information.  Example: "The Marketing handbook contains the [Marketo Tech Stack Guide](/handbook/marketing/marketing-operations/marketo/tech-stack-guide-marketo/)." | Optional, MR Author and contributors |
| external_link | Text/Markdown or Unknown** | Link to the app's primary website. Example: "[ContractWorks](https://www.contractworks.com/)" | Optional, MR Author and contributors |
| google_group | Text or Unknown** | Google group being used to manage access to the systems through Okta | Optional, MR Author and contributors |
| accessibility | Boolean | Does the application support accessibility features? Select Yes or No. (Existing applications have been temporarily updated with "TBD") | MR Author and contributor |
| accessibility_description | Text | Document instructions to enable or submit a request to activate the accessibility feature. (May include the link to a handbook page or request ingestion point) | MR Author and contributor |
| now_id | Text/ServiceNow ID | Integration ID for ServiceNow. Please leave blank for EntApps Engineer to Complete | Contributor, Service Now Engineer |

- *For Booleans, you need to type out either `true` or `false`.
- **Unknown: If information is unknown, please don't leave the field empty, type `null` instead.

### **Add new system to the tech stack**

***We recommend using the Web IDE for Tech Stack Updates as we have a [JSON Schema](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/schemas/tech_stack.schema.json) that will automatically validate your changes.***

To add a new system to the tech stack, you must start a merge request in the [tech stack yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and follow the steps below.

**Step 1**

Copy the content below (including the `-` before `title`) and please add your system to the stack in its appropriate alphabetical placement. Make sure you fill out anything that the 'MR Author and contributors' are responsible for according to [Tech Stack Data section](/handbook/business-technology/tech-stack-applications/#what-data-lives-in-the-tech-stack). Make sure to use the correct data type for each required field.

```yaml
- title:
  team_member_baseline_entitlement:
  description:
  access_to:
  provisioner:
  deprovisioner:
  group_owner:
  group_owner_slack_channel:
  business_owner:
  technical_owner:
  data_classification:
  authentication_method:
  critical_systems_tier: null
  collected_data: null
  employee_or_customer_facing_app:
  notes: null
  handbook_link: null
  external_link:
  google_group: null
  accessibility:
  accessibility_description:
  now_id: null
```

**Step 2**

Submit MR and select the template `tech-stack-add-new-system.md`. Fill out all the information required in the description.

**Step 3**

The Legal, IT Compliance, Internal Audit, Security Risk, and Business Systems team will be automatically cc'd in the MR when you use the correct template. These teams will review and update the MR by filling out the missing fields relevant to their teams. Once it is all done, the Business Systems Analysts will merge.

### **Update Tech Stack Information**

***We recommend using the Web IDE for Tech Stack Updates as we have a [JSON Schema](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/schemas/tech_stack.schema.json) that will automatically validate your changes.***

To update any system information listed in the Tech Stack, you must start a merge request in the [tech stack yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). Please use the `tech-stack-update-existing-system.md` template when submitting your MR and follow the instructions in the template. Ensure to update the information following the instructions in the [Tech Stack Data section](/handbook/business-technology/tech-stack-applications/#what-data-lives-in-the-tech-stack).

### **Removing a system from the Tech Stack**

Occasionally systems listed in our tech stack will be deprecated. If a system is being offboarded (no longer being used and/or being replaced), please create an MR in the [tech stack yml file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) to remove the entry for the tool (DON'T MERGE IT), and then create [an issue following this template](https://gitlab.com/gitlab-com/business-technology/business-technology/-/issues/new?issuable_template=offboarding_tech_stack). Once the issue has been submitted, link the MR in the comments. The Business Owner will need to work with Legal and IT Compliance to ensure that the data deletion process is being completed as outlined in the vendor contract regarding their process and responsibilities.

## Other Related Processes

### Access Requests

Please review our [Access Requests handbook page](/handbook/it/end-user-services/onboarding-access-requests/access-requests/) to find more information on how to request access to systems. Choose the right template for your use case and follow the instructions.

### Procurement

Do you want to procure a new application/system? Visit the [Procurement handbook page](/handbook/finance/procurement/) to find out more information on how to get started. Only applications which go through this process can be added to the tech stack.

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

The offboarding templates need to be updated when a new system is added to the Tech Stack in order for GitLab to be compliant and remove Team Members from systems once they leave GitLab. There are two different ways to update the offboarding templates.  Pick the option which best suits the usage of the new system. Once the MR is ready to be merged, tag the People Connect team - `@gl-people-connect-team` - for approval and merge.

<details>
<summary markdown="span">Option 1: New system used by all/many Team Members, across multiple departments</summary>

Update the [main Team Member Offboarding](https://gitlab.com/gitlab-com/people-group/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md) template.

The main template is divided into two sections.  The first section is the [Offboarding Tasks](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md#offboarding-tasks) section.  This section is applicable to all GitLab Team Members and is performed by the Manager, People, Business Technology, and Finance/Accounting teams.

The second section is the [Tech Stack System Deprovisioning / Offboarding](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding.md#tech-stack-system-deprovisioning-offboarding-tasks-that-need-to-be-completed-within-5-days) section.  Update this section with the new system being added to the Tech Stack.  Use the format below to make the update:

```markdown
## Department that owns the new system. If new system is owned by multiple departments, list the department the main deprovisioner belongs to. Please make sure the department does not already exist within the template. If it does, ignore this header and just add the following information underneath the existing department header

#### <summary>Name of deprovisioner @usernameofdeprovisioner, Name of deprovisioner 2 @usernameofdeprovisioner2, etc. </summary>

<table >
 <tbody>
  <tr>
   <td> `System name`  </td>
   <td>

- [ ] Access Deprovisioned - System name
- [ ] Not Applicable to Team Member - System name

</td>
  </tr>
 </tbody>
</table>
```

When finished, link the MR in the "Access Tasks" section of the 'Tech Stack - Add New System' MR.
</details>

<details>
<summary markdown="span">Option 2: New system used by a limited number of Team Members, all in SAME department</summary>

Update the [department-level Offboarding template](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/offboarding_tasks) within this directory.

Using the link above, locate the template of the department owning the new system and update it. Example: If only the Security team will have access to a new system, locate the [Security template](https://gitlab.com/gitlab-com/people-group/employment-templates/-/blob/main/.gitlab/issue_templates/offboarding_tasks/department_security.md) and add the new system to that template following this format:

`- [ ]  @usernameofdeprovisioner @usernameofdeprovisioner2: Remove the team member from System name`

When finished, link the MR in the "Access Tasks" section of the 'Tech Stack - Add New System' MR.
</details>

### Exceptions

There are exceptions to adding technologies to the Tech Stack which are handled on a case-by-case basis.
