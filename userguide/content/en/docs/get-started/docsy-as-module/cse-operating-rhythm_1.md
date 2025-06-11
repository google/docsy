---
title: "CSE Operating Rhythm"
---

View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM/CSE-related handbook pages.

---

## CSE Team Customer Engagement Types

There are several different ways that the CSE team engages with customers, including:

1. [Targeted campaigns run from Gainsight](#targeted-campaigns)
1. [Monthly Webinars and Labs](#monthly-webinars-and-hands-on-labs)
1. [Sales Driven CSE Engagement Request](#cse-engagement-request-process)

### Targeted Campaigns

Customer Success Operations and CS leaders determine, based on various GitLab health metrics, a set of outreach campaigns to drive customer interactions that will help improve GitLab adoption and usage.  Examples of campaigns are:

- 21 day check in
- 90 day low license utilization
- CI product coach

  Existing campaign email drafts can be found in the [Automated CSE Campaigns Content google doc](https://docs.google.com/document/d/1Db6y_i2gPQrPnJkJpAAbfFKQtw4c5VgSFJcHKDG-4hk/edit?usp=sharing).  The email campaigns get sent to a target group based on geo and ARR and typically contain the Calendly link for the specific CSE working with that segment.

### Monthly Webinars and Hands On Labs

The CSE Team delivers monthly webinars and hands-on labs that are available to all.  The [webinar calendar](/handbook/customer-success/csm/segment/cse/webinar-calendar/) is published to our website, with a registration link for each.  Webinars are pre-recorded content with CSEs answering Q&A.  Labs provide a hands-on learning experience for each attendee with their own lab environment to work through lab exercises during the session.

#### Creating Webinar Content

The CSE Team works with our content team to create content for our Webinars. In order to create, from start to finish a strong webinar content. We have guidelines and tips and tricks which you can follow over at this link [Webinar Guidelines for CSEs](https://internal.gitlab.com/handbook/customer-success/cse/webinars/)

#### Preparing for and Delivering a Hands-on Lab

The upcoming month's hands-on labs are added to an issue in the [Customer Success Engineering - Content Project](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/content/-/issues/?label_name%5B%5D=cse-events%3A%3Asign-up) (separate from the webinar schedule) and the CSE team is asked to sign up as DRIs.

##### Lab Environment Request

> As a Lab DRI, you are responsible for submitting a Lab Request for an environment. This should be submitted ideally at least one week before the date of delivery. For assistance/questions please reach out on the `#demo-architect-partners` Slack channel.

1. Navigate and login to the [Demo Architect Portal](https://cloud.gitlabdap.com/).
1. Select **Content/Lab Request** from the dropdown list.
1. For Salesforce Account Link, enter [https://gitlab.my.salesforce.com/Account/](https://gitlab.my.salesforce.com/Account/)
1. For Opportunity type, select **CSE Led Lab**.
1. Fill in the rest of the form to the best of your knowledge.
1. Click `Submit Request`.

This will result in an Issue being created on the [Demo Architect - Workshop Management Board](https://gitlab.com/gitlab-com/customer-success/demo-engineering/workshop-library/demo-engineering-workshop-issues/-/boards/7697518?label_name[]=DA%20Workshop%20Request) which will be picked up by the Demo Architecture team.

A pair of invitation codes, one for production and one for testing will be generated and shared in a comment on the issue. The Demo Architecture team will assign DRIs ownership of the session (Top level group) and verify invitation codes and associated runners are operational.

Lab attendees will redeem the invitation code when joining the lab to secure access and provision their subgroup to use for the hands-on exercises, [accessed through gitlabdemo.com](https://gitlabdemo.com/login).  Each slide deck has detailed instructions for the attendees that the host will guide them through to create the subgroup and access it.

##### Lab Preparation

Before the event, the host should make a copy of the appropriate [master slide deck](https://drive.google.com/drive/folders/1h-I2J_J4MlgBmjfwxpdGiyVM0vIVW9vY?usp=drive_link) and store it in the [2. Global Onboarding Labs -> Decks -> Delivered decks folder](https://drive.google.com/drive/folders/1SYuAOlR9YqLSS3I9qebW8aKyRYx2Yv8I?usp=drive_link), with the Title: `<Lab Name> - <Region> - Date`.  In the lab deck, change the registration codes to match the current lab, and add their name and profile picture to the presenter slide.

The CSE Program Manager will handle all pre-lab and post-lab communication with the attendees, and will request the Highspot link to add to the post-lab email.

The lab content is contained in the [GitLab Learn Labs Sample Projects group](https://gitlab.com/gitlab-learn-labs/sample-projects).  The correct project should be linked in the slide deck you are using for the lab.  The host should run through the lab exercises in their entirety at least once before the event to ensure there are no technical issues.

You should also create a paste notes doc that has all of the information and links that you will want to put in the chat for the lab participants.  See [Sample Paste Notes for Security and Compliance Lab](https://docs.google.com/document/d/1rNF2PvfJrunZgoI9PW4mPIirLLhyXH9ohXgLEmsXeRI/edit?usp=sharing). Provide the link in the #scale-workshops-planning slack channel for anyone who is helping with Q&A.  The #scale-workshops-planning slack channel is used for any pre-lab questions, set up, demo environment issues, etc.

On the day of the lab, the host should login at least 10 minutes prior to the lab start to get set up.

Lab housekeeping items - these should be called out in the lab slide deck as well:

- all attendees are muted - ask participants to stay muted and add their questions in the Q&A panel
- an account on gitlab.com is needed before starting
- access to lab environment for x days (it's 2 days for some labs and 4 days for others - should be called out in the appropriate slide deck)

Tips and tricks for presenting:

- open 2 chrome windows side by side when working through labs - one with the issue instructions and one with the lab project you're using to work through each step
- put your slides in full screen presentation mode for presentation
- turn off all notifications
- hide your bookmarks bar and be conscious not to share anything related to other customers
- go slower than you think you need to through the exercises

After the lab, the CSE Program Manager will send a post-event email with a link to the recording and slide deck.

#### Reporting an Issue with Content

When reporting a problem, use the `Bug` template in the [Content project](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/content), then fill out as much of the information as possible.

### CSE Engagement Request Process

Account owners (AEs, SAEs, Renewals Managers) working with customers that [qualify](https://gitlab.com/gitlab-com/customer-success/csm/-/wikis/CSM-Segments) for CSE may find that their customer would benefit from a CSE engagement outside of the normal operating rhythm during the customer lifecycle (programmatic call invitations from Gainsight, manual outreach by CSE in Outreach, Office Hours and Webinars). In these cases, it is best to submit ad-hoc engagement requests through Salesforce.
To open a new CSE case, go to the customer's account in SFDC and select the _Opportunity_ the case will be associated with. On the Opportunity page, click the _**CS Help**_ button. On the next page, you will be asked to select an option between _CSE Help (NOT Escalations)_ and _Escalations (CSM/CSE Accounts)_. Select the _CSE Help option_ (for _Escalations_, please check [this section](#cse-escalations)).
The next step will ask to provide information about the case. In the _On-Demand Catalog Offerings_ dropdown, select the service that best aligns with the customer's needs. [Below](# cse-catalog-offerings), you have a detailed description of what each offering covers. Next, add the _Contact_ whom the CSE will be speaking with.
The other mandatory information is a detailed description of what is expected from this engagement. Please add all relevant information in the _Challenges/Pain Points_ field. It is crucial for the CSE to have a clear understanding of the customer's situation so they can prepare appropriately for the meeting.

This brief screencast demonstrates how to reveal the CS Help button when on the customer's opportunity page in Salesforce:

![example-clip-demonstrating-cse-request-sfdc](/images/customer-success/csm/segment/cse/SFDC_CSE_Case_Request.jpeg)

After the case is created, it will be automatically listed in related case lists on both the account and opportunity. Then, a corresponding Call to Action (CTA) is generated in Gainsight for the CSE to handle. But it is not real-time (batch rule runs every four hours starting at 12:30-1 am PT everyday).
NOTE: Unless specified otherwise, CSEs will automatically reach out to the contact with the AE/RM in copy when cases are created. If the AE/RM does not want that to happen they can put a note in the open text "Challenges/Pain Points (1000 Character Limit)" field on the case.

- For more information about the scope and qualifications for CSE engagement, refer to the following links:
  - [CSE: Qualifications/Scope Document for CSE Engagement](https://docs.google.com/document/d/1UVUPVTpEd3uYN8X1a_-LgB0GVY3fW6Y-S8sXfh-W65M/edit#)
  - [CSE Workflow - Process](https://docs.google.com/document/d/14hgdDN9JYVQLcuwGFfvryWDeXeWUpHLZv7RAUH7oers/edit#heading=h.vs4fplqboev)
  - [CSE Highspot page](https://gitlab.highspot.com/items/662a8dc9f635929082a95ca8?lfrm=shp.4)

#### CSE Catalog Offerings

The CSE Catalog provides a structured framework of engagement offerings that support customer technical needs across different GitLab areas. When submitting an engagement request to the CSE team, Account Executives (AEs), Renewal Managers (RMs), and Solutions Architects (SAs) can select from these offerings to best match the customer's specific requirements. Each offering is designed to address distinct technical challenges and implementation scenarios, allowing for more focused and effective CSE engagements. Below are the detailed descriptions of each available offering:

- **Fast-Track GitLab Implementation**: DevOps leads and platform administrators will recieve expert guidance on how to accelerate their GitLab deployment. The CSEs will share concrete setup recommendations covering configuration, user management strategies, and documentation based best practices.
- **Optimize Your GitLab Architecture**: Enterprise architects and technical leads will receive expert guidance on designing a robust, scalable GitLab infrastructure. The CSEs will share best practices on architectural patterns, including high availability configurations and disaster recovery strategies that reduce downtime risk.
- **Streamline Your CI Workflows**: Engineering leads and DevOps teams will learn strategies to enhance their CI pipeline performance and resource utilization. CSEs will analyze the customer's gitlab-ci.yml configuration and share optimization patterns to reduce build times and best practices for job efficiency, caching strategies, and pipeline architecture to improve overall CI performance.
- **Strengthen Your Application Security**: Development and security leads will discover how to automate and streamline security practices across their pipeline. CSEs will share strategies for implementing automated scans, enforcing security policies, and managing vulnerabilities efficiently using GitLab's security features.
- **Transform Your Workflow with AI**: Development teams and technical leaders will learn how to leverage GitLab Duo to accelerate their entire software development workflow, improve code quality and deliver more secure applications. CSEs will share strategies for implementing AI-assisted features across planning, code suggestions, and security scanning based on successful implementations.
- **Optimize Your Migration Strategy**: Technical leaders and migration teams will learn proven strategies for moving to GitLab from their existing tools. CSEs will share migration approaches, technical prerequisites and limitations, architectural considerations, and risk mitigation tactics based on successful transitions at similar organizations.
- **Accelerate Your Software Delivery**: DevOps teams will discover how to streamline their continuous deployment processes for greater reliability. CSEs will share best practices for deployment automation, environment configuration, and release management drawn from enterprise implementations. 
- **Strengthen Your GitLab Operations**: System administrators will learn proven strategies for managing their GitLab environment at scale. CSEs will share best practices for authentication, user management, group organization, and project configuration based on enterprise implementations.
- **Optimize Your Platform Observability**: Platform engineers will gain insights on optimizing their GitLab monitoring and observability practices. CSEs will share monitoring strategies for setting up basic system monitoring, implementing advanced observability, garbage collection statistics, and resource utilization tracking.
- **Scale Your Agile Planning**: Project leaders and delivery teams will learn how to leverage GitLab's planning capabilities for better visibility. CSEs will share strategies for implementing effective workflows using issues, epics, and iterations while measuring progress through value stream analytics.

#### Tracking Ad-Hoc CSE Engagements in Gainsight (CSEs only)

When a CSE has accepted an engagement request, the CSE must then create a [CTA](/handbook/customer-success/csm/gainsight/ctas/) in Gainsight for proper tracking and CSAT survey deployment post-follow-up email.

- Create CTA from the Cockpit with the following details
  - Name: [Customer Name] - Ad-Hoc CSE Engagement Request
  - Company: [Customer Name]
  - Type: Digital Journey
  - Reason: Other Digital Journey Reason
  - Priority: (select the most appropriate type based on the request)
  - Playbook: One-Off CSE Outreach

Note that the trailing " - Ad-Hoc CSE Engagement Request" MUST be there in order for us to generate proper metrics. The customer name can be truncated in order to satisfy the "Name" length requirements. Once the call is complete, the call must be [logged as an activity](/handbook/customer-success/csm/cadence-calls/#review-and-update-account-details) against the customer's timeline in Gainsight using the `CSE Engagement` meeting type in Gainsight, and filling in the relevant details regarding the customer meeting details.

The CSE should then prepare a follow-up email to be sent to the customer through the email-assist in the task: `Follow Up Email Post One-off CSE Outreach Call Completion`

This ensures that a CSAT survey is deployed to the recipients of the email.

## General Guidelines for CSE Engagements

### Playbooks

A list of Playbooks can be found on the [CSE Playbooks](playbooks) sub page.

### CSE Escalations

Qualifying the customer for an escalation is important in terms of ARR and LAM. ARR should be >=80% of the ceiling for your segment's ARR range. LAM ought to be > $100K. Another very weighty criterion is an upcoming renewal. If they are <= 3 months away from an upcoming renewal, an escalation could help turn their frown upside down.

Escalations ought to be used sparingly and only for the larger accounts in our segment with a high potential for growth so that our support, product, and engineering teams can prioritize their efforts in good alignment with overall GitLab business objectives.

There are two types of escalations: support escalations and account escalations.

1. Support escalations are for existing tickets causing a very high business impact for the customer and is raising their temperature very high. The escalation process can bring attention to the issue and raise its priority within support. Following the defined process for a support ticket escalation noted on [the Support ticket attention requests page](/handbook/support/internal-support/support-ticket-attention-requests/#submitting-a-support-ticket-attention-request-star--starring-a-ticket) is sufficient.
1. Account escalations may or may not relate to a support ticket. It could be relevant to an open issue for a product bug or a feature request. It's useful when the customer communicates a highly-impactful problem relevant to, for example an open issue that is blocking a critical use case and causing them to evaluate other vendors for non-GitLab solutions and is thus posing a churn or contraction risk for GitLab.

### Meeting Workflow

Meetings are integral to interfacing with customers; whether we are joining a call with an Account Executive or driving the call ourselves. We must do what we can to prepare ourselves and ensure that the call is as productive as possible. This will require having some resources available to leverage when needed. The following can serve as a loose guideline for preparing for customer meetings.

1. Meet with the AE, if possible, prior to call to get more relevant context around customer's wants, needs and other particular details.
1. Create a [Notes](https://docs.google.com/document/u/0/d/159Bxv_H7Ds9QoGsmFW7c7Zoq5nqugAChN_a7XuKUeLs/edit) document
   1. Prepare some go to questions tailored around what information you may have gathered from researching the customer or speaking with the AE. Include any relevant customer concerns, states, tech stack, etc (usually derived from AE custom deck or AE directly)
1. Create a [Slide Deck](https://docs.google.com/presentation/u/0/d/1bGvo9EOz-pa-hsPi6xmguuL20L5e5XNfDVaFYeHZWdc/edit).
1. Ensure Notes and Slide Deck are in the [Customers & Prospects](https://drive.google.com/open?id=0B-ytP5bMib9Ta25aSi13Q25GY1U&resourcekey=0-MBirIe2vWyQXYi8cJEkH2Q) under appropriate Company name.
1. Ensure that the Zoom/Chorus link is correct in the meeting invite.
1. Research company:
   1. in Salesforce/SFDC
   1. in Gainsight
   1. Notable data:
      1. Number of Licenses
      1. Number of Employees
      1. Key Personas
      1. Industry
      1. Duration of contract/last renewal date
1. Locate and study **Custom Pitch Deck** from AE (find **Custom Pitch Deck** link in **Salesforce Opportunity** or reach out to AE directly)
1. Perform general research of the company and related industry to give better context.
1. Reach out to AE/SAE and let them know about the meeting; discuss strategy, insights. Add AE/SAE as optional to all calls.
1. Join the call at least 10-15 minutes early to prepare and be ready to allow customers to join from the waiting room.
1. Confirm that Chorus is recording and that customer is aware (usually informed through the Calendly invite)
1. Ensure quick discreet access to:
   1. [Notes](https://docs.google.com/document/u/0/d/159Bxv_H7Ds9QoGsmFW7c7Zoq5nqugAChN_a7XuKUeLs/edit)
   1. [Slide Deck](https://docs.google.com/presentation/u/0/d/1bGvo9EOz-pa-hsPi6xmguuL20L5e5XNfDVaFYeHZWdc/edit)
   1. [GitLab features](https://about.gitlab.com/features/) for reference
   1. Any other pertinent resources for quick reference (See Appendix of [CSE - Kickoff / Discovery Questions Template](https://docs.google.com/document/d/159Bxv_H7Ds9QoGsmFW7c7Zoq5nqugAChN_a7XuKUeLs/edit?usp=sharing) for ideas)
1. Make sure to manage expectations about short term engagements and not being permanently aligned.
1. After the call is complete, set expectations for follow up email in the upcoming 2-3 days.
1. Once the call is complete, the call must be [logged as an activity](/handbook/customer-success/csm/cadence-calls/#review-and-update-account-details) against the customer's timeline in Gainsight.
1. Review call and/or sync with AE if applicable and produce follow up email for customer.

#### Follow up

CSE should follow up with the customer within 2-3 business days after the engagement. This follow-up should include:

1. A summary of the key points discussed during the meeting
2. Any action items or next steps agreed upon
3. Relevant resources or documentation that may be helpful for the customer
4. An invitation for the customer to reach out with any additional questions or concerns

The CSE should also update the CTA in Gainsight with the outcome of the engagement and any important notes for future reference. If there are any outstanding items that require further attention, the CSE should create appropriate follow-up tasks or escalate to the relevant teams as needed.

It's important to maintain clear communication with the account/opportunity owner (AE/RM) throughout this process, keeping them informed of the engagement's progress and any significant outcomes or concerns.

#### Additional questions from the customer after the follow up mail

If a customer has additional questions after receiving the follow-up email, the CSE should:

1. Respond promptly to the customer's inquiries, ideally within 1 business day.
2. Provide clear and concise answers to their questions, including any relevant documentation or resources.
3. If the questions require more in-depth discussion or demonstration, offer to schedule a brief follow-up call.
4. Update the CTA in Gainsight with the new information and any additional actions taken.
5. Keep the account/opportunity owner (AE/RM) informed of any significant developments or concerns raised by the customer.
6. If the customer's questions reveal a need for ongoing support or engagement, discuss with the account owner about the possibility of extending the CSE engagement or involving other GitLab teams as appropriate.
7. Ensure all interactions and outcomes are properly documented in Gainsight for future reference and to maintain a comprehensive record of the customer engagement.

**Important Notes**:

- If the topic the customer wants to address is a new topic, a new request shall be opened to clearly distinguish the different topics/requests. We also consider anything that comes up after more than 4 weeks a new request.
- Rule of thumb: We don't want to exceed more than 3 follow ups about the same topic.
- Please do not reopen requests from the previous quarter, even if it's related to the previous topic, it may result in uninteded consequences in regards to our metrics.

If the customer comes back with additional questions to the AE or RM, please feel free to redirect them to the CSE who had the call previously with the customer.

## CSE Useful Link Signpost

QBR : [Template](https://docs.google.com/presentation/d/1YlEpP81DlZd5rSqKKlxZclHY8ZDT6U1y342QFVt4qhA/edit?usp=sharing) / [CSE Cases Dashboard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/d7283d4f-4314-4bb8-a3f2-13b32a532ad7) /  [CSE Manager Dashboard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/b6c9482d-e9b8-4167-951e-f67b908cdf37)
**INITIATIVES** : [All Initiatives](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/scale-cse/-/issues/?sort=created_date&state=opened&label_name%5B%5D=CSE%20Initiative&first_page_size=100) / [Initiatives Needs Help](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/scale-cse/-/issues/?sort=created_date&state=opened&label_name%5B%5D=CSE%20Initiative%3A%3ANeeds%20Help&first_page_size=100) / [Comments assigned to me](https://drive.google.com/drive/u/1/search?q=followup:actionitems) / [Initiatives Board](https://gitlab.com/gitlab-com/customer-success/customer-success-engineering/scale-cse/-/boards/7715232?label_name[]=CSE%20Initiative)
**SIGNPOST** : [Find Product Slack Channels](/handbook/product/categories/features/) / [CS Tools](https://gitlab.com/gitlab-com/cs-tools/gitlab-cs-tools) / [Version Metrics](https://version.gitlab.com/users/sign_in) / [Metrics Dictionary Sheet](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit?gid=0#gid=0) + [Tool](https://metrics.gitlab.com/)
**1:MANY** : [Adoption Labs Master Decks](https://drive.google.com/drive/u/1/folders/1h-I2J_J4MlgBmjfwxpdGiyVM0vIVW9vY) /  [Webinar Master Recordings](https://drive.google.com/drive/u/1/folders/1x0_7J30cTpfbRXjrXgG_2XOIARLusNt3) / [Webinars Youtube](https://www.youtube.com/playlist?list=PL05JrBw4t0Kpczt4pRtyF147Uvn2bGGvq) / [Scale Webinars Dashboard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/7b7c1229-e510-490f-9dbe-5c082b4e1c30)
**COACH** : [CI Product Coach playbook](https://docs.google.com/document/d/1qUu2JGe9c_KGMaC67z1R5li_5IVFKdyuz2xdFnic97U/edit) / [CI Coach Report](https://docs.google.com/document/d/1LUtRu5EiPES9g9EORrk6poZ6t6Grj1Wqd19CbYepHGM/edit?usp=sharing) / [Security Coach Playbook](https://docs.google.com/document/d/1e1-Ib6lDR61QigylGLmAEWMePorauCWdg2Kb3v4jYLM) / [Pipeline Parser](https://gitlab.com/ci-product-coach-pipeline-parser/pipeline-parser-2-0) / [Security Coach Common Topics & Recommendations](https://docs.google.com/document/d/1li025fruN2shzQr5tVE5Ss0wVnXcIzOMGe9V6aqeuJ4/edit#heading=h.ndg2qmc91wtx)
**DEMO** : [Demo Cloud](https://gitlabdemo.cloud/login) / [Shared Demo Systems Doc](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances) / [Sandbox Cloud](https://gitlabsandbox.cloud/login) / [CS Shared Demo Space](https://gitlab.com/gitlab-learn-labs/webinars)
**TRAINING** : [DevSecOps Bootcamp Nana](https://techworld-with-nana.teachable.com/p/devsecops-bootcamp) / [New CSE Learning Path](https://university.gitlab.com/learn/learning-path/scale-customer-success-engineer-cse-onboarding)
**USEFUL APPS** : [Rectangle](https://rectangleapp.com/) / [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12)
**CSE Lunch & Learn Recordings** : [Recordings](https://drive.google.com/drive/folders/1lXYzA4QSFEtR1zr0n7Nby7OYMrUYoVw4)
