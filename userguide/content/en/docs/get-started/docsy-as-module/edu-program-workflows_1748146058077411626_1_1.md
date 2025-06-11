---
title: "GitLab for Education Program Workflows"
description: "Details on program-specific workflows related to the GitLab for Education Program"
---

## Overview

This page contains details regarding workflows specific to the [GitLab for Education Program](https://about.gitlab.com/solutions/education/).
GitLab uses a third party, [SheerID](https://www.sheerid.com/), for verification services.
The GitLab for Education Program provides SheerID with the [program requirements](https://about.gitlab.com/solutions/education/join/#requirements) and the SheerID platform is able to verify if an individual meets our requirements by matching applicant-provided data against authoritative data sources automatically.
SheerID instantly confirms whether or not there is a match and either successfully verifies the applicant or rejects the applicant.

## Education Service Desk

We assist Education Program members who are blocked in the process of renewing or applying, as well as those with general questions about the program.

To review any current applications, support tickets or common questions please review the Service Desk below.

- [Education Service Desk](https://gitlab.com/gitlab-com/marketing/developer-relations/education-program/education-program-support/-/boards)

## Managing application forms

SheerID hosts two separate forms for the GitLab for Education Program due to differences in the reference the data set: the University Teacher Program form and the K-12 Teacher Program form.

### University Teacher Program Form

The [University Teacher Program form](https://offers.sheerid.com/gitlab/university/teacher/) is the form for all higher education institutions in 194 countries.
This form contains the following fields:

- First Name
- Last Name
- Email Address
- Job Title
- Country (drop down list)
- Institution Name (drop down list)

For reasons relating to trade controls, we are unable to accept applicants from Cuba, Iran, Syria, North Korea, Russia, Belarus, or Ukraine.

### K-12 Teacher Program Form

The [K‒12 Teacher Program form](https://offers.sheerid.com/gitlab/k12/teacher/) is the form for all K-12 institutions in the United States.
SheerID does not currently have the reference data for K-12 in other countries, therefore this verification form is limited to the United States.

This form contains the following fields:

- First Name
- Last Name
- Email Address
- Job Title
- Institution Name (drop down list)

GitLab currently does not have the legal and operational requirements in place to offer SaaS licenses to any institution that may have children under the age of 13.
The K-12 portion of the GitLab for Education Program is therefore on hold until the requirements are in place.

## Application verification workflow

The SheerID verification flow for the University Teacher Program Form and K-12 Teacher Program Form are detailed here in the [SheerID Flows](https://developer.sheerid.com/concepts#flows) section of the [SheerID Developer Center](https://developer.sheerid.com/).

If applicants are not successful with the automated verification process, they will be prompted to upload a document that shows: full name and school name with a date in the current year.
Acceptable examples include Teacher ID card with valid date and pay stub from within the last 60 days.

### Manual application review

Applicants will have 3 attempts to upload a document providing verification of eligibility.
SheerID will manually review these documents.  Upon the third unsuccessful attempt, applicant will be rejected.

If SheerID is unable to determine the eligibility based on the document review, SheerID will forward the applicant's record to education@gitlab.com.
The GitLab for Education team will review the documentation and determine eligibility.

### Verification limit

Any individual can apply through the form and verify up to 5 times per 365 days.
This limit provides room for error and allows a single individual at an institution to apply for licenses on behalf of individual sub-units within the institution.
For example, an information technology administrator may apply and hold the license for multiple colleges or departments on one campus.
This limit is determined by GitLab and set in the system by SheerID.
It can be changed at any time.

## GitLab in Academic Research Citation Index

We have an MVC [GitLab in Academic Research Citation Index](https://about.gitlab.com/solutions/education/##gitlab-in-research) on the GitLab for Education Home page.
EndNote web will serve as the SSoT for the GitLab in Academic Research Citation Index displayed on our webpage.
EndNote is an online tool that stores citations, allows collaboration, and has search functions.
An added benefit of EndNote web is that we can export the citations in any standard citation format.

The workflow for updating and tracking the citation index is below.

You'll need to create an EndNote account from the [EndNote homepage](https://endnote.com/) and notify the Developer Relations team who will share the **GitLab Citation Index Group** with you.

### Finding and adding citations to the index

1. Find relevant citations on [Google Scholar](https://scholar.google.com/).
1. Save the citations your Google Scholar Library
1. Export the citations in EndNote format.
1. Log into your [EndNote account](https://endnote.com/). See note below if you do not have an account. Import the citations from Google Scholar

   - From the `Collect` menu go to `Import References`
   - Choose the File
   - For `Import Option` choose EndNote
   - For `To` choose **GitLab Citation Index Webpage** Group

1. View each citation from the `My References` menu
1. Update any relevant information that may have not imported correctly
1. Add relevant keywords
1. Save the citation

### Adding citations to the web page

1. Prepare a row in the citation index table on the webpage to store the new citation
1. In EndNote Web, go to `Format` and `Bibliography`
1. In `References` choose GitLab Citation Index Webpage
1. In `Bibliographic style` choose `Cite Them-Right Harvard`
1. In `Format Style` choose `HTML`
1. Preview and Print the index
1. Find the relevant citation
1. Copy and paste the citation into the placeholder
1. Update the `Notes` field in the citation record in EndNote with `added to website` so we are able to track which citations have been added.
