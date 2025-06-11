---
title: "Landing Page Creation"
description: "Overview of Marketo landing pages at GitLab. This page will be moved under Demand Generation."
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
---

## Best Practices

## Landing Page Conversion Best Practices

`To be removed and linked to Brand & Digital best practices page when created`

1. *"Don't make them think." - Steven Krug*
1. Header should be 3-7 words max
1. The header, optional blurb, and image should directly tie to inbound context (e.g. ad they clicked)
1. Use plain, value-oriented and action-oriented language
1. Use "first date" content to put our best foot forward

   * Let's not tell them about how cool we are and how amazing our stamp collection is. Make it about them, and drive the desired action of a form fill.

## Landing Page URL Best Practices

* For about.gitlab.com pages: The H1/page title will be the slug of the URL
* The H1 should be concise and focus on keywords for the campaign
* For Marketo landing pages, follow the landing page naming convention.

## Resources and related issues

* [Character Count Checker](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=868164112)
* [Documentation of Modular Marketo Landing Page](/handbook/marketing/digital-experience/marketo-page-template/)
* Related Brand & Digital Issues:
  * [Create a new Marketo landing page template phase 1](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/7259)
  * [Marketo Landing Page Phase 1 - KPIs & Validation](https://gitlab.com/gitlab-com/marketing/growth-marketing/brand-and-digital/brand-and-digital/-/issues/52)
  * [Marketo Landing page template design, phase 2](https://gitlab.com/gitlab-com/marketing/growth-marketing/brand-and-digital/brand-and-digital/-/issues/43/)
  * [Update Marketo forms (design + copy) to improve conversion on existing and new landing pages](https://gitlab.com/gitlab-com/marketing/growth-marketing/brand-and-digital/brand-and-digital/-/issues/66)

## Landing page creation options

We create landing pages in several locations. Marketo is the most efficient option, using tokens and automation pre-built into programs for more speedy and consistent exection. The events yml creates landing pages when specific code is included. Gated content pages are created in Marketo and then added as listings in the /resources/ yml. Campaign pages are currently created on about.gitlab.com.

## Marketo landing pages (general)

*Note: this requires a Marketo license with access to make and approve landing pages.*

The following section point to more detailed processes for Marketo landing pages based on landing page type, plus general information for knowledge sharing on creation process.

> To build the most advanced and efficient landing page processes in Marketo, we utilize `My Tokens` in our Marketo program templates along with character limits based on conversion best practices to write copy.

### Marketo landing page instructions, character limits, and workback timelines

_Curious how to estimate when a landing page due date should be set? We've tried to make it easy with a workback, so that you can also clearly see the **dependencies** for a landing page to be created (including landing page copy, which is a separate issue teamplate).*

* Gated content (in-house content, analyst content, and competitive content)
  * [Handbook page to reference process and details](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/)
  * [Workback schedule calculator](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=1648326617)
  * [Character limit checker](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=905304679)
* Webcast registration page
  * [Handbook page to reference process and details](/handbook/marketing/virtual-events/webcasts/#step-3c-create-the-landing-page)
  * [Workback schedule calculator](https://docs.google.com/spreadsheets/d/1A4c2OodEAsOlN4Ek-rBiLlwkdF0AvX5YBiY4mhkZd-M/edit#gid=666473040)
  * [Character limit checker](https://docs.google.com/spreadsheets/d/1dKVIZGbbOLoR5BdCqXqCQ40qJlQNif9waTiHc8yWggQ/edit#gid=43971442)
* Event meeting request or general info pages
  * [Handbook page to reference for process and details](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents) (YML)

### General Marketo landing page creation instructions

1. In Marketo, you will have already [cloned the correct template](/handbook/marketing/marketing-operations/campaigns-and-programs/#step-1-clone-the-marketo-program-indicated-below) for your campaign type and followed the standard process for Marketo program creation and SFDC campaign creation via sync.
1. In your Marketo program, fill in the appropriate Marketo tokens (Marketo program > `My Tokens`) for the template you are creating
1. In the `Assets` folder, left-click `Landing Page` > `Edit Draft`
1. In most cases, the Maketo landing page copy will include the `My Tokens` referenced above, with then does not require any edits to the landing page.
1. Use the approved copy that meets the character limits to update the landing page. Please ensure your copy meets [conversion best practices](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-conversion-best-practices).
1. When the landing page is finished, click `Preview` to ensure all tokens are correctly applied and the page appears as intended (copy, design, etc). Click `Preview Actions` > `Approve and Close`.

   * Note: if you see tokens instead of the desired text, you may need to troubleshoot. Make sure your token code in the page exactly matches the Marketo program token name.

1. Update URL by clicking `Landing Page Actions` > `URL Tools` > `Edit URL setting`. The new URL should reflect our [landing page naming convention](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-naming-convention)
1. Edit any related emails, such as `confirmation` or `sales alert` and approve the edits
1. Review flow steps and activate related smart campaigns
1. Test your landing page using the [QA Review Steps](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-qa-review-steps)
1. Once tested and any necessary updates made, comment in the relevant issue to alert other approvers to review and approve
1. When the page is live, do final QA on live version to test all flows are working appropriately via Marketo
1. Enter the URL of the landing page in the `landingpageURL` token. You will need to remove the `https://` before `page.gitlab.com` in the token for use in emails as this will cause issues with Marketo tracking. Our email templates are coded to have the `https://` hard coded so you do not experience a problem if you properly use the token.
1. When using the URL in emails or other uses with utm values, Marketo page URLs (starting with page.gitlab.com) should not have a `/` at the end of the page URL before the `?`. This will likely cause the page to redirect. (Correct example: https://page.gitlab.com/webcast-example?{{my.utm}}). Note that about.gitlab.com pages should use a `/`.

**Specific landing page instructions**

* Event landing pages (events yml) - [See Events Handbook Page](/handbook/marketing/events/#how-to-add-events-to-aboutgitlabcomevents) (for now)
* Gated content landing pages - [See Gated Content Handbook Page](/handbook/marketing/demand-generation/campaigns/content-in-campaigns/)
* Webcast landing pages - [See Webcast Handbook Page](/handbook/marketing/virtual-events/webcasts/#step-3c-create-the-landing-page)

## Landing page naming convention

Marketo landing pages should use the following naming convention:

* `**type-monthdd-shortcampaignname-region**` (no region for global)
* For joint partner events, include `partner` in the short name
* If the landing page is for gated content or an evergreen asset (such as a webcast that will be offered on-demand for more than a year), leave the date off.

The 'type' is outlined in the table below. If your type is not listed, please use `program-`.

The short name should be descriptive so when a person lands on the page, it is clear what they are registering for. Short names such as "emeawebcast" are not acceptable and should reference the topic of the webcast instead. A few examples are: webcast-march15-techdemo-cioverview, event-march19-connect-day-paris-emea, ebook-may23-connect-melbourne-apac

This standardizes our page names for use in reporting and systems such as our ABM tool. Details related to this naming convention can be found in [this issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/7974).

| Type | URL Path: `https://page.gitlab.com/[first word below]` |
| ------ | ------ |
| Webcasts | /webcast-    |
| Workshops | /workshop-  |
| Owned, in-person events | /event- |
| Owned, virtual events (that don't fall under webcasts - like wine tastings, cooking, etc) | /event- |
| Gated content - ebook | /ebook- |
| Gated content - demo | /demo- |
| Gated content - video | /video- |
| Gated content - all others | /resources- |
| Meeting requests | /event- |
| Executive roundtables | /event- |
| Survey | /survey- |
| Interest forms | /interest- |
|Contact us forms (localized, for example) | /contact- |
| Direct Mail | /direct- |
|Catch-all (doesn't fit in any of the above) | /program- |

## QA process for about.gitlab campaign landing pages

* When the landing page pipeline has passed, click to the review app and navigate to your new landing page
* Review the grammer, spelling, and design elements
* Fill out the form (using a personal email address) and test that the resulting success message and flows take place:
  * If a webcast, check that the success message displays properly
  * If a Pathfactory experience, check that the link includes the correct code to (`&lb_email=<email-of-user>`) that will ensure Pathfactory recognizes the individual as a known lead, and track the activity back to the lead/contact record.
* Check that you receive the confirmation email and run through all the flows by reviewing the `Add to Campaign` smart campaign in your Marketo program (note that if you are using your `@gitlab.com` email address, you will be removed from the flows to avoid inflating program totals for employee form fills)
* When using the URL in emails or other uses with utm values, about.gitlab.com page URLs (starting with about.gitlab.com) must have a `/` at the end of the page URL before the `?`. Omitting the `/` can cause the form not to display on the page. (Correct example: https://about.gitlab.com/webcast-example/?{{my.utm}}). Note that Marketo pages should not use a `/`.

## Landing page QA review steps

* Go to the page you are going to test:
  * For Marketo landing pages, open an incognito window and go to the URL of the page you are testing
  * For landing pages in an MR, when the pipeline approves, go to the review app and navigate to the page you are testing
* Check for spelling and grammatical errors (note: these should ideally be caught during copy review prior to landing page creation)
* Check that [conversion best practices](/handbook/marketing/demand-generation/campaigns/landing-pages/#landing-page-conversion-best-practices) are met
* Fill out the form and ensure all flow steps in Marketo trigger appropriately (i.e. you receive confirmation email, interesting moment applied, program membership updated, alert sent if applicable, etc.)
* Confirm correct location is arrived at post-form submit (i.e. correct form success message or a resulting thank you page)
