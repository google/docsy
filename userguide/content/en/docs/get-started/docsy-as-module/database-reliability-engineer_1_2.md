---
title: "Database Reliability Engineer"
---

Database Reliability Engineers (DBRE) are responsible for keeping database systems that support all user-facing services (most notably GitLab.com) and many other GitLab production systems running smoothly 24/7/365. DBREs are a blend of database engineering and administration gearheads and software developers that apply sound engineering principles, operational discipline and mature software development and automation, specializing in databases (PostgreSQL in particular). In that capacity, DBREs are peers to SREs and bring database expertise to the SRE and SAE Infrastructure teams as well as our engineering teams.

GitLab.com is a unique site and it brings unique challenges: it’s the biggest GitLab instance in existence; in fact, it’s one of the largest single-tenancy open-source SaaS sites on the internet. The experience of our team feeds back into other engineering groups within the company, as well as to GitLab customers running self-managed installations

## As a DBRE you will

- Work on database reliability and performance aspects for GitLab.com from within the SRE team as well as work on shipping solutions with the product.
- Analyze solutions and implement best practices for our main PostgreSQL database cluster and its components.
- Work on observability of relevant database metrics and make sure we reach our database objectives.
- Work with peer SREs to roll out changes to our production environment and help mitigate database-related production incidents.
- OnCall support on rotation with the team.
- Provide database expertise to engineering teams (for example through reviews of database migrations, queries and performance optimizations).
- Work on automation of database infrastructure and help engineering succeed by providing self-service tools.
- Use the GitLab product to run GitLab.com as a first resort and improve the product as much as possible.
- Plan the growth and manage the capacity of GitLab's database infrastructure.
- Design, build and maintain core database infrastructure pieces that allow GitLab to scale to assist hundreds of thousands of concurrent users.
- Support and debug database production issues across services and levels of the stack.
- Make monitoring and alerting alert on symptoms and SLOs, and not on outages.
- Document every action so your learnings turn into repeatable actions and then into automation.

## The GitLab Database Ecosystem

The GitLab Database Ecosystem has the following areas of interest:

1. PostgreSQL Core
1. PostgreSQL High Availability and Load Balancing (e.g. Patroni, PGBouncer, consul, PostgreSQL Replication etc.)
1. PostgreSQL Disaster Recovery (backup/restore and other techniques)
1. Database Observability (Prometheus instrumentation, workload analysis etc.)
1. GitLab Rails application specifics on PostgreSQL

## You may be a fit to this role if you

- Have at least 5 years of experience running PostgreSQL in large production environments.
- Have at least 2 years of experience with infrastructure automation and configuration management (Chef, Ansible, Puppet, Terraform...).
- Have at least 3 years of experience with any object oriented programming language in a software engineering role.
- Have experience with Ruby on Rails, Django, other Ruby and/or Python web frameworks, or Go.
- Have strong programming skills.
- Have solid knowledge of SQL and PL/pgSQL.
- Have solid knowledge of the internals of PostgreSQL.
- Have experience working in a distributed production environment.
- Share our [values](/handbook/values/), and work in accordance with those values.
- Have excellent written and verbal English communication skills.
- Have an urge to collaborate and communicate asynchronously.
- Have an urge to document all the things so you don't need to learn the same thing twice.
- Have a proactive, go-for-it attitude. When you see something broken, you can't help but fix it.
- Have an urge for delivering quickly and iterating fast.
- Know your way around Linux and the Unix Shell.
- Have the ability to orchestrate and automate complex administrative tasks. Knowledge in config management systems like Chef (the one we use).
- Have a passion for stable and secure systems management practices.
- Possess data modeling and data structure design skills.

## Projects you could work on

- Review, analyze and implement solutions regarding database administration (e.g., backups, performance tuning)
- Work with Terraform, Chef and other tools to build mature automation (automatic setup new replicas or testing and monitoring of backups).
- Implement self-service tools for our engineers using GitLab ChatOps.
- Provide technical assistance and support to other teams on database and database-related application design methodologies, system resources, application tuning.
- Review database related changes from engineering teams (e.g., database migrations).
- Recommend query and schema changes to optimize the performance of database queries.
- Jump on a production incident to mitigate database-related issues on GitLab.com.
- Participate actively in the infrastructure design and scalability considerations focusing on data storage aspects.
- Make sure we know how to take the next step to scale the database.
- Design and develop specifications for future database requirements including enhancements, upgrades, and capacity planning; evaluate alternatives; and make appropriate recommendations.

## Leveling

### Database Reliability Engineer

#### Job Grade

