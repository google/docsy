---
title: "Tableau Developer Tips and Tricks"
description: "Tableau Developer tips and tricks"
---

## Date Handling

Tableau has many ways for handling and visualizing dates - but due to those many options, it can be handy to have some tricks for the best way to do it, especially if you have custom needs.

## Date Handling in Production Dashboards

Due to the unique challenges of having a fiscal year start date in February and missing fiscal year date calculations in Tableau, we have developed simple date handling guidelines that can expedite and simplify the process of date filtering and creating date axes for charts. We have created a workbook that contains all of the following calculations and joins and some sample data. This can be found in the [Templates](https://10az.online.tableau.com/#/site/gitlab/workbooks/2269304/views) folder, under the name `Developers Guide Example Workbook`.

### Date Unification

If you have more than one data source in your workbook, the first thing to do is to unify the dates around a date spine. This means using a calendar table. If you are at GitLab, you can find the dim_date table in the common schema of the prod database. Join each of the tables that you need to use to the dim_date table on the date you want to use for the date spine using `dim_date.date_actual = your_table.your_date`. [Click here](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_date) to see documentation on the dim_date table.

Even if you are not using multiple tables/ dates, it is still recommended to use the dim_date table, because it contains useful information about dates which can be used for filters and controls. For example, if you wanted to use a standard filtering method of comparing the quarter of a date with today's date to filter out any data from a previous quarter, you might use:
`Current Period: DATETRUNC('quarter',Date Actual) = DATETRUNC('quarter',TODAY())`.

However, this will truncate your data down to the non-fiscal quarter, such as truncating 11/11/23 down to 10/1/2023. This will lead to incorrect fiscal sorting and filtering of data. Using the dim_date table, however, allows you to use the following calculation:

**Current Period:** `[First Day of Fiscal Quarter] = [Current First Day of Fiscal Quarter]`. This is far simpler than the alternative without a date table, which would include a series of `DATEADD` and `DATETRUNC` calculations thoughtfully stacked on top of each other.

### Adding a Report Date

Many times, end-users would appreciate being able to change "today" in their reports. For example, they may want to be able to view a report as of the last day of the previous quarter. The addition of a date parameter called `report date` can improve your user experience in this area. However, this creates issues when you need to compare your report date to your `date_actual` from the calendar table, because you do not have the built in date information for your report date that you do for the `date_actual` field. Here is what the parameter creation looks like: ![parameter creation](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-1.png)

There is a simple fix to this issue, which is similar to how Row Level Security works (which can be found later in thie guide). To add date information such as `Fiscal_quarter_name` and `First_day_of_fiscal_quarter` for the `Report Date parameter`, follow the following steps to re-join and then filter a second iteration of the `dim_date` table onto the regular data model.

#### Create a New Dim_Date Table

1. First, open up your Data Source pane in your workbook and in the left-hand connections bar and navigate to the `dim_date` table. ![dim_date connection pane](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image.png)

1. Add `dim_date` to the data model, you can use a relationship, but make sure to join it to the same table that contains your primary date information (such as `date_actual`). Tableau will automatically name the new table `DIM_DATE1`. You need to create a relationship (or join if you choose to use a physical join) that will evaluate as true all the time. Since you are working with a limited number of date fields, one option is to use your `First_Day_of_Year` and `Last_Day_of_Year` fields.

1. To create a custom relationship calculation, click on the noodle that connects the two tables, and in the dropdown where you would normally select the field, click on the bottom where it says "Create Relationship Calculation" ![create custom relationship](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-2.png)

1. Use the calculation `MONTH([First Day Of Year]) <= MONTH([Last Day Of Year (Dim Date1)])`. Anecdotally, you may experience slightly better performance if you add a second line that is just 1 = 1. Without creating a new column in the source tables, you cannot just use a custom calculation of 1 = 1 on its own. It should look like this: ![inserting relationship calculation](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-3.png)
***Be very careful that you use the first and last days of the year in this calculation, not the first and last days of the fiscal year.***

The purpose of the `MONTH([First Day Of Year]) <= MONTH([Last Day Of Year (Dim Date1)])` calculation is that it will evaluate as true every time, no matter what filters are applied. This is true of the additional 1=1 methodology. This ensures that the report date information you are creating will be added to every row of data in the dataset, allowing you to access the Report Date parameter information at any time. It works similarly to a cross-join in SQL.

1. You now have two `dim_date` tables, but you only want one row of information from the second table. Next, we will create a filter that will filter the `DIM_DATE1` table down to just one row of data- the data the corresponds to the Report Date which you (and your end-user) have selected.

1. Click out of the Data Source pane and into a blank sheet of the workbook. Create a new calculation that you can use later to filter your table and call it **Report Date Filter**: `[Date Actual (Dim Date1)] = [Report Date]`. Do not apply it to your worksheet - you will use it elsewhere.

1. Return to your Data Source Pane, and find the "Add" button under the "Filters" heading, in the top right corner. ![Add button](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-4.png)

1. Select "Add" and "Add" again, and a pop-up will give you your choice of field to select. Search for the "Report Date Filter" field and select it. On the next window, select "True" and hit "ok". You should now see this filter in your Data Source Filters list. Hit ok. !]](images/image-5.png)

