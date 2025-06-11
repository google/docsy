---
title: "People Analytics Tableau Dashboard Overview"
---

## Helpful places to start

- [Tableau Handbook Page](/handbook/enterprise-data/platform/tableau/) - This is the SSOT for all Tableau usage and is managed by the Data Team. This will give an overview of the most up to date roadmap and workflows regarding Tableau at GitLab.
- [Tableau People Folder](https://10az.online.tableau.com/#/site/gitlab/projects/300909) - This is the main folder to find all People Dashboards. This is currently in our Development project but will be moving to our Production location in the future.
- [Tableau Workshops](https://docs.google.com/document/d/1ChdkC7Tep_HL6UqvJ6PNzLxDmR7QNo5LN823wS0ZAZU/edit#heading=h.2e7gftq6eevx) - Held by the People Analytics team as an introduction to using Tableau and navigating the current dashboards available.

## People Group Dashboard Inventory

Several dashboards have been published to the People project in the Tableau environment. Below is a brief overview of some of the dashboards created and where you can find them:

### General project

These dashboards are safe for general use by the Tableau User population here at GitLab.

- [Attrition Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2024177?:origin=card_share_link) - This dashboard gives turnover metrics for the organization. Rates can be filtered by `Rolling 12 Months`, `Fiscal Year to Date`,`Month to Date`, or `Quarter to Date` and different time periods can be selected. Dimensional breakouts of the data that result in small counts are hidden to protect Team Member identity.
- [DIB Identity Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2188641?:origin=card_share_link) - This dashboard shows diversity metrics as a percentage compared to the same date in the prior year. This dashboard is used for handbook embedding on [this page](/handbook/company/culture/inclusion/identity-data/).
- [Discretionary Bonus Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2177808?:origin=card_share_link)- This dashboard tracks discretionary bonuses over time showing bonus counts, bonus rates as a percentage of headcount, or bonus rates as a rolling 3 month average relative to headcount.
- [Elevate Completions Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2118590?:origin=card_share_link) - This dashboard tracks the percentage of leaders assigned to the Elevate training program and completion progress of participants.
- [Headcount Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1864887?:origin=card_share_link) - This dashboard is used to get headcount metrics by different categories in the company. The user can filter to specific dates and time periods to evaluate changes in headcount.
- [People Group Dashboard Activity](https://10az.online.tableau.com/#/site/gitlab/workbooks/2236727?:origin=card_share_link) - This dashboard tracks usage of all dashboards owned by the People Group over the last 90 days.
- [People KPIs](https://10az.online.tableau.com/#/site/gitlab/workbooks/2147990?:origin=card_share_link) - This dashboard shows key performance indicators that are tracked by the People Group to determine organizational health. These are the same metrics tracked on [this handbook page](/handbook/people-group/people-success-performance-indicators/).
- [PTO Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2217877?:origin=card_share_link) - This dashboard tracks PTO activity for team members (excluding extended leaves) over a selected date range.
- [Span of Control Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1964349?:origin=card_share_link) - This dashboard allows for users to identify the current (and past) span of control by different departments, divisions, etc.
- [Talent Acquisition Productivity Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2028013?:origin=card_share_link) - This dashboard is used by the Talent Acquisition department to track internal team metrics by recruiting teams and business area relative to quarterly goals.

### People Restricted project

This project contains sensitive dashboards that only a small subset of users can view.

- [Attrition Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/2018838?:origin=card_share_link) - Same use case as the one in General without hiding results for small groups and includes additional filters.
- [Span of Control](https://10az.online.tableau.com/#/site/gitlab/workbooks/1871908?:origin=card_share_link) - Same uses as the one in General but with a detail tab showing a list of leaders and their direct span of control.
- [DIB Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1953472?:origin=card_share_link) - This dashboard gives views and metrics of starts, turnover, and representation by different DIB categories.
- [People Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1887121?:origin=card_share_link) - Intended for our [People Business Partners](/handbook/people-group/people-business-partners/#people-business-partner-alignments), this dashboard is meant to be a way for PBPs to drill into the People Data for their stakeholders and identify various trends around group proportion sizes, URG representation, and metrics like turnover in one place.
- [Talent Flow Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1907866?:origin=card_share_link) - This is a tableau version of the [People Weekly Overview Report](https://docs.google.com/spreadsheets/d/1L8Hl301wDqJlGg8JyxHdpa4DZdttuaX23-BRyWruMA4/edit#gid=221950393) shared with leaders. This version has sensitive data and is only available in the Restricted folder for now.
