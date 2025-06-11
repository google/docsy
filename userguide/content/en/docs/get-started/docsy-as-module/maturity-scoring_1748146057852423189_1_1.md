---
title: "Use Case Adoption Scoring"
description: "An overview of Adoption Scoring, how it is calculated, and how CSMs can use the information with customers in their conversations."
---

*For an overview of Gainsight, and information about how to login, please refer to the [Gainsight Overview Page](/handbook/sales/gainsight/).*

For an overview of how CSMs use Gainsight, please refer to the [Gainsight CSM Overview Page](/handbook/customer-success/csm/gainsight)

## Adoption Scoring

Use case Adoption scoring will assist CSMs in understanding a customer's adoption state based on a specific list of metrics.
By looking at the Adoption scores, the CSM will gain an understanding of the customer's current state in the adoption journey.

<details>
  <summary markdown="span"> Building Adoption Scores </summary>

### Defining Adoption & Identifying Lighthouse Metrics

**Timeframe: 2-3 Months**

The first step in the process of building a Use Case adoption score starts with identifying Lighthouse metrics that can gauge a customer's level of performance and adoption for a given use case. To capture the breadth of use case adoption, we rely on Leading Indicators that capture weekly/monthly usage of key features within a use case to accurately measure the maturity of a customer's adoption.

Product Management, Data, and Customer Success teams play a big role in identifying use case adoption specific metrics. Product Marketing works with Product Managers to identify Adoption Recommendations for each use case which can be viewed on the respective Use Case Resource Pages. After identifying key metrics, the respective Product team taken on the responsibility of instrumenting said metrics (if they do not exist already), after which we move on to identifying a denominator to normalize the metric (i.e. `Git Operations - User L28D` / by `Billable Users` = `Git Operation Utilization %`).

<details>
  <summary markdown="span"> Use Case Resource Pages </summary>

