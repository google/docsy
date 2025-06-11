---
title: "GitLab with Git Essentials - Hands-on Lab: Work With Git Locally"
description: "This Hands-on Guide walks you through using Git commands to work with both a remote and local repository."
---

> Estimated time to complete: 45 minutes

## Objectives

In this lab you will practice using a repository on your local computer and learning about the following concepts:

- cloning a repository
- creating, using, and merging a branch
- editing and committing a file
- pushing and pulling changes to and from a remote repository.

Please take time to understand any code that you are asked to copy and paste in any lab. Ask your instructor to explain any code that’s not clear.

> Many of the Git commands used in this lab are summarized in GitLab’s helpful [git cheat sheet](https://about.gitlab.com/images/press/git-cheat-sheet.pdf). This lab will require you to be able to use your local computer to have SSH access to the internet. Please make sure your machine has the required permissions.

## Task A. Verify that Git is installed locally

1. Open a terminal on your computer and type this command:

   ```bash
   git version
   ```

1. If the output prints a version number, Git is installed. If the command throws an error, see the [documentation](https://docs.gitlab.com/ee/topics/git/how_to_install_git/) for installing Git.

## Task B. Generate an SSH key

> GitLab uses the SSH protocol to securely communicate with Git. When you use SSH keys to authenticate to the GitLab remote server, you don’t need to supply your username and password each time. You can learn more in the [documentation](https://docs.gitlab.com/ee/user/ssh.html).

1. We will use OpenSSH client, which comes pre-installed on GNU/Linux, macOS, and Windows 10. To check your current version run the following command in your terminal or Powershell:

   ```bash
   ssh -V
   ```

2. Create a public and private key pair by running this command in your terminal or PowerShell.

   ```bash
   ssh-keygen
   ```

3. The first prompt will ask you where you would like to save your SSH key. Take note of the location that the command is saving the key to. By default, the path will be `~/.ssh`, and the default name will be `id_rsa`. Press <kbd>Enter</kbd> to accept the default key location and name.

   > If preferred, you can also provide a custom file path and key name for this step.

4. The second prompt will ask you to set a password for the key file. Press <kbd>Enter</kbd> to use a blank passphrase for the local key file.

   > To keep the steps simple, we are opting to not set a password for the key file. Blank passphrases are not generally considered best practices. You can set a passphrase if desired.

## Task C. Add an SSH key to your GitLab profile

1. Open your browser to the project that you created in Lab 1.

1. Click your user avatar in the top left corner.

1. From the dropdown menu, click **Edit profile**.

1. In the left-hand navigation pane, click **SSH Keys**.

1. Open your existing terminal window. Navigate to the directory that you saved the SSH key in by using `cd ~/.ssh` and print a list of all files in that directory by using the `ls` command, as seen below.

   ```bash
   cd ~/.ssh
   ls
   ```

   In Windows:

   ```bash
   cd ~\.ssh
   ```

   > By default, the key will be saved in the `~/.ssh` directory. If you saved the key to a different directory, you will need to `cd` to that directory instead.

1. You should see two key files: a public key (ex. `id_rsa.pub`) and a private key (ex. `id_rsa`). The public key ends with `.pub` and is what you need to share with GitLab.

   > **Security Warning:** You should never share your private key or paste it into any website form field. Only your public key should be shared.

1. Display the contents of your public key by using the `cat id_rsa.pub` command as seen below.

   ```bash
   cat id_rsa.pub
   ```

   > If you used a different file name, you command will be `cat <filename>.pub`

1. Copy the content of the file displayed to your screen to your clipboard.

1. In your web browser in the GitLab Web UI, click the **Add new key** button.

1. Paste the public key contents into the **Key** field.

1. Type any title you want in the **Title** field (ex. your computer's hostname), and click **Add key**.

   > **Tip:** To easily identify where your key is used at, you should use your computer's hostname or description (ex. `alextanuki-m2-mac`) if you don't have a different preferred naming schema.

1. For **Usage type**, make sure **Authentication & Signing** is selected

   > This usage type allows your key to be used to authenticate with GitLab, as well as for signing commits. You can learn more about signed commits in the [documentation](https://docs.gitlab.com/ee/user/project/repository/signed_commits/ssh.html)

1. For **Expiration date**, keep the default date.

   > It is ideal to set an expiry date on keys and rotate the keys periodically. The recommended value for the key expiration date will depend on your security requirements.

1. Click the **Add key** button.

1. In your terminal, run the following command to test your connection.

   If your instance URL includes `gitlab-learn-labs/*` run:

   ```bash
   ssh -T git@gitlab.com
   ```

   If your instance URL includes `ilt.gitlabtraining.cloud` run:

   ```bash
   ssh -T git@ilt.gitlabtraining.cloud
   ```

If the command completes with a welcome message instead of an error, your SSH key is set up correctly.

> If you receive an error stating the connection is refused or the command does not work, this may be becuase your network is blocking connections via SSH. If that is the case, continue onto the next task.

## Task D. Clone a GitLab project repository to your local computer

> When you clone a repository, the files from the remote repository are downloaded to your computer, and a connection is created. You can learn more in the [documentation](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html#clone-a-repository).

1. Navigate back to the `Top Level` project that you created in Lab 1.

1. In the left sidebar, click on **Code > Repository**.

1. On the right side of the project repository, click the **Code** button. Copy the URL under **Clone with SSH** to your clipboard.

1. In your terminal or PowerShell window, create a new directory called `training` in your home directory, and navigate into it via the commands below.

   ```bash
   mkdir ~/training
   cd ~/training
   ```

   In Windows:

   ```bash
   mkdir ~\training
   cd ~\training
   ```

1. Run the `git clone` command, using the command you copied from **Clone with SSH**.

   ```bash
   git clone <Clone with SSH Command>
   ```

> If you receive an error stating that the connection has timed out or has been refused, it may be because your network blocks connections on port 22 due to a firewall. If this happens, repeat the steps in Task D, but use the **Clone with HTTPS** selection in the **Code** button instead.

1. Move into the repository you just cloned via the `cd` command. All files in this directory will be tracked by Git, and any Git commands you run in this lab should be run from this directory.

   ```bash
   cd top-level-project
   ```

1. Show the contents of the directory, including hidden files and directories beginning with a period with the `ls -a` command.

   ```bash
   ls -a
   ```

   > Notice the presence of the `.git` directory. The `.git` directory stores the metadata and object database for your project.

1. Check the status of your repository by running the following command:

   ```bash
   git status
   ```

   > You'll see `nothing to commit, working tree clean` in the output, which means the files in this directory have the same contents as the versions of these files that are stored in Git.

## Task E. Work on a branch

> Branches are versions of a project’s working tree. When you create a new project, GitLab creates a default branch for your repository named `main` (formerly `master`) that cannot be deleted. Default branch settings can be configured at the project, subgroup, group, or instance level. You can learn more in the [documentation](https://docs.gitlab.com/ee/user/project/repository/branches/).

1. Create a new branch called **temporary_branch** on your computer.

   ```bash
   git branch temporary_branch
   ```

2. Switch to the branch you just created.

   ```bash
   git checkout temporary_branch
   ```

3. List all the branches in the repository.

   ```bash
   git branch -a
   ```

   > To exit the branch list, press `q` (for quit) on your keyboard.

4. The red branches are on the remote server, which is the GitLab instance where your repositories are stored at.

5. The asterisk indicates the branch you are currently on.

## Task F. Edit a file

1. Using any text editor (Visual Studio Code, Sublime Text, notepad, vi, etc.), add this line to the end of `README.md` and save the file.

   ```text
   a line added to temporary_branch locally
   ```

1. See if Git has noticed that the file has been modified.

   ```bash
   git status
   ```

   > The output shows the `README` file in read, with a status of `modified`. The red font color indicates that the `README` file has not been added to Git's staging area yet.

## Task G. Add the edited file to Git's staging area

1. Add the file to the staging area using the `git add` command. If the command is successful, there will be no output.

   ```bash
   git add README.md
   ```

   > `git add` doesn’t move `README.md` on your filesystem, but it does add it to Git’s "staging area".

1. Make sure that `README.md` is now ready to be committed (that is, it has been successfully staged).

   ```bash
   git status
   ```

You will now see that the `README` file has a green font color. This indicates that the change is now tracked in Git's staging area.

## Task H. Commit the edit

1. Commit the staged file using the `git commit` command below. It is important to have a descriptive commit message with each commit.

   ```bash
   git commit -m "Add a line to README.md"
   ```

   You have now created a snapshot of the file that you can refer to later, if needed.

1. Make sure the staging area is empty again.

   ```bash
   git status
   ```

## Task I. Push your changes to the GitLab instance

1. Create a new branch in the remote Git repository on the GitLab server called **temporary_branch**, and push your changes to that branch using the `git push` command.

   ```bash
   git push -u origin temporary_branch
   ```

   > If you're ever unsure of the exact command to push your changes to the remote server, type `git push` and Git will output an error message with the correct command for you to copy and paste.

## Task J. Edit, commit, and push the file again

1. In your local machine’s text editor (not GitLab’s in-browser editor), add this new line to the end of your local copy of `README.md` and save the file.

   ```a second line in README.md```

1. In your terminal, move the edited file to Git’s staging area via the `git add` command.

   ```bash
   git add README.md
   ```

1. Commit the staged file using the `git commit` command. Make sure you have a descriptive commit message, or feel free to use the example below.

   ```bash
   git commit -m "Modify README.md"
   ```

1. See a description of the commit you just made by using the `git log` command.

   ```bash
   git log
   ```

   > Press `q` to exit the `git log` output screen.

1. Push your commit up to the remote repository on the GitLab instance by typing in the `git push` command.

   ```bash
   git push
   ```

   > To commit your changes to the upstream branch (that is, an already-existing branch on the remote repository with the same name as the branch on your local machine), you can just run `git push` instead of the longer command you used the first time you pushed your commit up to the GitLab instance. The system only needs to set the upstream branch once.

1. Navigate to your project in the GitLab Web UI.

1. Once you're on the project's main page, navigate to **Code > Branches**.

1. Click on **temporary_branch** to switch to that branch. Confirm that the changes you made to `README.md` on your local branch were pushed up to the remote repository.

   > To see all of the changes applied, click the **History** button. This will show all of the commits applied to a branch.

## Task K. Edit a remote branch

> Let’s simulate someone else in your organization making a change to the **temporary_branch** that lives in the remote repository on the GitLab instance. When we’re done with this section, the remote and local versions of **temporary_branch** will be different: the code on that branch will have moved under your feet (so to speak). In the section after this one, we’ll see how to reconcile this difference.

1. In GitLab, navigate to the **Top Level Project** landing page. If you’re not already on **temporary_branch**, go to the left-hand navigation pane and click on **Code > Branches > temporary_branch**.

1. You are now looking at files in **temporary_branch**. Click **README.md** to see its contents.

1. Click **Edit > Edit single file** in the top right corner to edit the file.

1. Add a new line to the end of the file.

   ```text
   a third line added on the remote copy of temporary_branch
   ```

1. Enter an appropriate commit message.

1. Set the target branch to **temporary_branch**.

1. Click the **Commit changes** button.

After making this commit, the remote repository on the GitLab instance is now one commit *ahead* of your local repository.

## Task L. Get metadata about changes to the remote **temporary_branch**

> Your local **temporary_branch** is out of sync with the remote **temporary_branch** on the GitLab instance. The `git fetch` command gets the updated state of remote branches without updating the contents of your local branches. In other words, it tells you how many commits your local branches are behind the remote branches, but it doesn’t make any changes to the files in your local branches.

1. Retrieve metadata about branches on the remote copy of the repository using the `git fetch` command.

   ```bash
   git fetch
   ```

1. Find out how many commits are in the remote copy of the repository but not your local copy, or vice versa.

   ```bash
   git status
   ```

You will see that your branch is one commit behind in the `git status` output.

## Task M. Pull from the remote repository

> You need to update the contents of your local copy of **temporary_branch** by merging in changes from the remote copy of **temporary_branch**.

1. In your terminal, merge the remote copy into your local copy using the `git pull` command.

   ```bash
   git pull
   ```

1. View the updated contents of the file by typing in the `cat README.md` command. You should see the fourth line that you added in the GitLab Web IDE.

   ```bash
   cat README.md
   ```

## Task N. Merge changes back into the main branch

> Now that your local **temporary_branch** is identical to the remote **temporary_branch**, you can merge it into your local **main** branch. This will add your edits to the stable codebase that lives in **main**.

1. See what branch you are currently working on by typing in `git branch`.

   ```bash
   git branch
   ```

1. Switch to the **main** branch by using the `git checkout` command in the terminal.

   ```bash
   git checkout main
   ```

1. Incorporate all changes from your local **temporary_branch** (in this case, just the modified `README.md`) into your local **main** branch by typing in `git merge temporary_branch`.

   ```bash
   git merge temporary_branch
   ```

## Task O. Update the remote repository

1. Make sure there are no edited files that you need to stage or commit and to confirm that you are on the **main** branch by typing in `git status`.

   ```bash
   git status
   ```

1. Update the remote copy of the **main** branch with any changes from your local copy by typing in `git push`.

   ```bash
   git push
   ```

1. Return to the GitLab page in your browser and view `README.md` in your project’s **main** branch to view the changes you just pushed to the remote copy of **main**.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson).

## Suggestions?

If you’d like to suggest changes to the lab, please submit them via merge request.
