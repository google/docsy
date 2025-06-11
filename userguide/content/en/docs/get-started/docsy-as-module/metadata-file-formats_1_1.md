<h1>Metadata file formats</h1>

Metadata can be uploaded in three different formats:
- Markdown (.md)
- Excel (.xlsx)
- CSV (.csv)

## Naming your metadata files
When naming your metadata files, you should follow a set naming convention - indicator code separated with dashes followed by the file extension. For example:
- 1-1-1.md
- 1-1-1.xlsx
- 1-1-1.csv

## Markdown

By default, Metadata in the data starter repository are Markdown files which contain YAML and Markdown. These files should be maintained in the way as described on the [Metadata format page](metadata-format.md)

## Excel and CSV

Maintaining metadata in Excel and CSV files is very similar, and a mapping can be used to make the process more user friendly.

Your Excel Worksheet or CSV file should only have two columns, with the field name in the first column and the field value in the second column. For example:

|    |    |
|----|----|
|SDG Goal|1|
|Target name|1.1 By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day|
|Indicator name|1.1.1 Proportion of population below the international poverty line, by sex, age, employment status and geographical location (urban/rural)|
|Definitions|- Poverty: the state of being extremely poor<br>- International poverty line: $1.90 a day at 2011 international prices.|
|Unit of measurement|Percentage (%)|

If you decide to have the human-readable labels as the field values in your Excel/CSV files, you will also need to upload a mapping. The mapping should be uploaded in CSV format, with the human-readable field name in the first column and the machine readable name in the second column. For example:

|    |    |
|----|----|
|Goal|sdg_goal|
|Target name|target_name|
|Indicator name|indicator_name|
|Definitions|computation_definitions|
|Unit of measurement|computation_units|

**Note:** if you are unsure what the machine-readable field names are, take a look at the *_prose.yml* file in your data repo. If you haven't made any changes to your file, it should still follow the [*_prose.yml* file that comes with the starter data repo](https://github.com/open-sdg/open-sdg-data-starter/blob/develop/_prose.yml)

If you want to use the machine-readable field names in the Excel or CSV files instead of having a mapping, your file would look like this:


|    |    |
|----|----|
|sdg_goal|1|
|taret_name|1.1 By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day|
|indicator_name|1.1.1 Proportion of population below the international poverty line, by sex, age, employment status and geographical location (urban/rural)|
|computation_definitions|- Poverty: the state of being extremely poor<br>- International poverty line: $1.90 a day at 2011 international prices.|
|computation_units|Percentage (%)|

## Special fields which can't be set in an Excel or CSV file
Unfortunately, there are some metadata fields which can't be set in an Excel or CSV file, so a separate Markdown (.md) file would need to be used alongside the Excel/CSV file.

These are fields that require a list:

- tags
    - Note: if you are only using one tag for an indicator, this field can be set in the Excel/CSV file. If you are using more than one tag for an indicator, this field will need to be set in a Markdown file.
- data_start_values (see the [guidance on the indicator configuration page](indicator-configuration.md#data_start_values) for more information about this field.)
- graph_titles (see the [guidance on the indicator configuration page](indicator-configuration.md#graph_titles) for more information about this field.)
