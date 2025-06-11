---

title: "Infrafin"
description: "Infrafin Board"
---








---

## Criteria

While we would like each team to be as efficient as possible, it is not scalable or realistic for us to talk to each individual about one server or a few servers they are spinning up. For that reason we provide learning resources for those individuals to try and price out their own resources and then we define the following minimum requirements for something to be considered as part of the infrafin board. If the issue meets any of the following criteria and it is within our scope of control (part of central billing that we have visibility into) it can be added as a potential infrafin issue.

- Impact of issue (current or near future) is $10K/quarter or more
- Issue is part of an OKR for the current quarter
- If cost is less than $10K/quarter, but month over month cost has doubled for a particular team or service for an unknown or unplanned reason

## Prioritization

Weighting of infrafin issues is done in a similar fashion to RICE framework, but with the 4 factors below considered as part of the weighting. The weights are summed and then divided by 4 to normalize all the weights between 0 and 10, with 10 being the most important or impactful

### Weight Factors

#### Cost Savings

Measure of savings as a result of resolving the issue on a quarterly basis. This measure should always be calculated pre-discounts for weighting to maintain consistent weighting across GCP projects and across vendors.

| Factor Value    | Weight |
|-----------------|--------|
| < $10K/QTR      |    0.5 |
| $10K-$25K/QTR   |      2 |
| $25K-$50K/QTR   |      4 |
| $50K-$100K/QTR  |      6 |
| $100K-$200K/QTR |      8 |
| $200K-$500K/QTR |      9 |
| > $500K/QTR     |     10 |

#### Customer Impact

Factor meant to capture potential negative consequences of a change if production changes to the application are required. There are some cases where an infrafin issue would have a beneficial impact to customers also, but since this is only meant to capture negative effects, a large but beneficial customer impact should be weighted as low customer impact.

| Factor Value         | Weight |
|----------------------|--------|
| < 5% of Users        |     10 |
| 5-25% of Users       |      6 |
| 25%-50% of Users     |      3 |
| 50-80% of Users      |    1.5 |
| 80% or more of Users |    0.5 |

#### Future Potential Cost Impact

Measure of future cost that will be incurred if nothing is done to resolve an issue. This measure should always be calculated pre-discounts for weighting to maintain consistent weighting across GCP projects and across vendors. This measure is usually quite speculative, but it is meant to capture both growth in costs or in cases of abuse or un-needed servers the future cost of not addressing these problems.

| Factor Value    | Weight |
|-----------------|--------|
| < $10K/QTR      |    0.5 |
| $10K-$25K/QTR   |      2 |
| $25K-$50K/QTR   |      4 |
| $50K-$100K/QTR  |      6 |
| $100K-$200K/QTR |      8 |
| $200K-$500K/QTR |      9 |
| > $500K/QTR     |     10 |

#### Effort Required

This factor captures the general timeline for how much time and effort is required to resolve the issue.

| Factor Value | Weight |
|--------------|--------|
| < 1 week     |     10 |
| 1 wk - 1mo   |      7 |
| 1 mo - 3mo   |      5 |
| 3 mo - 6 mo  |      3 |
| 6 mo - 1 yr  |      2 |
| 1 yr - 2 yr  |      1 |
| > 2 yr       |      0 |

## Infrafin Board

### Short Term Saving Initiatives Process

Some savings initiatives can happen on a much shorter time horizon, either because of the urgency or because we can handle the implementation solely from within the infrastructure department. Some examples of this include purchasing CUD from GCP, or AWS savings plan to optimize the cost of our servers across the whole company, or investigating and fixing specific billing anomalies that we see over time.

#### 1. Initial Data Exploration

In this scenario, the issue is already known,  potentially because of earlier data exploration or other work, but there is still usually some data exploration to do to understand these issues better.

#### 2. Initial Cost Impact Analysis

Quantify what the impact of the issue at hand is

#### 3. Identify and Partner with SME

Partner with whoever the SME for the area is to find out how the issue can be resolved. If the SME is unknown, the infra analyst will work with the Infra PM to find who the right person is.

