---
title: "Editing content in Contentful"
description: "Editing content in Contentful"
---

## Content Type Overview

We use emojis to discern which content types are related to **Pages** (📄), **Atoms**, or small building blocks (⚛️), and **Blocks**, or bigger chunks of content that can be assembled using atoms (📦). We have a few others, but between a series of Atom and Block entries added to a single Page entry, a page on our marketing site is built. Please see [the handbook page](/handbook/marketing/digital-experience/contentful-cms/custom-pages/) for our **Custom Page** content type to learn more about how those pages are built and when they differ from our **Pages**.

## Editing existing content in Contentful

When opening Contentful for the first time, you'll find all of our marketing site content under the Content tab.

1. If you haven't already, select the Content tab at the top of the page.
2. From here, you can either search for a string of text, or filter down by different Content Types.
   1. To search for a string of text, enter your search term into the search bar at the top of the page, and make sure that you set `Content Type: Any` . This will globally search all Entries across our marketing site.
   2. If you know that your content lives inside of a Hero, you can select the `Content Type: Hero` and enter your search term from there.
   3. If you know that your content is on a particular page, such as the /resources/ page, you can filter by Content Type: Page, and sort the results alphabetically until you find the Resources page.
3. Once you have found the content in question, click on the Entry so that a sidebar appears with all of the fields in that Entry. From here, you'll see all of the fields on that particular piece of content, and can edit the field in question.
4. To see a preview of your content before going to production, you can use the Live Preview widget which is located on the `Page` entry. Ensure that the `Platform` value looks like: `Platform: Live Preview - [About GitLab]`. If not, you can click the 'Change' button to select the correct value. You can now open the Live Preview, and view a visual representation of the page with your changes. You will be able to see content change in real time!
   - *Note*: At this time, you cannot use Live Preview on net-new pages. This is specific to our page types that are NOT using the `Custom Page` type (ex Page, Case Study, Topics, Events, etc).
   - Digital Experience has been adding the ability to use the Live Preview widget on multiple pages. If you find a page does not have Live Preview enabled, please create an issue to let us know!
5. To publish the changes live to production, click the green Publish button. This will kick off a pipeline and your changes will be available on the site within about 10 minutes.

### Creating new content in Contentful

The process for creating new content in Contentful is varied.

1. For creating a new entry of an *existing* type of content, such as a new Case Study page or Blog Post, you can simply duplicate an existing content type and fill in your new content. This also holds true for something like adding a new card to a group of cards. Example for adding a new Case Study
   1. Select the Content tab
   2. Filter by Content Type: Case Study. You should see a list of existing customer case studies.
   3. At the top right corner, click Add Entry -> Case Study
   4. Fill in the fields following the same schema as an existing Case Study (you can keep two separate tabs open and refer back to an existing entry as needed).
