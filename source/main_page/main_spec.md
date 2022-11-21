# Specification for Functions in `main.js`

## `getChores()`

- Retrieves chores from persistent storage and places them in local storage
- Precondition: All chores to be displayed in the chore list are existent in persistent storage and correctly sorted
- Postcondition: All chores to be displayed in the chore list are existent in a sorted array in local storage with the `"chores"` key
- Asynchronous
- Parameters: None
- Returns: Void

## `addChore(chore)`

- Given a chore, add it to local storage
- Precondition: There exists a sorted array in local storage with the key `"chores"`
- Postcondition: The new chore is added in the correct position to this array in local storage
- Parameters:
  - `Object chore` a JSON object describing the chore to be added
- Returns: Void
  
## `reformatDate(date)`

- Format a date string to make it lexicographically comparable
- Parameters:
  - `string date` a date in mm/dd/yyyy format
- Returns:
  - `string newDate` in yyyymmdd format


## `removeChore(chore)`

> Note: the parameter could also be the index of the chore in the local storage array

- Given a chore, remove it from local storage
- Precondition: The chore already exists in the `"chores"` array in local storage
- Postcondition: The given chore no longer exists in the array in local storage
- Parameters:
  - `Object chore` a JSON object describing the chore to be removed
- Returns: Void

## `saveChores()`

- Save all chores from local storage in persistent storage
- Precondition: There exists an array in local storage with the key `"chores"`
- Postcondition: Persistent storage is updated to **exactly match** the `"chores"` array in local storage
- Asynchronous
- Parameters: None
- Returns: Void

## `updateDocument()`

- Update the chore list in the DOM to correctly include all elements in the `"chores"` array in local storage
- Precondition: There exists a sorted array in local storage with the key `"chores"`
- Postcondition: The chore list in the DOM contains all chores from local storage **sorted by priority**
- Parameters: None
- Returns: Void
