---
title: "Total Rewards Processes & Audits for US benefits"
description: "Total Rewards Processes & Audits for US benefits."
---

## Processes

### EOI

DRI: Automated by PlanSource

1. Employee elects Voluntary Life & Ad&D plans in PlanSource.
1. If required, PlanSource routes the employee to the Cigna website to fill out the Evidence of Insurance directly.
1. The Employee fills out the Evidence of Insurability and completes enrollment.
1. Cigna/NY York Life rejects/approves the request and automatacally updates the election amount on PlanSource.

### Qualifying Life Event (QLE) Processing

DRI: TBD
Cadence: Ad hoc (check at least weekly)

1. Log into PlanSource and select `Life Events` (in the "Your Tasks" box).
1. For any new pending life events, you will need to request documentation from the team member:
    - Nagivate to the team member's profile.
    - Scroll down to the `Tasks` section and in the Actions drop-down, select "Create a Document Request".
    - Select "New Document Request" and paste the following text:
       > Hello,
       >
       > We received your request to update your benefits due to your Qualifying Life Event. This Qualifying Life Event requires documentation to substantiate it. Please review the following table to understand the documentation requirements: https://about.gitlab.com/handbook/total-rewards/benefits/general-and-entity-benefits/inc-benefits-us/total-rewards-processes/#qle-acceptable-documentation-table.
       >
       > If you have any questions or neeed any help uploading your documentation, please reach out to the Total Rewards team.
    - Choose acceptable documents for the team member's Life Event per the table below and click "Submit"
1. Once you have checked the `Life Events` task for any new life events, navigate to `Document Requests` in the "Your Tasks" box to review whether any team members have submitted documentation. Note that this may reflect 0 in your summary view even if the team member has submitted a document.
1. If a new document has been submitted and needs review:
    - Click the task.
    - Click the link under "Documents Requested From Employee" which will open a side panel.
    - Click to open document in a new window if preview doesn't work.
    - Review the document per the documentation table below ensuring the effective date in the QLE matches the event date in the documentation.
    - If it meets documentation requirements, click "Accept." If not, click "Reject and Issue New" and reach out to the team member to explain what else is needed.
    - Once the documentation is accepted, you'll also want to make sure to approve the original life event.
1. Once all documents and life events are approved in PlanSource, any carrier updates will also need to be made manually while the EDI integrations are being set up.

#### QLE Acceptable Documentation Table

