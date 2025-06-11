---
title: Security Policies - How we prioritize our current work?
---

## How do we prioritize our current work?

Please refer to the flowchart provided below to understand the process we follow when determining the next task to work on after completing all assigned tasks.

<div class="x-scrollable">
<div style="width: 1800px;">

```mermaid
flowchart TD
    AA{Is there anything on the board<br/>that is currently assigned to you<br/>and you are not blocked?} -->|Yes| A{Take a look at assigned issues according to their states:}
    AA -->|No| BA{Is there anything on<br/>the board you can work on?}
    A -->|workflow::verification| B(Verify the issue,<br/>provide results as a comment<br/>and close it.)
    A -->|workflow::in review| C{All MRs for the issue are merged<br/>, and the change is already deployed?}
    C -->|Yes| D(Verify the issue,<br/>provide results as a comment<br/>and unassign yourself.<br/>Close it when you are not an author of the change,<br/>otherwise once you are unassigned<br/>the bot will select the next person to verify it.)
    C -->|No| E(Wait for review and address comments<br/>in your MRs if there are any.)
    A -->|workflow::refinement| F{Are you reviewing<br/>the implementation plan<br/>or preparing it?}
    F -->|reviewing| G(Review the plan, provide comments if needed,<br/>unassign yourself and move to<br/>`workflow::ready for development` when ready.)
    F -->|refining| H(Provide implementation plan,<br/>provide weight if it is a feature<br/>and ask another team member to review.<br/>Try to time-box this activity to 4h max.)
    A -->|workflow::in dev / workflow::ready for development| I(Make sure it is in the `worfklow::in dev` state.<br/>Work on the issue until you have an MR ready,<br/>then move it to `workflow::in review`)
    BA -->|Yes| BB(Take a look at unassigned issues on the board<br/>according to this order:<br/>- workflow::verification,<br/>- workflow::refinement,<br/>- workflow::ready for development.<br/><br/>When you see another team member is assigned to the issue<br/>and you would like to reduce their load and help them,<br/>reach out to them asking how you can help.)
    BA -->|No| BC(Go to Priorities page.)
    BC --> BD{Are you a DRI for one of the Epics?}
    BD -->|Yes| BE(Prepare implementation issues according<br/>to the Epic Refinement Process.)
    BD -->|No| BF(Take a look at the board<br/>for future milestone for issues to in<br/>`workflow::refinement`<br/>or `workflow::ready for development` states<br/>and start working on them.)
```

</div>
</div>
