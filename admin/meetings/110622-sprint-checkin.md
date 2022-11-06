# Meeting Minutes Team 28 mm/dd/yy

**Topic:**

**Location:**

**Start + End Time:**

## Attendance
- Person 1
- Person 2
- etc.

## Agenda

- Check in on sprint groups
- Add more deliverables

## Discussion

- CI/CD
  - Currently, given a directory, it will validate all html files within that directory, add a log to the root directory, and then automatically moves that log to the given directory. **Precondition: directory myst be given manually**
  - Blocks: didn't save commits, not completely sure about organization of distributed log folders
  - Likely will be 1 log folder per folder
  - Function: you give CI a directory, then it puts log file in that directory. Not sure if it works recursively
  - TODO: dig deeper into whether it recursively tests files. Figure out how to search tree of directories
  - **Make sure to add new branch on group repo so we can include CI**
- Chore Card
  - Very similar to Lab 6
  - Made html template for chore card (name, assignee img, date, label, checkbox)
  - No styling yet
  - Added Shadow DOM to create `chore-card` tag
  - Merged, but CI not implemented for this directory yet.
  - Progress bar not implemented yet. Will likely be based off of due date. **This will be based off of exploratory coding**
- Main Page
  - No progress yet, but will meet today
  - Will just be an html file. **Reference index.html from Lab 6**
- ADRs
  - Mentioned language and local-first constraints
  - Included a template, _Make sure to include credit statement on the bottom_
  - Everything in `specs/adrs/`
  - Bemplate contains some optional components, but try to fill in everything
  - Tools Used: chose HTML, JS, and CSS based off of given constraints and class structure. Will use CI to validate this
  - Local-first storage: Will currently use json files, but future decisions may overturn this. Other possible options include MySQL or some No SQL
- Questions
  - CI/CD: Generally low understanding
  - Chore Card: Generally good understanding
  - ADRs: Generally low understanding
- Demo
  - Build a demo webpage that lists chore cards on the main page (based off of Lab 6)
  - **Aim to complete this by Wednesday**
- General comments
  - Add JS comments
