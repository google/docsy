<h1>Translation</h1>

This platform is designed to be multilingual and can be fully translated into any number of languages. Here are the key parts of the platform that should be translated:

1. The user interface (buttons, labels, etc.)
2. Indicator data disaggregation
3. Indicator metadata and configuration
4. Icons for the 17 goals
5. Any custom pages
6. Site configurations
7. Maps

Each of these 6 parts has its own unique translation challenges. Open SDG's translation system is flexible, which can make it seem confusing. So this document will describe recommended approaches for each of the 6 parts. After learning these recommended approaches, however, you may decide to mix and match approaches as you see fit.

## Part 1: The user interface

The "user interface" includes things like buttons, labels, help text, and other bits and pieces. Because this part is obviously specific to Open SDG, we (the Open SDG team) manage this part. This is handled in a [separate repository](https://github.com/open-sdg/sdg-translations) which is maintained via Weblate at this address:

* [SDG Translations](https://hosted.weblate.org/projects/sdg-translations/)

The number of languages supported in SDG Translations is continually growing, as more languages are requested. Here are instructions on how to take advantage of SDG Translations.

First, check [SDG Translations](https://github.com/open-sdg/sdg-translations/tree/HEAD/translations) and see if the desired language is already there. If so, you can skip the next step.

If not, check to see if you can use [Weblate](https://hosted.weblate.org/projects/sdg-translations/) to add the translations. On Weblate, click on any of the "components", such as [General](https://hosted.weblate.org/projects/sdg-translations/general/). Press "Start new translation" at the bottom to get started, and then follow the prompts to choose your language.

You can then proceed to translate each "component" in Weblate, such as General, Calendar, etc. For more details on using Weblate, see the [official Weblate documentation](https://docs.weblate.org/en/latest/user/basic.html).

Note, in the rare case that your language is not available in Weblate, you will need to manually translate all of the YAML files from the [Github repository](https://github.com/open-sdg/sdg-translations) and then submit your translations as a pull-request.

Important note about machine translations: The translations in SDG Translations are initially performed as machine translations, and then reviewed and corrected by users (like you!). So, the Open SDG team cannot make any guarantees about the quality of these translations. We need the help of our users to confirm that the machine translations are correct, or to improve them as needed.

SDG Translations can be pulled into your platform simply with the [`translations` section of your data configuration file](data-configuration.md#translations). Here is an example pulling in version 2.3.0 of SDG Translations:

## Part 2: Indicator data disaggregation

This part includes the human-readable labels for the breakdowns of the data. For example, this would include translation of the words "Sex", "Female", and "Male". These translations appear on the indicator pages, in charts, tables, and dropdowns.

The recommend approach for translating disaggregation is to use YAML files in a `translations` folder in your data repository. Inside this folder you should have subfolders -- one for each language. Within these subfolders you should have YAML files -- one file for each breakdown that is used in your data.

Here is an illustration of this folder structure, using the example described above of the "Sex" breakdown, translated into English (en) and Spanish (es):

```
translations
    en
        Sex.yml
    es
        Sex.yml

```

If your data also have a breakdown for "Age", then you would need to have "Age.yml" files too:

```
translations
    en
        Age.yml
        Sex.yml
    es
        Age.yml
        Sex.yml

```

The contents of these YAML files should contain key/value pairs that connect the codes from the data with human-readable labels. For example, take the following data in CSV format:

Year|Sex|Value
---|---|---
2023||50
2024||60
2023|F|25
2024|F|30
2023|M|25
2024|M|30

Given that the codes in the data are "F" and "M" respectively, this would be the contents of the English translation file (translations/en/Sex.yml):

```
F: Female
M: Male
```

And this woud be the contents of the Spanish translation file (translations/es/Sex.yml):

```
F: Mujeres
M: Hombres
```

Importantly though, these files should contain a translation of the breakdown itself. So the full Spanish file would be:

```
Sex: Sexo
F: Mujeres
M: Hombres
```

As you might imagine, consistency in the codes and breakdowns used in data is very important, since each individual code needs to be translated.

## Part 3: Indicator metadata and configuration

The translation of metadata may be the most time-consuming. Because metadata for each indicator are verbose and unique, you can expect the translation of metadata to be a significant undertaking.

The recommended approach for structuring the translations of metadata is fairly straightforward:

1. Place the metadata files for your default ("source") language in a "meta" folder in your data repository, named according to the indicator number.
2. Create a subfolder for each other language.
3. Place copies of the metadata in each of the language subfolders, and translate the content accordingly.

Here is an example of this folder structure, showing the metadata for 1.1.1 and a subfolder for a Spanish translation of 1.1.1. In this case, the format for the metadata is YAML files:

```
meta
    1-1-1.yml
    es
        1-1-1.yml
```

**Important note**: Unlike with the "translations" folder above, the source language is *not* in a subfolder. The source language (English) is in the root "meta" folder. In other words, notice how there is no English (en) subfolder.

The contents of these YAML files are what you might expect -- key/value pairs connecting metadata fields/codes with the content. For example:

```
SDG_GOAL: '<p>Objetivo 1: Poner fin a la pobreza en todas sus formas y en todo el
  mundo</p>'
SDG_TARGET: >-
  <p>Meta 1.1: De aquí a 2030, erradicar para todas las personas y en todo el mundo
  la pobreza extrema (actualmente se considera que sufren pobreza extrema las personas
  que viven con menos de 1,25 dólares de los Estados Unidos al día)</p>
SDG_INDICATOR: >-
  <p> Indicador 1.1.1: Proporción de la población que vive por debajo del umbral de
  pobreza internacional por sexo, edad, situación laboral y ubicación geográfica (urbana/rural)</p>
```

Some tips related specifically to the YAML format: Notice the use of the `>-` syntax, which is useful for large amounts of metadata, especially when it contains special characters. Notice also that the metadata content can contain HTML.

This approach also works with other formats of metadata - apart from YAML. For example, if you are using Word documents for metadata, you can use the same approach.

Finally, recognize that everything mentioned above can also be applied to your "indicator configuration" -- the files inside the `indicator-config` folder in your data repository. Much of the contents of this "indicator configuration" may be technical in nature and not meant to be human readable, but there are some fields (such as "graph_title" and "indicator_name") that could indeed benefit from translation. In this case, the structure and recommended approach is the same.

## Part 4: Icons for the 17 goals

Although it is not a best practice to include text inside of images, the 17 goal icons have historically contained shortened versions of the goal titles.

We maintain translated goal icons for some languages in the SDG Translations library (mentioned above). [Here are the languages that we currently have goal icons for](https://github.com/open-sdg/sdg-translations/tree/HEAD/www/assets/img/goals).

The ideal implementation of the icons is SVG format with a transparent background. This allows for the most flexibility in displaying the icons clearly to all users. The next best format, however, is PNG, followed by JPG.

SVG is the ideal format because of the "high-contrast" feature of Open SDG. Open SDG users can opt for a high-contrast mode that changes everything to black, white, and yellow. If you use PNG or JPG goal icons, then you will need to also generate a set of black-and-white versions for this high-contrast mode. But with SVG you only need to make one version.


If your language does not yet have goal icons in SDG Translations, you will need to generate them yourself. Once you have the icons generated, you have two choices:

1. Contribute your creations to the SDG Translations repository (contact the Open SDG team to get help with this)
2. Upload the icons to the `assets/img/goals` folder of your site repository.

Depending on where you place your goal icons, you will need to set the [`goal_image_base`](configuration.md#goal_image_base) and/or [`goal_image_extension`](configuration.md#goal_image_extension) site configuration settings appropriately.

## Part 5: Custom pages

Custom pages are the files contained in the `_pages` folder of your site repository. The important consideration for the purposes of translation is to ensure that every page has a version of every language.

For example, if your site has a default language of English, and is to be translated into Spanish, you will need two versions of every page: English and Spanish. So, if you have a custom "About" page and a custom "Frequently Asked Questions" page, then you will need a total of 4 files in the `_pages` folder:

1. English version of "About"
2. Spanish version of "About"
3. English version of "Frequently Asked Questions"
4. Spanish version of "Frequently Asked Questions"

There are two important pieces of configuration necessary in each of these files:

1. `language`: This is simply the language code of the page
2. `permalink`: This is the URL path for the page, and **should include the language code**.

Here are short examples for all 6 of the hypothetical pages mentioned above:

* _pages/about-en.md

      ---
      language: en
      permalink: /about/
      title: About
      layout: page
      ---

      My content for the page.

* _pages/about-es.md

      ---
      language: es
      permalink: /es/about/
      title: Acerca de
      layout: page
      ---

      Mi contenido para la pagina.

* _pages/faq-en.md

      ---
      language: en
      permalink: /faq/
      title: Frequently Asked Questions
      layout: page
      ---

      My content for the page.

* _pages/faq-es.md

      ---
      language: es
      permalink: /es/faq/
      title: Preguntas frecuentes
      layout: page
      ---

      Mi contenido para la pagina.

Note these important considerations:

1. When the language is the default language (English in the example above) you do not need to include the language code in the "permalink".
2. The "permalinks" should be identical apart from the language codes. In other words, you should not "translate" the permalinks.
3. Feel free to organize these files into subfolders if that makes it easier to maintain.

## Part 6: Site configurations

Some site configurations include blurbs, labels, menus, etc, which need to be translated. One example is the [`menu` site configuration](configuration.md#menu). For cases like this, you will need to refer to "translation keys". See the [glossary page in the "translation keys" section](glossary.md#translation-keys) for a definition.

Translation keys are a way to refer to any of the translations that you are using, whether it is from SDG Translations, or from any of the files in your data repository's "translations" folders. Each translation key consists of a file and a key, with a dot in the middle. Eg: "file.key".

For example, to refer to the first item ("Cookie settings") in [this SDG Translations file called "cookies.yml"](https://github.com/open-sdg/sdg-translations/blob/HEAD/translations/en/cookies.yml) you would use this translation key:

`cookies.cookie_settings`

Again, this is the file ("cookies") then a dot, and then the key that you want ("cookie_settings").

Open SDG will recognize that this is a translation key, and will automatically translate it as needed.

A common approach taken for translating site configurations is to create files called "custom.yml" in your data repository's translation folders. Then, add keys to these files as needed, and then refer to those translation keys.

For example, you might have these files in your data repository:

* translations/en/custom.yml

      foo: My content

* translations/es/custom.yml

      foo: Mi contenido

Then you could use the translation key `custom.foo` in any site configurations, as needed.

## Part 7: Maps

Maps in Open SDG are implemented using a GeoJSON file, in which each region on the map contains a human-readable name (see the "name_property in [the map documentation](maps.md)). Note that, in order to have this name translated, you will need to use translation keys in your GeoJSON file.

For example, if the name for a "region_1" is "New York", you could have the following in your data repository:

* translations/en/custom.yml

      region_1: New York

* translations/es/custom.yml

      region_1: Nueva York

Then, in your GeoJSON file, you would use the translation key `custom.region_1` as the name for that region.

## Languages configurations

You should have a list of your language codes in the `languages` setting for both your [data configuration](data-configuration.md#languages) and your [site configuration](configuration.md#languages). The first item should always be the default language.

Guidance on this can be found [here](https://open-sdg.readthedocs.io/en/latest/tutorials/add-language/)

> The following topics are more advanced and useful only if you are doing significant customizations.

## Using translated text in Jekyll templates

When writing Jekyll templates for this platform, there should never be any direct text written. For example, you should never see anything like this:

`<h1>Sustainable Development Goals</h1>`

Instead, you should see something like this:

`<h1>{{ page.t.general.sdg }}</h1>`

The `page.t` variable contains a nested structure of translation values, corresponding to the folder structure of the repositories mentioned above. For example, in the example above, the "general" refers to [this general.yml translation file](https://github.com/open-sdg/sdg-translations/blob/HEAD/translations/en/general.yml), and the "sdg" refers to [that particular line within the translation file](https://github.com/open-sdg/sdg-translations/blob/HEAD/translations/en/general.yml#L9).

Jekyll will display translated text according to the "language" specified in the "front matter" of the current document.

## Translating variables in Jekyll templates

Sometimes you may need to translate something that exists as a Liquid variable in a Jekyll template. This can be accomplished using the "t" filter, that is provided by the [jekyll-open-sdg-plugins](https://github.com/open-sdg/jekyll-open-sdg-plugins) Ruby gem. A contrived example of how this works is as follows:

```
{% assign foo = "general.sdg" %}
<h1>{{ foo | t }}</h1>
```

Note that it is always safe to run variables through this `t` filter, even if you aren't sure whether it actually contains a translation key. If the variable doesn't actually contain a translation key, then it will be unchanged.

## Translation in Javascript

There is a global object `translations` available to your Javascript. It can be used similarly to the `t` variable in Liquid templates. For example:

`var translatedText = translations.general.sdg;`

It also includes a function `t()` which can be used similarly to the `t` Liquid filter. For example:

```
var translationKey = 'general.sdg';
var translatedText = translations.t(translationKey);
```

NOTE: In contrast to Jekyll, any translation keys you will need in Javascript need to be "imported" before they can be used. The mechanism for importing translating keys is the Jekyll include `multilingual-js.html`. You can use this to import an entire translation group. For example, this is how you can import all the translation keys in the "general" group:

```
{% include multilingual-js.html key="general" %}
```

## Using site configurations inside translations or content

Sometimes you might want to utilize a site configuration setting inside a translation, such as `country.name` or `country.adjective`. You can do this by adding a `%` in front. For example, "Statistical data on the SDGs for %country.name". You can also use this approach in page content. For example, "For more information please contact %email_contacts.suggestions".

## Available translation-related variables

In addition to the `page.t` variable for displaying translations, there are 3 other Liquid variables of general use:

* `page.language`: The 2-letter code for the current language
* `page.language_public`: Version of the code for use in public URLs
* `page.baseurl`: A version of site.baseurl including any language code

These variables are available in all Jekyll documents.
