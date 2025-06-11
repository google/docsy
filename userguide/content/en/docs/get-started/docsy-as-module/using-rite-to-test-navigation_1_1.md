---
title: "Using RITE to test navigation"
---

Rapid Iterative Testing and Evaluation (RITE) is a [usability testing method](/handbook/product/ux/ux-research/rite/) in which you evaluate a prototype multiple times in a rapid and iterative manner. The goal is not to determine statistical validity, but to observe behaviors, learn insights, and iterate rapidly. This is different from traditional usability testing, because you iterate during testing rather than waiting until the end to make changes. This method is intended to identify and fix as many usability issues as possible while verifying the effectiveness of changes made within testing. This will result in a navigation prototype that we can be highly confident about (in the context of usability), which helps to remove uncertainty around whether a proposed solution will be usable.

## Why should I use this method?

You have a navigation design concept that you want to move forward with, and you want to assess the basic usability of it. You want to know what’s working well and not working well with your prototype early in the solution validation process and test changes quickly. Using the RITE method will enable you to evaluate navigation designs quickly to encourage iteration.

**Goal:** Learn if users can navigate to a task with the new navigation design, assess basic usability, identify aspects works/don't work with the design, and obtain additional insight such as initial impressions and other qualitative feedback.

**The types of research questions this method can answer:**

- *Do users know where to go to complete a task with your navigation design? Why or why not?*
- *Can users complete tasks with your navigation design? Why or why not?*
- *Can users discover something new in the UI with your navigation design? Why or why not?*
- *Does the proposed layout in your navigation design make sense? Why or why not?*
- *Do users know where they are in the application with your navigation design? Why or why not?*
- *Are UI elements standing out to users in your navigation design? Why or why not?*

## Methodology details

**Type of facilitation:** This testing may be moderated or unmoderated, depending on how much you need to probe on any feedback provided by participants, their observed behavior, and their ability to understand the prototype on their own. Participants should utilize the think-aloud method.

**Fidelity required:** A prototype with enough fidelity to test the basic interactions should be used for this kind of testing. For example, if you want to assess whether participants can navigate to an area, you would need an interactive prototype that allows participants to complete that task, and ideally be able to click a couple of “wrong” areas.

**Recommended sample size:**  It varies, depending on whether or not you continue to find issues. With the RITE method, you start with 3 participants, fix any usability issues that were found with the initial design, and test with 2 additional participants for a total of 5 participants. If no additional issues are found you’re done. If additional issues are found, add another 3 participants until no further issues are found.

**What to capture:**

- How participants navigate to complete tasks
  - Common paths (whether correct or not)
    - Why they chose that path via qualitative feedback
- What impacted their success
  - What made the task difficult/easy?
  - If there was difficulty, was the participant able to recover? If so, how much effort was needed? why?
  - Did participants notice something (we wanted them to notice?)
- Usability Issues
  - Did participants struggle to find something in the navigation? why?
  - Did a navigation item label confuse participants? why?
  - Did the navigation item not behave as expected (such as searching in the top menu)? Why?
  - Issues should be classified in each session following this format:

**Usability problems identified in a session are categorized into the following [categories](/handbook/product/ux/ux-research/rite/#elements-of-rite):**

| Category | Description| What to do |
|-----|-----------|-----------|
|A|Issues with an obvious cause and an obvious solution that can be implemented in the prototype quickly, such as text changes, re-labeling buttons.|Implement solutions immediately and this will be the version for the next test session.|
|B|Issues with an obvious cause and an obvious solution that can’t be implemented quickly/by the time of the next test session.|Start working on the solution to address these issues and test in an upcoming session.|
|C|Issues with no obvious cause or due to other factors, such as task instructions. |Collect more data in the upcoming session until they can be promoted to Category A or B.|

**Qualitative feedback about their experience**

- Post-task questions:
  - Do you have any feedback on the activity you just worked on?
  - Was anything particularly easy or difficult (if not already mentioned)? why?
  - (If moderated), probe on specific things the user was doing during the task.
- Post-test questions:
  - What did you like or dislike about the experience?
  - (If moderated), probe on any interesting/unclear behaviors/observations observed during the test.

## How to run a RITE study

Refer to the [RITE handbook page](/handbook/product/ux/ux-research/rite/#a-sample-rite-study-approach) for details.

**Recommended platform:** UserTesting for unmoderated studies, Zoom for moderated studies.

## Reporting results

To report brief/initial findings in Slack or in an Issue, please use the following format:

**After the first 3 participants:**

- Number of usability issues found
- Usability issues found with a brief description of each
  - For example, “2 out of 3 participants struggled to find a recent project with the new placement of the [button or element name].”
- Themes around behaviors that led to the usability issue
  - For example, “2 participants expected to find it [somewhere else]
- Note any other interesting observations or feedback
  - For example, “All 3 participants expressed confusion around the change with [X] because…”
- Note any issues that you plan to address before running the next 2 participants.

**After the next 2 participants:**

- If additional issues are found:
  - Note the number of usability issues found, provide descriptions of each issue, and any themes around behaviors (same as format above for the first 3 participants).
  - Note any other interesting observations or feedback.
  - Note any issues that you plan to address before running 3 additional participants (repeat adding participants as indicated above).
- If no additional issues are found:
  - Note that no additional usability issues were found
  - Themes around behaviors and any associated feedback
    - For example, “All 3 participants were able to find the [name or element name] easily.” The placement is where they expected to find it, and they felt the label was intuitive.

In addition, if there is any context that you can provide in your interpretation of the results that is helpful. For example, if participants selected Merge Requests in the left sidebar, you can add that the common incorrect first click in this area may be due to the task calling out a merge request.
