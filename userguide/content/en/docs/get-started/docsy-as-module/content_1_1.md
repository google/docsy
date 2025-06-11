---
title: "Content workflows for Developer Advocates"
description: "Learn about the Developer Advocacy team's content library, creation and distribution workflows."
aliases:
- /handbook/marketing/developer-relations/developer-evangelism/content/index.html
---


## Content Library

The Developer Advocacy team creates content that can be reused for campaigns. All contents and activities the team participates in are added to the team's technical content plan sheet (search for `Technical Content Plan` in Google Drive) and [epics roadmap](/handbook/marketing/developer-relations/developer-advocacy/workflow/#roadmap-view).

You can search for relevant content and contact the team in the linked content epics or in the [#dev-advocacy-team](https://app.slack.com/client/T02592416/CMELFQS4B) Slack channel.

The following sections provide an overview of all content assets, and links to find them.

> **Note**: If you need an updated or newly created content asset, please follow the [content request workflow](/handbook/marketing/developer-relations/content-request/#how-to-work-with-the-developer-advocate-team).

### Highspot

The team's content is distributed in [Highspot](https://gitlab.highspot.com/) in topic and type-specific spots, for example, [GitLab Duo (AI)](https://gitlab.highspot.com/spots/64b14e7cc4b08381c0408bb4) and [Customer Outreach](https://gitlab.highspot.com/spots/615dd7c2506d3fc490ad78cd).

### Product Adoption Initiatives

- [FY25 GitLab Duo adoption - Developer Relations epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/475) (internal).
- [FY25 CI/CD adoption - Developer Relations epic](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/466) (internal)

### Blog posts

- [Abubakar Siddiq Ango](https://about.gitlab.com/blog/authors/abuango/)
- [Cesar Saavedra](https://about.gitlab.com/blog/authors/csaavedra1/)
- [Fatima Sarah Khalid](https://about.gitlab.com/blog/authors/sugaroverflow/)
- [Fernando Diaz](https://about.gitlab.com/blog/authors/fjdiaz/)
- [John Coghlan](https://about.gitlab.com/blog/authors/johncoghlan/)
- [Itzik Gan Baruch](https://about.gitlab.com/blog/authors/iganbaruch/)
- [Michael Friedrich](https://about.gitlab.com/blog/authors/dnsmichi/)
- [William Arias](https://about.gitlab.com/blog/authors/warias/)

### Click-through Demos

Click-through demos are product simulation demonstrations that can be used for self-guided training. They are invaluable for delivering demos to customers in areas with limited internet connectivity or complex environments, where preparation is necessary to showcase the flow. Toggle off the click boxes and speaker notes using fn+F2 to experience the real look and feel of the product.

| Title | Area | Last updated |
|-------|------|--------------|
| [Duo chat](https://tech-marketing.gitlab.io/static-demos/duo-chat.html) | GitLab Duo | 2024-06-19 |
| [GitLab Duo (AI)](https://tech-marketing.gitlab.io/static-demos/ai-demos.html) | GitLab Duo | 2023-07-23 |
| [Remote Development](https://tech-marketing.gitlab.io/static-demos/workspaces/ws_html.html) | Dev section, Create | 2023-05-23 |
| [Feature Flags](https://tech-marketing.gitlab.io/static-demos/feature-flags/feature-flags-html.html) | CD | 2023-06-23 |
| [CI Overview](https://tech-marketing.gitlab.io/static-demos/ci_overview_v1.html) | CI | 2023-10-23 |

Note: The demos can be run offline in the absence of internet connectivity. To do so, you can directly obtain the necessary HTML files from [here](https://gitlab.com/tech-marketing/static-demos/-/tree/master/public).

### Product tours

Product tours are a self-guided journey emphasizing the 'What' of a feature, skipping the 'How-to' steps to directly showcase the value aspects.

| Title | Area | Last updated | DRI |
|-------|------|--------------|-----|
| [Value Stream Management](https://gitlab.navattic.com/vsm) | DevSecOps Platform | 2024-06-25 | @iganbaruch |
| [Interactive infographic](https://tech-marketing.gitlab.io/static-demos/gitlab-infographic.html) | DevSecOps Platform | 2024-03-24 | @iganbaruch |
| [Resolving vulnerabilities with GitLab Duo (AI)](https://tech-marketing.gitlab.io/static-demos/pt-explain-vulnerability.html) | GitLab Duo | 2024-02-24 | @iganbaruch |
| [CI/CD Catalog beta](https://gitlab.navattic.com/cicd-catalog) | CI/CD | 2024-01-24 | @iganbaruch |
| [Integrating security to the pipeline](https://gitlab.navattic.com/gitlab-scans) | DevSecOps | 2024-01-24 | @iganbaruch |
| [Code Suggestions](https://gitlab.navattic.com/code-suggestions) | GitLab Duo | 2024-01-24 | @iganbaruch |

### YouTube playlists

- [GitLab Demos](https://www.youtube.com/watch?v=ZQBAuf-CTAY&list=PLFGfElNsQthYv5OtNEFoGwd0cAg-55Hdj) on the GitLab YouTube channel.
- [Developer Advocacy](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq-bYO9jCJaN45BBpzWSLAQ) with talks, workshops and community engagements, on the GitLab Unfiltered YouTube channel.
- [GitLab Duo Coffee Chat](/handbook/marketing/developer-relations/developer-advocacy/projects/#gitlab-duo-coffee-chat) on the GitLab Unfiltered YouTube Channel.

### Maintained talks

These golden talk slide decks provide storytelling for lightning talks at events, speaking engagements, customer workshops, etc. You can use the slide decks for your own talks, workshops, etc. or repurpose specific slides into new stories.

These talks are maintained throughout FY25:

| Title | Area | Last updated | DRI |
|-------|------|--------------|-----|
| [Efficient DevSecOps workflows with a little help from AI](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/402#resources) | GitLab Duo | 2024-01-31 | @dnsmichi |
| [Efficient DevSecOps workflows with reusable CI/CD components](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epics/399#resources) | | 2024-01-31 | @dnsmichi |

### Projects

Source code, demo projects, workshops, tutorials, research, etc. are documented in the [Projects handbook](/handbook/marketing/developer-relations/developer-advocacy/projects/). This includes use cases for GitLab Duo (AI), CI/CD components, DevSecOps and Security, Remote Development, GitLab API, etc.

## Content Creation

### Guideline and tips for creating GitLab tours with Navattic

1. Keep the product tours concise, ideally consisting of 8 to 12 steps, each highly focused on delivering clear value. In contrast, demos in documentation may adopt a more instructional "how-to" approach with longer steps.
1. Consider adding links to relevant blog posts or documentation within tooltips or modals to provide users with further context or resources.
1. In the demo settings, under 'theme' select 'GitLab Branding [Navattic Team]'.
1. Navattic supports two types of screen captures: Web and Screenshots. It's recommended to use web captures for an 'in-product' feel, but in some cases, due to Navattic product limitations, you may find that web capture doesn't work well for some pages. In such cases, use screenshots instead. Here are some guidelines for screenhots capturing:

- Open your browser at 1920x1080 resolution (Full HD). You can use [Window Resizer](https://chromewebstore.google.com/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) to set the resolution.
- Open GitLab UI in full screen and capture only the GitLab UI (avoid including the Chrome toolbar or the MAC menu).
- Use the keyboard shortcut Shift+Command+4 to Capture selected portion of the screen.

## Content Distribution

### UTMs for URL tagging and tracking

The Developer Advocacy team works with the Developer Relations Team [UTM Strategy](/handbook/marketing/developer-relations/utm-strategy/), which is based on the larger [Marketing UTM strategy](/handbook/marketing/utm-strategy/). The `utm_content` prefix for the Developer Evangelism team is `de_`, this allows for easily filtering of the team's data in Sisense.

You can use the [UTM Generator](/handbook/marketing/developer-relations/utm-strategy/#utm-generator) on the Community UTM Page to easily generate UTM Codes for your campaigns.

We use the following campaigns:

1. [Blog posts (general)](https://campaign-manager.gitlab.com/campaigns/view/17) - All GitLab blog where we are not authors. Content tracking for social media.
1. [Blog posts (authors)](https://campaign-manager.gitlab.com/campaigns/view/18) - GitLab blog posts where we are authors. Content tracking for social media.
1. [Talk resources (general)](https://campaign-manager.gitlab.com/campaigns/view/13) - QR codes and short URLs for talk slides.
1. [Community newsletter](https://campaign-manager.gitlab.com/campaigns/view/27) - community newsletter short URLs.
1. [Demos (TMM, DE)](https://campaign-manager.gitlab.com/campaigns/view/50) - technical demos with standalone URLs.
1. [Release Evangelism](https://campaign-manager.gitlab.com/campaigns/view/3) - [Release evangelism activities](/handbook/marketing/developer-relations/developer-advocacy/social-media/#release-evangelism).
1. [Podcast resources](https://campaign-manager.gitlab.com/campaigns/view/38) - URLs shared with podcast hosts.
1. [Contributed articles](https://campaign-manager.gitlab.com/campaigns/view/47) - external articles shared on social media.

Event and content specific tracking examples are [KubeCon EU 2023](https://campaign-manager.gitlab.com/campaigns/view/36).

### Content Distribution Workflow

After content has been crafted and published, the next step is distribution. Here are some steps to assist in the process:

1. Use the [UTM Generator](/handbook/marketing/developer-relations/utm-strategy/#utm-generator) to create UTM codes and short URLs for your content. Further insights about this can be found in the Developer Advocacy [UTM Strategy](/handbook/marketing/developer-relations/utm-strategy/).

For documentation and community:

1. Tutorial blog posts, demos, etc. that are helpful to everyone should be added to the [GitLab documentation](https://docs.gitlab.com/). Follow the contribution docs and create [related topics](https://docs.gitlab.com/ee/development/documentation/topic_types/#related-topics) headings if not existing. Raise an MR, use content short URLs, and ask the [designed technical writer](/handbook/product/ux/technical-writing/#designated-technical-writers) to review. Example MR: [Add tutorial blog posts to workspaces docs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/127500)
1. Consider sharing your content on one of our community platforms like the [GitLab Forum](https://forum.gitlab.com/) or the [r/gitlab](https://www.reddit.com/r/gitlab) subreddit. If you're covering a topic that's broader than GitLab, you can also consider other subreddits or cross-posting your content on blogging sites like dev.to.

For social media:

1. Draft some copy for sharing your content on social media. See [Content Sharing](/handbook/marketing/developer-relations/developer-advocacy/social-media/#content) for tips and an overview of different platforms. Review the [message tips](/handbook/marketing/developer-relations/developer-advocacy/social-media/#message-tips) for additional engagement ideas, e.g. emojis.
1. Suggest your content as a story on Bambu so other GitLab team members can also share it. [Details on how to suggest content on Bambu](/handbook/marketing/integrated-marketing/digital-strategy/social-marketing/team-member-social-advocacy/#suggesting-content-for-team-members-to-share-on-bambu).
1. After posting your content on social media, share a link in the [`#social-media-action`](https://gitlab.slack.com/archives/C01AZ9C8Z4G) Slack channel to request promotion from the social media team.

For GitLab teams:

1. Content that can be useful to our Field Teams, should also be posted in [Highspot](https://gitlab.highspot.com/).
1. Share an update in the [#dev-advocacy-team](https://app.slack.com/client/T02592416/CMELFQS4B) Slack channel using the following message template:

```text
:results-tanuki: <Content type> published: <title>

Social short UTM URLs:

1. LinkedIn:
2. Twitter:
3. Mastodon:

Content epic: <URL>

Thanks/cc @teammembers
```

Example:

```text
:results-tanuki:  Blog published: Set up your infrastructure for on-demand, cloud-based development environments in GitLab

Social short UTM URLs:

1. LinkedIn: https://go.gitlab.com/EHIjRt
2. Twitter: https://go.gitlab.com/uz7OSE
3. Mastodon: https://go.gitlab.com/pFxdKa

Content epic: <URL>

Thanks a lot @HelpfulCoworker for editing this long read :handshake: :purple_heart:
```
