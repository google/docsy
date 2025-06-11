---
title: "Getting Started with Agile/DevOps Metrics"
---
The first step to improving DevOps and Agile processes is measuring them. Once we can measure a process, we can identify opportunities for greater efficiency and begin to correlate those opportunities with business value, connecting the entire organization with a common goal and vision. If you are just starting out on your Agile journey, or you're looking to connect your existing Agile processes with other groups and lines of business, following are four steps to help you get started.

## Step 1: DORA Metrics

[DevOps Research and Assessment](https://www.devops-research.com/research.html) (DORA) has created a list of four metrics that are straightforward, focused, and easy to implement. They form an excellent foundation for your metrics initiatives, helping improve your existing DevSecOps efficiency while also building a bridge to business stakeholders.

These four "DORA" metrics are:

- Deployment Frequency
- Lead Time
- Mean Time to Recover
- Change Failure Rate

DORA metrics are available in GitLab [Group-level value stream analytics (VSA)](https://docs.gitlab.com/ee/user/analytics/#devops-research-and-assessment-dora-key-metrics) and in the [CI/CD analytics](https://docs.gitlab.com/ee/user/analytics/ci_cd_analytics.html). APIs are also available for all four DORA metrics. To learn more check out the [DORA API documentation](https://docs.gitlab.com/ee/api/dora/metrics.html#get-project-level-dora-metrics)

Here's an overview of each metric, with a look at how they matter to the company as a whole.

### Deployment Frequency

How often you're deploying software to production. This is one of the most foundational DevOps/Agile metrics because if you aren't deploying regularly, you can't be delivering value.

It's worth noting that this doesn't tell you how valuable the software you're deploying actually is—we'll cover that in the next section—but without it, there's nothing to measure. You need to deploy to generate value. And, most likely, you already have a similar metric like this in play. This should be the easiest metric to find and report.

### Mean Lead Time for changes (LEAD TIME)

This is the time from code commit to having that code live in production. For some companies, this is a matter of minutes. For others, it's months. There are schools of thought that will tell you that what you're really measuring here is *cycle time*, not lead time, but the important thing is that you measure this, whatever the name.

Lead time is a fantastic metric because it's a great gut-level indicator of what is possible. If you're managing the DevOps process in one form or another, you can view this an overall health-check. If lead time is months, there are probably some areas of opportunity to streamline and automate systems and processes.

There are myriad reasons for long Lead Times. Like Deployment Frequency, Lead Time doesn't diagnose a problem, but it can show you where to look for answers.

This also benefits the business. Let's assume a business planner or product manager sees an opportunity to react to a shift in market demand—IF they can get something in the hands of users by next Friday. In that situation, a lead time of 10 hours sounds promising. It indicates that if they can get everyone aligned quickly enough, having changes in production by the deadline could work.

A lead time of 60 days, on the other hand, would rule out the move, in most cases, unless there's something exceptionally easy about the required work. But even that failure to execute can start a fruitful cross-team discussion of why the lead time is so high, helping to place a value on addressing DevOps investments.

### Mean Time To Recover (MTTR)

This is the amount of time it takes to bounce back from a failure. If you deploy something and it fails, how long will it take to make the failed service usable again?

At first glance, this metric might not seem particularly relevant to business, but it's essentially an indication of the business risk of making changes. This metric also illustrates one of the ways DevOps can really function as a business or revenue enabler. The better the MTTR number (the smaller your time to recover), the more comfortable the company is going to be with experimenting and innovating.

If DevOps is absolutely on top of this, able to snap back from failure in minutes, they can actually encourage the business to start taking more (acceptable) risks and begin feeling more comfortable with running experiments. Ultimately, that can generate more revenue and profit.

### Change Failure Rate (CFR)

CFR looks at how frequently you encounter deployment failures that require remediation. How often do things break so badly that you need to roll them back and test out your MTTR to fix them?

Again, this doesn't diagnose an issue, and any specific deployment could have to be recalled for any reason. It may not have anything to do with the DevOps pipeline at all. It could be a purely external factor like a problem with content, or a market shift. But generally, when tracked over time, CFR tends to provide a helpful view into the health of your DevOps pipeline, and that can also drive business-led conversations.

If the number is high and remains high over time—let's assume a CFR of 40%—that's an awful lot of business value getting wasted and never making it to customers. In that case, if you can diagnose the source of the problem, it's very reasonable to spend resources improving that performance. It might make very good financial sense to spend 20% of each cycle paying down technical debt for 3 months if it's going to increase overall value delivered by 15% in the end.

If you're tracking CFR, you can start to make data-driven decisions about things like infrastructure, because it is now attached to a documented end-user value.

So, in summary, these four DORA metrics are a wonderful place to start, because:

- They enable you to understand Velocity and Speed AND also overall Quality and Stability.
- They're fairly easy for DevOps teams to generate on their own, using tools they have available today
- They provide useful guidance for what you're already doing
- They help the business understand how DevOps and business can work together with a shared concept of value

## Step 2: Measure your Value Streams and Flow

There are a number of different frameworks for measuring the flow of value to users and the blockers that get in the way.

If you're familiar with Lean Six Sigma, you've probably heard quite a bit about Value Stream Mapping. You've also probably heard a lot about Flow, which is a framework for measuring those value streams.

There are four Flow metrics:

### Flow Velocity

Throughput, or velocity over time.

### Flow Time

The time it takes for an item to go from start to completion.

Both of these are very similar to raditional DevOps metrics, similar to those discussed above.

What's unique about Flow is the next two:

### Flow Efficiency

Flow Efficiency identifies waste. It measures the ratio of active time vs. wait time out of the total Flow Time, so you can see whether you're losing value by waiting around.

### Flow Load

The number of Flow Items currently in progress, whether active or waiting.

Flow Load is often measured as Work in Progress (WIP). On a gut level, we all know there's a cost to context switching and having too many irons in the fire, but tracking the number of in-progress items and correlating it to outcomes lets us quantify that cost and make data-driven decisions about how much work to take on.

## Step 3: North star metrics

Every company and every initiative will have a different North Star metric that defines success. For a retail site, it might be annual customer spend. For a medical device manufacturer, it might be a target latency. For a video game company, it might be hours played.

Ideally, your company should help define this metric at the executive level, beginning with something like an OKR and cascading down.

*How do I choose my North Star?*

There's no one right metric. The important thing is to poll that metric as frequently as possible, find proxy metrics you can poll more frequently, and view everything we've discussed before this through that lens, and have everyone, from business to delivery, iterate together based on the results.

So as an example, let's say you're making tax software. Your North Star metric may be total revenue, or maybe revenue per user. The problem is, you won't know what that looks like until the end of tax season, which is months away. This is what people often call a *lagging indicator*, because it measures an end-state.

Meanwhile, you need to measure *something*, and you've observed that time spent on tax simulators seems to correlate with increased revenue during tax season. This is a *leading indicator*, as it predicts behavior that follows. While it isn't a perfect match for your North Star metric, it's something you canmeasure now, so you can use the metric as a proxy, continue to look for other leading metrics to track, and compare your expected performance to actual performance when your lagging metrics become available.

## Step 4: Correlation

Now that you can map what really matters, you can evaluate your DORA and Flow metrics in the context of business outcomes and start to discover where you can add the most value. Foe example:

- Does reducing Flow Load increase engagement with the simulator? Great! Maybe you should focus on fewer items.
- Does a rising Change failure rate negatively impact that metric? Maybe it's time to pay down that debt.

But again, while it's important to know what's important, that only becomes actionable when you have enough visibility into the process that you know what levers to pull. And that's why it's critical to give everyone on your team, from Planning to Dev to Ops to User Experience after you release, a common set of metrics and a common language. Because that's how a business embraces Agile.
