---
title: "Using the Customer Collaboration Project as a CSM"
description: "Best practices and setup guide for Customer Success Managers using Customer Collaboration Projects to manage customer data, requests, and collaborations."
---

View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

## The Customer Collaboration Project

A customer collaboration project facilitates the collaboration and partnership of the customer and GitLab with dogfooding means. It provides transparency and accountability to all involved parties. Additionally, it enables the teams to continuously exchange documentation and track changes within the teams. The Customer Collaboration Project is typically used when a prospective customer is approaching the stage where a Proof of Value is needed.

### Where to find the Customer Collaboration Projects

The Customer Collaboration Projects are located in a Sub-Group, called [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management), of GitLab-com so members of the Sales and Customer Success team can create Projects to collaborate with their customers and prospective customers.

Access is granted to members of the [timtams Group (ID: 3174702)](https://gitlab.com/groups/timtams) on gitlab.com.

The projects are further ordered into Sub-Groups by region:

- [Western North America](https://gitlab.com/gitlab-com/account-management/western-north-america)
- [Eastern North America](https://gitlab.com/gitlab-com/account-management/eastern-north-america)
- [EMEA - Europe, the Middle East and Africa](https://gitlab.com/gitlab-com/account-management/emea)
- [APAC - Asia & Pacific Accounts](https://gitlab.com/gitlab-com/account-management/apac)
- [Commercial - Commercial Account Management](https://gitlab.com/gitlab-com/account-management/commercial)
- [Public-Sector](https://gitlab.com/gitlab-com/account-management/public-sector)

### Use cases for the Customer Collaboration Projects

- The encompassing group for the customer collaboration project has space for other special projects (Proof of Value, Value stream assessment, different Subscription at the customer) or an [Group access token](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html) - API key for automations.
- Agenda Issue for cadence or other meetings with the customer, via [agenda issue template](https://gitlab.com/gitlab-com/account-management/templates/collaboration/-/blob/master/.gitlab/issue_templates/Meeting%20Agenda.md) or on [group Level](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/tree/master/.gitlab/issue_templates).
- Conversations about Initiatives with the Customer, including collaborating with other GitLab members by [@ mentioning](https://docs.gitlab.com/ee/user/discussions/#mentions) into this issue.
- Async Planning of Enablement Sessions [@ mentioning](https://docs.gitlab.com/ee/user/discussions/#mentions) GitLab contributors in the issue.
- Async retrospectives, with [retrospective issue creation](https://gitlab.com/gitlab-org/async-retrospectives).
- SA (Solution Architect) activities tracked for example demos or POVs.
- Architecture diagram with history (git history).
- List of [Members in the Zendesk Support](https://about.gitlab.com/support/managing-support-contacts/#managing-contacts) [Shared Organization](https://about.gitlab.com/support/managing-support-contacts/#shared-organizations) maintained by the customer with full history for governance (git history).
- [TAM Issue tracker](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools/tam-issue-tracking) Tracking of product feature requests.
- Interacting with the Product Team and [Prioritizing Customer issues](/handbook/product/product-processes/customer-issues-prioritization-framework/#customer-success).
- [Public Pages for Issue creation](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/tree/master/public).
- [ServiceDesk Function](https://docs.gitlab.com/ee/user/project/service_desk/), to enable other users of the customer without a role in the Customer Collaboration Project to create issues. The CSM should notify the customer that the Collaboration Project is not meant for product support and troubleshooting inquiries.
- Sharing service ping metrics, graphics, and Usage metrics guides via PDF, CSV with GitLab from the Customer ([configure Collab project for LFS](https://docs.gitlab.com/ee/user/project/settings/index.html#configure-project-visibility-features-and-permissions)).
- Storing EBR and other meeting recordings ([configure Collab project for LFS](https://docs.gitlab.com/ee/user/project/settings/index.html#configure-project-visibility-features-and-permissions)).
- Store Meeting Minutes.
- Providing the [GitLab Support Team](/handbook/support/) and their Architecture Diagrams app access to the [Infrastructure Diagram](/handbook/support/workflows/looking_up_customer_technical_details/#architecture-diagram-and-customer-success-project)
- GitLab exploration. Allowing the customer access to an Ultimate tier namespace can come in handy for exploration of uses they may not have access to in their own instance. Also, it exposes them to our use of issues/epics/boards and may drive some interest in expanding their own use of these features.
- Issue Boards with [scoped labels](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels) as [workflow states](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels-examples).
- Provide:
  - Training recommendations.
  - Important links & resources.
- The use cases of Pre-Sales assets are described in this [Handbook Page: Solutions Architecture Collaboration Project](/handbook/solutions-architects/processes/collaboration-project/)

### Setup a Customer Collaboration Project for Customer Success Managers

Projects should be created with a Visibility Level of Private.

#### Please follow these instructions when you receive a customer from pre-sales

1. Check with the SA or SAE if a collaboration project was used in pre-sales, it should be located in [account-management/pre-sales](https://gitlab.com/gitlab-com/account-management/pre-sales).
2. Check in with the SAE and SA if they want to remove issues before the move.
3. If the project exists, create a subgroup in [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[SEGMENT] named like the customer.
4. Navigate to the existing collaboration project.
5. Go to Settings > General > Expand Advanced Settings > Transfer Project - move the project to [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[SEGMENT]/[CUSTOMER-GROUP].

#### Please follow these instructions when a Customer Collaboration Project does not exist

The Customer Collaboration Project template contains pre-populated issues, labels, milestones, documentation and information necessary to facilitate a collaboration project with a customer.

The customer's team should be included on the project and begin to work collaboratively together on the success and enablement of the customer and their relationship with GitLab.

1. Create a subgroup in the appropriate subgroup [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[SEGMENT] named like the customer (Visibility Level should be Private).
2. Go to this subgroup [gitlab-com/account-management/](https://gitlab.com/gitlab-com/account-management)/[SEGMENT]/[CUSTOMER-GROUP].
3. Click 'Create New Project'
4. Click 'Create from template'
5. In the top filter (e.g. Built-in, Instance, Group), Select 'Group'
6. Click 'Use template' next to the [Customer Collaboration Project Template](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template)
7. Prefix the name of the new project with Customer Name
8. Go to the settings of the new project and change the project avatar to the customer's logo
9. Complete the [README](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/blob/master/README.md) file - make sure you replace all areas where there are [SQUARE BRACKETS] around text with the appropriate customer information
   1. IMPORTANT: This README is customer facing. Please be thorough when filling out sections and use customer presentable language that demonstrates a strong understanding of their needs and requirements.
10. Invite the customer's team as direct members to the Customer Collaboration Project with 'Developer' role
11. Discuss with the customer if some of their team members should have the 'Maintainer' role, so that they can manage the users themself.
12. Subscribe to new issues in the Project and all applicable labels.
13. Adjust the Feature Request and Agenda issue Templates in your collaboration project. The other [issue templates are on Group Level](https://gitlab.com/gitlab-com/account-management/sub-group-issue-templates/-/tree/master/.gitlab/issue_templates).
14. Introduce the customer to the collaboration project.

#### Please follow these instructions when you receive a customer from another CSM

1. Update the contents of [README](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/blob/master/README.md) file.
2. Check the direct members and settings of the Projects.
3. Subscribe to new issues in the Project and all applicable labels.

#### General Actions on a Customer Collaboration Project

1. Set the [notification level on the Customer Collaboration Project](https://docs.gitlab.com/ee/user/profile/notifications.html#change-level-of-project-notifications) to either ["Watching" or "Custom"](https://docs.gitlab.com/ee/user/profile/notifications.html#notification-levels) to get notified, if the customer opens an issue for example.
