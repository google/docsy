---
title: "GitLab Security Secure Coding Training"
---

This page contains information on secure training initiatives sponsored by the GitLab Security team.

## Security Development Process

For information on developing security fixes in GitLab, please see the
[Patch Release runbook for preparing security fixes](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md). (Required)

## Secure Coding Guidelines

The [GitLab Secure Coding Guidelines](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html) (Required) cover how to address specific
classes of vulnerabilities that have been identified in GitLab.

## Secure Code Warrior

GitLab uses Secure Code Warrior to provide ongoing secure coding training. Eligible team members can log in via Okta.

If you think you should have access but don't see it in Okta, check this list of roles below.

### Using Secure Code Warrior

Team members may be assigned Courses. You can complete a Course in any of the available languages, for example Ruby, Go, Vue.JS, Python, or others. Follow these instructions to find and complete your course: <https://help.securecodewarrior.com/hc/en-us/articles/360040802312-Courses-Module-Overview>. Visit <https://portal.securecodewarrior.com/#/courses/course-list> to see your Course list.

We recommend self-selecting Training in the form of Challenges and Missions every month to learn about secure coding and to keep your skills sharp. These hands on examples will help you write better code and spot potential security concerns during code reviews. Learn more at <https://help.securecodewarrior.com/hc/en-us/articles/360035983992-Training-Module-Overview>.