#### 4. Resolve the issue

Due to the nature of being bucketed as a short term initiative, these should be relatively low effort, high impact initiatives and generally these should be completed as soon as possible. The weights on these issue will automatically be set to 7

#### 5. Follow-up

After the change has been made, confirm the numbers match close to what was expected.

### Longer Term Saving Initiatives Process

These are initiatives that require cross-team collaboration and major changes in a service or infrastructure to happen. Some examples include implementing online registry garbage collection, optimizing our internal CI usage, and changing machine types or storage types for one of our major services.

#### 1. Initial Data Exploration

If the problem area is not well understood, the first step to discovering one of these initiatives is to take a macro view of our infrastructure to understand where we are spending most of our money today, how fast is it growing, and where are we likely to spend more money in the future.
This can be done using whatever tools are available, but today this is mainly done by going into the billing consoles for the various vendors to get a better understanding of where our spend is going.

In the case that an initiative is already well understood you can skip steps 1-2 and move directly to step 3.

#### 2. Decide on focus area

There are many different factors to choose from when it comes to deciding on which issues to tackle, but the main factors which align with our weighting system in descending order of importance would be:

- Cost
- Future Potential Cost
- Customer impact
- Effort Required

There are some ways we can condense this data down to make it easier to compare, such as by using a weighted MoM growth metric around certain dimensions to see what areas of our spend are both very high and also continuing to grow at a rapid pace.

#### 3. Initial Cost Estimate

Once an area to focus on has been chosen, then we can come up with a proposal about how we could change or implement something to optimize our cost, and come up with a cost estimate of what this might be. This will be the quarterly savings label, and this is the main step as an Infra Analyst to do, which will help give finance and PM's a good understanding of how they want to prioritize the issue.

The Infra Analyst should work with the Subject Matter Expert to make sure the assumptions are well defined and that the estimate makes sense given the assumptions.

#### 4. Estimate of effort and customer impact by SME

SME for the service/area being analyzed will decide how difficult and time intensive this solution would be to implement and how many customers it could impact. The SME can partner with the infra analyst to come up with these estimates if needed.

If a SME cannot be identified the Infra Analyst can work with the infra pm to find who the right person is.

#### 5. Prioritization Decision Made

Infra PM takes the issue and decides where it should fit in within other team's roadmap or milestones depending on the priority in context of infrafin items.

If the issue weight is over 7 (and not a short term initiative), infra PM should also consider getting an exec sponsor for the project.

#### 6. Follow-up

Once completed, analyze the real impact of the change and expectations going forward.

## Infrafin Initiatives & FP&A

Some infrafin initiatives may be included in our financial plan. Examples of this can be seen in the savings tab of our [Vendor Rolling Forecast](https://docs.google.com/spreadsheets/d/1H5OyPAXoQhEJGYYwPoeSElCjhMyzkoz4NB9qEtk53T0/edit?usp=sharing) Spreadsheet. The criteria for initiatives included as part of this are very strict as these would be expected to be completed on time with relatively accurate savings numbers. Labels `ready_for_plan_` can be used by infra analyst to designate when an initiative has sign off and is ready to be included in the next forecast, and `in_plan` can be used to denote when this has actually been included as part of the forecast.

### Criteria to be included in forecast

- firm due date set with sign off from both infra PM and relevant stage PM if necessary
- confidence in savings number > 50%
- `ready_for_plan` label on issue with estimated actual savings, meaning that the number takes into account any relevant discounts as well as other initiatives already included in the forecast which may have overlapping savings.

## Labeling

- `infrafin`

used to put issues on the infrafin board

- `Savings-Estimate`

Estimate of quarterly savings of the initiative. Savings labels should be before any discounts are applied and disregarding other initiatives that amy affect the number. This way, we have a consistent and isolated savings estimate label for each initiative to prioritze by

- `ready_for_plan`

used once the issue has passed the criteria mentioned above and is ready to be reviewed and put into the forecast

- `in_plan`

used once the initiative is included into the forecast
