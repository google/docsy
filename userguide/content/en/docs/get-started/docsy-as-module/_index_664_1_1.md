---
title: Jamstack Single-Engineer Group
---

## Jamstack Single-Engineer Group

The Jamstack SEG is a [Single-Engineer Group](/handbook/company/structure/#single-engineer-groups) within our [Incubation Engineering Department](/handbook/engineering/development/incubation/).

This group's mission is to enable Frontend developers to build, deploy and manage externally facing, static websites using Jamstack architecture in a simple, configurable and scalable way.

Frontend engineers should be able to use GitLab as the primary place to manage Jamstack Frontends.

## Latest Update

<figure class="video_container">
    <iframe width="600" height="340" src="https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=playlist&list=PL05JrBw4t0KrjluXzJBaHsMJAZy9lR-DV" frameborder="0" allowfullscreen></iframe>
</figure>

See the ["Weekly Update" Epic](https://gitlab.com/groups/gitlab-org/incubation-engineering/jamstack/-/epics/13) for a list of all prior updates.

## The Playing Field

Technology supporting Jamstack is a fast-growing, highly innovating field with many startups competing for market shares.

GitLab's solution is built on GitLab Pages and its solid CI/CD pipelines. This allows any client to grow seamlessly from a simple static site to complex, multi-faceted deployments without having to change the provider at any point. Competing in the Jamstack market potentially allows new Developers to have a shallow entry to GitLab's CI/CD world. That is, if we get the User Experience right.

GitLab is not an infrastructure provider. This is an advantage for established clients that may already pay for their own infrastructure. GitLab can easily support a wide range of infrastructure using CI/CD pipelines, so our goal is to make this as simple as possible. It's important that this scalability is conveyed from the very first onboarding steps to build trust with our users, even if most projects will stay small.

## User survey

In January 2023 we conducted a [User survey](/handbook/engineering/development/incubation/jamstack/js-runtimes-survey/) to provide data on the general direction around the Javascript runtime feature.

### Jobs to be done

1. When I'm building a simple static site, I want to publish it without leaving the GitLab UI, so I can update faster and with fewer points of failure

   Maturity: `70%` Status: `work in progress`

   Issues:

   - [Use the Pipeline Wizard for Pages onboarding](https://gitlab.com/gitlab-org/gitlab/-/issues/343557) - **Completed**
   - [Remove the requirement for output files to be inside a folder called "public"](https://gitlab.com/gitlab-org/gitlab-pages/-/issues/668)

1. When I'm building a server-side-rendered static site (SSR), I want to use GitLab to deploy, so that I don't have to configure and pay other services to do so

   Maturity: `10%` Status: `work in progress`

   Issues:

   - [Allow the use of Javascript runtimes for Jamstack apps (SSR)](https://gitlab.com/gitlab-org/incubation-engineering/jamstack/meta/-/issues/32)

1. When I'm deploying a Pages site, I want to have it distributed via a CDN so that the page is delivered faster

   Maturity: `0%` Status: `planned`

1. When I manage my own GitLab instance or group, I want to connect my own CDN account for Pages, so that developers can deploy static sites through a CDN without additional configuration

   Maturity: `0%` Status: `planned`

1. When I'm developing a Jamstack site, I want to create a simple CRUD API, so that I can save time on repetitive, boilerplate tasks

   Maturity: `0%` Status: `planned`

1. When I create a simple CRUD API through the GitLab UI, I want to export the API code into a repository so that I can continue development manually

   Maturity: `0%` Status: `planned`

Issues:

- [API Generator](https://gitlab.com/gitlab-org/incubation-engineering/jamstack/meta/-/issues/46)

## Guiding Principles

These are the guiding principles that the Jamstack SEG optimizes its
implementations for.

1. [**Simplicity**](https://gitlab.com/groups/gitlab-org/incubation-engineering/jamstack/-/epics?label_name%5B%5D=Jamstack+Focus%3A%3ASimplicity) - It should be intuitive to use GitLab to deploy a static site. GitLab should be a great place to _just get started_ with the confidence that deployments can be fine-tuned and scaled later.
2. [**Configurability**](https://gitlab.com/groups/gitlab-org/incubation-engineering/jamstack/-/epics?label_name%5B%5D=Jamstack+Focus%3A%3AConfigurability) - With the `.gitlab-ci.yaml` powering the solution, it should be straightforward to support a wide range of deployment strategies.
3. [**Scalability**](https://gitlab.com/groups/gitlab-org/incubation-engineering/jamstack/-/epics?label_name%5B%5D=Jamstack+Focus%3A%3AScaleability) - GitLab should be able to support the entire page's lifecycle. From a quick-and-dirty one-man project to powering the websites of high-traffic global organizations with complex infrastructure needs.

## Backstory

The key to modern Jamstack Frontends are Websites built as Single Page Applications (SPA). Classic Javascript Frameworks like React or Vue.js build the entire HTML DOM on the client side, so to improve performance, they are supplemented by Rendering Engines (eg. Next.js, Nuxt.js) that use node.js to pre-render HTML before they are sent to the client's browser. Frameworks like Eleventy, Gatsby.js or Hugo are both Framework and Rendering Engine.

All frameworks have in common that there are three main approaches as to when the rendering happens:

1. During **Build** time, also known as _Static Site Generation_ (SSG), this is how GitLab Pages works now.
2. When a page is **Requested**, but instead of rendering in the client's browser, the page is pre-rendered by the server, known as _Server Side Rendering_ (SSR)
3. A mix of both, where pages are dynamically rendered once when requested for the first time, then cached, also known as Incremental Static Regeneration (ISR). This is usually supplemented with a step that pre-renders the most popular pages during build.

### Resources

- https://www.smashingmagazine.com/2021/05/evolution-jamstack/

## Issue Link

[https://gitlab.com/gitlab-org/gitlab/-/issues/329597](https://gitlab.com/gitlab-org/gitlab/-/issues/329597)

### GitLab Product Development Group affinity

- [Editor](/handbook/engineering/development/dev/create/editor/)
