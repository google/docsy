---
title: Zendesk Explore Dashboards and Reports Backup
description: Support Operations documentation page for Zendesk Explore Dashboards and Reports Backup
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/zd_explore_backup_dashboards_reports.md"
---

## Key Review Reports

These reports are used for Support Key Review.

### Slide 7: Report 1: Ticket Volume Trend

aka Total Ticket Volume - Last 6 Months - Month YYYY

This is the main report in slide 7

- Dataset used: Support ( Tickets )
- Visualization type: Area
- Metric used: D_Count (Tickets), \*D_Count (SM Ticket Count)*\, \*D_Count (.com Ticket Count)*\, \*D_Count (L&R Ticket Count (w/o Internal))*\, \*D_Count (L&R Internal Ticket Count)*\ , \*D_Count (Ops Ticket Count)*\
- Rows:
    None
- Columns:
    1. Ticket Created (Year)
    1. Ticket Created (Month)
- Filters used:
    1. Created By GitLab Bot Agent*
    1. Ticket Form
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Ticket Form filter should exclude `GitLab Incidents`, `Professional Services`, `Security`, `Billing`, `Accounts Receiveable/Refunds`, `Security Issue`.
    1. Created By GitLab Bot Agent is a custom attribute and should have included `Regular Ticket`.
    1. Ticket Created (Year) use Advanced Date Range settings i.e. "From beginning of" should have `First day of the previous year in second option i.e. for 2023 reports it should be 01/01/2022` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `count` inside area and top of area shows Total in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 7: Report 2: IK - New Tier Split

This is informative report in slide 7

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: D_Count (Tickets)
- Rows:
    1. New Tier Split
- Columns:
    1. Ticket Created (Month)
- Filters used:
    1. Ticket Form
    1. Ticket Created (Year)
- Custom Settings:
    1. Ticket Form filter should exclude `GitLab Incidents`, `Professional Services`, `Security`, `Billing`, `Accounts Receiveable/Refunds`, `Security Issue`.
    1. New Tier Split is a custom attribute and should have excluded `Unknown`
    1. Ticket Created (Year) use Advanced Date Range settings i.e. "From beginning of" should have `2 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `count` inside table in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 8: Reports use combination of Sheets and Periscope so will be completed by Ilia

### Slide 9: Report 1: Month over Month Trend: SSAT (Customers)

This is main chart in Slide 9

- Dataset used: Support ( Tickets )
- Visualization type: Area
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved (Year)
    1. Ticket Solved (Month)
- Filters used:
    1. Ticket Form
    1. EDU
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket ID
- Custom Settings:
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. EDU is a custom attribute and should have included `Not EDU`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. Ticket ID should exclude `279135`
    1. Ticket Solved (Year) use Advanced Date Range settings i.e. "From beginning of" should have `8 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` on top of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### Slide 10: Report 1 : Satisfaction Score by Support Level - 100% View - No Plan

This is main chart in Slide 10

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Plan Tags (SaaS/SM)
- Filters used:
    1. Ticket Solved (Month)
    1. Ticket Form
    1. EDU
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket ID
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`. Both groups should be selected.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. EDU is a custom attribute and should have included `Not EDU`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. Ticket ID should exclude `279135`
    1. Ticket Solved (Month) use Simple Date Range settings i.e. `Last Month`
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` on middle of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu and set as constant at `95`.

### Slide 10: Report 2 : Satisfaction Score by Support Level - Table - No Plan

This is main table in Slide 10

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: SUM (% Satisfaction score) , D_Count (Rated Satisfaction Tickets), D_Count (Bad Satisfaction Tickets)
- Rows:
    1. Plan Tags (SaaS/SM)
- Columns:
    None
- Filters used:
    1. Ticket Solved (Month)
    1. Ticket Form
    1. EDU
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket ID
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`. Both groups should be selected.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. EDU is a custom attribute and should have included `Not EDU`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. Ticket ID should exclude `279135`
    1. Ticket Solved (Month) use Simple Date Range settings i.e. `Last Month`
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" are present on every `cell` in Result Manipulation.

### Slide 11: Report 1 : Satisfaction Score by Support Level - 100% View - No Plan

This is main chart in Slide 11

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Plan Tags (SaaS/SM)
- Filters used:
    1. Ticket Solved (Month)
    1. Ticket Form
    1. EDU
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket ID
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`. Both groups should be selected.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. EDU is a custom attribute and should have included `Not EDU`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. Ticket ID should exclude `279135`
    1. Ticket Solved (Month) use Simple Date Range settings i.e. `Last 6 Months`
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` on middle of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu and set as constant at `95`.

### Slide 11: Report 2 : Satisfaction Score by Support Level - Table - No Plan

This is main table in Slide 11

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: SUM (% Satisfaction score) , D_Count (Rated Satisfaction Tickets), D_Count (Bad Satisfaction Tickets)
- Rows:
    1. Plan Tags (SaaS/SM)
- Columns:
    None
- Filters used:
    1. Ticket Solved (Month)
    1. Ticket Form
    1. EDU
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket ID
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`. Both groups should be selected.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. EDU is a custom attribute and should have included `Not EDU`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. Ticket ID should exclude `279135`
    1. Ticket Solved (Month) use Simple Date Range settings i.e. `Last 6 Months`
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" are present on every `cell` in Result Manipulation.

### Slide 12: Report 1: SM FRT SLAs Achieved Chart - No Plan

This is top left chart table in Slide 12

- Dataset used: Support ( Tickets )
- Visualization type: Columns
- Metric used: \*SUM (% Achieved SLA tickets - 100% View)*\
- Rows:
    1. Plan Tags (SaaS/SM)
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. 2FA
    1. SLA Metric
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`. Only `Self Managed` should be selected.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Metric should have `First Reply Time` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` on middle of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu and set as constant at `95`.

### Slide 12: Report 2: SM FRT SLAs Achieved Chart - No Plan

This is top right chart table in Slide 12

- Dataset used: Support ( Tickets )
- Visualization type: Columns
- Metric used: \*SUM (% Achieved SLA tickets - 100% View)*\
- Rows:
    1. Plan Tags (SaaS/SM)
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. 2FA
    1. SLA Metric
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`. Only `SaaS` should be selected.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Metric should have `First Reply Time` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` on middle of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu and set as constant at `95`.

### Slide 12: Report 3: FRT SLAs MoM (4months) - No Plan

This is bottom main table in Slide 12

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: D_Count (SLA Tickets), \*AVG (Achieved SLA % - Fix)*\
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`. Both should be selected.
    1. Ticket Form filter should include `L&R`, `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. SLA Metric should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" inside `Sum of tickets` Tickets column and show `percent` on % SLA achieved column inside every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 13: Report 1: FRT Median Per SLA Type Self-Managed - Chart

This is the main chart users in Slide 13. We use Screenshots of different Priority by SLA metric in Rows to post it in slide i.e. `4 Hours SLA`, `8 Hours SLA` and `24 Hours SLA`.

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: MED (First Reply Time - Business Hours (hrs)), MED (First Reply Time (hrs))
- Rows:
    1. Priority by SLA
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. Plan Tags - Ticket Tags
- Custom Settings:
    1. Priority by SLA use `Rename Values` in Calculation menu to compute from `Ticket Priority - Unsorted` and rename `High` to `4 Hours`, `Normal` to `8 Hours`, `Low` to `24 Hours` and `Urgent` to `30 mins` and check the `Sort attributes like time attributes`.
    1. Ticket Form filter should include `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Plan Tags - Ticket Tags is a custom attribute and should have `Ultimate` and `Premium` selected.
    1. SLA Update (Year) use Simple Date Range settings for value `last month`.
    1. Make sure report should have "Sort" type `A-Z`.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 13: Report 2: IK - FRT Median Per SLA Type Self-Managed - Table

This is bottom main table in Slide 13

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: MED (First Reply Time - Business Hours (hrs)), MED (First Reply Time (hrs))
- Rows:
    1. Priority by SLA
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. Plan Tags - Ticket Tags
- Custom Settings:
    1. Priority by SLA use `Rename Values` in Calculation menu to compute from `Ticket Priority - Unsorted` and rename `High` to `4 Hours`, `Normal` to `8 Hours`, `Low` to `24 Hours` and `Urgent` to `30 mins` and check the `Sort attributes like time attributes`.
    1. Ticket Form filter should include `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Plan Tags - Ticket Tags is a custom attribute and should have `Ultimate` and `Premium` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in Tickets column over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 14: Report 1: FRT Median Per SLA Type SaaS - Chart

This is the main chart users in Slide 13. We use Screenshots of different Priority by SLA metric in Rows to post it in slide i.e. `4 Hours SLA`, `8 Hours SLA` and `24 Hours SLA`.

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: MED (First Reply Time - Business Hours (hrs))
    1. Priority by SLA
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. Plan Tags - Ticket Tags
    1. 2FA
- Custom Settings:
    1. Priority by SLA use `Rename Values` in Calculation menu to compute from `Ticket Priority - Unsorted` and rename `High` to `4 Hours`, `Normal` to `8 Hours`, `Low` to `24 Hours` and `Urgent` to `30 mins` and check the `Sort attributes like time attributes`.
    1. Ticket Form filter should include `SaaS`. `SaaS Account`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Plan Tags - Ticket Tags is a custom attribute and should have `Gold` and `Silver` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in Tickets column over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 14: Report 2: IK - FRT Median Per SLA Type SaaS - Table

This is bottom main table in Slide 14

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: MED (First Reply Time - Business Hours (hrs)), MED (First Reply Time (hrs))
- Rows:
    1. Priority by SLA
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. Plan Tags - Ticket Tags
    1. 2FA
- Custom Settings:
    1. Priority by SLA use `Rename Values` in Calculation menu to compute from `Ticket Priority - Unsorted` and rename `High` to `4 Hours`, `Normal` to `8 Hours`, `Low` to `24 Hours` and `Urgent` to `30 mins` and check the `Sort attributes like time attributes`.
    1. Ticket Form filter should include `SaaS`, `SaaS Account`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Plan Tags - Ticket Tags is a custom attribute and should have `Gold` and `Silver` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Simple Date Range settings for value `last month`.
    1. Make sure report should have "Sort" type `A-Z`.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 15: Report 1: Median FRT - Last 6 Months by Plan (self-managed)

This is side main chart in Slide 15

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: MED (First Reply Time - Business Hours (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. 2FA
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with `Self - Managed`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in Tickets column over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 15: Report 2: Median FRT - Last 6 Months by Plan (.com)

This is side main chart in Slide 15

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: MED (First Reply Time - Business Hours (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. 2FA
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with `SaaS`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in Tickets column over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 16: Report 1: Median FRT - Last 6 Months

This is main chart in Slide 16

- Dataset used: Support ( SLAs )
- Visualization type: Area
- Metric used: MED (First Reply Time - Business Hours (hrs))
- Rows:
    None
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 16: Report 2: Median FRT - Last Month Per Plan - No Plan

This is side small table in Slide 16

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: MED (First Reply Time (hrs)), MED (First Reply Time - Business Hours (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
    1. 2FA
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with both `SaaS` and `Self - Managed`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Month) use Simple Date Range settings for value `last month`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of FRT Hours` and `Median of First Reply Time - Business Hours` in `FRT` and `FRT Business Hours` Tickets column and `Plans` will be showing in rows.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 17: Report 1 : Median FRT - Last 6 Months by Plan (self-managed)

