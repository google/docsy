---
title: "Phishing Program"
---

{{% alert color="danger" title="Alert" %}}
If you suspect you've received a phishing email and have not engaged with the sender, please see: [What to do if you suspect an email is a phishing attack](#what-to-do-if-you-suspect-an-email-is-a-phishing-attack).
If you have engaged a phisher by replying to an email, clicking on a link, have sent and received text messages, or have purchased goods requested by the phisher, please [engage the Security Engineer on-call]({{< ref "engaging-security-on-call#phishing" >}}).
Further information on GitLab's security response program is described in our [Incident Response]({{< ref "sec-incident-response" >}}) guide.
{{% /alert %}}

## Phishing Program

The GitLab Phishing Program is designed to educate and evaluate GitLab's ability to detect and prevent phishing attempts. The goal of the program is to maintain up-to-date educational materials, provide ongoing training, and execute real-world simulations to provide GitLab Team Members the knowledge to identify, report, and block phishing attempts. Phishing simulations are provided by [ProofPoint](https://gitlab.ws01-securityeducation.com/), GitLab's third party provider, and will help satisfy external regulatory requirements and bolster customer assurance.

The Security Governance team coordinates with the following teams before a phishing simulation exercise:

- Security Incident Response Team (SIRT)
  - Responsible for triaging phishing emails
  - If they are made aware of a simulation they will provide the team member with additional instructions

