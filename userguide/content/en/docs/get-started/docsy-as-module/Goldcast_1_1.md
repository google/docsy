Goldcast is a digital events platform that helps B2B marketers create and host events, webinars, and video campaigns. It uses AI to help users create engaging content and repurpose videos into multiple formats.

## About Goldcast

Goldcast is one of the official hosts of GitLab’s ongoing webcast series. See upcoming and on-demand webcasts here.

For questions about Goldcast, reach out to mktgops via our Slack channel or through the goldcast-webcasts channel until it is retired in FY26 Q3

## Official Goldcast Resources

- The Goldcast Knowledge Base houses a plethora of step-by-step guides that walk through all aspects of the platform.

- The Goldcast Hall-of-Fame shares multitudes of customer stories and their use cases of the Goldcast platform

- The Goldcast Blog shares additional ways to leverage the platform and other relevant updates from Goldcast

### Official Goldcast Recommended Resources

- Permissions breakdown for Team vs Org admins

- User Roles and Permissions

- Design and Branding

- Registration Page and Forms

- Email Customization

- Event Settings

- Event Setup

- Captions and Subtitles

- Webinars Powered by Smart Technology

- Webinars vs Events

- Running an Event

- Enchanced Stage Controls

- How to Create Booths

- Content Lab

## Random Things to Know

- Note: As of launch registrations should not be taken via the Goldcast landing pages/forms and registrations should only occur via Marketo forms/landing pages until further notice.

- When selecting the New Webinar option, keep in mind that any event where speakers will appear live on camera must be set to the Live event type. If no speakers will appear live on camera, the event type can be set to Pre-recorded. When the event type is set to Pre-recorded, back stage staff can interact with the audience only via text. If your event will need to be a mix of pre-recorded and live Q&A, it is recommended to select New Event instead of New Webinar as New Event will give more flexibilty for presenters. New Webinar offers a simpler setup, less flexibilty and automative content creation via Content Lab - but will require Backstage or Speakers to manually control video and other displayed content during live presentations. More reading here

- When set to Automatic, the Session Redirection Strategy setting automatically allows registrants in at the event start time, but does not immediately force presenters on-stage. Having this set to Manual requires staff input to move attendees around sessions. The GitLab team has found the automatic session redirection feature on multi-session Events can be slow, so it is best to familiarize how the feature works and if it would be better to use the manual setting at least an hour before the event starts (when this setting becomes locked)

- Specifications for creative assets, including video, can be found here. WARNING: Upload processing time can take up to 4x the length of the recorded video and it’s recommended for events to be 2 minutes longer than the video asset for pre-recorded events

- Test events are no longer test events if the registrant number reaches 10 people. More information on test events here

- When an event is set to convert to an on demand capable event, the transition occurs around the 35 minute mark after the event ends

- While users can create custom fields within their events as needed, the data syncing into Marketo is set by Marketing Ops. Do not add any fields into the Goldcast -> Marketo sync without consulting Marketing Ops

- By default, English is set as the primary language in the primary event template unless labeled otherwise. Captions and subtitles are also toggled on by default, but will only work correctly if the presenters are speaking in the set primary language

- The Enter Event button on the registration landing page is recommended to be disabled, if it is not already. If enabled, registrants can enter the event earlier than 1 hour prior to event start. Instructions on disabling the button here

- As of April 2025, there is no way to fully deactivate an event - but we have requested such a feature from Goldcast

- Run on the assumption that settings cannot be changed within an hour of your event start time

- The removal of Goldcast branding, such as surveys and rate us button, are part of the white listing feature and behind a paywall

- Goldcast registration landing pages are activated by default and cannot be deactivated, automatically deactivating soon after the event is over. Once Goldcast landing pages are ready, the choice to use Marketo LPs vs Goldcast LPs is up to the event runners

- File size maximum for video in a standard event is 5gb but we can contact support if the size is larger for a large event

