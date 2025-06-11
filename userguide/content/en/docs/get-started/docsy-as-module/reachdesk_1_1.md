---

title: "Reachdesk"
description: "Reachdesk is a direct mail provider that we use for sales and marketing campaigns to fuel pipeline progression using personalized gifts"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## About Reachdesk

Reachdesk is a global giting plaform used to land and accelerate deals to fuel pipeline progression using personalized gifts.
Contact: Customer Success Manager - Aoife Sweeney - aoife@reachdesk.com

### Video Walk Through

Please watch the video walk through showcasing how to fully utilize Reachdesk's capabilities.
<!-- blank line -->
<figure class="video_container">
 <iframe src="https://drive.google.com/file/d/1ym8v0tQ9aHCQRfRP_sV7JSBXIETmC8X8/preview" width="640" height="480" allow="autoplay"></iframe>
</figure>
<!-- blank line -->

### Reporting and Dashboard

Utilise the **Insight** tab on the platform. Customised reports can be created upon request, on a monthly/biweekly basis. Please send email to aoife@reachdesk.com

## Setting up users and teams

Users can be assigned to different roles.

1. Admins - has full access to the platform
1. Campaign Manager - can create and manage campaigns and has very limited org management access
1. Senders - can send campaigns and view their own sends

To view these roles go to Organisation > Users > Refer to Role column

## How to use

## Building Campaigns

### Creating Reachdesk Campaigns

First off click **New Campaign**. You can then select one of four options:

1. Bundle - using items from our warehouses (currently UK, EU, APAC warehouses)
1. [E- Gift cards](https://airtable.com/shru1rpb3shmVjRNp/tbls5YVmVTukLMc3Z) and reward Pass - sending e-gift cards, can choose from a vast selection, region specific. It is recommended to include min 3 types of cards
1. Handwritten Note
1. [Marketplace](https://airtable.com/shrIR5jn2LQuADwWg/tblWVU3FlI11uBivB) - send a physical gift e.g food hampers, flowers, gift boxes etc

### Bundle

1. Enter campaign name e.g. On-Boarding Bundle.
1. Select warehouse. Example: EU for European sends and UK warehouse for UK ONLY sends.
1. Use the drop down to select what items you would like to send. Note you will need to have stock in your inventory first to do this.
1. Add a note. TIP - Make sure you always add a handwritten note to increase response rate.
1. Then click save! This will then appear in your Campaigns tab.

### E-Gift cards and reward pass

Gift cards are a great start as there is no sourcing required, cost effective (as you get your money back in 14 days if unclaimed) and instantaneous. Gift cards are sent as an email so ensure you add in a template including subject line and body.
A full list of E-Gift cards are [here](https://airtable.com/shru1rpb3shmVjRNp/tbls5YVmVTukLMc3Z)
Note - gift cards must be built in the currency of the country you're sending to e.g. Uber Eats GBP only works in the UK not in Germany or Norway etc.

### Handwitten Note

Send a personalised note. However there are character limitations

### Marketplace

Reachdesk marketplace allows you to choose from a range of confectionary, flowers, cakes and other perishables from approved third party providers so you can send gifts on a 1-to-1 basis as an out-of-the- box feature. All items can be customised to give that personal touch. Items can be viewed [here](https://airtable.com/shrIR5jn2LQuADwWg/tblWVU3FlI11uBivB) or you can also view items on the campaign build section without actually building the campaign.

Please refer to GitLab's policies related to Gifts and Contributions [here](/handbook/legal/policies/gifts-contributions/)

## How to send a campaign

1. Please click the ‘Send Engage +’  button and select the campaign/gift you need to send to a prospect.
1. After selecting the campaign, you need to add personal details, this webpage will be different in case you are sending an e-gift or a physical gift.
1. Check the status of your gifts from the sends tab. E-gifts will be sent out immediately, like an ordinary email. In case of physical gifts you will have a 30 mins window to cancel or edit your orders. After that window expires please reach out to us at support@reachdesk.com in case of further assistance.

## Tracking Sends

- On your sends tab in Reachdesk, you'll see a full list of sends and status'.
- For physical items these are Sent, waiting for address confirmation, address confirmed, shipped, Delivered. You'll also get an email notification when they get delivered.

- For e-Gift cards these are Sent, Open, Click, Claimed.
You can also see the status of sends under the contact you've sent to in your chosen CRM.
- Go to the activity of the contact, and see [Reachdesk] *status* *campaign name*

## Shipping

Reachdesk can ship to over 160 countries around the world.

- Europe warehouse (EU-Ireland) ships to: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Lativa Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden.
Also items can be shipped from the Eu warehouse from the countries listed [here](https://docs.google.com/document/d/1ntR-DEd3h6VLCAB2nzHvKXN5m5gtueQS7QMLnPXSa84/edit)

- United Kingdom warehouse ships within the United Kingdom only

- Australia Warehouse ships to: Australia, Hong Kong, Indonesia, Japan, KOrea, Malaysia, New Zealand, Singapore, Taiwan, Thailand, Vietnam

- North America ships to United States

## Project management

Here is a link to the campaign [planning form](https://form.asana.com/?k=hvl00YjBdxU5Qtet-rjMsQ&d=1193162279639741) - for any items you would like the project management team to source directly to our warehouses for you. This could be branded swag or any other bespoke goods that are not available on the Marketplace.

## Branded banner for the e-gift emails

1. This image should be 600x80 pxl in Jpeg/Png format
1. The branding tab under 'Organization' only needs to be completed once, and is for address confirmation emails

## Creating a Triggered Campaign

### Trigger Reachdesk sends through Salesforce

1. Go to Triggered Campaign > Create Triggered Campaign. Then under Campaign Trigger, select Connector (Salesforce).
1. Select Salesforce as your connector and choose Object. This will depend on what you have in your own Salesforce.
1. Under Field, select Stage. Other options are  Status, Opportunity ID, Opportunity Type, Probability, and Close Date.
1. Under Field, Select Campaign ID (to ensure it is sent to those in that specific campaign), Comparator is Equals. Under Value, copy and paste the Campaign ID from the URL of the campaign in Salesforce. (You have to create a SFDC campaign first with [these steps](/handbook/marketing/marketing-operations/reachdesk/))
1. Press AND + to add another field. This will then be sent to all members of that SF campaign.
1. Click Next and Save campaign
TIP: it's advisable to `Pause` triggered campaigns until it's ready to go live/active.

## Creating a Landing Page

This is one link that can be sent to multiple recipients, and the gifts will be automatically fulfilled via this page. The Landing page can be customised, here are some examples :

1. Create New Campaigns in Reachdesk, choose campaign type Marketplace. For each gift that you intend to offer to the recipient a new campaign will be created.
1. Search the marketplace by choosing Category and/or Country, choose gift and click build campaign
1. Add in a unique campaign name, Include logo and note
1. In CRM Sync - assign Salesforce name and salesforce Campaign
PLEASE NOTE: Do not tick `Ask recipient to confirm their address` for  campaigns linked to a Landing Page
1. Complete this form to request a [landing page](https://form.asana.com/?k=mBpww9IX3k5mRbd1dt4D1A&d=1193162279639741)

### Best Practices when completing the Landing Page form

1. Create campaigns before completing the form and add the links of these campaigns into `What campaign(s) would you like to link to this landing page?`
1. Complete the form in the language the landing page will be in e.g German, French etc
1. Always state `Yes` for question `Would you like approval on submissions?`
1. Revisions will require additional turnaround time, so please allow 5 - 7 days prior to the launch date

## Shipping to Events

Reachdesk can ship items from our warehouses to events!

1. Complete this [form](https://form.asana.com/?k=zkc-EX_KMUccxk6U5sq1RQ&d=1193162279639741) to submit an event shipping request
1. All requests must be submitted **2 weeks prior to the event** - but the more notice, the better! After your request is received a member of the reachdesk team will reach out within 24 business hours.
1. Only merchandise/giveaways can be shipped to events. No booths, signage, or other booth branding items. Items will be limited to a weight limit below 1 pallet.
1. Shipping to events is a one-way request, cannot pick up from an event.
1. Please partner with the reachdesk project manager for any ship to event requests.

## SDR/BDR

### Integrations

- In Reachdesk, first go to Settings > Integrations and click "Linked Account" next to applicable CRMs (you'll know it's worked as the button will change from blue to grey).
Download the Reachdesk Chrome Extension [here](https://chrome.google.com/webstore/detail/reachdesk/hdckbmdejcmfjjklcjmkdncblfjhfnke?hl=en) so you can use RD within your CRM.

### Send engage in CRM connector

- When on a contacts page in your chosen CRM e.g. Outreach, hit the Reachdesk Chrome Extension.
- Select the campaign > let Reachdesk auto-populate all contact details for you > edit the note > Click Send or Schedule Send to send at a later date.

Link to the [Sales Development Playbook](https://app.hubspot.com/documents/5465287/view/86788250?accessId=923f4e)

## How to request an invoice for more credit

1. Go to: Organizations > Balances
1. Click on Add Credit on the top right of the page
1. In the Account & Amount section, select either Company Balance or User Balance and populate the amount of money and currency account you want to top-up.
1. In the Billing Entity section, select which Billing Entity you want the invoice to be addressed. In some cases, there is only one so this should be pre-selected. If there is no billing entity, or you cannot find the right billing entity, please contact `support@reachdesk.com` so we can add this billing entity to our invoicing system.

All campaigns must have a Salesforce.com attached. If this campaign involves Marketo, please skip to [those instructions](/handbook/marketing/marketing-operations/reachdesk/#marketo-campaigns), otherwise follow directions [below](/handbook/marketing/marketing-operations/reachdesk/#salesforce-campaigns).

### Salesforce Campaigns

1. Clone [SFDC template](https://gitlab.my.salesforce.com/7014M000001vgGz) and fill in all necessary fields. You must clone because this template contains the  correct member statuses for the integration.
1. Make sure bizible touchpoints are set to `Include only "Responded" Campaign Members`
1. Create your ReachDesk Campaign
1. TBD

### Marketo Campaigns

1. Directions TBD

### Data Requests and Deletions

Even though Reachdesk stores PII in lieu of GitLab, it is still GitLab's responsibility to follow protocol with personal data and deletion requests. Upon receiving one of these requests through our normal channels, Reachdesk will need to be emailed at `gdpr@reachdesk.com` to check for PII and or delete that data, where applicable.
