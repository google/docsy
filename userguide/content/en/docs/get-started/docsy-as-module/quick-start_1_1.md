<h1>Quick Start</h1>

<iframe width="560" height="315" src="https://www.youtube.com/embed/frvUcwdHC2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This document will go over the quickest way to get this platform up and running. Here we will choose the simplest approach for automation and hosting, which is to use GitHub. Note, however, that there are alternatives to this approach, as detailed under the Automation and Hosting sections.

## Signing up and creating repositories

1. If you don't already have a Github.com account, [go to Github.com](https://github.com/) to sign up and then log in.
1. Go to the [site starter](https://github.com/open-sdg/open-sdg-site-starter) and click the green "Use this template" button.
1. You can enter any name for the repository. Here we recommend using "site".
1. Leave "Public" selected. (**required**)
1. Check the "Include all branches" box. (**required**)
1. Click "Create repository from template".
    * Bookmark the created repository -- this is your *site repository*.
1. Go to the [data starter](https://github.com/open-sdg/open-sdg-data-starter) and click the green "Use this template" button.
1. As before, you can enter any name for the repository. Here we recommend using "data".
1. As before, leave "Public" selected. (**required**)
1. As before, check the "Include all branches" box. (**required**)
1. Click "Create repository from template".
    * Bookmark the created repository -- this is your *data repository*.

## Wait for the builds to complete

At this point, both your site repository and your data repository will be performing automatic "builds". These take about 5 minutes to complete. You can monitor the progress in each repository by going to the "Actions" section under the repository name. When you see a green checkmark here, the build is complete.

## View the completed builds

Once the builds are complete, you can view them, using the following steps:

1. Go to the *data repository*.
1. Under the repository name, click "Settings".
1. In the sidebar, click on "Pages".
1. You should see "Your site is published at" next to a link.
1. Click that link to view your data service.
1. Bookmark this page -- this is your *data service*.
1. Go to the *site repository*.
1. Under the repository name, click "Settings".
1. In the sidebar, click on "Pages".
1. You should see "Your site is published at" next to a link.
1. Click that link to view your site.
1. Bookmark this page -- this is your *site*.

## Connect your site to your data service

You now have a working site and a working data service, however they are not yet connected to each other. We need to tell the site where to find the data service.

1. From the previous step you should now be on your *site*. If not, go back there using your bookmark.
1. In the footer menu at the bottom of any page, click "Configuration".
1. Click on the "Dev" menu option and find the "Remote data prefix" setting.
1. In this field, replacing what is already there, paste in the URL of your *data service* (which you bookmarked above).
1. Continue down to the "Repository URL - Data" setting.
1. In this field, replacing what is already there, paste in the URL of your *data repository* (which you bookmarked above).
1. Scroll to the top and press "Download configuration". You will receive a file download called "site_config.yml".
1. Press "Go to repository".
1. Upload the downloaded "site_config.yml" file by dragging it onto the page (this will override the existing file with your changes).
1. Scroll down and press "Commit changes".

## Recommended

To help with maintenance of your implementation, the following automation is *strongly* recommended:

1. [Protection from breaking changes](automation/github.md)
1. [Triggered site builds](automation/triggered-site-builds.md)

## Next steps

To get started with customising your implementation of Open SDG, try any of these tutorials:

1. [Changing the logo and favicon](tutorials/change-logo.md)
1. [Frontpage configuration](tutorials/frontpage-config.md)
1. [Adding indicators](tutorials/add-indicator.md)
1. [Adding languages](tutorials/add-language.md)
1. [Changing colors](tutorials/change-colors.md)
1. [Changing the site-wide banner](tutorials/change-banner.md)

## Troubleshooting

If this did not appear to work, please consult the [troubleshooting page](troubleshooting.md).
