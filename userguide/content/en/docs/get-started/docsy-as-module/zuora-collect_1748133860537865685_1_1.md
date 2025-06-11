---
title: "Zuora Collect module"
description: "The business process behind the Zuora Collect module"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Business Need

The business had identified the need to optimize the [cash collection process](/handbook/finance/accounting/finance-ops/billing-ops/#cash-collections) in order to reduce the Order to Cash cycle, thereby reducing our Days Sales Outstanding (DSO), increasing cash efficiency for the business and scaling for future growth since the current collections process was partly automated with automated dunning notices remitted in a cadence of 7, 20, and 30 days past due. From there, a manual collections process would begin.

The Billing team was spending an average 31.5 hours per month/per person on accounts receivable activities totaling 157.5 hours per month for the team:

- Average 2.5 Hours per week on Accounts Receivable Aging.
- Average 2.5 Hours per week on Cases.
- Average 2 Hours per week on Zendesk.

## Business Solution

Since Zuora was already an application from our Tech Stack and used across different teams and departments, the business decided to move forward with the implementation of the Zuora Collect module in order to support collection activities automation. The implementation would allow the Billing team to create a more organized Collections team by moving into a single use collection platform.

### What is Zuora Collect

[Zuora Collect](https://knowledgecenter.zuora.com/Zuora_Payments/Configure_payment_orchestration/Zuora_Collections/Get_Started_with_Collections/A_Overview_of_Zuora_Collect) is a complete solution for optimizing recurring collections in the Subscription Economy. As main benefits, it can track unpaid invoices and delinquent accounts, manage automated business processes and intelligent retry logic, and customize payment runs.

### How to access Zuora Collect

As a first iteration, the following features have been configured in our Zuora Production environment:

- Collections Window
- Notes

To access these features:

1. Login to your Zuora account (via Okta).
1. On the left-bar, expand the `Marketplace` section.
   - Both `Collections Window` and `Notes` features should be listed.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/x4MdJW4xNXg" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

See below for more information on how to use each feature.

### How to use Zuora Collect

#### Collections Window

The main user interface of the Collections Window consists of the following tabs:

##### Dashboard

This is the default tab when you start the Collections Window and contains three sections:

- **Status of Accounts**: Pie chart that shows the distribution of accounts in different statuses (in good standing vs. in collections).
  - Drill down the data in the pie chart by clicking the part for In Collections. It will display a new pie chart that shows the distribution of accounts in collections by age.
  - Customize the time periods used in the pie chart by clicking `Edit Parameters` on the top right. Both the time period names (Bucket Name) and the numbers of days are customizable.
    - After modifying the parameters, the user will need to refresh the page to see the changes in the pie charts.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/zLDY4C87e_A" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Collection Accounts Sorted by Age and Balance**: Scatter plot that shows the age and balance distribution of accounts.
  - A dot in the plot represents an account: Blue dots are accounts that are assigned to the current user.
  - Hover over a dot to see details including the account name, total invoice balance and assigned agent.
  - Click on a dot to open the details page of the corresponding account.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/uzPGDHJfKPk" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

- **Agents**: Displays all agents and the details about the accounts they are responsible for, including the total number of accounts, total accounts balance and numbers of accounts in different statuses.
  - Click on the name of an agent to open a new page:
    - The Accounts tab displays the list of accounts that the agent is assigned to.
    - The Metrics tab includes a pie chart for account balance distribution, a bar chart for account statuses and a bar chart for total balance by accounts.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/lNmCq7SeDmU" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

##### Accounts

The Accounts tab displays the accounts in collections based on the system condition and the conditions defined by the user.

> Filter the accounts by: All Accounts, My Accounts or Unassigned Accounts, by Agent or by Account Status.

**Edit conditions:**

- Click `Edit Conditions` on the top right.
- In the pop up, modify the number of days overdue and the total invoice amount.
  - *The balance is in the home currency.*

> For an account to be considered "in Collections" and populated in the Accounts tab, the total invoice balance must be a positive value greater than the specified number and the days overdue must be greater than the specified number. If either of the two conditions is not met, the account is not considered "In Collections".

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/SUczIKlHs8g" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

**Manage accounts in collections**

Click on an account name to view the details of the account (Account information is visible to all agents).

On this page, the user can perform the following operations:

1. Assign collections agents to accounts:
   > The collections agent for the account is displayed on the top left of the account details page.<br>
   > If no agents have been assigned to this account, Unassigned will be shown.<br>
      1. On the account details page, click the agent name or Unassigned.
      1. On the page that opens, click the arrow to display the list of agents.
      1. Select an agent and then click Update to save the settings.
1. View contact details of the account.
   - Click View Contact Details on the top right to view the contact details.
1. Update the collection status of this account.
   - In the Account Statuses section, select a status that best represents the current status of the account. Click Update when you are done.
1. View invoice details, payments, or retry status of this account.
   - For each invoice, the user can click the action icon and select `Show` or `Show in Zuora` to view the details of the invoice in Collections Window and Zuora UI respectively.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/1dvwqmOF-io" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

1. Enter comments regarding the particular account to keep other agents informed of account transactions.

> The user can add or reply to comments, or mention a particular user in comments.<br>
> **Comments cannot be edited or deleted by design**.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/--ljeeigSjg" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

##### Invoices

The Invoice tab display critical invoices based on the conditions the business define.

**Manage invoices**

On this page, the user can perform the following operations:

1. View the critical invoices sorted by age and balance in the plot below the invoice list.
   - A dot in the plot represents an invoice.
   - Clicking a dot will open the details page of the corresponding invoice.
1. Edit Conditions.
   - Click `Edit Conditions` on the top-right to edit the conditions for critical invoices.
   - Click `Update` to save the conditions.
   - Click on the refresh button above the table to refresh the results.
1. For each invoice, click the action button (3 dots) and select `Show` or `Show in Zuora` to view the details of the invoice in Collections Window and Zuora UI respectively.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/eOaj4vJeqF4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

1. Enter comments regarding the particular invoice to keep other agents informed of invoice transactions.

> The user can add or reply to comments, or mention a particular user in comments.
> **Comments cannot be edited or deleted by design**.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/0YjRbhRur60" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

##### Tasks

Collection tasks are managed in the `Tasks` tab from the Collections Window. It is possible to manually create collections tasks in Collections Windows to follow up on a particular payment or account.

> Collection tasks of this type (referred to as follow-up tasks) are not tied to workflows.

To create a follow-up task:

1. Open the `Tasks` tab from the Collections Window.
1. Click `TASKS BETA` in the top-right corner of the page.
1. Click on the plus sign icon to create a new task.
1. In the new task pop up:
   - Add the task name to the **Task** field: Specify a name to identify the task.
   - Select a **Status**:
      - Pending: The task is active and has not been completed.
      - Completed: The task has been completed.
      - Closed: The task has not been completed but is no longer relevant.
   - Add a **Description**: Specify a brief description of the task.
      - It is recommended to include the account, invoice, or payment that's related to the task.
   - Select the assignee from **Assign To**: Type at least two letters in a username or email address to trigger the automatic completion feature.
   - Add a **Due date**: The date when the task is due.
      - On the due date, the owner and the assignee of this task will get a notification.
   - Add a **Reminder date**: The date when you want the assignee to get notification about the task.
   - Add an **Auto Escalation**: If this option is selected, on the due date of the task, the task will be reassigned to the escalation point of the agent.
      - Escalation points are configured in Notes.
1. Click `Create`.
1. The task is created and displayed in the list of follow-up tasks.

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/zoxbseZeUqs" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

##### Settings

The user can configure schedules, system integration and collection statuses in this tab.

#### Notes

The Notes feature adds commenting functionality to the Collections Window feature of Collect. With this feature, it is possible to add or reply to comments, mention other users or upload files in comments, and export notes.

The UI of Notes consists of four tabs:

- **Users**: View all users (collection agents) in the organization, edit the active status of a user, or set the escalation point for a user.
- **Groups**: Manage user groups in this tab.
- **Export**: Export notes that are made in the Collections Window feature.
- **Settings**: Get the Notes API-token and use it to integrate with Collections Window.

##### Manage users

In the Users tab, you can view and manage all users (collection agents) in your organization:

- Change the active status of a user (from active to deactivated or vice versa).
  - To deactivate the user, deselect Active. To reactivate the user, select Active.
- Edit the user escalation point by clicking on the menu icon (3 dots on the left) and select Edit.
  - To assign an escalation point for the user, click the drop-down list and type two or more characters from the user name of the intended escalation point.

> - When a user is deactivated, it cannot be mentioned in a note section or assigned a follow-up task in Collections Window.<br>
> - Comments by the user or follow-up tasks that were already assigned to the user are not affected.<br>
> - A deactivated user is not removed from the list of users but the name of a deactivated user is grayed out.

##### Export notes

In Notes, the user can export notes that were added in the Collections Window.

To export notes in the Notes feature:

1. Navigate to the Export tab of Notes.
1. Select a data source to export notes from.
   - Accounts: This data source contains notes that are added to customer accounts in Collections Window.
   - Invoices: This data source contains notes that are added to invoices in Collections Window.
1. Optional: Filter the notes by attribute values.
   - For the Accounts data source, you can export notes for all accounts (default), or filter notes by account ID or account number.
   - For the Invoices data source, you can export notes for all invoices (default), or filter notes by invoice ID or invoice number.
1. Optional: Select the time zone for the export operation.
   - This time zone selection will be used to arrange the notes based on the same time zone. In the exported file, timestamps of the notes will be converted to the configured time zone. It does not affect the date and time when a note was added. If no time zone is selected, the UTC time zone (default) will be used.
1. Optional: Select the start date and end date of the period within which the notes will be exported. If you do not specify these fields, all notes will be exported.
1. Click Export. The notes will be saved into a CSV file.
   - Exported files will be available for download for seven days.

## FAQ

### How to assign Agents to an account?
>
> For a video tutorial, click [here](https://youtu.be/1dvwqmOF-io?t=11).

1. Open the Collections Window and click on the `Accounts` tab.
1. Search for the account that needs to be assigned and open it (by clicking on the account name).
   - The collections agent for the account is displayed on the top left of the account details page.<br>
1. Click the agent name or Unassigned.
1. Select an agent from the dropdown list.
1. Click Update to save the settings.
   - Refresh the page to see the changes.

### How to view the contact details of a particular account?
>
> For a video tutorial, click [here](https://youtu.be/1dvwqmOF-io?t=44).

1. Open the Collections Window and click on the `Accounts` tab.
1. Search for the account that you are looking for and open it (by clicking on the account name).
1. The `View Contact Details`button is on the top right corner of the page.

### How to update the collection status of a particular account?
>
> For a video tutorial, click [here](https://youtu.be/1dvwqmOF-io?t=57).

1. Open the Collections Window and click on the `Accounts` tab.
1. Search for the account that you are looking for and open it (by clicking on the account name).
1. In the `Account Statuses` section, select a status that best represents the current status of the account.
1. Click `Update` when you are done.

### How to search for a specific account?
>
> For a video tutorial, click [here](https://youtu.be/SUczIKlHs8g?t=46).

1. Open the Collections Window and click on the `Accounts` tab.
1. Find the magnifying glass on the top right and type the account name.
   - The list will automatically refresh with the results.

### How to view the invoice details and payments a particular account in the Collect window?

There are two ways to view invoice details:

> For a video tutorial, click [here](https://youtu.be/1dvwqmOF-io?t=77).

1. Open the Collections Window and click on the `Accounts` tab.
1. Search for the account that you are looking for and open it (by clicking on the account name).
1. In the `Invoices` tab, click on the action icon (the 3 dots on the left) and select `Show` to view the details of the invoice in the Collections window.

> For a video tutorial, click [here](https://youtu.be/eOaj4vJeqF4?t=20).

1. Open the Collections Window and click on the `Invoices` tab.
1. Search for the invoice that you are looking for.
1. In the `Critical Invoices` section, click on the invoice number OR on the action icon (the 3 dots on the left) and select `Show` to view the details of the invoice in the Collections window.

### How to open an invoice in Zuora Billing?

There are two ways to view invoices:

> For a video tutorial, click [here](https://youtu.be/1dvwqmOF-io?t=95).

1. Open the Collections Window and click on the `Accounts` tab.
1. Search for the account that you are looking for and open it (by clicking on the account name).
1. In the `Invoices` tab, click on the action icon (the 3 dots on the left) and select `Show in Billing` to open the Zuora Billing UI in a new tab.

> For a video tutorial, click [here](https://youtu.be/eOaj4vJeqF4?t=20).

1. Open the Collections Window and click on the `Invoices` tab.
1. Search for the invoice that you are looking for.
1. In the `Critical Invoices` section, click on the action icon (the 3 dots on the left) and select `Show in Billing` to open the Zuora Billing UI in a new tab.

### How to add comments to an account?
>
> For a video tutorial, click [here](https://youtu.be/--ljeeigSjg).

1. Open the Collections Window and click on the `Accounts` tab.
1. Search for the account that you are looking for and open it (by clicking on the account name).
1. Scroll down to the `Customer Account Notes` section and click on the plus icon on the right.
1. In your note you can format the text, attach documents, add a hyperlink and mention a particular user if needed, by adding `@`before the user name.
   - When a user is tagged in a comment, they receive an email informing that they have been mentioned in a comment.
1. When finished, click on Submit.
   - Comments cannot be edited or deleted by design.

### How to reply to comments on an account?
>
> For a video tutorial, click [here](https://youtu.be/--ljeeigSjg?t=49).

1. Open the Collections Window and click on the `Accounts` tab.
1. Search for the account that you are looking for and open it (by clicking on the account name).
1. Scroll down to the `Customer Account Notes` section and find the comment that needs a reply.
1. Click on the reply button on the right.
1. In your note you can format the text, attach documents, add a hyperlink and mention a particular user if needed, by adding `@`before the user name.
   - When a user is tagged in a comment, they receive an email informing that they have been mentioned in a comment.
1. When finished, click on Submit.
   - Comments cannot be edited or deleted by design.

### How to add comments to an invoice?
>
> For a video tutorial, click [here](https://youtu.be/0YjRbhRur60).

1. Open the Collections Window and click on the `Invoice` tab.
1. Search for the invoice that you are looking for and open it (by clicking on the invoice number).
1. Scroll down to the `Invoice Notes` section and click on the plus icon on the right.
1. In your note you can format the text, attach documents, add a hyperlink and mention a particular user if needed, by adding `@`before the user name.
1. When finished, click on Submit.
   - Comments cannot be edited or deleted by design.

### How to reply to comments on an invoice?
>
> For a video tutorial, click [here](https://youtu.be/0YjRbhRur60?t=36).

1. Open the Collections Window and click on the `Invoice` tab.
1. Search for the invoice that you are looking for and open it (by clicking on the invoice number).
1. Scroll down to the `Invoice Notes` section and find the comment that needs a reply.
1. Click on the reply button on the right.
1. In your note you can format the text, attach documents, add a hyperlink and mention a particular user if needed, by adding `@`before the user name.
   - When a user is tagged in a comment, they receive an email informing that they have been mentioned in a comment.
1. When finished, click on Submit.
   - Comments cannot be edited or deleted by design.

### How to delete a comment?

- Comments cannot be edited or deleted by design.

### How to edit a comment?

- Comments cannot be edited or deleted by design.

### How to create a follow-up task?
>
> For a video tutorial, click [here](https://youtu.be/zoxbseZeUqs?t=13).

1. Open the `Tasks` tab from the Collections Window.
1. Click `TASKS BETA` in the top-right corner of the page.
1. Click on the plus sign icon to create a new task.
1. In the new task pop up:
   - Add the task name to the **Task** field: Specify a name to identify the task.
   - Select a **Status**:
      - Pending: The task is active and has not been completed.
      - Completed: The task has been completed.
      - Closed: The task has not been completed but is no longer relevant.
   - Add a **Description**: Specify a brief description of the task.
      - It is recommended to include the account, invoice, or payment that's related to the task.
   - Select the assignee from **Assign To**: Type at least two letters in a username or email address to trigger the automatic completion feature.
   - Add a **Due date**: The date when the task is due.
      - On the due date, the owner and the assignee of this task will get a notification.
   - Add a **Reminder date**: The date when you want the assignee to get notification about the task.
   - Add an **Auto Escalation**: If this option is selected, on the due date of the task, the task will be reassigned to the escalation point of the agent.
      - Escalation points are configured in Notes.
1. Click `Create`.
1. The task is created and displayed in the list of follow-up tasks.

### How to deactivate a user?
>
> For a video tutorial, click [here](https://youtu.be/eKKLCe_CYFE).

1. Open the `Users` tab from the Notes feature.
1. Search for the user (using the magnifying glass on the right)).
1. Click on the action icon (the 3 dots on the left) and select `Edit`.
1. Deselect Active.
1. Click on `Update`.
   - When a user is deactivated, it cannot be mentioned in a note section or assigned a follow-up task in the Collections Window.<br>
   - Comments that were added by the user or follow-up tasks that were already assigned to the user are not affected.<br>
   - A deactivated user is not removed from the list of users but the name of a deactivated user is grayed out.

### How to reactivate a user?
>
> For a video tutorial, click [here](https://youtu.be/wdFSNcQshes).

1. Open the `Users` tab from the Notes feature.
1. Search for the user (using the magnifying glass on the right)).
1. Click on the action icon (the 3 dots on the left) and select `Edit`.
1. Select Active.
1. Click on `Update`.

### How to add an escalation point to a user?
>
> For a video tutorial, click [here](https://youtu.be/32do6ZkBLbY).

1. Open the `Users` tab from the Notes feature.
1. Search for the user (using the magnifying glass on the right)).
1. Click on the action icon (the 3 dots on the left) and select `Edit`.
1. Click on the drop-down list and type two or more characters from the user name of the intended escalation point.
1. Click on `Update`.

### How to export notes?
>
> For a video tutorial, click [here](https://youtu.be/KPK5sHPRQw4).

1. Open the `Export` tab from the Notes feature.
1. Select a data source to export notes from.
   - Accounts: This data source contains notes that are added to customer accounts in Collections Window.
   - Invoices: This data source contains notes that are added to invoices in Collections Window.
1. Optional: Filter the notes by attribute values.
   - For the Accounts data source, you can export notes for all accounts (default), or filter notes by account ID or account number.
   - For the Invoices data source, you can export notes for all invoices (default), or filter notes by invoice ID or invoice number.
1. Optional: Select the time zone for the export operation.
   - This time zone selection will be used to arrange the notes based on the same time zone. In the exported file, timestamps of the notes will be converted to the configured time zone. It does not affect the date and time when a note was added. If no time zone is selected, the UTC time zone (default) will be used.
1. Optional: Select the start date and end date of the period within which the notes will be exported. If you do not specify these fields, all notes will be exported.
1. Click Export. The notes will be saved into a CSV file.
   - Exported files will be available for download for seven days.

## Zuora Collect Support

### GitLab Internal Escalation Process

The Finance Admins should be the first point of contact in case the end-users of Zuora Collect encounter any issues or have any system-related questions.

#### How can I contact the Finance Admins?

Send a message to #proj-zuora_collect_implementation with your question and add the `@here` tag to be picked up by the appropriate person.
