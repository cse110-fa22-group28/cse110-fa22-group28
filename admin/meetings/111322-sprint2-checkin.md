# Meeting Minutes Team 28 11/13/22

**Topic: Sprint 2 Check-In**

**Location: Zoom**

**Start + End Time: 10-11AM**

## Attendance
- Ojeen
- Vaughan
- Linda
- Justin
- Kevin
- Yash
- Neelay

## Agenda

- Check in on each group
  - Styling
  - Logic
  - CI/CD
  - ADRs

## Discussion

- CI/CD
  - Found more efficient way to validate ALL file types (HTML, CSS, MD, JS)
  - Just 1 script checks all file types
  - Some of our Md's are wrong lol
  - Still working on storing logs
  - Going to write ADRs
  - There's a lot of things that needs to be done for the CI/CD Canvas assignment phase 1. Likely can't start everything, but we should mention that we will get started on some aspects (e.g. haven't started javadoc, but will get into it)
  - Will likely use default styling
  - Had a small discussion related to pipeline diagram (should be a flowchart, ending with publishing on Netlify)
  - Add issue to fix .md and spelling errors
- Logic
  - Following ideas from previous labs, Figma UI
  - Workflow
    - Add chores to local storage
    - Get chores from local storage and add to main screen
    - Sort chores before appending to main screen
  - Chore date is a string type, so comparison may not exactly work (add lots of test cases for this)
  - Mainly using lab 6 as a framework, will fill in parts with new code
  - Local storage vs JSON file
    - The point of a JSON file is to allow data to transfer between browsers, devices
    - Better to have some combination local storage and json file
    - Can stick to local storage for this sprint
  - Write an encapsulating function to receive and write to JSON file
  - JSON file should be stored locally
  - Think more about adding chores
- Styling
  - Justin working on chore cards, Alyssa working on main page
  - Chore card
    - Using grid layout to follow Figma
    - Using temporary coloring to help debug padding. Will fix colors + add doom bar later
  - Main page
    - Lots of progress
    - Trying to make chore list scrollable (can possibly fixed with "sticky" position)
  - Thinking about how to make it work on a phone screen
- ADR
  - Justing working on deployment ADR, will be done by end of day
  - Kevin working on ADR for shadow DOM
- General comments
  - Make sure to interact with Sprint board
  - **Make 1 branch per subteam**
  - **Branch from and merge to `dev` branch instead of `main`**
  - **Take meeting minutes**
  - **Ask questions in the `#general` channel**
