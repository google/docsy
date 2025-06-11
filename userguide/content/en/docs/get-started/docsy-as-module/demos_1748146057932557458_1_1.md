---
title: Engineering Demo Process
---

Occasionally, it is useful to set up a demo on a regular cadence to ensure cross-functional iterative alignment.
This is helpful for high-impact deliverables that require integration across multiple functional teams. This is in-line with the seventh principle of the [Agile Manifesto](https://agilemanifesto.org/principles.html): "Working Software is the best measure of progress".

## Demo script

For multi-person groups or critical projects, we use a heavier weight grading process:

1. The demo owner identifies the outcome of the demo based on the business criteria. This can be an engineering manager, a product manager or someone who is a business stakeholder of the outcome.
1. The demo owner breaks down the outcome into smaller pieces, aligning with functional areas (tracks) and structured in procedural flow. This will later be captured as demo steps.
   - List each step, however small it might look to expose implicit dependencies.
1. The demo owner identifies a functional team leader as a DRI for each demo track. The DRI for each track is responsible for demoing each track to completion.
1. The demo owner collaborates with functional team leaders to populate the demo steps in a scorecard. Here is the [demo scorecard template](https://docs.google.com/spreadsheets/d/1neDJDqC2ifZw3ePCrzgNiJUv002nVpNpwXFHpsClzPI/edit#gid=0). To use this template:
    - Copy the template and rename to the initative/deliverable.
    - Clear the scores in the [scorecard sheet](https://docs.google.com/spreadsheets/d/1neDJDqC2ifZw3ePCrzgNiJUv002nVpNpwXFHpsClzPI/edit#gid=0).
    - Populate the demo tracks and demo steps.
    - **Note**: Here is an example of a [populated demo scorecard](https://docs.google.com/spreadsheets/d/1plXG0IHLTz8l1P7bec_-QBEqoferWGw4BtaNK314Rmo/edit#gid=0).
1. The demo owner identifies a demo grader to hold grading accountability. This can be the demo owner or someone who is familiar with the product domain and customers' usecase. It is important that the demo grader is someone who can advocate for the success of our end users.

## Demo scheduling

1. Once the script is finalized, the demo owner schedules a recurring recorded meeting for the demo with target end date.
1. Demo owner & demo grader must be present in every demo to ensure accoutablility. Assign delegates appropriately for one-off un-avaliability.
1. Create an agenda document where each participant can take notes in, in addition to the scorecard.
1. The audience is the key business stakeholder of the demo deliverables & the product group team (Development, UX, Quality, Product).
1. Meeting should be kept to 30 minutes. The emphasis should be on the product requirements & acceptance criteria.
1. The demo gets kicked off and each demo tracks iterate each week on the progress until completion.
1. Live streaming or uploading to GitLab Unfiltered channel is optional. Please abide by our SAFE guidelines if choosen to do so.

## Demo grading

The demo master grades each step during the demo meeting. To make it less subjective, we use a scale that is widely understood and communicated.
Our scoring definitions are as follows:

| Score | Definition |
| ----- | ---------- |
| 5 | Signed off from all Stakeholders |
| 4 | Demo'd according to the "definition of done" |
| 3 | Demo'd but incomplete and/or has bugs |
| 2 | Demo'd in some rudimentary state, work has started |
| 1 | Not yet started or cannot be demo'd |

## Single Engineer Groups Demo

A different demo process is used by the [Single-Engineer Groups](/handbook/company/structure/#single-engineer-groups) and does not require a demo score card.

- Record a video on your computer or via Zoom livestream of the working software
- Upload to the [GitLab Unfiltered Channel](https://www.youtube.com/channel/UCMtZ0sc1HHNtGGWZFDRTh5A)
- Post the YouTube link to the appropriate Slack channel
- Repeat periodically
