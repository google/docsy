---
title: Artificial Intelligence POV Scope and Acceptance
description: Artifical Intelligence POV Scope and Acceptance
---

Other AI Resources: [Lab](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) | *Demo* | *Guided Trial* | **POV** | *Education Services* | [Professional Services](https://about.gitlab.com/services/#advisory-services)

## AI POV best practices

We need to proactively identify languages, testing questions and teams with them. Below are the best practices to review before the start of the POV:

- Small team size
- Languages which has a lot of open source contributions like Java, Python
- Proactive testing scenario
- Time boxed hands on POV with active guidance throughout
- Conduct a pre survey before the POV and post survey after the POV to gauge the success
- Verify which IDEs and versions will be used for the POV
- Prior to the POV, host office hours to assist in installing the GitLab Duo plugin in IDEs
- Create a collaboration project to keep track of issues and resolutions during office hours
- Provide the team lead and users with the [Getting Started with GitLab Duo Enterprise document](https://docs.google.com/document/d/1aK8IJMiYCs-7isZ-Ek-FnolY29_WJdexG_x1tkcLGs4/edit?tab=t.0) (internal only - can be distributed to the team lead) for all AI evaluations
- Provide the GitLab University - [Duo Learning Track](https://university.gitlab.com/pages/ai#developers-quick) , and this document with [quick start links](https://docs.google.com/document/d/14j5H5IlySAhJ0EUpcrpJy3jwQxTdmw5c1uLKVlymEGI/edit?tab=t.0) to various Duo topics
- Kick-off the POV with a workshop for a headstart. The schedule could be the following, for a 2-hour session
  - 5 min - welcome participants
  - 5 min - introduction
  - 20 min discussion about Gen-AI for development, and pitch of GitLab Duo
  - 1h20 min workshop
  - 10 min conclusion and next steps
- Make it as easy as possible for participants to experiment with the features, using the following recommendations and adjusting to the context:
  - Onboarding process. Minimize the number of steps needed for a participant to opt into the POV.
    - Example process:
      - Survey to gather participants' name, role, GitLab account
      - Participant is enrolled in the POV instance, and given access to the right projects
      - Participant is invited to POV meetings
      - In the meeting invitation, participant finds instructions to access the POV instance, link to pre-POV survey, link to instructions to go through the workshops asynchronously, etc.
  - Make sure that the POV environment is made available to participants for the kick-off session, even if this session doesn't include a workshop.
    Some participants may want to start experimenting with the solution during the kick-off or right after.
  - Give simple and clear instructions to ask for help:
    - Where to create an issue and who to tag
    - Invitation to Office Hours
- Bias for guided, hands-on activities. See POV activities for inspiration
- When POV goals are to surface quantitative indicators of improvements brought by AI-powered features, it is tempting to adopt a comparative study approach for the workshops or hackathons described above.
- It consists of assigning the same task to two groups of developers. One group works “as usual,” while the other is allowed to use AI-powered features. Optionally, a second assignment is given, and the two groups are switched around.
- A drawback of this approach is that working without AI-powered features isn’t very fun. Considering how precious it is in enterprise settings to have time dedicated to this kind of initiative, spending it on “working as usual” may not be ideal.
- As an alternative, ask participants to log, for each task
  - Before: a time estimate if they were working as usual
  - After: the time it actually took, with the help of AI-powered features.
  - After: include qualitative feedback about the comfort of working, quality of software, etc.
- Familiarize yourself with [Duo Chat best practices](https://about.gitlab.com/blog/2024/04/02/10-best-practices-for-using-ai-powered-gitlab-duo-chat/) and [Duo Code Suggestions top tips](https://about.gitlab.com/blog/2024/06/11/top-tips-for-efficient-ai-powered-code-suggestions-with-gitlab-duo/). There are some great tips and tricks in this blog to assist with integrating Duo Chat and Code Suggestions into a customer’s workflow. Check the documentation for more practical [GitLab Duo uses case](https://docs.gitlab.com/ee/user/gitlab_duo/use_cases.html).

## Pre-requisites

We need to make sure the customer has gone through the AI hands-on [workshop](/handbook/solutions-architects/tools-and-resources/workshop/) to have a great experience with AI POV. We also recommend building a technical close [plan](/handbook/solutions-architects/sa-practices/technical-close-plan/) and getting agreement from your customer before the POV start.

### Input to the POV

- Example Customer [template1](https://docs.google.com/presentation/d/1m1u65qa8oj0_hHTklnhWAjyHxR8euQ14/edit?usp=sharing&ouid=113388956697042742039&rtpof=true&sd=true)
- Example Customer [template2](https://drive.google.com/file/d/1vAOW0Kko24ASeN7XDMnkHMWfGc57R9cw/view)
- Streamline your POV by adopting [3 Goals in 30 Days](https://docs.google.com/presentation/d/1PIDwrVSywtz82OANmRpO3rhRPKzh64CoLWf1xqGsBEQ/edit#slide=id.g237d0ad8d2e_0_1287) 

### Setting up the POV instance

Set-up the POV instance with your customer's POV lead or technical counterpart.

- Getting GitLab Duo trial Licenses
  - For existing GitLab customers, [follow the steps here to request Duo trail](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html#start-gitlab-duo-pro-trial)
  - For prospects, request trial licenses [here](https://about.gitlab.com/solutions/gitlab-duo-pro/sales/?toggle=gitlab-duo-pro) 
- Setup the patricipant environment, their IDE and do a trial run. Below are a few links and documents to help.
  - GitLab University - [Duo Learning Track](https://university.gitlab.com/pages/ai)
  - Getting Started Documents - [Getting Started with GitLab Duo Enterprise](https://docs.google.com/document/d/1aK8IJMiYCs-7isZ-Ek-FnolY29_WJdexG_x1tkcLGs4/edit?tab=t.0)
  - [Quick Start - Duo links](https://docs.google.com/document/d/14j5H5IlySAhJ0EUpcrpJy3jwQxTdmw5c1uLKVlymEGI/edit?tab=t.0)
- Import the public [AI POV Plan project template](https://gitlab.com/gitlab-com/account-management/templates/ai-pov-plan) at the root of the POV group, namespace, or instance.
  - It is intended to be used as a central point of entry for participants to make all useful information and resources easily discoverable for testers.
- Follow the checklist provided in the REAMDE.md to customize this project
- Configurations needed in the instance or group are better done by the customer's POV lead
  - This way they have ownership and understanding of the configuration
  - It is also on them to review the terms of experimental features to be turned on, and GitLab's [testing agreement](/handbook/legal/testing-agreement/)
- Test AI-powered features in various settings, before undertaking any POV activity. Troubleshoot or adjust POV activities accordingly.
  - within the customer's network or not
  - with a VPN enabled or not
  - with different IDEs including the Web IDE

## POV Activities

The following are different workshop formats to pick and combine in order to facilitate and lead the POV.
Examples of POV activity timelines:

- Customer A
  - Week 1: Kick-off and standard guided workshop
  - Week 2: Custom workshop on IDE integration setups and IDE features
  - Week 4: Standard guided workshop for a second set of users
- Customer B
  - Week 1: Kick-off and standard guided workshop
  - Week 3: Custom workshop on improving quality and generating documentation
  - Week 4: Coaching the POV leads to prepare an internal demo
  - Week 6: AI Hackathon, in three separate sessions, with a measurement of productivity improvement (see [Comparative Study](#comparative-study))

### Standard AI Workshop

The standard AI workshop leverages the [Tanuki Racing](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing) project from [GitLab Learn Labs](https://gitlab.com/gitlab-learn-labs).

- Under [Courses / Workshops / AI](https://gitlab.com/gitlab-learn-labs/sample-projects/tanuki-racing/-/tree/main/Courses/Workshops/AI?ref_type=heads) are the workshop instructions

Depending on the availability of the SA in charge, this workshop is either delivered

- In a synchronous, instructor-lead session, for optimal engagement
- In a self-paced, asynchronous setting, for low-touch engagements, or for participants unable to attend the sync session
  - Instructions in the workshop project are intended to suit this case.
  - A recording of the session may also be made available.

### Custom AI Workshop

This approach consists of customizing the standard AI workshop to a customer's specific needs or context.

- Consider exploring specific workflows that matter to the customer.
- Make sure to thoroughly test the workflow before the workshop, and adjust prompts and instructions as needed
- Consider using a different project to support the workshop. Either an open source project, or a customer project could be used to focus on a specific framework or language
  - If a customer project is used, first validate whether or not it is allowed to be uploaded to the POV instance or namespace.

It requires more involvement, both from GitLab's side and from the customer side. Validate this with the POV lead before starting the initiative.
It is also likely to yield higher engagement and enthusiasm from the participants. And to give decision makers a more accurate understanding of the value they can expect, including quantitative indicators.

### AI-powered Hackathon

This approach goes one step further in terms of involvement, both for preparation, and for the workshops themselves. Workshops are usually 1.5-2.5 hours long, whereas hackathons typically last half a day to a full day.

Participants form teams, and use AI-powered features at will for a given period of time to deliver a prototype.

A hackathon project is prepared to give participants

- Instructions and links to useful resources
- A project boilerplate, helper functions, evaluation functions. Consider having multiple versions for multiple use cases or languages.
- A GitLab issue, issue template, to log time estimates and results. The project's readme may also be used for this purpose

The scope could be

- The same for all teams. Eg "Flight tracking app" or "Competitive quiz app"
- To be chosen within a set of assignments.
- Free: develop whatever you want in the allocated time. Give some example use cases.
- Consider public coding challenges, which are good candidates for hackathon assignments, as they usually give
  - instructions and boilerplates for teams to use.
  - clear success/failure or performance for each tasks, when there is a possibility to submit a solution and get instantaneous feedback.
  - time estimates or public leaderboards for each tasks, which can be useful to estimate the value of AI-powered features
- A caveat to public coding challenges is that they could sometimes be considered too far from the reality of enterprise work. To be discussed  ahead of time with POV leads.

Additional guidance:

- Be mindful that a hackathon setting could be intimidating or stressful to participants because of:
  - Time pressure
  - Working on unfamiliar tasks
  - Working outside of their usual tooling
  - Starting from scratch, which may not be frequent in enterprise settings
  - Feeling exposed to coworkers or managers judgment
  - Discovering new AI-powered features
- To mitigate this discomfort:
  - Set expectations: participants are not expected to complete all tasks, or deliver perfect software in such a short timeframe
  - Set rules of conduct for participants, about openness, kindness, communication
  - Prepare resources and tools in the hackathon project
- To make the most out of the allocated time for the hackathon, consider forming teams before the workshop.

### Comparative study

When POV goals are to surface quantitative indicators of improvements brought by AI-powered features, it is tempting to adopt a comparative study approach for the workshops or hackathons described above.
It consists of assigning the same task to two groups of developers. One group works "as usual", while the other is allowed to use AI-powered features. Optionnally, a second assignment is given, and the two groups are switched around.

- A drawback of this approach is that working without AI-powered features isn't very fun. Considering how precious it is in enterprise settings to have time dedicated to this kind of initiatives, spending it on "working as usual" may not be ideal.
- As an alternative, ask participants to log, for each task
  - Before: a time estimate if they were working as usual
  - After: the time it actually took, with the help of AI-powered features.
  - After: include qualitative feedback about comfort of working, quality of software, etc.

### Guided Workshop best practices

Before the workshop

- See setup of the POV instance
- Have a dry run, to surface and tackle any issues with the GitLab instance, or videoconference: screen share, breakout rooms, etc.

During the workshop

- Lead the workshop with a co-host from GitLab, who is familiar with the workshop.
  - The co-host can answer questions in the chat, and help some of the students troubleshoot without slowing everyone down.
  - Useful resources include our docs' troubleshooting section, Field FAQ, AI SME FAQ
- Use video conference chat messages to gather feedback with emojis, in order to engage the audience and follow students' progression along workshop steps
  - Ex: "What's your favorite IDE?" "What's the language or framework you use the most", "Workshop project created?", "Pipeline triggered?", "Vulnerability fixed?", etc.
- Keep some time at the end to gather feedback, and prepare next steps.
  - Questions like "What features do you wish to test further?" will hopefully keep students involved after the workshop.

After the workshop

- Ask the customer POV lead about the feedback they had internally
- Give feedback about the workshop, in the appropriate GitLab project or Slack channel

### Results

### Tracking

### Other POV Scope and Acceptance

SA working with SAE and AE can define the POV scope with the customer, with alignment to the business values and the GitLab solution. For each solution, the typical scope and acceptances are listed for reference but the team should define the scope, time and execution with acceptance for each engagement.

- [DevSecOps](/handbook/solutions-architects/tools-and-resources/pov/devsecops/)
- [Automated Software Delivery](/handbook/solutions-architects/tools-and-resources/pov/automation/)
- [DevOps Platform cumulatively](/handbook/solutions-architects/tools-and-resources/pov/platform/)

## AI engagements in general

### Discovery - adapt to the customer's context

As early as possible, actively discover your customer's specific context.
For instance, before even presenting GitLab's vision or positioning, ask the customer if they have an existing company strategy or guidelines, or personal opinions on Gen-AI in general, and for development.

Inquire about the following topics

- Vision on Gen-AI
  - Sentiment: afraid of AI vs excited about the technology vs cautious about security implications
  - How much is expected: a complete overhaul of practices, or punctual help for developers
  - Understanding of the market: awareness of the multiple vendors and products? Do they see AI models as a "winner-takes-all" or as a commodity?
- Company strategy
  - Is Gen-AI for software development an isolated effort, or part of a bigger initiative? In the latter case, it might be useful to understand the topics, metrics, timeline, and decision-makers involved.
  - Are other Gen-AI tools already used?
  - Are developers authorized to use Gen-AI tools that were not vetted and purchased by the company? What are the security and privacy implications? Are there control mechanisms in place to prevent this kind of shadow IT?
- Use cases and workflows
  - Providing comfort and productivity for developers (code generation performance)? Or broader vision over the broader picture = SDLC performance.
  - Metrics
  - Objectives and key results
- Constraints. Depending on the answers to the following questions, some AI features might not be immediately available. Or they may not apply to a subset of projects.
  - Self-managed or Dedicated? Cloud licensing possible? Premium or Ultimate?
  - Security and Privacy: allow for API calls outside their infrastructure? Including sending proprietary code?

Examples of customer inputs that had a significant influence on the technical evaluation:

- "Code suggestions are not useful for us, we don't want to activate that feature. Instead, we're looking to leverage GitLab Duo to make the most out of our existing applications: documenting, refactoring, adding tests, innersourcing, etc."
- "We only want to use AI features if they're connected to self-hosted, custom AI models, without any data leaving our network"

### Elements of perspective and communication on Gen-AI features

The following elements proved effective to influence positively the way AI-powered features are perceived.

**Pioneer/learning mindset**: Gen-AI is relatively new for everyone everywhere. As early adopters, we'll learn the best patterns to interact with it, and be creative to surface new use cases where AI will prove most useful

- Customers might ask for features that are not currently available, and which could sound too ambitious or not technically feasible. Try to be open, don't dismiss these ideas too quickly. Consider how a combination of GitLab's existing or roadmap features could serve this purpose, specifically GitLab Duo Chat which is very versatile.
- Encourage this kind of reflection with questions like: Without considering any technical constraints, what use cases would you like AI to perform? Can you think of any creative use that could be made of the current feature set?
  - This is meant to put attendees in a position to find potential solutions, rather than finding potential issues.
- Examples of creative use cases that can be achieved
  - "I'd like the AI to document legacy applications" could be achieved by customizing the /explain action
  - "I'd like to convert Python code to Java" or "Convert a Jenkins pipeline to GitLab CI". This could be achieved by customizing the /refactor action
  - "I'd like an answer in a language other than English". This typically works pretty well, although our Product team does not actively optimize for multi-language support.

**Playfulness**: The element of "randomness" in AI can be fun. Early-stage, experimental

- When demonstrating GitLab Duo Chat, encourage attendees to try it themselves, or give you creative prompts.
- Even out-of-context questions like "give me the recipe for apple pie" add some fun, and demonstrate that there are some guardrails in place - AI typically responds that this is not the kind of question they can answer.

**AI as an assistant to developers**, as opposed to an autonomous software delivery system
highlights the importance of the developer's role and skill: review, adjust, use AI as a tool

- Mention the [reason behind the name "GitLab Duo"](https://about.gitlab.com/blog/2023/06/22/meet-gitlab-duo-the-suite-of-ai-capabilities/):
  > The name GitLab Duo is rooted in You + GitLab AI = the AI dynamic duo.
- Be mindful that some companies or individuals might have a pre-existing bias against Gen-AI. Some might even see any Gen-AI effort as dangerous, or as a way to replace human workers. If this is the case
  - try to understand why
  - consider giving a presentation to popularize Gen-AI to explain how it works, and explore its strengths and limitations. This could go a long way towards putting it under a more favorable light.
  - Convey the message that any Gen-AI suggestion is only useful if used in the right context, reviewed, and adjusted as needed by an expert.
  > GitLab Duo is a customer-centric approach focused on privacy first, where customers know their intellectual property is secured.

### Expect the unexpected

Gen-AI won't necessarily give the same answer to the same prompt.
You will run into use cases where AI gives unexpected, wrong, or no answers in your demos. Also keep this in mind when leading a workshop, as a portion of the students will probably experience this.
While this could typically be interpreted as "failing" in a regular context, it doesn't necessarily have to be the case for AI conversations. Use the following to mitigate the negative impact this might have, and even turn it to your advantage:

- Manage expectations and mindset, both for a person running a demo or for someone following a workshop
  - Mention that this is expected, and inherent to Gen-AI. It is neither a bug that will be fixed nor something specific to GitLab's Gen-AI features.
- As a presenter, be prepared for these "happy incidents"
  - Be prepared to brush it off of laugh it off. One wrong suggestion is not a big deal. After all, it's not a true demo until something goes wrong.
  - Use them as opportunities to adopt [pioneer/learning/playful mindset](https://gitlab.com/gitlab-com/content-sites/handbook/-/edit/pdumaitre-main-patch-06406/content/handbook/solutions-architects/tools-and-resources/pov/ai.md?from_merge_request_iid=3693#elements-of-perspective-and-communication-on-gen-ai-features), or convey the messaging that AI is meant as an assistant to development teams.
    > "If you want to dig into this later, I'm sure we'll be able to find the right prompt to make this work"
    > "Good thing I'm following best practices and reviewing AI suggestions"
    > "Glad to see I'm not obsolete just yet!"
  - The unexpected answer might be at least partially useful, or serve another purpose
  - Re-try with the same prompt, or with a very slight change
  - Have alternative prompts or use cases ready
- If you are presenting in a high-stakes setting where "nothing should go wrong" use video recordings as a backup
