# HandsOn_4 - Merge Conflict Resolution

## Objectives

- Explain how to resolve conflicts during merge

In this hands-on lab, you will learn how to:

- Implement conflict resolution when multiple users update the main branch in a way that causes a merge conflict with a feature branch

## Prerequisites

- Hands-on ID: `Git-T03-HOL_001`
- Git environment set up
- Git Bash configured
- P4Merge or another merge tool (optional but recommended)

## Estimated time

30 minutes

## Lab task

Practice resolving a merge conflict by creating a branch, changing a file on the branch, changing the same file on the main branch, and merging the branch back.

### Suggested workflow

1. Verify that the main branch is in a clean state.
2. Create a branch named `GitWork`.
3. Add a file named `hello.xml` and update its content.
4. Commit the change on the branch.
5. Switch to the main branch.
6. Add a different version of `hello.xml` to the main branch.
7. Commit the change on the main branch.
8. Observe the history with `git log --oneline --graph --decorate --all`.
9. Compare the differences with a diff tool.
10. Merge the branch into the main branch.
11. Resolve the conflict using a 3-way merge tool.
12. Commit the resolved change.
13. Update `.gitignore` to ignore backup files if needed.
14. Commit the `.gitignore` change.
15. List all branches.
16. Delete the merged branch.
17. Review the final history with `git log --oneline --graph --decorate`.

## Starter files

- `hello.xml` - sample file to be changed on both branches
- `.gitignore` - prepared to ignore backup files
