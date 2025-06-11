---
title: "Kamil Trzciński's README"
description: "Personal readme page for Kamil Trzciński, Senior Distinguished Engineer, Ops and Enablement, GitLab"
job: "Senior Distinguished Engineer, Ops and Enablement"
---

## Introduction

My name is Kamil Trzciński and I am a Senior Distinguished Engineer as part of the
[Memory team](/handbook/engineering/infrastructure-platforms/tenant-scale/),
and I live in Poland.

I joined GitLab in 2015, June. I contributed to GitLab a way before me joining
the company. My most noteable contribution was [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner/)
at the beginning of 2015, which got me hired into GitLab in the first place.

I decided to write the [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner/),
because I wanted to learn [Go](https://go.dev/). The GitLab Runner is
my first actual project written in this language. Go was ideal choice for it
due static compilation (easy to distribute), great support for Docker and
very efficient execution model (able to concurrently execute many jobs at once).
Additionally, I always loved simplicity of [Drone.io](https://www.drone.io/).
I used a number of ideas and implemented them in a initial version
of GitLab Runner, allowing it to heavily use Docker.

## Links

* [GitLab.com account](https://gitlab.com/ayufan)
* [dev.gitlab.org account](https://dev.gitlab.org/kamil)
* [ops.gitlab.net account](https://ops.gitlab.net/kamil)
* [Team page](/handbook/company/team/#kamil)

## What I do focus

My primary focus is a work related to Memory team and a work related to CI/CD space.
I take an active part in a number of discussions related to the above topics,
because I'm simply interested in a topic and think that I can provide a useful feedback.

## My usual day

I start my work around 10 am (CEST/CET time) with a breakfast and a first cup of coffee.
Sometimes it is 9:45, sometimes 10:30.

I spend my morning mostly looking over TODOs, MRs and check what did happen since the yestarday.
This is also time when I have coffee chats with other people, but I usually prefer these
to start around 11 am.

During the day, I mostly tend to concentrate on my personal work. I'm also usually
available for random interruptions from the team or peers on topics that they need
extra pair of eyes. I have a lunch around 1pm-2pm.

Afternoon is usually occuppied with meetings. During that period I rarely look at MRs/TODOs,
and rather spend time on meetings or contribute to discussions on issues or merge requests.

I finish my day between 5pm and 8pm, depending on a day, and how focused I'm on getting
something done.

It is common for me to be on a Slack till late hours, but this is not indiciative of me working,
rather indicative of me being in front of computer and doing some other stuff,
like watching movies, or working on a hobby projects.

In general I aim to work on average 7.5hr per-day (with lunch), but this varies between days.

## Work style

I have a strong tendency working on many topics at the same time
as I always have many different ideas that I'm passionate about.

Working on many topics at the same time is sometimes challenging
due to context switching, but I usually do not find it very tiresome.
These are reason why I like doing that:

* Broaden the knowledge
* I'm genuinelly interested in a topic
* I want to learn new technology or new area
* I want to try different ideas and see how complex they could be if implemented
* I want to explore a potential improvement to a known problem
* I want to research an issue that I saw
* I see it as a potential improvement to the product

My way of speeding up learning process is creating a [Proof of Concept](https://en.wikipedia.org/wiki/Proof_of_concept).
I do it for a various reasons:

* I tend to create many Proof of Concepts to check different approaches
* I timebox time spend on Proof of Concept, dismiss the Proof of Concept if it takes
  too long as too complex
* I use Proof of Concept to get a quick validation of the idea
* I use Proof of Concept to understand the complexity of the implementation
  and potential problems with the approach
* The Proof of Concept is not perfect, it is never meant to cover all cases,
  nor meant to be merged
* The Proof of Concept does showcase one of the solutions to the stated problem
* The Proof of Concept can be used to validate the performance characteristic of the approach
* I describe Proof of Concept with the assumptions and limitations around which they got created
* The Proof of Concept can be a good discussion point that allows to further decide
  if the approach is correct, and what are needed steps to get it into mergeable state

I like working on many merge requests at a single time. I tend to aggressively
split my work into a very small mergeable chunks, and merge them early.
It is common to me to have a work divided into 4-5 MRs that depend on each
other and create some sort of chain. To help with constant rebases
I do use my script [rebase-all](https://gitlab.com/snippets/1981241)
that does all heavy duty work.

## My expectations

In everything that I do (myself or when reviewing someone else changes)
I always aim to slightly improve the code around the given change.
My idea is that spending 10-20% more time on resolving technical debt does allow us
to constantly refactor the codebase without doing refactors specifically.
My perception about scheduling refactors is that this is usually a bad idea.
I find it much easier to constantly refactor the codebase while working on a new features.
I do expect from anyone working with me: do a little more than it is described to make
our live easier in the future.

A few examples how I approach above:

* comment something that I discovered, but was not obvious
* improve architecture of existing implementation
* rewrite methods and tests to make them easier to read or make them more performant
* create issues about problem discovered
* do a small merge request prior to this change to improve some aspects

## My focus

While doing my work or looking over someone else work I usually care most about:

* security (always at the first place): in particular I look at all authentication
  and authorization code, and try to ensure that a well established patterns
  are used instead of reinventing a wheel
* data strucutre: that database structure is future-proof: I consider that data
  migration is the hardest thing to do at a scale
* performance of the solution: I in particular look at mis-use and edge cases that
  might affect execution time (CPU/DB time or Memory usage)
* usage limits: defines a upper usage limits to which the solution is tested,
  define limits that prevent mis-use of the solution
* extensibility: that solution is extendable in the future
* style: that it is implemented coherently to exisitng code, and it have
  a proper structure (OOM)

Outside of purely implementation aspects I do also care about:

* it is user-loveable UX: it is clean, and coherent with existing feature

## Work Environment

I work always from home. I don't really like working from co-working spaces.
I find my chair and big desk to be a deal breaker for me.

I'm big fan of the virtualisation. I try to virtualise all my systems and seemlessly
switch between them using the same keyboard, mouse, and monitor. I automate
as much as possible of my work and my environment. This is why I have a 4x4
keyboard to control all aspects of my work environment. This is connected
to ESP8266, which sends commands over MQTT to Home Assistant, the Home Assistant
later controls all my lighting, PCs/Macs, Monitors and Speakers and switches
and turns on or suspends them if needed.

As for the system that I use. I do have tendency on changing constantly my working
system: for most time I work on Mac, but also used Desktop Linux for over 3 years.
I even had a short episode (around week) trying out Windows.

Recently, I do all my GitLab related work in Visual Studio Code, which connects
to my Ubuntu VM virtualised on PC. I do all my work remotely, using Mac only
as a good looking desktop. I maintain my own [GitLab Compose Kit](https://gitlab.com/gitlab-org/gitlab-compose-kit)
to have a fully immutable development environment. I use it exclusivelly
for last 3 years.

I do not store any of keys on a disks. I use Yubikeys to authenicate everywhere.
I have a Yubikey for each computer that I use.
