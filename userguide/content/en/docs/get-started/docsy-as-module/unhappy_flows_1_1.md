# Sequence diagrams of the unhappy flows

>## Notes - to be removed
>What looping do we want in the failure cases:
>- Should director go back to task agent and ask for a different task breakdown?
>- Should the router try and look for an agent again?
>- Should the router continue and try its best to solve the remaining tasks and >let the director know which tasks it couldn't solve?

The below assume no looping for error cases:

## "Router unable to find agent to solve task"
```mermaid
sequenceDiagram
    Router -->> LLM: "Determine which agent is best for this task"
    LLM -->> Router: "No suitable agent found"
    Router -->> Supervisor: "No more available agents, task failed"
    Supervisor -->> Director: "Unable to solve task: 'task_description'"
    Director -->> frontend: "I'm sorry, I was unable to solve that task"
```

## "Router choses agent, unable to solve task, no more agents"
```mermaid
sequenceDiagram
    Router -->> LLM: "Determine which agent is best for this task"
    LLM -->> Router: "Use DatastoreAgent"
    Router -->> Supervisor: "Call DatastoreAgent with prompt 'get Amazon spending'"
    Supervisor -->> DatastoreAgent: "Find the answer to the following: 'get Amazon spending'"
    DatastoreAgent -->> LLM: "Function call: identify methods"
    LLM -->> DatastoreAgent: "No appropriate method found"
    DatastoreAgent -->> Supervisor: "I cannot solve this task"
    Supervisor -->> Router: "Agent failed, try again"
    Router -->> Supervisor: "No more available agents, task failed"
    Supervisor -->> Director: "Unable to solve task: 'task_description'"
    Director -->> frontend: "I'm sorry, I was unable to solve that task"
```
