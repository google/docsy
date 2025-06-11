The primary purpose of a spike issue is to understand the feasibility of the request and perform a study, research, analysis, or PoC rather than producing a shippable product. The outcome of the spike is to finalize the design of a solution and further plan and break down the work into multiple issues that are weighted depending on their complexity.

To recognize and improve the readability of these issues when they become deliverables, we should:

- Use the label `~"spike"` and the `[SPIKE]` identifier at the beginning of the spike issue title.
- Link the created issues (outcome of the spike) to the spike issue. The labels are copied from the original issue.
- Close the spike issue with a summary of the next steps we will perform to achieve the goal of the spike.

When dealing with a feature request that needs further investigation, we can open a spike issue that assesses the research and is linked to the original issue.

##### Exceptions

There are some exceptions to the rule. For example, when the spike issue is highly discussed and visible to customers, closing the original issue if scheduled (using the `~"Deliverable"` label) as a spike will send the wrong signals to customers. That is when we keep the issue open and remove the `~"spike"` label and the `[SPIKE]` identifier from the spike issue title. For more details see this [example](https://gitlab.com/gitlab-org/gitlab/-/issues/1822#note_dc80fc8669c9d73c699e6e1d56eb363085353df1).