1. Open a sheet of the workbook, and test to see if your filter worked. If it worked, you should see that for every `Date Actual` in the data set, there should be just one value for the `Date_actual1` from the `DIM_DATE1` table. ![just one date showing](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-6.png)

1. If you are using a live connection, you are ready to go. You and your end-user can switch the date of the reprort date as needed, and the dim_date1 table will update accordingly each time.

1. If you are using an extracted data connection, there is one more important step. Before publishing these changes, you need to make sure that the data extract will include the information that you and your end-user would need if you changed the report date. Referring to [Tableau's order of operations](https://help.tableau.com/current/pro/desktop/en-us/order_of_operations.htm), the filter on the data needs to come after the Extract Filter, or the extract will not include any data for dates other than the one selected when it extracts. This means that the filter needs to be a Data Source filter only. By default, Tableau may add your Data Source filter to the Extract Filters list.

1. In the Data Source Pane, in the area where you select between a Live and Extracted connection, select "Edit". You will see that under the filter list, `Report Date Filter` is selected and keeping only true. Click on that, and select Remove. Then hit ok. ![remove extra filter](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-7.png)

1. Notice that your extract will contain all data, but under "Filters", it has the number 1. This means that you have removed the extract filter, but kept the data source filter. ![keeping the right filter](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-8.png)

You can now leverage the full `dim_date` table for filtering and sorting your data! You may wish to rename fields from the `Dim_Date1` table to make it more clear that these fields are specific to the Report Date. You can also optionally hide any unneeded columns, such as anything from the `Dim_date1` table relating to the "Current Date".

### Axis Dates

In Tableau, you can customize your Fiscal Year Start Date of any date field. ![customize FY start](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-9.png)

However, this is not a foolproof solution. There are many instances where using a string date on the axis of bar and line charts will be much more effective than using native date fields. For example, if you want to create a simple discrete bar chart but allow your end-user to switch between monthly, quarterly, and yearly data, there is no straightforward way to do that in the same sheet. Normally you would need to create a "sheet swapper" on your dashboard, and selectively show or hide certain sheets based on which date granularity is desired.

Instead, you can create one date axis which automatically updates depending on your date granularity. Assuming you have already joined `dim_date` to your data model, take the following steps.

1. Create the Select Time Period Parameter. ![time period parameter](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-10.png)
2. Use the following code in a calculated field called **Axis Dates**:

<details markdown=1>

<summary><b>Axis Dates</b></summary>

```text
IF [Select Time Period] = 'year' THEN
    "FY " + STR([Fiscal Year])

ELSEIF [Select Time Period] = 'quarter'
    THEN [Fiscal Quarter Name Fy]

ELSEIF [Select Time Period] = 'week'
    THEN STR([Fiscal Year]) + "- " + STR([Week Of Fiscal Quarter Normalised])

ELSE //STR([Fiscal Year]) + "- "+
STR([Fiscal Month Name])
END
```

</details>

1. You now have a simple date axis which you can use with bar charts and line charts.

1. One issue you may encounter, however, is that the dates will sort themselves alphabetically. If you are using the `dim_date` table, there is a simple solution to this as well. There is a field called `date_id` in the dim_date table which gives every day a unique id, counting upwards. So the date_id of tomorrow will always be one greater than today.

1. Bring the `Axis Dates` field out onto Rows or Columns, and then access the Sort option by right clicking on the field and finding "Sort...". Then change the default to sort "By Field", find "Date id", and then use an aggregation such as "Average".
![sort axis dates](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-11.png)

Now you have a date axis which will dynamically allow you and your end-user to switch between date granularities on the same worksheet, while maintaining maximal control over the way the view looks and functions.

### Date Filtering

The addition of a `Dim_Date` table and consideration of a dynamic date axis creates an opportunity to use dynamic date filtering. A date filter can be created by leveraging the dim_date table with the Select Time Period parameter.

To create this date filter, you will need to create one more parameter for end-user input, or simply decide on a date range that you want the fix the filter to. If you create a `Date Interval` parameter which can be placed on the dashboard, then the end-user has control on how many periods they want to see at a time on time series graphs, such as bar and line charts. ![date interval param](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-12.png)

Once you have done so, the following dynamic date filter will work to filter the data:

<details markdown=1>

<summary><b>Date Filter - Dynamic</b></summary>

```text
IF [Select Time Period] = 'month' THEN
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])
        AND  DATETRUNC('month',[Date Actual]) > DATEADD('month', -[Date Interval], DATETRUNC('month',[Report Date]))

ELSEIF  [Select Time Period] = 'quarter' THEN
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) // earlier than report date
        AND
    DATETRUNC('month',[First Day Of Fiscal Quarter] ) > DATEADD('month', (-[Date Interval]*3), DATETRUNC('month',[First Day Of Fiscal Quarter (Dim Date1)]))

ELSE
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])
        AND
    [First Day Of Fiscal Year] > DATEADD('month', -[Date Interval]*12, [First Day Of Fiscal Year (Dim Date1)])
END
```

</details>

#### Current and Previous Period Calculations

To add onto the date filter, if you create T/F fields called `Current Period` and `Previous Period`, then you can use these in conjunction with measures and dimensions to create fields such as `Current Period Sales`. This can then be used in Tooltips, Big Numbers, to create fixed Period over Period fields, and for analytics lines.

There are two ways to create these calculations. The first option is to cut the data off at the current day of the fiscal period (month/quarter/year), so that you are comparing the time periods evenly. For example, comparing the first 13 days of this quarter to only the first 13 days of lasrt quarter. This is what these calculations would look like:

<details markdown=1>

<summary><b>Fiscal Date Filters</b></summary>

**Is Fiscal Period to Date Dynamic**

```text
IF [Select Time Period] = 'year' THEN
 [Day Of Fiscal Year] <= [Day Of Fiscal Year (Dim Date1)] // Cuts data off at the day of the report date


ELSEIF [Select Time Period] = 'quarter' THEN
    [Day Of Fiscal Quarter] <= [Day Of Fiscal Quarter (Dim Date1)] // Cuts data off at the day of the report date

ELSE
[Day Of Month] <= [Day Of Month (Dim Date1)] // Cuts data off at the day of the report date

END
```

**Current Period**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = [First Day Of Fiscal Year (Dim Date1)] // in the same year
            AND DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])  // Cuts data off at the day of the report date

ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = [First Day Of Fiscal Quarter (Dim Date1)] // in the same quarter
            AND DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])  // Cuts data off at the day of the report date

