---
title: "Database Engineer Roles"
description: "Learn more about Database Engineer roles at GitLab including requirements, responsibilities and more."
---

## Database Engineer

Our database engineer is a hybrid role: part software engineer, part database expert.

You will spend the majority of your time making application changes to improve database performance, scalability and reliability and delivering foundational database solutions and best practices for our backend engineering teams.

This role is focused on application changes and explicitly not an infrastructure or operational role.

## Job Grade

The Database Engineer is a [grade 6](/handbook/total-rewards/compensation/compensation-calculator/#gitlab-job-grades).

## Responsibilities

- Pro-actively identify database performance impediments and resolve them by proposing and delivering changes to the GitLab codebase. Own this process end-to-end, from triaging issues to verifying your solution in production (GitLab.com)
- Deliver application changes that allow us to scale the application and its database further and make sure we're prepared for data growth on both GitLab.com and self-managed installs
- Act as a Database [Maintainer](/handbook/engineering/workflow/code-review/#maintainer) for the GitLab codebase and [review database-related application changes](https://docs.gitlab.com/ee/development/database_review.html) before they are released
- Providing database expertise to engineering teams through code reviews, pairing and training to help deliver optimal database designs and queries
- Review, optimize and refactor the existing database schema
- Create and incrementally improve documentation to reduce tribal knowledge, including
  - Database best practices
  - Workflows and database team processes
  - Target architecture and long term scalability considerations
- Improve tooling to detect performance bottlenecks early in the development cycle

## Example Projects

- Identify problematic database patterns by analyzing GitLab.com's workload and implementing/suggesting solutions
- Implement a partitioning strategy framework for large tables
- Implementing building blocks to efficiently load, analyze and migrate data
- Analyzing tables and optimizing them by adding indexes, breaking them up into separate tables, or by removing unnecessary columns
- Implement an efficient queueing strategy for pull mirrors
- Implement efficient patterns for counting
- Rewriting the database queries and related application logic used for retrieving [subgroups](https://docs.gitlab.com/ee/user/group/subgroups/index.html#subgroups)
- Rewriting code used for importing projects from other platforms (e.g. GitHub)
- Prevent primary key integer overflows with no-downtime migrations
- Improve index usage (remove unused, identify missing)
- Improve our application-side database load balancing implementation
- Reviewing database related changes submitted by other developers
- Documenting database best practices or patterns to avoid

## Requirements

- Significant [professional software engineering experience](/job-families/engineering/backend-engineer/#professional-experience) with Ruby on Rails and PostgreSQL in large production environments
- Expert-level understanding of relational databases, SQL and query optimization techniques and demonstrated ability to both diagnose and prevent performance problems
- Expert-level understanding of the internals of PostgreSQL
- Proficiency in the English language, both written and verbal, sufficient for success in a remote and largely asynchronous work environment
- Demonstrated capacity to clearly and concisely communicate about complex technical, architectural, and/or organizational problems and propose thorough iterative solutions
- Comfort working in a highly agile, [intensely iterative](/handbook/values/#iteration) software development process
- Demonstrated ability to onboard and integrate with an organization long-term
- Positive and solution-oriented mindset
- Effective communication skills: [Regularly achieve consensus with peers](/handbook/values/#collaboration), and clear status updates
- An inclination towards communication, inclusion, and visibility
- Experience owning a project from concept to production, including proposal, discussion, and execution.
- [Self-motivated and self-managing](/handbook/values/#efficiency), with strong organizational skills.
- Demonstrated ability to work closely with other parts of the organization
- Share [our values](/handbook/values/), and work in accordance with those values
- Ability to thrive in a fully remote organization
- Ability to use GitLab

## Nice-to-haves

- Experience with PostgreSQL sharding techniques
- Experience with owning the operations of large PostgreSQL production database infrastructure
- Experience with Redis at scale
- Experience in a peak performance organization, preferably a tech startup
- Experience with the GitLab product as a user or contributor
- Product company experience
- Experience working with a remote team
- Enterprise software company experience
- Developer platform/tool industry experience
- Experience working with a global or otherwise multicultural team
- Computer science education or equivalent experience
- Passionate about/experienced with open source and developer tools

## Hiring Process

Candidates for this position can generally expect the hiring process  to follow the order below. Please keep in mind that candidates can be declined from the position at any stage of the process. To learn more about someone who may be conducting the interview, find their job title on our [team page](/handbook/company/team).

- As part of the application, candidates are asked to complete a short technical questionnaire, with a possibility of additional technical questions being asked if needed after the application is submitted.
- Next, candidates will be invited to schedule a 30 minute [screening call](/handbook/hiring/#screening-call) with one of our Technical Recruiters
- Next, candidates will be invited to schedule a 90 minute technical interview with one of our Database Engineers or Backend Engineers
- Next, candidates will be invited to schedule a 60 minute interview with one of our Backend Engineering Managers
- Next, candidates will be invited to schedule a 60 minute interview with our Director of Engineering
- Successful candidates will subsequently be made an offer. Additional details about our process can be found on our [hiring page](/handbook/hiring/).

## Career Ladder

For more details on the engineering career ladders, please review the [engineering career development](/handbook/engineering/careers/#roles) handbook page.
