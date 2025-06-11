---
title: "Headcount Metrics and Processes"
description: "Public Company Headcount Metrics and Processes"
---

## Public Company Headcount Metrics and Processes

**Ending Headcount**: As a public company, GitLab forecasts Ending Headcount on a monthly, quarterly, and annual basis. This metric is what headcount-related expenses and our investor guidance are based on, so it is mission-critical to get accurate. Underlined key terminology and a full list of terms are defined below.

### Forecasted Ending Headcount is calculated as

1. Begin with <ins>Ending Headcount</ins> from previous period
1. Increase by: <ins>Gross Known Future Starts</ins> in period
1. Increase by: <ins>Gross Forecasted Future Starts</ins> in period
   - Gross Forecasted Future Starts include <ins>Offers Outstanding<ins>
1. Increase by: <ins>Attrition Backfills<ins> in period
   - Attrition Backfills are assumed not to be filled until the following quarter. As a result, the Ending Headcount is decreased in the current quarter due to Attrition. In all quarters following the current quarter, Attrition Backfills from the previous quarters are assumed to be filled, and the number of Attrition Backfill positions is equal to Attrition for the previous quarter.
1. Decrease by: <ins>Total Attrition<ins> applied to the previous quarter's ending headcount
   - Component 1 - <ins>Known Attrition<ins>: Remove any known attrites from prior period Ending Headcount
   - Component 2 - <ins>Forecasted Attrition<ins>: Using a 5% hypothetical quarterly attrition assumption for example purposes, back into the Forecasted Attrition assumption (e.g., if 3% is already Known Attrition, then adjust the Forecasted Attrition input to 2% to reflect the remaining portion expected to churn)
      - If attrition is more/less than expected in M1 and/or M2 of the quarter, the Forecasted Attrition Assumption is adjusted to solve back to the hypothetical 5% Total Attrition for the quarter
1. Decrease by: <ins>Internal Hires<ins> in period
1. Example – Q1 Ending Headcount → Q2 Ending Headcount:
   - 100 Q1 Ending Headcount
   - Increase by: 7 Gross Known Future Starts
   - Increase by: 14 Gross Forecasted Future Starts
   - Increase by: 0 Attrition Backfills (filled in following quarter)
   - Decrease by: 1 Known Attrites
   - Decrease by: 4 Forecasted Attrites (solve)
      - 100 Q1 Ending Headcount * 5% hypothetical quarterly attrition = 5 Total Attrites
      - 5 Total Attrites - 1 Known Attrite = 4 Forecasted Attrites
   - = 114 Q2 Ending Headcount

1. Each period, FP&A and TA will align on the Ending Headcount figure as part of the quarterly forecast lock.

### Key terminology used in Ending Headcount Calculation

