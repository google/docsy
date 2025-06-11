---
title: "Figma Process"
description: "The purpose of this page is to present guidelines for Figma."
---

The purpose of this page is to present some Figma process guidelines for the GitLab marketing team. This page is for people who create designs in Figma, people who review designs in Figma, and for engineers who receive Figma files. This page is not a Figma 101.

## File naming convention

**Figma master project name:**

* `Parent page / Child page (if none, leave blank)`
  * *`Solutions / DevSecOps`*
  * *`Pricing Page`*

**Master project files:**

* `Parent page / Child page / Type or Phase / Version`
  * *`Solutions / DevSecOps / Wireframes / 1.0`*
  * *`Solutions / DevSecOps / Design / 1.0`*
  * *`Pricing Page / Mock / 1.0`*

**Figma file pages:**

* Page names should be short and clear
* Pages that are ready for engineering should be labeled with the ship icon:
  * 🚢 PAGE NAME 🚢

Example: In this example, the pages ready for engineering are at the top labeled with a 🚢 icon and a divider separates other working pages.

![Diagram of a headless CMS](/images/handbook/growth-marketing/figma-page-naming.png)

### Versioning

* MVCs (ex. 1.0, 1.1, 1.2, 2.0) to match with ENG updates

## READ:ME

Add READ:ME frames when appropriate. Some reasons to add READ:MEs are:

1. Additional rationale is needed to add clarity and reduce unnecessary feedback loops
1. Outline functionality that cannot be visually represented
1. List key decisions made in long issue and MR threads
1. Link to important issues or docs as needed

[READ:ME Template >](https://www.figma.com/file/9GzJNLpyzlFmiimnmEfyt7/README-Templates?node-id=0%3A1)

## Feedback loops

* Leave feedback in Issues and MRs when possible.
* Link to the Figma frame when necessary (check “link to selected frame”)
* Use Figma commenting at your discretion. Ask yourself: Is this an important question that needs to be documented or is it something quick and minor like “this alignment is off, was this intentional?”
* If another user wants to edit a frame within an existing file, please duplicate (copy and paste) the existing artboard rather than editing it. This will help preserve various iterations in case we want to go back or reuse a component from a previous iteration later.

---
