---
title: Compensation Review Cycle Inputs
description: "On this page, we explain how we review our Compensation Calculator in preparation for the Compensation Review Cycle."
---

## Introduction

On this page, we explain how we review our Compensation Calculator in preparation for the Compensation Review Cycle.

## Duties and Responsibilities

The Total Rewards team and People Business Partners both play a vital role in ensuring the success of Annual Compensation Review. The Total Rewards team handles more of the "big picture" company-wide in the set up and administration of Annual Compensation Review while the People Business Partners take on more of the "details" related to their division.

### Total Rewards

The Total Rewards team is responsible for setting up Annual Compensation Review, analytics, audits, and general communication. This includes (but is not limited to):

- Ensuring all analyses (below) are created on time and all data inputs are reviewed and refreshed for the next Fiscal Year.
- Setting up Compaas with eligible team members, managers, and approvers. Determining minimum recommended increases and loading these into Compaas. Providing Compaas with each team member's benchmark % increase, location factor % increase, and suggested increase parameters according to their performance factor.
- Communicating timelines, what process is taking place, instructions, and deadlines to all relevant team members.

### People Business Partners

People Business Partners work with their teams to address any problems, help the Total Rewards team with communications, and help their team/executive review Compaas and any analyses that are created. This can include (but not limited to):

- Reviewing any concerns highlighted from the Total Rewards team during audits with their executive and determining with them the best course of action.
- Reviewing and editing communications to be sent out in order to reduce anticipated questions or confusion. They also assist with following up with team members where action is needed; for example, if a manager hasn't gone into Compaas yet and the deadline is approaching.
- Working with their teams to stay in budget.
- Managing departmental review processes and timelines to meet the overall company timeline.

## Analyses created for Annual Compensation Review

### Benchmarking Review

Benchmarking review is an internal process completed by the Total Rewards team to determine any adjustments to role benchmarks for the next FY which is completed in November.

#### Process

