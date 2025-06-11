---

title: Low-Code / No-Code Single-Engineer Group
---







## Low-Code / No-Code Single-Engineer Group

The LCNC SEG is a [Single-Engineer Group](/handbook/company/structure/#single-engineer-groups) within our [Incubation Engineering Department](/handbook/engineering/development/incubation/).

Low-code and no-code are [two distinct concepts](https://lowcode.com/articles/low-code-vs--no-code--the-differences--similarities--and-how-to-.html) that target different personas and require separate product strategies. This page presents low-code and no-code work streams in two sections.

### Latest video

<figure class="video_container">
    <iframe width="600" height="340" src="https://www.youtube.com/embed?max-results=1&controls=1&showinfo=0&rel=0&listType=playlist&list=PL05JrBw4t0KrvsoO39e_NFtFMTIYgSJ7t" frameborder="0" allowfullscreen></iframe>
</figure>

### Recent updates

| Date       | Summary                                                                                                                                          | Video                                                                          |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| 2023-02-01 | [Showcase #1](https://docs.google.com/presentation/d/1uU7wEd0E0hOxdK-TfR1a3OmzNOHHkzRnQ84hiTcIejQ/)                                              | [https://youtu.be/7RQreQQk1NY](https://youtu.be/7RQreQQk1NY){:target="_blank"} |
| 2022-12-17 | [Visual Workflow Builder POC](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/issues/25)                            | [https://youtu.be/DI-IcY6vm6g](https://youtu.be/DI-IcY6vm6g){:target="_blank"} |
| 2022-11-28 | [Automation UX POC](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/issues/24)                                      | [https://youtu.be/w-dGDBlIr0Y](https://youtu.be/w-dGDBlIr0Y){:target="_blank"} |
| 2022-10-31 | [Workflow Automation MVC](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/issues/23)                                | [https://youtu.be/L_pvpjtYdLk](https://youtu.be/L_pvpjtYdLk){:target="_blank"} |
| 2022-10-24 | [Introduce low-code/no-code SEG](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/issues/22)                         | [https://youtu.be/r3Ib00Z5Dj0](https://youtu.be/r3Ib00Z5Dj0){:target="_blank"} |

### No-code (current focus)

#### Problem Statement

At GitLab, issues and MRs are the backbones to project planning and delivery. Project managers typically have processes to update issue assignees, labels and other statuses based on certain triggering events and conditions. However, these repetitive takes do not scale when the orgnization grows and become counterproductive and error-prone.

#### Vision

GitLab's complete DevOps lifecycle solution provides a tremendous opportunity for rule-based automation to streamline across business functions. The visual programming model allows the non-technical business users to then build and own these automation rules.

#### JTBD

When managing projects, I want to automate the repetitive tasks, so I can focus on the more value-added work.

#### Product development group affinity

Given the current focus on the project management automation, the [Project Management group](/handbook/product/categories/#project-management-group) is the SEG's product development group affinity to partner with.

#### Milestones

- 🧭 [Discovery](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/milestones/1#tab-issues) `completed`
- 🛠 [Delivery](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/milestones/2#tab-issues) `in-progress`

#### POC

- [Workflow Automation POC](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/issues/24)

### Low-code (future work)

#### Problem Statement

Gartner predicts by 2024, 75% of software solutions will be delivered with some help of low-code tools. While developers appreciate the efficiency gain, they also share several concerns with room for improvement. For example:

- Overwhelmed by the number of competing solutions and their interoperability.
- Worried about vendor lock-in.
- Concerned about the lack of version control, CI/CD and other fundamental DevOps capabilities.
- Unsatisfied with the scattered dev experience.

#### Vision

GitLab is well-positioned to disrupt the low-code market by unifying a new breed of open-source low-code platforms with GitLab's mature DevOps workflow to provide an alternative software delivery approach with maximized efficiency.

#### JTBD

When building applications with low-code platforms, I want to follow the best DevOps practices, so that my application can be trusted.

#### Milestones

The project follows the [Double Diamond design process](https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)) with an emphasis on delivering customer value early and iteratively.

The project is currently progressing through the discovery phase to understand the problem domain better. The next step is to gather internal and customer feedback on the identified problem and high-level approach. A more concrete delivery plan is to be announced soon after the finalisation of the problem statement.

Epic link: TBA

#### Go to market strategy

Ideally, we can adopt FOSS solutions with an active community. Engaging these communities from day-one means that we can receive feedback from early problem validation, iterative delivery all the way to the final product launch.

In addition, the project may also benefit from the [internal dogfooding process](/handbook/engineering/development/ops/release/dogfooding.html). Teams and individuals who have the need to build internal apps are the candidates for dogfooding the low-code solution.

#### References

- [Direction - No-Code and Low-Code](https://about.gitlab.com/direction/create/nolowcode)
- [Low-code Platform Integration - Ideation](https://gitlab.com/gitlab-org/incubation-engineering/no-code-low-code/meta/-/issues/3)

#### Glossary

**Low-code** typically refers to the development platforms that leverage the graphical user interface or other means to reduce the traditional coding effort to accelerate software delivery. These platforms target developers who are comfortable writing code to introduce additional business logic.

**No-code**'s goal is similar to low-code in terms of expediting application development. However, no-code platforms eliminate the need to write code, therefore, are more prevalent among [citizen developers](https://www.gartner.com/en/information-technology/glossary/citizen-developer).
