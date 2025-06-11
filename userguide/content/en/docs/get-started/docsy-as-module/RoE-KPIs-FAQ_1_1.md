---

title: RoEs, FAQs and KPIs
description: Use this page to clarify any questions or expectations around Rules of Engagement (RoE), Key Performance Indicators (KPIs) or Service Level Agreements (SLAs).

---

## Frequently Asked Questions (FAQ) and Rules of Engagement (RoE)

This page is part of the Sales Development team's handbook [page](/handbook/marketing/sales-development/) and aims to help structure the expectations of SDR and BDR roles. Below you'll find the Key Performance Indicators (KPIs) and Service Level Agreements (SLAs) that we've designed to help you get results for customers as efficiently as possible. We additionally provide an explanation of our Rules of Engagement as well as a general Frequently Asked Questions (FAQ) section.

## Rules Of Engagement (RoE)

1. Is the MQL from an Existing Account?

    **No:** It is worked by the SDR team <br>
    **Yes:** Check the BDR Prospecting Status

2. Is the Account in “Actively Working” Status?

    **No:** It is worked by the SDR team <br>
    **Yes:** Check for Activity

3. Is the lead connecting to accounts from the Financial Services (AMER) or Telecommunications (EMEA) industries?

    **No:** Please proceed to the next step.
    **Yes:** Normal RoE rules are superceded, and the lead is worked by the respective Telco/Finserv BDRs, not the SDR team <br>