This is main left chart in Slide 17

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: MED (First Reply Time - Business Hours (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. 2FA
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with only `Self-Managed`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 17: Report 2 : Median FRT - Last 6 Months by Plan (.com)

his is main right chart in Slide 17

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: MED (First Reply Time - Business Hours (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. 2FA
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with only `SaaS`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 19: Report 1 : SM NRT SLAs Achieved Chart

This is main left chart in Slide 19

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: \*SUM (% Achieved SLA tickets - 100% View)*\
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Formm
    1. SLA Metric
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with only `Self-Managed`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. SLA Metric should have `Next Reply Time` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours in percentage` in area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu and set as constant at `85`.

### Slide 19: Report 2 : SaaS NRT SLAs Achieved Chart

This is main right chart in Slide 19

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: \*SUM (% Achieved SLA tickets - 100% View)*\
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Formm
    1. SLA Metric
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags`. Group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with only `SaaS`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. SLA Metric should have `Next Reply Time` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours in percentage` in area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu and set as constant at `85`.

### Slide 19: Report 3: NRT SLAs MoM (4months) - Table

This is bottom small table in Slide 19

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: D_Count (SLA targets), SUM (% Achieved SLA Targets)
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SlA UPdate (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. SLA Metric
    1. SLA Update - Month
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with both `SaaS` and `Self - Managed`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `SLA Targets` and `Achieved SLA Percentage` in columns with months and `Plans` will be showing in rows.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 20: Report 1: Median NRT - Last 6 Months by Plan (self-managed)

This is main side chart in Slide 20

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: MED (SLA Metric Completion Time (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SlA UPdate (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. SLA Metric
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with  `Self - Managed` only.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals of Median" `SLA Metric Completion Time` in Tickets column over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 20: Report 2: Median NRT - Last 6 Months by Plan (.com)

This is main side chart in Slide 20

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: MED (SLA Metric Completion Time (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SlA UPdate (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. SLA Metric
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with  `SaaS` only.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals of Median" `SLA Metric Completion Time` in Tickets column over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

## Slide 21: Report 1: Median NRT - Last 6 Months

This is main chart in Slide 21

- Dataset used: Support ( SLAs )
- Visualization type: Area
- Metric used: MED (SLA Metric Completion Time (hrs))
- Rows:
    None
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" have "Totals of Median" `SLA Metric Completion Time` in Tickets area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 21: Report 2: Median FRT - Last Month Per Plan - No Plan

This is side small table in Slide 21

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: MED (SLA Metric Completion Time (hrs))
- Rows:
    1. Plan Tags - SaaS/SM
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
    1. SLA Metric
- Custom Settings:
    1. Plan Tags - SaaS/SM use `Group` in Calculation menu to compute from `Plan Tags - Ticket Tags` and group Self Managed inlucdes `Basic`, `Premium`, `Ultimate` and SaaS includes `Bronze`, `Silver`, `Gold`.
    1. Rows should have `Plan Tags - SaaS/SM` selected with both `SaaS` and `Self - Managed`.
    1. Ticket Form filter should include `L&R`, `Emergency`, `Other`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update (Year) use Simple Date Range settings for value `last month`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of FRT Hours` and `Median of First Reply Time - Business Hours` in `FRT` and `FRT Business Hours` Tickets column and `Plans` will be showing in rows.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 22: Report 1: IK - MED FRT L&R 6 Months

This is left side top chart in slide 22

- Dataset used: Support ( SLAs )
- Visualization type: Area
- Metric used: MED (First Reply Time (hrs)), MED (First Reply Time - Business Hours (hrs))
- Rows:
    None
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. Ticket Form filter should include `L&R`.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours` in area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 22: Report 2: IK - FRT SLA For L&R 6 Months

This is right side top chart in slide 22

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: \*SUM (% Achieved SLA tickets - 100% View)*\
- Rows:
    None
- Columns:
    1. SLA Update (Year)
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. SLA Metric
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Ticket Form filter should include `L&R`only.
    1. SLA Metric should have `First Reply Time` selected.
    1. SLA Update (Year) use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" `Median of Hours in percentage` in area over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu and set as constant at `95`.

### Slide 22: Report 3: IK - Total Incoming Tickets For L&R - 6 Months

This is left side bottom chart in slide 22

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count (Tickets Created)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. Ticket Form filter should include `L&R`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z`.

### Slide 22: Report 4: IK - Requester Wait Time L&R - 6 Months

This is right side bottom chart in slide 22

- Dataset used: Support ( Tickets )
- Visualization type: Area
- Metric used: \*MED (RWT Minus On-Hold)*\
- Rows:
    None
- Columns:
    1. Ticket Updated - Year
    1. Ticket Updated - Month
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Ticket Form filter should include `L&R`.
    1. Ticket Updated - Year use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z`.

### Slide 23: Report 1: IK - Requester Wait Time .COM/SM/L&R

This is left chart in Slide 23

- Dataset used: Support ( SLAs )
- Visualization type: Area
- Metric used: MED (Requester wait time (hrs))
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Duplicate Ticket
    1. Ticket Status
    1. Follow-Up Ticket
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
- Custom Settings:
    1. Ticket Form filter should include `L&R`, `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Duplicate Ticket is a custom attribute and should have selected `Not Duplicate` only.
    1. Ticket Status should include `Solved` and `Closed` only.
    1. Follow-Up Ticket is a custom attribute and should have selected `Not Follow-Up Ticket` only.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R` only.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `7 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals of Count" shows in percentage in columns over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 23: Report 2: IK - TTR

This is right chart in Slide 24

- Dataset used: Support ( Tickets )
- Visualization type: Area
- Metric used: \*MED (TTR)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Duplicate Ticket
    1. Ticket Status
    1. Follow-Up Ticket
    1. Free Reduced Effort - May 2022
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
    1. Verification Failed
    1. Remove prefix_solve_issue_20220516 for TTR
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Ticket Form filter should include `Alliance Parnters`, `Open Partner`, `Select Partner`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`, `L&R` and `Other`.
    1. Duplicate Ticket is a custom attribute and should have selected `Not Duplicate` only.
    1. Ticket Status should include `Solved` and `Closed` only.
    1. Follow-Up Ticket is a custom attribute and should have selected `Not Follow-Up Ticket` only.
    1. Free Reduced Effort - May 2022 is a custom attribute and should have selected `Regular Tickets` only.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R` only.
    1. Verification Failed is a custom attribute and should have selected `No Verification Request failed` only.
    1. Remove prefix_solve_issue_20220516 for TTR is a custom attribute and should have selected `TTR Known` only.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `7 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals of Median" shows in over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 24: Report 1: IK - Reduced Effort Free Ratio

This is main chart in Slide 24

- Dataset used: Support ( Tickets)
- Visualization type: Line
- Metric used: \*D_Count (Free Reduced Effort - May/2023)*\, \*D_Count (All Free)*\, \*SUM (Reduction Effort %)*\
- Rows:
    None
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Ticket Form
    1. Created By Agent
    1. Plan - Support costs adjusted 2021/10
    1. Custom plan remove
    1. Validation License Failed
    1. Ticket Organization Name
- Custom Settings:
    1. Free Reduced Effort - May/2023 is a custom Metric.
    1. All Free is a custom metric.
    1. Reduction Effort % is a custom metric and use Dual Axis in the Metrics panel.
    1. Plan - Support costs adjusted 2021/10 is a custom attribute and should have selected `Core`, `Free Account`, `Free SaaS`.
    1. Created By Agent is a custom attribute and should have selected `Not Created By Agent`.
    1. Custom plan remove is a custom attribute and should have selected `All Else`.
    1. Validation License Failed is a custom attribute and should have selected `All Else`.
    1. Ticket Form filter should include `SaaS`, `SaaS Account`, `Self-Managed`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `6/1/2020` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals of Count" shows in lines over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 25: Report 1: IK - Top 20 SSAT

This is left side top chart in slide 25. **USE Self Manged or SAAS in Ticket Form filter to create another report i.e. Report 3**

- Dataset used: Support (Tickets)
- Visualization type: Column
- Metric used: Sum (% Satisfaction Score), D_Count(Rated Satisfaction Tickets)
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Ticket Organization
- Custom Settings:
    1. D_Count(Rated Satisfaction Tickets) is using Dual axis in the Metrics panel.
    1. Ticket Form filter should include `L&R`, `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Ticket Organization should be selected with Organization having top 20 ARR.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals of Count" shows in percentage in columns over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 25: Report 2: IK - Top 20 FRT

This is left side bottom chart in Slide 25. **USE Self Manged or SAAS in Ticket Form filter to create another report i.e. Report 3**

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: SUM (% Achieved SLA tickets), D_Count (SLA Tickets)
- Rows:
    None
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. Ticket Form
    1. SLA Metric
    1. Ticket Organization
- Custom Settings:
    1. D_Count(SLA Tickets) is using Dual axis in the Metrics panel.
    1. Ticket Form filter should include `L&R`, `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Ticket Organization should be selected with Organization having top 20 ARR.
    1. SLA Metric should be selected as `First Reply Time`.
    1. SLA Update - Year use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals of Count" shows in percentage in columns over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### Slide 26: Report 1: IK - Linked Total

This is top table in Slide 26.

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: D_Count (Solved Tickets), \*D_Count (Total Linked)*\, \*Count (% Total Linked)*\, \*Count (% Linked Docs)*\, \*D_Count (Linked Docs)*\, \*Count (% Linked MR)*\, \*D_Count (Linked MR)*\, \*Count (% Linked Issues)*\, \*D_Count (Linked Issues)*\, \*Count (% Linked HB)*\, \*D_Count (Linked Handbook)*\
- Rows:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Columns:
    None
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
    1. Created by Agent
- Custom Settings:
    1. `Total Linked`, `% Total Linked`, `% Linked Docs`, `Linked Docs`, `% Linked MR`, `Linked MR`, `% Linked Issues`, `Linked Issues`, `% Linked HB` and `Linked Handbook` are custom mertrics.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Other`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Created By Agent is a custom attribute and should have selected `Not Created By Agent`.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z`.

### Slide 26: Report 2: IK - Linked Docs

This is bottom left chart in Slide 26.

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \* SUM (% Linked Docs)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked Docs is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Other`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Slide 26: Report 3: IK - Linked Issues

This is bottom middle chart in Slide 26.

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \* SUM (% Linked Issues)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked Issues is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Other`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Slide 26: Report 4: IK - Linked MR's

This is bottom middle chart in Slide 26.

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \* SUM (% Linked MR)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked MR is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Other`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Slide 26: Report 4: IK - Linked HB's

This is bottom right chart in Slide 26.

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \* SUM (% Linked HB)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked HB is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Other`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Slide 27 is Federal US Slide so the access to Federal Explore is not possible

## Dashboards

### Support Metrics

#### Tabs

1. Incoming:
    - Widgets used:
        None
    - Reports used:
        1. Total Incoming Tickets For Support
        1. IK - Total Incoming Tickets Per Form
        1. Intake Per Hour Last 12 Months - All Plans
        1. Intake Per Hour Last 12 Months SM - All Plans
        1. Intake Per Hour Last 12 Months .COM - All Plans
        1. Prefered Region last 6 / 3 Months
1. SLA :
    - Widgets used:
        - Time Filter widget
    - Reports used:
        1. FRT SLA % Achieved for .COM/SM
        1. FRT MED .COM/SM
        1. NRT SLA % Achieved for .COM/SM
        1. NRT MED .COM/SM
        1. FRT SLA % Achieved for SM
        1. NRT SLA % Achieved for SM
        1. FRT SLA % Achieved for .COM
        1. NRT SLA % Achieved for .COM
        1. Requester Wait Time .COM/SM/L&R
        1. NRT Achieved per Preferred Region
        1. FRT Achieved per Preferred Region
        1. FRT Per Priority .COM/SM
        1. NRT Per Priority .COM/SM
1. SLA #2 :
    - Widgets used:
        - Time Filter widget
    - Reports used:
        1. Median TTR SaaS/SM
        1. Median TTR SM
        1. Median TTR SaaS
        1. Requester Wait Time SM
        1. Requester Wait Time SaaS
        1. Support Solved/Closed Tickets
        1. One-Touch Solved Per Ticket Form Ratio (w/o Free)
1. SSAT :
    - Widgets used:
        - Time Filter widget
    - Reports used:
        1. SSAT Distribution For Combined .COM/SM
        1. SSAT Distribution .COM
        1. SSAT Distribution SM
        1. Poor SSAT Reasons Breakdown for .COM
        1. Poor SSAT Reasons Breakdown for SM
        1. SSAT Volume 3 Months .COM
        1. SSAT Volume 3 Months SM
        1. SSAT% For Tickets with Issue Links
        1. Survery Responded 12 Months
1. Doc:
    - Widgets used:
        - None
    - Reports used:
        1. Linked Total
        1. Linked Docs
        1. Linked Issues
        1. Linked MR's
        1. Linked HB's
        1. Linked Total - Private
        1. No Problem Type
1. Assignment:
    - Widgets used:
        - None
    - Reports used:
        1. Assigned vs Unassigned
        1. Unassigned Tickets per Ticket Form
        1. Unassigned vs Assigned Not New Multi-Touch Ticket Ratio
        1. Public comments on Assigned tickets ratio in % Per Region Weekly
        1. Total Support Open Tickets Per Ticket Form
        1. Unassigned Open Tickets Per Ticket Form
        1. Public comments on Unassigned vs Assigned Tickets Per Team
1. Emergency:
    - Widgets used:
        - None
    - Reports used:
        1. Emergency Tickets - Intake Per Month
        1. Emergency Tickets - Weekend Opened Worldwide
        1. Emergency NRT
        1. Emergency FRT
        1. Opened on Weekend Breached
1. Region:
    - Widgets used:
        - None
    - Reports used:
        1. Regional Updates Per Hour Last 6 Months
        1. US Update per preferred region last 6 Months
        1. EMEA Update per preferred region last 6 Months
        1. APAC Update per preferred region last 6 Months
        1. SLA % Breached Per Hour Last 4 Months
        1. SLA Events Breached Per Hour Last 4 Months
        1. SLA % Breached Per Hour Last 4 Months .COM
        1. SLA Events Breached Per Hour Last 4 Months .COM
        1. SLA % Breached Per Hour Last 4 Months SM
        1. SLA Events Breached Per Hour Last 4 Months SM
1. SWIR:
    - Widgets used:
        - None
    - Reports used:
        1. SSAT
        1. FRT
        1. NRT
        1. Volume
        1. Week Over Week SM SLA
        1. LK - Total FRT SLA - Last 4 Weeks + Priority
        1. FRT SLA For SM - Last 3 Weeks
        1. FRT SLA For SM - This Week
        1. NRT SLO For SM - Last 3 Weeks
        1. NRT SLO For SM - This Week
        1. SSAT For SM - Last 3 Weeks
        1. SSAT For SM - This Week
        1. SSAT Volume 4 Weeks SM
        1. Requester Wait Time SM
        1. SM Incoming Tickets For Support Per Week
        1. Week Over Week .COM SLA
        1. FRT SLA For .COM - Last 3 Weeks
        1. FRT SLA For .COM - This Week
        1. NRT SLO For .COM - Last 3 Weeks
        1. NRT SLO For .COM - This Week
        1. SSAT For .COM - Last 3 Weeks
        1. SSAT For .COM - This Week
        1. SSAT Volume 4 Weeks .com
        1. Requester Wait Time .COM
        1. .COM Incoming Tickets For Support Per Week
        1. Emergency Tickets - Weekend Opened Worldwide Per Week
1. SWIR #2:
    - Widgets used:
        - None
    - Reports used:
        1. Week Over Week L&R SLA
        1. FRT SLA For L&R - Last 3 Weeks
        1. FRT SLA For L&R - This Week
        1. NRT SLA For L&R - Last 3 Weeks
        1. NRT SLA For L&R - This Week
        1. SSAT For L&R - Last 3 Weeks
        1. SSAT For L&R - This Week
        1. SSAT Distribution 4 Weeks L&R - Table
        1. Requester Wait Time L&R
        1. L&R Incoming Tickets For Support Per Week
1. Base:
    - Widgets used:
        - None
    - Reports used:
        1. Baseline comments SM
        1. Baseline comments .COM
        1. Baseline comments L&R
1. L&R:
    - Widgets used:
        - Time Filter widget
    - Reports used:
        1. L&R No Assignee
        1. FRT SLA For L&R
        1. NRT SLA For L&R
        1. SSAT 12 Months L&R - All Plans
        1. L&R Incoming Volume Per Week
        1. L&R Incoming Volume Per Day
        1. Total Incoming Tickets For L&R All Plans
        1. L&R Escalated to Sales AVG Time to First Solve
        1. L&R No Transaction Type Per Month
        1. Intake Per Hour Last 12 Months L&R - All Plans
        1. Poor CSAT For L&R Breakdown per Month - All Plans
        1. Time To Resolve Escalated to Sales
1. Free:
    - Widgets used:
        - None
    - Reports used:
        1. Free Reduced Effort Free Ratio
        1. Intake Last 12 Months Free Plans - Per Ticket Form
1. Security (Not used any more):
    - Widgets used:
        - None
    - Reports used:
        1. Total Incoming Tickets For Security (Deprecated)
        1. SSAT Distribution 12 Month Security (Deprecated)
        1. Requester Wait Time Security (Deprecated)
1. Ops:
    - Widgets used:
        - None
    - Reports used:
        1. LK - Ops SSAT - Last 4 Weeks
        1. LK - Ops Total FRT SLA - Last 4 Weeks
        1. LK - Ops Total NRT SLA - Last 4 Weeks
        1. LK - Ops Incoming Tickets For Support Per Week
        1. LK - Incoming Ops

### Manager boards

#### Tabs

1. Tickets:
    - Widgets used:
        - Bookmark filter with Indivial Support Manager Name and SGGs. Hide Reset should be enabled.
    - Reports used:
        1. Ticket Type Ratio - Last 3 Months
        1. Ticket Volume Target - Weighted Target Met - Last Month
        1. Ticket Volume Target - Weighted Target Met - 6 Months
        1. IK - FRT Replies Per Week - 12 Months
        1. IK - Public Updates - Main
        1. IK - Internal Comments - Main
        1. IK - Solved/Closed Tickets - Main
        1. Public Comments Per Week
        1. Tickets Data 90 Days
1. Ticket Volume Target:
    - Widgets used:
        - None
    - Reports used:
        1. Ticket Volume Target Replies Last Two Weeks
        1. Ticket Volume Target - Targets Met - Last Month
        1. Ticket Volume Target - This Week
1. SSAT:
    - Widgets used:
        - None
    - Reports used:
        1. Solved Tickets With SSAT Comments 30 Days
1. Long:
    - Widgets used:
        - None
    - Reports used:
        1. More than 7 Days No Agent Updates
        1. 800K$ and above ARR opened 7 Days
        1. Open Ticket Over 60 Days
        1. More than 40 Public Comments
1. Public Comments:
    - Widgets used:
        - None
    - Reports used:
        1. Public Comments Breakdown Multiple Comments - Last Week

## Reports

### Total Incoming Tickets For Support

aka IK - Total Incoming Tickets For Support #2

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created (Year)
    1. Ticket Created (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Ticket Form filter should exclude Security, Billing, Accounts Receiveable/Refunds.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created (Year) use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `all history`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show percentage inside bars and top of bars shows Total in Result Manipulation.

### IK - Total Incoming Tickets Per Form

aka IK - Total Incoming Tickets Per Groups #3

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: D_Count (Tickets)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created (Year)
    1. Ticket Created (Month)
- Filters used:
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created (Year) use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `all history`
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show percentage on rows inside bars in Result Manipulation.

### Intake Per Hour Last 12 Months - All Plans

aka IK - H/N/L Tickets - Intake Per Hour Last 12 Months

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Priority
    (Includes only Normal, Low, High)
- Columns:
    1. Ticket Created (Hour)
    (Includes  Check all even DESELECT ALL as well)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Ticket Form filter should exclude Security, Billing, Accounts Receiveable/Refunds.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created (Year) filter was used and it  use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `all history`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" at top of bars  in Result Manipulation.

### Intake Per Hour Last 12 Months SM - All Plans

aka IK - H/N/L Tickets - Intake Per Hour Last 12 Months SM

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Priority
        (Includes only Normal, Low, High)
- Columns:
    1. Ticket Created (Hour)
        (Includes  Check all even DESELECT ALL as well)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Ticket Form filter should include only `Self-Managed`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created (Year) filter was used and it  use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `all history`.
    1. Make sure report should have "Sort" type `A-Z` and sum is top on every bar in Result Manipulation.

### Intake Per Hour Last 12 Months .COM - All Plans

aka IK - H/N/L Tickets - Intake Per Hour Last 12 Months .COM

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Priority
    (Includes only Normal, Low, High)
- Columns:
    1. Ticket Created (Hour)
    (Includes  Check all even DESELECT ALL as well)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Ticket Form filter should include `SaaS` and `SaaS Acocunt`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created (Year) filter was used and it  use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `all history`.
    1. Make sure report should have "Sort" type `A-Z` and sum is top on every bar in Result Manipulation.

### Prefered Region last 6 / 3 Months

aka IK - Prefered Region last 6 / 3 Months

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metrics used: D_Count (Tickets Created - Last 6 months) and D_Count (Tickets Created - Last 3 months)
- Rows:
    None
- Columns:
    1. Preferred Region for Support
    (Includes All Regions, Americas USA, Asia Pacific and Europe Middle East Africa)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Ticket Form filter should include `SaaS`, `SaaS Acocunt`, `Self-Managed` and `L&R`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and has no value to select.
    1. Make sure report should have "Sort" type `A-Z` and "Total" show `sum` on top on every bar in Result Manipulation.

### FRT SLA % Achieved for .COM/SM

aka IK - FRT SLA For .com/SM

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: SUM (% Achieved SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. SLA Metric
    1. Ticket Form
    1. 2FA
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. SLA Metric includes only `First Reply Time`.
    1. Ticket Form filter should include `SaaS`, `SaaS Acocunt`, `Self-Managed`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Percentage is shown inside every bar in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### FRT MED .COM/SM

aka IK - FRT MED .COM/SM w/o License

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: MED (First reply time (hrs))
- Rows:
    None
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. Ticket Form
    1. 2FA
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. SLA Metric includes only `First Reply Time`.
    1. Ticket Form filter should include `SaaS`, `SaaS Acocunt`, `Self-Managed`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Percentage is shown inside every bar in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLA % Achieved for .COM/SM

aka IK - NRT SLA for .com/SM

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. GitLab Plan
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. GitLab Plan filter should include `Basic`, `Bronze`, `Gold`, `Premium`, `Silver`, `Ultimate`.
    1. Ticket Form filter should include `SaaS`, `SaaS Acocunt`, `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Percentage is shown inside every bar in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### FRT SLA % Achieved For .COM - Outdated Calculations

### NRT SLA % Achieved For .COM - Outdated Calculations

### Requester Wait Time .COM/SM/L&R

aka IK - Requester Wait Time .COM/SM/L&R

- Dataset used: Support ( SLAs )
- Visualization type: Area
- Metric used: MED (Requester wait time (hrs))
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Duplicate Ticket
    1. Ticket Status
    1. Follow-Up Ticket
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
- Custom Settings:
    1. Ticket Form filter should include `L&R`, `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Duplicate Ticket is a custom attribute and should have selected `Not Duplicate` only.
    1. Ticket Status should include `Solved` and `Closed` only.
    1. Follow-Up Ticket is a custom attribute and should have selected `Not Follow-Up Ticket` only.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R` only.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `7 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals of Count" shows in percentage in columns over every month in Result Manipulation.
    1. Order of result manipulation should be `1-value filter`in Result Manipulation.

### NRT Achieved Per Preferred Region

aka IK - NRT Achieved Per Preferred Region - Test

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: SUM (% Achieved SLA Tickets)
- Rows:
    1. Preferred Region for Support
- Columns:
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
- Custom Settings:
    1. Preferred Region for Support includes `All Regions`, `Americas, USA`, `Europe, Middle East, Africa`, `Asia Pacific`.
    1. Ticket Form filter excludes `Security`, `Account Receivable/Refunds`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update (Month) was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" showing in `Percentage` in every month on each cell.

### FRT Achieved Per Preferred Region

aka IK - FRT Achieved Per Preferred Region - Test

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: Sum (% Achieved SLA Tickets)
- Rows:
    1. Preferred Region for Support
- Columns:
    1. SLA Update (Month)
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Preferred Region for Support includes `All Regions`, `Americas, USA`, `Europe, Middle East, Africa`, `Asia Pacific`.
    1. Ticket Form filter excludes `Security`, `Account Receivable/Refunds`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update (Month) was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 months in the past` to "The end of" should have `1 months in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" showing in `Percentage` in every month on each cell.

## FRT Per Priority .COM/SM

aka IK - Total Breached FRT % Month

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Breached SLA Tickets), Sum (% Achieved SLA Targets)
- Rows:
    1. Ticket Priority
        (Includes only Normal, Low, High)
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. SLA Metric
    1. Ticket Form
    1. 2FA
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. SLA Metric includes only `First Reply Time`.
    1. Ticket Form filter excludes `Security`, `Account Receivable/Refunds`, `L&R`.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and `Percentage` is shown on top of every bar in Result Manipulation.

### NRT Per Priority .COM/SM

aka IK - Total Breached NRT % Month

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Breached SLA Tickets), Sum (% Achieved SLA Targets)
- Rows:
    1. Ticket Priority
        (Includes only Normal, Low, High)
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. SLA Metric
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. SLA Metric includes only `Next Reply Time`.
    1. Ticket Form filter excludes `Security`, `Account Receivable/Refunds`, `L&R`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and `Percentage` is shown on top of every bar in Result Manipulation.

### Median TTR SaaS/SM

aka IK - TTR

- Dataset used: Support ( Tickets)
- Visualization type: Area
- Metric used: \*MED (TTR)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Duplicate Ticket
    1. Ticket Status
    1. Follow-Up Ticket
    1. Free Reduced Effort - May 2022
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
    1. Verification Failed
    1. Remove prefix_solve_issue_20220516 for TTR
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Ticket Form filter should include `Alliance Parnters`, `Open Partner`, `Select Partner`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`, `L&R` and `Other`.
    1. Duplicate Ticket is a custom attribute and should have selected `Not Duplicate Only`.
    1. Ticket Status should include `Solved` and `Closed` only.
    1. Follow-Up Ticket is a custom attribute and should have selected `Not Follow-Up Ticket` only.
    1. Free Reduced Effort - May 2022 is a custom attribute and should have selected `Regular Tickets` only.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R` only.
    1. Verification Failed is a custom attribute and should have selected `No Verification Request failed` only.
    1. Remove prefix_solve_issue_20220516 for TTR is a custom attribute and should have selected `TTR Known` only.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `7 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals of Median" shows in over every month in Result Manipulation.

### Median TTR SM

aka IK - TTR SM

- Dataset used: Support ( Tickets)
- Visualization type: Line
- Metric used: \*MED (TTR)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Duplicate Ticket
    1. Ticket Status
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Ticket Form filter should include `Self-Managed` only.
    1. Duplicate Ticket is a custom attribute and should have selected `Not Duplicate Only`.
    1. Ticket Status should include `Solved` and `Closed` only.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R` only.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `7 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals of Median" shows in over every month in Result Manipulation.

### Median TTR SaaS

aka IK - TTR .COM

- Dataset used: Support ( Tickets)
- Visualization type: Line
- Metric used: \*MED (TTR)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Duplicate Ticket
    1. Ticket Status
    1. Has Plan Ticket Tags - SSAT (Inc L&R)
- Custom Settings:
    1. (*) represents standard calculated metrics.
    1. Ticket Form filter should include `SaaS` and `SaaS Account` only.
    1. Duplicate Ticket is a custom attribute and should have selected `Not Duplicate Only`.
    1. Ticket Status should include `Solved` and `Closed` only.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and includes should have `Has Plan + L&R` only.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `7 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals of Median" shows in over every month in Result Manipulation.

### Requester Wait Time SM

aka IK - Requester Wait Time SM

- Dataset used: Support ( SLAs )
- Visualization type: Line
- Metric used: MED (requester wait time (hrs))
- Rows:
    None
- Columns:
    1. Ticket Update - Year
    1. Ticket Update - Month
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket Form filter includes only `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z`.

### Requester Wait Time SaaS- Deleted Report

### Support Solved / Closed Tickets

aka IK - Support Closed Tickets

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count (Tickets Solved)
- Rows:
    None
- Columns:
    1. Ticket Solved (Year)
    1. Ticket Solved (Month)
- Filters used:
    1. Ticket Form
    1. Ticket Status
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket Form filter should include `L&R`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Ticket Status filter should include only `Closed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved (Year) use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `sum` on top of every month column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### One-Touch Solved Per Ticket Form Ratio (w/o Free)

aka IK - One-Touch Solved Per Ticket Form Ratio (w/o Free)

aka IK - Requester Wait Time SM

- Dataset used: Support ( SLAs )
- Visualization type: Line
- Metric used: \* D_Count (One Touch Ticket Ratio)*\
- Rows:
    1. Ticket Form
        (Includes only Self Managed, SaaS, SaaS Account)
- Columns:
    1. Ticket Solved (Year)
    1. Ticket Solved (Month)
- Filters used:
    1. 2FA
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. One Touch Ticket Ratio is a custom metric.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. Ticket Solved (Year) was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" have "Percentage" shows in lines over every month in Result Manipulation.

### SSAT Distribution For Combined .COM/SM - Outdated Calc

### SSAT Distribution .COM - Outdated Calc

### SSAT Distribution SM

aka IK - Main - SSAT Distribution 12 months SM

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Sum (% Satisfaction Score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Satisfaction Rating
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. Ticket Satisfaction Rating filter excludes `Offered`, `Unoffered` and `null`.
    1. Ticket Form filter should include only `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Poor SSAT Reason Breakdown For .COM

aka IK - Poor CSAT For .COM Breakdown Per Month

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count  (Bad Initial Satisfaction Rating)
- Rows:
    1. Ticket Satisfaction Reason
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Row values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include only `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is not used for any filteration.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Total" shows in percentage in columns inside every month for every reason in Result Manipulation.

### Poor SSAT Reason Breakdown For SM

aka IK - Poor CSAT For SM Breakdown Per Month

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count  (Bad Initial Satisfaction Rating)
- Rows:
    1. Ticket Satisfaction Reason
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Row values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include only `Self-Managed`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Total" shows in percentage in columns inside every month for every reason in Result Manipulation.

### SSAT Volume 3 months .com

aka IK - Main - SSAT Distribution 3 months .com - Table

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Sum (% Satisfaction Score), /*D_Count (Rated VS Tickets in %)*/, D_Count (Rated satisfaction tickets), Count (Tickets)
- Rows:
    1. GitLab Plan
        (Includes only Bronze, Gold, Silver)
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Rated VS Tickets in % is a custom metric.
    1. Ticket Form filter should include only `SaaS` and `SaaS Account`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `2 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z`.

### SSAT Volume 3 months SM

aka IK - Main - SSAT Distribution 3 months SM - Table

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Sum (% Satisfaction Score), /*D_Count (Rated VS Tickets in %)*/, D_Count (Rated satisfaction tickets), Count (Tickets)
- Rows:
    1. GitLab Plan
        (Includes only Starter, Premium, Basic, Ultimate)
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Rated VS Tickets in % is a custom metric.
    1. Ticket Form filter should include only `Self-Managed`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `2 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z`.

### SSAT% For Tickets with Issue Links

aka IK - SSAT% For Tickets with Issue Links

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Sum (% Satisfaction Score), D_Count (Rated satisfaction tickets), D_Count (Tickets). Sum (% Satisfaction rated)
- Rows:
    1. Ticket Form
        (Includes only SaaS, SaaS Account, L&R, Self-Managed)
    1. Linked to Issue
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Linked to Issue is a custom metric.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 Months in the past`.
    1. Make sure report should have "Sort" type `A-Z`.

### Survey Responded 12 Months

aka IK - Survey Responded 12 Months

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: D_Count (Rated satisfaction tickets), D_Count (SSAT Form), /*D_Count (Rated VS Tickets in %)*/.
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Solved - Month
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Metrics in top of chart configurable in Chart configuration.
    1. Rated VS Tickets in % is a custom metric and use Dual Axis in the Metrics panel.
    1. SSAT Form is a custom mertic
    1. Ticket Form filter should exclude `Professional Services`, `Security`, `Billing`, `Accounts Receiveable/Refunds`, `Security`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 Months in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Sum" shows in columns over and inside every month as well as the value of dual axis line in metrics in Result Manipulation.

### Linked Total

aka IK - Linked Total

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: D_Count (Solved Tickets), \*D_Count (Total Linked)*\, \*Count (% Total Linked)*\, \*Count (% Linked Docs)*\, \*D_Count (Linked Docs)*\, \*Count (% Linked MR)*\, \*D_Count (Linked MR)*\, \*Count (% Linked Issues)*\, \*D_Count (Linked Issues)*\, \*Count (% Linked HB)*\, \*D_Count (Linked Handbook)*\
- Rows:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Columns:
    None
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
    1. Created by Agent
- Custom Settings:
    1. `Total Linked`, `% Total Linked`, `% Linked Docs`, `Linked Docs`, `% Linked MR`, `Linked MR`, `% Linked Issues`, `Linked Issues`, `% Linked HB` and `Linked Handbook` are custom mertrics.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`,.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Created By Agent is a custom attribute and should have selected `Not Created By Agent`.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z`.

### Linked Docs

aka IK - Linked Docs

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \* SUM (% Linked Docs)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked Docs is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Linked Issues

aka IK - Linked Issues

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \* SUM (% Linked Issues)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked Issues is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Linked MR's

aka IK - Linked MR's

 Dataset used: Support ( Tickets )

- Visualization type: Column
- Metric used: \* SUM (% Linked MR)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked MR is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Linked HB's

aka IK - Linked HB's

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \* SUM (% Linked HB)*\
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. % Linked HB is a custom mertric.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. Report has a `linear` trend line in Chart configuration.

### Linked Total - Private

aka IK - Linked Total - Private

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: D_Count (Solved Tickets), \*D_Count (Total Linked)*\, \*D_Count (Linked Docs)*\, \*D_Count (Linked Docs - Private)*\, \*D_Count (Linked MR)*\, \*D_Count (Linked MR - Private)*\, \*D_Count (Linked Issues)*\, \*D_Count (Linked Issues - Private)*\, \*D_Count (Linked Handbook)*\, \*D_Count (Linked Handbook - Private)*\
- Rows:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Columns:
    None
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan - Ticket Tag
- Custom Settings:
    1. `Total Linked`, `Linked Docs`, `Linked Docs - Private`, `Linked MR`, `Linked MR - Private`, `Linked Issues`, `Linked Issues - Private`, `Linked Handbook` and `Linked Handbook - Private` are custom mertrics.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergency`, `SaaS`, `SaaS Account`, `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z`.

### No Problem Type

aka IK - No Problem Type

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: \*Count (No Problem Type - .COM)*\, \*Count (No Problem Type - SM)*\,\*Count (No Problem Type - L&R)*\, \*Count (No Problem Type - Accounts SaaS)*\, Count (% Tickets)
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Duplicate Tickets
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Metrics in top of chart configurable in Chart configuration.
    1. `No Problem Type - .COM`, `No Problem Type - SM`, `No Problem Type - L&R`and `No Problem Type - Accounts SaaS` are custom mertrics.
    1. Count (Tickets) metric use Dual Axis in the Metrics panel and should show total value in trend line format.
    1. Duplicate Tickets is a custom attribute and should have `Not Duplicate` selected.
    1. Ticket Form filter should include `Emergencies`, `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `13 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show "Sum" in columns inside and top of every month in Result Manipulation.

### Assigned vs Unassigned

aka IK - Assigned VS Unassigned

- Dataset used: Support ( Tickets )
- Visualization type: Line
- Metric used: \*D_Count (Unassigned)*\, \*D_Count (Assigned)*\
- Rows:
    None
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Metrics in top of chart configurable in Chart configuration.
    1. `Unassigned` and `Assigned`are custom mertrics.
    1. Ticket Form filter should include `Emergencies`, `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show on top of every month in Result Manipulation.

### Unassigned Tickets Per Ticket Form

aka IK - Unassigned Tickets Per Ticket Form Per Month

- Dataset used: Support ( Tickets )
- Visualization type: Line
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Form
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Assignee Name
- Custom Settings:
    1. This report shows Legend for Rows in top of chart configurable in Chart configuration.
    1. Ticket Form should include `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Assignee name filter should include `NULL`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `8 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show on top of every month in Result Manipulation.

### Unassigned vs Assigned Not New Multi-Touch Ticket Ratio

aka IK - Unassigned VS Assigned Not New Multi-Touch Ticket Ratio

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Form
- Columns:
    1. Comment touch
    1. Unassigned
- Filters used:
    1. Ticket Status
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Rows in top of chart configurable in Chart configuration.
    1. Ticket Form should include `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Comment touch is a custom attribute and setting of Includes have `Multi-touch` selected.
    1. Unassigned is a custom attribute and needs nothing to be checked.
    1. Ticket Status filter should include `Open`, `Pending`, `On-Hold`, `Solved`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show Metric i.e. Count (Tickets) as per Patter of `% of Total` and Path should be in `Columns` in Result Path Calculation inside Result Manipulation.

### Public comments on Assigned tickets ratio in % Per Region Weekly

aka IK - Public comments on Assigned tickets ratio in % Per Region Weekly

- Dataset used: Support ( Ticket Updates )
- Visualization type: Line
- Metric used: /*Sum (Assignment Ratio)*/
- Rows:
    1. Region
- Columns:
    1. Update - Year
    1. Update - Month
- Filters used:
    1. Ticket Form
    1. Comment Type
- Custom Settings:
    1. Assignment Ratio is a custom metric.
    1. Ticket Form filter should include `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Comment Type filter should include `Public`.
    1. Region is a group attribute and the values are Computed from `Updater Tags`. Manager tags are used for `APAC`, `EMEA` and `AMER` sections.
    1. Update - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` in top of every week.

### Total Support Open Tickets Per Ticket Form

aka IK - Total Support Open Tickets Per Support Group

- Dataset used: Support ( Tickets )
- Visualization type: Pie
- Metric used: Count (Tickets)
- Rows:
    None
- Columns:
    1. Ticket Form
        (includes `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`)
- Filters used:
    1. Ticket Status
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Column values in top of chart configurable in Chart configuration.
    1. Ticket Status filter should include `New`, `Open`, `Pending`, `On-Hold`, `Solved`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` ans `Count` in Pie sections and in center is the Grand Total without percentage.

### Unassigned Open Tickets Per Ticket Form

aka IK - Unassigned Tickets Per Ticket Form

- Dataset used: Support ( Tickets )
- Visualization type: Pie
- Metric used: Count (Tickets)
- Rows:
    None
- Columns:
    1. Ticket Form
        (includes `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`)
- Filters used:
    1. Ticket Status
    1. Assignee name
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Column values in top of chart configurable in Chart configuration.
    1. Ticket Status filter should include `New`, `Open`, `Pending`, `On-Hold`, `Solved`.
    1. Assignee name filter should include `NULL` only.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` ans `Count` in Pie sections and in center is the Grand Total without percentage.

### Public comments on Unassigned vs Assigned Tickets Per Team

aka IK - Public comments on Unassigned VS Assigned Tickets Per Team

- Dataset used: Support ( Ticket Updates )
- Visualization type: Line
- Metric used: /*D_Count (Unassigned - Update)*/, /*D_Count (Assigned - update)*/
- Rows:
    1. Updater Tags
        ( include all managers name tags inside the agent's field)
- Columns:
    1. Update - Year
    1. Update - Month
- Filters used:
    1. Ticket Form
    1. Comment Type
- Custom Settings:
    1. Unassigned - Update and Assigned - update are a custom metric.
    1. Updater Tags should show all manager tags on right side and shows Legend for row values on top of report for metrics value.
    1. Ticket Form filter should include `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Comment Type filter should include `Public`.
    1. Update - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 Month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Count` in top of every month.

### Emergency Tickets - Intake Per Month

aka IK - Emergency Tickets - Intake Per Month

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    None
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Ticket Tags
    1. Requester Role
    1. Requester Name
- Custom Settings:
    1. Ticket Tags filter should include `emergency` only.
    1. Requester Role filter should exclude `Admin` and `Agent`.
    1. Requester Name filter should exclude `Lis Vinueza` only.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show on top of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### Emergency Tickets - Weekend Opened Worldwide

aka IK - Emergency Tickets - Weekend Opened Worldwide

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    None
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Ticket Tags
    1. Ticket Created - Day of week
    1. Requester Role
    1. Requester Name
- Custom Settings:
    1. Ticket Tags filter should include `emergency` only.
    1. Ticket Created - Day of week filter should include `Saturday` and `Sunday`.
    1. Requester Role filter should exclude `Admin` and `Agent`.
    1. Requester Name filter should exclude `Lis Vinueza` only.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show on top of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### Emergency NRT

aka IK - Emergency Breached NRT % Per Month

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Breached SLA Targets), Sum (% Achieved SLA Targets)
- Rows:
    None
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. SLA metric
    1. Ticket Created - Year
    1. Ticket Tags
    1. Requester Role
- Custom Settings:
    1. This report shows Legend for Metrics values in top of chart configurable in Chart configuration.
    1. SLA metric filter should include `Next Reply Time` only,
    1. Ticket Tags filter should include `emergency` only.
    1. Requester Role filter should exclude `Admin` and `Agent`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### Emergency FRT

aka IK - Emergency Breached FRT % Per Month

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Breached SLA Tickets), Sum (% Achieved SLA Tickets)
- Rows:
    None
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. SLA metric
    1. Ticket Created - Year
    1. Ticket Created - Month
    1. Ticket Tags
    1. Requester Name
- Custom Settings:
    1. This report shows Legend for Metrics values in top of chart configurable in Chart configuration.
    1. SLA metric filter should include `First Reply Time` only,
    1. Ticket Tags filter should include `emergency` only.
    1. Requester Name filter should exclude `Lis Vinueza` only.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### Opened On Weekend Breached

aka IK - Opened On Weekend Breached

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: D_Count (Breached SLA Tickets)
- Rows:
    1. Ticket Created - Day of week
        ( includes `Saturday` and `Sunday`)
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. SLA metric
    1. SLA Update- Year
    1. Requester Role
    1. Requester Name
- Custom Settings:
    1. This report shows Legend for Row values in top of chart configurable in Chart configuration.
    1. SLA metric filter should include `First Reply Time` only,
    1. Requester Name filter should exclude `Lis Vinueza` only.
    1. Requester Role filter should exclude `Admin` and `Agent`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `12 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Sum` on top of every month in Result Manipulation.
    1. It also shows 2 trend lines which can be found in Chart Configuration menu.

### Regional Updates Per Hour Last 6 Months

aka IK - Regional updates per hour - 2019/2020

- Dataset used: Support ( Ticket Updates )
- Visualization type: Area
- Metric used: /*D_Count (Region - EMEA)*/, /*D_Count (Region - APAC)*/. /*D_Count (Region - US)*/, /*D_Count (Updates)*/
- Rows:
    None
- Columns:
    1. Update - Hour
- Filters used:
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Comment Type
    1. Updater Role
    1. Updater Tags
- Custom Settings:
    1. Region - EMEA, Region - APAC and Region - US are custom metrics.
    1. Updates metric use Trend Axis in the Metrics panel.
    1. This report shows Legend for Metric values in top of chart configurable in Chart configuration.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Comment Type filter should include `Public`.
    1. Updater Role filter should include `Agent` only.
    1. Updater Tags should inlcude all manager name tags found in agent profile.
    1. Update - Hour use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z`.

### US update per prefered region last 6 months

aka IK - US update per prefered region last 6 months

- Dataset used: Support ( Ticket Updates )
- Visualization type: Table
- Metric used: D_Count (Updates)
- Rows:
    1. Preferred Region for Support
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Updater Tags
    1. Ticket Created - Month
    1. Ticket Form
- Custom Settings:
    1. Updater Tags should inlcude all US manager name tags found in agent profile.
    1. Ticket Form filter should include `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Total shows in `% of Total` in path `Rows` under Result path calculation found under result manipulation menu.

### EMEA update per prefered region last 6 months

aka IK - EMEA update per prefered region last 6 months

- Dataset used: Support ( Ticket Updates )
- Visualization type: Table
- Metric used: D_Count (Updates)
- Rows:
    1. Preferred Region for Support
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Updater Tags
    1. Ticket Form
- Custom Settings:
    1. Updater Tags should inlcude all EMEA manager name tags found in agent profile.
    1. Ticket Form filter should include `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Total shows in `% of Total` in path `Rows` under Result path calculation found under result manipulation menu.

### APAC update per prefered region last 6 months

aka IK - APAC update per prefered region last 6 months

- Dataset used: Support ( Ticket Updates )
- Visualization type: Table
- Metric used: D_Count (Updates)
- Rows:
    1. Preferred Region for Support
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Updater Tags
    1. Ticket Form
- Custom Settings:
    1. Updater Tags should inlcude all APAC manager name tags found in agent profile.
    1. Ticket Form filter should include `SaaS`, `SaaS Account`, `Self-Managed`, `L&R`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `6 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Total shows in `% of Total` in path `Rows` under Result path calculation found under result manipulation menu.

### SLA % Breached Per Hour Last 4 Months

aka IK - SLA  %  Breached Per Hour Last 4 Months

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Breached SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Hour
- Filters used:
    1. SLA metric
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket Form
- Custom Settings:
    1. SLA metric filter should include `Next Reply Time` and `First Reply Time` only,
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Form filter should exclude `Professional Services`, `Security`, `Billing`.
    1. SLA Update - Hour use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every month in Result Manipulation.

### SLA Events Breached Per Hour Last 4 Months

aka IK - SLA Breached Per Hour Last 4 Months

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Count (Breached SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Hour
- Filters used:
    1. SLA metric
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket Form
- Custom Settings:
    1. SLA metric filter should include `Next Reply Time` and `First Reply Time` only,
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Form filter should exclude `Professional Services`, `Security`, `Billing`.
    1. SLA Update - Hour use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every month in Result Manipulation.

### SLA % Breached Per Hour Last 4 Months .COM

aka IK - SLA  %  Breached Per Hour Last 4 Months .COM

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Breached SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Hour
- Filters used:
    1. SLA metric
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket Form
- Custom Settings:
    1. SLA metric filter should include `Next Reply Time` and `First Reply Time` only,
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Form filter should include `SaaS` and `SaaS Acccount`.
    1. SLA Update - Hour use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every month in Result Manipulation.

### SLA Events Breached Per Hour Last 4 Months .COM

aka IK - SLA Breached Per Hour Last 4 Months .COM

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Count (Breached SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Hour
- Filters used:
    1. SLA metric
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket Form
- Custom Settings:
    1. SLA metric filter should include `Next Reply Time` and `First Reply Time` only,
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Form filter should include `SaaS` and `SaaS Acccount`.
    1. SLA Update - Hour use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every month in Result Manipulation.

### SLA % Breached Per Hour Last 4 Months SM

aka IK - SLA  %  Breached Per Hour Last 4 Months SM

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Breached SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Hour
- Filters used:
    1. SLA metric
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket Form
- Custom Settings:
    1. SLA metric filter should include `Next Reply Time` and `First Reply Time` only,
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Form filter should include `Self Managed` only.
    1. SLA Update - Hour use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every month in Result Manipulation.

### SLA Events Breached Per Hour Last 4 Months SM

aka IK - SLA Breached Per Hour Last 4 Months SM

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Count (Breached SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Hour
- Filters used:
    1. SLA metric
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
    1. Ticket Form
- Custom Settings:
    1. SLA metric filter should include `Next Reply Time` and `First Reply Time` only,
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Form filter should include `Self Managed` only.
    1. SLA Update - Hour use Advanced Date Range settings i.e. "From beginning of" should have `4 Months in the past` to "The end of" should have `1 Month in the Past`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show `Percentage` on top of every column month in Result Manipulation.

### SSAT

aka IK - SSAT - Last 4 Weeks

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `Alliance Parnters`, `Open Partner`, `Select Partner`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Week of Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### FRT

aka IK - Total FRT SLA - Last 4 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `Alliance Parnters`, `Open Partner`, `Select Partner`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT

aka IK - NRT SLA - Last 4 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `Alliance Parnters`, `Open Partner`, `Select Partner`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### Volume

aka IK - Incoming Tickets For Support Per Week (excl L&R)

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count (Tickets Created)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Rows values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include `Alliance Parnters`, `Open Partner`, `Select Partner`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" show on top of every column in Result Manipulation.

### Week Over Week SM SLA

aka IK - Week Over Week SM SLA

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: /*Sum (SLA % achieved last week)*/,  /*Sum (SLA % achieved this week)*/
- Rows:
    1. SLA Metric
        (includes only First Reply Time, Next Reply Time)
- Columns:
    1. SM Plan - Ticket Tags
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. SLA % achieved last week) and SLA % achieved this week) are custom date range metrics.
    1. SM Plan - Ticket Tags are "Group" attribute in Calculation menu to computed from `Plan Tags - Ticket Tags` and group SM inlucdes `Basic`, `Premium`, `Ultimate` which needs to be selected.
    1. Ticket Form filter should include `Self-Managed` only.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. Result Metric calculation is used in Result Manipulation with name "week over week SLA" and formula used is ```(SUM(SLA % achieved this week)-SUM(SLA % achieved last week))/SUM(SLA % achieved last week)```.
    1. Make sure report should have "Sort" type `A-Z`.

### LK - Total FRT SLA - Last 4 Weeks + Priority

aka LK - Total FRT SLA - Last 4 Weeks + Priority

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    1. Ticket Priority
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. This report shows Legend for Row values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include `Alliance Parnters`, `Open Partner`, `Select Partner`, `SaaS`, `SaaS Account`, `Self-Managed`, `Emergencies`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.

### FRT SLA For SM - Last 3 Weeks

aka IK - FRT SLA For SM - Last 3 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `Self-Managed` only.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### FRT SLA For SM - This Week

aka IK - FRT SLA For SM - This Week

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `Self-Managed` only.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLO For SM - Last 3 Weeks

aka IK - NRT SLA for SM - Last 3 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `Self-Managed` only.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLO For SM - This Week

aka IK - NRT SLA For SM - This Week

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `Self-Managed` only.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### SSAT For SM - Last 3 Weeks

aka IK - SSAT For SM - Last 3 Weeks

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `Self-Managed` only.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Week of Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

## SSAT For SM - This Week

aka IK - SSAT For SM - This Week

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `Self-Managed` only.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### SSAT Volume 4 Weeks SM

aka IK - SSAT Distribution 4 Weeks SM - Table

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Sum (% Satisfaction Score), D_Count (Rated satisfaction tickets)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include only `Self-Managed`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Weeks in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z`.

### Requester Wait Time SM

aka IK - SWIR - Requester Wait Time SM

- Dataset used: Support ( SLAs )
- Visualization type: Line
- Metric used: MED (requester wait time (hrs))
- Rows:
    None
- Columns:
    1. Ticket Updated - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket Form filter includes only `Self-Managed`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Updated - Week of Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 Weeks in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Total shows on top of every week in Result Manipulation.

### SM Incoming Tickets For Support Per Week

aka IK - SM Incoming Tickets For Support Per Week

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count (Tickets Created)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Rows values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include only `Self-Managed`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" show on top of every column and the priortiy percentage shows inside columns in Result Manipulation.

### Week Over Week .COM SLA

aka IK - Week Over Week .COM SLA

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: /*Sum (SLA % achieved last week)*/,  /*Sum (SLA % achieved this week)*/
- Rows:
    1. SLA Metric
        (includes only First Reply Time, Next Reply Time)
- Columns:
    1. .COM Plan - Ticket Tags
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. SLA % achieved last week) and SLA % achieved this week) are custom date range metrics.
    1. .COM Plan - Ticket Tags are "Group" attribute in Calculation menu to computed from `Plan Tags - Ticket Tags` and group .COM inlucdes `Bronze`, `Gold`, `Silver` which needs to be selected.
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. Result Metric calculation is used in Result Manipulation with name "week over week SLA" and formula used is ```(SUM(SLA % achieved this week)-SUM(SLA % achieved last week))/SUM(SLA % achieved last week)```.
    1. Make sure report should have "Sort" type `A-Z`.

### FRT SLA For .COM - Last 3 Weeks

aka IK - FRT SLA For .COM - Last 3 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### FRT SLA For .COM - This Week

aka IK - FRT SLA For .COM - This Week

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLO For .COM - Last 3 Weeks

aka IK - NRT SLA for .COM - Last 3 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLO For .COM - This Week

aka IK - NRT SLA For .COM - This Week

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### SSAT For .COM - Last 3 Weeks

aka IK - SSAT For .COM - Last 3 Weeks

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Week of Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

## SSAT For .COM - This Week

aka IK - SSAT For .COM - This Week

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Solved - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### SSAT Volume 4 Weeks .COM

aka IK - SSAT Distribution 4 Weeks .COM - Table

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Sum (% Satisfaction Score), D_Count (Rated satisfaction tickets)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Weeks in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z`.

### Requester Wait Time .COM

aka IK - SWIR - Requester Wait Time .COM

- Dataset used: Support ( SLAs )
- Visualization type: Line
- Metric used: MED (requester wait time (hrs))
- Rows:
    None
- Columns:
    1. Ticket Updated - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan - Ticket Tags is a custom attribute and setting of Includes have `Has Plan` checked.
    1. Ticket Updated - Week of Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 Weeks in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Total shows on top of every week in Result Manipulation.

### .COM Incoming Tickets For Support Per Week

aka IK - .COM Incoming Tickets For Support Per Week

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count (Tickets Created)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created - Week of Year
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Rows values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include `SaaS` and `SaaS Account`.
    1. Has Plan Ticket Tags -SSAT (Incl L&R) is a custom attribute and setting of Includes have `Has Plan + L&R` checked.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" show on top of every column and the priortiy percentage shows inside columns in Result Manipulation.

### Emergency Tickets - Weekend Opened Worldwide Per Week

aka IK - Emergency Tickets - Weekend Opened Worldwide Per Week.

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    None
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
    1. Ticket Created - Week of Year
- Filters used:
    1. Ticket Tags
    1. Ticket Created - Day of week
    1. Requester Role
    1. Requester Name
- Custom Settings:
    1. Ticket Tags filter should include `emergency` only.
    1. Ticket Created - Day of week filter should include `Saturday` and `Sunday`.
    1. Requester Role filter should exclude `Admin` and `Agent`.
    1. Requester Name filter should exclude `Lis Vinueza` only.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Totals show on top of every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### Week Over Week L&R SLA

aka IK - Week Over Week L&R SLA

- Dataset used: Support ( SLAs )
- Visualization type: Table
- Metric used: /*Sum (SLA % achieved last week)*/, /*Sum (SLA % achieved this week)*/
- Rows:
    1. SLA Metric
        (includes only First Reply Time, Next Reply Time)
- Columns:
    None
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. SLA % achieved last week) and SLA % achieved this week) are custom date range metrics.
    1. Ticket Form filter should include `L&R` only.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. Result Metric calculation is used in Result Manipulation with name "week over week SLA" and formula used is ```(SUM(SLA % achieved this week)-SUM(SLA % achieved last week))/SUM(SLA % achieved last week)```.
    1. Make sure report should have "Sort" type `A-Z`.

### FRT SLA For L&R - Last 3 Weeks

aka IK - FRT SLA For L&R - Last 3 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `L&R` only.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### FRT SLA For L&R - This Week

aka IK - FRT SLA For L&R - This Week

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. SLA Metric
    1. 2FA
- Custom Settings:
    1. Ticket Form filter should include `L&R` only.
    1. SLA Metric filter should have `First Reply Time` selected.
    1. 2FA is custom attribute and `Not 2FA` needs to be selected.
    1. SLA Update - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLO For L&R - Last 3 Weeks

aka IK - NRT SLA for L&R - Last 3 Weeks

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `L&R` only.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLO For L&R - This Week

aka IK - NRT SLA For L&R - This Week

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Sum (% Achieved SLA targets)
- Rows:
    None
- Columns:
    1. SLA Update - Week of Year
- Filters used:
    1. Ticket Form
    1. SLA Metric
- Custom Settings:
    1. Ticket Form filter should include `L&R` only.
    1. SLA Metric filter should have `Next Reply Time` selected.
    1. SLA Update - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### SSAT For L&R - Last 3 Weeks

aka IK - SSAT For L&R - Last 3 Weeks

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Solved - Week of Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

## SSAT For L&R - This Week

aka IK - SSAT For L&R - This Week

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: SUM (% Satisfaction score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Solved - Week of Year filter used Simple Date Range settings i.e.`This Week`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `percent` inside of every column in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### SSAT Volume 4 Weeks L&R

aka IK - SSAT Distribution 4 Weeks L&R - Table

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Sum (% Satisfaction Score), D_Count (Rated satisfaction tickets)
- Rows:
    None
- Columns:
    1. Ticket Solved - Week of Year
- Filters used:
    1. Ticket satisfaction rating
    1. Ticket Form
- Custom Settings:
    1. Ticket satisfaction rating filter exclude `NULL`, `Offered`, `Unoffered`.
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `3 Weeks in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z`.

### Requester Wait Time L&R

aka IK - SWIR - Requester Wait Time L&R

- Dataset used: Support ( SLAs )
- Visualization type: Line
- Metric used: MED (requester wait time (hrs))
- Rows:
    None
- Columns:
    1. Ticket Updated - Week of Year
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Updated - Week of Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 Weeks in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Total shows on top of every week in Result Manipulation.

### L&R Incoming Tickets For Support Per Week

aka IK - L&R Incoming Tickets For Support Per Week

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count (Tickets Created)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created - Week of Year
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. This report shows Legend for Rows values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Created - Week of Year use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" show on top of every column and the priortiy percentage shows inside columns in Result Manipulation.

### Baseline comments SM

aka IK - Baseline comments SM

- Dataset used: Support ( Ticket Updates )
- Visualization type: Table
- Metric used: /*D_Count (Public Comments - Agent)*/,  /*D_Count (Baseline Public Comments SM)*/,  /*D_Count (Public Comments AVG SM)*/,  /*D_Count (Internal Comments - Agent)*/,  /*D_Count (Baseline Internal Comments SM)*/,  /*D_Count (Avrage Internal Comments SM)*/,  D_Count (Tickets Solved),  /*D_Count (Baseline Solved SM)*/,  /*D_Count (Solved AVG SM)*/
- Rows:
    None
- Columns:
    1. Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Updater Name
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Public Comments - Agent, Baseline Public Comments SM, Public Comments AVG SM, Internal Comments - Agent, Baseline Internal Comments SM, Avrage Internal Comments SM, Baseline Solved SM and Solved AVG SM are custom metrics.
    1. Ticket Form filter includes `Self=Managed` only.
    1. Update Name filter excludes `GitLab Support`, `GitLab SupportOps Bot`, `SupportOps`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `8 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `SUM` inside of every column in Result Manipulation.

### Baseline comments .COM

aka IK - Baseline comments .COM

- Dataset used: Support ( Ticket Updates )
- Visualization type: Table
- Metric used: /*D_Count (Public Comments - Agent)*/,  /*D_Count (Baseline Public Comments .COM)*/,  /*D_Count (Public Comments AVG .COM)*/,  /*D_Count (Internal Comments - Agent)*/,  /*D_Count (Baseline Internal Comments .COM)*/,  /*D_Count (Avrage Internal Comments .COM)*/,  D_Count (Tickets Solved),  /*D_Count (Baseline Solved .COM)*/,  /*D_Count (Solved AVG .COM)*/
- Rows:
    None
- Columns:
    1. Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Updater Name
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. Public Comments - Agent, Baseline Public Comments .COM, Public Comments AVG .COM, Internal Comments - Agent, Baseline Internal Comments .COM, Avrage Internal Comments .COM, Baseline Solved ,COM and Solved AVG .COM are custom metrics.
    1. Ticket Form filter includes `SaaS` and `SaaS Account`.
    1. Update Name filter excludes `GitLab Support`, `GitLab SupportOps Bot`, `SupportOps`.
    1. Has Plan - Ticket Tags is a custom attribute and includes should have `Has Plan`.
    1. Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `8 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `SUM` inside of every column in Result Manipulation.

### Baseline comments L&R

aka IK - Baseline comments L&R

- Dataset used: Support ( Ticket Updates )
- Visualization type: Table
- Metric used: /*D_Count (Public Comments - Agent)*/,  /*D_Count (Baseline Public Comments L&R)*/,  /*D_Count (Public Comments AVG L&R)*/,  /*D_Count (Internal Comments - Agent)*/,  /*D_Count (Baseline Internal Comments L&R)*/,  /*D_Count (Avrage Internal Comments L&R)*/,  D_Count (Tickets Solved),  /*D_Count (Baseline Solved L&R)*/,  /*D_Count (Solved AVG L&R)*/
- Rows:
    None
- Columns:
    1. Update - Week of Year
- Filters used:
    1. Ticket Form
    1. Updater Name
- Custom Settings:
    1. Public Comments - Agent, Baseline Public Comments L&R, Public Comments AVG L&R, Internal Comments - Agent, Baseline Internal Comments L&R, Avrage Internal Comments L&R, Baseline Solved L&R and Solved AVG L&R are custom metrics.
    1. Ticket Form filter includes `L&R` only.
    1. Update Name filter excludes `GitLab Support`, `GitLab SupportOps Bot`, `SupportOps`.
    1. Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `8 weeks in the past` to "The end of" should have `1 week in the past`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" show `SUM` inside of every column in Result Manipulation.

### L&R No Assignee

aka IK - L&R Ticket With No Assignee

- Dataset used: Support ( Tickets )
- Visualization type: Auto
- Metric used: D_Count (Tickets Solved)
- Rows:
    None
- Columns:
    1. Assignee Name
- Filters used:
    1. Ticket Form
    1. Ticket Status
- Custom Settings:
    1. Assignee Name should have `NULL` only as selected.
    1. Ticket Form filter includes `L&R` only.
    1. Ticket Status filter excludes `Solved` and `Closed`.
    1. Make sure report should have "Sort" type `A-Z`.

### FRT SLA For L&R

aka IK - FRT SLA For L&R

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: SUM (% Achieved SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. SLA Metric
    1. Ticket Form
- Custom Settings:
    1. SLA Metric includes only `First Reply Time`.
    1. Ticket Form filter should include `L&R` only.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Percentage is shown inside every bar in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### NRT SLA For L&R

aka IK - NRT SLA For L&R

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: SUM (% Achieved SLA Targets)
- Rows:
    None
- Columns:
    1. SLA Update - Year
    1. SLA Update - Month
- Filters used:
    1. SLA Metric
    1. Ticket Form
- Custom Settings:
    1. SLA Metric includes only `Next Reply Time`.
    1. Ticket Form filter should include `L&R` only.
    1. SLA Update - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and Percentage is shown inside every bar in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### SSAT 12 Months L&R - All Plans

aka IK - Main - SSAT Distribution 12 Months Licensing

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Sum (% Satisfaction Score)
- Rows:
    None
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. Ticket Form filter should include only `L&R`.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `13 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "SUM" shows in percentage in columns inside every month in Result Manipulation.
    1. It also shows a trend line which can be found in Chart Configuration menu.

### L&R Incoming Volume Per Week

aka IK - L&R Incoming Volume Per Week

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: D_Count (Tickets)
- Rows:
    None
- Columns:
    1. Ticket Created - Week of Year
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Created - Week of Year use Advanced Date Range settings i.e. "From beginning of" should have `2 Months in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" show inside of every column  in Result Manipulation.

### L&R Incoming Volume Per Day

aka IK - L&R Incoming Volume Per Day

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: D_Count (Tickets)
- Rows:
    None
- Columns:
    1. Ticket Created - Month
    1. Ticket Created - Day of Month
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Created - Month use Advanced Date Range settings i.e. "From beginning of" should have `2 weeks in the past` to "The end of" should have `All history`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" show inside of every column  in Result Manipulation.

### Total Incoming Tickets For L&R - All Plans

aka IK - Total Incoming Tickets For L&R

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count (Tickets Created)
- Rows:
    1. Ticket Priority
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. This report shows Legend for Rows values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include `L&R` only.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `13 Months in the past` to "The end of" should have `1 Month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Totals" show on top of every column and the priortiy percentage shows inside columns in Result Manipulation.

### L&R Escalated to Sales AVG Time to First Solve

aka IK - L&R Escalated to Sales AVG Time to Resolve

- Dataset used: Support ( SLAs )
- Visualization type: Column
- Metric used: Avg (First resolution time (hrs))
- Rows:
    1. Escalated to Sales
        (Includes only `true` and `false`)
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. This report shows Legend for Rows values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include only `L&R`.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `13 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Total" shows on top of columns on every month in Result Manipulation.

### L&R No Transaction Type Per Month

aka IK - L&R No Transaction Type Per Month

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: D_Count (Tickets)
- Rows:
    1. Transaction Issue Type
        (Includes only `NULL`)
- Columns:
    1. Ticket Solved - Year
    1. Ticket Solved - Month
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. Ticket Form filter should include only `L&R`.
    1. Ticket Solved - Year use Advanced Date Range settings i.e. "From beginning of" should have `13 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Total" shows inside of columns on every month in Result Manipulation.

## Intake Per Hour Last 12 Months L&R - All Plans

aka IK - H/N/L Tickets - Intake Per Hour Last 12 Months L&R

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Priority
        (Includes only Normal, Low, High)
- Columns:
    1. Ticket Created (Hour)
        (Includes  Check all even DESELECT ALL as well)
- Filters used:
    1. Ticket Form
    1. Has Plan Ticket Tags -SSAT (Incl L&R)
- Custom Settings:
    1. This report shows Legend for Rows values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include only `L&R`.
    1. Ticket Created (Year) filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Total" is top on every column in Result Manipulation.

### Poor CSAT For L&R Breakdown per Month - All Plans

aka IK - Poor CSAT For L&R Breakdown Per Month

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: Count  (Bad Initial Satisfaction Rating)
- Rows:
    1. Ticket Satisfaction Reason
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Ticket Form
    1. Ticket Created - Year
    1. Ticket Satisfaction Reason
- Custom Settings:
    1. This report shows Legend for Row values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should include only `L&R`.
    1. Ticket Created - Year use Advanced Date Range settings i.e. "From beginning of" should have `13 Months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Total" shows on top of every column as well as in percentage in columns inside every month for every reason in Result Manipulation.

### Time To Resolve Escalated to Sales - Custom Metric Error (TTR)

### Reduced Effort Free Ratio - Takes way too long to load

### Intake Last 12 Months Free Plans - Per Ticket Form

aka IK - Intake Last 12 Months Free Plans - Per Ticket Form

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Form
        (Includes `Self-Managed`, `SaaS`. `SaaS Account`.)
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    1. Has Plan - Ticket Tags
- Custom Settings:
    1. This report shows Legend for Row values in top of chart configurable in Chart configuration.
    1. Has Plan - Ticket Tags  is a custom attribute and setting of Includes have `No Plan` checked.
    1. Ticket Created - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `13 months in the past` to "The end of" should have `1 month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Sum" is top on every bar as well as Totals for Rows inside every column in Result Manipulation.

### LK - Ops SSAT - Last 4 Weeks - Outdated Calc

### LK - Ops Total FRT SLA - Last 4 Weeks - Outdated Calc

### LK - Ops NRT SLA - Last 4 Weeks - Outdated Calc

### LK - Ops Incoming Tickets For Support Per Week

aka LK - Ops Incoming Tickets For Support Per Week

- Dataset used: Support ( Ticket )
- Visualization type: Column
- Metric used: Count (Tickets)
- Rows:
    1. Ticket Priority
    (Includes `Urgent`, `Normal`, `Low`, `High`.)
- Columns:
    1. Ticket created - Week of year
- Filters used:
    1. Ticket Form
- Custom Settings:
    1. This report shows Legend for Row values in top of chart configurable in Chart configuration.
    1. Ticket Form filter should includes `Support Ops` only.
    1. Ticket Created (Year) filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 weeks in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and have "Totals" at top of bars  in Result Manipulation.

### LK - Incoming Ops

aka LK - Incoming Ops

- Dataset used: Support ( Tickets )
- Visualization type: Column
- Metric used: D_Count (Tickets)
- Rows:
    1. Ticket Form
        (Includes `Support Ops` only.)
- Columns:
    1. Ticket Created - Year
    1. Ticket Created - Month
- Filters used:
    None
- Custom Settings:
    1. Ticket Created - Year filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and Count is shown inside every column in Result Manipulation.

### Ticket Type Ratio - Last 3 Months

aka IK - Ticket Type Ratio Per IC

- Dataset used: Support ( Ticket Updates )
- Visualization type: Table
- Metric used: /*D_Count (NTVT Matched Public Comment)*/
- Rows:
    1. Updater Name
        (You may want to exclude team members who left 3 months ago)
- Columns:
    1. Ticket Form
        (Includes `GitLab Dedicated`, `L&R`, `SaaS`, `SaaS Account`, `Self-Managed` only.)
- Filters used:
    1. Updater Tags
    1. Update - Month
- Custom Settings:
    1. NTVT Matched Public Comment is a custom metric.
    1. Updater Tags filter should only include current manager tags and exclude everything including director tags.
    1. Update - Month filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `3 months in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and "Percentage" is shown under every cell in Result Manipulation.

### Ticket Volume Target - Weighted Targets Met - Last Month

aka IK - FRT Replies Per Week Per IC - Targets Met - Last Month - Table

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: /*D_Count (Ticket FRT Targets - May 23)*/, /*D_Count (FRT Emergencies)*/
- Rows:
    None
- Columns:
    1. Updater Name
        (You may want to exclude team members who left a month ago)
- Filters used:
    1. Updater Tags
    1. Update - Date
    1. FRT
- Custom Settings:
    1. Ticket FRT Targets - May 23 and FRT Emergencies are custom metrics.
    1. Updater Tags filter should only include current manager tags and exclude everything including director tags.
    1. Update - Date filter was used and it use Simple Date Range settings i.e. `Last Month`
    1. FRT is a custom attribute and value of `FRT` should be selected only .
    1. Make sure report should have "Sort" type `A-Z` and "Sum" is shown in top of every column in Result Manipulation.
    1. Trendline is set at `Constant` with value `24` in Chart Configuration.

### Ticket Volume Target - Weighted Targets Met - 6 Months

aka IK - FRT Replies Per Week Per IC - Targets Met - 6 Months - Table

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: /*D_Count (Ticket FRT Targets - May 23)*/, /*D_Count (FRT Emergencies)*/
- Rows:
    None
- Columns:
    1. Updater Name
        (You may want to exclude team members who left 6 months ago)
- Filters used:
    1. Updater Tags
    1. Update - Date
- Custom Settings:
    1. Ticket FRT Targets - May 23 and FRT Emergencies are custom metrics.
    1. Updater Tags filter should only include current manager tags and exclude everything including director tags.
    1. Update - Date filter was used and it use Advanced Date Range settings i.e. "From beginning of" should have `6 months in the past` to "The end of" should have `1 Month in the past`.
    1. Make sure report should have "Sort" type `A-Z` and "Sum" is shown in top of every column in Result Manipulation.
    1. Trendline is set at `Constant` with value `24` in Chart Configuration.

### IK - FRT Replies Per Week - 12 Months

aka IK - FRT Replies Per Week - 12 Months

- Dataset used: Support ( Updates History )
- Visualization type: Column
- Metric used: /*D_Count (FRT Response)*/, /*D_Count (FRT Emergencies)*/
- Rows:
    1. Updater Name
        (You may want to exclude team members who left 12 months ago)
- Columns:
    1. Update - Year
    1. Update - Week of Year
- Filters used:
    1. Updater Tags
    1. Ticket Form
- Custom Settings:
    1. Ticket FRT Response and FRT Emergencies are custom metrics.
    1. Updater Tags filter should only include current manager tags and exclude everything including director tags.
    1. Ticket Form excludes `Billing`, `Professional Services` and `Security`.
    1. Update - Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `All History`.
    1. Updater Name is used as filter inside the report to select updater.
    1. Make sure report should have "Sort" type `A-Z` and "Sum" is shown in top of every column in Result Manipulation.

### IK - Public Updates - Main

aka IK - Public Updates - Main

- Dataset used: Support ( Updates History )
- Visualization type: Area
- Metric used: D_Count (Public Comments)
- Rows:
    1. Updater Name
        (You may want to exclude team members who left 12 months ago)
- Columns:
    1. Update - Year
    1. Update - Week of Year
- Filters used:
    1. Updater Tags
- Custom Settings:
    1. Updater Tags filter should only include current manager tags and exclude everything including director tags.
    1. Update - Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `All History`.
    1. Updater Name is used as filter inside the report to select updater.
    1. Make sure report should have "Sort" type `A-Z` and "Sum" is shown in top of every week in Result Manipulation.
    1. Trendline is set at `Linear` in Chart Configuration.

### IK - Internal Comments - Main

aka IK - Internal Comments - Main

- Dataset used: Support ( Updates History )
- Visualization type: Area
- Metric used: D_Count (Internal Comments)
- Rows:
    1. Updater Name
        (You may want to exclude team members who left 12 months ago)
- Columns:
    1. Update - Year
    1. Update - Week of Year
- Filters used:
    1. Updater Tags
- Custom Settings:
    1. Updater Tags filter should only include current manager tags and exclude everything including director tags.
    1. Update - Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `All History`.
    1. Updater Name is used as filter inside the report to select updater.
    1. Make sure report should have "Sort" type `A-Z` and "Sum" is shown in top of every week in Result Manipulation.
    1. Trendline is set at `Linear` in Chart Configuration.

### IK - Solved/Closed Tickets - Main

aka IK - Solved/Closed Tickets - Main

- Dataset used: Support ( Tickets )
- Visualization type: Area
- Metric used: Count (Tickets)
- Rows:
    1. Assignee Name
        (You may want to exclude team members who left 12 months ago)
- Columns:
    1. Ticket updated - Year
    1. Ticket updated - Week of Year
- Filters used:
    1. Assignee Tags
    1. Ticket Status
- Custom Settings:
    1. Ticket Status only includes `Solved` and `Closed` status.
    1. Assignee Tags filter should only include current manager tags and exclude everything including director tags.
    1. Ticket updated - Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `12 months in the past` to "The end of" should have `All History`.
    1. Assignee Name is used as filter inside the report to select updater.
    1. Make sure report should have "Sort" type `A-Z` and "Sum" is shown in top of every week in Result Manipulation.
    1. Trendline is set at `Linear` in Chart Configuration.

### Public Comments per Week

aka IK - Public Updates - Last 7 Weeks

- Dataset used: Support ( Updates History )
- Visualization type: Table
- Metric used: D_Count (Public Comments)
- Rows:
    1. Updater Name
        (You may want to exclude team members who left 12 months ago)
- Columns:
    1. Update - Week of Year
- Filters used:
    1. Updater Tags
- Custom Settings:
    1. Updater Tags filter should only include current manager tags and exclude everything including director tags.
    1. Update - Week of Year was used and it use Advanced Date Range settings i.e. "From beginning of" should have `6 weeks in the past` to "The end of" should have `All History`.
    1. Updater Name is used as filter inside the report to select updater.
    1. Make sure report should have "Sort" type `A-Z` and Total used Advanced Aggregators of "Sum" and "Avg" of `All columns` in Result Manipulation.

### Tickets Data 90 Days

aka IK - Solved Tickets 90 Days - Main

- Dataset used: Support ( Tickets )
- Visualization type: Table
- Metric used: Count (Solved Tickets), MED (First reply time (hrs)), /*MED (TTR)*/, MED (Requester wait time(hrs)), Count (Rated Satisfaction Ticket), Sum (% Satisfaction Score), Sum (% One-touch Tickets), Sum (% Two-touch Tickets), Sum (% Multi-touch Tickets)
- Rows:
    1. Assignee Name
        (You may want to exclude team members who left 12 months ago)
- Columns:
    None
- Filters used:
    1. Assignee Tags
    1. Ticket Solved - Date
- Custom Settings:
    1. TTR is a custom metric.
    1. Assignee Tags filter should only include current manager tags and exclude everything including director tags.
    1. Ticket Solved - Date was used and it use Advanced Date Range settings i.e. "From beginning of" should have `90 Days in the past` to "The end of" should have `All History`.
    1. Make sure report should have "Sort" type `A-Z` and there is no result manipulation.

## Custom Attributes and Metrics

### Custom Attributes

1. Created By GitLab Bot Agent:

    Type: Standard Calucated Attribute
    Formula:

    ```Text
    IF (INCLUDES_ANY([Ticket tags],"gitlab-361112","com_gitlab_354791"))
    THEN "Created By GitLab Bot Agent"
    ELSE "Regular Ticket"
    ENDIF
    ```

    Special settings: None

1. New Tier Split

    Type: Standard Calucated Attribute
    Formula:

    ```Text
    IF ([Gitlab Plan - Ordered]="Community") THEN "Community"
    ELIF (INCLUDES_ANY([Ticket tags],"consumption_only")) THEN "Consumption"
    ELIF ([SaaS Subscription]="com_sales_assisted_trial" OR [SaaS Subscription]="Sales Assisted Trial" OR [Self-Managed Subscription]="sm_sales_assisted_trial" OR [Self-Managed Subscription]="Sales Assisted Trial" OR (INCLUDES_ANY([Ticket tags],"saas_prospect_customer","sm_prospect_customer","com_sales_assisted_trial","sm_sales_assisted_trial")))
    THEN "Trial"
    ELIF(((INCLUDES_ANY([Requester organization tags],"silver","basic","starter","premium","gold","bronze","ultimate") AND [Free]="Paid")
    OR INCLUDES_ANY([Ticket tags],"%silver%","%basic%","%starter%","%premium%","%gold%","%bronze%","%ultimate%") AND [Free]="Paid") OR [Ticket form]="L&R")
    THEN "Licensed"
    ELIF(NOT INCLUDES_ANY([Requester organization tags],"silver","basic","starter","premium","gold","bronze","ultimate")
    OR [Free]="Free")
    THEN "Free"
    ELSE "Unknown"
    ENDIF
    ```

    Special settings: None

1. EDU

    Type: Standard Calucated Attribute
    Formula:

    ```Text
    IF (INCLUDES_ALL([Ticket tags], "%edu_account_inquiries__pass_to_edu_%"))
    THEN "EDU"
    ELSE "Not EDU"
    ENDIF
    ```

    Special settings: None

1. Has Plan Ticket Tags -SSAT (Incl L&R):

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF(INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate")
    OR [Ticket form]="L&R")
    THEN "Has Plan + L&R"
    ELSE "No Plan"
    ENDIF
    ```

    Special settings: None

1. 2FA

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (NOT INCLUDES([Ticket tags], ARRAY("%autoresponder_2fa%"))) THEN
    "Not 2FA"
    ELSE
    "2FA Ticket"
    ENDIF
    ```

    Special settings: None

1. Has Plan - Ticket Tags:

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF(INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate"))
    THEN "Has Plan"
    ELSE "No Plan"
    ENDIF
    ```

    Special settings: None

1. Plan Tags - Ticket Tags:

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF(INCLUDES_ANY([Ticket tags],"ultimate"))
    THEN "Ultimate"
    ELIF(INCLUDES_ANY([Ticket tags],"premium"))
    THEN "Premium"
    ELIF(INCLUDES_ANY([Ticket tags],"basic","starter"))
    Then "Basic"
    ELIF(INCLUDES_ANY([Ticket tags],"gold"))
    THEN "Gold"
    ELIF(INCLUDES_ANY([Ticket tags],"silver"))
    THEN "Silver"
    ELIF(INCLUDES_ANY([Ticket tags],"bronze"))
    THEN "Bronze"
    ELSE "Unknown"
    ENDIF
    ```

    Special settings: None

1. Duplicate Ticket

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES([Ticket tags], ARRAY("closed_by_merge"))) THEN
    "Duplicate"
    ELSE
    "Not Duplicate"
    ENDIF
    ```

    Special settings: None

1. Follow-up Ticket

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES([Ticket tags], ARRAY("followup_ticket"))) THEN
    "Follow-up Ticket"
    ELSE
    "Not Follow-up Ticket"
    ENDIF
    ```

    Special settings: None

1. Reduced Effort Total - May 2022

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (NOT INCLUDES_ANY([Ticket tags], ARRAY("autoclose-2fa-free","autoclose_2fa_free")))
    AND NOT INCLUDES_ALL([Ticket tags], ARRAY("email_suppression_autochecked","free_customer"))
    AND NOT INCLUDES_ANY([Ticket tags], ARRAY("autoresponder_free_tickets","auto_reply_free_plan"))
    AND NOT INCLUDES_ANY([Ticket tags], ARRAY("agent_identified_free_user"))
    AND NOT INCLUDES([Ticket tags], ARRAY("autowork_forgot_password"))
    AND NOT INCLUDES([Ticket tags], ARRAY("autowork_no_confirmation_email"))
    AND NOT INCLUDES([Ticket tags], ARRAY("%autowork_account_blocked%"))
    AND NOT INCLUDES([Ticket tags], ARRAY("autoreply_prospect_free"))
    AND NOT INCLUDES([Ticket tags], ARRAY("autoreply_saas_free"))
    THEN "Regular Tickets"
    ELSE "Reduced Effrot Tickets"
    ENDIF
    ```

    Special settings: None

1. Verification failed

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES_ALL([Ticket tags], ARRAY("verification_requested","stage-needsorg"))
    AND NOT (INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate"))
    AND [Ticket form]!="L&R") THEN
    "Verification reqeust failed"
    ELSE
    "No Verification reqeust failed"
    ENDIF
    ```

    Special settings: None

1. Remove prefix_solve_issue_20220516 for TTR

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES([Ticket tags], ARRAY("prefix_solve_issue_20220516"))) THEN
    "TTR unknown"
    ELSE
    "TTR known"
    ENDIF
    ```

    Special settings: None

1. Plan - Support costs adjusted 2021/10

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES_ANY([Ticket tags],"consumption_only")) THEN "Consumption"
    ELIF((NOT INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate") AND ([Ticket form]="SaaS Account"))) THEN "Free Account"
    ELIF ([SaaS Subscription]="com_sales_assisted_trial" OR [SaaS Subscription]="Sales Assisted Trial" OR [Self-Managed Subscription]="sm_sales_assisted_trial" OR [Self-Managed Subscription]="Sales Assisted Trial") THEN "Sales asisted trial"
    ELIF(INCLUDES_ANY([Ticket tags],"priority_prospect")) THEN "Priority Prospect"
    ELIF([Ticket form]="L&R" AND NOT (INCLUDES_ALL([Ticket tags],"%edu_account_inquiries__pass_to_edu_%"))) THEN "L&R"
    ELIF(NOT INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate") AND ([Ticket form]="Self-Managed") OR (INCLUDES_ALL([Ticket tags],"%edu_account_inquiries__pass_to_edu_%")))THEN "Core"
    ELIF(NOT INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate") AND ([Ticket form]="SaaS")) THEN "Free SaaS"
    ELIF(INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate") AND ([Ticket form]="SaaS Account")) THEN "Paid Account"
    ELIF(INCLUDES_ANY([Ticket tags],"ultimate")) THEN "Ultimate"
    ELIF(INCLUDES_ANY([Ticket tags],"premium")) THEN "Premium"
    ELIF(INCLUDES_ANY([Ticket tags],"basic","starter"))THEN "Basic"
    ELIF(INCLUDES_ANY([Ticket tags],"gold")) THEN "Gold"
    ELIF(INCLUDES_ANY([Ticket tags],"silver")) THEN "Silver"
    ELIF(INCLUDES_ANY([Ticket tags],"bronze")) THEN "Bronze"
    ELIF([Ticket form]="Other") THEN "Other"
    ELSE "Unknown"
    ENDIF
    ```

    Special settings: None

1. Created By Agent

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES_ANY([Ticket tags],"created_by_agent"))
    THEN "Created By Agent"
    ELSE "Not Created By Agent"
    ENDIF
    ```

    Special settings: None

1. Custom plan remove

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES([Ticket tags], ARRAY("custom")))
    THEN "Custom Plan"
    ELSE "All Else"
    ENDIF
    ```

    Special settings: None

1. Validation License Failed

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES([Ticket tags], ARRAY("%autoclose_nonapproved_users%")))
    THEN "Validation Failed"
    ELSE "All Else"
    ENDIF
    ```

    Special settings: None

1. Duplicate Tickets

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (INCLUDES([Ticket tags], ARRAY("closed_by_merge"))) THEN
    "Duplicate"
    ELSE
    "Not Duplicate"
    ENDIF
    ```

    Special settings: None

1. Comment touch

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF (VALUE(Agent replies) <2)
    THEN "One-touch"
    ELSE "Multi-touch"
    ENDIF
    ```

    Special settings: None

1. Unassigned

    Type: Standard Calculated Attribute
    Formula:

    ```text
    IF([Assignee name]=NULL)
    THEN
    "Un"
    ELSE
    "As"
    ENDIF
    ```

    Special settings: None

1. FRT

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Changes - Field name]="Ticket Stage"
    AND [Changes - Previous value]="stage-frt"
    AND [Changes - New value]="stage-nrt")
    THEN
    "FRT"
    ELSE
    "NRT"
    ENDIF
    ```

    Special settings: None

### Custom Metrics

1. % Achieved SLA tickets - 100% View:

    Type: Standard Calucated Metric
    Formula:

    ```Text
    (SUM(Achieved SLA tickets)/(SUM(Achieved SLA tickets)+D_COUNT(Breached SLA tickets)))*100
    ```

    Special settings: None

1. SM Ticket Count:

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF IN([Ticket form], ARRAY(
    "Self-Managed",
    "Other Request",
    "GitLab Community Edition (CE)")
    )THEN [Ticket ID] ENDIF
    ```

    Special settings: None

1. .com Ticket Count

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF IN([Ticket form], ARRAY(
    "SaaS",
    "GitLab Hosted (GitHost.io)",
    "SaaS Account")) THEN [Ticket ID] ENDIF
    ```

    Special settings: None

1. L&R Ticket Count (w/o Internal)

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF (([Ticket form] = "L&R")
    AND (NOT INCLUDES_ALL([Ticket tags],"lnr_internal_request")))
    THEN
    [Ticket ID]
    ENDIF
    ```

    Special settings: None

1. L&R Internal Ticket Count

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF (INCLUDES_ANY([Ticket form],"L&R")
    AND (INCLUDES_ANY([Ticket tags],"lnr_internal_request")))
    THEN [Ticket ID] ENDIF
    ```

    Special settings: None

1. Ops Ticket Count

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket form] = "Support Ops")
    THEN
    [Ticket ID]
    ENDIF
    ```

    Special settings: None

1. Achieved SLA % - Fix

    Type: Standard Calucated Metric
    Formula:

    ```Text
    SUM(Achieved SLA tickets)/(SUM(Achieved SLA tickets)+D_COUNT(Breached SLA tickets))
    ```

    Special settings: None

1. Free Reduced Effort - May/2023

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF (INCLUDES_ANY([Ticket tags], ARRAY("autoclose-2fa-free","autoclose_2fa_free")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("email_suppression_autochecked","free_customer")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("autoresponder_free_tickets","auto_reply_free_plan")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("agent_identified_free_user")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("verification_requested","stage-needsorg")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("autowork_account_blocked")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("autowork_no_confirmation_email")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("autowork_forgot_password")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("autoreply_saas_free")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("autoreply_prospect_free")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("close_unmonitored_inbox")))
    OR (INCLUDES_ANY([Ticket tags], ARRAY("autoclose_namesquatting_free")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("autoclose_security")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("autoresponder_gdpr")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("autoclose_sm_free")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("closed_unassociated_ticket")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("saas_account_access_issues_locked")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("submitted_via_gitlab_email")))
    OR (INCLUDES_ALL([Ticket tags], ARRAY("autoclose_nonapproved_users")))
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings: None

1. All Free

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF (NOT INCLUDES_ANY([Ticket tags],"silver","basic","starter","premium","gold","bronze","ultimate"))
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings: None

1. Reduction Effort %

    Type: Standard Calucated Metric
    Formula:

    ```Text
    (D_COUNT(Free Reduced Effort - May/2023)/D_COUNT(All Free))*100
    ```

    Special settings: None

1. RWT Minus On-Hold

    Type: Standard Calucated Metric
    Formula:

    ```Text
    VALUE(Requester wait time (hrs))-VALUE(On-hold time (hrs))
    ```

    Special settings: None

1. TTR

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF (INCLUDES([Ticket tags], ARRAY("autosolve_ticket"))) THEN
    VALUE(Full resolution time - Business hours (min))/60 - 168
    ELIF (INCLUDES([Ticket tags], ARRAY("autosolve"))) THEN
    VALUE(Full resolution time - Business hours (min))/60 - 480
    ELIF (INCLUDES_ALL([Ticket tags], ARRAY("pending_followup_notification","ticket_autosolve"))) THEN
    VALUE(Full resolution time - Business hours (min))/60 - 336
    ELSE
   VALUE(Full resolution time - Business hours (min))/60
    ENDIF
    ```

    Special settings: None

