---
title: "Hacker News"
---

## Overview

Hacker News is an important social channel. Threads that mention GitLab's structure, values, product vision, or other sensitive blog posts, articles, etc. should be treated as important, while posts about GitLab that land on the front page of Hacker News should be treated as both important and urgent.

Hacker News posts are important because they can generate traffic for our website, backlinks to our content, and, most importantly, value feedback on our product and processes. As an example, a [Hacker News post about this page](https://news.ycombinator.com/item?id=30003221) from January 2022 generated valuable feedback for our team.

GitLab mentions on Hacker News are tracked on the [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack channel. Posts about GitLab that land on the front page of Hacker News generate a notification that is shared in [#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team). More details in the [automation documentation](/handbook/marketing/developer-relations/developer-advocacy/hacker-news/#automation).

## What performs well

In 2020, we ran multiple experiments to try to drive interest in new posts about GitLab. We learned that the key to a post reaching the front page was the content itself. Timing of when a post is shared can also help but is out of our control as we do not post our own content. Creating a coordinated response was not effective in driving interest in the posts without organic interest from the Hacker News community. The content is the key to success.

We conducted an audit to see what types of posts about GitLab landed on the front page of Hacker News. We learned that the following types of GitLab-related content generated the most interest on Hacker News:

- Major company news such as announcements about funding, acquisitions, or moving features to core
- Release posts
- Announcements from our open source program members including posts from Gnome, KDE, and WikiMedia and other open-source focused content
- Technical blog posts
- Remote-focused content including handbook pages and the Remote Work report

When considering what types of content to publish on social media, these are all good types of posts and pages to share on Twitter, LinkedIn, relevant Slack communities, and other social channels.

## Release days

GitLab Release Posts frequently perform well on Hacker News. Given that we know the post will be released [every month](/handbook/engineering/releases/), we should always plans for these posts to warrant a [community response](/handbook/marketing/developer-relations/developer-advocacy/community-response/). For release days, we follow these steps to organize our response:

1. Director, Developer Advocacy will send out a recurring calendar invite for release days with a link to this section of the handbook in the body of the invite as a reminder to Developer Advocacy team members.
1. If a notification that a release post has reached the Hacker News Front Page is posted to the #dev-advocacy-team Slack channel by the "Hacker News Front Page" bot, a Developer Advocacy team member should quickly repost the message to the #product and #release-post channels to alert our Product Managers.
1. As questions / comments are added to the Hacker News post, Developer Advocates should quickly respond to address community feedback.
1. For questions / comments that the Developer Advocates are unable to address on their own, they should quickly activate to engage experts. The most efficient way to engage experts are to: notify product managers via `@` mentions in the thread created in the #product channel with a link to the comment which they should address. Note: Don't be shy about engaging experts as the community feedback is valuable to them as they work to improve GitLab.

More information on [Release Posts](/handbook/marketing/blog/release-posts/), including the [Release Post Managers schedule](/handbook/marketing/blog/release-posts/managers/), is available in the handbook.

## Responding on Hacker News

When new posts or comments about GitLab are added to Hacker News, team members can find alerts about these posts in the [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack channel. You are welcome to share these with other team members and members of the wider GitLab community who may want to engage in the discussion. Please join the [#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) Slack channel for questions, response coordination for front page posts, guidance on responding, etc.

[Developer Advocacy team members](/handbook/marketing/developer-relations/developer-advocacy/) are encouraged to address comments and questions on new posts when appropriate.

### Response workflow

1. When alerted by the "Hacker News Front Page Bot" that an article referencing GitLab is on the Front Page of Hacker News, the Developer Advocates should coordinate to ensure a DRI is assigned to the post to review, monitor the comments, and respond accordingly.
1. Posts that reach the front page should be shared in Slack channels relative to the topic of the post for greater visibility among team members who may wish to respond. For example, a remote work blog should be shared in the [#remote](https://gitlab.slack.com/messages/remote) channel and a post related to trackers on our marketing site should be shared in [#marketing](https://gitlab.slack.com/messages/marketing). Whenever posts are shared outside of [#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team), the Slack comment should be cross-linked in the alert thread in `#dev-advocacy-team` for visibility and to create a single source of truth.
1. Developer Advocates should also review the [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack channel 1-2 times per day for mentions that require a response. If you are able to provide a quick response/resource, reply on [news.ycombinator.com](https://news.ycombinator.com) using your personal Hacker News account and indicate that you replied by leaving a :white_check_mark: on the Slack comment. _Note that [the window to edit a comment is 2 hours](https://github.com/minimaxir/hacker-news-undocumented#editdelete-time-limits), afterwards you cannot edit or delete a Hacker News comment._
1. If necessary, you may also wish to share comments with relevant experts who may be able to provide more detailed or insightful comments. This can be done by sharing relevant posts or comments in an appropriate Slack channel if you judge additional input is required.

### Best practices when responding on Hacker News

When responding to a post about GitLab on Hacker News:

- Don't post answers that are almost the same, link to the original one instead.
- Address multi-faceted comments by breaking them down and using points, numbering and quoting.
- When someone posts a Hacker News thread link, monitor that thread manually. Don't wait for the notifications in the [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) channel, because sometimes they're delayed by a few hours.
  - Search for `minutes ago` using the browser (`cmd+f` on macOS) to highlight the most recent posts in the past hour.
- Don't upvote/downvote comments based on whether you agree with them personally or whether or not they are critical of GitLab. Instead vote based on if they are thoughtful and substantive, since HN is about curious conversations.

#### Formatting tips for Hacker News

Follow the [formatting options documentation](https://news.ycombinator.com/formatdoc), with additional tips below:

1. When replying to a specific sentence or thought, use `>` to quote the section in your reply, add a blank line, and your comment.
2. Indent the lines with 2 spaces to format shell commands and code as code blocks (thanks to [this comment](https://news.ycombinator.com/item?id=33108536))
3. When sharing more than 2 URLs, consider using `[0]`, `[1]`, etc. anchors with a list of URLs at the bottom of the comment. The list needs a blank line between items to render correctly. Separating URLs from text can increase readability and intention of the comment, and making the URLs less important. ([example](https://news.ycombinator.com/item?id=32155848)).

### Conveying without convincing

Remember that your comments are being read by many more folks than the person to whom you are responding. Make sure that the information you share is helpful to them, too. Aim to make your replies valuable to everyone involved in the conversation, not just the person you are replying to. When addressing criticism or negative feedback, it is unlikely to change the mind of someone whose comment or point-of-view is antagonistic or disagreeable but your reply can be valuable to the folks who are simply there to read and learn.

A [comment](https://news.ycombinator.com/item?id=30006193) on Hacker News sums it up well by suggesting to focus on "conveying without convincing". The commenter suggests, "Ensure the facts are made clear and point out disagreements. Share your motivations and reasoning. Ask people to clarify when they say something you don't understand, or could parse multiple ways. Leave disagreement alone, and don't press it to change into agreement."

## Blog comments

Blog comments can be easily monitored by filtering forum topics by the [feedback tags](/handbook/marketing/developer-relations/workflows-tools/forum/#tags).

## Social media guidelines

- Never submit GitLab content to Hacker News. Submission gets more credibility if a non-GitLab Hacker News community member posts it, we should focus on making our posts interesting instead of on submitting it.
- Don't share links to Hacker News stories/comments on Slack or Twitter and ask others to upvote because it might set off the voting detector.
- Don't make the first comment on a Hacker post, allow people to leave comments and ask questions.
- Avoid using corporate jargon like 'PeopleOps'.
- Always address the Hacker News community as peers. Be sure to always be modest and grateful in responses.
- If you comment yourself make sure it is interesting and relevant.
- Review the Hacker News [Guidelines](https://news.ycombinator.com/newsguidelines.html) and [FAQ](https://news.ycombinator.com/newsfaq.html).
- Make yourself familiar with [A List of Hacker News's Undocumented Features and Behaviors](https://github.com/minimaxir/hacker-news-undocumented) to understand Hacker News behaviour and moderation rules.
- Check the tone of your response: Don't be defensive, but instead share your point of view.
- Try to teach people something interesting they didn't know already.
- Add value to your post with data points or direct links.

**Note:** You should [review our team member social media policy](/handbook/marketing/team-member-social-media-policy/) before using social media relating to GitLab.

## Automation

Hacker News mentions of configured keywords for GitLab are monitored using [Zapier](https://zapier.com) workflows.

- Keyword mentions are tracked in the [#hn-mentions](https://gitlab.slack.com/messages/hn-mentions) Slack channel.
- Front page notifications are posted into the [#dev-advocacy-team](https://gitlab.slack.com/messages/dev-advocacy-team) Slack channel.

All Zapier workflows with keywords are documented in the [Developer Relations handbook](/handbook/marketing/developer-relations/workflows-tools/zapier/#current-zaps), including details on [how the Algolia Search for Hacker News](/handbook/marketing/developer-relations/workflows-tools/zapier/#zaps-for-hacker-news) is used.