| Event | Acceptable Documents | Requirements |
|-------|----------------------|--------------|
| Marriage | Marriage Certificate | Name of team member, name of spouse, date of marriage, official seal/signature |
| Birth | Birth certificate <br> Hospital Documentation | Name of team member, name of child, date of birth, hospital letterhead, seal, or signed by doctor/hospital admin (hospital documentation only) |
| Adoption | Court order for adoption | Team member name, new dependent's name, court order effective date |
| Divorce or annulment | Divorce decree/court ruling for annulment | Name of team member and ex-spouse, date of divorce/annulment |
| Establishment or Dissolution of Domestic Partnership | [Domestic Partner Affidavit](https://drive.google.com/file/d/11cV-WXJXu8G626muav2aJvpYS4CMleeE/view?usp=sharing) <br> [Dissolution of Domestic Partnership Affidavit](https://drive.google.com/file/d/1vlhVumXZbw8to2EHXgoDw0HCK4DwWLQ3/view?usp=sharing) | Name of team member, name of domestic partner, date of birth, date of event |
| Death of Dependent | Death Certificate | Name of dependent, date of death |
| Gain of Coverage Elsewhere | Benefits summary, letter from new benefits admin/HR, letter from new insurance carrier | Name of team member and/or dependents being removed from coverage, effective date of new coverage, list of new coverages (medical, dental, vision) |
| Loss of Coverage Elsewhere | Benefits summary, letter from old benefits admin/HR, letter from old insurance carrier, COBRA paperwork | Name of team member and/or dependents being added to coverage, termination date of old coverage, list of coverages (medical, dental, vision) being lost |

### Making Updates in the Carrier Systems

Cigna & Kaiser are automatically fed Member and plan data from PlanSource via the integration.

#### WEX Discovery

Cadence: Semi-Monthly, after each pay period
DRI: Total Rewards, Benefits - Raisha Kole
Temporary process until integrations are in place

**HSA, DCFSA, Commuter Parking and Commuter Transit Funding**

1. Request a report from Payroll on the latest pay period's HSA, DCFSA, Commuter Parking and Commuter Transit Deductions.
    - HSA ONLY Log on to Plansource to Data & Tools > Reports. Search for HSA Funding Report, and enter the payroll date in the "Point In Time" date. Reconcile the Payroll Report and the PlanSource report to ensure that the HSA deduction data is accurate. If HSA funding data is missing from the Payroll Report, a double deduction may need to occur the following Pay cycle.
1. Log on to [Discover Wex Administration Portal](https://benefitsemployerlogin.wexhealth.com/home). Click on "Imports" in the side menu
1. Click on the "New Import"> "Contribution" . Check "Pre-populate Template" and select the savings account you'd like to fund:
    - If HSA - Select "Health Savings Account" under Plan Year - then check "Health Savings Account"
    - If DCFSA - Select the current plan year "1/01/2021 - 12/32/2021" - then check "Dependent Care FSA"
    - If Commuter Transit or Parketing - Select "Commuter Plan 2021" - then check "Mass Transit" and "Parking"
1. Click "Download Template"  This will generate a report with the following Columns: EmployeeIdentifier, Contribution Date, Contribution Discription, Contribution Amount, PlanName, PriorTax Year. Enter the information as follows:
    - EmployeeIdentifier: This Column is the Employee's SSN, and will already be populated for all employees that have an Open HSA Wex account.
    - Contribution Date: The Payroll Deduction date. Format should be MMDDYYYY - no dashes
    - Contribution Description: If the contribution is from the Employer (i.e. Employer HSA Funding) select "Employer". If the contribution is a deduction from the Employee, select "Payroll"
    - Contribution Amount: The amount that was deducted from the employees' paycheck OR the amount that the Employer is contribution to the employee's HSA.
    - PlanName: Pre-populated with the type of Funding account.
    - ProirTaxYear: Leave Blank
1. Double check the Payroll report if any employees received a deduction or contribution and did not populate on the Pre-populated Template. If so, create a Wex account for that employee and add them to the report.
1. Once the report is completed, download it as a CSV file. Return to the Wex Import Page where you had left off. Click on "Next", then upload the CSV file. Click "import"
1. Check if the report had any errors or issues by going back to the "Import" page on the Administration Portal. Under "Pending" you will see if your report had any errors. If there were only a handful of errors you can update directly on the portal by selecting "Fix All". If there were many errors, you can cancel the report and upload a new one.

### Monthly Finance HSA & FSA Reporting

Finance requires the ongoing FSA and HSA account reporting for tracking purposes

1. Log on to [Leap Discover Portal](https://employerbenefits.wexhealth.com/DiscoveryCentral)
1. Click the "Benefits Administration, HSA, FSA & HRA link
1. Click on Reports > "+New Report"

For FSA

1. Select "Account Balance Detail"
1. Enter the following information:
    - Select "As Of" : Last day of the month
    - Plan Year: current plan year
    - Group By: Do Not Group
    - Report detail Level: Detail
    - Check includ cash balance detail
    - check email me when report is available

For HSA

1. Select "HSA Account Detail"
1. Enter the following information:
    - Select Start Date: first day of the month
    - End date: Last day of the month
    - Group by: Do not group
    - Report detail level: detail
    - check in Email me when report is available
    - check include masked ssn
    - detail to include: reporting period data

Upload these reports in the Account FSA & HSA reports folder in the US Benefits folder

### Monthly Health Bill Payments

The Total Rewards Analyst will review and initiate payment for all monthly health bills in the United States.

- All bills are available on the first of the month and should be paid by the 13th.
- A reconciliation report will be made available in the PlanSource system. Total Rewards will transfer the reconciliation and Group Invoice documents to the US Benefits Billing Google Drive.
  - These documents will be used to verify the proper amount was billed and to provide department breakdowns to AP.
- Total Rewards will login to each admin platform and pay the bills using the banking information and links found in the 1password note: "Monthly Heath Bills"
- Total Rewards will then email a detailed breakdown of the amount/department totals to `ap@gitlab.com` for accounting purposes.
- TODO Build in step-by-step process

### Assigning A 'Benefits Group' for Team Members

The People Operations team will update the 'Benefits Group' in the HR system of record for Team Members when they are onboarded or relocated. The Benefits Group determines which plans team members are eligible for.

#### Instructions on assigning a benefits group

There are two parts of the Benefits Group: **1. The entity** and **2. The team member's location.**
For example'Fed-FT-Colorado' would be the correct option for a GitLab Federal Team Member living in Colorado.

**Entity**

- 'Fed-FT-': Team Members employed in the Federal entity
- 'Ft-' Team Members employed in the Inc entity

**Location**

- Colorado: Team Members with a home address in Colorado
- Hawaii: Team Members with a home address in Hawaii
- NorthernCA: Team Members with a home address in Northern California
- SouthernCA: Team Members with a home address in Southern California
- TX/MO/OK: Team Members with a home address in Texas, Missouri, or Oklahoma
- OOS: Team members with a home in any other state not listed in the above.

Ineligible: Any Team Member that relocated outside of the US and is no longer eligible for a plan, OR any team member that may not be eligible due to Part-Time employment (under 30 hours per week). Please note that interns are eligible for benefits if they work over 30 hours per week.

### Monthly Navia Upload

Temporary until Integrations are put in place between PlanSource/Workday & Navia

1. Log on to https://www.naviabenefits.com/
1. Reports> Active Member Report > Select the current year's plan > check mark Include EmpID/SSNs
1. Pull PlanSource/Workday report
    1. Termination Report - get termination dates for team members
    1. PlanSource/Workday report of Cigna enrollees
1. Do a vlook up to see which team members need to be termed in Navia & team members who need to be added in to the portal
1. If not that many team members, you can log on to Navia and Upload the data individually > Plan Management > Participants > Add Participant
1. If there are many team members, fill out the [Navia Upload Report](https://docs.google.com/spreadsheets/d/1RcqGMpUnEmDDm6AKtsIVWidh22JEIIqa/edit#gid=1692401370). Log on to Navia Portal > Data Management > Send File > Upload the file > File Recipient is Lydnsey Rush

How to Fill out the Navia Upload Report:

1. Employer Code: GBZ
1. Plan Start: Depends on plan year (for 2022 it is 10/1/2022- to 12/31/2022; for 2023 it is 1/1/2023- 12/31-2023)
1. Record Type: Eligible
1. Fill in SSN, First Name, Last Name, Address Name, City, State, Country, DOB, Sex, Work Email
1. Benefit Code: Since there are two plans each team member and dependent will need 2 separate line items, one for the pre-tax plan, and one for the post tax plans:
    - HRA1: Pretax Travel Plan – For those on Non HDHP
    - HRA2: Post-Tax Travel Plan – For those on Non HDHP
    - HRAOTHER: Pretax Travel Plan (Post-Deductible) – For those on HDHP w/ HSA
    - HRAEE: Post-Tax Travel Plan (Post-Deductible) – For those on HDHP w/ HSA
1. Fill in the following information for the team member and their dependents Covered Individual SSN, Relationship, First name, last name, sex, covered individual enrollment (1): a line is needed for each team member and each dependent

Example on how many entries should be in the report per team member: If a team member has a spouse & a child; there should be 6 entries: a line for each dependent and a line for each plan (pre-tax & Post tax)

#### Cobra Navia

Team members have the option of electing the HRA during Cobra, once elected and payment is made, WEX sends email notification to Navia informing them of the COBRA election and to reactivate the member’s access to HRA.
The process for reporting elections is managed by WEX.

### Payroll Hourly Reporting in to Workday for ACA Measurement

TBD

Every Month Payroll will need to upload a Affordable Care Act Worker Hours and Wages to track working hours during measurement period.

1. The US Payroll Team will fill out the Affordable Care Act Workers Hours and Wages Report at the end of the month.
1. Step 2 TBD

### Cobra Subsidy Process

1. The People Relations team will send a notice to the Total Rewards Team when a Cobra Subsidy needs to added to the Team member's profile.
1. Total Rewards will set a reminder to submit the subsidy in to Wex the Wednesday after the team member's last day. (Since the data feeds over on Wednesdays)
1. Total Rewards will calculate the Subsidy on the Cobra Subsidy Calculations Spreadsheet located in the US Benefit folder.
1. Total Rewards logs on to [Discovery Leap Platform](https://employerbenefits.wexhealth.com/Login?expired=True) > Cobra Administration > Search Member > Click on the team member's Qualified Beneficiary Profile > Subsidies > +Add Subsidy
    1. enter subsidy start & end date
    1. subsidy schedule amount type: Flat Amount
    1. Plan type: Enter either Dental/Medical/Vision
    1. Amount: Enter the amount calculated from the Spreadsheet
    1. Repeat process for all healthcare benefits
1. If Subsidy crosses plan year, makes sure to calculate and enter different subsidy amount for each year.

### Audits

#### WEX (Discovery) Funding Account Audit

This quarterly audit is conducted to ensure the funding of our account used for FSA, DCFSA, and commuter benefit plans according to Accounts Payable matches the amount of claims incurred in WEX (Discovery)'s system.

1. Reach out to Accounts Payable to provide an updated payment history report for payments made to WEX (Discovery).
1. In the `Ongoing Discovery Audit` spreadsheet, add new entries in the report provided by Accounts Payable to the bottom of the table in the "Discovery Payments History" tab.
1. Navigate to [WEX (Discovery)'s platform](https://employer.discoverybenefits.com/Login?ReturnUrl=%2f) and log into the employer portal.
    - Select "Benefits Administration" in the left toolbar.
    - Navigate to the "Reports" tab and select the "Employer Funding Report".
    - Download all reports for the months that have elapsed since the last audit was conducted.
1. Add the new monthly report(s) to the `Ongoing Discovery Audit` spreadsheet as new tabs.
1. Reconcile all funding sent by Accounts Payable against the Employer Funding Report details.
    - AP funding will be denoted as "MANUAL EMPLOYER TRANSACTION AND ADJUSTMENT" in these reports.
1. On the "Funding Summary" tab, add the newly downloaded month(s) to the bottom of the summary table:
    - Add the year of the report(s) in column A.
    - Add the month of the report(s) in column B.
    - Copy the formula down for columns C, D, and E.
    - For columns D and E, replace the year and month in the formula with the year and month inputted in a column A and B.
        - For example, if the formula current has `=sumif('March 2020 Funding Detail'!A:A,"Manual Employer Transaction and Adjustment",'March 2020 Funding Detail'!H:H)` and you are working on the row for April 2020, change the formula to say `=sumif('April 2020 Funding Detail'!A:A,"Manual Employer Transaction and Adjustment",'April 2020 Funding Detail'!H:H)`.
1. In the same "Funding Summary" tab, review the difference calculated in cell L3. This difference should be positive and roughly equivalent to the amount we currently have available in our Funding Account for WEX (Discovery), typically in the range of $5,000 to $50,000.
1. Any discrepancies or problems should be escalated to the Manager, Total Rewards.

#### WEX (Discovery) Payroll Audit

TODO

#### PlanSource/Carrier Enrollment Audit

This quarterly audit is conducted to identify any differences in enrollment between the carrier records and what a team member has elected in PlanSource.
