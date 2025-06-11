---

title: "Governance and IT Program Management"
description: "Describes the program methodology for GitLab IT programs to ensure strong results and execution in an efficient way, proper scoping consistent with our value of iteration, correct stakeholders consistent with our value of collaboration and proper documentation for compliance consistent with our transparency value."
---



<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Context

This page describes the program methodology for GitLab IT programs to ensure strong results and execution in an efficient way, proper scoping consistent with our value of iteration, correct stakeholders consistent with our value of collaboration and proper documentation for compliance consistent with our transparency value.

## Criteria for programs that meet this standard

- Program is larger than two sprints (1 month)
- Program requires multiple departments for requirements and testing
- Program works on a SOX system

## Non SOX projects that follow program development

- Please refer to the one time program development controls below and follow the requirements as a best practice
- Non SOX projects User Acceptance Testing (UAT) practices:
  - Obtain testing screenshots only for high/critical risk test scenarios. These should be test cases that are used to validate the core functionalities of the system. If a high/critical test case failed, the failure would have a significant negative impact on the operations of the system and business processes.
  - For high/critical risk test failures, testers should take screenshots of their own testing and also obtain screenshots documenting resolution.

***For SOX projects please ensure all requirments are met including screenshots for all UAT test scenarios**

## Program governance

Every program must have a set of program governance. This includes:

- IT Program Manager
- Business Requirements Document (BRD)
- Program charter
- Steering committee
- Core team
- Operating rhythm
- Escalation process
- Program timeline
- Clear documentation for data model
- Clear documentation for compliance
- Enablement plan
  - Training materials
  - Communication plan
- Post implementation support plan

### IT Program Manager

A program should have a program DRI who is responsible for building out the program governance.

### Business Requirements Document (BRD)

A business requirements document (BRD) is the first document to be created by the Program DRI in partnership with the Business Lead in order to start a new program. The BRD is report that explains why the program is being undertaken and details everything the new program requires for success, providing clarity and context for stakeholders.

