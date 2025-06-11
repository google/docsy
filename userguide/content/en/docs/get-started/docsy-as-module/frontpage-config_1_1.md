<h1>Tutorial: Front page text configuration</h1>

This tutorial will describe how to use some configuration options for the frontpage of your Open SDG implementation. This is intended to be a continuation of the [quick start](../quick-start.md) tutorial.

## Topics covered

* Site configuration
* Custom translations

Note that this tutorial involves translation, and assumes that your Open SDG implementation is using the two languages included in the Quick Start: English and Spanish. If you have already added/removed languages, then when you see mentions of languages later in this tutorial, you may need to interpret accordingly.

## Level of difficulty

This tutorial involves working with text files, but requires no previous technical expertise.

## Customize some text on the frontpage

Take a look at the frontpage of your Open SDG implementation (if you have not already done so, complete the [quick start](../quick-start.md) tutorial). Notice how, above the grid of goal icons, it says:

```
Our data for Sustainable Development Goal indicators
```

In this tutorial you are going to customize that text to better suit your implementation. The steps are as follows:

1. Log in to Github.com, and go to your site repository.
1. In the list of files, click into the `_data` folder and click on `site_config.yml`. Alternatively, you can alter this setting using the site configuration form. If you do not have the `_data` folder (older versions), click on `_config.yml` in the main list of files.
1. Click the pencil icon on the right to begin editing the file.
1. Look for the `frontpage_goals_grid` section.
1. On the next line, change `title: Our data for Sustainable Development Goal indicators` to whatever you would like. For example, you might change the line to read: `title: U.S. data for SDG indicators`.
1. Similarly, on the following line, change the `description` as well, to your own preferences.
1. Towards the bottom, select "Create a new branch for this commit and start a pull request."
1. Beneath this, click "Propose changes".
1. Click on the green "Create pull request" button.
1. Wait a moment to see the message that says "Test PRs / test (pull_request) - in progress"
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.

## View the results

Your site will now begin rebuilding. After about 5 minutes, if you visit your site, you should see the updated text on the frontpage.

## Translate the new text

If you switch to a different language using the language-switcher, you will quickly notice a problem: the same text (whatever you chose to enter above) appears on all the languages. You need to translate this text so that it appears in the appropriate language.

The translations will be put in the data repository. You will be creating one file per language, starting with English. Here are the steps:

1. Log in to Github.com, and go to your data repository.
1. In the list of files, navigate to the `translations` folder.
1. Press the "Add file" drop-down and select "Create new file".
1. In "Name your file" type `en/` and then type `my-custom-translations.yml`. (This name - my-custom-translations.yml - is arbitrary, but you will be referring to it later.)
1. Under "Edit new file", type `my-goals-grid-title: ` followed by the text you entered above (in the "frontpage_goals_grid" section for "title").
1. On the next line, type `my-goals-grid-description: ` followed by the text you entered above (in the "frontpage_goals_grid" section for "description").
1. Confirm that you have something that looks roughly like this:
    ```
    my-goals-grid-title: Some text...
    my-goals-grid-description: Some other text...
    ```
1. At the bottom select `Create a new branch for this commit and start a pull request.`
1. Click "Propose new file".
1. Click on the green "Create pull request" button.
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.

Next you will repeat these steps, but for Spanish:

1. Still logged in to Github.com, go to your data repository.
1. In the list of files, navigate to the `translations` folder.
1. Press the "Add file" drop-down and select "Create new file".
1. In "Name your file" type `es/` and then type `my-custom-translations.yml`. (This name - my-custom-translations.yml - is arbitrary, but you will be referring to it later.)
1. Under "Edit new file", type `my-goals-grid-title: ` followed by a *Spanish translation* of the text you entered above (in the "frontpage_goals_grid" section for "title").
1. On the next line, type `my-goals-grid-description: ` followed by a *Spanish translation* of the text you entered above (in the "frontpage_goals_grid" section for "description").
1. Confirm that you have something that looks roughly like this:
    ```
    my-goals-grid-title: Algún texto...
    my-goals-grid-description: Algún otro texto...
    ```
1. At the bottom select `Create a new branch for this commit and start a pull request.`
1. Click "Propose new file".
1. Click on the green "Create pull request" button.
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.

If you have added any other language besides English and Spanish, repeat the steps as needed.

## Update the frontpage configuration to use your translations

Now you need to go back to the site repository and tell it to use these new translations. The steps are as follows:

1. Log in to Github.com, and go to your site repository.
1. In the list of files, click into the `_data` folder and click on `site_config.yml`. Alternatively, you can alter this setting using the site configuration form. If you do not have the `_data` folder (older versions), click on `_config.yml` in the main list of files.
1. Click the pencil icon on the right to begin editing the file.
1. As before, look for the `frontpage_goals_grid` section.
1. Change the two lines below it to the following:
    ```
    title: my-custom-translations.my-goals-grid-title
    description: my-custom-translations.my-goals-grid-description
    ```
1. Towards the bottom, select "Create a new branch for this commit and start a pull request."
1. Beneath this, click "Propose changes".
1. Click on the green "Create pull request" button.
1. Wait a moment to see the message that says "Test PRs / test (pull_request) - in progress"
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.

Before continuing, here is some detail on what you just did. You removed the text from these configuration settings, and you entered "[translation keys](../translation.md)".

Translation keys consist of 2 parts, separated by a dot (`.`). The first part refers to the file containing the translations (in this case, `my-custom-translations`) and the second part refers to the key within that file (in this case, `my-goals-grid-title` and `my-goals-grid-description`).

## View your results

Your site will now begin rebuilding. After about 5 minutes, if you visit your site, you should be able to use the language-switcher and confirm that your custom frontpage text is now being translated correctly.

## Troubleshooting

If this did not appear to work, please consult the [troubleshooting page](../troubleshooting.md).
