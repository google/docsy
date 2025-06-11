---

title: Airflow Single-Engineer Group
---







## About the Airflow SEG

### Latest video

<figure class="video_container">
    <iframe width="600" height="340" src="https://www.youtube.com/embed?max-results=1&controls=1&showinfo=0&rel=0&listType=playlist&list=PL05JrBw4t0Kpa5s72EQ4f6vVQ-2E7CsB_" frameborder="0" allowfullscreen></iframe>
</figure>

### Previous 5 videos

| Date       | Tl;DW;                                                    | Video                                                                          |
|------------|-----------------------------------------------------------|--------------------------------------------------------------------------------|
| 2023-01-12 | DAG overview page is now pretty                           | [https://youtu.be/E3_YGF7Wr2k](https://youtu.be/E3_YGF7Wr2k){:target="_blank"} |
| 2023-01-05 | Developed the first Airflow page with an overview of Dags | [https://youtu.be/oFs4OsHZfRw](https://youtu.be/oFs4OsHZfRw){:target="_blank"} |
| 2022-12-21 | First video that started this SEG                         | [https://youtu.be/Jrjp6_rdDo4](https://youtu.be/Jrjp6_rdDo4){:target="_blank"} |

## Apache Airflow

Airflow is the de facto tool for data teams to schedule and execute ELT pipelines, Machine Learning pipelines,
DevOps tasks and really any task that requires scheduling. Its cronjob turned up to 11.

According to Airflow themselves:
> Airflow is a platform created by the community to programmatically author, schedule and monitor workflows

_Source: https://airflow.apache.org_

A workflow is also called a Directed Acyclic Graph
([DAG](https://airflow.apache.org/docs/apache-airflow/stable/concepts/dags.html)) in Airflow, a DAG contains
[tasks](https://airflow.apache.org/docs/apache-airflow/stable/concepts/tasks.html) which utilize
[operators](https://airflow.apache.org/docs/apache-airflow/stable/concepts/operators.html).

## Typical workflow of developing DAGs

A typical development workflow looks like:

1. User locally creates or updates a DAG
1. Push code to Git
1. Pipeline deploys the DAG to a non-production Airflow instance
1. User visits the Airflow webserver to inspect and run the DAG
1. If the pipeline succeeds the DAG will via merge requests make its way to production

## Common challenges

Below are some common challenges related to Airflow, in no particular order:

1. Airflow is single-tenant. In development, users are overwriting each others DAGs if they deploy to the same instance
1. Airflow is quite difficult to set up properly for a production environment
1. Developing DAGs is often very iterative
1. It's difficult to spot bugs in a DAG during code review without actually deploying it to an Airflow instance

## GitLab integration

Below are a few of the initial options to integrate GitLab and Airflow:

1. Integration of the DAG overview into GitLab
1. GitLab as authentication provider for Airflow
1. Using GitLab runners as compute for Airflow
1. Using preview apps to create an instance of Airflow per MR to ease the code review process
1. Provision an Airflow instance directly from GitLab
