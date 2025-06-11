---
aliases: /handbook/engineering/development/incubation/jamstack/js-runtimes-survey.html

title: Jamstack - User Survey
---

## Jamstack user survey

in January 2023 the Jamstack SEG conducted a user survey to identify the communities' priorities around creating a Javascript runtime capability for GitLab.

This came at a time where I was making similar progress with both of the following work tracks:

- a Cloudflare Workers Integration using the Cloudflare API
- a V8 Javascript runtime integration into GitLab Pages directly
Both of these tracks will eventually result in users being able to run server-side Javascript functions without actually needing to deploy a server.
Both implementations come with large opportunities and risks, so I needed to factor in our user's priorities. This is why many results are interpreted with that goal in mind.

### Survey respondents

The survey was filled by 38 respondents, primarily Frontend- and Fullstack developers.

To determine the deomgraphic we asked whether:

- they have used GitLab before
- are working for an Org using GitLab
- if are using a self-hosted version or gitlab.com (only asked if they answered `yes` to the previous question)

This has resulted in a nice, balanced demographic made up of `individual users`, `.com users` and `self-hosted`.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=419829184&amp;format=interactive"></iframe>
<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=88621205&amp;format=interactive"></iframe>
<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=1391826324&amp;format=interactive"></iframe>

### Services

Comparing services similar to Pages (and its potential future capabilities), users have an overwhelming preference for Netlify, while Vercel is popular, too. Traditional cloud services (AWS, GCP) are widely used as well.
Cloudflare seems to peke interest, but has not been as widely adopted as other services in the category. This is interesting given Cloudflare's large feature set and generous free tier. My interpretaion is that onboarding to Cloudflare is difficult, the UI being overly complex. This would clearly be something to avoid with our own implementation. Fastly is widely unknown. GitLab Pages is comparatively unknown or unused as a frontend service, but not particularly un-_popular_.

<iframe width="1205" height="371" seamless frameborder="0" scrolling="yes" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=1985925626&amp;format=interactive"></iframe>

### Frameworks

Users work lot with React, reflecting in Framework preferences. Next.js is distinctively the most widely used SSR framework, followed by Gatsby and the Vue-based framework Nuxt.js. If we look at the newer frameworks it's interesting to see what users  _would like_ to use in the future:
Here _Sveltekit_ stands out with almost half of respondents _wanting_ to use it. It's followed by _Remix_, which, as a React Framework has also seen some adoption. Assuming those who used it also want to do it again in the future, it's equally popular to Sveltekit.

Pure static site generators aren't particularly popular in comaprison: Astro, Eleventy and VuePress are all comparatively unknown or uninteresting, especially the Generators not written Javascript, Hugo and Jekyll. It seems like their use-case is limited and not particularly interesting.

<iframe width="1800" height="436" seamless frameborder="0" scrolling="yes" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=458960000&amp;format=interactive"></iframe>

### JS in Pages

When asked whether Users would like to see a JS functionality within GitLab, they are inclined, but sceptic with 70% of respondents saying "I might use it in the future", and 17% making it dependent on the feature set. 8.8% are enthusiastic.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=2099182585&amp;format=interactive"></iframe>

### Features

To compare the relative importance of feature sets, participants were asked to rate their approval to a set of statements on a linear scale. The graphs below show a "trendline", the incline being a useful visualisation of the strength of a certain preference.

Respondents rate the importance of a free tier extremely high, which is reasonable, given the generous free tiers provided by the popular services in the market.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=1641085246&amp;format=interactive"></iframe>

A strong USP of GitLab Pages is that it integrates well into an Organization's ecosystem, as the self-hosted variant can be used on an org's own Hardware, behind a VPN, according to legal requirements. Consequently, existing GitLab users agree more strongly to that statement than non-users.

All Respondents:

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=2139870796&amp;format=interactive"></iframe>

Existing Users only (non-interactive image):

!["It's important that it works on my Organisation's Hardware or in my Organizations ecosystem", users only](/images/handbook/engineering/development/incubation/jamstack/ecosystem_dependency_org_users.png)

A surprise to me is the fact that Edge deployment is not something users feel strongly about. Offering Edge functionality was one of my own main drivers behind my initial attempt to use Cloudflare for script deployment. But most users don't care too much for it, as the responses are pretty much keeping the balance.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=711036831&amp;format=interactive"></iframe>

More important is the availabilty of nodejs globals, given that a wide range of JS packages depend on them and manually polyfilling them is tedious, error-prone, and not always possible. Cloudflare Workers has a `node_compat` mode that takes care of that, but its use is discouraged. So this is not something that's easy to offer without actually deploying node servers, no matter whether we're co-opting Workers or offering Pages isolates.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=1178816764&amp;format=interactive"></iframe>

A big difference between the JS-isolates-in-Pages approach versus using Cloudflare is _developer experience vs. feature completeness_. Using Cloudflare would mean we're opting for a feature-rich ecosystem, but the iterative approach would mean we're starting with a complicated Developer Experience (Creating a CF account, obtaining an API Token, setting up deployments) and iteratively simplify that by automating or integrationg each of the required steps into GitLab.

Using Isolates in GitLab Pages on the other hand would mean we could start with a simple experience (zero setup required) and iteratively add _features_ to the implementation as we go, shaping the implementation based on user feedback.

The last question identified where users stand on that question. They were asked to rate on a scale from 1-6 whether they preferred an ease-of use or feature completeness from the start. The results show a preference towards ease-of-use at the expense of feature completeness. That many users want both when given a choice is reasonable. So if we only look at the extreme answers the preference is even more clear: 26% of users only care for ease-of-use, whereas only 3% are willing to sacrifice it for feature completeness.

<iframe width="674" height="419" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSArP2ggk8MSBV_UeQkp7DLZcxq_15He0KNPCiSGW0sBKTl7a5RAdfLTTm9x6mW3pjMB0lr4SUtNniR/pubchart?oid=1575999933&amp;format=interactive"></iframe>