- IT Operations/Team Member Enablement
  - Owner of GSuite (GitLab's email platform)

### Phishing Simulation Campaigns

Phishing simulations are an integral part of our overall security awareness education. The Security Governance team utilizes ProofPoint to generate and send simulated phishing emails to GitLab team members to assess their ability to identify phishing attempts. The goal is that TMs either report the phishing attempt (ideal behavior) or delete the email (acceptable behavior). TMs who click the link will automatically be assigned a phishing-specific training module, also via ProofPoint.

#### When will phishing simulations occur?

At a minimum, one phishing simulation campaign will take place each fiscal quarter. Prior to the phishing campaign's start, a general notification to the GitLab organization will be posted to the `#whats-happening-at-gitlab` Slack channel. However, for maximum efficacy, the exact content, date, time and team members receiving the email will not be communicated. Campaigns may contain various versions of the simulated email that will be delivered at random times throughout the 1-week campaign.

#### Who will receive the phishing simulations?

All GitLab team members, contractors and others with access to production data will be included in the quarterly campaigns with the exception of any individuals on extended leave at the time the campaign is launched.

#### What will a phishing simulation email look like?

The phishing simulation email from ProofPoint will appear as though it is originating from GitLab or a fictitious company. This email will look realistic/authentic in the attempt to engage the TM to click a link. We would love to show you what this looks like but that would defeat the purpose of the test.

#### How should I respond to the phishing simulation?

Just like with any suspected phishing or malicious email, follow the [handbook process](#what-to-do-if-you-suspect-an-email-is-a-phishing-attack) for reporting suspected phishing emails.  The preference for reporting phishing emails is Option 1 via PhishAlarm.

![PhishAlarm icon](/handbook/security/security-assurance/images/PhishAlarm.png)

#### What happens if I click the link?

In the event the link is clicked, the team member will be redirected to a landing page notifying them that this was part of a simulation. TMs will see a quick Teachable Moment and will be automatically enrolled in a short training assignment (also provided by ProofPoint). We want everyone to be as successful as possible and these quick trainings will guide and provide a few tips to help recognize malicious emails in the future. The trainings are quick interactive videos and completing them will help us with future training assessments.

#### Training Module

Our phishing partner, ProofPoint, curates and hosts the training modules which will be assigned upon when the link is clicked. The training is designed to reinforce and provide real world examples of detecting and reporting phishing. We highly encourage you to complete the training soon after being received as this will help to reinforce and better prepare you to spot phishing attempts in the future. The training modules are short and interactive and will be coming from awareness@securityeducation.com.

![Training assignment](/handbook/security/security-assurance/images/GitLabSecurityPhishingTraining.png)

If the training is not completed within 1 week, a reminder will be sent from ProofPoint. If required, the Security Governance team will communicate incomplete assigned training modules to managers for assistance with completion.  Demonstration of completed training supports compliance with the Phishing program and will strengthen our regulatory requirements.

### Simulation Result Outcomes

| Action                                 | Outcome |
| -------------------------------------- | ------- |
| Submitted email via PhishAlarm or directly to phishing@gitlab.com | No further action. |
| Did nothing with the email             | No further action.   |
| Clicked on the link                    | Training will be assigned  |

#### Phishing Simulation and Training Metrics

The Security Governance team will initiate and track the quarterly phishing simulation campaign within ProofPoint. Once the campaign has completed, the Security Governance team will provide non-identifying results in the [Phishing Program](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance/phishing) project.

### Questions and Answers

*I clicked the link in the email, what do I do?*

- Please complete the required training module you have been assigned as soon as possible. Knowing this is a phishing simulated email, please avoid discussing with anyone else or feel compelled to post a screenshot of the email received in Slack as it may skew the results of the phishing exercise.

*I didn't click the link in the email, what do I do?*

- Please forward the email via the <img alt="PhishAlarm button" src="/handbook/security/security-assurance/images/PhishAlarm.png" height="32" width=32> or as an attachment to phishing@gitlab.com using these [instructions](#what-to-do-if-you-suspect-an-email-is-a-phishing-attack). Knowing this is a phishing simulation, please avoid discussing with anyone else or feel compelled to post a screenshot of the email received in Slack as it may skew the results of the phishing exercise.

*I got assigned training without clicking the link in the email, what do I do?*

- Please reach out to Security Governance @sec-governance to report and review the steps that were taken prior to receiving the training to identify if this should be considered a false positive.  There are ways that the link can get triggered even if not directly clicked in the phishing email.  Security Governance can help troubleshoot what might have happened.

*NOTE*

- If the link provided in the phishing email is **NOT** clicked, but copy/pasted, that could also trigger the 'click', please refrain from trying to decipher the link.
- If [Option 3]({{< ref "handbook/security#option-3" >}}) is used to report an email, this could also trigger the 'click' as the tracking image could be cached by the ATP and proxy services.

Feel free to complete the assigned training and consider it as taking an extra step to stay secure!

*I use a physical Yubikey for multifactor authentication, why did I still fail the phishing simulation?*

- While a physical Yubikey or other token device used will prevent you from fully being phished, not all GitLab systems support these devices.  As this simulation exercise is for training and awareness, the goal is to test how GitLab team-members respond to these emails.

*I thought the Red Team was conducting the phishing exercises?*

- Correct! The Red Team was conducting our phishing exercises with a tool they built but unfortunately Google began identifying the exercises as malicious and were shutting them down quicker with each attempt.  This caused the phishing exercises to not be beneficial along with no results to work with.

*Why are we using an external vendor?*

- Due to our internally created solution being identified as malicious by Google, we needed to utilize an external solution that would be able to provide a consistent process and reliable results, which resulted in our partnership with ProofPoint.

*Who decides who receives these phishing simulations?*

- All GitLab team members, contractors and others with access to production data will be included in the quarterly campaigns with the exception of any individuals on extended leave at the time the campaign is launched.

*How often will I receive these?*

- At a minimum, one phishing simulation campaign will take place each fiscal quarter. Prior to the phishing campaign's start, a general notification to the GitLab organization will be posted to the `#whats-happening-at-gitlab` Slack channel. However, for maximum efficacy, the exact content, date, time and team members receiving the email will not be communicated. Campaigns may contain various versions of the simulated email that will be delivered at random times throughout the 1-week campaign.

*I don't want to be included, how do I remove myself?*

- All GitLab team members have the responsibility to help keep themselves, team members, customers and the company secure. As such, team members can not opt out.

*Is this an invasion of privacy?*

- The phishing program is covered by the [Employee Privacy Policy](/handbook/legal/privacy/employee-privacy-policy/).

*Will I be publicly shamed?*

- No, we will never post or create metrics which will associate a team member success or failure with a phishing simulation exercise.  We will generate non-identifying metrics to be shared internally and public-facing.

*I never fall for the phishing simulations received, why am I still receiving these simulation emails?*

- Unfortunately, phishing emails continue to improve in deception and the ability to look genuine.  By receiving phishing simulations your ability to spot the real thing is an invaluable skill to help protect yourself, team members, GitLab, and the customer.

*How can I provide Feedback on my experience?*

- All feedback is welcome and encouraged in [this issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance/phishing/-/issues/10).  The only way to continuously improve on our program is via feedback.

## How to identify a basic phishing attack

When you receive an email with a link, hover your mouse over the link or view
the source of the email to determine the link's true destination.

If you hover your mouse cursor over a link in Google Chrome it will show you
the link destination in the status bar at the bottom left corner of your browser
window.

![Hover Example](/handbook/security/security-assurance/images/hover-status-bar-example-chrome.png)

In Safari the status bar must be enabled to view the true link destination
(View -> Show Status Bar).

Some examples or methods used to trick users into entering sensitive data into
phishing forms include:

- Using HTTP(S) with a hostname that begins with the name of a trusted
site but ends with a malicious site.

![Malicious Domain](/handbook/security/security-assurance/images/malicious-domain.png)

- Using a username or password inside the request that corresponds to the name
of a trusted domain and assuming the viewer won't view the whole URL.

![Trick Username](/handbook/security/security-assurance/images/username-password.png)

- Using a data URI scheme instead of HTTP(S) is a particularly devious means of
tricking users. Data schemes allow the embedding of an entire web page inside
the URI itself. Data schemes will not show the typical green lock in the address
bar of a browser that is customarily associated with a verified SSL connection.

![Data Scheme](/handbook/security/security-assurance/images/data-scheme.png)

When viewing the source of an HTML email it is important to remember that the
text inside the "HREF" field is the actual link destination/target and the text
before the `</A>` tag is the text that will be displayed to the user.

`<a href="http://evilsite.example.org">Google Login!</a>`

In this case, "Google Login!" will be displayed to the user but the
actual target of the link is "evilsite.example.org".

After clicking on a link always look for the green lock icon and "secure" label
that signify a validated SSL service. This icon alone is not enough to verify the
authenticity of a website, however the lack of the green icon does mean you
should never enter sensitive data into that website.

![Green Lock Example](/handbook/security/security-assurance/images/green-lock-example.png)

### What to do if you suspect an email is a phishing attack

If you think an email is suspicious, it may be a phishing attempt targeted at you or GitLab, or it may be a security test. Please report the email to Security by using the ***PhishAlarm*** button in Gmail. It is located in the right hand sidebar of your Gmail workspace. If you don't see the button, the right hand sidebar may be collapsed and you'll need to click the arrows at the bottom right hand corner of the window to expand the sidebar.

If you are on a mobile device and using the Gmail app, the PhishAlarm button is toward the bottom of your Gmail app, in the available add-ons section.

If you are using another email client, you may not be able to submit the email using the PhishAlarm button. In this case, you may manually submit the phishing email by forwarding it to `phishing@gitlab.com`.

{{% note %}}
Forwarding phishing emails to `phishing@gitlab.com` requires additional steps by following the [manual submission instructions](#manual-submission-of-phishing-email-to-phishinggitlabcom) below.
{{% /note %}}

If you use the `Report Phishing` button at the top right of the Gmail client, this will also require you to follow the [manual submission instructions](#manual-submission-of-phishing-email-to-phishinggitlabcom) below. This is because the `Report Phishing` button by Gmail does not provide our security team with the email itself, and only provides us with a notification.

#### Submission of phishing email via PhishAlarm

PhishAlarm is found on the right side panel in Gmail. You can hide or show this panel by clicking on the > or < symbol on the bottom right corner of your web browser window

To submit an email via PhishAlarm to GitLab's Security Team using Gmail:

1. Select the PhishAlarm icon on the right-hand side toolbar in Gmail
1. Follow the instructions to report the Phish
1. Confirm you are ready to report the Phishing email
1. Receive a confirmation that the email has been forwarded to GitLab Security Team for further investigation.

![PhishAlarm](/handbook/security/PhishAlarm-icon.png)

#### Manual submission of phishing email to `phishing@gitlab.com`

To forward the email as an attachment to GitLab's Security Team using Gmail:

1. From a computer (not a mobile device) right click the email
1. Select `Forward as attachment`
1. Send it to `phishing@gitlab.com`

### CEO & Executive Fraud

The CEO (and Executive team) will not send you an email to wire cash, or a text message to ask for gift cards, or anything else that feels like a [CEO fraud or CEO scam](https://www.knowbe4.com/ceo-fraud). These types of spear attack events will be more common as we grow. Feel free to verify any unusual requests via the #ceo Slack channel.

What should you do if you receive a potential phishing email or text [\(smishing\)](https://www.proofpoint.com/us/threat-reference/smishing) from GitLab's CEO?

1. If you are unsure whether the text or email is legitimate, contact [Security]({{< ref "." >}}) to review, and confirm via the #ceo Slack channel.
1. If the email is determined to be fake, follow the instructions for [phishing attacks]({{< ref "phishing#what-to-do-if-you-suspect-an-email-is-a-phishing-attack" >}}) below.
1. If the text, including those received on apps like WhatsApp or Signal, is determined to be fake: block the number, notify [Security](/handbook/security/#-contacting-the-team), and delete the text.

- If using iOS, [report the message as spam or junk](https://support.apple.com/guide/iphone/block-filter-and-report-messages-iph203ab0be4/ios)

### Suspicious LinkedIn profiles

Team members can [verify their employment at GitLab on LinkedIn](https://www.linkedin.com/help/linkedin/answer/a1423367).

If a person on LinkedIn claims to work at GitLab:

1. Look for a verification badge on their LinkedIn profile. It should read `GitLab: Verified using work email`.
1. Look up their name on Workday, which is our Single Source of Truth for current team members. Note that alumni and those who have not yet joined GitLab will not appear in Workday.

If you believe that the profile has inaccurate information, [report inaccurate information on another member's LinkedIn profile](https://www.linkedin.com/help/linkedin/answer/a1337291). If the user reaches out to you with a suspicious work-related message please
[use the `/security` Slack command]({{< ref "engaging-security-on-call#engage-the-security-engineer-on-call" >}}).

### What to do if you suspect something else is suspicious

Phishing and other social engineering attacks aren't only sent via email.
You might receive a suspicious text / SMS message, a weird Direct Message on social
media platforms like LinkedIn, or a phone call. If it's work related, please
[use the `/security` Slack command]({{< ref "engaging-security-on-call#engage-the-security-engineer-on-call" >}}).
Even if you're unsure or it feels insignificant, you can always ask in the #security Slack channel.

### Additional Questions, Comments, Concerns?

Please reach out to the [Security Governance team!]({{< ref "governance" >}})
