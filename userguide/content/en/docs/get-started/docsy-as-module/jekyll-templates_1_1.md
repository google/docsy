<h1>Working with Jekyll templates</h1>

## Jekyll include files

There are assorted [Jekyll include files](https://jekyllrb.com/docs/includes/) available for use inside of Jekyll content. Note that these "includes" cannot be used in site configuration settings or indicator configuration settings. They are primarily intended for use in page/post content, layouts, overrides, or other include files.

### Back-to-top links

For displaying a link that takes the user back to the top of the page. Example:

```
{% include back-to-top.html %}
```

### Custom content for the head

To add custom content in the `<head>` element (such as web fonts) you can override the `_includes/head-custom.html` file. In your version you can add anything you'd like, as needed.

## Variables available on all pages

Jekyll provides a `page` variable for use in any of files in `_layouts` and `_includes` (referred to here as "templates"). This `page` variable contains helpful contextual information about the current page being rendered. Open SDG adds additional information for your use.

The following variables can be used on any page:

* `page.goals`

    An array of all the SDG Goals available. Each item in the array contains information about the goal. See "Goal objects" below.

    Usage example - printing the names of each goal:

    ```
    {% for goal in page.goals %}
      {{ goal.name }}
    {% endfor %}
    ```

* `page.targets`

    An array of all the SDG Targets available. Each item in the array contains information about the target. See "Target objects" below.

    Usage example - printing the names of each target:

    ```
    {% for target in page.targets %}
    {{ target.name }}
    {% endfor %}
    ```

* `page.indicators`

    An array of all the SDG Indicators available. Each item in the array contains information about the indicator. See "Indicator objects" below.

    Usage example - printing the names of each indicator:

    ```
    {% for indicator in page.indicators %}
    {{ indicator.name }}
    {% endfor %}
    ```

* `page.baseurl`

    This should be used instead of `site.baseurl`, because it includes necessary subfolders according to the language of the current page.

    Usage example - printing a link to another page:

    ```
    <a href="{{ page.baseurl }}/my-page/">My page</a>
    ```

* `page.language`

    The language code for the current page.

    Usage example - printing the current language code:

    ```
    The current language code is {{ page.language }}.
    ```

* `page.language_public`

    The "public" language code for the current page. This may be different from `page.language` in special cases where you prefer a language code that is different from the standard language code for your language. Most sites will not use this.

    Usage example - printing the current public language code:

    ```
    The current language code is {{ page.language }}, but the "public" language code is {{ page.language_public }}.
    ```

* `page.t`

    The translations for the current language. More detail on this is available on the [configuration page](configuration.md).

    Usage example - printing the translation of the word "Goal" (which is available with the key "goal" in the "general" group:

    ```
    {{ page.t.general.goal }}
    ```

* `page.url_by_language`

    This contains URLs to the current page, but in each language. This is useful if you'd like to link to the same page but in another language.

    Usage example - printing a link to the Spanish version of the current page:

    ```
    <a href="{{ page.url_by_language.es }}">Spanish version</a>
    ```

* `page.logo`

    This contains properties for two attributes of the main logo image: "src" and "alt". This is useful to ensure that the logo for the current language is being displayed.

    Usage example - printing the logo image with alt text:

    ```
    <img src="{{ page.logo.src }}" alt="{{ page.logo.alt }}" />
    ```

## Variables available on Goal pages only

The following variables can be used on goal pages only:

* `page.goal`

    Information about the current goal. See "Goal objects" below.

    Usage example - printing the name of the current goal:

    ```
    {{ page.goal.name }}
    ```

## Variables available on Indicator pages only

The following variables can be used on indicator pages only:

* `page.goal`

    Information about the current goal. See "Goal objects" below.

    Usage example - printing the name of the current goal:

    ```
    {{ page.goal.name }}
    ```

* `page.target`

    Information about the current target. See "Target objects" below.

    Usage example - printing the name of the current target:

    ```
    {{ page.target.name }}
    ```

* `page.indicator`

    Information about the current indicator. See "Indicator objects" below.

    Usage example - printing the name of the current indicator:

    ```
    {{ page.indicator.name }}
    ```

## Goal objects

The goal objects mentioned above in `page.goal` and `page.goals` each contain the following information:

* `icon` - the URL of the goal's icon, for the current language. Examples:
    * https://example.com/goal-icons/english/goal-1.png

* `name` - the translated name of the goal. Examples:
    * End poverty in all its forms everywhere

* `number` - the number of the goal. Examples:
    * 1
    * 2

* `short` - the translated short name of the goal. Examples:
    * No poverty

* `slug` - the slug for the goal, for use in URLs. For goals this is identical to "number".

* `sort` - a string suitable for use in sorting the goal. Examples:
    * 01
    * 02

* `url` - the URL of the goal's page in the platform, for the current language. Examples:
    * /my-base-url/en/1/

## Target objects

The target objects mentioned above in `page.target` and `page.targets` each contain the following information:

* `goal_number` - the number of the goal that the target is part of. Examples:
    * 1
    * 2

* `name` - the translated name of the target. Examples:
    * By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day

* `number` - the number of the target. Examples:
    * 1.1
    * 1.2

* `slug` - the slug for the target, for use in URLs. Examples:
    * 1-1
    * 1-2

* `sort` - a string suitable for use in sorting the goal. Examples:
    * 0101
    * 0102

## Indicator objects

The indicator objects mentioned above in `page.indicator` and `page.indicators` each contain the following information:

* `goal_number` - the number of the goal that the indicator is part of. Examples:
    * 1
    * 2

* `name` - the translated name of the indicator. Examples:
    * Proportion of population living below the national poverty line, by sex and age

* `number` - the number of the indicator. Examples:
    * 1.1.1
    * 1.2.1

* `slug` - the slug for the indicator, for use in URLs. Examples:
    * 1-1-1
    * 1-2-1

* `sort` - a string suitable for use in sorting the indicator. Examples:
    * 010101
    * 010201

* `target_number` - the number of the target that the indicator is part of. Examples:
    * 1.1
    * 1.2

* `url` - the URL of the indicators's page in the platform, for the current language. Examples:
    * /my-base-url/en/1-1-1/

* `[all metadata fields for the indicator]`

    The indicator object contains ALL metadata fields associated with the indicator, as set in the data repository.
