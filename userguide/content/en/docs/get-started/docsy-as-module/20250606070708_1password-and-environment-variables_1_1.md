---
title: 1Password And Environment Variables
doc_type: doc
doc_id: doc-056
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

<!-- Unsupported block type: image -->

Secure secrets handling for local development

Secrets used on laptops need to be stored and used securely. The reasons for this and basic concepts are discussed on the 1Password page. It’s recommended to read that first if you haven’t done so yet. This page covers user-friendly ways to integrate these basic principles into your workflow.

### Standard command settings with aliases

Using an alias works well where a single, specific command should always use a single, specific set of secrets.

For example, you can define an alias in your shell profile to invoke glab with your PAT:

<!-- Unsupported block type: code -->

To verify the configuration, run glab api version. This should print the version of gitlab.com if the configuration succeeded.

<!-- Unsupported block type: code -->

### Multi-environment usage with .bashrc

If you have a number of environments that you use frequently you can create functions to easily load secrets for the correct environment.

One example of this is below. It adds a ’loadenv’ command to bash which automatically starts a subshell containing all the relevant environment variables, assuming the current directory is a git repository and an environment variable with a matching name is available in $HOME/devenv/envfiles. The modified $PS1 checks for the presence of the ‘ENVFILE’ variable, and if it exists displays it in the shell prompt to show what environment file is loaded in this shell.

<!-- Unsupported block type: code -->

When added to .bashrc and sourced, it can then be used to run commands like this:

Then, once the secrets are no longer needed, you can exit the subshell and this will be visible in the prompt.

This allows maintaining a set of standard variables for a given git repository, regardless of the exact command(s) being run.
