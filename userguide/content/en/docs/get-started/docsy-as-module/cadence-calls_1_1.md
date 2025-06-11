---

title: Cadence Calls
---






View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

## Overview

One of the primary tools CSMs have to become a trusted advisor and assess and improve account [health](/handbook/customer-success/csm/health-score-triage/) is the customer cadence call. This is an opportunity for the CSM and the customer team to sync on business outcomes, priorities, progress on initiatives, and concerns, and it is a great opportunity to bring in other GitLab team members that the CSM feels should be included (for example, [Product](/handbook/customer-success/csm/product/) to review feature requests and the roadmap).

Cadence calls are an important aspect of CSM engagement to continue to understand customer's evolving needs, ensure GitLab is delivering value and outcomes, unblock barriers, address issues, collect feedback, nurture relationships, and ensure the customer continues to have positive experiences.

## Frequency

- **CSMs**: Cadence calls should be weekly during onboarding and otherwise at least biweekly, considering specific customer needs and stage in customer lifecycle.
- **Scale CSEs**: Cadence calls are not scheduled on an ongoing basis for Scale CSE customers. Calls with customers are offered programmatically based on the key points defined in the [Scale CSE customer lifecycle](/handbook/customer-success/csm/segment/scale/#customer-lifecycle).

Cadence calls should be [captured in Gainsight](/handbook/customer-success/csm/gainsight/timeline/#how-to-log-activities-in-timeline), which [drives the Engagement scorecard metric](/handbook/customer-success/csm/health-score-triage/#gainsight-scorecard-attributes-and-calculations).

## Lifecycle of a cadence call

An effective cadence call involves more than just the call itself. There are several stages that occur before, during, and after the call.

### Preparation for the call

Leading up to a cadence call, the CSM should prepare a meeting agenda. This is the foundation of an effective call, and should be collaborated on by all attendees. The agenda should be made available to everyone at least a few days in advance of the call.

#### Recommended details to include in the agenda include

- Attendees, both from GitLab and from the customer
- Advance materials or read-only items
- Discussion topics (see [suggested discussion topics](#cadence-call-topics))
  - Leave room for the customer to bring up unplanned topics or questions
- Recap & Next Steps

The collaboration project template includes a [meeting agenda issue template](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/blob/master/.gitlab/issue_templates/Meeting%20Agenda.md) that is structured to follow this format. (Note: Scale CSM customers do not receive/use a collaboration project)

The topics and the naming of the cadence call (when you send an invite to the customer) are also an important part of the CSM engagement. The following names for the cadence call have been used with success and are recommended - ordered by popularity:

- "GitLab / <CUSTOMER_NAME> CSM Call"
- "GitLab - Bi-weekly Collaboration" (Adapt, depending on the frequency)
- "GitLab - CSM Call"

By developing an agenda and doing advance preparation for the meeting, the CSM (and the rest of the [account team](/handbook/customer-success/account-team/)) will be ready with relevant questions and information for the customer.

#### Tasklist for the first cadence call

The following items are to be covered/completed in your initial cadence call/kickoff call with a customer:

- Have introductions between the account team and the customer
- Identify purchase reasons and primary use cases
- Identify training needs and agree on enablement sessions
  - New Customers: Discuss the [Intro to GitLab and the Intro to CI/CD enablement sessions](/handbook/customer-success/csm/workshops/) in your first cadence call
  - Existing Customers: Discuss other [enablement sessions](/handbook/customer-success/csm/workshops/) in-line with their desired use cases and potential expansion opportunities (it can be helpful to start discussing future sessions/topics right after one is delivered and it's fresh in their mind)
  - Scale Customers: Share the [landing page for upcoming webinars](/handbook/customer-success/csm/segment/scale/webinar-calendar/), and encourage them to sign up for the Intro to GitLab and the Intro to CI/CD webinars at a minimum
- Share our [support offerings](https://about.gitlab.com/support/)
- If the customer is on a self-managed subscription:
  - Strongly advise that they sign-up for security alerts, which they can do by entering their email address in the "Sign up for security notices" section of [this page](https://about.gitlab.com/company/contact/)
  - Share the [Communication Preference Center link](https://about.gitlab.com/company/preference-center/) so that customers can manage the emails they get from GitLab
- If the customer is on a SaaS subscription:
  - Share [Status](https://status.gitlab.com/) and [Communications Preferences](/handbook/company/preference-center/) pages with customer and advise that they opt-in to security alerts
  - Subscribe the GitLab Admin to Status page updates
- Set up recurring cadence calls (CSM-managed only)

#### Prep for ongoing cadence calls

After the initial call, you will have subsequent cadence calls, each of which you will need to prep for and ensure is an impactful and successful meeting.

Prior to the call, review the following items:

- Success plan objectives and progress
- Open CTAs
- Last timeline entry/notes doc to ensure follow-up items were closed out and if not, follow up on them during the next call
- Renewal date to be aware of upcoming renewal
- License utilization - if it is lower and the customer is in the second half of their annual contract, discuss the trends around this and expected behavior; if it is above or close to their purchased amount, ensure they are aware and loop in your SAE/AE
- Use case scoring, identifying areas where the customer is not green - discuss one or two on the call and include the value of adoption these areas and suggest enablement opportunities
- Has the customer signed up for security alerts? It's critical to ensure that customers (especially those that are self-managed) sign up for GitLab security alerts, which they can do by entering their email address in the "Sign up for security notices" section of [this page](https://about.gitlab.com/company/contact/). CSMs can monitor whether or not their customers are signed up for security alerts by looking at the relevant SFDC reports for [contacts](https://gitlab.my.salesforce.com/00O8X000008RTyM) (most customers will fall into this category) and [leads](https://gitlab.my.salesforce.com/00O8X000008RTyg). It is recommended to save versions of those SFDC reports with your preferred filters in your Personal Custom Reports folder in SFDC for efficiency and to avoid accidentally modifying the original reports. You can do this by opening the report,selecting "Save As", renaming the report, and saving it to "My Personal Custom Reports". From there, you can modify the report to include your desired filters. If a customer does not sign up for security alerts in between the kickoff call and the first cadence call, CSMs should revisit this topic in subsequent conversations and emphasize that opting in to these notifications will ensure the customer is aware of any action they may need to take to keep their instance(s) secure.

With every customer call, always be sure to have an agenda prepared and share it with the customer in advance. Here is [a template](https://docs.google.com/document/d/1sAt4dFCnPm0vupfFEpZT9dCFLfhgdfCdcj0nOjCM9SI/edit) that some CSMs use to prepare agendas for customer meetings.

Additionally, there may be specific items that are worthwhile to discuss about their self-managed subscription on a regular basis:

- Discuss monthly releases & inquire about frequency of their planned upgrades, letting them know about our [maintenance policy](https://docs.gitlab.com/ee/policy/maintenance.html)
- Inform customer about our [reference architectures](https://docs.gitlab.com/ee/administration/reference_architectures/) and that these are the only supported architectures
  - Inquire about current and projected user count to ensure the architecture allows for future growth and is the appropriate scale
- Inform customer about the [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance)
- Inform customer about our [support offerings for scaled architectures](https://about.gitlab.com/support/definitions/#definition-of-scaled-architecture)
- Ask customer to provide an architecture diagram and upload to collaboration project
- Ensure customer has [Backup/Restore](https://docs.gitlab.com/ee/raketasks/backup_restore.html) and Disaster Recovery plans in place

### Conducting the call

If the CSM has sufficiently prepared, the call itself should be a comfortable and valuable experience for everyone involved. The CSM should be prepared to conduct the meeting according to the agenda and cover all of the listed discussion points. This is our chance to help the customer make forward progress on their objectives by sharing our expertise and answering their questions!

The CSM should drive the call proactively so the customer sees a value in it and comes away feeling they have gotten something out of it. Try to ask questions to get into discussions and let the customer talk most of the time. When putting together the call agenda, ensure that you are covering topics that help you with your customer strategy, but also ask yourself "if I were the customer, would I find this relevant?"

In addition to the [GitLab external communication guidelines](/handbook/communication/#external-communication), here are a few tips for having a strong cadence call:

- **Be engaged.** [It's acceptable at GitLab to multitask or divert your attention during meetings](/handbook/communication/), but during a cadence call this isn't a good idea. The CSM is leading this call, and it's important to follow what is being discussed and keep the conversation moving to make the most of the alloted time. The CSM should be guiding the discussion, and [taking notes](#cadence-call-notes) (or have already asked another member of the [account team](/handbook/customer-success/account-team/) to take notes).
- **Be flexible.** Having an agenda is crucial to a well-run cadence call, but it's equally important to be ready to go off-script. If the customer has something urgent that they need to discuss, or the conversation goes on a tangent that may yield good information, don't try to force it back to the prepared agenda. Address the customer concerns, embrace new information with relevant questions, and anything on the agenda that isn't critical can be delayed until the next cadence call. This relates to [being "audible-ready"](/handbook/sales/command-of-the-message/#overview) in customer conversations.
- **Be responsive.** No matter how much the CSM and [account team](/handbook/customer-success/account-team/) prepare for the call, the customer can still throw a curveball. If they ask for information nobody on the call knows, be honest and acknowledge that, but make a plan to get that information and [follow up](#after-the-call). If you think you can answer the question, make an effort but still assure the customer you will verify what the best answer is. Do your best in the moment, and [follow up on everything else in a timely manner](#after-the-call).

Before you end the call, take a few minutes to summarize the highlights of what was discussed, and review the action items and who is responsible for each of them. It's also worth reminding everyone of when the *next* cadence call is.

### After the call

**If there are no action items or follow-ups that come from a cadence call, the call was not effective.** At minimum, the CSM should send a follow-up email or create a follow-up issue for the participants covering the summary information that was discussed at the end of the call, answer any questions that were posed during the call, and make sure everyone knows what the action items from the call were.

#### Review and update account details

After a call, there are a few items to review and update to ensure the content from the call isn't lost and you maintain a positive relationship with the customer.

- Log the Timeline entry
- Update health score
- Update Success Plan as needed
- Update CTAs as needed
- Follow up on any action items (questions, feature requests, escalations, etc.)
- Send a follow up to the customer

It's a good idea to start creating the agenda for the *next* cadence call at this point, while the call that just ended is fresh in mind.

#### Follow up

When crafting your follow up messages to customers, follow the below recommended guidelines to ensure a positive experience.

1. Strive to send your follow up email or open the follow up issue as soon as possible, or within one business day of your call. If it will take longer than that, set expectations with your customers upfront and keep them posted on progress (even if there isn't any).
1. Address every action item, and if you don't have an update yet, let them know that you're working on it and an estimated turnaround time.
1. Keep your email/issue as succinct as possible, as customers probably don't want to read lengthy emails.
1. Share links whenever possible, however:
1. Try to include the full link and not hyperlink on words, so that the customer knows what they're about to click on.
1. Include a short summary of what the link contains so they understand why it's valuable to them before they click on it.
1. Often, we ask questions posed in customer calls to other GitLab team members. Don't copy & paste exactly your conversation; edit it to make sure it flows and makes sense to the customer and only contains the information they need.
1. Proofread! Before clicking send, always re-read your emails (aloud if that helps) to ensure it makes sense and doesn't have any errors. Remember customers don't always have as much context as we do, so read it from their perspective.
1. Make sure you [BCC Salesforce](/handbook/customer-success/using-salesforce-within-customer-success/#tracking-emails-within-salesforce) on your emails. For important emails, you can also [BCC Gainsight](/handbook/customer-success/csm/gainsight/timeline/#bccing-emails), but this is not recommended for all emails as it can make the Timeline noisy.

## Cadence Call Notes

All customer call notes should be [saved in Google Drive](https://drive.google.com/drive/folders/0B-ytP5bMib9Ta25aSi13Q25GY1U), following this format: `/Sales/Customers & Prospects/A/Acme/Acme - Meeting Notes`. [See an example meeting notes here](https://docs.google.com/document/d/1dAcHBqoRTY6qqSw27VQstCCnk5Fxc2oIsbpKs014h3g).

The rationale for saving call notes in this manner is as follows:

- The naming convention ""`Customer` - Meeting Notes" allows for fast searching using [Google Cloud Search for Work](https://cloudsearch.google.com/)
- Call notes frequently contain sensitive information and are for the internal sales team and management to review and should be kept in a place everyone who might need access can find them.
- A folder structure allows non-Customer Success executives and support staff to easily locate the notes in the case of an escalation.
- Call notes are tightly linked to the [health score](/handbook/customer-success/csm/health-score-triage/) and should be available for reference in the same location as the health scorecard in Gainsight.
- Access to Gainsight is limited to CSMs, so other members of the Sales and Customer Success organizations will look for notes in Google Drive.
- If a team member who created the Google Doc leaves GitLab, the notes will remain accessible to everyone, as they live in the shared Google Drive folder.

Customer call notes should also always be linked in the C360 for the account, under the "Summary" tab, in the "Account Attributes (Editable)" section, in the "Google Doc Notes" field.

When CSMs are logging calls in Gainsight [Timeline](/handbook/customer-success/csm/gainsight/timeline/), they need to copy & paste the link to the Google Doc. They should either write a simple summary of the meeting along with the link, or have the link be a direct deep link to the date the call happened, so as to not duplicate efforts.

At the end of each customer call any changes to customer health should be reflected in the customer's Gainsight account. You have a few ways to update the CSM Sentiment and Product Sentiment for an account's health score, described in [Determining CSM Sentiment and Product Risk](/handbook/customer-success/csm/health-score-triage/#determining-CSM-sentiment-and-product-risk), the easiest of which is updating it directly when logging the call.

### Best Practices for Note-Taking

- Write down your *agenda* (including questions you want to ask) in advance. This way you can quickly add your notes for the specific context.
- If you're comfortable in writing in [Markdown format](/handbook/markdown-guide/), use it to quickly structure your notes in real time.
- Allow yourself time directly after the call to clean up your notes. Avoid scheduling back-to-back meetings.
- Practice slowing down call conversations. Stopping the dialog for a few seconds to say “let me write that down” tells the customer what they said is important to you.
- Ask your SAE/AE/SA to take notes with you. After the meeting combine and add detail.
- Use [Chorus](/handbook/business-technology/tech-stack/#chorus) to record your calls so there's less pressure for you to take note of everything.
- Sometimes it makes sense for somebody on the [account team](/handbook/customer-success/account-team/) to go back through the call in Chorus to transcribe it.
- Write notes in whatever is easiest and always copy them to the source of truth meeting notes doc. If you can write them in the source of truth in the first place, you’ll be more efficient and consistent, and your account team will be able to follow along real-time.

## Cadence Call Topics

The below non-exhaustive list is simply suggestions for cadence calls, and other topics may be more important, so use the suggestions at your discretion.

There are two sections, [General Suggestions](/handbook/customer-success/csm/cadence-calls/#general-suggestions) is for topics that are good at any time, and [Ephemeral Suggestions](/handbook/customer-success/csm/cadence-calls/#ephemeral-suggestions) is for topics that are ephemeral, such as release-specific topics or requests from Product Managers.

### General Suggestions

These are suggestions that can be used at any time on customer calls.

- Follow up on previously discussed items
- Questions about their [strategic and business outcomes](/handbook/customer-success/csm/success-plans/questions-techniques/) and review of progress
- Periodically (a couple times per year) ask about new goals or objectives they have coming up
- Review upcoming features and releases
- Questions relating to [Stage Adoption](/handbook/customer-success/csm/stage-adoption/)
- Discovery questions about their usage, best practices, typical workflows, etc.
- Learn about the customer's preferred product areas by asking what they are mainly using in terms of tools, integrations, IDEs, languages, etc., in order to know what to highlight from new releases
- Discuss if there are any areas for user enablement or training
- Mention upcoming GitLab [workshops/events](https://about.gitlab.com/events/) in their region (or even ones in other regions)
- Questions about how they are leveraging other tools or integrations
- Updates on [customer requested features](/handbook/customer-success/csm/issue-prioritization/#cadence-calls)
- Discuss if their users have any feedback, pain points, or blockers
- Ask if there is anything the CSM can assist on towards resolution (feature requests, support tickets, etc.)
- Ask about any gaps in or outdated information in Gainsight (watch an [8 minute video](https://youtu.be/yk95b6u26So) for recommendations!)
- If self-managed, review their current version, planned upgrades, and if they need [Upgrade Assistance](https://about.gitlab.com/support/scheduling-upgrade-assistance/#how-do-i-schedule-upgrade-assistance)
- If self-managed, review if there are any planned, upcoming, or ongoing deployment changes (e.g. Geo, HA, etc.) and ensure they are familiar with support
- If self-managed, discuss their backup/recovery plans and if they have recently tested restoring from a backup
- If self-managed, discuss if they have [signups enabled](https://docs.gitlab.com/ee/administration/settings/sign_up_restrictions.html)
- If self-managed, raise the importance of GitLab Security patches and use it as an additional argument to enable usage/service ping reports of GitLab
- If self-managed, emphasize the importance of opting-in to security alerts
- If using a collaboration project, the CSM can configure a scheduled job to create agenda issues on a monthly frequency. Instructions for that are in each collaboration project's [instructions file](https://gitlab.com/gitlab-com/account-management/templates/customer-collaboration-project-template/-/blob/master/PLEASE-READ-THESE-INSTRUCTIONS.md).

### Ephemeral Suggestions

For more timely discussion topics, please refer to the [CSM Hot Sheet](https://gitlab.com/gitlab-com/customer-success/csm/-/wikis/CSM-Hot-Sheet) (GitLab internal link).
