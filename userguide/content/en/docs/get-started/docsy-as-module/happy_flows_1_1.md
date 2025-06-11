# Sequence diagrams of the happy flow

## "Hello! What can you do?"

I am a user who is asking about the bots capabilities

### Find tasks from question
```mermaid
sequenceDiagram
    Frontend -->> Director: "Hello! What can you do?"
    Director -->> LLM: "Is this a processable question?"
    LLM -->> Director: "No, return this generic response"
    Director -->> Frontend: "I'm InferESG and can..."
```

## "What did I spend more on last month, Amazon or Netflix?"

I am a user who wants to know if last month I spent more on my Netflix subscription than my Amazon one

### Find tasks from question
```mermaid
sequenceDiagram
    Frontend -->> Director: "What did I spend more on last month, Amazon or Netflix?"
    Director -->> LLM: "Is this a processable question?"
    LLM -->> Director: "Yes"
    Director -->> TaskAgent: "Give me a list of tasks from this question"
    TaskAgent -->> LLM: "Split "What did I spend more on last month, Amazon or Netflix?" into up to 5 goals"
    LLM -->> TaskAgent: "1. get Amazon spending, 2. get Netflix spending, 3. find greater amount"
    TaskAgent -->> Director: "Returns tasks as array"
    Director -->> Supervisor: "Hello supervisor, solve these tasks for me (in order)"
```

### Solve step 1. get Amazon spending
```mermaid
sequenceDiagram
    Supervisor -->> Router: "Find the Agent I should assign 'get Amazon spending' task to"
    Router -->> LLM: "Determine which agent is best for this task"
    LLM -->> Router: "Use DatastoreAgent"
    Router -->> Supervisor: "Call DatastoreAgent with prompt 'get Amazon spending'"
    Supervisor -->> DatastoreAgent: "Find the answer to the following: 'get Amazon spending'"
    DatastoreAgent -->> LLM: "Function call: identify methods"
    LLM -->> DatastoreAgent: "Use getSubscriptionTotalForLastXDays('Amazon', 31)"
    DatastoreAgent -->> Neo4J: "Cypher query for Amazon spending in 31 days"
    Neo4J -->> DatastoreAgent: "£65.15"
    DatastoreAgent -->> Supervisor: "method: getSubscriptionTotalForLastXDays('Amazon', 31), result: £65.15"
```

### Solve step 2. get Netflix spending
```mermaid
sequenceDiagram
    Supervisor -->> Router: "Find the Agent I should assign 'get Netflix spending' task to"
    Router -->> LLM: "Determine which agent is best for this task"
    LLM -->> Router: "Use DatastoreAgent"
    Router -->> Supervisor: "Call DatastoreAgent with prompt 'get Netflix spending'"
    Supervisor -->> DatastoreAgent: "Find the answer to the following: 'get Netflix spending'"
    DatastoreAgent -->> LLM: "Function call: identify methods"
    LLM -->> DatastoreAgent: "Use getSubscriptionTotalForLastXDays('Netflix', 31)"
    DatastoreAgent -->> Neo4J: "Cypher query for Netflix spending in 31 days"
    Neo4J -->> DatastoreAgent: "£12.99"
    DatastoreAgent -->> Supervisor: "method: getSubscriptionTotalForLastXDays('Netflix', 31), result: £12.99"
```

### Solve step 3. find greater amount
```mermaid
sequenceDiagram
    Supervisor -->> Router: "Find the Agent I should assign 'find greater amount' task to"
    Router -->> LLM: "Next best step prompt"
    LLM -->> Router: "ComparerTool"
    Router -->> Supervisor: "Use ComparerTool.compare('Amazon: £65.15', 'Netflix: £12.99')"
    Supervisor -->> ComparerTool: ComparerTool.compare('Amazon: £65.15', 'Netflix: £12.99')
    ComparerTool -->> Supervisor: "Amazon £65.15 is greater than Netflix £12.99 by £52.16"
```

### Verify we are done
```mermaid
sequenceDiagram
    Supervisor -->> Router: "Find the next best step"
    Router -->> LLM: "Next best step prompt"
    LLM -->> Router: "All tasks complete"
    Router -->> Supervisor: "Tasks complete - return answer to user"
    Supervisor -->> Director: "Answer is 'Amazon £65.15 is greater than Netflix £12.99 by £52.16'"
    Director -->> Frontend: "response.body - 'Amazon £65.15 is greater than Netflix £12.99 by £52.16'"
```
