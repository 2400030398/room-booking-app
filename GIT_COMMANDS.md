# Git & GitHub Command Reference — Room Booking App

This document is a faculty-ready practical record for the Git and GitHub workflow used in this repository. It includes the commands to create the repository, create branches, develop features, merge them, resolve conflicts, and create/close an issue.

> Repository: https://github.com/2400030398/room-booking-app  
> Default branch: `main`  
> Integration branch: `develop`  
> Shell examples use Git Bash / Linux / macOS. The commands also work in Windows PowerShell unless noted.

---

## 1. Configure Git (one-time setup)

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --global init.defaultBranch main
git config --global --list
```

## 2. Clone the GitHub repository

```bash
git clone https://github.com/2400030398/room-booking-app.git
cd room-booking-app
git remote -v
git status
```

## 3. Inspect repository history and branches

```bash
git branch
git branch -a
git log --oneline
git log --oneline --graph --decorate --all
git remote show origin
```

## 4. Create and publish the develop branch

```bash
git switch main
git pull origin main
git switch -c develop
git push -u origin develop
git branch -vv
```

If the remote `develop` branch already exists, use:

```bash
git fetch origin
git switch --track origin/develop
```

## 5. Feature 1 — Room search

Create a feature branch from develop:

```bash
git switch develop
git pull origin develop
git switch -c feature/room-search
```

Inspect and stage the room-search files:

```bash
git status
git add index.html styles.css app.js README.md
git diff --staged
git commit -m "feat: add room search interface"
git push -u origin feature/room-search
```

Merge the feature into develop:

```bash
git switch develop
git pull origin develop
git merge --no-ff feature/room-search -m "Merge feature/room-search into develop"
git push origin develop
```

## 6. Feature 2 — Booking date validation

Create the second feature branch:

```bash
git switch develop
git pull origin develop
git switch -c feature/booking-validation
```

Add and commit the validation code and tests:

```bash
git status
git add booking-validation.js booking-validation.test.js
git diff --staged
git commit -m "feat: add booking date validation and tests"
git push -u origin feature/booking-validation
```

Run the Node.js tests:

```bash
node --version
node booking-validation.test.js
```

Merge the second feature into develop:

```bash
git switch develop
git pull origin develop
git merge --no-ff feature/booking-validation -m "Merge feature/booking-validation into develop"
git push origin develop
```

## 7. Create and resolve a GitHub issue

Install and authenticate GitHub CLI first: https://cli.github.com/

```bash
gh auth login
gh auth status
```

Create an issue for booking-date validation:

```bash
gh issue create \
  --repo 2400030398/room-booking-app \
  --title "Validate booking dates before confirming a room" \
  --body "Reject missing dates, past check-in dates, and check-out dates that are not later than check-in."
```

List issues and inspect issue number 1:

```bash
gh issue list --repo 2400030398/room-booking-app
gh issue view 1 --repo 2400030398/room-booking-app
```

Close the issue after the implementation is complete:

```bash
gh issue close 1 \
  --repo 2400030398/room-booking-app \
  --reason completed \
  --comment "Implemented booking date validation and added test cases."
```

## 8. Resolve a merge conflict (practice example)

If Git reports a conflict while merging:

```bash
git status
```

Open each conflicted file and find the conflict markers:

```text
<<<<<<< HEAD
content from the current branch
=======
content from the feature branch
>>>>>>> feature/branch-name
```

Edit the file to keep the correct final code, remove all conflict markers, then:

```bash
git add <resolved-file>
git status
git commit -m "fix: resolve merge conflict"
git push origin develop
```

To cancel a merge before committing:

```bash
git merge --abort
```

## 9. Pull request workflow (alternative recommended team workflow)

Push the feature branch, then create a pull request into develop:

```bash
gh pr create \
  --repo 2400030398/room-booking-app \
  --base develop \
  --head feature/room-search \
  --title "Add room search feature" \
  --body "Adds a room search interface and room capacity filtering."
```

Review and merge a pull request:

```bash
gh pr list --repo 2400030398/room-booking-app
gh pr view <PR_NUMBER> --repo 2400030398/room-booking-app
gh pr merge <PR_NUMBER> --repo 2400030398/room-booking-app --merge
```

## 10. Useful daily Git commands

```bash
git status
git diff
git diff --staged
git add .
git commit -m "your commit message"
git fetch origin
git pull
git push
git branch
git branch -d feature/branch-name
git switch main
git switch develop
git remote -v
git log --oneline --graph --decorate --all
git show
git stash
git stash list
git stash pop
```

## 11. Final verification commands

```bash
git fetch --all --prune
git branch -a
git status
git log --oneline --graph --decorate --all
git ls-remote --heads origin
gh repo view 2400030398/room-booking-app
gh issue list --repo 2400030398/room-booking-app --state all
```

## 12. Expected branch structure

```text
main
 |
 +-- develop
      |
      +-- feature/room-search
      |
      +-- feature/booking-validation
```

## 13. Important Git concepts for viva

| Command / concept | Purpose |
|---|---|
| `git init` | Initialize a local Git repository |
| `git clone` | Copy a remote repository locally |
| `git add` | Stage file changes |
| `git commit` | Save a snapshot in local history |
| `git push` | Upload commits to a remote |
| `git pull` | Fetch and integrate remote changes |
| `git fetch` | Download remote references without merging |
| `git branch` | List or manage branches |
| `git switch` | Switch or create a branch |
| `git merge` | Integrate another branch |
| `git log` | Display commit history |
| `git status` | Show working-tree state |
| GitHub Issue | Track a bug, task, or enhancement |
| Pull Request | Propose and review changes before merging |

---

## Practical completion note

The repository workflow currently contains the `main` and `develop` branches, plus `feature/room-search` and `feature/booking-validation`. Both feature branches were merged into `develop`. GitHub issue #1, **Validate booking dates before confirming a room**, is closed as completed.

This reference lists the equivalent commands to reproduce and explain the workflow from a terminal. The repository changes in this practical were performed through the connected GitHub integration, so these are documented reproducible commands rather than a claim that every line above was typed in a local terminal.
