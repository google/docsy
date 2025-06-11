---

title: "Twitter response workflow"
---







## Overview

### Handles for social channels

| TWITTER HANDLE | RESPOND FROM | GUIDELINES |
| - | - | - |
| [@GitLabStatus](https://twitter.com/GitLabStatus) | Zendesk | Post service updates |
| [@GitLab](https://twitter.com/GitLab) | Zendesk | Respond to mentions and questions |

- The [@GitLabStatus](https://twitter.com/GitLabStatus) account should only be used to give updates on the availability of [GitLab.com](https://gitlab.com) and to follow up on users reporting that [GitLab.com](https://gitlab.com) is unavailable or responding to a previous availability update on [@GitLabStatus](https://twitter.com/GitLabStatus).
- Only the infrastructure team should be posting updates on [@GitLabStatus](https://twitter.com/GitLabStatus). There is a [defined process](/handbook/engineering/infrastructure/incident-management/) for this describing who should do this, how and what channels should be alerted.

## Workflow

- Community Operations should use their best judgment and reply to tweets, in these two cases:

1. To route users to the forum if they need help with a technical issue or inquiry
1. Tweet content when asked explicitly to do so by the Social Media Team or the Communications Team

Community Operations uses Zendesk via Zapier to pull in all mentions of GitLab on Twitter. When resolving Twitter tickets in Zendesk you should:

1. Look for technical questions and send them to the forum via twitter response, via Zendesk
1. Look for opportunities for re-tweets that may interest the Social Media Team
1. Look for patterns in negative sentiment indicating a bad community response to an expected of unexpected GitLab change
1. Look for opportunites to engage the Developer Evengelists, or other experts, via the Involving Experts Workflow.

## Best practices

### Tweets regarding GitLab downtime

Check if we're experiencing any issues with our system on [GitLab System Status](https://status.gitlab.com/) page or if there were any official updates on our [Twitter GitLab.com Status](https://twitter.com/gitlabstatus/) profile. If you find anything that might be related, please follow up with the user forwarding that link and asking if they are still experiencing issues.

### Support Related Questions

Often, users will tweet their support related questions to the main @gitlab account. Solving support related questions via twitter is not the preferred method, as the character limit is difficult to work with, and resolutions could be lost for future use.

Instead, please direct users to post their question on the [GitLab Forum](https://forum.gitlab.com/).

#### Directing Users to the Forum

Try to find a related topic in the forum (preferably one that is solved!) and share a direct link. If no similar topic exists, share the link to the most appropriate forum category.

Consider using language like this in your tweet to best encourage forum use:

- `Posting in the forum allows the GitLab team and the wider community to help find solutions for your needs, create issues for long-term solutions, and update our documentation.`
- `In order to troubleshoot your issue, please post your question in our forum at https://forum.gitlab.com! This way you'll have the whole power of the community to help.`
- `It's likely these community experts will be able to help: (link to forum topic) since they have worked through something similar before. Post your question and we'll check in on it!`

## Automation

Tweets that mention [@GitLab](https://twitter.com/GitLab), or [@GitLabStatus](https://twitter.com/GitLabStatus) will create a ticket in Zendesk, and show up in the "Twitter" view.

If a tweet is responded to from TweetDeck, this risks duplicate responses. Responding from Zendesk also enables us to track our response times vs. [our internal SLA](/handbook/support/#sla).

## Tweetdeck

Tweetdeck can be used to delete tweets if something is sent accidentally from Zendesk. If you send an accidental tweet from the @GitLab handle, please notify the Social Media team asap via the #social_media_action slack channel.
