When we commit to a new milestone, engineering managers apply the ~Deliverable label to all issues they are able to commit to based on capacity. This serves as a promise from engineering to product as well as a signal for the most important issues in the milestone for the team to pick up. At the end of the milestone, successfully completed issues with the ~Deliverable label are assessed against the total number of ~Deliverable issues in order to create the Say/Do Ratio (7 issues completed of 10 committed to is a 70% Say/Do result.) 

There can be a temporary exception from this process for teams that do not yet operate under the normal milestone cadence, e.g. due to greenfield work. These teams need to have their own documented process for tracking Say/Do ratio.

The Say/Do Ratio is a metric used to:

- Provide predictability and stability when milestone planning
- Raise flags about the types of issues that are frequently disruptive
- Measure how well we are meeting our commitments to our customers

### Workflow

We use a standardize workflow that heavily depends on the `~Deliverable` label to measure Say/Do ratio:

* Before the milestone starts:
  * EM applies the ~Deliverable label along with the milestone to issues that Engineering is committed to deliver.
* During the milestone:
  * If a Deliverable is added during the milestone and the current milestone is applied, it should be included in the Say/Do ratio and rules from At the end of the milestone apply.
  * If Deliverable is added and then removed during the same milestone, and no missed:X label is added at the end of the milestone, then this issue won't be counted towards deliverables (no negative impact to say/do ratio).
* At the end of the milestone:
  * If a Deliverable was completed in the given milestone, the issue needs to be closed. This will positively impact Say/Do ratio.
  * If a Deliverable was not completed in the given milestone and needs to be worked on in the next milestone, the EM applies the ~missed:X label and updates the milestone. Alternatively, this step can also be performed by the GitLab Bot who will automatically apply the missed label and update the milestone after the current milestone has concluded. In both cases the missed Deliverable will negatively impact Say/Do ratio.
  * If a Deliverable was not completed in the given milestone and will not be worked on in the next milestone, the EM applies the ~missed:X label and removes the milestone. This will negatively impact Say/Do ratio
* Calculation after milestone X ends:
   * `Say/Do = #closed issues with labels ~deliverable and milestone X / (closed issues with labels ~deliverable and milestone X + issues with ~missed:X label)
