These are the broad definition for each of the weights values. We don't use a Fibonacci-based progression but we do try to split up large issues as we understand they are by definition less accurate predictions.

When issues are Frontend only, we use the Weight feature of Issues.

When issues are both Frontend and Backend we use specific labels to support both weights in the same issue: `~frontend-weight::1` through `~frontend-weight::13`. Only weights between 1-3 can be scheduled into a milestone. Higher ones need to be broken down.

**Note:** Since milestone 13.10, we switched to using a fibonacci based scale. The reason behind this is how hard it's been to distinguish between issues of weight 3 and 4 or weight 4 and 5. Fibonacci allows for a clearer distinction as weights increase.

| Weight | Description  |
| --- | --- | --- |
| 1: Trivial | The problem is very well understood, no extra investigation is required, the exact solution is already known and just needs to be implemented, no surprises are expected, and no coordination with other teams or people is required. |
| 2: Small | The problem is well understood and a solution is outlined, but a little bit of extra investigation will probably still be required to realize the solution. |
| 3: Medium | Features that are well understood and relatively straightforward. Bugs that are relatively poorly understood and may not yet have a suggested solution. |

Anything above weight 3 is unschedulable.

Those are either large amounts of work or have too many unknowns. In that case, opt to break it down into multiple issues right away or open an epic to start a discussion in order to create the multiple steps.

Also consider adding the label: `~"workflow::planning breakdown"`.

**Why?**

This hard limit helps the team embody the [Iteration](/handbook/values/#iteration) value.
