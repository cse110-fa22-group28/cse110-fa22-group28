# Meeting Minutes Team 28 11/30/22

**Topic: Sprint 3 Check-In**

**Location: Zoom**

**Start + End Time: 8-9PM**

## Attendance
- Neelay
- Yash
- Ojeen
- Vaughan
- Linda
- Alyssa
- Kevin
- Jihun
- Justin

## Agenda

- Quick subteam presentations
- Discuss which tasks have been completed/need to still be worked on
- Discuss Testing task in more detail
- Mention mini features

## Discussion

- Testing overview
  - Wrote unit tests for reformat date
  - Wrote many test cases!!
  - Wrote test cases for expected bad outputs as well
  - Tests passed!!!
  - Some issues with running tests locally
  - Has written end-2-end test docs
  - Next Steps: nothing really!
- CI/CD
  - Updated flowchart (includes code quality, JSdocs, manual review)
  - Made phase2 video
  - JSDoc auto generation made as a separate workflow
  - Used a code quality API, works in test repository
  - Need to connect to current repo, couldn't do it bc didn't have admin
  - Next steps: unit test automation, fixing JSDoc deployment, adding code quality to main repo
- CSS Docs
  - Added lots of comments to main.css and chore_card.css
  - Fixing LOTS of linting issues (chore_card.css passes! main.css almost done)
  - Issue with chore_card: remove button not working
  - Next Steps: continue fixing linting, fix remove button
- **General Updates from meeting with Gagan**
  - Code freeze **should still be by Friday** (soft deadline, but **by Sunday for sure** we need to stop)
    - We will stop coding EVERYTHING (CI/CD, testing, features, etc)
  - Gagan will send out one-on-one interview scheduling info
  - 3-4 questions for one-on-ones
    - High-level questions about the codebase (don't need to know every bit of code, but should know what each function generally does, should know CI/CD. etc)
    - High-level questions about course material (just quickly scan through lecture notes)
  - Fill out IA evaluations!
  - We only have the final videos left (no status2 video)
    - public video is like team status, but a bit more technical
    - private video spends extra time going into deep detail about our codebase
  - Should have code coverage implemented in CI/CD unit test automation
- Testing in More Detail
  - Only need unit tests for functions that have return values, so only needed to test reformatDate so far
    - **If you add a new function with a return value, DO YOUR BEST TO UNIT TEST IT YOURSELF and also let team leads know about it**
  - Testing documentation style
  - Have E2E test documentation as well (6 so far). located in `specs/tests/`
  - Testing assignment
    - Yash, Jihun, Kevin
- Styling
  - Main next task is fixing spacing, units, phone-friendliness, etc.
  - TRY NOT TO ADD TOO MANY MORE FEATURES. If you find yourself editing a lot of code, let us know.
  - **Communicate with team leads as much as possible**
