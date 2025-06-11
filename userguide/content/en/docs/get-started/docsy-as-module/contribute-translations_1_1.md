<h1>Tutorial: Contributing to SDG Translations</h1>

This tutorial will describe how to contribute translations to the [SDG Translations project](https://github.com/open-sdg/sdg-translations), which is the source of translations for Open SDG's multilingual features. The intended audience for this tutorial is anyone setting up an Open SDG platform in a language that is not yet part of SDG Translations.

At the time of this writing, SDG Translations contains translations in Arabic, Armenian, Burmese, Chinese (simplified), French, German, Kazakh, Norwegian Bokmål, Russian, Spanish, and Turkish. If your target language is not in this list, then this tutorial is for you.

## Topics covered

* Using Weblate

## Level of difficulty

This tutorial is performed in a web-application called [Weblate](https://weblate.org/en/), and so does not require any technical expertise. All that is needed is written fluency in both English and the target language.

## Registering an account on Weblate

Before continuing, please visit the [Hosted Weblate registration page](https://hosted.weblate.org/accounts/register/) to register and log in.

Next visit the [SDG Translations project on Weblate](https://hosted.weblate.org/projects/sdg-translations/) and create a bookmark. Hereafter this page will be referred to as "Weblate".

## Checking the available languages

On Weblate, you will see a long list of "Components". These represent different aspects of Open SDG's interface that need translation. Click on the "General" component.

You should now be on: https://hosted.weblate.org/projects/sdg-translations/general/

You will see a list of languages. If your target language is **not** in this list, you will need to request it before continuing -- go on to "Requesting a new language" below. Otherwise, if you **do** see your language in this list, skip ahead to "Performing translations".

## Requesting a new language

Go to any component, such as the ["General" component](https://hosted.weblate.org/projects/sdg-translations/general/) and press "Start new translation" at the bottom. (You must be logged in to press this button.)

Search for for your target language under "Available", and select it so that it appears under "Chosen". Now press "Request new translation".

At this point, you will need to wait for a response from the Open SDG team. This should not take longer than a few days. Pause here and come back to this document after your request is approved. You will be notified at the email address associated with your Weblate account.

## Performing translations

As mentioned above, on Weblate there is a long list of components. If your intention is to translate *all* components, simply start at the top of the list and work your way down. Otherwise locate the component that is applicable to the item you would like to translate.

* Click on your selected component.
* Next click on your target language.
* Then press the "Translate" button.

In Weblate the term for a sentence/phrase/word is a "string". You should now be looking at the first of multiple strings in your chosen component: the source English at the top, and the target translation (if it exists) below. For example, if you chose the "Calendar" component, you will be looking at a translation for "January".

### Examine the existing translation

This is a decision point. Is the translation already correct? Or is the translation incorrect/missing?

### The translation is already correct

In this case, simply advance to the next string by pressing the right-arrow button at the top of the string. Go back and continue again from "Examine the existing translation". 

### The translation is incorrect/missing

In this case, enter the correct translation in the box that is underneath the English source box.

You can get help from a machine-translation service by pressing the "Automatic suggestions" tab towards the bottom of the page. If any machine translations are available, they will appear in a list. Press "Copy" next to the one that looks best.

If you are not ready to correct this translation, press the "Skip" button.

Otherwise, after the translation is corrected, press the "Save" button. This takes you on to the next string, where you can continue again from "Examine existing translation".

## Next steps

After you have contributed translations in the way detailed above, the Open SDG team will review and approve the changes, and eventually they will be available in a future release. If there are any questions, you may be contacted via Weblate's comment section.

## Optional steps

### Change interface language

In the top-level menu, click the "Languages" dropdown menu and select "Manage translated languages".

Underneath the "Interface Language" heading, use the dropdown to select the language you want to use Weblate in.

### Translating from a non-English language

When checking the available languages, if the language you want is not available or hasn't yet been translated but there is another language that you would prefer to translate from you can add this as a secondary source language.

To do this, in the top-level menu, click "Languages" dropdown menu and select "Manage translated languages".

Underneath the "Secondary languages" heading, select the language which you would also like terms to display in when translating.


**Thank you for contributing to the project!**
