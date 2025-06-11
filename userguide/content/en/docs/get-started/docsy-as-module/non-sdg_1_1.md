<h1>Open SDG for other frameworks</h1>

Although Open SDG is tailored for use with the Sustainable Development Goals (SDGs), you can use it as a general-purpose reporting platform instead. This is possible because:

1. Open SDG has a variety of configuration options to control behavior in the platform
2. When these configuration options are not sufficient, Open SDG's templates can also be overridden with custom development

However, it is possible that a non-SDG framework may be so different that it would be infeasible to use Open SDG. In other words, it would take so much work to tailor Open SDG to your framework that it would make more sense to use a different platform.

This documentation is designed to help you decide whether Open SDG might be suitable for your non-SDG framework, or not.

If you are considering using Open SDG for a non-SDG framework, the first question to ask is how your framework needs to display data. Hopefully your framework can display data on "indicators", where data will be described using charts, tables, and/or maps. If this is not the case, Open SDG may not be the best fit for you framework. Otherwise, read on for more considerations.

## Indicator hierarchy

The next question is - what is the hierarchy of your indicators? For example, with the SDG framework, the hierarchy is:

Goal -> Target -> Indicator

The degree to which your framework resembles this hierarchy will determine whether Open SDG is suitable for this purpose. In general, changing labels is easy, but adding/removing hierarchy is difficult.

For example, Open SDG could easily support your framework if your hierarchy is:

Goal -> Policy Objective -> Indicator

By contrast, it would be difficult to use Open SDG to support your framework if your hierarchy is:

Goal -> Indicator

Some important notes about Open SDG:

1. Open SDG does not have separate pages for "Targets". They are simply used to organize the indicator links on the goal pages.
2. Technically the SDG framework has a fourth level of hierarchy: Series. Open SDG displays the "Series" as a toggle on the indicator pages.

### Standalone indicators

Open SDG has a feature called "standalone" indicators, with which data can be displayed on indicator pages (with charts/tables/maps) but which do not belong to any group/target hierarchy. The main difference between a normal indicator page and a standalone indicator page is how the end-user gets to the page:

1. With a normal indicator page, the end-user clicks on a goal, and then clicks on the indicator's link, and then arrives at the indicator page.
2. With a standalone indicator page, it is completely up to you to decide on and implement how the end-user gets to the page. For example, you might put a link to the indicator page in the main menu; or perhaps you could link to it from the homepage; etc...

If your non-SDG framework has a small number of indicators which have a very different hierarchy from the goal/target/indicator described above - it still might be possible to use Open SDG with all "standalone" indicators", and manually create the navigation workflow whereby the end-user arrives at these indicator pages.

## Goal, target, and indicator labels

The members of the aforementioned hierarchy each have labels. In the SDG framework, these labels are controlled at a global level.

For example:

* The label for Goal 1 is "End poverty in all its forms everywhere".
* The label for Target 1.1 is "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day".
* The label for Indicator 1.1.1 is "Proportion of the population living below the international poverty line by sex, age, employment status and geographic location (urban/rural)".
* etc...

The mechanism in Open SDG for controlling these labels is in the translations. Open SDG uses a central repository of translations for these items. For example here are the English translations:

* Goals: https://github.com/open-sdg/sdg-translations/blob/HEAD/translations/en/global_goals.yml
* Targets: https://github.com/open-sdg/sdg-translations/blob/HEAD/translations/en/global_targets.yml
* Indicators: https://github.com/open-sdg/sdg-translations/blob/HEAD/translations/en/global_indicators.yml

As you can see in those translations, the "translation keys" are based on the numeric identifier of each goal/target/indicator. For example, the key for indicator 1.1.1 is "1-1-1-title" in the "global_indicators" file.

This means that, to support your non-SDG framework, you will need to have translation files for "global_goals", "global_targets", and "global_indicators" with all of the necessary labels. As long as your framework uses numerical identifiers (eg, 1.1.1, 1.1.2, etc.) then this should work fine.

## Goal images

A core visual component of Open SDG is a grid of icons that correspond to each of the 17 Sustainable Development Goals. This is obviously unique to the SDGs and would need to be overridden for a non-SDG framework. This would be done through the `goal_image_base` and `goal_image_extension` site configurations.

Because these images contain text, they must be "translated" like anything else, and so we maintain translated sets of these images in the central repository of translations mentioned above (https://github.com/open-sdg/sdg-translations). Out of the box, Open SDG sites start with a `goal_image_base` of: `https://open-sdg.org/sdg-translations/assets/img/goals` and a `goal_image_extension` of `png`. This configuration causes Open SDG to use the PNG images in [this folder of goal image translations](https://github.com/open-sdg/sdg-translations/tree/HEAD/www/assets/img/goals).

By changing the `goal_image_base` and/or `goal_image_extension` site configuration settings, you can control where your platform will look for goal images. When Open SDG renders a goal image, it expects the path to consist of the following pieces:

1. The `goal_image_base`
2. A language code
3. The id of the goal
4. The `goal_image_extension`

For example, with the out-of-the-box configuration described above, it would expect the English goal image for Goal 1 to consist of the following:

1. https://open-sdg.org/sdg-translations/assets/img/goals
2. en
3. 1
4. png

All together, that would be:

`https://open-sdg.org/sdg-translations/assets/img/goals/en/1.png`

Using this information, you can tailor the goal images to your non-SDG framework, by hosting them somewhere with the expected folder structure and naming convention.

For example, imagine that your non-SDG framework uses 3 goals with the ids "A", "B", and "C", and uses the languages English (en) and Spanish (es). Now imagine that you create your goal images as SVG files and host them at `https://example.com/my/image/folder`. You would need to set your site configuration like so:

```
goal_image_base: "https://example.com/my/image/folder"
goal_image_extension: svg
```

Then you would need to upload all of the following images, at these exact paths:

* https://example.com/my/image/folder/en/A.svg
* https://example.com/my/image/folder/en/B.svg
* https://example.com/my/image/folder/en/C.svg
* https://example.com/my/image/folder/es/A.svg
* https://example.com/my/image/folder/es/B.svg
* https://example.com/my/image/folder/es/C.svg

NOTE: Open SDG supports other image formats, but SVG is the recommended format for this purpose.

## Time series

The SDGs are designed to show progress on the indicators year by year. In other words, the data are displayed as a time series. For example, the x-axis on the charts is "Year".

It is not required that the time-segment be a year. It could be month by month, quarter by quarter, or any combination. However, it does need to be a time series. If your framework does not want to display data as a time series, then Open SDG may not be suitable.

## Labeling the hierarchy

Above we mentioned that it is possible to "change the labels" of your indicator hierarchy. For example, instead of:

Goal -> Target -> Indicator

...you could do:

Goal -> Policy Objective -> Indicator

The way to do this is by "overriding" the translations. The words, "Goal", "Target", "Indicator", etc, are all managed in translations, in this "general.yml" file in the SDG Translations project: https://github.com/open-sdg/sdg-translations/blob/HEAD/translations/en/general.yml

You can override these translations by adding "general.yml" translation files in your data repository's "translations" folders.

For example, to change "Target" to "Policy Objective" you could add a file to your data repository located at:

/translations/en/general.yml

And you could add this to that file:

```
target: Policy Objective
targets: Policy Objectives
```

## Examples of non-SDG frameworks using Open SDG

Here are some examples of non-SDG frameworks that have been implemented with Open SDG.

* https://integrationsmonitoring.niedersachsen.de/
* https://oifdata.defra.gov.uk/
