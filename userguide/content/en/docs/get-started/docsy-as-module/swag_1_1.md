---
title: "Swag: Process & FAQ"
---

## Assets

* Google Sheet "Developer Relations Swag Coupon Codes & Delivery Tracking".
  * The file can be found in the Shared Google Drive `Contributor Success`, and is titled "[GitLab] Developer Relations Swag Coupon Codes & Delivery Tracking"
* Swag Redemption portal
  * https://gitlabcommunity.orderpromos.com
* Inventory Portal
  * https://gitlabstore.mybrightsites.com

## Swag Redemption Portal

This portal shows the items you can claim, given the right coupon code. This is the link sent out to Wider Community Members.

## Inventory Portal

This portal shows everything we've ordered and that is in stock & ready to ship.
Access can be requested through an [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Access_Change_Request). Mention "MyBrightSites" as the tech stack, and ping a manager from the [Developer Relations department](/handbook/marketing/developer-relations/).

As of 2023-03-20, this tool is not present yet in the [tech_stack.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) file yet. This is a known issue that will soon be resolved. Only Boundless (the external vendor) has the capabilities to provision accounts today.

A list of the items in our inventory with the amount of items left to be claimed is accessible in the Google Sheet.

## Sending Swag codes

Note: You can also watch a recorded screencast:
<details>
<summary>Screencast</summary>
<div style="position: relative; padding-bottom: 83.46213292117464%; height: 0;"><iframe src="https://www.loom.com/embed/caebea98b6d84d33abb89737813d4231" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
</details>

1. Go to the Google Sheet "Developer Relations Swag Coupon Codes & Delivery Tracking".
1. Go to the tab "One-time Coupon codes"
1. Add the `Email recipient` to a code of the corresponding price Tier.
   * See [Finding Community Member Contact information](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows.html#contacting-contributors) how to obtain this information.
1. Select a `Prize` level.
   * First MR Merged
   * Grand Prize (Event result link required)
   * Second Prize (Event result link required)
   * Participation Prize (Event result link required)
   * MVP
   * Notable Contributor
   * Undefined
1. Select `GitLab` at the top of the menu bar
   * Note you will need to grant authorization in your Gmail account and may receive a warning to proceed
1. Click `Send Email`
1. Enter the row you would want the system to process and verify & confirm the email to be sent out.
1. Verify the coupon code matches the correct prize Tier (e.g. T3XXXX -> Tier 3, etc)
1. The system automatically changes the `Email sent?` column to Yes, but it is always good to verify.
1. The contributor will have received an email, you can verify the sent email from your own outbox.

## Swag Nomination

If you think that a community member, contributor, or GitLab team member deserves a prize, [nominate them for some swag](/handbook/marketing/developer-relations/contributor-success/community-appreciation/#nomination-process)! This also applies if you've reached an important milestone with your contributor (e.g First MR merged).

## Tiers & Categories

### Tiers

Currently we work with 3 value tiers. A coupon tier describes the roughly montary value you are able to claim in the gift shop.

* Tier 1 Code
  * You can claim 3 items.
  * You have access to category 1 & 2
  * Expense range is on average $25
* Tier 2 Code
  * You can claim 4 items.
  * You have access to category 1,2 & 3
  * Expense range is on average $50
* Tier 3 Code
  * You can claim 6 items.
  * You have access to category 1,2 & 4
  * Expense range is on average $100

### Categories

* Category 1
  * You can claim 3 items
  * Examples include Keychain, a set of pens, a journal or sticker tattoos.
  * The maximum monetary value of an item is between $2-$10
* Category 2
  * You can claim 1 item
  * Examples include a GitLab T-Shirt
  * The maximum monetary value of an item is between $10-$15
* Category 3
  * You can claim 1 item
  * Examples include a GitLab Hoodie
  * The maximum monetary value of an item is between $15-$35
* Category 4
  * You can claim 1 item
  * Examples include a GitLab Hoodie or a Backpack
  * The maximum monetary value of an item is between $30-$65

For details on what is available in each category, please see the Inventory tab in the Google Sheet "Developer Relations Swag Coupon Codes & Delivery Tracking".

## Swag Order Process overview

1. GitLab will requests new swag orders through emailing ssporer@boundlessnetwork.com
   * Quantity of items
   * Date by which the inventory needs to be fulfilled
   * Which category this item belongs to
1. Boundless recommends planning swag requests 2.5 weeks in advance to order, especially for international shipping because there can be issues with customs.
1. Provide the basic order requirements, optionally with the requirement of a custom notecard or a dedicated redemption page.
1. Boundless places the order so that it's in the inventory.
1. GitLab decide in which category the items belong
1. Boundless adds the items to the store front.

## External access to swag stores

There is a possibility to create access for, say, Meetup organizers, to self-service their required swag within our budget. Please file an access request and assign this to your manager.

## Additional resources

* [Merchandise handling](/handbook/marketing/brand-and-product-marketing/brand/merchandise-handling/)
* [Field Marketing](/handbook/marketing/field-marketing/)
* [Email templates for sending swag links](/handbook/marketing/developer-relations/contributor-success/community-appreciation/#templates-for-sending-swag-links)
* [Finding Community Member Contact information](/handbook/marketing/developer-relations/contributor-success/community-appreciation/#finding-community-member-contact-information)

## FAQ

### Is there any reason why Boundless would need to follow up if someone uses their coupon?

We will need a way to verify that swag has been expensed, to verify that our swag budget is not exceeded, or calculate how much budget is left i.e. for quarterly reports.
Once individuals have ordered swag, Boundless updates the spreadsheet to let us know if the coupon was redeemed. We need to make sure it gets delivered. They were some issues with deliveries recently - getting stuck at customs, etc. Sometimes it costs more than planned so they have to follow up and let us know if there's additional invoicing.

### Is there a documented process how to request new codes?

Create an issue within the [Developer Relations - Community Building](https://gitlab.com/gitlab-com/marketing/community-relations/community-building/-/issues) project and assign to @sugaroverflow (Fatima), and ping `@gitlab-org/developer-relations/contributor-success`

### I don't understand why we should plan ahead

This is a strong request from Boundless. They need to move orders into the inventory so they need us to plan ahead and request number of items, which items, and by which date. After that, we can let contributors decide what to get.

If you'd like to make it easier, you could plan ahead for a lot of items, pay for the invoice and ask for the items to be added to an existing or new category

### Can I have my own portal for my own program?

No, we simplified the historical situation on purpose as it was difficult to understand what we had in stock, difficult to send out items and a lot of `busy work`. The reason it is a single front, with Tiers & Categories allows us to scale and minimize human operations.

### Can we send to an individual with an appreciation note?

Yes. You can request to add custom notecards to kits.

* Boundless needs the verbiage to print on the card
* Generally 3 x 5” with a GitLab logo on top

### Who can help me with a declaration letter / support with getting Swag items released from customs?

Please email Savanah at Boundless via ssporer@boundlessnetwork.com and she can assist you with getting Swag items cleared.
