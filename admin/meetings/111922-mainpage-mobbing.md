# Meeting Minutes Team 28 11/19/22

**Topic: Mob Coding for main.js**

**Location: Zoom**

**Start + End Time: 2-3:30 PM**

## Attendance
- Vaughan
- Kevin
- Jihun
- Ojeen
- Neelay

## Agenda

- Mob code on main.js to implement specs

## Discussion

- addChore
  - get chores from local storage
  - **we assume that chores array is already sorted**
  - need an if statement to account for when the chores array in local storage is empty
- removeChore
  - **Added check to make sure that chore actually exists in chores array**
  - Quite similar to add_chore
- updateDocument
  - **Assumes chores array is correctly sorted**
- saveChores and getChores
  - just log that these functions were called
- init
  - use promise chaining to get chores from local storage and then afterwards update the document
- Began working on event listeners, but couldn't move forward because it wasn't clear how the "add chore" form is supposed to implemented in index.html
