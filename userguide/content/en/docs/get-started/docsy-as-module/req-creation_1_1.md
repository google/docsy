---
title: "Talent Acquisition Process Framework for Creating REQs"
description: "The Talent Acquisition Process Framework for Creating REQs provides guidance on how to open a new requisition for the talent acquisition team."
---

Prior to starting the req creation process, a Hiring Manager should follow the steps outlined to create a Job Family or create a MR to edit any relevant Job Family information as needed. For questions specific to Hiring Plans or how to go about making such changes, please refer to the [Finance section of the handbook](/handbook/finance/financial-planning-and-analysis/#headcount-and-the-talent-acquisition-single-source-of-truth).

## Process Overview

1. Requisition Release (requisition details from FP&A load into dept LIVE Interlock sheets)
1. Backfill Approval (backfill requisitions only)
1. Hiring Manager create/review Job Family
1. Open requisition in Greenhouse
1. Formal approval to open role
1. Run kick-off (aka Intake) with Hiring Manager

### Requisition Release

There are three creation types for new requisitions: Annual Planned Headcount, [Rolling List of Ask (RLoA)](/handbook/finance/financial-planning-and-analysis/#rolling-list-of-asks-rloa) Incremental Headcount and Backfills. Annual Planned Headcount is released at the beginning of each fiscal year. RLoA Incremental Headcount is released each quarter for the following quarter (ie: Q2 cycle will release Q3 headcount). Backfills are opened with attrition throughout the year.

How is headcount communicated:

1. Annual Planned headcount: Communicated by FP&A partners to TA, PBPs and business leadership at the beginning of each fiscal year.
1. RLoA headcount: Communicated by FP&A partners to TA, PBPs and business leadership upon approval by egroup (typically at the beginning of each fiscal quarter).
1. Backfills: Upon a resignation, hiring managers are to submit official notice to Workday to trigger alignment about backill req (see below).

All headcount, once funded and released, will show up in department LIVE Interlock Reports (linked below). The Talent Acquisition leadrship will then allocate a recruiter to the role based off of capacity and domain alignment. The recruiter is the main driver for moving the hiring process forward at a reasonable pace and will partner with the hiring manager on creating a requisition.

If there is not a current job family, the recruiter is to guide the hiring manager to proceed to [create or review the Job Family](/handbook/hiring/job-families). Hiring Managers should not wait on an approved requisition to begin this step.

#### Backfill Approvals

Backfills require a needed approval process prior to moving to the next step of the process. All other roles (incremental/net new) do not need approval at this point in the process and can proceed to the next step.

In order to open a backfill:

1. Manager of departing team member enters attrition in Workday via the [off-boarding process](/handbook/people-group/offboarding).
1. Talent Acquisition Leadership (Dir+) is notified via automated reporting once attrition is entered into the system.
1. Leadership allocates the role to appropriate recruiter.
1. Recruiter creates a backfill issue that informs: FP&A, PBP, VP via the appropriate backfill template in [department] headcount project. For Sales, add Sales Strategy. For R&D, add the corresponding E-Group member.
1. Recruiter works through backfill issue with the business and PBP to drive towards backfill approval: role is to be direct backfill, repurposed within a team or organization. Recruiters to ensure documentation in issue for each decision made.
*For Sales roles only*: Once the backfill issue is created, TA leadership posts in Sales Leadership channel for approval from the VP of the department. Once approval is received, TA leader is to document approval in the backfill issue for future reference. For templates, GitLab team members can utilize [this link](https://docs.google.com/document/d/19LjNhyNhcqmBMHoaGbjPvUfjWQk0wR9w8iowPlgdfkU/edit)
*For roles being repurposed*: the business leader owns communication to the team to discuss rationale and drive clarity. PBP/Strategy team partners on reallocation decisions.
1. Once the role is approved/decision has been reached and all has been documented in the issue, the recruiter can create a position in Greenhouse for approval and move to the next step of the process.

### Create or Review the Job Family (DRI: Hiring Manager)

The Hiring Manager will review the position description in the `/job-families` folder and update it, if needed. If there is no existing job family, they should follow the steps to [create a new job family](/handbook/hiring/job-families#job-families). A compensation benchmark for the role should be set by working with the Compensation & Benefits team.

It is important to ensure this process is done early, because it takes time to go through approvals and Total Rewards will not approve a job opening without a matching job family.

### Open Requisition in Greenhouse (DRI: Recruiter)

#### Terms you need to know

- **Job:** A job refers to the job title (ex: Customer Support Specialist). This will also be what appears on external job boards. In the case there are multiple positions open that are the same, and we only want to list once, we can have multiple `openings` (see next section) opened within one `Job`. Each job will have a unique identifier called a Requisition ID (example- 1001).
- **Opening:** A job can have multiple openings attached to it (ex: you are hiring 3 Customer Support Specialists. You would then have 1 `Job` and 3 `openings` against that job). A job can have multiple openings against it, but an opening can not be associated with multiple jobs. Each opening will have a unique identifier called an Opening ID (example- 1001-1, 1001-2, 1001-3).
- **GHPiD:** GHP ID is the link between Adaptive (what we use to track our operating plan) and Greenhouse (our ATS). A GHP ID has a one to one relationship with an Opening ID. It is the key interlock between our hiring plans and our Talent Acquisition activity. This is a custom field in Greenhouse and all GHPIDs are system-generated by FP&A (see [FP&A section](/handbook/finance/financial-planning-and-analysis/#creating-ghpid) of the handbook)

#### Determining what type of job to open

There are a few options for what to open in Greenhouse.

- **Open a new job**
- **Open an additional opening onto an existing job**
  - If the job is currently open, recruiters can add an additional opening through the approvals page. It is vital that each opening is opened, associated with the correct GHPiD and documented in Greenhouse so reporting can tell us how many positions are open.
- **Reopen an old job**
  - We do not reopen old jobs.
- **Evergreen job**
  - An Evergreen Job is a requisition that is `always open`... more specifically, it is used when we have at least 3 openings for a particular job repeated each quarter. There is then one Evergreen job posted for internal, external and passive candidates. It is important that no candidate is hired to an Evergreen job, and instead is moved to an approved opening (aka - an opening with a single corresponding GHPiD).
- **When should an Evergreen req be used?**
   TA Leadership will open EVG roles at the start of a fiscal year, with a quarterly review cadence, by leveraging the hiring plan and attrition assumptions. Typically, EVG postings will be utilized when there are multiple openings for a set of roles (3 or more) that have very similar technical qualifications and are expected to be hired on a regular basis (for example, Business Development Rep, AMER). These roles usually span multiple teams and hiring managers., but are all interviewed with the same process by the same interviewer 'pool'. `Regular basis` refers to consistent volume over a period of 3+ quarters.
- **How do I open an evergreen req?**
   All evergreen reqs need to be approved by TALT (Jake Foster or Jess Dallmar) prior to opening.

If you are looking to open a job for pipeline reasons, because a Hiring Manager has requested that you work on a role that will be open in the future but has not been approved, instead of an EVG role use our Greenhouse CRM.

**The Recruiter will:**

1. The Recruiter will open a [kick-off issue](https://gitlab.com/gl-talent-acquisition/req-intake/-/issues/new). This will happen simultaneously with the steps for opening the job in Greenhouse below.
1. [Log in]({{< ref "greenhouse#how-to-join-greenhouse" >}}) to [Greenhouse](https://gitlab.greenhouse.io/users/sign_in) and hover over the plus sign in the top right corner of their dashboard, and then click [Create a Job](https://app2.greenhouse.io/plans/new).
1. Click on [Start from a copy of an existing job](https://gitlab.greenhouse.io/get_started/show_existing_jobs). From there, select `Any Status` at the top bar, select `Draft`, and choose the template for the division. If you need a template created, please speak with a member of the Enablement team.

Once you've selected a template to copy, the first screen will ask for **Basic Job Info**.

1. The `Internal Job Name` is only viewable within Greenhouse, and the `External Job Name` is what appears on the jobs page. Enter in the requisition's title in these fields, including *Specialty*, if applicable. These two fields will almost always be the same.
1. `Department` is the department this role will fall under. Always choose a department and **not** a division (e.g. for a Security Engineer opening, choose **Security** within the `Engineering` division, and do **not** choose `Engineering`). If you are unsure of what department to choose, reach out to your FP&A partner.
1. If a requisition can be located anywhere GitLab hires, check `Anywhere` next to `Office`. If an opening is dedicated to a certain region or time zone, uncheck the `Anywhere` box and select any of the predetermined regions or time zones.
1. Click `Generate IDs` to create a requisition ID. You’ll need this again when you set up your opening(s).
1. Under `Job Family URL`, ensure you are linking to the correct job family page. It is the Recruiter's responsibility to ensure that the job family has the specific job listed before submitting the requisition for approval. If the job family is currently in approvals, please contact Total Rewards to ensure you are clear before moving forward. If you skip this step and the job makes it to the offer stage, the process will stall during Total Rewards approval and will take significantly longer to get approved. It is OK if the job title in Greenhouse is not identical to the job family for posting purposes.
1. Under `Employment Type`, select your opening type - which unless there is an explicit exception, should be Full-Time. *Contract* refers to a true consultant, who works on short-term projects, and not someone in a country like the Netherlands who requires a one-year contract before indefinite. Talent Acquisition only supports Full Time Employee hiring at this time.
1. Most positions will not be marked confidential. If you have prior approval from Jess Dallmar, Rich Kahn, and Enablement, you can select `Yes` under `Confidential?`. Selecting `Yes` will ensure that the Enablement team specifically excludes any jobs with this selected from reports. It does *not* change access or permissions, so you will still need to evaluate those to remove anyone who should not see your job.
1. `CA/CO/HI/NY/NJ/WA Salary` should be filled in if you believe you may list your position in the United States. If not, Recruiters can list 1-1 as the salary range as it's a required field. To find the salary range, utilize the comp calculator and search for Colorado (metro area = not applicable) for the minimum and California (metro area = San Francisco) for the maximum. This field is tied to your job post, so it's important that it's filled in correctly.
1. Fill in the `Openings Section`. Your opening ID is your req ID with -1, -2, etc following it. It is **not** the GHPID.
1. Enter the `Target Start Date` as listed on the GitLab Hiring Plan
1. Under `Type` choose if this is a *New Hire*, *Evergreen*, or a *Backfill*. If you select *Backfill*, please enter the name of the teammate you are backfilling on the line below. If you choose *Evergreen*, ensure this is first approved by Jess Dallmar.
1. Enter the `GHP ID` listed on the GitLab Hiring Plan. If you do not have a GHPID for any reason, FP&A will not approve your opening and you cannot post your position.
1. Fill in all other fields and continue on to the following pages.

The next page consists of **attributes** interviewers will be evaluating in their scorecards across the full interview process. These may not be known until after the Kick-off Session and may be skipped during the initial setup of the req.

The `Interview Plan` is where you'll craft the hiring process and scorecards for each step in the process. The interview plan may not be known until after the Kick-off Session and may be skipped during the initial setup of the REQ. This section, however, is not optional: It is important that all interview rounds are determined **prior** to opening a req. They should be formatted as `Topic/Competency, Interviewer Name, Interview length` (ie “Ruby Technical Interview, Harry Potter, 60 mins”).

The `Hiring Team` is where you select who will be working on this opening and what access they should have.

- Scroll to the `Who's responsible for this job?` to assign the Hiring Managers, [Recruiter(s)](/handbook/hiring/recruiting-alignment/#recruiter-coordinator-and-sourcer-alignment-by-department), Coordinator(s) and Sourcer(s). Everyone who will be involved in interviewing may not be known until after the Kick-off Session.
- Ensure that only necessary team members have Hiring Manager access in the bottom section. Filter by Job Admin: Hiring Manager and ensure the only people with that level of access are Hiring Managers. Interviewers do not need Job Admin access and should be removed.

Set up Notifications where appropriate. You should make sure that you are always notified for internal candidates and referrals, but the rest is up to your preferences. Most recruiters prefer to use their own names, rather than `Candidate’s Recruiter`, because it ensures they are notified even if the candidate is interviewing for multiple positions and therefore has a different default recruiter.

Scroll to the bottom of the page and click `Request Approval`.

In order to fully open a requisition in Greenhouse, you will need to complete the following approval path:

   1. Finance
   1. Department Lead

If you find that someone is delayed in responding to an approval request, you can click `Send Reminder`, send a Slack, or add a comment to the approvals page while tagging the approver. Ideally, the entire approval process completes within 24 hours.

#### Kick-Off Issue

1. The recruiter will open up a [kick-off issue](https://gitlab.com/gl-talent-acquisition/req-intake/-/issues/new).

### Kick-off & Finalize Greenhouse Setup (DRI: Recruiter)

**The Recruiter will:**

#### Complete the Kick-Off

1. Schedule a [Kick-off Session]({{< ref "req-overview#step-3-complete-kick-off-session-agree-on-priority-level--complete-a-sourcing-session" >}}) or complete a-sync with the Hiring Team.
1. Prepare the job to be posted on the [Careers Page](https://about.gitlab.com/jobs/).

#### Post the job internally

1. Create or update the `Job Post` under `Job Setup`, which will hold the opening description. Next to the name of the opening, click the pencil icon to edit the job post.
   - `Post To` should always be `Internal`.
   - `Location` is automatically set to `Remote`. If there is additional location information you'd like to add that should be included in the Job Name.
   - `Application Language` should always be `English`.
   - `Pay transparency rules` should always be `N/A`, because we do not post salary ranges on internal positions.
   - `Description` copy the [Job Description Template](https://docs.google.com/document/d/1i0P4kUqxLrRCBmf7n9e1qBgB3P4pZhfQziYp7cMIKe0/edit#) for Internal Job Posting. Work with your hiring manager to ensure alignment on the finalized job post.
1. If there are any links in the description, click on the link, then click the link icon in the text box toolbar, then change `Target` to `New Window`, then click `Ok`; this will ensure all links work properly.
1. For the Custom Application Questions, ensure the following questions are included:
   - LinkedIn Profile
   - Please let us know if there are any adjustments we can make to assist you during the hiring and interview process.
   - Have you notified your current manager or PBP that you are applying to this role? Please note that internal candidates are required to speak with their current manager or PBP prior to application.
   - What is the name of your current manager?
1. Settings
   - Send Confirmation Email to Candidates: select the `Internal Auto-Reply after Application` from the drop-down list
   - Application Confirmation Page: Default
   - Uncheck `Include EEOC Questions`
   - Uncheck `Include 'Apply with SEEK' button`
1. Click `Save`, then click the red button to publish the opening to our internal job board.
1. After publishing, announce on Slack in `#new-vacancies` for team members to apply or send in referrals.

```text
Slack message template:

New Job Alert: TITLE
Apply internally: LINK
Review how to make a referral: /handbook/hiring/referral-process/
```

#### Post the job externally

1. Create or update the `Job Post` under `Job Setup`, which will hold the opening description. Next to the name of the opening, click the pencil icon to edit the job post.
   - `Post To` should always be `GitLab`.
   - `Pay Transparency Rules` will help you post salary ranges to your job description, if applicable. If your job will be posted to locations `Remote, Americas`, `Remote`, or `Remote, US` (any positions posted in the US), you should select `Hiring in the USA`. If this job will not be posted in the US, select `N/A`.
1. Copy the [Job Description Template](https://docs.google.com/document/d/1i0P4kUqxLrRCBmf7n9e1qBgB3P4pZhfQziYp7cMIKe0/edit#) for External Job Posting and copy and paste it into the job description section. Work with your hiring manager to ensure alignment on the finalized job post.
1. Ensure the posted job title is aligned with the details outlined on [Slide 10 in the Job Description Rebuild deck](https://docs.google.com/presentation/d/16bqHv6y4o2IIcFo2x6TNvYbK-4jchChASR9byQNdi20/edit#slide=id.g229bf74aa96_0_0).
1. If there is already a job description listed, check to see if the [External Job Description Template](https://docs.google.com/document/d/1i0P4kUqxLrRCBmf7n9e1qBgB3P4pZhfQziYp7cMIKe0/edit#) has been applied and that no salary information is in the job description.
1. If the `Pay Transparency` section is visible, add the CO/WA and CA/NY/NJ salary ranges that you see on the Approvals page.
1. Once your job description is finalized, please copy and add it to the [Job Description Repository](https://drive.google.com/drive/folders/1qzuH4ol8PxIGrf11L13euI8KTzanqtKi) by creating a new Google Document, pasting your description there and titling it Job Title_Department_Date.
1. All external job posts should have resume required in the basic application questions.
1. All external job posts should ask the following custom application questions by default. If further custom questions are desired, discuss this during the kickoff call with your hiring manager:
   - Please choose the country in which you are located.
   - What's the name you'd prefer us to use throughout the interview process?
   - Will you now or in the future require sponsorship for a visa to remain at your current location?
   - Were you referred by a current GitLab team member? If so, please write their name below.
   - Are you subject to any employment agreements and/or post-employment restrictions with your current employer or a past employer?
   - It is important to us to create an accessible and inclusive hiring experience. Please let us know if there are any adjustments we can make to assist you during the hiring and interview process.
1. Ensure the confirmation box is checked and the email is set to the correct auto-reply.
1. Add EEOC questions only if your position will be posted in the US.
1. Uncheck `Apply with SEEK` and `Publish to Indeed`

#### Using job posting rules in Greenhouse

Setting up job posting rules when publishing a new job can save time later on by automatically removing candidates that are applying from countries in which we cannot hire them.

There are two fields that we can consider using job post rules to help manage applications: candidate location and candidate visa sponsorship needs.
The recommendation is to implement a rule on job postings that automatically rejects candidates who are applying from countries where we cannot actively hire.
To do this, the following steps should be taken:

1. In the custom application questions section of the job setup, add the question "Please choose the country in which you are located" and select the option to make this a required question.
1. Navigate to the "Manage Rules" link in the "Job Posts" section of the job setup and choose to "Add a rule".
1. Design a rule so that when a candidate selects a country that we cannot hire them in then they are auto-rejected.
1. Choose "Country Hiring Restriction" as the rejection reason and choose to "send email" using the "Reject because we cannot hire in this country" template to be sent to the candidate.

Similarly, you can set up a custom rule to reject candidates based on visa requirements following the process above and applying rules to the question "Will you now or in the future require sponsorship for a visa to remain in your current location? (Please be aware that GitLab does not offer any form of Work Sponsorship.)

If you are applying rules to reject candidates based on visa sponsorship needs it's important to consider whether there's a possibility that we may reject candidates with complex situations that we actually can hire. If there is any doubt, avoid using rules to reject candidates automatically based on visa sponsorship requirements.

#### Update the Scorecard

1. Update the `Scorecard` after the kick-off Session. The attributes are typically split up into various categories, such `Requirements` (copied from the job family), `Responsibilities` (copied from the job family), and `Values` (standard across all roles, see additional info in the next step).
   - These can be adjusted as needed, but **every** attribute listed should be a must-have and not a nice-to-have.
   - If you want to include nice-to-haves in the scorecard, please create a new category called `Nice-to-haves` and add any applicable attributes there, making sure that your entire interview team knows that if a candidate does not meet any of those attributes it is not a negative against them.
1. To create a new category, scroll to the bottom of the screen and select `Add a Category`, and add the name of the category. In the category you can add additional attributes.
1. The only required category is `Values`, which should never be deleted. The values are listed in such a way to match how the values are listed on our contracts. You will always have this added for you because it is part of every job template.

#### Update the Interview Plan

1. Update the `Interview Plan` after the Kick-off Session.
1. Every opening should have an `Get to Know Us` stage. This is also known as Application Review by the Greenhouse Milestone.
1. Some vacancies have an `Assessment` as the second stage in the process.
   - If your opening requires an assessment but there is no assessment stage already added, scroll to the bottom of the page and click `Add a Stage`.
   - From there, you can either click `Copy from another job?` at the bottom of the pop-up and select an opening you know has an assessment. Click on `Assessment`, then `Add`.
   - If you're not sure of another opening that has an assessment, you can scroll to the bottom of the pre-populated list and select `Take Home Test`, then `Add`.
   - Once added, hover over the new stage and click the pencil next to the stage name and change the text from `Take Home Test` to `Assessment`. Then hover over the second `Take Home Test` on the right of the stage and change the text again.
   - The assessment stage **must** be added using one of the two methods above, or it will not appear in our metrics. If you have any questions about this, please reach out to the Enablement team.
   - Once your assessment stage is created, click `Edit` in the stage. You'll then want to select any attributes you want the grader of the assessment to focus on.
   - Scroll down to `Email to Candidate`. This is where you'll include the actual assessment questions. The "From" should be `{{MY_EMAIL_ADDRESS}}`. In the Body, craft an email and insert your assessment questions. Below the body, make sure that the `link for candidates to submit tests` is **ON**. You can also add any attachments below that field if necessary.
   - Scroll down to `Grading Instructions` and include any specific items you want your graders to look out for when they review the candidates' answers. You can copy this section over from another job if applicable.
   - Under `Custom Questions`, be sure that there is either a `Full Notes` custom question or that you add one. To add it, simply click `Add Custom Question`, title it `Full Notes`, choose `Text` as the answer type, and click `Add Custom Question`. If there are any other specific questions you want your graders to answer when reviewing the assessment, feel free to add them here. They can be required or not, depending on your preference.
   - Under `Graders and Notifications`, search for members of your team who can grade the assessments. You can select multiple people at this point, and when the assessments are actually sent out to candidates, each grader will appear and the person sending the assessment can delete extras so it is only sent to one person. You can also select who you want to be notified when the test is received; the test graders should absolutely be selected, and it's recommended for the recruiter to be notified as well. You can select any additional people to be notified as well if desired.
   - Finally, under `Additional Settings`, check `This interview requires scorecards to be submitted` and leave **unchecked** `Hide candidate name and details from grader`.
   - Then click `Save`.
1. The next stage is the `Screening` call stage, which should be standard across the organization. Click `Edit` on this stage, scroll to the bottom, and choose the recruiter as the default interviewer and set interview duration to 30 minutes. It is important for this stage to be named the same across the organization for reporting purposes.
1. The next stage is `Initial Interview`, where the R&D candidates usually have their technical interview and all other departments usually have a hiring manager interview. Under this stage, you usually will only have one interview. They are typically called “Topic of interview, Interviewer, length of interview”. For example: Technical Interview, Harry Potter (60 mins). This will help CES know what to schedule.  *Please note that this stage operates independently, so you cannot collect availability for a different stage's interviews while in this stage, and you cannot collect scorecards after you've left the stage. Never move a candidate out of this stage while they have a planned interview.* Please see the stage below for additional guidelines.
1. The next stage is `Team Interview`, where the candidates will meet with peers and the hiring manager. Under this stage, you should see multiple interviews. They are typically called “Topic of interview, Interviewer, length of interview”. For example: Technical Interview, Harry Potter (60 mins). This will help CES know what to schedule.
   - The `Team Interview` stage should be laid out according to the order the interviews must take place.
   - The interview plan should be defined during the intake call to include what attributes from the scorecard each interviewer is addressing as well as standard questions each interviewer should ask. **You should always know the interview plan prior to beginning any candidate screens.**
   - The interview plan should be duplicated in the [hiring process repo](https://gitlab.com/gitlab-com/people-ops/hiring-processes).
   - The interview plan should also be defined on the job family page under the Hiring Process section.
1. For each interview, click `Edit`.
   - Select the appropriate attributes to focus on in that interview.
   - To the right of `Interview Prep`, choose how long the interview should take (e.g. 30 minutes, 45 minutes, 50 minutes, etc.).
   - Include the purpose of the call and questions the interviewer should ask. You can copy this over from another opening if applicable
   - Under `Custom Questions`, be sure that there is a `Full Notes` custom question in addition to the interview specific questions.
   - To add additional questions, click `Add Custom Question`, title it `Full Notes`, choose `Text` as the answer type, and click `Add Custom Question`. Each interview topic should use consistent questions between candidates, so the Recruiter should collect those from interviewers and enter them before the interview process begins.
   - The two `Additional Settings` should both be checked.
   - Click `Save`.
1. For Go to Market (Sales and G&A) positions, the next stage is `Debrief`. This is a holding space where candidates should go after all scorecards have been submitted and interviews complete. We use this stage to measure the length of time it takes to make a decision after interviews are complete, and help Recruiters easily identify a candidate who should be kept warm.
1. The next stage is `Background Check & References`, where you will see Reference Check forms. Do not remove or change these forms without speaking to Enablement.
1. For R&D roles, the next stage is the `Debrief` stage. The interview within this stage is called Justification and should include three questions below. It is not an actual interview, but a space where hiring managers are able to explain their rationale for recommending an offer.
   - In what specific way(s) does this candidate make the team better?
   - What flags were raised during the interview process?
   - How do we intend on setting this candidate up for success?
1. The last stage is the `Background Check and Offer` stage and cannot be edited or removed.

On occasion, there may be additional or fewer stages than represented here, but these stages should be consistent as much as possible in order to maintain data integrity for reporting. The interviews within the stages can be adjusted as needed.

#### Update the Hiring Team

1. Update the `Hiring Team` after the Kick-off Session.
1. The Hiring Team is where you select who will be working on this opening and what access they should have.
   - Scroll to the `Who's responsible for this job?` to assign the Hiring Managers, [Recruiter(s)]({{< ref "recruiting-alignment" >}}), Coordinator(s) and Sourcer(s).
   - Scroll to the `Who can see this job?` section to set permissions to the team members who will need access. Search for someone's name, click the pencil and select the correct access level from the drop-down.
   - Ensure that only necessary team members have Hiring Manager access. Filter the bottom section by Job Admin: Hiring Manager and ensure the only people with that level of access are Hiring Managers. Interviewers do not need advanced access and should be removed.

### Publish the Job: Careers Page & LinkedIn

Once a job has been setup in Greenhouse and posted to the GitLab public job board it will be automatically posted to the [Careers Page](https://about.gitlab.com/jobs).

#### Choosing the correct location for your published job

The location field in Greenhouse will dictate where a particular job ends up being listed geographically.

There are set location options in Greenhouse to make this possible. Recruiters can choose from one of the following locations and that will ensure the job shows up on LinkedIn in the countries highlighted below

| Location selection in Greenhouse | Countries where the associated job will post on LinkedIn |
| -------------------------------- | -------------------------------------------------------- |
| Remote | United States, Canada, United Kingdom, Netherlands, Ireland, Australia, India |
| Remote, Global | United States, Canada, United Kingdom, Netherlands, Australia, Ireland, India |
| Remote, Americas | United States, Canada, Mexico, Chile, Costa Rica |
| Remote, EMEA | United Kingdom, Netherlands, Germany, Ireland, South Africa, Belgium |
| Remote, Europe | United Kingdom, Netherlands, Germany, Ireland |
| Remote, APAC | Australia, New Zealand, South Korea, Singapore, Japan, Phillipines |
| Remote, Asia | Singapore, Phillipines, South Korea, Japan |
| Remote, US | United States |
| Remote, US-Southeast | Georgia, North Carolina, South Carolina, Florida, Virginia |
| Remote, Canada | Canada |
| Remote, Chile | Chile |
| Remote, Costa Rica | Costa Rica |
| Remote, North America | United States, Canada |
| Remote, France | France |
| Remote, India | India |
| Remote, Japan | Japan |
| Remote, Germany | Germany |
| Remote, Netherlands | Netherlands |
| Remote, New Zealand | New Zealand |
| Remote, Philippines | Philippines |
| Remote, Sweden | Sweden |
| Remote, United Kingdom | United Kingdom |
| Remote, Australia | Australia |
| Remote, Singapore | Singapore |
| Remote, Europe-North/Central | Austria, Latvia |

If you have a job that needs to show up in a different subset of countries, you can choose the most appropriate location tag and manually adjust the countries where that job shows up by following the instructions under the "Publishing jobs to LinkedIn" section.

#### Preventing a job posting from appearing on LinkedIn

To prevent a job from ever being posted on LinkedIn, include the tag #LI-DNI somewhere in the job description. This will indicate to the LinkedIn job wrapping system to ignore this job and it will not be posted on LinkedIn.

#### Adding additional job posting rules for LinkedIn postings

If you need additional rules set for a job post or set of posts on LinkedIn you can assign your own rules by [following these steps](https://www.linkedin.com/help/recruiter/answer/a413382).

#### Publishing jobs to LinkedIn

All jobs created in Greenhouse are setup to be automatically posted to LinkedIn using their job wrapping feature.

As mentioned in the "Choosing the correct location for your published job" section, the location field in Greenhouse dictates where a particular job ends up being published.

Common issues that may need to be addressed for a job to correctly publish on LinkedIn:

- If the option to `Publish to Free Job Boards` within Greenhouse is selected, this information will override the location information. You should unselect the option `Publish to Free Job Boards`.

#### Removing unwanted source code that will cause errors on LinkedIn

Prior to 2022 we used a more complex system to post jobs to various locations. If your job is showing up in places it should not, you may need to remove existing code from the source code in Greenhouse. To do this, follow these steps:

- Click on the `< >` on the menu bar in the description text box to open the source code
- Scroll to the bottom of the pop-up
- Remove the following HTML if it is present in the source code `<div><span style="font-size: xx-small;"><span style="color: white">Remote-XXX</span></span></div>` anywhere in the job ad
- Click "Ok", then "Save"

#### Taking ownership of your LinkedIn job posts as a GitLab recruiter

With some recent changes to the way greenhouse connects with LinkedIn, we're now able to give each of our recruiters access to edit their job posts on LinkedIn as needed. If you need to change the country or countries that a particular job shows up in or correct something about the listing you can do that by following these steps:

1. Each recruiter has a custom job wrapping tag assigned to them. This is typically a hashtag consisting of #LI- followed by FirstNameInitial, then LastNameIntial, and a number. You can look up your hashtag by logging into LinkedIn Recruiter and [following these instructions](https://www.linkedin.com/help/recruiter/answer/a412402).
   1. Each GitLab recruiter has 50 job slots assigned to them in LinkedIn. Jobs will randomly be assigned to those job slots until all 50 slots are utilized by tagged jobs.
1. Once you've identified your job tagging hashtag you simply add this to the bottom of the job setup in greenhouse.
1. With the custom recruiter hashtag added to the bottom of the job setup in greenhouse, these roles will then be assigned to correct recruiter on LinkedIn.
1. You can then view all of your published roles and make changes on LinkedIn by visiting the [All Jobs page](https://www.linkedin.com/talent/jobs/jobs-list?jobStatuses=%5B%22LISTED%22%5D). Please note you must have an active LinkedIn Recruiter license with GitLab to access that page.
1. To make changes to your jobs on LinkedIn, you can click the "edit job" button.

If you run into problems, you can reach out to the #talent-brand channel for support.

#### How jobs are categorized on our careers site job board

Greenhouse data is fed into our custom jobs page located at [https://about.gitlab.com/jobs/all-jobs](https://about.gitlab.com/jobs/all-jobs/).

Each department in Greenhouse has a specific department ID associated with it. Those department ID's can be found in our [Greenhouse API feed](https://boards-api.greenhouse.io/v1/boards/gitlab/departments).

Specific departments are coded to show up in various categories, this is defined in the openings.js file that can be found in the folder source / javascripts / openings.js.

When new departments are created, we will need to add those to the openings.js file so that they appear correctly on our job board.

If new categories are needed on the [https://about.gitlab.com/jobs/all-jobs](https://about.gitlab.com/jobs/all-jobs/) job board we also need to update that index file.

#### Publishing jobs to Indeed and Glassdoor

Our jobs are now set up to automatically go to Indeed and Glassdoor and be posted as remote roles on both sites.

Recruiters should unselect or leave unselected the option in Greenhouse to "publish to free job boards" as this requires us to input city, state, and country data that overrides the remote job listing. There is an automation in place to automatically send jobs to Indeed and Glassdoor.

#### Publishing Vacancies on External Job Boards

Sometimes we need to post vacancies on specialist job boards to attract talent. The budget for this will come from the Department with the open Req, and department leaders will need to approve the necessary budget.

### Creating an Evergreen Requisition

- After securing approval from Jess Dallmar, Follow the Req Creation process found here. In addition, please be aware of these added steps:
  - Start the Req title with “Evergreen” followed by the name of the req (example Evergreen - Sales Development Representative)
  - Select “Evergreen” when selecting opening Type
  - Set the GHPID to “EVERGREEN”. Both of the steps to label the job as an Evergreen help ensure they do not show up in some reporting.

#### Hiring a Candidate from an Evergreen Requisition

- It is important that before a candidate can be hired, there must be a separate, team-specific req that is tied to the approved headcount and lists the appropriate GHP ID required to hire a candidate. This approved, team-specific headcount req is not posted for applications.
- Once a candidate is identified in the Evergreen req and you have an approved, team-specific headcount req to move the candidate to, proceed with the following steps:
  - Once interviews are completed, BEFORE you move the candidate to the offer stage, click “Add, transfer, or remove candidates jobs.”
(NOTE: It is important that all interviews and scorecards are completed before you take any action to move a candidate from an Evergreen req. Interviews and open scorecards will not transfer once the candidate is moved.)
  - Select “Transfer to a Different Job”
(NOTE: Please be sure to select “Transfer” as opposed to “Add”)
  - Once a candidate is Transferred to the approved headcount req, you can move to offer in that req.

#### Sourcing Candidates for an Evergreen Req

- When sourcing passive candidates for an Evergreen Req, it is important that you add the prospect to the Evergreen req, as opposed to the approved, team-specific headcount req associated with the Evergreen req. Adding prospects to the Evergreen req will ensure that the prospect follows the appropriate interview process and that the appropriate data will be captured.
