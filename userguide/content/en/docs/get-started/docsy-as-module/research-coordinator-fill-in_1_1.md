---
title: "How to fill in for a UX Research Operations Coordinator"
description: "This page details the steps required to execute a successful recruit from start to finish"
---

There are times when you will play the role of UX Research Operations Coordinator. This page details all of the ‘behind the scenes’ steps needed to execute a successful recruit from start to finish. Are you interested in how to work with our UX Research Operations Coordinator? If so, you can find that information [here](/handbook/product/ux/ux-research/recruiting-participants/).

## The Process

### Step 1 - Familiarize yourself and communicate to others

- The UX Research Operations Coordinator will open a coverage issue in the UX Research project listing out the priority of projects, what needs to be done, and link to any resources that may be helpful while they are unavailble.
- The UX Research Operations Coordinator will @ mention you on any ongoing recruitment issues that you need to pick up. They will provide you with a clear description of the status of the issue and what needs to be completed.
- The UX Research Operations Coordinator will assign you to any of these ongoing issues so you can easily track them.
- The UX Research Operations Coordinator will also share the Open Recruitment Projects sheet with you and tag you on projects that require assistance.
- Introduce yourself, in the `#product` and `#ux` Slack channels, as the recruitment point of contact for the next X days and/or weeks.
  - If people attempt to raise recruiting requests in Slack, remind them to [create a recruiting request issue](/handbook/product/ux/ux-research/recruiting-participants/#opening-a-recruitment-request) and assign it to you for tracking and visibility purposes.
  - Remind them an issue has been handed off to you once you confirm the handoff in a comment.
- Be sure to join the `#uxr_reops` Slack channel for easier coordination if there is more than one person covering for the UX Research Operations Coordinator.
- If the UX Research Operations Coordinator is going to be unavailable for more than 7 consecutive business days they will open an MR on the Research Recruiting & Incentive Request Issue Template to make sure whoever is covering for them is auto-assigned to newly opened issues.

### Step 2 - Dealing with new recruiting requests

***Note: Remember to update the issue with every action you take and its results.***

- Assess the desired timeline. Our SLA for recruiting is 2 weeks minimum depending on the criteria, although some requests are fulfilled much more quickly.
  - Keep in mind:
    - If they say they want to speak with users “in the next couple of days,” communicate that recruiting may take up to two weeks.
    - The more specific the recruiting criteria (the more qualifications they have or the greater number of respondents they need) the harder it will be to recruit and the longer it will take.
      - Example: A request for five software developers who have used our global search feature would be very straightforward and quick to recruit for. A request for 100 self-managed admins who recently upgraded to Ultimate would be more difficult and time-consuming to recruit for.
- Assess the recruiting criteria to ensure you fully understand who they are looking to research. Is any of the criteria ambiguous to you?
  - Ask questions until you can distill the criteria down to a few bullet points, for example:
    - DevOps engineers
    - Responsible for configuring environments for their team
    - At large organizations (500+ people)
    - GitLab or non-GitLab users
- Review the Qualtrics screener
  - Ascertain if the current questions will provide the needed screening criteria. If not, provide feedback in the recruitment issue and suggest edits until the screener directly maps to their stated criteria.
  - Don’t forget to reach out to the UX researcher for assistance. They help the PM and/or Product Designer put together the screener in Qualtrics.
  - The person requesting the research is responsible for creating the screener in Qualtrics and adding you as a contributor.

### Step 3 - Choose the best recruiting channel from these options

- **[Data warehouse contacts](/handbook/product/ux/ux-research/recruiting-participants/#finding-gitlabcom-users-in-the-data-warehouse)**
  - Requires editor access & SQL knowledge
  - Contains GitLab SaaS user information.
  - Can be used to identify respondents for surveys.
  - Pull contacts of GitLab SaaS users and then follow the usual process in Qualtrics.
- **Respondent.io:**
  - Great for quick turnarounds, or when participants don’t necessarily need to be GitLab users.
  - How to use it:
    - Log into Respondent and build and launch the campaign, using the screener from the person conducting the research.
    - Take care to double check your criteria and set the correct questions to “disqualify” participants. For example, you can specify that you only want Jira users by setting 'Jira' as a 'must select' response in the relevant question. This will automatically disqualify anyone who chooses another response. This saves you time by reducing the volume of screener responses you need to comb through. It also helps non-researchers easily see who is qualified to take part in the study.
- **[UserTesting.com](/handbook/product/ux/ux-research/unmoderated-testing/)**
  - Good for unmoderated usability tests
  - We can leverage their panel to recruit technical users
- **Using Team members to socialize requests:**
  - How to use it:
    - Post in Slack channels like #ux, #product, and #whats_happening_at_gitlab . Include a concise call to action, due date, and share the link that you want people to post.
- **[Direct outreach](https://www.youtube.com/watch?v=rc2IX1e2sQ8&feature=youtu.be) on LinkedIn:**
  - How to use it:
    - You can search for the criteria you are looking for and use inMail credits to invite them.
    - If you do not have a Recruiter License, you will need to open an access request.
  - Watch this [video](https://youtu.be/rc2IX1e2sQ8) for how to get started
- **Marketing newsletter:**
  - ***Note: Reserve this for critical studies, like the SUS.***
  - The newsletter is sent on the 10th and 25th of each month.
  - How to use it:
    - Submit a request for the survey to be included in the newsletter. Here is an example [issue](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/4087).
    - Search the Digital Marketing [project](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues) for `newsletter 2020` and select the issue for your target date. If an issue is not open yet, find the most recent issue and comment on it to ask about a request for the next newsletter. Make sure to @ mention the person who opened that issue.
- **Docs site banner:**
  - We can occasionally use a banner on the [Docs site](https://docs.gitlab.com/) to promote larger surveys. It is a lightweight way to quickly fulfill surveys that otherwise would be restricted to panels or the data warehouse.
  - There are some biases that should be considered when sampling by this method. (People using the Docs site are usually looking for information on a potential road block they have.)
  - The docs team can choose not to allow your request. Typically it takes 1 week to get this up and running

### Step 4 - Paying participants

- Participants are paid differently, depending on the recruiting channel you use
  - **Respondent.io**
    - Pay users within the Respondent platform.
    - There should be credits loaded into the platform. Click the “approve” button to pay people who have attended sessions.
    - If there are sessions where participants have not been marked “attended,” please remind the interviewer to do so ASAP, or to verify that they were a no-show. This should be done in a timely manner, so our platform profile can retain a good standing.
  - **Tremendous**
    - This method is currently being used for paying all UX Research participants that do not come through Respondent.io.
    - Access to the platform is restricted & an AR may need to be opened for the UX Researcher covering.
    - Select Send Rewards.
    - Navigate to the campaign you want to process the incentives under.
    - Input the participants email address and first name, as well as the reward value in USD. Tremndous will automatically offer the participants the relevant reward based on their location.
    - Click Add Recipient. You will have the option to add more as required or you can also upload a csv.
    - Continue to the payment screen.
    - On the payment screen select Pay with Credit Balance, and then click process.
    - Your participants should receive their incentive same day, but allow up to 48 hours for processing.

### Transferring back to the UX Research Operations Coordinator

- You made it! The UX Research Operations Coordinator is back in action and ready to take over.
- Assign the UX Research Operations Coordinator any recruiting issues that are still open.
- @ them in a comment and provide an update on the status of the issue and what still needs to be done.
- Update the coverage issue the day before the UX Research Operations Coordinator returns as not everyone is based in the same timezone and they may start their workday before yours.
- If needed, the UX Research Operations Coordinator will open a new MR to remove the UX Researcher from being automatically assigned to new research recruitment requests.

## Resources

- [How the UX Research Team Operates](/handbook/product/ux/ux-research/how-uxr-team-operates/)
- [Recruitment case study](/handbook/product/ux/ux-research/recruiting-participants/#recruitment-case-study)
