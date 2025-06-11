---
title: "FY26 - Disaster Recovery"
---

## References

[RTO High-Level Overview](https://docs.google.com/spreadsheets/d/16AVXetqTae2eTarJIg9CGJkvRrsz3Fh9RdFZ-0b48nY/edit?gid=1850605585#gid=1850605585)

## Background

Disaster Recovery covers the tools and processes needed to restore GitLab.com to a working state with all customer data in a disaster event. It is a controlled activity that is reported on for compliance purposes. We must have confidence in our ability to recover from a disaster event, and we must be able to communicate that confidence to our customers through consistent, measurable results.

## North Star

Disaster Recovery is hands-off and built-in to our system. It is tested in an automated way to validate our ability to recover from disaster events. We use automated testing results to demonstrate our recovery capabilities to our customers. This is consistent for both .com and Dedicated.

## Goals for FY26

### Push gamedays from process reaction to verification 

Right now, gamedays for disaster recovery have mostly been focused on areas in GitLab.com that require manual intervention for zonal degradations. This is important, but there are areas in GitLab.com and the new Cells infrastructure that should be resilient by design, and we should test and verify that design.

This also includes providing feedback for service owners about how improvements could help move from reactive response to a more proactive service implementation.

### Push gamedays into production

Gamedays have been targeted on our staging environment (GSTG) to avoid disruptions and to gain confidence. Verification type gamedays that test resilience should be conducted in production to better inform our timing data and to verify that production is ready to handle degradations.

### Constant gameday improvement

Continue to execute gamedays regularly. Collect feedback to improve services tested, and the gamedays themselves. Improve automation to help minimize toil and look for opportunities to use automation to perform DR verification. Use gameday measurement to inform RTP/RPO values. Leverage instance management tooling to help disaster recovery related responses be performed quicker and with confidence.

### Document and communicate disaster recovery ownership 

Update our Ops handbook and processes to clearly outline what the team's goals are in testing and verifying disaster recovery capabilities. This should include how we interface with other teams and provide feedback on improving disaster recovery response and capability.

### Exploring DR in Cells

Figure out how to enable Geo for GCP dedicated, and make that a default configuration for new cell creation. Re-configure the existing cell to make sure that Geo is enabled. Configure Backups/snapshots for each Cell's GitLab instance so we can perform data recovery.
