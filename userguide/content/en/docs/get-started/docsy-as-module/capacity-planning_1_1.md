We use a lightweight system of issue weighting to help with capacity planning,
with the knowledge that [things take longer than you think](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html). These weights are
used for capacity planning and the main focus is on making sure the overall sum
of the weights is reasonable.

It's OK if an issue takes longer than the weight indicates. The weights are
intended to be used in aggregate, and what takes one person a day might take
another person a week, depending on their level of background knowledge about
the issue. That's explicitly OK and expected.

These weights we use are:

| Weight | Meaning |
| --- | --- |
| 1 | Trivial, does not need any testing |
| 2 | Small, needs some testing but nothing involved |
| 3 | Medium, will take some time and collaboration |
| 4 | Substantial, will take significant time and collaboration to finish |
| 5 | Large, will take a major portion of the milestone to finish |

Anything larger than 5 should be broken down if possible.

We look at recent releases and upcoming availability to determine the
weight available for a release.
