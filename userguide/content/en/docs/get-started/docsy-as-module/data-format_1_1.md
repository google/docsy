<h1>Data format</h1>

These guidelines are for anyone wishing to supply a dataset for an SDG indicator.

## Column headings

* The first row in the csv must be the column names. There can't be any extra rows with information, notes etc.
* The first column must be `Year`, case sensitive with no extra white space.
* The last column must be `Value`, case sensitive with no extra white space.
* If geo codes are included, the second from last column must be 'GeoCode', case sensitive with no extra white space
* Any number of categorical columns may go in between e.g. 'Sex', 'Age', 'Geography'. Ensure you use consistent category naming across the indicators.

## Fields

* `Year` should be integer, unquoted, e.g. `2017`.
* You do not need to have each year present, and order does not matter.
* `Value` should always be numeric (no notes, or < symbols etc), or blank (signifies missing).
* `Units` see section below. This is a special field.
* If a cell is blank (missing) this means aggregated over. So in the example below the first row is disaggregated by Grade=A, then Grade=B, and the last one is missing, which means “Both”. The blanks in the Fruit field mean “All fruits”. So blank, in general, means “all”. There is no need for any text saying 'Total'.
* There must not be trailing white-space in any categorical field. So "A Word" is OK, but "A   " is not. See further info below.

| Year|	Grade|	Fruit|	Value|
|:----|:----|:--------|------:|
|2016| A |	 	| 1.1|
|2016| B |	        | 1.2|
|2016|	 |         	| 1.15|

If we have it broken down by fruit OR grade then it would look like the plot below. The last line, with all grouping columns blank, is the national level indicator.

|Year|Grade	|Fruit | Value|
|:---|:----|:------|-----:|
|2016|	A  |		|1.1|
|2016|	B |		|1.2|
|2016|	|	Apples	|1.0|
|2016|	|	Oranges	|1.3|
|2016|	|	Lemons	|1.05|
|2016|	|		|1.15|

Then if we introduce two levels it would go to something like (values just for illustration):

|Year   |Grade| Fruit	| Value |
|:------|:----|:---------|:------|
|2016	|A |	Apples |1.05   |
|2016	|B |	Apples	|0.95 |
|2016	|  |	Apples	|1.00 |
|2016	|A |	Oranges	|1.35 |
|2016	|B |	Oranges	|1.25 |
|2016	|  |	Oranges	|1.3  |
|2016	|A |	Lemons	|1.1  |
|2016	|B |	Lemons	|1.0  |
|2016	|  |	Lemons	|1.05 |
|2016	|A |		|1.1  |
|2016	|B |		|1.2  |
|2016	|  |		|1.15 |

The idea is that the plot would start out with the all blank row (at the bottom) and then as you add disaggregations to the plot it would filter to show the right data.

A full size demo data set can be [downloaded here](https://raw.githubusercontent.com/wiki/datasciencecampus/sdg-indicators/data/demo_indicator.csv)

## Units

Some indicators are reported using different units of measure. A special column name, `Units` is used to capture this (see the UK's [9-2-1](https://github.com/ONSdigital/sdg-data/blob/develop/data/indicator_9-2-1.csv) as an example). The `Units` column is interpreted as a special top-level disaggregation. You may only choose one at a time and it affects the chart axis labels. A Units column is not required if an indicator only includes one unit.

## Indicators without headlines

A "headline" is a term for the all-blank row mentioned above, which contains no disaggregations. By default, this "headline" is what will display as soon as an indicator page loads.

However, Open SDG can also handle indicator data without a headline. This might happen, for example, if you have statistics for "Apples" and "Oranges", but no aggregated total for all fruits:

|Year|Grade|Fruit   | Value|
|:---|:----|:-------|:-----|
|2015|A    |Apples  |1.2   |
|2016|A    |Apples  |1.5   |
|2015|     |Oranges |1.3   |
|2016|     |Oranges |1.4   |

Open SDG will choose the smallest set of disaggregations to start with. So in the example above, Open SDG will start with "Oranges" selected.

In addition, by setting a special metadata field called `data_start_values`, you can also control exactly what disaggregations are selected. For example by setting this in the metadata for an indicator...

```
data_start_values:
  - field: Fruit
    value: Apples
  - field: Grade
    value: A
```

...Open SDG will start with both "Apples" and "A" selected, instead of "Oranges".

## White space

You can double check for white space within an Excel file using a COUNTIF formula or by running a macro. We will add more information on this soon.

## Translation

All column headers and disaggregation values can be "translation keys" to enable translation. As an optional shorthand, if the translation key is in the `data` group, then the group can be omitted. For example, the translation key `data.female` can be written as simply `female`.
