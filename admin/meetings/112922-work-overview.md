# Meeting Minutes Team 28 11/29/22

**Topic: Overview of Work for Today**

**Location: Zoom**

**Start + End Time: 10-11:30 AM**

## Attendance
- Yash
- Neelay
- Ojeen
- Vaughan
- Kevin
- Alyssa
- Justin
- Jihun

## Agenda

- Give instructions on CI/CD, Testing, CSS Docs

## Discussion

- Possibly will meet every day at 10 AM as we come up with new tasks
  - Will meet at 10 am on Thursday for sure
- CI/CD
  - Had some issues deploying JSdocs to github pages
  - Deployed to netlify instead
  - Code quality is done
  - JSDocs are being generated, but not sure if they look correct yet
- Testing
  - Discussed E2E tests, written up last night
  - Thought of main page unit tests, looks like `reformatDate` is the only thing that can be unit tested
  - Setting up Jest + Puppeteer, added node_modules to gitignore
  - Discussed unit tests, **will have unit tests directly interact with local storage**
- CSS Documentation
  - Looked over github issue
  - Went over mob coding example in `chore_card.css`
  - Discussed discrepancy between `main_page.css` and `main.css`
  - Mentioned that they should test locally by copy pasting `chore_card.css` into `chore_card.js` and using live server
  - Opened pull request already so that linting is readily available
