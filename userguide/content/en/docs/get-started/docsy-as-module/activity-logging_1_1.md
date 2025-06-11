---

title: Solutions Architecture Activity Logging
description: >-
  Solutions Architects record all customer and prospect activity. This is activity description to guide the accurate capture.

---

Solutions Architects record all customer and prospect activity with accurate activity types to promote **result** and **efficiency**. By consistently and accurately capturing our prospect or customer-facing activity, we can perform analysis for further reporting to establish **efficient** decision making for GitLab's business.

## Why Record Customer Activities?

1. **Transparency** Reporting on SA activity regularly provides an easy way for other team members to see summaries of all SA activity, allowing for questioning our actions and increasing our accountability. Transparency also promotes valuable collaboration through increased visibility of our prospect and customer interactions.
1. **Collaboration** Timely feedback can be provided by reading through customer/prospect activity summaries. Team members may have experienced similar customer situations and can offer an alternate perspective or guidance as an asynchronous comment. It's also easier to perform pattern matching across our plays by reviewing current activity. Finally, it's an excellent vehicle for team members to thank those who have helped them with their work and receive recognition for work well done.
1. **Efficiency** When team members have questions on how a specific account activity went, they can read activity updates instead of seeking out the account team members. Leadership can also make essential decisions on how to run our business through analysis of our prospect or customer-facing activity, ultimately driving desired business **results**.

## Recording Activity with Rattle

