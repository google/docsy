---
title: Engineering A/B tests
description: "Learn more about how Digital Experience engineers our A/B tests."
---

## Overview

An A/B test is when we release two versions of a page and compare how well they perform (comparing version A to version B). When running an experiment, we are testing a hypothesis using a control variant and a test variant, similar to how one typically employs the scientific method.

We currently use [LaunchDarkly](https://launchdarkly.com/) to control whether or not a test is showing, at what percentage, and gather metrics about a test's performance. Within LaunchDarkly, you can create events that fire when a user does something. For our case, our most common example would be a click. We also push the experiment ID into the Google Analytics dataLayer so we know what version of the page the user viewed.

```js
window.dataLayer = window.dataLayer || [];

dataLayer.push({
 'event': 'launchDarklyExperiment',
 'launchDarklyExperimentName': 'name of experiment',
 'launchDarklyExperimentId': '0 or 1' //0 = control, 1 = variant
});
```

[This project](https://gitlab.com/gitlab-com/marketing/digital-experience/ab-testing) is for the ideation and refinement of AB Tests to be conducted on GitLab's Marketing site. Anyone can contribute an AB testing issue.

### What is a feature flag

Below are some resources to learn more about feature flags. At a high level, a feature flag is an if-else wrapper around code that can be enabled, disabled, or served at a certain percentage to a certain group. This is controlled via a dashboard toggle, changing the production interface on-the-fly without having to wait for a release to change something.

* [An introduction to feature flagging software](https://github.com/launchdarkly/featureflags/blob/master/1%20-%20Introduction.md)
* [Feature flag use cases](https://github.com/launchdarkly/featureflags/blob/master/2%20-%20Uses.md)

### How we run AB test

Our AB tests include two files, the control and the test variant. Both exist on the page in the HTML DOM at the same time, but are hidden by default on page load. The javascript SDK will return which version of the experiment should be shown. For each test, we use the following process:

1. Test Candidates are validated by modelling out the potential lift on an annualized basis.
1. AB test candidate with the highest annualized lift (lift scoped specifically to the action/improvement we’re measuring) is run as an AB test.
1. AB test complete, data analysis on results.
1. The winner goes live at 100%.
1. Saves (tests that did not deliver as expected) are documented.

## A/B Testing Schedule

### Planned A/B Tests

| Issue | Test Length | Status |
| ------ | ------ | ------ |
| [Homepage Featured Blocks vs Carousel](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/epics/169) | | scheduled |

### Completed A/B Tests & Results

| Issue | Variant A | Variant B | Winner |
| ------ | ------ | ------ | ------ |
| [Remove 'register' from the navigation (top right) on about.gitlab.com](https://gitlab.com/gitlab-com/marketing/digital-experience/ab-testing/-/issues/1)| [Variant A Image](/images/digital-experience/ab-tests/remove-register-nav/variantA.png)| [Variant B Image](/images/digital-experience/ab-tests/remove-register-nav/variantB.png) | Variant B |
| [Add borders around pricing tiers on /pricing based on DemandBase data](https://gitlab.com/gitlab-com/marketing/digital-experience/ab-testing/-/issues/16) | [Variant A Image](/images/digital-experience/ab-tests/pricing-borders/pricing-variantA.jpg) | [Variant B Image](/images/digital-experience/ab-tests/pricing-borders/pricing-variantB.jpg) | Variant B |
| [Update Homepage Sub Copy](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/1297) | [Variant A Image](/images/digital-experience/ab-tests/home-subcopy/home-control.jpg)| [Variant B Image](/images/digital-experience/ab-tests/home-subcopy/home-variant.jpg) | Variant B |
| [Pricing Page: Free SaaS Trial + Self Managed Install CTAs](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/1432) | [Variant A Image](/images/digital-experience/ab-tests/pricing-free-tier/pricing-free-tier-control.jpg)| [Variant B Image](/images/digital-experience/ab-tests/pricing-free-tier/pricing-free-tier-variant.jpg) | Variant B|

## How do we engineer tests

### Running test on the Buyer's Experience repository

* Developer notes on running an experiment: https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/docs/plugins.md
* Example MR for an AB test: https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/merge_requests/258
* Video Explanation: [https://www.youtube.com/watch?v=F1tlCZgYUqQ](https://www.youtube.com/watch?v=F1tlCZgYUqQ)

### Running test on the `www` repository

This can be overridden by optional URL parameters as exhibited in the codepaths section below.

[Example merge request for an AB test](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/80315)

#### Tutorials for implementing AB test in the www-gitlab-com project

**Active**

* [VIDEO: Part 1 of 3, explaining code paths and how to develop an AB test of the pricing page](https://youtu.be/H3-y5JRNDTM)
* [VIDEO: Part 2 of 3, explaining how our feature flag vendor's system works and how to verify that the AB test is working](https://youtu.be/5Pll30nkqes)
* [VIDEO: Part 3 of 3, explaining how to decommission a feature flag and set up a new control experience](https://youtu.be/kY0lpmXlELE)
* [DEPRECATED: Outdated Google doc and video explainer outlining the system. Code and structure has changed a lot since this video was made.](https://docs.google.com/document/d/1_XztSRs_CMBulZDvrVbSHmCjtOnL0xd6gFUEVo_NxoA/edit?usp=sharing)

#### Additional Notes

* Previous solution: `run-experiments.js` from www: https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/source/javascripts/run-experiment.js
* Originally tried to bring this file over and integrate it as a nuxt plugin in this MR: https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/merge_requests/224/diffs#8f8555baf29e37a194c0d155b0001e82de21ddbf
* Our buyer’s experience repository is a JS pre-rendered site with TS support, so this would be a good candidate for interacting with their SDK TS directly: https://docs.launchdarkly.com/sdk/client-side/javascript#getting-started
* Initialize client, helper function to evaluate feature flag value: https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/plugins/launchdarkly.ts
* Higher order component with control and experiment slots: https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/components/launch-darkly.vue

## Why did we choose LaunchDarkly

Because the marketing website about.gitlab has no dynamic server, we needed a solution that could be performant and implemented using a javascript SDK. In addition to that, we needed a solution that was able to attach metrics.

Below are some links with information on the history of the decision:

* [GitLab marketing's use of LaunchDarkly](https://gitlab.com/gitlab-org/growth/team-tasks/-/issues/106#note_318635630)
* [Why use a SaaS tool](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/6151#note_276729044)
* [Taking a step back when defining requirements](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/6151#note_276747995)
* [Epic for the original implementation](https://gitlab.com/groups/gitlab-com/-/epics/290)
* [Original proof of concept](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/6422)