ELSE
DATETRUNC('month',[Date Actual]) = DATETRUNC('month',[Report Date]) // in the same month
            AND DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date])  // Cuts data off at the day of the report date

END
```

**Previous Period**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = DATEADD('year',-1,[First Day Of Fiscal Year (Dim Date1)])
            AND [Is Fiscal Period To Date Dynamic]


ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = DATEADD('month',-3,[First Day Of Fiscal Quarter (Dim Date1)])
            AND [Is Fiscal Period To Date Dynamic]

ELSE
DATETRUNC('month',[Date Actual]) = DATEADD('month',-1,DATETRUNC('month',[Report Date]))
AND [Is Fiscal Period To Date Dynamic]// Cuts data off at the day of the report date

END
```

The other option is to take the total current and previous periods. These calculations will look like the following:

**Current Period (Total)**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = [First Day Of Fiscal Year (Dim Date1)] // in the same year

ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = [First Day Of Fiscal Quarter (Dim Date1)] // in the same quarter

ELSE
DATETRUNC('month',[Date Actual]) = DATETRUNC('month',[Report Date]) // in the same month

END
```

**Previous Period (Total)**

```text
IF [Select Time Period] = 'year' THEN
    [First Day Of Fiscal Year] = DATEADD('year',-1,[First Day Of Fiscal Year (Dim Date1)])



