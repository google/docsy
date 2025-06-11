---
title: "Claude.ai Tips"
---

Learn how to use [Claude.ai](https://claude.ai/) to infuse AI into your workflows, tools, and processes to greater efficiencies. You can use Claude to write content, create outlines and documents, summarize content, generate database migrations and SQL statements, recommend refactorings, and more.

## Access

Open [claude.ai](https://claude.ai/) and use your team member email address for SSO login. You can also use the Claude tile in [Okta](/handbook/it/okta/). Review the [usage guidelines and FAQs](https://internal.gitlab.com/handbook/company/ai-at-gitlab/#usage-guidelines-and-faqs) (internal).

## Resources

- [AI at GitLab initiative](https://internal.gitlab.com/handbook/company/ai-at-gitlab/) (internal)
- [Claude.ai support articles collection](https://support.anthropic.com/en/collections/4078531-claude-ai)

## Tips

> **Note** Only document public use cases and tips with Claude.ai, and keep everything else SAFE in the [internal handbook](https://internal.gitlab.com/handbook/company/ai-at-gitlab/).

Claude.ai can answer many different questions and topics. Be creative, curious, and explore, and iterate on the best chat prompts. Since [GitLab Duo Chat](gitlab-duo.md) also uses [Anthropic Claude as one of the LLMs](https://docs.gitlab.com/ee/user/gitlab_duo_chat/), you can test and repurpose similar chat prompts.

1. Join the [#ai-at-gitlab Slack channel](https://gitlab.enterprise.slack.com/archives/C085M5071LG)
1. Download [Claude for Desktop](https://claude.ai/download)
1. CLI and API access
   - An Anthropic API key is required. Create an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/) for Anthropic Console - Corp in the [tech_stack.yml](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
   - Learn about the [Anthropic SDK](https://docs.anthropic.com/en/docs/initial-setup#install-the-sdk) and community projects for CLIs: [anthropic-cli](https://github.com/dvcrn/anthropic-cli)
1. [How up-to-date is Claude's training data?](https://support.anthropic.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data)

## Example Prompt Library

Below is a collection of useful prompts organized by division, with example use cases for each prompt to help team members leverage AI assistants effectively.

### Sales Division

#### Value Proposition Analysis Prompt

```markdown
Analyze how a company's features address key challenges in the [MARKET SEGMENT] space. Focus on:
1. Pain points solved
2. Feature advantages
3. Customer support benefits
4. Integration capabilities
5. ROI potential
```

**Example Use Case:** When preparing for a sales call with a prospect in the financial services sector.

#### Sales Email Template Generator

```markdown
Generate a personalized sales email to [PROSPECT TYPE] who is currently using [CURRENT SOLUTION]. 
Include:
- Pain points they might be experiencing
- Specific features that address these pain points
- A clear value proposition
- Soft call-to-action for a demo
Keep the tone professional but conversational and limit to 200 words.
```

**Example Use Case:** Creating tailored outreach emails to development team leads at healthcare companies who are using fragmented tools and could benefit from a single application approach.

### Marketing Division

#### Content Brief Creator

```markdown
Create a detailed content brief for a [CONTENT TYPE] about [TOPIC] targeted at [AUDIENCE].
Include:
- Proposed title options (3-5)
- Key messages to convey
- SEO keywords to target
- Outline with section headings
- Suggested data points or case studies to include
- Call-to-action recommendations
```

**Example Use Case:** Planning a comprehensive blog post.

#### Social Media Campaign Planner

```markdown
Develop a 2-week social media campaign promoting [FEATURE/PRODUCT] across LinkedIn and Twitter.
For each platform, create:
- 5 unique post ideas with copy variants (280 chars for Twitter, 700 chars for LinkedIn)
- Hashtag recommendations
- Suggested posting schedule
- Ideas for engagement questions
Focus on highlighting [SPECIFIC BENEFIT] and target [TARGET AUDIENCE].
```

**Example Use Case:** Creating a campaign to promote AI-assisted features.

### General & Administrative

#### Policy Document Summarizer

```markdown
Summarize the following [POLICY/DOCUMENT] into:
1. A one-paragraph executive summary
2. 5-7 bullet points of key takeaways
3. A list of any action items or compliance requirements
4. A simple table showing changes from previous version (if applicable)
```

**Example Use Case:** Distilling a lengthy updated security compliance document into an easily digestible format for team distribution before quarterly compliance training.

#### Data Analysis Assistant

```markdown
Help analyze this [DATA SET] to identify:
1. Key trends and patterns
2. Anomalies or outliers
3. Correlations between variables
4. Business implications
5. Suggested next steps or areas for deeper investigation

Provide both summary insights and specific data points that support your analysis.
```

**Example Use Case:** Business users analyzing quarterly expense reports to identify spending patterns across departments, flagging unusual transactions, and generating cost-saving recommendations for leadership.

### Product Division

#### User Story Generator

```markdown
Create detailed user stories for implementing a [FEATURE]. For each user story:
- Follow the format: "As a [USER TYPE], I want to [ACTION] so that [BENEFIT]"
- Include acceptance criteria
- Suggest story points (1, 2, 3, 5, 8)
- Identify potential dependencies
- Tag with appropriate labels (frontend, backend, UX, etc.)
```

**Example Use Case:** Developing comprehensive user stories.

#### Code Visualization Assistant

```markdown
Visualize the following code to help understand:
1. Execution flow
2. Function calls and relationships
3. Key dependencies
4. Potential bottlenecks

Present the visualization in [FORMAT] (Mermaid, ASCII art, etc.)

Code:
[PASTE CODE HERE]
```

**Example Use Case:** Product managers and developers collaborating to better understand the implementation of a complex feature by visualizing code execution paths and dependencies before planning refactoring work.

### AI Workflow Prompts

#### Data Set Analysis

```markdown
Analyze the attached data file and provide:
1. Summary of key content
2. Important patterns or trends
3. Insights grouped by priority
4. Recommendations based on findings

For [TYPE] data, focus on [SPECIFIC METRICS].
```

**Example Use Case:** Analyzing customer usage data to identify adoption patterns of features, highlighting which user segments are most actively engaged with specific tools.

#### Code Modernization Assistant

```markdown
Review this legacy code and provide:
1. Explanation of current functionality
2. Modern implementation approach
3. Key improvements in the new version
4. Implementation considerations and challenges

Original code:
[PASTE CODE HERE]
```

**Example Use Case:** Modernizing legacy automation scripts to current best practices, improving maintainability while preserving essential functionality that teams depend on.
