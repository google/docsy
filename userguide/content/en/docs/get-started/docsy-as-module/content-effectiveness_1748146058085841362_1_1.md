---
title: "Developer Relations - Content Effectiveness"
description: "How the Developer Relations team measures effectiveness of content it creates."
---

## Quicklinks

- [Marketing Influenced Pipeline Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/MarketingInfluencedPipeline/MarketingInfluencedPipelineReview?:iid=3) on Tableau
- [Marketing Campaigns Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?%3Aiid=1) on Tableau
- [Looker Reports](https://lookerstudio.google.com/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_k19k34iwad)
  - [Multilingual YouTube Views Report](https://lookerstudio.google.com/u/0/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_zzca42mped)
- [Content Asset Inventory](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=0)
- [Youtube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets) Script
- [CommunityApps](https://campaign-manager.gitlab.com/) (Campaign Manager)
- [DevRel-Infuenced Epic Board](https://gitlab.com/groups/gitlab-com/marketing/developer-relations/-/epic_boards/1056370?label_name[]=DevRel-Influenced)

## Content Effectiveness

The Developer Relations team creates content on varying topics and in different formats, these include videos, blog posts, conference talks, demos, etc. This handbook pages details how we measure the effectiveness of the content, the tools we use, and how they work together. First, we will review the different components.

### How we measure Content Effectiveness

The key measure of content effectiveness for the Developer Relations team is how the content we create or the campaigns we contribute to influence revenue. This is done by ensuring every content item we create has an impact on the experience of GitLab users and customers. Impact is achieved by listening to the community and creating content that meets the needs of the community with relevant calls to action. We also impact the experience of users by collaborating with other teams and contributing content or thought leadership.

#### The Metrics we measure

- Blog Views: These are impressions generated from blog posts published by the team on the GitLab blog.
- Video Views: Videos are uploaded to the [Official](https://www.youtube.com/gitlab) and the [GitLab Unfiltered](https://youtube.com/gitlabunfiltered) channels on YouTube. We also include Shortened links with Relevant UTM codes.
- Campaigns: The Developer Relations team use the `devrel` UTM Campaign name to track engagement with our content or activities shared on external mediums.
- Influenced Campaigns: These are campaigns owned by other marketing teams that we contribute to, we track the result of our influence on the [Marketing Campaigns Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?%3Aiid=1) and in the [Marketing Influenced Pipeline dashboard](https://10az.online.tableau.com/#/site/gitlab/views/MarketingInfluencedPipeline/MarketingInfluencedPipelineReview?:iid=3).

You can learn how everything fits together in this [overview video](https://drive.google.com/file/d/1s0HIm64oY27ZIbxsUv0cW0MyWhKoQaQA/view?usp=drive_link) [Internal].

![DevAdvocacy Metrics Data Pipeline](/images/handbook/marketing/developer-relations/DevAdvocacy-Metrics-Pipeline.png)

#### Everything is a Campaign

Critical to measuring content effectiveness is ensuring engagement is measurable and this is achievable by using Calls-To-Action (CTAs) with UTM & Salesforce campaigns. We use UTM campaigns for the content we publish on external channels like 3rd party blogs, YouTube, Forum, Talks, etc. We do not use UTM campaigns, even when short linked with Campaign Manager or any other URL shortener, on GitLab channels like the GitLab blog, website, documentation, or handbook.

The Marketing Campaigns Dashboard uses `utm_budget` to track campaigns and how they lead to touchpoints, lead, MQL (Qualified Leads) and eventually ARRs. This makes it very important to ensure the right `utm_budget` is used for CTAs. If you use the [CommunityApps Campaign Manager](https://campaign-manager.gitlab.com/), the appropriate `utm_budget` is automatically added for you by putting the link under the right team. You can access the Developer Relations team page with this [link](https://campaign-manager.gitlab.com/teams/view/2).

For campaigns we influence, its important to ask for the their UTM or Salesforce campaign names and update the [devrel_influenced_campaigns](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=1201530981) sheet of the DevRel Content Asset inventory, without this step, the Marketing Campaigns Dashboard will not include the campaign as part of those influenced by Developer Relations. To make it easier tracking campaigns the team influences, we use the `DevRel-Influenced` label across the [gitlab-com](https://gitlab.com/gitlab-com) GitLab group.

### Developer Relations Influenced Campaigns

The Developer Relations team contribute to several campaigns across GitLab. To measure the impact of these contributions, we keep track of DevRel influenced campaigns in the `devrel_influenced_campaigns` sheet of the [Content Asset Inventory](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=1201530981). This sheet serves as a data source for the "DevRel" influenced filter to show campaigns influenced by the team on the [Marketing Campaigns Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?%3Aiid=1).

There are 2 filters applicable to the Developer Relations team: Developer Relations budget holder and the DevRel Influence type filters.

#### Developer Relations Integrated budget holder filter

![budget_holder_filter](/images/handbook/marketing/developer-relations/budget_holder_filter.png)

The "Developer Relations" option under the "Integrated Budget Holder" filter shows data for campaign touchpoints generated with the teams' use of  `devrel`, or `cmty` for old campaigns, for `utm_budget`. These are only applicable to links we share ourselves, mostly using CommunityApps. When you use CommunityApps to create a short link under the DevRel team, the `utm_budget` is automatically added when tracking is enabled.

#### DevRel Influence Type Filter

![devrel_influence_type](/images/handbook/marketing/developer-relations/devrel_influence_type.png)

To access the "DevRel Influence Type" filter, click on "Advanced filters" on the "Campaign Drill Down" tab of the Marketing Campaigns Dashboard. The DevRel Influence Type filter shows all campaigns influenced by the Developer Relations team, including those with the `devrel` UTM campaign budget code. Uncheck the "No DevRel Influence" check box to filter the dashboard. You can also filter by specific influence types to further filter the results. The "Owned" filter are touchpoints data from the `devrel` budget holder.

### Content Asset Inventory

A common bottleneck to tracking the effectiveness of content is having a source where the content is listed and indexed with relevant metadata. While individual content types like blog posts can be sourced from the medium on which they are published, it is often difficult to filter automatically for a specific team or group. The workaround is to have a spreadsheet where all the content is aggregated for further use, this is the role the Content Asset Inventory [spreadsheet](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=0) plays. Our Looker Studio and Tableau dashboards use the Asset inventory as a data source. The sheets in the spreadsheet are:

- `youtube_views_gitlab`: Videos published on GitLab owned YouTube channels.
- `devrel_blog_posts_views`: Blog posts published on GitLab's blog bty members of the Developer Relations team.
- `devrel_influenced_campaigns`: Campaigns influenced by members of the Developer Relations team.
- `External Videos`: Videos created by or in collaboration with a member of the Developer Relations team and published on a non-GitLab owned YouTube channel or a platform other than YouTube.

### YouTube2Sheets

[YoutTube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets) is a ruby script that runs twice daily at noon and midnight UTC. It takes a list of YouTube playlists provided in a [JSON Config file](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/blob/master/data_config.json?ref_type=heads), connects to the YouTube API, fetches all the videos in the playlists along with their meta data and stores them in the Google sheet specified for each playlist.

The idea behind this script is to create an semi-automated way to keep track of videos published on YouTube. For this to work, the videos need to be organized in playlists and the playlists should be added to the [JSON Config file](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/blob/master/data_config.json?ref_type=heads) file. The format of the file is as follows:

```json
[
    {
        "playlist_id":"PL05xxxxx", //The ID of the YouTube playlist to fetch videos from.
        "spreadsheet_id":"1WLuayxxxx", //The ID of the Google Spreadsheet the meta data of videos will be stored.
        "sheet_name":"Sheet1", //The name of the the Sheet in the Google Spreadsheet where the video data should be stored.
        "task":"Developer Relations - DA", // An name for the list, useful in cases where the spreadsheet is used for multiple playlists.
        "description":"Developer Advocacy Team"
    }
]
```

The video meta data are stored in the spreadsheets in the following format:

|      |   A   |   B   |   C   |   D   |   E   |   F   |   G   |   H   |
|------|-------|-------|-------|-------|-------|-------|-------|-------|
| 1 | Video ID | Task/Team Name  | Channel Title  | Playlist Title |  Video URL  | Video Title  | Publication Date | GitLab Publication Quarter |
| 2 | _OSDh_L5M_E |    Developer Relations - DA | GitLab Unfiltered |    Developer Advocacy Team | https://www.youtube.com/watch?v=_OSDh_L5M_E     |  5. #everyonecancontribute cafe: HashiCorp Waypoint | 2020-05-27T22:43:09.000Z | FY21Q2 |

The spreadsheet data in the spreadsheet can be used as is for any further automation or process. In the case of the Developer Relations team, the data is fed into the `youtube_views_gitlab` sheet of the Content Asset Inventory [spreadsheet](https://docs.google.com/spreadsheets/d/1WzdX8o9wzuswIPMAYVUURswm2AtwFcVE6XhmHy1lhr8/edit#gid=0).

### CommunityApps - Campaign Manager

The [CommunityApps Campaign Manager](https://campaign-manager.gitlab.com/) enables the team to manage the use of UTM campaigns in line with the [Marketing UTM strategy](/handbook/marketing/utm-strategy/). You can learn more about the [application here](/handbook/marketing/developer-relations/community-apps/campaign-manager/). The key role of CommunityApps in the Content Effectiveness workflow is to ensure the right UTM campaign codes are used and, in turn, their usage will be picked up by the data automation that powers the [Marketing Campaigns Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown?%3Aiid=1) on Tableau.

### Looker Reports

![looker-report](/images/handbook/marketing/developer-relations/looker-report.png)

The [Looker Studio reports](https://lookerstudio.google.com/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_k19k34iwad) was created as a quick first iteration before they are migrated to Tableau. The data sources used to build the reports are:

- Google Analytics 4 API
- YouTube API
- `youtube_views_gitlab` sheet in the Content Inventory
- `devrel_blog_posts_views` sheet

Using the 4 data sources, 3 blends were created, the `DevRel Filtered Youtube Data Source`, `DevRel Filtered Youtube (Official Channel) Data Source` and `DevRel Filtered Blog`. A [Blend in Looker Studio](https://support.google.com/looker-studio/topic/9061419?hl=en&ref_topic=10388842&sjid=10095352649474076992-EU) lets you combine multiple data sources in the same visualization.

`DevRel Filtered Youtube Data Source` and `DevRel Filtered Youtube (Official Channel) Data Source` blends the data from the `youtube_views_gitlab` sheet and the YouTube API using the `External Video ID` from the API and the `video_id` column from then sheet, in an Inner join. The `DevRel Filtered Youtube (Official Channel)` Data Source is authenticated using John Coghlan's Google account to the official channel and `DevRel Filtered Youtube Data Source` to the Unfiltered channel using the same account.  The `DevRel Filtered Blog` blends data from the `devrel_blog_posts_views` and Google Analytics (GA4) API.

Here is an example of a blend:

![looker-blend](/images/handbook/marketing/developer-relations/looker-blend.png)

#### Multilingual YouTube Views Report

Some of the videos published on GitLab.com are dubbed in languages like Spanish & Portuguese. To understand how they perform against the English version, we have the [Multilingual YouTube Views Report](https://lookerstudio.google.com/u/0/reporting/25dedcd0-7f67-4a37-8ab6-ad03cd431f92/page/p_zzca42mped) in Looker Studio.

![looker_studio_multilingual_report](/images/handbook/marketing/developer-relations/looker_studio_multilingual_report.png)

This report uses the `youtube_views_gitlab` sheet in the Content Inventory Sheet by introducing the `video_topic` column. The column is used to group a set of videos with same content but in different languages. For example, in the image below, you will see the same video_topic is specified for the English, Spanish and Portuguese versions of the listed videos. This process is manual. Once the videos have been synced by [Youtube2Sheets](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/), you'll need to update the sheets and fill in the `video_topics` for videos you want in the multilingual report.

![multilingual_reports-sheet-example](/images/handbook/marketing/developer-relations/multilingual_reports-sheet-example.png)

This configuration only supports videos published on the Official GitLab YouTube Channel. If you are publishing new videos, make sure they are in the appropriate [English](https://www.youtube.com/playlist?list=PLFGfElNsQthYDx0A_FaNNfUm9NHsK6zED), [Portuguese](https://www.youtube.com/playlist?list=PLFGfElNsQthaRSNTv93cM57GBB1l_95Px) and [Spanish](https://www.youtube.com/playlist?list=PLFGfElNsQthbm-EfY2AyFNr8o6qT5A2ud) playlists. If you are creating a new language playlist, add the playlist to the [Youtube2Sheets Configuration file](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/blob/master/data_config.json?ref_type=heads) and specify the language.

## Maintenance guide

This section details how the different components of the Content Effectiveness workflow link together and how to maintain them.

### Maintenance

#### Campaigns

- Use the Campaign Manager to generate shortlinks or full campaign links and use them in your campaigns.
- Add the `DevRel-Influenced` label to the issue or epic of the campaign you are working on.
- If the campaign belongs to a different team, confirm the UTM or Salesforce Campaign name and update the `devrel_influenced_campaigns` sheet in the Content Inventory accordingly. Please make sure campaign names are not duplicated, if it already exists, no need to add it again as it will break data pipeline.
- It is recommended to use campaign links as much as you can on non-GitLab mediums.

#### Blog posts

Once a blog post has been published on the GitLab Blog, add the URL along with other details to the `devrel_blog_posts_views` sheet. This is an important step in getting the content piece to appear in the relevant dashboards.

#### Videos

For YouTube Videos on Official and Unfiltered Channels, ensure the videos are organized in a playlist and add the play list to the YouTube to Sheets `data_config.json file`. Ensure the DevRel Content Inventory spreadsheet ID is used, you can find it from other playlists in the file. Once this is done, the videos from the playlist will be added to the `youtube_views_gitlab` sheet once the [scheduled pipelines](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/youtube2sheets/-/pipeline_schedules) of the YouTube2Sheets project runs.

For videos on non-GitLab Channels or other platforms, add the details about the video to the `External Videos` sheet.
