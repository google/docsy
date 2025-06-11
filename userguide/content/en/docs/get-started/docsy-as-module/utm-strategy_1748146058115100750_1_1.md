---
title: UTM Strategy
description: Everything you need to know about our UTM strategy, which enables insights through the connected/resulting Tableau dashboards.
twitter_image: /images/tweets/handbook-marketing.png
twitter_site: '@gitlab'
twitter_creator: '@gitlab'
---

## Overview

The purpose of this handbook page is to outline how our UTM strategy drives insightful dashboards in Sisense. You may learn how to use the UTM builder, and why it is critical that we use this consistent process across all marketing channels for consistent and useful reporting.

[Enablement Session] Iteration & Review of UTM Parameters available in [this YouTube video](https://youtu.be/QcH2pBH37wU), and [ppt presentation](https://docs.google.com/presentation/d/1c59rG6abWe1wVd9KLQLu_TePXMYjGUg2IK9_xb1M2P8/edit#slide=id.p).

Everyone can contribute - See something you'd like to discuss or iterate on? Start an MR and post it in [#mktg-analytics](https://gitlab.enterprise.slack.com/archives/C01HTAYQBM5) slack channel.

## What are UTMs

UTM parameters are specific text strings appended to the URLs, used to facilitate performance tracking in Tableau dashboards through [Bizible Touchpoints](/handbook/marketing/marketing-operations/bizible/#bizible-touchpoints) & other web analytics tools.

Example url:

```text
https://page.gitlab.com/resources-ebook-beginners-guide-devops-fr.html?utm_medium=email&utm_source=marketo&utm_campaign=2024_01_20_emea_dmp_webcast_autosd_fr_beginnersguidedevops&utm_content=devguideappsec_ebook&utm_partner_id=gcp
```

The UTM parameters are everything that comes after the question mark:

* utm_medium=email
* utm_source=marketo
* utm_campaign=2024_01_20_emea_dmp_webcast_autosd_fr_beginnersguidedevops
* utm_content=devguideappsec_ebook
* utm_partnerid=0018X00002zWCjU

## Why use UTMs

Adding UTMs to links allows Marketing to identify the source of traffic, form fills and activity on our web properties, creating the first step in the marketing funnel. When our web traffic and form fills have sources, Marketing can use attribution methods to calculate the ROI.

UTM parameters provide three key benefits:

1. Help us understand our customers' journey through each touchpoint.
2. Provides us with the marketing channel and marketing campaign categorization, plus the landing page the person converted on telling us the offer (webinar, gated content, free trial etc.).
3. Used in combination, we can better understand what mix of marketing channels, campaigns, and offers produce the best results.

## When to use UTMs

Understanding when UTMs are needed and not needed on links is important for keeping our marketing data clean and useful. As a general rule, when a link directs to a website GitLab controls, UTMs should be added to the link.

There are a couple situations when UTMs are not needed and can break tracking. The most common is when linking to another page on the **same website**. For example, if a campaign directs traffic to a landing page on pages.gitlab.com and the landing page links to another page on the same domain, only the landing page needs UTMs on the links.

UTMs should **always** be used when linking to:

* about.gitlab.com
* gitlab.com (trial and registration pages only)
* learn.gitlab.com
* pages.gitlab.com
* docs.gitlab.com

**When UTMs are NOT Needed:**

* When linking to a non GitLab web property (Eg: Youtube, LinkedIn, etc..)
* Internal links with the same gitlab.com domain. For instance, linking to learn.gitlab.com from an about.gitlab.com webpage. Google Analytics is set up for cross-domain tracking. If UTMs are detected within an internal gitlab.com link, a new session will be counted, and conversion attribution will be overridden by the new UTM parameter values. The original source will not receive proper credit.

## How to create UTMs

Use the [UTM builder googlesheet with formulas](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=29481466). [Here is a video overview](https://youtu.be/WRSIZ84027g) of the spreadsheet. The process involves the following steps:

* Open the [Tracking URL Builder](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=29481466)
* Add in your page URL in the first column
* Fill in each attribute of your UTM parameter, including `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_budget`. If some of these UTM parameters are irrelevant to your campaign, keep them blank or remove from the final URL.
* Destination URL will be generated automatically in column N, ready for you to use in your campaign. If you need to shorten your URL, use a tool like [bit.ly](https://bitly.com/).

### Measuting the sucess

Measure success of your campaign in the [TD Campaigns Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/Overview?:iid=1) under "Bizible Channel Drill Down" or "Regional Campaign Drill Down" sections.

## UTM Values

### utm_medium

**Campaign Medium** is the overarching channel bucket like email, display, etc. It answers the question of "How did they come to us?". utm_source will further categorize the overarching channel.
You can choose a campaign medium from a provided picklist of values in the [URL Builder spreadsheet](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=2043976569). If you need a new campaign medium, please request this using slack channel: #mktg-strat-perf.

Current available options for `utm_medium` are as follows:

* `email` = all email systems such as marketo, outreach, mailjet, highspot, etc.
* `cpc` = Paid Search
* `display` = Display ads
* `paidsocial` = Paid Social
* `social` = Organic Social
* `sponsorship` = Paid publishers engagements/sponsorships
* `chat` = website conversational bot
* `pdf`    links in whitepapers, ebooks, reports, etc.
* `referral` = Customer review sites
* `syndication` = 3rd party - content syndication
* `webinar`    = 3rd party - sponsored event
* `video` = 1st party - owned video

### utm_source

**Campaign Source** parameter can tell you which website is sending the traffic, and is a further "slicing" of overall channels. It answers the question of "how did they come to us?" but with more granular details than utm_medium.
You can choose a campaign source from a provided picklist of values in the URL Builder spreadsheet. If you need a new campaign source, please request this using slack channel: #mktg-strat-perf.

Current available options for `utm_source` are as follows:

| **Source** | **Lines up with Medium** | **Source**  | **Lines up with Medium** |
| -------------------------------------- | -------------------- | ------------------------ | --------------------------------|
| `adwords` | lines up with cpc | `marketo` | lines up with email, sent through Marketo (marketing automation) |
| `bing`                          | lines up with cpc  | `mailjet`  | lines up with email, essentially sent through product |
| `yahoo`  | lines up with cpc  | `trustradius` | lines up with referral |
| `doubleclick`  | lines up with display | `highspot`  | lines up with email, sent through highspot (Sales) |
| `6sense`    | lines up with display                                   | `gmail`       | lines up with display |
| `google`                       |lines up with organic search, cpc, and display | `outreach`  | lines up with email, sent through Outreach (SDR/BDR) |
| `demandbase`                         | lines up with display | `g2`       | lines up with referral |
| `facebook`          | lines up with organic social and paid social | `gartnerdigital`       | lines up with referral |
| `linkedin`  | lines up with paidsocial, social | `gartnerpeer` | lines up with referral |
| `twitter` | lines up with paidsocial, social | `integrate-market`       | lines up with syndication |
| `iterable` | lines up with email, sent through Iterable (marketing) for product | `youtube` | should appear in dropdown menu for "video" |
| `stack-overflow`  | lines up with display | `vimeo` | should appear in dropdown menu for "video" |
| `agency` | lines up with email, paid social, social (depends how the agency is promoting) | | |

Values for `utm_source` are available as an open picklist in the UTM builder googlesheet. Please be consistent when adding new values to the [list](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=3), keeping the best practice of no characters and all lower case.

### The new utm_campaign structure

Instead of a single value for UTM Campaign, it will encode many values into a single parameter:
`Date`_`Region`_`Budget`_`Type`_`gtm`_[Language]_[campaign_name]

Encoding more data on the UTM campaign directly transfers that information to Bizible touchpoints and allows for drop-down / point and click reporting in SFDC.

| Parameter | Required / Optional | Examples |
|---------------------------|----------------------|----------------------|
| `Date` (in ISO format - yyyy_mm_dd) | Yes (if campaign is evergreen use eg) | 2024_02_20 |
| `Region` (select from dropdown) | Yes (if multi regions, use x) | emea |
| `Budget` (select from dropdown) | Yes (if not applicable, use x) | dmp |
| `Type` (select from dropdown) | Yes (if not applicable, use x) | dmp |
| `GTM` (select from dropdown) | Yes (if not applicable, use x) | autosd |
| `Language` (select from dropdown) | Optional | fr |
| `Campaign name` (free text field) | Optional | beginnersguidedevops |
| `Agency` (free text field) | Optional, rare | Name of 3rd party agency if one is being used |

Note on `Agency`: Sometimes 3rd party agencies are used to drive registrations to events. This is uncommon. If you are using an agency, use the `agency` source and add the name of the agency to the `Agency` field in the UTM generator. This will append the name in the appropriate location as part of the utm_campaign value.

#### Current GTM UTMs

* speedsecurity = Trading off Speed for Security
* devsecopsplat = DevSecOps Platform GTM
* autosd = Automated Software Delivery GTM

#### Retired Use Case UTMs

* seccomp = Security and Compliance GTM
* singleappci = CI Campaign
* iacgitops = GitOps Campaign
* vccusecase = VC&C Campaigns (retired)
* competegh = OctoCat Competitive
* cdusecase = CD Campaign

#### utm_content

**Campaign Content** (`utm_content`) is an optional parameter which encodes two values - `contet offer` and `asset type`:

| Parameter | Required / Optional | Examples |
|---------------------------|----------------------|----------------------|
| Content offer | Optional (if not applicable, use x) | devguideappsec |
| Asset type | Optional (if not applicable, use x) | ebook |
| Industry (vertical) | Optional (if not applicable, use x) | telco |

Example: utm_content=seccspackage_ebook_fs

**Asset Type** values (available as picklist in the UTM builder googlesheet):

* ebook = Gated ebooks
* whitepaper = Whitepapers
* blog = Blog posts
* video = Video content
* briefs = Solutions Briefs
* infogr = Infographic

#### utm_partnerid

The UTM parameter URL plays a huge part on partner lead routing and reporting. We utilize `utm_partnerid` in the UTM parameter URL to capture the Account ID (18) of the Partner Account, which populates into the `CRM Partner ID`. This process is embedded as a hidden field in all our partner-related Marketo forms. Each page must have the `utm_partnerid` in the URL, otherwise we cannot pass to the partner.

* utm_medium = `partner` (never changes)
* utm_soure = `partner` (never changes)
* GTM = `x` (never changes)
* Partner Name - utm_partnerid is a dropdown show all Channel Partners, and two Alliance Partners (AWS, and GCP). Select the partner you are working with.
* Fill out the rest of the UTM parameters

### UTM structure for nurture emails

* UTM Medium = `email` (never changes)
* UTM Source = `marketo` (never changes)
* UTM campaign = `Date_Region_Budget_Type_gtm_[Language]_[campaign_name]` (i.e. `2024_02_20_emea_dmp_webcast_devsecopsplat_fr_beginnersguidedevops`)
* UTM content = `content_offer` and `asset type` (i.e. `utm_content=devguideappsec_ebook`)
  * Do not use `nurture` for utm_content.

### UTM structure for account based marketing

#### UTM structure for 6Sense

* UTM Medium = `banner`
* UTM Source = `6sense`
* [See utm_campaign](/handbook/marketing/utm-strategy/#utm-campaign) for accepted options.

  * For ad variations, use shorthand addition (i.e. `-accl1` `-accel2`) to the end of the content option
  * Example in practice: `utm_content=acceldigtransformation` would add the following for 4 ad variations with different ad copy:
    * `utm_content=acceldigtransformation-accel2`
    * `utm_content=acceldigtransformation-accel1`
    * `utm_content=acceldigtransformation-live2`
    * `utm_content=acceldigtransformation-live1`