2. For creating a *brand new* section of content that doesn't exist on the marketing site, you may need Digital Experience assistance, but you can start by creating the Entry.
   1. Find the Page you'd like to add content to by using the Content Type: Page filter, then click on the page in question.
   2. At the bottom of the page editor, Add Content -> Select the content type you're looking for, and fill in the fields accordingly
   3. Create an [issue](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/new#) with the Digital Experience team to make sure that the code on that page can handle your new Entry.
3. For creating a new section of content when the content *already exists elsewhere* (such as the wall of Gartner badges on our homepage), you can do the following steps to insert that existing entry into the page of your choosing:
   1. Navigate to the page you'd like to add content to
   2. At the bottom of the Editor, click Add Content -> Add Existing Content
   3. Use the search bar to search for a string of text, or the content type you'd like to add.
   4. Reach out to the Digital Experience team with a link to the page you've added content to - some pages were built to only handle certain types of content, and we may need to update the code of that page to look for your new addition.
   5. With thumbs up from the Digital Experience team, click the Publish button.
   6. Note that if you grabbed an existing piece of content and added it to another page, anytime that content is updated the updates will be reflected on both pages.
4. To create a *net new page*, please fill out an [issue with the Digital Experience team](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/issues/new#). We will likely need resources from the content team, design team, and engineering team to set up a new page.

### Video Walkthrough of Contentful

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/6pdXijDzYkg?si=8JbdUBmzPHcWgzTk" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

### Scheduling

1. Look for the "Set Schedule" button in the dropdown next to the Publish button to schedule a release of content.
2. In the "Set Schedule" modal, confirm a date and time and click "Set Schedule".
3. On the right hand side of the entry you can view and manage all scheduled actions. This allows you to see what is scheduled to be published, and you can also cancel or modify scheduled actions if plans change.
4. When the entry is published our automation is triggered and a production build starts. We recommend leaving a 10-15 minute buffer before your desired release time for the production build to run.
   - **Example:** There is a need to release a blog post at 9:00am EST, by setting the scheduled date and time to 8:45am EST we can expect the changes to be live on production around 9:00am EST.

## Specific Contentful Training Resources

### Adding a resource to the Resources page

[Video Walkthrough](https://youtu.be/G8NZV75H7lw?si=mTvwMSLl112avu5M)

1. Go to the Resources page entry in Contentful
1. Click on the "Browse all resources" section of page content
1. Scroll waaaaay to the bottom and select + Add Content -> Card
1. From here, it might be helpful to open an existing card and make sure the same fields are filled out, but the gist is:

   - the Title goes in both `Internal Name` and `Title`
   - the Language goes in `Subtitle`
   - the Teaser goes in `Description`
   - the Topics go in `List` (hit enter after each topic)
   - the Solutions go in `Pills` (hit enter after each topic)
   - the Type of resource goes in `Icon Name`
   - the URL goes in `Card Link`

1. Publish that card, drag it to the top of the list if you want it to appear first, and publish that section too.

If you want to edit other parts of the page the process is similar, just follow the existing pattern of the other cards. The only section to watch out for is the Featured resource - the one you want to feature has to be first in that list, and has to have an image.

### Adding a post to the Press and Press Releases page

[Video Walkthrough](https://youtu.be/zM1z0LnqVB0?si=sfEgEPK1Wu0Dii6P)

1. To create a custom page, filter by the content type Custom Page, and select Add Entry in the top right corner
   - Page name: The title of the page
   - SEO Component: Add title, description, and opengraph image (if available)
   - Slug: Add the url the page should live at (make sure to include leading and traling slash)
   - Header: The title of the page
   - Activate Side menu: optional to create a side nagigation
   - Date: Date of the release, or today's date
   - Subheader: Text that will appear above the title
   - Description: text that will appear below the title
   - Components: Add Text Block, and fill the Internal name/header, and text. Add one of these for each section of the content.
   - Has Next Step: Select yes if you'd like the "Take GitLab For a Spin" CTA.
2. Publish this page when it's ready *as well as all sub items*, and it will be live at the URL specifid. It will also appear on the `/press/releases/` page automatically as a card.
3. For the `/press/` page, you'll have to add that card manually. Navigate to the Press page in contentful, and click on the Press Releases content.
   - Add content -> Card
   - Fill in the Internal Name/Title fields with the title
   - Add a subtitle (the date)
   - Add the URL of the custom page you created early in the Card Link field.
   - Feel free to add Data Ga Name (the link title) and Data Ga Location (body) for our tracking purposes.
   - Under Primary Button, add a button. Fill in the title and Text to be Read More.
4. Publish this item, including the button and any other sub items
5. Drag your card to the top of the stack (and maybe remove the bottom item since we're trying to keep that list around 5 items long) and publish the changes.

### Updating the Privacy page

[Video Walkthrough](https://youtu.be/kP0V87TEjFE?si=5V2h9NskewHZkCrH)

### Adding a partner to the Alliance Partner/Technology Partner page

[Video Walkthrough](https://youtu.be/-6ntN8OAKx4?si=UNqU8M7Z4Mg9X3HS)

1. Navigate to the Technology Partners page entry
1. Go to the page content, and click on the category you'd like to add the partner to (e.e. Security)
1. Scroll to the bottom of the existing content on the page and select + Add Content -> Partner Application
1. From here, it might be helpful to open an existing card and make sure the same fields are filled out, but the gist is:
   - Name: Partner name
   - ID (optional): This is used to create anchor links on the page. It should default to the lowercase text of the partner name, but is editable if necessary
   - Content: The description of the card. To add embedded links, use a html anchor tag like so: `<a href="https://www.url.com">Link Text</a>`
   - Logo Image: If the logo already exists in the Media section, you can Add Existing Content, otherwise, Add new media and upload your image.
   - Featured Partner: Select yes if this should show at the top of the page under Featured Partner
   - Links: Add a Button content type, and fill out the Internal Name and Text as the text you'd like to appear, then the External Url should be the url. It's also helpful to add the Data Ga Name as the partner name, and the Data Ga Location as 'body' for our analytics purposes.
1. Publish your buttons, publish your Partner Application Card, drag it so that it's in alphabetical order, and publish the whole section.

### Adding an event to the Events page

[Video Walkthrough](https://youtu.be/A0PdsjoaPzU)

1. Click on the `Content` tab
1. Go to the top bar and next to `Content Type` and change it from `Any` to `⚛️ Event Card`. This shows a list of existing events.
1. Click on `Add Entry` at the top right of the screen and select `⚛️ Event Card`
1. Fill out the following fields:
   - Internal Name - Name of event (This isn't visible on the page, but Contentful uses these names internally)
   - Name - Name of event
   - Event Type - Select the event type from the dropdown.
   - Description - Add event description. Can use markdown.
   - Date - Select start and end date of event. If the event is one day, select the same start and end date. Both are required.
   - Location - Add city and state of event, if in-person. If virtual, type in `Virtual`.
   - Region - Select the appropriate region for event
   - Event URL - Add registration URL
   - Social Tags: Optional - Add any hashtags that may be relevant. For example, you can type "DevSecOps" and hit enter, then enter your next tag. Each tag will automatically have the # symbol applied.
1. Once fields have been reviewed and are final, click `Publish`

To remove an event from the events page, go to the event and click Change Status -> `Unpublish`. Once the event is unpublished, you can also click the three dots `...` in the upper right corner, and `delete` the event to remove it from Contentful entirely (otherwise the event will remain as a draft).

### Updating the Services page

[Video Walkthrough](https://youtu.be/ZTMKMKnu-iM?si=IYhmd6-AUJKpNiEv)

### Updating the All Jobs page

[Video Walkthrough](https://youtu.be/KVCWxQ3cvC4)

Items to keep in mind when updating our All Jobs page:

1. Contentful updates require a deployment and a pipeline will start once new content is Published. This can take about 10-15 minutes.
2. Updates within Greenhouse will be reflected on the page instantly.
3. If a department does not have job listings, it will not appear on the page.
4. Updating the "View all locations" string for the locations dropdown could break some filtering functionality. We have some code looking for that specific option. If that language needs an update, please reach out to us so we can make a quick change in the code to accompany your content change.

### Creating an Event Landing page

[Video Walkthrough](https://youtu.be/C6YicW6se24)

1. Filter the content on the Content tab by an existing event landing page, and open up one of the events that you'd like to mimic.
1. In a new tab, on the top left, click Create Entry -> Event
1. Fill in the same fields in your new Event entry as the existing page. This includes:
   - SEO for metadata and social sharing/opengraph information
   - Slug, Description, Dates, Location, Region
   - Add a Hero to the hero section
   - Add any number of Two Column Blocks to the Booth section
   - Add in any relevant sessions to the Sessions section also using Two Column Blocks
   - Add icons into the Static Fields/Json editor (these will appear in your hero for each of the list items)
   - Add the exisitng Code of Conduct header and text component to the Footnote section
   - Add the existing Next Steps - Free trial double column component to the Next Steps section
   - Choose whether this event will also appear on the /events/ landing page (yes or no radio buttons)

#### Removing a page in Contentful

Due to the way pages are generated, there are a few steps that need to be preformed in a certain order to unpublish a page. This should be done by a Digital Experience engineer. 

1. In Contentful: Remove any text in the `description` field 
   - Don't forget to remove all locales' descriptions, too
   - It's ok that this is a required field - you don't need to publish your changes, just leave them in their `changed` state
1. Turn off the webhook in Contentful
   - Note: Since making your changes in the step above, `draft` content will break for other people, so try to do this in one go.
1. Open an MR in buyer experience with your changes 
   - Delete the file/references to your page
   - *Use Preview API in your MR!*
1. Once that build passes in your MR:
   - With the webhook still turned off, unpublish your page in Contentful
   - Merge your MR
   - After the build is done, you can turn webhooks back on
   - Archive the page in Contentful
   - Set up a redirect in `www` if necessary
