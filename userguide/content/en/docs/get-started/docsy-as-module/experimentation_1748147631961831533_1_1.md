---
title: "Experimentation for the User Experience Team"
description: "How to plan, design and evaluate experiments"
---

*Ever wonder if we do AB Testing, aka Experiments?*

Yes, we do experiments in our app! Most experiments are run by the Growth team on the SaaS product, and the majority are done on our registration, trial and purchase flows. We also collaborate with stage groups and run experiments around increasing the visibility, usability and learnability of a feature. These experiments are ultimately aimed at improving KPIs that tie back to revenue. Things like increasing engagement with the product, increasing the speed at which a customer uses a feature or upgrades their account, or even increasing the number of stages used by a namespace.

## What is experimentation?

Experimentation is a way to validate and measure improvements to a digital product against particular goals. Basically, we have an idea that if we change something in our product, our users will respond to it, and the metric that we want to impact will be affected by that. Experimentation works well when there's a large number of users and a good baseline product (see the [When is an experiment not a good idea?](#when-is-an-experiment-not-a-good-idea) section).

## Terms we use at GitLab

Our vocabulary is a bit different when we're talking about experimentation and UX, so here are a few important terms and how we use them here.

- Experiment: We usually mean an A/B or multivariate test when we say this.
- Hypothesis: This is usually a one sentence statement about what we think will change as a result of our experiment. For example: "We believe the middle name field of the sign-up form is disruptive. To verify that we will remove the middle name field from the sign-up form, and we'll measure this by observing an increase in the sign-up rate. We'll call this experiment a success if we observe a >= 20% increase in sign-ups."
- Variant/Control: The control is the "current" user experience. The variant is the "proposed design."
- Success metric: This describes the moment a user takes a desired action in the scope of an experiment. For example, out of all the users who were exposed to the variant where a new button is added to the UI, how many clicked on that button.
- Adoption: This is about how a user (or an account) establishes a relationship with our product. It's beyond conversion - it's about how habits are formed. For example, just because someone merges one merge request, it doesn't mean they have adopted the feature. But maybe once a user creates a merge request and adds a team member to review it, they are more likely to continue using the product. That knowledge would inform our adoption metric.
- Expansion: This is about how an account grows. It comes after activation. Once a user is considered activated, what makes them most likely to use more features, level up to a higher tier, or add more users to their subscription?
- Retention: This refers to how many users (or accounts) remain active in a period of time. For example, if 100 new namespaces are created on Day 0, how many are still active after 1 month, 3 months, 6 months?
- AHA Moment: This is a moment (or moments) in the product, where a user gets it! They understand the value of the product, and exactly how it will help them. An example of an AHA moment in GitLab would be when a pipeline successfully runs for the first time.
- Statistical significance: A throwback to statistics class, this is a way of describing how confident we are in results. If we say an experiment was a win and it reached significance, it means we are confident the experiment was successful because of the change we made, and not some other reason. If we say an experiment didn't reach significance, it probably means that the measured impact was either very small, there was no impact at all, or didn't have enough users in the experiment group.
- Time to significance: This is how long it will take to reach significance/confidence in the results. It's a function of how many users will see the control and variant. This can span from a couple of days to a couple of weeks. It depends on how much traffic the area that is being experimented with gets.

The Growth section has groups related to Conversion, Activation, Expansion and Adoption. The things these groups work on relate back to the definitions above, but they aren't exactly the same.

## When and why should experimentation be used?

Use an experiment when you need to quantify the impact of product changes (eg. click rate, conversion rates, other metrics) or when you need to validate a solution.

## When is an experiment not a good idea?

There are some situations where we'd prefer to make a change to the product and roll it straight out to product. These are:

