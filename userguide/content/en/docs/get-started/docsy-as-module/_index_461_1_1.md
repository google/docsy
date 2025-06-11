---
title: Security at GitLab
# See https://www.docsy.dev/docs/adding-content/content/#docs-section-landing-pages
no_list: true
---

## <i class="fas fa-rocket" id="biz-tech-icons"></i> Security Vision and Mission

Our vision is to transparently lead the world to secure outcomes.

Our mission is to enable everyone to innovate and succeed on a safe, secure, and trusted DevSecOps platform. This will be achieved through 5 security operating principles:

1. Accelerate business success with a focus on:
   - Prioritize 'boring', iterative solutions that minimize risk
   - Find ways to say Yes
   - Understand goals before recommending solutions
   - Use GitLab first
1. Efficient operations with a focus on:
   - Technical controls over handbook rules
   - Leverage automation first (robots over humans)
   - Responsible decisions (Spending, Tooling, Staffing, etc) over low ROI (return on investment) decisions
   - Reusable or repeatable over singular solutions
1. Transparency with a focus on:
   - Responsible protection of MNPI (material non-public information)
   - Evangelize [dogfooding](/handbook/values/#dogfooding) of GitLab publicly
   - Lead with metrics
   - Balance security with usefulness
1. Risk Reduction with a focus on:
   - Secure by default
   - Preventative controls over detective controls
   - Solving root causes over treating symptoms
   - Visibility through Coverage, Discoverability, Observability
1. Collaborative Culture with a focus on:
   - Working together on common solutions
   - Solve shared problems with shared solutions
   - Simplifying language for everyone to understand
   - Avoiding security jargon
   - Seek opportunities to help others succeed

To help achieve the vision of transparently leading the world to secure outcomes, the Security Division has nominated a [Security Culture Committee](/handbook/security/security-culture/).

### Division Structure

The Security Division provides essential security operational services, is directly engaged in the development and release processes, and offers consultative and advisory services to better enable the business to function while minimising risk.

To reflect this, we have structured the Security Division around four key tenets, which drive the structure and the activities of our group. These are :

<table id="Sub-Departments">
  <tr>
    <th class="text-center">
        <i class="fas fa-bullseye i-bt"></i>
        <h5><a href="product-security/">Product Security</a></h5>
    </th>
    <th class="text-center">
        <i class="fas fa-shield-alt i-bt"></i>
        <h5><a href="security-operations/">Security Operations</a></h5>
    </th>
    <th class="text-center">
        <i class="fas fa-shield-alt i-bt"></i>
        <h5><a href="/handbook/security/corporate/">Corporate Security</a></h5>
    </th>
    <th class="text-center">
        <i class="fas fa-hands-helping i-bt"></i>
        <h5><a href="security-assurance/">Security Assurance</a></h5>
    </th>
  </tr>
  <tr>
      <td>
        <ul>
            <li><a href="product-security/application-security/">Application Security</a></li>
            <li><a href="product-security/infrastructure-security/">Infrastructure Security</a></li>
            <li><a href="product-security/security-platforms-architecture/">Security Platforms and Architecture</a></li>
            <li><a href="product-security/vulnerability-management/">Vulnerability Management</a></li>
            <li><a href="product-security/data-security/">Data Security</a></li>
            <li><a href="security-operations/security-logging/">Security Logging</a></li>
        </ul>
      </td>
      <td>
        <ul>
            <li><a href="security-operations/sirt/">Security Incident Response Team (SIRT)</a></li>
            <li><a href="security-operations/trustandsafety/">Trust and Safety</a></li>
            <li><a href="security-operations/red-team/">Red Team</a></li>
            <li><a href="security-operations/threat-intelligence/">Threat Intelligence</a></li>
            <li><a href="security-operations/signals-engineering/">Signals Engineering</a></li>
        </ul>
      </td>
      <td>
        <ul>
            <li><a href="/handbook/security/corporate/">Corporate Security</a></li>
            <li><a href="/handbook/security/corporate/support">Helpdesk Support</a></li>
            <li><a href="/handbook/security/corporate/systems">Tech Stack Systems</a></li>
            <li><a href="/handbook/security/corporate/team/#functional-org-chart">Engineering Teams</a></li>
        </ul>
      </td>
      <td>
        <ul>
            <li><a href="security-assurance/field-security/">Field Security</a></li>
            <li><a href="security-assurance/security-compliance/">Security Compliance</a></li>
            <li><a href="security-assurance/governance/">Security Governance</a></li>
            <li><a href="security-assurance/security-risk/">Security Risk</a></li>
        </ul>
      </td>
  </tr>
</table>

#### Secure the Product - The Product Security Department

The [Product Security Department](/handbook/security/product-security/) is primarily focused on Securing the Product. This reflects the Security Division's current efforts to be involved in the Application development and Release cycle for Security Releases, Infrastructure Security, and our HackerOne bug bounty program.

The term "Product" is interpreted broadly and includes the GitLab application itself and all other integrations and code that is developed internally to support the GitLab application for the multi-tenant SaaS. Our responsibility is to ensure all aspects of GitLab that are exposed to customers or that host customer data are held to the highest security standards, and to be proactive and responsive to ensure world-class security in anything GitLab offers.

#### Protect the Company - The Security Operations Department

[Security Operations Department](/handbook/security/security-operations/) teams are primarily focused on protecting GitLab the business and GitLab's platform. This encompasses protecting company property as well as to prevent, detect and respond to risks and events targeting the business and our platform. This department includes the Security Incident Response Team (SIRT) and the Trust and Safety team.

These functions have the responsibility of shoring up and maintaining the security posture of GitLab's platform to ensure enterprise-level security is in place to protect our new and existing customers.

#### Lead with Data - The Threat Management Department

[Threat Management Department](/handbook/security/threat-management/) teams are cross-functional. They are responsible for collaborating across the Security Division to identify, communicate, and remediate threats or vulnerabilities that may impact GitLab, our Team Members or our users and the community at large.

#### Assure the Customer - The Security Assurance Department

The [Security Assurance Department](/handbook/security/security-assurance/) is comprised of the teams noted above. They target Customer Assurance projects among their responsibilities. This reflects the need for us to provide resources to our customers to assure them of the security and safety of GitLab as an application to use within their organisation and as a enterprise-level SaaS. This also involves providing appropriate support, services and resources to customers so that they trust GitLab as a Secure Company, as a Secure Product, and Secure SaaS

#### Protect the Organization - Corporate Security

GitLab is both a company and a product. The [Corporate Security](/handbook/security/corporate/) department focuses on implementing and protecting the information technology (IT) related systems that the company uses to conduct business internally, and provides the hardware, software, and tools that our team members and 3rd party service providers (aka contractors) need to be productive and get their job done efficiently. The configurations that we implement for team members internally are designed to protect our customers and their data.

We have a 24x5 [technical support helpdesk](/handbook/security/corporate/support) for team members and have engineers that configure and maintain many of our company-wide [tech stack applications](/handbook/security/corporate/systems).

We invest heavily in [device trust, identity management, and infrastructure governance](/handbook/security/corporate/team/#functional-org-chart) to provide the highest level of security assurance for the administrators of our product and ensure all appropriate controls are in place when handling customer data.

#### Other groups and individuals

##### Security Program Management

Security Program Management is responsible for complete overview and driving security initiatives across Product, Engineering, and Business Enablement. This includes the tracking, monitoring, and influencing priority of significant security objectives, goals, and plans/roadmaps from all security sub-departments.  [Security Program Manager Job Family](/job-families/security/security-program-manager/)

###### Security Program areas of focus

- Drive Accountability & Visibility for Program Objectives & Goals
- Drive, Gather, & Examine Program Needs & Opportunities through Intra & Inter Organizational Collaboration
- Provide Insights & Suggestions Impacting Program Strategy & Roadmap
- Assist in Gathering & Prioritizing Program Risks, Requirements, & Alignment to Influence Remediation
- Drive & Define Acceptance Criteria, Value Proposition, Milestones to Visualize and Communicate Program Effectiveness
- Develop Repeatable, Scalable, Efficient, Effective, Processes & Procedures

### Product development

In keeping with our [core values](/handbook/values/) and the belief that [everyone can contribute](/handbook/company/mission/#contribute-with-gitlab), the Security Division is committed to [dogfooding](/handbook/values/#dogfooding) and contributing to the development of the GitLab product.

---

### <i id="biz-tech-icons" class="fas fa-users"></i> Contacting the Team

#### Reporting vulnerabilities and security issues

For information regarding GitLab's [HackerOne bug bounty program](/handbook/security/product-security/application-security/runbooks/hackerone-process/), and creating and scheduling security issues, please see our [engaging with security](/handbook/security/engaging-with-security/) page and our [Responsible Disclosure Policy](https://about.gitlab.com/security/disclosure/).

#### Reporting an Incident

If an urgent security incident has been identified or you suspect an incident may have occurred, please refer to [Engaging the Security Engineer On-Call](/handbook/security/security-operations/sirt/engaging-security-on-call/).  Examples include, but are not limited to:

- Lost or stolen devices
- Leaked credentials
- Endpoint compromise or infection
- Exposure of sensitive GitLab data

GitLab provides a `panic@gitlab.com` email address for team members to use in situations when Slack is inaccessible and immediate security response is required.

This email address is only accessible to GitLab team members and can be reached from their gitlab.com or personal email address as listed in Workday. Using this address provides an excellent way to limit the damage caused by a loss of one of these devices.

Additionally if a GitLab team member experiences a personal emergency the People Group also provides an [emergency contact email](/handbook/people-group/#in-case-of-emergency).

#### Sub-groups and projects

Many teams follow a convention of having a GitLab group `team-name-team` with a primary project used for issue tracking underneath `team-name` or similar.

- [@gitlab-com/gl-security](https://gitlab.com/gitlab-com/gl-security/) is used for @'mentioning the entire Security Division
- [@gitlab-com/gl-security/security-managers](https://gitlab.com/gitlab-com/gl-security/security-managers) is used for @'mentioning all managers in the Security Division
- [Security Division Meta](https://gitlab.com/gitlab-com/gl-security/security-department-meta/) is for Security Division initiatives, `~meta` and backend tasks, and catch all for anything not covered by other projects
- [Security Assurance (@gitlab-com/gl-security/security-assurance)](https://gitlab.com/gitlab-com/gl-security/security-assurance)
  - [@gitlab-com/gl-security/security-assurance/sec-compliance](https://gitlab.com/gitlab-com/gl-security/compliance)
  - [@gitlab-com/gl-security/security-assurance/field-security-team](https://gitlab.com/gitlab-com/gl-security/security-assurance/field-security-team)
  - [@gitlab-com/gl-security/security-assurance/security-risk-team](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-risk-team)
  - [@gitlab-com/gl-security/security-assurance/governance](https://gitlab.com/gitlab-com/gl-security/security-assurance/governance)
- [Product Security (@gitlab-com/gl-security/product-security)](https://gitlab.com/gitlab-com/gl-security/product-security/)
  - [Product Security Meta](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta) For department wide management and planning issues.
  - [@gitlab-com/gl-security/product-security/appsec](https://gitlab.com/gitlab-com/gl-security/product-security/appsec) is the primary group for @'mentioning the Application Security team.
  - [@gitlab-com/gl-security/security-research](https://gitlab.com/gitlab-com/gl-security/security-research)
  - [@gitlab-com/gl-security/threatmanagement/vulnerability-management](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management)
- [Security Operations (@gitlab-com/gl-security/security-operations)](https://gitlab.com/gitlab-com/gl-security/security-operations) Security Operations Department
  - [@gitlab-com/gl-security/security-operations/sirt](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt) is the primary group for @'mentioning the Security Incident Response Team (SIRT).
    - [SIRT (private)](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/operations) for SIRT issues.
  - [@gitlab-com/gl-security/security-operations/trust-and-safety](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety) is the primary group for @'mentioning the Trust & Safety team.
  - [@gitlab-com/gl-security/security-operations/redteam](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam)
- [Corporate Security (@gitlab-com/gl-security/corp)](https://gitlab.com/gitlab-com/gl-security/corp)
  - [Functional Teams Org Chart](/handbook/security/corporate/team/#functional-org-chart)
  - [Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues)
  - [@gitlab-com/gitlab-com/gl-security/corp/managers](https://gitlab.com/gitlab-com/gl-security/corp/managers) - Management Team
  - [@gitlab-com/gitlab-com/gl-security/corp/helpdesk](https://gitlab.com/gitlab-com/gl-security/corp/helpdesk) - End User Services Helpdesk Team (see [Support Handbook Page](/handbook/security/corporate/support))
  - [@gitlab-com/gitlab-com/gl-security/corp/logistics](https://gitlab.com/gitlab-com/gl-security/corp/logistics) - Laptop and Phone Logistics
  - [@gitlab-com/gitlab-com/gl-security/corp/code](https://gitlab.com/gitlab-com/gl-security/corp/code) - Code Platforms Engineering
  - [@gitlab-com/gitlab-com/gl-security/corp/device](https://gitlab.com/gitlab-com/gl-security/corp/device) - Device Trust Engineering
  - [@gitlab-com/gitlab-com/gl-security/corp/identity](https://gitlab.com/gitlab-com/gl-security/corp/identity) - Identity Engineering
  - [@gitlab-com/gitlab-com/gl-security/corp/infra](https://gitlab.com/gitlab-com/gl-security/corp/infra) - Infrastructure Governance Engineering
  - [@gitlab-com/gitlab-com/gl-security/corp/saas](https://gitlab.com/gitlab-com/gl-security/corp/saas) - SaaS and Tech Stack Engineering (shared responsibility handled by Device Trust and Identity Teams)
  - [@gitlab-com/gitlab-com/gl-security/corp/dept](https://gitlab.com/gitlab-com/gl-security/corp) - Entire Department

#### Slack Channels

- [#security](https://gitlab.slack.com/archives/security); Used for general security questions and posting of external links for the great discussions. Company wide security relevant announcements are announced in #whats-happening-at-gitlab and may be copied here.
- [#security-division](https://gitlab.slack.com/archives/CM74JMLTU) - Daily questions and discussions focused on work internal to the Security Division. Can be used for reporting when unsure of where to go.
- [#abuse](https://gitlab.slack.com/archives/abuse) - Used for reporting suspected abusive activity/content (*GitLab Internal*) as well as general discussions regarding anti-abuse efforts. Use `@trust-and-safety` in the channel to alert the team to anything urgent.
- `#security-team-standup` - Channel for daily standups.
- `#incident-management` and [other infrastructure department channels](/handbook/engineering/infrastructure/#common-links)
- `#security-alert-manual` - New reports for the Security Division from various intake sources, including ZenDesk and new HackerOne reports.
- `#hackerone-feed` - Feed of most activity from our HackerOne program.
- Other `#security-alert-*` and `#abuse*` - Multiple channels for different notifications
handled by the Security Division.
- Use the **@sirt-members** mention in any Slack channel to tag the members of the Security Incident Response Team (SIRT).
- Use the **@sec-assurance-team** mention in any Slack channel to tag the members of the Security Compliance, Risk, and Governance & Field Security teams.
- Use the **@field-security** mention in any Slack channel to tag the members of the Field Security team.
- Use the **@appsec-team** mention in any Slack channel to tag the members of the Application Security team.
- Use the **@trust-and-safety** mention in any Slack channel to tag the members of the Trust & Safety team.
- Use the **@security-identity** mention in any Slack channel (or `#security-identity-ops`) to tag members of the Identity team.

#### Division, Department, and Team updates

We believe it is important to share regular updates at various levels of the Security Division, and we use Slack as the primary mechanism for providing these updates. Our updates are open to all GitLab team members using the following process:

- **Start of each month:** A thread per-department is started in `#security-division` by each department leader (CorpSec, ProdSec, SecAssurance, SecOps). These threads are pinned for the duration of the month.
  - Thread template:
    - `<MONTH> <DEPARMENT> Weekly Updates`
    - Example: `August Product Security Weekly Updates`
- **Weekly:** At least once a week, teams provide updates they wish to share within the appropriate thread. For example, updates from Vulnerability Management would be placed in the Product Security thread for the given month.
  - These weekly updates, while highly encouraged, are strictly optional and should represent content that ICs and managers feel should be highlighted. Teams are encouraged to define processes and DRIs around these updates that work for them.
  - Individuals providing the weekly updates are encouraged to use the "Also send to #security-division" option within the thread to increase visibility.
- **End of each month:** Departmental leaders prepare a monthly update, including no more than **three updates per team**, and post it in `#ciso` within the first week of the following month.
  - Each monthly update should include a brief preface written by the departmental leader covering any notable themes or other strategic updates.
  - Each of the three updates per-team should be no more than 2-3 sentences and include at least one link to allow readers to gain additional context. Links should be to GitLab Issues or Epics wherever possible. If information is confidential and not able to be added to an Issue or Epic, a note should be added indicating this.
  - It is recommended that departmental leaders build their monthly update over the course of the month via a GitLab issue ([see an example](https://gitlab.com/gitlab-com/gl-security/product-security/product-security-meta/-/issues/72)) in collaboration with their managers and senior ICs.

#### Ransomware

For an overview of the communication and response process for a suspected ransomware attack, please see our [Responding to Ransomware](/handbook/security/responding-to-ransomware/) page.

---

### Important topics

#### Tokens

The following best practices will help ensure tokens are handled appropriately at GitLab. For detailed requirements regarding the use of tokens at GitLab, please see our [token management standard](/handbook/security/token-management-standard/).

1. When creating a [Personal Access Token](https://docs.gitlab.com/user/profile/personal_access_tokens/), be sure to choose the appropriate [scopes](https://docs.gitlab.com/user/profile/personal_access_tokens/#personal-access-token-scopes) that only have the permissions that are absolutely necessary.
1. Oftentimes a [Project Access Token](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) might be sufficient instead of a Personal Access Token. Project Access Tokens have a much more limited scope and should be preferred over Personal Access Tokens whenever possible.
1. Always set an expiration for your tokens when creating them. Tokens should preferably expire in a matter of hours or a day.
1. Be mindful to keep these personal access tokens secret. Be particularly careful not to accidentally commit them in configuration files, paste them into issue or merge request comments, or otherwise expose them.
1. Please consider periodically reviewing your currently active Personal Access Tokens and revoking any that are no longer needed.
1. Personal Access Tokens will be highly discouraged within the GitLab production environment, and disallowed/disabled wherever possible. Existing tokens shall remain, but additional issuance will not be permissible/possible.
1. If you believe a personal access token has been leaked, revoke it immediately (if possible) and [contact the security team](/handbook/security/security-operations/sirt/engaging-security-on-call/) using the `/security` Slack command.

#### Receive notification of security releases

- To receive security release blog notifications delivered to your inbox, visit our [contact us](https://about.gitlab.com/company/contact/) page.
- To receive release notifications via RSS, subscribe to our [security release RSS feed](https://about.gitlab.com/security-releases.xml) or our [RSS feed for all releases](https://about.gitlab.com/all-releases.xml).
- For additional information regarding security releases, please visit the Delivery Team's [security releases](/handbook/engineering/infrastructure/library/security-releases-development/) page.

### <i class="fas fa-book" style="color:rgb(110,73,203)" aria-hidden="true"></i> Resources

#### Tools

- [Incident-Tools (private)](https://gitlab.com/gitlab-com/gl-security/incident-tools)
for working scripts and other code during or while remediating an incident.
If the tool is applicable outside of the `GitLab.com` environment, consider
if it's possible to release when the `~security` issue becomes
non-confidential. This group can also be used for private demonstration projects for
security issues.
- [security-tools (mostly private)](https://gitlab.com/gitlab-com/security-tools/) contains some
operational tools used by the security teams. Contents and/or configurations
require that most of these projects remain private.

#### Calendar

We welcome GitLab team members to join meetings that are on our shared [Security Calendar](https://calendar.google.com/calendar?cid=c_iou94moo2dfleqh610khmis27g%40group.calendar.google.com).

#### Other Frequently Used GitLab.com Projects

Security crosses many teams in the company, so you will find `~security` labeled
issues across all GitLab projects, especially:

- [gitlab-foss](https://gitlab.com/gitlab-org/gitlab-foss/issues/)
- [gitlab](https://gitlab.com/gitlab-org/gitlab/issues/)
- [infrastructure](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/)
- [production](https://gitlab.com/gitlab-com/gl-infra/production/issues/)

When opening issues, please follow the [Creating New Security Issues]({{% ref "engaging-with-security#creating-new-security-issues" %}}) process for using labels and the confidential flag.

#### Other Resources for GitLab Team Members

- Security Best Practices, using 1Password and similar tools, are documented
  on their own security best practices page.
- [Secure Coding Training](/handbook/security/secure-coding-training/).
- GitLab.com [data breach notification policy](https://about.gitlab.com/security/#data-breach-notification-policy).
- GitLab Internal Acceptable Use [Policy](/handbook/people-group/acceptable-use-policy/).
- For GitLab.com, we have developed a [Google Cloud Platform (GCP) Security Guidelines Policy](https://docs.google.com/document/d/1BBTWC5OpIqrva7DqH4nkjYUmNZ3UFbc6erqV89P_N-o/edit?usp=sharing) document, which outlines recommended best practices, and is enforced through
our security automation initiatives.
- GitLab Security Tanuki for use on security release blogs, social media and security related swag as appropriate:
  - [Web-RGB](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/tree/master/design/_deprecated/gitlab-brand-assets/gitlab-logo-files/gitlab-security-logo/web-rgb)
  - [Print-CMYK](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/tree/master/design/_deprecated/gitlab-brand-assets/gitlab-logo-files/gitlab-security-logo/print-cmyk)
  - and one [exclusively for stickers](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/-/blob/master/design/_deprecated/gitlab-brand-assets/gitlab-logo-files/gitlab-security-logo/print-cmyk/pdf/sticker/gitlab-security-icon-diecut-sticker-3x2_78in.pdf).
- [Security READMEs](/handbook/security/readmes/)
- [Working in Security](/handbook/security/working-in-security.md)
- [Contributing to GitLab the product as a Security team member](/handbook/security/contributing-to-gitlab-the-product/)
- [Threat Modeling](product-security/application-security/threat-modeling/)
