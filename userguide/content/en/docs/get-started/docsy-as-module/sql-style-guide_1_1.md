---

title: "SQL Style Guide"
description: "A set of conventions and guidelines for writing SQL at GitLab"
---







---

## SQL Style Guide

This guide establishes our standards for SQL and are enforced by the SQLFluff linter and by code review. The target code changes that this stile guide apply to are those made using dbt.

If you are not on the Data Team or you are developing SQL outside of dbt, keep in mind that the linting tools may be more difficult to apply, but you are welcome to follow the guidance given within this guide.

### Usage

We expect that people will use the style presented in this guide during there development. Enforcement is still expected to happen at the time of review as the CI pipeline is only run manually. At a latter date the pipeline will run with every change and eventually set to be mandatory for the pipeline to pass.

The previous style guide used a mixed indentation style that the linter does not support so every model will likely fail the first time it is checked. The intention is that models will be updated to the new style as they are worked on normally as not all of the rules can automatically enforced (such as explicit column aliasing). The intention of working updating them in the course of other development is to keep the changes manageable.

### SQLFluff

SQLFLuff is a SQL linter that works with templating tools like dbt. We use it to define the basic structure and style of the SQL that we write and move the review of that structure and style into the hands of the authors. SQLFluff is included within the dbt development environment and it uses the dbt templating engine during the linting process. It can be used with the following command:

```console
sqlfluff lint models/path/to/file/file-to-lint.sql
```

A dbt command can also be used to get a list of files to lint:

```console
sqlfluff lint $(dbt list --model model_name --output path)
```

If you are writing SQL that is not templated using dbt then you can install and use SQLFluff directly as it is a stand alone python package.

```console
pip install sqlfluff
sqlfluff lint path/to/file/file-to-lint.sql
```

SQLFluff includes a `fix` command that will apply fixes to rule violations when possible. Not all rule violations are automatically fixable; therefore, you are encouraged to run the `lint` command after using the `fix` command to ensure that all rule violations have been resolved.