SA prospect/customer activity is recorded into `Task` objects within Salesforce based on the `Log a Call` action on an `Opportunity`. However, [Rattle](https://gorattle.com) is leveraged to simplify the capture of required and optional fields through Slack to alleviate the SA from navigating through Salesforce.

### Rattle Setup

- Setup your Rattle account and connect it to Slack, Salesforce, and your Google Calendar.
  - [Rattle Setup Video](https://www.youtube.com/watch?v=pW_fHzx7h2Y)
  - If you did not receive an invite to Rattle when you started at GitLab, please submit an Access Request.

### Logging an Activity

- There are multiple ways to log your activity with Rattle ([Log an Activity Video](https://www.youtube.com/watch?v=zRxUJSjujUk&feature=youtu.be))
  - Before or after meetings with a prospect/customers, you will be prompted in the Slack Rattle application to `Log a Call` for the activity (easiest method). You can configure when to receive the notification in Rattle's [advanced settings for meetings](https://app.gorattle.com/meetings/advance-settings)
  - On-demand, type `/rattle-create` in Slack and click on the `Create Task` button
  - It is required to log the activity against the associated **opportunity** versus at the account level.  This is to ensure accurate reporting and analysis of our engagement models.
- There is a minimal set of fields that are required to be populated, _regardless if Rattle marks them as optional_.
  - **Related To** - Search for and set this to the Salesforce `Opportunity` associated with the activity.
  - **Name**  - Please search for and populate the `Name` field with a prospect/customer contact existing in Salesforce that was part of the activity.   <i>`Name` is currently a single select field. Choose any contact that was part of the meeting, if possible. In the future, we may have the ability to select multiple contacts.</i>
  - **Subject**  - High-level description of the activity. Usually, the subject of the calendar event for this activity is appropriate.
  - **[SA] Activity Type** - Choose the type(s) of activity for this customer/prospect interaction  (that is Demo, POV Related, Presentation/Pitch). For description of each activity type, refer to the [Enterprise and Commercial SA Activity Types](#enterprise-and-commercial-sa-activity-types) section below.
  - **Products Positioned** (Optional) - Select the products that were either positioned directly within a Demo, Pitch, or aligned to product capabilities within a Close Plan.  If the call was a discovery call, please select which product(s) would best be positioned in future calls.
  - **Persona Levels** (Optional if unknown) - Select the customer/prospect participants' levels in this activity. Current options include: `Individual Contributor, Manager/Director, Executive` _Note: Executive should be used for any VP, C-level or the Economic Buyer_
  - **Persona Functions** (Optional if unknown) - Select the customer/prospect functions represented during the activity (that is Development, Security, DevOps)
  - **Description** - Enter a summary of the interaction. Two to three sentences are usually sufficient, but more detail is ok. Try to capture the meeting's intent, how it went (the outcome or customer/prospect sentiment), and any prospect/customer perceived next steps. It is highly encouraged that you provide a link to more detailed notes of your meeting. You can use [Google Docs Bookmarks](https://support.google.com/docs/answer/45893) to do so.
  - **Customer Interaction Sentiment** - Choose how you feel this meeting went, independently from any other meeting and independently off the status of the overall opportunity sentiment. Options for this field are strictly 'Positive', 'Neutral', and 'Negative'

#### Activity type description

All activities should fall into one of the categories described in the [Enterprise and Commercial SA Activity Types](#enterprise-and-commercial-sa-activity-types) below.

#### Example Activity Description

```markdown
We provided a SCM and CI/CD demo for the head of application development, Peter Floss, that was well-received.  His team is responsible for building a suite of catalog services and API for their partner merchants.  They are using Spring Boot to develop microservices and struggling with deployment consistency and complexity.  As a next step, we are scheduling a review of their current path to production.
More detailed notes are here: <link to notes document bookmark>
```

### Collaborating on an Update

When anyone logs an activity, Rattle will provide the update in a team Slack channel. It is highly encouraged that all members of the SA organization, as well as any GitLab team member, take time to review the updates to understand our business better, but also to exercise our value of **collaboration**. When reviewing updates, look for opportunities to provide a team member with some **efficiency** by sharing related work or knowledge you have that could assist with an opportunity. Also, it's a great way to understand what your team members do so that you can leverage their experience in the future. Words of encouragement and congratulations are also encouraged.

#### Team Activity Slack Channels

All Rattle activity updates channels are of the format `#rattle-activities-<region or segment name>`:

- `#rattle-activities-apj-cs`
- `#rattle-activities-channels-and-alliances-sa`
- `#rattle-activities-commercial-sa`
- `#rattle-activities-east-sa`
- `#rattle-activities-emea-sa`
- `#rattle-activities-pubsec-sa`
- `#rattle-activities-west-sa`

_Tip:_ You can create a dedicated slack section for all of your Rattle related channels. This will allow you easy access to updates for cross-team collaboration.

### Setting up Rattle alerts

Rattle alerts are messages sent from the Rattle application within Slack that inform you whenever certain actions happen. All users are allowed to create Workflows.

This [tutorial](https://help.gorattle.com/en/collections/3196824-workflows) explains the available options and how to set it up.

## Activity Capture - Types

### Enterprise and Commercial SA Activity Types

Select these types when capturing activities by Enterprise and Commercial SA teams.

- **Customer No Show** - The SA has the opportunity to log an activity for a scheduled client meeting whereby the customer has not attended. In collaboration with the SAE/AE/Channels Manager, the SA should try to understand the underlying reason for the customers absence and record under the [SA] Activity Description.
- **Customer Strategy Plan Review** - (Note: While this activity type still uses the legacy name "Customer Strategy Plan", it refers to Customer Success Plan activities) Collaborative session between SA and a customer identifying and documenting business stakeholders, high-impact strategic requirements and key technologies, the current state of their technology ecosystem, current and desired capabilities, operational alignment with strategic objectives, and perceived gaps and deficiencies in current capabilities. See [Customer Success Plans](/handbook/solutions-architects/processes/activity-capture/customer-success-plans) for details. When reporting this activity a link to the latest Customer Success Plan must be included.
- **Demo** - The SA can record the activity when a planned GitLab product demonstration has been
delivered to the client. In the [SA] Activity Description field in Rattle, the SA should
also refer to insights around the demonstration purpose and area of product walkthrough. Options could be a full high-level end-to-end GitLab overview, or a specific GitLab stage demonstration, a partial GitLab platform overview or a very specific technical deep dive into the product.
- **Discovery Session** - The SA has the opportunity to record major insights during the initial discovery session with the client. The SA could work with the client in collaboration to understand whether the current environment is restrictive in the project deliverables or whether there is a need to extend the existing platform with our offering. Examples of categorized discovery sessions could be;
  - DevOps discovery discussion
  - Continuous Integration discussion
  - Deployment environment discussion
  - Application front- and back-end discussion
  - Cloud journey and strategy discussion
- **Other** - The SA should utilise this [SA] Activity type to record any activity not listed in the options dropdown list and is reserved for all non-anticipated types of SA services. It is imperative when using this activity type to be precise under the [SA] Activity Description field in Rattle to record the detail of the activity.
- **Post-sales technical account management** - SA uses this type to record technical account management work for accounts that don't qualify for CSM and for collaboration with CSM as part of post sales cadence calls. For growth opportunities to expand the account using the cadence calls, log the activity in other appropriate types.
- **PoV related activity** - It is assumed that the client's indication of a PoV and/or Technical Evaluation would be shared in either a Discovery session or during another [SA] Activity and the PoV related activity would be used by the SA as an activity record pertaining to the preparation, execution and completion of a PoV or a Technical Evaluation. Examples of PoV related activities could be;
  - PoV/Technical Evaluation scoping: The SA has the opportunity to record their activity towards engaging with the client on understanding the requirements and work in collaboration to agree on the type of evaluation [PoV or Technical Evaluation] and on the in-scope success criteria. The client on the other hand has the opportunity to define whether a high- or lite-touch PoV is required. Optionally the client may prefer to decide that a self-managed Technical Evaluation is sufficient and the SA assists ad-hoc.
  - Technical Evaluation cadence: The SA has the opportunity to record their activity with their client specific in relation to the Technical Evaluation. Upon agreeing to a plan, specific requirements and the definition of success, a regular or irregular cadence may be set by the SA with collaboration with the customer.
  - PoV cadence: The SA will often agree to a PoV plan, duration, sign off the in-scope PoV success criteria and work with their client on a regular cadence [weekly, bi-weekly, multi-weekly]. This [SA] Activity is an opportunity to capture the frequency and progress on the PoV. The SA should consider hosting a final cadence session with their client to agree on the sign off of the final completion of the evaluation.
- **Presentation / pitch** - The SA has the opportunity to record their preparation for a presentation to the client as well as the actual delivery. Sometimes a Pitch is requested by our SAEs/AEs due to significant client discussion without a SA, which is completely acceptable. Consideration for this type of [SA] activity are:
  - The SA attended an initial Technical Discovery session with the client and first requirements have been clearly collaborated on with the SA to take initiative to prepare for a presentation.
  - The SA debriefed internally with their SAE/AE/Channels Managers to understand the requirements of a first-time SA connect with the client and the expectation on an initial Presentation / Pitch
- **Ride Along** - This activity type is used when one SA is shadowing another SA to help support the opportunity, provide feedback for the primary solutions architect, and to learn how the primary solutions architect works. Please leverage [the Ride Along](/handbook/solutions-architects/sa-practices/ride-alongs/) handbook page to learn more about how Ride Alongs work. Record this activity on Account level. Recording at the account level is required because ride along that are inter-segment or inter-region will not have their opportunities available to the riders.
- **Guided Trial** - This activity type is used in case a prospect or existing customer needs support from an SA during their self-evaluation by using the GitLab Free trial offering.
- **Security Questionnaire / RFP** - The SA should use this activity type to record actions related to completing security assessments or progressing opportunities through tender processes. Examples of activities that fit into this category are;
  - Security Assessment: Although technically speaking part of the tendering process, Security Assessment generally involve the SA to interact with GitLab governing divisions ensuring accuracy and legal responses. As such, the SA engages with a GitLab division internally to address those Security specific requirements but ahead of the process, the SAs have a responsibility to attempt in the form of a first attempt to the queries.
  - Procurement / Tender process (RFx - RFP, RFQ, RFI, FRB, RFT - Request for Anything): The SA is engaged with the client and an indication has been given that their organisation will be undergoing a public tendering process. Tendering processes could be requesting a proposal, quote, information, expressions of interest and generally result in the SA responding to functional and/or non-functional queries of the GitLab platform as part of a request. Often tendering processes are indicated early, shared fairly with the approaches to take it to market and require a formal process involving the SA addressing technicalities required in form of written artefacts.
- **Technical Deep Dive** - SA should record client sessions on in-depth review of technology and GitLab capabilities, and creating the client solutions.
- **Technical Support** - SA conducts the technical support sessions as the account team and with GitLab Support to troubleshoot and address specific technical issues and challenges.
- **Positioned Professional Services** - This activity type should be used when positioned Professional services as part of the [Solution Architects Processes](/handbook/solutions-architects/processes/#positioning-professional-services)
- **Professional Service Support** - SA have a clear understanding of the client's available internal skills and capabilities and assist their clients in ways to become successful in a quicker way when skills gaps are identified. As a result of that, GitLab Professionals Services support adds customer value to mitigate risk and accelerate speed to success. Since the SA owns the initiation of the ProServ division at GitLab for our customers outlined here - and a significant amount of follow up and cadence is expected as a SA service to our regional customers.
- **SA Assistance - Subject Matter** - A [SA] is requested to support another GitLab Team Member with their advanced knowledge and understanding in a certain subject, without owning the particular engagement or opportunity.

- **SA Assistance - Manager** - To be used by [SA] Manager in case of assisting a customer engagement.

### Strategic Field SA Activity Types

Select these [SA] Activity types when capturing activities by the Strategic Field team but other activity types for Enterprise can also be used.

- **SA Assistance - Strategic Field** - Calls with client's management and executives to review enterprise DevOps strategy and alignment to the overall company initiatives such as digital or cloud transformation.
- **Executive Solution Plan** - Calls with client's management and executives to discuss, strategize and review DevOps solution for organization wide transformation, develop the trusted advisory relationship with industry thought leadership and guide the enterprise for DevOps adoption with best practices.

### Ecosystem SA Activity Types

Select these [SA] Activity types when capturing activities by the Ecosystem team but other activity types for Enterprise can also be used. There is an implied priority with higher value activities listed highest / first to lowest / last.

:movie_camera: Video on [How to quickly Log, Classify and Triage lots of Rattle Entries for the busy Solutions Architect 9:17, Highspot.](https://gitlab.highspot.com/items/67be46c991e055ef7c36de79?lfrm=shp.0) Supplements the below text.

- **Partner Opportunity** - :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: Sales opportunity # aligned work alongside field SA on specific sales opportunities with a partner involvement. This includes being an overlay SME on partner technologies and its joint value proposition with GitLab and/or helping a channel/services partner become successful with joint customers.
- **Partner Assisted Demand Gen** - :money_with_wings: :money_with_wings: :money_with_wings: :money_with_wings: Delivering or developing customer facing webinars, workshops, roadshows and similar activities in collaboration with a partner, focussed on demand generation / lead generation.
- **Partner VSA Enablement** - Activities involving enablement of partners to pitch or execute Value Stream Assessment and similar presales value selling motions.
- **Partner Technical Evangelism** - :money_with_wings: :money_with_wings: :money_with_wings: Delivering or developing partner facing (not customer facing) events and evangelism, including partner internal conference, meetup, webinar, open-invite bootcamp, blog and customer success stories.
- **Internal Enablement and SME Assistance** - :money_with_wings: :money_with_wings: GitLab facing internal calls, meetings, webinars for partner promotion and GitLab field team assistance.
- **Partner Solutioning** - :money_with_wings: :money_with_wings: Solution architecture work for defining and developing partner solutions and integration with GitLab.  For a work done on a specific sales opportunity, consider "Partner Opportunity."
- **Partner Services Attach** - :money_with_wings: :money_with_wings: Develop partner services catalog and/or SoW for future services engagements.
- **Partner Enablement** - :money_with_wings: Partner facing calls, meetings, workshops, webinars, including prep work to enable partner Champions on GitLab product and pre-sales.
- **Partner Cadence calls** - Cadence calls with partners for partnership building and presales activities on customer opportunities and account strategy.

### Value Stream Workshop (Assessment) Activity Types

**Note:** These options still refer to the old naming of "VSA" but due to ongoing data tracking reasons, we are unable to update the selections. Please be aware of this.

- **VSA Pitch** - This is an initial VSW pitch to the customers/prospects to get their buy in, discuss next steps, send follow ups before the VSW planning meeting
- **VSA Execution** - External customer/prospects calls for VSW planning, VSW workshop, VSW executive presentations.

## Rattle Workflows

For transparency and awareness, the Rattle activities specific to Solution Architects are listed below.

| Name                                                         | Description                                                  | Slack Notification                                           | Recipient                                         | Reference |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------- | --------- |
| Log a meeting                                                | Reminder notification for SA to log their customer call      | `You just had a meeting - Please provide us with information on this activity. (wf-1)` | Rattle DM                                         | `wf-01`   |
| New call logged (wf-2) (region)                              | Rattle will post the SA's call summary to their regional channel | `Task: Assigned To just logged an activity regarding Task: Related To.  (wf-2)` | Rattle regional team activity channels            | `wf-02`   |
| Tech Eval Start Date Changed                                 | When the SA updates the Tech Evaluation's Start Date, the Opp info will post to the channel | `Opportunity: Primary Solution Architect just updated the Tech Evaluation Start Date (wf-3)` | #sa-tech-eval-start                               | `wf-03`   |
| Tech Eval End Date Changed                                   | When the SA updates the Tech Eval's End Date, the Opp info will post to the channel | `Opportunity: Primary Solution Architect just updated the Tech Evaluation End Date and/or Close Status (wf-4)` | #sa-tech-eval-end                                 | `wf-04`   |
| Missing End Date                                             | When an Opp has (1) moved past Stage 3, (2) has a tech eval start date, and (3) has no tech eval end date, it will alert the Primary SA to complete it | These opportunities are missing a Tech Evaluation End Date and have moved past Stage 3 -- Please add an End Date and work with your counterpart (wf-06) | Rattle DM                                         | `wf-06`   |
| Alert Primary SA - Opp Stage 3 seven days ago and no SA Start Date | This is to notify the Solution Architect if a Oppty has moved to "Stage 3" seven days ago, is 20k+ IACV, and the Tech Eval has not formally started (`SA Tech Eval Start Date`) | This is to notify the SA Manager in the regional channel if a Oppty has moved to "Stage 3" seven days ago, has no `Primary SA`, is 20k+ IACV, and the Tech Eval has not formally started (`SA Tech Eval Start Date`) | Rattle DM                                         | `wf-07`   |
| Opp is in Stage 2                                            | When a Sales Opportunity is moved to Stage 2 and has more than 20k IACV, it will post to the `stage move 2` channel to alert the team of an upcoming opportunity| Opportunity: Owner just moved  Opportunity: Name to  Opportunity: Stage | #stage-move-02                                    | `wf-08`   |
| Chorus call                                                  | Post Chorus call recordings to channel. Note: because these could be a duplicate of an SA logged activity, these are excluded from reporting | Task: `Assigned To` had a Chorus Call with  Task: `Related To` (wf-09) | #rattle-chorus-calls                              | `wf-09`   |
| PS Opp without Primary SA                                    | If a Professional Services Opportunity is in Stage 3+ and has no `Primary SA`, Rattle will post a notice to the regional team's channel to ensure the `Primary SA` field is populated | Opportunity: Primary Solution Architect field is blank. Don't miss out on a potential PS SPIFF! (wf-10) | Rattle regional team activity channels            | `wf-10`   |
| Task Due (wf-11)                                             | If a Rattle task is not complete, Rattle will DM the individual at 4pm local time to complete their task(s) | Hi 👋- Here are your tasks that are due today. Please review if any need more information (wf-11) | Rattle DM                                         | `wf-11`   |
| Oppty Stage 3 seven days ago and no SA Start Date            | This is to notify the SA Manager in the regional channel if a Oppty has moved to "Stage 3" seven days ago, has no `Primary SA`, is 20k+ IACV, and the Tech Eval has not formally started (`SA Tech Eval Start Date`) | `Opportunity Name` was moved to Stage 3 on  `Opportunity: 3-Technical Evaluation Date` and does not have an SA Validated Start Date. If there is meaningful SA activity on a technical evaluation, please populate this field. (wf-12) | Rattle regional team activity channels; daily 8am | `wf-12`   |
| IACV Opps without Primary SA                                 | This is to notify the SA Manager that an Oppty has no `Primary SA` for any Oppty in Stage 3+ and has 10k+ IACV | `Opportunity: Primary Solution Architect` field is blank. Please update (wf-13) | Rattle regional team activity channels            | `wf-13`   |
| Primary SA Field Has Changed                                 | This is to notify SA Managers when the `Primary SA` field has changed during Stages 2 or 3 | The Primary Solution Architect has changed on  Opportunity: Name (wf-14) | #rattle-primary-sa-change                         | `wf-14`   |
| Missing Close Status and Stage 4                             | When an Oppty has moved to stages 4-7, the `SA Validated Tech Eval Start Date` is set, the `End Date` **or** `Close Status`is blank, Rattle will DM the Primary SA as a reminder to complete the Oppty data | `Opportunity: Name` has moved to stage  `Opportunity: Stage` and is missing Tech Eval close data (wf-15) | Rattle DM                                         | `wf-15`   |
