---

title: "Vimeo"
description: "Vimeo is a video hosting, sharing, and services platform. "
---







## About Vimeo

Vimeo is a video hosting, sharing, and services platform.

## Access

### Single access

Vimeo is connected to Okta. To request access, [create an access request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/) and use the GitLab user group `@gitlab-com/business-technology/team-member-enablement` to provision you. Make sure to include the business case for why you would like access and tag a team member from digital production. Once provisioned to Vimeo, marketing ops can adjust your permission set as neeeded.

### Bulk access

If a team is needing access to Vimeo, please open a [bulk access request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) and use the GitLab user group `@gitlab-com/business-technology/team-member-enablement` to provision you. Business Ops will create a group in Okta that gets pushed to Vimeo via SSO. Once access is granted, please ping `@MihaiConteanu` to update permissions for each user in the group. The group created in Okta does not sync to the `Manage Team` section in Vimeo - it will show the individual users as part of the group or team and not the team itself. However, this group/team does sync with regards to folder permissions and access. To provide access to a specific folder in Vimeo to an entire team, click on the folder settings in Vimeo and click `Share`. There, you can adjust the permissions for an entire team to your selected folder.

### User Roles

[Managing team members on your account](https://vimeo.zendesk.com/hc/en-us/articles/224818687-Managing-team-members-on-your-account)

1. `Uploaders` - Uploaders can only upload videos to the account. On their upload page, they will be able to toggle between uploading videos to their own account and uploading videos to the company account. Uploaders will only be able to edit the title and description of the video while it is being uploaded to the company account. Any videos an uploader adds to the company account will have the [privacy setting](#privacy-settings-overview) `Only Me`, but as the account owner, you can change the video's privacy setting after upload. **Note:** Uploaders will need to make sure they select the correct account from their upload page. Uploaders do not have any access to the company account otherwise. They cannot view or edit the video after they've uploaded it nor can they access any settings for the company account.
1. `Viewers` - Viewers can be invited to specific folders within the account, but they will have limited access to the contents of those folders. They can access the review page, leave notes, and share videos that are within those folders. They do not have the ability to upload, edit, publish, or access any other settings or areas of the account that are meant for working members.
1. `Contributors` - Contributors can be invited to access a specific folder within the account. They’ll have the ability to upload, edit, review, share, and publish videos within a folder, but won’t have access to any of your other folders or areas of your account. A contributor also won’t be able to change the title of a folder, delete a folder, or delete a video from the account. They can view settings of a video in that folder as well as the analytics tab, which has numbers from the past 30 days but won't have access to advanced analytics for the video. Once in the `Video Manager`, Contributors will only be able see the folders to which they have been invited. In addition, contributors can access settings of an archived live event within the folder to which they contribute. Contributors can start a live event to Vimeo if they are using an external encoder via RTMP (after the Owner or Admin creates an event and provides the Contributor with the RTMP URL and Stream Key). **Note:** If the Vimeo account is connected to other social accounts such as Facebook, then any live events the Contributor starts from their encoder will also simulcast to that destination.
1. `Admins` - Admins can help upload and manage all videos, folders, and collections. Admins will not be able to access account settings or payment information. Admins also cannot delete videos; only the account owner can do this. Admins have access to the following features:
   - Creating, managing, and deleting collections
   - Creating, managing, and deleting folders
   - Changing the privacy settings of your videos
   - Viewing advanced analytics of your videos
   - Create live events
   - Adjust privacy settings, embed customization, and interaction tool settings for live events
   - Stream to live events using WebRTC or RTMP from an external encoder
   - End live events
   - Export chat transcripts
1. `Owners` - Only Owners can do the following:
   - Edit and organize the account's profile page
   - Access Simulcast settings
   - Authenticate API-integrated encoders and applications - This means any encoder that allows you to connect to Vimeo by logging in to account directly from the software or application (e.g. Livestream Studio via login, Mevo, Vimeo mobile app, or other third-party direct integrations)
   - Delete live events
   - Access Developer API and create and manage developer apps for their account

## Support

1. `#brand_video` in Slack
1. [Contact Support](https://vimeo.com/help/contact)
1. [Help Center](https://vimeo.com/help)

## Training

1. [Onboarding Call (GitLab team - internal use only) 202005](https://drive.google.com/file/d/1k61AoPcGBNtXIUltYEHOk6_9vFBUDGYB/view?usp=sharing)
1. [Training Call (GitLab team - internal use only) 202006](https://drive.google.com/file/d/14jHp_nZGVBml7ipz1ZpeCvuAJInrADdk/view?usp=sharing)
1. [Video School](https://vimeo.com/blog/category/video-school)

## Video Manager

The [video manager](https://vimeo.zendesk.com/hc/en-us/articles/115004610668-The-video-manager) is where all the video uploads are stored and managed.

When you navigate to Vimeo.com, you first land in the video manager (when logged in). The video manager houses all videos uploaded, both public and private, as well as video drafts, showcases, and any live events.

You can also navigate to the `Videos` sidebar menu option to access the video manager.

### Create a Folder

1. Click the `+` icon next to the `Videos` sidebar menu option.
1. Enter a descriptive name for the folder.
1. If you want to share this folder with specific team members, add them by email address or by selecting them from the team members in the account list.
1. In the `Notifications` tab, you can toggle the ability to connect to Slack to send folder notifications so you can track team activity on videos, review pages, and more.
1. When done inputting your folder info and options, click `Create`.

### Video Deletion Policy

Only the `Owner` role has the ability to delete videos in Vimeo. As such, we have a folder in Vimeo named `TO BE DELETED`. If you have a video that you would like to mark for deletion, please move it to this folder. Note that the `Owner` role will delete any videos in this folder that are older than 30 days or upon request.

## Create

[Vimeo Create](https://vimeo.zendesk.com/hc/en-us/articles/360037832151-Vimeo-Create-overview) is Vimeo’s new video maker tool. It allows you to easily and quickly create your own video from stock videos, photos, and personal videos. [See the knowledgebase article](https://vimeo.zendesk.com/hc/en-us/articles/360037832151-Vimeo-Create-overview) for a full tutorial.

## Upload

Vimeo accepts most video file formats (MP4, MOV, WMV, AVI, and FLV). Vimeo does not accept audio files, image files, or other non-video formats (MP3, WAV, WMA, JPG, and PNG). If you compress your source file prior to upload, follow [these guidelines](https://vimeo.com/help/compression). For more information on uploading videos to Vimeo, [see this help article](https://vimeo.zendesk.com/hc/en-us/articles/229838988-Preparing-to-upload).

## Live Events

For more information about conducting virtual events, see the [virtual events handbook page](/handbook/marketing/virtual-events/).

### Best Practices

- [Streaming Best Practices](https://vimeo.zendesk.com/hc/en-us/articles/360040590272-Streaming-Best-Practices)
- [Recommended network configuration for streaming](https://vimeo.zendesk.com/hc/en-us/articles/360040960091-Recommended-network-configuration-for-streaming)
- [Network and browser requirements for viewing streams](https://vimeo.zendesk.com/hc/en-us/articles/360040394231-Network-and-browser-requirements-for-viewing-streams)

### Create a live event

#### Step 1

1. Select `Live Events` in the left sidebar menu.
1. Click `Create live event` under the list of events in the table. You can also click the `New video` button in the top-left corner and select `Create live event`.
1. A dialogue box will pop up asking you to fill in some details about your event. In the `Event title` field, title your event.
1. Select whether this will be a one-time or recurring event.
1. Select a start date (if applicable; optional).
1. If you select a start date, the time field will activate allowing you to input a time (if applicable, optional).
1. Choose the privacy for this event. The available options are: `Public`, `Only me`, `Password`, `People I follow`, `Private link`, or `Hide from Vimeo`. See detailed explanations of these options in the [privacy settings overview](#privacy-settings-overview).
1. Click `Next`.

#### Step 2

1. On the next page, choose settings for your live event. Under the `Event` tab in the left-hand sidebar, toggle the `Chat` functionality on or off (appears only on Vimeo where you choose to embed). [See more info on enabling, disabling, and moderating chat](https://vimeo.zendesk.com/hc/en-us/articles/360040771772-Enabling-disabling-and-moderating-chat).
1. In `Viewing privacy` you can select different privacy options for your live event.
1. Enter a description for your live event under the `Description` field.
1. Under the video preview, you can choose a thumbnail for your video cover and edit the start time of the event.
1. Under the `Embed` tab, select the options you would like to toggle on or off before generating your embed code. First, select the preferred embed privacy. You can choose `Anywhere`, `Nowhere`, or `Specific domains`. [See live event privacy settings](#live-event-privacy-settings).
1. Under `Video Controls` toggle on/off the options for your live event.  [See more about customizing the embedded player and adding embed presets](https://vimeo.zendesk.com/hc/en-us/articles/224972808-Customizing-the-embedded-player).
1. Choose your preferred interaction tool and its respective settings (optional). See [interaction tools](#interaction-tools) for more detail.
1. Under the `Destinations` tab, select where you will be streaming your live event. Available destinations to stream: Vimeo. [More destinations coming soon](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/3872). Click `Next`.
1. Vimeo will ask permission to use your device's microphone and camera. After acceptance, a low-res preview will be made available to test audio/video input/output. Notice a new sidebar menu available to manage the stream including: [Destinations](#destinations), [Chat](#chat), [Polls](#polls), [Q&A](#q--a), [Graphics](#graphics), and [Stream Health](#stream-health). One or more of these features may not be enabled based on the set up of your live event.
1. Once you've configured all your live stream settings and have successfully completed a dry-run, click the `Go Live` button in the top-right corner.

## Stream Health

[See how well your stream is performing in real time](https://vimeo.zendesk.com/hc/en-us/articles/360034657071-Stream-health-monitoring). The information displayed in this tool comes directly from the Ingest server logs, which is the first point of contact your stream has with the Vimeo Live back-end.

The stream health indicator can be found on the upper right of the live settings page and preview page.

The indicator bar at the top displays one of the following statuses:

1. `Ready`: Webcam has been connected and you are ready to go live.
1. `Good connection`: Stream has connected (either through the browser, RTMP, or an integrated encoder) and Vimeo servers are receiving a stable frame rate/bitrate.
1. `Unstable connection`: Vimeo servers detect more than a 15% drop in frame rate/bitrate from the intended configuration. This means there may be a problem with your network connection or encoder.
1. `Offline`: Stream has disconnected from Vimeo servers.

### Stream Metrics

Stream metrics display the incoming bitrate and frame rate data. The graph updates in real time and details the changes in bitrate/frame rate over the last ten minutes of your stream.

Below the graph you’ll find the bitrate, average bitrate, frame rate, average frame rate, and video resolution for your stream. These metrics update in real time as well.

### Advanced Analytics

Below stream metrics, click `Advanced Analytics` to see additional information about your stream, namely Video codec, Audio codec, AVC profile, and AVC level. These inform you of your stream’s video and audio compression format (AVC stands for Advanced Video Coding), and the Session ID is a unique string that identifies your stream for Vimeo.

Ensure that you have the `GitLab` account selected to view video analytics specific to our account as each user also has a personal account.

## Sharing your screen while live

You can [share your screen with your audience](https://vimeo.zendesk.com/hc/en-us/articles/360031406392-Sharing-your-screen-while-live) using the browser-based encoder. This is available as an input alongside your webcam on the `Vimeo Live Settings` page for your live events.

## Graphics

With [Graphics](https://vimeo.zendesk.com/hc/en-us/articles/360029427951-Graphic-overlays), you can add lower third graphics, fullscreen graphics, and logos to your live broadcast right from the Vimeo live preview page.

### Lower Thirds

The name “lower third” specifically refers to the bottom one-third of the screen. [These graphics](https://vimeo.zendesk.com/hc/en-us/articles/360029427951-Graphic-overlays#h_01EKZD4FKSH76E84VWZXXHE03Q) are typically used to introduce a speaker or participant on your stream or identify the location of your event, among other uses.

**Create a lower third**

1. Click the `+` button next to `Lower Third` or `Create` under the `Lower Third` drop-down menu. You can add an image and two lines of text per lower third. **Recommendation:** Square PNG or JPG that is at least 200 x 200 pixels and no more than 5MB.
1. Preview the lower third on our browser encoder preview window for 5 seconds (only you can see).
1. Click the `"show" (eye)` icon to put the lower third on the live player indefinitely, and access the menu (three dots) to edit, duplicate, or delete the lower third. You can create additional lower thirds using the `+` button. The duplicate option is a quick way to create multiple lower thirds with the same image. Lower thirds will only appear on the bottom left corner of the stream.

### Fullscreen Graphics

Fullscreen graphics work the same way as lower thirds, except they cover the entire screen. This is ideal for displaying information prior to any action taking place or during any breaks in your event (e.g. “Stay Tuned,” “We’ll be right back.”)

**Add a fullscreen graphic**

1. Click the `+` symbol next to Fullscreen or `Create` under the Fullscreen drop-down menu.
1. Add an image. There are two optional lines of text. Because Vimeo live broadcasts have a maximum resolution of 1920 x 1080, we recommend using JPG or PNG files at this resolution for fullscreen graphics as well; they should be no more than 5MB in size. In addition, alpha channel is supported if you wish to overlay the fullscreen while still seeing some of your video (e.g. a frame). PNG files with transparency work best for this use-case.
1. Click `Preview` to see the graphic on the browser encoder preview window for 5 seconds.
1. `Replace` to select a new image, or the `delete (trash) icon` to remove the image. You then also have the option to `show (eye icon)` the fullscreen indefinitely, after which you can then hide the fullscreen, and access the menu to edit, duplicate, or delete the fullscreen. **Note:** Fullscreen covers video but it does not cover audio.

### Logos

A logo is a small icon that appears in the lower right corner of the screen and as a subtle way to keep your brand visible at all times during your event.

**Add a logo**

1. Click the `+` symbol next to `Logo`, or `Create` under the `Logo` drop-down menu.
1. The image you upload should be a square at 200 x 200 pixels and no more than 5MB in size. Logos can only be added to the bottom right corner of the stream, but will also appear above fullscreen graphics or to the right of lower third graphics.
1. Click `Preview` to see the logo on the browser encoder preview window for 5 seconds, `Replace` to select a new image, or the `delete (trash) icon` to remove the image. You then also have the option to `show (eye icon)` the fullscreen indefinitely, after which you can then hide the fullscreen, and access the menu to edit, duplicate, or delete the logo.

## Q & A

[Live Q&A](https://vimeo.zendesk.com/hc/en-us/articles/360044207351-Live-Q-A) allows you to accept questions, have viewers vote to order questions based on popularity, publish the question to the stream, and ultimately answer them.

### Setting up Q&A

1. Once you have set up your live event, select `Q&A` from the sidebar menu.
1. Click `Start Q&A` to open your event up to questions. You can do this before your stream or while you're live. **Note:** You cannot take action on a question until your event is broadcasting. Chat users are notified that they can begin to submit questions through [Live Chat](#chat). Questions they ask will be posted to the Q&A window immediately upon submission. They can also click the thumbs-up icon to vote on questions they like. Under the `Active` tab, questions will populate, which you can sort either by `Recent` or `Popular`.

### Publishing Questions

1. To answer a question, hover over the question and click `Answer`. A graphic overlay will appear as a lower third with the question automatically. **Note:** You are expected to address the question within the stream; there is no option to type in an answer into the Q&A module.
1. You can hide (and re-show) the graphic overlay by clicking `Hide (Show)` in the `Active Questions` list.
1. When you’ve finished answering the question, click `Archive` to remove the question from the list. You may also archive questions without answering them or publishing them to the stream. If you've archived a question by mistake, you can switch over to the `Archived` tab, hover over the questions and click `Unarchive`. This will put the question back in the `Active` tab.

### Ending Q&A

1. To end your Q&A session, click `End Q&A` below the list of questions. **Note:** Ending Q&A does not end the [live chat](#chat). Live chat will end as soon as the broadcast ends and will not be available afterward. Once you end the Q&A, you can export a CSV log of the Q&A by clicking `Export` at the top of the page.
1. If you're streaming from a recurring event, this button opens a drop-down menu with a list of the date/times of all streams in the last 30 days that you can archive; select `Current event` for the active event.

### Q&A Export

The CSV includes the following information:

- Name (person who asked it / anonymous)
- The question
- Time submitted
- Number of upvotes
- Answered (yes/no)
- Archived (yes/no)
- Approved (yes/no/N/A)
- Q&A number (if you held multiple Q&A sessions within one stream, i.e. you started a Q&A, then ended it, then started it again prior to ending your broadcast; this lets you know if the question was asked during which Q&A session during the course of the stream).

## Polls

[Live polls](https://vimeo.zendesk.com/hc/en-us/articles/360002126447-Live-polls) allows you to insert questions into your live stream for viewers to respond to via [live chat](#chat). Polls can be used to gather feedback from viewers (answers ranked by percentage) or as a quiz (one option being the correct response). You can have as many polls as you’d like per stream, but only one poll may be open at a time.

### Create a poll

1. Once you have set up your live event, click `Polls` in the left sidebar menu.
1. Click the `Create Poll` button.
1. Enter the question and up to four options. You have the optional ability to mark one option as the correct choice by clicking the star icon associated with that option.
1. Once your poll has been created and you are live, select `Open poll` to show this poll and allow viewers to participate. Polls can be created before going live, but they cannot be opened until you are streaming. Opened polls are pinned to the beginning of the live chat and visible to all viewers. You can keep your poll open for as long as you’d like. While open, you can choose to `Show graphic` which will show the poll options on the stream itself. The percentages for each option will continue to changes as more viewers partake.
1. Once viewers have had enough time to submit their response, click `Publish results` to close the poll so no more responses can be accepted. You can continue to use the `Show graphic/Hide graphic` button to display or hide the final results. Once your poll has concluded and you no longer need the results, you can remove it by clicking `Archive`. **Note:** Poll results will not be stored anywhere on the Vimeo account after the event so take note of them before removing them.

## Chat

Chat is disabled by default. You can enable it in [step 2 of creating a live event](#step-2). As the event owner, you have the ability to moderate chat including comment deletion and banning capabilities.

[See more info on enabling, disabling, and moderating chat](https://vimeo.zendesk.com/hc/en-us/articles/360040771772-Enabling-disabling-and-moderating-chat).

## Destinations

Vimeo supports [simulcasting](https://vimeo.zendesk.com/hc/en-us/articles/360000352508-Simulcast-overview) which allows for simultaneous streaming on Facebook Live, YouTube, LinkedIn, and any custom RTMP destination.

[Coming soon.](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/3872)

## Interaction tools

[Interaction tools](https://vimeo.zendesk.com/hc/en-us/articles/115007469788-Video-interaction-tools-overview) allow you to engage with your audience at meaningful points within the video, and give them the opportunity to connect to additional external sites or resources.

### Email capture

[Email capture](https://vimeo.zendesk.com/hc/en-us/articles/224819147-Email-capture) can appear before, during, or after a video, with the option to "gate" your video behind the email capture field, or let viewers skip it.

You can set up the email capture screen to appear before, during, or after your embedded videos, then download those email addresses. There is no direct integration between Vimeo and Marketo. You can only set up one email capture screen per video. For example, if you’ve already chosen to display the email capture screen before your video, you’ll no longer see the options to display it during or after in the embed settings. **Note:** Email capture is not supported on Facebook or Twitter.

**Setting up email capture**

1. Navigate to the `Interaction tools` tab in your video’s settings.
1. Select to enable email capture before, during, or after your video. If you choose to display the email capture screen before or during your video, you have the option to allow or prevent viewers from skipping the email capture screen. You also have the option to add a custom message, up to 100 characters in length, that will display along with the email capture fields.

**Interaction stats for email capture**

From the stats panel for your video, you can check the number of times the email capture screen has been seen and the number of email addresses submitted for the past 30 days. [Learn more about stats for video interaction tools](https://help.vimeo.com/hc/en-us/articles/115004386887-Videos-page-stats-panel).

**Downloading all captured emails as a CSV**

On the `Marketing` tab of `Account Settings`, you can download a CSV of all the emails captured through your embedded videos. The CSV contains the name (if provided), video ID, domain, and date captured associated with each email address. To download the CSV:

1. Click the button below the `Download email addresses` heading. The first time you download the CSV, you will be prompted to accept the following terms:
    - I will only use collected email addresses for marketing purposes.
    - I will not share these email addresses with others.
    - I will comply with CAN-SPAM, CASL, and any other applicable laws.
    - I will provide an unsubscribe mechanism and comply promptly with opt-out requests.

Once you accept, the CSV will download.

**Download captured emails for an individual video**

If you only want the email addresses from one particular video, you can download that CSV by navigating to your video manager. Select the desired video then navigate to `Analytics` > `Interaction` and click `Download email addresses`.

### Cards

[Cards](https://vimeo.zendesk.com/hc/en-us/articles/115007469808-Cards) are a customizable, notification-style layer that you can set to appear during playback and remain on the screen for six seconds.

### End screens

[End screens](https://vimeo.zendesk.com/hc/en-us/articles/115007893267-End-screens) allow you to determine exactly what appears when videos finish playing.

## Privacy Settings Overview

1. `Anyone` - Allow anyone to see this video.
1. `Only me` - Make this video visible to me and no one else
1. `Only people I follow` - Make my videos visible only to people I follow on Vimeo (Note: this setting will make it so that people you follow will see your video in their feeds)
1. `Only people I choose` - I'll select people with whom I want to share this video (Note: this setting will only work for sharing with other Vimeo members you follow)
1. `Only people with a password` - Protect this video with a password (Note: you can share password-protected videos with non-Vimeo members).
1. `Only people with the private link` - Make video visible only to people who have the link. (Your video cannot appear in channels or groups, and any credits you’ve added will be removed.)
1. `Hide this video from vimeo.com` - This video can be embedded on other sites but can’t be viewed on vimeo.com. (Your video cannot appear in channels and groups but can still be added to showcases and portfolios.)

[See more info on privacy settings](https://vimeo.zendesk.com/hc/en-us/articles/224817847-Privacy-settings-overview).

### Live Event Privacy Settings

1. `Anywhere` is fully open privacy.
1. `Nowhere` disables embedding completely.
1. `Only on sites I choose` allows you to input the specific URLs that are allowed to host the embedded player.

[See more info on changing the privacy settings of live videos](https://vimeo.zendesk.com/hc/en-us/articles/360001205427-Changing-the-privacy-settings-of-your-Live-videos).

## Showcases

With a [showcase](https://vimeo.zendesk.com/hc/en-us/articles/228908367-Showcases), you can organize videos together to share publicly or privately. A showcase is a great way to distribute a collection of videos to any audience. And with password-protection, you can control exactly who gets to see each one.

### Create a Showcase

1. Click the `+` icon in the left sidebar menu next to `Showcases`.
1. Input a title and description for your showcase.
1. Select the [privacy level](/handbook/marketing/marketing-operations/vimeo/#privacy-settings-overview) for your showcase. The privacy level you select will determine whether you toggle `SEO: Show in Google results` on or off.
1. In the right window pane, click the `Add video` button to add on-demand videos to your showcase. You can also create a [live event](/handbook/marketing/marketing-operations/vimeo/#live-events) for the showcase.
1. In the left sidebar menu, click `Assets`. Here you can add branded assets to your showcase including a logo, thumbnail, and accent color.
1. In the left sidebar menu, click `SEO`. If you toggled `SEO: Show in Google results` off in step 3, disregard this step. If you toggled `SEO: Show in Google results` on, input the site title, description and meta keywords for this showcase. [More on SEO with showcases here](https://vimeo.zendesk.com/hc/en-us/articles/360032785152-Search-Engine-Optimization-SEO-with-showcases).
1. In the left sidebar menu, click `Web`. Toggle on/off the various layout options for your showcase. The right window pane shows a preview of how your showcase will look as you toggle your options.
1. In the `Domain` tab, select `Vimeo URL`. In the right window pane, you can customize the URL of your showcase and then copy the link.
1. In the left sidebar menu, select `Embed` if you are embedding your showcase on the website. Toggle on/off the embed options for your showcase before copying the embed code.
1. Once you've finalized your showcase options, click the `Share` button in the top right navigation. You can copy the link or send it via email with an optional message.

### Custom Domains

A [custom domain](https://vimeo.zendesk.com/hc/en-us/articles/228908367-Showcases#customdomain) can be created for your showcase. If you are interested, please open an issue in marketing ops.

## Analytics

Analytics allow you to access in-depth insights about your videos and your Vimeo account. All members can track overall video performance, and advanced analytics and functionality.

To access video [analytics](https://vimeo.zendesk.com/hc/en-us/articles/224820247-Analytics-overview), hover over `Manage Videos` in the top left navigation menu and click `Analytics`.

[View the knowledgebase article](https://vimeo.zendesk.com/hc/en-us/articles/224820247-Analytics-overview) for a full tutorial.

## Integrations

### Okta

Vimeo is integrated with Okta for [access](#access).

### Slack

If there is an interest to pursue the [Slack integration](https://vimeo.zendesk.com/hc/en-us/articles/360001939888-Slack-integration) for your team or project, please open an issue in marketing ops.

### Social Media

[Evaluating](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/3872).

### Google Tag Manager

The following event actions are sent from the player and are [being tracked via Google Tag Manager](https://help.vimeo.com/hc/en-us/articles/115002859607-Integrating-with-Google-Tag-Manager):

1. load
1. play
1. progress - 25%
1. progress - 50%
1. progress - 75%
1. progress - 100%
1. emailcapture
