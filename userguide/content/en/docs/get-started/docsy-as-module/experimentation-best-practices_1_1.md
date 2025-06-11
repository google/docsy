---

title: 'GitLab Experimentation Best Practices'
description: "Experimentation allows us to learn and give the right experiences to our Customers, to create better value for Customers and GitLab."
---







## Why Experimentation Best Practices?

Experimentation allows us to learn and give the right experiences to our Customers, to create better value for Customers and GitLab. Although experimentation seems straightforward, the risk of making inaccurate conclusions is too high, if an organization does not follow best practices.

For example, here are a couple of commonly made mis-steps while conducting experiments which can lead to inaccurate conclusions and decisions:

1. Peeking (article [here](https://gopractice.io/blog/peeking-problem/)): If we do not lock down the testing time period ahead of time, we end up with the peeking problem where we have side effects from checking the results and taking action before the A/B test is over. The more often you look at the intermediate results of the A/B testing with the readiness to make a decision, the higher the probability is that the criterion will show a statistically significant difference when there is none.
    1. 2 peeking cases double the p-value;
    2. 5 peeking sessions increase the p-value by a factor of 3.2;
2. Simpson’s Paradox: This can occur when we change the test group allocations in a disproportionate manner mid-test-flight. The latent segments in the test groups change their proportions when we change allocation percentages, inserting error into the results. More formally, [Simpson’s Paradox](https://plato.stanford.edu/entries/paradox-simpson/) is a statistical phenomenon where an association between two variables in a population emerges, disappears or reverses when the population is divided into subpopulations.

To ensure we can maximize the value from our experimentation practices and reduce inaccuracy of decisions at GitLab, we recommend  following best practices across all experiments at GitLab. This document outlines the best practices to adopt at GitLab.

## Experimentation Planning

### Hypothesis: Define the upside

Before launching an experiment:

- Define the business opportunity we are trying to improve
- Explain how we are planning to enhance the business opportunity and why we want to take the particular approach.
  - If you have supporting data/analysis, document it.
- Document the control UI and flow and test wireframe/concept

### Goals: Without goals, test measurement is meaningless

- **Define the primary metric** that we want the experimentation to move. This is the metric we use to define the rollout scenario.
  - Ideally, this should be just one metric (2 metrics max)
  - Ideally, this should tie to a business KPI (e.g. greater ARR, paid user signups, etc)
  - Define the expected change magnitude and the direction to calculate the sample size
  - Decide one/two tail and duration of the test → based on sample size and based on direction/s we expect the KPI to change in
  - Example:
    - Test concept: Reducing the number of steps in the new user sign up process
    - The primary metric: Number of sign-ups and it would be ideal to tie to a profit driving KPI, such as # of paid users
- **Define the secondary metric(s)**: There are metrics that help us validate and understand in detail why and how the primary metric was impacted
  - Secondary metrics help us cross-validate if the movement in the primary metric is real.
  - Since we use a high alpha of 5% or 10%, it is possible that impact to the primary metric was by chance, so the secondary metrics can help validate whether the change in the primary metric is real or not. As we improve the cadence of testing, this will become more important.
    - Example:
      - Test concept: Introduce a more prominent trial sign up button in the new user registration flow.
      - Primary goal: **D90 conversion rate. **As more people sign up for trial in the new user flow, they can better understand the total value of our product and move our D90 conversion rate by 5%****
      - Possible Noise: If the primary metric did move by 5%, but if the number of new users signing up for trial didn't increase, then the increased D90 Conversion could be noise and needs further validation.
- **Define Guardrail metrics: This helps us ensure we are not harming the business in the long run for short-term gains.**
  - These are metrics based that track the long term impact an experiment can have.
  - Example:
    - When experimenting to increase trials during new user sign-up flow, we might want to set up D90 conversion or Trial to Paid conversion as a guard rail metric.
    - Another example is from a Social Media company where they define for a "notification disable rate" as a guard rail metric. They set a guard rail that says that every 1% lift in sessions/DAU from increased push notification, the "notification disable rate" increase should be within X%.
    - Another Example: A SaaS company might set up a 12-month churn rate as a guard rail metric and revisit the analysis after 12 months.

### Pre-analysis: do the calculations upfront

- Validate the problem, opportunity, and approach using data (e.g. descriptive analysis)
  - Example: There may not be significant value in testing email header copy change for a specific email type if the volume of this email is low. We will never achieve significance. In this case, consider pre/post or picking a higher traffic email type for testing.
- Calculate the sample size needed using one tail/two-tail, alpha (5%) , and power (80%). Determine experiment time period (how long to run the experiment) upfront.
  - Predetermine if you need to use a higher alpha for rollout decisions.
- Do a cost vs. benefit analysis of conducting the experiment. When the cost of experimentation is high in the organization and we have limited tech resources, we must be able to understand the potential upside from each test, so we are prioritizing the right ideas.
  - Calculate the potential yearly upside from this change as one of the company KPI. When that's not possible, define the upside to a KPI in terms of log value (like 0.01%, 0.01%, 0.1%, 1%, 10%, 100% impact), so we can make rough comparisons between different ideas.
  - Push for step function changes vs. incremental changes

### Experimentation set up plan:  How to setup the test

- Determine the # of variants needed to help answer the business question we want to learn from the experiments (eg: A/B/n or MVT (multivariate) set up)
- Document the analysis plan including what hypothesis question can and can’t be answered.
- Define instrumentation needed (the additional tracking data you need on top of what's already available).
  - Specify tracking needs as critical or nice to have so developers can discuss and implement the new tracking based on effort and performance impact.
- Define the population you are testing on, including segmentation or exclusion criteria
- Document when you want to run the experiment in **the experiment calendar** and checks for conflicts
- Define the launch weights and ramp-up plan if experimenting in a critical path or impacts a large user base
  - When ramping for high-risk test in a critical area, go from 1% to 5%/10% and then 50%
    - Beware of the Simpson’s paradox and only analyze test periods where the weight allocation is proportional and comparable.
  - Specify the success criteria for ramping
    - Example: No significant impact to Primary metric, and we could detect a change as small as 5% (i.e. sensitivity)

<span style="text-decoration:underline;">General Guidance for Test Group Sample Allocation Based on Risk and Critical Path</span>

<table>
  <tr>
   <td rowspan="2" colspan="2" >Experiment launch weights matrix on failure risk, and importance of feature and impacted population
   </td>
   <td colspan="3" >Critical path page or critical product feature
   </td>
  </tr>
  <tr>
   <td>L
   </td>
   <td>M
   </td>
   <td>H
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Potential code risk for failure
   </td>
   <td>L
   </td>
   <td><p style="text-align: right">
50%</p>

   </td>
   <td><p style="text-align: right">
10%</p>

   </td>
   <td><p style="text-align: right">
5%</p>

   </td>
  </tr>
  <tr>
   <td>M
   </td>
   <td><p style="text-align: right">
10%</p>

   </td>
   <td><p style="text-align: right">
10%</p>

   </td>
   <td><p style="text-align: right">
5%</p>

   </td>
  </tr>
  <tr>
   <td>H
   </td>
   <td><p style="text-align: right">
10%</p>

   </td>
   <td><p style="text-align: right">
5%</p>

   </td>
   <td><p style="text-align: right">
1%</p>

   </td>
  </tr>
</table>

## Experiment Verification

### Experiment Validation Pre-Launch: Check that everything is in place

- After the functionality is built by Dev and data eng team, verify if the reporting data and UI works as intended in Dev or Pre production environment
  - Recommendation is to have any two out of Dev, QA and Analyst verify tracking and reporting
  - Recommendation is to have any two of PM, QA and Analyst verify UI functionality
- Paste the control and test experience screenshot in experiment documentation for future reference

### Experiment Validation Post-Launch: Check that the results are flowing in as expected

- 1 or 2 days after Go live, verify reporting data for the experiment is valid
  - Check for any skew in population assignment
- If you launched at 1% weight, take an initial read after 2 or 3 days and set to 5% or 10% weights as per the previously agreed plan.
  - The 1% experiment’s goal is only to ensure “things don’t break” and not to get a read on the results.
- If you launched at 5% or 10%, change the weights to 50% as per your initial plan
  - Beware that the customer base could be different on weekdays/weekends, so analyze results in full week increments in case of weekly seasonality and in ful month increments in case of monthly seasonality
  - The above will not apply for the 1% since the 1% test is not intended to get a read impact created by the experimental experience.

## Experimentation Analysis and Communication

- Ensure there is no bias in the assignment or experiment data
  - When possible, automate these validations like assignment population bias
- Analyze the test results using statistical significance
  - Leverage the secondary metrics to validate and better understand how and why the test won.
  - Analyze results by key dimensions to understand the rollout scenario and find any significant performance difference by population cohort.
    - Beware of increased statistical noise when making multiple comparisons. So form the hypothesis before analysis for dimension level split or use adjusted P-value.
- Analyze the interaction results with any pre-identified interacting experiments that were live simultaneously as this test.
- Communicate results with statistical confidence:
  - When there is a significant impact, communicate the results with a confidence interval (@80%)
  - When there is no significant impact, communicate the results with sensitivity, so the general audience can understand at what observed change %, can we have concluded results as statistically significant.
- Document results in handbook and detailed description of the test, ramp summary, key results, snapshot of metrics, Insights, and Next steps.
- Present the results to partners (Tech and Business) and analytical peers to gather additional insights and educate others on the learning. Document any follow-up analysis and insights.
- For PM: Ensure the experiment is rolled out or retired from code as per final result conclusions.

## Institutionalize Insights from Experimentation

- Along with business partners, present the detailed results in a broader org group to spur conversations on how others can benefit from learning and what actions other teams can take/collaborate to maximize value.
- Ensure all results are documented and searchable by function or product tag to ensure we don't repeat the same failed ideas. This enables us to do meta-analysis from multiple experiments to gather broader insights.
  - Ex: In a comparable company, we leveraged data from 2 dozen past examples to understand the relationship between increased notification type and notification disablement.
  - Ex. In a comparable company, using metadata from ~50 past results, we understood the session lift by increasing the volume of different email types.
  - Ex: In a comparable company, we leveraged ~8 past analyses to understand the incremental value of additional cross merchandising spots.
  - Growth team already documents [experiments results](/handbook/marketing/growth/) in a centralized handbook page. We should adopt this practice across GitLab in a centralized page.

## Experimentation Governance

- Automated alert system:
  - Enable an automated alert system to monitor significant negative impact to primary metrics from experiments. This helps to avoid the need for results peeking.
    - We use P &lt;= 0.01 or P &lt;= 0.5 for two continuous days
  - Enable automated alert if an experiment has consistently significant positive results for continuous x days (we used 3 days to reduce random wins)
- Review long-running experiments periodically to avoid performance impact on the product.
- Document any Experiment failures due to set up, tracking/data failure, wrong implementation, or conflicts/ experiment interactions. This enables us to monitor the health of the experiment platform.
- Create an experiment calendar, to enable conflict management and understand volume and velocity of experiments.

## Opportunity Action Items for Consideration

Note: Short term - means hours/days worth of effort. Long term means weeks/months worth of effort

Based on initial feedback and observations on current experiment platform capabilities, these are a list of action items I recommend we consider. It still needs to be consulted with impacted parties to ensure the gaps still exist and their priority.

- **Standardize sample size requirement with power calculations: (Priority H)**
  - Short term: Define a standard sample size calculator using an alpha of (5% or 10%), one/two tail, and power of 80%
- **Ensure result dashboard incorporate significance and confidence level (Priority H)**
  - Short term: Incorporate significance calculation and confidence interval directly into Tableau Experiment analysis framework using Z test formulas or Python functions.
- **Ability to split test results by dimensions with adjusted P-value threshold: (Priority M)**
  - Long-term: Explore alternative tools or data tracking to enable unrestricted metric/funnel/dimension evaluation for Experiments and split analysis by dimensions and filters.
- **Solve for Sample size problems (Priority H)**
  - Short term: Ensure we define experiment sample size analysis using one-tail or two-tail to better accommodate for smaller sample sizes in experiments.
  - Short term: Leverage secondary metrics to build confidence in directional read on primary metrics.
  - Short term: Use guard rail metric for long-term impact measurement by pausing the experiment after collecting enough samples and later measuring the impact on guard rail metric.
  - Long-term: Leverage Bayesian experiment analysis framework to communicate uncertainty in data for small sample size problems.
- **Automated bias validation of test results: (Priority M)**
  - Short term: Explore how to automatically flag when experiments have weights or population bias in results
  - Long term: Implement automated bias alerts when analyzing results.
- **Automated alerts for winning and Losing experiments:  (Priority L)**
  - Short term: Explore how to create automated alerts for losing or consistently winning experiments based on P value and days the results remain significant.
- **Analyze randomization within and across experiments for any bias:  (Priority M)**
  - Short term: Explore if we need to validate randomization bias within and across experiment allocation based on limitations with existing systems and analyze.
  - Long-term: Build automated systems to monitor bias continuously within and across experiments.
- **Experiment calendar: (Priority M)**
  - Short term: Understand the current Experiment calendar and explore automated ways to validate accuracy of testing calendar by comparing against actual experiment assignment data.
  - Long term: We have a single system to record all the experiments running across the organization and the duration of experiments. Enable automated validation against actual test assignment data.

## Tools Created for Analytics Use

- [Sample size calculator using power and varying confidence level](https://docs.google.com/spreadsheets/d/1KP_rDB3e6pJuOJwA59HcAUVpWUuzoPveaJiTH_PSviM/edit?usp=sharing)

## References

- [Growth Experiments page:](/handbook/marketing/growth/)<span style="text-decoration:underline;"> </span>Growth is already documenting experiment results in a centralized page.
- [7 Step A/B testing process](https://blog.optimizely.com/2016/08/10/7-step-ab-testing-process/) Need to invest time on planning, Design and QA
- [A/B testing for a low traffic website](https://blog.optimizely.com/2016/05/17/ab-testing-for-low-traffic-websites/)
- [Importance of test planning](https://optinmonster.com/ab-testing-best-practices/)

### <span style="text-decoration:underline;">Terminology:</span>

- **Default Experience:** The experience a participant receives when not allocated to an experiment. This is the same as control experience in most cases.
- **Experiment calendar:**  A system to show the past, current and upcoming experiments along with population being tested, weights and Experiment duration. This could enable us to plan for conflicts or analyze interactions between interacting experiments.
- **Sensitivity:** For the given population and it’s metric, what is the minimum change at we could have detected a significant threshold.
