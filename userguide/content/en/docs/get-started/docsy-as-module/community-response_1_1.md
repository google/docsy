---
title: "Developer Advocacy Community Response Process"
aliases:
- /handbook/marketing/developer-relations/developer-evangelism/community-response/index.html
---

## How to engage developer advocates in community response

Given the developer advocacy team's familiarity with our community and broad knowledge of GitLab, we regularly engage in managing situations that require GitLab to address urgent and important concerns of our community members.

Our team uses the [Community response board](https://gitlab.com/groups/gitlab-com/-/boards/2727876?&label_name[]=Community%20response) to organize tasks.

### Notification

* **Upcoming announcement:** To notify the developer advocacy team of an upcoming announcement, product change, or other news event that may elicit a response from our community, the DRI should comment to `@johncoghlan` in a relevant issue or notify the developer advocacy team in the [#dev-advocacy-team Slack channel](https://gitlab.slack.com/archives/CMELFQS4B). Please also apply the `~Community Interest` and `~Community response` labels to any relevant issues or epics related to this announcement.
* **In-progress situation:** To notify the developer advocacy team of an urgent situation that is in-progress, please tag the `@dev-advocates` User Group in a Slack message in a Slack thread or channel where the situation is being discussed or the [#dev-advocacy-team Slack channel](https://gitlab.slack.com/archives/CMELFQS4B).
* Please give the developer advocacy team as much notice as possible so we can help influence the messaging of the announcement, prepare responses for the community, and schedule coverage. See **Scheduling** below for more details.
* Please add the `Community response` label to related issues, epics and MRs. Our team owns the label for the [gitlab-com](https://gitlab.com/groups/gitlab-com/-/labels?search=community+response) and [gitlab-org](https://gitlab.com/groups/gitlab-org/-/labels?search=community+response) groups. You can use this quick action: `/label ~"dev-evangelism" ~"Community response"` to apply the labels.

### Preparation

* In alignment with GitLab's [efficiency value](/handbook/values/#efficiency), the developer advocates will work with the [Directly Responsible Individuals (DRIs)](/handbook/people-group/directly-responsible-individuals/) for the community response situation to help the DRI and other experts directly address the community feedback and questions.
* When possible, the developer advocacy team will typically collaborate with the DRIs on a list of expected questions/concerns from the community and draft responses. When available, we also include materials prepared for media responses, customer responses, or other materials related to the situation in our response preparation.
* For high-priority announcements and news, we will conduct a practice exercise alongside the DRIs to test our preparation.
* In many cases, we will want to direct the community to share their feedback in the GitLab Forum. By preparing a post that we can link to from a blog post, announcement, or community response will streamline how we gather feedback and manage responses. This post should be created by a Forum admin in advance as a private post which is published at the time of the announcement.
  * _Note: when a forum post is used for feedback, consider turning off comments on the blog to encourage discussion on the forum._

#### Community Response plan

* When possible, please create an issue using the [Community Response Plan template](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues/new?issuable_template=community-response-plan) and add details to each section per the instructions in the template.
* This issue can be shared with stakeholders to gather more information from them and get sign off, as needed.

#### Forum Topic Preparation

* Define a forum DRI from the administrators and moderators listed in [the forum about page](https://forum.gitlab.com/about).
* As response requestor, provide these details:
  * **Forum topic title**. Can be the blog post title, or a neutral placeholder when urgent. The Discourse forum renders the topic as URL slug automatically.
  * **Final blog post URL**. Does not need to exist yet.
* The forum DRI navigates to `+ New topic` and selects [Internal](https://forum.gitlab.com/c/internal/) as category. This is a private category accessible by team members.
  * Set the topic title and link the blog post URL which will later render a preview.
  * Create the forum topic, and send the URL to the response requestor.
  * Share the URL to the [Forum Community Response Workflow](/handbook/marketing/developer-relations/workflows-tools/forum/#forum-community-response-workflow) handbook, providing instructions how to review and edit the topic on the forum.

**Coordinate blog post publishing with forum topic publishing.** This has a circular dependency on each other, and needs to be done in the same minutes.

* The forum DRI edits the topic, changes the category to `Community` and saves the edit.
* If the topic was prepared in advance of the announcement, the forum DRI updates the timestamp to match the date of publish.
* If the topic has been edited and has multiple revisions, the forum DRI should `Hide Revisions` for each revision to avoid any confusion.
* This makes the topic URL publicly accessible. Verify this in a new incognito browser (`cmd+shift+n` in Chrome on macOS).
* Share the URL with the response requestor in Slack and/or issues.

Tip: If the blog post URL is not ready yet, create an empty forum topic, and add the blog URL in the publishing step. Discourse requires text in the post, use `**TODO: Add blog post URL and description**`.

### Scheduling

* If a response is expected to require monitoring and responses outside of our normal working hours (typically Monday - Friday, 900 UTC - 2200 UTC), please inform our team with as much notice as possible so we can schedule coverage accordingly.
* Developer Advocacy team members who cover situations outside of their normal working hours are strongly encouraged to offset the extra time by scheduling time off in the days/weeks before or after the situation.
* Scheduling should be coordinated with the DRI and tracked in a spreadsheet. Collaboration with the social media team and other teams may be required depending on the amount of coverage required.
* Developer Advocates should always be prepared to respond to the release post on release day given the historical performance of release posts on Hacker News.

### Monitoring

* Our team will typically monitor the [GitLab Forum](https://forum.gitlab.com/), [Hacker News](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/), Reddit, and other online forums.
* We will flag any content that we identify on social media in the appropriate channels, as needed.
* The goal of monitoring these forums is to identify comments that require a response from GitLab and to respond directly or share those comments with the appropriate team member to respond.

#### Monitoring automation

We should strive to automate manual tasks for efficiency and to avoid unnecessary stress to individuals in the response team. In many cases, we use [Zapier integrations](/handbook/marketing/developer-relations/workflows-tools/zapier/#current-zaps) to post mentions of GitLab in a Slack channel.

While we strive for consistency in the process of monitoring the individual community response channels, in some cases it might not be possible due to the nature of the platform (e.g. lack of an API). In cases where automation is not possible,  we distribute monitoring tasks amongst that team.

This is a set of general recommendations for automating the monitoring processes on some of the channels the team will be listening to:

* **Hacker News**:
  * New posts and comments containing the keyword "GitLab" are shared in the [#hn-mentions](https://gitlab.slack.com/archives/CBL93C22D) Slack channel.
  * Posts that reach the front page and contain the keyword "GitLab" are shared in the [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B) Slack channel with additional tags for @dev-advocates and @sytses
  * Note: for both of these automations many posts and comments are captured that do not require a response. For example, posts that link to an open source project hosted on GitLab.
* **GitLab Forum**:
  * [Set up a Zap](/handbook/marketing/developer-relations/workflows-tools/zapier/) that posts on the relevant Slack channel created for internal response coordination. The trigger will be any new post created on the monitored thread in the forum. Depending on the topic's activity, this might mean quite a lot of unfiltered traffic. In this case, the Zap updates could be temporarily turned off at the discretion of the DRI assigned to monitor, and only manually posts that require a response.
  * Optionally, everyone in the response team can subscribe to the specific forum thread to distribute the task of monitoring.
* **Blog Posts**:
  * When there is a forum post linked to from the blog post announcing a change, it is recommended that comments will be disabled to encourage engagement on the forum post and for more efficient monitoring. Check the blog handbook [to disable comments](/handbook/marketing/blog/#comments).
  * If comments are enabled, new comments will be posted in the [#mentions-of-gitlab](https://gitlab.slack.com/messages/mentions-of-gitlab) Slack channel. Please join that channel for more efficient monitoring.

### Response

When possible and appropriate, our team will engage experts to respond to the community. This direct feedback from the DRIs is [appreciated by members of the wider GitLab community](https://news.ycombinator.com/item?id=26261479). It also allows the DRIs and experts to better understand community sentiment and get direct feedback from our community. To identify the DRIs for a specific feature, follow one of the these steps:

1. Search Google for the docs page that corresponds to the feature in question. For example, [CI/CD](https://docs.gitlab.com/ee/ci/).
1. Scroll to the bottom of the docs page for the feature
1. At the bottom of the page, click the "View page source" link
1. After the file opens in your browser, review the top of the file to see the stage/group that owns the feature
1. Use the browser search (keyboard shortcut `cmd + f` on macOS) to search for that feature, group, or stage on the [Product sections, stages, groups, and categories](/handbook/product/categories/) page or the [features by group](/handbook/product/categories/features/) page.

Contact the PM or other appropriate DRI in a public Slack channel whenever possible to raise the visibility of the question allowing others to engage should the DRI be unavailable.

Review these additional steps:

* If necessary, the Developer Advocates will provide responses to community questions and concerns on the GitLab Forum, Hacker News, and other forums.
* If a post about GitLab reaches the front page of Hacker News, we may use a Zoom room and Google Doc to collaborate on responses in synchrously. We will link to the Zoom room and Google Doc in the Slack thread or channel where the situation is being discussed or the [#dev-advocacy-team Slack channel](https://gitlab.slack.com/archives/CMELFQS4B).
* The developer advocacy team will rarely engage in responding on Twitter and other social media channels during these announcements and breaking news situations. Twitter, Facebook, and LinkedIn are primarily owned by the [Social Media team](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/) in these situations.
* For situations where messaging is sensitive, we will rely on approved messaging from the [Corporate Communications team](/handbook/marketing/corporate-communications/) to create our responses.

#### Rapid Action Responses

When there is an ongoing discussion with many threads and requiring multiple answers, proceed with bias for action to address them.

* If the discussion is about a bug or security concern, analyze and understand the topic before taking action.
  * Make sure to explicitly address the concerns
  * Include answers for the underlaying questions or speculations
* Update issue descriptions from feedback, if they remain unclear or discussion points.
* Copy the context of linked URLs into replies. Not everyone clicks the URLs and may miss the context.
* Ask for feedback and contributions on how to improve the functionality or code quality.
* Ensure all responses are [SAFE](/handbook/legal/safe-framework/) and adhere to GitLab's [team member social media policy](/handbook/marketing/team-member-social-media-policy/) before sending.

Example analysis for the [file extensions not being allowed in usernames thread on HackerNews](https://news.ycombinator.com/item?id=28535298):

```text
This bug affects the user profile page, when you call it like https://gitlab.com/dnsmichi.html it will not render the page correctly.
The attempt to fix was to disallow reserved file type extensions, but the error message was wrong.
```

In addition, there was speculation on security: `does GitLab filtering this indicate that the protection against injection attacks is brittle?` which needed additional clarification in [this comment](https://news.ycombinator.com/item?id=28540665).

With added clarity, we can involve more experts and stakeholders to join the discussion.

**When the topic is explicitly about GitLab and on the Hacker News front page for hours, we need to monitor and revisit it frequently.**

### Feedback

* Retrospectives should be held following all major community response situations to achieve the following:
  * Assess the quality of our message and prepartion
  * Assess the level of staffing for the situation, including how much time was invested in covering the event
  * Identify things we did or could have done to be better prepared which we can apply to future response situations
  * Update this handbook page and other materials based on what we learned
* Our team is happy to provide sentiment assessments from our monitoring as part of the reporting or retrospective process for any announcements or in-progress situations which we are asked to support. Please tag us in the appropriate issue or document with a clear ask to request feedback.
