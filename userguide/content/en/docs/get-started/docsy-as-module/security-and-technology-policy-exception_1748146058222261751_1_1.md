---
title: "Security and Technology Policy Exception Process"
---

## Exceptions

Exceptions to [Security and Technology Policies](/handbook/security/security-and-technology-policies/security-and-technology-policies-management/) must be tracked and approved by the policy approver(s) via an auditable format. An exception process should be defined in each policy.

Information security considerations such as regulatory, compliance, confidentiality, integrity and availability requirements are most easily met when companies employ centrally supported or recommended industry standards. Whereas GitLab operates under the principle of least privilege, we understand that centrally supported or recommended industry technologies are not always feasible for a specific job function or company need. Exceptions from the aforementioned standard or recommended technologies is discouraged. However, it may be considered provided that there is a reasonable, justifiable business and/or research case for a Security and Technology Policy exception; resources are sufficient to properly implement and maintain the alternative technology; the process outlined in this and other related documents is followed and other policies and standards are upheld.

In the event a team member requires an exception from the standard course of business or otherwise allowed by policy, the requester must submit an [Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/exceptions/-/issues/new?issuable_template=exception_request) to the Security Assurance Department, which contains, at a minimum, the elements outlined in the issue template.

Exception request approval requirements are documented within the issue template. The requester should tag the appropriate individuals who are required to provide an approval per the approval matrix.

If the business wants to appeal an approval decision, such appeal will be sent to Legal at legal@gitlab.com. Legal will draft an opinion as to the proposed risks to the company if the exception were to be granted. Legal’s opinion will be forwarded to the CEO and CFO for final disposition.

Any exception approval must:

- Recommended compensating controls to reduce exposure and/or harm (i.e. admin rights to financially significant system may require audit logs and review of users activity within the system)
- Be captured in the associated exception request issue. All sections in the "Approvals" area of the issue must be filled in.

Once an exception request is submitted, the following general flow will commence:

- Requestor will receive approval from their Department head or the policy, standard, or procedure maintainers, depending on the type of exception request.
- Once approved by the requstor's Department, the team that owns the associated policy will review the exception request.
  - Security Compliance will determine whether the exception request has any current or planned compliance implications.
  - The Policy Owner will review the request to ensure appropriate compensating controls have been documented and will consider inputs from Security Compliance and other SMEs when determining the overall level of risk associated with the request.
- The Policy Owner will document a final decision, and if appropriate, a recommended action plan to mitigate risk from the exception request.
- The exception will be logged in the central exception management space.
- The exception will be reviewed as its expiration date approaches, and any extension of the exception will require a new and approved extension request.
