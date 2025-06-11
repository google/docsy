# "What did I spend more on last month, Amazon or Netflix?"

I am a user who wants to know if last month I spent more on my Netflix subscription than my Amazon one

### Find tasks from question

```mermaid
sequenceDiagram
    box Frontend
    participant UI
    end
    box Main backend logic
    participant Director
    participant Supervisor
    participant Router
    end
    box Agents and Tools
    participant TaskAgent
    participant DatastoreAgent
    participant ComparerTool
    end
    box Databases
    participant Neo4J
    end
    UI -->> Director: pass utterance
    Director -->> TaskAgent: Request list of tasks
    TaskAgent -->> Director: tasks as array
    Director -->> Supervisor: solve all tasks
    Supervisor -->> Router: Find 'get Amazon spending' Agent
    Router -->> DatastoreAgent: solve 'get Amazon spending'
    DatastoreAgent -->> Neo4J: get spending
    Neo4J -->> DatastoreAgent: £65.15
    DatastoreAgent -->> Supervisor: result: £65.15
    Supervisor -->> Router: Find 'get Netflix spending' Agent
    Router -->> DatastoreAgent: solve 'get Netflix spending'
    DatastoreAgent -->> Neo4J: get spending
    Neo4J -->> DatastoreAgent: £12.99
    DatastoreAgent -->> Supervisor: result: £12.99
    Supervisor -->> Router: Find 'find greater amount' Agent
    Router -->> ComparerTool: compare values
    ComparerTool -->> Supervisor: result: 'Amazon > Netflix'
    Supervisor -->> Router: Find the next best step
    Router -->> Supervisor: All tasks complete
    Supervisor -->> Director: Answer is Amazon
    Director -->> UI: 'Amazon > Netflix'
```
