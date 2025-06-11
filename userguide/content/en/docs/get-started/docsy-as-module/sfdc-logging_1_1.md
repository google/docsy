---
title: Salesforce Field Logging Requirements
description: >-
  A comprehensive guide for Solutions Architects on required Salesforce fields, data capture requirements, and best practices
  for maintaining accurate opportunity tracking.
---

## Overview

Solutions Architects are responsible for maintaining several key fields in Salesforce to ensure accurate tracking of an opportunity's stage progress, technical evaluation, and customer engagements. In conjunction with Rattle activity logging and Gong interaction tracking, these fields help create a complete picture of the customer engagement. This guide outlines the required fields and best practices for maintaining them.

## Primary Solutions Architect

- The primary Solutions Architect assigned to and working on the opportunity
- Must be updated whenever SA assignment changes
- Critical for accurate reporting and accountability
- Limited to a single Solutions Architect

## SA Validated Tech Evaluation

An **SA Validated Tech Evaluation** is a set of SA-assisted activities a prospect or a customer undertakes to make a decision on whether or not a GitLab solution will provide the value they expect. These activities include and are not limited to a guided trial, POV, value stream assessment, workshops, and strategy roadmap planning. An SA Validated Tech Evaluation does not start until a prospect or customer explicitly engages in an evaluation of value and involves meaningful engagement with a GitLab SA. If SA is working towards a "technical win,"  we have a SA validated technical evaluation.

**If the GitLab SA does not know the next actions to progress the evaluation towards closure, it's an indication that there is NOT an SA Validated Tech Evaluation that the SA is meaningfully engaged on.**

To assist with the analysis of SA guided technical evaluations by our prospects and customers, the SA team maintains four opportunity fields in Salesforce. These four fields can be updated through Rattle or within the opportunity in Salesforce: **SA Validated Tech Evaluation Start Date**, **SA Validated Tech Evaluation End Date**, **SA Validated Tech Evaluation Close Status**, and **SA Validated Tech Evaluation Close Details**.

### SA Validated Tech Evaluation Start Date

The SA Validated Tech Evaluation Start Date indicates the date the SA started engaging with a prospect or customer on an **explicit solution evaluation**.

- Marks the date the Solutions Architect was meaningfully engaged on an **explicit solution evaluation** where we are working towards a technical win.
- Should reflect when a customer seriously engages in an evaluation of value, not other initial activities such as discovery, initial demos, demand generation, education, etc. that do not directly relate to the serious evaluation of Gitlab addressing an agreed upon problem and / or drive a specific outcome
- Should typically align with **Stage 3 - Technical Evaluation** opportunities
- Should be accompanied by the **SA Feasibility Rating**

### SA Validated Tech Evaluation End Date

The SA Validated Tech Evaluation End Date is when the technical evaluation is deemed closed as a technical win, loss, or a stalled evaluation. This has no connection to whether or not the deal has closed with a win or loss, as there may be non-technical variables that impact the success of a deal after a technical evaluation.

- Marks the date a technical evaluation concluded through a technical win, technical loss, or stalled evaluation
- Should NOT be used as a forecasted date
- Should be accompanied by the **SA Validated Tech Evaluation Close Status** and **SA Validated Tech Evaluation Close Details** fields
- Indicates the opportunity should move out of Stage 3 - Technical Evaluation
- May differ from the overall opportunity success

### SA Validated Tech Evaluation Close Status

The SA Validated Tech Evaluation Close Status represents the result of the technical evaluation at the end date.

- Available options include:
  - **In Progress** The technical evaluation has started and there is still active work occurring to move towards closure
  - **Win**: The technical evaluation has ended, and the prospect or customer agrees the GitLab solution meets their requirements
  - **Loss**: The technical evaluation has completed, but the prospect or customer is choosing an alternative solution or not changing their current process due to deficiencies with the evaluated GitLab solution
  - **Stalled**: The technical evaluation has not completed, but the customer or prospect is not actively evaluating any solution - typically when the SA has not been working with the prospect or customer on evaluation-related activities for at least two weeks
