---

title: "CSM Infrastructure Upgrade Coordination"
---

## Overview

Customers on self-managed GitLab deployments may need to upgrade to new
infrastructure for a number of reasons, including moving to a cloud provider,
utilizing technologies such as Kubernetes, or because GitLab growth requires
more computational resources. GitLab provides recommended [Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/#available-reference-architectures)
for different scales.

CSMs are the primary point of contact for customers and are responsible for
coordinating with the customer and internal teams so that an infrastructure upgrade
plan can be established. CSMs may provide documentation and high-level guidance
but the technical implementation should ideally be provided by Professional
Services via [Dedicated Implementation Services](https://about.gitlab.com/services/implementation/enterprise/).

## Infrastructure upgrade coordination

This is a high-level process for CSMs coordinating an infrastructure upgrade:

1. CSM establishes specific customer requirements for the hardware upgrade e.g.
   what growth a customer anticipates.
1. Recommended: CSM involves Professional Services and recommends using [Dedicated Implementation Services](https://about.gitlab.com/services/implementation/enterprise/) to
   facilitate the migration to new hardware.
   1. **NOTE**: For large hardware
   upgrades (5000+ users) it is **highly recommended**  that Professional
   Services are involved via [Dedicated Implementation Services](https://about.gitlab.com/services/implementation/enterprise/). This
   ensures that the customer's hardware upgrade plan is sufficient and that the
   migration can be performed with minimal interruption. Migrations of this size
   often take at least three months to plan and execute.
1. Should a customer choose not to procure Professional Services, a CSM can
   provide relevant documentation e.g. for [Reference architectures](https://docs.gitlab.com/ee/administration/reference_architectures/#available-reference-architectures)
   but won't provide a detailed hardware upgrade plan.
   1. Other internal teams (Product, Quality, Support, etc.) may assist if specific questions arise.
1. Once a hardware upgrade plan is created, either via Professional Services or
   by the customer, the CSM shares the plan with Support. The Support team will
   review the plan for feedback..
1. During a non-ProServ assisted migration, if the customer encounters problems
   during the migration itself, then Support will be the primary point of contact via our support process.

## Architecture review

When a customer is planning an infrastructure upgrade, they may want to review their proposed architecture with their CSM. Likewise, the CSM should be asking the customer for an architecture diagram and ensuring that they are following one of our [reference architectures](https://docs.gitlab.com/ee/administration/reference_architectures/).

### Deviating from reference architecture

If a customer's proposed architecture deviates from the reference architecture for their intended scale, there is a defined process to ensure the best result for the customer. This involves a review between the CSM and the customer, and a final validation from Support.

1. Ensure that the customer knows about, and has reviewed, the [reference architecture](https://docs.gitlab.com/ee/administration/reference_architectures/) appropriate for their user count and/or scalability requirements.
1. Discuss with the customer how they could revise their architecture to match the reference.
1. If the customer asserts that they cannot, or will not, follow the reference, find out why that is. There may be valid, unavoidable reasons such as company policy or budget limitations.
   1. Clarify for the customer that [their performance and subsequent support may be affected](https://docs.gitlab.com/ee/administration/reference_architectures/#deviating-from-the-suggested-reference-architectures), so that you are adequately managing expectations before going any further.
1. Advise them to run the [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) against their instance, and provide the results to you for review alongside their architecture diagram.
1. Provide them with our [benchmark GPT results](https://gitlab.com/gitlab-org/quality/performance/-/wikis/Benchmarks/Latest) for comparison, and review their results against the benchmark figures.
   1. If their GPT results are equivalent to, or better than, our benchmark results then they will likely see good performance from their proposed architecture.
   1. If their GPT results are below the benchmark results, they may expect to see underperformance of their architecture compared to the reference architecture for their scale.
1. After gathering all of the above information, reach out to the Support team to ask for them to review the details and advise on their ability to support the proposed architecture, and any recommendations they have for improvement. This review should be conducted by a Senior Support Engineer or higher.
1. Advise the customer that if they choose to deviate from a reference architecture there may still be a point in the future when we have need to ask them to adopt a reference architecture to overcome an issue that did not surface during the review.
1. Document all of this information in a location that is easily accessible to the customer and to GitLab team members, such as in the wiki of the [customer collaboration project](/handbook/customer-success/csm/engagement/#customer-engagement-tips). Provide this location to the Support team as a follow-up, which they can add to the customer notes for their support process.