1. Total linked

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] ="linked-to-mr" OR [Ticket tags] ="linked-to-issue"
    OR [Ticket tags] = "linked-to-docs" OR [Ticket tags] ="linked-to-hb")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings: Check `Compute Seperately`

1. % Total linked

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Total linked) / D_COUNT(Solved tickets) * 100
    ```

    Special settings: None

1. % Linked docs

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Linked docs) / D_COUNT(Solved tickets) * 100
    ```

    Special settings: None

1. Linked docs

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] = "linked-to-docs")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. Linked docs - Private

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] = "linked-to-docs-private")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. % Linked MR

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Linked MR) / D_COUNT(Solved tickets) * 100
    ```

    Special settings: None

1. Linked MR

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] ="linked-to-mr")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. Linked MR - Private

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] ="linked-to-mr-private")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. % Linked Issues

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Linked Issues) / D_COUNT(Solved tickets) * 100
    ```

    Special settings: None

1. Linked Issues

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] ="linked-to-issue")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. Linked Issues - Private

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] ="linked-to-issue-private")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. % Linked HB

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Linked Handbook) / D_COUNT(Solved tickets) * 100
    ```

    Special settings: None

1. Linked Handbook

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] ="linked-to-hb")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. Linked Handbook - Private

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket tags] ="linked-to-hb-private")
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. One-Touch Ticket Ratio

    Type: Standard Calucated Metric
    Formula:

    ```Text
    (D_COUNT(One-touch tickets)/D_COUNT(Tickets))*100
    ```

    Special settings:  None

1. Rated VS Tickets in %

    Type: Standard Calucated Metric
    Formula:

    ```Text
    (COUNT(SSAT Form)+COUNT(Rated satisfaction tickets))/COUNT(Surveyed satisfaction tickets)
    ```

    Special settings:  None

1. SSAT Form

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF (CONTAINS([Ticket tags],"satisfaction"))
    THEN [Ticket ID]
    ENDIF
    ```

    Special settings:  None

