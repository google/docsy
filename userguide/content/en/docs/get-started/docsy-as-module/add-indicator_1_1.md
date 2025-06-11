<h1>Tutorial: Adding indicators</h1>

This tutorial will describe how to add a new indicator to your Open SDG implementation. This is intended to be a continuation of the [quick start](../quick-start.md) tutorial.

## Topics covered

* Data updates
* Metadata updates
* Data and site builds

## Level of difficulty

This tutorial involves working with text files, but requires no previous technical expertise.

## Gather the data and metadata for your new indicator

Normally you would gather data and metadata from actual sources, but for the purposes of this tutorial you will make up data and metadata for a new indicator: 15.3.1.a - "Proportion of wetland that is degraded over total wetland area".

> Whether or not goal 15 is the appropriate place for such an indicator is beside the point - this is just an example.

Your imaginary data for this new indicator could be the following, disaggregated by urbanisation:

| Year | Urbanisation | Value |
| ---- | ------------ | ----- |
| 2015 |              | 55    |
| 2016 |              | 60    |
| 2017 |              | 65    |
| 2015 | Urban        | 75    |
| 2016 | Urban        | 80    |
| 2017 | Urban        | 80    |
| 2015 | Rural        | 35    |
| 2016 | Rural        | 40    |
| 2017 | Rural        | 45    |

And your imaginary metadata for this new indicator could be the following:

```
Indicator name: Proportion of wetland that is degraded over total wetland area
Computation units: Percentage
Source: Wetland Statistics Agency (wetlandstaticsagency.org)
Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...
```

## Convert the data into a CSV file and upload it

This is most easily done with spreadsheet software like Excel or Google Sheets. Simply enter the data into the sofware and then export to CSV (such as with "Save as" in Excel, or "Download as" in Google Sheets). A few important guidelines:

1. Make the left-most column the "Year" column (with a capital Y).
1. Make the right-most column the "Value" column (with a capital V).
1. Any disaggregation columns (eg, "Urbanisation") can be named whatever you would like.
1. Name the file `indicator_15-3-1-a.csv` (the "indicator_" is simply an Open SDG convention).

Steps to upload the CSV file:

1. Go to github.com and login, then go to your data repository.
1. In the list of files, navigate to the `data` folder.
1. Press the "Add file" drop-down and select "Upload files".
1. Drag in your new `indicator_15-3-1-a.csv` file or click to browse for it.
1. At the bottom select `Create a new branch for this commit and start a pull request.`
1. **Change the name of the branch to `indicator-tutorial`. You will use this same branch name for all changes in this tutorial.**
1. Beneath this, click "Propose new file".
1. Change the name of the pull request to "Indicator tutorial".
1. Click on the green "Create pull request" button.

In contrast to past tutorials, **do not "merge" this pull request.** You will be adding another change to the pull-request before merging it.

## Upload metadata in YAML format

This step is most easily done directly in Github.com.

1. Go to github.com and login, then go to your data repository.
1. From the drop-down on the `code` tab, type in and open the feature branch created earlier – `indicator-tutorial` 
1. In the list of files, navigate to the `meta` folder.
1. Ensure you are on your `indicator-tutorial` branch, if not use the dropdown menu to select this branch.  
1. Press the "Add file" drop-down and select "Create a new file".
1. For "Name your file" enter `15-3-1-a.yml` (this is an Open SDG convention as well).
1. Under "edit new file", enter the following lines:

```
indicator_name: Proportion of wetland that is degraded over total wetland area
indicator_number: 15.3.1.a
computation_units: Percentage
source_active_1: true
source_organisation_1: Wetland Statistics Agency
source_url_1: "https://wetlandstaticsagency.org"
reporting_status: complete
```

1. At the bottom you should see "Commit directly to the `indicator-tutorial` branch".
1. Click the "Commit changes" button.

### Explanation of metadata format

Before continuing, let's explain the parts of that metadata file.

* indicator_name: This is the indicator's name.
* indicator_number: This is the ID of the indicator - in this case we chose a 4-part indicator ID.
* computation_units: A description of the unit of measurement.
* source_active_1: This tells Open SDG that there is a source.
* source_organisation_1: This is the name of the source.
* source_url_1: This is the website of the source.
* reporting_status: The 'complete' here tells Open SDG that it should display this indicator's data.

This syntax, `some_key: Some value` is known as [YAML](https://yaml.org/).

## Merge the pull request

Now your pull request is ready to merge.

1. In your data repository, click on "Pull requests".
1. Click on the "Indicator tutorial" pull request.
1. At the bottom click on the green "Merge pull request" button.

## Getting the new indicator to your site

Although you have now updated your data repository, you will find if you visit your site that the new indicator is not there. This is because the site repository now needs to be rebuilt.

The site repository is automatically rebuilt every 24 hours, so you could simply wait. But in the interests of time, you can also trigger a site build by simply changing any file in your site repository. Here is an example:

1. Go to github.com and log in, then go to your site repository.
1. In the list of files, click on the `README.md` file.
1. Click the pencil icon to begin editing the file.
1. Add an extra line at the bottom.
1. At the bottom select `Create a new branch for this commit and start a pull request.`
1. Click `Commit changes`.
1. Click `Create pull request`.
1. Wait for the tests to complete, and then click `Merge pull request`.

> For a way to automate this process, see the [triggered site builds](../automation/triggered-site-builds.md) documentation.

## View your results

Your site will now begin rebuilding. After about 5 minutes, if you visit your site and go to Goal 15, you should see the new indicator populated with data and metadata.

## Troubleshooting

If this did not appear to work, please consult the [troubleshooting page](../troubleshooting.md).
