<h1>Making updates to data and metadata</h1>

This document will describe how to update data and metadata for the Open SDG platform.

Note that there are many ways to store, manage and update data and metadata for Open SDG. This document describes one way, and assumes a default implementation of Open SDG.

## Before you start

These steps have 4 pre-requisites:

1. A [GitHub.com](https://github.com) account

    If you do not already have one, go to [GitHub](https://github.com) now to sign up for your free account.
2. A working implementation of Open SDG (hereafter referred to as the "staging site")

    In most cases, the "staging site" will be something similar to: `https://my-org.github.io/my-site` (but with `my-org` and `my-site` changed as appropriate). If you do not have such a site available, or you are not sure, check with your team before continuing. Instructions on getting started are available on the [Quick Start page](quick-start.md).
3. Your Github.com account needs to have "write permissions" on your Open SDG repositories. If you personally performed the "Quick Start" mentioned above, you already have this. If not, you may need to ask the person that set up the Open SDG repositories to give you "write permissions".
4. It's recommended to have some sort of spreadsheet software, like Excel. This will be used to edit CSV files.

## GitHub.com login

For all of the steps below, you will need to be logged into GitHub.com, in whatever web browser you are using. To check just visit [GitHub.com](https://github.com). If you are not already logged in, click "Sign in" to log in.

NOTE: As long as you continue using the same web browser that you used to log in, the following steps will work. If you switch browsers, or clear your browser cache, you will need to log into GitHub.com again before continuing.

## Pick an SDG indicator to edit

Below we will describe how to update the data and metadata for an SDG indicator. You will need to visit that goal/indicator on your staging site.

For example, if you would like to edit indicator 1-1-1, you should go to your staging site, click on Goal 1, and then click on Indicator 1-1-1.

Go ahead and do this now, for any indicator you would like.

## Editing data

On the indicator page, click the `Edit Indicator` tab and then click `Edit Data`.

This takes you to a spreadsheet-like interface displaying the data for your indicator. You should also see a button that says "Download data" and another that says "Go to repository".

Click the "Download data" button to get the CSV file for that indicator's data. Open that CSV file in Excel (or similar) and make any changes that you would like to the data.

> A few notes about editing data:
>
> 1. The first column should be `Year`.
> 2. The last column should be `Value`.
> 3. In between, you can have any number of disaggregation columns (eg, `AGE`, `SEX`, etc.).
> 4. You can use an optional column called `Units` to denote the unit of measurement.
> 5. You can use an optional column called `Series` to denote the series. If you are not familiar with the concept of "series" in the SDGs, it is sometimes used to split an indicator into multiple sub-indicators.

After you have finished making your changes in Excel, save the file. Back on that "Edit Data" page, click the "Go to repository" button. This should take you to your data repository.

Assuming you are still logged in, you should see a drop-down in the upper right that says "Add files". Click that drop-down and select "Upload files". Now you can drag in or select the CSV file that you edited earlier.

Under "Commit changes", select "Create a new branch for this commit and start a pull request". Press "Commit changes". Next you will be taken to another screen, where you should click "Create pull request".

> By creating a "pull request", you have essentially *proposed* changes. 
> Note that your change will not immediately appear on your staging site - the
> change will need to be approved by a platform administrator on your team.

## Editing metadata

Next we will update metadata. Return to the indicator on your staging site, and again click the "Edit Indicator" tab. This time, click "Edit Metadata".

You will now see a list of metadata fields where you can directly type in your edits. Go ahead and make any edits you would like to the metadata.

**Important note**: The edits you make here will NOT be automatically saved. If you close your browser or turn off your computer, your edits will be lost. Get all the way to the end of these steps to ensure your edits are not lost!

Once you have finished making your edits, click "Download configuration". This will download a YAML (.yml) file that should be named according to the indicator number (eg, 1-1-1.yml). Click the "Go to repository" button. This should take you to your data repository.

Assuming you are still logged in, you should see a drop-down in the upper right that says "Add files". Click that drop-down and select "Upload files". Now you can drag in or select the YAML file that you downloaded earlier.

Under "Commit changes", select "Create a new branch for this commit and start a pull request". Press "Commit changes". Next you will be taken to another screen, where you should click "Create pull request".

> By creating a "pull request", you have essentially *proposed* changes. 
> Note that your change will not immediately appear on your staging site - the
> change will need to be approved by a platform administrator on your team.

## Conclusion

This document has detailed how to use GitHub.com and your staging site, to update data and metadata for the Open SDG platform.
