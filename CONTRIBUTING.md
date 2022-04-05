
# Contributing to `{project_name}`

Thank you for your interest in becoming a part of the ongoing development of `{project_name}`.

This guide covers our practices and recommendations for contributing to the project.


## Table of Contents

[Ways to contribute](#ways-to-contribute)

[Making your first contribution](#making-your-first-contribution)

[Pull requests](#pull-requests)

[Commit messages](#commit-messages)

[Code of Conduct](#code-of-conduct)



## Ways to contribute

There are various ways to get involved, here are a few suggestions of things we'd love some help with.

#### Resolving existing issues

 You can consider helping out with [issues](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) already requiring attention.

#### Reporting issues

If you run into problems while using `{project_name}`, you can report them by opening a new issue and providing as much context as you can about what you're running into, along with a failing test or code sample to help others verify and ultimately fix the issue.

> **Note:** Before filing an issue, please check both open and closed issues to see if the problem has already been reported.

#### Documentation

We are happy to welcome contributions from anyone willing to improve documentation by adding missing information or making it more consistent and coherent.


## Making your first contribution

* [Fork the repo and clone your fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)

* Create a new branch
  ```
  git checkout -b issue1234
  ```
* Get all dependencies
  ```
  npm install
  ```
* Run the tests and the build
  ```
  npm test && npm run build
  ```
  
* Add changes
  ```
  git add .
  git commit
  ```
* Create a commit message that follows our [standards](#commit-messages)
* Push your changes
  ```
  git push origin issue1234
  ```
* Create a pull request and iterate over your solution 
	

## Pull requests

Create a new branch

```
git checkout -b issue1234
```

Commit the changes to your branch

```
git add .
git commit
```

Before sending the pull request, make sure your code is running on the latest available code by rebasing onto the upstream source

```
git fetch upstream
git rebase upstream/main
```

Verify your changes

```
npm run test
```

Push your changes

```
git push origin issue1234
```

Send the [pull request](https://docs.github.com/en/pull-requests), make requested changes, and get merged 

## Commit messages

* Limit the first line of the commit message (message summary) to 72 characters or less
* Start the commit message with an applicable tag (`fix`, `docs`, etc)
* Use the present tense and imperative mood when providing a description of what you did
* If your PR addresses an issue, reference it in the body of the commit message


#### Example

```
[tag]: Short description of what you did

Longer description here if necessary

Fixes #1234
```

