---
title: "Preparing Your MR for Merging"
description: "This handbook page helps you understand what steps you should take to get your MR ready to assign to an analytics engineer and to get it ready to merge."
---

## Steps to Getting Your MR Ready

To expedite the review process from an analytics engineer and eventual merging of your work, here are the steps you can take before tagging an analytics engineer for review. If you need help before completing these steps feel free to reach out sooner! It may take additional time to for them to review your MR if additional support is needed from them.

### Make sure the template is filled out completely

A top reason for slower reviews of an MR is an incomplete template. This page is designed to help you feel comfortable completing as much of the MR template as possible so that it can expedite the review process. You can read the section below, in [Understanding the MR Template](/handbook/enterprise-data/how-we-work/practical-guide/preparing-your-mr/#understanding-the-mr-template) for more details about the MR template.

### Build your changes

"Build Changes" is one of the CI jobs in the Pipeline. You can find more details about CI jobs to know about [here](/handbook/enterprise-data/how-we-work/practical-guide/top-ci-jobs). Before your MR gets merged, you will need to "Build Changes" and ensure it succeeds.

### Grant yourself clones so you can test the data

Once your 'build changes' job succeeds, you can now grant yourself clones to the MR database which has been created. This allows you to test the changes of your MR. This step is important to save time and make sure we are not introducing inaccuracies to our database. Before you request to merge your new table into the database, you will likely have to grant yourself clones in order to test the changes.

You can view more information about how to grant yourself clones on the page about CI jobs [here](/handbook/enterprise-data/how-we-work/practical-guide/top-ci-jobs).

Because permissions are replicated from the production environment, if you are creating a net new table you won't be able to access it using the "grant clones" CI job, you will need to ask the data engineers for access. You can view more instructions on how to do that in the grant clones section of the CI jobs page linked in the paragraph above.

### Test the MR - either in SQL or in Tableau. Make sure it's doing what you think it is

Once you have access to your tables, make sure to test them! You can test them in Tableau, or Snowflake. Getting updates merged can be time consuming- not just from the review of the changes, but also just the time it takes to see your changes reflected once you update the database.

Even if you are making changes in a report table where nobody else will be negatively impacted if your code changes have a mistake in them, you are still holding up the process if you merge through changes that are incorrect and need to be changed again. When you are finished reviewing the changes from your MR and you leave your sign off that the changes are working as expected, you are committing to having tested your changes.

If you have already tested the changes in SQL/ Tableau before even creating the MR you can keep the testing to a minimum, but it is still a good idea to just double check that the SQL is working as you expected once you transfered it from Snowflake/Tableau to the MR.

### Add a row count if you are updating an existing table

"Remote Testing" is where you can include the results of your remote testing. This could be a confirmation that you have tested these changes in Tableau. It could include a link to a spreadsheet with exported results of your testing - such as a pivot table comparing the results of the SQL code before and after the changes are made.

Before assigning this MR to a code owner for review, you should include a "Row Count Test". This is not one of the dbt tests listed in a previous step, instead it is a SQL query that you run yourself. This just counts the number of rows in the production version of the table, and the MR version. _This only applies to MR's where you are editing an existing table and does not apply to newly created tables_.

This row count catches things like when you accidentally type a join wrong, and it either dramatically increases or dramatically decreases the number of rows in the table. It is standard practice for almost every MR for a dbt model change. You can paste the resulting table right into this section of the template.

<details>
    <summary>Sample SQL Code</summary>

```SQL
    SELECT
        COUNT(*) as row_count,
        'prod' as source
    FROM prod.your_schema.your_table_name

    UNION ALL

    SELECT
        COUNT(*) as row_count,
        'MR' as source
    FROM "your-mr-branch-name".your_schema.your_table_name
```

</details>

Please note: If your row count of your MR table is lower than what you see in prod, it may be because the MR database is outdated from prod. For example, if it is a table that updates daily and the MR is three days old, and the last time you built your changes was three days ago, then the tables will not have the same row count. You should be able to fix this by building the changes again, and granting yourself a new clone. You can ask an analytics engineer for help if you are stuck on this.

## Understanding the MR Template

In this section we will break down the "Dbt Model Changes" template which is the template you should use for creating new report tables, or updating existing columns in our prep, mart, fact, dimension, or report layers.

Here is a breakdown of the MR template, one section at a time. The numbers on the image relate to text underneath the image which will explain that section. The numbers circled in red indicate sections which typically require action from you (the creator of the MR) for each MR, specifically for report tables.

![MR 1](/images/handbook/enterprise-data/platform/tableau/mr-template-1.png)

  1. "Closes" refers to the issue that this merge request will close. Typically in the development lifecycle, an issue will be created to describe work that needs to be done, and then the MR will be created to enact it. Once that MR merges, that issue should be ready to close.
     - You may have some use cases that expand outside of this - for example you may create an issue for a change that needs to happen in Tableau, so when the MR gets merged the issue may not be ready to close, because you still have changes to make in Tableau. This is ok, just know that if you list the issue that the MR closes in this section of the template, it will automatically close when the MR gets merged.
     - Creating an issue to accompany your MR if it does not yet have one could be helpful to the analytics engineer who you are partnering with. They can use the issue to discuss work, plan review meetings, and they can put weights on the issue and assign it to their schedule for the week so they can appropriately budget time for it.

  2. In the scope section of the template, you need to describe the changes you are making in dbt and why you are making them. It does not need to be lengthy, but you want to use this section to help people who may not be familiar with the work you are doing to be able to quickly understand the "what" and the "why" so that it can be reviewed and merged.

     - As a tip, you can use GitLab Duo's "Explain Changes" button if it is available to you on the MR. If not, you can copy and paste the changes tab of the MR and ask it to summarize the changes are being made. This may need some editing, but may help you get started.

  3. In dbt, tests are predefined or custom checks configured in `.yml` files to validate the data in your models. These tests automatically check for specific conditions in the resulting tables, such as ensuring no null values, verifying unique rows, or maintaining referential integrity. This approach separates data validation from the model code, making it easier to ensure data quality and maintainability.

     - You likely won’t need to add tests to your tables when you’re new to using dbt. The Analytics Engineer reviewing your MR can suggest tests if they think one is relevant. For more information about adding tests to your models, see the [Trusted Data Framework handbook page](/handbook/enterprise-data/platform/dbt-guide/#trusted-data-framework).

  4. Our CI jobs will build the models and environment included in the scope of your MR. You can leave this section as is, as the "Changes" tab will outline the MR's scope. In rare cases where additional models need to be built outside of those included in the `build_changes` job, you can specify them here. If extra models need to be run, you can use the `custom_invocation` job or the `build_changes` job with a specified `SELECTION`.

  5. Before an MR can be merged, you will need to "Build Changes", "Grant Clones" to yourself, and perform remote testing - either in Snowflake or Tableau.
      ![MR 2](/images/handbook/enterprise-data/platform/tableau/mr-template-2.png)
  6. In the "Verify" section you will verify that the changes you make are having the impact you expect. You will include the results below.

  7. See the "row count" section above for information on how to add a row count. You should always do this as a best practice if you are updating an existing table. It may save you if you miss unexpected join errors.

  8. You may need to take action on some of the items in the "Review" list. You can work with an analytics engineer on this section if you are not sure of the answers. The items that are most likely to need your action include:
     1. Verifying that you have adequately tested the changes to ensure they do what you intended them to do.
     2. You will need to run the required CI jobs in order to test the changes - make sure the changes all build successfully before requesting to merge the MR.
     3. You should do your best to follow the team's [style guide](/handbook/enterprise-data/platform/dbt-guide/#style-and-usage-guide). The [General section](/handbook/enterprise-data/platform/dbt-guide/#general) is particularly helpful. Once you tag an Analytics Engineer to review your MR, they can also help you with formatting the code according to the style guide.
     4. If you are using VS Code, you can look into [linting the code](/handbook/enterprise-data/platform/dbt-guide/#sqlfluff-linter) yourself which will provide some automatic formatting.
     5. Before you merge an MR, you need to consider the downstream changes. For example, if you rename a column that is being used downstream, it make break those downstream tables in our data warehouse. If you rename a column that is being used in Tableau, any dashboards using that column will break (and it can be challenging to fix this error without reverting the changes).

     ![MR 3](/images/handbook/enterprise-data/platform/tableau/mr-template-3.png)

     Code owners and maintainers will review this section and check off the items as they complete their review

     ![MR 4](/images/handbook/enterprise-data/platform/tableau/mr-template-4.png)

  9. When you create an MR, you will likely start by assigning it to yourself. This helps you keep track of the MR's that you have open and in progress.

  10. After completing testing and ensuring your changes are ready for review, assign the MR to an Analytics Engineer who is a code owner of the files you modified. Once they have reviewed and approved the changes, they will assign the MR to a maintainer for merging.

  11. Labels can help you and your team keep track of your MR. If your team uses labels for your GitLab work, you can apply those same labels to your MR.

## Assigning Reviewers

Once you have created your MR, tested the changes and are satisfied with them, filled out as much of the template as you can, and/or you need help from an analytics engineer it is time to assign a reviewer. [Here](/handbook/enterprise-data/how-we-work/mr-review/) is the official documentation about reviewers. [Here](/handbook/enterprise-data/how-we-work/#merge-request-workflow) is some information about the official review workflow.

If you typically work with an analytics engineer on your projects, it is your best bet to reach out to them to start with to ask who should review your MR. If you do not have an analytics engineer whom you typically work with, you can look in the 'reviewers' section of the MR (just under the pipeline) to see who owns the code of that table you are trying to modify.

![Reviewers](/images/handbook/enterprise-data/platform/tableau/reviewers-mr.png)

You can choose any of the people listed on that list and use the right sidebar of the MR to assign them as a reviewer. You can also drop them a comment in the MR saying "Hi @reviewer, I have been working on this MR. I have tested the changes and filled out the template to the best of my ability, and was hoping you could take a look and let me know what we need to do to get this merged".

This is also a good place to look if you are blocked on one of the steps of creating the MR and are not sure who to ask for help.

## Changes to Report Tables Versus Upstream Tables

When creating MRs as an analyst, it is helpful to understand that some MRs will be easier/quicker to review and push through than others. This depends on the complexity and location of the code changes.

If you have created a lengthy report table with a lot of transformations and custom logic, it will take analytics engineers longer to review these changes. Using CTE's instead of subqueries, and clearly labeling your code with comments and fully qualified column names can help someone who is unfamiliar with your code get up to speed more quickly.

Analytics engineers may also have feedback on your MR - they may catch inconsistencies, or have style recommendations. At GitLab we use a consistent [style guide](/handbook/enterprise-data/platform/dbt-guide/#style-and-usage-guide) for how we format code. Analytics engineers may make suggestions to your code to help it meet our style guide - which makes it easier to use and maintain for everybody involved.

### Report Tables Versus Mart/Fact Tables

There will be a different level of rigor expected of changes to mart/fact/dimension/prep tables than there will to report tables. The four types of tables listed previously are cross-functional, single-source-of-truth tables. These tables drive many different reports here at at GitLab, and even the smallest change to these tables can have downstream impacts to many different reports and tables. Therefore, getting changes to these tables merged will require thorough testing and careful review, and be held to the highest standards of code cleanliness.

On the other hand, GitLab's data team wants to enable analysts to be able to create and maintain report tables, which will often contain data transformations that allow data to get into the right shape for reporting, such as a Tableau dashboard. Tableau dashboards will be more performant when they are pointing to a report table in Snowflake than when they are pointing to custom SQL.

If you are updating/creating a report table that is used in your dashboards, the review process will likely go more quickly than if you are updating a mart table which is used by many other tables/reports. When analytics engineers are reviewing report tables, they are looking to make sure:

- The code is readable
- The code works and does not break anything
- There are no redundancies
- There is no essential business logic

At GitLab, we avoid keeping business logic in our report tables that everyone else would benefit from being able to use upstream. Let's give a hypothetical example of this. Let's say you have a report table, and one of your columns is "Customer Size". In this column, you group your customers into revenue bands of <$500, $501-$1000, and >$1.000.

Now, let's say that your entire division generally wants to group customers in this way. Instead of creating this "Customer Size" CASE statement in every report table / Tableau report that reports on revenue, it would make sense to create that grouping upstream in the prep or fact table. Then, that column will flow through to every other table which is built from the base table.

This also helps tremendously when something happens like the company grows in size, and now every place where "Customer Size" is reported actually needs to group customers by the sizes of <$1,000, $1,001-$5,000, or >$5,000. These reasons together are why you may get feedback from an analytics engineer on your MR that one of your columns seems like business logic, and suggesting that it be moved upstream. A change like that is typically something that they would take over or assist you with.

## Other Helpful Resources for Preparing MRs

Our DBT Guide: https://handbook.gitlab.com/handbook/enterprise-data/platform/dbt-guide/
Style Guide: https://handbook.gitlab.com/handbook/enterprise-data/platform/dbt-guide/#style-and-usage-guide
General helpful information about using dbt: https://handbook.gitlab.com/handbook/enterprise-data/platform/dbt-guide/#general
