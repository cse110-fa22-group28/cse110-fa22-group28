# Main Page Unit Tests

### `addChore(chore)`
- This function is tested in E2E testing

### `reformatDate(date)`

- Test 1: Basic logic test
  - **Purpose**: Test whether the function is able to reformat a standard date input as expected
  - **Input**: "11/02/2022"
  - **Expected Output**: "20221102"

- Test 2: Handle large set of date inputs
  - **Purpose**: Test whether the function is able to handle large set of date inputs without stray values from previous runs
  - **Input**: Run a for loop runnit the function using one value from an array of 50 dates each time
  - **Expected Output**: All the dates output in the expected format 

- Test 3: Incorrect date inputs - input format errors

### `removeChore(chore)`
- This function is tested in E2E testing

### `updateDocument()`
- This function is tested in E2E testing