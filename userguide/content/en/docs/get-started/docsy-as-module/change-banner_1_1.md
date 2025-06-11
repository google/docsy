<h1>Tutorial: Changing the site-wide banner</h1>

This tutorial will describe how to change the banner that appears at the top of each page on your Open SDG implementation. This is intended to be a continuation of the [quick start](../quick-start.md) tutorial. We will take an example of adding a banner required by all United States federal websites.

## Topics covered

* Jekyll overrides
* Adding CSS files
* Adding javascript files
* Adding images

## Level of difficulty

This tutorial involves a variety of technical subjects. Anyone can follow the steps to complete the tutorial, however you will be using HTML, CSS, and javascript that has already been created. In order to extend these lessons for your own customizations and purposes, expertise in writing your own HTML, CSS, and/or javascript may be required.

## Identify and design your intended change

In practice, you will first need to identify and design your intended change. This may involve gathering requirements, creating assets, and producing mockups. However for the purposes of this tutorial, you are going to add a [banner component that is required on all United States federal websites](https://designsystem.digital.gov/components/banner/), so this step is already done.

> Note that, in order to make it easier to revert these changes at the end of the tutorial, we will be using Github a bit differently. Here we will put all of our changes into one pull-request, rather than having a separate pull-request for each file, as we have done in past tutorials. The practice we are using here (all related changes in a single pull request) should be used whenever possible.

## Find and download the Open SDG component that you will override

Since you are looking to add a banner at the top of each page, a good place for your code will be the [dev-disclaimer](https://github.com/open-sdg/open-sdg/blob/master/_includes/components/dev-disclaimer.html) "include file". The code in this file is already being displayed at the top of each page, so all you need to do is override that file and update the code.

To get started, let's copy the code of the *Open SDG version* of that file.

1. In your browser go to [https://github.com/open-sdg/open-sdg](https://github.com/open-sdg/open-sdg).
1. In the list of files, navigate to `_includes/components/dev-disclaimer.html`.
1. Above and to the right of the code, click the `Raw` button.
1. Select the entire chunk of code and copy it to your clipboard (press CTRL + a, and then CTRL + c).

## Override the `dev-disclaimer` component

Next you will override that `_includes/components/dev-disclaimer.html` file, by creating a copy of it in your site repository. As with any override of Open SDG files, you need to make sure that it is named precisely the same, and that it has the same exact folder structure.

1. In your browser, go to github.com and log in, then go to your site repository.
1. Above the list of files, click the "Add file" drop-down, and select "Create new file".
1. Where it says "Name your file" type `_includes/`, then type `components/`, and then type `dev-disclaimer.html`.
1. Under "Edit new file" paste the code you copied above (press CTRL + v).
1. Towards the bottom, select "Create a new branch for this commit and start a pull request."
1. **Change the name of the branch to `banner-tutorial`. You will use this same branch name for all changes in this tutorial.**
1. Beneath this, click "Propose new file".
1. Change the name of the pull request to "Banner tutorial".
1. Click on the green "Create pull request" button.

In contrast to past tutorials, **do not "merge" this pull request.** You will be adding several more changes to the pull-request before merging it.

Before going further, switch to your newly-created branch:

1. Go to the root of your site repository.
1. Above the list of files, press the drop-down that says `develop`, and select `banner-tutorial`.

This *switches* you to the `banner-tutorial` branch, which you will use for the remainder of the tutorial.

## Make our desired updates to the overridden component

Now that you have overridden the `_includes/components/dev-disclaimer.html` file by copying it into your site repository, you'll need to make some changes to it, according to your requirements. For the purposes of this tutorial, you are using an existing [banner component](https://designsystem.digital.gov/components/banner/) from the U.S. Web Design System.

At the page linked above you can expand the "Component code" drop-down to see some examples of the HTML involved. But for convenience, here is the snippet of HTML you will need:

```
<section class="usa-banner" aria-label="Official government website">
  <div class="usa-accordion">
    <header class="usa-banner__header">
      <div class="usa-banner__inner">
        <div class="grid-col-auto">
          <img class="usa-banner__header-flag" src="/assets/img/us_flag_small.png" alt="U.S. flag">
        </div>
        <div class="grid-col-fill tablet:grid-col-auto">
          <p class="usa-banner__header-text">An official website of the United States government</p>
          <p class="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
        </div>
        <button class="usa-accordion__button usa-banner__button"
          aria-expanded="false" aria-controls="gov-banner">
          <span class="usa-banner__button-text">Here’s how you know</span>
        </button>
      </div>
    </header>
    <div class="usa-banner__content usa-accordion__content" id="gov-banner">
      <div class="grid-row grid-gap-lg">
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img class="usa-banner__icon usa-media-block__img" src="/assets/img/icon-dot-gov.svg" role="img" alt="Dot gov">
          <div class="usa-media-block__body">
            <p>
              <strong>
                Official websites use .gov
              </strong>
              <br/>
              A <strong>.gov</strong> website belongs to an official government organization in the United States.
            </p>
          </div>
        </div>
        <div class="usa-banner__guidance tablet:grid-col-6">
          <img class="usa-banner__icon usa-media-block__img" src="/assets/img/icon-https.svg" role="img" alt="Https">
          <div class="usa-media-block__body">
            <p>
              <strong>
                Secure .gov websites use HTTPS
              </strong>
              <br/>
              A <strong>lock</strong> (
<span class="icon-lock"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-labelledby="banner-lock-title banner-lock-description"><title id="banner-lock-title">Lock</title><desc id="banner-lock-description">A locked padlock</desc><path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"/></svg></span>
) or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

Copy the HTML code above into your clipboard. Then paste it into your overridden file as follows:

1. In your site repository (still in the `banner-tutorial` branch), navigate to the `_includes/components/dev-disclaimer.html` file.
1. Click the pencil icon to begin editing the file.
1. Paste the HTML snippet at the top, before the existing code.
1. At the bottom you should see "Commit directly to the `banner-tutorial` branch".
1. Click the "Commit changes" button.

## Download the required assets

Because the U.S. Web Design System requires its own CSS, javascript, and images, you still need to upload some additional assets. To start, let's download them. Go to the [USWDS download page](https://designsystem.digital.gov/download/) and click "Download code". Extract the zip file to any location on your computer.

### Upload the CSS file

1. In your site repository (still in the `banner-tutorial` branch) navigate to the `assets/css` folder.
1. Press the "Add file" drop-down and select "Upload files".
1. From your local computer, find the extracted files and select the `css/uswds.min.css` file.
1. At the bottom you should see "Commit directly to the `banner-tutorial` branch".
1. Click the "Commit changes" button.

### Upload the Javascript file

1. In your site repository (still in the `banner-tutorial` branch) navigate to the `assets/js` folder.
1. Press the "Add file" drop-down and select "Upload files".
1. From your local computer, find the extracted files and select the `js/uswds.min.js` file.
1. At the bottom you should see "Commit directly to the `banner-tutorial` branch".
1. Click the "Commit changes" button.

### Upload three image files

1. In your site repository (still in the `banner-tutorial` branch) navigate to the `assets/img` folder.
1. Press the "Add file" drop-down and select "Upload files".
1. From your local computer, find the extracted files and select these three images:
    * `img/icon-dot-gov.svg`
    * `img/icon-https.svg`
    * `img/us_flag_small.png`
1. At the bottom you should see "Commit directly to the `banner-tutorial` branch".
1. Click the "Commit changes" button.

## Use the uploaded CSS and Javascript

Although you have now uploaded the assets, the CSS and Javascript are not yet being loaded onto each page. The following steps are needed to accomplish this.

1. In your site repository (still in the `banner-tutorial` branch) navigate to the `_config.yml` file.
1. Click the pencil icon to begin editing it.
1. Add the bottom of the file, add these snippets:
    ```
    custom_css:
      - /assets/css/uswds.min.css

    custom_js:
      - /assets/js/uswds.min.js
    ```
1. At the bottom you should see "Commit directly to the `banner-tutorial` branch".
1. Click the "Commit changes" button.

## Fix the image paths in the HTML

There is one last step necessary for this tutorial, which could use some explanation. Above when you pasted in the HTML snippet for the USWDS banner component, you may have noticed that it contined three `img` tags. The important point here is what was in the `src` attributes of those tags, summarized here:

* `<img src="/assets/img/us_flag_small.png">`
* `<img src="/assets/img/icon-dot-gov.svg">`
* `<img src="/assets/img/icon-https.svg">`

The problem here is that these `src` attributes start with slashes (`/`). Whenever working with a Jekyll site, you should never start URLs with slashes in this way. Always start with `{{ site.baseurl }}/`. instead of just `/`.

So here is the final update needed for this tutorial:

1. In your site repository (still in the `banner-tutorial` branch) navigate to the `_includes/components/dev-disclaimer.html` file.
1. Click the pencil icon to begin editing it.
1. Look for `src="/assets`. You should see it three times.
1. In each case, replace it with `src="{{ site.baseurl }}/assets`.
1. At the bottom you should see "Commit directly to the `banner-tutorial` branch".
1. Click the "Commit changes" button.

## Merge the pull request

Now you are finished with the updates needed for this tutorial. In order to see the changes, all that is left is to merge the pull request.

1. In your site repository, click on "Pull requests".
1. Click on the "Banner tutorial" pull request.
1. At the bottom click on the green "Merge pull request" button.

## View your results

Your site will now begin rebuilding. After about 5 minutes, if you visit your site you should see the changed banner.

## Next steps

This tutorial was meant to show you the procedures involved, but you likely do not actually want this banner on your Open SDG implementation. Because you made all changes in a single branch, reverting is easy. Here are the steps for reverting:

1. In your site repository, click on "Pull requests".
1. Above the list of pull requests, click on "Closed"
1. Click on the "Tutorial banner" pull request.
1. Beneath the list of commits, click on the small "Revert" button.
1. Click "Create pull request"
1. Click "Merge pull request"
