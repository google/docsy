---
title: SME Gather Feedback from Customers 

description: Gather Feedback from Customers

---

## **Customer Feedback Loop**

Review [Customer Issues Prioritization Framework](/handbook/product/product-processes/customer-issues-prioritization-framework/)  

PMs Create issues under [gitlab.org/issues](http://gitlab.org/issues) especially for customer prioritization; prefer to have [customer feedback template](/handbook/product/product-management/#feedback-template) included as comments

Gathering and systematically relaying top asks from the field and customers to Product Management and Engineering, is one of the main responsibilities of a SME.

This allows a collective view of feedback from the field with analysis, so that it does not always seem reactive, but constructively adds to and builds on a roadmap, with roadmap themes.  

The subject matter expert program can share the top ten requests from the field, with predetermined themes/ categories, rather than react individually or just have them go to a issue wasteland.

1. SAs and CSMs submit customer feedbacks and asks from the field via a process to be determined.  
1. SMEs for each Area should analyze and prioritize the asks via a point system async or on one of their [pod cadence calls](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-area-pod-cadence).  
1. The top requests are presented and discussed by the SME Area Leads at the [monthly SME/ PM Cadence meetings](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-product-cadence)
1. The status of the requests are updated. Updates are relayed back to the SMEs for each Area who then provides updates during a [regional SME call or SME Corner updates](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-corner).

## **Customer Feedback Framework and Process** (TBD)

### **Customer Feedback Submission**

TODO: Review [Customer Issues Prioritization Framework](/handbook/product/product-processes/customer-issues-prioritization-framework/)

1. Implement a GitLab issue template with the following fields, for customer feedback submission from SMEs:
   - Customer name
   - Opportunity details
   - Net ARR or ARR basis
   - Use case description:
     - Current challenge/context
     - Proposed solution
     - Expected impact
   - Program theme/sub-category
   - List of other interested customers
2. Set up appropriate SME labels for the issue created, along with labels needed by Product Management
3. Assign Issues to appropirate themes (TBD)

### **Feedback Categorization**

1. Collaborate with Product Managers to define sub-categories for each Program Area.
2. Example sub-categories for AI:
   - Chat
   - Code suggestion
   - Vulnerability analysis

### **Prioritization System**

1. Develop an automated point system based on request attributes:
   - Customer tier
   - Potential revenue impact
   - Number of interested customers
   - Alignment with strategic goals
2. Implement a GitLab CI/CD job to calculate and assign points to each request.

### **SME Review Process**

1. Schedule [SMEs pod meetings in each Program Area](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-area-pod-cadence) to:
   - Review and validate point assignments
   - Adjust priorities as needed
   - Provide context to SME Area DRIs

### **Feedback Tracking**

1. Create a "Top Requests" list for each Program Area.
2. Set up an issue board for each SME Area in GitLab, using the appropriate SME Labels with the following statuses:
   - New
   - Accepted by PM
   - Added to Roadmap
   - Resolved
   - Declined
   - Backlog

### **PM Collaboration**

1. Schedule [monthly meetings between SME Area Leads and Product Managers](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-product-cadence).
2. Use these meetings to review the SME Area Issue Board and discuss request statuses.

### **Communication and Updates**

1. Include time in [regional SA meetings](/handbook/solutions-architects/sa-practices/subject-matter-experts/sme-cadences/#sme-corner) for SMEs to present their Program Area's Issue Board.
2. Allow for verbal requests during these presentations.
3. Establish a process for SMEs to provide updates during SME Corner sessions.

### **Request Classification**

1. Implement a system to differentiate between:
   - Feature requests
   - Bugs
   - Enhancements

2. Ensure appropriate routing and handling based on classification.
