---
title: "Tracking Web Events with Google Tag Manager"
---

## Google Tag Manager

Google Tag Manager (GTM) is a tag management tool that configures web tracking rules, sending data to various analytics and advertisement platforms such as Google Analytics 4, Google Ads, and LinkedIn Ads.

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/89ocZ61y9jI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

The GTM javascript code is placed in the `<head>` section across public-facing gitlab.com pages on the following web properties:

- about.gitlab.com
- page.gitlab.com
- learn.gitlab.com
- docs.gitlab.com
- gitlab.com (public pages only)

```js
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJXWQL');</script>
```

### Tag

A tag contains the event name from an activity that occurred on the website (e.g. page view, video play, link click, scroll), the destination of the data, and additional information about the event. Each tag contains a trigger that instructs the tag on how and when to fire (e.g. page load, form submission, link click). Optionally, the tag may contain variables to capture additional information about the event (e.g. page name, video title)

All tags must contain the appropriate cookie consent condition based on the OneTrust consent rules. GA4 tags must only fire if `analytics_storage` cookies are accepted by the website visitor. On the OneTrust banner, this is considered the "Performance and Analytics" cookie category (ID C0002).

Reference: https://support.google.com/tagmanager/answer/3281060

### Triggers

GTM has a variety of built-in event listeners when creating a new trigger, however, the more reliable built-in triggers we use are for clicks and scrolling. All other triggers are based on a custom event trigger (dataLayer), which is a small javascript code that sends information to the browser when an event occurs.

Reference: https://support.google.com/tagmanager/answer/7679316

#### Click Tracking

Each call-to-action (CTA) link on about.gitlab.com contains the following data attributes:

- `data-ga-location`: the section of the page (e.g. header, hero, body, feature, and footer)
- `data-ga-name`: the name of the element (e.g. free trial, sales, and buy premium)

Each CTA in the Utility header section of about.gitlab.com should contain:

- `data-nav`: the element name within the utility header section (e.g. register, login, logo)

Each link in the navigation menu should contain:

- `data-nav-levelone`: The navigation menu tab name
- `data-nav-leveltwo`: The navigation menu element name

A click-listening trigger on GTM will fire the associated GA4 event tag based on the data attributes. Links without data attributes will still be tracked, however the cta_location event parameter on GA4 will contain a generic “in-line” value and the cta_name event parameter will contain the link’s text and URL.

Reference: https://support.google.com/tagmanager/answer/7679320

#### Data Layer Tracking

Custom events on the website are tracked via the dataLayer method. A javascript code is placed on the website when the desired action is performed. The dataLayer code sends an event name and variables to the browser. A custom event trigger on GTM listens to the dataLayer event name from the browser.

Example of a dataLayer code:

```js
dataLayer.push({
  'event': 'videoStart',
  'videoTitle': ‘The One DevOps Platform’
});
```

For testing, simply type in “dataLayer” into the browser > developer mode > console after the event has been performed, before the next page loads. Optional: create a bookmarklet, entering the following into the URL field:

```js
javascript: (window.addEventListener('beforeunload', function(e) {e.preventDefault();e.returnValue = '';}));
```

The bookmarklet will prevent the page from loading, so you can see the dataLayer fire.

Reference: https://developers.google.com/tag-platform/tag-manager/web/datalayer

### Variables

Variables capture additional information about the event on the website, and are stored in the GA4 event tag as an event parameter. There are many built-in variables on GTM to retrieve data from the browser’s HTML, URL component, or cookies. If data is not readily available in the browser, the variable can be captured in the form of a dataLayer.

### Google Analytics Configuration

In order to utilize event parameters for reporting, the event parameter must be transform into a custom dimension under the Configure pane > Custom Dimensions tab. Select the event parameter name, scope (event or user), and assign it a user-friendly naming convention.