- Should NOT be used as a forecasted status
- Should be accompanied by the **SA Validated Tech Evaluation End Date** and **SA Validated Tech Evaluation Close Details**
   
### SA Validated Tech Evaluation Close Details

The SA Validated Tech Evaluation Close Details provide additional context for the outcome of the evaluation.

- Should be a concise summary of the outcome using 1-2 lines
- Should be accompanied by the **SA Validated Tech Evaluation End Date** and **SA Validated Tech Evaluation Close Status**

## Technical Health and Feasibility Rating

The SA Feasibility Rating is an assessment tool used by Solutions Architects to evaluate the **technical health and progress of an opportunity**. It uses a Red-Yellow-Green rating system to indicate the level of risk or favorability in an opportunity's presales forecast and indicates where additional attention may be needed.

- The Solutions Architect is the [Directly Responsible Individual (DRI)](/handbook/people-group/directly-responsible-individuals/) for ensuring these fields are accurate and updated
- Solutions Architect Managers will regularly review SA Feasibility Ratings to understand where different time, attention, or resources should be attributed to the opportunity
- The **SA Feasibility Rating** and **SA Feasibility Details** fields will be used as point of discussion during regular Top Deal Reviews and pipeline analysis
  - Solutions Architect Managers may downgrade a SA Feasibility Rating after review

### Salesforce Fields

#### SA Feasibility Rating

The SA Feasibility Rating represents the Solutions Architect's current understanding of the opportunity's health as of the **SA Feasibility Review Date**. This is represented using a simple rating system: **Red-Yellow-Green**.

As each opportunity is unique, a Solutions Architect might find themselves identifying Red, Yellow, and Green aspects of the same opportunity. The Solutions Architect should use their best judgment for this non-scientific measurement and capture assumptions in the **SA Feasibility Details** field.