- To cut down on complexity and strain on Marketo, the Attended On Demand Marketo program flows for Goldcast, On-demand form fills and for Pathfactory are shared. Have Pathfactory keywords in mind or reserved before the webcast air date so this flow can be turned on quickly after the event ends. Once the event is over, either take down the landing page or replace the FORM 1592: Webcast form for the FORM 2076: On-demand Webcast form if the intention is to leave the landing page up for on-demand

- Any 4K broadcasts require the GitLab team contact Goldcast support as these are deemed “special” events

- Lite Mode, as shown on Q4 of the FAQ, may improve performance of attendees experiencing video or audio problems. By default, guests are asked to perform a connection test before joining an event

- To request text-based Live Chat Support during an event and from the Studio dashboard, click the “?” icon in the top right corner. Support can share an event checkup to 48 hours prior to the event, if requested, which includes a review of settings

- Uploading our own subtitle files requires reaching out to Support with the event name/ID and pre-recorded session name. Pre-loaded subtitles are only available for pre-recorded events. The file emailed to Support must be in VTT format and the Support team requests up to 48 hours to implement

## Fields syncing between Marketo and Goldcast

List of sync fields in draft currently. Let MOps know of any more fields to consider.

<!-- Unsupported block type: table -->

## Event Tags in use

Tags can be used to quickly filter webcasts and events by the tagged topic. If you add more tags in the Goldcast platform, please be sure to update this handbook list.

- DevOps Platform

- DevSecOps

- Security and Compliance

- Automated Software Delivery

- CI

- CD

- Duo

- Language: Japanese

- Language: Korean

- Language: French

- Language: German

- Language: Italian

- Language: Spanish

- Language: English w/ interpreter

- Type: Workshop (Used for Field Marketing Hands-on workshops)

- Type: Webcast (only used when another type is not used)

- Type: ABM Webcast (Used for events designed for a single or small subset of specific accounts)

- Type: GTM Webcast (A webcast aligned with a GTM, produced by the GTM team.)

- Type: Technical Demo Series (Used for the weekly Technical Demo Series)

- Audience: Partners

- Audience: Customers - Practitioners

- Audience: Customers - Managers

- Audience: Customers - Execs

- Audience: Prospects - Practitioners

- Audience: Prospects - Managers

- Audience: Prospects - Execs

- Audience: Channel (Directly targeting the channel partner, any member of the partner organization)

- Audience: Channel Marketing (Any activity directly targeting the marketing people within the channel/partner organization)

- Global

- APAC

- EMEA

- AMER

- US Public Sector

- All Segments

- SMB

- MM

- ENT

- Case Study (Used on any webcast that presents a customer story)

- Partner Involved (Used on any webcast that is co-branded or has a partner speaking on the webcast)

## Marketo Program Cloning and Tokens

The primary Marketo program template to use is named YYYYMMDD_EventName_Webcast_Goldcast_template and is found in the Templates - Goldcast Webcasts folder. Goldcast can auto-clone Marketo programs based on a template, as long as the Goldcast template is synced to a Marketo program. The Marketo program created will have the same name as the Goldcast event, ending with a time stamp. The new program will appear in the same folder as the original Marketo program.

When working correctly, the Marketo program’s tokens will auto-populate - either on program creation (via Goldcast’s program cloning feature) or when manually connected to a Goldcast event. The relevant tokens for this process are:

- {{my.goldcast_eventEndDate}}

- {{my.goldcast_eventEndTime}}

- {{my.goldcast_eventId}}

- {{my.goldcast_eventSeriesID}}

- {{my.goldcast_eventSeriesName}}

- {{my.goldcast_eventStartDate}}

- {{my.goldcast_eventStartTime}}

- {{my.goldcast_eventTimezone}}

- {{my.goldcast_eventTitle}}

- {{my.goldcast_formId}}

Additionally, there are tokens within the program that are not updated by Goldcast but are still relevant for various aspects of the program, like the Marketo landing page or Marketo-sent follow up emails. These tokens but are not limited to:

