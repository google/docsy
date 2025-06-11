---
title: "GitLab Data Exploration and Querying Architecture"
status: "ongoing"
creation-date: "2025-04-24"
authors: [ "@drosse"]
coaches: [ "@ahegyi" ]
dris: [ "@lfarina8", "@nicholasklick" ]
owning-stage: "~devops::analytics"
participating-stages: ["~group::optimize", "~devops::plan"]
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
---

## Summary

This design document addresses the challenge of data exploration and querying across GitLab's diverse data landscape. Users currently face significant obstacles when trying to access and derive insights from GitLab data, as information is spread across multiple sources including PostgreSQL, ClickHouse, GraphQL, and REST APIs.

Each of these data sources requires different query strategies and presents varying schemas, relationships, and performance characteristics. This fragmentation creates substantial friction in the data exploration process, requiring users to understand multiple systems and query languages to access the information they need.

GitLab currently lacks a unified querying interface and visualization tool that can work consistently across these different data sources. This absence forces users to switch between different interfaces and tools, making it difficult to create comprehensive dashboards that combine data from multiple sources or to explore relationships between different types of data.

The goal is to simplify how users interact with GitLab data, enabling them to discover meaningful insights about their GitLab usage and business performance without needing to understand the underlying differences between data sources. By addressing this challenge, we aim to unlock valuable data that is currently difficult or impossible for most users to access due to technical complexity.

## Motivation

The ability for users to explore their GitLab data and derive meaningful business insights is increasingly important as organizations rely on data-driven decision making. However, several challenges currently prevent users from effectively exploring and understanding their GitLab data.

This initiative serves both our external customers and internal GitLab team members. External users need data insights to optimize their DevSecOps practices and demonstrate the value of GitLab within their organizations. Simultaneously, GitLab's own product, engineering, and customer success teams rely on these same data exploration capabilities to understand product usage, improve features, and support customers effectively. The unified data exploration architecture described in this document will benefit both audiences, creating a consistent and valuable experience regardless of whether the user is a customer or a GitLab team member.

### Challenges

#### Data Source Fragmentation

GitLab data resides across multiple data sources, each with different access patterns:

- **PostgreSQL databases** store transactional application data
- **Elasticsearch/OpenSearch databases** contain denormalized data for efficient searching
- **ClickHouse databases** contain analytical and time-series data
- **GraphQL endpoints** provide structured API access to application data
- **REST APIs** offer additional interfaces to various data sets

Each of these sources has evolved independently, resulting in different query requirements, data models, and performance characteristics. This fragmentation forces users to understand each system separately to explore their data effectively.

Furthermore, even data sources of the same class can exhibit significant variations; for example, different REST API endpoints may vary in their filtering capabilities, query methods, performance impacts, and response formats.

#### Query Language Inconsistency

Users currently need to employ different query approaches depending on the data source:

- GraphQL has its own query structure
- REST APIs use various parameter-based filtering mechanisms
- PostgreSQL and ClickHouse databases can be queried by the end-user only via the GraphQL and REST APIs
- Filters and operators vary across endpoints even within the same API type

This inconsistency creates a steep learning curve for users who need to access data across multiple sources and requires specialized knowledge of each system's querying capabilities.

#### Schema and Data Model Disparities

Beyond the query language differences, there are fundamental inconsistencies in how data is structured:

- Field naming conventions vary across systems
- Entity relationships are modeled differently
- Data granularity differs (for instance detailed records vs. aggregated data)

These disparities make it difficult to establish meaningful connections between related data points that exist in different systems; limiting users' ability to gain a complete picture of their information.

#### User Experience Friction

The current state creates significant friction in the data exploration process:

- Not all data sources have a data exploration UI or a query language.
- Users must often switch between multiple tools or interfaces to access different data sources.
- Non-technical users face significant barriers to exploring data on their own.
- There's often a lack of transparency about how the data was queried and transformed, creating trust issues with the presented information. GitLab team members have to spend significant time explaining to customers how data is retrieved and displayed, trying to build trust in the tool.