1. Create a copy of the `Benchmarking Analysis` sheet for the upcoming FY.
1. Ensure all job codes from the `Job Codes` sheet are in the `Benchmarking Analysis` and pull in updated Radford and Comptryx job codes.
1. Refresh the Radford and Comptryx survey tabs with the most recent data available.
1. Ensure the IC, Manager, Director, and Sales benchmark tabs have been updated with our currently used job codes.
1. Ensure formulas are in place for each row of the "Radford/Comptryx Job Codes" tab and that the median of the 50th and 75th are properly pulling into the benchmarks tabs.
1. Use the `Job Codes` sheet to refresh the current FY21 benchmarks. Compare our current benchmarks to the median of the 50th and 75th of the survey data (depending on the role) and make any recommendations based on market fluctuations.
1. Once the new benchmarks are reviewed and approved, these are updated in the [handbook](https://gitlab.com/gitlab-com/people-group/peopleops-eng/compensation-calculator/-/blob/master/data/job_families.yml).

### Location Factor Review

The location factor review is an internal process completed by the Total Rewards team to determinate any adjustments to location factors for the next FY which is completed in November.

#### Process

1. Create a copy of the `Location Factor Review` sheet for the upcoming FY.
1. Ensure all location factors, including ones added throughout the year and ones marked for further review, have been added to the analysis.
1. [Pull in refreshed data]({{< ref "compensation-review-cycle#pulling-survey-data-and-matching" >}}) for all data sources: ERI, Robert Half, Dice, Radford, and Comptryx.
   1. Check these resources for new matches to our location factors and pull data for all available metros.
1. Using the refreshed data, compare the new data to our current location factors for fluctuations noting that we will not decrease a location factor.
    1. Analyze the average data for all locations in a geographical region to determine the location factor for that geographical region.
    1. Analyze all data for metro areas and countries separately to determine which metro areas and countries will need to be separated from the location factor determined for the geographical region.
    1. If the formula is overwritten, notate the reasoning why.
1. Once the new locations factors are reviewed and approved, these are updated in the [handbook](https://gitlab.com/gitlab-com/people-group/peopleops-eng/compensation-calculator/-/blob/main/data/location_factors.yml).

*Note*: Please note that a change in location factor does not imply a change in compensation.

##### Pulling Survey Data and Matching

**ERI**

1. Log in to [ERI](https://online.erieri.com/account/login?returnurl=/). Login details are stored in 1Password.
1. Navigate to the Geographic Assessor.
1. Navigate to the Comparison List - Cost of Labor tab.
1. Set salary levels to $100,000 and $150,000.
1. Select all locations by clicking Add Location and adding all locations to your current list. This may need to be broken up into different lists to comply with ERI's list limits.
1. Download the excel file for all locations and add to the `Location Factor Review` sheet in the ERI tab.
1. Pull in the previously matched GitLab localities from the previous year's location factor review into the ERI tab.
1. On the Analysis tab, review locations without a match to ERI to see if there is now a match on the ERI tab.
    1. For cities, only add the exact match, not everything that would fall into the locality. For example, for San Francisco, California, I would match it to San Francisco in ERI's data set, but not Oakland. If two cities are listed in GitLab's locality, for example Berlin/Leipzig, Germany, match to both cities if available in the data.
    1. For All and Everywhere Else localities, for example All,  Nigeria or Everywhere else, Netherlands, match to the state/province/country average data. Everywhere Else data will be deflated in the analysis to account for the metro area being included in the state/province/country average.

**Robert Half**

1. Download the salary guide from each country Robert Half operates in. The list of countries Robert Half operates in and their respective websites where you can download the salary guide are located [here](https://www.roberthalf.net/).
1. Information from Robert Half has to be manually pulled out of their PDFs to our sheet.
    1. For the US and Canada, enter the location differential to the right of each location in the Robert Half tab. Create a new line for each location that isn't currently captured and match it to our data if we have the location as a locality.
    1. For locations in other countries, the salaries by role will need to be compared between the country being reviewed and the US. The San Francisco differential reported by Robert Half should be applied to the salaries for the US and used to calculate a differential to the salary guides in other countries.
1. Once differentials have been calculated for each global location, any new locations that do not currently have a match to one of GitLab's localities should be matched.

**Dice**

1. Download the most recently published [Dice Technology Salary Report](https://techhub.dice.com/Dice-2020-Tech-Salary-Report.html).
1. Information from Dice has to be manually pulled out of their PDF to our sheet.
1. Add the salaries for each city and state reported by Dice to the Dice tab, adding a new line for any new cities or states.
1. Match any Dice locations to the corresponding GitLab locality, if applicable.

**Radford**

1. Log in to [Radford](https://radford.aon.com/).
1. Navigate to the Data tab and then the Market Queries tab on the Data tab.
1. Select a location in the Query dropdown that corresponds to the tabs in the `Radford Data` sheet for both the Global Technology Survey and Global Sales Survey. In the Select Jobs dropdown, select All Jobs. In the Data Elements dropdown, select ACR. Click Save & Run. Navigate to the reports tab to download once the report has finished running. Note that more than one report can be run at a time.
1. Repeat these steps until all tabs have been refreshed.
1. Once all locations that were used last year have been refreshed, check for new locations by opening any query, select Add A Breakout, select a country, and use the Region/City dropdown to see if there are any new locations.
1. If there are new locations, they should be added as a separate query. To do this, in the Select a Query dropdown select Create New Query. Name the Query after the location. You'll want to complete these steps for both the Global Technology Survey and Global Sales Survey. Again, select Add A Breakout, select the country, and in the Region/City dropdown select the place you added as the Query name. Name the breakout after the location as well. Click save and follow the steps from step 3 to run the report.
1. Once the report is downloaded, add this to the corresponding tab in the `Radford Data` sheet, combining the Global Tech and Sales Surveys.
1. On the SF tab, scroll all of the way to the right and add two new columns for each new location. Copy the formulas from two other columns and update the vlookup to reference the correct location for these columns.
1. Add the new location(s) to the Location Factors tab and take the average of the location's factor column in the SF tab.
1. Match the new location(s) to a GitLab locality in this tab as well as any location that haven't previously been matched, if applicable.

**Comptryx**

1. Log in to [Comptryx](https://comptryx.mercer.com/).
1. Click Global Pay in the upper right.
1. In the Select Population box, select all individual levels (ie P3, not P14) in the Selected Levels dropdown. Select all 3-letter functions in the Select Functions dropdown. Select all Metros and Countries in the Selected Locations dropdown.
1. Select Data Extract at the top. Under Select Pay Elements, check off Total Cash - Tgt (NA). Under Select Statistics, check off 50th %'ile and 75th %'ile. Select to include only market data. Submit the report. If the report freezes your computer, break it up into smaller chunks such as by pulling data by continent.
1. Import the report into the Comptryx - Data tab of the `Comptryx Data` sheet.
1. Add any new locations as a new column in the Analysis tab and apply the same formula from previous columns. Also add any new locations to the Location Factor tab at the bottom and drag down the formula.
1. Match the new location(s) to a GitLab locality in this tab as well as any location that haven't previously been matched, if applicable.

## Underrepresented Group Audit

The Total Rewards team will run an audit twice throughout the Compensation Review Process to review any statistically relevant bias for underrepresented groups: after the Performance Factor submissions (December) to review distribution of performance ratings and after Manager Review (January) to review the distribution of discretionary increase allocations.

This analysis will be conducted at the department level, for each department leader to review, as well as all other indirect leaders up to the e-group level. The executive of each division as well as their People Business Partner will address any concerns with the performance factors or discretionary increase allocations submitted across their division.

### Process

The Total Rewards Team will audit with the following data breakdowns (as aligned in our [Identity Data Metrics](/handbook/company/culture/inclusion/identity-data/)):

- Ethnicity (only in the United States as we work on adding globally relevant [ethnicity categories to BambooHR](https://gitlab.com/gitlab-com/people-group/dib-diversity-inclusion-and-belonging/diversity-and-inclusion/-/issues/347) for self-identification)
- Tenure
- Gender (as self reported in BambooHR)
- Geographic Region
- [Grade]({{< ref "compensation-calculator#gitlab-job-grades" >}})

The Total Rewards team has created a template to automatically sync for each department leader, indirect manager, and overall e-group leader by adding the information submitted into a master file for increased efficiency in data analysis.

#### People Business Partner Action Required

The People Business Partner should familiarize themself with the output of this analysis and what has been flagged. They will review any issues that have been flagged with the leader of their division and advise Total Rewards of any changes.

## Minimum Market Increase

This will calculate the minimum amount necessary to ensure the team member is in range and will be loaded into Compaas as the minimum recommended increase from the Total Rewards team and is finalized before the cyle opens for annual compensation review.

### Process

1. Utilizing the `Comp Data Analysis and Modeling` sheet template, create a new report with all Annual Compensation Review eligible team members.
1. Overwrite their Location Factor and Benchmark with the updated inputs.
1. Create a column that flags anyone with a compa ratio below 0.8 and another column that outputs how much they would need to be increased to fall into range.
1. Create a copy of this report for each division for People Business Partners to review and create a report for Compaas to upload using their template.

### People Business Partner Action Required

Review and flag any concerns or possible data errors to the Total Rewards team.
