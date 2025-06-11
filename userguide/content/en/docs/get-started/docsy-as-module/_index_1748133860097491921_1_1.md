---
title: "Acquisition Process"
---

This is a detailed view of our acquisition process. For more information about
our acquisitions approach visit our [acquisitions handbook](/handbook/acquisitions/).

## Acquisition process

The process is comprised of five key stages:

1. Pipeline Building
1. Exploratory
1. Early Diligence
1. Confirmatory Due Diligence
1. Integration

### Pipeline Building

1. Sourcing: The corporate development team closely collaborates with GitLab's product leadership to identify key areas for potential M&A. We source acquisition opportunities ("Sourced Pipeline") from:
    1. Ecosystem screen with the help of third party databases such as Crunchbase
    1. Inbound introductions from GitLab team members and industry contacts
    1. Proactive outreach to companies aligned with our vision and strategic priorities

### Exploratory

1. We prioritize companies that fit with our product and acquisition priorities ("Prioritized Pipeline") and reach out to their leadership to set up intro calls.
1. Intro calls: The purpose of this 30-min call is to learn more about the potential target company and assess if further acquisition discussions make sense. The agenda for the call is:
    1. Company overview including team, products, financials, and funding
    1. Discuss which features could accelerate GitLab's roadmap
    1. Review the GitLab acquisition process including deal terms, as appropriate ([acquisitions handbook](/handbook/acquisitions/))
    - TARGET TEAM: Ahead of this call please review our [roadmap](https://about.gitlab.com/direction/) and outline which of your current and future product features can be implemented into GitLab's product categories. Outline a simple integration timeline for those features, considering an [MVC](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) release on the first month after joining GitLab and monthly releases following with quick iterations.
1. Share call summary Initial Acquisition Review Template (located in the Corp Dev shared drive under Acquisition Templates - GitLab internal-only) of companies that are aligned with GitLab's acquisition strategy ("Qualified Pipeline") with relevant product lead.
    - Create a new, private Slack channel (format: `#acq-company_name`) and add the internal GitLab document ("Main Acquisition Document") to the topic. Add Chief Product Officer (CPO) and the relevant product and engineering leaders to help with the initial assessment of the opportunity.
1. Product call: If the [Product Champion](/handbook/acquisitions/acquisition-process/#acquisition-team) sees a potential fit and wants to proceed, set up an initial 90-minute product call to dive into the product and tech. The call must include the Product champion and may also include Stage Leaders and specific Product Managers relevant to the call. [Stage Leaders and Product Managers](/handbook/product/categories/#devops-stages) should keep in mind the early stage of this evaluation and attempt to think expansively about how the potential acquisition could be additive to GitLab. The agenda for the call is:
    1. Product demo with highlights on key functionality and technologies
    1. Concise roadmap overview with a focus on near-term plans
    1. [GitLab roadmap](https://about.gitlab.com/direction/) fit - discuss which features could be built into GitLab and into which product stage
    1. Start the discussion about what an integration into GitLab's code base will look like

    A mutual NDA will be shared by GitLab and will be required to be signed prior to the Product Call. For more details about our MNDA and process for signing see [GitLab Legal Handbook](/handbook/legal/).

    The Corporate Development Deal Process Manager will schedule and send calendar invites for a GitLab internal only synchronous Product Call debrief for immediately after the Product Call, or first available time slot.

1. Initial internal review:
   1. Preliminary assessment of product and technology fit of the potential opportunity to GitLab's [product roadmap](https://about.gitlab.com/direction/) as well as integration options into GitLab.
   1. In certain instances, a hands-on product validation following the Product Call may be necessary to help inform the acquistion process and next steps. The Product Champion will select a DRI to perform a hands-on product validation. If a hands-on product validation does not occur following the Product Call, it will then occur later in the acquistion process during Early Diligence.
      1. Following the hands-on product validation, the Product Champion, DRI selected for hands-on validation and Corporate Development Champion & Deal Process Manager will meet sync to debrief on findings from the hands-on product validation and align on next steps.
         1. The Corporate Development Deal Process Manager will offer time to debrief on findings with the company being evaluated if the decision is to end the engagement following the hands-on product validation.  
   1. Before moving to early technical diligence, the Product Champion will need to confirm annual fiscal budget with the Chief Product Officer and finance team.
      1. It is necessary to understand whether onboarding the target's employees can be funded through existing or planned requisitions either within the Product Champion's section, across the R&D budget or other operating expense reallocations. If not, budget must be secured by Product, with the help of Finance, before proceeding.
      1. This step is intended to optimize cross-functional collaboration and prevent a case where during final approval it is determined that budget does not exist for us to onboard the target's employees, threatening the deal outcome.

### Early Diligence

1. Select [code name](#acquisitions-are-confidential) to use instead of target company name. Update Slack channel: `#project-code_name`.
   1. Corporate Development Deal Process Manager to create a dedicated Project for cross-functional collaboration and issue tracking. Make a copy and rename the [New Project Diligence Template](https://gitlab.com/GL-corp-dev/Project-Diligence-Template/test-template) to get started.
1. [Form the acquisition team](#acquisition-team) and add the entire team to the channel and documents.
+1. Confirm internal acquisition champion - every acquisition needs a lead champion; someone who is advocating for the acquisition, helping drive the acquisition rationale and a successful integration process. For most acquisitions that fit our [approach](/handbook/acquisitions/), the champion will be a Product Section lead, at the Director+ level, accompanied by an engineering champion from the GitLab's Engineering team, at the Director+ level, respectively. For other acquisitions, champions may come from other internal functions.
1. Create a dedicated technical diligence Slack channel `#p-code_name-technical-diligence`. This channel will be the main channel for communication on technical topics with GitLab's development team.
1. Preliminary diligence - below is a list of documents to share with GitLab:
    1. Financials:
        1. Cap table
        1. Balance sheet
        1. Profit and Loss sheet
        1. Cashflow statement
        1. Tax returns
    1. Employees:
        1. Roster with: employee name, title, role, tenure, years of experience, location, salary, LinkedIn profile, programming language proficiencies, contributions to respective components and services in the codebase
        1. Employee resumes
        1. Employee agreements and PIAA
    1. Customer list with name, monthly revenue, contract termination date and any other fields if relevant.
    1. Vendor list with monthly spend
    1. Asset list:
        - Any assets that are needed for the business and will be part of the acquisition
        - Assets excluded from the acquisition
    1. Technical Bill of Materials (BOM) - a complete document which lists:
        1. Repositories
        1. Issue trackers / bug management systems
        1. Additional (non-code) assets
        1. Domain names
        1. Servers
        1. Dependencies
        1. Database schemas
        1. Data
        1. Trademarks
        1. Social media accounts
    1. Security Reports/Documentation
        1. External Security Reports
            - SOC 2
            - ISO 27001 Certification
            - CAIQ
            - External Penetration Testing Report
        1. Internal Security Documentation
            - Risk Management Program Documentation
            - Risk Register and status of risks
            - Results of security reviews the entity has performed over it's current vendors
1. [Early technical diligence](https://internal.gitlab.com/handbook/corporate-development/acquisition-process-technical-diligence/):
    1. In case the target company has open source components, the respective Dir. Engineering (dependent on GitLab stage) will start an early code review to determine: code quality, development practices, contributions, license compliance and more. That should be turned around within 2-3 business days.
        1. The Corporate Development Deal Process Manager will create a new document (`Project [code-name] - Technical Diligence`) for the Technical Call meeting notes, separate from the main acquisition document. Future diligence findings, and all other technical diligence related note-taking of meetings (external and internal), which are engineering-centric should be recorded in this Technical Diligence document, a separate and internal Google Doc from the main acquisition document. The Technical Diligence document will be bookmarked to the Slack channel topic of `#p-code_name-technical-diligence`
    1. Technical call: a hands-on product and code screen-share session (2 hours) in which the technical lead, as assigned by the respective Engineering champion, together with the respective Product champion will lead a screen-share session aimed at a hands-on validation of the product functionalities and an overview of the applications. The objectives and agenda for the call are:
        1. Objectives:
            1. Technically validate the functionalities and competencies of the product which have been presented throughout our process thus far
            1. Determine the value the acquisition can potentially add to GitLab
            1. Conclude a high level evaluation of the complexity and quality of the solution
            1. Identify blockers, challenges for the integration
        1. Agenda:
            1. Cover a more technical demo of the product; cover further questions/areas which surfaced following the Product Call
            1. Walkthrough of the architecture and the mechanisms of the product
            1. Review the core components/services/applications as well as development practices
            1. Start discussing the technical aspects of a potential path for the integration
        1. Internal notes of the call should be recorded in the Technical Evaluation Google Doc
        1. Access to proprietary code will *not* be asked at this stage. Code review will take part in the [confirmatory due diligence phase](/handbook/acquisitions/acquisition-process/#confirmatory-due-diligence).
1. Integration - a key component of post-transaction integration is the product integration strategy: prior to closing of the transaction, the GitLab product and engineering acquisition champions will formalize the integration strategy with a focus on feature sets/functionalities:
    1. What we keep as-is, rewrite, discard/EOL
    1. What is critical for user migration
    1. Target [product tiers](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/) in GitLab
    1. Barriers for implementation
    1. Deal Milestones:
        1. We aim to set 3 milestones at 2, 4 and 6 months from joining GitLab, to provide a concise set of goals which should cover the bulk of our product interest in the target company
        1. Milestones should be articulated as objectives as opposed to tasks. The structure of defining milestones should resemble that of OKRs, with each milestone having an objective and then a few key results which will be required to achieve the objective. This will help target companies focus on driving the objectives and not be tied to, and concerned with, a specific task as changes are likely to occur once integration work starts. The milestones outline the objectives to facilitate the work required in achieving the roadmap advancement the deal was identified with delivering. Each milestone should be broken down to the keys required to complete in order to achieve success for the milestone's objective.
            1. Include GitLab Legal on Milestone formation discussion threads and synchronous calls to help ensure that Milestone language is meets GitLab Legal's level of specificity and clarity.
        1. First milestone shipped within 60 days of joining GitLab:
            1. Accounting for 3 weeks of onboarding, targets will ship the first milestone 5 weeks following the end of the onboarding period
            1. Critical to adopting our culture and successful future integration of the target's engineering team in GitLab
            1. Allows us to show early fruits of the acquisitions soon, aligned with our value of iteration
        1. Product is integrated within 6-9 months:
            1. 6-9 months is an optimal timeframe which allows for incremental integration of the target's functionality, covering its entirety at best or its fundamentals at the very least, while not being overly extended. We would want to refrain from using a longer time frame as our roadmap priorities may change such that we could potentially find ourselves abandoning certain milestones, negating some or all of the rationale behind the deal.
            1. Will help establish focus on both acquired target and our product team
            1. Be able to complete post-closing payouts (if any earned and due) to the target's entity and shut it down as soon as practicable and in accordance with the terms of the deal documents
        1. At least one milestone will focus on developing new functionality which will be based on the integration delivered in earlier milestones
1. To determine the deal ROI, the acquisition team will perform the analysis using the applicable model as well as the [acquisition NPV calculator](https://docs.google.com/spreadsheets/d/1ke36-mtEi8MhfMKXpYGMRP6H3HH6MimxXt86Zv_QkzM/edit#gid=0) (*internal* GitLab document).
    1. The Build vs. Buy & Integration timeline estimate delta is a key input into the deal models. As part of Early Diligence, and then later refined during Confirmatory Due Diligence, the Product and Engineering Champions and their support teams will detail and forecast both a build to parity estimate, including timeline and headcount, as well as an integration estimate forecast to deliver value to GitLab customers.
        1. Direction for the Build vs. Buy & Integration estimate exercise can be found [here](https://docs.google.com/document/d/18aZobFXSenjnYlyFl7GM-T9HUApQ0CFyZjtGgB4xuyM/edit?tab=t.0#heading=h.k6xpigwjqkmp) (internal GitLab document). The Build vs. Buy & Integration template can be found [here](https://docs.google.com/spreadsheets/d/1vBLlpyLJs4ZMvb9p_6VusEEedlwrPuDgWcD989mMy9o/edit?gid=1219624873#gid=1219624873) (internal GitLab document).
1. Early People-Ops review
    1. The Corporate Development Deal Process Manager will create a new Slack channel topic of `#p-code_name-people` and include the People-ops Champion (VP of People-Ops) and a Talent Acquisition Lead. The People-ops Champion may request that the Corporate Development Champion and Process Manager bring in designated People-ops team-members as needed.
        1. Employee roster review
            1. Set your own LinkedIn profile to [private mode viewing](https://www.linkedin.com/help/linkedin/answer/a564182/private-mode-viewers-of-profiles?lang=en) when reviewing target employee profiles. Private mode viewing will prevent target employees from being alerted to GitLab's examination of their LinkedIn profiles.
        1. Compensation review - to identify any gaps and possible flags led by the HR Business Partner
        1. Founder technical interviews - founder(s) will go through two rounds of interviews to assess technical and cultural alignment.
            1. The founder interview differs in style and objective of a traditional new hire interview. Interviewers will be asked to review the [Interview Preparation Direction](https://docs.google.com/document/d/1k4sW4HgkRd2tN4TgWYITKqymACF2LCks32bVP_GgHs8/edit?tab=t.0#heading=h.97p1j2m533l5) in advance of meeting with the founder(s).
1. An Application Security Review performed by GitLab's Application Security Team
    1. Identifies application vulnerabilities that need to be considered by GitLab by applying a threat modeling approach to conduct the review
1. Presenting the business case for approvals (by order of occurrence):
    1. Champions' approval: The acquisition team will review the business case together and approve the suggested deal. This includes approval of all the following:
        1. Complete executive summary (with link to term sheet draft) including budget and headcount allocation for the acquisition
        1. Complete business case templates (see Corp Dev shared drive for both - GitLab internal-only) including Deal Milestones
        1. Complete term sheet ([template](https://docs.google.com/document/d/1_G2bXxhMe_qXrF8LdZcXwsCcIs1GJAS1-v42U2MV8a4/edit)) draft with proposed details (asset payment, retention bonuses, Deal Milestones, closing schedule, customer termination and closing conditions) filled in.
    1. Functional approvals: The Corporate Development, Product and Engineering Champions will present the business case for acquisition to the CPO, CTO and CRO. They will review to approve the items listed in the Champions' approval (complete: executive summary, business case, term sheet)
    1. CEO, CFO and CLO approvals: The Corporate Development, Product and Engineering Champions will present the business case for acquisition to the CEO, CFO and CLO. This meeting will also capture the **explicit approval** of the term sheet to start negotiations.
        1. Approval of term sheet to start negotiations will be tracked in a [term sheet approval issue](https://gitlab.com/gitlab-com/corporate-development/issues/new?issuable_template=term_sheet_approval). We don't include any financial and milestone information in the approval tracking issue for confidentiality reasons.
1. Term Sheet:
    1. Once the terms to start negotiations have been approved, the Corporate Development Deal Champion will reach out to the target company to share the offer and term sheet.
    1. Once an agreement on terms with the target has been reached, the term sheet (with any changes) will be brought forward for approval from: CLO, CFO, CEO (in that order). These approvals will be captured in the term sheet approval issue.
    1. Once all approvals have been obtained, the Corporate Development Champion will stage the term sheet for signing on DocuSign for target CEO and GitLab CEO (in that order). Add CLO, CFO, and CPO on Cc on the agreement.
        1. Approval tracking will be tracked on the term sheet approval issue mentioned earlier. Any changes to previously-approved terms need to be reviewed and approved once more by the following: Product champion, Engineering champion, CPO, CTO, CLO, CFO, CEO. The changes should be referenced on the term sheet approval tracking issue *before* seeking approvals.

### Confirmatory Due Diligence

1. To kick-off the Due Diligence stage, the Corporate Development Deal Process Manager emails the target company CEO with the following clarifications and information requests:
    1. All employees and their profiles will be reviewed by the GitLab team
    1. The employees who will be invited for interviews will go through GitLab's standard interview process
    1. Key employees who were interviewed during the Early Diligence stage may go through further interview rounds as determined by the GitLab team to qualify for a role at GitLab
    1. All employees must identify an open vacancy at GitLab which they think best matches their professional profile. This will be shared in a spreadsheet gathered by the target's CEO.
1. The Corporate Development Deal Process Manager will create an engagement debrief and lessons learned document and share it with the team for on-demand capturing of insights.
1. Document who is read-in on the project and work with GitLab Legal to circulate a Read-in Acknowledgement form to sign and return.
1. Complete [Technical diligence](https://internal.gitlab.com/handbook/corporate-development/acquisition-process-technical-diligence/)
1. Complete financial diligence
1. Legal diligence - Once both the technical and the financial diligence have been completed and signed off by the Engineering champion and Finance acquisition team member, respectively, the Corporate Development Deal Process Manager will contact legal to start the legal diligence. Legal will tag the relevant owners for each of the diligence tasks in the (template diligence table (see Corp Dev shared drive - GitLab internal-only) in the main acquisition doc.
1. The progress of the diligence will be synced on a regular stand-up call with the acquisition team
1. The Corporate Development Champion and the legal lead negotiate the definitive deal documentation with the target company CEO and legal team
1. Key employee retention conversations - to increase the success rate of the deal and integration plan, we may request to conduct retention conversations for the key technical employees identified. The key technical employees are those identified as critical to the success of the acquisition, the proposed integration plan and the future of the team at GitLab post integration.
1. Final review and approval:
    1. Conclusive call - Final internal review call with the acquisition team to recap the acquisition as a whole, review the acquisition agreement and present a final recommendation. This meeting will also capture the **explicit approval** of the acquisition agreement from the CLO, CFO and CEO. Approvals from the call as well as additional required approvals will be tracked using the definitive agreement approval [issue template](https://gitlab.com/gitlab-com/corporate-development/issues/new?issuable_template=definitive_agreement_approval).
    1. BoD approval:
        1. Legal will facilitate the final deal approval from GitLab's Board of Directors
        1. A board package will be shared with the BoD members before requesting their approval. It should include:
            1. Executive summary email:
                1. Will be sent to the BoD members by the CEO
                1. The Corporate Development Champion and Deal Process Manager will create a 1-2 page executive summary email message. It should include a high level coverage of the following topics:
                    1. Deal details and rationale (including roadmap acceleration, projected revenue gain)
                    1. Expertise of team joining
                    1. Key terms for the APA and any additional costs
                    1. Diligence conducted: legal, tax, financial, technical, people
                    1. Known risks, indemnification conditions as well as representations and warranties
            1. Link to final version of APA
1. The Corporate Development Champion will coordinate the signing and closing of the deal

### Integration

The Corporate Development team is responsible for overseeing and facilitating the post-closing [integration](/handbook/acquisitions/acquisition-process/integration/), working closely with Legal, Product, Engineering, People, Finance, and other GitLab divisions as appropriate. The DRI is the Senior Director Corporate Development.

The integration process is outlined in our [acquisition integration page](/handbook/acquisitions/acquisition-process/integration/).

### Terminated Acquisition Engagements

1. If the acquisition has advanced past the Technical Call, conduct a retrospective:
    1. Create a retrospective issue (GitLab internal-only [example](https://gitlab.com/GL-corp-dev/project-snowy/-/issues/26))
    1. Set time for an **optional** live sync
    1. Solicit feedback on all related acquisition channels
    1. Once sync has completed, continue with the steps below.
1. The Corporate Development Deal Process Manager will archive all slack channels associated with the acquisition.
1. In accordance with the signed NDA, the GitLab Corporate Development Champion and Deal Process Manager, and all other deal participants in possession of preliminary and confirmatory deal diligence materials, will make best effort to remove the materials from GitLab's internal drives and repositories.

## Acquisition Team

The primary acquisition team is designed as a compact unit, and will consist of the following GitLab functional team members:

1. Corporate Development Champion - VP of Corporate Development
    1. Corporate Development Deal Process Manager - Corporate Development Manager
1. Product Champion - [Product Section Leader](/handbook/product/product-leaders/product-leadership/#general-product-organizational-structure) (reporting to the Chief Product Officer)
   1. Product Manager
1. Engineering Champion - Dir. Engineering
   1. Engineering team member
1. VP, People Operations
1. Legal, Corporate lead

The primary acquisition team will engage with other functions and roles as needed:

1. VP Finance and Business Technology
1. VP Tax
1. Principal Accounting Officer
1. People Business Partner
1. VP Talent Acquisition
1. VP of Security

To assign the product manager, after the product call or as soon as it's clear which product category the features will be implemented into, contact the category product director for the assignment.

To assign the engineering team member, contact the engineering manager of the relevant category for assignment.

### Acquisition Team Responsibilities

| Function                    | Role                                                                                                                                                               | Deliverables                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Corporate Development       | 1. Main POC for acquired team <br>1. Identify potential areas for integration 1. Create case for acquisition and customer transition story <br>3. Integration              | 1. Business case with deal structure                                                 |
| Product                     | 1. Outline current product features to be implemented into GitLab <br>1. Outline potential future functionalities to be built into GitLab after the integration period | 1. Product integration strategy                                                              |
| Engineering                 | 1. Technical diligence                                                                                                                                             | 1. Code quality review 1. Integration strategy validation - feasibility and timeline |
| Finance                     | 1. Lead financial diligence <br>2. Validate business case and work with tax team to validate deal structure                                                                                           |                                                                                      |
| Legal                       | 1. Review entity, assets and existing agreements <br>2. Evaluate sunset and customer transition path                                                                   | 1. Term Sheet 1. Acquisition agreement and ancillary deal documents                                               |
| People Group | 1. Maintain SSOT for team member data <br>2. Lead the compensation review <br>3. Lead the interview process during the early and due diligence stages to completion 3. Lead and assess successful team member integration in partnership with business                                                                    | 1. Team Member Offers of employment<br>2. Onboarding experience <br>3. Post acquisition survey and action planning                                             |
|Security|1. Identify and summarize Security Risk Posture as part of Early Diligence <br>2. Perform Application Security review|1. Security Risk summary detailing the security risk impacts to GitLab|

## Acquisitions Are Confidential

At GitLab, we treat all acquisition discussions as confidential and share any information internally on a need-to-know basis. We apply [compartmentalization](https://en.wikipedia.org/wiki/Compartmentalization_(information_security)) for the various topics coming up during the acquisition process in order to maintain confidentiality and reduce unnecessary exposure.

To ensure confidentiality during the acquisition process, we assign [code names](/handbook/communication/confidentiality-levels/#project-names) to each potential transaction once we enter the Early Diligence stage. Project name themes are defined by GitLab Legal, Corporate Development's theme is Movie / TV Show characters.

To maintain confidentiality, we follow the following guidelines:

1. When creating a new acquisition slack channel:
    1. Set the channel topic to: "This channel is confidential. Please confirm with Corporate Development Champion or Deal Process Manager `name here` before inviting people to the channel or related docs."
    1. Set the channel description to: "Please review our [acquisition handbook and process](/handbook/acquisitions/acquisition-process/) to familiarize yourself with our approach to acquisitions. Please review the confidentiality section of the process and our guidelines".
1. We strive to keep the number of people involved in an acquisition as small as possible to reduce legal exposure and maintain a low potential risk of deal and information disclosure. If more members are required to be brought into the acquisition for a discussion limited to a specific topic, and do not need to be involved with the wider engagement, we create dedicated, single-topic channel, and add the relevant parties to it.
1. If you're part of an acquisition Slack channel, Google Doc, or other internal GitLab discussion and would like to invite another GitLab team member to one of those, please confirm with the Corporate Development Champion or Deal Process Manager before doing so.
1. We collect all notes on an acquisition in the main acquisition doc shared on the topic of the acquisition's slack channel. If you must create a new document, make sure it is set to invite-only and add the relevant people manually. That document needs to be kept inside the acquisition G-Drive folder on the Corporate Development Shared Drive.
1. Everyone involved in the project should use the code name in place of the actual company name in all communication about the deal until it is publicly announced.

### Shared Slack Channels with Targets

If and when our team and the target's would like to open a shared Slack channel for streamlined communication, please engage Corporate Development for that purpose so that we can ensure we have persistent process visibility.

### Social Media

As an operating principal, all team members are advised not to accept social media invites or follow requests (LinkedIn, Facebook) from individuals at companies with which we are actively engaged in acquisition discussions. Third-parties can view these connections and deduce that GitLab is having, or has had, discussions relating to M&A or investments.

If you have an existing connection, or a regular cadence of interaction, with a company that then becomes engaged in M&A discussion with GitLab you do not need to disassociate. The spirit of this guidance is intended to keep the status-quo and not create the perception of change in relationship between GitLab and the company being evaluated.

## Prioritizing Acquisition Opportunities

Each quarter the Corporate Development team defines a set of [three categories](/handbook/acquisitions/#acquisition-strategy) which are prioritized for that quarter for outbound activity. We commonly refer to them as Quarterly Focus Areas. While this is true especially for our outbound efforts, these categories will be at the center of our overall efforts and focus for that quarter, taking into account inbound prospects as well.

Although we have our quarterly focus areas, we are open to discussing and potentially pursuing an opportunity outside of those focus areas. For us to look into an opportunity outside of our quarterly focus areas, it needs to satisfy one, or more, of the following criteria:

1. Present an outsized revenue potential
1. Serve as a strategic move (market dynamics etc.)

Every opportunity we explore is constantly evaluated against our prioritization as well as our bandwidth (including active engagements).

If you wish to propose an opportunity you believe we should pursue and is outside of our quarterly focus areas, please contact the Corp Dev team with the rationale behind that specific opportunity.
