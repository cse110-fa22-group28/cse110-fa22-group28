# Description of Unit Tests required for `main.js`

## `getChores()`

- Test Case 1: Typical chore file (3-5 chores), local storage is empty
  - Precondition: it's unknown whether local storage already contains a `"chores"` array or not
  - Expected result: `"chores"` array is created/updated in local storage with data identical to the chore file
- Test Case 2: Empty chore file
  - Precondition: it's unknown whether local storage already contains a `"chores"` array or not
  - Expected result: `"chores"` array is created/updated in local storage to be empty
- Test Case 3: Long chore file (15-20 chores)
  - Precondition: it's unknown whether local storage already contains a `"chores"` array or not
  - Expected result: `"chores"` array is created/updated in local storage with data identical to the chore file

## `addChore(chore)`

- Test case 1: Typical situation
  - Precondition: local storage contains a `"chores"` array with a small size (3-5)
  - Expected result: `"chores"` is updated to include the new chore **in the "correct" position**
- Test case 2: Empty array
  - Precondition: local storage contains a `"chores"` array with 0 elements
  - Expected result: `"chores"` is updated to include the new chore

## `removeChore(chore)`

- Test case 1: Typical situation
  - Precondition: local storage contains a `"chores"` array with a small size (3-5)
  - Expected result: `"chores"` is updated to exclude the givem chore **while ensuring the ordering of chores is "correct"**
