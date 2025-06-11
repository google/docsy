---
layout: page
title: Developers
permalink: developers/
---

## Repository

Development, discussion, and other forms of collaboration happen on the [Github repository]({{ site.repo }}).

## JSON output

The translations are compiled and available [here]({{ site.baseurl }}/translations.json).

## Previous releases

Each past release is available separately, according to its tag. For example, release 0.1.0 is available [here]({{ site.baseurl }}/translations-0.1.0.json).

## Technical Limitations

* The language folders under `translations` (eg, `translations/en`, `translations/es`, etc.) cannot contain subfolders.
* The items in the .yml translation files can contain only strings - not objects. For example, this will work:
    ```
    # Strings are fine
    colors-red: rojo
    ```

    But this will not work:
    ```
    # Objects won't work.
    colors:
      red: rojo
    ```

## Local development

Requires Python and Ruby.

* `pipenv install`
* `bundle install`
* `make`

To serve the site locally:

* `make serve`

## Forking and builds

The origin repo is built by Github Actions and deployed to Github Pages. The configuration and scripts that accomplish this should work for forks as well, with a few steps.

[TODO: document steps for setting up Github Actions and Github Pages for forks]