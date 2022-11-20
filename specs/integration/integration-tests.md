# Planned integration tests for intial deployment

## Useful references:
- https://www.softwaretestinghelp.com/what-is-integration-testing/
- https://www.softwaretestinghelp.com/how-to-write-test-plan-document-software-testing-training-day3/

## Initial Integration Approach 

The Bottom-up Integration approach will be used for integration.
- Unit tests are conducted on each individual module, chore card, main page and persistence logic.
- Once these tests pass, modules will be combined incrementally
  - Main Page and chore card will be combined first. The process will continue only when these test pass successfully.
  - The persistence logic module will then be added and teh same features will be tested with multiple refreshes and re-launches of the application
    - The initial integration test for the MVP may not include local storage clearing depending on whether we are able to complete persistence using JSON/indexed.db

## Manual UI Tests
- There are various steps for the manual testing of the application
- We will not be implementing puppeteer testing yet
- All test cases will be documented 
  - input: sequence of clicks and data entry
  - expected output: what we expect the input to do. UI changes, console output, etc.
  - actual output: what actually happens after the input
  - success: true/false based on whether actual and expected output match

## Automated Integration Tests
- Certain aspects of the application will require unit tests spanning across modules. These will be the automated integration unit tests.
- These test cases will be written in an integration test file. This file will be updated as modules are added.
