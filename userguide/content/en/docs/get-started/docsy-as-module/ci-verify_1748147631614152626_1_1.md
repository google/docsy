---
title: "Continuous Integration (CI) / Verify Workshop"
---

View the [Customer Success homepage](/handbook/customer-success/) for additional Customer Success handbook content.

---

The following items are for the CI/Verify workshop that the CSM team will deliver to the customer in conjunction with the SA and sometimes PS as half-day, free workshop to enable the customer to see first-hand how easy CI is with GitLab:

### Workshop Deliverables

#### Project Conversion

Create a project plan for converting a project. Rough outline:

1. ​Fork a project to GitLab.com and make it private.
2. ​Add the customer and members of this team to the project.
3. ​Convert the project to GitLab CI. Create a working .gitlab-ci.yml file.

#### Workshop Qualification/Scope

- Customer scoping…
  - Must be an existing customer.
  - Preferably Commercial customers because Enterprise customers tend to have larger, more complicated pipelines.
  - Commercial is more agile and quicker to adopt new tools.
  - Enterprise is also very siloed. We may not be able to speak with a DRI for CI/CD tooling.
  - Don't want to consider prospects as this is about customer stage adoption as opposed to closing sales.
  - Must be using GitLab for SCM.
  - Must have the desire to move to GitLab CI/CD.
  - This is not a sales tactic to produce growth. If they are resistant or unsure, then its not going to be successful.
- Project scoping…
  - Choose a simple pipeline… build, test, deploy.
  - We can add Security scanning as part of the proof of concept.
  - Must be willing to upload the project onto gitlab.com.
  - Anything that has multi-child pipelines, DAG, etc. is probably too difficult & time consuming.
  - Something that can be converted with a few hours of work.
  - We want to show value and the path, but not do all the heavy lifting.

#### User Enablement

Overview and training on scaling CI with GitLab using the enablement deck below

Key Topics:

1. Work with the customer's users to enable them on GitLab CI/CD.
2. How to write a .gitlab-ci.yml file.
3. How to use the GitLab (Shared) Runners.
4. How to create templates for standardization & quick scaling

### Resources

[GitLab CI/CD Conversion Workshop Sell Sheet](https://docs.google.com/document/d/1dVaFVvBJtoscC0oIrEM5nmv1-QB0xXTDICmVd55a0xY/edit) (GitLab internal WIP)

[GitLab CI Enablement Deck - Best Practices in Migrating from Jenkins](https://docs.google.com/presentation/d/1eR_874yUHu5Yz8jC-7Gwtiz9j8N4APlgz7NT1_UR0mE/edit#slide=id.g849e6d84e3_0_636) (GitLab internal WIP)

[Adopting GitLab CI at scale doc](https://docs.google.com/document/d/19oKupXi_nnFwD0VOilMhTH2nzUvrBN3P9hI-R5c6P8w/edit#heading=h.b61novry8f4t) (GitLab internal WIP)