The Database Reliability Engineer is a [grade 6](/handbook/total-rewards/compensation/compensation-calculator/#gitlab-job-grades).

#### Responsibilities

- Provides emergency response either by being on-call or by reacting to symptoms according to monitoring.
- Delivers production solutions that scale, identifying automation points, and proposing ideas on how to improve efficiency.
- Delivers projects, design solutions, identifying potential issues, tradeoffs and risks.
- Improves documentation all around, either in application documentation, or in runbooks, explaining the why, not stopping with the what.
- Improves the performance of the system by either making better use of resources, distributing load or reducing the latency.
- Shares the learnings publicly, either by creating issues that provide context for anyone to understand it or by writing blog posts.
- Deep knowledge of the 2 of the areas of expertise in PostgreSQL ecosystem.
- Great expertise in SQL, able to review SQL statements and guide developers with best practices how to interact with the database,for a high-scale web environment.
- Process oriented driven, iterating with the existent or creating new ones.
- Apply elevated testing practices to ensure smooth releases and changes.
- Good communications skills, collaborative and good working in group.

### Senior Database Reliability Engineer

#### Job Grade

The Senior Database Reliability Engineer is a [grade 7](/handbook/total-rewards/compensation/compensation-calculator/#gitlab-job-grades).

#### Responsibilities

- Lead and mentor DBREs by setting the example.
- Identifies changes for the product architecture from the reliability, performance and availability perspective with a data driven approach focused on relational databases. Knowledge of another data storage is a plus.
- Proactively work on the efficiency and capacity planning to set clear requirements and reduce the system resources usage to make GitLab cheaper to run for all our customers.
- Perform and run blameless RCA's on incidents and outages, relentlessly looking for answers that will prevent the incident from ever happening again.
- Show ownership of PostgreSQL ecosystem, great plus on ownership of major part of the infrastructure.
- Deep knowledge in architectural overview, knowledge of engineering practices, ORM’s, caching...
- Identify parts of the system that do not scale, provide immediate palliative measures and drive long term resolution of these incidents.
- Identify the SLO (Service Level Objectives) that will align the team to meet the availability and latency objectives.
- Be constructive, strong initiatives, approach with solutions, think out of the box, able to switch focus or priorities as required.
- Priority driven, focused on what matters, raises concerns, delivered focus.
- Deep knowledge in 3 areas of expertise related to PostgreSQL and his ecosystem, considering another data storages an option, general knowledge of all areas of expertise from the PostgreSQL ecosystem, radiate that knowledge.
- Leads and participates in several projects, having an overview and giving input on projects to be accomplished with the best performance and lower impact.

### Staff Database Reliability Engineer

#### Job Grade

The Staff Database Reliability Engineer is a [grade 8](/handbook/total-rewards/compensation/compensation-calculator/#gitlab-job-grades).

Staff Database Reliability Engineer are Senior Database Reliability Engineers who additionally meet the following criteria:

Technical:

1. Able to create innovative solutions that push GitLab's technical abilities ahead of the curve on the database ecosystem.
1. Deep knowledge of GitLab database ecosystem in expertise. Knowledge of each area of expertise enough to mentor and guide other team members in those areas.
1. Lead (with others) GitLab's database ecosystem architecture to improve reliability and add new relevant functionality.

Execution:

1. Strive for automation either by coding or by leading and influencing developers, to build systems that run automatically (ideally) in production.
1. Weight the risks of new features ahead of time, planning and mitigating accordingly, improving the infrastructure.
1. Propose and drive architectural changes that affect the whole company to solve scaling and performance problems.
1. Lead the team with significant project work, for OKR level goals.

Communication and Collaboration:

1. Work with engineers across the whole company influencing the database design to create features that will improve both our SaaS and self hosted platforms.
1. Communicate proficiently and consistently at a company level, sharing information that enables others and being vocal in group calls.
1. Run proficiently RCAs and epic-level planning meetings, to get meaningful work scheduled into the roadmap.

Influence and Maturity:

1. Routinely has an impact on the broader Engineering organization
1. Write in-depth documentation that shares knowledge and radiates GitLab technical strengths. Participate actively and lead GitLab technical/Business calls.
1. Have a high level of self awareness.
1. Help to develop other team members into senior levels and leaders in the team.
1. Collaborates closely with development groups and exerts influence on how GitLab (the application) interacts with the database

## Performance Indicators

Database Reliability Engineers have the following job-family performance indicators:

- [GitLab.com Availability](/handbook/engineering/infrastructure/performance-indicators/#gitlab-com-availability)
- [GitLab.com Performance](/handbook/engineering/infrastructure/performance-indicators/#gitlab-com-performance)
- [Apdex and Error SLO per Service](/handbook/engineering/infrastructure/performance-indicators/#apdex-and-error-slo-per-service)
- [Mean Time to Detection](/handbook/engineering/infrastructure/performance-indicators/#mean-time-to-detection-mttd)
- [Mean Time to Resolution](/handbook/engineering/infrastructure/performance-indicators/#mean-time-to-resolution-mttr)
- [Mean Time Between Failure](/handbook/engineering/infrastructure/performance-indicators/#mean-time-between-failures-mtbf)
- [Mean Time to Production](/handbook/engineering/infrastructure/performance-indicators/#mean-time-to-production-mttp)
- [Disaster Recovery Time to Recovery](/handbook/engineering/infrastructure/performance-indicators/#disaster-recovery-dr-time-to-recover)

## Hiring Process

Candidates for this position can expect the hiring process to follow the order below. Please keep in mind that candidates can be declined from the position at any stage of the process. To learn more about someone who may be conducting the interview, find their job title on our [team page](/handbook/company/team/).

- Qualified candidates will be invited to a 30min [screening call](/handbook/hiring/#screening-call) with our Global Recruiters.
- Next, candidates will move to the first round of interviews.
  - 60 Minute Technical Interview with a Senior DBRE.
  - Two 60 Minute Technical Interviews with a member of the Infrastructure Engineering team
  - 60 Minute Interview with the Hiring Manager.
- Next, candidates will move to the second round of interviews.
  - 60 Minute Interview with a Senior Manager/Director of Infrastructure Engineering.
- Successful candidates will subsequently be made an offer.

As always, the interviews and screening call will be conducted via a video call.
See more details about our hiring process on the [hiring handbook](/handbook/hiring/).

## Career Ladder

For more details on the engineering career ladders, please review the [engineering career development](/handbook/engineering/careers/#roles) handbook page.