1. No Problem Type - .COM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket form]="SaaS")
    AND ([SaaS Problem Type]=NULL)
    THEN [Ticket ID] ENDIF
    ```

    Special settings:  Check `Compute Seperately`

1. No Problem Type - SM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket form]="Self-Managed")
    AND  ([Self-managed Problem Type]=NULL)
    Then [Ticket ID] ENDIF
    ```

    Special settings:  Check `Compute Seperately`

1. No Problem Type - L&R

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket form]="L&R")
    AND  ([Transactions Issue Type]=NULL)
    Then [Ticket ID] ENDIF
    ```

    Special settings:  Check `Compute Seperately`

1. No Problem Type - Accounts SaaS

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket form]="SaaS Account")
    AND ([SaaS Account Problem Type]=NULL)
    THEN [Ticket ID] ENDIF
    ```

    Special settings: Check `Compute Seperately`

1. Unassigned

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Assignee name]=NULL)
    THEN
    [Ticket ID]
    ENDIF
    ```

    Special settings: None

1. Assigned

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Assignee name]!=NULL)
    THEN
    [Ticket ID]
    ENDIF
    ```

    Special settings: None

1. Assignment Ratio

    Type: Standard Calucated Metric
    Formula:

    ```Text
    100-((D_COUNT(Unassigned - Update)/D_COUNT(Assigned - update))*100)
    ```

    Special settings: None

