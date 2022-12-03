## Currently Working

- Linting for CSS, HTML, Markdown, Javascript, Natural Language
  * Triggers on push and pull requests
  * Checks all files downstream from root including recursive directory search
  * Only checks new commits
  * Requires github authentication for security
  * Outputs file and lines where error occurs
  * Tracks amount of errors per file, per file type
- Code Quality Synchronization
  * When repository updates, the code quality for the whole repository is updated and detailed on the website
  * Badge automatically updates based on the state of CodeClimate and therefore updates based on current repository code quality
- Automatic Code Quality check on pull request
  * Integrated with github pull request interface
  * Also shows degree of test coverage the new pull request has
  * Shows summary and inline comments on code in pull request that has technical debt
  * Team leads can use the CodeClimate website to add issues corresponding to these code blocks
- JSDocumentation
  * Borrowed third party action to generate files for a JS documentation webpage based on our repo
  * JSDocumentation updates on pull requests and push
## In Progress
- Deploying the JSDocumentation to Netlify or Github Pages
- Being able to render the generated JSdocumentation on browser to see if it is usable
- Testing the Code Quality component of the pipeline
## Planned
- Unit test automation