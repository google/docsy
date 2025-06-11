---

title: "Professional Services Practice Management"
description: "Discover how the GitLab Practice Management team works together."
---







## Practice Management Overview

The professional services practice management team is responsible for maturing [current service offerings](https://about.gitlab.com/services/) and creating and bringing new offerings to market. This page will help describe the areas of responsibility of the practice management team, how we operate and stay organized.

## Functional Areas

1. **Channel Solutions Management** - scaling service selling and delivery through channel partner leveraged approach.
1. **Engagement Management** - positioning, selling, scoping and coordinating sigature of customer engagements. Check out the [Engagement Management page](/handbook/customer-success/professional-services-engineering/engagement-mgmt/) for more information
1. **Practice Management** - building, maintaining, and bringing to market service offerings to be sold and delivered by GitLab PS and our partners. Also, improving back-office processes to decrease overall cost of revenue.

## Meet the team - Lets Chat

You can check out our team on the [team page here](/handbook/company/team/?department=practice-management). We are most reachable via the [#ps-practice](https://gitlab.slack.com/archives/C02DWMKHGRG) slack channel.

## Backlog, Workflows, and Kanban Board

We use the [PS-Practice-Management](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management) project to track our [backlog of issues](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management/-/issues).

We use a few different [kanban boards](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-leadership-team/ps-practice-management/-/boards/2685806?label_name[]=EM_Process) in this project to help track work from ideation to completion.

- We use the scoped labels starting with `ps::` e.g. `ps::todo` to track progress on issues.
- We use the `EM_process` label for engagement management and pre sales process improvements
- We use the `PM-process` label for project management and delivery process improvements
- We prioritize using `priority::1`, `priority::2` and `priority::3` labels

## Education Services practice management Labels

Here are the main labels specific to the Education Practice Management projects.

- `ProServ-practice::Education` (TO BE DEPRECATED in favor of [these scoped labels](https://gitlab.com/groups/gitlab-com/customer-success/-/labels?utf8=%E2%9C%93&subscribed=&search=PS-Practice) at the customer success group level)
- `Workflow::validation backlog` - Team member identifies audience needs and potential education services offering
- `Workflow::problem validation` - Practice manager validates needs addressed by proposed Education Services
- `Workflow::design` - Practice manager defines solution component requirements and confirms with ID that the proposed solution is feasible
- `Workflow::solution validation` - Practice manager validates proposed Education Services solution will meet business objectives
- `Workflow::planning breakdown` - Practice manager works with ID to plan project work with issues and epics

## Go to market workflow for new offerings

### Education Services

#### Sales-team-assisted go to market motion

1. When new Education Services are launched they include internal communications and collateral to sales reps
    - Announcement of availability in public sector and sales slack channels
    - Include in Sale Enablement training
    - Offering description pages on /services
    - Success Stories collateral
    - Slides for sales decks
    - Inclusion of offering in [Services Calculator](https://services-calculator.gitlab.io/)
    - If applicable, Standard variant with:
        - Standard SOW
        - Finalized SKU for use by Sales
1. Rep advises customer on which Education Services are needed
1. Sales rep adds SKUs to customer contract
1. PS delivers Private Onsite or Remote ILTs
1. Education Services provisions account-level subscription access to LXP for all LXP subscription SKUs

#### Web-direct go to market motion

1. When new Education Services are launched they include external communications to GitLab ecosystem as per the Marketing Strategy, including:
    - Nurture campaign emails
    - In-product banner
    - Recommended by SA or CSM
    - Included on Training Tracks page
    - Included on Education Services pages
    - Mentioned in product release updates
    - Highlighted in blog post
1. Individual users click Order button and pay using credit card from customers.gitlab.com and from within LXP
1. Users attend Public Remote ILTs via Zoom Webinar
1. Users access certification learning paths from LXP

### Marketing Strategy

- **Add to customers.gitlab.com ordering page**: Gives visibility and leads user down path of discovering more offerings
- **Event Presence**: Education Services presence at Commit
- **Community and Evangelism**:
  - **GitLab Heros**: Pilot with GitLab Heros to test out certifications. Have Heros participate in training in advance of commit and then iterate based on that. Offer trainings for free and offer free exam to get gitlab certified ahead of time (John Coghlan is contact)
  - **GitLab Evangelism team**: Collaboration initiatives TBD
- **Add to Customer Success Plan**: Make certifications part of success plan from CSM. Set metrics against percentage of users who complete certifications
- Offerings integrated into customer adoption nurture campaign
- In-product awareness
- Direct marketing on 3rd party platforms/communities where target audience lives
  - edEx, EdCast Leapest Marketplace, LinkedIn, Dice.com
  - Blog posts -- GitLab and 3rd party sites (eg StackOverflow, FB)

## Practice Management How to

### How to create a new service SKU

SKUs for new PS offerings are requested by the PS Practice Manager. To request a new SKU, the Practice Manager must determine and complete the following items and steps to gain approval.

#### Required items

- A specimen SOW that can be referenced by the Item
- Established cost-basis and assumptions
- Hours and hourly cost
- Delivery cost (hours x hourly cost)
- Included T&E assumption (if any)

#### Steps for creating a SKU

The Practice Manager follows these steps to request creation of a new SKU.

1. Create an [issue in the Finance issue tracker](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new?issuable_template=CM:%20Add_New_PS_SKU) referencing the above requirements
1. Review with the Finance Business Partner for Sales
1. Make any require changes
1. Include an executive summary with the business rationale
1. Submit to VP of Customer Success for approval
1. Submit to CFO, CRO and CEO for approval
1. Once approved, add a comment for the accounting team to create set up the SKU in Zuora
1. Add a comment for Kim Stagg to add the product to the Price Book and to provide you with the SKU number/Channels part number. In your comment include the Product Name and Product description. Updates to the Price Book will be released to distributors quarterly.
1. Once the product has been added to the product catalog and Price Book, update the services.yaml file to include the new product details.

#### Validating SKU shows in Salesforce

1. Login to salesforce.
1. Click on the opportunities tab.
1. Search for the `Test Account-NEW` opportunity.
1. Scroll down and click on the `New Quote` button.
1. In `Sold To Contact` and `Bill to Contact`, select PS Test account.
1. Add `start date` as today.
1. Scroll down and click `Next`.
1. Click the drop down the box next to `New Quote Flow` and select `Add Add On Products`.
1. In the `Professional Services and Training` Row, click the drop down that says `Select Plan` to see the current SKU offerings that the Sales Reps see.

### How to retire a service SKU

Retirement of SKUs for PS offerings is requested by the PS Practice Manager. To request retirement of a SKU, the Practice Manager follows the same basic steps used for creating a SKU to gain the appropriate approvals, including using the same issue template.

### How to edit a Professional Services product page

PS uses a file called services.yml as the single source of truth (SSoT) for offering descriptions and specifications. This file is used together with a documentation macro to populate various parts of the GitLab documentation and is also used by the [Services Calculator](https://services-calculator.gitlab.io/). The [Services SSOT Wiki Page](https://gitlab.com/gitlab-com/customer-success/professional-services-group/ps-process/-/wikis/Services-Single-Source-of-Truth) describes its various applications, attributes and maintenance processes. Team members who wish to update or add offerings can follow the instructions located on the wiki page.

### Developing software for a new service/initiative

Refer to [Developing Software For Professional Services](../professional-services-tooling) to check out our common software stack and development processes

### Setting up your development environment

For new Practice Engineers and Professional Services Engineers, refer to the [setting up a development environment](../development-environment) tutorial to install all the necessary underlying tools we use for development.
