---
title: "Good User Stories"
description: "Learn how to write good user stories."
---

## Quick and Dirty Way to Write Good User Stories

User stories serve one main purpose: To encourage conversation and discussion about the user story. By design, user stories are supposed to be simple and short descriptions of features to be developed; written from the end user's perspective, in the end user's language.   This is important to remember. User stories facilitate conversation and discussion in order to create a common understanding of the desired functionality amongst the team members. User stories are NOT comprehensive specifications.

User stories typically follow a simple template:

```md
 As a <user> I want to <action> so that <result / benefit>
```

Basic understanding of the user story requires all team members to be clear on:

* [ ] Who?... As a \<user\>
* [ ] What?... I want to \<action\>
* [ ] Why?... So that \<result / benefit\>

Every team member is supposed to be able to explain "Who?", "What?", and "Why?" for each user story. It's important to explicitly call this out because unless each team member understands the essence of each story, the team as a whole is lacking the necessary understanding of the problem space. Note that not each team member needs to understand how to implement the user story, but each member should understand the essence - for example, I do not need to know the details how to build a complex multi-stage CI yaml file, but I do need to know that our customer has a Dev, Test, Integration, Security, Staging, and Production stage setup that progressively stabilizes the system.

User stories should follow the INVEST principle. They should be:

* **I**ndependent (to the degree possible, user stories should not rely on other user stories to be implemented)
* **N**egotiable
* **V**aluable
  * Feature focused, not task oriented
  * Written in the user's language to the extent possible; where domain specific language is required, such as in genomics or medicine, a subject matter expert will have to be available
* **E**stimable
* **S**mall
  * Half a Sprint or less for one Dev Team member
* **T**estable
  * Needs to have acceptance criteria and not be subjective

The testability of a user story is usually documented in the form of Acceptance Criteriaand lists pass/fail testable conditions that help us verify if the user story is implemented as intended.

All sounds simple enough, but frequently teams and Product Owners really struggle with writing good user stories, **and 90% of all problems encountered are based on user stories being too big**.

When a user story is too big, it is hard understand, estimate, implement, and prone to wildly different opinions. So what is a good size for a user story? Basic guidance is that the user stories at the top of the product backlog (the ones that should have sufficient specificity in order to be worked on by a PSE) should be sized such that a team member could easily complete two user stories during a sprint.

When a team's user stories are smaller, the team complete stories more frequently. One of the great side effects of smaller user stories is that the team gets more frequent feedback, more frequent successes, and the burndown charts are more granular and look more like a graph instead of a set of stairs.

How does a team take the big stories in its product backlog and split them into smaller stories? There are 3 basic techniques that we can use to split user stories.

1. Splitting stories with generic words
2. Splitting stories by acceptance criteria
3. Splitting stories with conjunctions and connectors

**Splitting User Stories with Generic Words**

This approach simply looks out for words that are open to a wide interpretation (i.e. that are too "generic") or have multiple meanings. For example, if you read a sentence like "We are moving all infrastructure to the cloud", what does that mean? You might have seen or heard sales pitches that sound great, but 2 minutes later you set back and think to yourself "I have no idea what that means!".

_What is infrastructure_? Servers? Desktops? Laptops? Only database servers? Buildings? Are you getting rid of all your data centers? Some? Move from desktops / laptops to Chromebooks?

_What cloud_? Amazon's AWS? Microsoft's Windows Azure? IBM's Bluemix? Public? Private? Hybrid?

_What SSO_? SAML, OIDC, OAuth, JWT, others?

**_The point is the generic words lack specificity._** Perhaps an example would help explain this:

> As a credit card transaction,
>
> We want activities to be logged,
>
> So that the account ledger is up to date.

In this story, the word "activities" is pretty generic. We can replace "activities" with more specific words such as: _debits, credits, voided transactions_. We will get these stories.

> As a credit card transaction,
>
> We want _debits_ to be logged,
>
> So that the account ledger is up to date.
>
> **AND**
>
> As a credit card transaction,
>
> We want _credits_ to be logged,
>
> So that the account ledger is up to date.
>
> **AND**
>
> As a credit card transaction,
>
> We want _voided transactions_ to be logged,
>
> So that the account ledger is up to date.

By providing specificity, you enable to team members to realistically asses what is needed for an implementation, and, more importantly, you avoid ambiguity where individuals can interpret the same user story in different ways.

**Splitting User Stories by Acceptance Criteria**

This method looks at the acceptance criteria listed on the back of a user story card to split user stories into smaller, digestible chunks. What are acceptance criteria? Each user story should have between 6 and 12 acceptance criteria. The Product Owner works with the team to create, agree-upon, and record the acceptance criteria for each user story before the story enters a sprint. Think of this as the "definition of done" at the user story level.

Again, let's look at an example:

> As a credit card user,
>
> I want voided transactions to be logged,
>
> So that the account ledger is up to date.

Here are some acceptance criteria for this story:

* Transaction support US dollars
* Transactions support Canadian dollars
* Transactions do not support Euros
* Transactions support Visa Cards
* Transactions support MasterCards
* Transactions support American Express cards
* Transaction do not support Diners Club cards
* No transactions above $500

If we examine each one of the acceptance criteria, we can ask "Who wants this?" The answer to this question becomes the user in "As a (type of user)."

Next, we ask "Why do they want that?" The answer to this question identifies the value in "so that (some value is created)."

The body of the acceptance criteria provides the "I want (something)" part. Here are user stories that could be derived from the acceptance criteria above.

> As a Visa credit card user,
>
> I want US dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a Visa credit card user,
>
> I want Canadian dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a MasterCard credit card user,
>
> I want US dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As an American Express credit card user,
>
> I want Canadian dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a Diners Club credit card user,
>
> I want to receive an error message denying the transaction,
>
> So that the user has a clear understanding that Diners Club is not supported.
>
> **_ETC…_**

Using acceptance criteria to break up bigger user stories into more digestible ones is simple and quick and helps refine the backlog so that ambiguity is driven out. It also allows the Product Owner to be more effective in prioritizing work; in our above example he/she might decide to implement Visa Card support in Sprint 1, MasterCard support in Sprint 2, but delay American Express card support to Sprint 7 – depending on the business needs and value each provides.

**Splitting User Stories with Conjunctions and Connectors**

This approach simply encourages the team members to review the user stories and look for connector words such as: **and, or, if, when, but, then, as-well-as,** etc. Commas and semicolons often function as connectors.

It is usually safe to assume that you can split the user story into two user stories by separating the pieces on each side of the connector words, for example:

> As a credit card user,
>
> I want US dollar voided transactions to be logged, **as well** Canadian dollars, **but not** Euros,
>
> So that the account ledger is up to date.

You can easily make this into three distinct user stories:

> As a credit card user,
>
> I want US dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a credit card user,
>
> I want Canadian dollar voided transactions to be logged,
>
> So that the account ledger is up to date.
>
> **_AND_**
>
> As a credit card user,
>
> I want to receive an error message denying the transaction when trying to void a transaction in Euros,
>
> So that the user has a clear understanding that Euros are not supported.
>
> Of course, each of these in turn can be analyzed based on other criteria (Visa Card user, MasterCard user, etc.).

That's pretty much it! Simple. Although there are other techniques to analyze user stories, the three mentioned above will get most teams to write much better, more precise, and smaller user stories.

Because of the more granular specificity, the implementation team will have a better chance of actually implementing the right thing, while providing the Product Owner with the opportunity to prioritize the backlog in a more optimal way.