1. Unassigned - Update

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Assignee name]=NULL)
    THEN
    [Update ID]
    ENDIF
    ```

    Special settings: None

1. Assigned - update

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Assignee name]!=NULL)
    THEN
    [Update ID]
    ENDIF
    ```

    Special settings: None

1. Region - EMEA

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Updater tags]="tom_atkins" OR [Updater tags]="tine_sørensen"
    OR [Updater tags]="ilia_kosenko" OR [Updater tags]="john_lyttle"
    OR [Updater tags]="rebecca_spainhower")
    THEN [Update ID]
    ENDIF
    ```

    Special settings: None

1. Region - APAC

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Updater tags]="wei-meng_lee" OR [Updater tags]="viji_rao"
    OR [Updater tags]="jane_gianoutsos")
    THEN [Update ID]
    ENDIF
    ```

    Special settings: None

1. Region - US

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Updater tags]="aric_buerer" OR [Updater tags]="izzy_fee"
    OR [Updater tags]="james_lopes" OR [Updater tags]="michael_dunninger"
    OR [Updater tags]="ronnie_alfaro")
    THEN [Update ID]
    ENDIF
    ```

    Special settings: None

1. SLA % achieved last week

    Type: Date Range Calucated Metric
    Original Metric: % Achieved SLA Targets
    Defined on: SLA Update
    Date Range: Advanced Date Range settings i.e. "From beginning of" should have `1 week in the past` to "The end of" should have `1 week in the past`.
    Repeat Pattern: Yesterday

1. SLA % achieved this week

    Type: Date Range Calucated Metric
    Original Metric: % Achieved SLA Targets
    Defined on: SLA Update
    Date Range: Simple Date Range settings i.e. `This Week`.
    Repeat Pattern: None

1. Public Comments - Agent

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Comment present] = TRUE AND [Comment public] = TRUE)
    AND NOT ([Updater role]="End-user")
    THEN [Update ID]
    ENDIF
    ```

    Special settings: None

