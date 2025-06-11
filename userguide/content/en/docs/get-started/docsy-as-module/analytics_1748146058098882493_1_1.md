---
title: "Marketing web analytics"
description: "Our marketing team uses analtyics tools to understand how people discover and use our marketing website."
---

Our marketing team uses analtyics tools to understand how people discover and use our marketing website. The Inbound Marketing team manages the analytics implementation for our public websites, including about.gitlab.com and docs.gitlab.com. Our tools include Google Tag Manager, Google Analytics, and Google dataStudio.

If you would like direct access to these sources, please make an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/)

We use this page to document and share our process.

### Website analytics dashboards

We use Google dataStudio to create an easy to share and repeatable process for sharing analytics data for about.gitlab.com. dataStudio allows us to combine data from Google Analytics, Google Ads, and a variety of other sources to create reports with key data for any GitLab team.

When we connect data from Google Sheets everyone on the DMP team needs to able to access and edit data as needed. To accomplish this we add all Google Sheets used in dataStudio to the Shared Drive in the [dataStudio sub-folder](https://drive.google.com/drive/folders/1pO0fVLM-K0KrLNu8MWvzI-i96QXFdgeR). Be sure you only share your Google Sheets in the shared drive because dataStudio does not currently support sharing data sources from shared drives.

### Self-serve Website analytics dashboards

* Google Analytics traffic: If you would like to check the traffic, referrals, or clicks off of a page hosted on the marketing site (about) just enter your page URL or URLs into the `Page` field in this dataStudio report [Page-level Google Analytics data](https://datastudio.google.com/reporting/9a8eff5f-02e2-4a52-b08a-7a833cd9d406). To check traffic for a page hosted on the docs site, use the Looker Studio [report for docs.gitlab.com](https://lookerstudio.google.com/reporting/d6af7a2b-2aaa-4f30-8742-811e62777c93/page/p_ihbvblyl2c).
* Google Search results keywords and URLs: If you would like to check the keywords and/or URLs from a specific about.gitlab.com page in Google search, just enter your page URL into the `Landing Page` field and/or your keyword into the `Query` field in this dataStudio report [Google Search Console lookup](https://datastudio.google.com/reporting/4f3575e1-b64f-4d6b-b143-805ee5da58e5)

#### Active dataStudio dashboards

* [Marketing metrics dashboard](https://datastudio.google.com/reporting/1mvDffnzlIWsr-2S_cvkpRx0X25hiM_TI/page/1M) TODO: Update Link — Used to generate data for our monthly marketing metrics deck. A few elements update manually, ping the Digital Marketing team in #digitalmarketing if you need updated numbers.
* [Blog dashboard](https://datastudio.google.com/u/0/reporting/d99537bc-bdfc-475f-b545-bdbe3f885cdd/page/psGyB) TODO: Update Link — Blog content reports, primarily used by the content team to track traffic to the blog, page visits, new and returning users, and conversion.
* [Just Commit dashboard](https://datastudio.google.com/reporting/1dbt-3WI6KzySYrnolIUfCufvvtba20f9/page/kWdQ) TODO: Update Link — Tracks progress of Just Commit integrated campaign.
* [Job pages dashboard](https://datastudio.google.com/reporting/1w6TwUeGjkQpPZz4jvp9Hye8vdGP6MYel/page/JcPY) TODO: Update Link — Provides context around job page interactions.
* [Security releases dashboard](https://datastudio.google.com/u/0/reporting/2eabf79d-2173-488a-bb64-dcbddd900487/page/l7vj) — Website analytics data for security release blog posts.
* [about.gitlab.com CrUX dashboard](https://datastudio.google.com/reporting/1f-akzELoGzJRdBFPgMTzgHPrSOshUgki/page/cJUR)TODO: Update Link — *Public* See [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report/) for definition of report dimensions. This dashboard shows CrUX data for about.gitlab.com, assembled with PageSpeed Insights and Public Google BigQuery.

## Google data administration

We use Google Analytics 360 and purchase this through an analytics partner agency, Empirical Path. They help us maintain a few systems for our analytics configuration. These include:

* [Google Marketing Platform](https://marketingplatform.google.com/home/)
* [Google Tag Manager](https://tagmanager.google.com/?hl=en#/home)
* [Google Analytics](https://analytics.google.com/analytics/web/)

Empirical Path helps us execute advanced Google Tag Manager and Google Analytics work, including adding custom dimensions, creating events for video plays and forms, and many other optimizations.

We also use supplmental tools to improve our understanding of how people interact with about.gitlab.com. These tools are used most heavily by our Search Marketing team:

* [Google Search Console](https://search.google.com/search-console) (click data from Google Search)
* [SEMRush](https://www.semrush.com/) (keyword research and coverage)
* [Sitebulb](https://sitebulb.com/) (site health and crawl)

## Google Marketing Platform

Google Marketing Platform is a central hub Google created to simplify managing their marketing suite. You can add/remove users and access each tool from their dashboards. It gives you admin control for

* Google Ads (not currently connected)
* Google Analytics
* Google Tag Manager
* Google Optimize
* Google dataStudio (not currently managed in Google Marketing Platform)
* Google Surveys (not currently in our marketing stack)

Google Marketing Platform is also where we manage data processing agreements and amendments for our GA 360 account.

## Google Analytics flows

We use events to create flows to understand how people interact with `about.gitlab.com`. The simplest flows are built-in to Google Analytics. They answer questions like

* What page did someone visit? (Page dimension)
* How did they find that URL? (Source/Medium)
* How long were they on that page? (Average time on page)
* Did they enter and exit the site without visting other pages? (% Exit)
* Did they leave the site from this page? (Bounce rate)

To create a deeper understanding we also employ custom events.

In the Event Category `navigation` you'll find events sorted by location in action and page with their label. This helps us identify what nav elements our visitors find most useful. A sample of our the post popular nav event you'll find in the `Behavior > Events > Top Events` section of GA is people clicking on sign in. Those events have the following values.

`Event category = navigation`
`Event Action = main navigation header`
`Event Label = https://gitlab.com/users/sign_in`

To understand what offers people find compelling we use CTA events to see when people click on buttons to follow through from a page. We're looking to see what resources, webcasts, trial, or other offers lead people to take action.  A sample of a popular CTA event would match these values in `Behavior > Events > Top Events in Google Analytics`.

`Event category = CTA`
`Event action = button`
`Event label = https://about.gitlab.com/`

To add further context, because lots of people visit our homepage, we can add a secondary dimension of `Click URL` or `Click text` to see what people clicked on. `Try GitLab for FREE` is the most popular click text, right from the CTA in our hero.

Finally, to help us measure conversion we use events as well. Every form on about.gitlab.com falls into one of several buckets, from resources to webcasts to trials. Trials are a little special right now because we don't have insight to SaaS trial activity, so we measure the last click we can see from `/free-trial/` with the `saas-trial-clicks` label. A popular conversion event has the following values.

`Event category = forms`
`Event action = submit`
`Event label = resources`

You can add a secondary dimension to the label here as well to get additional context around which pages drive the most resource conversions. Add `Page` and you'll see which URL drove form conversions.

We also use these events to fire goal conversions in Google Analytics. Goals are not always available for analysis in every GA report, so we use as a reporting mechanism for our paid demand gen activities with PMG. We can assemble detailed reports on pageviews, CTA clicks, and form conversions in dataStudio.

### Grouping pages together by sub-folder

A great way to look at how specific groups of pages are performing is available in the [Content Drilldown view in Google Analytics](https://analytics.google.com/analytics/web/#/report/content-drilldown/a37019925w65271535p67064032/). You start at the sub-domain level and can explore sub-folders to see which topic groups are performing well and to identify other trends.

### GitLab Google Tag Manager system

We use Google Tag Manager(GTM) to simplify activity tracking on about.gitlab.com with Google Analytics. This documents the system the Digital Marketing Programs team uses with our Google Tag Manager container.

#### Data Attributes

Previously, GitLab use to track GTM through the use of various CSS classes. This has been an issue, as it obfuscates what is being tracked and why. To add some clarity, we *highly recommend* GitLab team members to start using [data attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes).

#### Naming convention

We use semantic names for tags, triggers, and variables to make it simpler to determine what these components are supposed to do. Use an em dash (shift+option-_) to divide the components of each GTM component name.

Tags start with the platform, followed by the tag's purpose, and are finally contextualized to about.gitlab.com. Any tags related to timed events need the timeframe indicated in a note attached to the tag in GTM to make it clear when to remove a tag.

##### Tag naming examples

* Google Analytics Event — Free Trial CTA click
* Google Ads —  conversion tracker
* Facebook — base pixel
* Drift — snippet v 0.3.1

Triggers start with a description of the action triggering a tag, followed by contextualization for about.gitlab.com.

##### Trigger naming examples

* Link click — Learn more 100M carousel
* CTA click — cta-btn
* Custom event — mktoformSubmit free trial

Variables start with the tag or trigger they reference, followed by contextual data about their purpose.

##### Variable naming examples

* Google Analytics — GitLab Universal Analytics ID
* dataLayer — postType custom dimension

If you are making changes to the GTM container and have questions about what to name one of these components the Digital Marketing Programs team can help.

#### dataLayer values

Today we're using the dataLayer sparingly on about.gitlab.com, with our primary use focused on [differentiating blog content with `postType`](/handbook/marketing/blog/#post-type). We'll expand how we use the dataLayer to create content groupings for improved customer journey insights and document those updates here.

#### Event tags

We need consistent tags across Google Analytics events and have introduced the following structure to our event tags. Our goal is to cover important visitor events with the smallest number of tags in Google Tag Manager. Reducing the number of tags and the overall complexity of our Google Tag Manager container helps us spot and fix coverage issues faster.

#### Event structure

Some tools fire events with out of the box nomenclature that we can't alter. Drift and Demandbase populate default Event Categories you can explore to discover Event Action and Event Labels.

GitLab controlled Event Categories include navigation, CTA, forms, and YouTube events. Details for each of these categories can also be extended with Custom Dimensions in Google Analytics. Our current custom dimensions include `Click URL`, `Click text`, `Click class`, and `referrer`. `Referrer` shows you the previous page for any event, whether it's an internal page or external resource.

**Navigation** events capture how visitors interact with navigation across about.gitlab.com. If you select the `navigation` category you can explore different parts of our global navigation and more specific interactions like clicks from docs to about.

| Event Category | Event Action           | Event Label |
|----------------|------------------------|-------------|
| navigation     | main navigation header | Click URL   |
|                | footer link category   |             |
|                | docs to about          |             |
|                | search interactions    |             |
|                | click                  |             |

**CTA** events capture how visitors interact with call to action buttons across about.gitlab.com. We use `cta-btn` for each CTA button across about.gitlab.com to trigger these events. Select `CTA` to explore these events.

| Event Category | Event Action  | Event Label |
|----------------|---------------|-------------|
| CTA            | button        | Page        |
|                | video         |             |
|                | inline link   |             |
|                | click         |             |
|                | watch         |             |
|                | select plan   |             |
|                | challenge box |             |

**Forms** capture when visitors submit a form on about.gitlab.com. The key factor to check here is the Event Label where you can see the total number of events by offer type for your selected time frame.

| Event Category | Event Action | Event Label      |
|----------------|--------------|------------------|
| forms          | submit       | saas-trial-click |
|                |              | resources        |
|                |              | webcasts         |
|                |              | trial            |
|                |              | demo             |
|                |              | mktoLead         |
|                |              | PathFactory      |
|                |              | sales            |
|                |              | services         |
|                |              | events           |

The **YouTube** Event Category is a newer event type on about.gitlab.com. As we use ramp up using YouTube to embed videos across our website we wanted to see which videos resonate with visitors and how much of a video visitors watch.

| Event Category | Event Action    | Event Label             |
|----------------|-----------------|-------------------------|
| YouTube        | Start playing   | Video title + video URL |
|                | Reached 50%     |                         |
|                | Reached the end |                         |

#### Event structure January 2019 - June 2020

Starting in January 2019 we used an updated event structure designed to maximize our understanding of interactions across about.gitlab.com with the limitations of Google Analytics. We transitioned off of this system early in June 2020, so if you look at events before then you might encounter this event structure.

![GitLab Google Tag Manager event structure January 2019 — June 2020](/images/handbook/marketing/GTM-event-structure.png)

These three components help us organize and identify specific event data. **Event Categories** help us group specific customer journey steps, **Event Actions** describe visitor interactions with about.gitlab.com, and **Event Labels** provide contextual details for reporting our performance.

**Example Event Label**
{{Page URL}} | {{Referrer}} | {{Click text}} | {{Click URL}} | {{Click Class}}

Google Analytics limits event label fields to around 2000 characters, and we'll update the handbook if we start to see truncated event labels.

### Google Tag Manager inventory

We're using Simo Ahava's Googl Sheets Add-On to sync notes for our tags and create a [GitLab Google Tag Manager inventory](https://docs.google.com/spreadsheets/d/1oT5AQQ0nH4-7iS-QY-UJP4vbFxv2GCGy9XiKpj8ebuU/edit#gid=1443259273) This simplifies scanning and searching over the Google Tag Manager web app.

### Changes of note

Whenever we make major changes to tags through Google Tag Manager we document them in [changes of note](/handbook/marketing/integrated-marketing/digital-strategy/digital-strategy-management/changes-of-note/). Examples of changes we document are adding or removing tags, changing tag sequencing, or changing when a tag is fired.

### Using marketing trend data

Search term volume is hard to estimate. Different tools use different methodolgies and models for reporting this data. AdWords provides data from Google, but the ranges are broad and terms can be combined into a single phrase. Google Trend data normalizes search trends from 1 to 100 based on the terms you're exploring, which doesn't give us any idea of how many people are using a particular phrase.

For our keyword research we rely on Moz Keyword Explorer data because it provides a narrower volume with full phrase integrity. When we report keyword volume, this is the tool we use for this data.

### Google Analytics Crash Course

#### Dimensions vs Metrics

Dimensions are the different attributes of your data. For example, the landing page is a dimension that is the first page a person views when they come to the site.

Metrics are the numbers that are being measured, such as number of page views or number of sessions.

Each dimension and metric has a scope, so it's important to understand the three different scopes:

1. User-level
1. Session-level
1. Page-level

Due to the scoping, not every dimension can be combined with every metric. In most cases, the dimensions and the metrics should match the scope.

#### Understanding Reporting

##### Setting a date range

You can use the calendar in the top right to set the active date range. You can also select the `compare to` box to compare metrics from different time periods. This will allow you to see month over month or year over year growth for the desired metrics.

##### Annotations

Annotations are used to mark a point in time in Google Analytics. They can be used to mark an important event such as a change to the setup of Google Analytics, or an event that heavily impacted traffic positively or negatively.

To create an annotation, double-click on a date. The double-click will bring up the annotation field where you can enter details, and select `private` or `public`. Public annotations can be seen by anyone that has access to that view within Google Analytics, and private annotations can only be seen by you.

##### Data Tables

Most reports have a data table below the graph. The data tables contain a dimension and associated metrics.

The `Primary Dimension` of the data tables can be changed by selecting a different primary dimension from above the table.

A secondary dimension can also be added by clicking on the `Secondary Dimension` button above the table and selecting the secondary dimension you'd like to add to the table.

#### Audience Reports

The audience reports are used to understand characteristics of your users such as location, and browser used, and user behavior over multiple visits such as average session time.

#### Acquisition Reports

The acquisition reports help you know how people find the website. These reports will help you to analyze the benefits of the different digital marketing efforts that you are involved in.

##### Channels Report

The `All Traffic > Channels` report breaks down all the different channels that are sending traffic to the site. You can click on any of the channels to drill down  and get more granular data about that specific channel. For example, if you click on the `Referral` channel, you will see which sites are referring traffic to your site.

#### Behaviors Reports

The behaviors section is about how users use the website. This includes what pages of the site people are looking at as well as how they flow through the site.

##### All Pages Report

The `All Pages` report shows the number of times a given page was viewed within the selected period of time. You can change the primary dimension to `Page Title` if it is easier to tell what the page is by looking at the title rather than the URL.

`Avg. Time on Page` and `Bounce Rate` can be used to find underperforming content or content that is very engaging to users and can be used in future marketing efforts.

##### Landing Pages and Exit Pages

The `Landing Pages` and `Exit Pages` reports are scoped at the session and tell us how many people are beginning a session at a certain page (landing page) and how many people are ending a session at a certain page (exit page).

These reports can be valuable to see what content is bringing people to the site and what content is causing people to leave the site.

##### Events

Events can be set up to track actions that people take on the website, such as clicking links or selecting drop downs. These events can be set up in Google Tag Manager and for the most part won't require any additional code to be placed on the website.
