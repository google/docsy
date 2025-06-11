---
title: Selling Professional Services
---

This is a practice guide for a Solutions Architect (SA) to position Professional Services to a customer during the sales cycle and gather the appropriate information to provide to the Professional Services Engagement Management Team for custom scoping, if necessary.  The overall workflow for selling Professional Services is defined in the [Professional Services Handbook - Selling Professional Services page](/handbook/customer-success/professional-services-engineering/selling/).

- See the [Positioning Professional Services Class](https://levelup.gitlab.com/courses/positioning-professional-services) on LevelUp for an overview.

## Types of Services

GitLab provides a wide array of [Professional Services offerings](https://about.gitlab.com/services/) to accelerate the customer's time to value in GitLab platform adoption and maturing DevOps practices.  Service offerings range from standard instructor-led training to custom services packages that address a specific customer need.  Generally, Professional Services are sold in one of two ways:

- via a sku on an order form - no SOW is needed for the customer to purchase these services; they can be added directly to an order form, in conjunction with a license purchase, when applicable.  the [Professional Services Catalog](https://about.gitlab.com/services/catalog/) has a full list of sku-based services offerings.  The most popular sku-based services are:
  - [GitLab Rapid Results - self-managed](https://about.gitlab.com/services/catalog/) for implementing GitLab in a cloud environment
  - [GitLab Migration+](https://about.gitlab.com/services/#migration-services) for migrating up to 500 projects and 1000 repositories from another git-based system to GitLab (SCM only - CI//CD is not included)
  - [GitLab Expert Services](https://about.gitlab.com/services/catalog/) - a block of 40 hours to help a customer with whatever adoption needs they have
- via an SOW as a "GitLab Service Package" - this is used for any custom package of services that are defined to address a specific customer need.  A custom SOW is typically used for these purposes:
  - bundling together source code migration and GitLab CI adoption/transition from other CI tools such as Jenkins
  - complex self-managed GitLab implementations within the customer's data center
  - health check services for existing customers, where the details of the offering and required effort will depend on the specific customer circumstances
  - migrations to GitLab where the Migration+ offering is not an appropriate fit

## Cross-team Collaboration

It is expected that the Solutions Architect lead in the positioning of Professional Services for new license opportunities as they transition from stage 3- Technical Evaluation to stage 4- Proposal.  Solutions Architects should be able to articulate the value of using Professional Services vs the customer doing the work on their own and should be able to choose the appropriate Professional Services offerings that will most benefit the customer.  If it is determined that a custom service package is likely the best option, then the Solution Architect or appropriate sales role (AE, SAE) should initiate the [custom services scoping workflow](/handbook/customer-success/professional-services-engineering/selling/#custom-scoped-services) by using the services calculator to create a scoping issue.  A Professional Services Engagement Manager will pick up the scoping issue and will collaborate with the account team to scope the appropriate services package.

When an existing customer is interested in Professional Services and there is not a current license opportunity, the CSM would typically work with the AE/SAE to identify the appropriate services and custom scope any needs, when applicable.  The CSM and/or PS Engagement Manager may request SA assistance when the customer has specific questions regarding GitLab capabilities as they are considering Professional Services options, e.g. if a customer is considering migrating from self-managed to SaaS, they may have questions about the differences between self-managed GitLab features vs. using the SaaS platform, limitations of SaaS, SaaS security considerations, consumption fees, etc.

We want to keep the customer experience in mind when people in multiple roles are interacting with the customer.  To this extent, it's important that:

- we share information we've learned about the customer internally in preparation for any call with them - while we want to validate and extend the depth of understanding of a customer's situation, we should not be repeatedly asking them the same basic questions.
- we act as a unified team helping the customer to reach their desired goals, documenting open questions, and following up with the appropriate team members to ensure that customer questions are being addressed.

As a guideline, team member responsibilities will break out as follows:

| Role | Activities |
| --- | --- |
| Account exec (AE/SAE) | Manage overall customer relationship, oversee and negotiate any contract terms with the customer, including subscription and services agreement, manage salesforce opportunity through closure |
| Solutions Architect | Answer technical questions related to the GitLab platform and unrelated to Professional Services offerings and approach, position PS options, and perform initial customer discovery for customers/prospects with active license opportunities|
| Customer Success Manager | Position PS options and perform initial customer discovery for customers without active license opportunities |
| PS Engagement Manager | Elaborate on details of PS approach and different services options, answer questions about customer expectations for PS engagement and prerequisites and preparation, determine the final scope of work and generate an SOW, shephard SOW through an approval process, transition services engagements to the delivery team |

## Discovery for Custom Services Scoping

To appropriately scope custom services engagements, the PS Engagement Manager will need details about the customer's current tool usage and the goals of GitLab.  Having a reasonable understanding of the customer needs ahead of a PS scoping call will help the PS Engagement Manager be efficient and productive in arriving at an appropriate services package that suits the customer's needs.  The PS Engagement Manager will provide guidance on what information is needed based on the specific scenario, but the list below is a reasonable starting point for most custom PS:

- Number of users currently using GitLab (if applicable) and number of planned users when GitLab has been fully rolled out
- Customer DevOps goals and priorities in adopting GitLab
- What tools is the customer transitioning from and replacing with GitLab? SCM (GitHub, Bitbucket, Svn, Perforce, etc), CI/CD (Harness, Jenkins,...), Project Management (Jira,...), Container and/or package registries, other?
- What tools will the customer plan to integrate GitLab with?
- What is the customer's planned deployment architecture?  SaaS or self-managed?  If self-managed, single node omnibus or HA implementation, and in a cloud (which one) or in the customer's data center?
- If looking to adopt GitLab CI/CD, what types of applications does the customer have?  Are they deploying to a cloud environment?  which one(s)?  Do they deploy apps in containers?  Are they using k8s for container orchestration?
- What version of GitLab is the customer on, or planning on deploying?  And what license tier - Premium or Ultimate?
- If the customer is looking to migrate from GitLab self-managed to SaaS, it will be helpful to have the customer run the [Evaluate](https://gitlab.com/gitlab-org/professional-services-automation/tools/utilities/evaluate) script.  This tool will provide a count of users and repositories, show which GitLab features are used in each project, and flag any project where the type or amount of data might be problematic for migration.

The Professional Services Team keeps a more detailed list of scoping questions pertaining to different types of services that customers request.  Details can be found on the [Professional Services EM Scoping Guidelines](/handbook/customer-success/professional-services-engineering/engagement-mgmt/scoping-information/#scoping-specific-types-of-services) page.
