---
title: A Guide for Designing with AI 
description: "Here are some guidelines to help Product Designers navigate AI projects"
---

## Understanding AI Design Challenges

The main difference between designing AI features and traditional features is uncertainty. With Large Language Models (LLMs), we face uncertainty in both:

What users will do or write
How the LLM will respond

As designers, we have less control over user inputs and system outputs than we're used to. This guide provides tools and methods for working in this uncertain environment, supplementing your existing design toolkit.

### Key Questions This Guide Addresses

- How to map user happy paths with unpredictable inputs and outputs
- How to conduct usability testing with variable sessions
- How to identify unhappy paths and potential failures
- How to measure task success with subjective LLM responses
- How to design for unpredictable conversational flows

## Design Process for AI Features

### Before you design

[Define the opportunity](/handbook/product/ux/product-designer/#define-the-opportunity)  

During [problem validation](/handbook/product-development-flow/#validation-goals--outcomes), you should work closely with Product Managers to understand who you’re designing for, what you’re designing, and why you’re designing it.

For GenAI, the problem and solution space may be broader than usual. For example, when working on something like Duo Workflow or Duo Chat, the team may be tempted to say “the feature can assist with anything the user asks”. This approach will make it difficult to evaluate your solution later. You also run a risk of building a solution that does many things poorly, and nothing really well. 

Instead, use the following page to help you:

- Scope the problem space clearly
- Define what problems your solution will and won't solve
- Set measurable success criteria

#### AI Engagement Guidelines 

We recommend that designers create AI Engagement Guidelines before moving into the design phase. This is a framework proposed by [People + AI Research](https://pair.withgoogle.com/) at Google that we propose to use here. This framework provides a foundation for establishing alignment on AI related design and technical requirements. We have adapted the framework into our own Figjam template {tbd link}. 

Resource: [Interaction Design Policies: Design for the opportunity, not just the task.](https://medium.com/people-ai-research/interaction-design-policies-design-for-the-opportunity-not-just-the-task-239e7f294b29). 

By creating AI Engagement Guidelines, you define the target behavior (UX) of the model. Through discussions with your PM and dev team, you should clearly define what you expect the model to do, what it shouldn’t do, and where the system or user might fail. By establishing AI guidelines, you ensure stakeholders are aligned on model behavior and expected outputs. 

#### Map the user flow

User flow design for AI focuses not on predicting outputs but on creating consistent ways for users to interact with, shape, and recover from situations when AI fails them. When creating user flows, you are defining the happy path and unhappy paths. 

A happy path in generative AI design is when users can successfully achieve their goals through clear input, appropriate AI outputs, and minimal corrections, even though the exact inputs and outputs may vary with each interaction.

Happy path example: 
  User begins: "Analyze this long document for key insights"
  System tracks request count and shows clear usage meter
  Warning appears at 75% with "Save and Continue Later" option
  Progress auto-saves with completion timestamp
  Analysis resumes next day from saved point

An unhappy path occurs when AI interactions require user intervention to correct or recover from unexpected outputs. 

Unhappy path example:
  User begins: "Analyze this long document for key insights"
  System fails after hitting undisclosed rate limit
  Shows generic error: "Something went wrong"
  User loses all progress upon refresh
  User has to start over

Key failure points:
  No visibility into system limits
  Unclear error messaging
  Loss of user progress
  Forced restart of workflow

Since these moments are frequent in generative AI interactions due to output variability, designers should treat them as core flows rather than edge cases. Example of unhappy paths:

- Technical failures
- AI returns incorrect or incomplete responses
- System errors or timeouts
- Token limit issues
- Performance degradation
- User Behavior variations
- Unexpected queries 
  - Context switching mid-conversation (if designing for conversations)
  - Misunderstanding of AI capabilities (i.e. a user thinks Duo knows their codebase)
  - Complex queries that combine multiple intents (if designing for conversations)
  - Requests outside system capabilities (i.e. a user thinks Duo knows their codebase)

We're not designing for what the AI will say - we're designing for how users will work with whatever it says. These patterns are predictable and designable, even when the outputs aren't. 

User flow design for generative AI looks like this: 

- Map ideal flow first
  - Define the best-case scenario step by step
  - Include both user actions and system responses
  - Identify key success points
- Identify likely breakdown points
  - Where might the AI misunderstand?
  - When might system limits be hit?
  - What user expectations might not be met?
- Design recovery paths
  - How users get back on track
  - Clear error explanations
  - Alternative paths to success
- Build in feedback mechanisms
  - How users signal problems
  - Where system shows understanding
  - Ways to correct or refine

#### Define the ideal output

While generative AI outputs are non-deterministic (producing different results each time), defining ideal outputs is crucial for both prompt engineering and interaction design. With clear definitions of an ideal output, we streamline the UX for the user between generations. These definitions also shape how we instruct the model and design user interactions in the prompt.

Key elements to define

- Output structure
  - Length (character limits, paragraph count)
  - Format (JSON, markdown, plain text)
  - Structure (headers, sections, bullet points)
  - Style (formal, casual, technical)
- Content requirements
  - Essential information (core data points, key metrics)
  - Required data points, if any (technical specs, citations)
  - Level of detail required (summary vs in-depth)
  - Accuracy needs (fact-checking, validation)

Example: You’re building an automated API documentation generator

- Length: Each endpoint described in <500 chars
- Format: OpenAPI specification in YAML
- Structure: Standardized sections for endpoints, methods, parameters
- Style: Technical reference format with standardized terminology

While we can't predict exact outputs, defining these elements helps create consistent user experiences and better prompt engineering. Experiment with creating your ideal output using Claude, LangSmith, or locally.  {link to docs}

#### LLM Judge Evaluation

Additionally, begin to discuss with your team how you’ll evaluate the answers provided by the LLM. The team will eventually need a data set to use for LLM evaluations. It's best to work on the data set early, as it will force you to consider the types of prompts you expect to provide the LLM (or for users to provide the LLM), along with acceptable answers. If the team cannot confidently produce at least a preliminary data set, then user research or other data mining can be used to help with this step. This step is a cross-functional step, ideally with input from all team members.

### During design

When designing the screen interactions, refer to [GitLab Duo patterns in Pajamas](https://design.gitlab.com/usability/ai-human-interaction/). 

There are many other great interaction design resources for AI. One we like is [Shape of AI](https://www.shapeof.ai/).

### During solution validation

As with any project, you’ll want to ask yourself how confident you are in your solution and if you aren’t very confident, validate your solution with users before committing to development. You will want to select a validation method that works best for your research questions.

Generative AI solution validation has two distinct testing possibilities: 

- low-fidelity or static Figma prototypes (highly moderated) 
- interactive LLM prototypes (preferably unmoderated)

#### If you are using a low-fidelity (Figma) prototype

Most solution validation will be in the form of low-fidelity prototypes until prototyping tooling is built out. This should occur earlier in the process. 

Starting with moderated testing gives you the ability to understand where the user will interact with the solution in the context of your workflow. It will also help you test assumptions about how you expect them to interact with the LLM. Mock up the solution in a Figma prototype that shows the happy path (and predetermined outputs).

During your session, aim to understand the user’s current workflow before showing any designs. Once you understand their workflow, show them a Figma prototype for the solution. 

A reminder that LLMs are interactive tools controlled by language and offer multiple paths for non-linear engagement. A Figma prototype is linear and will not offer the range of possibilities. You should be prepared to show multiple mock outputs that are an ideal of your expected generated response.

Since Figma prototypes are not generating responses to user queries, you’ll need to have participants think out loud about their intended queries and expected responses before showing them the results from a button or predetermined output. After showing an output, spend time discussing the output and the reaction to it to determine if it is meeting expectations. 

For example, instead of saying “Let’s assume you write summarize issue” and asking for feedback on a result, keep the questions open ended and user led. Ask the participant “What would you type in this field?” "Why?” Then, show them a result. Then ask for feedback on your mock output.  “What do you think of this response?” and “What would you expect from what you typed?”

Throughout the conversation, carefully observe where users desire control, express trust concerns, or want to edit AI outputs, as these are critical friction points in AI interfaces. 

Always conclude sessions by asking about likelihood of adoption and potential dealbreakers, as users might provide positive feedback throughout but reveal critical adoption barriers in their final assessment.

These sessions will likely result in tweaks to the prompt to improve outputs and better meet user behaviors. 

#### If you are validating a solution and you have an interactive LLM prototype 

or feature that users can test live and provide feedback, unmoderated testing is ideal. Define the task you’d like the user to complete and always record the session. 

During unmoderated sessions, pay attention to:
 
- User mental models
  - How users frame their requests
  - When they expect AI to understand context
  - Where they assume capabilities that don't exist
  - How they recover from misunderstandings
- Interaction patterns
  - Natural vs. prompted inputs
  - Response to different AI output styles
  - When users abandon and restart
  - How they handle variable outputs
- Trust signals
  - Points where users verify information
  - When they question AI responses
  - How they build confidence in the system
  - What causes trust breakdown
- Task completion
  - Whether users achieve their goals
  - If they find alternate paths to success
  - When they need human intervention
  - How they combine AI with other tools
- Recovery behaviors
  - What users do when AI fails
  - How they rephrase or retry
  - When they give up entirely
  - Ways they work around limitations

### Guidance for MR Reviews or UX Scorecards

There are many times you'll test your workflows live, whether you are doing an MR Review or a UX Scorecard

UX testing ensures designers identify any potential issues that evaluation might miss. The focus on UX testing isn't on the model's accuracy but on how well the model and interface handles different inputs, failures, and edge cases. 

- UX testing 
  - Focuses on how to interact with the interface
  - Tests specific features, workflows, happy pathes, unhappy paths
  - Identifies usability issues and friction points
  - Helps refine interaction patterns
- LLM Evaluation
  - Assesses AI system performance and outputs
  - Measures accuracy and usefulness of responses
  - Checks for biases and errors
  - Validates against business requirements
  - Helps improve model behavior

UX testing helps stakeholders better understanding user behaviors, strategies, and mental models for navigating AI interactions. 

For example, where the LLM Evaluation might measure if an AI properly refactored a function to be more efficient, UX testing examines how developers iteratively describe their refactoring goals, interpret suggested code changes, handle merge conflicts, and learn to trust or verify the AI's recommendations.

To to UX testing for a new generative AI feature, return to the data set created at the beginning of the project. You will use that data set to test the performnace of the solution. If you are testing a conversational feature, you'll need to ask followup questions related to the data set to ensure the model retains proper context and answers properly.  

UX testing should include testing happy paths and unhappy paths. 

- Try various inputs from the data set
- Map happy and unhappy paths
- Document usability issues
- Identify friction points

Test edge cases:

- Empty or minimal inputs
- Extremely long inputs
- Special characters/formatting
- Rate limit boundaries
- System errors/timeouts
- Multiple rapid requests
- Context switching (for conversational solutions)
- Incomplete queries
  
Example of UX testing flow with dataset:

- Input test prompt
- Review AI response
- Note interaction patterns
- Ask followup questions if testing a conversational solution
- Test error scenarios
- Document recovery paths

### Links and Resources

- [UX Forum presentation on this framework](https://www.youtube.com/watch?v=wM8726uQoW4)
- [AI-human interaction in Pajamas](https://design.gitlab.com/usability/ai-human-interaction): Documentation on best practices for AI-human interaction.
- [AI Integration Effort FAQ](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/faq/): Internal handbook with frequently asked questions about AI integration efforts. **Internal handbook 🔒**
- [UX maturity requirements](../../ai/ux-maturity.md): Documentation on the UX maturity requirements to move AI features from Experiment to Beta to Generally Available (GA).
- [Experiment, Beta, and Generally Available features](https://docs.gitlab.com/policy/development_stages_support/): Guidelines on the different stages of feature availability.
- [UX research in the AI space](../ux-research/research-in-the-ai-space/index.md): Documentation on conducting UX research in the AI domain.
