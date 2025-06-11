---
title: Code Review Values
description: "GitLab team members' code review values"
---

## Reviewer values

Code reviews are mandatory for every merge request. You should get familiar with and follow our code review values.

## Reviewer mission

As reviewers, we want to strive to avoid degrading maintainability of the GitLab codebase,
while empowering velocity as we build loveable features through a friendly and respectful environment.

## Stakeholders' priorities

We value the goals and objectives of all stakeholders of a merge request, but when the values
of a stakeholder compete against another, we prioritize the following values:

Users > contributors > ourselves

It's important to keep in mind that reviewers/maintainers don't own the requirements.
It's ultimately the job of Product/UX to create and uphold them.
Please [involve PM](/handbook/product/product-processes/)
if there are concerns about the functionality being introduced in a contribution.
However, we all play a part in keeping an eye on the holistic end-user experience.

## History

At GitLab, we have a large selection of reviewers who strive for the highest quality when
reviewing merge requests. However, due to human nature, we are subject to individual nuances.

This was raised as a discussion point in the Frontend maintainer meeting by [@sarahghp](https://gitlab.com/sarahghp)
as to *"What is the ideal balance between code consistency team-to-team? Are we trying to
pick too many nits in pursuit of consistency?"*, which evolved into a larger question:

> *As a reviewer, what values should we choose to enforce in reviews, and what can be considered with more flux? Following this question, with items granted more flux,
how do we approach that? Do we aim for a collaborative model and encourage reviewers to
share branches with authors or should we encourage more follow-up issues and merge requests?
Or this is something that can be considered as a personal preference?*

Simplifying:

> Should we permit a merge request to be blocked when it is against our values?

Given these questions, we documented on this page a set of specific values to help everyone perform reviews consistently throughout the company.

## TL;DR

- Aim to not get bogged down in smaller issues that have no real bearing on the overall code quality of a merge.
- Avoid the introduction of technical debt and strive for its reduction.
- Encourage but don't demand boring, simple solutions.
- Consult your fellow reviewer often, but be conscious of a delay for the author, especially when there is a large difference among time zones of the people involved.
- Take into account the far-reaching impact of the changes and whether the code makes the overall codebase better or worse. Everything is a tradeoff.
- Be careful when introducing dependencies and consider their side effects.
- Admit when you don't know something.
- Be kind, friendly, and humble.
- Avoid demanding. Coach and teach instead.
- Lean towards a bias for action and collaboration.
- Make a safe space for people to fail safely, make your own safe mistakes, and try innovative approaches. Welcome creativity.

### Merge profitability

In general, if a merge request is a net profit, then we should be eager to approve and move forward. This attitude takes into account things like:

- Quality must-haves (as known as [permission-to-play](/handbook/values/#permission-to-play)).
- The value of change for users.
- The value of future maintainability costs.
- Opportunity costs.

The sum of all the pros and cons should lead to a net profit and the ability to move forward.

> *There are no solutions, only trade-offs*. (Thomas Sowell)

In software, there are simply no perfect solutions. They do not exist.
This is mostly due to the nature of computers (see [Cap Theorem](https://en.wikipedia.org/wiki/CAP_theorem), for example).
Also, the [quality attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes) are often at odds with each other. For example, enhancing security hurts performance, and some performance boosts are not maintainable. Software Engineering is about prioritization and balance.

The first and foremost step of being a great reviewer is learning to accept, manage,
and communicate acceptable trade-offs in the codebase.

#### Quality must haves

A merge request must have some thing to be considered "profitable."
Being a reviewer is a tough juggling act. You will find yourself often balancing iteration
vs quality concerns, but a bias for quality serves you (and the rest of your
teammates!) well. The following list includes a guide of some common (but not exhaustive) quality must-haves:

- User experience. Does the change create a useful, robust, and loveable user experience?
- Reliability. Is the code reliable? Is the code returning the same output each time or are we introducing a lot of unpredictable side effects?
- Dependencies and fragility. Does the code in this merge request introduce fragility,
or external or internal dependencies into the codebase? Keep in mind that every time
a dependency is leaned on it becomes something else to support.
- Maintainability. Will we be able to easily make changes to the relevant code (for example, bug fixes and requirements changes)? Are we adding more code than necessary?
- Readability. Could a brand new contributor jump into the relevant code and understand what's going on?
- Testing. Tests should almost always be provided for any change. Do the tests cover the
features use cases and the component contracts? Will the tests ensure the user experience
stays loveable with future changes?
- Consistency. Is the changeset consistent with the pre-existing code at both a
higher level and a lower level?

These must-haves should be the starting point for every code review when establishing permissions
to play. Each reviewer has their own review style, and this is what makes them an individual
reviewer. They have their own expertise to offer, but in general, we want to collectively commit to ensuring a high standard of quality at GitLab and service to our stakeholders.

**Keep in mind not all changes are equally created. If the author is working on legacy
code we shouldn't have as high-quality expectations as green-field code. The changes
should still lead to a net gain in code quality, though.**

#### Collaborating from net loss to net profit

When you are reviewing a merge request and identify a quality tradeoff, aim to communicate it well:

- Describe the tradeoff you saw.
- Explain why you believe that it is a tradeoff.
- Aim to work towards a solution with the merge author.

This helps to foster a bias for action and collaboration. Approach this with kindness and
humility in your communication, as the author may not have realized that they introduced a
difficult choice for the reviewer. They could just have tried to write good code to solve
their problem. Often authors do not foresee the far-reaching effects of their choices
(nor should they; this will lead to a lack of progress).

### Velocity

At GitLab, we iterate progressively and consider this is a core value for your judgment
of a merge request's validity. We value iteration in GitLab because we value breaking
problems down into their smallest pieces possible and because it calls for a bias for action.

We truly believe in this as a guiding principle that makes our jobs as reviewers easier,
since the content is small and digestible. However, it's also important to be aware that
multiple iterations do not always make things easier. Sometimes they introduce difficulty to
grasp the context. However, these issues are outweighed by the benefits of high velocity,
feedback, and reliability. This is something that we, as reviewers, should be
constantly encouraging in authors. "Can we make this smaller?" should be a very common question to ask ourselves when starting a review.

> *It's very possible to take a lot of small confident steps to a mess.* (Paul Slaughter)

The iterative approach also teaches authors to think out the solution to a large or
complex problem by ensuring it's broken into small, quality-driven pieces.

Some practical (but not exhaustive) examples of quality to watch for as a reviewer:

- Is the code readable and can be easily understood?
- Does it solve a single issue at a time?
- Is it fragile?
- Is it easily extended or modified?
- Are there supporting specs that correctly represent the I/O of the components?
- Are the units of the system loosely coupled, such that one is not dependent on another in a hidden or fragile way?
- Are the units of the system highly cohesive, such that an individual unit has a single responsibility and one reason to change?

### Honesty

Being honest can be hard. And even harder when there is a perceived imbalance in authority
between the merge author and the merge reviewer:

- As an author, it can be tempting to be misleading to get your code pushed through if asked
hard or blocking questions.
- As a reviewer, it can be tempting to skip over admitting you don't understand something.

This shouldn't happen, though. What we want to do here is always encourage a fearless sense
of collaboration between the author and reviewer through reducing any perceived
[authority bias](/handbook/company/culture/inclusion/unconscious-bias/#unconscious-biases-to-look-out-for-in-ourselves-and-in-others).

As a reviewer, you need to maintain a sense of honesty above all else in a review. If you do
not understand something, ask either the author or another reviewer. The same rings true
if you disagree with an approach the author has taken. This is okay to voice but as a
reviewer, the burden falls onto you to be sure you disagree because of a core flaw with the
approach and not because it's a personal preference to you.

**Pro-tip:** When in doubt, ask another reviewer for a sanity check.

### Worst case analysis

In the situation where you find there are unknowns in the merge request you are reviewing,
consider what the absolute worst-case scenario would be. If the very worst-case leaves this
merge request with a net profit (and no permission-to-play issues), consider leaving a
non-blocking comment to share your knowledge and collaborate.

### Making space

At GitLab, we aim to be as inclusive as possible and this includes making space for people to
grow and learn in their own way. As a reviewer, encourage authors to ask questions, make
mistakes, and be fearless with their attempts to make something awesome. While we want the
highest quality of code at GitLab, we also need to leave space for compassion, which creates
the safety net authors deserve when they hit that submit button asking for a review.

If you find yourself working on a merge request that is not going to meet the quality
benchmark, aim to let the author absorb that as a learning experience. But also try to help
foster the right response of being inspired to try again with another, better
merge request, not fear of being seen as lacking in some way.

As the author absorbs the learning experience, allowing yourself as the reviewer to
also embrace this as a learning experience. Each problem encountered is an opportunity
for the author and everyone on the team to learn.

### Nitpicks

> *Perfectionism is the enemy of progress.* (Winston Churchill)

Nitpicks are requests for minor changes that address personal preferences or negligible
code improvements.

Nitpicks are born from a wonderful place for most reviewers of wanting to ensure they
provide the most end-to-end review possible and highlight every single potential issue.
But they come at a cost:

- They create needless MR cycles (explicitly or implicitly).
- They create cognitive load.
- They can possibly damage the contributor's morale.

Nitpicks can create a lot of noise in a code review. They can, at best, bog down a review, or at worst, create a toxic experience for the author.

If you, as a reviewer, notice that all you have pointed out are
nitpicks, consider approving (and merging) without adding an additional review cycle.
You can leave feedback but don't need to block the merge request from being merged.

When writing a feedback comment, please evaluate if the comment is a nitpick.
While Paul Slaughter has a wonderful method for helping to inject context into your
comments via [conventionalcomments](https://conventionalcomments.org/), it's always
worth sanity checking if the nitpick really makes a positive net difference for
the change.

To see more reasons on this topic, check out the [stop nitpicking](https://blog.danlew.net/2021/02/23/stop-nitpicking-in-code-reviews/) blog post.
