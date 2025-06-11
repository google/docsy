---
title: "UX Heuristics"
description: "Heuristics used by the UX team to evaluate our product."
---

## Intro

UX Heuristics are guidelines we can use to grade experiences in our product. They can also be useful while designing because you can use them to make design decisions or identify parts of your design that still need work.

This list can change and the handbook version is the SSOT. It's based on best practices in the UX field, as well as feedback from our customers as to what they want their GitLab experience to be like.

## Templates

- [Competitor Evaluation](https://gitlab.com/gitlab-org/competitor-evaluations/-/issues/new?issuable_template=Competitor%20Evaluation)
- [UX Scorecard Issue Template](https://gitlab.com/gitlab-org/gitlab-design/-/issues/new?issuable_template=UX%20Scorecard%20Part%201)

## Heuristics

| Category | Heuristic | Description |
| ------ | ------ | ------ |
| Usability | Visibility of system status | Communicating the current state allows users to feel in control of the system, understand available actions and how to use them to reach their goal, and ultimately establishes trust in the brand. This heuristic differs from the "real-time user interface" heuristic (see below) in that it is a deeper understanding of what is going on with the tool or product (consider a dashboard), whereas real-time user interface is communicating something about the tool or product when change occurs (being notified immediately if there is a dramatic change to one or more metrics on that dashboard). (source: NN/g) |
| Usability | Flexibility and efficiency of use | Shortcuts (unseen by the novice user) speed up the interaction for the experts such that the system can cater to inexperienced and experienced users. Frequent actions can be customized or automated. Users can customize the tool for their needs and personalization is used appropriately to reduce tedious tasks. (source: NN/g) |
| Usability | User control and freedom | Allow people to exit a flow or undo their last action and go back to the system’s previous state. (source: NN/g) |
| Usability | Recognize, diagnose, recover from errors | Make error messages visible, reduce the work required to fix the problem, and educate users along the way. (source: NN/g) |
| Desired Characteristics | Real-time user interface | When a change of system status occurs, the interface instantly provides feedback to users. (see: [The future of MRs: Real-time collaboration](https://about.gitlab.com/blog/2019/12/19/future-merge-requests-realtime-collab/)) |
| Desired Characteristics | A tool the whole team can use | GitLab should be usable regardless of your role in DevOps or your technical ability. (see: [GitLab Direction #personas](https://about.gitlab.com/direction/#personas)) |
| Desired Characteristics | Minimal setup required | Configuration choices that are well thought out and based on current best practices. (see: [GitLab Product Principles #convention-over-configuration](/handbook/product/product-principles/#convention-over-configuration)) |
| Desired Characteristics | Documentation is easy to use | Documentation is clear, concise, well organized, easy to follow, easy to understand, and technically accurate. |
| Onboarding | Features communicate the problem being solved and value to a new user | When users explore an unfamiliar feature, they should be able to quickly understand how it is or isn't relevant to them. |
| Onboarding | Features/workflows have clear calls to action. | A call to action should make it clear what is to be done to move the task forward.  At the very least, there should be links to documentation for assistance. At best, guided setup.|
| Onboarding | Tasks are easy to learn, or if highly complex, have setup support in the form of in-app guidance, defaults, templates or wizards. | Tasks should be intuitive first and foremost, and when they are complex, they must provide tools to enable learning. |

## Scoring

Scoring these heuristics can have an element of subjectivity, but the more you involve other users in the evaluation the less subjective it will be. Heuristic scoring is optional, but consists of scoring all [11 heuristics](/handbook/product/ux/heuristics/#heuristics) for a part of the product on a 1-5 scale using the scoring table below. This [scoring sheet](https://docs.google.com/spreadsheets/d/1KwktDjTnM7eZlI8aj3jk7KbRpkfexJV20-6cTNMtz5w/edit?usp=sharing) allows you to easily record your responses and determine an overall score (average of individual scores for the 11 heuristics).

| Badge | Score | Summary | Description |
| --- | --- | --- | --- |
| A | 5 | Excellent | The heuristic is met in every way and optimized. Future improvements are minor. Users may even report that completing the task is delightful. Users report exceeded expectations and high confidence of task success. |
| B | 4 | Good | The heuristic is met in almost every way, with no more than minor exceptions. The task is streamlined, pleasant and highly usable. Users may report exceeded expectations and medium high - high confidence in task success. |
| C | 3 | Average | The heuristic is mostly met. Exceptions could require minor workarounds, but the completing the task is relatively straight forward and overall meets expectations. Users may report only moderate confidence in task success. |
| D | 2 | Below Average | The heuristic is lacking in significant ways leading to frustration. The task requires workarounds to complete or otherwise does not meet expectations. Users report low confidence in task success. |
| F | 1 | Bad | The heuristic isn't met. It may be completely ignored, or so poorly implemented that the task is impossible to complete. |
| - | - | Unknown | This task hasn't been scored. |

If you're completing a UX Scorecard, please use the [UX Scorecard Grading Rubric](/handbook/product/ux/ux-scorecards/#grading-rubric).

## References

- [Nielssen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [UI Tenets & Traps](https://uitraps.com/)