Marketo email tokens

- {{my.utm}}

- {{my.ondemandUrl}}

- {{my.epic link}}

- {{my.landingPageURL}}

- {{my.pfslidelink}}

- {{my.event owner}}

Follow up Emails

- {{my.zzfollow up slides or recording link}}

- {{my.zzFollow up CTA link}}

- {{my.zzFollow up event or asset description}}

- {{my.zzFollow-up short event description}}

- {{my.zzFollow up Event or Asset name}}

- {{my.zzfollow up slides or recording link}}

- {{my.zzFollowup - trial bullets}}

Marketo landing page tokens

- {{my.webcastSubtitle}}

- {{my.introParagraph}}

- {{my.bullet1}}

- {{my.bullet2}}

- {{my.bullet3}}

- {{my.bullet4}}

- {{my.speaker1Name}}

- {{my.speaker1JobTitle}}

- {{my.speaker1Company}}

- {{my.speaker2Name}}

- {{my.speaker2JobTitle}}

- {{my.speaker2Company}}

## Users have the option of starting event creation within either platform

### Differences with creating a New Webinar, New Event and New Series

As mentioned in the Random Things to Know section, when creating a new event there are a few choices: New Webinar, New Event and New Series. Each of these offers slight variation on event attributes but are larger the same.

- For more simplistic webinars where the entire event is either broadcast type pre-recorded or entirely broadcast type live, New Webinar offers an easy set up option but with less flexibilty. If pre-recorded is selected, the Back Stage staff can only interact with the audience via the text-based interface. If Live is selected, the Staff or Speakers must manually manage all video shown on the stage

- For more flexibility to manage pre-recorded video and live speakers within your event, select New Event. New Event lets users create a multi-session events that can be scheduled across multiple rooms, times and days. This option is best for events featuring live Q&A after a pre-recorded video

- A Series mostly acts as a way of grouping multiple events and or webinars under a single label, kind of like a folder. More details in the “Working with a Series” section below

### Event Creation within Goldcast

When starting event creation in Goldcast, start by clicking the + icon in the top right of the platform. From the primary options, select the best fit for your event.

Fill in your Title, Pick a Date, Start Time, End Time, Timezone, and for webinars Type - Most of these auto-populate into the Marketo program tokens, where appropriate. GitLab as an org will likely stick with Live and Pre-recorded types. The RTMP type is a feature that allows embedding to or from external tools and there are currently no plans to use this feature. Please ping MktgOps if there is a request to try it

Select the template for your event. This covers a range of things, including the registration landing page, automated registration/reminder emails, the event stage look & feel and the registration form format.

Tag your events based on region, topic, team, etc criteria for better event reporting.

Standard GitLab events will be within the GitLab Inc Team Workspace.

Select a repeating event schedule, if desired. Note this functionality has not been fully tested with Marketo in mind.

Note that for New Event selections, there will be more options to customize your event found in the Program menu, additions including Agenda, Rooms and Booths. Use the Agenda options to customize your sessions in the event of a multi-session event. The Agenda’s session names and times appear on the external facing landing pages if that feature has not been turned off

If the event is for testing, toggle off the Test Event toggle. Test events max out at 10 registrants within the event. Test events also do not record and cannot be converted for on-demand viewing. More information on test events here.

If the Marketo program cloning feature worked correctly, Goldcast will have created a new Marketo program based on your Goldcast event within the Templates - Goldcast Webcasts folder or within whichever folder the program template lives in Marketo. The name given to the new Marketo program will match the Goldcast event, plus a timestamp. Rename the Marketo program to fit the regular naming convention (YYYYMMDD_EventName_Webcast_Goldcast_template) and move the program to the appropriate folder for the FY/quarter within Marketo. Changing the name of the Marketo program does not affect the sync or the Goldcast event

### Event Creation within Marketo

