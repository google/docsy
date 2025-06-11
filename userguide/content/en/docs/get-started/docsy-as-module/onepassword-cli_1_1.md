---
title: "1Password and Environment Variables"
description: "Secure secrets handling for local development"
---

Secrets used on laptops need to be stored and used securely. The reasons for
this and basic concepts are discussed
on the [1Password page]({{< ref "../security/password-guidelines" >}}).
It's recommended to read that first if you haven't done so yet.
This page covers user-friendly ways to integrate these basic principles into your workflow.

### Standard command settings with aliases

Using an alias works well where a single, specific command should always use a
single, specific set of secrets.

For example, you can define an alias in your shell profile to invoke `glab` with your PAT:

```sh
alias glab="op run --env-file=$HOME/.gitlab-pat.env -- glab"
```

To verify the configuration, run `glab api version`. This should print
the version of gitlab.com if the configuration succeeded.

```sh
glab api version
{"version":"15.4.0-pre","revision":"3e84f577d51"}
```

### Multi-environment usage with .bashrc

If you have a number of environments that you use frequently you can create functions to easily load secrets for the correct environment.

One example of this is below. It adds a 'loadenv' command to bash which automatically starts a subshell containing all the relevant environment variables,
assuming the current directory is a git repository and an environment variable with a matching name is available in $HOME/devenv/envfiles.
The modified $PS1 checks for the presence of the 'ENVFILE' variable, and if it exists displays it in the shell prompt to show what environment file is loaded in this shell.

```shell
# Base PS1 + add ($ENVFILE) in red if set
export PS1='\[\e]0;\u@\h: \w\a\]${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]$([ -n "$ENVFILE" ] && echo -n " \e[91m($ENVFILE)\e[0m")\$ '

alias project="git remote get-url origin | sed -e 's/^.*\///g' | sed -e 's/\.git$//g'"
# Environment file load
loadenv() {
  ENVFILE=$(project) op run --env-file="$HOME/devenv/envfiles/$(project).env" --no-masking -- /bin/bash
}
```

When added to .bashrc and sourced, it can then be used to run commands like this:

```shell
username@my-laptop:~/code$ cd example-project
username@my-laptop:~/code/example-project$ loadenv
username@my-laptop:~/code/example-project (example-project)$ curl -X POST --form token=$PIPELINE_TOKEN --form ref=main https://gitlab.com/api/v4/projects/example-project/trigger/pipeline
{"id":1252595607,"iid":12960,...long output removed...
```

Then, once the secrets are no longer needed, you can exit the subshell and this
will be visible in the prompt.

```shell
username@my-laptop:~/code/example-project (example-project)$ exit
exit
username@my-laptop:~/code/example-project$
```

This allows maintaining a set of standard variables for a given git repository, regardless of the exact command(s) being run.
