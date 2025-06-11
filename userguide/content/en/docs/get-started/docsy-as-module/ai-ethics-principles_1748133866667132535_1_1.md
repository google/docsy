---
title: "GitLab AI Ethics Principles for Product Development"
---

GitLab is dedicated to integrating Artificial Intelligence ("AI") throughout the software development lifecycle by responsibly incorporating AI into our comprehensive DevSecOps platform. We believe that AI features will further our [Efficiency value](/handbook/values/#efficiency) and continue to bring significant benefits and opportunities to re-shape the way we, and our customers, work. However, we also recognize that, without guardrails, AI features may give rise to ethical concerns.

We created these principles to guide our decision making as we continue to build AI features into GitLab and to ensure that these features properly embody [our core CREDIT values](/handbook/values/).

We're publishing these principles to stay true to our core [Transparency value](/handbook/values/#transparency). We're continuously working to build and improve our AI features, so, as with AI itself, these principles may change based on what we learn over time.  We will continue to review these principles and iterate as necessary to reflect the best practices in responsible development.

## 1. Avoid unfair bias

[Diversity, Inclusion, & Belonging](/handbook/company/culture/inclusion/) ("DIB") is fundamental to the success of GitLab and is one of our core CREDIT values. We include DIB in every way possible and in all that we do. This [handbook page](/handbook/company/culture/inclusion/) explains how GitLab thinks about DIB and what measures have been taken so far to foster DIB at GitLab.

DIB is a critical consideration when thinking about ethical AI since there is [evidence](https://fra.europa.eu/en/publication/2022/bias-algorithm) that AI systems may perpetuate human and societal biases by recommending and driving decisions based on race, gender, biological sex, and other bases. This bias can be introduced in many ways:

- Training data for machine learning models may reflect societal or historical inequities;
- Training data may contain statistical correlations that are undesirable or even illegal;
- The way – consciously or unconsciously – in which humans select data; or,
- The way – consciously or unconsciously – in which humans apply algorithms.

To avoid biased outcomes, GitLab should aim to continue to prioritize DIB when building features powered by AI systems and:

- Incorporate DIB into the development process whenever and wherever possible;
- Question whether the AI system is prone to unfair bias and, specifically, whether the AI system has already exhibited instances of bias or skewed data;
- Test for bias in AI systems before the deployment of AI features; and
- Refuse to deploy AI features if bias is apparent.

## 2. Safeguard against security risks

GitLab is a [DevSecOps](https://about.gitlab.com/topics/devsecops/) platform – we aim to integrate security throughout the software development lifecycle. AI brings many security benefits but can also create security risks, like data breaches, model poisoning, and other attacks. In order to mitigate these risks in our AI features, we should strive to:

- Be aware of the latest security trends and best practices;
- Be mindful that some of our AI security features may require human supervision;
- Monitor our AI features for unusual patterns of behavior that might signal security breaches; and,
- Adhere to GitLab's testing and deployment standards to ensure that our AI features are robust and will withstand adversarial threats.

## 3. Prevent potentially harmful uses

[Results](/handbook/values/#results) are one of our core CREDIT values and we are focused on delivering AI features that improve the results that both GitLab and our customers achieve. We should aim to do this responsibly and without causing overall harm.

We've discussed some examples of the harm AI features can do above, but we know there are still many other AI-related harms – including those that have yet to be identified – that we should strive to address as well. Harm can arise in many different circumstances and includes, but isn't limited to AI-generated output that promotes illegal activity, is misleading or deceptive, or is harassing, violent, or hateful. Our [Acceptable Use Policy](/handbook/legal/acceptable-use-policy/) provides further examples on prohibited, harmful uses of our AI features.

We should strive to grow our AI features responsibly and consider whether or how our AI features could be misused or abused by others. We should aim to carefully evaluate the possible consequences of our AI features, and refrain from launching features that are likely to cause or allow others to cause overall harm.

## 4. Consider what data AI features use and how they use it

We should aim to carefully evaluate the data that the AI features we build use by considering:

- What data is being used;
- The purposes for which we're using this data; and
- Who owns the intellectual property and other rights in the data.

We should also ensure that our AI features' processing of users' personal data is in line with the [GitLab Privacy Statement](https://about.gitlab.com/privacy/), including our commitment to processing data only in approved locations and for limited purposes.

## 5. Hold ourselves accountable

GitLab believes in our core [Iteration value](/handbook/values/#iteration) and is dedicated to continuous improvement. AI systems are developing rapidly and so will the ways in which we leverage AI systems and mitigate related risks. GitLab's development of AI features are conducted by team members with the relevant expertise in the technology, and its benefits and risks. We believe it is important to ensure our AI features are subject to human review and intervention.

We also strongly believe in our core [Collaboration value](/handbook/values/#collaboration), and it is GitLab's mission to make it so that [everyone can contribute](/handbook/company/mission/). We welcome feedback from GitLab users and members of the public about our externally available AI features. We are committed to ensuring that feedback mechanisms are clear and consistent. We should also strive to share our AI ethics-related findings with others in the industry where possible.

We should aim to remain self-critical and continue to educate ourselves on AI developments. The AI landscape is changing rapidly, and we should work to ensure that these principles are continuously updated to reflect the industry's latest risks and best practices.
