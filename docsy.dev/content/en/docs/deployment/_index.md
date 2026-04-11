---
title: Deployment and previews
linkTitle: Deployment
weight: 7
description: Deploying your Docsy site.
---

There are multiple possible options for deploying a Hugo site, including
Netlify, Firebase Hosting, Bitbucket with Aerobatic, and more; you can read
about them all in
[Hosting and Deployment](https://gohugo.io/hosting-and-deployment/). Hugo also
makes it easy to deploy your site locally for quick previews of your content.

## Build environments and indexing

By default, Hugo sites built with `hugo` (rather than served locally with
`hugo server`) have the Hugo build environment `production`. Deployed Docsy
sites with `production` builds can be indexed by search engines, including
[Google Custom Search Engines](/docs/content/search/#google-search). Production
builds also have optimized JavaScript and CSS for live deployment (for example,
minified JS rather than the more legible original source).

If you do not want your deployed site to be indexed by search engines (for
example if you are still developing your live site), or if you want to build a
development version of your site for offline analysis, you can set your Hugo
build environment to something else such as `development` (the default for local
deploys with `hugo server`), `test`, or another environment name of your choice.

The simplest way to set this is by using the `-e` flag when specifying or
running your `hugo` command, as in the following example:

```
hugo -e development
```
