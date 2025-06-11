---

title: "Litmus"
description: "Litmus is email marketing software used primarily by marketing campaign managers to build, test, and optimize our email marketing programs."
---







## Uses

Litmus is email marketing software used primarily by lifecycle marketing to build, test, and optimize our email marketing programs.

## Access and access requests

We currently have an Enterprise subscription. This provides 5 `Admin`, `Full`, `Code editor`, or `Content editor` users provisioned to the account. `Reviewer` and `Proof reviewer` users are unlimited.

To request access to Litmus, follow the [AR process](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request). Be sure to indicate the role you are requesting in your AR.

Please note that if you are requesting `Proof reviewer` access, no AR is required. You will be added automatically when you are requested to review a proof.

## Roles

For a full description of user types, please visit the [Litmus documentation](https://help.litmus.com/article/122-managing-enterprise-users-subaccounts#entroles).

## Litmus Analytics

**This section requires and update. Working with Litmus CSM to complete this process.**

In order to avoid collecting PII data while using Litmus Analytics, please follow the instructions below to add the tracking script to your email in Marketo:

1. Select `Other` as your ESP.
1. For the merge tag field, use `{{lead.Id}}`.

## Steps to test an email

1. Once your email is built in Marketo, send a sample into the Litmus email testing address. You can find this in Litmus once your logged in under "Send in your email".
1. Your email should show up within a few minutes with the "TEST:" and the subject line from Marketo, your name, and the date it updated. If it doesn't showup, send your email in again.
1. Hover over the name of the email and select "Previews & QA" to see the visuals of the email. Select full length to see the entire preview for each email.
    * Optional: select "Sort by: Popularity - Your audience" or "Sort by: Popularity - OveralL".
    * Be sure to run any previews for "Recommended Clients" by clicking "Run & Add to list".
    * Be sure to double-check the previews for dark mode to ensure all elements to the email are visible and easy to read.
1. Check to ensure your subject line, from name, reply-to, and preview text are all recommended lengths and have a checkmark as their status.
1. Check your audits to ensure everything is "Passed".
1. Check the email links. They might show up as "x" in red, but if the links go to the right place, then they are working correctly.
1. Under image blocking, ensure all of your images have alt-text.
1. Ensure the loading speed of your email is at recommended levels
1. If there are any changes to your emails, make the changes in Marketo, then resend the email to Litmus.
1. Once your email is ready for preview, either send the samples to your QA reviewers or send a link to Litmus Proof using the steps below.

## Litmus Proof

Our enterprise account provides access to Litmus Proof. This allows users to share emails for testing, commenting, and approval with an unlimited amount of reviewers.

Litmus provides extensive documentation of the feature in their [help documentation](https://help.litmus.com/category/76-proof).

Any `Full` or `Admin` user can create a Proof for review.

1. From the email, click the `Proof` tab
1. Select `Share`
1. Select existing users, or enter the email address of a new reviewer. If you enter an email address, this will invite the person as a `Proof Reviewer` and does not count towards our user count. The person will then be added to the account and will be available for selection from the list for future proofs.
1. You can enter a note, including due dates if you would like.

As a `Proof reviewer`, you will be notified via email that a proof is ready for your review. Click on the link and the Proof page will open for you.

To review, click anywhere on the email and the comment section will open. You can also check the links in the email by clicking where the link should be and selecting `Visit link`. If you would like to leave a comment, click again and select `Add comment` instead. If the email is approved, click the green `Approve` button at the top of the page.
