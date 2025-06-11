---
title: "Customer Programs Content & Style Guide"
description: "Style and content guide information for Digital Customer Programs."
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## CS Ops Content Guide

This guide outlines information about customer programs and other customer communications sent by CS Ops and other CS teams, including webinars, monthly newsletters, and email.

Please use the Slack channel `#cs_ops_and_programs` for questions.

## Content Creation & Review Process

Creating new content, or adapting existing content from elsewhere at GitLab, requires review outside of the Digital Customer Programs team. Content must be reviewed for correctness, adherence to GitLab style, and readability. Expect at least 10 working days, or about one milestone, to complete the entire process.

| Step | Task                                                | Notes                                                                                                | DRI                            | Timeline   |
|------|-----------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------------------------------|------------|
| 1    | Scoping - Define program purpose                    | Answer: What do we hope to achieve? How do they align with existing KPIs or OKRs | Program Manager                           | 1 - 2 Days |
| 2    | Identify existing content                   | Does the email content already exist in the GitLab handbook or other documentation?             | GitLab Team Member SME                    | 3 - 5 Days |
| 3    | Define call to action                                | Answer: What are the intended actions of each individual email?                                      | Program Manager                           | 1 - 2 Days |
| 4    | Create email copy                                   | Write new email content or adapt existing content into one or several emails.                                 | Program Manager or GitLab Team Member SME | 3 - 5 Days |
| 5    | Assign a template to email copy                     | Use an existing email template or create a new one to apply to this email program.                   | Program Manager                           | 1 Day      |
| 6    | Peer review from marketing or subject matter expert | SME review of email copy for correctness and adherence to GitLab style.                        | GitLab Team Member SME                   | 5 Days     |
| 7    | Finalize email design and test in Gainsight         | Complete the email design and test in Gainsight for compatibility for final review.                                    | Program Manager                           | 1 Day      |

## Subject Matter Expert (SME) review guidelines

You may be asked to perform a review of current or new content. This review should not take more than an hour in most cases.

<details>
<summary markdown='span'>SME review guidelines</summary>
<br>
As a subject matter expert (SME) reviewer, you'll be asked to review content for technical accuracy and completeness.

### The review process

1. A draft version of a Google Doc may be provided to you, or you may be asked to review an MR for the content.
1. You'll have a set amount of time to review the document and add comments to it with any suggestions, corrections, or additions. *If, for any reason, you can't complete the review, please comment in the issue*.
1. When your review is complete, comment in the issue.
1. The content requester and writer will complete a final review after all other reviews are complete.

When reviewing, please keep the following in mind:

- Typos and grammatical errors are likely to be present. We fix these documents once all revisions have been made.
- We use the [GitLab Writing Style Guidelines](/handbook/communication/#writing-style-guidelines) for emails to retain consistency with the Handbook and other GitLab communications.
- Additions are always welcome! If there's something that should be in a document, please add it.
- Don't be afraid to request a removal of information in the document. If it doesn't belong there, let us know.
- We try to keep our content brief. The content we create has to toe a line between persuasive, like a sales or marketing piece, and educational, which is concise.

### What to look for

- Is the What's In It For Me (WIIFM) clearly stated? As a SME, you have a good idea of why this product or feature is important to a customer. Are we clearly communicating that? Consider why a customer may not know what this can do for them, and how you'd address that.
- Is the information presented technically correct?
- Is each step, if applicable, correct, in the right order, and results as expected?
- Are any terms used incorrect or outdated?
- Is there content that should or should not be included in this document?
  - Links
  - Blog posts
  - Videos
- Is the order of information correct for the product or process?
- Does anything need to be listed or explained first, before other processes or steps?

</details>

## Look and feel

Our email programs go to many different customers, including paid and free, self-managed and SaaS, AMER and APAC. We strive to create a consistent look and feel that is similar to other communications from GitLab, but remains unique to our team and its goals.

### Style

We use the [Handbook Style Guide](/handbook/about/style-guide/) as our base. This covers things like punctuation, capitalization, and branding. For example, whether we use contractions or not, and how to capitalize brand names.

We also use the [Pajamas Design System](https://design.gitlab.com/brand/overview/) to guide our own brand principles and tone.

Additionally we use guidance from the [Documentation Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/) to avoid non-inclusive language, and avoid regional phrases or words that may be confusing to a wider audience.

### Language and tone

Our emails are generally friendly but not casual. This typically means we don't use overly familiar language, but we do try to keep a warm and supportive tone. We are sending primarily to post-sales customers, and do not use persuasive language heavily. Instead, we opt for a more educational and helpful tone.

#### When to use I or we

A good rule to consider is whether the email is coming from a specific person or from a team. For example, if the email is sent by "Joe GitLab, CSM," and is meant to be personal, we would most likely use "I" or "my" throughout the email. If the email is sent from the Customer Success Team, "we" and "our" would be the better option.

### HTML support in Gainsight

Gainsight has some HTML support, but is mainly a plain-text email application. Due to this limitation, our emails are set up as templates within Gainsight to create consistency and ease of use.

<details>
<summary markdown='span'>Examples of HTML templates</summary>

#### Monthly newsletter

{image here}

#### Onboarding email program

{image here}

#### Call-to-action email

{image here}

</details>

## Standards

Gainsight uses many of the same fields found in Salesforce, but not all can be mapped in a 1:1 way. We use a basic set of standard fields for most emails, but can also add fields as needed.

By default, we do not send to restricted accounts.

[See more about the basic standard fields and practices used in our email programs](linktothiseventually).

## Tokens

We used tokens in Gainsight as placeholders for Gainsight and/or Salesforce data. You may see them in a Google Document as `{TokenName}`

## Available regions

We can send email to the following regions:

- AMER
- APAC
- EMEA

Email programs can be set to send to any region at a locally relative time.
