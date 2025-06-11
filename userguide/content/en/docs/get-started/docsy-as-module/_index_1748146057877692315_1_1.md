---
title: "Professional Services Project Management"
description: "The GitLab PMO & Delivery team accelerates Customer time to value through excellence in Professional Services Delivery. Throughout the [PS Customer Journey](https://lucid.app/lucidchart/13d16253-7bba-4082-9b72-761c6105c7ed/edit?viewport_loc=-24156%2C-2407%2C3862%2C1831%2Cm-5o7ONTd-nK&invitationId=inv_6a3429e9-eb45-4a96-b300-dc11bd10ff35), we work to deliver Projects within the agreed scope, timeline, and budget while embracing iteration to address evolving customer needs. Our success is measured by delivering solutions that enable customers to fully realize the benefits of GitLab products. You can find the list of PS Offerings [here](https://about.gitlab.com/services/)."
---

- [Project Initiate & Plan](#project-initiate--plan)
  - [Iteration 0](#iteration-0)
  - [Initial Kantata Review](#initial-kantata-review)
- [Deliver, Train, and Monitor](#deliver-train-and-monitor)
  - [Professional Services Delivery Methodology](#professional-services-delivery-methodology)
  - [Reporting Project Health & Forecasting](#reporting-project-health--forecasting)
- [Iterate and Validate](#iterate-and-validate)
- [Deploy & Close](#deploy--close)

## Project Initiate & Plan

1. The _Customer Epic_, which is labeled as SOW# + Customer, includes internal links to all relevant Customer & contract information. After obtaining Legal approval on a Professional Services contract, PS Quote triggers an Epic in GitLab.com around the recently sold Professional Services Project, at the [Professional Services Group](https://gitlab.com/gitlab-com/customer-success/professional-services-group) level.
2. Once a prospective Services deal reaches "Stage 6" (closing) in the PS Customer Journey, the PSOps team refers to the _Customer Epic_ to find the [_"Scheduling Intake" issue_](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/SchedulingIntakeQuestions.md?ref_type=heads). From this issue, the Resource Scheduling team works to gather the initial information needed to assign the PS Resources (PM, PSE, TA). This is where the PM is introduced to the Project.
3. Once assigned, the PM then reviews the Scheduling intake and begins to review/conduct the [Sales to Delivery Transition](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/sales-to-delivery-transition.md?ref_type=heads) phase.

Given the close collaboration between the PS Project Management and PS Operations [team functions](/handbook/customer-success/professional-services-engineering/#team-functions), please refer to the [PS Operations Wiki](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-operations/-/wikis/home) for more details on processes related to scheduling, reporting, billing, partner processes, and more.

### Iteration 0 

[Iteration 0](/handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/iteration-0/) includes the initial planning between the GitLab & Customer Project Teams. Proper Iteration 0 preparedness allows us to address risk and expectation early.

**Summary of Iteration 0 Content:**

Iteration 0 covers the critical preparatory phase of a project, including:

- Engagement Manager to PS Delivery Team transition process
- Setting up Support access for the Customer
- Conducting Stakeholder Planning sessions
- Organizing the Customer Kickoff meeting
- Running initial Discovery sessions with the Customer
- Establishing working agreements between teams
- Setting up the project communication plan
- Configuring the GitLab project structure (PM tooling)

### Initial Kantata Review

Kantata is our primary Resource Management software. From here the PMO team reviews and manages the Delivery team hours against the Project scope in order to effectively report on Project progress with the Customer. This is also the primary mechanism for PS revenue forecasting. To ensure resources are allocated appropriately & our forecast is as accurate as possible, it's important to adhere to the schedule outlined above.

1. Once assigned to a project, make sure you, as the PM are assigned as the lead of the project in Kantata.
2. Go to Kantata > Resourcing > Resource Center > Projects and filter by Project Lead = you to review the allocations for your projects.
3. Go to Kantata > Resourcing > Resource Center > Team Members to see a specific resource(s) availability in case you need to change or increase allocations.
4. There are 2 types of bookings:
   - Soft bookings are non-confirmed allocations for team members (displayed as striped cells). This must be added by the PM.
   - Hard bookings are confirmed allocations (displayed as colored cells). This also, must be added by the PM.
5. To create a new resource request, navigate to the Resource Center > Projects. Under the list of assigned team members, you can click "Add Team Member" or "Add unnamed Resource", fill-in the information at the top of the pop-up and click "Submit Request". NB: Clicking "Post" will not submit the request.

_Billable vs NonBillable information_, please refer to [Team Metrics](/handbook/customer-success/professional-services-engineering/#team-metrics) page.

## Deliver, Train, and Monitor

### Professional Services Delivery Methodology

We follow the [PSDM (Professional Services Delivery Methodology)](../professional-services-delivery-methodology/_index.md) for all our Professional Service Engagements. The PSDM is a comprehensive framework that covers:

- Managing Projects in GitLab as the single source of truth
- Managing Projects according to SOW format (Agile, Timd and Materials, Fixed Price)
- Establishing Project Velocity and Iteration scheduling
- Setting up Agile ceremonies and processes
- Managing labels for effective project tracking
- Creating and maintaining status reports
- Setting up and utilizing RAID boards for risk management
- Conducting both Internal and Customer Retrospectives
- Adhering to Agile terminology and best practices
- Managing sprints/iterations for optimal delivery

### Reporting Project Health & Forecasting

**PMO/Ops Reporting Schedule** 

- The [PS reporting schedule](https://docs.google.com/document/d/1fK9HOISuISd1NLuAU2Jc3miQVe6YUACl6y-IFqshiSU/edit?tab=t.0) & month end timelines are pinned to the ps_pmo Slack channel for weekly update requirements
- The purpose of this schedule is to reference and understand the relationship between PMO updates to Projects (health, forecasts, timecards) and PS Operations (reports, resource scheduling). Goal is to ensure Project and Program Managers are updating Project forecast in a consistent and symbiotic way to support both our PS Ops teams, as well as communicate our PS Project Portfolio review across the GitLab organization.

- Time & Materials (T&M) projects are invoiced according to time submitted at the Project level.
- Fixed Fee projects (FF or FP) are invoiced at a Milestone schedule. So it's vital to ensure anticipated dates are added to Milestones within FF projects, and we get customer signoff before the billing period ends.
- _Note_ While SKUs are one transaction, we track against hourly (T&M) billings (eg. Consulting Blocks & Dedicated Engineer Projects)

**Forecasting Time and Materials (T&M) and Fixed Fee (FF)**

Forecast allocations impact PS revenue forecast and team members availability, utilization and planning.

- Soft allocations are used when final schedule is not known yet, for visibility and planning. Soft allocation will not promise team member availability for a project, and will be considered upside forecast (assuming 40% accuracy).
- Hard allocations will promise team member availability, for the requested hours, once approved by the project coordinator. The allocated hours will also project into the revenue forecast (assuming 90-95% accuracy).
- If is too early to resource request a specific resource, but we have a rough anticipation of our project schedule, please hard schedule with "unnamed resource" as this helps us understand our capacity needs.

- To ensure forecast revenue is accurate go under Resource Center in Kantata:
  1. Select "Project Tab" and filter via "My Projects"
  2. Expand project you are allocating for so you can see all PS Engineers and yourself
  3. Click on each team member's name and submit RR request via the "activity" window opened and assign to Project Coordinator as recipient

- If it's a FF project, we need to update the dates on the Milestones in order for it to reflect in our forecast:
  1. Open your project and open the "Task Tracker" tab
  2. Expand milestones
  3. Update sign off date

**How to Track Upside**

- Upside is reviewed on a weekly, monthly and quarterly basis. There are four scenarios around when we need to track upside within our weekly revenue tracking sheet (which is pinned to our ps-pmo channel):
- If we are unable to confidently forecast the project resources 2 months out, we need to soft-book PSE/PM/TA time in Katata.
- If we have a pending CO that is not yet reflected in Katata, review with the PMO Manager the details.
- If we anticipate a Milestone date will be adjusted to complete in the quarter, but it has not yet been confirmed/verified.
- It is helpful to call upside out in the customer report. ex: can only soft-forecast "x" amount because of "y" restraints.

**Weekly Forecast Call Prep**

1. Updated by 8am EST Tuesday
2. Run "Remaining Funds to Forecast" report 
   - Select project status
   - Sort by project lead/PM
3. Validate start/kickoff/end dates are populated in for all of your project tasks
4. Run your Forecast report and ensure it's accurate
5. Review any upside or pushes/changes in forecast with PMO Manager
6. Run the "Task Audit Report"
7. Run the Allocation report
   - Review all soft & hard bookings and look at all team members in light blue
   - Help to find work for these team members as they are under allocated!
8. Review all soft-bookings Allocation report
   - Select All roles
   - Select Full quarter
   - There should be no soft allocations for the current month unless the project has just kicked off
   - Ensure hard bookings are in place for all projects post kick-off

 **Professional Services Portfolio Report**

- Updated by 8am EST Tuesday
- Update the following in the Notes section:
  1. 1-lined progress update
  2. If there is an issue, what is the proposed action + timing of fix
  3. If there is assistance needed
  4. DRI & contributors
  5. Internal temperature (R-Y-G) | Customer temperature (R-Y-G)
  6. Link to RAID & Internal Customer Epic if Y/R (to review WE, CO, WaR)

## Iterate and Validate

Managing to Project Scope Changes

Project scope for Professional Services is the outline of the work required to deliver a Service against the Customer use case. This includes an overview of the work to be delivered (scope definitions), duration, and resources (cost). All of which is included in the Statement of Work (SOW). If there is a change in project scope, the Project/Program Manager will follow the guidelines below to ensure we properly capture:

1. **Change Order**
   - Change orders (CO) are common elements of Professional Services engagements that can modify the scope definitions, duration, or cost of an ongoing project. A [change order issue](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/blob/master/.gitlab/issue_templates/change-order.md?ref_type=heads) and a [change order template](https://docs.google.com/document/d/1ogvv4MkEXy9ub4bldw-8m015j49R5HB0C7ayb2xw_Ss/edit) is created by the Project/Program Manager and communicated with the Engagement Manager and Account Team. It is always attached to the Internal Customer Epic Issue.

   - Common project scope change scenarios:
      - Does need a CO:
         - Change of scope definitions where the project budget requires additional funds. The PM should work with the EM/Account Team to fill out the Change Order template. From here, the EM will create a new PS opportunity for the amount required to fulfill the scope change. A new Kantata project will then be created by the PSOps team.
         - If an existing project is requested to be pushed out two months, with similar project activities and deliverables as the original scope, and the customer agrees to use the original SOW, a change order must be created and associated with a new PS opportunity that reflects the extension.
         - If the Project moves from T&M to FF (or vice versa).
         - If you feel the Project needs a CO (especially on FF projects).
      - Does not need a CO:
         - If there is a change of project scope definitions within the SOW duration and budget, no change order is needed. The PM must get written confirmation with the Customer on the change of Scope definitions. This written confirmation must be screenshot & attached to the associated Project Epic.
         - For extensions less than 2 months past the SOW expiration, the PM should capture [written confirmation](https://docs.google.com/document/d/1t2mkVr0eRs67rFkEOJVRLzC6u55aLWwGB5VCZm6G-iU/edit) (from email or Slack) and attach the confirmation to the _"Scope Engagement and Write SoW"_ issue found within the customer Epic.

2. **Work at Risk (WaR)**
   - A [WaR issue](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/issues/new?issue%5Bmilestone_id%5D=&issuable_template=work-at-risk&issue%5Btitle%5D=Work%20at%20Risk) serves as a means to gain approval from PS leadership to commence project staffing or initiation before all paperwork is finalized. This approval is necessary whenever there's a requirement to commit to project start dates before the opportunity is completely closed. It's essential for both consulting and training projects. The responsibility for initiating WaR lies with the assigned Project or Program Manager with the EM/AE teams. This will enable the Delivery team to start staffing the project promptly. When seeking approval for Work at Risk, please follow the steps outlined in the WaR template above.
   - A WaR is not billed to the customer until after the contract is signed.
   - Common scenarios:
     - Kicking off a project before SOW is signed by the Customer.
     - Resuming work before the CO is signed by the Customer, or the change is captured in writing.

3. **Work Exception (WE)**
   - A Work Exception is used by a PM when seeking approval for a project to exceed the hours/budget originally allotted. Navigate to the [PS-Plan](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ww-consulting/ps-plan/-/issues/?sort=updated_desc&state=opened&first_page_size=100) project, add a new issue and select/follow the Work Exception issue template to gain approvals from PS leadership. It can be used independently or including a CO.
   - Be sure close out work exception issues at the end of each quarter to assure proper quarterly accounting.
   - Adding labels & detail within the issue as a PM is crucial, as this is how we will work to improve our internal PS processes.

## Deploy & Close

1. **Project Closure/Retrospective Meeting**

   Schedule a 30-minute meeting with the customer's point of contact (POC) to review the external project retrospective. It's recommended the team leverages the retrospective issue template within the Customer Project (CP) within Gitlab, and act as living issue throughout the project, allowing both teams to collaborate and update it regularly. During the closure meeting, this retrospective will serve as the primary agenda and a reliable source for capturing customer feedback. The meeting should cover key successes, challenges, and areas for improvement.

2. **CSAT Survey**

   Before the project closure meeting, send the [Customer Satisfaction (CSAT) Engagement Survey](https://gitlab.gainsightcloud.com/v1/sites/survey/SurveyResponse?at=1I0025DXE6KKG8JCV1GWLAUNW5DYWBNMUL90) to gather formal feedback. A template or example communication for this can be found [here](https://docs.google.com/document/d/15U1LxwHCMmhlmkFHptxtuH-4w4BiLImuFkJ30Wp7BoA/edit). The CSAT survey provides insights into customer satisfaction and highlights areas for future improvement.

3. **Revenue Sign Off**

   **Revenue Release T&M Projects**

   - Revenue is recognized and released at the end of each month.
   - Project hours must be logged weekly via the time sheet function in Kantata. Professional Services Engineers (PSEs) or Project Managers (PMs) log time against the project, and the Project Lead or PM approves these entries weekly.
   - At the end of each month, the Project Coordinator (PC) compiles all approved timesheets and submits the consolidated report to Finance for review and revenue release.

   **Revenue Release FP Projects**

   - Revenue is recognized upon receipt of customer milestone acceptance or upon the completion of passive acceptance (according to the SOW terms).
   - The PM makes a copy of the [Project Milestone/Closure document](https://docs.google.com/document/d/1RiS5TY5484nQuDTW8YMiB-CibVfoni7NJ8IUG2osUD0/edit?tab=t.0) and attaches the document to the Customer for closure, copying Operations coordinator. The Customer can either sign the document itself or reply "approved".
   - Once approved, The PM updates set the Milestone in Kantata to "complete".
   - If passive acceptance is applicable per the SOW, the Customer has 5 business days to approve or deny before we can set the milestone to "complete". Day 1 is counted as the day the notification is sent.

   **Key Updates for Kantata**

   - Within all respective Milestone tasks, complete the following:
      - Sign-Off Sent: Update this custom field when the acceptance request email is sent.
      - Sign-Off Received: Update this custom field when customer acceptance is received or passive acceptance is achieved. Attach the acceptance email (in PDF form) to the milestone.
   - Passive Acceptance Utilized: If passive acceptance is used, update this field accordingly.
   - For both acceptance scenarios, attach the acceptance email or milestone document to the milestone.
   - Update actual start/kickoff/end dates

   Note: Only top-level milestone fields should be updated. Sub-activities within the milestone remain unchanged.

4. **Internal Project Retrospective**

   Schedule an internal project retrospective meeting with the GitLab Account Team, GitLab PS Project Team, Engagement Manager, and Delivery Managers, TA, and Practice team. The [internal retrospective](/handbook/customer-success/professional-services-engineering/professional-services-delivery-methodology/#internal-retrospective-guidelines) is essential for documenting lessons learned, scoping insights, and opportunities for continuous improvement.

5. **Kantata Updates**

   Once the project is fully completed, with all hours submitted and accounted for, and milestone acceptance confirmed (for fixed-price projects), update the project status in Kantata to "Completed".
