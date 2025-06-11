<h1>Tutorial: Changing colors</h1>

This tutorial will describe how to change the color scheme on your Open SDG implementation. This is intended to be a continuation of the [quick start](../quick-start.md) tutorial. We will change the color of the buttons that appear throughout the site.

## Topics covered

* CSS colors
* Sass variables
* Changing files in Github

## Level of difficulty

This tutorial involves a mechanism known as "Sass variables". Although it sounds technical, it does not require previous experience. Anyone will be able to follow the steps in this tutorial and then extend the lessons to other purposes.

## Find the variable of the color you would like to change

Before we change our button color, we need to find the name of the "variable" that controls it. All of Open SDG's color variables are contained in [this _colors.scss file](https://github.com/open-sdg/open-sdg/blob/master/_sass/variables/_colors.scss). The button colors, specifically, are on [lines 59-62](https://github.com/open-sdg/open-sdg/blob/master/_sass/variables/_colors.scss#L59-L62). These lines read:

```
$button-color: #0F8243 !default;
$button-color-pressed: #0b5d30 !default;
$button-foregroundColor: white !default;
$button-foregroundColor-visited: white !default;
```

Let's break down the first line, so we can explain each part.

* `$button-color`: This is the name of the "variable", and is the part we need for our purposes.
* `#0F8243`: This is the current green color, in [CSS hex format](https://www.w3schools.com/colors/colors_hexadecimal.asp).
* `!default`: You will see this on all the colors in the file, and it is not relevant to this tutorial.

For the purposes of this tutorial, we will not need to change the foreground color of the buttons, so we will only need `$button-color` and `$button-color-pressed`.

## Choose new colors

We will use a [blue color (#005ea2)](https://www.w3schools.com/colors/colors_picker.asp?colorhex=005ea2) for the button, and a [darker blue (#162e51)](https://www.w3schools.com/colors/colors_picker.asp?colorhex=162e51) for when the button is pressed.

## Open the `variables.scss` file in your site repository

1. In your browser, go to github.com and log in, then go to your site repository.
1. In the list of files, navigate to the `_sass/variables.scss` folder.
1. Click the pencil icon on the right.

## Add your new colors

1. Add two new lines at the bottom:
    ```
    $button-color: #005ea2;
    $button-color-pressed: #162e51;
    ```
1. Towards the bottom, select "Create a new branch for this commit and start a pull request."
1. Beneath this, click "Propose changes".
1. Click on the green "Create pull request" button.
1. Wait a moment to see the message that says "Test PRs / test (pull_request) - in progress"
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.

## View your results

Your site will now begin rebuilding. After about 5 minutes, if you visit your site you should see the updated button color.

## Next steps

If you like the color change, feel free to leave it. Otherwise, you can remove those lines to revert it. Make any other color changes in the same way. To summarize, here are the steps:

1. Find the names of the variables you would like to change, in [the Open SDG color variables file](https://github.com/open-sdg/open-sdg/blob/master/_sass/variables/_colors.scss).
1. Choose new colors. There are various tools available, such as [this color picker](https://www.w3schools.com/colors/colors_picker.asp).
1. In your site repository, edit the `_sass/variables.scss` file and assign your new colors to the chosen variable names.

## Troubleshooting

If this did not appear to work, here are a few areas to check on:

1. Have you waited long enough? It can take about five minutes for the site to rebuild.
1. Is your browser holding onto the old files? Sometimes a browser can aggressively cache outdated files. Doing a "hard refresh" can help. For most browsers this is done by pressing CTRL and F5, or SHIFT and F5.
1. Did you type in the variable names precisely? For example, if you typed `$button-colors` (plural) instead of `$button-color` then it will not work.
1. Did you forget a `$` (dollar sign) in front of the variable names?
1. Did you forget a `:` (colon) after the variable names?
1. Did you forget a `;` (semi-colon) at the end of the lines?
