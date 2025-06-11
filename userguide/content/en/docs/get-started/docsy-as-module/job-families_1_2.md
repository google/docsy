---
title: Job Families
description: "Job families are organized by function at GitLab and we use them to inform candidates of roles and current team members to evaluate their performance."
---

- Job families are [organized by function in directories in the `content-sites/handbook` repository](https://gitlab.com/gitlab-com/content-sites/handbook/-/tree/main/content/job-families).
- For any questions related to job families, please contact [total rewards]({{< ref "benefits#contact-total-rewards" >}}).

### Things to Keep in Mind

1. Before you begin creating a new job family you should check the directory to see if there is an existing job family or a role close to the one you are working to create. Job families should encompass a team, a department, or perhaps a division. If you are confused about when you need to create a new job family and when you should add a new role to an existing one watch [this video](https://www.youtube.com/embed/5EcFz1qNj2E).
    - Sometimes you should just add a level, a specialty or a segment and not create a new job family.
1. We don't include location requirements for most roles (EMEA, Americas, APAC) in the job family because these can change over time and job families are constant.
1. We don't include [expertises]({{< ref "structure#expert" >}}), since these are free form.
1. We don't include a specific number of years of experience unless they are directly relevant to the ability to perform in the role at the level required. If the years of experience are not directly relevant to the role, then we instead say that a person in a specified role should be able to show 'relevant, progressive experience' and then define what constitutes relevant, progressive experience in that particular context.
    - For grade 4 & 5 roles, we avoid listing any kind of prior experience requirements to encourage people with unique career or educational journeys to see themselves in a particular role.
1. We don't allow them to read like a vacancy. The job family could be used for hiring however they are more often serving as the requirements that team members and managers alike use in conversations around career development and performance management. The verbiage you don't want to use includes phrases like "you will", or "exciting opportunity" or "we're hiring for".
1. We are continually iterating on job families. Do not search other job families for examples of what good looks like. The templates below and this page are the SSOT for guidance.
1. Team Lead vs people Manager vs function Manager: you should be aware of how GitLab defines these terms. Depending on the needs of the organization, a Team Lead may or may not directly manage people. There are 2 instances where a Team Lead role can be used:
    - Team Lead as an Individual Contributor - in this context, the Team Lead would be responsible for a specific project/s or area of expertise (a Subject Matter Expert), and may partner with others to accomplish the work. The Team Lead can be leveraged as a player/coach, where they have their own individual tasks to complete, but they also mentor, train and coach others on the team. A team lead may also handle escalated or complex cases or projects.
    - Team Lead as a People Manager - in this context, the Team Lead would directly manage a team of people as a first level or entry-level people manager, which means they are directly responsible for hiring, promoting, performance management, or termination of team members. Team Leads can report into Managers, even though they may share the same compensation benchmark.
    - Manager job families are those responsible for directly managing other GitLab team-members. They hire, promote, and terminate team members, and performance management is one of their key functions. Nomenclature to represent someone is a manager of people can be clarified with "Manager, Benchmark" (e.g., Manager, Corporate Events). The same holds true for director (e.g. Director, Corporate Events).
    - Nomenclature to represent when someone manages a job function, and does not have people management responsibilities, can be clarified with "Benchmark Manager" (e.g., Marketing Manager)

## Approval Flow

Anyone can create or edit a job family, but generally it is the responsibility of the person who will manage the position or job family to kick off the approval process. They may enlist help from others as necessary. After a merge request is created for an existing or new job family, **the merge request must follow one of the approval flows below**:

For Grades 10 and above:

1. **Your manager**: Your direct manager is responsible for clarifying the scope of responsibilities and level of roles, checking responsibilities and requirements and ensuring the job family follows the template logic and **has all of the required areas**. Any review after this should be quick so the manager is the gatekeeper.
1. **Your executive leader**: Your executive leader is responsible for confirming the role is in plan and review of department/division structure and levels.
1. **Your People Business Partner** Who will review and typically notify Total Rewards
1. **Total Rewards**: The Total Rewards Team, `@gl-total-rewards`, is the final approver for job families on the merge request ensuring.:

   - There is a business need for the level within the job family.
   - The level is common in the market based on survey data.
   - All components of the job family are populated.
   - A [benchmark]({{< ref "compensation-calculator#new-benchmark" >}}) is set to add to the Compensation Calculator.
   - A Job Title is created within Workday.

1. To create more visibility for the Merge Request, send a note to the `#job-family` slack channel

For Grades 9 and below:

1. **Your manager**: Your direct manager is responsible for clarifying the scope of responsibilities and level of roles, checking responsibilities and requirements and ensuring the job family follows the template logic and **has all of the required areas**. Any review after this should be quick so the manager is the gatekeeper.
1. **Your Department Head**: Your Department Head (typically at the VP level) is responsible for confirming the role is in plan and review of department/division structure and levels. It is highly recommended that the Department Head notifies the EGroup Leader for awarenesss.
1. **Your People Business Partner** Who will review and typically notify Total Rewards
1. **Total Rewards**: The Total Rewards Team, `@gl-total-rewards`, is the final approver for job families on the merge request ensuring.:

   - There is a business need for the level within the job family.
   - The level is common in the market based on survey data.
   - All components of the job family are populated.
   - A [benchmark]({{< ref "compensation-calculator#new-benchmark" >}}) is set to add to the Compensation Calculator.
   - A Job Title is created within Workday.

1. To create more visibility for the Merge Request, send a note to the `#job-family` slack channel

## Templates for New Job Family

There are two templates on this page. The first template is appropriate when the job family has 1 or 2 job titles and more levels (i.e. junior, intermediate, senior, manager, director) or specialties; [for example](/job-families/engineering/backend-engineer). There can be many levels for each of the titles. The second template is appropriate when there are many different job titles within the same family; [for example](/job-families/people-group/total-rewards).

{{< youtube "8cUTvSwUqVc" >}}

### Job Family Template 1

After pasting this template search for `{add` to quickly navigate to areas of input.

```markdown
---
title: {add text of job family name}
---

{add overview; a brief description of the job family}

## Responsibilities

- {add a bulleted list of responsibilities that apply for all levels of the role}

## Requirements

- Ability to use GitLab
- {add a bulleted list of requirements that apply for all levels of the role}

## Levels

### {add name of level - i.e. Junior/Senior/Manager. Note we do not list the intermediate level in the title but after the role in parentheses - i.e. IT Systems Engineer (Intermediate)}

The {add the position title} reports to the {add the reporting position and link to the job family or heading (if on the same page)}.

#### {add Level} Job Grade

The {add the role name} is a [grade #]({{%/* ref "compensation-calculator#gitlab-job-grades" */%}}).

#### {add Level} Responsibilities

- {add a bulleted list of responsibilities that apply for this level}

#### {add Level} Requirements

- {add a bulleted list of requirements that apply for all levels of the role}

#### {add Level} Performance Indicators

- {add 3-5 KPIs that this role will be the DRI for, if the PIs are the same for all levels remove this section and use the heading 2 section later in the template}

### {add name of level - i.e. Junior/Senior/Manager. Note we do not list the intermediate level in the title but after the role in parentheses - i.e. IT Systems Engineer (Intermediate)}

The {add the position title} reports to the {add the reporting position and link to the job family or heading (if on the same page)}.

#### {add Level} Job Grade

The {add the role name} is a [grade #]({{</* ref "compensation-calculator#gitlab-job-grades" */>}}).

#### {add Level} Responsibilities

- {add a bulleted list of responsibilities that apply for all levels of this job family}

#### {add Level} Requirements

- {add a bulleted list of requirements that apply for all levels of this job family}

#### {add Level} Performance Indicators

- {add 3-5 PIs that this role will be the DRI for, if the PIs are the same for all levels remove this section and use the heading 2 section later in the template. PIs should link to the data}

## Segment

### {add name of Segment}

{add a brief description of the specialty}

#### {add name of Segment} Requirements

- {add a bulleted list}

#### {add name of Segment} Responsibilities

- {add a bulleted list}

## Specialties

### {add name of Specialty}

{add a brief description of the specialty}

#### {add name of Specialty} Requirements

- {add a bulleted list}

#### {add name of Specialty} Responsibilities

- {add a bulleted list}

## Performance Indicators

- {add 3-5 PIs that this role will be the DRI for, if PIs were listed for each level, because the are all unique, remove this section. PIs should link to the data}

## Career Ladder

{add brief description of the career ladder}

## Hiring Process

Candidates for this position can expect the hiring process to follow the order below. Please keep in mind that candidates can be declined from the position at any stage of the process.

- Qualified candidates will be invited to schedule a 30 minute [screening call]({{</* ref "interviewing#screening-call" */>}}) with one of our Global Recruiters.
- {add a bulleted list of the hiring process steps here}

Additional details about our process can be found on our [hiring page]({{</* ref "/handbook/hiring" */>}}).

```

#### Template 1 Additional Details

- List levels in ascending order. Start w/ junior/associate and end with the highest level.
- List any overarching responsibilities or requirements that are applicable for the entire job family before listing the levels.
- Do not repeat the junior requirement list for more senior levels:
  - You do not want to relist an entire requirement set from a more junior level that also pertains to a more senior one. You can choose to keep the section title as {Level} Requirements. You can then add a first bullet that says, "Extends the {name of lower job level} responsibilities" or "Extends the {name of lower job level} requirements."
- Specialities may be relevant for some but not all levels. Clarify which specialties each level pertains to. If there are no specialties remove the section.
- [Segment](/handbook/sales/field-operations/gtm-resources/): A Segment is something you will see with Sales based Job Families (Example, Enterprise, Mid-market, SMB, Public Sector). If there is no segment for the job family remove the section.
- If performance indicators are the same for all the levels on the job family do not list them under the levels section, rather list them at the end of the entire job family. Remove either the performance indicator section in the level section or at the end of the template.
- Career Ladder: The next job family. All levels should be on one job family, except when the next job family manages over multiple job families. For [example](/job-families/people-group/people-connect#career-ladder). Some teams added a Career Path: **Moving to and moving from*- which describes possible current and future roles which move to the job family and which the job family might move to. Here is [an example](/job-families/product/product-manager#moving-to-and-moving-from).
- The **Compensation** and **About GitLab** sections will auto-populate because of the job family formatting.

### Job Family Template 2

The second template is appropriate when there are three or more job titles within the same family. For example the team is made up of many different positions, that all report into the same person or are all working to accomplish the same goals.

After pasting this template search for `{add` to quickly navigate to areas of input.

```markdown
---
title: {add text of job family name}
---

{add an overview; a brief description of the job family}

## Role

{add brief description of the role} The {add the position title} reports to the {add the reporting position and link to the job family or heading (if on the same page).}.

### Job Grade

The {add role name} is a [grade #]({{%/* ref "compensation-calculator#gitlab-job-grades" */%}}).

### Responsibilities

- {add a bulleted list]

### Requirements

- Ability to use GitLab
- {add a bulleted list}

### Performance Indicators

- {add 3-5 PIs that this role will be the DRI for, they should link to the data}

### Career Ladder

{add a brief description of the career ladder here}

### Hiring Process

Candidates for this position can expect the hiring process to follow the order below. Please keep in mind that candidates can be declined from the position at any stage of the process.

- Qualified candidates will be invited to schedule a 30 minute [screening call]({{</* ref "interviewing#screening-call" */>}}) with one of our Global Recruiters.
- {add a bulleted list of the hiring process steps here}

Additional details about our process can be found on our [hiring page](/handbook/hiring).

## Role

{add brief description of the role} The {add the position title} reports to the {add the reporting position and link to the job family or heading (if on the same page).}.

### Job Grade

The {add role name} is a [grade #]({{</* ref "compensation-calculator#gitlab-job-grades" */>}}).

### Responsibilities

- {add a bulleted list}

### Requirements

- Ability to use GitLab
- {add a bulleted list}

### Performance Indicators

- {add 3-5 PIs that this role will be the DRI for, they should link to the data}

### Career Ladder

{add a brief description of the career ladder}

### Hiring Process

Candidates for this position can expect the hiring process to follow the order below. Please keep in mind that candidates can be declined from the position at any stage of the process.

- Qualified candidates will be invited to schedule a 30 minute [screening call]({{</* ref "interviewing#screening-call" */>}}) with one of our Global Recruiters.
- {add a bulleted list of the hiring process steps here}

Additional details about our process can be found on our [hiring page]({{</* ref "/handbook/hiring" */>}}).
```

#### Template 2 Additional Details

- The **Compensation** and **About GitLab** sections will auto-populate because of the job family formatting.

## Creating a New Job Family from Scratch

{{< youtube "x3q2KVFwMUY" >}}

Here is a brief [walkthrough](https://docs.google.com/presentation/d/1ZNsMLhk5ZB_NMinV4X2QPWLudnHHWapasxRz5HJCuCQ/edit#slide=id.g551bcad215_0_146) of this process. If you use these slides please remember that the HANDBOOK is the most up to date and the slides and/or videos may be dated.

1. Go to the [`content-sites/handbook`](https://gitlab.com/gitlab-com/content-sites/handbook) project on `gitlab.com`
1. Select the [content](https://gitlab.com/gitlab-com/content-sites/handbook/-/tree/main/content) directory
1. Go to the [job-families](https://gitlab.com/gitlab-com/content-sites/handbook/-/tree/main/content/job-families) directory
1. Select the department where you will be making the new job family (i.e. Marketing, Sales, etc)
1. Once you are in the correct department directory, select the `+`
1. From the drop down list, select `New file`
1. Insert the title in the format of `job-title.md` for example `marketing-campaign-manager.md`
1. Copy the [Template for New Job Family](#templates-for-new-job-family) and insert it into the body of the file
1. Fill in the sections of the template by replacing everything in `{curly brackets}` search `{add`
1. Use [markdown formatting](/docs/markdown-guide)
1. Delete any unnecessary sections - for example, there may be no `Levels` or `Specialties` at this time, so those sections can be deleted
1. Update the Commit message with a description of what you are doing
1. Update Target Branch to an abbreviation of what you did. Note: include dashes between words instead of spaces.
1. Make sure “Start a new merge request with these changes” box is checked.
1. Click the Commit changes button at the bottom
1. Check: Delete source branch when merge request is accepted.
1. Click the Submit merge request button at the bottom

## Creating an Overview page

In cases where a job family is quite large you may decide to create an overview page of the job family. This helps when we are actively sourcing for external candidates on a role. [Here](/job-families/people-group/recruiting-operations-insights/overview) is an example of a job family overview page.

{{< youtube "eECNGB-JkZE" >}}

- Keep in mind that the overview page needs to be updated when you add a new level or a new role to a job family.
- The opening statement about the job family should be copied from the job family page to the overview page. Because not all job families have overview pages you should not remove it from one or the other.
- The overview page should follow the typical naming convention by adding a sub folder `overview`

### Format

For every overview page we created, the page has the URL `/job-families/department/title/overview/` and should be
created starting from the template. There's only a few additions you should do with the template.

### New Job Family Overview creation

1. Create the page in `/job-families/[department]/[name-of-job-family]/overview, being sure to use only lower case in naming your directory if it doesn't already exist, and add it to the correct department subdirectory.
1. The file type should be `index.html.haml`.
1. Copy the template and add it to your new file
1. Update all the places that need updates:

   - replace {Job Title} with the job titile
   - replace {Job Family introduction} with a paragraph giving more information about the job itself.
   - if there's a video for this job family, switch out the youtube `ID_FOR_VIDEO` with the relevant ID
   - if there's no video, remove the entire snippet that adds the video
   - for every role within the job family, you need a `card`.

### Template for New Job Family Overview

```markdown
---
title: {job-family title}
---
```

## Updating a URL and Redirect

This video will walk you through how to change a Job Family URL as well as set up a redirect for the old URL.

{{< youtube "MRzgOzlbsPQ" >}}

## Failed Pipeline

We have a CI job that checks job families for hard requirements:

- Requirements
  - every role must have `Ability to use GitLab` as a bullet point.
- Responsibilities
- Performance Indicators
- [Job Grades]({{< ref "compensation-calculator#gitlab-job-grades" >}})
- Hiring Process
- Inclusive Language Check

### Inclusive Language Check

We use an open source [Ruby gem](https://gitlab.com/lienvdsteen/linter) to perform a inclusive language check on all job families.

{{< youtube "0ZIfDU0l2sU" >}}

Currently that library covers:

- the usage of masculine vs feminine-coded language
- the usage of gendered pronouns
- misused words
- fixed vs growth mindset

The following results lead to failure of the pipeline:

- High usage of masculine-coded language: this means the job family is using more masculine-coded words than feminine-coded words.
- Usage of any misused words as this could excluded diverse groups.
- High usage of fixed-coded language: this means the job family is using more fixed-coded words than growth-coded.
- Usage of gendered pronouns: we want to be inclusive to all.
  - You should use this [online tool](https://inclusiveness-check.herokuapp.com/) to check your job family before running the pipeline.
  - If you're using language that is marked as subtly masculine-coded, fixed-coded or using misused words, the pipeline will fail and you will need to fix it before following the approval flow. Please reference (and add to) [this list](https://docs.google.com/document/d/1YBzbnzKrsTLtAL5L3M5Gt4ZCuCDwPVgwJbeCt62qBIY/edit) for suggested words to use in place of masculine or fixed language.
  - If the pipeline does fail, the first recommendation is to read the error. It will say what is wrong with the text. For example:

   ```text
   1. ["ATTENTION: In /builds/gitlab-com/www-gitlab-com/sites/uncategorized/source/job-families/marketing/reference-program-manager/index.html.md you're using masculine gender-coded language", "Masculine coded words used: analyst, analytical, decision, driven, leader"]
   2. ["ATTENTION: In /builds/gitlab-com/www-gitlab-com/sites/uncategorized/source/job-families/marketing/production-designer/index.html.md you're using fixed-coded language", "Fixed coded words used: established"]
   ```

   In this case, there are two job families that failed and each for a different reason. You can do two things now:
      - fix the text to be more inclusive, commit your changes and the pipeline will run again
      - if you disagree or you feel like the pipeline found a false positive, you can add the file to [this list](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/inclusiveness_check.yml). The files in this list are ignored by the inclusiveness check. If you request your job family to be added to the skip level you will need to paste a screenshot of the inclusiveness check in the MR as this will be asked for prior to merging.

## Why Job Families Have Performance Indicators

{{< youtube "9EJkgBRUSDA" >}}

- All job families should have performance indicators (PIs).
- Performance indicators should tell you whether or not you’re doing your job well or correctly. For example, our [Vice President, Investor Relations](/job-families/finance/investor-relations#vice-president-investor-relations) role has performance indicators that compare how we’re being described by analysts to how we describe ourselves.
- Performance indicators are important because people want to know that they’re contributing.
- Candidates want to know what success looks like in a role.
- Team Members want to know how they're being measured for success.
- Company, functional, or department KPIs are too generic and, thus, not useful as job family performance indicators, only a sub-set of performance indicators are KPIs.
- Time sensitive PIs, like OKRs or weekly goals, are also not useful because they are not long term success factors.
- Performance indicators should be specific to the role and not dependent on anyone else's performance.
- Job Families should have three to five PIs.
- Performance Indicators should be linked to one or more performance indicator definitions for which this job family will be the [DRI]({{< ref "directly-responsible-individuals" >}}).
