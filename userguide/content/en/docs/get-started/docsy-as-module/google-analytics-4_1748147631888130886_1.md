---
title: "Google Analytics 4"
---

## Google Analytics 4

[Google Analytics 4](https://analytics.google.com/analytics/web/#/p267713722/) (GA4) is a web analytics tool and the successor to Universal Google Analytics, which was discontinued in July 2024. GA4 provides metrics and dimensions for website traffic and user experience on GitLab's web properties, including:

* about.gitlab.com
* docs.gitlab.com
* page.gitlab.com
* learn.gitlab.com
* university.gitlab.com
* forum.gitlab.com
* customers.gitlab.com (checkout pages)
* gitlab.com (registration pages)
  * /sign_up/
  * /users/sign_in
  * /users/almost_there
  * /users/sign_up/welcome
  * /users/sign_up/company/new
  * /users/sign_up/groups/new
  * /users/terms
  * /users/sign_up/groups
  * /trial_registrations
  * /trial_registrations/new
  * /trials/new
  * /profile/usage_quotas
  * /subscriptions/new
  * /subscriptions/buy_minutes

### Google Consent Mode

To ensure compliance with privacy requirements related to cookie consent, GA4 employs a hybrid approach that combines actual data (via 1st-party cookies) and anonymized data (cookieless pings). When a website visitor declines analytics cookies, Google Analytics refrains from placing any cookies in the browser. Instead, it transmits a cookieless payload that includes user agent information and geolocation data to Google Analytics servers. This updated version of GA4 enhances data integrity by recording events even when cookies are denied, effectively capturing all events. However, without client IDs for denied consent, conversions cannot be properly attributed. In cases where users have enabled DNT (Do Not Track) or GPC (Global Privacy Control) signals in their browser settings, no data is collected whatsoever.

OneTrust is the cookie consent managedment tool. View the banner matrix and geolocation rules in data collection on [this handbook](/handbook/marketing/digital-experience/onetrust/#consent-models). OneTrust cookie categories are mapped to Google Consent Mode categories.

### Events

All data collected in GA4 is tracked as an event, each of which can contain parameters to store additional information. Below is the complete list of events along with their associated parameters as of July 2024:

| Event Name                      | Event Parameters                                                                                       | Event Description                                                                                                                     |
|---------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| cta_click                       | cta_click_location<br>cta_click_name                                                                  | Link clicks, including the page section and element name.                                                                             |
| navigation_menu_click           | navigation_menu_level1<br>navigation_menu_level2                                                      | Link clicks from the navigation menu                                                                                                  |
| video_start                     | video_title<br>video_id<br>video_host                                                                | Video play, including title, ID, and hosting platform.                                                                                |
| video_progress_25               | video_title<br>video_id<br>video_host                                                                | Video play pass the 25% milestone, including title, ID, and hosting platform.                                                         |
| video_progress_50               | video_title<br>video_id<br>video_host                                                                | Video play pass the 50% milestone, including title, ID, and hosting platform.                                                         |
| video_progress_75               | video_title<br>video_id<br>video_host                                                                | Video play pass the 75% milestone, including title, ID, and hosting platform.                                                         |
| video_complete                  | video_title<br>video_id<br>video_host                                                                | Video complete, including title, ID, and hosting platform.                                                                            |
| pricing_faq_expand              | pricing_faq_question                                                                            | FAQ toggle to expand on the Pricing page, including the FAQ question.                                                                 |
| pricing_faq_collapse            | pricing_faq_question                                                                           | FAQ toggle to collapse on the Pricing page, including the FAQ question.                                                               |
| pricing_feature_expand          |                                                                                                        | Feature section toggle to expand on the Pricing page.                                                                                  |
| pricing_feature_collapse        |                                                                                                        | Feature section toggle to collapse on the Pricing page.                                                                                |
| pricing_feature_info_click      | pricing_feature                                                                                | Pricing page bullet point info click, including the feature name.                                                                     |
| pricing_user_calculator         |                                                                                                        | User calculator on the /pricing/premium/ and /pricing/ultimate/ page. The trigger will fire when a number is inputted into the fields. |
| account_register                | register_method<br>register_type                                                                     | Account registrations on the Trials Registration and Sign Up pages, including form submissions and SSO clicks.                        |
| saas_trial_form                 |                                                                                                        | Form submission on the "Start Your Ultimate Trial" page. This is a conversion point for SaaS trial. Returning users can reach this page with an existing GitLab account. |
| saas_trial_company              | saas_trial_company_type                                                                               | Form submission on the "About Your Company" page. This is a conversion point for SaaS trial. New users can reach this page from the account registration flows. |
| saas_trial_create_group         |                                                                                                        | Form submission on the "Almost There" page within the SaaS trial. Returning users can reach this page after the "Start Your Ultimate Trial" page. |
| saas_trial_create_group_project |                                                                                                        | Form submission on the "Create or Import Your First Project" page. New users can reach this page after the "About Your Company" page.   |
| saas_trial_import_project       | saas_trial_import_project_platform                                                              | Click on a platform CTA on the "Create or Import Your First Project" page. New users can reach this page after the "About Your Company" page. |
| form_submit                     | form_type<br>form_id                                                                                | Lead generating form submissions across the About, Page, and Learn subdomains, including the form ID and type.                       |
| scroll_depth_25                 |                                                                                                        | Vertical page scroll passing the 25% depth.                                                                                            |
| scroll_depth_50                 |                                                                                                        | Vertical page scroll passing the 50% depth.                                                                                            |
| scroll_depth_75                 |                                                                                                        | Vertical page scroll passing the 75% depth.                                                                                            |
| scroll_depth_100                |                                                                                                        | Vertical page scroll passing the 100% depth.                                                                                           |
| search_suggestion               | searched_query                                                                                        | Site search suggestion click, including the searched query.                                                                           |
| search_result                   | searched_query                                                                                        | Search result load, including the searched query.                                                                                     |
| search_result_click             | searched_query                                                                                        | Click on a search result item, including the searched query.                                                                          |
| search_filter                   | searched_query<br>search_source_name                                                                 | Filter selection on the search result page, including the filter name and searched query.                                             |
| search_sort                     | searched_query<br>search_sort_name                                                                   | Sorting the search result, including the sort name and searched query.                                                                |
| features_stage_click            | features_stage                                                                                        | Stage tab clicks on the Features page, including the stage name.                                                                      |
| features_category_click         | features_stage<br>features_category                                                                  | Category click for each stage on the Features page, including the stage and category name.                                             |
| cta_click                       | cta_click_location<br>cta_click_name<br>features_stage<br>features_category<br>features_card         | Link click on the Features page, including the stage, category, Features card title, and element name.                                 |
| features_filter                 | features_stage<br>features_filter_tier                                                               | Filtering cards by pricing tier on Features page, including the stage and tier.                                                        |
| language_selection              | language_selected                                                                                    | Localization language drop-down menu selection                                                                                         |
| qualified_event                 | "qualified_category<br>qualified_action"                                                              | Qualified chat bot interactions: conversation started, email submission, and meetings booked.                                         |
| navattic_demo                   | "navattic_event_name<br>navattic_flow_name<br>navattic_project_name<br>navattic_click_url<br>navattic_step_number" | Navattic interactive demos (e.g. https://about.gitlab.com/small-business/)                                                             |
| 6sense_loaded                   | "Sixsense Employee Range<br>Sixsense Confidence<br>Sixsense Country<br>Sixsense Blacklisted<br>Sixsense Sales Segment<br>Sixsense Company<br>Sixsense Industry<br>Sixsense Revenue Range" | 6sense web script successfully loads per pageview. The event parameters are then stored on the user-scope, which is attached to the client ID on subsequent events. |
| saas_trial_duopro               |                                                                                                        | Duo Pro trial registration on gitlab.com/-/trials/duo_pro/new - 4/1/24                                                                 |

### Custom Dimensions

Out of the box, GA4 includes dimensions like device and geolocation that can further break down events. Custom dimensions are set up to enhance the analysis of website visitors. 6sense, an ABM tool that identifies visitors at the company level, is integrated with the GA4 data set. The following 6sense dimensions are set on the user scope, which applies to all events for a particular client ID if the user consents to analytics cookies.

| Dimension              | Description                                     | Example Value         | Snowflake Column     |
|------------------------|-------------------------------------------------|-----------------------|----------------------|
| Sixsense Employee Range| The visitor’s company employee range            | 1,000 - 4,999         | SSENSE_EMPLOYEE_RANGE|
| Sixsense Confidence    | How confident 6Sense is at identifying the user| Low, moderate, high   | SSENSE_CONFIDENCE    |
| Sixsense Country       | The visitor’s company country                   | United States         | SSENSE_COUNTRY       |
| Sixsense Blacklisted   | If the visitor’s company is blacklisted        | false                 | SSENSE_BLACKLISTED   |
| Sixsense Sales Segment | The visitor’s company scale based on employee range | SMB, Enterprise, Mid-market | SSENSE_SALES_SEGMENT |
| Sixsense Company       | The visitor’s company name                     | GitLab                | SSENSE_COMPANY       |
| Sixsense Industry      | The visitor’s company industry                 | Software and Technology | SSENSE_INDUSTRY  |
| Sixsense Revenue Range | The visitor’s company revenue range            | $1M - $5M             | SSENSE_REVENUE_RANGE |

### Ecommerce

The eCommerce Purchase report, under the Monetization tab, details e-commerce activities on the [Pricing](https://about.gitlab.com/pricing/) and [Checkout](https://customers.gitlab.com/subscriptions/new?plan_id=2c92a01176f0d50a0176f3043c4d4a53&test=capabilities) pages. Item parameters can be used as dimensions to break down the desired event. The following table outlines the e-commerce events and the associated item parameters.

| Event Name      | Event Description                                              | Event Parameters                                        | Item Parameters                                                                                   |
|-----------------|----------------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| view_item       | On "Buy Premium" or "Buy Ultimate" CTA click on the Pricing page.| -                                                    | item_id (01 = Ultimate, 02 = Premium)<br> item_name (Ultimate, Premium)<br> item_category (DevOps) |
| add_to_cart     | On "Purchase SaaS" or "Purchase Self Managed" click on the Pricing page.| -                                                    | item_id<br> item_name<br> item_category<br> item_category2 (SaaS)                                 |
| begin_checkout  | Checkout page load.                                            | -                                                    | item_id<br> item_name<br> item_category<br> item_category2                                       |
| purchase        | A successful transaction on the Checkout page.                  | transaction id<br> revenue<br> currency<br> tax           | item_id<br> item_name<br> item_category<br> item_category2<br> item_price<br> item_quantity       |

Note: The purchase event is not to be confused with annual recurring revenue, as it only tracks the initial self-service transaction, not the annual recurring transactions.

### Key Events

A “key event” is a conversion metric that measures important events on the website that align with business goals.  Events collected in GA4 can be configured as a conversion. The following table outlines a list of conversions and its definition based on event conditions.

| Conversions               | Event Conditions                                                                  | Description                                                                                                                |
|---------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| `generate_lead`             | `form_submit` event where the `form_type` dimension does not equal "self managed trial" or "newsletter" | All Marketo form submissions across gitlab.com web properties, excluding blog subscription and self-managed trials.      |
| `saas_trial`                | `saas_trial_form` event and `saas_trial_company` event where the `saas_trial_company_type` equals "ultimate_trial" | SaaS trial form submissions on the [About Your Company](https://gitlab.com/users/sign_up/company/new) and [Start Your Free Ultimate Trial](https://gitlab.com/-/trials/new) pages.                            |
| `self_managed_trial`        | `form_submit` event where the `form_type` dimension equals “self managed trial”        | Self-managed trial form submission on the [Free Trial](https://about.gitlab.com/free-trial/?hosted=self-managed) page.                                                                  |
| `purchase`                  | `purchase` event                                                                    | A successful transaction on the Checkout page.                                                                              |
| `qualified_email_submit`    | -                                                                                 | An email submission via the Qualified chat bot.                                                                             |
| `qualified_meeting_booked`  | -                                                                                 | A scheduled meeting with Sales via the Qualified chat bot.                                                                  |

### Attribution

The Acquisition reports under the Reports pane offers an overview of traffic’s referrer based on the session. Key metrics can be paired with the following dimensions: default channel grouping, source, medium, and campaign.

When UTM parameters are applied to the landing page URL, Google Analytics will sort the traffic based on the UTM parameters or `document.referrer` (if UTMs are not available) into the correlated channel grouping, source, medium, and campaign. Read more about the [UTM strategy here](/handbook/marketing/utm-strategy/).

Conversions can be selected from a drop-down menu located in the top left corner of the reporting UI.

To view different attribution models, view the Model Comparison report under the Advertising pane. Select the desired attribution model to analyze the advertising platform’s impact on conversions according to the user’s journey. For example, display ads may be part of a brand awareness strategy, and may drive fewer last-click conversions; however, may be more impactful at driving first-click conversions. Read more about the GA4 attribution models [here](https://support.google.com/analytics/answer/10596866#models&zippy=%2Cin-this-article).

### Exploration

The [Exploration](https://analytics.google.com/analytics/web/#/analysis/p267713722) pane provides a user-friendly method to create and visualize a custom analytics report. Dimensions and events can be drag-and-drop, and the visualization will update in real-time. Available visuals: tables, donut charts, line charts, scatter plots, bar charts, and maps. Within the table visual, different techniques can be applied: free form, cohort, funnel, segment overlap, path exploration, user exploration, and user lifetime. The exploration report provides a self-service way to generate a report or monitor trends over time. Refer to the Events Google Sheet to start building your custom report.

## Data Availability for Advanced Visualization

### Data Flow

GA4 natively exports daily events into BigQuery project name `mktg-goog-analytics4-5e6dc7d6`. The Enterprise Data team [exports the GA4 events](https://gitlab.com/groups/gitlab-com/marketing/-/epics/5047) from BigQuery into these Snowflake tables:

* `PROD.WORKSPACE_MARKETING.WK_GOOGLE_ANALYTICS_4_EVENTS`
* `PROD.WORKSPACE_MARKETING.WK_GOOGLE_ANALYTICS_4_PSEUDONYMOUS_USERS`

GA4 data is available from 12/24/2023 onwards. Please use GA360 tables for prior historical data:

* `PROD.LEGACY.GA360_SESSION_HIT`
* `PROD.LEGACY.GA360_SESSION`

### Join Product Data

Snowplow is a SQL-based web analytics tool and the main tool for analyzing product data. Snowplow includes a column that pulls in the GA4 client ID, made available by the Analytics Implementation team leveraging the [GA cookie plug-in from Snowplow](https://gitlab.com/gitlab-org/gitlab/-/issues/469410). The client ID can be used as a primary key between GA4 and Snowplow. The namespace ID in Snowplow is available to join with other tables regarding web-to-product usage.

* `PROD.COMMON.FCT_BEHAVIOR_WEBSITE_PAGE_VIEW`
* `PROD.COMMON_PREP.PREP_SNOWPLOW_SESSIONS_ALL` (to be updated to a new table)

### Join SFDC Data

Marketo forms include hidden fields that collect the GA4 client ID on about.gitlab.com, page.gitlab.com, and learn.gitlab.com. Look for the `GACLIENTID__c` field to find it. Marketo will then [feed the client ID to SFDC tables](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/1639), allowing us to analyze web-to-sales assisted subscriptions.

### Dashboards

Tableau is recommended for advanced BI data visualization, particularly when connecting web data to other sources (e.g., linking web visitors to paid subscriptions), leveraging the GA client ID.

For visualization focused solely on web data, consider using Looker Studio for its intuitive drag-and-drop interface. This allows for faster dashboard creation without the need to create a SQL CTE for each metric, unless you're using BigQuery.
