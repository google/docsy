---

title: "Logging Activities - Best Practices"
description: "Overview of the SMB Logging Activities Best Practices"
---

## Logging Activities - Best Practices

In order to accurately track the status of opportunities, it is imperative that all activities are related to an opportunity, and not just a contact.

If the business can view the activity history of an opportunity, we can start to understand why opportunities closed win, churn, and/ or require quote discounts.

### General Hygiene

Every opportunity in SFDC must have a contact attached [Displayed as Contact Role on the Opp]

![contact-role-screenshot](/images/handbook/sales/contactrole.png)

- FO Opps - This is done automatically when an SDR converts the originating lead, into an opportunity.

- Pooled/ Renewal Opps - The contact will need to be added manually to each renewal/ add on opportunity.

Once the contact has been added to the opp in SFDC, it must also be added to the opp in Outreach.  This is because automatic opp association has been turned off in Outreach. Search for the opp in Outreach, then add the contact in the Prospects tab.

![outreach-screenshot](/images/handbook/sales/outreach.png)

FO AE’s should log calls using one of the below subject lines only;

- Initial Call (ii)
- IQM (ii)
- Trial check in call (ii)
- Check in call 1 (ii)
- Check in call 2 (ii) etc
- Quote check in call (ii)

The status of an activity should move from Open to Completed once said activity has been completed (for manually recorded activities).
Activities still need to be logged after every interaction, even if the Next Steps field on the opps has been updated.

### Calls

Use Outreach for calls, and after the call, complete the following fields;

- Call Disposition
- Call Notes

Reminder: After the call has been completed, double check the Open Opportunity field is populated. (The Contact MUST be added to the opp in SFDC for this to work)

Calls can be initiated through Outreach, or via the contact in SFDC, as long as the Outreach chrome extension is set up.

If manually logging a call in SFDC, log on the Contact, with the Related To field populated with the opportunity name.

### Email

Before emailing through Gmail, check that the recipient has a purple circle next to their name.  This will ensure the email is tracked in Outreach, and synced to SFDC.  If they do not, make sure the contact is attached to the opportunity in both SFDC, and Outreach.  The contact must also live under the same account as the opportunity.  

### Chorus

Every pre-arranged meeting should be held via Chorus, and not Zoom.  This ensures the conversation and transcript is logged, which will aid in coaching as well as sharing best practices with the team. To add a Chorus link to your meetings;

- Create a new meeting in Google Calendar
- Select Add Video Conferencing
- Click on Chorus Meeting
- Click Save.  
- DO NOT click on Make it a Zoom Meeting
- A video tutorial of the process is available.  To request the link, please post a message in the #self-service_public slack channel.

Once the meeting has taken place, and a Chorus activity has been automatically logged, make sure it is related to both the Contact and the Opportunity, and is Assign to yourself.

### Cases

When following up on a case, be sure to relate the relevant activity to the Case record.  You can either log an activity directly on the Case, or log an activity via Outreach on the contact, and relate it to the Case record.  
