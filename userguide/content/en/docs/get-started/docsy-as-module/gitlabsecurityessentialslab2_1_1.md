---
title: "GitLab Security Essentials - Hands-On Lab: Addressing Vulnerabilities"
description: "This Hands-On Guide walks you through how to triage and respond vulnerabilities in your application"
---

> Estimated time to complete: 15 minutes

In the last lab, you introduced the SAST and Secret Detection scanners into your project. In this lab, we will explore methods to triage and resolve vulnerabilities.

## Task A. Vulnerability Triage Process

1. Navigate to your Security Labs project. 

1. In the left sidebar, select **Secure > Vulnerability Report**.

To start your triage process, it is recommended to sort your vulnerabilities by severity, focusing on vulnerabilities that have not yet been triaged. 

1. In the security report, select **Severity** to change the sort order. Ensure that the arrow is pointing down so that severity is sorted from highest to lowest. 

1. Select the top severity vulnerability, **GitLab Personal Access Token**.

1. Review the vulnerability. You will see that the finding is valid, containing a GitLab API token.

1. In the top right corner, set **Status** to **Confirmed**.

1. Select **Create issue**.

1. You will see that the issue automatically populates the vulnerability title and details. Review the issue details, then select **Create issue**.

1. Return to **Secure > Vulnerability Report**.

1. Select the next vulnerability: **Improper neutralization of special elements used in a SQL command**.

1. Select the **Code flow** tab.

1. Review the code flow to see how the vulnerability occurs. Set the **Status** to **Confirmed**.

1. Select the **Details** tab.

1. Select **Create issue**.

1. Review the issue and select **Create issue**.

At this point, we've created two issues to address as security issues in our application. Let's review the process for fixing these vulnerabilities. 

## Task B. Fixing Vulnerabilities

1. Navigate to **Plan > Issues**.

1. Select the issue titled **GitLab Personal Access Token**.

1. Select the code location: `main.py:5`.

1. Select **Edit > Open in Web IDE**.

1. Select the `main.py` file.

1. Delete the line of code:

    ```python
    app.config['SECRET_KEY'] = 'glpat-Li5iWgSuUmDXNShPsozE'
    ```

    > In a real scenario, you will also need to rotate this key. Deleting the line of code only removes it from the current code, but the secret may still be contained in the Git history and should be considered compromised.

1. In the left sidebar, select the **Source Control** icon.

1. Click **Create a new branch and commit**.

1. Press **Enter** to take the default branch name.

1. Select **Create MR** in the bottom right of the screen.

1. Select **Create merge request**.

1. Wait for the pipeline in the merge request to complete. Refresh the page once completed to view the **Security Report**.

1. Review the findings. You should no longer see the **GitLab Personal Token** issue in the security list. 

1. Select **Merge** to merge the security updates.

1. Try out solving the SQL injection vulnerability on your own!

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials).

## Suggestions?

If you'd like to suggest changes to the *GitLab Security Essentials Hands-On Guide*, please submit them via merge request.
