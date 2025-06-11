---
title: Data flow GitLab vs. multiple applications
description: "About the data flow in GitLab"
---

How does having one application vs many applications impact workflow?

The data flows below are based on the experience of one enterprise customer who switched from multiple DevOps tools to GitLab.

The source data can be found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1yui5UYY46HQ-KcwTCZ-8OXXQylBpxvEYk_QZW3qabAk/edit#gid=0).

## GitLab

```mermaid
graph TB
    Developer1(1. Developer<br>Develops & Tests)
    App1[App]
    TestEnv1([Test<br>Environment])
    App1 -- 5. Deploy --> TestEnv1
    TestEnv1 -- 8.Verify application --> Developer1

    Developer2(2. Developer Deploys)
    ProdEnv1([Production<br>Environment])
    App2[App]
    App2 --> ProdEnv1

    Developer3(3. Developer Maintains)
    ProdEnv2([Production<br>Environment])

  GitLab[GitLab]

  Developer1 -- 1. Login<br>View Issue --> GitLab
  Developer1 -- 2. Change Code<br>Submit MR --> GitLab
  GitLab -- 3. Build App --> App1
  GitLab -- 4. Deploy --> TestEnv1
  GitLab -- 5. Run quality tests --> TestEnv1
  GitLab -- 6. Run security tests --> TestEnv1

  Developer2 -- 1. Deploy --> GitLab
  Developer2 -- 2. Mark issue<br>as fixed --> GitLab
  TestEnv1 -- Promote --> App2

  ProdEnv2 -- 1. Application Logs --> GitLab
  ProdEnv2 -- 2. Application Metrics --> GitLab
  Developer3 -- 3. Review Logs --> GitLab

  classDef default fill:#FFFFFF,stroke:#0C7CBA;
  %%class GitLab,Developer test
```

## Multiple DevOps Tools

``` mermaid

graph TB

DeveloperMain(Developer)

    AppD(App)
    SourceControlD(Source Control)
    CIToolD(CI Tool)
    CDToolD(CD Tool)
    TestEnvD(Test Env)
    IssueTrackerD(Issue Tracker)
    DeveloperD(Developer)
    DeveloperD -- 1. Login --> IssueTrackerD
    DeveloperD -- 2. View Issue --> IssueTrackerD
    DeveloperD -- 3. Login --> SourceControlD
    DeveloperD -- 4. View Issue --> SourceControlD
    DeveloperD -- 5. Login --> CIToolD
    DeveloperD -- 6. Submit MR --> CIToolD
    SourceControlD --> CIToolD
    CIToolD -- 7. Build --> AppD
    DeveloperD -- 8. Login --> CDToolD
    DeveloperD -- 9. Deploy --> CDToolD
    CDToolD -- 11. Deploy --> TestEnvD
    AppD --10. Pull --> CDToolD
    TestEnvD -- 12. Verify --> DeveloperD

SecEngMain(Security Eng)

SecEngMain--> SecEngT
SecEngMain --> SecEngD

DeveloperMain --1. Develop -->DeveloperD
DeveloperMain --2. Test -->DeveloperT

  DeveloperT(Developer)
  TestToolT(Test Tool)
  SAST(SAST Tool)
  SecretScan(Secret Scan)
  DependencyScan(Dependency Scan)
  SecEngT(Security Eng)
  TestResults(Test Results)
  QualityTeamT(Quality Team)
  DeveloperT --1. Login & Run Tests --> TestToolT
  TestToolT --> TestResults
  SAST --> TestResults
  SecretScan --> TestResults
  DAST --> TestResults
  DependencyScan --> TestResults
  DeveloperT -- 2. Login & Run Tests --> SAST
  DeveloperT -- 3. Login & Run Tests --> SecretScan
  DeveloperT -- 4. Login & Run Tests --> DependencyScan
  DeveloperT -- 5. RequestDAST Scan--> SecEngT
  SecEngT -- 6.  Login & Run Tests --> DAST
  TestResults -- 7. Review Results --> DeveloperT
  TestToolT --> SAST
  SAST --> SecretScan
  SecretScan --> DependencyScan
  DependencyScan --> DAST
  TestToolT -- 8. Review results --> QualityTeamT

DeveloperMain --3. Deploy --> DeveloperDep

  DeveloperDep(Developer)
  QualityTeamDep(Quality Team)
  ProdOpsD(Production Ops)
  SecEngD(Security Eng)
  CDTool(CD Tool)
  ProdEnv(Prod Env)
  IssueTrackerDep(Issue Tracker)
  DeveloperDep -- 1. Request Approval --> QualityTeamDep
  QualityTeamDep --2. Approval --> SecEngD
  SecEngD -- 3. Approval --> ProdOpsD
  ProdOpsD -- 4. Login and Deploy --> CDTool
  CDTool --5. Deploy --> ProdEnv
  ProdOpsD --6. Complete --> DeveloperDep
  DeveloperDep -- 7.  Close issue --> IssueTrackerDep

DeveloperMain -- 4. Maintain -->DeveloperM
QualityTeamMain(QualityTeam)
QualityTeamMain --> QualityTeamT
QualityTeamMain --> QualityTeamDep
ProdOpsMain(Production Ops)
ProdOpsMain --> ProdOpsD
ProdOpsMain --> ProdOpsMaintain

  DeveloperM(Developer)
  ProdEnvM(Prod Env)
  LogApp(Log App)
  MetricsApp(Metrics App)
  ProdOpsMaintain(Production Ops)
  ProdEnvM --1 . Logs --> LogApp
  LogApp --2. Metrics --> MetricsApp
  DeveloperM -- 3. Login & View--> LogApp
  DeveloperM --4. Login & View --> MetricsApp
  ProdOpsMaintain -- 3. Login & View--> LogApp
  ProdOpsMaintain --4. Login & View --> MetricsApp

  classDef default fill:#FFFFFF,stroke:#0C7CBA;
  %%class GitLab,Developer test
```
