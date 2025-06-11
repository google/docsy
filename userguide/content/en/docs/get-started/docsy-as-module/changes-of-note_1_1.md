---

title: "Digital Marketing changes of note"
---







## What is a change of note?

We need to keep track of instances where we make a change that can impact fundamental reporting, or change the behavior of a system we rely on to deliver campaigns.

This page collects those changes so we can quickly triangulate which change caused an issue that started on a certain day, or with certain behavior.

### Google Tag Manager

11 June 2020 — Revamped event structure to take full advantage of Google Analytics 360

13 September 2019 - Added Bing Ads conversion tracking tags.

9 September 2019 - Added second Facebook pixel to match new Business Manager account managed by PMG. We will need to remove old pixel after completed transition.

7 August 2019 - Added Snowplow script to about.gitlab.com.

24 June 2019 — Added ClientID custom dimension to Google Analytics.

19 June 2019 — Added Pendo tag.

18 June 2019 — Added LinkedIn tags to track conversions.

17 June 2019 — Removed Rollworks tag.

14 June 2019 — Added Facebook tags to track conversions.

21 May 2019 — Discovered using `Window Loaded` caused some visitors landing page to record as (not set). Changed Google Pageview tag to fire with DOM Ready to correct problem introduced with Window Loaded, while still recording tags from blog posts.

10 April 2019 — Added Rollworks tag.

27 March 2019 — Added DemandBase tag.

8 February 2019 — Set Google Pageview tag to fire with `Window Loaded` event to populate the dataLayer with tags from blog posts.

20 December 2018 — Deployed updated GitLab Google Tag Manager container with new tag system.
