## Create a new release

This projects leverages GitHub Actions to automate the release process.

It uses [release.yml](https://github.com/juruen/rmapi/blob/master/.github/workflows/release.yml)
to automatically build a new release and upload its assets when a new tag starting with `v`
is pushed to the repository.

The assets are:

- Source code
- Linux binary
- MacOS binary
- Windows binary

For now, the process to create a release is to execute:

```sh
script/prepare-release.sh 0.0.3
```

where `0.0.3` is an example of a new release version that needs to be replaced with the actual version.

This script changes a few files to update  the new version. It also creates the corresponding tag and outputs
the two `git` commands that need to be executed.

This scripts needs `gnu-sed` if you are running it from OSX.

Once those two commands are run, you should see a new workflow triggered in the `Actions` tab, and eventually,
the new release should show up in the `releases` sections  with its corresponding assests.
