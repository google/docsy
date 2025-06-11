---
title: How to Request A SME

description: How to Request a SME on an opportunity to provide technical guidance and expertise

---

A system needs to be set up on how to request a SME for an opportunity. One of the responsibilities of a SME is to "Providing technical expertise to SAs during customer demos and presentations with a shared slack channel or joining customer calls."

To request a Subject Matter Expert (SME) for an opportunity, follow these steps:

* Submit a request:
  * To submit a request for help from a SME, select the **SME Request** workflow in the Slack channel from the "_Workflows_" tab below the channel name.

  ![SME Request Workflow](/images/solution-architects/initiate_sme_request.png)

  * Alternatively, you can type "_/sme_" in the Slack message field and hit Enter to open the request form after you have previously opened the workflow at least once.

  ![Slash SME Request Alternative](/images/solution-architects/slash_sme.png)

  * Fill out the form to the best of your ability, including as much detail and context that will be helpful for an SME to engage.
    * The form includes fields for the Account Name, SFDC Opportunity URL, type of engagement being requested, the next customer meeting date and time zone, and how long you expect the engagement to last.
    * The form is backed by an internal [spreadsheet](https://docs.google.com/spreadsheets/d/1Ti0DAaY9U3XFi32urmRDLzNa0x1ApRbCeHwDghtYvWk/edit?gid=1469229077#gid=1469229077) for capturing the relevant details and other metadata for the request.
* Engagement process:
  * A SME will reach out through Slack to the person making the request typically within 24 hours.
    * If a SME does not engage within 24 hours, the SME Area Lead will work with the SME team members to get someone engaged.
    * The SME will add their name in the associated [SME request spreadsheet](https://docs.google.com/spreadsheets/d/1Ti0DAaY9U3XFi32urmRDLzNa0x1ApRbCeHwDghtYvWk/edit?gid=1469229077#gid=1469229077) to ensure assignment is confirmed.
    * The SME will use a green checkmark emoji on the SME Request message in the Slack channel to indicate that an SME has engaged.
* Completion and Follow-up:
  * After the engagement, the person making the request will provide feedback on the SME's engagement and contribution to help improve the process in the [SME Request spreadsheet, under Feedback Notes Column](https://docs.google.com/spreadsheets/d/1Ti0DAaY9U3XFi32urmRDLzNa0x1ApRbCeHwDghtYvWk/edit?gid=1469229077#gid=1469229077).
  * Please also enter if a followup with the Product Manager is needed as Feedback.
* Reporting and attribution:
  * The SME will use the Activity Type "SA Assistance - Subject Matter" when logging activities in Rattle, or SFDC.

---

## **Rules of Engagement**

### **When you Request A SME:**

1. **Lead Time:** SMEs should be requested at least **48 hours** before needed. if it is an emergency contact your manager, who can follow the escalation process to engage a SME or PM.
2. **Give Full Context in Request**: Don't just say I want a SME to join a call or the customer has questions. You need to be explicit on what exactly are those questions the customer has. If you don't know ask the customer before engaging a SME.
3. **Prep Call Required**: If the request is to join a customer meeting, when the SME has accepted, have a prep call ahead of that meeting.
4. **Agenda Required:** Ensure you do have an Agenda created and this was communicated with the customer.  Ensure you have a next steps and clear outcomes for the meeting.
5. **Complete Discovery Before**: Please ensure that all necessary discovery has occurred before you requested a SME and that you have documented as such.
6. **Resist from Directly contacting PM Without a SME Request** in certain scenarios. [See below](#sme-pm-alternative).
7. **Use SME Channels:** All request should be made in the SME channels and not in Customer slack channels etc.

### Before Engaging or Requesting A PM Consider Requesting a SME First {#sme-pm-alternative}

 It is the goal for the SMEs to become experts in AI, Dedicated, App Security, Plan, CICD and Metrics, so that they can assist account teams and customers in adopting and using them. We need to reduce the burden on Product Managers to teach the field and customers on how to use the product.

**Resist from Directly contacting PM Without First completing a SME Request**: If an AE, a SA, or CSM requests a PM, Field CTO directly, ask the requester, to first consider [requesting a SME](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-request/). You, the SA/ CSM can then request a SME in the appropriate SME channel. PMs have been directed to redirect all questions to SMEs by the use of the SME Slack handles, if they determine that the SMEs were not initially engaged, and the request is not associated with any escalations, or request for product direction.

**For these scenarios, please engage the SME community before engaging a PM.**

In lieu of directly engaging Product management, SMEs should be requested or engaged in the appropriate `sme-` slack channel, for one of the following scenarios:

1. [Answering Technical Questions](#sme-questions)
   1. Ask the question in the `sme-` channel using the Stack Overflow command `/stack ask`, and have a SME answer it.
   2. If questions are asked in a customer channel or in the `f_` channels, Product Managers are free to redirect these questions to the SMEs using the SME Slack handles.
2. [Request for Content.](#sme-content)
3. [Request for a Demo.](#sme-demo)
4. [Request for Best Practices.](#sme-best-practice)
5. Request to Speak at a Conference.
6. Request to join a Customer Call, in order to conduct a demo, discuss best practices or just to answer technical questions.
7. During a POV, and help is needed. Engage a SME in the `sme-` channel, to help first triage the situation. You, along with the SME, before engaging a PM should do the following:
   1. Gather the required detail information (customer configuration, steps to reproduce etc.)
   2. Search existing documentation (internal or external) or past issues for a solution
   3. Ask other SMEs or Support using the [Super Support Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) for help
   4. SMEs can also reach out to PMs for one off questions or gain more clarification.
8. Request for [reference architecture cost estimates](https://docs.gitlab.com/ee/administration/reference_architectures/index.html#cost-calculator-templates) or Creating a Dedicated pricing calculator for an opportunity. See [example](https://calculator.aws/#/estimate?id=a0cbf2cd318c0fc77d5e39c2165841418aef9ace)

#### When to Engage a Product Manager

Please see [SME Engagement with Product Management](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-engage-pm/#sme-pm)for a full discussion on how SAs, CSMs, and SMEs, should now engage with PMs alongside the SME Program.

### **During Customer calls with a SME**

1. **Prep:** Have a prep call ahead of that meeting with all parties involved.
2. **Clear Agenda, Next Steps, Outcomes:** Ensure you do have an Agenda and this was communicated with the customer.  Ensure you have a next steps and clear outcomes for the meeting.
3. **SA/ CSM Quarterback Technical Calls:** The SA/ CSMs should be the one to run the call. Don't have a SME join and just turn it over to the SME.
4. **Note Taking:** SAs should share the Notes doc to the SMEs for everyone to collaborate. However the SAs/ CSMs are responsible for capturing all notes.
5. **Retro:** Have a Retro After the Call, to determine follow ups. See the below for SME follow ups and actions to be taken.

### **After the SME Engagement: How to Record Feedback/ Followups; Actions per Request Type**

#### General Guidance

1. If there are a a lot of follow ups or feedback needed for the customer, Create a **\<Customer\> SME Support Feedback Issue** in the SME Area Project under the [SME Collaboration Group](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts), with appropriate action items.
2. Add all the Action Items  needed. Action Items can be in the form of:
   1. [Technical Questions to be Answered (with list of Questions)](#sme-questions)
   2. [Request for a Demo](#sme-demo)
   3. [Request for Best Practices](#sme-best-practice)
   4. [Request for Content to be Created](#sme-content)
   5. [Request for a PM/ Customer Enhancement](#sme-pm)
3. Link this issue to any Customer Issues in the Customer Project.

**These are the Actions SMEs should take for each type of follow ups or request type below**

#### **Technical Questions to be Answered (with list of Questions)** {#sme-questions}

Any SA or CSM can ask a technical question in the appropriate `sme-` channel using the Stack Overflow command `/stack ask`, and have a SME answer it.

If a list of technical questions were sent before a customer call, or after as a follow up, the SME can take these addiitonal actions:

1. If you believe that this request could have been prevented with better Discovery or you think this is an opportunity to add to the Discovery Questions, please go to the Contents & Collaterals Issue (see [Dedicated example](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/7 "Contents & Collaterals - SA SME Team Dedicated")) for the appropriate SME Area in the [SME Collaboration Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts)  and add your Discovery questions for the good of the whole orh.
2. If questions came up with the customer, where the answers should be shared with SAs and CSMs, as an action item add to StackOverflow (TBD on process), and/or add the question and answer to each SME Area FAQ (See Contents & Collaterals Issue in the [SME Collaboration Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) )
3. If this a topic for all SAs or CSMs or even other SMEs to be enabled on, Please go to your [SME Area Collaboration Project](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) and add to the List of Topics for SMEs Enablement ([See Dedicated example](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/9 "List of Topics for SMEs Enablement - SA SME team Dedicated")),  SMEs can then discuss at next SME meeting, or bring PMs in on next PM/ SME Cadence, and also present on the next Technical Exchange

#### **Request for Demo** {#sme-demo}

1. If a Demo was requested, as the SME please record your demo before hand, or record the customer call on Gong if possible, and add that Demo on the [SME Hub on Highspot](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=isd.9) or [Demo Excellence Catalog](https://gitlab.highspot.com/items/6604439000e80e153ec8b204?lfrm=isd.6).

#### Request for Content to Be Shared {#sme-content}

If an SA or CSM requests for content to be shared, or to be created, the process is as follows:

1. Go to the [SME Hub](https://gitlab.highspot.com/items/667095b95cc9b08c87d40b68?lfrm=isd.9) in HighSpot
2. Go to the appropriate SME Area
3. Click on the button "Request New Content" or New Content Request"
4. An Issue template would come up for you to fill out. Be very clear and explicit, with lots of content in your request. See this ["Request for Dedicated Onboarding Content"](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/14 "Dedicated Onboarding Doc & Instructions") as an example.
5. Tag it with SME Workflow::Create. See [all other tags here](https://docs.google.com/document/d/1GQxe0HdPUrE2FUlEQiC6hmWLv4NW04rO7hiAo_E-KL0/edit?tab=t.0#heading=h.ddcxwys4jiuw)
6. Share the Issue on the `#sme-` channel.

Note: The SMEs are not necessary responsible for creating or producing every content request it receives. This is a request for SMEs to share existing assets when requested, and make it available in HighSpot. SMEs will prioritize incoming requests as needed and will work to identify the right resource to create any new content as necessary.

This is the list of Content, SMEs are responsible for creating or gathering:

-List of discovery questions\
-Frequently asked questions\
-List of any Recorded enablement sessions\
-Work with PMs for Golden demos\
-[Hands-on workshops](/handbook/solutions-architects/tools-and-resources/workshop/)\
-Technical evaluation guidelines\
-[POV](/handbook/solutions-architects/tools-and-resources/pov/) templates\
-Competitive intelligence

#### **Request for Best Practices** {#sme-best-practice}

If this is a request for Best Practices/ Architectural principles, in the SME Projects in the [SME Collaboration Group](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts) do the following:

1. Add to the list for request for Best practices, Knowledge Base, Architectural Blueprints (See [Dedicated Issue](https://gitlab.com/gitlab-com/customer-success/subject-matter-experts/sa-sme-team-dedicated/-/issues/10 "Knowledge Base & Architectural Blueprint Scenarios - SA SME team Dedicated") as an example) in the appropriate SME Collab Project.
2. If you decide to give an answer to best practices make sure and put your writeup in StackOverflow (Process TBD) or at least as an Issue in your SME Area
3. If you need discussion around this, meet with SMEs during Pod Meetings to discuss and codify your best practices in Stack Overflow (Process TBD) or at least as a new issue in your SME Area

Note: SMEs will prioritize incoming requests as needed and will work to identify the right resource to create any new content as necessary.

#### **Request for a PM/ Customer Enhancement** {#sme-pm}

If you need to follow up with a PM, or the customer requested an enhancement or has a feedback, following the SME Customer Feedback Process (TBD) and accomplish the following:

1. Create a Customer feedback issue in the Customer GitLab Project. Be very clear on the ask and feedback
2. Tag the PM on that Issue or follow the PMs escalation Process
3. As the SME, engage the PMs on your SME Internal Slack Channel
4. If this is a challenge affecting multiple customers, as a SME create an Epic as described in the Customer Feedback process (TBD). and link this and all other Customer Issues that were created based on a common theme etc.  Ask your fellow SMEs to message in their regions to collect customer issues that are experiencing the same.
5. During SME calls review the SME Issue boards
6. During the SME/ PM Calls review the SME Issue Boards and update as needed.
