# Meeting Minutes Team 28 11/16/22

**Topic: Sprint Review and Retro**

**Location: Zoom**

**Start + End Time: 8-9 PM**

## Attendance
- Yash
- Neelay
- Jihun
- Vaughan
- Alyssa
- Justin
- Kevin
- Ojeen
- Linda

## Agenda

- Review of what subteams did
- Assess what was good/bad
- Discuss fixes

## Discussion

- Review for each subteam
- Styling
  - Main page: Some changes to HTML of button (turned it into a div)
  - Chore card: not too many changes from Sunday
  - Need to gear it towards phone-users
- Logic
  - Switched from Local storage to JSON
  - history_chores.json includes chores in current list (addChores and removeChores operates on this)
  - chore_list.json for preloaded chores
  - getChores retrieves chores from local storage, addChoresToDocument adds chores to main screen
  - saveDataToJson to save chores to a JSON file
  - Modified index.html to create a form to add chores to main screen, updates JSON
- CI/CD
  - Got logs to be stored in LOG folder
  - Logs are incredibly long, can't be parsed with the current API
  - Displays logs in github actions must faster
- Admin
  - Met with subteams to check in
  - Did some planning, looked at where we were in the process
- What went well/not well
  - CI/CD
    - Felt like they did a good job meeting often, got a lot of progress
    - Would have liked to have a debugger, takes a long time to test
  - Logic
    - Overall felt like they did a good job
    - Wanted to meet with UI group, but couldn't because of time conflicts
    - Midterms made it hard for some members to contribute as much as they wanted to
    - Adjusting 
  - Styling
    - Also felt like it would have been ideal to discuss overlap with Logic
    - Felt like instead of splitting up work with chore card and main page, it would have been better to work on both together
    - It was difficult to be perfect because of the cse 101 midterm, other time conflicts
  - Admin
    - Midterms, lots of work -> hard to meet up and get work done
    - Repo became quite messy (branching was all over the place)
    - Couldn't track where every team was at b/c pushes were infrequent
    - There wasn't a consistent naming convention for branches, variables
    - Some of the code had leftovers from copy-pasted labs
    - Commenting didn't seem to be super great
    - Couldn't see unit tests
    - Found lots of linting errors xD
- Things we can do better
  - Branching strategy
    - PR to dev only
    - 1 branch per subteam to reduce number of branches (so 1 branch will work on multiple issues)
    - **Whenever Yash and Neelay make an issue, they will make branches and assign them to issues**
    - Push to the branches often (push after every working session) so Yash and Neelay can check in on them
  - Naming convention: all lowercase, snake case. Ex. this_is_a_branch
  - Inspect code closely
  - Commenting: use them a lot, use JSdocs
  - Make sure to write unit tests along with code (Do Lab 8 to learn about this!!)
    - Note everything that the code should do. **Think about this deeply. Think about edge cases, keep tests in mind while coding**
    - E.g. getting a number when you're expecting a word
- New Issues
  - Fix linting errors
  - **Completion Checkpoint Label: This is put on issues that, once completed, will denote the completion of a major milestone (e.g. completion of part of MVP)**
  - Cleanup label tasks can be done by anyone
- **Team Status Video, Due the Wednesday before Thanksgiving**

## Retrospective Main Points

- How did things go?
  - Good
    - Felt that we did a good job in terms of how much time we spent/progress we got on the project
  - Bad
    - Midterms + time conflicts made it hard to get everything done
    - UI and Logic subteams didn't get a chance to discuss overlap
    - Code was too split up between people -> couldn't see all changes in one place, hard to tell if different people's work meshed together correctly
    - Some disorganization (too many branches, different naming conventions, etc)
    - Disconnect between team leaders' expected specs and what was actually implemented
- How can we fix things?
  - Split up code: each subteam works on a single branch, and pushes/pulls from this branch often
  - Disorganization
    - Define the following naming convention for all branches, files, etc: all lowercase, snake_case (e.g. this_is_my_branch, look_a_file.html)
    - Team leads make branches when assigning issues
  - Lack of well-defined specs: Team leads make more defined specs when assigning tasks
