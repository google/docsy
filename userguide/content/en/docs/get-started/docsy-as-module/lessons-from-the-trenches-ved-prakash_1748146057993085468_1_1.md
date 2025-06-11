---
title: "SRE Internship"
controlled_document: false
---

## Lessons from the Trenches: Insights from an SRE Internship

### Introduction

Embarking on an internship with the Site Reliability Engineering (SRE) foundation team has been a remarkable chapter in my career journey. Over the past few months, I've gained invaluable insights, honed my technical skills, and learned what it truly means to maintain and enhance the reliability of large-scale systems. My main goal for doing an internship with the SRE foundation team was to understand how they use GitLab itself to manage the whole infrastructure, how to manage the vault and how to adopt the best practices of infrastructure as code to spin a scalable infrastructure. Here, I'd like to share my experiences, challenges, and the lessons I've learned.

#### What is SRE?

If you need to become more familiar with SRE, it's a discipline that bridges the gap between software engineering, and IT operations. SREs are responsible for building and maintaining highly reliable, scalable, and efficient systems. They use a combination of software engineering skills, automation, and monitoring to ensure that services are always available and performing optimally.

#### Different teams of SRE within GitLab

* Delivery: The Delivery Group enables GitLab Engineering to deliver features safely, scalable, and efficiently to both GitLab.com and self-managed customers.
* OPS: The Ops team is an infrastructure team under SaaS Platforms that focuses on improving processes vital to the successful operations of GitLab.
* Foundation: Foundations is responsible for several services related to GitLab SaaS Platforms. The Services the Foundations team is responsible for fall into two general categories: Core and Edge. They are primarily responsible for K8s, Config, Service discovery, secret management, CDN, DNS, Load Balancing, and Network.
* Scalability: Scalability focuses on observability, forecasting, and projection systems that enable development engineering to predict system growth in their areas of responsibility.
* Dedicated: This group of the SRE team is dedicated to a single-tenant GitLab environment, served through a GitLab-dedicated platform.
* DBRE: The DBRE team is responsible for anything related to Postgres database installation, upgrade, maintenance, etc. (now part of the platform).
* Gitaly Team: The Gitaly team is responsible for building and maintaining systems to ensure that the Git data storage tier of GitLab instances, and GitLab.com in particular, is reliable, secure, and fast.

### The process of enrolling into SRE internship

* Reach out to the team you want to intern with.
* Followed by issue as per the handbook page and get alignment on the time you would like to spend between both your team management and another team manager.

### Onboarding in SRE team

The onboarding process for the SRE team was comprehensive and well-structured, designed to integrate new interns into the team's workflow quickly:

1. Introduction to Team and Tools: I was introduced to team members and given an overview of the tools and technologies used in our SRE practice. This included familiarization with our monitoring systems architecture overview.

2. Access and Permissions: The team ensured I had access rights to relevant systems and repositories, allowing me to start contributing from day one.

3. Documentation Review: I was provided with essential documentation, including team processes, best practices, and architectural overviews. This helped me understand the team's approach to the SRE foundation and the systems we manage.

4. Hands-on Training: The team organized hands-on training sessions covering key technologies and practices, such as Kubernetes, hashicorp vault, Yubikey access management, etc.

5. Mentorship Program: I was assigned a mentor who guided me throughout the internship, answering questions and helping me navigate challenges.

6. Gradual Responsibility: The team adopted a gradual approach to assigning responsibilities, starting with smaller tasks and progressively helping me to onboard our data platform infrastructure to the config-mgmt and helm chart repository.

7. Regular Check-ins: Weekly check-ins with my mentor and the SRE foundation team manager ensured I was progressing well and had the needed support.

This structured onboarding process significantly eased my transition into the SRE team and set a strong foundation for my internship experience.

### Key Learnings

Throughout my internship, I gained numerous insights that have shaped my understanding of SRE practices:

#### Lesson learned - Technical

* Learning new technologies overview Chef, Cloudflare, sentry, helm, and Terraform.
* How are infrastructure, such as Code (IaC) principles, extensively used to manage and provision resources?
* GitLab CI/CD pipelines are leveraged for automated deployments and testing.
* Kubernetes is used for container orchestration and management.
* Monitoring and alerting systems are in place to ensure high availability and quick response to issues.
* Security measures, including encryption and access controls, are integrated into the infrastructure design.
* The Hashicorp vault is configured to manage secrets securely across the infrastructure. It provides:

  * Centralized secret management
  * Dynamic secrets generation
  * Encryption as a service
  * Audit logging
  * Access control policies

  Key benefits of using Vault at GitLab:

  * Enhanced security: Secrets are encrypted at rest and in transit
  * Fine-grained access control: Policies define who can access which secrets
  * Integration with CI/CD: Seamless integration with GitLab CI/CD pipelines
  * Auditing: Comprehensive logs for all secret access and operations

 The SRE team manages Vault clusters for different environments (development, staging, production) and ensures high availability and disaster recovery capabilities.

* Learned to host a new GCP project from scratch into the config-mgmt repository.
* Cookbook setup in terms of permission  and access control.

#### Lesson learned - Process