4. Does the account have activity placed by the BDR in the last 30 days?

    **Yes:** It is worked by the BDR Assigned. <br>
    **No:** Check to see if there are leads related to the account that have activity using [this report](https://gitlab.my.salesforce.com/00O8X000008RfvU)
    When you modify this report based on company name and email domain, do you see any activity in the last 30 days? <br>
    **Yes:** It is worked by the BDR Assigned <br>
    **No:** It is worked by the SDR Team.

    **Next Steps:** SDR chatters the BDR Assigned and lets them know you didn’t find activity and will go ahead and sequence the lead. FYI’s the BDR Manager. BDR Manager will work with the BDR to put the account into the correct BDR Prospecting status. If a BDR is able to relay information that was not picked up in the SDR’s research, the SDR should end the sequence if the prospect hasn’t engaged and change lead ownership to BDR so the BDR can reach out. If the SDR has engaged with the prospect, there will need to be a coordinated handoff worked out between SDR and BDR. Note: Only activity logged in SFDC will be recognized as activity.

5. Is the Account in “Queued” Status?

    **Yes:** It is worked by the SDR team

6. Is the Account in “Worked in FY” Status?

    **Yes:** It is worked by the SDR team

7. Is the Account in “Restricted” Status?

    **Yes:** It should be routed to the BDR assigned. The BDR assigned will chatter the SAE about whether they’d like them to reach out or whether they would like to own that responsibility. The AE should respond within 48 hours.

    - If they reply back that the BDR can work, the BDR will continue with the prospect as a lead record and take action.

    - If they reply back that they want to be responsible, the BDR will convert the lead so that it becomes a contact.

    After determining an MQL is to be worked by the SDR team:

8. Is the new MQL related to an existing MQL that is part of the same account?

    **No:** The MQL can be worked by the SDR that received it through the round robin

    **Yes:** Check the status of the existing MQL

9. Is the existing MQL in Accepted or Qualifying status?

    **No:** The MQL can be worked by the SDR that received it through the round robin

    **Yes:** Check the activity on the existing MQL

10. Is there activity in the last 30 days or a follow up task scheduled for the future?

    **Yes:** The MQL should be worked by the owner of the existing MQL

    **No:** The MQL can be worked by the SDR that received it through the round robin. If you are not sure, double-check with the related SDR.

If the related SDR relays information that was not picked up in the new SDR’s research, the new SDR should end any active sequence if the prospect hasn’t engaged and change lead ownership to the team member who has been engaged so they can reach out. If the new SDR has engaged with the prospect, there will need to be a coordinated handoff worked out between the new SDR and the related SDR. Note: Only activity logged in SFDC will be recognized as activity.

### Routing Workflow Chart

![Routing-Chart](/handbook/marketing/sales-development/RoutingChart.png)

## Frequently Asked Questions (FAQ)

### General Sales Dev Trouble-shooting

**Q:** I can’t see certain Outreach collections!: <Br>
**A:** You potentially were added to the incorrect Sales Dev Team in Outreach. Please reach out to Sales Dev Operations.

**Q:** My version of Salesforce seems very basic…: <br>
**A:** Make sure you are using the Sales version of Salesforce. To check, please go to the top right corner of your Salesforce window and click the blue button with the drop down window. From there select “Sales”.

**Q:** I have not received access to all of my tools and it has been a week. <br>
**A:** Notify your manager and have them comment on your Onboarding Role Entitlements Issue.

**Q:** I have uploaded more leads from ZoomInfo than what are showing up in my Salesforce ZoomInfo Lead View. <br>
**A:** This most likely due to these leads aleady being in our Salesforce. The problem is that they are listed as a contact in Salesforce and will only appear in your ZoomInfo Contacts view rather than your Zoominfo Lead view.

**Q:** I do not know what this person did to score as an MQL. <br>
**A:** First check the last interesting moment description on Salesforce and then check the Scoring tab of the Marketo Sales Insight widget that is also on the Salesforce lead page. If no points were allocated to behavior and only to demographic type information please Slack the Marketing Ops group so they are aware that this lead did not take any new action.

**Q:** I received a personal data subject request by a prospect. <Br>
**A:** Our MOPs team has set up a process to address any data subject requests for deletion or access to data. If you receive a request for deletion or access to data, please re-direct inquiries to the [Personal Data Subject Request.](https://support.gitlab.io/account-deletion/) This messaging snippet can be [used and tailored.](https://web.outreach.io/snippets/1903)

**Q:** Why are BDRs no longer the Account Owner in Outreach? <br>
**A:** BDRs are no longer listed as the account Owner in Outreach to improve Sales Dev and Sales visibility across all prospects/accounts (excluding PubSec). If you want to filter to see just your accounts, please use the ‘BDR Assigned’ field.

**Q:** A prospect said they were going to buy through our website (known as a Web Direct). How can I tell if they did? <br>
**A:** SDRs get credit for opportunities where the SDR had meaningful two way communication with a prospect 60 days before they bought GitLab through our website. The best way to search for a web direct opportunity is to use [this report](https://gitlab.my.salesforce.com/00O4M000004dkX4). First, set the date range to the time you think the prospect would have bought. Next, find the opportunity that is tied to your prospect’s account. Then follow the process to request SAO credit.
Note: Sometimes someone else from your prospect’s company actually made the GitLab purchase, leading to the opportunity being related to them instead

**Q:** How do I request credit for a web direct opportunity? <br>
**A:** On the opportunity record in Salesforce, compose a new Chatter message that includes the following:

1. Tag a member of the Operations Team (Ramona Elliott or Ed Bao) or the Director of Global Commercial Sales Development (Brian Tabbert). **Do not tag Sales Support Yourself**
2. Include a link to the record in Salesforce that shows your related two-way activity in the past 60 days. If your related activity is a phone call, you must have entered the details of the phone call into the Qualification Notes field on the lead record at the time of the call in order for it to be considered. Qualification Notes entered after the Web Direct opportunity has been created will not be considered for credit.
3. Explain how you influenced their decision to purchase GitLab (helped with evaluation, uncovered a need, provided value, etc)
The Operations team and/or Director will review the information and decide whether SAO credit is warranted. If confirmed, they will Chatter Sales Support to add you to the opportunity. If rejected, they will communicate to you the reasoning for their decision.

### RoE Common Questions

**Q:** Should BDRs flag duplicate accounts? <br>
**A:** Yes. However, they do not have the ability to merge it themselves so should chatter @Sales Support to do it.

**Q:** How do we resolve a dispute over SAO credit?<br>
**A:** SDR and BDR first try to talk through a solution If no agreement: Managers will determine a solution If no agreement between the managers: Escalate to Senior Leadership Double credit nor double compensation will be given

**Q:** Who will be handling inquiries from an SDR/BDR standpoint? <br>
**A:** Inquiries will go to an open queue. SDR’s will not work them. We want to give marketing time to progress these to MQLs. <br>
**A:** BDR’s can work leads in all statuses if they are related to their “Actively working” accounts. Outreach to these leads would be part of their account strategy.

**Q:** What if a prospect comes back directly to the BDR much delayed, when the account is not marked as “Actively Working” anymore, but resulting from personalized messaging? <br>
**A:** Yes, if they email, reply via LI, or call the BDR directly, the BDR will need to check that the lead is in queue ownership. If so, they must move the account back to “Actively Working”, so that the lead can be put into their ownership.

**Q:** Why are my leads being reassigned to Inquiry Queue? <br>
**A:** Marketing Operations has a daily scheduled clean at 10:30 PM EST/EDT that update Status = Inquiry to Inquiry Queue. To prevent the reassignment, you’ll want to update the leads from Inquiry to Accepted or add to an Outreach sequence.

**Q:** What should BDRs do when a prospect or contact responds with a complince related question or objects to being contacted? <br>
**A:** Immediately reach out to the Privacy Team via #privacy-team-help and forward any email from the contact to dpo@gitlab.com.

**Q:** How do I know if a lead is associated to a Partner Account and is being worked by a Partner?
**A:** Partner leads will not be asigned to BDRs or SDRs as they will be assigned to the Partner Queue. To tell whether a lead is associated to a Partner Account, check their `Vartopia Partner Account` - if it's empty, you are may proceed with outreach.

**Q:** When a partner lead is assigned to Partner, when and how can we recall the lead?
**A:** Partner lead will be recalled after a certain period of time if they are not accepted by Partners for joint marketing campaigns. They will be initially be recalled with a Recycle status, once they become MQL, they will be assigned to BDRs or SDRs. For more information on this process, see the [Vartopia handbook page](/handbook/marketing/marketing-operations/vartopia/#partner-recall).

### Announcement Common Questions

There are three deciding factors on what channel you should use for your announcement:

- Urgency: How crucial is it that the Sales Dev Org or team/teams see this announcement right now?
- Who: The entire Sales Dev Org, SDR/BDRs, or a specific SalesDev Team
- Impact: How much does it impact the audience’s ability to sell and create SAOs?

Announcement Channels

- Email Newsletter
- Weekly Team Meetings
- Sales Dev FYI Slack Channel
- Monthly All Hands Meeting
- Specific Team Slack Channels

| Decision Grid                              | Not Time Sensitive or Important                       | Important and/or Time Sensitive                                             |
|--------------------------------------------|-------------------------------------------------------|-----------------------------------------------------------------------------|
| Impacts Multiple Teams                     | Email Newsletter, Weekly Team Meeting                | Sales Dev FYI Slack, All Hands Meeting, Weekly Team Meeting, Email Newsletter |
| Only Impacts a Select Team                 | Weekly Team Meeting                                  | Sales Dev FYI Slack, Team Channel Slack, Weekly Team Meeting                |

| Qualifiers by Channel        | Qualifier(s)                                                          |
|------------------------------|-----------------------------------------------------------------------|
| Sales Dev Global Slack       | Shoutouts, Questions, Concerns, Share something that’s working, Fun for Multiple Teams, New Team Members |
| Sales Dev FYI Slack          | Announcements and Reminders that involve multiple teams or are of high importance |
| Email Newsletter             | Impacts Multiple Teams                                                |
| All Hands Meeting            | Important updates that affect multiple teams                          |
| Weekly Team Meeting          | Any updates that affect that specific team                            |
| Team Slack Channels          | Important or Time Sensitive, but only related to that specific team    |

## KPIs and SLAs

### Ramping Periods and Lead Routing

| Levels    | Details                                                                                    |
|-----------|--------------------------------------------------------------------------------------------|
| Onboarding| - Timeframe: Month 0 - Parameters: SDR not on quota, leads are off in Traction, Qualified is off |
| Ramping 1 | - Timeframe: Month 1 - Parameters: SDR is on 25% quota, leads are set at 50% in Traction, Qualified is off |
| Ramping 2 | - Timeframe: Month 2 - Parameters: SDR is on 50% quota, leads are set at 100% in Traction, Qualified is off |
| Ramping 3 | - Timeframe: Month 3 - Parameters: SDR is on 75% quota, leads are set at 100% in Traction, SDR is added to Qualified |
| Expert    | - Timeframe: Months 4+ - Parameters: SDR is on full quota, leads are set at 100% in Traction, Qualified is on |
| | - SDR is now able to create their own Outreach sequences pending approval.               |

### Sales Development Credit Matrix

| Products Considered | Who | Order Type | Segment | Opportunities |
| ---------- | -------- | ------- | --------- | -------------- |
| GitLab ultimate/premium, Duo | SDR | FO + New Connected | SMB/Comm | 1 (Duo Pro is excluded) |
| GitLab ultimate/premium, Duo | SDR | FO + New Connected + Growth (new groups) | Enterprise | 2 (GitLab + Duo Pro) |
| GitLab ultimate/premium, Duo | BDR | FO | Comm/Ent | 2 |
| GitLab ultimate/premium, Duo | BDR | New Connected + Growth | Comm/Ent | 2 |
| Additional seats in current customer department | BDR | Growth | Comm/Ent | 1 |
| Tier upgrade | BDR | Growth | Comm/Ent | 1 |
| GitLab ultimate/premium, agile planning | everyone | All motions | All segments | 1 (agile planning is excluded) |
| Professional services | everyone | All motions | All segments | 0 |

- **NOTE** If an account only has bought CI minutes, the SDR/BDR will still get credit for a first order Opportunity if the account purchases Premium or Ultimate licenses.

### Sales Development Org Compensation Breakdown

| **Sales Development Org Compensation Breakdown** |
| ------------------------------------------------ |
| **Quota Components Depending on Sales Segment** |
| [Sales Accepted Opportunities (SAOs)](/handbook/marketing/sales-development/how-tos/#how-to-get-sao-credit-and-create-opportunities) |
| [ARR](/handbook/sales/sales-term-glossary/arr-in-practice) pipeline component |
| 2-way communication must be documented on the Contact in the Opportunity to receive credit. Opportunities missing this documentation will not be considered for compensation and will not retire quota. |
| For BDRs and SDRs who have SAO/ARR goals, compensation is based on the SAO attainment. ARR attainment is a qualifier for accelerator payments. Our aim is to land net new logos and expand to new customer business units, SAOs being our quantity metric and ARR our quality metric. Our mission is to create good qualified pipeline for the company. SAO credit is given for licenses and not for PS Opportunities (for training, for example) nor pipeline minutes. |
| **Team Member OTE (SDR/MM BDR, APAC BDR, & Pub Sec)** |
| 70% Base Pay |
| 30% Variable Pay: |
| - 100% Individual SAO Quota: |
|   - No floor or ceiling |
|   - Accelerator x 1.5 after meeting 100% of target |
|   - 1.3 x High LAM New Logo Kicker for APAC/Pub Sec BDRs |
| **Team Member OTE (ENT BDR Strategic)** |
| 70% Base Pay |
| 30% Variable Pay: |
| - 80% Individual Quota: |
|   - 20% Growth SAOs |
|   - 60% First Order SAOs |
|   - 1.3 x High LAM New Logo Kicker |
|   - No floor or ceiling |
|   - Accelerator x 1.75 after meeting 100% of target of either SAO type for that type |
| - 20% Pooled Net ARR Bookings: |
|   - 75% Floor |
|   - Ceiling of 140% |
|   - Accelerator x 1.25 from 100% to 140% |
| **Team Member OTE (ENT BDR Major)** |
| 70% Base Pay |
| 30% Variable Pay: |
| - 80% Individual Quota: |
|   - 50% SAOs |
|   - 1.3 x High LAM New Logo Kicker |
|   - No floor or ceiling |
|   - Accelerator x 1.75 after meeting 100% of SAO target |
|   - 30% Net ARR Pipeline |
|   - No floor with a 200% ceiling, no accelerator |
| - 20% Pooled Net ARR Bookings: |
|   - 75% Floor |
|   - Ceiling of 140% |
|   - Accelerator x 1.25 from 100% to 140% |
| **Results** |
| - ARR won from opportunities BDR sources |
| **Activity** |
| - Number of opportunities created |
| - Number of calls made |
| - Number of personalized emails sent |
| - LinkedIn InMails |
| - Qualified Engagements |
| - Number of leads accepted and worked |
| **Daily outbound metrics** |
| - We aim for 45 touchpoints per day using the various methods above. This is a broad expectation and may vary per team given the segment, functionality, and strategy of the team manager. |

### Sales Dev Career Path

| Position                               | Promotion Criteria                                                                                                                                                                  |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SDR to SDR Team Lead (SDR TL)         | - Minimum 9 months in the SDR Role (incl. ramp)                                                                                                                                     |
|                                        | - Hitting quota cumulatively over the last fully-ramped 5 months                                                                                                                    |
|                                        | - Willingness to coach and up-level peers                                                                                                                                           |
|                                        | - Endorsement from SDR management                                                                                                                                                   |
|                                        | - Demonstration of GitLab’s Values                                                                                                                                                  |
|                                        | - Completion of SDR Q1-Q3 Tanuki Techs                                                                                                                                              |
|                                        | NOTE: Not every SDR will have the opportunity to become a team lead. Interviews will take place when a spot is available. A successful applicant must make a 3-month minimum commitment to the Team Lead Role before pursuing another promotion.  |
| SDR to BDR                             | - Minimum 12 months in the SDR Role (incl. ramp)                                                                                                                                    |
|                                        | - Hitting quota cumulatively over the last 2 fully-ramped quarters (neither quarter below 80% attainment)                                                                          |
|                                        | - Endorsement from current SDR manager                                                                                                                                              |
|                                        | - Demonstration of GitLab’s Values                                                                                                                                                  |
|                                        | - Completion of SDR Q1-Q4 Tanuki Techs                                                                                                                                              |
|                                        | NOTE: All promotions require a formal application + interview. Performance and adherence to values guarantee an interview, but candidates must demonstrate suitability during the process. Factors such as interview performance, headcount, and language requirements can influence promotion timelines. |
| BDR to Senior BDR                      | - Minimum 6 months in the BDR Role (incl. ramp)                                                                                                                                     |
|                                        | - Hitting quota cumulatively over the last 6 months (fully-ramped months must hit 100% cumulatively)                                                                               |
|                                        | - Endorsement from BDR management                                                                                                                                                   |
|                                        | - Demonstration of GitLab’s Values                                                                                                                                                  |
|                                        | - Completion of BDR Q1-Q2 Tanuki Techs                                                                                                                                              |
| BDR to BDR Team Lead                   | - Minimum 9 months in the BDR Role (incl. ramp)                                                                                                                                     |
|                                        | - Hitting quota cumulatively over the last fully-ramped 5 months                                                                                                                    |
|                                        | - Willingness to coach and up-level peers                                                                                                                                           |
|                                        | - Endorsement from BDR management                                                                                                                                                   |
|                                        | - Demonstration of GitLab’s Values                                                                                                                                                  |
|                                        | - Completion of BDR Q1-Q3 Tanuki Techs                                                                                                                                              |
|                                        | NOTE: Not every BDR will have the opportunity to become a team lead. Interviews will take place when a spot is available. A successful applicant must make a 3-month minimum commitment to the Team Lead Role before pursuing another promotion.  |
| BDR and BDR Team Lead to Next Step     | - Minimum 12 months in the BDR Role (incl. ramp)                                                                                                                                    |
|                                        | - Hitting quota cumulatively over the last 2 fully-ramped quarters (neither quarter below 80% attainment)                                                                          |
|                                        | - Endorsement from BDR management                                                                                                                                                   |
|                                        | - Demonstration of GitLab Values                                                                                                                                                    |
|                                        | - Completion of BDR Q1-Q4 Tanuki Techs                                                                                                                                              |
|                                        | NOTE: All promotions require a formal application + interview. Performance and adherence to values guarantee an interview, but candidates must demonstrate suitability during the process. Factors such as interview performance, headcount, and language requirements can influence promotion timelines. |

### Sales Dev Performance Management Process

| Quota Component                         | Criteria                                                                                                                                                                  |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SAOs/Stage 1 ARR                       | - Informal performance management begins when a ramped XDR has two consecutive months below 80% attainment                                                                          |
|                                        | - After two such months, the XDR is informed that they have to achieve the following or they will enter formal performance management:                                                                                                                    |
|                                        | - Reach at least 80% to their quota *each of the next two months*                                                                                                                                           |
|                                        | - Should they fall short of the above criteria in *either of the next two months*, they immediately move to a formal first email warning the following month                                                                                                                                                   |
|                                        | - Should they fall short of the above criteria in *either of the next two months* after the first email warning, they immediately advance to a final email warning the following month                                                                                                                                                  |
|                                        | - Should they fall short of the above criteria in *either of the next two months* after the final email warning, additional discipline will follow including possible termination                                                                                                                                              |
|                                        | - After *two consecutive months* of meeting the above criteria in any phase of the process, the XDR will exit performance management  |
| Stage 3 ARR                       | - Informal performance management begins when a ramped BDR has two consecutive months below 80% Stage 3 attainment                                                                          |
|                                        | - After two such months, the BDR is informed that they have to achieve the following or they will enter formal performance management:                                                                                                                    |
|                                        | - Reach at least 80% to their Stage 1 quota in **Actual Net ARR** *each of the next two months*                                                                                                                                           |
|                                        | - Should they fall short of the above criteria in *either of the next two months*, they immediately move to a formal first email warning the following month                                                                                                                                                   |
|                                        | - Should they fall short of the above criteria in *either of the next two months* after the first email warning, they immediately advance to a final email warning the following month                                                                                                                                                  |
|                                        | - Should they fall short of the above criteria in *either of the next two months* after the final email warning, additional discipline will follow including possible termination                                                                                                                                              |
|                                        | - After *two consecutive months* of meeting the above criteria in any phase of the process, the XDR will exit performance management  |

### Our three pillars

| Task                               | Details                                                                                                                                                                                |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1. Uphold Daily Activity Metrics   | - MQLs to be sequenced within expected activity metrics.                                                                                                                               |
|                                    | - Work lead records within Salesforce by leveraging relevant sequence libraries in Outreach.                                                                                            |
|                                    | - Use Business Intelligence platforms like ZoomInfo or LinkedIn to verify the validity of inbound lead datapoints. Take appropriate actions to clean up and assure accuracy and consistency of SFDC/Outreach data.                              |
|                                    | - Maintain SFDC data integrity by following the outbound workflow in researching and prospecting accounts.                                                                             |
|                                    | - Sequence steps to be actioned within the same day of them being due. Move steps to a further date only because of national holidays affecting outreach (i.e., Christmas day).      |
|                                    | - Maintain cross-functional relationships in terms of outbound account planning. Attend each initial qualifying meeting (IQM) with the AE/SAE you work with. Document accurate up-to-date notes in SFDC. |
| 2. Displaying Business and Sales Acumen | - Display business acumen and sales skills in personalizing inbound/outbound leads, following our CoM email writing principles.                                                          |
|                                           | - Display business acumen and sales skills in preparing for cold-calls, following our CoM cold-calling principles.                                                                    |
|                                           | - Display business acumen and sales skills in preparing for scheduled discovery calls, following our CoM sales training.                                                              |
|                                           | - Outbound accounts to be added in a weekly cadence, according to the expectations set within each regional team, in terms of outbound cycle (monthly, weekly), and volume of accounts. |
| 3. Maintain Cross-functional Relationships | - Collaborate with the Sales team in terms of account planning.                                                                                                                       |
|                                           | - Collaborate with the Field Marketing team in terms of event outreach.                                                                                                                |

### Inbound Lead Management

The below apply for all inbound-related leads for both the SDR and BDR teams:

| Metric                      | Description                                                            |
|-----------------------------|------------------------------------------------------------------------|
| Response Time for leads            | - Net New MQLs: 15 minutes <br> - Inbound Responses: 8 work hours |
| Low vs High Touch Sequence Usage    | - Over 70% of inbound leads enrolled to High Touch sequences.        |
| Inbound pasks past due per day        | - No more than 10% of tasks pending per day. <br> - 90% of tasks to be properly completed, not skipped. <br>                       |
| Two way conversations           | - 50 per week.        |

### Outbound Account Management

In addition to the above, BDR team members are expected to:

| Metric                      | Description                                                            |
|-----------------------------|------------------------------------------------------------------------|
| Volume of Actively Working Accounts per Quarter               | 100 AWA'd accounts per BDR per Quarter, measured per Actively Working Start Date. |
| Research Quality            | >70% usage of Intent tools on AWA'd accounts, with high propensity to purchase indicators showed. |
| Volume of Prospects per Account | 5-10 prospects sequenced per account, whose titles and personas match our ICPs. |

## PTO and Flexible Working

### Sales Development Organization Time Off

In accordance with the [Time Off Policy](/handbook/people-group/paid-time-off/#a-gitlab-team-members-guide-to-time-off), you need give your manager a heads up early of your intended time off so that they can help arrange cover for your tasks, if necessary.

We want to help our team members being able to fully unplug from work during their PTO, while not having to worry about their workload or target attainment. Based on this, we have created this PTO Territory Planning Issue that you can use to strategize your work and be aligned to the GitLab value of being a [Manager of One.](/handbook/leadership/#managers-of-one)

To log a PTO Territory Planning request, please go to the Issue list on the SDR GitLab project [here](https://gitlab.com/gitlab-com/marketing/sdr/-/issues/new#) and choose `PTO_Coverage_Template` from the Description drop-down list. All of these requests are then managed through the board here. and all next steps and guidelines are on the issue description.

### Flexible working

At GitLab we have flexible working hours. This means that you can organize your working day as you like and are not expected to arrive and leave at a set time every day, but we do expect MQL’s to be followed up within 1 hour (during business hours) so communication with your manager will be necessary if you plan to be out for an extended period of time. Managers will provide direction on the routing of leads during that time.

With a prospect-facing role in Sales Development, do keep in mind when you are calling and emailing prospects:

- The best times to call are early and late in the business day, so these may be best blocked for this activity.
- Outreach allows you to schedule emails at set times. For outbound prospecting, the most effective emails are those that come in the early morning and early evening, so you can take advantage of this feature. On the other hand, inbound MQL’s must be handled regularly throughout your day as they come in.
- Lunchtimes are good for outreach as most prospects have meeting blocks for three hours in the morning and then two hours mid-afternoon.
- The above blocks you can use for account research and planning, customer meetings, or meetings with your sales reps, manager, peers, and teams.
- Although you are not expected to start work and end work at the same time every day, please do keep in mind the normal business hours of your prospects, and make sure to schedule your own working hours to ensure you maximize opportunities.

In short, working at GitLab means that if you start the day early you can take a long lunch break to hit the gym or go grocery shopping in the middle of the day when it’s quiet, yet you can still do a full day’s work around that and don’t need to be accountable all the time, as long as you are available to call prospects and be available for prospect meetings during normal working hours for your region/territory.
