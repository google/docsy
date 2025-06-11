<h1>Reporting status</h1>

Out of the box, Open SDG provides a page showing the "reporting status" of all the indicators, grouped by which goal they are in. This can be helpful in measuring the completeness of the platform, by clearly showing how many indicators have data and how many do not.

## Reporting status options

By default, the reporting status options dispayed are **Complete**, **In progress** and **Exploring data sources**. However, these options can be changed to meet your needs. For example, options can be removed or another option, such as **Not applicable**, can be used.

The options available can be controlled by adjusting the `status_types` property on [reporting_status site configuration](configuration.md#reporting_status). For example, here is the `reporting_status` site configuration that is in the site starter project, at the time of this writing - note the `status_types` section below:

```
reporting_status:
  title: status.reporting_status
  description: status.description
  disaggregation_tabs: false
  status_types:
    - value: notstarted
      label: status.exploring_data_sources
      hide_on_goal_pages: false
    - value: complete
      label: status.reported_online
      hide_on_goal_pages: false
    - value: notapplicable
      label: status.not_applicable
      hide_on_goal_pages: false
```

## Color-coding

The horizontal bars on the reporting status page have color-coded segments. The default options mentioned above are already color-coded for black, grey, and white, respectively. That color-coding is controlled using Sass variables in [this Sass variables file](https://github.com/open-sdg/open-sdg/blob/master/_sass/variables/_colors.scss). To override any of these variables, you can override and edit [this placeholder file for Sass variable overrides](https://github.com/open-sdg/open-sdg/blob/master/_sass/variables.scss).

To color-code your custom options, add your own CSS code (such as in a `custom.scss` file) using a class name that is the same as the option value. For example, if you have added a custom status type like so:

```
reporting_status:
  status_types:
    - value: my_custom_status_type
      label: My custom status type
      hide_on_goal_pages: false
```

Then you could color-code the "my_custom_status_type" option by adding this in your CSS:

```
.my_custom_status_type { background-color: pink; }
```

## Alternative groupings

Apart from grouping by _goal_, you might like to show the reporting status in different ways (such as "status by _tier_", for example). To do this, your data repository needs to be configured to generate the necessary data. See the [`config_data.yml` file in the data starter](https://github.com/open-sdg/open-sdg-data-starter/blob/develop/config_data.yml#L79), for an example.

Note that the value of that setting in the data repository should be a list of fields which are present in your indicator metadata files.

For example, suppose you would like to show reporting status grouped by UN custodian agency. To do this, you must have a field in your indicator metadata which specifies the UN custodian agency. (In fact, the data starter ships with such a field, called `un_custodian_agency`.) To accomplish this, you could have the following configuration for your data repository's `reporting_status_extra_fields`:

```
reporting_status_extra_fields:
  - un_custodian_agency
```

There is no configuration necessary in the site repository, for this feature. Open SDG can automatically detect whether you have `reporting_status_extra_fields` configured in the data repository.
