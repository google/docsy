<h1>Requirements</h1>

This document describes the software, services, and expertise that will be needed for the implementation of the Open SDG platform.

## Software

All the software described here is open source and free to use.

### Jekyll

The platform is powered mostly by [Jekyll](https://jekyllrb.com). In fact, this repository is a Jekyll theme. By compiling the platform to a static website, Jekyll allows for the easiest possible deployment.

### Git

Maintenance and development of the platform requires the use of Git. Most maintenance tasks can be performed without using command-line Git (thanks to Github.com and Prose.io - see below) but for development, Git will be an important tool.

### Python

Most implementations of the platform will not require alterations to any of the Python scripts involved in the "build process," but developers should be aware that additional build-time manipulations of data/metadata may require some knowledge of Python. Any extra validation may also require Python code.

## Services

All the services described here can be used without paying fees.

### Github.com

[Github.com](https://github.com) provides 3 key functions:

1. Git repository: As a Git "remote," Github.com will be the central location for all maintenance and development, both for the platform and its content, data, and metadata.
1. Platform hosting: Through the free "Github Pages" offering, Github.com will provide free hosting of the platform.
1. Automation: Through the free "Github Actions" offering, Github.com also provides automation services. This allows the platform to be automatically "built" in response to simple workflows. The key ones are:

    * When code is pushed to the "develop" Git branch, build and deploy to staging.
    * When code is pushed to the "master" Git branch, build and deploy to production.
    * When a Github pull request is created, run tests against the new code.

    Although these docs will focus on Github Actions, other automation services like [CircleCI](https://circleci.com) and [TravisCI](https://travis-ci.org) are equivalent. Or for a more do-it-yourself approach: open-source [Jenkins](https://jenkins.io).

## Expertise

The notes below apply to developers tasked with implementing this platform, adding/changing functionality, and/or updating the look-and-feel.

### Git

For development, basic familiarity with Git (command-line) will be important.

### Jekyll

Since the platform is a Jekyll site, familiarity with the configuration and structure of the Jekyll framework will be important. Additionally, as with any Jekyll site, some familiarity with the [Liquid template language](https://shopify.github.io/liquid/) is necessary.

### Web

Since this is a web platform, customisation of markup, style, and behavior will require familiarity with HTML, CSS, and Javascript. Developers should be aware that the platform uses the [Bootstrap](https://getbootstrap.com/) library.

Additionally — although most implementations will not require alterations to advanced functionality like filtering, charts, and maps — developers should be aware of the Javascript libraries used:

* Filtering: [Lodash](https://lodash.com/)
* Charts: [Chart.js](https://www.chartjs.org/)
* Maps: [Leaflet](https://leafletjs.com/)
* Search: [Lunr](https://lunrjs.com/)
* General: [jQuery](https://jquery.com/)

### Continuous integration

Some experience with continuous integration (CI) — such as with integrating Github sites with GitHub Actions, TravisCI, or CircleCI — will be helpful. Developers will NOT need to implement this integration from scratch, but any customisation of the automation workflows will require some basic familiarity with open-source CI practices. All starter projects use [Github Actions](https://github.com/features/actions).