- [SQLFluff Documentation](https://docs.sqlfluff.com/en/latest/index.html)
- [SQLFluff Default configuration](https://docs.sqlfluff.com/en/latest/configuration.html#default-configuration)

#### Changes from the default configuration

- selecting the dialect to snowflake
- selecting the templater to be dbt
- excluding the following rules:
  - L016 Line length
  - L031 No table aliases in FROM or JOIN clauses
  - L034 Order of simple targets and calcuations in SELECT statment
- aligning column aliases within the SELECT statement
- excluding the use of hanging indents
- selecting the tab size to be 2 spaces
- selecting Key words, Data Types and Functions to always be upper case
- require table aliases to be a minimum of four characters

The configuration file that the Data Team uses can be found in the [GitLab Data Team repository](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/.sqlfluff).

### General Guidance

- Do not optimize for fewer lines of code, new lines are cheap but [brain time is expensive](https://blog.getdbt.com/write-better-sql-a-defense-of-group-by-1/).

- Familiarize yourself with [the DRY Principal](https://docs.getdbt.com/docs/design-patterns). Leverage CTEs, jinja and macros in dbt, and snippets in Sisense. If you type the same line twice, it needs to be maintained in two places.

- Be consistent. Even if you are not sure of the best way to do something do it the same way throughout your code, it will be easier to read and make changes if they are needed.

- Be explicit. Defining something explicitly will ensure that it works the way you expect and it is easier for the next person, which may be you, when you are explicit in SQL.

### Best Practices

- No tabs should be used - only spaces. Your editor should be setup to convert tabs to spaces - see our [onboarding template](https://gitlab.com/gitlab-data/analytics/-/blob/master/.gitlab/issue_templates/Team%3A%20Data%20Onboarding.md) for more details.

- Wrap long lines of code, between 80 and 100, to a new line.

- Do not use the `USING` command in joins because it produces inaccurate results in Snowflake. Create an account to view the [forum discussion on this topic.](https://community.snowflake.com/s/question/0D50Z00008WRZBBSA5/bug-with-join-using-)

- Understand the difference between the following related statements and use appropriately:
  - `UNION ALL` and `UNION`
  - `LIKE` and `ILIKE`
  - `NOT` and `!` and `<>`
  - `DATE_PART()` and `DATE_TRUNC()`

- Use the `AS` operator when aliasing a column or table.

- Prefer `DATEDIFF` to inline additions `date_column + interval_column`. The function is more explicit and will work for a wider variety of date parts.

- Prefer `!=` to `<>`. This is because `!=` is more common in other programming languages and reads like "not equal" which is how we're more likely to speak.

- Prefer `LOWER(column) LIKE '%match%'` to `column ILIKE '%Match%'`. This lowers the chance of stray capital letters leading to an unexpected result.

- Prefer `WHERE` to `HAVING` when either would suffice.

### Commenting

- When making single line comments in a model use the `--` syntax
- When making multi-line comments in a model use the `/*  */` syntax
- Respect the character line limit when making comments. Move to a new line or to the model documentation if the comment is too long
- Utilize the dbt model documentation when it is available
- Calculations made in SQL should have a brief description of what's going on and if available, a link to the handbook defining the metric (and how it's calculated)
- Instead of leaving `TODO` comments, create new issues for improvement

### Naming Conventions

- An ambiguous field name such as `id`, `name`, or `type` should always be prefixed by what it is identifying or naming:

    ```sql
    -- Preferred
    SELECT
        id    AS account_id,
        name  AS account_name,
        type  AS account_type,
        ...

    -- vs

    -- Not Preferred
    SELECT
        id,
        name,
        type,
        ...

    ```

- All field names should be [snake-cased](https://en.wikipedia.org/wiki/Snake_case):

    ```sql
    -- Preferred
    SELECT
        dvcecreatedtstamp AS device_created_timestamp
        ...

    -- vs

    -- Not Preferred
    SELECT
        dvcecreatedtstamp AS DeviceCreatedTimestamp
        ...

    ```

- Boolean field names should start with `has_`, `is_`, or `does_`:

    ```sql
    -- Preferred
    SELECT
        deleted AS is_deleted,
        sla     AS has_sla
        ...


    -- vs

    -- Not Preferred
    SELECT
        deleted,
        sla,
        ...

    ```

- Timestamps should end with `_at` and should always be in UTC.
- Dates should end with `_date`.
- When truncating dates name the column in accordance with the truncation.

    ```sql

    SELECT
        original_at,                                        -- 2020-01-15 12:15:00.00
        original_date,                                      -- 2020-01-15
        DATE_TRUNC('month',original_date) AS original_month -- 2020-01-01
        ...


    ```

- Avoid key words like `date` or `month` as a column name.

### Reference Conventions

- When joining tables and referencing columns from both tables consider the following:
  - reference the full table name instead of an alias when the table name is shorter, maybe less than 20 characters.  (try to rename the CTE if possible, and lastly consider aliasing to something descriptive)
  - always qualify each column in the SELECT statement with the table name / alias for easy navigation

    ```sql
    -- Preferred
    SELECT
        budget_forecast.account_id,
        date_details.fiscal_year,
        date_details.fiscal_quarter,
        date_details.fiscal_quarter_name,
        cost_category.cost_category_level_1,
        cost_category.cost_category_level_2
    FROM budget_forecast_cogs_opex AS budget_forecast
    LEFT JOIN date_details
        ON date_details.first_day_of_month = budget_forecast.accounting_period
    LEFT JOIN cost_category
        ON budget_forecast.unique_account_name = cost_category.unique_account_name

 
    -- vs 

    -- Not Preferred
    SELECT
        a.account_id,
        b.fiscal_year,
        b.fiscal_quarter,
        b.fiscal_quarter_name,
        c.cost_category_level_1,
        c.cost_category_level_2
    FROM budget_forecast_cogs_opex a
    LEFT JOIN date_details b
        ON b.first_day_of_month = a.accounting_period
    LEFT JOIN cost_category c
        ON b.unique_account_name = c.unique_account_name
    ```

- Only use double quotes when necessary, such as columns that contain special characters or are case sensitive.

    ```sql
        -- Preferred
        SELECT 
            "First_Name_&_" AS first_name,
            ...

        -- vs

        -- Not Preferred
        SELECT 
            FIRST_NAME AS first_name,
            ...

    ```

- Prefer accessing JSON using the [bracket syntax](https://docs.snowflake.com/en/user-guide/querying-semistructured.html#bracket-notation).

    ```sql
        -- Preferred
        SELECT
            data_by_row['id']::bigint as id_value
            ...
        
        -- vs

        -- Not Preferred
        SELECT
            data_by_row:"id"::bigint as id_value
            ...
    ```

- Prefer explicit join statements.

    ```sql
        -- Preferred
        SELECT *
        FROM first_table
        INNER JOIN second_table
        ...

        -- vs

        -- Not Preferred
        SELECT *
        FROM first_table,
            second_table
        ...
    ```

- Also prefer explicit join statements for `LATERAL FLATTEN`. However, it should be noted that the current code-base does not consistently adhere to this practice.

    ```sql
        -- Preferred
        SELECT
            data.value,
            source.uploaded_at
        FROM source
        INNER JOIN LATERAL FLATTEN(input => source.jsontext['data']) AS data
        ...

        -- vs

        -- Not Preferred
        SELECT
            data.value,
            source.uploaded_at
        FROM source,
            LATERAL FLATTEN(input => source.jsontext['data']) AS data
        ...
    ```

### Common Table Expressions (CTEs)

- Prefer CTEs over sub-queries as [CTEs make SQL more readable and are more performant](https://www.alisa-in.tech/post/2019-10-02-ctes/):

    ```sql
    -- Preferred
    WITH important_list AS (

        SELECT DISTINCT
            specific_column
        FROM other_table
        WHERE specific_column != 'foo'
        
    )

    SELECT
        primary_table.column_1,
        primary_table.column_2
    FROM primary_table
    INNER JOIN important_list
        ON primary_table.column_3 = important_list.specific_column

    -- vs   

    -- Not Preferred
    SELECT
        primary_table.column_1,
        primary_table.column_2
    FROM primary_table
    WHERE primary_table.column_3 IN (
        SELECT DISTINCT specific_column 
        FROM other_table 
        WHERE specific_column != 'foo')

    ```

- Use CTEs to reference other tables.
- CTEs should be placed at the top of the query.
- Where performance permits, CTEs should perform a single, logical unit of work.
- CTE names should be as concise as possible while still being clear.
  - Avoid long names like `replace_sfdc_account_id_with_master_record_id` and prefer a shorter name with a comment in the CTE. This will help avoid table aliasing in joins.
- CTEs with confusing or notable logic should be commented in file and documented in dbt docs.
- CTEs that are duplicated across models should be pulled out into their own models.

### Data Types

- Use default data types and not aliases. Review the [Snowflake summary of data types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types.html) for more details. The defaults are:
  - `NUMBER` instead of `DECIMAL`, `NUMERIC`, `INTEGER`, `BIGINT`, etc.
  - `FLOAT` instead of `DOUBLE`, `REAL`, etc.
  - `VARCHAR` instead of `STRING`, `TEXT`, etc.
  - `TIMESTAMP` instead of `DATETIME`

    The exception to this is for timestamps. Prefer `TIMESTAMP` to `TIME`. Note that the default for `TIMESTAMP` is `TIMESTAMP_NTZ` which does not include a time zone.

### Functions

- Prefer `IFNULL` to `NVL`.
- Prefer `IFF` to a single line `CASE` statement:

    ```sql
    -- Preferred
    SELECT 
        IFF(column_1 = 'foo', column_2,column_3) AS logic_switch,
        ...

    -- vs 

    -- Not Preferred
    SELECT
        CASE
            WHEN column_1 = 'foo' THEN column_2
            ELSE column_3
        END AS logic_switch,
        ...
    ```

- Prefer `IFF` to selecting a boolean statement:

    ```sql
    -- Preferred
    SELECT 
        IFF(amount < 10,TRUE,FALSE) AS is_less_than_ten,
        ...
    -- vs

    -- Not Preferred
    SELECT 
        (amount < 10) AS is_less_than_ten,
        ...
    ```

- Prefer simplifying repetitive `CASE` statements where possible:

    ```sql
    -- Preferred
    SELECT
        CASE field_id
            WHEN 1 THEN 'date'
            WHEN 2 THEN 'integer'
            WHEN 3 THEN 'currency'
            WHEN 4 THEN 'boolean'
            WHEN 5 THEN 'variant'
            WHEN 6 THEN 'text'
        END AS field_type,
        ...

    -- vs 

    -- Not Preferred
    SELECT 
        CASE
            WHEN field_id = 1 THEN 'date'
            WHEN field_id = 2 THEN 'integer'
            WHEN field_id = 3 THEN 'currency'
            WHEN field_id = 4 THEN 'boolean'
            WHEN field_id = 5 THEN 'variant'
            WHEN field_id = 6 THEN 'text'
        END AS field_type,
        ...
    
    ```

- Prefer the explicit date function over `date_part`, but prefer `date_part` over `extract`:

    ```sql
    DAYOFWEEK(created_at) > DATE_PART(dayofweek, 'created_at') > EXTRACT(dow FROM created_at)
    ```

- Be mindful of date part interval when using the [`DATEDIFF`](https://docs.snowflake.net/manuals/sql-reference/functions/datediff.html) function as the function will only return whole interval results.

### Example Code

This example code has been processed though SQLFluff linter and had the style guide applied.

```sql

WITH my_data AS (

  SELECT my_data.*
  FROM prod.my_data_with_a_long_table_name AS my_data
  INNER JOIN prod.other_thing
  WHERE my_data.filter = 'my_filter'

),

some_cte AS (

  SELECT DISTINCT
    id                                                       AS other_id,
    other_field_1,
    other_field_2,
    date_field_at,
    data_by_row,
    field_4,
    field_5,
    LAG(
      other_field_2
    ) OVER (PARTITION BY other_id, other_field_1 ORDER BY 5) AS previous_other_field_2
  FROM prod.my_other_data

),
/*
This is a very long comment: It is good practice to leave comments in code to
explain complex logic in CTEs or business logic which may not be intuitive to
someone who does not have intimate knowledge of the data source. This can help
new users familiarize themselves with the code quickly.
*/

final AS (

  SELECT
    -- This is a singel line comment
    my_data.field_1                                              AS detailed_field_1,
    my_data.field_2                                              AS detailed_field_2,
    my_data.detailed_field_3,
    DATE_TRUNC('month', some_cte.date_field_at)                  AS date_field_month,
    some_cte.data_by_row['id']::NUMBER                           AS id_field,
    IFF(my_data.detailed_field_3 > my_data.field_2, TRUE, FALSE) AS is_boolean,
    CASE
      WHEN my_data.cancellation_date IS NULL
        AND my_data.expiration_date IS NOT NULL
        THEN my_data.expiration_date
      WHEN my_data.cancellation_date IS NULL
        THEN my_data.start_date + 7 -- There is a reason for this number
      ELSE my_data.cancellation_date
    END                                                          AS adjusted_cancellation_date,
    COUNT(*)                                                     AS number_of_records,
    SUM(some_cte.field_4)                                        AS field_4_sum,
    MAX(some_cte.field_5)                                        AS field_5_max
  FROM my_data
  LEFT JOIN some_cte
    ON my_data.id = some_cte.id
  WHERE my_data.field_1 = 'abc'
    AND (my_data.field_2 = 'def' OR my_data.field_2 = 'ghi')
  GROUP BY 1, 2, 3, 4, 5, 6
  HAVING COUNT(*) > 1
  ORDER BY 8 DESC
)

SELECT *
FROM final

```

### Other SQL Style Guides

- [Brooklyn Data Co](https://github.com/brooklyn-data/co/blob/master/sql_style_guide.md)
- [dbt Labs](https://github.com/dbt-labs/corp/blob/main/dbt_style_guide.md)
- [Matt Mazur](https://github.com/mattm/sql-style-guide)
- [Kickstarter](https://gist.github.com/fredbenenson/7bb92718e19138c20591)
