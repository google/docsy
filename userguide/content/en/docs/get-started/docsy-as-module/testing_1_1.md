---
title: "Testing for conversion at GitLab"
description: "The Inbound Marketing team run tests to improve visitor experience and conversion rate across about.gitlab.com."
---

We test changes at GitLab to verify a hypothesis for design or copy changes. These changes can use a variety of tools and methods, but the goal is the same: to make changes to help improve the visitor experience and better explain the value of GitLab.

We don't test fixes for typos, link updates, or other structural improvements to the site.

**Goals**

1. Validate and challenge our assumptions
1. Gain business insight
1. Improve customer experience

### Always be testing

Testing requires a control and a variant within the same time period, while holding all other variables constant. Using A/B testing tools allow us to create tests to follow testing best practices and gather data about what works or does not work to encourage people to spend time on our site or [convert on a form](/handbook/sales/field-operations/gtm-resources/). With testing, we can make informed decisions about what works for our audience and helps them reach their goals, and what works for us to help use meet our business goals.

### Types of experiments

#### Website tests

* **A/B Test:** tests two variants of a page
* **A/B/n Test:** tests two or more variants of a page
* **Multivariate Test:** tests variants with two or more different sections
* **Redirect Test:** tests separate web pages identified by different URLs or paths
* **Personalization:** personalize your page for targeted visitors

### Requesting a Website or Email Test

1. Build a test: If you would like to request an a/b or multivariate test, create an issue for [Digital Marketing Programs using this template](https://gitlab.com/gitlab-com/marketing/growth-marketing/growth/issues/new?issuable_template=ab-test).
1. Keeping it MVC: Not all changes to changes need to be tested. We should test changes to our key conversion pages, and these pages/elements are key areas we test often:
    * [Homepage](https://about.gitlab.com/)
    * Top navigation
    * [Pricing page](https://about.gitlab.com/pricing/)
    * [Free trial](https://about.gitlab.com/free-trial/)
    * [Contact sales](/sales/)
1. Please check [CODEOWNERS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/.gitlab/CODEOWNERS) to see if a page being tested. We updated the `#Active tests` sections, [@shanerice](https://gitlab.com/shanerice) and [@dmor](https://gitlab.com/dmor) will appear as approvers on any MRs with active tests.

## Before you experiment

Always gather relevant heatmaps, analytics, metrics, KPI (key performance indicators), etc.

## Announcing tests

We will announce major tests in #whats-happening-at-gitlab on Slack. A major test is anything on a page with more than 10,000 pageviews in the last 30 days. For example, tests on `/pricing/`, `/free-trial/` and sub-pages, and the homepage would all qualifiy as major tests. The announcement should share basic details and timeline of the testing and link to the test issue for additional context.

The DRI for the test should share the original Slack announcement in appropriate channels (#sales, #marketing, etc.).

## Testing Tools

We use different tools for different kinds of tests.

Feature flag tests replace enitre pages or large sections of a page with a test.

WYSIWYG tests replace small elements of a page or update copy.

Hotjar tests measure interactions on a page for research before and after tests.

## Testing via feature flags

This is where we plan to do the bulk of our testing. We can run several of these at the same time. For full-page, partial-page, component, and small changes. Right now we use Launch Darkly for feature flag testing. This tool is administered by [@bradon_lyon](https://gitlab.com/brandon_lyon), please ping him with any questions about the tool. You can request a test with the [AB Test template](https://gitlab.com/gitlab-com/marketing/growth-marketing/growth/issues/new?issuable_template=ab-test).

Launch Darkly measures tests with click data which is a more accurate method of measuring interactions than cookie-based analytics. It's important to remember this data won't reconcile with cookie-based analytics like Google Analytics or Snowplow.

You can review each the control and test variant in review apps or live on about.gitlab.com with either `?experiment-review-control` or `?experiment-review-test` respectively.

### Feature flag best practices

Feature flags should be implemented in code similarly to the includes system. Example:

* Login to our third party service and create a feature flag and related configuration variables.
* Assign ownership of that flag from within the interface.
* Edit a page.
* Put the existing contents of the page into an include file named `/source/experiments/1234-control.html.haml`, where experiments is the folder name instead of includes and 1234 is the id number of the associated issue. "Control" refers to the baseline measurement you are testing against.
* Duplicate that include file with the name `/source/experiments/1234-test.html.haml`
* Make your changes and validate the feature toggle works locally and/or on a review app before deployment.
* Ensure you'll be able to collect all the data you need. Setup appropriate tools like heatmaps and analytics.
* Note that one advantage of feature flags is that they can be released to production without being turned on.
* When ready, enable the test. Start gathering data.
* If needed, run experiment with only control to collect baseline data.

## Testing via CDN

This is an advanced tool meant to test large-scale changes at a systemic level. For now we plan to run only one of these at a time.

## Testing via WYSIWYG

We use Google Optimize for these tests. There are performance impacts with large-scale tests so we only use this platform for testing a handful of CSS elements or copy changes.

To enable Google Optimize on any page you add `google_optimize: true` to the frontmatter of any page.

### Testing with Hotjar

[Use this link](https://gitlab.com/gitlab-com/marketing/growth-marketing/growth/-/issues/new?issuable_template=hotjar-heatmap-request) to request a heatmap test or results for a page on `about.gitlab.com`.

New heatmaps will record data until the page has reached 2,000 pageviews. An Search Marketing Manager will ping you when the results are complete (Duration depends on average traffic to the page. Some tests can take up to a month or more.)

**Note:** Every page viewed by a visitor is counted as a single pageview.

### Test launch checklist

When launching a test there are many GitLab team members that the Inbound Marketing team needs to notify. For the best coverage we'll post one message in `#whats-happening-at-gitlab` and then crosspost to the following channels. Please add any additional channels and ping the Search Marketing team in `#search-marketing-team` to make sure we notify everyone who wants to track tests.

Channels we share original update:

1. `#marketing`
1. `#sales`
1. `#ceo`
1. `#support_team-chat`
1. `#s_growth`