ELSEIF [Select Time Period] = 'quarter' THEN
    [First Day Of Fiscal Quarter] = DATEADD('month',-3,[First Day Of Fiscal Quarter (Dim Date1)])


ELSE
DATETRUNC('month',[Date Actual]) = DATEADD('month',-1,DATETRUNC('month',[Report Date]))


END
```

</details>

A use-case you may find for using each of these on the same sheet is when you want to get information about your `Actual Sales` up until the `Report Date` this quarter, but you want to compare those to the `Total Sales Target` for the quarter - so filtering all of the data to stop at the `report date` would result in an incomplete target.

### Additional Tricks

These tricks are non-essential to this method of date handling, but might help you improve the UI of the workbook, or at least save time with creating filters.

#### Non-additive or Semi-additive Data

This tip is less straight-forward, but has been tested carefully. Please contribute with updates if you have a simpler method. Filtering non-additive data can be challenging, especially because at GitLab we often want to see data from a "final" month only most of the time, but if we are in a non-final month for a quarter or year (such as March), we still want to see the live data for that time period. To further complicate this, if we change our report date to be February, we would not want to show the March data any longer, because then Tableau would add February + March's numbers together, which would be an error for non-additive data.

The following calculation will circumnavigate those issues.

<details markdown=1>

<summary><b>m/q/y filters for KPI's</b></summary>

**m/q/y filters for KPI's**

```text
IF [Select Time Period] = 'quarter' THEN
( [Month Of Fiscal Year] % 3 = 0// last month of quarter
        AND [First Day Of Fiscal Quarter] < [First Day Of Fiscal Quarter (Dim Date1)] // Earlier than this quarter
) // For all previous quarters, it is the last month of the quarter.

    OR ([Fiscal Year] = [Fiscal Year (Dim Date1)] AND [Month Of Fiscal Year] = [Month Of Fiscal Year (Dim Date1)] )
// For this quarter, it is the same month as the report date

ELSEIF
 [Select Time Period] = 'year' THEN
   [Month Of Fiscal Year] = 12 OR (YEAR([Date Actual]) = YEAR([Report Date]) AND [Month Of Fiscal Year] = [Month Of Fiscal Year (Dim Date1)])

ELSEIF [Select Time Period] = 'month' THEN TRUE

END
```

</details>

Then, create another field for your non-additive KPI, such as ARR. Use the following code:

<details markdown=1>

<summary><b>KPI - m/q/y</b></summary>

```text
IF [m/q/y Filters for KPI's]
     THEN [ARR] END
```

</details>

This can be used for every non-additive KPI, which will make creating and maintaing them simpler.

#### Enabling Year Over Year Table Calculations for a Full Date Range

If you would like to create a table or chart with Period over Period calculations involved, then Tableau will only be able to use the data that is in the view (on the worksheet) to perform those table calculations. For further documentation on table calculations, check [here](https://help.tableau.com/current/pro/desktop/en-us/calculations_tablecalculations.htm) ***This means that your leading values in the table will not have any data available to them to create the table calculations.***

Let's say you wanted to make a bar chart of `Sales`, but you wanted to embed the `Period over Period` information into the tooltips. If you only include one year's worth of data in the filter, then Tableau will not be able to calculate ***any*** year over year calculations, because it cannot "see" the prior year's data. There are ways to hard code around this, but there is a simple solution that you can use to "trick" Tableau into allowing the period over period calculations you want, at any date granularity.

The solution is to create a date filter that effectively doubles the date range that you are looking for in the workbook, and then use another table calculation to filter out the leading values. Using a second table calculation to show the correct number of time periods in the view will retain the underlying data that Tableau needs to create year over year calculations, while keeping the view looking as intended.

1. First, create a dynamic date filter that doubles the date range. Apply this as "True". There are two options to modify the filter from ealier, you can filter the data to cut off at the day of the report date, or you can filter the data to cut off at the same period as the report date. For example, if you filter the data to cut off at the day of the report date it might stop on November 13th, 2023. However, filtering the data to cut off at the same period as the report date, then if the report date is November 13th and the date granularity is set to quarter, then any data in the dataset for November 1- January 31st will show in the view (with a fiscal year start date in February).

<details markdown=1>

<summary><b>Date Filters</b></summary>

**Dynamic Date Filter for PoP (to report date)**

```text
IF [Select Time Period] = 'month' THEN (
    DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) //sooner than the day of report date and
        AND  DATETRUNC('month',[Date Actual]) > DATEADD('month', (-[Date Interval]*2), DATETRUNC('month',[Report Date])) //after the month of the date interval * 2 back in time

    )