1. Baseline Public Comments SM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Public Comments - Agent)/(53*0.85)*0.85
    ```

    Special settings: None

1. Public Comments AVG SM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Public Comments - Agent)/(53*0.85)
    ```

    Special settings: None

1. Internal Comments - Agent

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Comment present] = TRUE AND [Comment public] = FALSE)
    AND NOT ([Updater role]="End-user")
    THEN [Update ID]
    ENDIF
    ```

    Special settings: None

1. Baseline Internal Comments SM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Internal Comments - Agent)/(53*0.85)*0.85
    ```

    Special settings: None

1. Avrage Internal Comments SM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Internal Comments - Agent)/(53*0.85)
    ```

    Special settings: None

1. Baseline Solved SM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Tickets solved)/(53*0.85)*0.85
    ```

    Special settings: None

1. Solved AVG SM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Tickets solved)/(53*0.85)
    ```

    Special settings: None

1. Baseline Public Comments .COM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Public Comments - Agent)/(35*0.85)*0.85
    ```

    Special settings: None

1. Public Comments AVG .COM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Public Comments - Agent)/(35*0.85)
    ```

    Special settings: None

1. Baseline Internal Comments .COM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Internal Comments - Agent)/(35*0.85)*0.85
    ```

    Special settings: None

1. Avrage Internal Comments .COM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Internal Comments - Agent)/(35*0.85)
    ```

    Special settings: None

1. Baseline Solved .COM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Tickets solved)/(35*0.85)*0.85
    ```

    Special settings: None

