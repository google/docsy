---
title: "Iteration 0"
description: "Iteration 0 starts with our internal EM>PS Transition meeting and continues through the Planning and Design Sessions with the Customer. This critical phase establishes project foundations and ensures alignment between GitLab and Customer teams."
---

**Quick Links:** | [Iteration 0 Fundamentals](../iteration-0-fundamentals/_index.md) | [Delivery Kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits)

## Phase Overview

Iteration 0 consists of four key activities that build upon each other:

1. [EM>PS Transition](#emps-transition) - Internal knowledge transfer
2. [Stakeholder Planning Meeting](#stakeholder-planning-meeting) - Initial customer alignment
3. [Customer Kickoff](#customer-kickoff) - Full team engagement
4. [Support Preparation](#prepare-support-for-issues) - Proactive issue management

Each activity has specific inputs, processes, and outputs to ensure a smooth start to your project.

---

## EM>PS Transition

**Purpose:** Gather context on the account, validate the SOW, and prepare for customer-facing activities.

### Pre-Meeting Preparation

Before the transition meeting:

1. **Review Documentation**
   - Statement of Work (SOW)
   - Kantata project details
   - Scoping issues attached to the Customer Epic
   - For Consulting Block SKUs: Review the [DoW](https://docs.google.com/document/d/1ZsMUvBUL9kt3CqB4YjYlX-E1uEJz-elO/edit) (should be attached to Customer Epic)

2. **Schedule the Meeting**
   - Include: Engagement Manager, Technical resources, Account Managers, and Customer Success Managers (if assigned)
   - Use the [Schedule Intake issue](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/SchedulingIntakeQuestions.md) or [this template](https://docs.google.com/document/d/1bpyhc-a1z573EsyIQtUE-7HS_QauDVmQsHP25PD9i1A/edit) to prepare the agenda

3. **Gather Prerequisite Data**
   - Reference [Delivery Kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits) for relevant information
   - Review [Iteration 0 Fundamentals](../iteration-0-fundamentals/_index.md)
   - Consider [discovery best practices](../discovery/_index.md)
   - For complex programs, prepare a [RACI template](https://docs.google.com/spreadsheets/d/1nb_sEI-M3IwNgkYQA2uKAo9IDijstPtUGCtLsHlwrtI/edit?gid=1394419027#gid=1394419027)

### Meeting Execution

Focus the discussion on:

- Business drivers and context
- SOW validation and clarification
- Technical requirements overview
- Schedule planning for Stakeholder Planning and Kickoff
- Risks and dependencies

### Key Outputs

Following the meeting, ensure completion of:

- [ ] Internal team understands where to find the latest status
- [ ] Initiate [Collaboration Project](/handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/cp/) setup and pin to Slack channel, along with the internal retrospective issue (attached to the Customer Epic)
- [ ] Stakeholder Planning meeting scheduled with the Customer
- [ ] Technical prerequisites identified for discussion with the Customer
- [ ] Initial risks documented

> **💡 Tip:** Think big in discovery and consider team alignment for team readiness. The goal is to enter Planning and Design sessions confidently, with the Customer well-prepared.

---

## Stakeholder Planning Meeting

**Purpose:** Align on project scope, resources, management approach, and dependencies to uncover any inconsistencies in expectations before the full team kickoff.

### Meeting Setup

1. Schedule a dedicated meeting with Customer PM & key stakeholders from both GitLab and Customer teams.
2. Use the [Stakeholder Planning Template](https://docs.google.com/presentation/d/1vVJQrJeGG-yLAeso_iKkb80H5kE7wStyBAj1sj45sY4/edit#slide=id.g923452f41b_1_5) to guide the discussion
3. Focus on mutual understanding of project parameters

### Key Discussion Topics

1. **Project Stakeholders**
   - Identify all key participants and their roles
   - Confirm availability and communication channels

2. **Project Objectives**
   - Validate business drivers and success criteria
   - Align on use cases and expected outcomes

3. **Project Velocity and Timeline**
   - Set expectations on pace and milestone dates
   - Discuss sprint/iteration cadence preferences

4. **Project Prerequisites**
   - Review technical and organizational readiness
   - Identify any blockers to starting work

5. **Kickoff Preparation**
   - Determine agenda and participants for the full kickoff
   - Set expectations for the kickoff meeting

6. **Onboarding Validations**
   - Ensure all access and permissions are in place
   - Verify environments and tooling availability

7. **Next Steps**
   - Document action items with owners and deadlines
   - Plan for Customer Kickoff and Discovery sessions

### Key Outputs

- [ ] Validated stakeholder list and roles
- [ ] Aligned expectations on timeline and velocity
- [ ] Documented prerequisites and dependencies
- [ ] Prepared agenda for Customer Kickoff
- [ ] Action items with clear ownership

> **💡 Tip:** Use this meeting to identify and address any expectation misalignment between GitLab and the Customer team before the broader kickoff meeting.

---

## Customer Kickoff

**Purpose:** Bring together all relevant project stakeholders to align on project objectives, approach, and next steps to enable swift execution.

### Preparation

1. Consolidate insights from EM>PS Transition and Stakeholder Planning
2. Prepare the presentation using the [Kickoff deck template](https://docs.google.com/presentation/d/1Sva2u7NGxUTmDxQNBpqmFm_ep9HHlU86WyhON-To5lU/edit#slide=id.g3427bc5c553_0_243)
3. For projects with steering committees, also prepare the [SteerCO template](https://docs.google.com/presentation/d/1TDKOJeuzR1uy18umu6ovy30l_A986pOEatFn_7eiNbQ/edit#slide=id.g2e563e08cf5_0_1)
4. Ensure all key stakeholders are invited

### Meeting Content

Present a comprehensive overview of:

- Project objectives and success criteria
- Team structure and roles
- Project approach and methodology
- Timeline and milestone plan
- Communication and reporting cadence
- Next steps and immediate actions

### Key Outputs

- [ ] Confirmed understanding of project objectives and approach
- [ ] Scheduled Discovery & Planning sessions
- [ ] Confirmed [Iteration Cadences](../iteration-scheduling/_index.md)
- [ ] Documented action items with clear ownership

---

## Prepare Support for Issues

**Purpose:** Proactively prepare the Support team by providing key project information to streamline issue resolution during the engagement.

> This process is critical for infrastructure-related projects like implementations but valuable for any engagement where support issues may arise.

### ZenDesk Access

If you don't have ZenDesk light (Read-Only) access:

- For Zendesk Global
  - See [Requesting a ZenDesk ‘Light Agent’ account](../../../../support/internal-support/#requesting-a-zendesk-light-agent-account)
- For Zendesk US Government
  1. Open an [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)
  1. Make sure the `System name` value is `Zendesk - US Federal, light agent access`
  1. Assign to your manager
  1. Once your manager approved (as per the AR instructions), they will ping the `Zendesk - US Federal` [tech_stack owner(s)](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
     - Keep in mind you must have US citizenship to have this access

### Creating a Support Note

{{% alert title="Note" color="danger" %}}

The below information is solely for Zendesk Global. If the organization is on Zendesk US Government, please make a post in [#support_operations](https://gitlab.enterprise.slack.com/archives/C018ZGZAMPD) specifying you need to modify an organization note in Zendesk US Government, making sure to provide the Salesforce Account or Zendesk Organization link (do not state the name of the customer or any other sensitive information).

Customer Support Operations (those with Zendesk US Government access) will work with you to get that completed.

{{% /alert %}}

#### Step 1: Find the Customer Organization

1. Access the [Organizations Repository](https://gitlab.com/gitlab-com/support/zendesk-global/organizations/-/tree/master/organizations)
2. Search for the Customer Name (will appear as a hash followed by the Salesforce name)
   ![ZenDesk Search Image](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/iteration-0/Zen-search.png)

#### Step 2: Edit the YAML File

1. Select the YAML from Search, then click `Edit > Open in Web IDE`
   ![Edit YAML Image](/images/customer-success/professional-services-engineering/professional-services-delivery-methodology/iteration-0/edit-yaml.png)

2. Add information after the notes section (starting with a pipe `|`):

```yaml
---
id: 27946339528
name: 5a1f9965 Test Account
notes: |
   PS Project in Progress
   Project Manager:
   Slack Channels:
   Engineers:
   Start Date:
   Anticipated End Date:
   Summary of Engagement:
   Support should know:
   Collaboration Project RAID(Issue) Board Link:
   