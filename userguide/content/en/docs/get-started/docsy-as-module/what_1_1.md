---
title: Renewals Managers - What we do
---

View the Renewals Manager handbook pages:

- [Home](/handbook/customer-success/renewals-managers/home) - Information about the organization.
- [How We Do It](/handbook/customer-success/renewals-managers/how) - Information about how renewals managers execute on the mission.

Renewals Managers --> visit the internal handbook [page](https://internal.gitlab.com/handbook/sales/go-to-market/renewals/) for more information.

---

## FY24 Renewals Opportunity Management

In FY24, the Global Renewals team will manage more customer-facing transactions than any other team at GitLab. As such, the Renewals team manages Renewal Opportunities with the utmost level of rigor and data quality to ensure a high degree of organization, effective collaboration with account teams, and successful Renewal outcomes.

The Renewals team primarily uses these key fields on Renewal Opportunities:

## Opportunity Info

- `Close Date` - The date on which this Opportunity is expected to close (if still open), or the date on which it closed.
- `Subscription Renewal Date` - the Renewal Date of the active Subscription
- `Customer Subscription link` - hyperlink to the Subscription information
- `Type` - indicates whether the Opportunity is New Business, Add-on, or Renewal
- `Order Type` - Indicates whether this Opportunity counts as new, growth, contraction, or churn.
- `Auto Renew Status` - indicates if the Subscription is set to automatically renew or not

## Deal Management

- `Stage` [link](/handbook/sales/field-operations/gtm-resources/#opportunity-stages)- indicates where in the Renewal/Sales cycle the deal is
- `Next Steps` - field to record critical information and actions that have occurred during the deal lifecycle and what and when the next step is to progress the deal forward
- `Next Steps History` - the record of previous Next Steps

## Forecasting

- `Renewal Forecast Health` [link](https://internal.gitlab.com/handbook/sales/sales-forecasting/#forecast-category-and-renewal-forecast-health-fields) - Red, Yellow, Green health rating based on the Net ARR field
- `Renewal Risk Category` - used to categorize the magnitude of risk on a Renewal and if the risk is Actionable
- `ATR` - the revenue that is Available to Renew (ATR)
- `Amount` - the forecasted revenue for the deal
- `Renewal Swing ARR` - the revenue the Account team believes can be saved on an at-risk Renewal if we take action
- `Net ARR` - the delta between the ATR and the Amount. Positive NetARR reflects Growth while negative NetARR reflects Churn or Contraction.
- `ATR` - Used for calculating Renewal Rate. This is the revenue that is Available to Renew (ATR)
- `Won ATR` - Used for calculating Renewal Rate. This is the forecasted renewal revenue for the deal. This field caps out at 100% of the ATR field to reflect no more than a 100% renewal.
- `Active Mitigation` - Used to describe the primary mitigation if the opportunity is at risk
- `(Best Case / Most Likely / Commit) Forecasted Churn` - Describe the best case, most likely and worst case (committ) scenarios. Best Case and Commit are calculated fields that are dependent on other risk forecasting fields. ML is a manually entered field that should describe what the renewal manager believes is the most likey amount of churn or contraction. 
- `Renewal Manager Notes` - A field often populated with a template that describes risk reason, customer brief, intervnetion in process notes, and intervention required observations.  

## Ownership

- `Opportunity Owner` - the DRI for the outcome of the Opportunity
- `Renewals Manager` - the Renewals Manager supporting this Opportunity
- `Carahsoft Renewals Manager` - indicates the Carahsoft Renewals Manager supporting this deal

## Analytics

- `Closed Won Reason` - the reason the deal was Closed Won
- `Closed Lost Reason` - the reason the deal was Closed Lost
- `Downgrade Reason` - the reason why the Customer renewed but reduced ARR
- `Closed Won Details` - free-form field for additional information and insight as to why we won the deal
- `Closed Lost Details` - free-form field for additional information and insight as to why we lost the deal
- `Downgrade Details` - free-form field for additional information and insight as to why the customer reduced.

## Renewals Forecast Methodology

In FY24 The Global Renewals team is responsible for providing the business with a renewal rate and churn forecast on a regular basis for the Enterprise-Growth (ENTG) Segment.

Providing an accurate, data driven forecast is essential for GitLab’s continued growth as it enables the business to:

- Identify and manage Churn and Contraction risk effectively
- Drive revenue predictability in support of strategic decision making
- Analyze and take strategic action on trends within GitLab’s book of business to mitigate risk

## Approach

In partnership with AEs, the Renewals team will generate a “bottom-up” renewal rate and churn forecast whereby every ENTG Renewal Opportunity will contain a forecasted revenue range to predict the outcome or potential outcomes of the Renewal. With every Renewal Opportunity forecasting a “worst case” and a “best case” scenario Renewals Managers will be able to provide a forecast range for their worst case renewal rate and their best case renewal rate for a given time period, territory etc. As risk is identified, categorized, and forecasted, Renewals Managers will alert relevant parties (CSM, AE) using appropriate channels.

## Key Renewal Forecasting Fields

The key risk fields for capturing risk on the renewal are:

- `Renewal Risk Category` with the following selections:

  - `Will Renew`: Used when we have full confidence the customer will renew all the revenue Available to Renew (ATR)
  - `Will Churn`: Only used when we have 100% confidence the opportunity will fully churn (rarely used, most cases are not 100%).
    - Example: Customer has gone out of business or the U.S. has placed trade sanctions on a country where we do business.
  - `Will Churn (actionable)`: Used when the entire opp is at risk, but steps can be taken to mitigate that risk
    - Examples: Competitive bidding situation, customer has indicated they are pursuing other alternatives, we believe given the right audience and the right executive involvement we can influence that decision.
  - `Will Contract`: Used when we have 100% confidence that there will be a reduction in seats on the subscription or a downtier (rarely used)
    - Examples: Significant workforce reduction at a customer that reduces the number of engineers capable of using the GitLab platform to well below their current seat count (including appropriate buffer levels).
  - `Will Contract (actionable)`: Used when there is a risk to a portion of the renewal opportunity, but steps can be taken to mitigate that risk, fully or partially.
    - Examples: Customer has indicated they are evaluating downtiering to premium - we believe with a SA-led VSA we can demonstrate the value and cost savings associated with the Ultimate version, and influence that decision.

## Critiera for how to assign risk (pre and post-quote)

- **Pre-quote**

  - For `Will Churn (actionable)` or `Will Contract (actionable)`

    1. Fill in the `Amount` field with the annual value that is expected to renew (i.e. how much we predict will actually book). The Renewal Forecast Health field will automatically update to Red if the Amount is less than the ATR.
    2. Fill in the `Renewal ARR Swing` amount with how much of the churn/contraction may be saved with intervention. (Note the Renewal Swing ARR must be a positive number and not greater in magnitude than the Forecasted Churn. Ex. if Forecasted Churn is -$100k the Renewal Swing ARR cannot be greater than +$100k)
    3. Record your `Next Steps` 
    4. Record the risk intervention idea/ask/motion in the `Renewal Manager Notes` section (you can use the risk intervention table for ideas)

        For the other two categories - `Will Churn` and `Will Contract` - use same steps, but no Renewal ARR Swing field is needed

- **Post-quote**

  - For `Will Churn (actionable)`
    1. Turn the `Renewal Forecast Health` field `Red` and check the `Renewal Forecast Health Override` box. (Note that checking this box with Red will automatically set Won ATR to $0)
    2. Fill in the `Renewal ARR Swing` field

  - For `Will Contract (actionable)`
    1. Ensure the primary quote is showing the most conservative (or Commit) renewal outcome. A placeholder or "dummy" quote may be required to forecast the most conservative outcome. If the primary quote reflects Contraction the `Renewal Forecast Health` will automatically indicate Red.
    2. Update the `Renewal Swing ARR`field

    In instances where Sales has a primary quote that reflects Net ARR Growth but Renewals is aware of persisting Contraction risk update the `Renewal Forecast Health` to `Red` and check the `Renewal Forecast Health Override` box. Note that this will set the Won ATR field to $0.

Both the `Will Churn` and `Will Contract` selections should only occur very close to the `Subscription Renewal Date` - as situations at a customer may change rapidly. These selections indicate that the risk on the opportunity will no longer be actively mitigated.

All `Will Churn` renewals should be closed-lost by their `Subscription Renewal Date`

## Forecasting Goal

- Maintain two full quarters of forecasted risk (by the end of Q1, Q2 and Q3 should be forecasted)

## Risk Intervention Tactics

These tactics/motions may not always be approved or appropriate for each risk scenario, but they can serve as a starter and repository for ways in which Renewals Managers may intervene in renewal risk situations.

1. Executive involvement - email
2. Executive involvement - call w/ decision makers
3. Discounted professional services
4. CSM/E workshop
5. Discount/rebate on specific renewal
6. Offer better contract terms (Net 60, etc)
7. Product team - features preview
8. Favorable ramp deal
9. SA VSA engagement
10. Peer phone call (peer of customer)
11. Board member contact
12. Develop bespoke ROI deck for customer internal justifications

## Kicking off the risk mitigation (end-to-end summary)

1. **Allocate the current risk** to the opportunity (pre-quote using the `Amount` field, post-quote using the quote)
2. **Categorize the risk** using the `Risk Renewal Category` and `Renewal Forecast Health` field (always red if the opp is at risk)
3. **Describe the impact of a successful intervention** in the `Renewal Swing ARR` field
4. **Articulate the intervention being actioned/requested** in the `Manager Notes` field using the following syntax:

   - *Date*: The date of your update

   - *Current Risk Status*: Why the oppty is at risk?

   - *Customer Brief*: What do we know about the customer’s position and sentiment toward the renewal?

   - *LT Intervention in Process*: What intervention tactic is currently in progress, if none, mark N/A.

   - *LT Intervention Needed*: What intervention tactic is needed, mark N/A if one is “in process" and outlined in the above note.

5. **Update the Renewal Manager note section with one or more of the following hashtags** to demonstrate the appropriate status
   - A. [#UserMigration] - demonstrates C&C in a scenario where actual revenue is not leaving the company but rather being shifted to another opportunity (RM needs to document the opportunity where the revenue is captured by including the link in manager notes in accompaniment of the hashtag)
   - B. [#Risk] - leverage when the renewal opportunity should be on a "watch-list" but the risk is not vetted enough to be reflected in the forecasting fields. Also can be used to describe contraction risk when we cannot match the risk with the quote.
   - C. [#DeferredChurn] - leverage on renewal opportunities where a negative impact to renewal rate and/or arr basis occurred due to activity outside of standard practices. Example 1, we waive a true-up {at renewal prep stage} and add on the users, increasing the arr basis spend knowing the customer will likely decrease seat count at the next renewal. Example 2, we have two opportunities that are related due to a migration project and close win the opportunity with the nARR attached to it at the end of the quarter and wait to close loss the opportunity with negative arr in the new quarter.
   - D. [#RiskMitigated] - leverage to represent the journey of moving a renewal opportunity to Red back to Green via mitigation efforts. A brief outline of events displaying the journey/mitigation efforts should be documented when using this hashtag.
6. **Review and prioritize interventions** in your scheduled forecasting calls with the management team.
7. **Kick off the intervention in chatter** using this example format:
   - [Risk Intervention] (Executive involvement - EXEC_NAME email, in the next 2 weeks) Hi EXEC_NAME - our customer is a huge fan of your work and I think an email from you would be impactful in mitigating the risk we are seeing on this opp. Here's a *doc* with language and context.  @EXEC_NAME, CC: @MANAGER
   - [Risk Intervention] (CSM/E Workshop - premium feature demo, next week) Hi CSM_Name, if we can demonstrate the efficacy of premium features for this customer we have a chance to save this opp. I've kicked off a triage issue to manage the workshop - here's the *link*. @CSM_Name CC: @MANAGER

## Quantifying the risk to an opportunity

The following detail different opportunities and our standard appraoch to quantifying/labeling the risk and swing fields.

1. **Customer Unresponsive** --> `Will Churn (actionable)` with a full `Renewal Swing ARR` field (full amount of recoverable)
2. **Signed Quote for contraction but waiting on PO** --> `Will Contract`
3. **Competitive bidding situation** --> `Will Churn (actionable)` with a full `Renewal Swing ARR` field (full amount of recoverable)
4. **Early stage risk (underdeployment in the deploy, activiate, adopt phases)** --> `Will Contract (actionable)` with the underdeployed percentage shown as risk on the `Amount` field, and the `Renewal Swing ARR` field showing the underdeployed amount as influencable.
5. **Procurement risk (new BPA w/ mandatory discounting, customer is using third-party vendor)** --> `Will Contract (actionable)` with the new mandatory or expected discount on the `Amount` field (pre-quote), and the `Renewal Swing ARR` field showing the discount value as actionable.
6. **Program/project termination** - `Will Churn (actionable)` with a full `Renewal Swing ARR` field (full amount of recoverable)

## Key fields for calculations of the forecast

The key revenue fields for setting the Renewal forecast are:

- `ATR`
- `Amount`
- `Won ATR`
- `Renewal Swing ARR`

The `ATR` field is the amount of revenue that is up Available to Renew (ATR). The `Won ATR` is the field we use to indicate how much of the ATR we believe will be renewed on a given Subscription. This field is populated based on the revenue input in the `Amount` field.

By comparing the `Won ATR` field to the `ATR` `field we can determine a forecasted renewal rate with the following formula:

`(Won ATR` / `ATR`) * 100 = Worst Case Renewal Rate`

For example, if we have a renewal with $100k in the `ATR` field, that means we have a Subscription with $100k of ARR to renew. Based on their analysis, a Renewals Manager predicts that, as a worst-case scenario, we will renew $75k out of the $100k, and the Customer will Contract by $25k. The Renewals Manager will input $75k in the `Amount` field (which populates the `Won ATR` field with $75k). Based on the above formula, we arrive at a 75% Renewal Rate for this deal as a worst-case scenario.

`($75,000/$100,000)*100 = 75%`

The next step is to determine our potential best-case scenario. We achieve this by using the `Renewal Swing ARR` field and adding that value to the `Won ATR` field value. The formula looks like this:

```plaintext
(`Won ATR`+` Renewal Swing ARR` / `ATR`) * 100 = Best Case Renewal Rate
```

Building on the above example, the Renewals Manager determines that if we take action, we could save the $25k of revenue that is at risk. To reflect this in the forecast, the Renewals Manager updates the `Renewal Swing ARR` field with $25k so that our best-case Renewal Rate looks like this:

```plaintext
($75,000 + $25,000/$100,000)*100 = 100%
```

What the Renewals Manager is saying with this forecast is that the worst-case scenario is a 75% Renewal Rate, and the best-case scenario is a 100% Renewal Rate.

In summary, the Renewals Manager is forecasting that they believe there is a risk the Customer reduces their Subscription from $100k to $75k ($25k Contraction), but if we take action, they could get the Customer to renew all $100k of their Subscription (no Contraction).

Note that if there is no risk on a given Renewal, the worst-case scenario and best-case scenario will be the same (a 100% renewal), and populating the `Renewal Swing ARR*`* field is not necessary.

## Account team collaboration

Renewals Managers work closely with Customer Success Managers/Engineers and Account Executives. After a customer purchases a subscription with GitLab - they can expect to be engaged by these persona in the following ways:

- **Account Executive**: Manages the overarching customer relationship with GitLab on the account level. Primary focus is on how to grow the customers relationship with GitLab. Account Executives are sales people. Best practice - CC the CSM/AE on the account when in communication with customer.
- **Customer Success Manager/Engineer**: Dependent upon our segmentation, a CSM or CSE could be assigned to an account or territory. Their primary focus is adoption, outcomes and advocacy. CSM/Es are not sales people - they are specialists in Customer Success. Best practice - CC the CSM/AE on the account when in communication with customer.
- **Renewals Manager**: Manages a customers existing renewable business. Primary focus is on retention, with a secondary focus on growth. Renewals managers are a hybrid role - managing the renewal "sale" and the renewal process. They sit at the intersection of customer success and sales.
