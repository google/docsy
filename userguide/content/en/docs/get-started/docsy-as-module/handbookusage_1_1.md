---
title: Handbookusage
doc_type: doc
doc_id: doc-977
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

# Handbook Usage

About how GitLab uses the handbook.
## Flow structure
1. A (process) problem comes up, frequently in an issue or chat.
1. A proposal is made in a merge request to the handbook.
1. Once merged, the change is announced by linking to the diff in the MR or commit. Major ones are posted in the #whats-happening-at-gitlab slack channel. Medium ones are posted in the #handbook channel for visibility, with a one line summary of the change. If there was an issue, close it out with a link to the diff.
Sometimes you want to have real time editing of a proposal during a meeting and you need to use a Google Doc for that. When doing so the first item should be the URL of the handbook page this content will be moved to when the meeting is over.
## Why handbook first
Documenting in the handbook before taking an action may require more time initially because you have to think about where to make the change, integrate it with the existing content, and then possibly add to or refactor the handbook to have a proper foundation. But, it saves time in the long run, and this communication is essential to our ability to continue scaling and adapting our organization.
This process is not unlike writing tests for your software. Only communicate a (proposed) change through a change to the handbook; don’t use a presentation, email, chat message, or another medium to communicate the components of the change. These other forms of communication might be more convenient for the presenter, but they make it harder for the audience to understand the context and the implications for other potentially affected processes.
Having a **“handbook first”** mentality ensures there is no duplication; the handbook is always up to date, and others are better able to contribute.
Beyond being “handbook first,” we are also “public handbook first.” When information is [internal-only](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/#internal), it should be captured in the internal handbook, but we default to the public handbook for anything that can be [made public](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/#not-public). This ensures that everyone has access to any information that can be [SAFEly](https://handbook.gitlab.com/handbook/legal/safe-framework/) shared. This supports the GitLab [values](https://handbook.gitlab.com/handbook/values/), including transparency, efficiency, and results. It also protects against the internal handbook becoming a home for information that should otherwise be public or a conflicting or duplicative source of truth.
[Unsupported block type: video]
When asked during an [INSEAD](https://www.insead.edu/) case study interview (shown above) about challenges related to being all-remote, GitLab co-founder Sid Sijbrandij provided the following reply.
> 
## Scope of this handbook
The handbook is focused on any content that GitLab team members need to do their job. For other content that might be useful, link to the other source.
- All documentation that also applies to code contributions from the wider community should be in the GitLab project (for example in [Contributing](https://docs.gitlab.com/ee/development/contributing/) or the [code review guidelines](https://docs.gitlab.com/ee/development/code_review.html)), not the Handbook, which is only for team members.
- For user facing company information, there’s the main marketing [website](https://handbook.gitlab.com/handbook/marketing/digital-experience/), and the [blog](https://handbook.gitlab.com/handbook/marketing/blog/).
- The handbook is for things concerning current and future GitLab team-members only. If something concerns users of GitLab, it should be documented in the [GitLab documentation](https://docs.gitlab.com/), the [GitLab Development Kit (GDK)](https://gitlab.com/gitlab-org/gitlab-development-kit), the [CONTRIBUTING file](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/CONTRIBUTING.md) or the [PROCESS file](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/PROCESS.md).
## Handbook guidelines
Please follow these guidelines and remind others of them.
### How we use the guide every day
1. Most guidelines in this handbook are meant to help, and unless otherwise stated, are meant to help more than being absolute rules. Don’t be afraid to do something because you don’t know the entire handbook, nobody does. Be gentle when reminding people about these guidelines. For example say, “It is not a problem, but next time please consider the following guideline from the handbook.”
1. If you ask a question and someone answers with a link to the handbook, they do this because they want to help by providing more information. They may also be proud that we have the answer documented. It doesn’t mean that you should have read the entire handbook, nobody knows the entire handbook.
1. If you need to ask a team member for help, please realize that there is a good chance the majority of the community also doesn’t know the answer. Be sure to **document** the answer to radiate this information to the whole community. After the question is answered, discuss where it should be documented and who will do it. You can remind other people of this request by asking “Who will document this?”
1. When you discuss something in chat always try to **link** to a URL where relevant. For example, the documentation you have a question about or the page that answered your question. You can remind other people of this by asking “Can you please link?”
1. Remember, the handbook is not what we hope to do, what we should formally do, or what we did months ago. **It is what we do right now.** Make sure you change the handbook in order to truly change a process. To propose a change to a process, make a merge request to change the handbook. Don’t use another channel to propose a handbook change (email, Google Doc, etc.).
1. The handbook is the process. Any sections with names like ‘process’, ‘policies’, ‘best practices’, or ‘standard operating procedures’ are an indication of a deeper problem. This may indicate a duplication between a prose description of a process and a numbered list description of the same process that should be combined in one description of the process.
1. When communicating something always include a link to the relevant (and up-to-date) part of the **handbook** instead of including the text in the email/chat/etc. You can remind other people of this by asking “Can you please link to the relevant part of the handbook?”
1. Everyone can join the `#handbook` channel to stay up-to-date with changes to the handbook.
### Screenshot the handbook instead of creating a presentation
Presentations are great for ephemeral content like [group conversations](https://handbook.gitlab.com/handbook/company/group-conversations/) and board presentations. [Evergreen content](https://web.archive.org/web/20170503174119/https://www.thebalance.com/what-is-evergreen-content-definition-dos-and-don-ts-2316028) like a [leadership training](https://handbook.gitlab.com/handbook/leadership/#training) should be based on the handbook. This is an important element of [working handbook-first](https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first/).
In the creation of presentations for evergreen content, please screenshot the handbook and provide links to displayed pages rather than copy and pasting content (or formatting a slide specifically to mirror handbook information). This approach shows a [bias towards asynchronous communication](https://handbook.gitlab.com/handbook/values/#bias-towards-asynchronous-communication), and rationale for this is below.
1. It saves you the effort of needing to both update the handbook and create content for a presentation; the handbook is checked and improved as part of the preparation instead of extra work
1. The handbook will stay up to date so people don’t look at an outdated information in a presentation
1. Seeing screenshots will confirm to people the content is in the handbook and it is up to date there
1. People get used to the structure of the handbook and can more easily find the relevant handbook section later on
1. The content is open for everyone to contribute to when it is in the handbook
1. The content is integrated with the rest of our processes and shown in context
1. Many more people will consume the content on a webpage than a presentation because it is easier to search and link
1. You’re helping other organizations and students around the work by giving them an example how we do it
1. Also see some of the [advantages of using our handbook](https://handbook.gitlab.com/handbook/about/handbook-usage/)
The presentation will look less polished, but the advantages outweigh that concern.
If a synchronous presentation is required, default to sharing your screen and viewing live handbook pages over a slide presentation.
### Searching the Handbook
Every GitLab Handbook page has a search field near the top of the page for searching. See the [Searching GitLab like a pro](https://handbook.gitlab.com/handbook/tools-and-tips/searching/) page for tips on searching the handbook faster and more efficiently.
### How to change or define a process
1. 
1.  
1. 
1. 
1. 
1. 
1. 
1. 
1. 
1. 
1. 
1. 
1. 
1. 
### Considerations when adding an additional process
While not a requirement, it can be useful to schedule an async retro MR/issue `X` months out after the introduction of a new process.
Consider identifying an improvement target and timeframe to determine what success is. You can use the retro MR/issue to transparently communicate expectations as well to provide a means to iterate or remove the new process.
The creation of the retro MR/issue is an opportunity to think through:
1. What do we hope this new process accomplishes?
1. Is there a metric we can use to measure the effect of the new process?
1. Are there outcomes of the new process that would prompt us to roll it back?
The retro itself is an opportunity to document:
1. How do the participants in the process think things are going?
1. What additional costs are associated with the new process?
1. Were there any unforeseen side effects of the new process?
1. Do the participants have suggestions for ways to mitigate any costs realized by the new process, or further improvements in general?
### Information architecture
### Single Source of Truth
Think about the information architecture to eliminate repetition and have a Single Source of Truth (SSoT). Instead of repeating content cross-link it (each text has a hyperlink to the other piece). If you copy content please remove it at the origin place and replace it with a link to the new content. Duplicate content leads to more work by having to update the content in multiple places as well as the need to remember where all of the out of date content lives. When you have a single source of truth it’s only stored in a single system. Make sure to always cross-link items if there are related items (elsewhere in the handbook, in docs, or in issues).
### System of Record
A system of record (SoR) is the authoritative data source for a given data element or piece of information. It’s worth noting that while it is possible to have a system of record that is also a single source of truth, simply just being a system of record doesn’t directly imply it is the single source of truth.
### Organized by Function and Results
The handbook is **organized by function and result** to ensure every item in it has a location and owner to keep it up to date.
- It’s essential that we adhere to this hierarchy and that we not maintain separate structures for company training materials (such as onboarding materials, how-tos, etc.), videos, or other documentation.
- Adhering to this hierarchy is sometimes counter-intuitive. We’ve learned over the years that keeping content in context helps to ensure consistency when making future updates.
- At times, a change of perspective may be desired. In those cases, link to relevant sections of the handbook but don’t include the content itself. See the [onboarding template](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding.md) (internal) as an example. Or for example a list of [Key Performance Indicators](https://handbook.gitlab.com/handbook/company/kpis/) that links to performance indicators but doesn’t duplicate definitions.
### Style guide
Read through these style guidance below and the [Writing Style Guidelines](https://handbook.gitlab.com/handbook/communication/#writing-style-guidelines) before [editing the handbook](https://handbook.gitlab.com/handbook/about/editing-handbook/).
### Handbook pages
Keep your handbook pages short and succinct. Eliminate fluff and get right to the point with the shortest possible wording. Keep in mind that the biggest challenge cited by new employees is the vast amount of information to take in during onboarding.
### Avoid unstructured content
- **Avoid unstructured content based on formats like Learning Playbooks, **[**FAQs**](https://idratherbewriting.com/2017/06/23/why-tech-writers-hate-faqs/)**, lists of links (such as quick links), resource pages, glossaries, courses, videos, tests, processes, standard operating procedure, training, or how-to’s.** These are very hard to keep up-to-date and are not compatible with organization per function and result. For example: Call it Contract Negotiation Handbook instead of Contract Negotiation Playbook
- Instead, put the answer, link, definition, course, video, or test in the most relevant place. Use descriptive headings so that people can easily search for content.
- That said, please mix *formats* where and when appropriate in the handbook, even within a single page. Utilizing multiple formats can be valuable, and different people may prefer certain formats over others.
- Worry only about the organization **per function and result**, not about how the page will look if you embed varying types and formats of content.
- Note: A weakness of [FAQs](https://handbook.gitlab.com/handbook/communication/#structure-content-instead-of-using-faqs) is that questions are often asked in biased or leading ways. When possible, state facts as facts.
### Use headings liberally
If a page includes more than two headings (especially if it’s larger than a single “screen”), add an automatically generated Table of Contents (ToC) by copying [line 6 to 10 in this MR](https://gitlab.com/gitlab-com/www-gitlab-com/merge_requests/7141/diffs#f054d0f855ebef2a11559c362a356a2f9e010b99_6_6). Headings should have normal capitalization: don’t use [ALL CAPS](https://en.wikipedia.org/wiki/All_caps) or [TitleCase](https://www.grammar-monster.com/glossary/title_case.htm). After a heading, leave one blank line; this is [not required in the standard](https://spec.commonmark.org/0.27/#example-46), but it is our convention.
### Use contributable diagrams
Preference contributable diagrams over uploading images or other less contributable diagrams. This makes it easier for other people to suggest changes and contribute. Diagram options in Markdown include [Mermaid](https://handbook.gitlab.com/docs/markdown-guide/#mermaid) and [PlantUML](https://handbook.gitlab.com/docs/markdown-guide/#plantuml).
## Handbook First Competency
In an all-remote, asynchronous organization, each team member should practice handbook first. For more information on what it means to be handbook first, please refer to the [why handbook first](https://handbook.gitlab.com/handbook/about/handbook-usage/#why-handbook-first) section of this page.
**Skills and behaviors of handbook first as a Team Member**:
- Actively contributes to the handbook.
- [Start with a merge request](https://handbook.gitlab.com/handbook/communication/#start-with-a-merge-request)
- Provides links to information from the handbook when answering questions and if the information doesn’t exist in the handbook, then the team member adds it.
- Understands which information is internal-only, but puts all public information in the public handbook.
**Skills and behaviors of handbook first as a People Leader**:
- Holds their team and others accountable for being handbook first.
- Demonstrates leadership in being public handbook first with all information that is not internal-only.
- Enables new team members and managers on how to leverage the handbook as a resource.
- Serves as a role model for what it means to be handbook first.
## Management
It is each department and team member’s responsibility to ensure the handbooks (public handbook, and internal handbook) stay current. The content in the handbook should be accurate and follow the same format as outlined in the [Guidelines](https://handbook.gitlab.com/handbook/about/handbook-usage/#handbook-guidelines). For questions on who to submit a merge request to, or assistance with the handbook, please reach out on the `#handbook` Slack channel.
If you need permissions to directly commit changes to the handbook, please submit a [New Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests) issue and follow the process for access approval. Request a ‘Maintainer’ role for the appropriate handbook.
## Merge Rights Guidelines
You need [`developer`](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions)[ access](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions) to the relevant handbook project to merge MRs. All team members should have developer access by default. This page contains some tips and guidelines that you should keep in mind when merging.
### Merge with confidence
You should feel confident merging any changes that pass the pipeline without worrying that you will break the handbook. The tests in the pipeline are designed to catch any major problems. The handbook projects are configured so that changes cannot be merged unless the pipeline passes. In the event that code is merged that does break the handbook in some way, follow the instructions for [reporting an issue to the Handbook team](https://handbook.gitlab.com/handbook/about/escalation/).
### Do not use merge immediately
Do **not** use the [merge immediately](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html#immediately-merge-a-merge-request-with-a-merge-train) feature! Even if your MR is important and time-sensitive, using this feature will create a lot of pain for everyone else. This feature should only be used when critical public information needs to be sent live as quickly as possible and should be approved by PR or Legal. **If you don’t have PR or Legal approval, don’t use this feature**.
More context on the technical reasons behind this:
- We want to have a fast pipeline for the default branch, which minimizes the time needed for changes to be deployed and appear live on the production site.
- In order to achieve this, we do not run any tests or linters on the default branch, because these are long-running jobs which would block a fast deployment.
- Instead, we rely on the [Merge Train](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html) to ensure that all Merge Request changes have successfully passed all necessary test/lint jobs before being allowed to merge.
- So, if you use “merge immediately”, ***none of the test/lint jobs will be run, which will result in a broken default branch if problems were introduced.***
- This means that **everyone who creates new MRs off of the default branch after this point will experience confusing pipeline failures which are not their fault**, and this will continue until this situation is discovered and a fix is merged to the default branch.
### When to get approval
Getting pinged to approve every small change to your page can be annoying, but someone changing a policy or procedure in the handbook without proper approval can have strong negative consequences. Use your best judgement on when to ask for approvals.
Whenever reasonable, practice [responsibility over rigidity](https://handbook.gitlab.com/handbook/values/#freedom-and-responsibility-over-rigidity). When you expect a page owner will appreciate your changes, go ahead and merge them without approval. Always ping the code owners with an @mention comment to inform them of the changes. They will be happy their page was made better and they didn’t need to waste time reviewing and approving the change. In the event that something isn’t an improvement, we practice [clean up over sign off](https://handbook.gitlab.com/handbook/values/#cleanup-over-sign-off).
Whenever appropriate, such as publishing a previously internal-only document, get approval from the [code owner](https://docs.gitlab.com/ee/user/project/codeowners/) using the [approval feature](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html) before merging changes.
### Who can approve
You can identify the owner of a handbook page by visiting the page on the web version of the handbook and viewing who is in the `Maintainers` section on the page being edited (on the right hand side of the page, which may be hidden on a smaller browser window).
For some pages, the `Maintainers` section is empty. This is because the page is maintained by a group rather than individuals. To view which groups or individuals maintain a page, see the `CODEOWNERS` file of the relevant repository, such as [the handbook’s ](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/.gitlab/CODEOWNERS)[`CODEOWNERS`](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/.gitlab/CODEOWNERS).
The page’s code owners will also be visible when viewing the [approval section](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/settings.html) of the merge request.
The page’s code owner is the DRI for the page and has the final say for what appears in the handbook. When in doubt, get the DRI’s permission before changing their page. Don’t worry if the DRI is a C-level person. You can still assign your MRs to them, even if you are an individual contributor. This is because we prefer to [communicate directly](https://handbook.gitlab.com/handbook/communication/#communicate-directly).
### Have a peer review your changes
Unless it’s a small change like a typo, always have another team member review your changes before you merge them.
### Broad Permissions
Being a maintainer gives you access to much more than just the ability to merge. You can see a [full list of permissions](https://docs.gitlab.com/ee/user/permissions.html#project-members-permissions) in the docs. Keep in mind that you’ll have access to a broad set of settings and configuration for the project. Don’t adjust any settings or make any structural changes.
### Granting others maintain access
Do not grant people maintainer access without an [Access Request](https://handbook.gitlab.com/handbook/it/end-user-services/onboarding-access-requests/access-requests/). As a maintainer you have the ability to grant others maintainer access. Don’t do so without following the Access Request process to garner the appropriate approvals and create the necessary documentation.
### Description Templates for Issues and Merge Requests
The [description templates](https://docs.gitlab.com/ee/user/project/description_templates.html) for issues and merge requests in the various projects are respectively located in the `.gitlab/issue_templates` and `.gitlab/merge_request_templates` directories, and can be edited and changed with a new merge request.
Changes to the default templates in `Default.md` require review by the [Office of the CEO](https://handbook.gitlab.com/handbook/ceo/office-of-the-ceo/) or the [CEO](https://handbook.gitlab.com/handbook/ceo/). See `.gitlab/CODEOWNERS` for the current list of approvers.
## The Internal handbook
### Where can it be found?
- [Internal Handbook Project](https://gitlab.com/gitlab-com/content-sites/internal-handbook/-/tree/main/content)
- [Live Website](https://internal.gitlab.com/)
### Why is there a internal handbook?
As a company, we are [public by default](https://handbook.gitlab.com/handbook/values/#public-by-default), but there are things that we cannot discuss publicly. The Internal Handbook is a space where team members can share internal information. Anything that **is not** considered [internal only](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/#internal), should be in GitLab’s [public handbook](https://handbook.gitlab.com/handbook/). Anything that is [limited access](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/#limited-access) **should not be added to the internal handbook** as the internal handbook is accessible by all team members.
### The process of using this handbook
Only add items to the internal handbook that fall into the [not public](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/#not-public) category. Everything else should be added to our [public company handbook](https://handbook.gitlab.com/handbook/).
### Accessing the internal handbook group
All team members have access to the internal handbook through Okta as baseline access during onboarding. Login to your Okta dashboard and click on the `GitLab Internal Handbook` tile. You will have to authenticate with Okta first.
### Questions using the internal handbook
- Questions about what should be in the internal handbook vs in the public handbook? See the [safe framework](https://handbook.gitlab.com/handbook/legal/safe-framework/#safe) or ask in `#safe`.
- Volunteering to help with enhancing it? Join the `#internal-handbook` channel.
## KPI
The Engineering team and all sub-teams track Handbook Update Frequency as a [KPI](https://handbook.gitlab.com/handbook/company/kpis/#engineering-kpis), with varying targets per team. Currently, Engineering is the only Division tracking Handbook update frequency, so as to analyze and observe the effectiveness of this KPI.
## External use of the Handbook
Remember that, like virtually everything we do, our handbook is [open source](https://about.gitlab.com/solutions/open-source/), and we expect that other companies may use it as inspiration for their own documentation and practices. That said, the handbook should always be specific on **what we do**, not **who we want to be**, and every company will need to fill out their own handbooks over time. Our handbook falls under the [Attribution-ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/).
### Inspired by GitLab
If your company has been inspired by GitLab’s handbook, we would love to know what inspired you. Please see our [Inspired by GitLab page](https://handbook.gitlab.com/handbook/company/inspired-by-gitlab/).
### Make it worthwhile
Another company asked how we managed to work with the handbook because at their company it wasn’t working: “There are many occasions where something is documented in the knowledge base, but people don’t know about it because they never bothered to read or search. Some people have a strong aversion against what they perceive as a ‘wall of text’.”
We attempt to cover this in GitLab’s [guide to embracing a handbook-first approach to documentation](https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first/).
To ensure that people’s time is well spent looking at the handbook we should follow the ‘handbook guidelines’ above, and also:
1. Follow the [writing style guide](https://handbook.gitlab.com/handbook/communication/#writing-style-guidelines).
1. Have a great search function, plus make it public so you can [Google search](https://handbook.gitlab.com/handbook/tools-and-tips/searching/).
1. Test people on their [knowledge](https://handbook.gitlab.com/handbook/company/culture/all-remote/learning-and-development/) during onboarding.
1. Give real examples.
1. Avoid corporate speak, describe things like you’re talking to a friend. For more, see our communications guide on [Simple Language](https://handbook.gitlab.com/handbook/communication/#simple-language).
## Wiki handbooks don’t scale
Company handbooks [frequently start as wikis](https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first/#tools-for-building-a-handbook). This format is more comfortable for people to work in than a static website with GitLab Merge Requests and GitLab Pages. However wikis tend to go stale over time, where they are badly organized and get out of date.
In wikis it is impossible to make proposals that touch multiple parts of a page and/or multiple pages. Therefore it is hard to reorganize the handbook. Because GitLab Merge Requests and GitLab Pages are based on distributed version control you can split the role of submitter and approver. This allows for a division of work that keeps the handbook up to date:
- Anyone who can read the handbook can make a proposal
- Leaders (who tend to be short on time) only have to approve such a proposal
Wikis also do not encourage collaboration on changes, because there is no way to discuss a proposed change like there is with merge requests.
Some wikis make it hard to view and/or link to diffs of changes, which is needed to communicate decisions.
### Sid and Paul Discussion on the benefits of markdown handbooks and limitations of wikis
[Unsupported block type: video]
