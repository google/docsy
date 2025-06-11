---
title: "The IP Assignment and when to show it"
description: "Learn about what the IP Assignment is and when to show it to research participants."
---

The Intellectual Property (IP) Assignment is a short acknowledgement by which participants in UX research activities confirm that IP rights in any feedback, suggestions and ideas they provide are (i) owned by GitLab; and (ii) to the extent not already owned by GitLab, assigned to GitLab.

### How is IP defined in this context?

IP is purposefully not defined in the IP Assignment, but taking the natural meaning of the word, this includes, without limitation, any registered IP rights (including patent rights and registered copyrights), and any unregistered IP rights (including moral rights, inventions, and unregistered copyrights).

### When to show the IP Assignment

The IP Assignment is not required for all UX research activities. As a general rule, it needs to be shown when there's a possibility that the participant will provide suggestions or solutions in the course of their participation in a research activity.  Some research methods are more likely to yield suggestions or solutions than others.

The below table provides guidance on when to show the IP Assignment. Irrespective of the research method, **the IP Assignment should be shown whenever you anticipate that participants will provide suggestions or solutions in their responses**. If you're in any doubt, reach out to [#legal](https://app.slack.com/client/T02592416/C78E74A6L) to confirm.

| UX research method                             | Show IP Assignment? | Why?                                                                                                                            |
|------------------------------------------------|---------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Participatory design                           | Yes                 | Participants are providing suggestions and solutions in their responses. If those include code contributions, the [Individual Contributor License Agreement (ICLA) question](/handbook/product/ux/ux-research-coordination/ip-assignment/#frequently-asked-questions) must also be shown. |
| Interviews and focus groups                    | Maybe               | If you anticipate the participant will provide suggestions or solutions in their response, the IP Assignment must be shown.     |
| Longitudinal studies                           | Maybe               | Refer to `Interviews and focus groups` above.                                                                                     |
| Surveys w/ open-ended questions                | Maybe               | Refer to `Interviews and focus groups` above.                                                                                     |
| Solution validation                            | Maybe                  | Refer to `Interviews and focus groups` above.                                                                                |
| Card sorting and Tree testing                  | No                  | Responses will not yield suggestions or solutions.                                                                              |
| Diary studies                                  | No                  | Responses will not yield suggestions or solutions.                                                                              |
| Category Maturity Scorecarding & UX Scorecards | No                  | Responses will not yield suggestions or solutions.                                                                              |
| Surveys (multiple choice, ranking, scoring)    | No                  | Responses will not yield suggestions or solutions.                                                                              |

### Who is responsible for determining if the IP Assignment needs to be shown?

The research project DRI is responsible in determining if the IP Assignment needs to be shown.  This is because they have the closest knowledge of the research questions and what desired output of the research project. If the research project DRI is unsure whether the IP Assignment needs to be shown, they can always reach out to [#legal](https://app.slack.com/client/T02592416/C78E74A6L) to confirm.

### How we show the IP Assignment

The research tool being used (for example Qualtrics, UserTesting, Respondent) determines how the IP Assignment can be shown.  Choose one of the two following options, but in either case display the IP Assignment at the start of the survey, screener, or email.

1. **A statement** - This is a statement which requires no user action.  The act of participating in the research activity constitutes assent to the IP Assignment.
     - `By participating in this, and any future, research activities with GitLab, you acknowledge that GitLab B.V. will retain all intellectual property rights in any suggestions, ideas, enhancement requests, feedback, or other recommendations you provide which are hereby assigned to GitLab B.V.`
1. **A question** - This is a question which requires the participant to choose 'Yes' to indicate their acceptance of the IP Assignment.  If they choose 'Yes', they will continue with the research; if they choose 'No', they cannot take part.
     - `I agree that by participating in this, and any future, research activities with GitLab, GitLab B.V. will retain all intellectual property rights in any suggestions, ideas, enhancement requests, feedback, or other recommendations I provide which are hereby assigned to GitLab B.V.`

       `[ ] Yes`
       `[ ] No`

### Frequently Asked Questions

- **Question:** My research study will result in code contibutions from my participants.  What's the ICLA question I need to ask?
- **Answer:** Below is the exact question to ask.  Note the active link in the statement.

  - `Any code contributions you make as part of your participation in this research activity are made subject to [GitLab's Individual Contributor License Agreement](https://docs.gitlab.com/legal/individual_contributor_license_agreement/).`

       `[ ] I accept the terms of GitLab's Individual Contributor License Agreement.`
       `[ ] I do not accept the terms of GitLab's Individual Contributor License Agreement.`

- **Question:** I'm planning to run a blind study.  Do I need to show the IP Assignment?
- **Answer:** If you anticipate the participant in the blind study will provide suggestions or solutions in their response, the IP Assignment must be shown. This requirement may prevent a blind study from taking place. If the blind study is run by a third party vendor, it's likely that vendor will include suitable IP assignments in (i) the end user terms of service between the vendor and their research panel participants; and (ii) the vendor agreement between the vendor and GitLab.  Reach out to [#legal](https://app.slack.com/client/T02592416/C78E74A6L) to confirm suitable IP assignments are in place for a given vendor.

- **Question:** Do we treat non-GitLab users any differently?
- **Answer:** No.  Same guidelines apply.

- **Question:** If the participants are anonymous, are there any special considerations?
- **Answer:** No.  Same guidelines apply.

- **Question:** Are these IP Assignment options included in the Qualtrics survey question library?
- **Answer:** Yes. To access the IP Assignment options from within your Qualtrics survey, follow these steps: (1) create a survey question, (2) in the "..." select replace from library, (3) select the "UX Research & Product" library, (4) select "Question Library", (5) select the IP Assignment option that you want to use:  "IP Statement", "IP Assignment Question", or "Individual Contributor License Agreement (ICLA)", and (6) select "Import"
