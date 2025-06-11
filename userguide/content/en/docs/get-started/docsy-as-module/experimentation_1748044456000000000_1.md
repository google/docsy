---
title: Experimentation Design & Analysis
description: Overview of PDI's approach to experimentation
---

## Overview

At GitLab, we have a unique approach to experimentation that is built in-house by our incredible development team. The reason we use this approach is to uphold our commitment to our users and customers to protect their privacy. This custom approach leads to some challenges that are not experienced with more commonly used 3rd party experimentation tools. Due to this reality, experimentation at GitLab must be approached with a high level of intentionality and forethought. The purpose of this handbook page is to create some guidelines around experimentation to avoid common errors and to define best practices.

In order to increase our [velocity](/handbook/engineering/development/growth/#experiment-cadence)
while maintaining our ability to learn from experiments, the GitLab Growth stage (including the
Product Analysis group) is adopting a new framework for designing and analyzing experiments. This
framework is adapted from the work of data scientist [Danielle Nelson](https://www.linkedin.com/in/daniellevnelson/).

Like everything at GitLab, this page and how we implement the framework are [in draft](/handbook/values/#everything-is-in-draft),
and we will [iterate](/handbook/values/#iteration) over time.

## Framework

This experiment framework is derived from the previous version of our Experiment Framework, which utilized the `gitlab_dotcom_experiment_subjects` table to host the unique identifiers. The `snowplow_gitlab_events_experiment_contexts_all` replaces this table as a landing place for all unique identifiers. This framework was created to improve efficiency and maintain our commitment to user privacy by using [pseudonymized data](/handbook/product/product-processes/analytics-instrumentation-guide/service-usage-data-commitment/#data-pseudonymization) to avoid tracking user-identifiable data.

The current experiment framework that is being utilized by GitLab is called the `gitlab-experiment-gem` or GLEX for short. Here at GitLab we run experiments as A/B/n tests and review the data the experiment generates. From that data, we determine the best performing code path and promote it as the new default code path, or revert back to the original code path. You can read our [Experiment Guide documentation](https://docs.gitlab.com/development/experiment_guide/) if you're curious about how we use this [gem](https://www.solutelabs.com/blog/how-to-create-a-gem-in-ruby-on-rails) internally at GitLab. This experiment framework relies heavily on front-end events or events that are created by our data collector, Snowplow.

When we discuss the behavior of this gem, we'll use terms like experiment, context, control, candidate, and variant. It's worth defining these terms so they're more understood. These are the universal terms used across the company.

- **experiment** is any deviation of code paths we want to run sometimes and not others.
- **contexts** is used to identify a consistent experience we'll provide in an experiment.
- **control** is the default, or "original" code path.
- **candidate** defines that there's one experimental code path.
- **variant(s)** is used when more than one experimental code path exists.
- **behaviors** is used to reference all possible code paths of an experiment.

For this documentation, these are the important terms that need to be expounded on that are specific to Snowplow Event Structures.

### Contexts

This is the JSON column that will contain any useful identifiers that are used to tie experiments to a specific namespace or project. These identifiers will be used to measure experiment impact on the KPIs and is required for every experiment for analysis. Prior versions of experiment analysis required this data to be parsed manually via SQL in order to utilize the information stored in this column, but the current `experiment_contexts_all` table already parses this data for ease of use.

Context_keys are used in experiment analysis to determine the unique users/projects/namespaces that engage in the various features and/or stages as defined by the experiment analysis. Context_keys can be "sticky" to various identifiers (either user, namespace, project or some combination of user per project or user per namespace) depending on what is needed for the experiment.

Examples:

- Assigning context_key to be sticky to a user (1 context key = 1 user), if we're identifying how many users adopted specific features as a result of an experiment regardless of their namespace or project.
- Assigning context_key to be sticky to namespaces (1 context key = 1 namespace) , if we're identifying how many stages were adopted as a result of an experiment regardless of how many users engaged in each stage.
- Assigning context_key to be sticky per user, per namespace (1 context key = 1 user per namespace) if we're identifying how many specific users in a namespace adopted specific features as a result of an experiment. This will prevent users who are part of multiple namespaces to have their feature and/or stage adoption from being counted towards all the namespaces they are a part of.

### Variant

Variants can be defined as either `candidate` or `control` if running a traditional A/B test. If a multivariate experiment is being run, each variant must have a unique identifier per variant as well as a control to set a baseline for the experiment.

## Event requirements

For successful implementation of a GLEX experiment, events need to contain certain data to be able to analyze an experiment successfully. Below is a table that outlines the columns that will be analyzed and the use of each.

|    Database Column Name    | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|          event_id          | A unique identifier per event that is fired - can be multiple per context key / user as this data is recorded each time an event is fired.                                                                                                                                                                                                                                                                                                                                  |
|       experiment_name      | The unique title of the experiment being launched. Normally written in `snake_case`. <br><br>**Example:** <br>- billing_in_nav <br>- continuous_onboarding_links                                                                                                                                                                                                                                                                                                            |
|     experiment_variant     | An identifier that differentiates the unique experiences that are being launched to the population. <br><br>**If experiment is A/B:** <br>- Candidate <br>- Control<br><br>**If experiment is multivariate:** <br>- Control<br>- Variant 1<br>- Variant 2, Variant 3 etc until all variants are identified                                                                                                                                                                  |
|         context_key        | An identifier that is used to differentiate the unique entities in an experiment. These can be 'sticky' or defined at different levels. More documentation on context_keys are outlined above. <br><br>**Example:** <br>1. If you are looking for events per user, assign the context_key per user <br>2. If you are looking for events per namespace, assign the context_key per namespace                                                                                 |
|        event_action        | An identifier that describes the action type for events <br><br>**Example:** <br>- `assignment` events are used to identify when those in the sample have been assigned to the experiment <br>- `click_button` events are used to identify all CTAs in an experiment                                                                                                                                                                                                        |
|         event_label        | An identifier used alongside the `event_action` to specify which action is being fired. <br><br>**Example:** <br>- If you have a `click_button` event_action, an event_label will specify which `click_button` is being interacted with.                                                                                                                                                                                                                                    |
|       event_category       | An identifier used for events to specify where in the product the event is being fired. <br><br>**Example:** <br>- A `navbar_top` event category paired with the `click_button` event_action indicates that this event is rendered due to a button click in the top navigation bar.                                                                                                                                                                                         |
|         event_label        | An identifier for events that is used for further identification of an event if the event_category and event_label do not provide enough identification for the event. <br><br>**Example:** <br>- An `activate_form_input` event has the event_category of `projects:new` and the event_label of `blank project` - for further identification of the event, the `project_description` value is put in the `event_label` to further specify where the event is being fired.  |
|      gsc_namespace_id      | A unique identifier for namespaces as currently used in `legacy.gitlab_dotcom_namespaces_xf` and `common.dim_namespace`                                                                                                                                                                                                                                                                                                                                                            |
|       gsc_project_id       | A unique identifier for projects as currently used in `legacy.gitlab_dotcom_projects_xf` and `common.dim_project`                                                                                                                                                                                                                                                                                                                                                                  |
| gsc_pseudonymized_user_id  | An [pseudonymized](/handbook/product/product-processes/analytics-instrumentation-guide/service-usage-data-commitment/#data-pseudonymization) identifier that is unique to each user. <br><br>Please note that in accordance with our commitment to user privacy, this data cannot be joined with other tables to identify a specific user. This column is only present in the Snowplow tables.                                                                                                                                                                                                          |

## Division of responsibilities and roles for experiment deployment

There are three main roles that need to be involved in the creation, launch, and analysis of an experiment. This table below outlines the different roles that need to be involved for the successful implementation of a GitLab experiment.

|                          |                                                       Product Manager                                                      |                                                 Engineer                                                 |                    Product Analyst                   |
|:------------------------:|:--------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------:|:----------------------------------------------------:|
|         Planning         | Issue creation<br>Determine experiment type<br>Primary, secondary, and guardrail metric identification<br>Event definition | Event definition review                                                                                  | Experiment Type, Metrics and Event definition review |
|      Implementation      |                                                                                                                            | Implementing events and event tracking into the product through manually coding events into the product  |                                                      |
|            QA            | PM/Dev QA the experiment variants                                                                                          | Rollout on staging                                                                                       | Data checks to ensure data collection in staging     |
| Experiment in Production | PM confirms experiment variants                                                                                            | Data QA                                                                                                  | Data QA, Dashboard Creation                          |
|      Post-Experiment     | Ending of experiment and post-experiment data collection                                                                   | Resolution and cleanup                                                                                   | Experiment Analysis                                  |

### Experimentation guide for Product Managers

#### Creating a clearly defined hypothesis

##### What is a hypothesis?

A hypothesis is defined as a proposed explanation or solution for an observation. In the world of experimentation, we look at a hypothesis as a prediction that you create prior to running an experiment and helps answer the question "What are we hoping to learn from this experiment?"

##### Writing a hypothesis

A complete hypothesis has three parts - the goal of the hypothesis is to define what change you are trying to implement and what the effect of that change will be. You can use this simple, three-part formula to write out a hypothesis:

"If ____, then ____, because ____."

The **If** portion of the formula pertains to a variable that can be modified, added, or taken away to produce a desired result or outcome. For example, "**If** we add an additional CTA" or "**If** we remove this page."

The **then** portion of this formula pertains to the desired result that will happen as a result of the variable that was changed above. For example, "If we add an additional CTA, **then** we will see more views to the subsequent page."

The last part of the formula or the **because** portion refers to the rationale behind your expected result. This is the research, anecdotes, or observations that explains what caused the change. For example, "If we add an additional CTA, then we will see more views to the subsequent page **because** we will be directing more users directly to this page."

#### Success metrics

##### Considerations for success metrics

Start with defining the metrics that you will use to determine success in the experiment. The different types of metrics that are defined are outlined in more detail below, but here are some additional components that should be considered when going through the thought process of outlining an experiment:

1. The reasoning behind selecting the target metrics over conversion metrics
   - Ex: low traffic/volume would bring our velocity to a screeching halt if we use conversion metrics, we would have to run the experiment for 9 months to reach significance
   - Ex: the experiment is intended to drive traffic to a page, not necessarily influence conversion

2. The assumptions we are making about the collision (or lack thereof) of concurrent experiments (if there are two or more experiments targeting the same population of users)
   - Ex: we assume that a concurrent experiment will not be a material impact on this experiment's target metric

3. The risks we are assuming by proceeding with the given metrics, experiment sequencing, and experiment design
   - Ex: Higher clicks might not lead to higher conversion, it's possible that we have a negative impact on down-funnel metrics

4. Why we have the appetite for those risks
   - Ex: We want to be able to keep the business moving and continue iterating on experiments

5. Whether we will do a longer-term follow-up to try to look at conversion metrics. (It may be that a longer-term follow-up measurement is not even possible due to experiments colliding)
   - Ex: We will follow-up in 2 months to see what conversions look like for the control and candidate
   - Ex: We will not be able to do a follow-up to see conversion because of the following experiments colliding

##### How to identify success metrics

Here are some questions to help guide the selection of metrics for an experiment. We recommend defining 1 target KPI or what we would use to declare a winner in this experiment, and any other secondary KPIs that you'd like to be included in the analysis:

1. What is the business question you are trying to answer?
2. What is the desired effect for this experiment? (More engagement like clicks, page views, stage adoption, or an increase in paid conversion)
3. What are the variants that are being introduced in the experiment and what is the expected behavior?
4. Are there events or a sequence of events that are specific to a variant vs. the control group?

NOTE: Product Analysis is available to help with the definition of events and metrics for experiments for better alignment before proceeding with the analysis

##### Success metric definitions

There are three different kinds of metrics that can be defined for an experiment:

**1.Primary Metrics**

These are the main KPIs or metrics that you expect to be impacted by the experiment. Usually these metrics will be used to define the success or failure of the experiment using statistical significance - be sure to consult the Product Analysis team to identify how long it will take these metrics to hit statistical significance.

Examples:

- If launching an experiment that affects trials, a primary metric you could use is the count of trials that are being created from this experiment
- If launching an experiment that affects conversions, a primary metric you could use is the count of conversions generated from this experiment

**2. Secondary Metrics**

These are any metrics that you expect could be impacted by the experiment but are not going to be the main metrics that we will use to declare success or failure for an experiment.

Examples:

- If your experiment specifically is looking at the number of trials, you could also place conversions as a secondary metric as the increase in trials would theoretically impact the number of conversions.
- If your experiment is targeting adoption of a specific stage, you could place Stages per Organization as a secondary metric as the increase in adoption of a stage could lead to additional stages being adopted.

**3. Leading Indicators**

Leading indicators are a directional determinant of the performance of an experiment based on the volume of front-end events between variants

Examples:

- If your experiment is looking at visits to a new landing page, you could place pageviews as a leading indicator
- If your experiment is looking at new CTAs being added to the product, you could place button clicks as a leading indicator

#### Experiment types

Identify what kind of experiment you'd like to conduct from the experiments we've described below. We've also included a questionnaire that will help you decide what desired result you'd like from the experiment: Our experimentation design and analysis framework leverages two different "types" of experiments: **True Randomized Control Trials (True RCTs)** and **Pseudo-Randomized Control Trials (Pseudo-RCTs)**. The two types differ in terms of statistical rigor (including p-value interpretation), which in turn impacts required sample size and experiment duration.

**True RCTs are optimized for statistical certainty and pseudo-RCTs are optimized for experiment
velocity.**

##### True Randomized Control Trials (True RCTs)

True RCTs are the most statistically rigorous experiments which, if designed and run properly, result
in causal inference. In other words, we can actually say that the experiment *caused* a change
in a metric. True RCTs are classic "A/B/n Tests". Unfortunately these types of experiments and the
certainty of the learnings come at a price: they tend to require a large sample size and experiment
duration. If the effect size (minimum change in the metric that would be relevant to detect) is
small (ex: you want to detect a 1% change), the metric is less prevalent (ex: low conversion rate),
or the variance in the metric is large (i.e., a "noisy" metric), you need a much larger sample
size. In addition, there needs to be extra care taken to ensure that experiments are not colliding.

True RCTs will be developed and evaluated with the industry standard statistical significance level
of p <= 0.05 and a power of 0.8.

- p <= 0.05: results are **statistically significant**
  - Ex: The variant landing page showed a significant increase of 10% in click rate.
- p > 0.05: results are **not statistically significant**
  - Ex: The difference in click rate between control and variant landing pages was not significant.

##### Pseudo-Randomized Control Trials (Pseudo-RCTs)

Pseudo-RCTs are less statistically rigorous than true RCTs and lead to directional learnings. In
other words, we cannot say that the experiment *caused* a change in a metric, but we can say
it *directionally impacted* a metric. Pseudo-RCTs carry the spirit of true RCTs without
requiring a larger sample size and duration. As such, they carry a higher risk that the results
were due to random chance instead of the experiment.

Since pseudo-RCTs are less strict, we evaluate them based on a looser p-value interpretation
and we use different language to understand and communicate the results. The language used for
these measurements needs to be very intentional so as to not overstate our confidence. This
means that we should *not* communicate a percent change (ex: 10% increase) because our level of
certainty and statistical significance could be misinterpreted. In addition, including the p-value
(or noting the confidence level) helps to avoid misinterpretation.

- p <= 0.05: experiment **"had an impact"**
  - Ex: The variant landing page showed a lift in click rate from 40% to 44% (p=0.04).
- p > 0.05 and p < 0.2: experiment **"had a directional impact"** (or **"might have had an impact"**)
  - Ex: The variant landing page showed a directional lift in click rate from 40% to 44% (p=0.11).

##### Considerations for selecting experiment type

It is not always straightforward or easy to select which type of experiment to run. Here are a
few questions to help guide that decision:

- **How certain do I need to be that this experiment *caused* a change in a metric?** Is a
directional learning sufficient?
  - If the metric is critical to the business and you need to be certain that the experiment
  caused a change, then you should run a true RCT.
- **How large of an impact do I expect and care about?** Does it matter if the metric moves 1%
or do I really only care if it changes 10%?
  - If you need to detect a small impact, then you will need a larger sample size.
- **How prevalent and/or volatile is the metric I care about?**
  - If the metric is less prevalent and/or more volatile, then you will need a larger sample size.
  - If the metric is very volatile, then you may struggle to detect an impact if you run a pseudo-RCT.
- **What other experiments are running or are queued up to be run?** Does running this experiment
a long time impair our ability to start another, higher priority experiment? Is there another
experiment currently running that will collide with this one?
  - If you need to be certain of the results, then you will likely need to run the experiment for
  a longer period of time *and* be extremely careful of experiments interacting.
- **Would I do something differently based on the level of certainty in the results?** Would I make a
different decision if I knew the experiment caused a change in a metric than if I knew it
directionally impacted a metric?
  - If you would make the same decision regardless of a causal or directional impact, you should
  likely run a pseudo-RCT.

We will continue to build out a guide on how to select which type of experiment to run.

#### Further steps to be taken

1. After defining your metrics, work with your Product Analysis team and engineers to identify what the best method of tracking would be and which events need to be tracked.
    - Are you tracking front-end events? Back-end events?
    - Are you conducting a funnel analysis? If so, is there an order of events that you are tracking?
    - What is your conversion event (or what you would consider as a successful conversion)?
    - If you are tracking a conversion rate, specify what the numerator and denominator would be for this calculation.
      - Specify if time should be factored into the conversion rate, such as D7, D14, or D30 conversion.

2. Create an issue for the Product Analysis team using the ["Experiment Analysis Request" template](https://gitlab.com/gitlab-data/product-analytics/-/issues/new?issuable_template=Experiment%20Analysis%20Request).

3. Once the experiment has data in staging (before being launched into production) be sure to let the Product Analysis team know so they can check if the data is coming through.
    You can also use the [Experiment Data Validation](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTPDExperimentEventValidation/GrowthExperimentEventValidationDashboard) dashboard to check your data.

4. Once the experiment results have been analyzed and a variant has been launched, please inform Engineering so that any experiments that are concluded can be paused to maximize data warehouse storage.

### Experimentation guide For Engineers

1. Work with your Product Managers to list the event names, type of event, and where the data is expected to be collected. Use the event definition table that is below to help format your event definitions.

    |     Action    | Funnel | Level | Source |                                                                                                    Description                                                                                                   |
    |:-------------:|:------:|:-----:|:------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
    |  assignment   |   1    |   BE  |  auto  | Any time the experiment is evaluated. Use unique keys to get experiences, or review as a total count. Group by unique keys to see changes over time or subsequent evaluations. Experiment is sticky to the user. |
    |  focus_form   |   2    |   FE  |  [link](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/60038/diffs#7232c8176a30817af010d3e442ef46afe5429362_0_6)  |                                                                                    Standard event with the [focus_form context.](https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0)                                                                                   |
    |  change_form  |   3    |   FE  |  [link](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/60038/diffs#7232c8176a30817af010d3e442ef46afe5429362_0_6)  |                                                                                   Standard event with the [change_form context.](https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0)                                                                                   |
    |  submit_form  |   4    |   FE  |  [link](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/60038/diffs#7232c8176a30817af010d3e442ef46afe5429362_0_6)  |                                                                                   Standard event with the [submit_form context.](https://github.com/snowplow/iglu-central/blob/master/schemas/com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0)                                                                                   |
    | create_group  |   5    |   BE  |  [link](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/60038/diffs#dc240efebd5278da9bb46419b7f74a5a9a3f12e9_26_26)  |                                                                              When a group is created in subsequent onboarding steps                                                                              |

2. Link any tracking and/or related-issues to the main experiment issue assigned to Product Analytics

3. Let all stakeholders know when the experiment is available on staging or production and at what percent (if rolling out in phases or in certain percentages of the population of users) it's currently set at.

### Experimentation guide For Analysts

1. Provide any guidance to Product Managers on suggested metrics to be tracked as well as nuances for event tracking that need to be taken into consideration based on the parameters of the experiment.
2. Work with Product Managers and Engineering to identify which events would make the most sense for your analysis as well as the identifiers that can be used to aid in the analysis of the experiment.
3. The Product Analysis team can help determine how long data needs to be collected in order for the results to be statistically significant. Here is a list of upfront calculations that will help determine the length of an experiment:
    - Check the estimated traffic or audience based on the criteria provided by your Product Manager
    - Calculate sample size using [this tool](https://docs.google.com/spreadsheets/u/1/d/1KP_rDB3e6pJuOJwA59HcAUVpWUuzoPveaJiTH_PSviM/edit#gid=0)
    - Check the z-score that is correlated with the experiment type and compute for sample size based on the z-score and baseline conversion
    - Calculate effect size using: STILL IN PROGRESS

4. Create a mock dashboard with staging data. This will help give the Product Managers an idea of what is realistically expected from the analysis before it is rolled out into production and can help tune what.
    - In the dashboard, be sure to include a link to the experimentation ticket as well as a short definition of the events so that it is easily understandable by people unfamiliar with the details of the experiment.
    - Be sure to check which events are flowing in, if they are collecting the right context, and call out any anomalies to the data collection.
    - Examples of past experiment analysis:
        - Jobs To Be Done Experiment
        - SaaS Trial Onboarding Experiment

Once production data has begun to flow in, be sure to swap your data source to reference production data and NOT staging data. Keep an eye on your metrics as they bake to their full sample size, and call out any discrepancies or unexpected behavior to your Product Manager.

There are a few standard filters that need to be applied across all experiment analysis to ensure representative results. Be sure that these filters are applied to your analysis if you are creating your own dashboard outside of the Standard Experiment Dashboard:

- All namespaces and/or projects must fall within the standard Growth definition of a namespace
- Using the `growth_data_namespaces` snippet is a good way to bring in data that is already being filtered
- Exclude any namespaces that are paid at the time of assignment (this is for Growth-specific experiments as these experiments normally target free users)
- The data included in the analysis must be after the experiment has been rolled out to 50/50 and there is an even distribution of the population between the control and the variants.
- If you are looking at projects, be sure to exclude any Learn GitLab projects as these are automatically generated projects

Be sure to check the sample size of the variants against the total population of GitLab users to identify the right sample size needed for results to reach the agreed upon level of significance/confidence.

Share any relevant insights to the Product Manager and discuss any post-experiment analysis that needs to be done.

## Common experiment errors

In this section, we will review some of the most common errors that are made by all parties that are involved in the creation, deployment, and analysis of an experiment. Be sure to be vigilant of these errors, as some of these can affect the overall results of the experiment.

### Type 1 Error or Type 2 Error

- A type 1 error normally occurs when you call a test as having a positive or negative impact when the hypothesis is null.
- A type 2 error normally occurs when you accept the null hypothesis when one variation is materially different from the other.
- Be sure to let the experiment run for the allotted time needed to hit significance before determining whether an experiment is a success or failure . For example, if you see an experiment start to show promising results that the experiment is impacting conversion and prematurely report this out as a success when by the end of the allocated time to allow the experiment to run, there was no true difference between the control and variant.

### Missing events after experiment launch

- This type of error occurs when there isn't any communication between the product, engineering, or analyst. Events will either be missing or will not contain the identifiers needed to be able to track the performance of the experiment.
- Be sure that all events needed for an experiment are documented and communicated to the rest of the team.

### Cross-contamination of experiment results

- Cross-contamination of data can happen when too many experiments are being run in the same area of the product and/or are being shown to the same population of users.
- Be sure to check how many experiments are being run at any given time.

## Additional resources

You can find additional experimentation resources throughout the handbook and GitLab docs.
Here are a few pages to check out:

- [How Growth launches experiments](/handbook/product/groups/growth/#how-growth-launches-experiments)
- [Growth Engineering Guide to running experiments](/handbook/engineering/development/growth/experimentation/)
- [GitLab Experiment Guide](https://docs.gitlab.com/development/experiment_guide/)

<details markdown="1">
  <summary markdown="span">Click to view useful terms</summary>

Here are some useful terms used in the context of experimentation. In addition to the definitions
below, Khan Academy provides [excellent videos](https://www.khanacademy.org/math/ap-statistics/tests-significance-ap)
explaining these terms and concepts.

- **Null hypothesis (H<sub>0</sub>):** The default hypothesis that there is no relationship
between variables.
  - In experimentation, we are trying to disprove or reject the null hypothesis.
- **Alternative hypothesis (H<sub>1</sub> or H<sub>A</sub>):** The hypothesis that there is a
relationship between variables, the opposite of the null hypothesis.
- **Type I error:** The rejection of a true null hypothesis, a "false positive".
- **Type II error:** The non-rejection of a false null hypothesis, a "false negative".
- **Alpha (α):** The probability of committing a Type I error (returning a "false positive"),
sometimes called the significance level.
  - The industry standard is α = 0.05, which is the value we use for true RCTs but not necessarily
  for pseudo-RCTs.
  - This value is set *before* an experiment starts to prevent bias from sneaking into the
  interpretation of results.
- **p-value:** The probability that the observed results are due to random chance, *assuming
the null hypothesis is true*.
  - Ex: p=0.03 means that there is a 3% chance that the results you are seeing are due to chance.
  - See the sections above about p-value interpretation for each experiment type.
- **Statistical significance:** Results are considered to be statistically significant if p <= α.
- **Confidence interval (CI):** Range of values that is likely to include a given value within a
given confidence level (1-α).
- **Beta (β):** The probability of committing a Type II error (returning a "false negative").
- **Power (1-β):** The probability of correctly rejecting the null hypothesis. In other words,
your ability to detect a difference between experiment variations where there is actually a
difference between groups.
  - The industry standard for Power is 0.8.
- **Effect size:** The magnitude of difference between groups.
  - We use minimum effect size when designing up experiments (what is the minimum change we want
  to detect).
- **Sample size:** The number of observations (ex: users, namespaces, etc) included in an experiment.
  - We calculate the minimum sample size required to detect a given size impact in a given metric.

</details>
