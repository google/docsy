<h1>Chart types</h1>

Open SDG supports a few different types of charts. Each indicator will display a type of chart according to the `graph_type` metadata field. See below for more details on each type.

## Line

This type of chart is a horizontal line connecting points representing each year. Disaggregations are displayed by adding more lines to the chart.

This type of chart works well for showing trends in SDG data.

To use this type, put `line` in the `graph_type` metadata field for an indicator. For example:

```
graph_type: line
```

## Bar

This type of chart shows each year as a vertical bar. Disaggregations are displayed by adding more bars above each year.

This type of chart may be a suitable alternative to `line` in the case where you only have 1 or 2 years of data.

To use this type, put `bar` in the `graph_type` metadata field for an indicator. For example:

```
graph_type: bar
```

### Stacked bars

You may want a particular disaggregation (such as "Sex" or "Age") to appear stacked in the same bar, most commonly when the unit of measurement is a percentage. In order to do this, set the `graph_stacked_disaggregation` to the desired disaggregation (again, "Sex, "Age", etc.)

For example, if an indicator is showing salaries, and you would like to highlight the difference between female and male salaries, you may want the "Sex" disaggregation to appear stacked in the same bars. So you would set this metadata field:

```
graph_stacked_disaggregation: Sex
```

In addition, when setting up a stacked bar chart, you may want the chart to appear with certain values (such as "Female" and "Male") already selected. You can do this with `data_start_values`, like so:

```
data_start_values:
  - field: Sex
    value: Female
  - field: Sex
    value: Male
```

NOTE: Stacked bar charts tend to look best when all the bars are of equal height. For example, the disaggregated data could by percentages that all add up to 100. For example:

Year | Sex | Value
---  | --- | -----
2018 |     | 100
2018 | Female | 60
2018 | Male | 40

## Binary

This type of chart is meant to display data where the only possible values are "Yes" and "No". It does this by showing a bar going up for "Yes", and a bar going down for "No". See below for important data requirements.

To use this type, put `binary` in the `graph_type` metadata field for an indicator. For example:

```
graph_type: binary
```

In addition, see the special data requirements below.

### Data requirements for binary charts

Your data (CSV files typically) cannot have "Yes" and "No" for values. Instead you must use `1` to indicate "Yes" and `-1` to indicate "No".
