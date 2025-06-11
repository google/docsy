<h1>Troubleshooting</h1>

Here are some steps you can take to troubleshoot problems with your Open SDG implementation.

## Confirm the data build was successful

A good first step is to make sure that your data repository's "build" was successful. To confirm this, follow these steps:

1. Go to Github.com and log in.
1. Go to your data repository.
1. Under the repository name, click "Settings".
1. Scroll down to the "GitHub Pages" section.
1. If you see "Your site is published at" next to a link, click on that link.
1. If the build was successful, you should see something like [this data repository homepage](http://open-sdg.org/open-sdg-data-starter/).

If you did not see a "Your site is published at" link, or your data repository homepage does not load, then try the following steps to investigate more:

1. Go to your data repository in Github.com
1. Click on the `Actions` tab (at the top, next to `Pull requests`).
1. If the top-most item has a green check mark next to it, then the build was successful. On the other hand, if the top-most item has a red X next to it, then the build failed. The following steps assume that the build failed.
1. Click on that failed item in the list (the one with the red X next to it).
1. On the left, beneath "Deploy to staging" click on "build".
1. You should see a list of steps with mostly green check marks, but one of the steps will have a red X. Click on the step with the red X.
1. Scroll to the bottom of that step to see where it failed, and use any error messages to get clues as to what exactly happened. Also, see below for solutions for common error messages.

## Confirm that the site build was successful

After you have confirmed that the data repository's "build" was successful, you can do the same for the site repository. To confirm this, follow these steps (which are identical to the steps for confirming the data build above):

1. Go to Github.com and log in.
1. Go to your site repository.
1. Under the repository name, click "Settings".
1. Scroll down to the "GitHub Pages" section.
1. If you see "Your site is published at" next to a link, click on that link.
1. If the build was successful, you should see something like [this site repository homepage](http://open-sdg.org/open-sdg-site-starter/).

If you did not see a "Your site is published at" link, or your site repository homepage does not load, then try the following steps to investigate more (which are identical to the steps for investigating the failed data build above):

1. Go to your site repository in Github.com
1. Click on the `Actions` tab (at the top, next to `Pull requests`).
1. If the top-most item has a green check mark next to it, then the build was successful. On the other hand, if the top-most item has a red X next to it, then the build failed. The following steps assume that the build failed.
1. Click on that failed item in the list (the one with the red X next to it).
1. On the left, beneath "Deploy to staging" click on "build".
1. You should see a list of steps with mostly green check marks, but one of the steps will have a red X. Click on the step with the red X.
1. Scroll to the bottom of that step to see where it failed, and use any error messages to get clues as to what exactly happened. Also, see below for solutions for common error messages.

## Using the latest versions of dependencies

Before continuing, it is often a good idea to upgrade to the latest versions of the various dependencies. For details, see the [upgrade process](upgrades/upgrade-process.md).

## Solutions for common error messages - data repository

The following are solutions for some common error messages you might see in your data repository.

### `yaml.parser.ParserError: while parsing a block mapping`

If you edited the `_prose.yml` or `config_data.yml` files, and then receive the message above, you may have introduced an indentation or spacing problem. [YAML](https://yaml.org/) can be finnicky when it comes to white-space and indentation. Double-check your latest change and confirm that the number of spaces before each line you changed matches the number spaces before other lines.

### `git.exc.GitCommandError: Cmd('git') failed due to: exit code(1)`

This error usually indicates a problem in the `translations` section of `config_data.yml`. More specifically, make sure that the `tag` parameter of any translation items refers to an existing tag or branch. For example, using a `tag` of `1.0` will not work, because it needs to be the full tag, such as `1.0.0` or `1.0.1`.

### `FileNotFoundError: [Errno 2] No such file or directory`

This error can happen in a variety of scenarios.

* One scenario is when you are using the `map_layers` configuration setting, and the `geojson_file` parameter is not pointing to the correct location. Double-check that the location in this parameter exists.

## Solutions for common error messages - site repository

The following are solutions for some common error messages you might see in your site repository.

### `404 Not Found Unable to read data from...`

This error can happen in a variety of scenarios.

* One scenario is when the URL in the `remote_data_prefix` configuration setting (in `_config.yml`) is incorrect. Ensure that if you visit this URL in a browser, you see the [expected data repository frontpage](http://open-sdg.org/open-sdg-data-starter/).
* Another scenario is when you have added a language in the `languages` configuration setting in `_config.yml`, but you have not added this language to the data repository's `config_data.yml` file. Before you can add a language in the site repository, it must first be added to the data repository. For details see the [translation documentation](translation.md).

### `jekyll 3.8.4 | Error:  404 - Not Found`

This may appear similar to the other "404" error mentioned above, but this happens in a more specific case where the `remote_theme` configuration setting in `_config.yml` has a problem. A common issue may be that you are specifying a branch or tag using the `@` character, but the branch or tag does not exist. Double-check that the branch/tag you have after the `@` does in fact exist. Here is a list of [Open SDG tags](https://github.com/open-sdg/open-sdg/tags).

### `internally linking to ... which does not exist`

This type of error can occur whenever there is an internal link on your implementation that is pointing to a non-existing page. Double-check any recently-added links to make sure they are correct. Remember that internal links should always be prefixed by `{{ page.baseurl }}`. For example:

```
<a href="{{ page.baseurl }}/my-page/">My page</a>
```

Also, if you recently changed the `menu` or `footer_menu` configuration options in `_config.yml`, double-check these as well, to ensure that the `path` parameters are correct.