From time to time the Security Department might also run [Tournaments](https://help.securecodewarrior.com/hc/en-us/articles/360036293731-Tournaments-Module-Overview). More information on these will be released ahead of any tournament start date.

### Getting help

Visit the [`#security-secure-code-warrior`](https://gitlab.slack.com/archives/C03HHQAKE8P) Slack channel to chat, ask questions, give feedback, or get help.

Found a bug, confusing content, or incorrect answer? Please use Secure Code Warrior's built in bug reporting by selecting "Help" in the top right, then selecting "Submit bug or feedback". This will help improve the platform for all users.

### Mandatory training

GitLab requires that team members with development responsibilities complete a specific secure code training course at least annually. Each team member must complete it by the end of the Financial Year at the latest.

The training is provided via Secure Code Warrior and the course is titled ["GitLab Secure Development Short Course"](https://portal.securecodewarrior.com/#/courses/course-list/e6a9e788-8aa7-4aeb-9849-9072c00e6f58). It takes 1-3 hours. The requirement is only to complete the course: hints may be used, and incorrect answers are OK. Have fun and learn!

<details>
  <summary markdown="span">Expand to see the roles who must complete mandatory training.</summary>

The criteria used to determine inclusion were:

- Does the role description include writing or reviewing code that may interact with GitLab RED data, and in a language supported by Secure Code Warrior?
  - This is typically Individual Contributors and their direct Managers. Senior Managers and above are excluded, at present.
- Does AppSec believe the role benefit from Secure Code Training anyway?

If a role should be added or removed, please open an MR and @ mention `@gitlab-com/gl-security/product-security/appsec`. If your role is in the list already but SCW doesn't show up in Okta, ask for help in `#secure-code-warrior` on Slack. An AppSec team member will add you to [the Google Group](https://groups.google.com/a/gitlab.com/g/okta-securecodewarrior-users/members) and update any baseline entitlements / onboarding checklists to ensure those in your role are included in the future.

The roles are:

- `ceo_fullstack_engineer`
- `community_relations_fullstack_engineer`
- `community_relations_senior_fullstack_engineer`
- `community_relations_staff_fullstack_engineer`
- `corporate_it_it_security_analyst`
- `corporate_it_it_systems_engineer`
- `corporate_it_senior_it_compliance_engineer`
- `corporate_it_senior_it_security_engineer`
- `corporate_it_senior_it_site_reliability_engineer`
- `corporate_it_senior_it_systems_engineer`
- `corporate_it_staff_it_systems_engineer`
- `customer_support_manager_support_engineering`
- `customer_support_senior_support_engineer`
- `customer_support_staff_support_engineer`
- `customer_support_support_engineer`
- `data_analytics_engineer`
- `data_data_engineer`
- `data_data_scientist`
- `data_junior_data_engineer`
- `data_senior_analytics_engineer`
- `data_senior_data_engineer`
- `data_senior_data_scientist`
- `data_staff_analytics_engineer`
- `data_staff_data_engineer`
- `data_staff_data_scientist`
- `development_associate_backend_engineer`
- `development_associate_fullstack_engineer`
- `development_backend_engineer`
- `development_distinguished_engineer`
- `development_distribution_engineer`
- `development_engineering_fellow`
- `development_frontend_engineer`
- `development_fullstack_engineer`
- `development_manager_engineering`
- `development_manager_frontend_engineering`
- `development_manager_fullstack_engineering`
- `development_principal_engineer`
- `development_principal_fullstack_engineer`
- `development_senior_backend_engineer`
- `development_senior_distinguished_engineer`
- `development_senior_distribution_engineer`
- `development_senior_frontend_engineer`
- `development_senior_fullstack_engineer`
- `development_senior_vulnerability_research_engineer`
- `development_staff_backend_engineer`
- `development_staff_frontend_engineer`
- `development_staff_fullstack_engineer`
- `development_staff_vulnerability_research_engineer`
- `digital_experience_fullstack_engineer`
- `digital_experience_manager_engineering`
- `digital_experience_manager_engineering_marketing`
- `digital_experience_marketing_frontend_engineer`
- `digital_experience_senior_frontend_engineer`
- `digital_experience_senior_marketing_frontend_engineer`
- `enterprise_applications_integrations_engineer`
- `enterprise_applications_senior_integrations_engineer`
- `incubation_engineering_senior_fullstack_engineer`
- `incubation_engineering_staff_incubation_engineer`
- `infrastructure_backend_engineer`
- `infrastructure_distinguished_engineer_infrastructure`
- `infrastructure_engineering_fellow_infrastructure`
- `infrastructure_senior_backend_engineer`
- `infrastructure_senior_database_reliability_engineer`
- `infrastructure_senior_site_reliability_engineer`
- `infrastructure_site_reliability_engineer`
- `infrastructure_staff_backend_engineer`
- `infrastructure_staff_site_reliability_engineer`
- `marketing_ops_senior_data_engineer`
- `people_operations_fullstack_engineer`
- `quality_backend_engineer`
- `quality_manager_quality_engineering`
- `quality_principal_engineer`
- `quality_senior_backend_engineer`
- `quality_senior_engineering_analyst`
- `quality_senior_software_engineer_in_test`
- `quality_software_engineer_in_test`
- `quality_staff_backend_engineer`
- `quality_staff_engineering_analyst`
- `quality_staff_software_engineer_in_test`
- `security_distinguished_engineer_security`
- `security_manager_security_engineering`
- `security_principal_security_engineer`
- `security_security_engineer`
- `security_senior_security_engineer`
- `security_staff_security_engineer`
- `ux_senior_fullstack_engineer`

Teams to follow up with manually for additional enrollments:

- Security Assurance

</details>

## Other Training

### Language Specific Guidelines

- [Secure Ruby on Rails with Jim Manico](#secure-coding-training-with-jim-manico) (Recommended)
- [OWASP Secure Coding in Go](https://github.com/OWASP/Go-SCP/blob/master/dist/go-webapp-scp.pdf) (Recommended)
- [Checkmarx Secure Coding in Javascript](https://checkmarx.gitbooks.io/js-scp/) (Recommended)

### Other Guidelines and Resources

- [OWASP Top 10 2017](https://owasp.org/www-project-top-ten/) (Optional)
- [OWASP API Security Top 10](https://apisecurity.io/encyclopedia/content/owasp/owasp-api-security-top-10.htm) (Optional)
- [OWASP Serverless Top 10](https://github.com/OWASP/Serverless-Top-10-Project/raw/master/OWASP-Top-10-Serverless-Interpretation-en.pdf) (Optional)
- [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-top-10/) (Optional)

## Secure Coding Training with Jim Manico

### Description

A developer-focused application security training presented by Jim Manico, and Dr. Justin Collins, the creator of Brakeman, occurred on the days of July 29th and 30th 2019.  In addition to covering secure coding in general, it also covers specific threats and mitigations for Ruby on Rails applications.  The content is presented in a lighthearted and entertaining manner.

You can find the recorded, private YouTube stream at the following:

- [Day 1 Morning](https://www.youtube.com/watch?v=PXR8PTojHmc)
- [Day 1 Afternoon](https://www.youtube.com/watch?v=2VFavqfDS6w)
- [Day 2 Morning](https://www.youtube.com/watch?v=bJYUxKn88so )
- [Day 2 Afternoon](https://www.youtube.com/watch?v=8tP2KVKHO7A)

These videos are private by default. To view them, you will need to [switch to the GitLab Unfiltered account](/handbook/marketing/marketing-operations/youtube/#unable-to-view-a-video-on-youtube).

#### Recommendations

- Watch the video or [read the slides](#additional-resources) for each topic that is relevant to you.
- The videos were recorded over two full days.  It is suggested that you split up viewing them over multiple days by topic and/or by the hour.
- Consider watching the videos at [1.25X speed](http://osxdaily.com/2017/04/14/adjust-youtube-video-playback-speed/)

### Schedule and Topics

#### Day 1

##### Day 1 Morning

1. Introduction to Application Security ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
1. Threat Modeling
1. OWASP Top Ten 2017 overview ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
1. A1: Injection ([52:03](https://youtu.be/PXR8PTojHmc?t=3123))
1. A2: Broken Authentication and Session Management ([1:19:50](https://youtu.be/PXR8PTojHmc?t=4790))
1. A7: Cross site scripting - XSS ([2:09:45](https://youtu.be/PXR8PTojHmc?t=7785))
1. A8: Insecure deserialization ([2:15:10](https://youtu.be/PXR8PTojHmc?t=8110))
1. A9: Using known vulnerable components ([2:22:26](https://youtu.be/PXR8PTojHmc?t=8546))
1. A10: Insufficient logging and monitoring ([2:24:30](https://youtu.be/PXR8PTojHmc?t=8670))

Also covers:

- OWASP ASVS 4.0
- Multi-Form Workflow Security

##### Day 1 Afternoon

1. XSS Defense - HAML ([1:51](https://youtu.be/2VFavqfDS6w?t=111))
1. Safe client-side JSON Handling ([1:45:31](https://youtu.be/2VFavqfDS6w?t=6331))
1. iFrame Sandboxing ([1:57:25](https://youtu.be/2VFavqfDS6w?t=7045))
1. Input validation ([2:04:50](https://youtu.be/2VFavqfDS6w?t=7490))
1. Unvalidated Redirects ([2:22:14](https://youtu.be/2VFavqfDS6w?t=8534))
1. DevOps Best Practices ([3:14:30](https://youtu.be/2VFavqfDS6w?t=11670))
1. Content Security Policy ([3:36:31](https://youtu.be/2VFavqfDS6w?t=12991))
1. Brakeman and Static Analysis ([4:09:20](https://youtu.be/2VFavqfDS6w?t=14960))

Also covers:

- DevOps Best Practices ​
- Coding Vue.js applications securely
- File Upload and File IO Security ​Multi-Step Secure File Upload Defense, File I/O Security
- Input Validation ​Basics ​(Allowlist Validation​ and Safe Redirects)
- 3rd Party Library Security Management ​(​Detect and manage insecure 3rd party libraries)

#### Day 2

##### Day 2 Morning

1. Access control ([4:28](https://youtu.be/bJYUxKn88so?t=268))
1. Insecure direct object reference in Rails ([58:20](https://youtu.be/bJYUxKn88so?t=3500))
1. Cross site request forgery ([1:28:33](https://youtu.be/bJYUxKn88so?t=5313))
1. Cross site request forgery protection in Rails ([1:52:32](https://youtu.be/bJYUxKn88so?t=6752))
1. Cookie Options and Security ([2:33:45](https://youtu.be/bJYUxKn88so?t=9225))
1. Server Side Request Forgery SSRF ([2:44:22](https://youtu.be/bJYUxKn88so?t=9862))

Also covers:

- Dynamic render paths and local file inclusion
- IDOR and scoped queries
- SSRF Defense
- Cross Site Request Forgery CSRF Defenses for multiple architecture types (stateless, API,web, etc)

##### Day 2 Afternoon

1. Authentication Best Practices ([5:40](https://youtu.be/8tP2KVKHO7A?t=340))
1. Rails 6 Security Features ([2:23:15](https://youtu.be/8tP2KVKHO7A?t=8595))
1. Introduction to the OAuth authorization protocol v1 ([2:48:21](https://youtu.be/8tP2KVKHO7A?t=10101))
1. OAuth v2 ([2:51:05](https://youtu.be/8tP2KVKHO7A?t=10265))
1. Client Registration ([3:04:06](https://youtu.be/8tP2KVKHO7A?t=11046))
1. Authorization Code Grant ([3:07:44](https://youtu.be/8tP2KVKHO7A?t=11264))
1. OAuth 2.0 Terminology ([3:21:06](https://youtu.be/8tP2KVKHO7A?t=12066))
1. OAuth 2.0 Tokens ([3:35:35](https://youtu.be/8tP2KVKHO7A?t=12935))

Also covers:

- Secure Secret Storage
- Encrypted secrets/credentials

## Recommended topics by role

### Frontend Engineers

- Day 1
  - Intro to application security ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
  - Threat modeling
  - OWASP top 10 overview  ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
  - Injection ([52:03](https://youtu.be/PXR8PTojHmc?t=3123))
  - Broken authentication ([1:19:50](https://youtu.be/PXR8PTojHmc?t=4790))
  - Cross site scripting ([2:09:45](https://youtu.be/PXR8PTojHmc?t=7785))
  - Insecure deserialization ([2:15:10](https://youtu.be/PXR8PTojHmc?t=8110))
  - Using vulnerable components ([2:22:26](https://youtu.be/PXR8PTojHmc?t=8546))
  - XSS defense ([1:51](https://youtu.be/2VFavqfDS6w?t=111))
  - Safe client side JSON handling ([1:45:31](https://youtu.be/2VFavqfDS6w?t=6331))
  - iFrame sandboxing ([1:57:25](https://youtu.be/2VFavqfDS6w?t=7045))
  - Unvalidated redirects ([2:22:14](https://youtu.be/2VFavqfDS6w?t=8534))
  - Content security policy ([3:36:31](https://youtu.be/2VFavqfDS6w?t=12991))
  - Brakeman and static analysis ([4:09:20](https://youtu.be/2VFavqfDS6w?t=14960))
- Day 2
  - Access control ([4:28](https://youtu.be/bJYUxKn88so?t=268))
  - Cross site request forgery ([1:28:33](https://youtu.be/bJYUxKn88so?t=5313))
  - Cookie options and security ([2:33:45](https://youtu.be/bJYUxKn88so?t=9225))
  - SSRF ([2:44:22](https://youtu.be/bJYUxKn88so?t=9862))
  - Authentication ([5:40](https://youtu.be/8tP2KVKHO7A?t=340))
  - Rails6 security features ([2:23:15](https://youtu.be/8tP2KVKHO7A?t=8595))
  - OAuth ([2:51:05](https://youtu.be/8tP2KVKHO7A?t=10265))

### Backend Engineers

- Day 1
  - Intro to application security ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
  - Threat modeling
  - OWASP top 10 overview  ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
  - Authentication and session management ([1:19:50](https://youtu.be/PXR8PTojHmc?t=4790))
  - Insecure deserialization ([2:15:10](https://youtu.be/PXR8PTojHmc?t=8110))
  - Vulnerable components ([2:22:26](https://youtu.be/PXR8PTojHmc?t=8546))
  - Logging & monitoring ([2:24:30](https://youtu.be/PXR8PTojHmc?t=8670))
  - XSS defense ([1:51](https://youtu.be/2VFavqfDS6w?t=111))
  - Input validation ([2:04:50](https://youtu.be/2VFavqfDS6w?t=7490))
  - DevOps best practices ([3:14:30](https://youtu.be/2VFavqfDS6w?t=11670))
  - Brakeman ([4:09:20](https://youtu.be/2VFavqfDS6w?t=14960))
- Day 2
  - Access control ([4:28](https://youtu.be/bJYUxKn88so?t=268))
  - Insecure direct object reference ([58:20](https://youtu.be/bJYUxKn88so?t=3500))
  - SSRF ([2:44:22](https://youtu.be/bJYUxKn88so?t=9862))
  - Authentication best practice ([5:40](https://youtu.be/8tP2KVKHO7A?t=340))
  - Rails 6 security features ([2:23:15](https://youtu.be/8tP2KVKHO7A?t=8595))
  - OAuth ([2:51:05](https://youtu.be/8tP2KVKHO7A?t=10265))

### SRE

- Day 1
  - Intro to application security ([4:33](https://youtu.be/PXR8PTojHmc?t=273))
  - Threat modeling
  - OWASP top 10 overview  ([42:57](https://youtu.be/PXR8PTojHmc?t=2577))
  - DevOps best practices ([3:14:30](https://youtu.be/2VFavqfDS6w?t=11670))

## Additional resources

- [PowerPoint presentations](https://drive.google.com/drive/folders/1NRrlnqwkhsS-UmuagwoD8GB4APXsfJxb?usp=sharing)
- [Questions Doc](https://docs.google.com/document/d/1KsK5DBDgiF8k0N3cs89o1VsMYsUWUPH9fIQb_smFEac/edit)
- [Ruby on Rails security best practices](https://guides.rubyonrails.org/security.html)
- [Online Labs](https://manicode.us/shepherd/)
- [Burp Proxy](https://portswigger.net/burp/communitydownload)