When starting event creation in Marketo, make a duplicate of YYYYMMDD_EventName_Webcast_Goldcast_template and move it to the appropriate folder for the quarter and using the standard naming convention.

Once the program is up, grab the program ID number. The program ID number can be found at the end of the program’s URL and between the letters, i.e. classic/ME**00000**A1. The program ID will be placed into your Goldcast event.

To place the Marketo program ID in Goldcast, go to and click into your event. Within the event, click in this order Integrations -> Marketo -> Settings. Place your Marketo program ID into the Connected Program ID field and click connect. The Goldcast event and Marketo program are now linked.

Once the Goldcast event and Marketo program are connected the Marketo program tokens will populate.

## Program Member Status Processing

When the Goldcast event and Marketo program are connected, Goldcast will automatically change the program status for all members without the need for a smart campaign. However, processing smart campaigns are still needed for other data appending requirements:

### Smart campaigns for Marketo landing page based registration

- 01a Marketo Form Registration: This smart campaign must be active for Marketo LP registrations. Without this smart campaign, registrants will not be added to the Goldcast event and will not receive a registration confirmation email. Once the event is over, turn this smart campaign off

- 01c Marketo Form Fill Waitlist: If registration has maxed out for the event, deactivate the Registration smart campaign and turn this one on to add regsitrants to the waitlist

- 01e Waitlist to Registered: If you plan to change registrants who are currently listed as Waitlisted to Registered, turn this smart campaign on first. It refreshes the Interesting Moment and calls the Goldcast webhook

### Additional smart campaigns

- 02 Goldcast Form Registration and Live: Goldcast automatically changes program statuses when events and Marketo programs are connected. This smart campaign watches for program status changes for Attended, No Show, Canceled, Rejected, Waitlisted and Registered. If the event’s registration is started on a Goldcast landing page, this smart campaign needs to be turned on immediately and before invite emails are sent out to invitees. This smart campaign needs to be active before the event, regardless of registration landing page location. The flow can safely be set to automatically expire 24 hours after the event ends

- 03 Goldcast Processing - On Demand - Goldcast/Pathfactory: This smart campaign is designed to process on-demand attendees based on either Goldcast post-event viewing, On-demand form fills or Pathfactory viewing. The flow needs to be turned on within 30 minutes of the webcast ending to work correctly for Goldcast on-demand attendees but is not required to be on prior to the event’s end and likely should not be activated until then. Have Pathfactory keywords in-mind or ready so those filters can be added to the trigger and the flow can be activated before the 35 minute mark post-event. For the flow to work on landing pages for on-demand form fills, the Marketo landing page form needs to be switched to FORM 2076: On-demand Webcast

- 04 Goldcast Processing - Follow Up Requested: If an attendee clicks the CTA button -which by default is labeled as Talk to an Expertin either an Event or in a Booth, this flow marks those leads as the Follow Up Requested program status. In order for this flow to work, it must be active and needs to have the event ID place in the trigger filter. Otherwise the CTA button will not MQL the lead for follow up. CTA click numbers are also available to reference in the Goldcast event analytics dashboard. Note that the CTA button simply links to the “talk to sales” page during on demand events and on the registration landing page - and this flow does not need to be activated for on demand. It is up to the discretion of the team member to turn off this functionality within the Goldcast event by hiding all CTA buttons. The Marketo smart campaign can safely be set to automatically expire 24 hours after the event ends

## Navigating Inside a Goldcast Webinar and Event, pre-live

### Webinar

From within a Goldcast webinar, there are a four primary tabs most will utilize: Event, Registration, Analytics and Edit Event. The Integrations tab is likely to go unused by most, as that deals with the Marketo integrations –which are already set–. However, in the event of the Marketo token sync failing, the FORM ID and EVENT ID are located in the Integrations menu. The Email tab will only really be utilized when needing to send reschedule related emails, as described further down this page, or cancellation emails.

### Event

Within a Goldcast event, the menu arrangement differs in placement but carries much of the same information and options. Key differences are placement of the menu options and access to menus for Agenda, Rooms and Booths management differ. See below for more detail

