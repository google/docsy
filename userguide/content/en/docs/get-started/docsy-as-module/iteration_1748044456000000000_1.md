---
title: "Iteration"
---

In order to provide changes in an [iterative](/handbook/values/#iteration) and [incremental manner](/handbook/product/product-principles/#iteration), we should always seek to create smaller merge requests.

Engineers are a vital part of a feedback cycle with product management to design an [MVC](/handbook/product/product-processes/#writing-about-features) as engineers understand the technical challenges that additional behaviours/edge cases have on the effort to ship something. You should always attempt to provide feedback as early as possible to product management if you can see opportunity to cut scope and deliver a smaller change no matter where you are at in the planning/development lifecycle.

## How to keep a merge request small

- Consider extracting edge-cases that aren't an impediment to introducing the smallest working piece of functionality into follow-up issues. This will save the merge request from growing during a review. The follow-up issues are also useful for distributing the work among the team when the issue turned out to be more complex than expected.

- Refactorings that require a complex approach can be introduced separately either before the actual changes or as a follow-up in case the quality doesn't suffer from the introduced changes.

- If your issue/merge request description or comment says "First we should do this, make sure that works, refine this", it is also a sign of a possible split that happens before work even begins. In general, if an engineer is following the "one commit, one logical change" model, then each commit can potentially be a separate merge request.

## Tradeoffs between horizontal and vertical slicing

Developers sometimes think of Horizontal slicing as the only option to create small merge requests. They separate their changes along horizontal, tech-stack-based lines: splitting out database changes from backend changes from frontend changes (and so on). However, this approach doesn't always mean it will be more efficient and can make it difficult for reviewers to provide meaningful feedback when reviewing the separate layers if they cannot see the complete picture and as such adds additional risk of merging code without easily seeing the full context. Before starting the work on an merge request that involves multiple layers of the stack, consider having a conversation with your team around which approach will work best.

### Horizontal slicing

1. Works well when each part is going to be large, complex change and there is no clear way to break down the [MVC](/handbook/product/product-processes/#writing-about-features) further.
1. Works well for merge requests where each layer of the stack will be isolated and requires little to no context from the reviewers looking at the layers of the stack independently.
1. When doing this you should ensure the overall change is planned and explained to the reviewer somewhere linked to from the merge request or clearly detailed in the Merge Request description.
1. Avoid if possible when each layer of the stack is dependent on others to fully understand the change. For example, since changes to ~database (ie. database migrations written) are tightly coupled to the related ~backend changes (the code which queries the new database columns/tables etc.), it is still preferable to ensure they are part of the same MR as both the ~database reviewer and ~backend reviewer will need to review both of those code changes in order to provide meaningful feedback.

### Vertical slicing

1. When doing this you should ensure the overall merge request size will remain within acceptable review range.
1. Works well when each layer of the stack is fairly dependent on another and seeing them together will help reviewers.
1. Works well when each part is succinct and rely on one another.
1. Avoid if each layer of the stack will require complex change that spans over multiple merge requests as it can get hard to follow. If this is the case, you should still try to break down the [MVC](/handbook/product/product-processes/#writing-about-features) further, but if that is not feasible then horizontal slicing may be a better approach.