When determining if an opportunity should have the SA Feasibility Rating fields completed, follow the below [tracking criteria](#tracking-criteria).

##### Red

An opportunity might have a **Red** rating if there are significant technical challenges, misalignment, unclear requirements, or insufficient resources.

Example situations that should have a **Red** SA Feasibility Rating:

- Success criteria unclear, undocumented, and/or significantly misaligned with solution capabilities
- Missing [Technical Close Plan](/handbook/solutions-architects/sa-practices/technical-close-plan)
- Lack of meaningful activities, like tailored demos and hands-on workshops
- Customer disengaged overall
- Weak or no technical champion
- No executive sponsor
- Adverse organizational changes at customer or prospect
- Key decision maker or influencer working against the success of the evaluation

##### Yellow

An opportunity might have a **Yellow** rating if there are some concerns or challenges to address to ensure a successful technical and deal win. This includes minor technical hurdles, scope creep, or potential resource constraints.

Example situations that should have a **Yellow** SA Feasibility Rating:

- Minor misalignment between success criteria and current solution capabilities
- Proof of Value planned but not yet well-defined or started but off-track
- Deviating beyond agreed upon success criteria
- Significant timeline delays
- [Technical Close Plan](/handbook/solutions-architects/sa-practices/technical-close-plan) or Customer Success Plan missing critical information
- Uncertainty from organizational changes at customer or prospect
- Siloed engagement in 1-2 customer [personas](/handbook/solutions-architects/processes/activity-capture/activity-logging/#logging-an-activity) (Development, QA, Operations, Security, DevOps, Infrastructure)
- Identified but distracted technical champion
- Executive identified but with limited engagement
- Opportunities too early in the deal cycle to have enough information

##### Green

Strong technical fit and alignment.  Technical aspects well-understood, resources adequate, deal on track.

Example situations that should have a **Green** SA Feasibility Rating:

- Significant customer engagement through tailored demos and hands-on workshops
- Approved Proof of Value on track
- Well documented [Technical Close Plan](/handbook/solutions-architects/sa-practices/technical-close-plan) and Customer Success Plan
- Alignment across customer [personas](/handbook/solutions-architects/processes/activity-capture/activity-logging/#logging-an-activity) (Development, QA, Operations, Security, DevOps, Infrastructure)
- Obvious and strongly engaged technical champion
- Strong executive engagement
- Strong engagement from cross-functional GitLab teams, like Product, Professional Services, and Field CTOs
- Simple add-ons, planned growth, or renewals that do not require a technical win to close

#### SA Feasibility Details

The SA Feasibility Details field captures simple commentary and evidence to justify the SA Feasibility Rating. This should include specific technical challenges and risks and will provide the context needed for Top Deal Reviews and alignment between Sales and Pre-Sales.

This field is not to be used for:

- Technical evaluation status - use [SA Validated Tech Evaluation](#sa-validated-tech-evaluation) fields instead
- Activity logging - use the [Activity Based Logging Guide](/handbook/solutions-architects/processes/activity-capture/activity-logging) instead
- Next steps or mitigation plans - use [SA Next Steps](#sa-next-steps) instead

#### SA Feasibility Review Date

The SA Feasibility Review Date is an automatically populated field that captures the last time either SA Feasibility Rating or SA Feasibility Details fields were updated to show when the last technical review occurred. This will be used when tracking and reviewing to ensure SA Feasibility Ratings stay current.

Because this is a system-maintained field, no manual updates are needed.

### Tracking Criteria

Not all opportunities require the SA Feasibility Rating fields to be completed. Generally speaking, any opportunity with an SA Validated Tech Evaluation should have an SA Feasibility Rating. Other criteria are listed below:

#### Applicable Stages

SA Feasibility is most applicable in Stages 3-4. Before Stage 3 - Technical Evaluation, the Solutions Architect should be thinking about how best to structure an evaluation to set up for a successful technical win. After Stage 4 - Proposal, the technical evaluation should have completed and the Solutions Architect moves into a support role. 

#### Net ARR Thresholds

Not all opportunities are large enough to warrant tracking the SA Feasibility Rating. The below thresholds are guidelines for Enterprise and Commercial teams:

- **Enterprise:** Net ARR over $100k or First Orders for Focused Accounts
- **Commercial:** Net ARR over $50k

#### How to Handle Limited Engagement

Opportunities with minimal SA engagement should use the following criteria to simplify **SA Feasibility Rating** and **SA Feasibility Details**:

- **Simple add-ons, planned growth, and renewals:**
  - SA Feasibility Rating: Green
  - SA Feasibility Details: Engagement not required
- **Too early:**
  - SA Feasibility Rating: Yellow
  - SA Feasibility Details: Not engaged yet and don't know enough
- **Not engaged:**
  - SA Feasibility Rating: Red
  - SA Feasibility Details: Not engaged at all but should have been

#### Update Frequency

At minimum, the **SA Feasibility Rating** and **SA Feasibility Details** should be updated before a Solutions Architect has a Top Deal Review with their manager. Additionally, the fields should be updated anytime there's significant change to the rating itself. Solutions Architects should also consider updating the **SA Feasibility Details** after any customer interaction that further supports the current **SA Feasibility Rating**.

### How to Update

The fields are available in the **Technical Evaluation** section of an opportunity in Salesforce where they can be updated directly. Additionally, Solutions Architects can leverage Rattle Slack Notifications by clicking **Health & Next Steps** and updating the appropriate fields.

## Activity Planning Fields

### SA Next Steps

- Planned SA activities to drive deal forward with target dates
- Functions as daily to-do and follow-up list
- Examples include demonstrations, value stream workshops, hands-on workshops, Proofs of Value, etc. 
- Track progress through technical evaluation
- Must be updated after each customer interaction
- Empty/outdated field signals inactive opportunity, and lack of activities
- Do NOT use as a log of past activities (use [Activity Based Logging Guide](/handbook/solutions-architects/processes/activity-capture/activity-logging))

### SA Next Steps Date

- Date of first planned activity in **SA Next Steps**
- Enables daily to-do list extraction
- Indicates when **SA Next Steps** needs updating

### SA Next Steps History

- Auto-updates with **SA Next Steps** changes
- Keeps track of historical changes
- System-maintained, no manual updates needed

### Related Fields

#### POV Status and Details

- Required when a Proof of Value is part of the engagement
- Must be maintained throughout the POV process
- For complete details, see the [POV tracking guide](/handbook/solutions-architects/tools-and-resources/pov/#tracking-a-pov-in-salesforce)

#### Customer Success Plan

- Required for all opportunities $300k+ Net ARR where an SA is meaningfully engaged
- Must be populated with a link to the plan document
- Plan should be continuously developed and updated throughout the opportunity lifecycle until deal closure
- See [Customer Success Plans](/handbook/solutions-architects/processes/activity-capture/customer-success-plans) for more details

### When to Update Fields

- Update fields as soon as status changes occur
- Don't wait until opportunity closes
- Keep fields current for accurate reporting
- Update through Rattle or directly in Salesforce

### Relationship with Rattle Activity Logging

While these Salesforce fields must be updated directly in Salesforce, activity tracking (which appears as Tasks in Salesforce) can be logged through Rattle:

- Via Rattle notifications after meetings
- Using the `/Rattle <opportunity name>` command in Slack
- Through the "Update Opportunity" button in Rattle

For detailed instructions on activity logging through Rattle, see [Activity Based Logging Guide](/handbook/solutions-architects/processes/activity-capture/activity-logging).

## Best Practices

### Field Updates

#### Timing

- Update fields in real-time when possible
- Don't backdate unless absolutely necessary
- Keep current even if opportunity is early stage

#### Accuracy

- Be precise with dates
- Use clear, concise descriptions
- Maintain consistency across opportunities

#### Completeness

- Fill all required fields
- Don't leave fields blank or TBD
- Include relevant context

### Common Scenarios

#### Multiple SAs

- Only one Primary SA
- Others tracked through activity logging
- Clear handoff process when changing Primary SA

#### Stalled Evaluations

- Mark as stalled after 2 weeks of inactivity
- Update status if evaluation resumes
- Document reason in close details

#### Commercial Trials

- Align with trial dates
- Must have SA engagement
- Track through completion

## Updating Closed Opportunities

If opportunity is closed and fields need updating, you can request Sales Operation to make the necessary updates: Please reference the “[Requesting Internal Support](/handbook/sales/field-operations/requesting-internal-support/)” section in the Handbook for additional details.

1. Navigate to the closed opportunity that needs to be updated
2. Click on the **“Request Support”** button.
3. Choose **"Sales Ops"** team from the dropdown list and select Next.
4. Select **"Other (SPECIFY IN NOTES)"** request type and specify needed updates in the **"Notes"** field providing clear justification

Example message:

```txt
Please update the SA Validated Tech Evaluation Close Status to Won, 
and SA Validated Tech Evaluation End Date to 2024-01-14
```

## Validation Rules

- Start Date must be before End Date
- Close Status required if End Date is set
- Close Details required if Status is set
- Primary SA required for Stage 3+ opportunities

## Reporting & Analytics

These fields drive key reports:

- Technical Evaluation Dashboard
- SA Activity Analysis
- Win/Loss Analysis
- Pipeline Health Metrics

## Field Dependencies

Understanding how fields interact:

- Start Date enables End Date
- End Date requires Close Status
- Close Status requires Close Details
- All fields linked to Primary SA

## Quality Assurance

Regular checks for:

- Missing required fields
- Inconsistent dates
- Incomplete close details
- Accurate status updates

## Getting Help

- Contact Sales Support for closed opportunity updates
- Reach out to SA leadership for guidance
- Use #salesforce-help Slack channel
- Submit feedback through standard process
