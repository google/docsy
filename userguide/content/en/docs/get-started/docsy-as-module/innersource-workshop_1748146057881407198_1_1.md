---
title: "Innersource Workshop"
Description: "Guidance for CSMs on leading innersource workshops and deep-dives."
---

## InnerSource Workshop Overview

This workshop is intended to provide enablement for new or existing customers that have voiced interest in InnerSource or how to become better at collaborating across their organization. The expected outcome is that a customer has successfully setup a GitLab project in an InnerSource ready fashion, including secrets-detection using GitLab CI.

- Start with understanding their "why" with [discovery questions](#discovery-questions)
- Share the ["Unlocking InnerSource with GitLab" webinar](https://www.youtube.com/watch?v=ZS1mCpBHXaI) asynchronously
- For a more high-touch customer you can offer them an executive level overview and/or a hands-on workshop
  - **Session 1** (15 - 30 min.) is an overview of the value prop for an organization, a customer proof point, as well as a quick start guide
  - **Session 2** (30 - 45 min.) is a Hands-on workshop where the customer is expected to bring an InnerSource ready project to the table and configure it with our guidance
- After the workshop(s), record whether or not the customer has successfully built a GitLab CI pipeline; use this opportunity to pitch the value of [service ping](https://docs.google.com/presentation/d/1d28buwnzM4xKADU1OC6dU6HXd3KqBurG_tIEag7BJMw/edit#slide=id.g10928a67270_0_636) (internal link) if you haven't done so recently

*Note*: You can combine the two sessions into one if you don't have a different audience. When we were trialing this playbook, we had sr. leadership/sponsors for the first session and practitioners in the second session.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/ZS1mCpBHXaI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

## Discovery Questions

The goal of the discovery questions is to help your customer tie this back to a larger initiative and identify a champion who will sponsor their efforts. The champion is who you will be running Session 1 with.

- Tell me about your use case for innersource. Does it show up explicitly in a transformation or company goal?
- What is it that you're hoping InnerSource will accomplish for your company? What outcome?
- How is source code classified within your company? (i.e. "highly secure"/least privilege?)
- What do you use for secrets management and secrets detection?
- Who is championing innersource?
- Do you have a use case in mind?

## InnerSource Project Examples from Enterprises

Some feedback that we've heard is if GitLab could provide examples of good InnerSource projects that our customers have had success with.

- UI Design Systems/Libraries - every UI engineer references these repositories as they have brand compliant libraries for them to use. If these are InnerSourced, then they can contribute more design elements.
- [Architecture Decision Records](https://adr.github.io/) - ADRs are a great placed to start InnerSourcing. At a large American telecommunication company, they built an "Enterprise Decision Record" repository that hosted all significant architecture decisions for development teams to vote on and weigh in on via GitLab issues. Once decided on, they are documented within a repository.
- Cloud Security Policies - enterprises must secure the usage of their cloud platforms. The code that governs a companies' security policies are good for InnerSource model because it provides clarity for developers on what is required, plus it will allow developers to request new services be enabled as the cloud provides (AWS, GCP, Azure) make them available. This speeds up the communication and process between security and development.
- GitLab CI Templates - CI templates are perfect for InnerSource as they are shareable across tech stacks and can save time. If companies require certain stages in a CI pipeline to run, it's only fair to expose that configuration code and make it InnerSource in case something goes wrong or a DevOps engineer needs to recommend changes.

## Workshop Materials

- **Executive Overview** [Session 1: InnerSource Quick Start w/GitLab slides](https://docs.google.com/presentation/d/1O_MBH5_NHfKvDcWrdaHx_tmfUWWRkc3xnvMBWdikwIA/edit#slide=id.gcb47225958_0_1126)
- **Hands-On Workshop** [Session 2: InnerSource Workshop](https://docs.google.com/presentation/d/1PauUr2hczbWNb7D5xvEGkMo5h4w1KGORnE2thgYiQZg/edit#slide=id.gfd8e70f97a_0_295)
- [Demo project](https://cs.gitlabdemo.cloud/innersource/demo) that was leveraged in the InnerSource webinar
