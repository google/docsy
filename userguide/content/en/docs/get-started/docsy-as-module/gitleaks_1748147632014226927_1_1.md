---
title: "gitleaks on your laptop"
---

## gitleaks on your laptop

If you ended up on this handbook page it's probably because you have been
pointed here during a `git commit` by our [gitleaks installation](https://gitlab.com/gitlab-com/gl-security/security-research/gitleaks-endpoint-installer)
on your local machine. The tool [`gitleaks`](https://github.com/gitleaks/gitleaks) is being used
on GitLab endpoints to prevent a common security issue, namely accidental commits of secrets like Personal Access Token or other credentials
to public repositories. It is important that all repositories are covered as a leaked access token in one repository can impact all repositories and projects to which your account has access.

## What did just happen?

`gitleaks` detected that you tried to commit something which looks like a secret to a git repository. The output should look something like this:

```text
    ○
    │╲
    │ ○
    ○ ░
    ░    gitleaks

{
        "Description": "GitLab Personal Access Token",
        "StartLine": 7,
        "EndLine": 7,
        "StartColumn": 2,
        "EndColumn": 27,
        "Match": "REDACTED",
        "Secret": "REDACT",
        "File": "testfile",
        "Commit": "",
        "Entropy": 0,
        "Author": "",
        "Email": "",
        "Date": "0001-01-01T00:00:00Z",
        "Message": "",
        "Tags": [],
        "RuleID": "gitlab-pat"
}
9:27AM WRN leaks found: 1
9:27AM INF scan duration: 51.840347ms
```

The `Description` field will tell you what kind of secret `gitleaks` detected, you can verify this
by inspecting the file listed in the `File` field at `StartLine`.

## What should I do now?

It's never a good practice to store plain secrets within code repositories. You should remove the offending
secrets from the files you wanted to commit and find a safe place for them. If you're unsure what to do,
feel free to reach out in the [#security Slack channel](https://gitlab.slack.com/archives/C248YCNCW).

If you are absolutely sure the secret detected by `gitleaks` is a false positive and you want to commit
anyhow set the environment variable `I_WANT_GITLEAKS_SKIP` once for the commit to avoid the `gitleaks`
scan for this commit. This would look like so on the command line:

```sh
I_WANT_GITLEAKS_SKIP=1 git commit -m 'Commit a dummy secret'
```

Please do **not** set this variable permanently as it would subvert the protection
mechanism. Since version `8.5.0` there's also a [feature](https://github.com/gitleaks/gitleaks/pull/809) in `gitleaks` to
ignore dummy secrets by having `gitleaks:allow` in the same line with the secret.
