---
title: "Abuse on GitLab.com"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Overview

### Reporting Abuse

#### Report a User Profile

1. Reporting abuse via the `Report Abuse` button on a user profile.
   - You can use the **report abuse** button located at the top right of the user profile page.
   - The form will require you to enter information describing the type abuse you are reporting.
   - Reports with insufficient information, cannot be reviewed and will therefore be closed, more detailed reports can be sent to `abuse@gitlab.com`.

#### Reporting Merge Requests, Issues and Comments

1. Reporting **Comments/Issues/Merge Requests** using the `Report abuse to admin` button.
   1. You can report abuse by using the **report abuse to admin** dropdown at the top right of the corner of the issue/comment/MR.
   1. Complete the form with detailed information to aid our team in reviewing the reported content.

#### Email abuse@gitlab.com

1. Detailed abuse reports can be reported via `abuse@gitlab.com`
    1. If you would like to submit a more detailed report, you can do this by emailing `abuse@gitlab.com` where a member of our team will review your report.

### Reinstating your gitlab.com account

1. Requests to have your reinstated can be done by reaching out to our Support Team.

### Exceptions

#### Malware for Research Purposes

Making use of GitLab.com services to deliver malicious executables or as attack infrastructure is prohibited under the [GitLab Acceptable Use Policy] [link to be added once AUP has been launched].
We do however understand that making such technical details available for research purposes can benefit the wider community, and as such it will be allowed as an exception to our <Acceptable Use Policy> if the content meets the following criteria:

  – The Group and Project descriptions must clearly describe the purpose and author of the content.
  – Further details about specific project content that can be independently verified by the **GitLab Security** department must be
  present in the project `README.md` file; for example, links to supporting materials such as a blog post describing the project.
  – All malicious binaries/files are stored in password-protected archive files, with the passwords clearly documented; for example
  placed in the repository’s `README.md`.
     *Example: [GitHub](https://github.com/ytisf/theZoo)
     * `git-lfs` is available for use for binary files on GitLab.com.

— Non-profit open source projects may meet the requirements to qualify for our [GitLab for Open Source](https://about.gitlab.com/solutions/open-source/partners/) program.

#### Security Testing Tools

When researching security issues, especially those which may compromise the privacy of others, you must use only test accounts in order to respect our users’ privacy. Accessing private information of other users, performing actions that may negatively affect GitLab’s users (e.g., spam, denial of service). Activity that is disruptive to GitLab operations will result in account being blocked. Examples of disruptive activity include, but are not limited to:

- Generating abusive requests including API requests.
- Mass creation of users, groups, and projects
- Typo squatting or other name squatting
- Spam-like or other high volume activity

Disruptive activity such as that listed above can be researched freely on your own installation of GitLab. GitLab is an open-core company, with the source code powering gitlab.com available at `https://gitlab.com/gitlab-org/gitlab-foss` and `https://gitlab.com/gitlab-org/gitlab`. You are encouraged to install your own standalone instance for researching vulnerabilities. Screen captures, logs, and videos showing vulnerabilities against your own GitLab installation are encouraged.

- **Testing on GitLab.com**

  When testing on GitLab.com, your @wearehackerone.com address must be associated with the testing gitlab.com user account. If
  separate accounts are necessary, you can use an alias. This will help us separate testing from other forms of abuse, and help
  inform the decision of blocking an account. Note that this does not provide immunity, and the Rules of engagement must be followed
  at all times.

  GitLab reporters with 3 or more valid reports are eligible for a 1-year Ultimate license for up to 5 users. As per the
  [H1 policy](https://gitlab.com/gitlab-com/gl-security/hackerone/configuration/-/blob/master/program-policy.md#gitlab-ultimate-license), reporters will request the license through a comment on one of their issues.

  For more information, please refer to our [FAQ page]({{< ref "./faq#security-testing" >}}).

### Abuse Categories

- Below is a list of common abuse types;

{{% details summary="Malware" %}}

- Defined as software that is designed and distributed with the intention of causing damage to a computer, server, client, or computer network.
{{% /details %}}

{{% details summary="Commercial Spam" %}}

- An account that has been created for the purpose of distributing spam in the form of advertising a product, service, item etc.
{{% /details %}}

{{% details summary="Malicious Content" %}}

- An account that has been created for the purpose of distributing fraudulent, illegal, pirated or deceptive content.
  - Webpage Spam,
  - Phishing Pages
  - Pages that contain Obscene or Harmful content
  - Harmful or malicious downloads
  - Tools/Scripts used to perform cryptomining on gitlab.com and other platforms.
{{% /details %}}

{{% details summary="CI Abuse" %}}
Making use of CI Runners for any other purpose than what it is intended for. Examples include, but are not limited to:

- Cryptocurrency Mining using CI
- Network Abuse (Denial of Service, Scraping, etc.)
{{% /details %}}

{{% details summary="Code of Conduct" %}}
In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

- Examples of behavior that contributes to creating a positive environment include:
  - Using welcoming and inclusive language.
  - Being respectful of differing viewpoints and experiences.
  - Gracefully accepting constructive criticism.
  - Focusing on what is best for the community.
  - Showing empathy towards other community members.
- Examples of unacceptable behavior by participants include:
  - The use of sexualized language or imagery and unwelcome sexual attention or advances.
  - Trolling, insulting/derogatory comments, and personal or political attacks.
  - Public or private harassment.
  - Publishing others' private information, such as a physical or electronic address, without explicit permission.
  - Other conduct which could reasonably be considered inappropriate in a professional setting.
{{% /details %}}

{{% details summary="Prohibited Content" %}}
Distributing harmful or offensive content that is defamatory, obscene, abusive, an invasion of privacy (Personally Identifiable Information/PII) or harassing.

- Reports of Child Sexual Abuse Material (CSAM) please notify [INHOPE](https://www.inhope.org/EN) via the [Report it!](https://www.inhope.org/EN#hotlineReferral) option (follow the steps outlined on the site to submit a report).
{{% /details %}}

{{% details summary="Comment Spam" %}}
There are various types of Comment spam but is not limited to:

1. Spammy URL(s)
1. Advertising
1. Harmful attachments
1. Harmful Links
1. The use of sexualized language or imagery and unwelcome sexual attention or advances.
1. Trolling, insulting/derogatory comments, and personal or political attacks.
1. Public or private harassment.
1. Publishing others' private information, such as a physical or electronic address, without explicit permission.
1. Other conduct which could reasonably be considered inappropriate in a professional setting.
{{% /details %}}

{{% details summary="Copyright Abuse" %}}

- URL redirects to popular events.
- Copyright content of which the account holder does not hold the rights to distribute.
{{% /details %}}

### GitLab Abusive Data Retention Policy

GitLab retains your information for as long as your account is active or as needed to perform our contractual obligations, provide you the Services, comply with legal obligations, resolve disputes, preserve legal rights, or enforce our agreements.

We may delete **abusive accounts**, **associated projects**, **groups** and other contributions after a period of twelve (12) months.

- In some instances we may remove abusive user contributions in less than twelve (12) months if required without prior notice.
