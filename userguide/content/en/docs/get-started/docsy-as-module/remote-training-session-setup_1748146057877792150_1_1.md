---
title: "Professional Services Remote Training Session Setup and Reporting"
description: "Explore how a GitLab Professional Services team members can setup and deliver a remote training."

---

## Professional Services Remote Training Session Setup and Reporting

Professional Services has a shared Zoom account for remote training deliveries to customers. This enables the entire team to schedule, modify, and start training sessions from the same account, as well as access all session recordings and attendee reports. This page describes the procedure for setting up training sessions and accessing post-session recording and reporting.

### Log in

1. Obtain the login credentials for the Professional Services Zoom account from the 1Password team vault.
1. Open up an incognito browser tab and navigate to the Zoom sign in page to log into the shared account.

### Schedule the training sessions

1. In the Zoom shared account, click **Webinars** from the left navigation menu.

1. Check the list of scheduled webinars on the **Upcoming Webinars** tab to make sure none are scheduled to overlap with the one you need to schedule. **Important Note!** Zoom does not allow concurrent meetings or webinars to run from the same Zoom account. Even if you designate an alternate host, one of the meetings or webinars must be ended in order for the other session to initiate. If you see a webinar already scheduled that overlaps with the time slot you need to schedule, you must use a different Zoom account to schedule the session. For details see this [Zoom help article](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0068522).

1. Click the **Webinar Templates** tab.

1. Locate the template name of the course you want to set up the session for.

1. Click **Schedule a Webinar with this template**.

1. In the title for the session, add the customer name. For example, "GitLab CI/CD Training -- Acme Corporation."

1. Adjust the date and time.
    - Each course includes two 4-hour sessions. Select the date of the first session
    - Adjust the start time to the confirmed start time in the customer's preferred time zone.
    - Adjust the duration to be 4 hours.
    - Adjust the time zone to match the customer's preferred time zone.
    - As needed adjust the recurrence so that it matches the confirmed date for the second 4-hour session.

1. Leave the settings as-is for Registration, Password, Video, Audio, and Webinar Options.

1. Set the Alternative Host.
    - Click **Advanced Options** and enter your email address. This will enable you to join the session as the host from your own Zoom account.
    - Click **Save**.

### Adjust the registration page

Zoom templates do not include most of the branding used to set up the original template, so you'll need to make some adjustments for each webinar you schedule.

1. Scroll down to the bottom of the page for the webinar you just scheduled and click the **Branding** tab.

1. In the **Title** section click **Edit**.
    - Change the title to say the name of the training and the customer's name (for example, "GitLab CI/CD Training for FRB Kansas City").
    - Click **Save**.

1. In the **Speakers** section click **Add a speaker**.
    - Upload a photograph of yourself.
    - Enter your name and title.
    - Enter "GitLab Professional Services" for your organization.
    - Enter your biography to let the audience know a bit about you.
    - Click **Save**.

1. Under **Post Attendee URL**, you can click **Edit** to adjust the URL you want attendees to see when you end the webinar session as needed.

1. Click **Save**.

### Restrict the number of registrants

1. On the **Invitations** tab in the **Approval Options** section click **Edit**.

1. On the **Registrations** tab check the box for **Restrict number of registrants**.

1. Enter the number **20** in the field to limit the number of registrants to 20.

1. Scroll to the bottom of the **Registration** pane and click **Save All**.

### Adjust the email settings

1. Click the **Email Settings** tab at the bottom of the webinar page.

1. For the **Email Contact** row, click **Edit** and change the email contact name and address to your own. This will result in all automated emails received by attendees to be from your email address.

### Add the survey link

1. On the "Polls/Survey" tab in the **Survey** row, click **Use a 3rd party survey** and paste in [the link](https://docs.google.com/forms/d/e/1FAIpQLScdTGl7Wwcw2yzFpvCd5jYMPgOf_lp8BYMKKhaW0Mrpt51TXg/viewform?usp=sf_link) to the training survey.
    - This will result in the survey popping up for each attendee immediately after you end the session.

### View and communicate the registration page link

1. Copy the registration page link.

1. Click the **Invitations** tab at the bottom of the webinar session page.

1. Under **Invite Attendees** click **Copy Invitation**.

1. Select the Url shown in the invitation message and copy it.

1. Open another browser tab and paste the link in. This will show you the registration page attendees will see. Review it and if you need to make any adjustments go back to the Branding tab to do so.

1. Paste the registration page link into the issue for the training session.

1. Also paste the link into the email you will send the point of contact at the customer so that they can forward the link to each attendee for each to individually register ahead of time.

### View and export registrations and attendance for a session

#### Pre-session

1. In the **Upcoming Webinars** tab, locate the session you want to see and click the Topic title.

1. At the bottom of the webinar session page on the **Invitations** tab, scroll to the bottom and in the **Manage Attendees** section click **View**.

1. You will be able to see each attendee who registered. If you click on a name, you can view the responses t the registration page questions. This will help you prepare ahead for the training session based on the mix of attendee roles and goals for the session.

**Note**: You will not be able to export the registration list ahead of the session.

#### Post-session

1. In the **Previous Webinars** tab locate the session you want to view and click the Topic title.

1. At the bottom of the webinar session page on the **Invitations** tab, scroll to the bottom and in the **Manage Attendees** section click **View attendee report**.

1. You will be able to generate a number of different reports and export them to a spreadsheet format.

1. Select the **Attendee Report** radio button and select the webinar session. Click **Generate CSV Report**.

1. Attach the Attendee Report to the issue.

### How to access recordings

1. Click **Recordings** from the left navigation menu.

1. Locate the webinar session you want to access.

1. Click **Share**.

1. Click **Copy Sharing Information to the Clipboard**.

1. Paste the recording access information into the issue and into the follow up email you send the customer.
