<h1>Tutorial: Changing the logo and favicon</h1>

This tutorial will describe how to change the logo and favicon for your implementation of Open SDG. This is intended to be a continuation of the [quick start](../quick-start.md) tutorial. We will replace the [default logo](https://github.com/open-sdg/open-sdg/blob/master/assets/img/SDG_logo.png) and the [default favicon](https://github.com/open-sdg/open-sdg/tree/master/assets/img/favicons/favicon.ico).

## Topics covered

* Choosing images
* Uploading files in Github
* Creating favicons

## Level of difficulty

This tutorial does not require any technical expertise.

## Find a logo

First, find (or create) a replacement logo image. An obvious choice might be your country's flag (such as those available in [this repository of flag images](https://github.com/hjnilsson/country-flags)) but this is up to your preference. Here are a few guidelines to keep in mind:

1. The image must be a PNG file named `SDG_logo.png`. This is case-sensitive, so make sure the name is exactly right.
1. We recommend the image's width should be at least 600 pixels.
1. We recommend the image's file size should be 50KB or less.

## Upload the logo

Next we will upload the logo to your site repository.

1. In a browser go to github.com and log in, then go to your site repository.
1. In the list of files, navigate to the `assets/img` folder.
1. Click `Add a file` and then `Upload files`.
1. Drag in your new `SDG_logo.png` file or click to browse for it.
1. At the bottom select `Create a new branch for this commit and start a pull request.`
1. Click `Propose changes`.
1. Click `Create pull request`.
1. Wait for the tests to complete, and then click `Merge pull request`.

## High contrast logo

The logo you have uploaded will not automatically replace the logo shown on the page in high contrast mode. 

1. Make a high contrast version of your logo by changing all the colours to black and white. Make sure this is a .png file.
1. In a browser go to your site repository.
1. In the list of files, navigate to the `assets/img` folder.
1. Create a new feature branch.
1. Click `Add a file` and then `Upload files`.
1. Drag in your new high contrast `.png` file or click to browse for it.
1. In the same feature branch, click on the file in the folder and click the pencil to edit.
1. Click into where the file name is written and at the start of your file name, add `high-contrast/` to the beginning and change the file name to `SDG_logo.png`. This will create a folder named high-contrast that your .png is contained in.
1. Start a pull request merging your feature branch into `develop`.
1. Wait for the tests to complete, and then click `Merge pull request`.

## Find a favicon

Next we will replace the "favicon" (the small image that appears in browser tabs). Again, the actual image is up to your preference. A common choice, again, is to your your country's flag. For this tutorial we will use the logo you uploaded above.

1. In a browser visit [favicon.io](https://favicon.io/favicon-converter/).
1. Drag in your new `SDG_logo.png` file or click to browse for it.
1. Click `Download`.
1. Unzip the zip file somewhere on the computer. It should contain several versions of your logo image.

## Upload the favicon

Finally we will upload the favicon to your site repository.

1. In a browser go to your site repository.
1. In the list of files, navigate to the `assets/img/favicons` folder.
1. Click `Add a file` and then `Upload files`.
1. From the unzipped folder of images, drag in all of the files. Or click to browse for them and select all the files from that unzipped folder.
1. At the bottom select `Create a new branch for this commit and start a pull request.`
1. Click `Propose changes`.
1. Click `Create pull request`.
1. Wait for the tests to complete, and then click `Merge pull request`.

## View your results

Your site will now begin rebuilding. After about 5 minutes, if you visit your site you should see the updated logo and favicon.

> Note that browsers tend to cache favicons aggressively. You may need to refresh the page a few times before you see the new favicon.

## Troubleshooting

If this did not appear to work, here are a few areas to check on:

1. Have you waited long enough? It can take about five minutes for the site to rebuild.
1. Is your browser holding onto the old files? Sometimes a browser can aggressively cache outdated image files. Doing a "hard refresh" can help. For most browsers this is done by pressing CTRL and F5, or SHIFT and F5.
1. Did you name the logo file exactly `SDG_logo.png`? Even a small difference will prevent Open SDG from "seeing" the file. For example, `sdg_logo.png` will not work, because the `sdg` is not capitalized. Similarly, `SDG-logo.png` will not work, because the `-` should be a `_` (underscore).
1. Did the files get uploaded to the right place? After completing this tutorial, your new logo should be in the site repository at `assets/img/SDG_logo.png`. And your new favicon images should be in the site repository at `assets/img/favicons/`. For example, if your favicons got uploaded to `assets/img/` (without the `favicons` subfolder) then it will not work.
