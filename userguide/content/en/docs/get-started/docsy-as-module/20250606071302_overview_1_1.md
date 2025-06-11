# Overview of workings

```mermaid
sequenceDiagram
    box Frontend
    participant UI
    end
    box Main backend logic
    participant Director
    participant Supervisor
    participant Router
    participant (Name)Agent
    participant TaskAgent
    end
    UI -->> Director: pass utterance
    Director -->> TaskAgent: request list of tasks
    TaskAgent -->> Director: tasks as array
    Director -->> Supervisor: solve all tasks
    loop Resolve task
        Supervisor -->> Router: find Agent
        Router -->> (Name)Agent: solve task
        (Name)Agent -->> Supervisor: task solution
    end
    Supervisor -->> Director: return answer
    Director -->> UI: serve user answer
```