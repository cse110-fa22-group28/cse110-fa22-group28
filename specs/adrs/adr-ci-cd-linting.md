# Decision to use Super Linter
How to automate linting across many different types of files relevant to project?
Use super linter API
## Context and Problem Statement

Our application requires automated validation of various file types. We need to determine which strategies to implement
to create a fast,reliable, and adaptable linting process.

## Decision Drivers

Primary Driver
Works for many different types of files

Secondary Driver
Works will relatively few lines of code and minimizes complexity of linting code

## Considered Options

* HTML Validation
* Super Linter
* Shell-based Validation

## Decision Outcome

Chosen option: "Super Linter", because it's the only option that resolves CSS, Javascript, HTML, and Markdown error logging by itself.


### Consequences

* Good, because {positive consequence, e.g., improvement of one or more desired qualities, …}
* Very adaptable within a constrained set of criteria, such as what types of files to lint, when to lint, where to output log files.
* Easy to set up for basic functionality

* Bad, because {negative consequence, e.g., compromising one or more desired qualities, …}
* Bad, although the interface is simple the complexity ceiling is high. Thus, more involved adjustments to error logging may be more difficult to pull off as it requires some understanding of how lower level components of the API work.


## Validation

By resolving issue related to ADR through pull requests


## Pros and Cons of the Options

### HTML Validator


* Good, because the code is written with more developer involvement so the inner workings of it are understood and can therfore be manipulated
* Good, because algorithm for storing logs is already figured out

* Bad, because it only finds errors for one file type
* Bad, Stops running when github test fails, must use always() to continue the workflow. Always() forces workflow continuation which may lead to unintended consequences further down the line when the workflow needs to pause all actions for some functionality.


### Shell-based Validation

Store software for validating certain file types in the virtual environment and create CI pipeline functionality in the virtual environment, then add the result to repository.

* Good, because shell based coding style offsets most of the knowledge of developing github workflows to shell which developers already understand
* Good, because it allows more complex code to be written as it's not bound to github action programming language constructs
* Bad, because additional complexity may not be required



> Credit: This template was designed by the owners of the `Architectural Decision Records` [repository](https://github.com/adr/madr/blob/main/template/adr-template.md)