ELSEIF [Select Time Period] = 'quarter' THEN
   ( DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) AND  // earlier than the report date
         DATETRUNC('month',[First Day Of Fiscal Quarter] ) > DATEADD('month', ((-[Date Interval]-4)*3), DATETRUNC('month',[First Day Of Fiscal Quarter (Dim Date1)])) // sooner than the number of quarters back (months *3 because of fiscal quarters)

    )

ELSEIF [Select Time Period] = 'year' THEN
   ( DATETRUNC('day',[Date Actual]) <= DATETRUNC('day',[Report Date]) AND  // earlier than the report date
         [First Day Of Fiscal Year] > DATEADD('month',-[Date Interval]*12,[First Day Of Fiscal Year (Dim Date1)]) // the same year or sooner than the report date * -interval (12mos)

    )

END

```

**Dynamic Date Filter for PoP (total periods)**

```text
IF [Select Time Period] = 'month' THEN (
    DATETRUNC('month',[Date Actual]) <= DATETRUNC('month',[Report Date]) //sooner than or = to the month of the report date
        AND  DATETRUNC('month',[Date Actual]) > DATEADD('month', (-[Date Interval]*2), DATETRUNC('month',[Report Date])) //after the month of the date interval * 2 back in time

    )

ELSEIF [Select Time Period] = 'quarter' THEN
   ( [First Day Of Fiscal Quarter] <= [First Day Of Fiscal Quarter (Dim Date1)] AND  // sooner than or = to the quarter of the report dateearlier than the report date
         DATETRUNC('month',[First Day Of Fiscal Quarter] ) > DATEADD('month', ((-[Date Interval]-4)*3), DATETRUNC('month',[First Day Of Fiscal Quarter (Dim Date1)])) // sooner than the number of quarters back (months *3 because of fiscal quarters)

    )

ELSEIF [Select Time Period] = 'year' THEN
   ([First Day Of Fiscal Year] <= [First Day Of Fiscal Year (Dim Date1)] AND // sooner than or = to the year of the report date
         [First Day Of Fiscal Year] > DATEADD('month',-[Date Interval]*12,[First Day Of Fiscal Year (Dim Date1)]) // the same year or sooner than the report date * -interval (12mos)

    )