This friction discourages data exploration and limits the insights users can derive from their GitLab data.

#### Performance and Resource Challenges

Different data sources have varying performance characteristics:

- Some queries may be resource-intensive and could impact system performance
- Query optimization strategies differ across data sources
- Performance can vary dramatically for similar queries against different data sources

These challenges make it difficult to provide a consistently responsive exploration experience across all data types.

### Opportunities for Unified Data Exploration

Despite these challenges, there are significant opportunities to simplify and enhance how users interact with their GitLab data:

- A unified data exploration interface would simplify access to critical insights, improve feature adoption, and unlock data that is currently inaccessible to most users due to technical complexity
- Standardizing query patterns could unlock new cross-source analytics capabilities
- Enabling export, sharing, and embedding of query results would allow users to incorporate insights across other GitLab pages and workflows
- A standardized input and output would not only benefit users, but also other systems integrating with it or used to generate queries or interpret results, such as an AI assistant.

A well-designed data exploration architecture would not only address the current pain points but also establish a foundation for more advanced analytics capabilities in the future.

#### Examples of User Needs

The unified data exploration system would enable users to answer questions such as:

**For Engineering Teams:**

- "As an engineering team, every day during standup, we want to look at one dashboard that tells us how we are doing in relation to our DevSecOps flow. We will need to see:
  - Table with current open MRs
  - Count of critical and high vulnerabilities introduced in the last x days
  - Issues assigned to our current milestone (or label/status, whatever pivot the team would want to look at their current work)
  - Recent pipeline failures or slow jobs
  - DORA metrics like deployment frequency and lead time for changes"

**For Product Managers:**

- "As an GitLab PM, I want to track internal usage and engagement metrics for my feature"
- "How are users navigating through my feature's workflow?"
- "What is the adoption rate of new capabilities we've released?"
- "How does feature usage correlate with other activities in the product?"

These examples illustrate how users need to combine data from multiple sources (issues, MRs, vulnerabilities, pipelines, analytics events) in a single cohesive view—something that's currently difficult to achieve.

### Goals

- **Create a unified data exploration experience** across GitLab's diverse data sources
- **Simplify the process of querying data** for both technical and non-technical users
- **Standardize the filtering interface** to work consistently regardless of underlying data source
- **Enable exporting** of queries result across GitLab pages
- **Standardize query result** by leveraging existing dashboard framework components
- **Ensure appropriate performance** for data exploration queries across different data sources
- **Maintain proper security controls** and respect user permissions across all data sources
- **Facilitate integration with GitLab Duo** to enhance data exploration capabilities

### Non-Goals

- **Creating a dashboard framework or new visualizations components** - We will use existing framework visualization components rather than creating new ones
- **Fixing inconsistencies between existing API's and datasources** - We won't directly resolve inconsistencies in existing APIs and data sources. Rather, we're creating an interface layer that abstracts these differences away from the use

## Proposal

This proposal outlines a solution to the data exploration challenges identified earlier. We aim to create a unified, intuitive interface that allows users to query and visualize data from multiple sources within GitLab, regardless of where the data resides or how it's structured.

The solution consists of two main components:

1. **A standardized and simplified query system** - An extension of GitLab Query Language (GLQL) to work across multiple data sources and with enhanced querying capabilities
2. **A unified data exploration UI** - A standardized interface for constructing queries, viewing results, and creating visualizations

### A Standardized And Simplified Query System

