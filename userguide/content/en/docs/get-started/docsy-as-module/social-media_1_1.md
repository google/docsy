---

title: "Developer Advocacy on Social Media"
aliases:
- /handbook/marketing/developer-relations/developer-evangelism/social-media/index.html
---







## Introduction

Developer Advocacy builds out their thought leadership through social media and community engagement. The tips and strategies shared here can be used by team members and the wider community to help build their own profile as an evangelist.

Topics:

- Education and Learning: Tips from own experience. Workshops, slides, blog posts, videos, etc.
- Events live tweets / tweet storms. Amplify talks with screenshots and messages.
- [Release Evangelism](#release-evangelism): Share feature insights with personal views.
- Community best practices and GitLab insights.
- Contributions to GitLab and the cloud native ecosystem.

### UTM Tracking

Developer Advocates at GitLab are encouraged to add [UTMs for URL tagging and tracking](/handbook/marketing/developer-relations/developer-advocacy/#utms-for-url-tagging-and-tracking) to provide analytics and insights on how well content shares are performing. This method helps to verify [KPI metrics](/handbook/marketing/developer-relations/content-effectiveness/).

## Target Platforms

LinkedIn and Twitter are the target platforms. Both platforms have different target audiences and content distribution.

> Wil Spillane in Slack:
>
> Tweets are more fleeting. I think a lot of folks choose to view tweets in reverse chronological order. For LinkedIn, the default is “top” posts and it’s not very visible to many to switch to “recent”. Also, LinkedIn shows posts with recent activity in the recent feed, not just the plain reverse chronological order that Twitter does. So in some ways, LinkedIn posts linger across feeds longer than a tweet.

Experimental platforms:

- Mastodon (requires an account on a specific instance in the Fediverse). [Evaluation issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/de-tmm-meta/-/issues/123).
- Bluesky Social (invite only). [Evaluation issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/de-tmm-meta/-/issues/277).

### General Social Media Tips

#### Message Tips

- Keep the message short and appealing. If you have multiple sentences, break them down into a list.
  - 💡 Use emoji as list markers, this one to learn something.
  - 🏗 This way users learn what you want to share and build together.
  - 🔥 Pick the right emoji, this one expresses a fast success for example.
- Use 3-4 hashtags at maximum, at the end of the message. Twitter/LinkedIn are not Instagram and use different algorithms to amplify shares.
  - `#development` and `#DevSecOps` are good examples, avoid them to include in every tweet though.
- Too many emoji can hide key messages.
- Use an appealing screenshot image or animated GIF to make people stop when scrolling.
  - When attaching images to your posts, make sure to include an ALT text describing the content.
- Do not start with an `@` character on Twitter, this will be hidden as reply and hinder audience reach on Twitter. Escape it with a leading `.` or an emoji. Example: `.@gitlab 13.9 adds ...`.

Follow the tips on [resizing images](/handbook/tools-and-tips/#resizing-images) and [creating GIFs](/handbook/product/making-gifs/) to learn more about image and video conversions for social media, [resizing GIFs](/handbook/product/making-gifs/#resizing-gifs), etc.

When tagging users, find a balance to not spam them with notifications. Instead, share the post URL in Slack and ask team members to amplify it.

- On LinkedIn, type `@` to start searching for companies, brand accounts and users to tag. Buffer requires you to copy the full company URL into the composer window (the LinkedIn API does not allow user tagging).
- On Twitter, Mastodon and Bluesky, you can use `@` to mention users.

#### Social Card Validators

Use the social card validators to verify the social preview of included URLs before sharing.

- [OpenGraph validator](https://opengraph.xyz) to debug the tags, including social previews.
- [LinkedIn post inspector](https://www.linkedin.com/post-inspector/)
- Twitter suggests using the tweet composer. The card validator was [deprecated and removed in August 2022](https://twittercommunity.com/t/card-validator-preview-removal/175006).

#### Fast Emoji Workflows

[Raycast](https://www.raycast.com/) is a productivity app and can replace Spotlight on macOS. Open Raycast with your preferred shortcut (`option + space` by default) and start typing `emoji`, press `enter` and type the emoji name. You can also assign a shortcut to the emoji view by opening the extensions settings. Open Raycast and type `extensions` and select `Extensions Raycast Settings` in the prompt. Search for `emoji` and assign a keyboard shortcur, for example `cmd 2`.

![Raycast extensions: Emoki keyboard shortcut](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/raycast_extensions_settings_emojis_keyboard_shortcut.png)

If you are using Alfred on macOS, you can use [Alfred's Powerpack with the emoji workflow](https://dev.to/dnsmichi/emojis-everywhere-supercharged-with-alfred-workflows-1o3n) to quickly access common emojis for tweets.

[Rocket](https://matthewpalmer.net/rocket/) is another alternative which provides an emoji search on macOS.

### LinkedIn Tips

#### LinkedIn: Group posts

LinkedIn provides [groups](https://www.linkedin.com/help/linkedin/answer/a540824/linkedin-groups-membership-overview?lang=en) where users can join to follow a stream of community curated content. Identify groups that are relevant for thought leadership strategies and engaging with the wider community.

- [DevOps and SRE discussions](https://www.linkedin.com/groups/6585254/): 137,000 members as of 2023-07-04
- [Artificial Intelligence (AI), Digital Transformation, Data Science, Automation, Machine Learning, and Analytics Group](https://www.linkedin.com/groups/4376214/): 101,000 members as of 2023-07-04

Benefits: Increase reach of content shares (e.g. the [GitLab blog](https://about.gitlab.com/blog/)), attract new followers using the [creator mode profile](/handbook/marketing/developer-relations/developer-advocacy/social-media/#linkedin-use-creator-mode-profile).

Some groups require moderators to approve the posts. Please follow these guidelines:

- Ensure that the post is helpful, provides a short summary of the linked article
- Check the [social card preview](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators) and replace them with screenshots or [GIFs](/handbook/product/making-gifs/) that make folks stop scrolling.
- Do not spam the groups with messages every day. Be thoughtful about shares and help the group owners to create a helpful stream of free learning content.

Example: The [GitLab CLI announcement post by Michael](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-7006375881359130624-1812) which shows the CLI interface with CI/CD pipelines, job traces, and CLI API calls as attached screenshots created 92 likes, and 5,200 impressions in 24 hours. The [same post](https://www.linkedin.com/feed/update/urn:li:activity:7006803920949755904) to the [DevOps group on LinkedIn](https://www.linkedin.com/groups/2825397/), once approved, got 40 likes and 9000 impressions in 9 hours.

#### LinkedIn: Use Creator Mode Profile

LinkedIn defaults to connections between users, and everyone uses a different strategy to manage connections, i.e. only having met in person, etc. Sometimes users want to follow and engage with your content, without the direct need of a LinkedIn connection. This is a great strategy to share thought leadership content on LinkedIn too, for example [automated schedules](/handbook/marketing/developer-relations/developer-advocacy/social-media/#sharing-content) in the same way as Twitter.

LinkedIn provides the [Creator Mode](https://www.linkedin.com/help/linkedin/answer/a522537/creator-mode) for profiles which brings multiple benefits:

- Content is highlighted by moving the `Activity` and `Featured` sections on top of the profile.
- Users can follow you as the default action.
  - Connections are an extra step in the dotted menu. This can also be helpful to reduce connection requests to review.
  - Your followers will see your content in their feed and can engage.
  - Connection requests are automatically following you, even if you decline the request.
- Number of followers are displayed on the profile. Your profile might be shown to others as influencer profile and suggestion to follow.
- Possibility to [add a URL to your profile introduction](https://www.linkedin.com/help/linkedin/answer/a727760) to drive traffic there.
- [Creator Analytics](https://www.linkedin.com/help/linkedin/answer/a701208)
  - Impressions, engagements, profile view metrics are displayed on the LinkedIn profile.
  - Required for thought leadership strategy metrics in Developer Advocacy.

Example profile from [Michael Friedrich](https://www.linkedin.com/in/dnsmichi/) with Creator Mode enabled:

![LinkedIn Profile with creator mode enabled: Michael Friedrich](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_creator_mode_profile_michael_friedrich.png)

#### LinkedIn: QR Code Connect on Mobile

When attending events, networking and connecting to new folks often is a thing. The LinkedIn mobile app provides a [QR code for your profile](https://www.linkedin.com/help/linkedin/answer/a525286/using-a-linkedin-qr-code-to-connect-with-members?lang=en), and an in-app feature to scan other QR codes. This makes in-person connections more efficient.

1. Open the LinkedIn mobile app on iOS or Android.
2. Tap into the search bar.

   ![LinkedIn iOS app: Search bar](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_01_search_bar.png)

3. This action brings up the QR code icon on the right side of the search bar.

   ![LinkedIn iOS app: Search bar, QR Icon](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_02_search_bar_qr_icon.png)

4. Tap on the QR code icon to bring up the QR code to share.

   ![LinkedIn iOS app: QR Code view](/images/handbook/marketing/developer-relations/developer-advocacy/social-media/linkedin_mobile_app_qr_code_connect_03_qr_code_view.png)

5. The QR Code view also has a tab to scan other QR codes. If you don't want to grant access to the camera to the LinkedIn app, you can also scan the QR code using your mobile camera and open the LinkedIn app from the scanned profile URL.

### Twitter Tips

#### Twitter: Allow direct messages from everyone

On Twitter, you need to follow another user to allow them for sending you a direct message. Sometimes, invitation to events, wider community highlights or new opportunities may come from direct messages, and it is desirable to [enable them for everyone](https://help.twitter.com/en/using-twitter/direct-message-faqs). Users you do not follow yet are then able to send so-called "Message requests" that will show up in a separate section inside the direct messages view.

Navigate to `Settings > Privacy and Safety > Direct Messages` to enable the `Allow message requests from everyone` checkbox.

New message requests will show up in your Twitter DMs on top, saying `Message requests. X people you may know.`. You can review the request without the users seeing a read notification, and accept the request to continue the conversation.

Note: be cautious of phishing, spam, and other undesirable messages arriving via Message requests.

### Mastodon Tips

1. Choose a Mastodon server with a trusted community and moderation, and create an account.
    - [hachyderm.io](https://hachyderm.io): [@sugaroverflow](https://hachyderm.io/@sugaroverflow), [@john_cogs](https://hachyderm.io/@john_cogs)
    - [crashloop.social](https://crashloop.social) (small community instance operated by #EveryoneCanContribute cafe members): [@dnsmichi](https://crashloop.social/@dnsmichi)
1. Mobile apps
    - Mastodon on [iOS](https://apps.apple.com/de/app/mastodon-for-iphone-and-ipad/id1571998974?l=en), [Android](https://play.google.com/store/apps/details?id=org.joinmastodon.android&hl=en&gl=US&pli=1)
    - Metatext on [iOS](https://apps.apple.com/de/app/metatext/id1523996615?l=en)
1. A Tweetdeck alternative is built into the Mastodon web interface.
    - Navigate into [`Preference > Appearance`](https://docs.joinmastodon.org/user/preferences/) and select `enable advanced web interface`.
1. Mastodon does not track post impressions. **Always** use [UTM tracking with short URLs](/handbook/marketing/developer-relations/developer-advocacy/social-media/#utm-tracking) for GitLab owned content.

## Content

### Sharing Content

The composer features of Twitter, Linked, Mastodon, etc. are available for posting live content. **Note** When sharing content that points to GitLab blog posts or the marketing website, always create short URLs with UTM tracking.

- [LinkedIn web app](https://www.linkedin.com/). Start a new post to find the clock icon in the lower-right corner to [schedule posts](https://www.linkedin.com/help/linkedin/answer/a1347212/schedule-posts?lang=en).
- [Twitter web app](https://twitter.com/home). The composer also allows to send scheduled tweets.
- Mastodon: Log into your instance and use the composer form. The [Mastodon scheduler](https://www.scheduler.mastodon.tools/) allows to schedule posts.
- Bluesky Social: Log into the app and post content.

Paid platforms provide more features, such as scheduling content shares with calendar views, threads on Twitter, live sharing across multiple social media platforms, etc. You can use [Buffer](/handbook/marketing/developer-relations/developer-advocacy/tools/#buffer) to create scheduling queues from browser extensions, mobile apps, and managed campaigns for LinkedIn, Twitter and Mastodon. In July 2023, Twitter announced a [new Tweetdeck feature exclusively for Twitter Blue subscribers](https://www.theverge.com/2023/7/3/23783092/twitter-tweetdeck-new-preview-force-legacy-apis) and deprecated the old free versions.

_2023-07-01:_ Twitter [announced rate limits](https://techcrunch.com/2023/07/01/twitter-imposes-limits-on-the-number-of-tweets-users-can-read-amid-extended-outage/) for all users on the platform, and only authenticated users can see tweets. This introduces an accessibility problem: Website-embedded tweets and previews are visible, but additional engagement requires a Twitter account and login. According to Twitter, these limits are temporary.

### Content Sources

#### Newsletters

DevSecOps

- [CloudSecList](https://cloudseclist.com/) (Cloud, Security)
- [Seven-Day DevOps](https://anaisurl.com) (DevOps, Cloud, SRE)
- [DevOps'ish](https://devopsish.com/) (DevOps, Cloud, Dev) (paused)
- [Last week in AWS](https://www.lastweekinaws.com/) (Cloud)
- [The New Stack](https://thenewstack.io/newsletter-archive/) (Cloud Native, DevOps)
- [allesnurgegloud.com](https://allesnurgecloud.com/) (Cloud, German)
- [opsindev.news](https://opsindev.news/) (Dev, DevOps, SRE, day-2-ops - @dnsmichi)
- [GitLab Community newsletter](https://about.gitlab.com/community/newsletter/) (GitLab, DevOps, Cloud)

Observability

- [o11y.news](https://o11y.news/) (Observability, Monitoring, SRE)
- [eCHO news](https://cilium.io/newsletter/) (Cloud, Network, Observability, eBPF)
- [Monitoring Weekly](https://monitoring.love/) (Monitoring/Observability)
- [Heavybit](https://www.heavybit.com/subscribe/) (Monitoring/Observability)

General topics

- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/) (Big Tech and high-growth startups - paid subscription required)
- [Developer Avocados 🥑 Weekly](https://tinyletter.com/developeravocados) (DevRel)

#### Community platforms

- [Hacker News](https://news.ycombinator.com/)
  - Search example: [Rust](https://hn.algolia.com/?dateRange=all&page=0&prefix=false&query=rust&sort=byDate&type=story)
  - Slack: [#hn-mention](https://gitlab.slack.com/archives/CBL93C22D) (internal)
- Learning websites
  - [o11y.love - learn Obsrvability](https://o11y.love/) (@dnsmichi maintainer)
  - [learnk8s.io](https://learnk8s.io/) (Kubernetes, email subscription option)
  - [100daysofkubernetes.io](https://100daysofkubernetes.io/) (Kubernetes)
- Blogs & News
  - [opensource.com](https://opensource.com/)
  - [DZone](https://dzone.com/)
  - [Geeker's digest](https://www.geekersdigest.com/)
  - [GitLab blog](https://about.gitlab.com/blog/)
- [GitLab Forum](https://forum.gitlab.com/)

#### Social Media Lists

- Twitter lists: [@dnsmichi](https://twitter.com/dnsmichi/lists)
  - [DevRel](https://twitter.com/i/lists/1288789359865606145) (220 members, 2022-12-09)
  - [Observability & SRE](https://twitter.com/i/lists/1208410203831619588) (141 members, 2022-12-09)
- LinkedIn
  - Groups: [DevOps](https://www.linkedin.com/groups/2825397/)
  - Hashtags: [#cloudnative](https://www.linkedin.com/feed/hashtag/cloudnative/)
- [dev.to Following tags](https://dev.to/dashboard/following_tags)

#### Other content sources

- GitLab Slack (internal): [#external-comms](https://gitlab.slack.com/archives/CB274TZRR), [#newswire](https://gitlab.slack.com/archives/CERAPFN7R), [#competition](https://gitlab.slack.com/archives/C1BBL1V3K), [#ceo](https://gitlab.slack.com/archives/C3MAZRM8W)

## Analytics

Please see [Content Effectivness](/handbook/marketing/developer-relations/content-effectiveness/) for our methods and tools.

## Thought Leadership Strategy

This strategy can help amplify impressions and build out thought leadership.

- Attract more active followers and therefore improve impression numbers and engagements.
  - Users can follow you on LinkedIn, you do not need to accept every invitation. If you plan to extend your business network, ensure that profile details such as private email/phone are not shared with anyone.
- Help and educate users
- Analyse profile statistics
  - The why on the most impressions, top media tweet or most engaging tweets
- Follow users who share interesting stories
  - They may follow back, increasing the follower count.
- Retweet with comment and add your own thoughts or a funny emoji.
  - Mix this with "normal" retweets.
- Engage with tweets, like often, add replies and join the discussion.
  - Say `Thanks for sharing :emoji:` whenever needed
  - Share positive vibes
  - Follow the [team member social media policy](/handbook/marketing/team-member-social-media-policy/)
- Listen to criticism and ignore hate speech.
- Do not criticize GitLab competitors.
  - Instead, engage with their communities and learn how to improve.
- Channel back feedback to product and engineering teams.
- Adopt new ideas with live streaming or community coffee chats.
  - Engage community members in discussions.

Example: Chromium build times discussion led to [Self-Managed GitLab with auto-scaling runners](https://twitter.com/dnsmichi/status/1351241954349223944) on Monday. On Wednesday, we decided to try it [live on YouTube](https://twitter.com/dnsmichi/status/1351944765697363974) in the [#everyonecancontribute cafe](https://www.youtube.com/watch?v=isKaBJ4VT24). Max wrote a [blog post](https://fotoallerlei.com/blog/post/2021/13-everyonecancontribute-cafe-autoscaling-gitlab-runners-on-hetzner-cloud/post) afterwards.

### Build your Social Profile

- Add a personal note and allow users to view a window into your life. Be it food, leisure activities, or a quirky habit.
- Share your impressions and thoughts with `#allremote` and `#remotework`
- Regularly tweet about daily work. Use the hash tag `#LifeAtGitLab` to share insights and funny moments.
- Pick outstanding GitLab features from another stage/group and post about them (could be a blog post, screenshot, etc.).
  - Share praise in Slack with linking the Tweet/LinkedIn URL.
- Post something funny, use an animated GIF which relates to a tech story. Something which makes you laugh when you look at it.

When you find something interesting to be shared with our brand account, please share it on Slack in [#social_media_action](https://gitlab.slack.com/archives/C01AZ9C8Z4G) and retweet by yourself too.

### Thought Leader Examples

- Kelsey Hightower: [@kelseyhightower](https://twitter.com/kelseyhightower) 160k+ (cloud-native)
- Emily Freeman: [@editingemility](https://twitter.com/editingemily) 70k+ (cloud)
- Liz Rice: [@lizrice](https://twitter.com/lizrice) 26k+ (cloud-native, security, observability
- Charity Majors: [@mipsytipsy](https://twitter.com/mipsytipsy) 77k+ (observability, SRE, cloud-native)
- Jaana Dogan: [@rakyll](https://twitter.com/rakyll) 101k+ (cloud)
- Cassidy Williams: [@casidoo](https://twitter.com/cassidoo) 180k+ (dev)
- Scott Hanselman: [@shanselman](https://twitter.com/shanselman) 280K+ (dev)
- Marko Denic: [@denicmarko](https://twitter.com/denicmarko) 110k+ (dev)
- Nader Dabit: [@dabit3](https://twitter.com/dabit3) 100K+ (web3, dev)
- Julia Evans: [@b0rk](https://twitter.com/b0rk) 200K+ (dev, learning zines)
- Emma Bostian: [@emmabostian](https://twitter.com/EmmaBostian) 200k+ (dev, design)
- Ali Spittel: [@ASpittel](https://twitter.com/ASpittel) 126k+ (dev, cloud)
- Corey House: [@housecore](https://twitter.com/housecor) 70k+ (dev, learn)
- Forrest Brazeal: [@forrestbrazeal](https://twitter.com/forrestbrazeal) (cloud, DevOps, cartoons)

### Thought Leader Efficency Tips

The following tips evolved from @dnsmichi experimenting with thought leadership strategies and efficiency.

- Follow [thought leaders](/handbook/marketing/developer-relations/developer-advocacy/social-media/#thought-leader-examples) and engineers who share thoughts and interesting content.
  - Eventually users follow back - the more invisible benefit is that the Twitter and LinkedIn algorithms will show you more content you potentially like to see.
- Repurpose everyone's content and use it as a way to learn and educate.
- Subscribe to the [newsletters](/handbook/marketing/developer-relations/developer-advocacy/social-media/#content-sources) and extract your focus topics and content.
- Do not immediately retweet/reshare tweets or content you see in your social streams. Collect them in a GitLab issue, Markdown file in Git, etc.
  - Evaluate potential trending topics and prioritize the [scheduled tweets queue](/handbook/marketing/developer-relations/developer-advocacy/social-media/#sharing-content).
- Collect all blog articles, tweets, and tools for daily use and compile them into a monthly blog post or newsletter issue.
  - Create 1-2 sentences sharing your thoughts on the article, its content, what you liked, what you see as a emerging trend, etc.
  - Publish the newsletter / blog post and tag all folks who contributed to your success in a Twitter thread / LinkedIn post. This shows appreciation and helps with engagement and reshares. Example: Dotan appreciated his talk being shared, and [reshared the newsletter post](https://www.linkedin.com/posts/horovits_how-much-observability-is-enough-activity-6935487128235569152-beqn/).
- Make room for your own content based on what you learn from the articles and talks.
  - Seed this into the summary blog and newsletter.
- Regularly review your learnings and adjust themes and messaging.
  - Update talk stories and thoughts based on the learned ideas.

The [August 2022 issue of Michael's opsindev.news newsletter](https://opsindev.news/archive/2022-08-16/) helped fill the social media queue for 2-3 weeks, with 2 shares during week days. That way folks stay engaged on Twitter and LinkedIn, and learn about your thought leadership on these topics. The content also inspired future talks messaging, and helped update the [strategy for Observability in FY23](https://gitlab.com/groups/gitlab-com/marketing/-/epics/2593).

- [Newsletter text](https://opsindev.news/archive/2022-08-16/): `The first release of Cilium Service Mesh is available following the release of Cilium 1.12. "eBPF-Native When Possible" - Besides the option to remove sidecars, Cilium Service Mesh can perform a variety of service mesh features directly in eBPF to reduce the overhead even further.`
- [Twitter text](https://twitter.com/dnsmichi/status/1559969314643525632): `The first release of @ciliumproject #ServiceMesh (https://buff.ly/3w89QG2) is available following the release of #Cilium 1.12 (https://buff.ly/3K4xB7B). #eBPF-Native When Possible - perform a variety of service mesh features directly in eBPF to reduce the overhead even further 🚀`

## Social Campaigns

### Release Evangelism

[GitLab releases](https://about.gitlab.com/releases/) add lots of value every month. As a developer, you know about use cases and workflow enhancements they may solve specifically. Use this knowledge to describe **why** this new feature helps you.

The [product kick-off](https://about.gitlab.com/direction/kickoff/) provides insights into planned features. As we plan ambitiously, there is no guarantee that everything gets released as planned. Therefore release evangelism campaigns need to happen short notice around the [release date](/handbook/engineering/releases/).

> **Tip**: GitLab team members can access the [#release-post](https://gitlab.slack.com/archives/C3TRESYPJ) Slack channel to check for updates on the monthly release blog post.
> Wider community members can check the `gitlab-com/www-gitlab-com repository` for the [release post MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests?label_name%5B%5D=release+post), or follow the Developer Advocate issues with the [DE-Release-Evangelism](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/issues?sort=updated_desc&state=opened&label_name[]=DE-Type::Evangelist) label.

Workflow:

- Open the fiscal year epic for release evangelism, linked from the [workflow handbook](/handbook/marketing/developer-relations/developer-advocacy/workflow/).
- Developer Advocates review the release blog post draft.
  - Use the review app.
  - Add feedback and suggestions to the merge request before release day.
  - Add interesting items with social text examples into the release evangelism epic.
- Developer advocates share and/or schedule their favorite features on release day.
  - Use the short URLs from the campaign manager to track release evangelism impressions.
  - Use the existing media (images, videos) from the release blog post, or create new screenshots/videos.
  - Link to the documentation, or the release post anchor if already released. **Never link to the review app.**

Tips:

- 1-2 shares stretched over 1 week around the release
  - If you are on PTO, engage later. Do not schedule shares into your spare time.
- Message format: `Problem? -> Solution`
- Add emoji and a CTA URL.
- Animated Gifs or videos can help with people stopping "doom scrolling".
- Target a time window for PT and CEST (9-11am PT)

KPIs:

- Impressions and engagement

#### Release Post share

Use the [social card validator](/handbook/marketing/developer-relations/developer-advocacy/social-media/#social-card-validators) to verify the social preview of the release blog post. There might be a situation where the preview does not render correctly, or otherwise needs more attention from readers. As a boring solution, resize your browser and [take a screenshot](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos) from the header, including the sub title listing the features, and attach the image to the social shares. Examples for 15.1: [Twitter](https://twitter.com/dnsmichi/status/1539646159500853248), [LinkeDIn](https://www.linkedin.com/posts/dnsmichi_it-is-the-22nd-of-the-month-gitlab-activity-6945411563717574656-ZZdr?utm_source=linkedin_share&utm_medium=member_desktop_web)

#### Release Evangelism MVP

The monthly release post awards the [MVP](/handbook/marketing/blog/release-posts/#mvp) to a community contributor. A personal shoutout from a Developer Advocate helps with community engagement, and helps increasing visibility so that everyone wants to contribute.

Workflow:

- Open the release blog post
- [Create a screenshot](/handbook/tools-and-tips/mac/#taking-screenshots-and-videos) from the MVP section
- Prepare the social share in 280 characters
  - Use a personalized message based on the feature contributions
  - Tag the MVP using their social tags listed on their GitLab profile (Twitter, LinkedIn)
  - Add the `#EveryoneCanContribute` hashtag
  - Add the release blog post with the `/#mvp` anchor in the URL
  - Example from [14.9, LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q): `Shoutout to Timo Furrer for becoming the GitLab 14.9 MVP 🎉 Your work on the #Terraform provider, automating all things GitLab, is invaluable. Thanks for all your contributions! 💜 🦊 #EveryoneCanContribute https://about.gitlab.com/releases/2022/03/22/gitlab-14-9-released/#mvp`
- Post the MVP share on Twitter and LinkedIn
  - Add the URLs to the release evangelism issue
- Ask Sid in the [#ceo Slack channel](https://gitlab.slack.com/archives/C3MAZRM8W) to engage with the MVP shares
  - Suggested actions: Reshare/like, add a comment thanking for the contributions. Follow the [CEO voice](/handbook/ceo/#ceo-voice) to suggest a text to copy.
  - For efficient copy/paste of suggested texts, add a comment in the Slack thread containing only the comment text.
  - Check the shares for comments, and engagement metrics

#### Release Evangelism Examples

High performing share examples for GitLab 14:

- 14.9: MVP on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_terraform-everyonecancontribute-activity-6912476005810999296-ig8Q) (3,000+ views, 60+ reactions)
- 14.8: MVP on [Twitter](https://twitter.com/dnsmichi/status/1496140144067465227) (8,000 impressions, 150 engagements) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-devops-activity-6901905241671835648-X4Vk) (2,500 views, 32 reactions)
- 14.7: MVP on [Twitter](https://twitter.com/dnsmichi/status/1484898545849315333) (18,000 impressions, 600 engagements) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-community-devops-activity-6890664006277754880-OCJ5) (7,500 views, 150 reactions)
- 14.6: Render markdown titles of issues on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_yesssss-gitlab-146-allows-to-render-markdown-activity-6879493371191156736-RHCu) (3,000 views, 62 reactions)
- 14.6: MVP on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6879464875018465280-skt5) (1,500 views, 30 reactions)
- 14.5: IaC Security scanning on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_security-infrastructureascode-kics-activity-6870082879037173761-kyaQ) (2,300 views, 28 reactions)
- 14.5: Conditional includes with exists in CI/CD on [Twitter](https://twitter.com/dnsmichi/status/1464279272214958095) (12,000 impressions, 600 engagements)
- 14.3: Conditional includes in CI/CD on [Twitter](https://twitter.com/dnsmichi/status/1440690461673340933) (21,000 impressions, 1,800 engagements)
- 14.2: Stageless CI/CD Pipelines on [Twitter](https://twitter.com/dnsmichi/status/1429475480030351364) (55,000 impressions, 1,900 engagements) and [LinkedIn](https://www.linkedin.com/posts/dnsmichi_async-cicd-pipelines-with-needs-as-job-activity-6835241415748939776-I6kI) (9,000 views, 127 reactions)
- 14.2: Open MR in Gitpod MVP on [Twitter](https://twitter.com/dnsmichi/status/1429469773058936841) (43,000 impressions, 300 engagements) [RT-quoted tweet](https://twitter.com/ludmann/status/1429735681513951235)
- 14.2: Live Markdown Preview on [Twitter](https://twitter.com/dnsmichi/status/1429463680182276100) (7,000 impressions, 300 engagements) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_wohooooooo-live-markdown-preview-while-typing-activity-6835229767072014336-sDCg) (5,000 views, 62 reactions)
- 14.2: Parametrize CI/CD include statements on [Twitter](https://twitter.com/dnsmichi/status/1429473222098100233) (8,000 impressions, 400 engagements) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_you-can-parametrize-cicd-include-statements-activity-6835239058843688960-Xc6v) (800 views, 13 reactions)
- 14.2 Creating branches directly in @gitlab from a @Jira issue?!  Yes please on [Twitter](https://twitter.com/olearycrew/status/1429899257700618249) (15,000 impressions, 900 engagements)
- 14.2 Oh hey check it out. Pronouns AND name pronunciation is now in GitLab profiles on [Twitter](https://twitter.com/olearycrew/status/1429459101294157829) (5,000 impressions, 150 engagements)
- 14.1: External API for status checks in MRs on [Twitter](https://twitter.com/dnsmichi/status/1418271636722274307) (8,000 impressions, 500 engagements)
- 14.1: Helm Charts repository on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_cloudnative-helm-activity-6823949221377388544-9spE) (1,100 views, 17 reactions)
- 14.1: Kubernetes cluster image scanning on [LinkedIn](https://www.linkedin.com/posts/dnsmichi_kubernetes-activity-6823916460750974976-FJEc) (2,500 views, 27 reactions)
- 14.0: Pipeline Editor on [Twitter](https://twitter.com/dnsmichi/status/1407359717282828298) (38,000 impressions, 1,400 engagements)
- 14.0: Container Scanning in GitLab to use Trivy from @AquaSecTeam on [Twitter](https://twitter.com/olearycrew/status/1407358974601707520) (7,000 impressions, 100 engagements)
- 14.0: Introduction of Terraform Module Registry on [Twitter](https://twitter.com/sarki247/status/1407995667121901568) (4,200 impressions, 55 engagements)
- 14.0: Cluster management project template using Helm 3 on [Twitter](https://twitter.com/sarki247/status/1408056830551601159) (2,000 impressions, 64 engagements)

Past examples:

- [13.12: Dynamic CI/CD variables based on conditions on Twitter](https://twitter.com/dnsmichi/status/1396129739622998022) (23,000 impressions, 2,300 engagements)
- [13.11: Tweetstorm to highlight 13.11 and tease 13.12](https://twitter.com/dnsmichi/status/1395686623132758017) (32,000 impressions)
- [13.10: Nested CI/CD variables on Twitter](https://twitter.com/dnsmichi/status/1383014333500813322) (18,000 impressions, 1,100 engagements) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-1310-allows-to-nest-cicd-variables-activity-6787693633425424384-WelD) (2,300 views, 35 reactions)
- [13.10: Parallel CI/CD job execution in child pipeline triggers on Twitter](https://twitter.com/dnsmichi/status/1382351735960797184) (13,000 impressions, 700 engagements) [LinkedIn](https://www.linkedin.com/posts/dnsmichi_parallel-cicd-job-execution-in-gitlab-improves-activity-6788117887266652160-hNIV) (1,100 views, 25 reactions)
- [13.9: Expanded CI/CD configuration on Twitter](https://twitter.com/dnsmichi/status/1363879804785803268) (5,000 impressions, 400 engagements)
- [13.9: SAST with .NET 5.0](https://www.linkedin.com/posts/dnsmichi_gitlab-dotnet-activity-6772576735876714496-noR_) (1,600 views, 43 reactions)
- [13.8: CI pipeline editor on LinkedIn](https://www.linkedin.com/posts/dnsmichi_best-release-ever-gitlab-inc138-is-here-activity-6758427487870451712-TttR) (5,000 views, 10 comments, 316 reactions, 15 reshares)
- [13.8: Download CI/CD job artifacts in the MR widget on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-activity-6758714643964805120-9Yyd) (800 views, 14 reactions)
- [13.7: Merge Request Reviewers on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-devops-productivity-activity-6756907989321433088-TRW9) (500 views, 16 reactions)
- [13.7: Rendered URLs in CI/CD job logs on LinkedIn](https://www.linkedin.com/posts/dnsmichi_everyonecancontribute-activity-6723982784492273664-cwg0) (4,800 views, 350 reactions, 12 comments)
- [13.6: VS Code GitLab workflow on Twitter](https://twitter.com/dnsmichi/status/1336362663107063808) (16,000 impressions, 700 engagements)
- [13.5: Group wikis on Twitter](https://twitter.com/dnsmichi/status/1319656105249820672) (18,000 impressions, 600 engagements)
- [13.4: Pipeline Efficiency docs on LinkedIn](https://www.linkedin.com/posts/dnsmichi_on-a-personal-note-my-first-larger-contribution-activity-6714235003447853056-Kkv4) (2,100 views, 49 reactions)
- [13.3: KubeCon Kubernetes teaser](https://twitter.com/dnsmichi/status/1296051268448915456) (18,000 impressions, 500 engagements)
- [13.3: Matrix builds of parallel CI/CD job execution on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-development-cicd-activity-6702933595721351168-c-nV) (2,400 views, 49 reactions)
- [13.1: Individual CI/CD job artifcat reports on LinkedIn](https://www.linkedin.com/posts/dnsmichi_gitlab-cicd-development-activity-6683033972479451136-VNVL) (700 views, 16 reactions)

#### Wider community involvement is encouraged

- Ask GitLab heroes in [Discord](https://discord.gg/gitlab) to share their favourite upcoming feature on social.
- Share the release MR with the review app, including this handbook URL for tips and best practices.

### Review Features for Release Posts

Developer Advocates will take the end-user point-of-view and help review the release blog post items prior to a release around the 18th of each month. Reviews include:

- Feature description and clarify on the problem/use case being solved.
- Suggest promoting a feature to primary.
- Add a feature from the Changelog, seeing huge impact or a missing addition.

The first pilot experiment was established with our [Verify product group](/handbook/product/categories/verify/) for [GitLab 14.2 in August 2021](https://gitlab.com/gitlab-org/verify-stage/-/issues/97#note_664350725). The DRIs were @jreporter (Group Manager, Product) and @dnsmichi (DE stable counterpart).

### Product Feedback

Next to our user research campaigns and feedback in the project issues, we often see feedback and interesting ideas on social media. Sometimes users tag our brand account `@gitlab`, in other scenarios we discover them with searching for `gitlab`.

With moving this into a direct question like `If there would be one feature you could add, what would it be?`, this can help identify stakeholders and encourages for a more direct feedback loop.

This effort needs a cross-team collaboration between product & engineering, social and DE teams. Assigned DE DRI is [Michael Friedrich](/handbook/company/team/#dnsmichi).

Workflow:

- Create a new DE request issue
- Define the topic/scope
- Propose a message for social, max. 280 characters.
- Schedule the social share & document
- Monitor the social share for responses
- Move the specific responses to #product in Slack

Second iteration: Make this a self-service with a request form, and automated response collection/updates in Slack or similar.

KPIs:

- Number of engagements
- Issues updated/created

### Team Evangelism

Move social shares into product channels, be it good feedback or additional experts required to answer. Tag GitLab team members and encourage them to respond/discuss on social media when they can benefit from the conversation. For heated discussions, stay within a small group of social media DRIs.

For incoming questions and involving more experts, Developer Advocates can help in Slack in [#dev-advocacy-team](https://gitlab.slack.com/archives/CMELFQS4B).

#### Release Management

Example tweets for [GitLab 12.9](https://about.gitlab.com/releases/2020/03/22/gitlab-12-9-released/):

- Pick a nice title and encourage everyone to try to create a new release: `Have you created your first release through the in @gitlab yet? Let's do this!`
- Go to your demo environment and create 1-4 screenshots, including guiding steps (make this a mini tutorial)
- URL to the release blogpost should be included
- Mention @gitlab with the @ before the username
- Use hashtags `#gitlab #releasemanagement`

#### Package

Example tweets for [open-sourcing the registries](https://about.gitlab.com/blog/2020/03/30/new-features-to-core/):

- Pick a cool title to encourage users to solve a use-case for them: `Unstable npm mirrors no more: @gitlab got you covered - the NPM registry will be open sourced.`
- Go to your demo environment and create 1-4 screenshots, including guiding steps (make this a mini tutorial)
- URL to the release blogpost should be included
- Mention @gitlab with the @ before the username
- Use hashtags: `#gitlab #packages #registry`