END
```

</details>

1. Next, create the filter that will adjust the view to only show the date range that you selected originally.

<details markdown=1>

<summary><b>View Filter</b></summary>

**Don't Show Leading Values Filter**

```text
IF [Select Time Period] = 'quarter' THEN
FIRST() <= -4
ELSEIF [Select Time Period] = 'month' THEN FIRST() <= -12
ELSE FIRST() <= -1
END
```

</details>

1. Now you can use table calculations to create each of your date granularities' table calculations. To allow these to change dynamically based on your selected date granularity, you can use the following calculations, using `Sales` as an example KPI.
   1. First create your table calculations to offset by 1 time period, 4 time periods, and 12 time periods:

<details markdown=1>

<summary><b>Time Period Table Calculations</b></summary>

**Sales -1**

```text
(ZN(SUM([Sales])) - LOOKUP(ZN(SUM([Sales])), -1)) / ABS(LOOKUP(ZN(SUM([Sales])), -1))
```

**Sales -4**

```text
(ZN(SUM([Sales])) - LOOKUP(ZN(SUM([Sales])), -4)) / ABS(LOOKUP(ZN(SUM([Sales])), -4))
```

**Sales -12**

```text
(ZN(SUM([Sales])) - LOOKUP(ZN(SUM([Sales])), -12)) / ABS(LOOKUP(ZN(SUM([Sales])), -12))
```

   1. Now create the Period over Period calculations:

**Sales MoM**

```text
IF [Select Time Period] = 'month' THEN [Sales -1] END
```

**Sales QoQ**

```text
IF [Select Time Period] = 'month' THEN [Sales -4]
ELSEIF [Select Time Period] = 'quarter' THEN [Sales -1]
END
```

**Sales YoY**

```text
IF [Select Time Period] = 'month' THEN [Sales -12]
ELSEIF [Select Time Period] = 'quarter' THEN [Sales -4]
ELSEIF [Select Time Period] = 'year' THEN [Sales -1]
END
```

</details>

1. As a bonus, if you want to include each of these in a tooltip and be able to include a "month over month" label that disappears when the date granularity is quarter or year, here are the labels you can create labels.

<details markdown=1>

<summary><b>Labels</b></summary>

**MoM Label**

```text
IF [Select Time Period] = 'month'  THEN ", and the month over month change was: " // "MoM change: "
END
```

**QoQ Label**

```text
IF [Select Time Period] = 'month' OR [Select Time Period] = 'quarter' THEN ", the quarter over quarter change was: " // "QoQ Change: "
END
```

1. To put those together, the tooltip would have the following code, centered and formatted:

``` text
In <Axis Dates> the Sales were <SUM(Sales)>.
The Year over Year change was <AGG(Sales YoY)><ATTR(QoQ Label)><AGG(Sales QoQ)><ATTR(MoM label)><AGG(Sales MoM)>.
```

</details>

The output of this tooltip would look like this: ![tooltip](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-13.png)![tooltip](/images/enterprise-data/platform/tableau/tableau-developer-guide/tips-and-tricks-for-developers/image-14.png)

## Design Tips

Some additional design tips that may help your workbook creation efficency.

### Using Containers for Developing Dashboards

When you are building dashboards in Tableau, you can add sheets to the dashboard using two options - a "floating" sheet, or a "tiled" container. A floating sheet can be dropped anywhere on the dashboard and the size can be adjusted by using the sides, a tiled container needs to "snap" onto the background and needs to fit to the size of the larger container it is contained within.

Beginners in Tableau tend to go straight to using floating containers for everything, but you will find if you talk with people who are very experienced in Tableau, they will recommend *always* using containers.

There are many benefits to using containers, and it is in your best interest to get used to developing dashboards using containers, and never floating worksheets. The only situation that an item may benefit from "floating" on the dashboard is when it is a color legend or a dropdown item, that you want to put on top of a chart or a title.

[Here](https://www.youtube.com/watch?v=96371LvULXM&t=80s) is a helpful short video with more information about containers.

Here are some reasons to use containers:

1. If you use a "floating" style for every worksheet, when you publish the workbook to the Cloud/ Server, some of your items may move a few inches in any direction for your end-user, depending on the size of their monitor/display.

1. If you can learn to use a parameter to "turn off" and "turn on" a few related sheets, based on what is selected (so that only one worksheet is shown at a time), then containers are essential.

    Let's say you want to show table that either has information on 'Sales', 'Revenue', or 'Profit', and you create a parameter that has those three options as selections. You can create one worksheet for each of those three KPI's, and put a filter onto each worksheet so only one is "turned on" (showing) at a time, based on the parameter selection.

    You would then take all three worksheets and put them into the same container (horizontal container or vertical container), and hide the "title" on each of the worksheets. This way, all three worksheets will always show up in the exact same location on the dashboard, and you do not have to mess around with trying to line them up perfectly as floating containers. When each of them "turn on", they will slide "open" to fill the entire Parent container that has all three worksheets in it. Your container will always be in the same spot, and so the worksheet within it will always be in the same spot.

1. Many people use containers to group information. For example, you may have a bar chart with a legend, and a related table all tiled into one parent container. You might decide to move this. group of items from the left side of the dashboard, to the right. You can select the parent container and slide all three items over together, if you are using a container.

### Add GitLab Colors

You can add a color palette to Tableau Desktop so that any time you need to choose colors for your visualizations, you have access to GitLab's colors in the color menu. Find more instructions [here](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/#standard-color-palette)

### Using Dual Axis Charts

Creating a chart with two axes can help unlock the flexibility and customization that Tableau is built for. The top uses are displaying more than one axis on screen with greater flexibility, and a hack for better control over on-screen labels. You can find more documentation on creating and using dual axis charts [here](https://help.tableau.com/current/pro/desktop/en-us/multiple_measures.htm).

*Two Axes*
Have you ever wanted to show a bar chart and a line chart on screen together? Tableau is great at that - you can overlay one over the other using a dual axis chart. Don’t forget to consider if you want to “synchronize the axes”! That means, if you want both axes to start and end at the same place.
![two axes to create two bars](/images/handbook/enterprise-data/platform/tableau/dual_axis_two_axes.png)

Many people have discovered a dual axis chart already for two measures, but did you know that they can be useful for creating labels?

For example, if you have a stacked bar chart on screen (just one measure), and you want to add a label, Tableau will label each segment of the bar. But let’s say you want to label the whole bar, not each segment! You can use a dual axis chart & remove the color from the back of the two bars to get your desired label!
![dual axis with color on one bar and the label on the other](/images/handbook/enterprise-data/platform/tableau/dual_axis_label.png)

### Dashboard Actions for an Upgraded User Experience

[Dashboard actions](https://help.tableau.com/current/pro/desktop/en-us/actions_dashboards.htm) can add functionality, smooth out the user experience, and make your dashboards seem "more advanced". The different options are as follows.

![actions](/images/handbook/enterprise-data/platform/tableau/actions.png)

If you ever see a dashboard do something neat and unexpected, it is likely a creative use of a dashboard action.

Some things to know:

- You can link a dashboard item to go to a URL. A common use is to link Opportunities on a dashboard table right to their actual Salesforce URL.

- The Filter action is the most used action, in my experience. Being able to have one part of the dashboard dynamically respond to a user’s click to filter to a subset of the data is very common and useful. [Here is a helpful YouTube video](https://www.youtube.com/watch?v=c1CYxo9xkQc&t=299s) on filter actions.

- “Go to Sheet” is a handy way to create a more intuitive user experience for navigating between dashboard tabs in your workbook. For example if your user is on an “executive summary”, you could set up a “Go to Sheet” action that when they click on a bar chart of “Users per Product” it brings them to a deep dive dashboard about Users and Products. [Here is a helpful video](https://www.youtube.com/watch?v=u9OUyZy_d8M) on Go to Sheet actions.

- The “highlight” action is not often used, but can be powerful. You can set it so that when a user hovers over/ clicks on the “Product = Ultimate” bar of a bar chart, every other spot that “Product = Ultimate” on the dashboard highlights itself. This is especially handy when you have a table in your dashboard. [YouTube video](https://youtu.be/oMnuXhvb5ag?si=BSlwOFBavCirA_eK&t=189) on highlight actions.

- The “Change Parameter” action is commonly used on Tableau Public to let a user click on a button or image & have a resulting dashboard change. This is prettier than having the user choose from a parameter dropdown. It’s also usually more work than it is worth for a normal business dashboard. [Here](https://www.youtube.com/watch?v=Psz7hoK7lu0) is an advanced video on using a parameter to intuitively filter your dashboard, and [here](https://www.thedataschool.co.uk/chris-meardon/button-based-parameter-actions/) is a blog post about creating clickable buttons using this action.

    An example of using a parameter action to create a button can be founr in [this dashboard](https://public.tableau.com/app/profile/p.padham/viz/SuperstoreDashboard_16709573699130/SuperstoreDashboard) where you can click on (“Sales”,”Profit”,”Orders”), and it will change the dashboard to that KPI. This avoids using a standard parameter drop-down.

## Extensions

Tableau has extensions which are avaible to enhance the process of developing in Tableau and make it easier. For example, you can now make a Sankey Chart in a few clicks, when this used to take a tremendous amount of complex logic.

### Tableau Tables

A very helpful extension for building simple tables is the Tableau Tables extension, which was released in autumn of 2024. It makes the creation, maintenance, and sorting of tables easier than the standard table option. It even supports easily adding bar charts or conditional formatting right into a text table.

![tableau table](/images/handbook/enterprise-data/platform/tableau/table-screenshot.png)

This extension does have limitations for more advanced and customized tables- for example the conditional formatting of the tables is limited in function for now, and may not be able to meet the customization needs that can currently be accomplished with more complex "hacks". However, for the relatively simple table with straightforward needs for tet, bars, and heat-map style cells in columns, this extension supports those needs.

Here is a video showing you how to set-up and use a Tableau Table using the extension. It walks through adding bars, heatmap-style cells, conditional formatting, renaming columns, sorting columns, adding filters, and displaying a "download cross-tab" button.

## Developer Tips and Tricks

A collection of tips and tricks to make the Tableau development experience faster and easier. These will also frequently be featured in `#`TableauTipTuesday in the `#`data-tableau Slack channel.

