---
title: "Customer Success Monthly Metrics Dashboard"
---

## Table of Contents

1. [Overview](#overview)  
2. [Use Cases](#use-cases)  
3. [Metrics Definitions](#metrics-definitions)  
   * [Financial Measures](#financial-measures)  
   * [Adoption & Activities](#adoption--activities)   
4. [FAQ](#faq)

## Overview

The [CS Monthly Metrics dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCSMELeadershipOverview/FinancialPerformanceOverview?:iid=1) is a comprehensive business intelligence tool designed specifically for Customer Success leaders. This dashboard consolidates critical Customer Success metrics in one central location, providing monthly trends and performance data to support Monthly Metrics meetings.

The dashboard enables CS leaders to:

* Track key financial and operational metrics across their book of business  
* Identify trends that require attention  
* Make data-driven decisions to optimize Customer Success outcomes

## Use Cases

The CS Monthly Metrics dashboard is primarily designed to serve the following use case:

1. **Monthly Business Reviews**: CS leaders can use this dashboard to prepare for and conduct monthly business reviews with their teams and leadership, highlighting key performance indicators and progress toward goals.

## Metrics Definitions

The CS Monthly Metrics dashboard includes the following metrics, organized by category:

### Financial Measures

| Metric | Description | Business Question | Why does this matter? |
| ------ | ----------- | ----------------- | --------------------- |
| Total Segment ARR | Sum of ARR in Segment | How much ARR is in this book of business? | This metric provides the foundation for all CS metrics and planning. ARR size determines resource allocation, and sets the context for retention and growth performance. Tracking ARR by segment helps identify which areas of the business are thriving or need attention, and enables prioritization based on revenue impact. |
| Renewal Rate | Won ATR/ATR | How well are we retaining dollars at renewal? | Renewal rate is the most direct measure of CS effectiveness and customer satisfaction. In a SaaS business, where customer acquisition costs are high, retaining existing customers is typically more profitable than acquiring new ones. Small improvements in renewal rates can dramatically impact company valuation and long-term growth. |
| Renewal Rate Attainment | Renewal Rate/Target Renewal Rate | How well are we retaining dollars at renewal relative to the target? | This metric measures performance against expectations and commitments. It helps identify if targets are realistic, if teams are executing effectively, and if market conditions are impacting renewals in unexpected ways. Consistently missing targets may indicate systemic issues in how you serve customers or how you set goals, while consistently exceeding targets might signal that goals are too conservative. |
| Average Contract Term Length | Sum of Contract Term/Sum of Contracts | How well are we driving Customers to renew for longer contract terms? | Longer contract terms increase business stability, reduce administrative overhead from frequent renewals, and allow for more strategic customer relationships. They also reflect customer confidence in your product and commitment to your platform. For GitLab, longer terms provide more runway to drive adoption and integration, which typically leads to stickier, more successful implementations. |
| Growth Net ARR | Sum of Growth Net ARR | How much Net ARR have we closed from our Customer base? | Expansion within existing accounts is typically more efficient than new customer acquisition. This metric shows how effectively you're growing customer value beyond initial purchase. For a DevSecOps platform like GitLab, expansion indicates deeper adoption across the software development lifecycle and broader usage within the organization, both of which contribute to greater customer success and stickiness. |
| Growth Net ARR Attainment | Closed Growth Net ARR to Geo target | How much Net ARR have we closed from our Customer base relative to the target? | This metric measures if your growth strategy is working as expected across regions. It helps identify where expansion motions are most effective and where they need refinement. Consistent underperformance may indicate misalignment between customer needs and your expansion offerings, or issues with how teams position and sell additional value to existing customers. |
| Success Tier Net ARR | Closed Won Success Tier Net ARR | How much Net ARR have we closed for Success Tiers? | Success tiers represent premium service offerings that directly generate revenue while improving customer outcomes. Strong performance in this metric indicates that customers value your expertise and services beyond the core product. For GitLab, success tiers help customers accelerate DevOps transformation and maximize platform value, leading to deeper integration and higher retention. |

### Adoption & Activities

| Metric | Description | Business Question | Why does this matter? |
| ------ | ----------- | ----------------- | --------------------- |
| No Data % | Percentage of ARR that is not sending us data | What percentage of our Customer base (in ARR) is not sending us utilization data relative to all ARR? How well are we driving Customers to send us data or move them to Cloud licensing? | Without usage data, we operate blindly in serving customers and measuring success. High percentages of "no data" ARR limit our ability to identify at-risk accounts, understand adoption patterns, and proactively address issues. For GitLab, data visibility directly impacts our ability to guide customers toward successful DevSecOps practices and demonstrate the ROI of our platform, which ultimately affects retention. |
| No Data ARR | ARR that is not sending us data | What is the ARR value of all the Customers not sending us data? | This metric quantifies the revenue at risk due to lack of visibility. Without usage data, we can't effectively measure customer health or adoption, making these customers statistically more likely to churn. Understanding the absolute ARR value helps prioritize efforts to improve data visibility, especially for high-value accounts where retention is business-critical. |
| Red License Utilization % | Percentage of ARR that fall under red for license utilization | What percentage of our Customer base (in ARR) has red license utilization relative to all ARR? How well are we driving license consumption? | Underutilization directly correlates with renewal risk. When customers don't fully leverage their licenses, they struggle to justify the investment at renewal time. This percentage shows what portion of our revenue is at risk due to adoption challenges. For GitLab, ensuring customers effectively use their licenses means they're integrating our platform into their workflows, which increases stickiness and renewal likelihood. |
| Red License Utilization ARR | ARR of accounts that fall under red for license utilization | What is the ARR value of all the Customers with Red license utilization? | This quantifies the absolute revenue at risk due to low license deployment. It helps prioritize intervention efforts based on business impact rather than just customer count. For a DevSecOps platform like GitLab, underutilization often indicates that customers haven't successfully integrated the tool into their development workflows, which significantly increases churn risk. |
| Premium CI Adoption Red | ARR of accounts that have red CI adoption | What is the ARR value of Premium customers with red CI adoption? | CI is a core component of GitLab's Premium tier. Poor CI adoption indicates customers aren't realizing the primary value of their investment. This metric shows how much revenue is at risk specifically due to CI adoption challenges. |
| Premium CI Adoption Red % | Red CI ARR from Premium Customers/All ARR from Premium Customers | Of all Premium customers, what % of ARR has red CI adoption? | This percentage indicates how systemic CI adoption challenges are across the Premium customer base. A high percentage suggests fundamental issues with how CI features are positioned, implemented, or designed. Since CI is central to the Premium value proposition, this metric directly impacts the health of this important product tier and its retention rates. |
| Ultimate Security Adoption Red | ARR of accounts that have red Security adoption | What is the ARR value of Ultimate customers with red Security adoption? | Security features are key differentiators of GitLab's Ultimate tier. Low adoption means customers aren't using what they specifically paid for. This metric quantifies revenue at risk because customers aren't receiving the security value they purchased, which makes these accounts prime targets for downgrade or churn. |
| Ultimate Security Adoption Red % | Red Security ARR from Ultimate Customers/All ARR from Ultimate Customers | Of all Ultimate customers, what % of ARR has red Security adoption? | This percentage shows how widespread security adoption challenges are across the Ultimate tier. High percentages indicate systemic issues with security feature positioning, implementation complexity, or competitive displacement. Since security adoption is critical to Ultimate tier retention, this metric directly impacts the health of GitLab's highest-value customer segment. |
| CSP Red Count | The count of Accounts that do not have a Customer Success Plan or have one but it is in Draft status or has 0 objectives defined. | How well are driving account teams and Customers to create Customer Success Plans? | Customer Success Plans are foundational to driving intentional outcomes. Without CSPs, customer engagements lack clear goals, timelines, and success metrics. This percentage indicates how much of our customer base lacks this critical success framework. High percentages correlate with reactive rather than proactive customer management, which typically leads to lower satisfaction and retention. |
| Verified Outcomes Red | The count of Accounts that have not had a Verified outcome completed in over a year | How well are we helping Customers achieve their goals? | Outcome achievement directly impacts renewal decisions. When customers don't reach their goals with our product, they're less likely to renew. This metric shows how effectively we're delivering on our customer promises. For GitLab, helping customers achieve their DevOps objectives is central to demonstrating value, especially in complex enterprise environments where multiple stakeholders evaluate ROI. |
| EBR Red Count | The count of EBRs that are that more than 1 year overdue (Essentials) or 6 months over due (Advanced, Signature) | How well are we driving executive alignment? | Executive alignment is critical for renewal and growth. Without regular EBRs, we lack visibility into executive priorities and can't effectively position our value at leadership levels. This percentage indicates how much of our customer base lacks proper executive engagement, which puts these relationships at risk, especially during renewal evaluations when executives may be the final decision-makers. |
| Workshop Red Count | The count of Workshops that are more than 90 days overdue or not scheduled | Are we delivering workshops in a timely manner? | Workshops drive knowledge transfer and adoption. Delayed workshops mean customers aren't receiving timely enablement on key features, which impacts their time-to-value and overall success. This metric indicates potential service delivery constraints that could be negatively affecting customer experience and adoption across the customer base. |
| Accelerator Red Count | The count of Accelerators that are more than 120 days overdue or not scheduled | Are we delivering accelerators in a timely manner? | Accelerators help customers overcome specific challenges and accelerate adoption. Delays mean customers face extended periods of struggling with key aspects of the platform. This percentage indicates potential service delivery issues that directly impact customer time-to-value. For GitLab, timely accelerator delivery is particularly important given the technical complexity of fully implementing DevSecOps practices. |
| Successful Case Closure % (CSE) | Percentage of ARR of customers that had a closed case (any outcome) within the given period | How well are CSEs managing cases? | Case resolution directly impacts customer satisfaction and perception of support quality. This metric shows what percentage of our customer base is receiving timely resolution to their technical challenges. Low percentages may indicate capacity constraints or process inefficiencies that are negatively affecting the customer experience across a significant portion of the business. |
| CSE Timeline Entries Weekly Avg | Average CSE timeline entries per week | How well are CSEs executing all activities? | Timeline documentation provides visibility into customer engagement quality and frequency. Regular entries indicate proactive engagement and thorough customer management. This metric helps assess whether CSEs are providing consistent, high-quality service across the customer base, which directly impacts the customer experience and the effectiveness of our customer success efforts. |
| Forecasted C&C Engaged (CSE) | Dollar value of open forecasted C&C with CSE engagement/Total open C&C. Expressed as monthly average in a given FQ | How well are we addressing renewal risk in the On-Demand segment? | This metric reveals how proactively we're addressing potential churn with our technical expertise. When CSEs engage with accounts forecasted to churn, they can identify and resolve technical blockers that might be driving the churn decision. |
| Total ARR Engaged (CSE) | The ARR value of Accounts with CSE engagment/Total ARR. Expressed as monthly average in a given FQ. | How much of our Customer base are CSEs engaged with? | This metric shows the reach and coverage of our technical expertise across our customer base. CSE engagement typically indicates deeper technical implementation, more complex use cases, and higher strategic value. |
| ESAT Response Rate (CSE) | Response rate of ESAT survey post CSE engagement | How well are we driving Customers to respond to surveys after a CSE engagement? | Survey responses provide critical feedback for service improvement. Without adequate response rates, we lack representative data on engagement quality. This metric indicates how effectively we're capturing the voice of the customer, which is essential for continuous improvement of our service delivery and ensuring that our CSE program is meeting customer needs. |
| ESAT Score (CSE) | Average ESAT score from ESAT survey | What is the quality of a CSE engagement from a Customer point of view? | ESAT directly measures customer perception of our technical expertise and service quality. This score reflects how well we're meeting customer expectations during critical technical engagements. For a complex platform like GitLab, high-quality CSE interactions are essential for helping customers overcome challenges and achieve their technical objectives. |
| Ending Escalated ARR | ARR from Customers with escalations | What is the ARR value of escalated Customers? | Escalations indicate significant customer dissatisfaction that threatens retention. This metric quantifies the revenue currently at high risk due to serious customer issues. For GitLab, escalations often involve complex technical or strategic challenges that require cross-functional resolution, making this ARR particularly vulnerable without proper attention. |
| Ending Escalated ARR % | Escalated ARR/Total Cohort ARR | Of our Escalated Customers what is their ARR value relative to all ARR? How well are we reducing escalations? | This percentage indicates the portion of our business currently experiencing serious satisfaction issues. High percentages may signal systemic product or service problems affecting a significant portion of customers. Tracking this over time helps assess whether our customer experience is improving or deteriorating, which directly impacts overall business health and growth potential. |

## FAQ

### General Questions

**Q: How often is the CS Monthly Metrics dashboard updated?**  
A: The dashboard is updated daily.

**Q: Who should use this dashboard?**  
A: This dashboard is primarily designed for Customer Success leaders, but can also be valuable for executive leadership, CS strategy and operations teams, and cross-functional stakeholders who need visibility into CS performance metrics.

**Q: Can I see historical data on this dashboard?**  
A: Yes, the dashboard includes 12-month trending for all metrics, allowing you to observe seasonal patterns and year-over-year performance.

**Q: How can I get help if I have questions about or see discrepancies with the data?**  
A: For questions about the data or dashboard functionality, please contact the CS Analytics team in the #cs-operations-and-analytics slack channel

**Q: Is the CS Monthly Metrics dashboard a forecasting tool?**  
A: No. The CS Monthly Metrics dashboard is specifically designed to report on actual performance and progress, not to project future outcomes. It provides visibility into historical and current metrics to inform decision-making, but does not generate forecasts.

**Q: Where should I go for forecast data if not this dashboard?**  
A: For forecasting data such as Renewal Rate and Growth Net ARR refer to the [CSx Forecast dashboard](https://gitlab.lightning.force.com/lightning/r/Dashboard/01ZPL000001rCVV2A2/view). The CS Monthly Metrics dashboard complements these tools by providing the actual performance data against which forecasts can be measured.

**Q: How does this dashboard relate to our forecasting process?**  
A: This dashboard serves as the "actuals" side of the forecast-to-actuals comparison. CS leaders can use this dashboard to compare actual performance against previously forecasted expectations, but should use dedicated forecasting tools for future projections. The "Forecast Completeness %" metric tracks how thoroughly teams are engaging in the forecasting process, but does not display the forecast content itself.

**Q: Can I use this dashboard to predict future performance?**  
A: While the dashboard shows trends over time that might inform your expectations, it is not designed as a predictive tool. Its primary purpose is to provide accurate reporting on actual metrics. The historical data may help inform your own forecasting activities, but the dashboard itself does not generate predictions.

### Dashboard Comparison

**Q: What's the difference between the CS Monthly Metrics dashboard and the Account Landscape dashboard?**  
A: The CS Monthly Metrics dashboard focuses on Customer Success GTM KPIs aggregated at a segment level, providing monthly trending for CS leaders to track program effectiveness. The Account Landscape dashboard provides more granular, instance-level information for day-to-day account management and visibility.

**Q: When should I use the CS Monthly Metrics dashboard vs. the Account Landscape dashboard?**  
A: Use the CS Monthly Metrics dashboard for Monthly Metrics performance review, leadership reporting, and tracking CS metrics against targets. Use the Account Landscape dashboard for account-specific details, day-to-day account management, and individual customer insights.

**Q: Does the CS Monthly Metrics dashboard replace the Account Landscape dashboard?**  
A: No. These dashboards serve complementary purposes. The CS Monthly Metrics dashboard provides program-level, monthly aggregated metrics for CS leadership, while the Account Landscape dashboard offers more detailed account-specific information.

**Q: How does the CS Monthly Metrics dashboard differ from Gainsight?**  
A: While Gainsight and the CS Monthly Metrics dashboard share some data points, they serve different purposes. The CS Monthly Metrics dashboard provides more comprehensive financial metrics and segment-level analyses that aren't readily available in Gainsight. Additionally, this dashboard consolidates key metrics in a single view optimized for leadership reporting and monthly business reviews, whereas Gainsight is primarily designed for customer-level engagement tracking and health scoring.

**Q: Should I use this dashboard for compensation reporting?**  
A: No. The CS Monthly Metrics dashboard is not to be used for compensation reporting or calculations. While it shows performance metrics that might be related to compensation plans, the official source for compensation data is Xactly. Any questions or issues related to compensation should be logged via HelpLab. This dashboard is designed for business reviews, not for compensation administration.

### Metrics Questions

**Q: What does "red" mean in the utilization and adoption metrics?**  
A: "Red" indicates performance below the established threshold for that metric, typically representing customers at risk or requiring intervention. Specific thresholds may vary by metric but generally indicate performance requiring attention.

**Q: Why doesn't the dashboard show metric attainment against compenstion targets?**
A: The dashboard intentionally does not calculate metric attainment for compensation targets as target values are considered sensitive information specific to each team and region. If you need to calculate your own attainment take the relevant metric data from the dashboard and calculate attiainment against target as Actual/Target and expressed as a percentage.

**Q: How is ARR calculated?**  
A: ARR (Annual Recurring Revenue) represents the annualized value of all active subscriptions for the specified segment or customer group.

**Q: What timeframe do the metrics cover?**  
A: These metrics reflect the current state as of the last data refresh and represent the percentage of accounts or ARR that are currently in a given status. It's important to note that the Financial metrics are calculated as quarter to date while the Adoption metrics reflect month to date data for that quarter. For example, if today is March 15th the Renewal rate for Q1 would include all relevant renewal opportunity data from February 1st to March 15th. For an adoption metric, such as No Data, that metric calculation is based on data from March 1st to March 15th. 

**Q: What should I do if the data doesn't look right?**  
A: If you notice data discrepancies or have concerns about data accuracy, please report the issue to the #cs-operations-and-analytics slack channel with specific details about what you're seeing.

**Q: Can I get direct access to the underlying data?**  
A: Access to raw data is restricted to maintain data governance. However, you can export aggregated data from the dashboard for further analysis.

**Q: Does this dashboard include all customers?**  
A: Yes, the dashboard includes all active customer segments, though you can filter to view specific segments as needed.