- when we are very confident that the change is the right one, and will result in a big usability improvement. We would do this so that all users can immediately benefit from the improvement. These changes can be small or large. They can vary from adding a label to an icon-only button to fixing a flow that spans across a few pages.
- for a 'big bet'. This is a bigger change, such as a redesign of the sign-up flow, where we are aligning to overall best practices, we're informed by data and we've conducted other forms of solution validation like user testing and other UX research methods.
- it seems pretty obvious, but we wouldn't use an experiment to decide how to fix a bug.
- when it will take a long time to reach significance and the impact to revenue is uncertain/low and/or the impact to users is very high/certain. In this case we can make the change, or reject the experiment. Growth groups use the [ICE framework for prioritizing experiments](/handbook/product/groups/growth/#growth-ideation-and-prioritization).
- when the baseline experience is poor, below a B- using our [heuristic scoring](/handbook/product/ux/heuristics/). In this case, we would require initial improvements to the experience before proceeding to an experiment.

## How do we design for an experiment?

Much of the product design process for Growth will remain familiar, but there are some differences. There are also considerations and concepts we need to understand and follow.

- For an experiment, we work from an experiment write-up (add link) instead of user stories and/or JTBD. But we still need to be familiar with the JTBD of the feature we're experimenting with.
- We always want to have a well-written experiment before we start designing. The minimum required should be the hypothesis, the business problem, whether there's any supporting data, and what is the expected outcome. To help you get started, use the [Experiment Idea issue template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experiment%20Idea).
- A north star metric, combined with the vision of the user experience is what should be driving most, if not all experiments. To get there, a designer should establish a UX strategy in collaboration with their product manager. Examples of such UX strategies can be seen [here](https://app.mural.co/t/gitlab2474/m/gitlab2474/1606981641280/762004a62acea8d9eb9c5d5e8cfe9019a8da9090?sender=mlatin2224) and [here](https://app.mural.co/t/gitlab2474/m/gitlab2474/1625560041539/678d82736b27f974b8fe238115622781cce86110?sender=mlatin2224).

## Do experiments replace user research?

No, they don't. This is because experiments tell us *what* is happening while user research can tell us *why* something is happening. We do both problem and solution validation research in Growth. Here are examples of things we might ask:

- For problem validation, we might want to understand what users are looking to learn during a trial. Insights from this kind of research could inform both UX improvements and experiment ideas.
- For solution validation, we might run a usability study on a big bet. We also run usability studies on key flows every quarter or so, in order to get qualitative feedback on our launched experiments.
- Sometimes experiments are inconclusive, or surprising because they don't match what we expected. When this happens, we'll conduct user research to find out the 'Why'.

## Crafting a good experiment starts with a good hypothesis

- A good hypothesis is a statement that can easily be validated as true or false.
  - Template for writing a hypothesis statement: We believe that *insert the change you are going to test* will result in *insert desired result*. We'll know this is true when we see a *insert target change in metric*.
  - An example of a good hypothesis statement: *We believe that adding a checkbox to enable SAST scanning to the project creation page will result in higher user adoption of the Secure stage. We'll know this is true when we see a 5% increase in Secure adoption.*
- A hypothesis tests something that matters. If users won't care, or the company doesn't care, then it's not a great thing to test.
- The hypothesis should test one thing. Avoid things like "we think that X and Y are true" or "we think that X will result in X and Y".
- If you expect an experiment will have an impact on multiple metrics make sure you list all of them ahead in the experiment write-up.
If you want to impact trailing metrics in addition to an initial metric, make that very clear in your experiment write-up.
- After you collect data, if you've written a good hypothesis, you should be able to restate it as your conclusion. For example:
  - Hypothesis: We think that adding a koala image to the page will increase clicks by 10%.
  - Conclusion: Adding a koala image to the page resulted in clicks increasing by 12.4%, at a 97% significance.

## Picking the right metrics

TBD

## Things to watch out for

Experimentation is an awesome way to improve your product. There are a lot of considerations though, so think through your goals and constraints to ensure it's the right approach.

- Launching experiments may cause delays compared to just introducing a change. These delays may be caused by additional engineering work in order to launch experiments, longer times to reach statistical significance, lack of experience with them in teams outside of Growth.
- If your team hasn't experimented yet, ask for guidance from Growth. Reaching out to [product designers](/handbook/company/team/?department=growth-ux-team) should be your first step. They'll be able to help, or connect you with people that can help with data analysis, technical challenges of launching experiments, avoiding result misinterpretation, and make sure that your experiments don't test too many things at once.
- If your team has some experience with experimentation, you should still check in with Growth and check whether there are any conflicting experiments currently running.
- Consider how much traffic the area that you want to experiment with gets. Is it low? Avoid doing an experiment altogether. Is it moderate? Acknowledge that it may take time to reach a statistically significant result.

## Resources

- [Experiment Guide](https://docs.gitlab.com/development/experiment_guide/)

## Have an idea for an experiment?

Get in touch with one of the [product designers on Growth](/handbook/company/team/?department=growth-ux-team) or open an issue with the [dedicated template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Experiment%20Idea).