1. You can duplicate a pill on any worksheet (column, row, or item on the Marks Card - 'pills' are either blue or green and they are the field you are using). Simply hold down command (cmd) and click an drag the blue or green pill, and instead of moving it, it will be duplicated.

2. When you drag a field into the view for the first time, you can choose the aggregation/measure type by holding down the option key (Mac) as you drag and drop the field. For date fields, this will pop up a window asking about the date granularity (such as year, month, day, month/day/year). This saves time because the default option is 'Year', and you have to let the view load before changing the granularity.

    This also works on non-measure fields. For example, if you hold option while dragging Opportunity Id into the view, it will give you the option to drop it as COUNT(Opportunity Id).

3. You can easily drag measures into and out of calculated fields - which saves you time. When creating a new calculated field, if the field you want is already on your worksheet you can drag the field from the worksheet, into the calculated field. Or, in reverse, you can highlight a measure or dimension in a calculated field and drag it and it will drag onto your worksheet.

4. Table calculations - you can create a table calculation using the normal method of adding a table calculation to an existing measure. Then, open up a box for a new calculated field, and drag that measure with a table calculation on it into the box. Now you have the formula of the table calculation in a reusable calculated field! You can also adjust the calculated field from here - for example, making a Period over Period calculation look back 4 periods instead of 1.

