---
title: "Known knowns & feature wishlist"
description: "Things we know are not great and our wishlist of features"
---

## Known Knowns

This are things we know aren't great about our Contentful integration with the Marketing site. They are "gotchas". We are documenting them here for transparency.

1. Just for reference, the slug field in the PAGE Content Type should not be marked as a localization field, if this field is checked it will break all localized pages in BE where the content comes from Contentful. (edited)
2. [Diff Versioning in Contentful](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/3226) isn't great. Infact... it's non-existent.
3. Error handling: Unless a user is checking the most recent pipeline after publishing something in contentful, they may not be aware of a problem with the content. Users may subscribe to the #dex-alerts slack channel to be notified when alerts occur, but the name of the alerts will be the name of the most recently merged branch in Buyer Experience, rather than the page that was edited in the CMS.
4. Draft content has the potential to break pipelines for all review apps, since review apps read contentful draft content.

## Wishlist

This are a wishlist of features we'd like to see from Contentful or things we build.

1. To solve all the problems of the universe.
