---
title: Level Up Administration Guide
---

This page is intended to be a guide for the administration of our Learning System, Level Up. Level Up is built on a learning system called Thought Industries, a vendor external to GitLab. Throughout this guide `Level Up` and `Thought Industries` are used interchangeably.

This page documents both process for admins, as well as best practice and FAQs.

## Learning System Stakeholders

Management of the Learning System is a collaborative effort between Education Services, Learning & Development, Field Enablement, and Partner Teams. Each team has specific use cases for the system, and utilize the panorama functionality to target different audiences both internal and external. Below is a brief description of each use case the system is currently being utilized for.

### Learning & Development

The L&D team uses Thought Industries to support training for GitLab team members, and in some instances, community members. This is achieved in accordance with our [Purpose, Vision, and Mission.](/handbook/people-group/learning-and-development#mission)

### Education Services

The primary mission of Education Services is to plan and implement effective and scalable educational offerings to accelerate customer time to value and drive expanding product adoption. Education Services deliver [Technical Certifications](/handbook/customer-success/professional-services-engineering/gitlab-technical-certifications/) via Level Up.

### Field Enablement

Field Enablement's mission is to inspire the field organization and partners to achieve high levels of success through the acquisition and application of knowledge, skills and behaviors that improve productivity and accelerate growth. They utilize Level Up to deliver onboarding and digital training for Sales teams.

## Platform Training and Support from Thought Industries

Thought Industries provide a number of resources that can be used for support in upskilling admins, and for answering administration questions.

### Thought Industries Academy

1. The Thought Industries [Academy](https://academy.thoughtindustries.com/) includes self-paced training and support articles. Access the academy by clicking the `Need Help` button on the left side bar when logged into Thought Industries and scroll down to `Learn More in the Academy`.
1. [Platform Settings PDF Guide](https://drive.google.com/file/d/1MXf8NTGRHWloO4WWZYwcRcDzrVucOfcW/view?usp=sharing)

### Raising a Support Ticket

Support tickets should be raised to report errors, bugs, and outages in the platform, but can also be used to ask for technical advice on platform functionality. Before raising a Support Ticket, it's recommended to look for relevant articles in the [Knowledge Base](https://support.thoughtindustries.com/hc/en-us#knowledge-base-categories) that may answer the query without the need to raise a ticket. The steps to open a ticket are as follows:

1. Access the academy [Knowledge Base](https://support.thoughtindustries.com/hc/en-us#knowledge-base-categories)
1. Scroll to the bottom of the page, and click `Submit a Request` (underneath `Can't find what you're looking for?`)
1. Fill in the ticket details in the fields provided and submit.
1. You will receive a response to your support request via email.

### Product Enhancement Suggestions & TI Community

To make suggestions for enhancements to Thought Industries, it is recommended to utilize the [Thought Industries Community](https://community.thoughtindustries.com) site.

This [video](https://drive.google.com/file/d/1PbY7fVOtMZeTNLw4wJ4Mk6Th2q1hAFgU/view) explains how the site works, and how to get signed up.

### Administrator Home Page

The admin home page is a place for platform administrators to access:

1. Thought Industries announcements and feature highlights
1. Updates on new platform features, shared the last Tuesday of every month
1. Opt-in subscriptions for system updates, outages, and scheduled maintenance (suggested for all admin)
1. The `Control Panel` that lists all features enabled in the Level Up instance

## Platform Settings

### Notifications

1. **Emails:** [Refer to this list of default emails sent to users](https://support.thoughtindustries.com/hc/en-us/articles/4404293128215-Default-Platform-Emails-to-Learners)]. Emails are branded for Level Up

### Content settings

1. **Content Types:** Access by navigating to `settings` -> `content` -> `content types`. Here you can create new content types, like a `module` or `course video` that isn't already included in the standard Thought Industries content types. You cannot edit a content type once it's been used.
1. **Ribbons:** Use ribbons when authoring a course to communicate to the learning with types like `free`, `featured`, `popular` or `new`. Create a new ribbon by navigating to `settings` -> `content` -> `organization and dispaly`.
1. **Global Resource Library:** These resources can be toggled on and accessed in any course. You can upload or author PDFs, pages, videos, etc. The same resource library is shared for all courses.
1. **Snippets:** Frequently used HTML text that can be used across all content when authoring.
1. **Add to Queue:** Navigate to `settings` -> `content` -> toggle on `add to queue` to allow user to save content for later.

### Certification and Gamification Settings

#### Certificates

1. Awarded upon completion of learning content
1. Establish fields for all certifications by navigating to `settings` -> `certification`
1. `Level Up` is provisioned so users can share certificates on LinkedIn
1. A `.jpg` or .`jpeg` blank certificate must be uploaded when authoring a course
1. When building a course, drag and drop criteria to be auto-filled into the blank certificate file

#### Gamification (these are gained as people earn points in the system)

1. Navigate to `settings` -> `gamification` to edit.

##### Points (Awards)

1. Awards in Level Up are called Points
1. Users earn points for completing certain actions. **These must be configured, and are completely custom, by the GitLab team.*

##### Badges

1. Users earn badges based on their collected points
1. Badges must be configured by GitLab team. There is an option to upload custom badges. An example could be earning the `high achiever` badge after earning 50,000 points.

### Authoring

Level Up uses a [handbook first](/handbook/about/handbook-usage/#why-handbook-first) approach for all learning content, using the handbook as our single source of truth for learning content.
This approach ensures:

- all voices and contributions are heard
- barriers to contributions are removed or reduced
- the organization maintains a single source of truth

#### Adding captions to videos

It's important to add captions to videos whenever possible. The steps below outline different ways this can be done based on your video format.

1. YouTube: Use a YouTube embed code to allow users to turn on captions directly on the video
1. PowToon: Use a PowToon embed code, then write the transcript of the video in a discussion thread in the relevant lesson.
1. Native Video Upload:
    1. Upload your video and either write out or obtain a text caption doc.
    1. Scroll through the video to a time marker where you want to put a caption
    1. Click the caption button at lower right of the video
    1. Paste in a short amount of text.
    1. Watch it back. You can easily edit the captions (they are listed all together below the video window) so it's not hard to adjust and make them fit.

#### Custom Content Fields

The Custom Content Field requirements for internal courses can be found [here](https://docs.google.com/spreadsheets/d/1zPJu3PSr40Xa5dUEe6Wj1Sm8gUkQpJG-NwUybxJOMfE/edit#gid=587118744) for GitLab team members. To add a new field, navigate to `Settings` -> `Content` -> `Organization and Display`.

![Adding custom content field in Thought Industries](/images/people-group/learning-and-development/level-up/custom-content.jpg)

Add custom content fields directly to each course in the `Design` tab.

![Adding custom content field in Thought Industries](/images/people-group/learning-and-development/level-up/course-content.jpg)

Please review the **best practices** below:

**Best Practices:**

1. All custom content fields and sub fields are case sensitive - avoid mistakes like `Communication`, `Communications`, `Communicating`
1. Wherever possible, use existing custom content fields and sub fields as opposed to creating new ones
1. Review [TI support docs](https://support.thoughtindustries.com/hc/en-us/articles/360045730954-Creating-and-Using-Custom-Content-Typeses) when questions arise

## Publishing a course for internal team members

1. From the admin view, navigate to the course by choosing Content > Manage Content, then finding the relevant course
1. Once in the course editor, in the `Content` page check all relevant changes have been published.
1. Go to the `Design` page then `Edit Catalog Settings`. Add the `Internal` tag and click `Save`
1. Your content is now visible in the internal catalogue.
1. You do not need to perform any actions on the `Release` page

### Share a course link with team members

1. Add `https://levelup.gitlab.com/access/saml/login/internal-team-members?returnTo=` immediately before a course link to direct users to the course page after signing in via SSO.

### Publishing a course for external users

Before publishing a course to be visible for external users, check the content thoroughly to ensure it fits within [GitLab's SAFE framework](/handbook/legal/safe-framework/#safe). The steps needed to publish a course externally are:

1. From the admin view, navigate to the course by choosing Content > Manage Content, then finding the relevant course
1. Once in the course editor, in the `Content` page check all relevant changes have been published.
1. Go to the `Design` page then `Edit Catalog Settings`. Add the `Public` tag and click `Save`
1. Now go to the `Release` page. Click the `Release` button in the top right corner.
1. Your content is now visible in the public catalogue.

### Share a course link with users external to GitLab

1. Add `https://levelup.gitlab.com/access/openid/login/?returnTo=`immediately before a course link to direct users to the course page after signing in via SSO.

## Roles

Some users may need to have elevated permissions in the platform to perform specific functions like reporting or creating content. Here's some information about how to assign new roles, and create dual roles for users.

### Dual Roles

Users can either be `Managers` in the platform or `Learners`. Managers have access to the backend admin options, Learners to the frontend learning experience. Therefore, if you are elevating a users permissions so they have access to admin options, it's important you remember to assign them a `Dual Role`.

We are currently reviewing the process for assigning dual role users, due to some SSO & API requirements.

## Content

### Content Types

Several different content types are available to use as templates in Level Up choosing the right content type is important for formatting your content, but also for reporting. Choosing the right content type for building out your learning material is important both for providing the right template & format for your content, but also for reporting and for letting learners know what type of content they can expect when choosing a learning item, e.g. a LinkedIn Learning Course, a Video, or a SCORM course.

Existing content types in the platform are as follows:

- Course
- SCORM
- Blog
- VILT
- Micro Course
- Video
- Certification Exam
- LinkedIn Learning Course
- Self-paced
- ILT
- Certified Training Partner Kit
- Education Services Customer ILT Event
- External Training

To create a new content type:

1. Access the Level Up Admin view.
1. In the side bar, click `Settings`, then `Content`, then `Content Types`.
1. In the top right hand corner, click, `Add Content Type`.
1. Fill in the details for your new content type, and choose a template based off one of the existing content types in the platform. When you've added all relevant information, click `Save`.
1. Now, when you go to add a new item of content, you will be able to select your new content type as an option from which to start building.

### Page Types

Level Up's native content creation functionality allows for complex course creation using a variety of content types in order to help create learning experiences that are varied, interactive, and fun. Here are a list of the different page types that you can utilise when creating a course in Level Up

#### Content Pages

- **Text** - Add a page of simple text using a WYSIWYG editor to include images, links, embeds, etc. within the page. Used to embed handbook pages within an iframe.
- **Slideshow** - Create your own in-platform slide deck with text, audio and images.
- **Presentation** - Upload existing presentations or slides with accompanying audio files/ text for each slide.
- **Video** - Present learners with video content along with captions and additional text.
- **List Roll** - Present large amounts of content in a clear list and topic format.
- **PDF Viewer** - Share and display PDF files directly after one easy upload.
- **Audio** - Upload an audio file with a single image.

#### Interactive Pages

- **Interactive** - Breakdown an image into multiple parts using interactive hotspots
- **Assignemnt** - Create, assign and collect work for learners
- **Flip Cards** - Present content and imagery using interactive tiles that learners can click on to flip
- **Note Book**. - Give your learner the ability to take notes or reflect on content privately within a course
- **Highlight Zones** - Present learners with an interactive image with additional context
- **Highlight Zone Challenge** - Challenge learners using an interactive image with headers as clues
- **Match Pairs** - Engage learners to match associated content cards. This also makes for a great study tool.
- **Discussion Board** - Prompt discussions among learners using discussion prompts.

#### Assessment Pages

- **Quiz** - Assess learner knowledge added teaching tools like hints, multiple attempts and the ability to review assessment results.
- **Test** - Assess your learners knowledge and allow them to review their results after completion.
- **Survey** - Collect learner feedback through a configurable assessment.
- **Reflection** - Create a virtual or printable reflection for your learners to use as a learning or organizational tool.
- **Tally** - Use this score tier based assessment tool to present information that varies based on learner selected responses.

#### Other

- **SCORM / xAPI** - Present an embedded SCORM file or set it to launch in a new window.
- **HTML Embed** - Create a page from scratch or embed 3rd party content using HTML.

### Manually assigning completion to a user

1. Go to Users > Learners and search for the relevant user
1. Click their name to enter their profile
1. Click `Access` and in the `Search for Content to Add` box, search for the content you want to add completion for.
1. The content should appear under the `Has access to the following content`.
1. Once the content has appeared (or if it was already there), select `Completed` from the dropdown and click `Save`
1. If the course had an associated certificate, this can also be manually attributed. Go to the `Activity` tab in the user profile after following the above steps, find the relevant Certificate then click `Issue Certificate`. This will trigger an email being sent to the user to notify them of the certificate being awarded.

## Reporting

If you're looking for a basic overview of reporting, a good place to start is the [Reporting Hub](https://academy.thoughtindustries.com/learn/course/reporting-hub/reporting-hub-tour/navigating-reporting-hub?client=gitlab&page=1) course in the Thought Industries academy training platform.

### Creating a completion report

Here's a simple video tutorial on how to [create a completion report for a content item in Level Up](https://youtu.be/L54A-9y-PAk). It's privately listed, so you'll need to be signed in to GitLab Unfiltered to view it.

Here's a step by step guide:

1. In the Level Up Admin panel, navigate to `Reporting` > `Explore`
1. Under the `Learner Content & Progress` heading, select the `What % complete are my learners with a particular item?` report.
1. In the Filters at the top of page, use the `Learner Content Details Content Title` to search for the piece of content you'd like to report on.
1. From the list of fields on the left hand side, expand `Learner Content` and click `Status`. This will add in the status of whether a Learner is `not-started`, `started`, or `completed`. This is important as any learners who completed in our previous learning system will show as completed, but have 0% progress, so should still be captured.
1. Add any other fields you think would be useful to include.
1. Click `Run`
1. To download the report, click the cog icon in the top right to open a dropdown menu. Then click `Download`.
1. In the new menu that pops up, update the file format (usually to CSV), and ensure you choose `All Results` option for `Limit`. Click `Download`

This is a way to create a simple completion report, remember there are lots of other criteria and information to utilise when putting reports together.

### Using Google Sheets to share completion reporting with the business

Here is an [example](https://docs.google.com/spreadsheets/d/1ZmRT-9XzN0WBXZ2p6kzMIuhjuRVNhM73h7QFi-qOZC4/edit#gid=1860209145) of a pivot chart that breaks down completions by division. Make a copy of [this template](https://docs.google.com/spreadsheets/d/1caRFWpLEts0Hs3zk8LgEEltQwmL519ijj50_x20N4gY/edit#gid=1965851534) and follow the steps below to build your own.

1. Submit an access request for a Wokrday report that includes manager name, division, department, and manager name. Add this data into the first tab in a Google sheet. Title it `User Workday Data`
1. Pull a completion report from Level Up for any course or content item. Download this completion data into the second tab in the same Google sheet. Title it as `[Course Name]`
1. To combine the `User Workday Data` shee and the `[Course Name]` sheet:
    1. Ensure there is a column in the `[Course Name]` sheet that is titled `Completed` and has a `1` value for each user who has completed the course.
    1. Create a new column in the `User Workday Data` tab called `Completions`.
    1. Apply the formula `=IF(ISNUMBER(MATCH(X10,Course Name!A:A,0)),1,0)` to the column, where `X` is the column letter for `Completed` from the `[Course Name]` sheet, and `Course Name` is the exact title of the `[Course Name]` tab.
    1. Drag the formula to apply to all rows in the `User Workday Data` sheet.
    1. Add one new column in the `User Workday Data` sheet called `Division Total` and populate every row with a `1` value.
1. To create the pivot chart
    1. Open a 3rd tab in the same sheet titled `Completions by X` depending on how you plan to sort the data.
    1. Go to `Insert` then select `Pivot Table` and add it to the existing sheet
    1. Apply `Division` as your `Rows` value
    1. Apply your choice of values for each column. Most common will be `Completions` and `Division Total`
