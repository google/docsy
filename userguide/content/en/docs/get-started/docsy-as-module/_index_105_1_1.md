---
title: "Accelerator Development Template Usage Guide"
---

For additional accelerator resources, refer to the Accelerator Handbook Homepage.

---

## What is an Accelerator?

An **Accelerator** is a customized enablement framework defined and delivered by a Customer Success Architect (CSA). Spanning up to a quarter (12 weeks), an Accelerator combines relevant content modules, tools, and best practices to achieve specific customer outcomes. The process begins with a **Discovery Workshop** to define customer requirements, followed by a **Planning Workshop** to map out the implementation steps. Key activities are tracked in a GitLab project backlog and executed over 10 weeks, ensuring alignment with mutual success plans.

### Important Notes

- **Cross-link to delivery projects and assets**: Each section of the template includes links to supporting materials to provide a single source of truth.
- **Focus on measurable outcomes**: Each section emphasizes "What are the outcomes the customer will get?" by defining specific, actionable results tied to business objectives.
- **Standardized approach**: Ensures consistency across all Accelerators while allowing for flexibility based on customer needs.
- **Alignment with success plans**: All activities are mapped directly to the customer's mutual success plan to drive tangible results.

## Two Dimensions of Accelerator Work

Accelerator work encompasses two distinct dimensions, which are organized under a common group called **Success Services**:

1. **Development of the Accelerator**:  
   Managed by the **Customer Success Architect (CSA)** team, this dimension focuses on creating structured frameworks, including content, processes, and supporting assets.
   - The **Accelerator Repository** is maintained here to ensure all developed Accelerators are well-documented, scalable, and ready for deployment.

2. **Delivery of the Accelerator**:  
   Managed by the **Customer Success Architect (CSA)** team, this dimension involves implementing the developed Accelerators for customers.
   - Activities include structured workshops, guided implementation, and continuous check-ins to ensure Accelerators are tailored to customer needs and deliver measurable outcomes.

This guide and issue template refer strictly to the **development** of new Accelerators. Use it as a blueprint to ensure the Accelerator is well-documented, actionable, and ready for seamless delivery.

## Important links

### Group & projects