1. Solved AVG .COM

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Tickets solved)/(35*0.85)
    ```

    Special settings: None

1. Baseline Public Comments L&R

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Public Comments - Agent)/(9*0.85)*0.85
    ```

    Special settings: None

1. Public Comments AVG L&R

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Public Comments - Agent)/(9*0.85)
    ```

    Special settings: None

1. Baseline Internal Comments L&R

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Internal Comments - Agent)/(9*0.85)*0.85
    ```

    Special settings: None

1. Average Internal Comments L&R

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Internal Comments - Agent)/(9*0.85)
    ```

    Special settings: None

1. Baseline Solved L&R

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Tickets solved)/(9*0.85)*0.85
    ```

    Special settings: None

1. Solved AVG L&R

    Type: Standard Calucated Metric
    Formula:

    ```Text
    D_COUNT(Tickets solved)/(9*0.85)
    ```

    Special settings: None

1. NTVT Matched Public Comment

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket form] = "Self-Managed") THEN
     D_COUNT(Public comments) * 1
    ELIF ([Ticket form] = "SaaS") THEN
     D_COUNT(Public comments) * 0.85
    ELIF ([Ticket form] = "SaaS Account") THEN
     D_COUNT(Public comments)* 0.75
    ELIF ([Ticket form] = "L&R") THEN
     D_COUNT(Public comments)* 0.25
    ELSE
     D_COUNT(Public comments) * 1
    ENDIF
    ```

    Special settings: None

1. Ticket FRT Targets - May 23

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Ticket form] = "Self-Managed") THEN
     D_COUNT(FRT Response) * 1
    ELIF ([Ticket form] = "SaaS") THEN
     D_COUNT(FRT Response) * 0.85
    ELIF ([Ticket form] = "SaaS Account") THEN
     D_COUNT(FRT Response) * 0.75
    ELIF ([Ticket form] = "L&R") THEN
     D_COUNT(FRT Response) * 0.25
    ELSE
     D_COUNT(FRT Response) * 1
    ENDIF
    ```

    Special settings: None

1. FRT Emergencies

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Comment present]=TRUE AND [Comment public]=TRUE
    AND [Ticket form]="Emergencies"
    AND DATE_FIRST_FIX([Update - Timestamp],[Update ticket ID],[Comment present],[Comment public])=[Update - Timestamp])
    THEN [Update ID]
    ENDIF
    ```

    Special settings: None

1. FRT Response

    Type: Standard Calucated Metric
    Formula:

    ```Text
    IF ([Changes - Field name]="Ticket Stage"
    AND [Changes - Previous value]="stage-frt"
    AND [Changes - New value]="stage-nrt")
    THEN [Update ID]
    ENDIF
    ```

    Special settings: None
