---

title: Transition training module to GitLab Learn
description: How to transition a support training module to  GitLab Learn
---

This document covers the process for transitioning existing [GitLab Support training modules](https://gitlab.com/gitlab-com/support/support-training/) to [GitLab Learn](https://gitlab.edcast.com/).

## Requisites

- Complete the GitLab [Learning Evangelist training](https://gitlab.edcast.com/pathways/ECL-f9be1e50-ba17-46b3-af33-731d19b3ffcd).

## Transition template

The following template shows how each element in a Training Module aligns with GitLab Learn components.

```mermaid
graph TD;
    X(Transition Template)-->A
    X-->C
    X-->E

    E(Tasks)-->F(GitLab Learn - SmartCards)
    C(Training Module)-->D(GitLab Learn - Pathways)

    A("Support Learning Objective)-->B(GitLab Learn Journey);


    B-->Z(GitLab Learn)

    D-->Z
    F-->Z
```

## Transition process

### Step 0 - The Handbook Page

Every training requires its content to be in the handbook; the only exception are trainings with `internal use` only content.

### Step 1 - Define transition goals

The first step in the transition is to visualize how the training will work on GitLab Learn, what new components will be used, and which limitations you might have.

The key elements to consider in GitLab Learn are:

1. Quizzes

    At the moment, only single or multi-select answer questions are available.

1. Project type SmartCards

    This smartcard allows the author to request a URL to be given. The functionality is useful for requesting and verifying an issue, such as an access request or pairing issue.

### Step 2 - Create an issue with L&D team for the new pathway

- [Create an issue](https://gitlab.com/gitlab-com/people-group/learning-development/general/-/issues) with the L&D team using the new pathway template.

### Step 3 - Create your Pathway

A Training module becomes a pathway in GitLab learn.

- Create your pathway

    The pathway is similar to the issue used on Training Modules.

- Define collaborators

    Collaborators will be allowed to modify the pathway settings and add smartcards to the pathway.

- Set the pathway to private

    This setting is needed during the transition. The final setting may be different depending on the audience for the training module.

- Create a badge, so members who complete the material will have it in their profile.

### Step 3 - Create the Smartcards

Tasks become smartcards in GitLab Learn.

- Select the option to edit the pathway and from there create the smartcards.
- Any smartcard type can be used.
- Quizzes are optional but recommended. Depending on how long the training can be, we can have one per section or one halfway through and one in the end.
- Make sure to set the smartcard as locked, so any smartcard will require the previous one to be completed.
- Be creative! GitLab Learn offers different smartcard types and also gives room for other tools by allowing `iframes with html`.

### Step 4 - Test Run

As a collaborator or author, the pathway cannot be fully tested. For this step, we will require volunteers to help us test our pathway.

- Maintain the Pathway private and publish it.
- Add the `reviewers` in the `Share` field for the pathway.
- Share the pathway URL with the `reviewers`.

#### What does success looks like ?

- No smartcards can be skipped.
- The quizzes have the correct answers.
- By completing the pathway it will show 100% completed.

### Step 5 - Request final review from the L&D team and publish

- Put a comment in the issue created from the first step to request a final review.
- Once the pathway has been approved and depending on the audience, change it to public.

## Considerations

- Collaboration in GitLab Learn won't be as flexible as in GitLab, and will depend on `Evangelists` or `Curators` for final updates.
- The handbook is the single source of truth (SSOT). For this reason, any change to the training must start in its handbook page.
- A pathway author will be considered as DRI, and must ensure important updates in the training are also present in GitLab Learn as soon as possible.
