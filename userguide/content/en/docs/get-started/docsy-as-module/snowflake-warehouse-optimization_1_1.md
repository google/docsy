---
title: "Snowflake warehouse optimization"
description: ""
math: true
---

## Quick Summary

Guidelines to choose the correct warehouse for a particular dbt model:

- The user should base the initial *estimated* warehouse size on the number of partitions scanned within the query
- Benchmark by increasing the warehouse size and comparing the 'cost' vs 'reduction in query time'
- In the context of the total credits consumed by the dbt DAG, right-sizing warehouses by model for the smallest models does not lead to much cost reduction

## Prospectus

In our current dbt set-up, we use a mix of `Large` and `X-Large` warehouses to run our production dbt jobs, based on the model tag.

However, dbt offers the ability to specify the warehouse size on the *model* level.

Initially, we had looked at right-sizing the warehouse for every single model, and we ran benchmarks [in this issue](https://gitlab.com/gitlab-data/analytics/-/issues/21802#note_2143766668) to see what the potential cost savings would be. We found that right-sizing the warehouse for our smaller models doesn't make a key difference in the credits consumed when looking at overall credit consumption.

However, this does not make right-sizing the warehouse for models an unnecessary task. It just shows that we should be selective about which models we try to right-size. Since it takes time to right-size each model, time should be allocated to the models that are currently costing the most credits.

The rest of this page will document:

1. Key theoretical concepts for warehouse efficiency:
    - How warehouse sizing affects cost vs performance
    - What makes the most 'efficient' warehouse for our needs
    - Hypothetical examples
1. How to right-size a warehouse
    - Steps needed
    - Real-world examples
1. When to spend time right-sizing models
1. Future steps

## Section 1: Warehouse sizing - concepts

<details><summary>Warehouse sizing - concepts</summary>

### Concept 1: Cost vs Performance

Each time you increase the size of the warehouse by one level, you are doubling the CPU and RAM of your compute instance. Correspondingly, you are also doubling the price via the credits you consume.

While the *price is doubled*, in an ideal world on the proper workload/query, the *query time is reduced by half* due to the doubling of the compute instance's resources. Therefore, in this situation, you would pay the same price on either warehouse, but the bigger warehouse would halve the run-time of the query, making it the more efficient choice.

Eventually, if you keep upsizing the warehouse, you'll reach a point of diminishing returns, where the query run-time may be only slightly reduced while the costs increase disproportionately faster.
Here's a select.dev [cost vs performance diagram](https://images.app.goo.gl/K3asyxSqhJqP2hM76) illustrating this point [1].

### Concept 2: Defining Warehouse efficiency

Warehouse Efficiency comes in two dimensions: cost and performance. Note that 'warehouse efficiency' is a different concept than [model efficiency](dbt-guide/#model-efficiency).

Because there are two dimensions, 'warehouse efficiency' doesn't have a clear definition; it needs to be decided based on how much you value 'cost' versus 'performance.'

In our case, we want one of these two outcomes when using a different warehouse:

- *maintain* existing runtimes while reducing costs
- *reduce* runtimes, without increasing cost drastically

Based on the requirements above, we will define warehouse efficiency clearly as follows:

> **A warehouse is efficient when compared to the next-size smaller warehouse; the query run-time is reduced by 40% or more.**

Explanation: As discussed in the previous section, for the next-size bigger warehouse to break even, it needs to run 2x as fast (query run-time is reduced by **50%**) to compensate for its 2x price increase.

In our definition, we require run-time to be reduced by at least 40%, which translates to a maximum increase in cost of 20%. The reason why we don't require a 50% reduction in run-time (and break-even in costs) is the following:

- we need our performance to stay close to existing dbt run-times
- we want to work iteratively, which means setting a more realistic goal that allows some wiggle-room and then adjusting the goalpost once we learn more.

<details><summary>Aside: calculating percentage improvements for run-times</summary>

To get into a technicality here, percentage improvement in query run-time can be a bit confusing because performance improves when run-time *decreases* - it's an inverse relationship.

We will calculate the percentage improvement in run-time using the traditional formula [2]:

$$
\frac{new - old}{old} \times 100\%
$$

For example, if we have the values `new = 5` and `old = 10`, the calculation would be:

$$
\begin{align*}
\frac{new - old}{old} \times 100\% &= \frac{5 - 10}{10} \times 100\% \\
&= \frac{-5}{10} \times 100\% \\
&= -50\%
\end{align*}
$$

That means the new value is 50% smaller (faster, since we're talking about response time) than the old value.

</details>

That might sound a bit vague, so here are some hypothetical examples:

#### Hypothetical Examples

##### Example 1

The run-time has decreased by 50%, from 1 hour -> 30 minutes. In this case, it's a no-brainer to increase the warehouse size:

| warehouse_size | Credits/hr | run-time in hours | cost   |
|----------------|------------|------------------|--------|
| X-small        | 1          | 1                | $2     |
| Small          | 2          | 0.5              | $2.00  |
| % increase     |            | -50%              | 0%     |

##### Example 2

The run-time has decreased by 40% from 1 hour -> 36 minutes. Meanwhile, the cost has increased by 20% from $2 to $2.40:

| warehouse_size | Credits/hr | run-time in hours | cost   |
|----------------|------------|------------------|--------|
| X-small        | 1          | 1                | $2.00  |
| Small          | 2          | 0.6              | $2.40  |
| % increase     |            | -40%              | 20%    |

In this case, upsizing the warehouse is no longer a no-brainer. It now depends on how much you value cost vs. query run-time.

If you only cared about cost, you would stick with the X-small; if you only cared about speed, you would go with the Small.

In our case, we want to find a balance between both, so we use the previously established guidelines:

> **A warehouse is efficient when compared to the next-size smaller warehouse, the query run-time is 40% less.**

In this case, since the query run-time has been reduced by 40%, it's exactly on the threshold of being considered 'efficient', and we should choose the 'S' warehouse.

##### Example 3

Example 3, run-time has decreased by 20% from 1 hour -> 48 minutes. Meanwhile, the cost has increased by 60%, from $2 to $3.20:

| warehouse_size | Credits/hr | run-time in hours | cost   |
|----------------|------------|------------------|--------|
| X-small        | 1          | 1                | $2.00  |
| Small          | 2          | 0.8              | $3.20  |
| % increase     |            | -20%              | 60%    |

In this case, the query would be considered 'inefficient' because the runtime has only been reduced by 20%. For it to be considered 'efficient', the runtime needs to be reduced by 40% or more. Therefore, the 'XS' warehouse should be chosen.

</details>

## Section 2: Steps to right-sizing warehouse

<details><summary>Steps to rightsizing warehouse</summary>

We have discussed in theory what an 'optimal' warehouse is, but how do we actually choose the correct warehouse for each model?

Here are the steps:

1. run an [explain plan](https://docs.snowflake.com/en/sql-reference/sql/explain) to figure out how many partitions the table has
1. Based on the number of partitions, use select.dev [# of partitions diagram](https://images.app.goo.gl/KtS6aXsKhRzN7e3f6) to **estimate** what warehouse to start with
1. Run the query in `dbt` with the estimated warehouse from the previous step
1. Check the below 'Benchmarking heuristics' section to see if you can immediately assign a warehouse; if not, continue
1. Using this [Google Sheet](https://docs.google.com/spreadsheets/d/1dh7cKTxeV3rUQ2J_k4nxPGbMe7IQFc-D1Rbahjsk5zc/edit?gid=1778011584#gid=1778011584) record the `query time`
1. Upsizing warehouse(s)
    - Now, rerun the query with the next highest warehouse
    - Record the results in the Google Sheet again
    - Stop once the *cost* is increasing faster than the *performance*

In the following sections, we'll look at the following:

- Why the benchmarking needs to happen in dbt
- We'll look at two examples of right-sizing warehouses by following these steps:
  1. simple query: `gitlab_dotcom_deployment_todo_dedupe_source`
  1. more complicated query with more partitions: `prep_ci_stage`

<details><summary>Why benchmarking should be done in dbt environment</summary>

### Benchmarking needs to be done in dbt

In the above list of steps, it states that the queries need to be run in dbt. This is because for almost all models, at least two sets of SQL statements are being run. Firstly, a `SELECT` statement is being run, but additionally, one of these two statements is also being run under the hood:

- For incremental models, a [`MERGE`](https://docs.snowflake.com/en/sql-reference/sql/merge) statement is being run
- For new and full_refresh models, a `CREATE TABLE` statement is being run

These additional SQL statements can be expensive computationally and need to be part of the benchmark.

When using `dbt run`, these statements are automatically run for you. Therefore, it's best to run all warehouse benchmarking queries via dbt, either locally or via CI job.

#### Benchmarking incremental runs

When benchmarking `incremental` models specifically, the 'most efficient' warehouse will differ based on whether it's an incremental or full_refresh run.

At the very least, the incremental runs should be benchmarked like so:

1. The corresponding table should be fully loaded
1. Delete the previous day of data and then run the model *incrementally* using the estimated warehouse based on the partition size.

Optional: The model could also be benchmarked by running it on `full_refresh` as well. That way, the model can be configured on a different warehouse based on whether it is an `incremental` or `full_refresh` run:

```sql
{% if is_incremental() %}
  {{ config(
      warehouse='smaller_warehouse'  # Use this warehouse for incremental runs
  ) }}
{% else %}
  {{ config(
      warehouse='larger_warehouse'  # Use this warehouse for full refresh runs
  ) }}
{% endif %}

SELECT *
FROM my_table
```

</details>

<details><summary>Real world benchmarking examples</summary>

The below sections will look at two examples of how to follow the benchmarking steps.

### example 1: gitlab_dotcom_deployment_todo_dedupe_source

The first step is to run an explain plan, which shows the query has 630 partitons:

```sql
EXPLAIN
SELECT
  *
FROM
  "RAW".tap_postgres.GITLAB_DB_TODOS
QUALIFY ROW_NUMBER() OVER ( PARTITION BY id ORDER BY _uploaded_at DESC) = 1;
```

The 2nd step is to choose a warehouse based on the number of partitions, per the above diagram. In this case, with 630 partitions, we can start with a size `XS` warehouse.

With warehouse `XS`, the query `01b5ff9d-080a-e214-0000-289d77d4f1e2` took 7m14s, so we'll add those stats to the Google Sheets template

Next, we will try using `M` warehouse. First, let's remove caching by running:

```sql
ALTER SESSION SET USE_CACHED_RESULT = FALSE;
```

With warehouse `M` query `01b5ffc3-080a-e214-0000-289d77d57b3e` took 1m45s, so we'll add those stats to the Google Sheets template:

| warehouse_size | Credits/hr | run-time minutes part | run-time seconds part | run-time in hours | cost   |
|----------------|------------|----------------------|----------------------|------------------|--------|
| X-small        | 1          | 7                    | 14                   | 0.12             | $0.24  |
| Medium         | 4          | 1                    | 45                   | 0.03             | $0.23  |
| % increase     |            |                      |                      | -76%             | -3%    |

The above shows that with the `M` warehouse, run-time has decreased by 73%, AND cost has also decreased by 3%, meaning that a 'M' warehouse is superior to the XS warehouse in this situation.

Since performance has increased faster than cost, we can upsize again to the `L` warehouse to see if that continues.

Using the `L` warehouse, the query `01b5ffdc-080a-e214-0000-289d77d5c756` finished in 1m23s, pasting this into the spreadsheet:

| warehouse_size | Credits/hr | run-time minutes part | run-time seconds part | run-time in hours | cost   |
|----------------|------------|----------------------|----------------------|------------------|--------|
| X-small        | 1          | 7                    | 14                   | 0.12             | $0.24  |
| Medium         | 4          | 1                    | 45                   | 0.03             | $0.23  |
| Large          | 8          | 1                    | 23                   | 0.02             | $0.37  |
| % increase     |            |                      |                      | -21%             | 58%    |

The above spreadsheet shows that query run-time was reduced by 21% (good), but costs increased by 58% (bad). Therefore, the price is growing much faster than the performance gains.

Conclusion: The `M` warehouse has the best run-time-to-cost ratio and should be used for this model.

### example 2: prep_ci_stage

<details><summary>explain plan</summary>

```sql
EXPLAIN
WITH
  dim_project AS (
    SELECT
      *
    FROM
      "PROD".common.dim_project
  ),
  dim_ci_pipeline AS (
    SELECT
      *
    FROM
      "PROD".common.dim_ci_pipeline
  ),
  dim_namespace_plan_hist AS (
    SELECT
      *
    FROM
      "PROD".common.dim_namespace_plan_hist
  ),
  dim_date AS (
    SELECT
      *
    FROM
      "PROD".common.dim_date
  ),
  ci_stages AS (
    SELECT
      *
    FROM
      "PREP".gitlab_dotcom.gitlab_dotcom_ci_stages_dedupe_source
    WHERE
      created_at IS NOT NULL
  ),
  joined AS (
    SELECT
      ci_stages.id AS dim_ci_stage_id,
      IFNULL(dim_project.dim_project_id, -1) AS dim_project_id,
      IFNULL(dim_ci_pipeline.dim_ci_pipeline_id, -1) AS dim_ci_pipeline_id,
      IFNULL(dim_namespace_plan_hist.dim_plan_id, 34) AS dim_plan_id,
      IFNULL(dim_namespace_plan_hist.dim_namespace_id, -1) AS ultimate_parent_namespace_id,
      dim_date.date_id AS created_date_id,
      ci_stages.created_at::TIMESTAMP AS created_at,
      ci_stages.updated_at::TIMESTAMP AS updated_at,
      ci_stages.name AS ci_stage_name,
      ci_stages.status AS ci_stage_status,
      ci_stages.lock_version AS lock_version,
      ci_stages.position AS POSITION
    FROM
      ci_stages
      LEFT JOIN dim_project ON ci_stages.project_id = dim_project.dim_project_id
      LEFT JOIN dim_namespace_plan_hist ON dim_project.ultimate_parent_namespace_id = dim_namespace_plan_hist.dim_namespace_id
      AND ci_stages.created_at >= dim_namespace_plan_hist.valid_from
      AND ci_stages.created_at < COALESCE(dim_namespace_plan_hist.valid_to, '2099-01-01')
      LEFT JOIN dim_ci_pipeline ON ci_stages.pipeline_id = dim_ci_pipeline.dim_ci_pipeline_id
      INNER JOIN dim_date ON TO_DATE(ci_stages.created_at) = dim_date.date_day
  )
SELECT
  *,
  '@mpeychet_'::VARCHAR AS created_by,
  '@chrissharp'::VARCHAR AS updated_by,
  '2021-06-29'::DATE AS model_created_date,
  '2022-06-01'::DATE AS model_updated_date,
  CURRENT_TIMESTAMP() AS dbt_updated_at,
  CURRENT_TIMESTAMP() AS dbt_created_at
FROM
  joined;
```

</details>

The EXPLAIN plan shows that there are a total of `9211` partitions that will need to be scanned. The estimation warehouse diagram has guidelines for 8,000 and 16,000 multi-partitions.

We'll start with the `L` warehouse.

Let's first run the below statement to prevent caching for benchmarking:

```sql
ALTER SESSION SET USE_CACHED_RESULT = FALSE;
```

These were the query run-times:

- `L`: 32m17s
- `XL`: 11m32s

Pasting the run-times in our spreadsheet:

| warehouse_size | Credits/hr | run-time minutes part | run-time seconds part | run-time in hours | cost    |
|----------------|------------|----------------------|----------------------|------------------|---------|
| Large          | 8         | 32                   | 17                   | 0.54             | $17.22  |
| XL             | 16         | 11                   | 32                   | 0.19             | $12.30  |
| % increase     |            |                      |                      | -64%             | -29%    |

It's clear that the `XL` is more 'efficient' here because the run-time was reduced by 64%, and the cost was reduced by 29%.

</details>

</details>

## Section 3: When to right-size models

<details><summary>When to right-size models</summary>

As mentioned in the Prospectus section, a benchmark was done right-sizing all the models in the `non-product` dbt task, and per [this benchmarking issue](https://gitlab.com/gitlab-data/analytics/-/issues/21802#note_2174248992). It shows that right-sizing the smallest models does NOT lead to significant cost-savings (if at all), even though these type of models make up more than 90% of the models within the run.

Therefore, in the context of the `dbt.py` DAG, benchmarking would be most valuable for the most expensive models. We can use the [query_attribution](https://docs.snowflake.com/sql-reference/account-usage/query_attribution_history) Snowflake table to find these models.

A small caveat to the above is that we also run dbt models in other environments outside of the production `dbt.py` DAG, such as:

- locally
- CI jobs

In these latter environments, it may make sense to right-size the warehouse for every model, even if the models are small. In these cases, the method to right-size doesn't need to be as precise, i.e., having to compare against multiple warehouse sizes. Instead, one could immediately assign an estimated warehouse per model based on the number of partitions scanned by the model.

To summarize, the priority for right-sizing warehouses should be the largest models that take the longest to run and consume the most credits since these models make up a disproportionate amount of the total credits consumed.

</details>

### Future steps

1. When working on query optimization of the most expensive models, one should also consider benchmarking the warehouse to make sure the most 'efficient' warehouse is being used
1. Consider implementing these benchmarking steps programmatically. For example, a CI job could be one end product of this that tells the user what size warehouse they *should* be using.

### Sources

- [1] [select.dev: warehouse sizing](https://select.dev/posts/snowflake-warehouse-sizing)
- [2] calculating percentage improvements for run-times, [StackOverflow](https://stackoverflow.com/questions/28403939/how-to-calculate-percentage-improvement-in-response-time-for-performance-testing/28404036#28404036)
``