- [SCM](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/#adoption-recommendation)
  <br>
- [CI](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/#adoption-recommendation)
  <br>
- [CD](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/#adoption-recommendation)
  <br>
- [Security (DevSecOps)](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/)
  <br>
- [Compliance](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/compliance/)
  <br>
- [Artifact Management (Package)](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/package/)
  <br>
- [GitOps](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/#adoption-recommendation)
  <br>
- [Agile](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/agile/#adoption-recommendation)

  </details>

### Metric Instrumentation

**Timeframe: 8-12 Months**

The respective Product Team for the use case takes on the responsibility to help prioritize and triage the work required to collect and measure usage of key features that have been selected as the Lighthouse and/or Leading indicators. This process can take anywhere from 2-6 months depending on bandwidth and priortization.

Instrumentation is the first peice of the puzzle since it requires benchmarks to be able to move onto thresholding which derives from historical usage of the said use case and features. We require at least 6-8 months of historical usage to be able to accurately set thresholds for each measure to calculate an adoption score.
<br>

### Add Metrics to Ingestion Models (Snowflake Tables)

**Timeframe: 1-2 Months**

The Data team takes on the responsibility of adding the selected Lighthouse Metric(s)/Leading Indicators into the relevant ingestion models (Snowflake Tables) that feed into our BI systems such as Tableau (previously Gainsight). This process requires a minimum of 4 weeks of work and validation to ensure we're capturing usage accurately at an instance level.
<br>

### Threshold and Weighting Analysis

**Timeframe: 3-6 Weeks**

The threshold percentages are chosen by looking at how many customers fall into certain quartiles as well as looking at the averages/median for a subset of customers that we know have healthy usage in this use case. Combining those two gets us to a great starting point of where those percentages should be for each metric. We then look at how many customers would fall into each color based on that starting point. There are some final tweaks after that, as well as gathering feedback from CSMs and Product on set percentages for each color.
<br>

### Testing

**Timeframe: 2-4 Weeks**

This is an important part of validating the selected metrics, thresholds, weighting, and data integrity. The process entails calculating the score for at least 15-20 real accounts, specifically where we have a good understanding of their adoption of the given use case, which we can then share with the CSMs to confirm the resulting score.
<br>

### Operationalize in Gainsight/Tableau

**Timeframe: 2-3 Weeks**

Use Case Adoption metrics currently live in Snowflake where they are calculated and then visualized in the Gainsight scorecard. There are corresponding reports within C360 that allow Gainsight users to conduct a deep dive into any specific use case for the purposes of supporting conversations with their customers to be able to advise on best practices and recommendations to improve adoption.
<br>

### Enablement

**Timeframe: 1-2 Weeks**

The last piece is enabling CSMs to be able to calculate the score, formulate the customer-facing slide deck and be able to present the score in detail. This requires cross-functional partnership between CSMs, CSM Managers, Enablement and CSOps, where a CSM will usually lead the enablement sessions with a mock presentation, while CSOps handle Q&A and any follow-ups that may come out of those enablement sessions.
<br>

### Change Management

**Timeframe: Varies**

With a product that updates monthly while adding new features to the GitLab use cases, we have an ongoing process to iterate and improve the respective adoption scores, aiming for the most accurate depiction of product adoption by our customers. As new features are built and made available, new metrics are also instrumented by the respective product teams to be able to provide insights to customers that can help them improve their experience and attain their DevOps goals with GitLab.
<br>

</details>

### CI Adoption Scoring

The following primary and ancillary metrics are used to determine a customer's CI Adoption Score:
<br>
![CI Adoption Scoring](https://lucid.app/publicSegments/view/14463ed0-bdf2-47a1-998b-40a6bdba9986/image.png)
<br>
[Adoption Guide Reference Link](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/#adoption-guide)

#### Resources

- [Template Deck for Customer Conversations](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing) (Internal Only)
- Use the [Use Case Adoption Scorecard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e) dashboard in Gainsight to view your customer's CI Metrics to export and calculate the Adoption score
- [Value Statements for CI Adoption Score](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/delivery-automation/#customer-adoption-and-value)
  - This should help guide the conversation around how CI Adoption is measured and how to improve adoption.
- [Use Case Adoption Scoring - Defined Metrics](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing) (Internal Only)

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/zurUFQDSWt8" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

- CI Adoption Scoring Walk-through
  - [Session 1](https://youtu.be/E4IMgFWGkNM) (Internal Only)
  - [Session 2](https://chorus.ai/meeting/E4F00AFC0C4A4036A7AC370653A50112?) (Internal Only)
  - [Value Statements for CI Adoption](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/delivery-automation/#customer-adoption-and-value)

### Security (DevSecOps) Adoption Scoring

The following metrics are used to determine a customer's Security Adoption Score:
<br>
![DevSecOps Adoption Scoring](https://lucid.app/publicSegments/view/2ddbf5a5-0a5e-4695-ac50-b073e3dc6eec/image.png)
<br>
[Adoption Guide Reference Link](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#adoption-guide)
<br>

#### Resources

- [Template Deck for Customer Conversations](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing) (Internal Only)
- Use the [Use Case Adoption Scorecard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e) dashboard in Gainsight to view your customer's Security (DevSecOps) Metrics to export and calculate the Adoption score
- [Value Statements](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/devsecops/#the-gitlab-solution)
- [Use Case Adoption Scoring - Defined Metrics](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing) (Internal Only)

#### CS enablement

In this internal [enablement session](https://youtu.be/WrhUfVWa3BU), CS will walk you through:

- New changes introduced to the scoring rubric
- Breakdown of newly added metrics
- Process of building customer-facing slide decks
- Examples of scoring four different types of customer scenarios

<!-- blank line -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/WrhUfVWa3BU?si=RwOKuhj9nEz275Vi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<!-- blank line -->

### CD Adoption Scoring

The following metrics are used to determine a customer's CD Adoption Score:
<br>
![CD Adoption Scoring](https://lucid.app/publicSegments/view/52a3c35f-a4c0-4632-ab89-258a02d78042/image.jpeg)
<br>
[Adoption Guide Reference Link](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/#adoption-guide)
<br>

#### Resources

- [Template Deck for Customer Conversations](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing) (Internal Only)
- Use the [Use Case Adoption Scorecard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e) dashboard in Gainsight to view your customer's CD Metrics to export and calculate the Adoption score
- [Use Case Adoption Scoring - Defined Metrics](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing) (Internal Only)

#### CS enablement

In this internal [enablement session](https://youtu.be/MQkIlvlsBUA), CS will walk you through:

- How & Why we chose the CD Metrics
- How thresholds are established
- How to calculate and build a customer-ready presentation deck
- What are deployments? Why do they matter? How to drive the conversation with customers
- Three customer scenarios with different deployment strategies

<!-- blank line -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/MQkIlvlsBUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<!-- blank line -->

### SCM Adoption Scoring

The following metrics are used to determine a customer's SCM Adoption Score:
<br>
![SCM Adoption Scoring](https://lucid.app/publicSegments/view/c9c1cd25-4435-4c40-965d-744852dd71b2/image.png)
<br>
[Adoption Guide Reference Link](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/version-control-collaboration/#adoption-recommendation)

### Usage Rollup Methodology

Usage data is typically calculated at the GitLab intance level. When we roll this data up to the customer account level we first identify a single instance to represent the subscription. At its basics, this is done by identifying the production instance with the most billable users (it is imperitive that CSM/Es make sure production instances are labeled as such). After tying a single instance to each subscription, we apply the following methodology that weights each subscription's associated usage using the ARR for the subscription as a % of the customer's total ARR.

![Usage Rollup Methodology](https://lucid.app/publicSegments/view/e8045d2a-3135-4e66-b52d-21e42b566d10/image.png)

### Lack of Adoption Reason Tracking

**Overview:**
<br>

With each of our CSM/A managed customers we track the primary reasons for lack of adoption of CI and Security Use Cases as these are critical for unlocking broader platform value. With the reasons tracked systematically we are then able to make a more concerted effort in building content and programs around each reason. As a CSM/A at GitLab, it is expected that for every customer managed we have this reason populated and updated as needed (Security reasons are only needed for Ultimate customers). It should then be kept in mind when developing and executing against the customer's Success Plan.
<br>

**How to Track:**
<br>

1. Log-in to Gainsight
2. Navigate to a customer's C360
3. Scroll down to the Account Attributes (Editable) section
4. Locate the field corresponding to the Use Case for which you'd like to track a Lack of Adoption Reason (The two currently available are Lack of CI Adoption Reason and Lack of Security Adoption Reason)
5. Select the most applicable reason from the dropdown
6. Your selection will auto-save
<br>

**How to view all of your customers' Lack of Adoption Reasons:**
<br>

1. Log-in to Gainsight
2. Navigate to Dashboards using the side navigation
3. Select the CSM Portfolio dashboard from the picklist located in the top left
4. The currently populated Lack of Adoption Reasons can be found in the Customer Detail Report section of the dashboard
<br>

**Lack of CI Adoption Reasons:**
<br>

1. Challenges Related to Licensing Tiers, Seats, Compute Mins and Storage Costs
2. Security and Compliance Workflow Challenges
3. Challenges Related to Learning About Functionality and How to Use It
4. Organizational Challenges Within Your Company Related to Adopting
5. GitLab Continuous Integration (CI) Workflow(s) Challenges
6. Deployment Workflow(s) Challenges within GitLab
7. Challenges with Planning and Tracking Work
8. Repository and Code Review Workflow Challenges
9. Migrating to GitLab
10. Platform downtime / availability
11. Does not intend to use GitLab CI
12. Is all-in on GitLab CI (no other solution) but has high business user count
13. N/A (Green CI adoption)
<br>

**Lack of Security Adoption Reasons:**
<br>

1. User Roles and Access Management
2. Configuring and maintaining the security scanning of application code
3. Managing security scan results and remediating confirmed vulnerabilities
4. Dependency management, scanning, and visualization
5. Secrets and/or CI Variables Management
6. Integration with SSO Providers
7. Compliance Workflows (including rolled-up views, workflows)
8. Stuck on adoption outside of DSO (CI, etc)
9. Migrating to GitLab
10. Organizational Challenges Within Your Company Related to Adopting
11. Security and Compliance Workflow Challenges
12. N/A (Green DSO Adoption)
<br>

#### Resources

- [Template Deck for Customer Conversations](https://docs.google.com/presentation/d/13IVtUCA8-S3Tjtcnk3y6eY-zEG6R5hmD3bSoKn3C-N8/edit?usp=sharing) (Internal Only)
- Use the [Use Case Adoption Scorecard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/f18df482-a70f-4a8b-8c82-1f99538d777e) dashboard in Gainsight to view your customer's SCM Metrics to export and calculate the Adoption score
- [Use Case Adoption Scoring - Defined Metrics](https://docs.google.com/spreadsheets/d/1dJLQIwoQxSK6pJL-ZmbMK_VUBmY0INZPgVsWqsypHzI/edit?usp=sharing) (Internal Only)
- [Customer 360](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCustomer360/Customer360LandingPage?:iid=1) - A dashboard that provides a comprehensive, detailed view of individual customers, consolidating their health score, use case adoption and account information.
- [Account Landscape](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTAccountLandscapeUseCaseAdoption/AccountLandscapeDashboard?:iid=1) - A dashboard that provides macro level overview of all customers to identify and target specific segments of customers with change in use case adoption
<br>
