---
title: "Zendesk for GitLab Developer Relations"
---

## Developer Relations Zendesk instance

![Mentions in Zendesk](/images/handbook/marketing/developer-relations/zendesk.jpg)

The Developer Relations team uses a [dedicated Zendesk instance](https://gitlab-community.zendesk.com/) to centralize the management of relevant community mentions, and to process Education Program, Open Source Program, and Startup Program applications and requests. This instance is separate from [other Zendesk instances GitLab uses](/handbook/support/readiness/operations/docs/zendesk/#instances).

The majority of cases in Zendesk are routed there via [Zapier automation](/handbook/marketing/developer-relations/workflows-tools/zapier/), or a native Zendesk integration.

Each case is then converted into a Zendesk ticket and filtered into a [View](#zendesk-views), ordered by category. As part of their daily workflow, the Community Operations Team, and the Education and Open Source Program Managers monitor these views and process tickets through completion.

### Zendesk subscription

After [a discussion with the GitLab Support team](https://gitlab.com/gitlab-com/support/support-team-meta/issues/1583), it was concluded that for the specific Developer Relations workflows and metrics it would be best to keep the [Developer Relations Zendesk instance](https://gitlab-community.zendesk.com/) separate from the [Support team's Zendesk instance](https://support.gitlab.com).

The Developer Relations instance runs on a [Professional Zendesk Support](https://www.zendesk.com/product/pricing/#support_pricing) subscription, with one _Agent_ seat per Developer Relations team member, plus extra seats for the team manager and collaborators. Additionally, the [Collaboration Add-on](https://support.zendesk.com/hc/en-us/articles/4408846501402-Understanding-and-setting-light-agent-permissions) provides us extra seats for _Light Agents_ with read-only access to tickets.

#### Adding new agent seats to existing subscription

- If there is a need to increase the number of agent seats, contact the GitLab Account Manager at Zendesk. Their details are in the `Developer Relations - Zendesk contact` secure note in 1Password, on the Marketing vault.
- [Account billing details](https://gitlab-community.zendesk.com/admin/billing/subscription) (only accessible by the Zendesk instance owner)

After the initial contact and agreeing to the subscription plan update:

1. The GitLab Account Manager at Zendesk sends the unsigned service order to the DRI at GitLab via e-mail.
1. DRI submits a finance issue following the [Procure to pay process](/handbook/finance/procurement/), attaching the unsigned service order. See this [existing subscription add-on issue](https://gitlab.com/gitlab-com/finance/-/issues/2295) for reference.
1. DRI works with stakeholders to complete the approval chain
1. DRI reaches back to the GitLab Account Manager at Zendesk and asks them to:
   1. Please send the DocuSign contract to our CFO to sign. His e-mail address is: `{ADD_CFO_EMAIL}`
   2. Please add the comment: "Approved by GitLab at `{ADD_FINANCE_ISSUE_LINK}`" to the DocuSign e-mail
   3. Please add me as CC on the DocuSign document so that I have visibility of it and get a notification when it's been signed by GitLab
1. DRI uploads signed contract to ContractWorks after CFO signature.

### Zendesk access

Zendesk access is provided during onboarding for members of the Developer Relations team when needed. Access as an Agent (read/write access to tickets) or a Light Agent (read-only access to tickets) can also be provided for other team members using the [access request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) process if needed.

Once access is set up:

1. Go to [https://gitlab-community.zendesk.com](https://gitlab-community.zendesk.com)
1. Log in as "Agent" via SSO and your GitLab Google Workspace account.

### Provisioning agents

To add an Agent:

1. Log into Zendesk
1. Go to [`Settings > Manage > People`](https://gitlab-community.zendesk.com/agent/admin/people)
1. Click on [`add agent`](https://gitlab-community.zendesk.com/agent/users/new)
1. Fill in name and e-mail address
1. Choose the role, either `Agent` (read/write access to tickets) `Light Agent` (read-only access to tickets, but can leave internal notes)
1. Click `Add`
1. Choose the relevant groups for the new agent, and optionally set their time zone

### Deprovisioning agents or changing roles

To find a user account and edit their status:

1. Log into Zendesk
1. Go to [`Settings > Manage > People`](https://gitlab-community.zendesk.com/agent/admin/people)
1. Enter their e-mail on the search box and click on `Search`
1. When the user appears on the list of results, click on `Edit`

To change the role for an account (e.g. promote or demote as Admin):

1. Follow steps above to find a user account and edit status
1. Click on the `Role` dropdown on the left
1. Select the appropriate role. The status is saved automatically upon change.

To deprovision (remove agent status):

1. Follow steps above to find a user account and edit status
1. Click on the `Role` dropdown on the left
1. Set the role to `End User` (no read/write access). The status is saved automatically upon change.

## Zendesk views

### View limits workaround

![Views in Zendesk](/images/handbook/marketing/developer-relations/zendesk-views.jpg)

There is a [limit on the number of views](https://support.zendesk.com/hc/en-us/articles/4408893247002-Can-I-display-all-my-personal-ticket-views) that can be displayed on the main "Views" panel on Zendesk, regardless of the type of subscription:

- 12 shared views
- 8 personal views

If the number of views exceeds these limits, the additional views are moved to the `Settings > Views` panel. As the Community Operations Manager makes use of the shared views feature, and as the number of response channels already exceeds the limit of 12, this poses a hindrance on ticket visibility and effectivity.

As a workaround, the team has decided to standardize our personal views, thus effectively increasing the number of visible Views to 20. If the number of response channels exceed the count of 20, an alternative approach could be to consolidate some of the existing views –a practice already followed where it makes sense (e.g. E-mail view).

The workaround is based on two steps: creating a shared view, which then can be cloned as a personal view.

#### Creating new shared views

To create a new shared view:

1. Navigate to `Settings > Views`
1. Click on the `Add view` button or clone an existing shared view
1. Set up or modify the filter conditions if necessary
1. On `Available for`, choose `All agents`
1. Inform the rest of the team about the availability of the new view

#### Cloning shared views as personal views

To create a personal view from a shared view:

1. Navigate to `Settings > Views`
1. In the views list, hover over the right hand side of view you want to clone
1. Click on the ellipsis to open the context menu
1. Choose `Clone`
1. Do not modify the filter conditions
1. On `Available for`, choose `Me only`

## Zendesk macros

A macro is similar to an email template and consists of one or more actions that modify the values of a Zendesk ticket's fields. Macros are applied to tickets manually from the drop down within each message.

While macros provide template responses, please keep in mind that the goal is to personalize each response as much as possible in order to provide excellent service to our community.

Macros can perform the following tasks:

- Add comment text
- Update ticket fields
- Add or remove ticket tags
- Add CCs
- Change the assignee
- Set the ticket subject
- Add attachments to ticket comments

### Creating macros

There are two types of macros: personal macros (created by an agent or administrator for their own use) and shared macros (created by an administrator with permission for multiple users).

Please make sure to focus on creating shared macros since we want to keep all the info transparent and available to the whole team.

Tips:

- If you are creating a new Macro, open an existing one in another tab so you can see the formatting and all of the `Actions` you should add.
- If you think you need Admin access, let your manager know.
- Without Admin access, you can create Macros that are available only to you (e.g a Macro with your personal email signature).

#### Creating personal macros

Although only administrators can create the macros that are shared by all, we can also create personal macros. A personal macro is only visible to and can only be used or modified by the creator.

1. Click the **Admin** icon in the sidebar, then select **Macros**.
1. Click the **All shared macros** drop-down menu and select **Personal macros**.
1. Click the **Add macro** button.
1. Enter the macro name, and add actions for your macro as described in Building macro action statements.
1. Click **Create**.

#### Creating shared macros

Administrators (and agents in custom roles with permission) can create macros that are shared by all Zendesk Support agents or macros that are shared by only agents in a specific group. Administrators can also create personal macros for their own use.

A personal macro is only visible to and can only be used or modified by the creator. Administrators can create shared macros, and can modify all shared macros, regardless of who created them.

1. Click the **Admin icon** in the sidebar, then select **Macros**.
1. Click the **Add macro** button.
1. Enter a **Macro name.**
1. (Optional) Enter a **Description.**
1. Select an option from the Available for menu:
   - **All agents**, available to all agents.
   - **Agents in group**, available only to agents in the group specified. A drop-down menu to choose the group appears when you select this option.
   - **Me only**, available only to you.
1. Under **Actions**, use the drop-down menus to add actions for your macro as described in Building macro action statements.
   - If you choose the Comment/description macro action, and you have rich text formatting enabled, you can add formatting and inline images and you can add attachments to your macro comments.
1. Click **Create**.

### Applying macros

You can manually apply one or more macros to a ticket. Just as you can make bulk updates to many tickets at once, you can also apply a macro to more than one ticket using your views.

A typical use case is a ticket that contains more than one question or issue, let's say two in this example. You might have set up two macros that both insert a comment into a ticket to answer each issue separately. By applying each macro to the ticket, you add two comments and address both issues in a single response.

1. In a ticket , click the **Apply macro** button in the bottom toolbar.
1. Typically, your five most commonly used macros from the past week appear at the top of the macros list.
   - You can select one of these, begin typing the name of the macro, or scroll through the list to find the one you want to use.
1. The actions defined in the macro will be applied. If the macro updated the ticket comment, you can edit the text before submitting the ticket.
1. To apply another macro, click **Apply macro** again and select another macro.

### Previewing macros

There is an option to view a description of a macro, and preview the update it will make to a ticket, before applying it.

1. In a ticket, click the **Apply macro** button in the bottom toolbar.
1. Scroll through the list to locate the macro you want to use.
1. Hover your cursor over the macro to display its description tooltip.
   - If the macro does not have a description, the tooltip does not appear.
1. If the description matches the macro you want to apply, click on it to use it.

### Current macro stack (click link for macro details)

#### Common Requests

- [Application Form Not Visible](https://gitlab-community.zendesk.com/agent/admin/macros/360201168713)
- [Authenticating Gold](https://gitlab-community.zendesk.com/agent/admin/macros/360189027133)
- [Delayed Response](https://gitlab-community.zendesk.com/agent/admin/macros/360193347174)
- [e-signature request via eSertifi (Salesforce)](https://gitlab-community.zendesk.com/agent/admin/macros/360185063134)
- [Error with processing application (Salesforce error)](https://gitlab-community.zendesk.com/agent/admin/macros/360185790533)
- [Handing off to sales team (Send via Gmail)](https://gitlab-community.zendesk.com/agent/admin/macros/1500000230181)
- [Internal Support Ticket Filed](https://gitlab-community.zendesk.com/agent/admin/macros/360191563234)
- [License Update](https://gitlab-community.zendesk.com/agent/admin/macros/360123733094)
- [Pandemic response](https://gitlab-community.zendesk.com/agent/admin/macros/360200775714)
- [Redirect Technical Support Question to Forum (Support)](https://gitlab-community.zendesk.com/agent/admin/macros/360188232354)
- [Request modification to our terms](https://gitlab-community.zendesk.com/agent/admin/macros/1500000227382)
- [Send Quote via Email](https://gitlab-community.zendesk.com/agent/admin/macros/360176681533)
- [Ultimate license download instructions](https://gitlab-community.zendesk.com/agent/admin/macros/360166084033)

#### EDU

- [EDU new application approval Zendesk notification](https://gitlab-community.zendesk.com/agent/admin/macros/360153975673)
- [EDU Renewal quote sent Zendesk notification](https://gitlab-community.zendesk.com/agent/admin/macros/360200857954)
- [Basic info on EDU program](https://gitlab-community.zendesk.com/agent/admin/macros/360154595694)
- [Collecting EDU qualification info](https://gitlab-community.zendesk.com/agent/admin/macros/360153974973)
- [EDU Announcement](https://gitlab-community.zendesk.com/agent/admin/macros/360153769634)
- [EDU General Rejection](https://gitlab-community.zendesk.com/agent/admin/macros/360163532973)
- [EDU Rejecting Students](https://gitlab-community.zendesk.com/agent/admin/macros/1500000261901)
- [EDU Renewal Thank You](https://gitlab-community.zendesk.com/agent/admin/macros/360172552854)
- [EDU Requesting Email Domain](https://gitlab-community.zendesk.com/agent/admin/macros/360163532713)
- [EDU Requesting Non-Profit Verification](https://gitlab-community.zendesk.com/agent/admin/macros/360164059254)
- [EDU Requesting Renewal Information](https://gitlab-community.zendesk.com/agent/admin/macros/360153991853)
- [EDU Welcome](https://gitlab-community.zendesk.com/agent/admin/macros/360172071893)
- [Second email asking for participants data](https://gitlab-community.zendesk.com/agent/admin/macros/1500000272041)

#### NP

- [Non-Profit Application](https://gitlab-community.zendesk.com/agent/admin/macros/360136464914)

#### Ops

- [CoC Violation:: Unable to moderate](https://gitlab-community.zendesk.com/agent/admin/macros/360164875354)
- [Email::Hackathon](https://gitlab-community.zendesk.com/agent/admin/macros/360154601634)
- [Email::Meetups](https://gitlab-community.zendesk.com/agent/admin/macros/360153984113)
- [Free CI/CD Update](https://gitlab-community.zendesk.com/agent/admin/macros/360179554213)

#### OSS

- [Clarifying "not-seeking-profit" req and Qualification Examples](https://gitlab-community.zendesk.com/agent/admin/macros/360195925454)
- [OSI-approved license](https://gitlab-community.zendesk.com/agent/admin/macros/1500000420222)
- [OSS Announcement](https://gitlab-community.zendesk.com/agent/admin/macros/360158992874)
- [OSS Basic Program Information](https://gitlab-community.zendesk.com/agent/admin/macros/360164061114)
- [OSS new app need more info](https://gitlab-community.zendesk.com/agent/admin/macros/360185569093)
- [OSS new application approval (Zendesk notification)](https://gitlab-community.zendesk.com/agent/admin/macros/360165039654)
- [OSS Rejection](https://gitlab-community.zendesk.com/agent/admin/macros/360163534313)
- [OSS Renewal quote sent (Zendesk notification)](https://gitlab-community.zendesk.com/agent/admin/macros/360185821293)
- [OSS Renewal Reminder and Request for Info](https://gitlab-community.zendesk.com/agent/admin/macros/360163533093)
- [OSS Welcome (new applicants)](https://gitlab-community.zendesk.com/agent/admin/macros/360172553434)
- [OSS Welcome (Renewals)](https://gitlab-community.zendesk.com/agent/admin/macros/360186979653)
- [Qualification error, OSS federal exception rejection, and sales intro](https://gitlab-community.zendesk.com/agent/admin/macros/360187559453)

#### Startups

- [Need info about product and seats](https://gitlab-community.zendesk.com/agent/admin/macros/360188513974)
- [Providing basic program information](https://gitlab-community.zendesk.com/agent/admin/macros/360200720594)
- [Qualification for program](https://gitlab-community.zendesk.com/agent/admin/macros/360198446694)
- [Renewal request sales handoff](https://gitlab-community.zendesk.com/agent/admin/macros/360196880374)
- [Startup Rejection](https://gitlab-community.zendesk.com/agent/admin/macros/360179559553)
- [Startups Welcome](https://gitlab-community.zendesk.com/agent/admin/macros/360185360393)

#### Swag

- [Ask Customer to Contact Printfection](https://gitlab-community.zendesk.com/agent/admin/macros/360171861874)
- [Lost Order](https://gitlab-community.zendesk.com/agent/admin/macros/360156481553)
- [Out of Stock](https://gitlab-community.zendesk.com/agent/admin/macros/360157092654)

## Sending emails through Zendesk

Emails sent to [our list of contact emails](/handbook/marketing/developer-relations/program-resources/#contact-e-mails) create a new ticket in Zendesk, and public comments in Zendesk are sent as an email from that contact email back to the recipient.

There are instances where it is necessary to change the email address of the recipient, the sender, or both, which can be done through Zendesk.

### Changing the email recipient

1. Click `(change)` next to the recipient's email address at the top of the ticket. Alternatively, you can click the 👤 symbol on the left pane to bring up the `Requester` field.
   ![Change recipient step 1](/images/handbook/marketing/developer-relations/zendesk-emails/recipient-1.png)
2. This will open the `Requester` panel on the left side. Paste the new email address in the `Requester` field.
   ![Change recipient step 2](/images/handbook/marketing/developer-relations/zendesk-emails/recipient-2.png)
3. If their email address is already in Zendesk, the record will show up, which you can select.
   ![Change recipient step 3](/images/handbook/marketing/developer-relations/zendesk-emails/recipient-3.png)
4. If their email isn't in Zendesk, add them as a new user.
   1. Click `Add new user`
   1. Add their name and email to the corresponding fields
   1. Select `End User` as the role
   1. Click `Add`

   ![Change recipient step 4b](/images/handbook/marketing/developer-relations/zendesk-emails/recipient-4b.png)
   ![Change recipient step 4a](/images/handbook/marketing/developer-relations/zendesk-emails/recipient-4a.png)

5. If the email has been successfully changed, the new recipient will show up at the top of the ticket.
   ![Change recipient step 5](/images/handbook/marketing/developer-relations/zendesk-emails/recipient-5.png)

### Changing the email sender

1. Check what email address is currently used to send replies from at the top of the ticket. It will say `Via {email address}`
   ![Change sender step 1](/images/handbook/marketing/developer-relations/zendesk-emails/sender-1.png)
2. On the top-right of Zendesk underneath your profile picture, click `Apps`
   [Change sender step 2](/images/handbook/marketing/developer-relations/zendesk-emails/sender-2.png)
3. The app panel on the right-hand side will open up. Click the dropdown next to `Select an Email`
   ![Change sender step 3](/images/handbook/marketing/developer-relations/zendesk-emails/sender-3.png)
4. Select the email address you want to send the email from via the drop-down [list of email addresses](/handbook/marketing/developer-relations/program-resources/#contact-e-mails).
   ![Change sender step 4](/images/handbook/marketing/developer-relations/zendesk-emails/sender-4.png)
5. If the sender address has been successfully changed, a notification saying `This ticket will be sent from {email address}` will pop up by the `Apps` tab, and the field at the top of the ticket will change.
   ![Change sender step 5](/images/handbook/marketing/developer-relations/zendesk-emails/sender-5.png)
