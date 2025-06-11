---
title: "Google Lighthouse"
description: "Google Lighthouse is used on our Buyer Experience site to measure the performance of our site over time."
---

Relevant links

* Link to project in GitLab: <https://gitlab.com/gitlab-com/marketing/digital-experience/lighthouse-ci-server>
* Documentation: <https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/server.md>

### What is the Google Lighthouse CI server?

* This is a web app that holds historical lighthouse scores tied to various commits. Currently, it is configured to run on the home page and the pricing page.
  * Runs lighthouse with every merge into `main`

### What do I look for in the lighthouse scores?

* Lighthouse is a tool that helps you make better sites. It is more worth our time to stress over not getting 100s on everything.
* Use to low-hanging fruit that can improve and monitor key pages.
* Use as evidence for larger site projects

### Where is the project's code for that web project?

* https://gitlab.com/gitlab-com/marketing/digital-experience/lighthouse-ci-server Whenever the main branch is updated, we need to upload the new version to Heroku. More notes from their [Heroku recipe](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/recipes/heroku-server/README.md)

### What are the costs associated with this web app?

* Heroku has removed their free tier. However, pricing is fairly modest. Dynos should be capped, so we should never pay more than this amount. We may need to upgrade if we hold too many database entries. At that point, we should consider self-hosting. GitLab has the appropriate infrastructure to run a web app like this one.
  * Server lowest paid tier ($7 USD/month)
  * Postgres database mini ($5 USD/month) 10k rows
    * We will blow past this eventually. At $9/mo, we can get 10 million rows. This is probably what we will need at the current production scoping. The lowest tier for an unlimited database size is $50/month which is an option.

### Where can I find any of the necessary credentials for this project, such as the build and admin tokens?

* They are added to the Buyer Experience project as CI variables. Currently, the build variable and URI variable are used. The admin variable is currently there without purpose and is used purely for convenience. That way, anyone with maintainer permissions in the BE project can go in there and find that if needed.
* Make sure that the CI variables are masked and are allowed to run on protected branches: https://docs.gitlab.com/ee/ci/variables/index.html#mask-a-cicd-variable
  * That may change, but can be reassessed.

### Who holds the Heroku account for this project?

* This Heroku account is tied to `jgarcia@gitlab.com`.
