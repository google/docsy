## Marketing Third-Party Scripts

A marketing script, pixel, or tag is a small piece of code embedded on a web page by a third-party provider, typically an advertising or analytics platform, to gather data or perform specific functions. These scripts can track user interactions, collect demographic information, or enable targeted advertising by monitoring user behavior. They are often used for website analytics, ad retargeting, conversion tracking, or audience segmentation. While these tools can be valuable for optimizing marketing campaigns and enhancing user experiences, they also need to comply with privacy and security policies, as they may share data with third-party providers.

### List of Current Platforms

|Platform|Cookie Category|Trigger|DIR Team(s)|
|:----|:----|:----|:----|
|Google Ads|Advertisement|All pageviews, conversions|Digital Marketing|
|LinkedIn|Advertisement|All pageviews, conversions|Digital Marketing|
|BidTellect|Advertisement|All pageviews, engagement|Brand|
|Trade Desk|Advertisement|All pageviews, engagement|Brand|
|Facebook|Advertisement|All pageviews, engagement, conversion|Digital Marketing, Brand|
|Reddit|Advertisement|All pageviews, engagement|Brand|
|Campaign Manager (Floodlight)|Advertisement|All pageviews, engagement, conversion|Digital Marketing, Brand|
|Microsoft Ads|Advertisement|All pageviews, conversions|Digital Marketing|
|Google Analytics|Analytics|All pageviews, engagement, conversion|Marketing Analytics,Digital Experience|
|Snowplow|Analytics|All pageviews|Marketing Analytics|
|QuantumMetric|Analytics|All pageviews, engagement, conversion|Marketing Analytics,Digital Experience|
|Adobe Measure (Bizible)|Analytics|All pageviews|Marketing Operations, Marketing Analytics|
|Marketo|Analytics|All pageviews|Marketing Operations|
|PathFactory|Functional|All pageviews|Marketing Operations, ABM|
|6Sense|Functional|All pageviews|Marketing Operations, ABM|
|Qualified|Functional|Most pageviews|Marketing Operations|
|Zoominfo|Functional|Most pageviews|Marketing Operations|

Table last updated: 2024-01-26

### The Process

To request the placement of a new tag on the website, please first ensure that the platform is listed on [tech_stack.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml), as all platforms must undergo approval by the legal team.

Once the platform has received legal approval, create a new issue under the [Marketing Analytics](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/issues/new) project, utilizing the `/script_onboarding.md` template. Complete the "Script Context" sections to the best of your abilities. The issue will be automatically assigned to @DennisCharukulvanich, who will assess the remaining tasks.

### Google Tag Manager

The third-party script will be configured on Google Tag Manager, a platform that manages all configurations of third-party scripts. A new tag will be created based on instructions provided in the issue. Each tag will also contain a cookie category condition to ensure the script only fires upon consent. For example, LinkedIn tags will only load if the user consents to Ad Targeting cookies from the OneTrust banner or Preference Center. Review OneTrust geolocation rules in [this handbook](/handbook/marketing/digital-experience/onetrust/#banner-rules).

### Content Security Policy

The Content Security Policy allow-list will also need updating, otherwise, CSP will block the tag from loading. A series of steps outlined in the issue template are required if the tag is placed on the gitlab.com environment.
