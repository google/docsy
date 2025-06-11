---
title: Data Dictionary
description: >-
  Our goal is to ensure the consistency of data attribute keys and values for tagging the Marketing site. This will result in properly formatted event data getting added to the dataLayer and sent to Google Analytics.
---

## Digital definitions

Our goal is to ensure the consistency of data attribute keys and values for tagging the Marketing site. This will result in properly formatted event data getting added to the dataLayer and sent to Google Analytics.

## Data Attribute Usage

Each link on the Marketing Site should have the two following data attributes:

- `data-ga-name`
- `data-ga-location`

An example of this usage for a free trial button might be as follows:

### HTML

```html
<a href="/free-trial/" data-ga-name="free trial" data-ga-location="header">Get free trial</a>
```

### HAML

```ruby
%a{href: '/free-trial', :"data-ga-name" => "free trial", :"data-ga-location" => "header"}
```

Or preferrably:

```ruby
= link_to "Get free trial", "/free-trial", :"data-ga-name" => "free trial", :"data-ga-location" => "header"
```

### What is the Name attribute?

The `name` should be, in English, what the button/link/input/etc says or points to.

An example for a page with a series of "Learn more" links that lead to different customer pages might have a `name` like `goldman sachs link`. *Please note:* we prefer lower case letters.

### What is the Location attribute?

The purpose of the `location` attribute is to discern between multiple links with the same `name` on the same page. The `location` attribute is primarily for our top pages (see [this link](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/epics/80) for our current top 50 pages). For the lower priority pages, simply having the `name` attribute should suffice.

| Key | Definition | Example |
| --- | ---------- | ------- |
| nav | This link is found in the navigation of the page. | `data-ga-location="nav"` |
| header | This link is found in the header of a page. | `data-ga-location="header"` |
| body | If this link is the only one of its kind in the main body of the page (not the hero, not the nav/footer), you can use body.  | `data-ga-location="body"` |
| {{section}} | If there are multiple links of this kind within the body, consider naming the location something descriptive about what section this particular link can be found under. Examples might be "features" or "benefits" | `data-ga-location="features"` |
| footer | This is for links in the footer of the page. The footer is the very bottom section with the purple background.  | `data-ga-location="footer"` |

### Utilities

To facilitate finding links contained in markdown inside files that do not highlight markdown, developers may use this [regular expression](https://en.wikipedia.org/wiki/Regular_expression):

```text
(?:__|[*#])|\[(.*?)\]\(.*?\)
```

## Google Enhanced Ecommerce

We use Google's [enhanced ecommerce for tag manager](https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce) to collect information across our web properties.

Our data needs to confrom to four APIs:

1. [Product impressions](https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce#product-impressions)
1. [Add product](https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce#add)
1. [Checkout](https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce#checkout)
1. [Purchases](https://developers.google.com/analytics/devguides/collection/ua/gtm/enhanced-ecommerce#purchases)

The values we use in that API are described below by key/value pair, where arrays of each value are arrays of possible values. In practice, only one should be used:

- `name`: `[Ultimate, Premium, Compute, Storage]`
- `id`: `[0001, 0002, 0003, 0004]`
- `price`: `[99, 19, 10, 60]`
- `brand`: `GitLab`
- `category`: `DevOps`
- `variant`: `[SaaS, Self-Managed]`
- `quantity`: `Integer`
- `affiliation`: `GitLab`
- `option`: `Visa`
- `revenue`: `"Total Price" eg 289.34`
- `tax`:`"Tax Amount" eg: 13.45`
- `shipping`:`0`
- `coupon`: `"Leave Empty"`

So an example product object might look like this:

```js
{
  name: 'Ultimate',
  id: '0001',
  price: '99',
  brand: 'GitLab',
  category: 'DevOps',
  variant: 'Saas',
  quantity: 1,
  affiliation: 'GitLab',
  option: 'Visa',
  revenue: '289.34', // The total price paid, after taxes, fees, etc.
  tax: '13.45',
  shipping: '0',
  coupon: null,
}
```

This specification was derived from the work [Empirical Path put together](https://gitlab.com/groups/gitlab-com/marketing/digital-experience/-/uploads/f252fc80f1dd6799d19e4d57d6b4c239/Gitlab_GTM_DataLayer_Spec.pdf).
