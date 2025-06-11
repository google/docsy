---
title: "Data Team - How We Work"
description: "GitLab Data Team Workflow"
---

---

### <i class="fas fa-map-marked-alt fa-fw -text-purple"></i>Quick Links

- [Calendar](/handbook/enterprise-data/how-we-work/calendar/)
- [MR Roles and Responsibilities](/handbook/enterprise-data/how-we-work/mr-review/)
- [New Data Source](/handbook/enterprise-data/how-we-work/new-data-source/)
- [Planning Drumbeat](/handbook/enterprise-data/how-we-work/planning/)
- [Triage](/handbook/enterprise-data/how-we-work/triage/)
- [Data Team Onboarding](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/issue_templates/Team%3A%20Data%20Onboarding.md)
- [Data Team Programs](/handbook/enterprise-data/organization/programs)

## Practical guide to contributing to the Data Team Projects

Looking to get hands-on with data at GitLab? Check out our [Practical Guide](/handbook/enterprise-data/how-we-work/practical-guide/) designed for all team members.

This guide complements our existing resources, but with a more practical focus on the step-by-step process of contributing to the Data Team’s projects.

## How We Work

We're happy to help you achieve your goals with Data. As a central shared service with finite time and capacity and with a responsibility to operate and develop the company's central Enterprise Data, the Data Team must focus its time and energy on initiatives that will yield the greatest positive impact to the [overall global organization](/handbook/values/#iterate-toward-global-maximum) towards [improving customer results](/handbook/values/#results).

### Work Categorization and Prioritization

The Data Team strives to spend the majority of its time developing and operating the Enterprise Data Platform and related systems, keeping fresh data flowing through the system, regularly expanding the breadth of data available for analysis, and delivering high-impact strategic projects. We categorize our work using the framework outlined below.

| Work Category | Description| Prioritization Method |
| --- | --- | --- | --- |
| Production Maintenance | Activities required to maintain efficient and reliable data services, including triage, bug fixes, and patching to meet established [Service Level Objectives](/handbook/enterprise-data/platform/#data-sources). | Based on severity and impact |
| Data Team OKRs | The Data Team identifies strategic-level OKRs in collaboration with partner teams each quarter. | Prioritized through the Data Steering Committee and committed to during our [quarterly planning process](/handbook/enterprise-data/how-we-work/planning/) |
| Business Operations | Data work and business engagement that is requested on an ad-hoc basis throughout the quarter. Includes foundational work to mature the Enterprise Data Ecosystem. | Prioritized on an ongoing basis and committed to during our [iteration planning process](/handbook/enterprise-data/how-we-work/#quarterly-and-iteration-planning). |

The allocation of capacity across Production Maintenance, Data Team OKRs, and Business Operations will be determined by each pillar on a quarter-by-quarter basis in the planning file. The target allocation varies by data team pillar and needs of the business. The allocation will consider the amount of Production Maintenance support needed from the pillar, strategic initiatives that the pillar needs to support, and business operations projects that require support. Within each Work Category, issues are prioritized independently and can use the scoped Priority Label with priorities 1, 2, or 3 as options.

We use [scoped labels in GitLab](/handbook/enterprise-data/how-we-work/#issue-labeling) to track and prioritize our issues across these work categories.

In addition to the above work categories focused on operating and developing the Enterprise Data Platform and related systems, the Enterprise Data Team spends time each quarter on learning and experimentation. This time is used to learn new skills, experiment with new technologies, and improve the data program. These learning and experimentation issues are prioritized between the team member and their manager while considering Individual Growth Plans and ways to improve the data program.

### Project Intake

Here's the process to follow to create a new Data issue:

1. Open a **New Issue** in the [Data Team Analytics Project](https://gitlab.com/gitlab-data/analytics/-/issues).
2. Choose a **Template** from the table below that best matches the work you are requesting.
3. Complete the templated **Description** as completely as possible.
4. Leave the **Assignees** blank. The Data Team will process your request as a part of our [Daily Triage](/handbook/enterprise-data/how-we-work/triage/).
<!--need to review the activities that are part of triage process -->

**New Issue**

| Request Type | Issue Template To Choose |
| ----- | ----- |
| [General Data Team Support](https://gitlab.com/gitlab-data/analytics/-/issues) | `[Request] Create Standard Data Team Issue` _(note: this is the default, most commonly used template for P3 / tactical requests and Data Team support. If you are not sure where to start, start here)_ |
| [OKR-Level Project Request](https://gitlab.com/gitlab-data/analytics/-/issues) | `[Request] Create Opportunity Canvas` _(note: this template is required for large-scale, P2 work like OKRs to be reviewed and prioritized in the Data Leadership Forum)_|
| [Add Data Source](https://gitlab.com/gitlab-data/analytics/-/issues) | `[Request] New Data Source` |
| [Data Quality Issue](https://gitlab.com/gitlab-data/analytics/-/issues) | `[Report] Data Quality Problem` |

### Data Leadership Forum

The Data Leadership Forum includes representation from partner teams across GitLab (Marketing, Sales, Customer Success, Finance, IT, Support, Product, Engineering, People, Security, Legal) and is used to oversee and drive the strategic direction of GitLab data management and analytics initiatives, including project prioritization. The forum ensures that data is leveraged effectively to support business goals, improve decision-making processes, and drive innovation. It acts as a governing body to establish policies, standards, and best practices for data governance, data quality, data privacy, and data security.

In order for OKRs / projects to be prioritized through the Data Leadership Forum, an opportunity canvas is required. An opportunity canvas is a specific [issue template](https://gitlab.com/gitlab-data/analytics/-/issues) that contains detailed information about the work that is being requested, the expected business impact from that work, a rough estimate of the level of effort to accomplish the work, and known risks/dependencies. The opportunity canvas also includes a business value score based on our [Value Calculator](/handbook/enterprise-data/how-we-work/#data-team-value-calculator), which is one factor in prioritizing and ranking our backlog of work.

In the instance that a new project is raised mid-quarter and is proposed to be prioritized sooner than the next quarterly planning cycle, the forum will review the Opportunity Canvas for the new project, determine if the business value and impact warrants re-prioritization, and will come to a decision on the necessary trade-offs (i.e. to prioritize that new work, other planned work must be deprioritized).

### Request to Expedite Responses

Requests to expedite responses, triage issues, or MR reviews are rare. Given the Data Team's shared-service model, expediting one task necessarily de-prioritizes other work. To request an expedited response:

1. Confirm there is a valid reason for moving your request ahead of others.
1. Post a note to #data, along with a link to your Issue and a reason why you need an expedited response. Please do not DM an individual on the Data Team directly.
1. A member of the Data Team will respond within 1 business day.

### Deciding What And How To Build

Not all data solutions require the same level of quality, scalability, and performance so we have defined a [Data Development](/handbook/enterprise-data/how-we-work/data-development/) framework to help match required outcomes with level of investment. The Data Team works with all teams to build solutions appropriate to the need, but focuses on _Trusted Data_ using [Trusted Data Development](/handbook/enterprise-data/how-we-work/data-development/#trusted-data-development).

### Design Spike

**Experimentation** is a great approach to performing **Explorational** Data Development. Oftentimes, there can be multiple solutions to solve a business problem and we need a process to efficiently evaluate the different approaches and ultimately select a solution to promote to a Trusted Data solution. We use **Design Spikes** to facilitate experimenting. **Design Spikes** are particularly useful when the proposed solutions result in breaking changes or significant changes to the overall design, structure, and computing of the data tech stack.

The below steps should be followed when performing a **Design Spike**:

1. **Calculate Value**: Establish the Value the data solution can provide GitLab. Value can be measured in a variety of ways, ranging from efficiency, to increased Sales, to reduced compute.
1. **Define Requirements**: Create a Requirements document for the **Design Spike** to define the business and technical requirements the data solution must meet to be successful. Indicate whether each requirement is a `Must Have` or `Nice to Have`.
1. **Experimentation Design**: This is the most complex part of the **Design Spike**. We need to decide how to test the data solutions versus defined requirements. Oftentimes, successfully testing data solutions requires simulating production workloads. We need to define the **minimal viable sample size** of data to include in the design to achieve experimentation results that would be representative of the whole data set in scope for the solution.
1. **Perform the experiment**: This involves putting "fingers on the keyboard" and standing up a data solution in the **Explorational** data development environment. It also involves collecting the results of the experiment pursuant to what has been defined in the **Define Requirements** phase.
1. **Assessment**: After the experimentation is complete, we should perform an analysis of how well each data solution performed against the requirements from the **Define Requirements** phase and see how well each data solution performed against the `Must Have` or `Nice to Have` requirements. We should put this analysis into a document along with a recommended solution based on the results of the **Design Spike**. We can then submit this to the respective DRIs and Stakeholders on the project for review, feedback, and final decisions on how we will proceed with the use case.

### Documentation

The Data Team, like the rest of GitLab, works hard to document as much as possible. We believe [this framework](https://docs.divio.com/documentation-system/) for types of documentation from Divio is quite valuable. For the most part, what's captured in the handbook are tutorials, how-to guides, and explanations, while reference documentation lives within in the primary analytics project. We have aspirations to tag our documentation with the appropriate function as well as clearly articulate the [assumed audiences](https://v4.chriskrycho.com/2018/assumed-audiences.html) for each piece of documentation.

#### Documentation guideline

There are several types of documentation we use to capture the topics. Noted the criteria when to use which type of the documentation

- [**(Public) Handbook**](/handbook) - Items related to the operational model we used in the company and in the team, all explanations about tools, technologies and processes and **why** we are doing. Data that is publicly shareable, and does not expose GitLab or its customers to any harm or material impact (Green data, as per Data classification).
- [**Internal handbook**](https://internal.gitlab.com/) - Items which explain the same category as the public handbook, with the difference that the internal handbook contains [internal information](/handbook/communication/confidentiality-levels/#internal)
- **Readme.md** file - Specific information related to the code where the README.md file resides, which explains **how** to use that code. If more explanation is needed, a good practice is to either use and/or link to a Handbook article.
- [**Runbooks**](https://gitlab.com/gitlab-data/runbooks) - Context which explains **how** to solve the issue in production or **how** to sort out other problems. The vital thing is to understand that runbook is a guideline of problem-solving approach
- [**WIKI**](https://gitlab.com/gitlab-data/analytics/-/wikis/GitLab-Data-Team-Wiki) - Items that require regular updates, similar to epics but they span for longer periods of time, e.g. overall Data Team engagement in the quote-to-cash projects.

Matrix with the explanation when to use which documentation type:

| Example | Appropriate documentation type|
|---------|----------------------------------------------------------------|
| GitLab Duo explanation                                                 | Handbook |
| Python/dbt/Snowflake guideline                                         | Handbook |
| Description of the package inventory                                   | Handbook |
| Explanation about the new pipeline/project                             | Internal Handbook |
| Data classification description                                        | Internal Handbook |
| dbt Data lineage diagram                                               | Internal Handbook |
| Technical explanation of how to run the project                        | README.md |
| Basic context about the project from the technical perspective         | README.md |
| Solution of how to fix the Triage issue                                | Runbooks |
| Exploration article (ie. Design spike) of how to pseudonimize the data | Runbooks |
| Review current progress or effort on QtC projects                      | WIKI |

### Data Team Value Calculator
<!-- read through this and make adjustments -->

The Value Calculator provides a uniform and transparent mechanism for ranking and enables all work to be evaluated on equal terms. The value calculator approach is similar to the [RICE Scoring Model](https://www.productplan.com/glossary/rice-scoring-model/) for Product Managers and the [Demand Metric Prioritization Model](https://blog.demandmetric.com/2009/02/06/prioritize-your-strategic-initiatives) for Marketing.

The calculator below is based on the following [Value Calculator](https://docs.google.com/spreadsheets/d/1FROB7j0YfNS_cQM6qQD0CPkE0Emuf77EJwTb96UduWs/edit?usp=sharing) spreadsheet. Please select the values below to define the value of new work.

### Quarterly and Iteration Planning

Our planning process is called the [Planning Drumbeat](/handbook/enterprise-data/how-we-work/planning) and it encompasses Quarterly Planning and [Iteration Planning](/handbook/enterprise-data/how-we-work/planning/#iteration-planning). The Planning Drumbeat is one of the most important activities the Data Team performs because it helps us align our work with the broader company, while remaining agile enough to manage shifting business priorities.

#### Quarterly KR Status Reporting

Beginning in FY25-Q1, the Data Team is using the [GitLab Objectives and Key Results project](https://gitlab.com/gitlab-com/gitlab-OKRs) to manage quarterly commitments.

Process:

1. Create KRs in the project for each of the committed Key Results.
2. In the KR description, add a link to the corresponding Epic from the GitLab Data Team project where the development work is being tracked.
3. Throughout the quarter, the DRI for the workstream should make the following updates (at a minimum, these updates should be added at the end of each month in the quarter for the KRs that have the `Division::` scoped label applied to them; some teams may choose to make updates more frequently):
    - Add a comment outlining what work has been completed, and what work is remaining to complete the KR.
    - Update the % complete field on the KR.
    - Update the Health Status field to indicate whether the KR is `On Track`, `Needs Attention`, or `At Risk`.

### DataPulse

DataPulse is a monthly rhythm for team members to provide status updates on Key Results and Business Operations initiatives.  The goal is for everyone to stay informed about project statuses, identify new opportunities, and maintain alignment across our various workstreams.

Our process will have three key components:

#### 1. Async written updates about the status of the Key Result and Business Operations

Monthly updates, captured in the Key Result or Business Operations issues and epics (this part we are already doing and will not change):
 
- Status of project work
- Challenges and proposed solutions

#### 2. Asynchronous Video Updates (Due 1 week before Monthly Q&A)

**For Key Result and Business Operations DRIs**
Each DRI (and team) will record a brief, maximum 5-minute, video update covering:
 
- Intro/context about the business problem that we addressing in the Key Result or Business Operations
- Status update
- Challenges and proposed solutions
- Business stakeholder feedback and engagement
- New opportunities identified

Within your KR and Business Operations teams, please develop a plan for these monthly updates. As the DRI, you're accountable for aligning on this approach with your project team. 

**Recording Guidelines:**
  
- These videos don't need to be perfect - aim for a conversational tone.
- Consider using time in an existing meeting with the KR team to create this recording. No slides / materials are required.
- Include mentions of team members who are part of your work.
- Upload your video to our Data Team YouTube playlist one week before our scheduled Q&A session. Include the month and year in the title of the recording and add a link to the video in the Key Result or Business Operations epic/issue.
- This is your chance to share your work with team members who you don’t collaborate with on a regular basis - take advantage of it!

#### 3. Monthly Q&A Session (6am PST / 2pm PST options)

We'll meet for a focused Q&A session to discuss the updates shared in the videos. This allows us to:
  
- Dive deeper into specific areas of interest
- Address questions that arise from the video updates
- Collaborate on resolving challenges
- Align on next steps

#### Introducing a new data source
<!-- Amie to check with Dennis on this -->
Introducing a new data source requires a _heavy lift_ of understanding that new data source, mapping field names to logic, documenting those, and understanding what issues are being delivered.
Usually introducing a new data source is coupled with replicating an existing dashboard from the other data source.
This helps verify that numbers are accurate and the original data source and the data team's analysis are using the same definitions.

### Incidents

Incidents are times when a problem is discovered and some immediate action is required to fix the issue. When this happens, we make an [Incident Issue](https://docs.gitlab.com/ee/operations/incident_management/incidents.html) in the Data Team Project. The process for working through incidents is as follows:

- Open an [Incident issue](https://gitlab.com/gitlab-data/analytics/-/issues/new?issuable_template=incident&issue[issue_type]=incident) using the "Incident Report" template
- Detail the relevant information with appropriate timestamps
- Tag and assign people on the Data Team and any other teams that need to be informed
- Review the Security Team's documentation on [Incident Response](/handbook/security/security-operations/sirt/sec-incident-response/) and take any necessary action

Data Team Incidents can be reviewed in [Incident Overview page](https://gitlab.com/gitlab-data/analytics/-/incidents) within the main project.

### Workflow Summary

| Stage (Label)                     | Responsible        | An Item Is Added to This Stage When                  | Criteria to Progress to Next Stage                                                                                                   |
| --------------------------------- | ------------------ | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `workflow::1 - triage`            | Data Triager       | A new request has been created                       | A clear problem statement & business value statement are included in the issue, and appropriate labels (Priority, Champion, and Team) have been applied. |
| `workflow::2 - validation`        | Data               | Enough information is included to inform a Do / Won't Do Decision    | The business value is clear; the work warrants development and is expected to be refined & prioritized. If not, a description for why the work won't be done will be added and the issue will be closed. |
| `workflow::3 - refinement`        | Data, Business DRI | The issue is actively being scoped & refined         | Technical solution & expected outcome are included in the issue, and the issue has a numerical weight applied. The technical solution should have enough detail and clarity that another developer (other than the one doing the validation) would be able to pick it up. |
| `workflow::4 - ready to develop`  | Data               | The issue is fully scoped & refined                  | Work is picked up for development  |
| `workflow::5 - development`       | Data               | Development work has started                         | Item is actively being worked on.  |
| `workflow::6 - review` | Data, Business DRI | Development work is ready for, or currently, being reviewed | All work is completed. |
| `workflow::X - blocked`           | Data, Business DRI | Issue needs intervention that assignee can't perform | Work is no longer blocked  |

Generally issues should move through this process linearly. Some templated issues will skip from `triage` to `scheduling` or `scheduled`.

#### Issue Pointing

**Issue pointing captures the complexity of an issue, not the time it takes to complete an issue. That is why pointing is independent of who the issue assignee is.**

- Refer to the table below for point values and what they represent.
- We size and point issues as a group.
- Effective pointing requires more fleshed out issues, but that requirement shouldn't keep people from creating issues.
- When pointing work that happens outside of the Data Team projects, add points to the issue in the relevant Data Team project and ensure issues are cross-linked.

| Weight | Description                                                                                                                                                 |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Null   | Meta and Discussions that don't result in an MR                                                                                                             |
| 0      | Should not be used.                                                                                                                                         |
| 1      | The simplest possible change including documentation changes. We are confident there will be no side effects.                                               |
| 2      | A simple change (minimal code changes), where we understand all of the requirements.                                                                        |
| 3      | A typical change, with understood requirements but some complicating factors                                                                                |
| 5      | A more complex change. Requirements are _probably_ understood or there might be dependencies outside the data-team.                                         |
| 8      | A complex change, that will involve much of the codebase or will require lots of input from others to determine the requirements.                           |
| 13     | It's unlikely we would commit to this in an iteration, and the preference would be to further clarify requirements and/or break into smaller Issues.        |

#### Issue Labeling

Think of each of these groups of labels as ways of bucketing the work done.

All issues should get the following classes of labels assigned to them:

- **Team:** The Data Team responsible for performing the work. This could be one of the following: Data Platform, Analytics Engineering, Data Science, BI, or Data Governance.
- **Champion:** The team requesting the work. This may be a functional partner team or the Data Team itself.  
- **Workflow:** The current status of the work. All issues should start with the `workflow::1 - triage` label. The team performing the work is responsible for updating the workflow status as the work progresses.  
- **Priority:** The priority level of the work, categorized as follows:  
  - **P1**: Operational (highest urgency)  
  - **P2**: OKR-related work (objective-driven)  
  - **P3**: Other (lower priority or non-urgent tasks)  

Effective in January 2025, we use a Bot on the Data Team project to check that the Team, Champion, Workflow, and Priority labels have been applied to issues after 14 days of being opened. The bot sends a reminder in the issue to add the missing labels. The first triage response for adding labels is the team member that opens the issue. The 2nd triage response for adding labels is the Data Analyst, Data Scientist, Analytics Engineer, and Data Engineer that are on triage. Issues that do not have Team, Champion, Workflow, and Priority labels applied after 30 days are automatically closed. If an issue is closed due to not having the required labels, team members have the option to reopen the closed issue and apply the labels to meet the issue refinement requirements.

Optional labels that are useful to communicate state or other priority:

- **What:**
  - Data: Data being touched (Salesforce, Zuora, Zendesk, GitLab.com, etc.)
  - Tool: (Tableau, dbt, Stitch, Airflow, etc.)
  - Pod: [Data team pod](/handbook/enterprise-data/organization/#data-team-organization) that is scheduling the work
- **Business Logic Change**: This label is applied for any business logic changes such as adding new dimensions, facts, marts, changing joins, adding new calculated fields.
- **Opportunity Canvas**: This label is auto-applied on the Opportunity Canvas template, but can also be applied to work that has converted into a large-scale project. This label will be used to identify topics for discussion and prioritization at the [monthly Data Leadership forum](/handbook/enterprise-data/how-we-work/#work-categorization-and-prioritization).

#### Epic Labeling

Similar to issue labeling, epic labeling helps the Data team categorize, quantify, and prioritize the projects in our backlog.

At a minimum, all epics should have a **Team:** label applied. This tags the epic for the Data Team that is primarily responsible for performing the work, and enables managers to review the backlog of projects for their respective teams. This is particularly helpful during quarterly planning.

Because the epic list cannot easily be filtered to parent epics only (and epics may be nested under other epics as sub-epics), we use an additional label to distinguish between epics that are being considered for OKR-level commitments (these should have the `Opportunity Canvas` label applied) vs. those that are used to group related issues under a general theme (these should _not_ have the `Opportunity Canvas` label applied).

##### Merge Request Workflow

_Ideally_, your workflow should be as follows:

1. Confirm you have access to the analytics project. If not, request Developer access so you can create branches, merge requests, and issues.
1. Create an issue, open an existing issue, or assign yourself to an existing issue. The issue is assigned to the person(s) who will be doing the work.
1. Add appropriate labels to the issue (see above)
1. Open an MR from the issue using the "Create merge request" button. This automatically creates a unique branch based on the issue name. This marks the issue for closure once the MR is merged.
1. Push your work to the branch
1. Update the MR with an [appropriate template](https://gitlab.com/gitlab-data/analytics/-/tree/master/.gitlab%2Fmerge_request_templates). Our current templates are:

    - [**dbt Changes**](/handbook/enterprise-data/how-we-work/dbt-change-workflow/) - used for any change involving dbt. Analysts will most often use this one
    - **add_manifest_tables** - for adding tables to pgp extract
    - **periscope** - for getting a Periscope dashboard reviewed
    - **python_changes** - for general changes to Python code
    - **All Other Changes** - for work that doesn't generally fall into these categories

1. Run any relevant jobs to the work being proposed

    - e.g. if you're working on dbt changes, run the job most appropriate for your changes. See the [CI jobs page](/handbook/enterprise-data/platform/ci-jobs/) for an explanation of what each job does.

1. Document in the MR description what the purpose of the MR is, any additional changes that need to happen for the MR to be valid, and if it's a complicated MR, how you verified that the change works. See [this MR](https://gitlab.com/gitlab-data/analytics/merge_requests/658) for an example of good documentation. The goal is to make it easier for reviewers to understand what the MR is doing so it's as easy as possible to review.
1. Request a review by assigning the MR to a peer using the [Merge Request Reviewer](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/) feature.
    - Requesting a review in this manner indicates to the person that you would like their code review and approval if everything is good. This does not mean they will merge the MR if they approve it.
    - The peer reviewer should use the native approve button in the MR after they have completed their review and approve of the changes in the MR.
    - After approval, the reviewer can unassign themselves from the Reviewer list. The reviewer is not responsible for the final tasks. The author is responsible for finalizing the checklist, closing threads, removing Draft, and getting it in a merge-ready state.
1. If the MR is approved, remove the `Draft:` label, mark the branch for deletion, mark squash commits, and assign to the project's maintainer. Ensure that the attached issue is appropriately labeled and pointed.
    - Generally, assigning the MR to a maintainer indicates you would like for them to merge it if there are no issues.  If the maintainer needs to approve the merge request before merge as part of a CODEOWNER group, then they will do a review before merging.  Otherwise, they will simply merge.  If you would like the maintainer's review regardless, simply leave a comment to that effect.
    - Note that assigning someone an MR means action is required from them.
    - If `Draft:` is still in the title of the MR, then the Maintainer will assign the MR back to the author to confirm that the MR is ready for merge.

Other tips:

1. The Merge Request Workflow provides clear expectations; however, there is some wiggle room and freedom around certain steps as follows.

    - For simple changes, it is the MR author who should be responsible for closing the threads. If there is a complex change and the concern has been addressed, either the author or reviewer could resolve the threads if the reviewer approves.

1. Reviewers should have 48 hours to complete a review, so plan ahead with the end of the iteration.
1. When possible, questions/problems should be discussed with your reviewer before submitting the MR for review. Particularly for large changes, review time is the least efficient time to have to make meaningful changes to code, because you've already done most of the work!
1. Consider bringing the latest commits from the primary branch so the MR is caught up. You can do this quickly by typing `/rebase` into a comment and GitLab will make this happen automatically, barring any merge conflicts.

##### KPI Development Workflow

The Data Team will work to add KPIs and Performance Indicators to our enterprise database models and BI reports once the following steps have been completed.

- The DRI should ensure the KPI definition, business logic, and calculation steps are documented in the relevant section of the handbook and added to the GitLab KPIs [with all of its parts](/handbook/company/kpis/#parts-of-a-kpi)
- The handbook definition should be reviewed by the necessary [Consulted & Informed](/handbook/people-group/directly-responsible-individuals/#dri-consulted-informed-dci) cross-functional partners. In some cases, the definition may also require [approval](/handbook/people-group/directly-responsible-individuals/#circumstances-requiring-the-rare-need-for-approvals) from those cross-functional partners
- Once the KPI is ready to be added into our enterprise reporting, the DRI should create an issue using the standard Data Team Issue template on the [GitLab Data Team Issue Tracker](https://gitlab.com/gitlab-data/analytics/issues).
- The Data team will verify the data sources and help to find a way to automate (if necessary).

Once the KPI has been added to our enterprise BI platform, the Data Team will present it to the DRI for testing and final approval.

### SLO for Issues and Merge Requests

- First-Response SLO for a new Issue: 2 business days from the time of issue creation
- First-Response SLO for a new MR: 2 business days from the time of submission to the codeowner

When opening an issue or submitting a MR for review, it is good to add a comment bringing the issue or MR to the attention of a DRI or codeowner. Please allow the SLO time period to expire before requesting additional updates or first responses on an Issue or MR. Issues and MRs within the SLO time period are not considered blocked. If the issue or MR is urgent or a break-fix scenario, it is good to follow-up with the team member in the Issue or MR within the SLO period as determined by the required urgency and importance.

### Removal and deletion process
<!-- @dennis is there an iteration on this one, get @chris and @peter to contribute here -->

After some time, environments will have software/code/components that are not needed any more. It feels risky to delete software and code, even when its not being used, seems not being used or asked not to being used (i.e. users access).

There are multiple reasons to perform deletions:

1. We see software (or parts of software) that is not used anymore
2. There is a request to remove user access
3. There is a request to delete a user account
4. There is a request to indefinitely stop a data pipeline

To address observations and requests, and ensure that deletion will take place in a controlled manner, open an issue with the [Cleanup Old Tech](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/issue_templates/Data%3A%20Cleanup%20Old%20Tech.md) template.

#### State down in the issue the scope of deletion

Write down what will be deleted and where possible link to existings issues.

#### Calculate a Risk score

The Risk score is build upon 2 variables.

1. Probability that it will break something
2. Impact if the deletion is executed by mistake or is execute wrongly

Each variables will be scored 1 to 3.

|  Probability | Score |
| ------------ | ----- |
| Low          |   1   |
| Medium       |   2   |
| High         |   3   |

|  Impact | Score |
| ------- | ----- |
| Negligible | 1  |
| Lenient |   2   |
| Severe  |   3   |

`Probability` * `Impact` = `Risk Score`

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1i2r{background-color:#f8ff00;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-706m{background-color:#009901;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-tw5s{background-color:#fe0000;border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky"></th>
    <th class="tg-0pky">Risk</th>
    <th class="tg-0pky">Negligible</th>
    <th class="tg-0pky">Lenient</th>
    <th class="tg-0pky">Severe</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Probability</td>
    <td class="tg-y698"></td>
    <td class="tg-y698"></td>
    <td class="tg-y698"></td>
    <td class="tg-y698"></td>
  </tr>
  <tr>
    <td class="tg-0pky">Low</td>
    <td class="tg-y698"></td>
    <td class="tg-706m">1</td>
    <td class="tg-706m">2</td>
    <td class="tg-1i2r">3</td>
  </tr>
  <tr>
    <td class="tg-0pky">Medium</td>
    <td class="tg-y698"></td>
    <td class="tg-706m">2</td>
    <td class="tg-1i2r">4</td>
    <td class="tg-tw5s">6</td>
  </tr>
  <tr>
    <td class="tg-0pky">High</td>
    <td class="tg-y698"></td>
    <td class="tg-1i2r">3</td>
    <td class="tg-tw5s">6</td>
    <td class="tg-tw5s">9</td>
  </tr>
</tbody>
</table>

| Risk Score | Outcome |
| ---------- | ------- |
| 1 - 2      | Create a MR and have it reviewed by 2 code owners |
| 3 - 4      | Create a MR, tag `@gitlab-data/engineers` with a deadline to object and have it reviewed by 2 code owners |
| 6 - 9      | Create a MR, to be discussed in the DE-Team meeting and have it reviewed by 2 code owners |

### Annual Data & Analytics Maturity Assessment

Each year beginning in FY24, the Data Team will facilitate a survey to solicit anonymous feedback about the Data program from GitLab team members. This survey will help drive our focus areas and track our maturity over time.

### YouTube

We encourage everyone to record videos and post to GitLab Unfiltered. The [handbook page on YouTube](/handbook/marketing/marketing-operations/youtube/#post-everything) does an excellent job of telling why we should be doing this. If you're uploading a video for the data team, be sure to do the following extra steps:

- Add `data` as a video tag
- Add it to the [Data Team playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrRVTZY33WEHv8SjlA_-keI)
- Share the video in #data channel on slack

### Data Hiring and Interview Process

1. Review the [People Interviewing Guide](/handbook/hiring/interviewing/) to ensure you are up-to-date on the current process and policies.
1. Contact your People BP (Business Partner) and alert them of the opening. The People BP is responsible for managing the job opening, requisition, and interview processes.
1. Ask your People BP to provide you a Requisition # for tracking purposes. If you have multiple openings to fill, communicate with your People BP using this Req# because juggling multiple openings gets confusing fast.
1. Develop an Interview Plan, which will cover Responsibilities, Tips, Reminders, and custom Interview questions for each Interview Job Role type. For examples, see the [Data Scientist Interview Plan](https://docs.google.com/document/d/1slPL8qy6IW01DcNBP26YVC3mHtkwApHGmA29d6Y9nlg/edit#heading=h.6mqvxi38wull) and [Analytics Engineer Interview Plan](https://docs.google.com/document/d/1wspMpA6Z-UQXZsqYJ7vqhZ5pHNErv54lyF-kOilpkDw/edit).
1. Each Data Job Role and Job Grade has a customized [Homework Assessment](https://drive.google.com/drive/folders/1cQeCKu_Nu2kBLa4oiAVrp7hu7LdnIB3C). Review and update the Homework Assessment as needed. If a Homework Assessment is not available for the Job Role, create one and save it in the [Homework Assessment Google Drive](https://drive.google.com/drive/folders/1cQeCKu_Nu2kBLa4oiAVrp7hu7LdnIB3C)
1. Send a Homework Assessment to the People BP for inclusion in the Hiring process. The Hiring Process is included in each Data Job Family to help set candidate and interviewer expectations. An example is the [Data Engineer Hiring Process](/job-families/marketing/enterprise-data/data-engineer/#hiring-process).
1. Create a new slack channel, e.g. `bt-data-data-science-interview` to help coordinate with your interviewers. Share the Interview Plan with your interviewers through Slack.