1. **Total Starts**: Team members who have started their employment, accepted an offer, or are expected to start their employment within a specified period including Attrition Backfills.
   - <ins>Total Starts</ins> = <ins>Actual Starts</ins> + <ins>Total Future Starts</ins>, where:
      - <ins>Total Future Starts</ins> = <ins>Known Future Starts</ins> + <ins>Forecasted Future Starts</ins>.
   - **Total Net New Starts**: <ins>Total Starts</ins> excluding <ins>Internal Hires</ins>.
   - **Total Gross Starts**: <ins>Total Starts</ins> including <ins>Internal Hires</ins>.

   <ins>Total Net New Starts</ins> is the largest variable component of the movement in the Ending Headcount forecast. In order to accurately forecast Ending Headcount, <ins>Total Net New Starts</ins> must be accurately estimated. At the beginning of the quarter, FP&A and TA work with business partners to set realistic expectations related to the number of <ins>Total Net New Starts</ins> in a quarter. Through the [Triad Process](/handbook/hiring/talent-acquisition-framework/triadprocess/) as well as the [Interlock Process](/handbook/finance/financial-planning-and-analysis/#finance-business-partners--talent-acquisition-managers-forecast-interlock) between FP&A and TA, GitLab tracks the movement of estimated <ins>Total Net New Starts</ins> throughout the quarter to ensure understanding and implementation of the most up-to-date view of forecasted headcount-related expenses.

1. **Actual Starts**: Team members who have begun their employment at GitLab within a specified period including Attrition Backfills. These team members are included in the Active Personnel sheet in Adaptive.
   - **Net New Actual Starts**: Starts excluding Internal Hires.
   - **Gross Actual Starts**: Starts including Internal Hires.

1. **Total Future Starts**: Team members who have either accepted an offer or are expected to start their employment within a future specified period including Attrition Backfills.
   - Total Future Starts = Known Future Starts + Forecasted Future Starts.
   - **Total Net New Future Starts**: Total Starts excluding Internal Hires.
   - **Total Gross Future Starts**: Total Starts including Internal Hires.

1. **Known Future Starts**: Team members who have accepted offers to start employment, but have not yet started, within a specified period including Attrition Backfills.
      - **Net New Known Future Starts**: Known Starts excluding Internal Hires.
      - **Gross Known Future Starts**: Known Starts including Internal Hires.

1. **Forecasted Future Starts**: Team members who are expected to begin day one of their employment at GitLab within a specified period but have not accepted an offer (i.e., must not be counted as a Known Future Start) including Attrition Backfills. Forecasted Future Starts includes Offers Outstanding.
      - **Net New Forecasted Future Starts**: Future Starts excluding Internal Hires.
      - **Gross Forecasted Future Starts**: Future Starts including Internal Hires.

1. **Offers Outstanding**: Candidates who have received, but not accepted, Offers with Start Dates within a specified period including Attrition Backfills.
      - **Net New Offers Outstanding**: Offers Outstanding excluding Internal Hires.
      - **Gross Offers Outstanding**: Offers Outstanding including Internal Hires.

1. **Attrition Backfills**: Roles previously occupied by a team member that GitLab plans to fill again (either via an external candidate or Internal Hire).

1. **Attrition/Attrites**: Team members who end their GitLab employment (i.e., not including Internal Hires) within a specified period.
     - **Known Attrition**: Team members who have given notice of their employment termination within a specified period.
     - **Forecasted Attrition**: Attrition related to team members expected to terminate employment within a specific period. Known attrition plus Forecasted Attrition adds to the full attrition assumption for the period.

1. **Internal Hires**: Team members who change roles within GitLab via promotion, lateral movement, etc. within a specified period. To be counted as Internal Hires (including via promotion), team members must accept an offer for an open Greenhouse requisition.

### Appendix: Other Public Company Headcount Definitions

1. [**Adaptive**](../financial-planning-and-analysis/adaptive-insights/): FP&A's SSOT for all forecasted headcount metrics and headcount-related expenses. Adaptive is maintained by the FP&A team and roles are input into Adaptive by the FP&A team.

1. **Start Date**: Day one of a team member's employment at GitLab. Start Dates are estimated by FP&A based on the priorities of the business, target Start Dates information in Greenhouse, and collaboration with TA. Once a team member has started their employment, Workday is the SSOT for the official Start Date.

1. **Net New Roles**: New roles (i.e., not Attrition Backfills) that GitLab plans to (either via an external candidate or Internal Hire).

1. **Offers**: Employment offers extended to candidates within a specified period including Attrition Backfills.

   - Offers are estimated based on Total Gross Starts within current and future periods. An average (based on analysis of historical data) of Offer to Start timing is applied to forecasted monthly Total Gross Starts in order to back into the estimated Offers needed to achieve the specified Total Gross Starts amount.
   - Example of Offers estimate for November assuming straight-line Offer to Start timing
      - Hypothetical November Total Gross Starts: 100
      - Month0 Average *November Total Gross Starts: 25%* 100 = 25
      - Month-1 Average *October Total Gross Starts: 25%* 100 = 25
      - Month-2 Average *September Total Gross Starts: 25%* 100 = 25
      - Month-3 Average *August Total Gross Starts: 25%* 100 = 25
      - = 100 Total Offers in preceding four months needed to achieve November Total Gross Starts

1. **Planned Personnel Sheet**: The Planned Personnel Sheet is housed in Adaptive and reflects Gross Future Starts (i.e., includes roles that will eventually be filled via Internal Hires).

### Appendix: Other Talent Acquisition Headcount Definitions

1. [**Greenhouse**](/handbook/hiring/greenhouse/): SSOT for recruiting metrics and pipeline development in various stages of recruiting.
1. [**Workday**](/handbook/people-group/workday-guide/): SSOT for Actual Starts and Start Dates.
1. **Hires**: Team members who accept an employment offer within a specified period. The start date of the team members' employment is irrelevant. Hires includes Internal Hires.
1. **Recruiting Capacity**: The capacity of recruiters related to Hires within a specified period. Individual recruiter capacity does not relate to Starts; however, we can estimate the recruiting organization's broader capacity for Starts by looking at historical Hire to Start data.
1. **Offer Accept**: The date on which a candidate signs the Offer and is transferred into Workday. This process ideally happens within 24 business hours of signing the Offer, but may be backdated to the date of signature as needed.
1. **Time to Fill**: The number of days from the date of requisition opening until the date the accepting candidate has accepted the Offer. Time to Fill does not consider Start Date.
1. **Offer Accept to Start Date**: The number of days from an accepted offer to Start Date.
1. **Time to Start**: The number of days from the date of requisition opening until the successful candidate’s Start Date.
1. **Time to Hire**: The number of days between the candidate’s application date and when the candidate is moved into the Hire stage.

For more information on Talent Acquisition metrics, visit the [Talent Acquisition KPIs and Job Architecture page](https://internal.gitlab.com/handbook/people-group/talent-acquisition/key-performance-indicators/).
