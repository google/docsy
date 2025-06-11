---
title: "Associating emails to Salesforce"
description: "A quick guide on associating emails to Salesforce"
---

This page contains tips on how to associate emails to Salesforce.

## Associating Emails to Opportunities

Associating emails to Salesforce is a best practice that should be followed by all users.
Attaching emails to a Lead, Account, Contact, or Opportunity record are vital for transparency, as any number of team members can review the correspondence between GitLab and the customer/prospect account.
It doesn't do anyone any good when all of the correspondence is kept in a user's inbox.

With that said, there are multiple ways that an email can be associated to an opportunity.
But before you do that, you must first make sure that the contact record is associated to an opportunity via the Contact Roles object.

### First, Contact Roles

To add a Contact Role to an opportunity:

1. Go to the Opportunity.
1. Go to the Contact Role related list.
1. Click 'New'.
1. Add the Contact.
1. If this person is your primary contact, click on the 'Primary' radio button.
1. Add the Role this person plays in the opportunity (Economic Buyer, Technical Buyer, etc).
1. Repeat the steps, although you can only have one Primary Contact per opportunity.
1. For more information, you can visit the [Salesforce Knowledge Center](https://help.salesforce.com/articleView?id=contactroles_add_cex.htm&type=5).

### Email to Salesforce

Email to Salesforce allows you to associate emails to Opportunities using an email long email string that associates the email to the contact.
To set this up:

1. Click on your 'Name' on the top right of any page in Salesforce.
1. Select 'My Settings'
1. Go to the left sidebar and click 'Email'.
1. Then click 'My Email to Salesforce'.
1. Copy the email string.
1. Go to My Acceptable Email Addresses and make sure your GitLab email address is there.
1. In 'Email Associations', make sure "Automatically assign them to Salesforce records" is checked.
1. Check Opportunities, Leads, and Contacts.
1. In the Leads and Contacts section, make sure to select "All Records".
1. It is up to you if you want to save all attachments, as well as if you want to receive an email confirmation of an association (my recommendation is yes for the first few weeks to make sure it's working, then you can turn it off anytime).
1. Click Save.
1. Go to Gmail and save this email address in a Contact record. A good practice is name it 'BCC SFDC' for first and last name.
1. When you send any emails from Gmail, you will BCC the "BCC SFDC" contact, which will send the email to long string you copied in Step 5.

### Outreach

If you want to associate emails to Opportunities using Outreach, follow these steps:

1. Go to your photo on the bottom left.
1. Click Settings
1. Select 'Plugins' on the left menu.
1. Select the SFDC (Salesforce) plugin.
1. Click on 'Contact'.
1. On the bottom right, enable 'Automatically associate activity with Opportunity'
1. Click the 'Save' button on the top right.

### Salesforce Plugin for Gmail

If you want to associate emails to Opportunities or other records using the Salesforce Plugin for Gmail plug in, follow these steps:

1. Visit the Chrome Store to download the [Salesforce Plugin for Gmail](https://chrome.google.com/webstore/detail/salesforce-lightning-for/jjghhkepijgakdammjldcbnjehfkfmha) plug in.
1. Click `Add to Chrome`
1. Click `Add Extension`
1. Go to Gmail and open the right sidebar.
1. When you open an email that may contain email addresses from existing leads or contacts in Salesforce, all related records associated to that email (Lead, Contact, Account, Opportunity, and Cases) will appear, and you can select any or all records to related the email to.
1. For each record you'd like to associate the email to, click on the upload icon for each record.
1. If you wish, you can include some or all of the attachments to the record as well by clicking the checkbox next to each attachment.

If you have any issues with the setup, please contact the Director of Sales Operations via Slack, email, or SFDC Chatter.
