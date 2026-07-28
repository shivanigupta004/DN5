# HandsOn_3 - Branching and Merging

## Objectives

- Explain branching and merging
- Explain about creating a branch request in GitLab
- Explain about creating a merge request in GitLab

In this hands-on lab, you will learn how to:

- Create a branch, make changes in it, and merge it with the main branch

## Prerequisites

- Git environment set up
- Git Bash configured
- P4Merge tool installed for Windows (optional but useful for visual diffs)

## Estimated time

30 minutes

## Lab task

Follow the instructions below to practice branching and merging in Git.

### Branching

1. Create a new branch named `GitNewBranch`.
2. List all local and remote branches and observe the current branch marker.
3. Switch to the new branch and add a file with some content.
4. Commit the changes.
5. Check the repository status using `git status`.

### Merging

1. Switch back to the main branch.
2. Compare the differences between the main branch and the feature branch.
3. Review visual differences using P4Merge if available.
4. Merge the feature branch into the main branch.
5. Review the log with `git log --oneline --graph --decorate`.
6. Delete the merged branch and confirm the final status.

## Suggested files

- `feature.txt` - sample file to be created in the feature branch
- `notes.txt` - sample file to help demonstrate the merge flow
