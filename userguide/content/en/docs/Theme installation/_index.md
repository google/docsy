
---
title: "Get started"
linkTitle: "Get started"
weight: 2
date: 2018-07-30
description: >
  Learn how to get started with Docsy, including the available options for installing and using the Docsy theme.
---

As you saw in our introduction, Docsy is a [Hugo](gohugo.io) theme, which means that if you want to use Docsy, you need to set up your website source so that the Hugo static site generator can find and use the Docsy theme files when building your site. The simplest way to do this is to copy and edit our example site, though we also provide instructions for adding the Docsy theme manually to new or existing sites.

If you want to build and test your site locally you also need to be able to run Hugo itself, either by installing it and its dependencies, or by using our provided Docker container.

This page describes Docsy's installation options and helps you choose the appropriate setup guide to get started.

## Installation options

Hugo offers multiple options for using themes, all of which are supported by Docsy.

* **Adding the theme as a Hugo module**: [Hugo modules](https://gohugo.io/hugo-modules/) are the simplest and latest way to use Hugo themes. Your site uses the modules mechanism to refer to the theme files in the main Docsy repo at your chosen revision, and it's easy to keep the theme up to date in your site. Our example site uses Docsy as a Hugo module.
* **Adding the theme as a Git submodule**: Adding the theme as a Git submodule also lets you refer to the theme files in their own repo, though is more complicated to maintain than the Hugo modules approach. This is the approach used in older versions of the Docsy example site and is still supported.
* **Cloning the theme files**: If you don't want Hugo to have to get the theme files from an external repo (for example, if you want to customize and maintain your own copy of the theme directly, or your deployment choice requires you to include a copy of the theme in your repository), you can clone the files directly into your site source.

## Migration and backward compatibility

If you have an existing site that uses Docsy as a Git submodule, and you would like to update it to use Hugo modules, follow our [migration guide](). If you're not ready to migrate yet, don't worry! Your site will continue to work as usual.

## Setup guides

Follow the setup guide for your chosen approach. If you're new to Docsy and not sure which guide to follow, we recommend following the Use Docsy as a Hugo module guide as a simple and easily maintained option.
