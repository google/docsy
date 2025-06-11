---
title: "Design collaborator's playbook"
description: "This page acts as a quick reference of mental models for sync and async collaboration."
---

**What's it for?**
This page acts as a quick reference of mental models for sync and async collaboration. Its purpose is to create a common language for collaboration between designers, GitLab team members and the broader GitLab community. It should be used to understand and label patterns in collaboration, pain points, where we get stuck and how to get unstuck. It is not our [design workflow](/handbook/product/ux/product-designer/).

**Why is this important?**
[Collaboration](/handbook/values/#collaboration) is one of GitLab's key values. At GitLab, we believe that everyone is a designer and everyone can contribute. This means the UX department is a [humble facilitator of design](/handbook/product/ux/#were-humble-facilitators-of-user-experience-design). The design team can support collaboration across GitLab (and our broader community) by leveraging and sharing the mindsets, methods and tools of [design thinking](https://en.wikipedia.org/wiki/Design_thinking).

## Mental models

### 2 steps forward, 1 step back design

At GitLab we ship using the [Minimal Valuable Change](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) (MVC). Designing in this context can often be confusing for newcomers because it's important to consider the big picture as well as the steps for how we get there. To deal with this dichotomy, we design by initially thinking about the mid to long-term vision and then reducing the scope of the experience (in a lovable way) to make implementation quicker. In other words, we design by taking 2 steps forward and 1 step back.

**Actions**

- Use this model with your team to break a vision down into a series of small (MVC) issues

### Divergent & convergent thinking

From a young age we are often trained to jump to solutions as quickly as possible. This prevents us from taking the time to explore fully all our options. We can overcome this challenge by understanding and leveraging divergent and convergent thinking. These are two of the foundational modes of creative problem-solving:

- Divergent thinking (go broad): Generating lots of different ideas and exploring options without too many constraints in place.
- Convergent thinking (focus in): Reflecting on your options and ideas, combining them together in unique ways, analysing them, and converging on a solution (with constaints in mind).

![img](https://pbs.twimg.com/media/Bmn3FOVCQAAt_r7.jpg)

**Actions**

- [Watch short video](https://www.youtube.com/watch?v=xjE2RV6IQzo)
- Discuss with your team whether it is time for diverging or converging
- Leverage a synchronous [collaborative cycle](https://play.vidyard.com/riqHqfWV8XFpXM9c1vYEEG)
- Summarise text in a divergent thread and ask to converge on a solution ([example](https://gitlab.com/gitlab-org/gitlab-design/-/issues/817#note_335745932))

### Ladder of abstraction

We can't design in isolation. All the decisions we make are in the context of a broader system. We must zoom in and out between the system and its component parts to do our best work. Unfortunately, humans can only hold 5 (plus/minus 2) pieces of information in working memory at any one time (see [cognitive load](https://www.mindtools.com/aqxwcpa/cognitive-load-theory), [Miller's Law](https://lawsofux.com/millers-law/)). Therefore, we need to think at different levels of abstraction to manage this limitation. The ladder of abstraction is a useful mental model to recognise what level of abstraction you are currently working in. You can move up the ladder (more abstract) by asking "why?" or "what does that mean?". You can move down the ladder by asking "how does that work?" or "can you give me an example?".

**Example:**

- Very abstract: *"This is how I commute to work"*
- Moderately abstract: *"This is my personal transportation device"*
- Concrete: *"This is a bicycle"*

![img](https://miro.medium.com/max/1024/0*Z4Xl09fXVXepGCGD.png)

**Actions**

- Read "[Up and Down the Ladder of Abstraction](https://medium.com/@tombarrett/up-and-down-the-ladder-of-abstraction-cb73533be751)"
- Use the "[5 Whys exercise](https://toolbox.hyperisland.com/the-5-whys)" to move up the ladder of abstraction
- Use sketches and prototypes  to move down the ladder of abstraction

## Resources

- [Salesforce Workdifferently](https://www.salesforce.com/workdifferently/)
- [Salesforce Workdifferently: Method cards](https://www.salesforce.com/content/dam/web/en_us/workdifferently/documents/resources-methodcards-all.pdf)
- [IBM enterprise design thinking](https://www.ibm.com/design/thinking/)

## Collaborative exercises

As designers, we're generally embedded within stage groups. As we work to create designs, it can be helpful to include our engineering and product counterparts in our ideation processes. Collaborative exercises can sometimes be quite useful for this purpose. Conducting these exercises periodically within our teams can help build trust and generate buy-in. It can also help surface ideas and things to consider earlier rather than later in the design process.

As we are distributed globally you may opt for either an async or a sync collaborative exercise, depending on your goals and desired outcomes.

Below are a few of the exercises teams have run, organized by which stage of the design process you're in.

### Product direction and vision

When you're defining your product direction and vision, putting together an async board for your team to review your ideas – and add their own – can be quite useful. Some teams have run product direction workshops, which can either be [broadly](https://www.figma.com/board/vNxxMxNDcD9LgcJONuqpZt/GitLab-Duo-Chat-product-direction?node-id=0-1&t=1wZYG52QM1e72xWV-1) or more [narrowly focused](https://www.figma.com/board/ito0oanIxHNL42HH2IWIxe/AI-Framework-small-sync?node-id=0-1&t=5AurIwjIdhrAK149-1), depending on your needs.

An [altitude exercise](https://gitlab.com/gitlab-org/monitor/respond/-/issues/60) is an another approach. An altitude exercise solicits feedback at the satellite-level, airplane-level, and ground-level. This exercise can help gather feedback about strategy and the particular design details simultaneously.

### Ideation

If you're at the ideation stage of the design process, you might consider an asynchronous [ideation workshop](https://www.figma.com/board/WATUtNyV1Vlsz9DIVOMDER/Measure-AI-accuracy?node-id=0-1&t=iPQSAnQOeGfH0d6M-1). If you have a number of options you're weighing as a team, a sync [lighting decision jam](https://about.gitlab.com/blog/2022/01/19/collaboration-techniques-for-distributed-teams/) could help the team align on a way forward.

### Specific design feedback

If you've developed a design direction and want to give the team space to ask questions synchronously, an "ask me anything" style meeting can be useful. When running this type of session, ensure you share your design direction prior to the meeting so everyone has a chance to review and you can gather the best feedback.

Alternately, if you'd like feedback on common areas of [confusion](https://www.figma.com/board/1ikV7tqYaPV1g4gvWr4QbQ/AI-Settings-discussion-2024-04-25?node-id=0-1&t=47R6xGzEbcaJhx8g-1) or on the [technical feasibility](https://www.figma.com/board/WATUtNyV1Vlsz9DIVOMDER/Measure-AI-accuracy?node-id=0-1&t=4rChZf7wyE7d6zn0-1) of your proposal, putting together an async board for your team to review can be a great way to start these conversations.