5. You can test out selected portions of calculated fields in Tableau to make sure each piece is working as expected by simply dragging the test you want to test onto a worksheet! Just go into a calculated field, highlight the piece you want to test, hold Command (Cmd), and drag the text to any part of a worksheet. You can see an example [here](https://www.flerlagetwins.com/2022/09/tiny-tableau-tips-round-2.html) at tip #9.

6. You can alias a dimension so that the name of the field in your data pane stays the same, but end users see an alias when they view the worksheet/dashboard. You can do this by right clicking on the header which shows the name you would like to alias, and then selecting "Edit Alias". This alias will persist in the view across all worksheets.

7. Aliasing a measure is a little more tricky than aliasing a dimension, as you can't right click on the header and rename it that way. Instead, you can follow the process outlined in Tip 1 of [this article](https://www.flerlagetwins.com/2024/03/random-tableau-tips.html).

    1. Double click on the "pill" of the field - so the name of the field on the Row shelf, Columns shelf, or Marks Card. This will change it from a green colored "pill", to the text editing version with the field name surrounded by brackets "[Field Name]".
    2. Put your cursor at the start of the field to start typing before the name of the field.
    3. Type // (like making a comment in a calculated field)
    4. Put a space after the // and then type your desired alias.
    5. Hold *Shift* and press Enter. You will see just the [Field Name] again.
    6. Release *Shift* and press Enter one more time.
    7. Your column should be aliased now! Note this alias will persist on every worksheet of your workbook.
    <details>
    <summary>Example Code</summary>

    ```text
    // Aliased Name
    [Field Name]
    ```

    </details>