### Edit Event Menu

Multiple ways to edit your event are within this menu, including but not limited to:

- Changing the name, description, time and tags of the event

- Toggling on/off waitlist, captions, registration limit, test event and convert to on-demand functionalties

- Upload functionality for your event’s assets, such as slides, videos, polls, post-event surveys and downloaded content

- Changing your events from Live to Pre-recorded broadcast types. RTMP is also available (broadcasting to or from a separate webcast service) but as an org GitLab is unlikely to use this

- Attendee privacy and attendee chat settings

### Webinar Primary Menu

Much of the primary look and feel + external facing event information is found in this menu

- Inviting speakers and staff to your event takes place in this menu - which automatically send invite emails to those individuals

- Upload information about your event’s speakers and staff on this menu, such as names, titles and photos

- Renaming the speakers tab and supplying a description in this section also an option

Viewing as an registrant or making changes to your emails, event stage and registration page also appear in the dashboard. Changes to email are likely unneeded due to the schedule and template already being set, however,

To make changes to the registration page or event stage, hover over either and select Design. Landing pages are customized via a block system, where blocks can be added, hidden or entirely removed. Note that Speaker info will be added to landing pages once Speakers are loaded into the event. The included templates for the landing page and event stage are the suggested starting place and are customizable from there. It’s a good idea to explore and customize the Event Stage so producers know what features to expect during the live event.

Lastly, AI created content based on your even can be sorted and viewed here. This section only occurs after the event has concluded and the platform has had time to process the recording.

### Program Menu for Events

Within an Event, the Dashboard contains the look and feel information along with features enabled on the event, such as captions, on demand or whether the event is in test mode.

Under the Program menu, the Agenda controls the event’s session times. When adding or removing sessions, the times and dates must adhere to the original window given during event creation. If the window needs to be changed, that can be done in the Edit Event menu. For events that require a pre-recorded video to be played followed by a live broadcast, such as a Q&A, it’s recommended to include 2 sessions for each broadcast, appropriately labeled for the broadcast type. Notice the Settings button on the right: Keep Session Redirection Strategy set to Automatic for the easiest transitions between sessions.

It’s also possible to add breaks between sessions. During the breaks between session times or when nothing is playing on the stage, the audience will see the asset loaded in as the buffer video. Note the template comes pre-made with a 3 second buffer video but this can be swapped out.

Enable Rooms to allow the audience to socialize across rooms during the event. Enable appropriate settings for your audience Rooms

Enable Booths to let the audience explore themed GitLab content or sponsored content. More info here

### Registration Menu

This menu is where registrant management occurs

- Program and Event Statuses can be controlled from this menu or from within Marketo. Statuses will sync automatically between the systems. From within Goldcast, the only statuses available for manual change are Registered, Canceled and Rejected.

- Waitlisted is assigned automatically by changing the event settings and may cause an error in Marketo to change registrants manually from Registered to Waitlisted

- Canceled disables access to the event whereas Rejected is treated more like blocked

- Tracking Pixels and Tags are applied via the template and should not be tampered with without discussing with Marketing Ops/Analytics

- Form allows changes to the registration form, like adding or removing fields. If there is a need to have more custom field data in Marketo, consult Marketing Ops and do not make such a change yourself

### Analytics

This section allows for viewing of data directly collected by Goldcast, such as email send rates, survey+polls results and engagement stats. Not all of this information is shared to Marketo at launch and plans to export some of this data will come later

This section also gives access to see registrants’ Magic Links. A magic link is the link emailed directly to registrants that allows them to access the event. In the event a user reaches out about not getting access to the event, this is the custom link they need

Many attributes can be found in this dashboard, including the number of successful CTA clicks

## Inside an Event

From the Producer view during an event, there are several key controls to take note of:

- A: Slides: A Producer or Speaker have the ability to control slide from here. Speaker Mode -seen below slides- shows speaker notes

