---
title: RFI/RFP Process
description: >-
  Solution Architect Assisted RFI/RFP Process
---

## RFI/RFP Process

A Request for Information (RFI) or a Request for Proposal (RFP), is commonly referred to as an RFx. It is part of the standard sales process within Public Sector, but can also happen with enterprise customers. The Field Security Team has created a process to assist and simplify the RFP process for GitLab field teams which you can view on the [RFP Process Handbook page](/handbook/security/security-assurance/field-security/field-security-rfp/). Use the guidance below if you need help responding to an RFx outside of this proccess.

### Best Practices for Writing RFx Responses

RFx is a general category that includes Request for Information, Request for Proposal, Request for Quote (RFQ), etc. RFIs are generally less structured than RFPs. While RFQs rarely need technical write ups, occasionally technical input is required, especially if the RFx requests an `or alike` product. Solutions Architects can have a big role in responding to RFIs and RFPs where there are a considerable number of technical asks and solutions requirements.

### Evaluating RFIs and RFPs for Response

There is a saying used commonly when responding: `Make sure you answer the mail`. This has two connotations:

1. Evaluate what is asked for and make a best attempt to address it, and
1. Answer the questions directly and provide context

But more importantly, be sure that there is a product fit. If what is asked for in the RFI/RFP is not directly met with GitLab, or seems too much like a different software entirely, then stop and talk to the Strategic Account Executive or Inside Sales Representative. Also identify the strategic impact if the requirements do not seem to match GitLab functionality. If GitLab fits only a piece of the RFx, collaborate with the Strategic Account Executive and/or Inside Sales Representative to understand who the other players in the response might be.

### Process of Responding to RFx

Generally, RFx's have a fixed timeline and require input from different functions within GitLab e.g. Solution Architects, Professional Services, Legal, etc.. The DRI (Direct Responsible Individual) is the Strategic Account Executive (SAE) for the Account. A GitLab issue assists in the coordination, task assignment and tracking of the progress. The best place to create the issue is in the Account project, if one exists, or in a central project where such activities are created and tracked. Occasionally, they can be created in an arbitrary personal project space and shared with other team members if no other suitable place can be found. Build an outline in the issue. The outline should include the following things:

1. Any customer's instructions regarding organization
1. A rational organization of information that will answer all of the questions and requirements
1. Easy to follow structure for the proposal document
1. Compliance with all requirements
1. Links to appropriate Account or Opportunity in Salesforce

Typically a SAE will create the issue and should be assigned to the issue along with the SA and other required team member. Lay out the tasks and assign owners so that every team member's duties are clear. And finally assign the due date according to the agreed-to completion date - at least 24-36 hours in advance of the published due date for the submission to the customer. This provides a small buffer in case of last minute adjustments or approvals that may be needed. In case ambiguity in the task assignment exists, a synchronous meeting with all relevant team members is recommended to speed up the process.

### Responding to RFx

After the issue is created, create a Google document and start filling in the details. Insert the Google document link to the working document into the issue.

In the event that the RFx requires:

- A security questionnaire or legal review, please follow the process described on the [RFP Process page](/handbook/security/security-assurance/field-security/) in the handbook.
- A professional services component, the [Selling Professional Services](/handbook/customer-success/professional-services-engineering/selling/) handbook page will be of help.

Each of these processes will likely require the creation of issues. Be sure to link these issues to the main response issue for tracking purposes.

`Recommendation:` The response documents should be placed in the appropriate Sales Account directory/folder in Google Drive. Please include the link to that document in the [Catalog Document](https://docs.google.com/document/d/1BW9WIYWkg_KG2kZu31IJofavgu4vt5Ac_jcJ3xAtKrg/edit?usp=sharing) for others to be able to find easily and reuse.

## Specifics about RFIs

RFIs are generally issued to shape procurement. In some situations, RFIs are just a step in the process as the customer may already have an advising team that may be following protocol. An RFI is generally non-binding unless otherwise specified. Responses to questions in an RFI don't have to be precise. They can have some idealistic statements to lay the groundwork and pivot points to educate the customer on what GitLab offers. It is good to follow the GitLab Value Framework response methodology, as there is no ability to have a dialog. The RFI is about positioning. Provide context around the following factors that can grab the attention of the readers:

- Positioning and value of the product
- Truth about capabilities
- Solution options and flexibility
- How risk is mitigated by the solution

Some RFIs have a length limit, but be sure to verify and be mindful if there is one. Start with a simple overview of what the product does. GitLab Marketing does a great job with text that is vetted. For example, utilize the write-ups for each of the [Stages of the DevOps Workflow](https://about.gitlab.com/stages-devops-lifecycle/). Do not reinvent the wheel, especially for an RFI. Keep it simple and succinct.

An RFI may ask open-ended questions. This is good for providing detailed solution responses. Keep the language simple and describe the solution GitLab offers. Instead of stating that GitLab does or does not do something, direct the reader to why GitLab doesn't do it, if it is on the roadmap, or how they would implement a workaround.

When responding to an RFI, it's critical to document how the product solves customer problems, but it's also important to include the company behind the product. GitLab's all-remote leadership, its company values, its culture, and its professional services offerings shape the entire customer relationship.

### Including Links to Documentation

In general, for Public Sector responses, adding links to documentation is not a good practice. Essentially, anything that makes a reader have to do extra work is not going to work well. There are also cases in which the reader may not be able to readily access the link provided.

For example, if the question asks for a Roadmap for the next product release, it is a good idea to include a link to our roadmap, but then also explain GitLab's release velocity and consistency so the customer understands the dynamic nature of the GitLab release process. Another instance when links are desirable is when relevant customer use cases may be referenced.

If, however, the customer asks for a descriptive concept like the architecture of GitLab, use that as a way to include as much detail as possible inline, a summary of why the architecture is what it is, including the benefits, and then a link for them to read more. Also, including images and screenshots is highly encouraged where possible.

The customer may ask for a description of the CI process or other complex process. In these cases, it is acceptable to copy as much of the documentation from our documentation as possible, including many details to differentiate GitLab from competitive products. Using CI as an example, include a description of how GitLab CI operates, a description of the yml file, a link to the yml file documentation, and add information regarding unique or differentiating functions that GitLab offers like Auto DevOps, Directed Acyclic Graphs, multi-project pipelines, etc.

### Tips and Tricks in Response Writing

- As much as possible use [active rather than passive voice](https://www.grammarly.com/blog/sentences/active-vs-passive-voice/)
- Eliminate pronouns: Example 1, "GitLab CI will do x" rather than "Our CI will do x". Example 2, "The GitLab team will x" rather than "We will x".
- Organization of the response is as important as the content
- Create a strong introduction and summary leveraging existing Marketing information which presents the breadth of the entire GitLab solution
- If specific requirements are expected to be answered by the response, add notations to the requirement number being met within the text of the response: Example, "GitLab's SAST scanner will analyze your source code for known vulnerabilities (Req 1.a.1)"
- Use customer terminology wherever possible
- Include relevant customer use cases whenever possible

### Links to Completed RFPs

For Gitlab Team members, please see [list here](https://internal.gitlab.com/handbook/solutions-architecture/rfp/).
