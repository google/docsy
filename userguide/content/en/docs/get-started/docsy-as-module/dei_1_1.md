---

title: 'Distinguished Engineer, Infrastructure - Andrew Newdigate'
description: "The Distinguished Engineer, Infrastructure is a member of the Infrastructure team and works with both department leadership and individual contributors to achieve the department's objectives."
---







![xkcd #670: Wow, that's less than $200 per ... uh ... that's a good deal!](https://imgs.xkcd.com/comics/spinal_tap_amps.png)

Image by Randall Munroe, [xkcd.com](https://xkcd.com/670/)

## About me

I'm Andrew Newdigate. I'm from Cape Town in South Africa. I have a degree in computer science from the [University of Cape Town](https://www.cs.uct.ac.za/), and I've worked as
a software engineer in the healthcare, finance, telecoms, and tech sectors.

I've founded several companies, but the only one you may have heard of is called [Gitter](https://gitter.im/), which was acquired by GitLab in 2017. This is how I joined the company.

I lived in London in the UK for 17 years, but moved back to Cape Town in 2019. When I'm not working I love building stuff, travel, photography, music and camping and hiking in the great outdoors.

For details of some of the activities I participate in outside of GitLab, my PolyWork is [andrew.newdigate.me](https://andrew.newdigate.me/).

## Responsibilities

The **Distinguished Engineer, Infrastructure** is a member of the Infrastructure team and works with both department leadership and individual contributors to achieve the department's objectives.

### Specific areas of focus and interest within the Infrastucture department

* **Team alignment**: primarily, I am focused on working with the [Scalability](/handbook/engineering/infrastructure/team/scalability/), [Observability](/handbook/engineering/infrastructure/team/reliability/#observability), [Datastores](/handbook/engineering/infrastructure/team/reliability/#datastores) and [Delivery](/handbook/engineering/infrastructure/team/delivery/) teams.
* **Availability**: ensuring that GitLab.com meets its availability objectives is key to how I will prioritise my focus. Knowing whether we are reaching these objectives is determined by our service-level monitoring.
* **Technical Debt**: I help triage technical debt that is having an impact on availability, primarily through [the Infradev process](/handbook/engineering/workflow/#a-guide-to-creating-effective-infradev-issues). The current state is available through the [weekly Infradev report](https://gitlab.com/gitlab-org/infradev-reports/-/issues?label_name[]=Infradev%20Status%20Report).
* **Service-Level Monitoring**: My responsibility is to define, and work with specific teams to introduce service-level monitoring across the GitLab fleet.
* **Resource Utilisation and Saturation**: the cloud infrastructure that we run GitLab.com is, for our purposes,
  almost infinitely expandable, for our ability to scale up is limited by the bottlenecks and saturation points
  in our application and associated infrastructure. As DE, Infrastructure, it is my responsibility to understand,
  model, monitor and communicate these critical components.
* **Capacity Planning**: related to resource utilisation and saturation, capacity planning is about understanding
  when we will hit critical bottlenecks, and once understood, my responsibility is to work with specific stakeholders to prioritise work.
  The primary tool I use for this is the [Tamland report](https://gitlab-com.gitlab.io/gl-infra/tamland/patroni.html) which uses Facebook's Prophet forecasting library to forecast
  potential capacity issues.

### Other Focuses & Interests

* **Observability**: metrics, logs and traces. Having good observability allows engineers to better understand the
  internal state of the application. In turn, better understanding helps improve availability across our systems.
* **Attribution & Ownership**: GitLab's monolithic architecture provides us with many advantages, but being able to attribute a change that leads to a particular
  regression or bug is more challenging with this model. While some components, such as Gitaly and Pages, are easy to attribute to a responsible team, most
  changes are not. Attribution & ownership is about assigning responsibility of areas of the codebase to particular teams (usually via `feature_categories`).
  This is a two-way process: it's about encouraging development teams to be involved in the execution of their code in production and infrastructure teams
  communicating back to the development teams.
* **GitLab.com Incidents**: I will frequently join incident calls. Primarily, I'm there to observe, so that we can iteratively improve our
  systems to avoid similar incidents in future.

### Mentoring

> Of all the attributes that go to make up a distinguished engineer, being the engineer that inspires and helps others is, to my mind, the single most important. A distinguished engineer is someone a team can build around for any project, a person who will spend time developing others and making them far better at their job then they were before.

<small>Taken from [On the Myth of the 10X Engineer and the Reality of the Distinguished Engineer, RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/).</small>

Engineering ICs are welcome to reach out to discuss career development, mentoring, either on a formal or informal basis. Setup a coffee chat, or find me on Slack to start a discussion.

### Customer Needs

> A distinguished engineer will bring a relentless focus on delivering value for customers. They understand the customer need, and when it’s a new market they spend a lot of time trying to understand what the potential needs will be. They adjust course when necessary, and bring their team long with them.

<small>Taken from [On the Myth of the 10X Engineer and the Reality of the Distinguished Engineer, RedMonk](https://redmonk.com/fryan/2016/12/12/on-the-myth-of-the-10x-engineer-and-the-reality-of-the-distinguished-engineer/).</small>

I'm happy to engage with technical teams at prospects and clients. Account Managers are welcome to book time in my calendar for this.

## North Star Principals

Inspiration taken from [https://randsinrepose.com/archives/how-to-rands/](https://randsinrepose.com/archives/how-to-rands/).

**A heavy bias towards action**

> Long meetings where we are endlessly debating potential directions are often valuable, but I believe starting is the best way to begin learning and make progress. This is not always the correct strategy. This strategy annoys those who like to debate.

**Iteration**

Related to the previous point, frequent, small, low-risk reversible incremental changes are almost always preferable to big risky changes.
Compounding small incremental changes leads to big outcomes while keeping risk low. Big changes are nearly always a smell and I will encourage

**Feedback**

I am always willing to accept feedback, and will try my best to address it. Please DM me on Slack, or better yet, setup a call.

## Talks

Occassionally I will talk at conferences. Here are some of the talks I have given:

### ScaleConf 2020

> Good observability is critical to managing complex systems at scale; having quality metrics is key to this. But as system grow, the number of metrics they produce rapidly increases. Dashboards and alerts can become difficult to maintain and lead to technical debt. This talk describes the strategy we’re using at GitLab to tackle this.

[https://www.youtube.com/watch?v=2zL9DymXi1E](https://www.youtube.com/watch?v=2zL9DymXi1E)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2zL9DymXi1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### PromCon EU 2019

> Practical Capacity Planning Using Prometheus

[https://www.youtube.com/watch?v=swnj6KTRg08](https://www.youtube.com/watch?v=swnj6KTRg08)

<iframe width="560" height="315" src="https://www.youtube.com/embed/swnj6KTRg08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Devopsdays Cape Town 2019

> GitLab.com’s monolithic Rails application experiences high week-on-week traffic growth. To ensure availability, GitLab’s Infrastructure team track and plan ahead in order to avoid hitting capacity limits in the application, whether these limits be CPU, database connection pools, memory, storage or any number of other finite resources. Hitting these limits could result in hours, or days, of degraded service while workarounds are put in place.
>
> With this in mind, the team set about building a set of tools on top of Prometheus recording rules and alerts to provide them with the information they need to be sufficiently forewarned, up to a month in advance, of potential resource saturation issues.
>
> If you’ve ever felt that you’re reactively responding to resource saturation issues, this session will provide practical examples of how we’re building resource planning into our SRE team workflow. We’ll be presenting our open-source solution and explaining how it works for us.

[https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/](https://devopsdays.org/events/2019-cape-town/program/andrew-newdigate/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/YHV0qkKBz7o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Monitorama PDX 2019

> Practical Anomaly Detection using Prometheus

[https://vimeo.com/341141334](https://vimeo.com/341141334)

<iframe src="https://player.vimeo.com/video/341141334?portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/341141334">Monitorama PDX 2019 - Andrew Newdigate - Practical Anomaly Detection using Prometheus</a> from <a href="https://vimeo.com/monitorama">Monitorama</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

### Google Cloud Next 2019 -

> At Google Cloud Next '19, GitLab Staff Engineer Andrew Newdigate presented our migration experience and the steps we took to make it happen. Migrations seldom go as planned but we hope that others can learn from the process.

[https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/](https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ve_9mbJHPXQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Engage with Andrew

1. Start with an issue in the [Infrastructure tracker](https://gitlab.com/gitlab-com/gl-infra/infrastucture/issues/new).
1. You are welcome to follow this up with a Slack message in [#infrastucture](https://gitlab.slack.com/archives/g_infrastructure).
1. Grab some time in my calendar. I use [Clockwise](https://www.getclockwise.com/) to manage my calendar. Clockwise will book out free time as "Focus Time".
    Please feel free to book over these blocks.
1. If you cannot find a better alternative, I'm normally okay with meetings in evenings. Early mornings are more difficult due to parental commitments.
