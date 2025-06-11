---
title: "How to identify low quality data when designing and reviewing your survey"
description: "Information to help you detect when you have data you should likely remove from your survey."
---

A major challenge in UX Research is ensuring data is representative of the users you are trying to sample. Unlike with interviews, where you can assess the quality of a response by talking to a person for a set period of time, survey data is harder to verify because it is usually anonymous and there is a greater quantity of individual responses to parse through. When conducting a survey, an important goal is to limit the amount of low quality data (for example: data provided by bots or AI instead of humans, false/inaccurate data provided by humans), so that you can be more confident in your survey results. This handbook page covers various ways you can improve your survey design and analysis to make you more confident with the quality of data in your final dataset.

## Ways to design your survey to identify invalid survey responses

### Attention checks

Attention check questions are designed to ensure participants are paying attention and responding thoughtfully. Consider including an attention check question to more easily filter during cleaning and analysis.

* **Example:** "Please select 'agree' for this question to confirm you're paying attention." If the respondent selects 'agree', this indicates they are reviewing and responding to questions carefully, so this respondent shouldn't be removed.
* **Example:** "The following question is to verify that you are a real person. Please enter the word 'Red' into the box below." If the respondent responds 'Blue', this suggests they are likely not paying attention and should be removed from the dataset.

Attention checks should be used strategically. They are best suited for complex surveys, long surveys, and surveys with a large number of multiple choice questions. They are not suited for short surveys, surveys with a large number of open responses, and screener surveys.

### Bot detection and fraud detection

We suggest enabling settings for [bot detection](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/?parent=p0082#BotDetection) AND [fraud detection](https://www.qualtrics.com/support/survey-platform/survey-module/survey-checker/fraud-detection/?parent=p0082#RelevantID) in Qualtrics. Comparing scores from both survey settings within the data will help you determine whether or not to [filter out participants](https://www.qualtrics.com/support/survey-platform/data-and-analysis-module/data/filtering-responses/).

* **Example:** If a respondent has a bot detection score of 0.2 and a fraud detection score of 100, this suggests responses are problematic and could be removed.
* **Example:** If a respondent has a bot detection score of 0.9 and a fraud detection score of 10, this suggests the feedback is legitimate.

| Survey Setting | Column Name in Qualtrics Data | Minimum Value | Maximum Value | Interpretation of Score |
|----------------|-------------------------------|---------------|---------------|-------------------------|
| Bot Detection | Q_RecaptchaScore | 0 | 1 | Score of less than 0.5 means the response is likely a bot. |
| Fraud Detection | Q_RelevantIDFraudScore | 0 | 130 | Score greater than or equal to 30 means the response is likely fraudulent and a bot. |

## What to look for when cleaning survey data

### Incomplete survey responses

Incomplete responses can skew data analysis and interpretation. It's essential to define what constitutes an incomplete response. For instance, if a survey has ten questions and a participant only answers three, you may want to remove that response.

* **Example:** A participant starts the survey but drops out after the demographics section, leaving the rest of the questions unanswered. This response should probably be dropped.
* **Example:** A survey respondent completes the NPS question, but fails to provide an open-ended response. This response may not need to be dropped.

### Participants that don't match our desired criteria

Filtering out participants who don't meet the criteria ensures that the data collected aligns with the survey's objectives. Define your criteria clearly to facilitate this process.

* **Example:** In a survey aimed at paid users, responses from users on a free plan need to be excluded.
* **Example:** Screener survey data from respondents who do not initially meet study criteria should be kept in case the criteria needs to be adjusted later on, so respondents who might not be a perfect fit could participate.

### Responses that are completed too quickly

Rapid completion may indicate that participants are not engaging thoughtfully with the questions, potentially leading to unreliable data.

* **Example:** A survey with several complex questions that is completed in less than 30 seconds should be considered suspicious and a candidate for removal.

### Straightlining or other pattern based responses

Straightlining occurs when respondents consistently choose the same response option without considering the question. It can indicate inattentiveness or a lack of genuine engagement.

* **Example:** A respondent selects "strongly agree" for every question in the survey. There is no perfect solution to straightlining or other pattern based responses. If there is only one or a small number of these responses it is best practice to remove those participants because their data is untrustworthy. If you find a large number of these kinds of responses in your data you can adjust your survey to avoid matrix style questions with too many options or to present one question per page.
* **Example:** A respondent who picks a mix of "strongly agree" and "agree" throughout the survey shouldn't be excluded.

### Inconsistent responses

Inconsistencies may indicate misunderstanding, lack of attention, or even intentional deception. Investigate and reconcile conflicting information.

* **Example:** A respondent states they only use GitLab, but mentions performing pull requests (GitHub terminology) in their role instead of merge requests (GitLab terminology). This feedback suggests they are not a GitLab user and could be removed from the dataset.
* **Example:** A respondent states they use GitLab and have experience doing merge requests in their groups and projects (GitLab specific terminology). This response is consistent with someone who has used GitLab, so they should remain in the data.

### Nonsensical or suspicious (i.e. AI generated) open ended feedback

Open-ended feedback should be coherent and relevant. Nonsensical or suspicious responses may indicate automated or fraudulent submissions.

* **Example:** A response consists of random characters or does not address the question asked might be considered feedback left by AI. This would suggest they are a candidate for removal.
* **Example:** A response that directly answers the question and sounds like a human wrote it would likely be considered non-AI generated feedback, so the respondent should not be excluded.

Common AI generated phrasing that could suggest fraudulent or insincere responses:

* "I apologize for the inconvenience. Unfortunately, I am unable to provide real-time data at this moment."
  * This response demonstrates typical AI behavior by offering a polite apology but failing to provide a direct answer and specifically mentions real-time data. AI-generated responses often default to formal language and may avoid committing to real-time interactions, leading to vague or evasive responses.
* "As of my last knowledge update..."
  * This response displays AI's tendency to rely on qualifiers and pre-programmed responses. AI-generated content often includes disclaimers or phrases indicating reliance on outdated information, reflecting the system's inability to provide real-time updates or nuanced understanding.
* "Certainly, here is a summary of the requested information."
  * This response exhibits characteristics typical of AI-generated content by using formal language and offering to provide information in a structured format. AI-generated responses often prioritize delivering data or summaries in a straightforward manner, lacking the spontaneity and contextual understanding inherent in human communication. The use of the word "certainly" followed by a predetermined action (providing a summary) suggests a scripted response rather than a genuine human interaction.