[Business Requirements Document (BRD) Template](https://docs.google.com/document/d/1qKqFLqgolDPXImhJL7iq4yu2A52iv0Te1ho5q3UBEVg/edit)
{: .alert .alert-warning}

### Program charter

When the BRD is completed, the program charter is the next document that the Program DRI needs to create and present it to all relevant stakeholders during the program kickoff. A program should have a charter that includes:

#### 1. Program goal

Describe what is expected to be achieved by the completion of the program using SMART (specific, measurable, achievable, relevant and time-specific) goals.

#### 2. Program scope

List the specific goals of the program, including all tasks, deliverables, costs and deadlines, plus the team that will execute the program.

#### 3. Roles and responsibilities

Note the key stakeholders, including Project Sponsor(s), Business Lead(s), Program Management Office (PMO) team, Subject Matter Experts (SMEs).

- **Project Sponsors**: Final decision-makers, escalation point, ensure resource capacity, promote the project work.
- **Business Lead(s)**: Requirements approvers, solution collaboration with project team, advocate and shape the project work.
- **PMO**: Coordinating with stakeholders, managing timeline, requirements gathering/Level Of Effort weighing.
- **Subject Matter Experts (SME)**: Ensuring the facts and details are correct so that the project deliverables meet the needs of the stakeholders, legislation, policies, standards, and best practices.

#### 4. Initial timeline

Indicate the program timeline from start to finish, including necessary resources.

#### 5. Key milestones

All reference points that marks a significant event or a branching decision point within the program.

#### 6. Program metrics and success criteria

Every program should have success metrics. These metrics should either demonstrate an increase in revenue or an increase in efficiency that helps reduce cost.

[Project Kickoff Template](https://docs.google.com/presentation/d/1p04S-TpitASMmdLn1fhKB4KewDr0-y9twP52Cel1oIo/edit#slide=id.p1)
{: .alert .alert-warning}

### Steering committee

As part of the program charter an executive steering committee should be named. This should include an executive from the sponsoring business organization and an executive from IT. For example in our expense management program we created a steering committee that included the VP IT, VP Controller, VP FieldOps. With this steering committee we cover executives for enablement and front office, back office and then IT.

[Steering Committee Meeting Template](https://docs.google.com/presentation/d/1hKXH1WA9W-1_l66kwDV-rzoisdJ1z04tm15fHlHkOUs/edit#slide=id.p1)
{: .alert .alert-warning}

### Core team

A core team should be established and commitments should be made from these team members. This should include a program DRI from the PMO tem, business lead, SMEs for different areas, BSA (if needed) and technical resources from IT. The DRI for the program should get time commitments for requirements gathering, UAT testing and enablement/training support from the business. And sprint time for design, development and functional testing from the IT teams.  In the case of expense management we named the Manager of AP as the business lead and had SMEs across accounting, sales, exec admin.

### Operating rhythm including status rollup

Each program should have an operating rhythm including when the core team meets synchronously and the executive team meets synchronously. The Program Manager is responsible for providing an async structure to document completion of tasks and report status via GitLab Epics.

#### Rolly - Weekly Roll Up Reporting

The IT Program Manager updates the [Rolly](/handbook/business-technology/pmo/#weekly-roll-up-reporting) section in the project Epic every week to provide regular updates about the on going program.

#### Status Report

For larger programs, and based on the information from Rolly, the IT Program Manager might create a Status Report to be shared across the program team and is often reviewed during the weekly program status meetings.

[Status Report Template](https://docs.google.com/presentation/d/1FvtL0MHftG33b-6eKO1sVx3vPFKu0DaeVp-GGbLdpcs/edit#slide=id.p1)
{: .alert .alert-warning}

#### Geekbot

The IT Program Manager will share async updates of the program in the dedicated program Slack, using [Geekbot](https://geekbot.com/). This report contains the below questions:

1. Week Ending
2. Report Link
   - This is the Status Report link
3. Project Status
4. Accomplished this week
5. Action Items
6. Issues/Risks
7. Key Project Dates

### Escalation process

The program DRI should establish a clear escalation process so that if a program member is blocked or needs support, they can alert the program DRI or the steering committee.

### Program timeline

There should be a clear program timeline with sprints defined so that we can deliver the program in smaller increments. There should be clarity around key requirement deadlines, delivery milestones, testing timelines so that everyone is clear. The program timeline should consider company holidays, enablement time and consider adding additional time for complex requirements (if needed).

The IT PMO team uses the [GitLab Roadmap](https://docs.gitlab.com/ee/user/group/roadmap/#roadmap) feature to track the progress of each program.
{: .alert .alert-warning}

### Clear documentation for data model

One of the deliverables of the program beyond a working technical solve is documentation on the data model of the new system or program. We use [this approach](/handbook/business-technology/tech-stack-guide/#approach).

### Clear documentation for compliance

Additionally, we need clear documentation to meet change management controls and new product introduction controls. These are fully documented [here](/handbook/business-technology/it-compliance/ITGC.html).

The relevant controls that need to be documented in these programs are these three:

#### Change Management (will exist in perpetuity)

1. Control - PC2: Changes are tested and approved by appropriate personnel in accordance with the change management policy.
   - Process for making changes.
   - Even if owned by the vendor after request, can we request changes? Do we need to test/approve?<br>
   - In many cases we should have a process to document those changes internally and test even if the change is ultimately implemented by the vendor.  We should always review the SOC 1 or 2 report to understand our responsibilities.
   - While the work to execute the control can be assigned to the vendor, the ultimate responsibility for effective execution of the control lies with GitLab. (i.e. if the vendor executes the control on behalf of GitLab inadequately, GitLab may still be required to report the deficiency of the SOX control)

#### Program Development / Implementation of the system (1 time controls)

1. Control - PD1 - Significant program changes are tested and known issues are communicated to the relevant stakeholders prior to approval.
1. Control - PD2 - GitLab validates that data transferred during an applicable program change is complete and accurate.

As a result the DRI needs to:

##### Project Plan / SDLC

- Confirm that full scope is documented prior to go-live and reconciled with implemented functionality.
- Ensure there is documentation that UAT was complete and sign-off on the UAT by business stakeholders established in the core team. This UAT sign-off should be reviewed by the steering committee and signed off as well prior to go-live.
- Testing over key processes, reports, and ensuring business needs will be met by the system (and how).
- When known issues are identified during UAT or prior to go-live they should be documented and the resolution/remediation tracked. Ideally, they would all be resolved prior to go-live, but if there are some exceptional situations, audit would look for documentation/review/some sort of approval that the program team is okay to go-live with the open issues and the plan to resolve after go-live. If these issues were audit-tested supporting evidence would look for tracking prior to go-live and resolution after go-live for all identified issues.
- Final approval for business go-live is captured. Approvals from technical owners and business owners at appropriate levels (e.g. does this warrant CFO sign-off vs. Manager sign-off).

##### SDLC Approvals

The sign-off process for each documentation and/or SDLC stage may vary depending on the project. While it is ideal to obtain sign-off from all relevant stakeholders, the prioritization of roles may depend on the specific circumstances and project dynamics. The PMO team adheres to the following guidelines when seeking approvals:

| Project Condition | Project Kickoff | Business Requirements Document (BRD) | User Acceptance Testing (UAT) | Deployment / Move to Production |
| ------ | ------ | ------ | ------ | ------ |
| When a project's deliverable affects the working methods of a limited audience, comprising **three teams or fewer** | No sign-off needed from the business | - Business Lead(s) <br> - Technical Lead(s) (if part of the requirements discovery) | - Business Lead(s) <br> - Technical Lead(s) (if part of the testing) <br> - Testing Participants | - Business Lead(s) |
| The project's deliverable will have a significant impact on the working methods of a broad audience, consisting of **four teams or more** | - Project Sponsor (can be the Zip / Coupa approval) | - Business Lead(s) <br> - Technical Lead(s) (if part of the requirements discovery) <br> - Project Sponsor(s) | - Business Lead(s) <br> - Technical Lead(s) (if part of the testing)  <br> - Testing Participants | - Business Lead(s) <br> - Project Sponsor(s) |

##### Data Management/Migration

- If there is data migration, demonstrate a reconciliation that the migration was complete and accurate prior to go-live.  Ideal evidence would include system evidence (e.g. reports, screenshots of how reports were generated from source & target systems, row count match) and a compare of each row/field. Any variance should be resolved prior to go-live and tie-outs should align with sign-off.
- For data that will be imported, what is the process for getting that into the system and what are the controls/checks in place to ensure the data that gets in completely and accurately.
- This can be solved through several avenues but good documentation is key. Who has access during transformation? Are there before/after checks? What are the “key” fields? Is there  an acceptable level of data loss/inaccuracy?
- Evidencing data management is the most important part of this Program Development process. How can we adequately demonstrate that data in the system is complete and accurate according to our business needs?
- Show documentation of an enablement plan and that the changes were communicated effectively to the users of the changed system.

[SOX Compliance Template](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/intake/-/issues/772)
{: .alert .alert-warning}

### Enablement plan

The program should have an enablement plan. The Business Lead should be DRI for this plan. This can include creating training materials, drafting communications, running AMAs, doing demos and recording videos. Additionally there should be clear dates both pre and post go live for this activity.

#### Training Materials

The Program Manager should work with the Business Lead to schedule all relevant training sessions and office hours or AMAs as needed and communicate it with all relevant participants.

#### Communication Plan

The Program Manager should work with the Business Lead to draft the communication plan (including the message, schedule and vehicle eg. slack, email, etc). The communication needs to be reviewed, approved and sent by one of the Program Sponsors. The GitLab Internal Communications Team can assist with this process. Please check the [Working with People Communications & Engagement](/handbook/people-group/employment-branding/people-communications/#working-with-people-communications--engagement) handbook page for details on how to engage with them.

### Post implementation support

There should be a plan for post-implementation support as well given that a new system can lead to an increase in volume of questions. This should be staffed by the Subject Matter Expert (SME) teams.
