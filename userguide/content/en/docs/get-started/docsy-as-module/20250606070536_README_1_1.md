# TGM Plugin Activation
[![GitHub license](https://img.shields.io/badge/license-GPLv2-blue.svg)](https://raw.githubusercontent.com/TGMPA/TGM-Plugin-Activation/develop/LICENSE.md)
[![Build Status](https://travis-ci.org/TGMPA/TGM-Plugin-Activation.svg?branch=develop)](https://travis-ci.org/TGMPA/TGM-Plugin-Activation)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/TGMPA/TGM-Plugin-Activation/badges/quality-score.png?b=develop)](https://scrutinizer-ci.com/g/TGMPA/TGM-Plugin-Activation/?branch=develop)


**Lead Developers:**
[Thomas Griffin](https://github.com/thomasgriffin) ([@jthomasgriffin](https://twitter.com/jthomasgriffin)), [Gary Jones](https://github.com/GaryJones) ([@GaryJ](https://twitter.com/GaryJ)), [Juliette Reinders Folmer](https://github.com/jrfnl) ([@jrf_nl](https://twitter.com/jrf_nl))  
**Version:** 2.6.1
**Requires at least:** 3.7.0 
**Tested up to:** 4.5.2 

## Description

TGM Plugin Activation is a PHP library that allows you to easily require or recommend plugins for your WordPress themes (and plugins). It allows your users to install, update and even automatically activate plugins in singular or bulk fashion using native WordPress classes, functions and interfaces. You can reference bundled plugins, plugins from the WordPress Plugin Repository or even plugins hosted elsewhere on the internet.

## Installation

1. Generate a customized version of the latest version of TGMPA based on your intended use-case using the [Custom TGMPA Generator](http://tgmpluginactivation.com/download/).
2. Extract the class file and place it somewhere in your theme hierarchy.
3. Add a `require_once` call within `functions.php` (or other file) referencing the class file.
4. Create a function, hooked to `tgmpa_register`, that registers the plugin and configurations.

For steps 3 and 4, it is recommended you view, copy and paste the contents of `example.php`
and amend to suit. The `example.php` file is a model for how you should include the class in your theme.

Detailed documentation on [how to configure TGMPA](http://tgmpluginactivation.com/configuration/) is available on the website.

__*We strongly recommend the use of the [Custom TGMPA Generator](http://tgmpluginactivation.com/download/) if you intend to use TGMPA in a theme which is to be published via WordPress.org or Themeforest.*__

The generated customized version of TGMPA will comply with the Theme Review guidelines and Theme Check.

### Composer

TGM Plugin Activation is also available as a [package](https://packagist.org/packages/tgmpa/tgm-plugin-activation) installable via Composer:

~~~sh
composer create-project tgmpa/tgm-plugin-activation --no-dev
~~~

## Frequently Asked Questions

See [the FAQ page](http://tgmpluginactivation.com/faq/).

## Feedback

See https://github.com/TGMPA/TGM-Plugin-Activation/issues for current issues and the [guidelines for reporting bugs and enhancements](https://github.com/TGMPA/TGM-Plugin-Activation/wiki/Guidelines-for-reporting-bugs).

__Note:__ TGM Plugin Activation library authors are not responsible for the *end-user support* for any plugin or theme which uses the library.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Contributing to TGM Plugin Activation

If you have a patch, or stumbled upon an issue with TGM Plugin Activation core, you can contribute this back to the code. Please read our [contributor guidelines](CONTRIBUTING.md) for more information how you can do this.

