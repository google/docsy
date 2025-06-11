---
title: "Adaptive Insights"
description: "Discover how GitLab uses Adaptive Insights to plan, budget, and forecast GitLab's planning cycles"
---

## General Information

[Adaptive Insights](https://www.workday.com/en-us/products/adaptive-planning/overview.html), a Workday company, is a cloud-based corporate performance management platform. The GitLab FP&A team utilizes Adaptive Inisghts to plan, budget, and forecast GitLab's planning cycles.

## Administration

### Versioning

One of the most powerful features of Adaptive Insights is versioning. Administrators can create, edit, and lock versions of a plan.

### GitLab Version Nomenclature

Each version of GitLab should specify the fiscal year and label of the plan / forecast. Below is a few examples of the nomenclature used at GitLab

- `FY21 - 0 + 12 Plan`
- `FY21 - 1 + 11 Forecast`
- `FY 21 - 2 + 10 Forecast`

### Roles

There are currently five different roles within GitLab's Adaptive Insights instance

1. Administrative - full control of Adaptive Insights
1. Analysis - can access sheets, reports, dashboards, and process trackers. Analysis can also share reports and complete tasks using the process tracker.
1. IT Administrator - full control of Adaptive Insights with the exception to salary details
1. Report Only - same as Analysis but can upload files for reporting
1. Standard - full control of Adaptive Insights with the exception to edit, modify or change structure. Standard also does not have admin or integration access

### Users

Within Adaptive, the administrator can assign a name, position, user name, home page, time zone, country, role, and level(s) for each user. The administrator can also reset the password, if needed, for the User. Users should use Okta to sign into Adaptive Insights but keep their password in One Password when assigned one.

If you need access to Adaptive Insights, please open an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests) and assign to the code owner of this page.

### Accounts

### Assumptions

#### Revenue Model

In its current state, the revenue model sheet is a static sheet that users input data into to build bookings, ARR and revenue. The revenue model sheet has inputs that come from several sources and are documented below, along with the inputs that build the sheet.

- Bookings

    Bookings data is built from a model that Sales Finance owns and is inputted into the model several times a month. The input of bookings data occurs during a reforecast or plan and when actuals are reconciled with the Sales Ops team.

- ARR

    Each month on the fourth business day of the month, the Corporate Finance team records ending ARR for the month in closing. In turn, this becomes the beginning ARR amount for the month in progress. For example, if GitLab's ARR was $1M at the end of month 1, then the beginning ARR would be $1M at the beginning of month 2. The month in progress builds upon the beginning ARR amount and several other inputs to forecast ending ARR. Those inputs are 'New and Growth Booked Net ARR', 'Booking Timing Adjustments', and 'Trueups'. GitLab also includes an input that results in a deviation within the forecasted model. These inputs are the basis of GitLab's Booking to ARR to Revenue forecast walk

    `Beginning ARR + New Booked Net ARR + Growth Booked Net ARR + Booking Timing Adjustments + (-1*Trueups) + Deviation Amount = Exit ARR`

    With the walk, GitLab can determine it's Delta ARR value. Delta ARR is the difference between Exit ARR from the prior period and the Exit ARR from the current period.

    `Exit ARR (Current Period) - Exit ARR (Prior Period) = Delta ARR`

- Revenue

    GitLab's revenue forecast is comprised of several models, which are noted below.

- Professional Services model

    This model is owned by Sales Finance and forecasted the expected recognized revenue GitLab expects to obtain during a time period for all of GitLab's Professional Services offerings. The result of the expected recognized revenue is fed into the Bookings to ARR to Revenue model and recorded under GL account 4002, 4010.

- GitLab.com model

    This model is owned by R&D Finance and forecasted the expected recognized revenue GitLab expects to obtain during a time period for all of GitLab's SaaS offerings. The result of the expected recognized revenue is fed into the Bookings to ARR to Revenue model and recorded under GL account 4007.

