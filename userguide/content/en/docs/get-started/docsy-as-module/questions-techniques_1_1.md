---

title: "Questions & Techniques for Success Plan Discovery"
---







View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

The questions and techniques described on this page will provide you with some ways to drive a strategic conversation with a customer, and explore the information you need to develop an [effective success plan](/handbook/customer-success/csm/success-plans/).  A Success Plan should always be a continuation of the [Command Plan](/handbook/sales/sales-operating-procedures/engage-and-educate-the-customer/#step-5-qualify-the-opportunity) where available.  The below questions are for further expanding on what we know from the Command Plan, or refreshing on objectives if it has been some time.

## Open-ended questions

Asking open-ended questions is the most effective way to get clarity from the customer about what they are trying to do, what their priorities are at the moment, and their plans for the future. Calling back to your Command of Message trainig, don't forget about TED. This acronym  provides a basic framework of open-ended questions to ask during customer calls.

*T* Tell me about...
*E* Explain for me...
*D* Describe for me...

## “Where do we go from here?”

The most straightforward and open-ended approach to starting a conversation about stage adoption, growth, and strategic objectives is something to the effect of:

> "So I know right now you're using [[use cases](/handbook/marketing/use-cases/) in use, such as SCM, CI, etc.] - where can we go from here to maximize your success and value?"

This question creates an opening to explore driving additional value for the customer, with the customer leading.  From here, we can explore with the customer use cases or features they're interested in knowing more about, business problems they could solve using GitLab, or anything else related to GitLab or DevSecOps. This one question also sets you up for more targeted follow-ups.

If the customer responds that there is nothing else they need or are interested in, you can start asking questions about their current situation.  These questions can explore what challenges they are currently working on, the focus of their manager or company, etc. to take the conversation in other directions that may give you an opening to make suggestions.

Instead of asking about GitLab and how GitLab might help them, turn the conversation around to talk about their business. Listen actively, let the customer talk without interjecting, and then explore how what you heard could be activated in the GitLab platform.

- "Last time we spoke, you mentioned you had other initiatives you were working on outside of GitLab.  Would you be open to sharing what those goals are?  I would like to understand your focus now and in the future so that I can be continually bringing new features and strategies on GitLab to you as are relevant.

## Sync/Refresh

When you already have some information in your Success Plan but have identified gaps in your knowledge, you can approach the conversation as a periodic review to make sure everyone is on the same page.

- “I’d like to understand better [item already in success plan or command plan], can you tell me more about the problem and the outcome you’re looking for?”
- “It’s been a few months since we reviewed the main objectives you have. Can we take a few minutes to go over those and make sure I’m aligned with your current objectives?”
- “Over the last couple of conversations you mentioned [topic or focus from prior meeting(s)], can we talk some more about that?”

Once you’ve opened the conversation, use some other techniques to gather details, and level up to strategic objectives.

## Commiseration/Empathy

If you have a good relationship with your champion, you can appeal to a shared feeling of “we all have a job to do” in explaining that you need to gather some information about how their business operates and what they’re focused on.  This approach works well if suddenly asking goal questions within your standard cadence calls could seem awkward.

- “I have some questions I need to ask so I can fill out some paperwork about what you’re focused on. You know how it goes!”
- “My manager is telling me I need to fill out some information about my customers - I’m sure you know how that goes - so I have a few questions I’d like to ask.”

Once you’ve opened the conversation, use some of the other techniques to gather details and level up to strategic objectives.

## “Day in the Life”

Asking about developer or team workflows is a good way to better understand a customer’s current toolchain and SDLC process. This is useful in developing a plan to drive stage adoption, and to ask about pain points, [metrics](/handbook/sales/command-of-the-message/metrics/#connect-metrics-with-positive-business-outcomes), and dig towards business outcomes.

- “Take me through the workflow of an average developer. What tools are they using? How long does it take for them to go from starting a feature to submitting the merge request?”
- “What are the bottlenecks you see in your current processes?”
- “What areas of improvement are you most focused on in your SDLC?”

## Metrics Based Questions

Ask your stakeholders about the metrics they care about, how they measure them now (if at all) and how GitLab can help measure those.
Ask the customers the following questions that tie back to [our three Value Drivers…](/handbook/sales/command-of-the-message/#customer-value-drivers)

- Increase Operational Efficiencies
- Deliver Better Products Faster
- Reduce Security & Compliance Risk

1. Are you measuring cycle time? Is this an important metric for you?
   - If yes, how are you doing this today?
   - If not, have you seen our project & group level Analytics > Value Stream?
   - **Note:** There are [customizable stages](https://docs.gitlab.com/ee/user/analytics/value_stream_analytics.html#customizable-value-stream-analytics) in Premium.
1. Are you measuring deployment frequency? Is this an important metric for you?
   - If not, this can also be done at the project & group level via Analytics > Value Stream displaying Deployment Frequency (deploys per day) over the last 7/30/90 days.
1. What metrics do you use for developer/team productivity?
   - Depending on the answer, we may or may not have built-in metrics for this but its still good to find out how they measure productivity.
1. Have you been able to reduce the size of your toolchain through your implementation of GitLab?
   - If not, why not?
   - If yes, how much time and money has this saved for you?
1. Are there any other metrics that you measure or that you want to measure?
1. What’s important to you and how can GitLab help measure that?

## Stage Adoption

We also want to ask about Stage Adoption metrics so that we can tie their GitLab usage into Stage Adoption.
(**Note:** All of these can be found along with how we measure stage adoption in our [Stage Adoption Metrics](/handbook/customer-success/csm/stage-adoption/) page)

- **Plan**
  - What tools do you use to organize, plan and track project work?
  - Describe your issue and epic workflow.
  - What percentage of your users/teams are using GitLab for this?
  - Do you have a separate QA department?
  - Describe the workflow between the dev team and the QA team?
  - Are you using some tools to create and manage the QA test plans?

- **Create**
  - Where do you manage your code base?
  - What processes do you follow for code reviews?
- **Verify**
  - What types of Runners are you using today? (shared, group, specific)
  - What tools are you using for continuous integration?
  - What percentage of projects/teams are using GitLab CI?
- **Package**
  - Are you using GitLab for CI?
  - Do you currently containerize your apps?
    - If yes, what container registry are you using?
    - What percentage of your projects are building containers?
    - Which features are important to you in a container registry?
    - Do you have customized workflows or requirements?
    - What is working / not working about your current container registry?
  - Do you package any libraries? Are you planning to?
    - What languages are you using?
    - Which features are important to you in a package registry?
    - What is working / not working about your current package registry?
  - Do you want to provide public access to any of your containers or packages?
- **Secure**
  - What do you use to scan your application source code and binaries?
  - Do you analyze your running web application for known runtime vulnerabilities?
  - What do you use to check your Docker images for known vulnerabilities?
  - Do you look for known vulnerabilities in your external dependencies?
- **Release**
  - Are you using GitLab to deploy your applications?
  - Do you use GitLab Pages to create, manage and deploy static sites?
  - Are you making use of review apps to get a full production like environment in every merge request?
  - How do you currently manage your releases? (i.e. versioning, release notes, etc.)
- **Configure**
  - Are you using AutoDevOps to provide your users a pre-defined CI/CD configuration?
  - Are you using Kubernetes for any of the following scenarios?
  - Deploying software from GitLab CI/CD pipelines to Kubernetes
  - Using Kubernetes to manage runners attached to your GitLab instance
  - Running the GitLab application and services on a Kubernetes cluster
- **Monitor**
  - How are you monitoring the stability and performance of your GitLab instance?
  - What do you use to monitor your deployed applications?
- **Govern**
  - How do you manage your organizational security policies?
  - How do you manage your dependencies?
  - How do you manage your vulnerabilities?
  - How do you audit for user activity?
  - How do you enforce compliance requirements?

## Short/Medium/Long Term Priorities

Asking the customer to rank their team’s main focuses on a timeline makes it easier to prioritize your efforts. It also sets you up for follow-up questions about what is driving those priorities, and how they are related to strategic objectives.

- “What are you most focused on for the next [3/6/12/24] months?”
- “What are your most immediate goals to improve your DevOps processes?”
- “What are your long-term objectives for your organization’s DevOps and SDLC?”

## Higher Level Priorities

It can be helpful to ask what your champion’s manager or department is focused on, since it can help move you towards strategic objectives.

- “What are your department’s main objectives for the year?”
- “What is the highest priority goal that your company has to improve the SDLC/DevOps process? What do you see as the biggest challenge to achieving that goal?”

## Leveling Up from Operational/Technical to Strategic

As CSMs, customers often expect that our focus is on the technical details of their GitLab usage and environment. While we should be preprared to discuss technical and operational concerns, particularly related to GitLab implementation, we should always be thinking (and talking) about how those details relate to strategic business outcomes.

When the conversation moves into a highly technical space, these questions can help you level it up to business outcomes again, and tie those technical details back to the larger strategy.

- "What's the business problem you're trying to solve for?"
- "What's the use case you're addressing?"
- "Who is the user that needs this capability?" *(You want to understand what type of user they are envisioning - developer, project manager, product owner, etc.)*
- "What will success look like when this is implemented? How will you measure that?"
- "Can we take a step back and look at how this relates to the larger workflow?" *(This question helps you to guide the customer's technical thinking to the bigger picture, setting you up for follow-on business questions)*

## Finding the right person to talk to

[Leveling up the conversation](#leveling-up-from-operationaltechnical-to-strategic) will sometimes reveal that our main points of contact are not familiar with the business outcomes that their company is trying to solve with GitLab. When that occurs, we want to identify and connect with the person who can help us understand those.

Here are some questions you can ask to get to the right person:

- "Who do you think might be able to help us understand [stated objective]?"
- "Is there anyone else that we should include in this conversation?"

## Five Whys

Frequently when talking to our champion or their team, the things they will tell you they’re focused on are operational or technical concerns, but aren’t strategic business outcomes. One technique that can be used is the [5 Whys](https://en.wikipedia.org/wiki/Five_whys). The basic overview of this technique is that when a customer tells you a focus or goal, you can get to the strategic objectives behind this focus why asking "help me better understand why that focus is important?" or something along these lines. On average, asking a "dig deeper" question takes 5 "rounds" as such before you get to the core problem, or in our case strategic initiative.

For example:

> **CSM:** As we enter in to the second half of this year, would you please help me to better understand what your key focus is?
>
> **Customer:** My primary focus is setting up a HA infrastucutre.
>
> **CSM:** Great! Would you please help me for my understanding what current challenges you are looking to solve for with HA?
>
> **Customer:** We want to increase our uptime and scalability.
>
> **CSM:** That makes sense, and is a pretty common scenario for our customers. What are your primary concerns related to uptime and scalability right now?
>
> **Customer:** We've been adding users to our GitLab instance and have seen some performance problems during times of peak usage, with occasional outages when the system is under heavy load.
>
> **CSM:** Ah ok, good to know! What impact is that performance decrease having to your business, and what improvement are you looking to achieve by implementing HA?
>
> **Customer:** Improving GitLab's performance and reliability will make our development teams more effective, since they can count on GitLab to work well throughout the day.
>
> **CSM:** That sounds like a big productivity benefit! How does developer efficiency relate to your company's larger software development objectives?
>
> **Customer:** The CTO has an objective to reduce the time it takes to ship releases so we can get new features to market faster.

By asking additional "why does this matter?" questions after the initial mention of wanting to set up GitLab with HA, the CSM in this scenario was able to get to a business outcome that comes straight from senior leadership. From here, the CSM can [ask about metrics](/handbook/sales/command-of-the-message/metrics/#connect-metrics-with-positive-business-outcomes), pain points, other tools in their DevOps workflow, and other discovery questions to understand success criteria for the business outcome.

If you'd like to see more examples of how to use the Five Whys framework and what it could look like in practice, take a look at the [Five Whys breakout session from SKO 2021](https://gitlab.edcast.com/insights/breakout-leveling).

## Examples

### Customer meeting about DORA Metrics with GitLab

One of our customers has asked to have a meeting to understand what GitLab can offer related to metrics, specifically they've mentioned [Dora Metrics](https://docs.gitlab.com/ee/user/analytics/ci_cd_analytics.html#dora4-metrics) as the topic of interest, their [Developer Experience Lead](/handbook/product/personas/#delaney-development-team-lead) will be attending. We can't lose the opportunity to gather valuable information to build a Metric adoption's Success Plan.

[Orit Golowinski](/handbook/company/team/#ogolowinski),  Release Stage Senior Product Manager,  has shared some open-ended questions that would be useful in another similar scenario illustrated above.

- What do you measure today?
- What do you want to measure? Why?
- What additional info is interesting to understand the graphs (i.e., Deploy Freeze, release days,  etc.)
- Who is interested in the data? In what granularity is it required?
- Are there additional tools involved? Which ones?
- Would API/export CSV from GitLab help display all data in one place?
- What other metrics you interested in? (i.e., developers' performance, the time between releases, etc.)
