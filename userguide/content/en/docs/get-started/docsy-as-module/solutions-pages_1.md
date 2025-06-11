---
title: "Contentful CMS Solutions Pages"
description: "Editing and making unique Solutions pages with Contentful and custom components from Buyer Experience"
---

## Solutions Pages

The Digital Experience team has selected the solutions pages (`/solutions/*`) to be managed and served within Contentful. This page is designed to allow users to create a new solutions page from scratch using Contentful as CMS.

For in-depth information about Contentful CMS, please visit our [Resource Deep Dive page](/handbook/marketing/digital-experience/contentful-cms/#resource-deep-dive).

## How to make a solutions industry page from scratch

### Basic structure

For now we only have an `industry template` to choose from in order to create solutions pages. More options will be added to this documentation in the future.

#### Setting up your URL in the `slug` field

A solutions template should be an entry of content type `Page` and also have `solutions` somewhere in its URL as a slug for it to be built with Solutions template. A common approach is to name your page slug as `solutions/<your-page-name-here>`. However, you could also have 2 level nested solutions pages that would have a slug composed like `solutions/<your-page-here>/<child-page-here>`.

![How to configure slug fields](/images/handbook/contentful/solutions-page-slug.png)

Note that there is not a leading nor a trailing slash in the URL. Thi is important to take into account for creating solutions pages.

#### Metadata Configuration

To configure SEO metadata attributes of a solutions page, it's necessary to create a reference entry using the [SEO](https://app.contentful.com/spaces/xz1dnu24egyd/environments/master/content_types/seo/fields) Content Type.

Then, you can link the SEO configuration back in your page, as shown below.

![How to link SEO metadata to page](/images/handbook/contentful/solutions-page-seo.png)

#### Industry template declaration

Furtheremore, you also need to declare your solutions page as an `industry template`. To do so, add the following JSON attributes in the `schema` field of your page for setting it up as an industry template.

```json
{
    "template": "industry"
}
```

![How to declare your page as industry template](/images/handbook/contentful/solutions-page-industry-template.png)

A basic solutions page with the `industry template` is composed of a `Hero`, a list of components and a `NexStep` component (more on this later) at the bottom of the page. You can rearrange the components to suit a specific order within Contentful, as long as they are named properly. You can only choose from a set of supported components for this template.

A component has to be named within the `industry template` for it to be recognized and compile correctly. This means that a component with no name, an error in its name or if it's component not recognized by the template.

_Some_ existing pages that follow the solutions `industry template` are:

- `/solutions/agile-delivery/`
- `/solutions/value-stream-management/`
- `/solutions/continuous-integration/`
- `/solutions/security-compliance/`
- `/solutions/delivery-automation/`
- `/solutions/public-sector/`
- `/solutions/startups/`
- `/solutions/startups/join/`
- `/soluitons/open-source/`
- `/solutions/open-source/join/`
- `/solutions/open-source/partners/`
- `/solutions/nonprofit/`
- `/solutions/nonprofit/join/`

### Available components

Components that can be used as of today within the solutions `industry template`.

Most used components:

- `SolutionsHero`
- `BySolutionValueProp`
- `BySolutionIntro`
- `ByIndustryIntro`
- `ByIndustryQuotesCarousel`
- `Copy`
- `CopyMedia`
- `SolutionsResourceCards`
- `TierBlock`
- `Faq`
- `QuotesCarousel`

Can still be used as components:

- `AnalyticsInsightsCustomerSuccessCard`
- `AnalyticsInsightsFeatured`
- `AnalyticsInsightsShowcaseFaq`
- `GroupButtons`
- `NewQuotesCarousel`
- `NextStep`
- `NextStepAlt`
- `PricingTiers`
- `ReportCta`
- `SlpBreadcrumb`
- `BySolutionAccordeon`
- `BySolutionBenefits`
- `BySolutionCasestudies`
- `BySolutionHero`
- `BySolutionLink`
- `BySolutionListImage`
- `BySolutionShowcase`
- `BySolutionValueProp`
- `ByIndustryCaseStudies`
- `ByIndustrySolutionsBlock`
- `OpenSourceBlog`
- `OpenSourceFormSection`
- `OpenSourcePartnersGrid`
- `OverviewBlocks`
- `PartnersGridFull`
- `CtaBlock`
- `ResourceCarousel`
- `SolutionsHero`
- `SolutionsVideoFeature`
- `CustomerLogos`
- `EducationCaseStudyCarousel`
- `StartupsIntro`
- `StartupsLink`
- `StartupsOverview`
- `NonprofitIntro`
- `NonprofitOverview`
- `SingleCtaBlock`

#### How to include a Sidenav

A SideNavigation is declared like any other component at the root `pageContent` field of the Page you are building.

![How to include a Sidenav](/images/handbook/contentful/solutions-page-sidenav.png)

##### How to include components within a Sidenav

`SideNavigation`s are configured within contentful in a way that they can hold components nested within it (components that have links).

![How to include components within a Sidenav](/images/handbook/contentful/solutions-page-sidenav-components.png)

We can see in the image that the components are nested inside the `SideNavigation` instead of the root content of your page.

#### NextStep component

You can have a classic `NextStep` component at the bottom of your page by default, which will always show up at the bottom of the page.

Otherwise, you could include a `NextStepAlt` attribute to set this variant of the `NextStep` component. Just as before when we declared our page to follow the industry template, we can declare it to use the alternative version of the NextSteps component. You would then have a `schema` field in your page that looks similar to this:

```json
{
    "template": "industry",
    "next_step_alt": true
}
```
