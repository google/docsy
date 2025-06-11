---
title: "Enterprise Applications - CRM Team"
description: "The Enterprise Applications CRM Team implements and supports specialized applications that support our business processes within GitLab."
---


<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## <i class="fas fa-users" id="biz-tech-icons"></i> Mission

CRM Systems exists to support the GitLab field organization by providing reliable, scalable, and intuitive technology platforms for everyday use. Primarily working on SalesforceCRM and its related Revenue Systems, our goal is to constantly deliver value in the form of features to our end users. We also act as the connective tissue between business and technology, gathering requirements from our internal customers, designing the technical specifications and executing on the delivery of the solution.

## <i class="fas fa-users" id="biz-tech-icons"></i> Our Team (Org Chart)

- **Kiran Chinthapalli - Director, CRM Systems**
- **Sheela Viswanathan - Senior Manager, Business Systems Administrator** GitLab handle: [sheelaviswanathan](https://gitlab.com/sheelaviswanathan) Slack handle: @sheela viswanathan
- **Obbu Sekhar - Senior IT Enterprise Applications Engineer** GitLab handle: [sekharobbu](https://gitlab.com/sekharobbu) Slack handle: @osekhar
- **Tai Schuller - Staff IT Enterprise Applications Engineer** GitLab handle: [tschuller](https://gitlab.com/tschuller) Slack handle: @Tai Schuller
- **Analissa "Ana" Moreno - IT Enterprise Applications Administrator** GitLab handle: [ana-moreno](https://gitlab.com/ana-moreno) Slack handle: Ana Moreno
- **Andie Wheeler - IT Enterprise Applications Administrator** GitLab handle:[alwheel](https://gitlab.com/alwheel) Slack handle: @Andie Wheeler
- **Brett Latham - Senior Business Systems Administrator** GitLab handle: [Dlatham](https://gitlab.com/Dlatham) Slack handle: @Brett Latham
- **Mohamed Hussain - Business Systems Administrator** GitLab handle: [Moh.hussain](https://gitlab.com/Moh.hussain) Slack handle: @Mohamed Hussain
- **Neha Sharma - IT Enterprise Applications Administrator** GitLab handle: [nksharma2](https://gitlab.com/nksharma2) Slack handle: @Neha Sharma
- **Pooja Chowdary Nayidi - IT Enterprise Applications Administrator** GitLab handle: [pnayidi](https://gitlab.com/pnayidi) Slack handle: @Pooja Chowdary Nayidi
- **Korben Carreno - Manager, CRM Systems** GitLab handle: [kcarreno](https://gitlab.com/kcarreno) Slack handle: @Korben
- **Christian Böhme - IT Enterprise Applications Engineer** GitLab handle: [chrisboehme](https://gitlab.com/chrisboehme) Slack handle: @Christian Böhme
- **Deepak Kumar - IT Enterprise Applications Engineer** GitLab handle: [dkumarGitlab](https://gitlab.com/dkumarGitlab) Slack handle: @Deepak Kumar
- **Devansh Devansh - IT Enterprise Applications Engineer** GitLab handle: [DDevansh](https://gitlab.com/DDevansh) Slack handle: @Devansh
- **Harshit Bhandari - IT Enterprise Applications Engineer** GitLab handle: [hbhandari3](https://gitlab.com/hbhandari3) Slack handle: @Harshit

## Salesforce.com Change Management Processes and SDLC (Software Development Life Cycle)

Changes to Salesforce.com come in a variety of formats but all of them will feature the following change managment controls:

1. All changes will start with an GitLab Issue defining the ask or problem, and capturing additional decisions and business requirements.
1. All changes will be developed and tested in a Salesforce Sandbox environment before being deployed or replicated in production.
1. All changes will be require Business DRI (the requestor) to sign off on the related GitLab Issue once ready and determine a deploy window.
1. All changes will be reviewed by the Business DRI once deployed or replicated in production.

We have defined the following ending Label stages for the Sales Systems workflow. Please see the label name as well as SDLC expectations:

### No Changes to Salesforce.com

Label: `SalesSystems::Deployed - 0 - No Changes`
Description: This issue is completed. There was no setting, configuration or code change to SFDC. No Sign-off Needed, No Change Set Used.

1. These issues resulted in no Setting, Configuration or Code changes to SFDC.
1. The most common use case are question or research issues.
1. Data changes as part of a backfill for another operations team fall into this category.

### Changes that cannot or are impractical to use a Change Sets

For example: Field Level Security, Sharing Rules, Layout Changes, Picklist Value Changes, Approval Processes, Role Creation and Assignments

Label: `SalesSystems::Deployed - 1 - Settings Change`
Description: This issue is completed. There was a setting change. Sign-off is required, No Change Set Used.

1. These changes will need a special deploy window for the changes to be made by hand. Please coordinate with the Business DRI.

### Changes that contain Salesforce.com Fields, Workflows, Validation Rules, or other non-code Configuration

Label: `SalesSystems::Deployed - 2 - Configuration Change`
Description: This issue is completed. There was a configuration change. Sign-off Required, Change Set screenshot required.

1. These changes will always use a Salesforce.com Changeset that will be linked to the related issue.
1. The team member who uploards the change set shall ask a different team member to review and deploy the change. (No Self Deploys).

### Changes that contain Salesforce.com Apex Code, Apex Triggers, or Visualforce Pages

Label: `SalesSystems::Deployed - 3 - Code Change`
Description: This issue is completed. There was a code change. Sign-off Required, Change Set Screenshot required, Approved and attached MR required.

1. These changes will require the creation of a Merge Request to our SFDC source repository as instructed below.
1. These changes will require a code review by at least 1 other Business Systems Engineer before being marked as ready to merge.
1. These changes will always use a Salesforce.com Changeset to deploy that will be linked to the related issue.
1. The team member who uploards the change set shall ask a different team member to review and deploy the change. (No Self Deploys).

### Destructive Changes to Salesforce Fields Configration

1. These should follow our Field and Process deprecation outlined below.

### Destructive Changes to Salesforce Code

1. These changes require sign off from the Senior Director of Sales Systems.
1. These changes will be done via a Salesforce.com Workbench as a [destructive deploy](https://www.salesforceben.com/way-to-delete-apex-classes-from-production/).

### Milestone Compliance Check Process

Before a Milestone is closed perform the following steps:

1. All non-closed issues, must be removed or pushed to the next milestone.
1. All closed issues that bear the SalesSystems label must end in on of the 4 deployment stages.
1. All Issues must have their neccessary artifacts and approvals related to their deployement stage.
1. Any problems found must be raised to a Sales Systems scrum-master immediately to not delay close.

### Special Approvals

Please seek explicite and documented approval from the Senior Director of Sales Systems for any of the non-standard situations:

1. A deploy during a designated block out period.
1. The need to self deploy a non-invasive change.
1. The need to create a non-invasive formula field in production for time sensitive triage of a critical issue.

These changes would be classified as a `CMT: Emergency Change`.  Any issue where this occurs should be flagged with this label for future compliance review.

### Critical Field Approvals

Any changes related to the following fields must have direct approval from the Senior Director of Sales Systems:

1. Opportunity.Net_ARR__c

### Approval for Proposed Changes related to Quoting

1. All changes that will impact Quoting (ex. creating quotes, creating validation rules, generating quote PDFs, Quote Templates, Approval Module updates) will require approval from Deal Desk and Channel Ops before being pushed to production. The goal is to prevent changes from being pushed to production that could delay the quoting process or create a bottleneck in the quote to cash lifecycle.
1. Approval should be secured in the comments section of the related issue from the Designated Approver outlined below.
1. Additionally, if a change is proposed that could materially impact the quoting experience for Sales teams and **is not listed below**, please request review from Sr. Manager, Deal Desk in the comments section of the issue.

|                                                                Change                                                               |                Designated Appover               |                    Back Up Approver                   |
|:-----------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------:|:-----------------------------------------------------:|
| Approval Module Updates  (Discounts, Payment Terms, Approval Structure/Hierarchy, Approval Notifications, Override Functions)       | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |
| Channel Quote Approval Module Updates (Validation Rule changes, Discount Thresholds, Approval Structure/Hierarchy, Notifications)   | Manager, Channel Operations  Manager, Deal Desk | Sr. Manager, Deal Desk Manager, Partner Ops/Alliances |
| SuperSonics Logic Updates                                                                                                           | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |
| Smart Templates Gate Logic                                                                                                          | Manager, Deal Desk                              | Sr. Manger, Deal Desk                                 |
| Proposed Validation Rules  (Ex. "X" Field is Mandatory on all quote objects, if "X" is blank, user cannot move forward with quote.  | Sr. Manager, Deal Desk &  Manager, Deal Desk    | Manager, Deal Desk                                    |
| Quote Templates / Docusign Order Forms                                                                                              | Manager, Deal Desk                              | Sr. Manager, Deal Desk                                |
| Quoting Workflow Changes  (Ex. Updating Button Behavior (Edit Quote vs Maintain Quote), removing fields or permissions)             | Sr. Manager, Deal Desk                          | Manager, Deal Desk                                    |

1. If approval is pending Deal Desk review, `Deal Desk::Pending Approval` Label will be added to the issue by the DRI.
1. Once Approval is secured, Deal Desk will add `Deal Desk::Approved` Label to the issue. If no other approval is required, systems can move forward with work.
1. If the proposed change will negatively impact the quoting cycle, Deal Desk will add `Deal Desk::Need More Information` Label to the issue. Deal Desk will partner with Issue DRI to identify alternative solutions.
1. If the proposed change is not approved, Deal Desk will add `Deal Desk::Rejected` Label to the issue. An alternative solution must be presented.

Channel Operations and Deal Desk will work closely on all updates related to the quoting process. The purpose is to ensure that a proposed change does not contradict with an existing process that a team member may not be aware of.

1. If approval is pending Channel Ops review, `Channel Ops::Pending Approval` Label will be added to the issue by the DRI.
1. Once Approval is secured, Channnel Ops will add `Channel Ops::Approved` Label to issue. If no other approval is required, systems can move forward with work.
1. If the proposed change will negatively impact Channel priorities, Channel Operations will add `Channel Ops::Need More Information` Label to the issue. Channel Ops will partner with Issue DRI to identify alternative solution.
1. If the proposed change is not approved, Channel Ops will add `Channel Ops::Rejected` Label to the issue. An alternative solution must be presented.

**SLA for Channel Operations & Deal Desk Approvals related to Quoting**

Channel Operations and Deal Desk will review each issue with the labels above within 1 business day.

## Salesforce Specific Processes, Policies and Controls

### Change classifications

Due to the nature of changes in Salesforce, all the changes above are classified as a `CMT: Comprehensive Change` for auditing and compliance purposes, unless otherwise noted.  In order to not overload this tag with all issues which are addressed by the Systems team, we do not tag issues with this tag at this time.

### Salesforce Password Policies

Persuant with GitLab's [best practices for password security](/handbook/security/#gitlab-password-policy-guidelines), our Salesforce environment requires that users use passwords with at least 12 characters, and that they must not re-use any of their last 24 passwords when resetting their password.

### Sandbox Refreshes

#### How to request a sandbox refresh for a personal sandbox

1. Create an issue for the Sales Systems team by following the instructions above.
2. In the issue description, include the name of the sandbox and the names of any users who need to be granted access to the sandbox.
3. Link the issue to any other issues which are blocked pending the refresh of this environment.

#### Refresh process for Sandboxes maintained as part of the SDLC process

1. The Sales Systems team will have an issue tracked in GitLab with a label of `SalesSystems` and `Sandbox Refresh Checklist` for the refresh of each environment with a due date of the refresh date.
   1. The Sales Systems team has moved to the usage of a standard Template for each major Sandbox refresh. All steps will be outlined on each template and updated as necessary.
2. On the date of the refresh, the assigned Sales Systems team member will kick off the refresh in production.  Note: A sandbox refresh can take up to 72 hours to complete.
3. After the refresh completes, the Sales Systems team will complete the following steps to set the environment.

##### Pre-Refresh Steps

|Pre-Refresh step|Owner|To be completed by|Environments|Action steps|
|-----|-----|-----|-----|-----|
|Date Alignment|Systems|Systems|Developer, Test1, Test2|Align the date of the refresh within the team|
|Date Publicization|Systems|@ana-moreno|Developer, Test1, Test2|Publicize the date of the refresh ahead of time so affected business stakeholders are aware and ready for post-refresh date steps.|
|Sandbox Access Group Access|@ana-moreno|@ana-moreno (or User Management)||Review recent login access to relevant sandbox and add any missing or new users to relevant Sandbox Access group.|
|Disable Marketo sync|Marketing Operations|Marketing Operations|Test1|Contact MOPs to disable the SFDC sync (before refresh).|

##### Post-Refresh Steps

|Post-Refresh step|Owner|To be completed by|Environments|Action steps|
|-----|-----|-----|-----|-----|
|Get the new Sandbox Org ID and instance Id if required|@ana-moreno|@ana-moreno||Find and update the Org ID/Instance ID on the Refresh issue|
|Backup & Anonymize Data|@ana-moreno|@ana-moreno (Or Admin user with Own access)|Developer, Test1, Test2|Create a backup of the sandbox and anonymize the data when backup is complete.|
|Reconnect RingLead user|@rrosue|@rrosu|Test1|After the RingLead Integration user has been reset and updated in 1Password, proceed with the following: <br> 1. Login to RingLead.<br>2. Locate the SFDC connections page.<br>3. Authenticate with the RingLead Integration user using the user password for this account in the production org (stored in 1Password).|
|Reconnect CustomerDot|@ebaquet|@ebaquet & team||Follow instructions on the relevant Refresh template for which user to reset. <br>1. Reset the CustomerDot user for the org and retrieve the Security Token and update in 1Password.<br>2. Retrieve the Subscription Customer Portal Consumer Key & Consumer Secret and update the 1Pass user as well.<br> 3. Provide the login to the Fulfillment team for reconnection.|
|Reset User Passwords|@monalibhide <br> @xliawang <br> @bienrcb |@sheelaviswanathan  ||Reset user passwords where requested/needed. If users are frozen, unfreeze and reset.|
|Regenerate API Tokens/Keys|@sheelaviswanathan |@sheelaviswanathan ||If you have managed packages with API keys, ask the System team to regenerate the keys and update the user in 1Password|
|If you have "power users" that will coordinate User Acceptance Testing - create entries in Delegated Administration area so they can "login as"|@sheelaviswanathan |@sheelaviswanathan |||
|Reestablish Marketo Sync|Marketing Operations|Marketing Operations|Marketing Sandbox/Staging| Must create new field for `Marketo Sync` (Boolean) on Leads and Contacts in staging before reconnecting. <br>This box should be unchecked, but editable by Mops profile and added to page layout for Mops. Mops will need to request Marketo support to set up custom sync before reconnecting. |
|Re-authenticate Marketo Sync (Systems Tasks)|Sales Systems|Sales Systems|Staging|[Configure connected Oauth App](https://experienceleague.adobe.com/docs/marketo/using/product-docs/crm-sync/salesforce-sync/log-in-using-oauth-2-0.html?lang=en), provide consumer secret, key and new OrgID to Mops. |
|Re-authenticate Marketo Sync (Mops Tasks)|Marketing Operations|Marketing Operations|Marketo Sandbox| Create support ticket to re-map. Once re-map is completed, connect by updating [OAuth information](https://experienceleague.adobe.com/docs/marketo/using/product-docs/crm-sync/salesforce-sync/log-in-using-oauth-2-0.html?lang=en). Then, click `Login with salesforce` > use custom domain > `gitlab--staging` and login with Marketo Integration details in 1pw vault. Systems may need to provide verification code sent to admin email. Confirm mappings and sync.|
| Setup new DKIM key and add to gitlab.com DNS|Sales Systems|Sales Systems|Test1| Setup a new DKIM key following the [instructions here](https://help.salesforce.com/s/articleView?id=sf.emailadmin_setup_dkim_key.htm&type=5).  Once the key has been published, provide the CNAME and Alternate CNAME values to the GitLab IT team to add to the DNS for gitlab.com.  Once this is done, confirm an email can be sent to an external email address from a Case using the 'Send an Email' feature, and the email is delivered without issue.|

#### How to access a Sandbox after a Refresh

When a lower-level environment (Sandbox) has been refreshed, depending on your level of access to Production, you may or may not have access.

##### Active Production License

If you have an active license to Production, and you were found to have been logged into a lower-level environment prior to refresh, you will have been included in the `Sandbox Access - Business Users` Public Group. This Salesforce feature allows us to grant easy access to users after a refresh without having to update their email. To regain access, the Salesforce User Management team will provide Password Resets to anyone who requests. In case you have forgotten your username/password, please see the [Refresh Cadence](/handbook/sales/field-operations/sales-systems/#refresh-cadence) table for standard username stylization.

##### Inactive Production License (Previous Access)

If you do not currently have access to Production, but previously had access, it is possible that your user was included in the `Sandbox Access - Business Users` Public Group. Please contact the Salesforce User Management team for renewed access by creating an [Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) and adding label `entapps access requests`.

#### Refresh cadence

Sandboxes which are managed as part of our team's SDLC process will follow a regular refresh schedule, as detailed below.

|Sandbox name|URL|Sandbox type|Standard Username|Used for|Refresh cadence|Last refresh date|Next refresh issue|Zuora Billing Sandbox|Zuora Billing Sandbox Tenant ID|Critical Connected Integrations|
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
|[Developer](https://gitlab--developer.sandbox.my.salesforce.com)|https://gitlab--developer.sandbox.my.salesforce.com|Partial|<email>.developer|Developer integration and testing org. |As needed, up to once per month, minimum once per quarter|[12/26/2024](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/6403|TBD|Developer Sandbox (i.e. "Dev Sandbox")|10002574||
|[Test1](https://gitlab--test1.sandbox.my.salesforce.com)|https://gitlab--test1.sandbox.my.salesforce.com|Full|<email>.test1|Pre-production org. Used for UAT of Systems issues prior to release to production. Also used for troubleshooting.|As needed, up to once per month, minimum once per quarter|[06/10/24](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/5698)|[TBD Early 2025](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/6663#note_2171037981)|Central Sandbox 2|10000796|CustomerDot<br>Marketo<br>Vartopia<br>RingLead<br>Traction<br>PSQuote|
|[Test2](https://gitlab--test2.sandbox.my.salesforce.com)|https://gitlab--test2.sandbox.my.salesforce.com|Full|<email>.test2|Used for UAT of Systems . Also used for troubleshooting.|As needed, up to once per month, minimum once per quarter|[1/9/25](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/7074)|TBD|Central Sandbox 1 (i.e. "Staging Sandbox")|10000719|CustomerDot|

## <i class="fas fa-users" id="biz-tech-icons"></i> How we Operate

## Technical Documentation

- [Go-To-Market Technical Documentation](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/)
- [Go-To-Market Integrated Environments](/handbook/sales/field-operations/sales-systems/gtm-integrated-environments/)
- [License Usage App Documentation](/handbook/sales/field-operations/sales-systems/license-usage-app/)
- [Salesforce Configuration Documentation](/handbook/sales/field-operations/sales-systems/salesforce-config/)
- [Lead Source Master Data Set](/handbook/marketing/marketing-operations/#initial-source)
- [Salesforce Dataloader Install/Uninstall/Upgrade Instructions](dataloader-installation/)

## Working with us

- [Sales System Agile Board](https://gitlab.com/groups/gitlab-com/-/boards/1117318?label_name[]=SalesSystems)
- [Sales Systems Project](https://gitlab.com/gitlab-com/sales-team/field-operations/systems)
- [Salesforce.com APEX repository](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src)

## How We Work

- The Sales Systems team works in two week sprints/iterations which are tracked as Milestones at the `GitLab.com` level. This aligns the Sale Systems team with how many of our business partners operate but also takes advantage of one of the solutions that [GitLab provides](https://about.gitlab.com/solutions/agile-delivery/)
- The Systems team strives to emulate the principles below in planning and executing on our milestones as we believe it most effectively aligns our team with [GitLab's Values](/handbook/values/#credit)
  - ["Start less, finish more"](/handbook/engineering/development/sec/software-supply-chain-security/pipeline-security/#starting-new-work)
  - ["Reduce Issue Churn"](/handbook/engineering/development/ops/verify/runner/#goals)

### Steps to getting help from Sales Systems

1. Create an issue in our [project](https://gitlab.com/gitlab-com/sales-team/field-operations/systems), making sure to provide detailed business requirements for the ask or problem. Please leave assignee blank
    - If this issue removes any existing functionality, or requires any components to be deprecated, please include the `technical debt` label on the issue.
2. In order to align our working style with the Labels, the Systems team prioritizes working on issues in the order as they get added & the issues get labeled accordingly
3. The Systems Label Workflow and Label Description are as follows

      ![The Systems Label Workflow](/images/sales/Systemsworkflow.png)

      - ![Sales Systems](/images/sales/Salessystems.png) New Issues that are created in the systems board are automatically tagged and any existing issues related to sales systems are tagged with this label
      - ![Need More Information](/images/sales/SSNeedinformation.png) Issues awaiting for information from the requester, needs more clarity in requirements may or may not be assigned to milestone and assigned to the DRI and/or systems team member
      - ![Out Of Scope](/images/sales/SSOutscope.png) Issues that are outside the parameters of an initiative, cannot be combined with current functionality and this issue will be closed
      - ![Ready For Assignment](/images/sales/SSReadyassingment.png) Issues that have completed requirements gathering and been accepted, no milestone and not assigned to systems team member
      - ![Assigned](/images/sales/SSAssign.png) Issues that are ready to moveforward to be worked on, slotted to a milestone & assigned to systems team member's queue
      - ![Build](/images/sales/SSBuild.png) Issues that are in the current milestone, assigned to systems team member that are actively worked on
      - ![Ready To Business Owner Review](/images/sales/SSBusinessowner.png) Issues in current milestone that are near the finish line, needs to be reviewed and demoed to the business owner(s) to sign-off
      - ![Ready To Deploy](/images/sales/SSReadydeploy.png) Issues in current milestones, sign-offs given by the business owner that are ready to be deployed by systems team member
      - ![Blocked](/images/sales/SSBlocked.png) Issues in the current milestone which are assigned to systems team member which are stalled due to technical difficulties and/or assigned to business owner pending to provide information to the systems member to move forward

4. Please review the status of any issue on our agile [board.](https://gitlab.com/groups/gitlab-com/-/boards/1117318?label_name[]=SalesSystems)
5. If there is a severity impacting the flow of business (i.e. No one can make a quote, No accounts are being created, Opportunities cannot be closed Won) follow the process as described above as well as share the issues in the `Sales-Support` Slack Channel

## Sales Systems Issue Deployment & Compliance Steps

 In order to deploy & close an issue the checklist below has to be signed off :

- [ ] 1. [Business DRI] Business User Acceptance Testing Complete with Evidence
- [ ] 2. [Business Program Owner] Business Process Owner sign-off.
- [ ] 3. [Systems Owner] Systems Owner Sign-off.
- [ ] 4. [Systems DRI] Add the correct `SalesSystems::Deployed - #` GitLab Label
- [ ] 5. [Systems DRI] Screenshot of Completed Change Set Attached and MR Attached (if Code)

### [Business DRI] Business User Acceptance Testing Complete with Evidence

The Business DRI should sign off after validating the provided solution works as expected as `definition of done`. The Business DRI will add evidence in the issue or in few scenarios the systems team member will be providing the evidence for the business DRI to confirm in the issue

#### [Business Program Owner] Business Process Owner sign-off

Business Process Owner pertaining to the team should provide signoff. The signoff matrix is below pertaining to the Team / Department

| Team / Lane                 | Main Approver                                                                                  | Backup Approver                                  |
|-----------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Quote To Cash               | Director, Quote to Cash                                                                        | Senior Director, Sales Operations                |
| Territory Management        | Director, Sales Operations                                                                     | Senior Director, Sales Operations                |
| Ecosystems                  | Director, Sales Operations                                                                     | Senior Manager, Global Ecosystem Specialists     |
| Customer Success Operations | Senior Director, CS Strategy & Operations                                                      | VP, Field Operations                             |
| Sales Operations            | Director, Sales Operations                                                                     | Senior Director, Sales Operations                |
| Deal Desk                   | Sr. Director, Deal Desk                                                                        | Senior Director, Sales Operations                |
| Professional Services       | Director, Professional Services                                                                | VP, Professional Services & Education            |
| Marketing Operations        | Director, Marketing Operations                                                                 | Senior Director, Marketing Strategy & Platforms  |
| Sales Dev Operations        | Director, Sales Development Operations                                                         | VP, Sales Development                            |
| Sales Compensation          | Director, Sales Commissions                                                                    | Senior Director, Sales Operations                |
| Legal                       | Director, Legal Compliance and Ethics                                                          | VP, Legal                                        |
| Sales Systems               | Senior Manager, Sales Systems                                                                  | Senior Director, Enterprise Applications         |
| Fulfillment                 | Group Manager, Fulfillment                                                                     | VP, Product Management                           |
| Data                        | Director, Data Analytics                                                                       | VP, Data & Analytics                             |

#### [Systems Owner] Systems Owner Sign-off

Salesforce CRM System Owners should provide the signoff. The signoff matrix is an below

| Main Approver                                         | Backup Approver                                                       |
|-------------------------------------------------------|-----------------------------------------------------------------------|
| Sheela Viswanathan - Senior Manager, Sales Systems    | Nabitha Rao - VP, IT                                                  |
| Korben Carreno - Manager, CRM Systems                 | Raul Pavon - Director Enterprise architecture and Applications        |
| Kiran Chinthapalli - Director, CRM Systems            | Nishanth Sekhar - Director, Enterprise Applications (Lead to Cash)    |
|                                                       | Monali Bhide - Manager, IT Enterprise Applications Engineering        |
|                                                       | Pratik Gupta - Manager, IT Enterprise Applications Engineering        |

#### [Systems DRI] Add the correct `SalesSystems::Deployed - #` GitLab Label

Once the issue has been deployed, the issue should be tagged with one of the following deploy label following the [SDLC - Software Development Life Cycle](/handbook/sales/field-operations/sales-systems/#salesforcecom-change-management-processes-and-sdlc-software-development-life-cycle) by the sales systems team member assigned to the issue

- SalesSystems::Deployed - 0 - No Changes
- SalesSystems::Deployed - 1 - Settings Change
- SalesSystems::Deployed - 2 - Configuration Change
- SalesSystems::Deployed - 3 - Code Change

#### [Systems DRI] Screenshot of Completed Change Set Attached and MR Attached (if Code)

If the issue ended up in label `SalesSystems::Deployed - 2 - Configuration Change` OR `SalesSystems::Deployed - 3 - Code Change` the systems member assigned to the issue should add the screenshot of the change set

## Milestone Review and QA

Before a milestone can be closed, the following checks are performed by Sales Systems leadership:

1. All issues in the Sales Systems project and authored or assigned to a Sales Systems team member should have the Sales Systems Label.
1. All closed issues with the Sales Systems label should be assigned to a Milestone.
1. All closed issues in a Milestone need to make sure their SDLC steps below have been completed and have a final deploy label.

### SFDC Development Guidelines

**Before beginning work, make sure:**

1. You have a fully setup local SFDC Dev Environment.
    - [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432)
    - [Salesforce Trailhead: Setting up your VS Code](https://trailhead.salesforce.com/en/content/learn/projects/find-and-fix-bugs-with-apex-replay-debugger/apex-replay-debugger-set-up-vscode)
2. You have access to a personal [SFDC Dev Sandbox](https://gitlab.my.salesforce.com/07E?retURL=%2Fui%2Fsetup%2FSetup%3Fsetupid%3DDeploy&setupid=DataManagementCreateTestInstance).
3. Your SFDC Dev Environment is correctly pointed at your SFDC Dev Sandbox
4. You have cloned our [Git repository](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src) into your local Sandbox working directory.
5. You are working from a GitLab issue with clear technical specifications that deliver on the agreed business requirements.
6. You have identified the priority of the request based on our [priority matrix](/handbook/sales/field-operations/sales-systems/), and added the appropriate label: `Priority::Low`, `Priority::Medium`, `Priority::High`

**Change Managment Steps:**

1. Make sure you start on branch master and `git pull`.
2. Create a new branch, giving it a name that ties back to the issue: `git checkout -b "SalesSystems-158"`.
3. If you are writing code, frequently push your changes to your sandbox using and `SFDX: Deploy Source To Org` on the changed classes, triggers or pages.
4. If you are editing configuration, frequently pull down your changes to your local environment using `SFDX: Retrieve Source From Org` on the changed objects or metadata.
5. Make sure to write and run a unit test for code, and for both code and config, test the changes by hand in the SFDC user interface.
6. When you feel your iteration is complete run `git status` to make sure the changed files are the ones you expected.
7. Add in the files you wish to commit with `git add [filename]` or `git add *` if you want to add all changed files.
8. Commit your changes with a relevant message: `git commit -m "Fixing Apex CPU Errors"`.
9. Using the link provided by GitLab, open a merge request, [make it a `Draft:`](/handbook/about/editing-handbook/#marking-a-merge-request-as-draft), and assign it to the Architect on the project.
10. Comment on the related issue with an @ to the project's Architect for review, providing a link to the merge request. (this automatically links the merge request to the issue)
11. The Architect (or assigned delegate) will assign the story a Change Management level, based on the scope of the change as defined [here](https://internal.gitlab.com/handbook/IT/it-change-management/#change-request-types).
12. You will then need to document that the appropriate approvals (as defined in the [Approval Matrix](/handbook/sales/field-operations/sales-systems/#approval-matrix) section below) have been completed in the issue.
13. If the Architect calls for a live demo, schedule the meeting and prep your sandbox to do a run through with the end customer.
14. If the Architect calls for user acceptance testing, make sure the assigned testers have access to the sandbox where the work was done, and schedule testing.
15. Once the solution passes, the Architect will remove the `WIP:` status and merge the change.
16. Once merged, package up all relevant files into a Change Set from your Sandbox to Production (or to a Staging instance if the Architect requests it).
17. Name the Change Set the same as the issue/branch: `SalesSystems-158` and push to production.
18. Once the Change Set arrives in production, validate it. If there are any errors, go back to step 3. If steps 3, 4, and 5 are followed errors at validation should be rare.
19. Once the Change set validates, ping the Architect to schedule the deployment.
20. After the deployment, perform any post deployment steps such as adding visibility to net new fields.
21. Confirm with the end user that the functionality is working as expected.
22. Create a merge request to our [technical documentation](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/) adding the new feature or editing the features entry.
23. Before moving to your next task rebase with `git checkout master` then `git pull`. **Always be pulling!**
24. Clone the merged change set that was deployed into production and push and deploy this change set to staging. (Post deploy steps and setup are optionable)

#### Installed Packages

[Installed packages](https://help.salesforce.com/s/articleView?id=sf.distribution_installed_packages.htm&type=5) are provided by ISVs ( Independent Software Vendor) who work on the Salesforce platform, and contain the code and configuration for Salesforce which extend the capability of the platform.  These are commonly installed and requested by our business partners to extend Salesforce's native capabilities.

##### Is the package Managed vs Unmanaged?

Packages come in two flavors, [managed or unmanaged](https://developer.salesforce.com/docs/atlas.en-us.188.0.packagingGuide.meta/packagingGuide/packaging_about_packages.htm).  Managed packages are equivalent to signed apps, with self contained source sealed inside of the package.  Unmanaged packages are unsigned, and generally contain raw code and configuration.

Generally, vendors either provide managed packages via the [Salesforce AppExchange](https://appexchange.salesforce.com/), or via direct installation from their repository.  Unmanaged packages generally are provided by the vendor, and may contain raw source or configuration which needs to be manually installed.  Note, any code provided the GitLab remains the IP of the vendor provided, unless specific accommodations are provided (such as if we contract with a vendor to extend their base functionality).  Because of these additional considerations, unmanaged packages require additional steps to be completed as part of the installation process.

Any package code is the responsibility of the vendor who produced it to support and troubleshoot.  If issues are encountered with the functionality, please contact the vendor in question to troubleshoot.  If there are changes recommended by the vendor to our environment, log an issue with Systems to track any changes which are requested by the vendor using one of the two processes below.

##### System stability comes first

We (Sales Systems) reserve the right to remove or uninstall managed or unmanaged code at any time, if this package is determined to cause issues related to system performance or limitations.

If we are accepting unmanaged code or config, we will choose whether to accept these on a case-by-case basis. Unmanaged packages offer significant risk and resource utilization over our managed code. Our goal is always to accept managed packages from vendors.

##### Managed Package Installation/Upgrade Process

1. Identify the package and what reason(s) you may think it should be installed or upgraded.
1. Install the version of the package you want to install inside of your sandbox environment.
1. Test and confirm the functionality provided meets your requirements, and has no negative impacts to existing functionality.
1. Open an issue with Sales Systems to install the package in the STAGING environment.
    - Ensure you include links to the package and the install instructions provided by the vendor in the description of the issue.
1. Once the package is installed in STAGING, if confirmed to move forward, test and confirm the functionality provided meets your requirements, and has no negative impacts to existing functionality
1. If successfully installed in STAGING, announce the intent to move forward in installing in production, and prepare training documentation.
1. Document any relevant information about the package as part of the handbook.
   - An example of this could be SFDC fields that are part of the package, and the business processes it supports.
1. Install the package in production, update the issue and close out.

##### Unmanaged Package Installation/Upgrade Process

1. Identify the package and what reason(s) you may think it should be installed or upgraded, along with any custom code or configuration which needs to be installed separately.
1. Install the version of the package you want to install inside of your sandbox environment.
1. Test and confirm the functionality provided meets your requirements, and has no negative impacts to existing functionality.
1. Open an issue with Sales Systems to install the package in the STAGING environment.
    - Ensure you include links to the package and the install instructions provided by the vendor in the description of the issue, along with the inventory of any components installed outside of the package.
1. Create a branch in our [Git repository](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src) to include any custom code or metadata created as part of the unmanaged package which will be tracked in GitLab source.
1. Request a package review of the branch by Systems, by assigning the MR to the Sales Systems developers.
1. Once the package is installed in STAGING, if confirmed to move forward, test and confirm the functionality provided meets your requirements, and has no negative impacts to existing functionality
1. If successfully installed in STAGING, announce the intent to move forward in installing in production, and prepare training documentation.
1. Document any relevant information about the package as part of the handbook.
   - An example of this could be SFDC fields that are part of the package, and the business processes it supports.
1. Install the package in production, update the issue and close out.

##### Installed Package Removal Process

The uninstall process is the same regardless of whether a package is managed or unmanaged.

1. Identify the package and what reason(s) you may think it can be removed.
2. Perform initial research on what the packages original intent may have been and identify who owns/owned the use of the functionality.
   - GitLab's Tech Stack Google Sheet is a great place to check for this information and [can be found here](https://docs.google.com/spreadsheets/d/1mTNZHsK3TWzQdeFqkITKA0pHADjuurv37XMuHv12hDU/edit?usp=sharing)
3. Open an issue with the owner to investigate further. In this discussion, obtain confirmation on whether or not it may be removed.
   - Add the `technical debt` label to the issue.
4. If confirmed to move forward, test by removing the package from the sandbox.
5. If successfully removed from sandbox, announce the intent to move forward in removing.
6. Document any relevant information about the package.
   - An example of this could be SFDC fields that are part of the package.
7. Remove the package from production, update the issue and close out.

### Field & Process Deprecation

- Since field & process deprecation is as common an occurrence as the creation it is important that the system team implements a repeatable process that we can leverage when deprecating any fields pr processes.

#### Field Deprecation

- This process is most often used by the systems team. If you have or are aware of a field in Salesforce that is no longer needed, please inform the Sales Systems team by following the process outlined in [getting help from the sales systems team](#steps-to-getting-help-from-sales-systems)

1. Open an issue listing out all of the fields that we are investigating to deprecate. Be sure to include the field name, field API name and the object that the field is associated with in a table in the description of the issue.  Add the `technical debt` label to the issue.
2. Alert the data team to the upcoming field deprecation by tagging them on the issue.
3. Alert all relevant partner teams (Marketing Ops, Sales Ops, Finance Ops etc.) as needed
4. Prepend `[DEPRECATE]` to the beginning of the field name. If the field name cannot accommodate a field name that long copy and paste the original name into the description, trim unnecessary characters from the name and try again. For this reason `[DELETE]` is also acceptable to prepend to the field name.
5. In Visual Studio Code, pull from master and perform a scan for each of the API names in the issue. If the field is used, investigate if the code can be updated as to not include this field.
6. If code is updated in the previous step prepare a merge request and relate it to the issue.
7. If your sandbox is out of date, [work with the Systems team to refresh it](/handbook/sales/field-operations/sales-systems/#sandbox-refreshes) so that any recent edits are included in the next step.
8. Push any updated code to your sandbox (if applicable) and start a change set.
9. For all fields that are still eligible to be deprecated log into your sandbox and attempt to delete them one by one. Record any connection between any fields and any field updates, workflow rules, validation rules etc. (Reports, Report Types etc can be ignored in this step)
10. Investigate any connections found in the previous steps and if the field can still be deleted.
11. For all fields that cannot be deleted

    - Link the investigation issue to the investigated field by pasting the GitLab Issue Link in the fields description.
    - Assign someone as an owner of the field in Salesforce

12. For all fields that can be deleted

    - List them out on a final comment on the issue
    - Update the due date of the issue to the date they will be deleted
    - Confirm that there are no issues with the tagged related teams
    - Validate any change sets with updated automations (if applicable) before the issue due date
    - On the issue due date deploy any change sets and delete the fields from production. If possible allow for a 1 day lag time between field deletion and deleting fields from the `Deleted Fields` section in Salesforce

#### Process Deprecation

- Deprecating a process often includes a change in team behavior as well as updates to any processes. The Systems team is working on detailed documentation to address these changes and more info will be coming soon!

#### Deactivate Service User

- This deactivation process is made to deactivate service user profiles. Service accounts are accounts that are used as integration Users, Connection users etc., in order to deactivate the service user account follow the [template](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=). Please note deactivating standard users will be done by Sales Operations.

## Sales System's journey with CI/CD using GitLab and Salesforce

We have begun the journey of further leveraging our own GitLab tool by creating our first pipeline for our own Salesforce environment!

Our own pipeline is based on the great work done by @mayanktahil and @francispotter: [the SFDC CI/CD templates](https://gitlab.com/sfdx/sfdx-project-template).  If you are interested in more information about this project and want to see it in action, check out [Salesforce Development with GitLab](https://www.youtube.com/watch?v=Z1JSIFLdIB4) and [Accelerate DevOps with GitLab and Salesforce](https://www.youtube.com/watch?v=tylPp9QlLu4)

With this comes some change, as we are now more stricly enforcing [compliance controls](/handbook/security/security-assurance/security-compliance/guidance/compliance/) by limiting manual changes into the STAGING org.

Effective 2/16/2022, the following methods are the only approved way to deploy to STAGING.

- Via inbound change sets from another GitLab owned sandbox
- Via vendor package installs or upgrades
- Automatic deployments via our CI/CD pipeline

### Our CI/CD template

Our own version of this CI/CD template can be found [here](https://gitlab.com/gitlab-com/sales-team/field-operations/salesforce-src/-/blob/master/.gitlab-ci.yml).  It is a simplified version, to allow us to [iterate](/handbook/values/#iteration).

This template removes the capabilities to use [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.234.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm) in favor of using an [Org-based deployment model](https://trailhead.salesforce.com/content/learn/modules/org-development-model).  The model used by this CI/CD file has a single environment configured, denoted as 'STAGING'.  The deployment script also limits deployments only to ApexClasses, ApexTriggers, ApexPage, and ApexComponents stored in the root source directory.

The pipeline performs the following action:

- Whenever a commit is made to a branch related to a Merge Request, install the SFDX CLI on a runner and execute the sfdx force:source:deploy method to perform a validation deployment against STAGING.
- This validation deployment will compile all ApexClass, ApexTrigger, ApexComponent, and ApexPage objects found in the new commit source branch.
- If the compile succeeds, all unit tests in the SANDBOX org will be executed to confirm all unit tests are passing.
- If the compile or unit tests fails, the pipeline will spit out the errors as individual line items in the output of the job.
  - The MR will then be blocked from merging.
- If the compile succeeds and unit tests pass, the MR will be cleared for merging after code review is complete.
  - The pipeline will also allow for the user to trigger a deployment of the source code to the STAGING environment.
  - This is a manual process for now (see [What's next?](#whats-next)) and will be triggered by the person who is merging the MR once the merge has completed.
    - The team decided to leave this step manual so that we have flexibility on deployments in case multiple MRs were being merged simultaneously.
    - In this scenario, we will only deploy the last MR as it will have the final complete 'master' branch will all previous MRs merged.

### Benefits of the pipeline

- All channges to ApexClasses, ApexTriggers, ApexPage, and ApexComponents stored in the Sales Systems source will now be managed directly from source, rather than having to be managed manually through change sets or via manual deploys.
- We reduce the number of manual changes to the STAGING environment, limiting potential conflicts and issues creeping into production.
- We can leverage [the power of GitLab Analytics](https://docs.gitlab.com/ee/user/analytics/) to better understand how we can better run our team!

### What's next?

We are beginning to explore using [Sandbox Source Tracking](https://developer.salesforce.com/blogs/2021/01/learn-moar-with-spring-21-sandbox-source-tracking), a feature Salesforce released last year to enable easy export of configuration changes from a developer environment into source control.

This tool will enable our admins to track complex changes to their developer orgs and easily check these into source control.

Once we do so, we can expand our pipeline to include these objects in our pipeline in STAGING.  This will allow us to validate administrative changes such as field renames, picklist value changes, validation rules, workflow, or flows, and deploy them quickly to STAGING.  As this removes the manual step for admins to build change sets from their environments into STAGING, it will save them time to focus on other things.

After this, our next goal will be to see if we want to start automating deployments to STAGING once an MR is merged.  This will only save us a click, but is an important step for us as a team to become comfortable with using the process of automated deployments into our STAGING environment.