- [Success Services Group](https://gitlab.com/gitlab-com/customer-success/success-services)
- [Accelerator Development Project](https://gitlab.com/gitlab-com/customer-success/success-services/csa)
- [Accelerator Delivery Project](https://gitlab.com/gitlab-com/customer-success/success-services/success-enterprise-customers)

### Issue Boards

- [Accelerator Development](https://gitlab.com/gitlab-com/customer-success/success-services/csa/-/boards)

### Value Stream Analytics 

Value Stream Analytics (VSA) is the solution for managers and leadership to get actionable insights into the Accelerator development process. VSA allows them to balance out workloads, identify bottlenecks.

- [Accelerator Development](https://gitlab.com/gitlab-com/customer-success/success-services/csa/-/value_stream_analytics)

### Accelerator Repository

The Accelerator Repository is a centralized collection of well-documented, accelerator blueprints (like the AI-Assisted Code Review example), that CSAs can leverage in their own projects. 

The Accelerator blueprints contain information that include workshops guides, timelines, prerequisites, implementation steps, expected outcomes, and success metrics.

- [Accelerator Development](https://gitlab.com/gitlab-com/customer-success/success-services/csa/-/tree/main/Accelerators)

## Accelerator Development Template Walkthrough with Examples

### 1. Overview Section

This section introduces the purpose of the Accelerator and its high-level benefits.

#### Example 1: GitLab Performance Optimization

Optimize GitLab instance performance through systematic analysis, monitoring, and targeted improvements to reduce incidents, improve response times, and enhance user satisfaction.

#### Example 2: Implementing Reusable Pipeline Templates

Accelerate development by creating reusable CI/CD pipeline templates that reduce implementation time and ensure consistency across projects.

### 2. Customer Impact: Business Value and Outcomes

Clearly articulate the business value and specific outcomes the customer will achieve.

#### Example 1: GitLab Performance Optimization

- **Outcomes**:
  - 50% reduction in performance-related incidents.
  - 30% improvement in page load times.
  - Enhanced developer productivity and reduced downtime.

#### Example 2: Implementing Reusable Pipeline Templates

- **Outcomes**:
  - 40% reduction in time spent creating new pipelines.
  - Standardized pipeline practices for improved compliance and reliability.
  - Increased developer focus on delivering value rather than configuring pipelines.

### 3. Technical Benefits & DORA Metrics

Show how the Accelerator improves technical performance with measurable DORA metrics.

#### Example 1: GitLab Performance Optimization

- **Phase 1 (0-3 Months)**:
  - Deployment Frequency baseline: Weekly → Target: Daily
  - MTTR: 8 hours → Target: 2 hours

#### Example 2: Implementing Reusable Pipeline Templates

- **Phase 1 (0-3 Months)**:
  - Increase CI/CD component usage from 30% to 60%.
  - Achieve a 95% pipeline success rate.

### 4. Success Metrics: Measurable Outcomes

Define quantitative and qualitative metrics to measure success.

#### Example 1: GitLab Performance Optimization

- **Quantitative Outcomes**:
  - Decrease API response times by 20%.
  - Improve runner utilization efficiency by 15%.
- **Qualitative Outcomes**:
  - Positive user feedback through surveys.

#### Example 2: Implementing Reusable Pipeline Templates

- **Quantitative Outcomes**:
  - 50% of projects using reusable templates.
  - Reduce average pipeline creation time by 2 hours.
- **Qualitative Outcomes**:
  - Comprehensive documentation for reusable pipeline components.

### 5. Supporting Data

Include data sources for tracking progress.

- Gainsight Dashboard  
- Product Adoption Metrics
- Salesforce Data

### 6. Deliverables

Define tangible outputs for each phase.

#### Example 1: GitLab Performance Optimization

- **Technical Documentation**:
  - Playbooks for performance monitoring.
- **Code & Configuration**:
  - GitLab Performance Toolkit configurations.

#### Example 2: Implementing Reusable Pipeline Templates

- **Technical Documentation**:
  - Guidelines for creating CI/CD templates.
- **Code & Configuration**:
  - Pre-built pipeline templates for Java and Python projects.

### 7. Timeline & Resources

Break down the Accelerator into phases.

- Week 1: Discovery Workshop  
- Week 2: Planning Workshop  
- Weeks 3-12: Implementation & Check-ins  

### 8. Key Milestones

Define critical milestones and deliverables.

#### Example 1: GitLab Performance Optimization

- **Week 1-2**: Baseline performance metrics established.  
- **Week 3-8**: Optimizations implemented.  

#### Example 2: Implementing Reusable Pipeline Templates

- **Week 1-2**: Initial template prototypes developed.  
- **Week 3-12**: Templates implemented and validated.

## Labeling for Value Stream Analytics

### Proper Labeling in GitLab Projects

Proper labeling accelerator development issues, is critical for ensuring visibility into the progress and success of Accelerators. Labels allow for consistent tracking and reporting across the entire lifecycle of Accelerator development and delivery. They provide key insights into where work is being done and help align efforts with the broader value stream.

### Why Labeling Matters

Labels:

- **Facilitate workflow tracking**: Ensure clear progress monitoring across stages.
- **Enable data-driven insights**: Leverage Value Stream Analytics (VSA) to identify bottlenecks and optimize processes.
- **Support alignment with business goals**: Ensure that efforts are focused on high-priority initiatives.

## Workflow Labels and Their Purpose

### 1. Backlog Stage

**Label:** `workflow| problem validation`

- Used for issues in the initial discovery phase.
- Ensures problems are clearly defined before moving to solution validation.

### 2. Accelerator Validation Stage

**Labels:**  
`workflow| solution validation → workflow| planning breakdown`

- Marks issues undergoing exploration for potential solutions.
- Prepares detailed plans to validate Accelerator concepts before development.

### 3. Accelerator Planning Stage

**Labels:**  
`workflow| planning breakdown → workflow| ready for development`

- Indicates readiness to begin development.
- Ensures all dependencies and tasks are clearly defined.

### 4. Accelerator Development Stage

**Labels:**  
`workflow| in progress → workflow| scheduling`

- Tracks active development of Accelerators.
- Scheduling ensures alignment with delivery timelines.

### 5. Accelerator Review Stage

**Labels:**  
`workflow| scheduling → workflow| in review`

- Represents the review and refinement process.
- Ensures Accelerators meet quality standards and deliver intended outcomes.

### 6. Peer Review Stage

**Labels:**  
`workflow| in review → Issue closed`

- Issues are reviewed by peers.
- The stage is exited once the issue is closed.

## Making the Template Actionable

To streamline the development of Accelerators and make the process more actionable, CSAs & their should focus on asynchronous collaboration, leverage existing meetings like the Accelerator Delivery Framework Meeting.

{{< youtube "aSCGpEXoQbU" >}}

*In the [walkthrough](https://youtu.be/aSCGpEXoQbU?si=uJLqOe5Z68TLccE6) you will see how to streamline accelerator development using the accelerator issue template and track performance with Value Stream Analytics for optimal lifecycle management, all in GitLab.*

### 1. Leverage GitLab Issue Boards for Workflow Management

The CSA Issue Board provides a Kanban-style view of Accelerator states, making it easy to track progress.  

- **Kanban Workflow**:  
  Organize issues by labels (e.g., `workflow| in progress`, `workflow| in review`) and track them through stages like Backlog, Validation, Planning, and Development.  

- **Pull-Based Workflow**:  
  Developers can self-assign tasks based on their bandwidth, ensuring balanced workloads and reducing bottlenecks.

### 2. Use Value Stream Analytics (VSA) for Insights

GitLab's Value Stream Analytics offers key insights into the Accelerator development process, helping to:  

- **Balance Workloads**:  
  Identify team members who may be overburdened or underutilized.  
  - Example: If one CSA consistently spends longer in the `workflow| planning breakdown` stage, redistribute tasks to streamline progress.  

- **Predict Timelines**:  
  Use data to estimate development timelines more accurately.  
  - Example: If the average `workflow| in progress` stage duration is 2 weeks, you can plan delivery milestones accordingly.  

- **Optimize Processes**:  
  Spot bottlenecks, such as extended time in `workflow| in review`, and refine review processes.  

### 3. Example: Balancing Workloads with VSA  

**Scenario**: The team notices that Accelerators in the `workflow| solution validation` stage take longer than expected to progress to `workflow| ready for development`.  

**Actions**:

1. Use VSA to analyze the average time spent in this stage.  
2. Identify whether delays are due to insufficient resources or unclear requirements.  
3. Adjust by:
   - Adding additional reviewers for faster feedback.  
   - Splitting complex tasks into smaller issues for parallel work.  

**Result**: A smoother workflow with reduced cycle times and more predictable delivery schedules.  

### 5. Simplified Action Plan  

| Activity                      | Method                      | DRI              | Deliverable                            |
|-------------------------------|-----------------------------|------------------|----------------------------------------|
| Task Assignment               | GitLab Issue Board (Async)  | CSA Team         | Assigned tasks with due dates          |
| Progress Updates              | GitLab Comments (Async)     | Issue Assignees  | Regular updates on assigned issues     |
| Development Check-Ins         | Async                       | CSA Manager      | Sync on blockers and priorities        |
| Analyze Workflow Efficiency   | Value Stream Analytics      | CSA Team/Manager | Improved workload distribution         |

### Leveraging Value Stream Analytics (VSA) for accelerator development reporting

Value Stream Analytics (VSA) is a powerful tool that provides managers and leadership with actionable insights into the Accelerator development process. It allows for better workload management, resource allocation, and alignment with strategic goals. Here's how VSA can be utilized:

#### 1. **Workload Balancing Across Teams**

Managers can use VSA to monitor where time is being spent in the Accelerator development lifecycle and ensure workloads are distributed equitably across team members.  

- **Example**: If one CSA consistently handles the majority of tasks in the `workflow| planning breakdown` stage, managers can reassign tasks to other team members to avoid burnout and maintain productivity.

#### 2. **Predicting Timelines and Delivery Dates**

Leadership can use VSA data to identify average cycle times for different stages (e.g., `workflow| in progress`, `workflow| in review`) and predict when Accelerators will be ready for delivery.  

- **Example**: By analyzing historical data, leadership can estimate that an Accelerator typically takes 2 weeks to move from `workflow| planning breakdown` to `workflow| ready for development`. This insight helps in setting realistic delivery timelines for customers.

#### 3. **Identifying Bottlenecks**

VSA highlights stages where issues remain for longer-than-expected durations, helping managers identify process inefficiencies.  

- **Example**: If the `workflow| in review` stage consistently delays progress, leadership can allocate additional reviewers or improve review processes to streamline approvals.

#### 4. **Strategic Alignment with Corporate Goals**

Leadership can track the Accelerator portfolio's progress and ensure it aligns with broader corporate initiatives and customer needs.  

- **Example**: If a corporate priority is enhancing CI/CD capabilities for customers, leadership can prioritize Accelerators like "Reusable Pipeline Templates" and monitor their development closely using VSA metrics.

#### 5. **Data-Driven Decision Making**

VSA provides metrics that allow managers to make informed decisions about resource allocation, task prioritization, and team performance.  

- **Example**: If data shows that the team is consistently slow in the `workflow| problem validation` stage, leadership might decide to provide additional training or hire specialized resources to improve efficiency.

#### 6. **Transparency and Reporting**

VSA offers clear, visual reports that leadership can share with stakeholders to demonstrate progress and performance.

### 4. Example: Balancing Workloads with VSA  

**Scenario**: The team notices that Accelerators in the `workflow| solution validation` stage take longer than expected to progress to `workflow| ready for development`.  

**Actions**:

1. Use VSA to analyze the average time spent in this stage.  
2. Identify whether delays are due to insufficient resources or unclear requirements.  
3. Adjust by:
   - Adding additional reviewers for faster feedback.  
   - Splitting complex tasks into smaller issues for parallel work.  

### Leveraging GitLab Roadmaps, Epics, and Child Issues for Accelerator Development Reporting

{{< youtube "3jQIkLruvcI" >}}

*In the [walkthrough](https://youtu.be/3jQIkLruvcI) you will learn how to leverage GitLab Roadmaps and Epics to manage the development and delivery lifecycle of SPS Accelerators.*

GitLab Roadmaps, along with Epics and child issues, offer a structured and transparent way to manage and report on the development and delivery of Accelerators. They enable centralized visibility, strategic alignment, and data-driven decision-making. Here's how these tools can be effectively utilized:

#### 1. **Centralized Visibility for Teams**

Using Roadmaps provides a consolidated view of all Accelerator projects across quarters, allowing teams to monitor workload distribution and progress.  

- **Example**: A quarterly Epic, such as “Accelerators Q4FY25,” is broken down into monthly sub-epics, enabling better tracking of deliverables and team capacity.

#### 2. **Strategic Resource Allocation for Leadership**

Leadership can leverage Roadmaps to align resource planning with customer needs and corporate priorities, ensuring that high-impact projects are prioritized.  

- **Example**: If CI/CD-focused Accelerators are a priority, leadership can track their progress in the Roadmap to ensure timely delivery.

#### 3. **Tracking Performance Metrics**

Roadmaps, when paired with labels and issue weights, help measure delivery velocity and team performance.  

- **Example**: Assigning weights to issues (e.g., weight 8 for a medium effort Accelerator) allows leadership to gauge team capacity and adjust workloads as needed.

#### 4. **Identifying and Resolving Bottlenecks**

Clear timelines and workflow labels in Roadmaps make it easy to pinpoint where issues are stuck and resolve bottlenecks quickly.  

- **Example**: If many tasks are labeled as `workflow: in-review` for extended periods, managers can add reviewers to expedite progress.

#### 5. **Aligning with Customer Needs**

Using clear naming conventions for issues (e.g., `[Customer Name] - [Accelerator Type]`) ensures that each Accelerator aligns with specific customer requirements and goals.  

- **Example**: An issue labeled “Acme Corp - CI/CD Enhancer” provides clarity on the Accelerator’s purpose and value.

#### 6. **Transparent Reporting for Stakeholders**

Roadmaps provide visual reports on the Accelerator portfolio's progress, which can be shared with stakeholders to demonstrate alignment with corporate strategies and delivery timelines.

### Example: Tracking Accelerator Delivery via Epics

**Scenario**: Leadership wants to ensure timely delivery of CI/CD-focused Accelerators in Q4FY25.

**Actions**:

1. Create a parent Epic for Q4FY25 and link relevant monthly sub-epics.  
2. Assign issues with clear weights, labels, and due dates.  
3. Regularly update completion percentages and monitor progress in the Roadmap view.
