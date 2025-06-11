---
title: R&D Tax Credits
---

GitLab submits applications for R&D Tax Credits in a number of jurisdictions that implement reimbursement schemes for research and development. A subject-matter expert (SME) from engineering is appointed to each application to assist with data collection. A third-party tax agent prepares and submits the report. SMEs are usually Engineering Managers or Directors and located in, or with reasonable knowledge of, the jurisdiction under application.

## Role of the SME

The role of the SME is twofold:

* Collect data on time spent on R&D by team-members located in that jurisdiction during the tax period.
* Compile information on qualifying R&D projects.

The tax agent will be available for regular meetings to clarify each of these tasks. Specifics will differ by jurisdiction.

### Time-spend calculation

GitLab's Tax team will provide a pivot table of team-members who occupied qualifying roles within the jurisdiction in the year under review. The SME is required to quantify the amount of time spent on 'qualifying activities' during that year.

That can be done by engaging with managers of those team-members. However, this is time-consuming and some basic heuristics can be used to create sensible defaults:

* **Engineers** who spent the full year in the role will typically have a high level of time-spend. Since almost all GitLab categories [qualify](#qualifying-rd-projects), as "R&D", and feature, bug, maintenance and code review work contributes to these, the majority of their time will qualify also. It's not unusual to see time-spend at 95% for engineers, with 5% removed for training and mentoring.
* **UX** and **Product Design** while, a highly technical role at GitLab, qualifies only in research and not in design work, unless it informs the technical implementation of the feature. It's common to see figures as low as 5-10%, although those have been higher at GitLab.
* **Technical Writers** typically do not contribute time-spend. Exceptions would be where a feature is documentation-based and the TW made direct contributions to the novelty of the feature.
* **Managers** located in the territory contribute an amount proportionate to the number of reports they had in the territory over the time in qualifying roles, plus their own contributions. For example, if a manager managed 10 engineers with only one in the territory for half the year, and spent 20% of their time making contributions directly, they would be considered to have spent for 24% of their time on qualifying activities (8% for one report, divided by 2 for half of the year, plus 20%).
* **Directors** contribute 0% of their time to qualifying activities. This may vary depend on the team members' specific responsibilities.  Consult with the tax advisor for your jurisdiction.

Details will vary between territories in how time-spend is counted for various roles within GitLab and your tax agent will advise.

PTO is considered to be a given and time-spend proportion should be based on working time alone. Changes of role or territory should be pro-rated. For example, a team-member who worked exclusively on qualifying activities but spent 10% of the year on PTO would be considered to have a time-spend of 100%. If the same person transferred from a non-qualifying role or relocated into the territory halfway through the year, then their time-spend would be 50%.

### Qualifying R&D Projects

What qualifies as "R&D" will differ in nuance between territories and the tax agent will be able to advise on exactly how. The criteria are often qualitative, such as:

* Did technological uncertainty exist?
* Was there a process of experimentation?
* Was the outcome a piece of novel technology?
* Was it difficult for "a qualified professional in the field" to replicate?

GitLab's standard process for [product development](/handbook/product-development/product-development-flow/) meets the criteria in most cases. As a result, it is typically *not* necessary to compile a list of R&D projects worked on.  Instead you can use a summary of Release notes as the list of R&D projects, and set team member allocations based on their participation in GitLab's standard process for [product development](/handbook/product-development/product-development-flow/).

An issue can be opened using the script in the [R&D Tax Credit Automation](https://gitlab.com/gitlab-org/ci-cd/r-and-d-tax-credit-automation/) project, which will be populated with the features released during that tax year. This can then be used as a basis for drafting the report.

In some jurisdictions, such as the UK, it's enough to detail 3-5 projects along with the contributions by team-members in that territory, then to list the rest. Other jurisdictions will require a different approach. The tax agent can advise as they will draft the final submission.

### Precedents

| Year | Territory | Link | DRI |
|---   | ---       | ---  | --- |
| FY20/CY19 | USA       | [Development Department support of CY2019 R&D Tax Credit](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/9140) (internal) | Sam Goldstein |
| FY21 | USA       | [FY2021 US R&D Tax Credit - Supporting Documentation](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/11982) (internal) | Sam Goldstein |
| FY22 | USA       | [FY2022 R&D Tax Credit - Supporting Documention](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/13988) (internal) | Sam Goldstein |
| FY22 | Australia | [FY2022 AU R&D Tax Credit - Supporting Documention](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/12571) (internal) | Thiago Figuerió |
| FY22 | UK        | [FY2022 UK R&D Tax Credit - Supporting Documention](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/12591) (internal) | John Hope |
