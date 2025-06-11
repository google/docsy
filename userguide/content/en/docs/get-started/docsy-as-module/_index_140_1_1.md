---
title: Application Security Testing, Vulnerability Research
---

<p align="center">
  <img
    alt="GitLab Vulnerability Research"
    src="https://gitlab.com/gitlab-org/vulnerability-research/blog/-/raw/master/logo-icon.png?inline=true"
    width="33%"
  />
</p>

## Vision

Facilitate the Application Security Testing stage achieving [lovable maturity](https://about.gitlab.com/direction/#product-strategy) and supporting the [best possible security assessment at the earliest possible moment](/handbook/engineering/development/sec/secure/#vision).

## Customer outcomes we are driving for GitLab

Vulnerability Research sits at the crossroads between the Application Security Testing stage itself, and customers of the stage. We provide enhancements to our products or processes to ensure our products and services are more effective for GitLab's customers.
We strive to enhance our customer experience with regards to providing correct and accurate results from our services.

## Vulnerability Research Team

{{< team-by-departments departments="Secure:Vulnerability Research BE Team" >}}

## Priorities

Vulnerability Research (VR) is a research & development team. VR contributes to GitLab’s business by working with product groups to improve GitLab’s security products. Advanced security is a key driver of GitLab Ultimate revenue.

Our priorities are:

1. Analyze and improve the quality of the results of GitLab’s existing security products, including:
   - Assessing current quality against industry-standard or custom benchmarks.
   - Identifying the types of work required to improve quality.
   - Creating new detection rules or curating existing detection rules to improve detection efficacy.
1. Conduct research experiments that are designed to advance the maturity of GitLab security product categories, including:
   - Short-term bets, aligned and coordinated with product groups.
   - Long-term bets, aligned and coordinated with Application Security Testing stage leadership.
1. Maintain and evolve the [GitLab Advisory Database](https://gitlab.com/gitlab-org/security-products/gemnasium-db), which is used in GitLab Dependency Scanning and Container Scanning.
1. Carry out [CVE Numbering Authority (CNA) duties](/handbook/engineering/development/sec/secure/vulnerability-research/cna/). GitLab is a [CNA](https://docs.gitlab.com/ee/user/application_security/terminology/#cna).

## Common Links

- Slack channel: [#g_ast-vulnerability-research](https://gitlab.slack.com/archives/g_ast-vulnerability-research)
- GitLab group: [gitlab-org/secure/vulnerability-research](https://gitlab.com/gitlab-org/secure/vulnerability-research)

## Mission

Our mission is to advance GitLab's security offerings toward their long-term vision and to elevate GitLab's prominence in the security community. We do this by performing security research, working to improve the efficacy of GitLab's security capabilities, developing proofs of concept, publishing papers, speaking at conferences, and broadly sharing our security expertise and practical experience.

## How we work

### Ideate

- Type of improvement: DevSecOps adoption, Revenue, Security Quality/Efficacy, Cost, Efficiency
- Product orientation: how the product can best benefit from this idea?
- Evaluation criteria: how will we measure progress and success?
- Reviewers: Application Security Testing Product Managers and Engineering Managers
- Publication potential: can we present, blog about, or patent this work?
- Tracking: We use the `group::vulnerability research` label on [gitlab-org/gitlab issues](https://gitlab.com/gitlab-org/gitlab/-/issues/?sort=updated_desc&state=opened&label_name%5B%5D=group%3A%3Avulnerability%20research&first_page_size=100) as our [SSOT](/handbook/company/culture/all-remote/remote-work-glossary/#single-source-of-truth-ssot)

These types of initiative are tracked using the `vulnerability research::initiative` labels, according to the nature of the initiative:

- Product related initiatives are tracked with `vulnerability research::initiative::product`
- Independent research related initiatives are tracked with `vulnerability research::initiative::independent`

### Prioritize

- Success rate: Balance short-term and long-term bets
- Timing: POC projects should always be aligned with short- or long-term product vision (as appropriate), should be developed in consultation with the product team that will eventually inherit it, and an anticipated timeline for that expected handover should be jointly understood.
- Publication: Potential for using as a source for something public

### Prototype

- Timebox: Short-term bets should be mature enough within three months to decide whether to continue them. The time frame for long-term bets is within six months.
- Customers & prospects: Identify those outside our team to help validate the prototypes (including coordinating with PM and UXR)

### Build and Ship

The vulnerability researcher's top priority is, as needed, to support the engineering team until the feature becomes available in GitLab.  A secondary focus is to publish things publicly (blogs, talks, etc.).

## Metrics

Metrics we are working on:

- Reported rule false positive rate - in flight
- Mean time to publish advisory database updates - in discussion
- Mean time to respond to publish new CVEs - in discussion

## Rule Updates

The group focuses on improving the precision and recall of our rulesets; the former by reducing false positives and the latter by reducing false negatives. 

To report an inaccuracy (false positive) or a missed result (false negative), open a new issue using the following templates:

- [Report a _False positive_](https://gitlab.com/gitlab-org/gitlab/-/issues/new?description_template=AST%20Signature%20Inaccuracy%20%28FP%29)
- [Report a _False negative_](https://gitlab.com/gitlab-org/gitlab/-/issues/new?description_template=AST%20Signature%20Missed%20%28FN%29)

Work related to this effort is tracked in this [Issue Board](https://gitlab.com/gitlab-org/gitlab/-/boards/8888142). Issues are labeled using the following:

- _False positives_ should have the labels `AST::Ruleset::FP` and `type::maintenance`
- _False negatives_ should have the labels `AST::Ruleset::FN` and `type::feature`
- Both issue types should also set the category label, for example `Category:SAST`.

We prioritize rule updates and additions based on product management direction, which includes taking into account maximum customer value such as these factors:

- Severity of the rule, because:
  - Customer workflows are more likely to be disrupted by high-severity rules.
  - False-negative results are more concerning if they fail to report a higher-severity vulnerability.
- Customer escalations about the rule or rules due to inaccurate or missing findings
- Benchmarking results and platform-wide data analyses with a focus on false positive rates

We prioritise our work by applying `priority` [labels](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&search=priority) ranging from `1` to `4`, with the former being the highest priority and the latter the least.

### Workflow label usage

The team uses these workflow labels for issues:

- Status `Open` - The issue is not vetted nor prioritized.  Vulnerability Research (VR) with collaboration with PM as needed will prioritize then add the label `workflow::ready for development`
- `workflow::refinement` - The issue needs further input from the team in order to be ready for development.
- `workflow::ready for development` - The issue is ready for a researcher to start work.
- `workflow::in dev` - A researcher is working on it and has assigned the issue to themselves and added this label.
- `workflow::blocked` - Work cannot continue on this due to an outside dependency.  This can be set by anyone collaborating on the issue, generally the assignee.  When using this comment as to why the issue is blocked or link the blocking issue.
- `workflow::in review` - The MRs associated with the issue are in review by the picked and assigned reviewer(s). This label is applied by assignees to the issue once the development is complete.
- `workflow::complete` - The MRs associated with the issue are all merged.  The issue assignee sets this label.
- Status: `Closed` - The MRs associated with the issue is incorporated into a release that is available to customers. The issue assignee sets this state.
