# Matomo Icons

[![Tests](https://github.com/matomo-org/matomo-icons/actions/workflows/tests.yml/badge.svg)](https://github.com/matomo-org/matomo-icons/actions/workflows/tests.yml)

This repository provides the source files for the icons in [Matomo](https://github.com/matomo-org/matomo) and the scripts used to convert them into a unified format.

## Contributing

An icon is missing, or you have a better one? Create a [new issue](https://github.com/matomo-org/matomo-icons/issues/new) or, even better, open a pull request.

🖌️ Hint: We regularly generate a [list of improvable icons](https://app.travis-ci.com/github/matomo-org/matomo-icons). Some may have the wrong source file format, some may be too small. Feel free to pick one or two and provide a PR for it.

All source files are stored in categorized subfolders in `/src`.
Please check whether your icon proposal complies with the following conventions. Then run the `convert.sh` script once to update the icon build in the `/dist` folder.

### File Formats

Ideally all source files should be SVGs or high resolution (> 100px) PNGs.

As this is not always possible, JPGs, GIFs and (even multi resolution) ICOs are supported as well.

### Naming

The grouping and naming of all icons results from the data sets that Matomo uses in its own tracking analysis.

| Icon category   | Data source for naming                                                                             | Example                      |
|-----------------|----------------------------------------------------------------------------------------------------|------------------------------|
| `brand`         | *Device detection* in Matomo Administration page                                                   | `Apple.png`                  |
| `browsers`      | https://github.com/matomo-org/device-detector/blob/master/Parser/Client/Browser.php                | `FF.png` for Firefox Browser |
| `devices`       | https://github.com/matomo-org/matomo/blob/5.x-dev/plugins/DevicesDetection/functions.php#L183-L198 | `smartphone.png`             |
| `flags`         | https://github.com/lipis/flag-icons/tree/main/flags/4x3                                            | `at.png` for Austria         |
| `os`            | https://github.com/matomo-org/device-detector/blob/master/Parser/OperatingSystem.php#L38           | `WIN.png` for Windows        |
| `plugins`       | https://github.com/matomo-org/matomo/tree/5.x-dev/plugins/DevicePlugins/Columns                    | `flash.png`                  |
| `searchEngines` | https://github.com/matomo-org/searchengine-and-social-list/blob/master/SearchEngines.yml           | `google.com.png`             |
| `SEO`           | https://github.com/matomo-org/matomo/tree/5.x-dev/plugins/SEO                                      | `bing.com.png`               |
| `socials`       | https://github.com/matomo-org/searchengine-and-social-list/blob/master/Socials.yml                 | `facebook.com.png`           |

### Attribution

Every source file, except those in `devices`, `flags`, `searchEngines` and `socials`, needs to have a second file according to the scheme `<icon name>.<file extension>.source` that mentions where the image is from.