- Bookings to ARR to Revenue model

    The bookings to ARR to Revenue model compiles the Exit MRR (Exit ARR / 12) amount, GitLab.com amount, and Professional Services amount to forecast out the expected recurring revenue for a specific time period. GitLab backs out the gitlab.com amount (recorded in GL account 4007) to forecast subscriptions account GL account 4001. GitLab does this by taking (Exit MRR - GitLab.com MRR) which results in the amount for GL account 4001. In a majority of cases, Exit MRR should always be less than or equal to recognized revenue.

- Template

    The revenue model template can be found by searching the title `Bookings to ARR to Revenue Walk [Template]` in Google Drive or reaching out to the Corporate FP&A partner. The template puts together the build from Bookings to Revenue in a walk that is easily understandable and traceable.

### Currencies

### Allocation Rules

## Sheets

### Level Assigned Sheets

#### Balance Sheet

A balance sheet is a financial statement that reports a company's assets, liabilities and shareholders' equity at a specific point in time. GitLab's Balance sheet can be found by clicking Sheets and then Balance Sheet.

#### Income Statement

The income statement primarily focuses on the company's revenues and expenses during a particular period. GitLab's Income statement can be found by clicking Sheets and then Income Statement.

#### Cash Flow

A cash flow statement is a financial statement that provides aggregate data regarding all cash inflows a company receives from its ongoing operations and external investment sources. It also includes all cash outflows that pay for business activities and investments during a given period. GitLab's Cash Flow Statement can be found by clicking Sheets and then Cash Flow.

#### Active Personnel

Active Personnel is the active headcount by department and entity. GitLab's Active Personnel can be found by clicking Sheets and then Active Personnel.

It is recommended that historical headcount information and active headcount churn is uploaded into the Active Personnel sheets with an end date populated. This will ensure only active headcount information is included in the forecasts. Historical information will allow headcount related analysis to be conducted, such as past and future headcount ratio, growth by headcount type and ramping reps analysis.

#### Planned Personnel

Planned Personnel is the planned headcount by department and entity in a given time period. GitLab's Planned Personnel can be found by clicking Sheets and then Planned Personnel.

#### Program Spend

Program Spend focuses on the expenses of events, subscriptions, and other programs that will be spent in a given time period. Program Spend can be found by clicking Sheets and then Program Spend.

In each forecast version, actuals for expenses from the previous period are recommended to be manually entered. Therefore, trends for each major vendor can be assessed and forecasts for future periods can be adjusted if necessary.

##### Expense Type

There are 4 Expense Types each with different calculations in Adaptive: (Column: EXPENSE_TYPE)

1. Pre_paid One Time – This is a one time pre paid expense.
    1. Event start date drives when the expense will hit the Income Statement.
    1. Expense is spread based on the contracted amount divided by contracted months.
    1. This calculated expense drives the GL Account selected in the "GL_EXPENSE_ACCOUNTS" column.
1. Pre_paid Amortization – This is a prepaid amortization expense. This calculation takes into account:
    1. Event start date drives when the expense will hit the Income Statement.
    1. Expense is spread based on the contracted amount divided by contracted months
    1. This calculated expense drives the GL Account selected in the "GL_EXPENSE_ACCOUNTS" column.
    1. Chances of Renewal – based on a %.
    1. Start Month Uplift – Takes into account any uplift that is expected to occur during the initial contract period and factors this into the renewal months.
    1. Monthly Growth Factor- based on a % of uplift that is expected to occur on the Start Month Uplift. (This is based on month over month uplift)
1. Per User – This calculates a per user expense. This calculation takes into account:
    1. This calculated expense drives the GL Account selected in the "GL_EXPENSE_ACCOUNTS" column.
    1. Per User Cost (Column)
    1. Number of users (entered in timespan) per month.
1. Periodic_Expense – This is a sporadic expense.
    1. This calculated expense drives the GL Account selected in the "GL_EXPENSE_ACCOUNTS" column.
    1. Expense (entered in timespan) on any given month.

#### Travel & Entertainment

Travel & Entertainment are expense assumptions related to travel & entertainment on a dollar amount per headcount. Travel & Entertainment can be found by clicking Sheets and then Travel & Entertainment.

### User Assigned Sheets

#### Global Assumptions

#### SUI Assumptions by State

#### Allocations

#### Salary Range

#### Personnel Benefits by Level

#### Balance Sheet Assumptions

#### Commissions %