* Over here, things were almost the same as our data teams regarding quarter planning, execution, and retro.
* They have a few more calls than us as the team is geo-located, because of which 2 sync calls are weekly.
* Fire drill call where they practise the production incident.
* S1 sync call in case they have an open S1.
* To review an MR, you don't need to assign it to any one particular person; people post any MR review request in #s_production_engineering or #g_foundations slack channel.
* Everyone is a code owner, but you can't merge your changes. Also, one contributed to the MR and can't merge or approve the changes.
* Everyone in the team uses Yubikey to connect to the production instance, ensuring the best security.

### How does an internship with the SRE foundation benefit the data platform team?

* With my internship kicked in, I got everyone in the data platform team to have Yubikey and a defined process to access the .com Postgres instance accessible from a local machine. A self-serving process is set up for any new onboarding team member.
* I onboarded the whole data platform team on Hashicorp vault, which will help the team manage the kubernetes secrets for airflow instances running in production and testing namespace.
* Together with Rigerta, we onboarded data platform staging airflow GKE cluster on the SRE team config-mgmt repo. (This ensures data platform infrastructure is highly reliable and secure, and we get controlled upgrades from Google). Learning from this is to roll out the production cluster to the config-mgmt.
* There is knowledge in the team on which team in infrastructure is responsible for managing which infrastructure component.

### Key takeaways from the SRE Foundation team internship

1. <b>Importance of Observability:</b> I learned that having comprehensive visibility into our systems is crucial for maintaining reliability. Proper instrumentation, logging, and monitoring are essential for quickly identifying, and resolving issues.

2. <b>Embracing Failure:</b> The SRE mindset of treating failures as learning opportunities rather than blame-worthy events was eye-opening. This approach fosters a culture of continuous improvement and innovation.

3. <b>Automation is Key:</b> I saw firsthand how automation can significantly reduce human error, increase efficiency, and allow the team to focus on more strategic initiatives.

4. <b>Cross-functional Collaboration:</b> SRE work involves close collaboration with development teams and other stakeholders. Effective communication and teamwork are essential for success.

5. <b>Continuous Learning:</b> The fast-paced nature of technology means that SREs must constantly update their skills and knowledge. I learned the importance of staying curious and adaptable in this field.

### Challenges and Growth

While the internship was enriching, it also came with its share of challenges:

1. <b>Steep Learning Curve:</b> The sheer amount of new technologies, tools, and concepts I had to grasp was initially overwhelming. However, this challenge pushed me to develop effective learning strategies and time management skills.

2. <b>Dealing with Ambiguity:</b> Many problems in SRE don't have clear-cut solutions. Learning to navigate ambiguity and make decisions with incomplete information was a valuable skill I developed.

3. <b>Balancing Reliability and Innovation:</b> I learned the delicate balance between maintaining system stability and pushing for innovation and improvements.

### How does an intern contribute?

* Handbook update of SRE team.
* Process sharing in terms of how we do weekly sync and what different topics we cover
* An intern helps them update the document to make things self-serving, that is to  prepare the runbook.
* Performing review of small changes.

### Key Takeaways for Future Interns

If you're considering an SRE internship, here are a few tips based on my experience:

* <b>Be Proactive:</b> Don't wait for someone to tell you what to do. Seek out opportunities to learn and contribute.
* <b>Ask Questions:</b> No question is too dumb. The more you ask, the more you'll learn.
* <b>Don't Be Afraid to Make Mistakes:</b> Everyone makes mistakes. The important thing is to learn from them.
* <b>Network:</b> Get to know your team members and others in the company. You never know where those connections might lead.
* <b>Have Fun!</b> SRE can be challenging but incredibly rewarding.

### Conclusion

My SRE internship has been an incredibly enriching experience that has deepened my understanding of Site Reliability Engineering and solidified my passion for this field. The skills, knowledge, and insights I've gained during this time have significantly enhanced my capabilities as a data engineer.

Throughout this journey, I've had the opportunity to work with cutting-edge technologies, collaborate with talented professionals, and contribute to maintaining and improving the reliability of large-scale systems. The hands-on experience in areas such as infrastructure as code, Kubernetes, GitLab CI/CD, and Hashicorp Vault has been invaluable.

I'm particularly grateful for the supportive and collaborative environment fostered by the SRE foundation team at GitLab. Their mentorship, guidance, and willingness to share knowledge have been instrumental in my growth. The culture of continuous learning, embracing Failure as a learning opportunity, and striving for constant improvement has left a lasting impression on me.

Moreover, this internship has highlighted the critical role that SRE plays in modern software development, and operations. The focus on observability, automation, and cross-functional collaboration has shown me how SRE practices can significantly enhance complex systems' reliability, scalability, and efficiency.

I'm excited about the future possibilities in the field of SRE, and look forward to applying the knowledge, and skills I've gained in my data engineering workflow. This internship has been a crucial stepping stone in my professional journey, and I'm grateful for the opportunity to have been part of such an innovative and impactful team.

### Acknowledgements

I want to thank my mentors, team members, and the organization for providing me with this opportunity, and for their unwavering support throughout my internship.
Feel free to contact me if you have any questions about my experience or SRE. I'm always happy to connect, and share more about this exciting field!

### Authored By

 Ved Prakash
