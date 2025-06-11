---
title: "Duo Chat's Technical Strategy - "
description: "A detailed description of the pillars of technical strategy for the Duo Chat group"
---

### Overview

The [Duo Chat Group](../duo-chat/) is dedicated to enhancing DevSecOps productivity by building an AI natural language conversational interface to GitLab's Platform. This document outlines our technical strategy for building and maintaining this system, focusing on key engineering aspects that will ensure its reliability, scalability, and effectiveness.

We've identified several critical areas that require our attention, including system observability, performance optimization, and integration with existing GitLab features. Our approach emphasizes robust monitoring and alerting systems, comprehensive test coverage, and a resilient architecture capable of handling potential failures in external LLM services. We're also prioritizing security and compliance measures to address the evolving regulatory landscape surrounding AI technologies.

To support ongoing development and maintenance, we're establishing clear incident management procedures and investing in tools to improve the developer experience for both our team as well as contributing teams and of course improve the experience for our Duo Chat users. This includes creating better documentation, streamlining API interactions, and refining our deployment processes. By addressing these technical challenges, we aim to create a stable foundation that will allow us and our contributors to iterate on the Chat application effectively, meeting both [current and future requirements](https://about.gitlab.com/direction/ai-powered/duo_chat/) as the project evolves.

In the coming months, the Duo Chat team will make strategic investments in all of these areas through our [technical roadmap](https://gitlab.com/groups/gitlab-org/ai-powered/duo-chat/-/epics/1). This will form the technical foundation upon which we will continue to build a first-class, LLM-driven Chat solution to meet market and customer needs.

### Monitoring, Observability, and Alerting

Given the range of systems, databases, and third-party services involved in each request to the Chat application, it is essential to maintain comprehensive and accessible monitoring dashboards that offer visibility into the status of these various layers and components. The observability framework should be built around key metrics aligned with the four golden signals: latency, traffic, errors, and saturation. Metrics such as resource utilization, concurrency, logs, traces, and events should provide further insight into system performance and behavior.

Furthermore, the framework should include a robust alerting system that facilitates swift detection and response whenever any component deviates from expected patterns.

Although progress has been made in logging errors and displaying error codes in the user interface, further enhancements are necessary. This includes increasing granularity and capturing errors in more specific areas to provide clearer insights during the debugging process. Moreover, error documentation can be improved by offering more actionable guidance, ensuring support staff can effectively address issues as they arise.

Furthermore, error tracking and reporting should be enhanced through dashboards that present error rates over time, facilitating the evaluation of efforts to improve application stability and enabling data-driven decision-making.

### Resiliency

In a system like Duo Chat, which depends on external LLM providers, ensuring resiliency is critical to maintaining uninterrupted service. The reliance on third-party APIs introduces risks such as service outages, performance degradation, or downtime that could disrupt user experience. To mitigate these vulnerabilities, the architecture must include redundancy and failover mechanisms designed to handle external service disruptions.

One effective strategy is to implement fallback mechanisms that can switch between different LLM models or providers when the primary service becomes unavailable. By integrating multiple providers, the system can dynamically select alternatives based on performance and availability, allowing for a seamless transition without noticeable impact on the user experience. This ensures that even if the primary model fails, the Chat platform continues to function smoothly.

Continuous monitoring of external LLM APIs is also essential for detecting potential issues early. Metrics such as response times, error rates, and availability can trigger automatic fallbacks when necessary. Combining this with circuit-breaking patterns further prevents the system from becoming overwhelmed by failing external services, thus enhancing overall stability and ensuring reliable service delivery.

### Scalability and Performance Optimization 

As the adoption of the Chat system continues to expand and its sophistication grows, building a robust foundation capable of handling increased traffic and evolving capabilities is critical. Ensuring scalability and optimizing performance will be key to maintaining a smooth user experience as demand for the system rises. A well-designed infrastructure must be able to support the growing number of requests while still delivering timely, accurate responses to users.

To achieve this, several techniques should be prioritized in the technical roadmap. Optimizing API communication patterns will help ensure that interactions between the AI-Gateway and the LLMs are efficient and low-latency, while model compression and request batching can reduce the computational load on the system. Introducing intelligent caching mechanisms will further alleviate the burden by serving frequently asked queries more quickly, and streaming techniques can enable faster real-time responses. Additionally, implementing dynamic resource scaling will allow the system to automatically adjust its capacity based on traffic, ensuring that it remains responsive even during peak usage periods. These strategies, when combined, will create a scalable and high-performing Chat solution capable of handling increased usage without compromising on speed or reliability.

Furthermore, continual evaluation of the system’s performance will be essential to identify bottlenecks and areas for further optimization. Monitoring the usage patterns, resource consumption, and response times will allow the team to proactively address any emerging challenges, ensuring that the system remains scalable and performant as it grows. This focus on both immediate and long-term scalability will support the ongoing success and stability of Duo Chat as it becomes an integral part of the GitLab platform.

### Expand Context Awareness and Integration of Duo Chat with GitLab features

Integrating Duo Chat seamlessly with GitLab's features is essential for delivering a streamlined, intuitive user experience. By deepening the connection between the Chat system and core GitLab functions such as pipelines, merge requests, issue tracking, and others, users will be empowered to interact with these features in a more conversational and efficient manner. 

To further enhance the system's capabilities, incorporating retrieval-augmented generation (RAG) techniques can provide users with more contextually accurate answers to project-specific questions. By leveraging metadata from ongoing projects, specific GitLab entities, or the user profile, the system can offer responses that are not only technically accurate but also highly relevant to the current work at hand. This level of contextual awareness will significantly improve the system's usability, allowing it to link responses directly to pertinent documentation, repositories, or other relevant entities.

### Security and Compliance

Ensuring security and compliance by Duo Chat is paramount, especially given its nature as  a deeply integrated tool into all areas of the DevSecOps environment. With the complex interactions between users, systems, and the LLM APIs, it is essential to implement robust security measures that protect sensitive data and maintain the integrity of the platform. The ability to monitor and control these interactions will be key to maintaining the system’s security posture.

In the context of increasing global regulations surrounding AI and data privacy, such as GDPR and the emerging AI Act in Europe, compliance will be another critical area of focus. The Duo Chat solution must adhere to industry standards for handling and processing user data, ensuring that data privacy regulations are respected. This includes the implementation of audit trails and reporting mechanisms that provide transparency into how data is used and accessed, allowing for traceability in case of security incidents or compliance audits.

Additionally, as AI adoption continues to grow, providing users with explainable AI features will be increasingly important. Enabling transparency around the LLM’s decision-making processes can help build trust in the system, allowing users to understand how responses are generated and ensuring accountability in the AI’s behavior. This focus on security, compliance, and explainability will create a resilient and trustworthy system that aligns with the expectations our customers have for a secure DevSecOps environment like GitLab.

### Developer Experience

To support GitLab's internal engineers in integrating their own features with Duo Chat, it is essential to develop and enhance tooling that facilitates seamless interaction with the Chat APIs. Providing a robust framework for extending Chat capabilities will enable engineers to build and deploy custom tools, scripts, and APIs that interact effectively with the Chat system. This involves creating comprehensive documentation and user-friendly interfaces that allow engineers to easily integrate their features, as well as tools for testing and debugging these integrations.

The development of these tools should include options for customizing the Chat system to fit specific project requirements. For instance, engineers should be able to bring their own project-specific contextual data that can inform the Chat system's responses, ensuring that the integrations are tailored to their needs. Additionally, improving API versioning and compatibility is crucial to accommodate evolving requirements and ensure that third-party integrations remain functional and up-to-date.

By focusing on these tooling enhancements, internal engineers are empowered to leverage Duo Chat effectively, enabling them to create richer, more integrated experiences. This approach will not only streamline the development process but also enhance the overall functionality and flexibility of Duo Chat, ultimately contributing to a more cohesive and productive development environment.

### Test Coverage and Productivity Optimizations

It is important to address challenges that arise during debugging and testing as opportunities to enhance the productivity tools and methodologies used for these processes. Reflecting on past pain points can lead to valuable improvements, whether by optimizing existing tools or adopting new ones to streamline the debugging workflow. 

Expanding and refining our runbooks is a crucial step in this direction, ensuring that engineers have comprehensive, up-to-date resources to troubleshoot and resolve issues effectively. New runbooks should be created when necessary to cover emerging areas of concern, promoting consistency and efficiency in debugging efforts.

In addition to improving debugging tools, this pillar also emphasizes the importance of enhancing unit tests and end-to-end testing. Expanding test coverage plays a critical role in identifying and resolving issues early, thereby reducing the likelihood of regressions and minimizing the occurrence of bugs. Comprehensive testing enables the team to detect issues before they reach customers, protecting valuable engineering time from being consumed by post-release bug fixes.

Improving both the scope and quality of tests allows for more reliable deployments, strengthens the overall stability of the system, and supports continuous delivery without compromising quality. As the system evolves, maintaining high test coverage, combined with automated testing practices, will ensure that new features are introduced with minimal risk to the existing functionality. This will not only increase confidence in the product but also free up engineering resources to focus on innovation and long-term improvements rather than reactive bug fixes.
