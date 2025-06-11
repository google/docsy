---
title: Public Sector Solutions Architects
description: "Solutions Architects (SA) who work with the Public Sector provide subject matter expertise and industry experience throughout the sales process to Public Sector customers within the United States"
---

Solutions Architects (SA) who work with the [Public Sector](/handbook/sales/public-sector/) provide subject matter expertise and industry experience throughout the sales process to Public Sector customers within the United States.

Because specific requirements and common engagement practices differ from Enterprise or Commercial customers, the guidance below exists to assist Solutions Architects who work with customers in the Public Sector specifically.

## Federal Support

The GitLab Support Team provides [U.S.-based support](https://about.gitlab.com/support/us-federal-support) for those customers that require U.S. citizens to work their support tickets.

- The user that submits the ticket needs to be associated with the appropriate account in SFDC.
- All accounts and user information get synched between SFDC and Zendesk on an hourly basis under the conditions detailed on the [Support Ops page](/handbook/support/readiness/operations/docs/zendesk/zendesk_salesforce_sync/).
- All communications with support will be asynchronous, unless a synchronous call is requested by the Customer Success Manager and/or Solutions Architect for that account.
- Only customers designated as Public Sector in SFDC are eligible for Federal Support.
- When a Public Sector prospective customer begins a sales-assisted trial (including Proofs of Value), the Public Sector Solutions Architect will verify that the appropriate "Support Level" is set in the account record in SFDC (Premium or Ultimate).  This will ensure that the SLA for support is set correctly.

## Technical Close Plans

Technical Close Plans provide insight and transparency to the sales process by highlighting the technical ecosystem, competitive landscape, evaluation goals and technical steps required in order to achieve a technical win (Salesforce Stage 3). These plans are templated and only required for opportunities exceeding $100K in revenue.

To create a technical close plan:

- Log in to Salesforce and locate the relevant Opportunity
- Ensure the Opportunity is at stage 3 or is soon transitioning to stage 3
- Make a copy of the template document located in the Public Sector Google drive and rename it based on the customer and opportunity
- Complete the document fields with all known information
- Update the technical close plan with outcomes and next steps after each customer interaction

When the opportunity progresses to stage 4, the technical close plan is complete. A brief retrospective on the information helps the team identify trends in customer needs as well as clear paths to opportunity wins. In case of opportunity loss, a brief retrospective on the information can help populate the Closed Lost reason in Salesforce.

## Success Management Program Introduction

During each greenfield (new customer) sale, customers will move from the presales technical evaluation into procurement. During the presales period, the account sales team will introduce the Customer Success Management Program to [eligible customers](/handbook/customer-success/csm/services/#enterprise). This call will be led by the Solutions Architect.The introduction provides guidance on accessing GitLab Support, available CSM programs and GitLab Professional Services.

The goals of this introduction are many:

1. Smoothly transition the new customer to post-sales relationships for support, guidance, advocacy and growth
2. Ensure a smooth conversational shift from [Go to Market use cases](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/) to [DevOps stage adoption](/handbook/customer-success/csm/stage-adoption/)
3. Validate customer access to [GitLab Support](/handbook/support/)
4. Help the customer choose their level of CSM engagement after procurement
5. Ensure the customer understands available [GitLab Professional Services and Enablement](https://about.gitlab.com/services/catalog/) options

### Program Flow

Prior to introducing the program, the SA should ensure that all sales stage data is recorded and available to kick off the Success Management Program. The required workflow within [each sales stage](/handbook/sales/field-operations/gtm-resources/) is as follows:

Stages 0-2

- As discovery occurs in early sales stages, the Stage Technology fields on the Account record in Salesforce should begin to be populated.

Stage 3

- During the technical evaluation, the SA should verify as much as possible about the use cases within the customer ecosystem.
- By the end of stage 3, all Use Case Technology fields on the Account record should be populated.

Stage 4-5

- Once the technical win is achieved, the GitLab [Success Management data sheet](https://docs.google.com/presentation/d/1rrHPTr5RFIJPG1AmxSnUorg2c9IKluw1j39QkRbwmzo/edit#slide=id.g76a815dab5_0_68) (accessible by GitLab team members only) should be shared with the new customer.
- A call should be scheduled with the new customer and the sales team to introduce the Success Management Program as well as the Customer Success Manager, if the CSM introduction has not already happened during the technical evaluation.
- When the call is complete, the SA should log an activity of type 'call' that includes 'success management introduction' in the title.

### Program Introduction Resources

A customer-distributable [Success Management data sheet](https://docs.google.com/presentation/d/1rrHPTr5RFIJPG1AmxSnUorg2c9IKluw1j39QkRbwmzo/edit#slide=id.g76a815dab5_0_68) as well as an [accompanying slide presentation](https://docs.google.com/presentation/d/1xh-ZNm9xyKau6UHQtAyoYjMqf5kO9HYVU2y0O2LwQxM/edit#slide=id.g92b7b0fa4f_0_68) are available for use to guide the customer discussion. These resources are only available to GitLab team members.

## OpenShift FAQ

FAQ for customer engagements when customers are using OpenShift

**Q: How will the customer use GitLab with OpenShift?**

A: When working with a potential prospect its important to understand how that customer wishes to use GitLab and OpenShift together. Will the customer just deploy projects from GitLab to OpenShift? Does the customer wish to run a GitLab Runner within OpenShift? Or, does the customer need to run the GitLab Server within OpenShift? Knowing the answer to this is key before continuing the architecture conversation because GitLab currently can deploy to OpenShift, can run runners within OpenShift and run the GitLab server within OpenShift.

**Q: What is the planned release date for OpenShift integration?**

A: The GitLab Server Operator (the ability to run a GitLab instance on openShift) was released with GitLab v14.3. The GitLab Runner Operator was already released previous to v14.3.

**Q: What features currently do not work when running GitLab with OpenShift?**

A: SAST, DAST, AutoDevOps. These are on the roadmap with no designated date as of yet.

**Q: What OpenShift versions will the integration work with?**

A: OpenShift versions 4.5 through 4.8 are currently supported. Version 4.9 support is in the works. Versions 3.x and below will not be supported.

**Q: How can I (or my customer) track the integration status?**

A: [See this GitLab Epic](https://gitlab.com/groups/gitlab-org/-/epics/2068)

## Campus Program Technical Evaluation Playbook

The GitLab for Campuses program introduced flat rate pricing for universities based on size. In order for these campuses to evaluate GitLab's fit for their schools, labs, and students, a campus technical evaluation playbook was created.  The playbook covers personas, meeting types, options and outcomes associated with an ideal 4 to 8 week evaluation of GitLab for campuses with minimal to moderate knowledge of GitLab.

Solutions Architects can use this playbook to guide campuses through an evaluation of GitLab's broad technical capabilities. The [playbook](https://docs.google.com/spreadsheets/d/1vyRgC2auX0RYp34nqMMp8xr0YllhsVfxJ3EnGImtM9k/edit?usp=sharing) is accessibly by GitLab team members only.