At the core of our solution is a standardized query system that builds upon the existing [GitLab Query Language (GLQL)](https://docs.gitlab.com/user/glql/).

#### Why GLQL is the ideal foundation

GLQL provides a robust foundation for our standardized query system:

1. **Reduced cognitive load** - Users will learn one query system instead of multiple query languages or methods, improving productivity and making it easier to adopt
2. **Enable queries from multiple sources** - Data from different sources can be easily queried in a consistent and meaningful way
3. **Provide consistent results** - Uniform filtering and output formats across data sources
4. **User-friendly syntax** - GLQL was designed with simplicity and readability in mind
5. **Extensible by design** - The GLQL [architecture](../glql/#extensibility) separates concerns between parsing, execution, transformation, and presentation and was built with extensibility in mind
6. **Production-proven** - The current implementation is already in use for merge requests and work item queries
7. **AI-Powered Exploration**: GLQL's structured syntax makes it an ideal foundation for integration with GitLab Duo. This will enable natural language queries where users can ask questions in plain English and have them automatically translated to GLQL, making data exploration accessible to a wider audience.

#### Extending GLQL to support multiple data sources

The proposed approach includes:

1. **Type-based data source and output routing** - Extend the `type` field to include more data sources, and pivot on it to determine which data source to query and output to produce:

   ```plaintext
   project = "team-project" AND type = MergeRequest AND state = opened

   project = "team-project" AND type = Vulnerability AND severity in ("critical", "high") AND created > -7d

   project = "team-project" AND type = Pipeline AND (status = failed OR duration > 60) AND updated > -3d

   project = "team-project" AND type = AiMetric
   ```

   Depending on the data source, we can configure the compiler to outputs different formats. For example: GraphQL query or a JSON object representing a REST API request or some parameters for Rails finders (see more about this in [Moving GLQL to the backend](#moving-glql-to-the-backend)).
      - Proof of concept: https://gitlab.com/gitlab-org/gitlab-query-language/glql-rust/-/merge_requests/147

2. **Source-specific fields and operators** - Extend the syntax to allow fields and operators specific to each data source:

   ```plaintext
   query: project = "team-project" AND type = Vulnerability AND severity in ("critical", "high") AND created > -7d
   fields: status, severity, description

   query: project = "team-project" AND type = Pipeline AND (status = failed OR duration > 60) AND updated > -3d
   fields: id, name, status, duration, updatedAt

   query: project = "team-project" AND type = AiMetric
   fields: codeSuggestionsShownCount, codeSuggestionsAcceptedCount, duoUsedCount
   ```

3. **Enhanced display options** - Expand the `display` attribute to support visualization types that might be more appropriate for new datasources, such as charts:

   ```plaintext
   # Line chart display
   display: chart
   chart_type: line
   x_axis: created_at
   y_axis: count

   # Custom visualization component
   display: custom
   display_id: 'ai-impact-table'
   ```

   Some early explorations have been done in https://gitlab.com/gitlab-org/gitlab/-/issues/482782.

4. **Improved querying capabilities** - Increase the query language power by including features like mathematical expressions (for instance `count()`, `sum()`, etc) or aggregate functions (for instance `group_by`):

   ```plaintext
   query: project = "team-project" AND type = Issue AND updated > -3d
   fields: count() AS "Total Issues", sum(weight) AS "Total Weight"
   group_by: state
   ```

   This is already tracked in https://gitlab.com/gitlab-org/gitlab/-/issues/511954.

   To support analytics query, we would also need to add support for dimensions and metrics, as well as field functions like `timeslice(interval)` to be able to support charts visualisations.

5. **Support large dataset** - As the current implementation of GLQL only supports returning a single page of data, limited to 100 items, we need to expand that to fully support pagination:

Adopting GLQL for dashboard data exploration could also enable easy exporting and sharing of dashboards/visualizations across other GitLab pages, further enhancing the platform's data exploration capabilities.

#### Moving GLQL to the backend

A critical architectural change is moving GLQL execution from the frontend to the backend, creating a single API to query any GitLab data with a consistent query and filter language.

The GLQL Rust compiler could compile GLQL queries directly to appropriate formats that can be then used to query data directly from the backend. This could result in either executing a GraphQL query from Rails or just fetching the data from internal or external API in whatever format they support.

Proof of concept demonstrating how the Rust GLQL compiler can be hooked up to Rails and the query parsing moved to the backend: https://gitlab.com/gitlab-org/gitlab/-/merge_requests/190552

Moving GLQL to the backend would provide the following advantages:

- A single entry point for querying GitLab data, with centralized access control and consistent querying interface
- Opportunity for opening up GLQL to satellite services, such as IDE extensions, third party services and APIs. For example it could enable using GLQL in a CLI tool like `glab`, or rendering the output of a GLQL query in an email notification.
- A simplified frontend implementation, with the backend as single source of truth
- Queries can be executed closer to the data
- Opportunity for optimisations at the backend level, such as increased concurrency of queries execution
- Promotes GLQL from just a compiler to being a full platform, where you can ask a query and get the appropriate data back. Previously this responsibility lied with the consumer, but now GLQL would own it.

In addition, having the GLQL Rust compiler also allows the same parser to be shared by both frontend and backend contexts:

- Backend: Query parsing and full query execution against data sources
- Frontend: Syntax validation and immediate feedback without query execution

This is also inline with `~devops::plan` future plans: [https://gitlab.com/groups/gitlab-org/-/epics/15834](https://gitlab.com/groups/gitlab-org/-/epics/15834), thus opening up opportunities for collaboration.

Being able to share the Rust compiler between frontend and backend also allows us to parallelize the work to add type-based data source routing and moving the GLQL pipeline to the backend.

This standardized query system when built with an extended GLQL architecture and shift to the backend, will provide the foundation for a powerful and consistent data exploration experience across all GitLab data sources.

### A unified data exploration UI

The unified data exploration UI will provide a cohesive, intuitive interface for users to query, analyze, and visualize data from GitLab's diverse data sources. The UI will serve both technical users who may prefer writing GLQL queries directly and non-technical users who need a simplified visual interface to build reports and dashboards.

The interface should include the following main building blocks:

1. **Query Construction Area**

   - Toggle between text-based GLQL editor and visual query building
   - Syntax highlighting, autocompletion, and error detection for GLQL query editor
   - Easily accessible filters
   - Visual query builder with intuitive components for non-technical users
   - Schema browser showing available fields and data types
   - Query templates and saved queries library
   - AI-assisted building

2. **Results Display**

   - Tabular view for raw data exploration
   - Visualization canvas for charts and graphs
   - Preview of query results while building the query
   - Pagination controls for large result sets
   - AI-assisted results interpretation

3. **Visualization Controls**

   - Visualization type selector (charts, tables, metrics, markdown, custom views)
   - Configuration panel for the selected visualization

4. **Action Toolbar**

   - Run query button
   - Save query button
   - Share/export options
   - Queries history
   - Dashboard integration options

5. **Context Panel**

   - Metadata about the current query (for instance execution time, rows returned, or some performance metrics)
   - Documentation and help resources

This unified interface will integrate seamlessly with the standardized query system, leveraging GLQL's capabilities while presenting them in an accessible way to all users regardless of their technical expertise.

Whilst the above are the main building block that we think are necessary to build the data exploration interface, proper UX research will be required to turn this into a proper design.

<!--
## Design and implementation details

This section should contain enough information that the specifics of your
change are understandable. This may include API specs (though not always
required) or even code snippets. If there's any ambiguity about HOW your
proposal will be implemented, this is the place to discuss them.

If you are not sure how many implementation details you should include in the
document, the rule of thumb here is to provide enough context for people to
understand the proposal. As you move forward with the implementation, you may
need to add more implementation details to the document, as those may become
valuable context for important technical decisions made along the way. A
document is also a register of such technical decisions. If a technical
decision requires additional context before it can be made, you probably should
document this context in a document. If it is a small technical decision that
can be made in a merge request by an author and a maintainer, you probably do
not need to document it here. The impact a technical decision will have is
another helpful information - if a technical decision is very impactful,
documenting it, along with associated implementation details, is advisable.

If it's helpful to include workflow diagrams or any other related images.
Diagrams authored in GitLab flavored markdown are preferred. In cases where
that is not feasible, images should be placed under `images/` in the same
directory as the `index.md` for the proposal.
-->

<!--

## Alternative Solutions

It might be a good idea to include a list of alternative solutions or paths considered, although it is not required. Include pros and cons for
each alternative solution/path.

"Do nothing" and its pros and cons could be included in the list too.
-->
