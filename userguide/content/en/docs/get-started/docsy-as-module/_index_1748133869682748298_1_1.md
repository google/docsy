---
title: "Architecture"
---

## Complexity at Scale

As GitLab grows, through the introduction of new features and improvements on
existing ones, so does its **complexity**. This effect is compounded by the
care and feeding of a single codebase that supports the wide variety of
environments in which it runs, from small self-managed instances to large
installations such as GitLab.com. The company itself adds to this complexity
from an organizational perspective: hundreds employees worldwide contribute in
one way or another to both the product and the company, using GitLab.com on a
daily basis to do their job. Teams members in Engineering are directly
responsible for the codebase and its operation, for the infrastructure powering
GitLab.com, and for the support of customers running self-managed instances.
Likewise, team members in the Product organization chart the future of the
product.

[Our values](/handbook/values/), coupled with strong know-how and unparalleled
dedication, provide critical guidance to manage these complexities. At the same
time, we have known for some time we are crossing a threshold in which
**complexity at scale**, both technical and organizational, is playing a
significant role. We know we need to fine-tune both our technical discipline
(so we can integrate it across the organization) and our organizational
amplification (so we can span and leverage the entire organization) to ensure
we can continue to deliver on our values. In this context, we have been
exploring the adoption of *Architecture* or *Engineering Practice* to help us
in this regard.

## Architecture

Martin Fowler's [Software Architecture Guide](https://martinfowler.com/architecture/)
provides an excellent discussion on the notion of **Architecture**, and there
is much to be learned from this and other sources. The question before us is,
then, how to contextualize those learnings and apply them at GitLab.

Much like the rest of the software world, we have been wary of all the negative
baggage that *Architecture* implies, particularly as some of that baggage would
seemingly fly in the face of our values. This is why we have taken the time to
carefully consider what *Architecture* means for us, and how to implement it in
alignment with our values and at the scale that both the product and the
company demand.

At GitLab, Architecture is not a dedicated role
(i.e., no such title exists in the company). We understand *Architecture* as a
component of all technical roles, a set of **practices** to leverage the vast
amount of experience distributed across the company, and a **workflow** to
ensure we can continue to scale efficiently.

## Architecture at GitLab

At GitLab, **Architecture** is a collaborative process. It is also:

- A [collection of practices](practice/) that provide technical frameworks to
  **guide** (rather than dictate) our thinking, design, and discussions so we
  can *iterate* quickly and deliver *results*. These include the
  [Scalability Practice](practice/scalability/). Others are in the works (such as the
  Availability Practice).
- A [*collaborative* **workflow**](workflow/) that provides the necessary
  organizational solution to foster *inclusion*, and drive ideas and priorities
  from all corners of the company.
- A collection of **design documents** and **roadmaps** which are artifacts
  resulting from the [Architecture Design Workflow](workflow/).

Such definition implies a solid reliance on **collaboration** rather than
authority to *efficiently* and *transparently* drive decisions, engage
stakeholders, and promote trust across the organization

### Artifacts: roadmaps and design documents

We strive for **results** and concrete outcomes, which in this case entail
**roadmaps** and **design documents**. **Roadmaps** are documents that
aggregate many **Design documents**.

### Architecture as a practice is everyone's responsibility

Architecture at GitLab is not a dedicated role but it is notably engrained in senior
technical leadership roles, where the roles' levels and their sphere of
influence determine responsibilities within the practice.

### Architecture Design Workflow

The [Architecture Design Workflow](workflow/) is used to create design
documents that are being used to align team members across multiple iterations.

## Roadmap

Following our [Transparency](/handbook/values/#transparency)
value, our [architecture roadmap](roadmap/) and
[design documents](design-documents/) are public.
