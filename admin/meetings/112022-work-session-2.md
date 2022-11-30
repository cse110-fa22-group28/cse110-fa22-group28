# Meeting Minutes Team 28 11/20/22

**Topic: Second Work Session fo MVP**

**Location: Zoom**

**Start + End Time: 5-7 PM**

## Attendance
- Yash
- Neelay
- Vaughan
- Jihun
- Kevin
- Linda

## Agenda

- Pick up from previous meeting, mob coding to finish MVP

## Discussion

- Adding event listener for adding chores to page
  - Reused/refactored previous code from before storage update, since confusion about `index.html` from previous meeting had been cleared up
  - Tested using live server. Resulting cards on screen had default fillings because `chore_card.js` wasn't complete, but local storage looked correct
  - Later tested again once `chore_card.js` was updated, and then chore contents were correctly filled
- Attempt at undoing hardcoding of html, css of chore card in shadow DOM
  - Goal is to pull in text from `chore_card.html` and `chore_card.css` instead of needing to copy paste the contents of these files into `chore_card.js`
  - Realized that constructor for chore card couldn't be made asynchronous, so needed to use roundabout function calls to read from html and css files
- Adding event listener for removing chores
  - Realized that this event listener needed to be added in `chore_card.js` instead of `main_page.js`
  - Also realized that attempt at undoing hardcoding of html and css contents of `chore_card.js` didn't work, so needed to overwrite this with previous code **(TODO we overwrote the code instead of commenting it out, so we should repaste it (as comments) back into `chore_card.js` such that it doesn't get lost)**
  - Imported checkbox icon wasn't working, so switched to a normal button. **(TODO find a way to get the checkbox icon working)**
  - Tested this and it works, and as of right now the chores are immediately removed from the screen upon clicking the checkbox
- Fixing overlap of menu bar
  - Added css code for offsetting the chore list from the top of the page to prevent the overlap
- Worked on getting hamburger menu bar to work, but decided that this didn't need to be finished before MVP deployment
