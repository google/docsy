---
title: Unmoderated usability testing
description: Using unmoderated usability testing at GitLab.
---

At GitLab, we use [UserTesting.com](https://www.usertesting.com/) for certain unmoderated testing for [Solution Validation](/handbook/product/ux/ux-research/solution-validation-and-methods/) and [Category Maturity Scorecard studies](/handbook/product/ux/category-maturity/category-maturity-scorecards/). Unmoderated usability testing allows us to obtain evaluative feedback from our users very quickly, thereby allowing us to iterate faster in a more independent manner that requires fewer resources.

### What is unmoderated usability testing?

Unmoderated usability testing is defined as a way to conduct usability testing without a moderator being present.  That means the participant will go through all of the tasks/instructions/questions solo.  This is typically accomplished through a service that also has a panel of participants.  The output of an unmoderated usability study are videos, which have to be watched and analyzed by the person who kicked-off the research.

### GitLab and UserTesting.com

For awareness, we don't have an unlimited amount of studies we can conduct with UserTesting.com, so please consider that when launching studies on UserTesting.com.

### Pros and cons

It's important to note that there are pros and cons to using unmoderated testing, and those should be considered before deciding to go with unmoderated vs. moderated. To illustrate:

**Unmoderated**

- Pros:
  - Very fast turnaround time (hours)
  - No coordination needed for scheduling or gratuities
  - Large, diverse participant panel
- Cons:
  - Can't talk to participants to get them back on track or to confirm if they understand the task
  - Requires a clear set of tasks/instructions/questions

**Moderated**

- Pros:
  - Able to have discussions with participants and go deep into an observed behavior
  - Can course correct if needed
- Cons:
  - Time consuming (weeks)
  - Requires scheduling and gratuity coordination

### Best practices for your study

- **Always launch your study with 1-2 participants first.** These serve as your pilot, and you'll use these results to determine whether participants understand your tasks and questions. The worst thing you can do is launch the study with all 5-8 participants only to find out that they interpreted your tasks and questions in a different way than you intended.
- **If you're asking rating questions, ask "why did you rate it that way?"** Since we're dealing with qualitative data, you'll want to understand the *why* behind those ratings.
- **Screen carefully and wisely.** Unmoderated testers get paid per study, so the more studies they take part in, the more they get paid. As a result, sometimes you'll get participants who may have lied their way through the screener just to get a study. To reduce the chances of that from happening, there's a handbook page on [how to write an effective screener](/handbook/product/ux/ux-research/write-effective-screener/).
- **Studies should not be too long**. A good guide is that the test should range between 15-20 mins. This can be gauged by going through the test in preview mode and with the small sample of 1-2 participants. For quicker tests consider using the [short test](https://help.usertesting.com/hc/en-us/articles/11880326870685-Short-test) format.

### Best practices for your prototype

If using Figma for your prototype, there are a few tips to keep in mind before attaching the link to your test:

- Set the prototype to `Fit to screen` to fill the participant's screen.
- Uncheck `Show hotspot hints on click`. Often participants know to search for these which may bias testing results.
- Even after disabling hotspot hints, the cursor changes while hovering over a clickable area in Figma. Try to provide some additional mock clickable options to users in the prototype to avoid making the main click option obvious for them.
- Uncheck `Show Figma UI`. This will allow the participants to focus only on your prototype without seeing extra information.
- Ensure that the sharing settings `allow the participant to view the prototype, and only the prototype`.
- Participants are able to view the name of the prototype in the tab, so avoid including any priming information here.

### Frequently Asked Questions

- **How do I know if my study is a good candidate for unmoderated testing?** If your study doesn't require you to explain details and if there's low risk of participants veering off course, your study is probably a good candidate for unmoderated testing. If you have any questions as to whether a study is a good fit for unmoderated testing, ask your UX Researcher.
- **What if I want to ask problem validation related questions?** UserTesting.com isn't your best option. Instead, go through the [recruitment process](/handbook/product/ux/ux-research/recruiting-participants/) to identify participants in other ways.
- **How many participants should I request per study?** Since we're using unmoderated for evaluation studies, the sample size should be between 5-8 participants per study.
- **Can I create a custom panel of existing GitLab users?** While it is possible to create a custom panel, we recommend using the UserTesting panel and use the screener questions that are already saved for you to screen for GitLab users in specific roles.
- **Can I screen for certain criteria?** Of course - whatever you want. The stricter the screener criteria, the less likely you are to find the participants you're looking for.  Note that there are already some GitLab screening questions in UserTesting.com for you to utilize.  You can find them under the 'Saved Screener Questions' within UserTesting.com.
- **How do the demographic filters work with all those checkboxes?** The way the demographic filters work is as follows: If no filter is selected, the pool of participants would include anyone in the UserTesting.com panel. When you start selecting filters, the pool of participants becomes specific to the filters you are looking for, hence a smaller pool of potential testers. Not selecting any filters does not exclude anyone from the study, on the contrary, you will target more participants in this manner. It's recommended to keep the demographic filters as general as possible and then use the screener questions to find the specific type of participant you are looking for.
- **Do I have to ask certain screening questions, to meet GitLab's requirements?** Yes.  At the very least, you must ask the 'Individual contributor license agreement' question - and possibly the IP Assignment question.  Both of which are already saved as a 'Saved Screener Question' within UserTesting.com for you to add to your screening criteria.
- **I ended up with a not-so-great participant (for example, they didn't meet the screening criteria, they weren't very vocal, or they didn't follow instructions, etc.). What do I do?** Within UserTesting.com, you have the ability to rate your participants on a 5-star scale.  If you rate them as 1-star, UserTesting.com Support will reach out to you and ask if you would like a replacement participant.  You can either say yes or ask for credit instead.
- **Do I have to worry about how many times I use UserTesting.com?** You should be aware that we have a limited number of 'units' that we use within the year.  It's not an unlimited number of units.  However, you are encouraged to utilize UserTesting.com as much as you need to.
- **How do I get an account?** Through an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/). UserTesting.com seats are allocated only to Product Designers and UX Researchers at this time, since those are the disciplines that are closely involved with solution validation and Category Maturity Scorecard testing.
- **How do recruitment and gratuities work?** When recruiting through the UserTesting.com panel, gratuities are taken care of.  You don't have to worry about that step at all.
- **What's the output of a UserTesting.com study?** Video clips and a summary of the data, if survey questions were asked.  Video clips can be downloaded to be used in Dovetail.
- **I'm not finding the kinds of participants I need in the UserTesting.com panel.  What do I do?** Reach out to @asmolinski2. Note that gratuities would have to be handled by the UX Researcher, though.
- **What's a '[short test](https://help.usertesting.com/hc/en-us/articles/11880326870685-Short-test)'? I see this option in UserTesting when I'm building my study.** A 'short test' a feature in UserTesting that allows you to conduct short studies, consisting of 3-5 questions. These are perfect to answer lightweight research questions that you need an answer to. An example might be a first-click study where you want to learn where participants click within a screenshot or workflow. The length of the study should not exceed 5 mins. The benefit to using a short test: it consumes half the amount of credits a standard UserTesting study would consume.
- **I have so many questions! Who can I reach out to with them?** First, try looking in [UserTesting.com's training materials](https://university.usertesting.com/page/get-started-with-usertesting) (UserTesting login required). If that doesn't help, ask in the Slack channel #ux_research_usertesting.
- **Should we "Enable Participant View" in UserTesting.com?** Enabling this setting will capture the participant's facial expressions as they work though the study and give you more insight into how they feel. However it is not mandatory to enable this setting. Consider adding a multiple-choice (single select) question or verbal question asking them about the confidence in their action, if that is the data you were hoping to get on camera.
- **Do we have a template I could use to quick start my study?** Yes, check out [account templates](https://app.usertesting.com/workspaces/509645/choose-template) and choose one from there.
- **How do I eliminate question order bias in a study?** When trying to assess prototype A vs. prototype B, you can use a [balanced comparison](https://help.usertesting.com/hc/en-us/articles/11880445536541-Balanced-comparison) to alternate the order that participants see the variants to reduce the risk of ordering bias on results.