- B: Videos: Play a pre-loaded video from this menu. Video takes up the full stage for the audience and displays a timer to track the video ending. Video takes sound priority over Speakers

- C: Screen: Screen sharing options. Speakers, Producers and Coordinators can all use this feature

- D: Polls: Polls that have been pre-loaded prior to the event start can be activated here. Use the open/close buttons to activate/deactivate and the share button to show results

- E: Q&A: Controls for Q&A. If Q&A moderation controls are on, Backstage must approve Qs before attendees can see. Backstage can also “ask” questions anonymously if “Hide Names” is selected

- F: Overlay: Controls to take over the screen with a written message

- G: Ticker: Controls to post a message banner at the bottom of the screen. Tickers do not appear in recordings

- H: Layout: Speakers, Producers and Coordinators all have access to change the stage layout

- I: Backstage Toggle: Use this toggle to increase the size of the audience view presented on your screen and minimize the Backstage information

- J: Mic controls

- K: Webcam and virtual background controls

- L: Personal volume toggle for Stage volume. Does not affect volume for audience or presenter. Click the speaker icon for instant muting of the stage volume

- M: Personal volume toggle for Back Stage volume. Click the speaker icon for instant muting of the stage volume

- N: Information banner for your event. Includes info on whether the event is live, how many attendees are present (if not toggled off in the settings) and wifi signal

- O: Text-based chat for those Backstage and to send alerts to the Speakers

- P: List of staff inside your event. This list also allows Producers to manually move Speakers onto the Stage or mute Speakers

- Q: Controls to interact with the audience

- R: Speakers use this button to enter and leave the Stage. Producers also have this button visible and Coordinators cannot use the button

- S: Night mode for backstage

Note: Additional controls and settings can be found by clicking your profile icon (or initials) in the top right of the Stage. This information is mostly informative, like assigned role and attendee numbers (for Producers, but not Speakers)

<!-- Unsupported block type: image -->

Goldcast Stage Console

## On-Demand Settings

An on-demand Stage template is pre-made and included on all webcast events. Check over the settings on all events before the event airs and know the standard URL for on-demand access normally reads: webcasts.gitlab.com/on-demand{event-id}. The primary toggle to check is related to Downloadable Resources, which is off by default

## Webcasts Subdomain

Goldcast hosts a list of its hosted webcasts under the subdomain https://webcasts.gitlab.com/. Future iterations will add to this functionality

## Rescheduling and Canceling Events

To reschedule an event, select the Edit Event menu and change the date and time to the new desired time. There will be a prompt asking if there is to be an email deployed informing registrants of the time change. Exit the alert without sending the email because that email will be unbranded, only including a calendar invite.

To cancel an event, send out a notification email as described in the next paragraph before deleting the event. Once the email alert has been deployed, the Delete Event button can be found at the bottom of the Edit Event menu.

To send a custom email, within the main event menu select into the Email menu. Within that menu, select Send Custom Email. Fill in the Email Subject with the appropriate title and for the email template select the pre-made template named [Reschedule] Default GitLab Template or [Cancellation] Default GitLab Template. Complete the email send by hitting the Send to Registrants button.

If the event has been rescheduled, change the Marketo program name to match the new date. If the event has been canceled, ping in the mktgops slack channel to have the program deleted or delete the program if you have the permissions.

## Localized Event Templates

Goldcast has been outfitted with localized event templates for 6 additional languages, bringing the number of templates available to 7 languages total:

- English

- Spanish (Spain)

- French

- German

- Portuguese

- Italian

- Japanese

Each of these templates have the Primary Language set to the listed language, meaning email assets, UI and features are set to this language and in order for some features to work correctly the speakers must be speaking in that language. Event information must also be input by Staff to match the language for a completely localized experience. More information can be found within Goldcast’s documentation.