#### Revenue Model

## Integrations

### NetSuite

### Adaptive Loaders

### Scheduling

## Formulas

## Reports

### Report Structure

The below image shows the current report structure in Adaptive Insights. There are six main folders within the structure. The folders labeled `Annual Reports`, `Monthly Reports`,`Quarterly Reports`, and `YTD Reports` are considered production reports and should receive sign off from the VP, Finance before moving to one of these folders. Before a report is considered production ready, a user must start a report in the `Sandbox Reports` folder, then get approval by the VP, Finance befor it can be moved into on of the production ready Reporting folders. Once sign off is approved, a user should ask an Adaptive Insights administrator to move the folder from Sandbox to the production ready folder.

1. Annual Reports - folder that houses annual reports
1. Implementation Requirements - folder that houses any requirements
1. Monthly Reports - folder that houses monthly reports
1. Quarterly Reports - folder that houses quarterly reports
1. Sandbox Reports - folder that houses work in progress reports and where reports are created before moving to production
1. YTD Reports - folder that houses year to date reports

![alt text](/images/finance/financial-planning-and-analysis/adaptive-report.png "Report Structure")

### Reports

## Processing Headcount Movements

Below details the process to account for headcount movements in Adaptive based on the type of change that's occurred.

### Net New Roles

Net new hire movements which increase GitLab's headcount and are not related to a team member leaving GitLab or transferring between departments.

1. On the Planned Personnel sheet, create a new row and enter in the role details for the net new position. Include an anticipated start date and enter the headcount name as "TBH".

### Team Member Terminations

For headcount moves due to team members leaving GitLab.

1. When a team member leaves GitLab, in the Active Personnel sheet where the headcount record is located, enter the team members' last day into the "End Date" column. This will feed into the calculations within Adaptive so any costs associated with that headcount will cease once the end date surpasses.
1. If the role is to be backfilled, on the Planned Personnel sheet, create a new row and enter in the role details of the termed team member. Populate the "Hire Status" field with Backfill and ensure you have entered this into the same level (department) that the termed team member was in. For the headcount name, use "TBH-" + First Initial + Last Name (e.g. for Joe Bloggs backfill, "TBH-JBloggs") so it can be easily identified as the backfill role for that team member and assist with headcount management processes.

### Promotions (same job family), salary increases, new hiring managers/etc

1. When a team member gets promoted into the same job family, has a salary change, a new hiring manager, etc., the new information is overwritten on the existing entry field for that headcount in the Active Personnel sheet. The intention is to keep the Active Personnel sheet list as concise as possible.
    - E.g. A Financial Analyst is promoted to a Senior Financial Analyst - overwrite the Job Title field with the new role name and update any other relevant fields.

#### Internal Transfer

For headcount moves when a team member is transferred between departments and the original position is to be backfilled - e.g. team member moves from Marketing to Sales, and Marketing wants to backfill that position.

1. On the Active Personnel sheet enter an end date on the original headcount record.
1. Stay on the Active Personnel sheet and create a new entry/row in the level which matches the department the team member is moving to, and enter the internal transfer headcount details.
1. In the Planned Personnel sheet, create a new row and populate the details of the original position. For the headcount name, use "TBH-" + First Initial + Last Name (e.g. for Joe Bloggs backfill, "TBH-JBloggs") so it can be easily identified as the backfill role for that team member and assist with headcount management processes.

### Internal hire (no backfill)

For internal headcount moves when there is an unknown candidate and no new position - e.g. 1 Manager role promotion available to replace 1 of 3 Analysts roles -  no visibility of who will get promoted and the analyst position will not be backfilled. This process is required in order for the talent acquisition team to be able to create a record in Greenhouse using a GHP ID that will be generated from the placeholder entry.

1. On the Planned Personnel sheet, create an entry/row for the internal movement placeholder. Enter the headcount Name as "TBH", the Hire Status as "Placeholder" and ensure no salary information is included. This will ensure that the calculations do not flow into the Income Statement for this $0 placeholder entry.
1. Once the successful team member has been identified, update their record - overwrite the job title, salary information etc. and then delete the internal movement TBH entry from the Planned Personnel sheet.
