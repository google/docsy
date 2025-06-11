---
title: "Comparative testing for navigation"
---

[Comparative, qualitative usability testing](https://www.uxmatters.com/mt/archives/2017/03/conducting-qualitative-comparative-usability-testing.php) enables you to get feedback on 2-3 designs **early in the design process** to assess the pros and cons of different design directions. This is different from quantitative comparative studies that focus on benchmarking and measurement of the design.

The focus at this stage in the design process is to identify what is working well or not working well with different designs and provide insight on which one to move forward with. This is a within subjects methodology, meaning that each participant will see all designs. By experiencing multiple designs, participants are able to provide useful feedback because they are able to compare and contrast the different designs they've seen.

## Why should I use this method?

If you have 2-3 navigation designs with distinct differences, and you want to see which one is resonating with participants before investing in further. You can use low fidelity prototypes that have just enough interaction to test the tasks in the study.

**Goal:** Compare multiple early prototypes to see which performs better. If participants can navigate to a relevant task/tasks, assess overall usability, and obtain additional insight such as initial impressions, verbal qualitative feedback, etc.

**Benefits:**

- Participants can provide more beneficial and specific feedback because they're exposed to multiple designs. Having participants experience multiple designs to achieve the same goal will enable them to think about the differences between them.
- You will learn qualitative insights such as comments and opinions about the designs from participants thinking out loud.
- You will have quantitative data from Task Completion and UMUX Lite scores to compare your designs, although there are limitations to interpreting the data due to a small sample size. These should be interpreted as directional only.

## What types of research questions can this method answer?

- *Which navigation design performs better? Why?*
- *Which navigation design enables participants to complete their task/achieve most easily?*
- *Which proposed navigation layout makes the most sense? Why or why not?*
- *Do participants know where they are in the application? Why or why not?*
- *Are navigational UI elements standing out to participants? Why or why not?*

## Methodology details

**Type of facilitation:** This kind of testing may be moderated or unmoderated depending on the specific details and goals of the study (e.g., how much qualitative insight are you hoping to learn, can participants get through the prototype on their own, etc), but will likely be moderated to elicit enough qualitative feedback to compare the designs.

**Fidelity required:** A prototype with enough fidelity to test the basic interactions and be able to compare the differences between the designs. For example, if you want to assess whether participants can navigate to an area, you would need an interactive prototype that allows participants to complete that task, and ideally be able to click a couple of "wrong" areas or paths.

**Recommended sample size:** 5, because the goal is to obtain qualitative insights. If you are learning new and significant usability issues after 5 participants, add 1-2 additional participants.

**Number of designs:** It is recommended to [limit to 3 designs](https://dscout.com/people-nerds/comparative-usability-testing) to ensure participants have enough time to get through each design and reduce participant fatigue.

**What to capture:**

- **Task completion**: how many participants successfully completed each task?
  - how does this compare across the designs?
- **UMUX Lite:** UMUX Lite scores and reasoning for their ratings
  - how does this compare across the designs?
- **Usability Issues w/severity** for each design
  - Did participants struggle to find something in the navigation?
  - Did a navigation item label confuse participants?
  - Did the navigation item not behave as expected (such as searching in the top menu)?
- **How participants navigate** to complete tasks
  - Common paths (whether correct or not)
  - Qualitative feedback for why they chose this path

| Metric                    | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                          | What it measures          |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| Task Completion           | Assess if participants completed this task. This should be interpreted as directional only, given the small sample size. For example, this can indicate where to focus improvements/help to prioritize findings.                                                                                                                                                                                                                                                 | Effectiveness             |
| UMUX Lite                 | Two questions on a 7 point scale (1 = strongly disagree and 7 = strongly agree):<br> - 1. [This system's] capabilities meet my requirements.<br> - 2. [This system] is easy to use.<br> <br>This should be interpreted as directional only, given the small sample size and the focus should be on **why** they provided the rating they did. Also collect qualitative feedback to add understanding to their answer by asking **why** participants rated their UMUX Lite as they did.  | Perceived usability       |
| Usability severity rating | Usability issues can be rated as High, Medium, or Low. <br> - **High:** Participants could not complete a task or experienced significant frustration.<br> - **Medium:** Participants had some difficulties completing a task, but could complete it.<br> - **Low:** Participants experienced some minor frustration, confusion, or other issues.                                                                                                                                     | How severe the issues are, informs priority to address |

**Recommended testing platform:** UserTesting for unmoderated,  Zoom for moderated

## How to run a comparative usability test

- Test 2-3 designs max. Testing more than 3 designs may be overwhelming for participants and you may not have enough time in the sessions to cover them all with discussion.
- Test designs that have obvious differences to ensure that participants can distinguish them from each other.
- All participants should see all designs and be given the same tasks for each design, just ensure that you randomize the order of the designs to avoid order effects (tasks becoming easier with each design they experience due to learned behavior).
- Choose the most important tasks to test, mainly to keep the amount of tasks to a minimum. Because you are testing multiple designs in one session, you want to ensure you have time to get through everything.
  - For example, if you have 5 tasks and have 3 different designs, this is actually 15 tasks per participant.
  - Test the session length and gauge participant fatigue by running a pilot session first.
- Collect feedback from participants after each task, after each design, and at the end of the testing session:
  - **Post-task questions:**
    - Do you have any feedback on the activity you just worked on?
    - Was anything particularly easy or difficult (if not already mentioned)?
    - Probe on specific things the participant was doing during the session (if moderated).
  - **At the end of each design:**
(Give UMUX Lite survey first, before asking additional questions)
    - Ask why they gave each the rating the design they did
    - Do you have any feedback on the design you just saw?
    - What did you like or dislike about this design?
    - Probe on anything you observed during the test (if moderated).
    - *Can add more targeted questions depending on anything else you want to learn with the study.*
  - **At the end of each test session, comparing all designs:**
    - Allow participants to review all of the designs they saw first, to refresh their memory (if unmoderated, add a task at the end that allows participants to view all of the designs).
    - Considering the different designs you saw today, if you were to wake up tomorrow and see one of these designs integrated into your GitLab UI, which one would you like to see, and why?
      - What did they like? Why?
      - What did they dislike? Why?

## How to report results

To report brief/initial findings in Slack or in an Issue, please use the following format:

- Number of usability issues found with each design
  - For example, "Design A had 5 usability issues, Design B had 2 usability issues, and Design C had 6 usability issues."
- Top 1-2 usability issues found in each design (highest severity) with a brief description of each
  - Fill out the [usability severity analysis spreadsheet- (internal link)](https://docs.google.com/spreadsheets/d/1LkQG2NT1-xi352i0K_3arV2bYs7RlvJ2/edit#gid=1835440721) to determine severity of issues
  - For example, "2 out of 3 participants struggled to find a recent project with the new placement of the [button or element name]."
- Themes around behaviors that led to the usability issue
  - For example, "2 participants expected to find it [somewhere else]
- Note any other interesting observations or feedback
  - For example, "All 3 participants expressed confusion around the change with [X] because…"
- Note any issues that you plan to address before running the next 2 participants