When adding Speakers to an event, the Speaker Invite/Instructions email will be set to the Primary Language initially but can be switched to a standard English template in the Email Schedule section of the event. If you would like to send a Primary Language email to one speaker and the standard English email to a different speaker, switch the Speaker Invite/Instructions email before adding one Speaker or the other. The system is not capable of sending two different language emails simultaneously. For the 1 hour reminder email, only one of the two emails can be sent due to those reminders being sent simultaneosly. Staff Emails are only in English.

All Japanese event templates have been updated with email templates that include the greeting {{last name}}-sama, whether the email is in Japanese or English

A Korean template has been requested and is undergoing approvals

To send a Reschedule or Cancelation email, follow similar protocal as explained in the above section. Select the templates titled [Reschedule] Default GitLab Template - {{Primary Language}} or [Cancellation] Default GitLab Template - {{Primary Language}} and depending on the email, fill in the subject line with one of these translations:

a. Your event has been rescheduled! b. Due to unforeseen circumstances the event has been canceled.

- Spanish a. “Su evento se reprogramó.” b. “Debido a circunstancias imprevistas, el evento se canceló.”

- French a. “Votre événement a été reprogrammé!” b. “En raison de circonstances imprévues, l’événement a été annulé.”

- German a. “Dein Event wurde verschoben.” b. “Aufgrund unvorhergesehener Umstände wurde das Event abgesagt.”

- Portuguese a. “Seu evento foi reagendado!” b. “evido a imprevistos, o evento foi cancelado. "

- Italian a. “Il tuo evento è stato riprogrammato.” b. “A causa di circostanze impreviste, l’evento è stato annullato.”

- Japanese a. “イベントのスケジュールが変更されました！” b. “予期せぬ事情により、イベントは中止となりました。”

## Working with a Series

A Series in Goldcast acts as a method of grouping multiple events with differing dates and times under the same label. A few things to know about Series:

- A Series can come with its own Goldcast landing page that will allow users to select their event date and time, but use of these landing pages is currently limited while the team investigates how Bizible touchpoints work with these landing pages. It is recommended to continue using Marketo or About.GitLab marketing landing pages until Goldcast and Bizible are correctly connected. Reach out to MktgOps to set up a single form registration within Marketo

- The only Series template created is currently in English and called Series Landing Page Template. To recreate this template, use the “duplicate” feature found in the Edit Series menu. Know the form for the landing page is not set up at this time

- Please note a Series cannot have a Primary language set because that function lives at the Event/Webinar level. This means different events within your Series can be set to different Primary languages

- Events and Webinars added to your Series can be created by selecting “Add Event” or “Add Webinar” on the Series Dashboard. Each unique event/webinar created within the Series will create its own Marketo program

- Registration confirmation and reminder emails will come from the individual events/webinars, but it is possible for Series to send Registration confirmation and Waitlist emails

- More information to be added on this functionality after Bizible Touchpoints are successfully integrated with Goldcast

## Content Hub

Content Hub is an AI-powered feature that allows users to generate creative assets based on the content from either our webcasts broadcast within Goldcast or videos loaded into the platform. Goldcast can generate several types of content, including:

- Video Clips

- Social Media Posts

- Blog Entries

- Email Sends

- Bullet-pointed “Takeaways”

All generated content uses what is called a “brand kit”, which directs all generated assets to fit GitLab’s branding. The following are brand guidelines that can be set within Brand Kit:

- Voice Profile: An AI narrator, which can be set to have a specific style of speech

- Color: The GitLab shades of purple (#7759c2) and orange (#fc6d26) have been pre-selected

- Font: GitLab’s branded font has been pre-loaded

- Template background: Clips will feature one of the images loaded here. To start, 3 have been pre-loaded and if more are desired please open an issue with the Branding team

- Intro/Outro Video: Videos used on generated video clips. To be added at a later time

All generated content made within Content Lab can be exported for use outside of the platform

## Link to the original implementation training with Goldcast

All GitLab team members can find all 4 implementation training videos performed by Goldcast staff in this folder