---
title: "MQL SLAs"
description: "SLAs for Sales/Business Development to follow up with MQLs"
---

## How do SLAs work?

The SLA functionality in Salesforce works by using the response timer functionality in Traction and a custom built flow in Salesforce. When a lead is in MQL status and assigned, Traction will begin a response timer. The Salesforce flow will also populate certain fields on the history log giving information about who is responsible for actioning the lead, how long it took to action, and if the SLA was “Met” or “Not Met”. Please note that it is important for a user’s working hours and time zone be set appropriately in Traction in order for SLAs to report correctly for that user.

The fields on the history log that provide information on the SLA related to a lead are:

1. SLA Assigned - This is the name of the rep responsible for actioning the lead.
2. MQL SLA - Values are “Met” and “Not Met”.
3. SLA Time (Hr) - This is the time in business hours that it took the assigned rep to action the lead (in HH:MM:SS format)

Other fields that appear on the SLA reporting that provide insight into the lead are:

1. Timer Response Time in Seconds - This is the total time in seconds that it took to action the lead, regardless of inside or outside business hours.
2. Timer Response Time in Business Hours - This is the time in business hours, measured in seconds, that it took to action the lead. SLA Time (Hr) formats this field to a more useful HH:MM:SS format.
3. MQL Transfer Count - This field will tell you how many times a lead changes owner while in MQL status. It is important to note that the original assignment by Traction will count as the first transfer. This is an important field in the logic for the response timers in Traction to start and stop appropriately.

When a lead is actioned, Traction will stop the response timer and potentially start another depending on what action is taken. When a lead changes status from MQL to any of Accepted, Qualifying, Qualified, Disqualified, Ineligible, or Recycle, the response timer will stop and the SLA reporting will show who actioned the lead, how long it took, and if the SLA was met or not met. If there is only one response timer it tells you that the status was changed.

When there are multiple response timers listed for one lead it is because the owner was changed while the lead was in MQL status. The reporting will show who the owner was that changed the lead owner and who the new owner is. It will also show how long it took the original owner to change the lead owner. Lastly, a new response timer will start, meaning the new owner now has 2 business hours to action the lead. Another way to see if there was a lead owner change it to check the MQL Transfer Count field.

## SLA Reports

There are a total of 4 reports to view related to SLAs, two for leads and two for contacts. There is a report for both leads and contacts grouped by Sales/Business Development Reps and another for both leads and contacts grouped by the lead/contact.

Here is a video that illustrates the lead reports (contact reporting functions the same) and how the SLA functionality works as whole with an example lead.

https://gitlab.zoom.us/rec/share/8uiy8D2TQNzeNMeLyG3zPwmQnABeBTEwTkMMWOs8JhURsCXFkAQ58YHpX-uWp_O7.ROQmX1uYK7ZFRWnj?startTime=1732037940000

## Traction Response Timer Settings

For leads there will be a total of ten response timers. This means a lead can MQL or be transferred while in MQL status up to ten times over the life of the lead with a SLA being recorded.

The start and stop criteria for lead timers are as follows:

Timer 1 - Start:

1. Date of Last Completion = Is Changed
2. Status = MQL
3. MQL Transfer Count = 1
Logic: (1 AND 2 AND 3)

Timer 1 - Stop:

1. Status = Accepted
2. Status = Qualifying
3. Status = Qualified
4. Status = Recycle
5. Status = Disqualified
6. Status = Ineligible
7. Owner ID = Is Changed
8. MQL Transfer Count = 2

Logic: 1 OR 2 OR 3 OR 4 OR 5 OR 6 OR (7 AND 8)

Timers 2 through 10 follow the same filters and logic with a corresponding MQL Transfer Count value.

Contacts will have a total of four response timers due to the nature of leads reaching MQL status and changing owners less often.

The filters and logic for the contact timers are as follows:

Timer 1 - Start:

1. Status = MQL

Timer 1 - Stop:

1. Status = Accepted
2. Status = Qualifying
3. Status = Qualified
4. Status = Recycle
5. Status = Disqualified
6. Status = Ineligible
7. MQL Transfer Count = 2

Logic: 1 OR 2 OR 3 OR 4 OR 5 OR 6 OR 7

*Note that subsequent timer start criteria will have a MQL Transfer Count value to correspond.

## Other considerations when looking at SLA reporting

If you are looking at SLA reporting and you notice leads that do not have values for “Timer Response Time” and “Timer Response Time in Business Hours” it is because that lead is in MQL status waiting to be actioned.

If there is a value in “Timer Response Time” but “Timer Response Time in Business Hours” has a value of “0”, which will make SLA Time (Hr) equal to “00:00:00” AND MQL SLA equals “Met” then it means that the MQL was assigned and actioned completely outside business hours for that rep.

If you notice that there are different values for “Timer Response Time” and “Timer Response Time in Business Hours” it indicates that a lead was assigned outside business hours and action was taken within business hours. This will likely be a common occurrence on the SLA reports.
