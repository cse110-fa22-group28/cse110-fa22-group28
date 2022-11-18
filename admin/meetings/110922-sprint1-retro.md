# Meeting Minutes Team 28 11/09/22

**Topic: Sprint 1 Retro**

**Location: Zoom **

**Start + End Time: 8-8:55pm**

## Attendance
- Yash
- Neelay
- Ojeen
- Vaughan
- Alyssa
- Jihun
- Kevin
- Linda
- Justin

## Agenda

- Present tasks completed during this week
  - CI/CD
  - ADR
  - Chore Cards
  - Main Page
- Discuss next sprint
- Discuss deployment step

## Discussion

- We're relatively on track (don't stress about falling behind)
- We'll try to go for finishing the MVP this next week
- ADRs
  - Assigned deployment ADR to Jusin
  - Title should give a bried overview of what the ADR is about, what problem it solves
  - Context: go deeper into what problem showed up and why we had to solve it
  - Decision Drivers: More technical, basically list out some ideas that motivated the need for this specific choice
  - Considered Options
  - Decision Outcome: Summary of reasons for why we chose the specific option
  - Pros + Cons: The meat of the document, spend a lot of time on this. Show how much effort was put into this decision
  - More Info
  - Why we use them: We make a bunch of decisions all the time, so we need to track these to prevent conflicts in implementation (we even need to track the decisions we make in subteams)
- New ADRs we'll add
  - Deployment
  - Use of Shadow DOM for Chore Cards
- Chore Card
  - Made chore-card.html and chore-card.js
  - Made framework for chore card
  - Assignee, name, date, section, checkbox
  - Very similar to last lab
  - Made a Shadow DOM
  - Exploratory Coding: Found a way to change the background of the chore card using WebKit
  - Next Step: Style it with CSS
- Main Page
  - Just built main-page.html skeleton
  - Just took 5 min xD
  - Title, Menu button, Chore list section, Add Chore button
  - No styling at the moment
  - Future Work: Do CSS styling, logic for JS
- CI
  - Created workflow called "HTML Validator" under "Actions" Tab
  - Created main.yml
  - Section at top that mentions on which branches the CI runs
  - Took a generic HTML Validator
  - Automatically makes adds to log portion within directory
  - Runs recursively in entire directry, so will not skip files
  - No logging during pull request, but does log otherwise
  - chore_card.html passed the validator YAY
  - Automatically runs on push
  - **Note: After running, the action will show a checkmark, but that doesn't mean it 100% works (this is because the file is configured to run despite errors). It prints out any errors, and a log file will be added if there is actually an error, so go check there**
  - Next Steps: CSS validation, JS validation, unit tests
- Deployment
  - Attempted to work with Heroku, but it doesn't support native JS
  - Switched to Netlify. Page is now up at https://stonks-chore-tracker.netlify.app/
  - Deployed from main branch with autopublishing. **From now on merge to dev instead of main**
  - GitHub was linked to a Netlify account
  - _Had to rename main-page.html to index.html_
  - Also has some logs (displayed in Netlify account)
