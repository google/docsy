---
title: US Government Support exceptions
description: Operations workflow for enabling/disabling US Government Support exceptions
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/us-government-exceptions"
---

## Which organizations sync to the US Government instance by default?

As the exact conditions of this can change at any time, it is best to refer to our documentation page on the ZD-SFDC sync and the SOQL query documented within.

## Adding the exception

When a request is made via the Support Super Form, a series of checks are performed:

- Does the provided requester email correlate to a gitlab.com account?
- Does the requester have a Zendesk US Government agent account?
- Does the SFDC account provided correlate to an actual SFDC account?
- Does the SFDC opportunity provided correlate to an actual SFDC opportunity?
- Does the SFDC account already have the exception?
- Does the SFDC Account have the US Government SKU present on it?

If all checks pass, an issue is created. From here, your task is to add the exception onto the Salesforce account.

To do so, you will navigate to the [Swap US Gov Support Exception project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/swap-us-gov-support-exception) and do the following:

1. Navigate to the project's [pipelines page](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/swap-us-gov-support-exception/-/pipelines)
1. Click `New pipeline` at the top-right of the page
1. Add two variables under the `Variables` section:
   1. Type: `Variable`, Input variable key: `ACCOUNT_ID`, Input variable value: The SFDC Account's ID
   1. Type: `Variable`, Input variable key: `ISSUE_IID`, Input variable value: The ID of the issue you are working
1. Click `New pipeline`

From here, a pipeline is created. Monitor the pipeline to ensure it succeeds correctly.

If you encounter any issues, please notify the Fullstack Engineer so it can be looked into and resolved.

## Removing the exception

When a request is made via the Support Super Form, a series of checks are performed:

- Does the provided requester email correlate to a gitlab.com account?
- Does the requester have a Zendesk US Government agent account?
- Does the SFDC account provided correlate to an actual SFDC account?
- Does the SFDC account have the exception?

If all checks pass, an issue is created. From here, your task is to add the exception onto the Salesforce account.

To do so, you will navigate to the [Swap US Gov Support Exception project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/swap-us-gov-support-exception) and do the following:

1. Navigate to the project's [pipelines page](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/swap-us-gov-support-exception/-/pipelines)
1. Click `New pipeline` at the top-right of the page
1. Add two variables under the `Variables` section:
   1. Type: `Variable`, Input variable key: `ACCOUNT_ID`, Input variable value: The SFDC Account's ID
   1. Type: `Variable`, Input variable key: `ISSUE_IID`, Input variable value: The ID of the issue you are working
1. Click `New pipeline`

From here, a pipeline is created. Monitor the pipeline to ensure it succeeds correctly.

If you encounter any issues, please notify the Fullstack Engineer so it can be looked into and resolved.

## Doing this manually

{{< alert title=Note color=danger >}}

This is informational only. This should never be done manually unless an unrecoverable failure has occurred.

{{< /alert >}}

1. Create a file named `swap_support_instance_in_sfdc`

   ```bash
   touch swap_support_instance_in_sfdc
   ```

1. Make it executable

   ```bash
   chhmod +x swap_support_instance_in_sfdc
   ```

1. Put the following contents into the file:

   ```ruby
   #!/usr/bin/env ruby

   require 'support_readiness'

   salesforce_config = Readiness::Salesforce::Configuration.new
   salesforce_config.api_version = '58.0'
   salesforce_config.client_id = ENV.fetch('SFDC_CLIENTID')
   salesforce_config.client_secret = ENV.fetch('SFDC_CLIENTSECRET')
   salesforce_config.password = ENV.fetch('SFDC_PASSWORD')
   salesforce_config.security_token = ENV.fetch('SFDC_SECURITYTOKEN')
   salesforce_config.username = ENV.fetch('SFDC_USERNAME')
   salesforce_client = Readiness::Salesforce::Client.new(salesforce_config)

   account_id = ARGV.first

   query_string = "SELECT Name, Support_Instance__c FROM Account WHERE Id = '#{account_id}'"
   query = Readiness::Salesforce::Queries.new(query_string)
   results = Readiness::Salesforce::Queries.run!(salesforce_client, query)

   new_instance = if results.first.Support_Instance__c == 'federal-support'
                    'gitlab'
                  elsif results.first.Support_Instance__c == 'gitlab'
                    'federal-support'
                  else
                    raise "ERROR: Unknown current instance of '#{results.first.Support_Instance__c}'"
                  end

   puts "Run info\n"
   puts "- Id:   #{account_id}"
   puts "- Name: #{results.first.Name}"
   puts "  - Current value: #{results.first.Support_Instance__c}"
   puts "  - New value:     #{new_instance}\n"

   print "Updating to #{new_instance}..."
   Readiness::Salesforce::Client.update!(
     salesforce_client,
     account_id,
     Support_Instance__c: new_instance
   )
   puts 'done'
   ```

1. Run the script

   ```bash
   ./swap_support_instance_in_sfdc ABC123DEF456GHI789
   ```

Output should look like this:

```bash
jason@laptop:~$ ./swap_support_instance_in_sfdc ABC123DEF456GHI789
Run info
- Id:   ABC123DEF456GHI789
- Name: Test Account
  - Current value: gitlab
  - New value:     federal-support
Updating to federal-support...done
```

Manually update the issue with the results.
