# HandsOn_2 - Git Ignore

## Objectives

- Explain `git ignore`
- Explain how to ignore unwanted files using `.gitignore`

In this hands-on lab, you will learn how to:

- Implement the `git ignore` command to ignore unwanted files and folders

## Prerequisites

- Git environment set up
- Notepad++ integrated as the default editor
- A local Git repository and a remote repository

## Estimated time

20 minutes

## Lab task

Create a `.log` file and a `log` folder in the Git working directory. Update the `.gitignore` file so that these files and folders are ignored when committed.

## Suggested steps

1. Create a sample `.log` file.
2. Create a sample `log` folder with a file inside it.
3. Add a `.gitignore` file with rules such as:

```gitignore
*.log
log/
```

4. Verify that `git status` does not show these ignored files.

## Sample files

- `.gitignore` - rules to ignore `.log` files and the `log` folder
- `example.log` - sample log file
- `log/sample.txt` - sample file inside the ignored log folder
