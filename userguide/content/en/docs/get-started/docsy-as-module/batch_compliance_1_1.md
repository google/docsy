These batch compliance endpoints allow you to upload large datasets of Tweet or user IDs to retrieve their compliance status in order to determine what data requires action in order to bring your datasets into compliance. Please note, use of the batch compliance endpoints is restricted to aforementioned use cases, and any other purpose is prohibited and may result in enforcement action.

You can get more information at [batch compliance docs](https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/introduction).

Typically, there are 4 steps involved in working with this endpoint:

## Create a compliance job

```python
api.create_compliance_job(job_type="users", name="test-job")
# ComplianceJob(id='1430902035449143303', type='users', status='created')
```

## Upload your dataset to the upload_url

Next, you upload your dataset as a plain text file to the provided upload_url, with each line of the file containing a single Tweet ID or user ID. The upload_url expires after 15 minutes.

## Check the job status

You can check the status of your compliance job to see whether it is created, in_progress, failed or complete.

```python
api.get_compliance_job("1430902035449143303")
# Response(data=ComplianceJob(id='1430902035449143303', type='users', status='expired'))
```

## Download the result

When your job is complete, you can download the results using the download_url. The download_url expires after one week (from when the job was created).


## Get jobs info
```python
api.get_compliance_jobs(job_type="users")
# Response(data=[ComplianceJob(id='1430902035449143303', type='users', status='expired'), ComplianceJob(id='1430919027786797056', type='users', status='created')])
```