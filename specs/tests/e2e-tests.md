# End 2 End Tests

### Adding Chore to Empty List
  - **input**:
    - Clear Local Storage
    - Click on add chore button
    - Enter all chore information in relevant boxes
    - Click the submit chore button
  - **expected output**: what we expect the input to do. UI changes, console output, etc.
    - Local storage array should have one entry (array size 1)
    - Parsing JSON object in that element must have information as input
  - **actual output**: what actually happens after the input
  - **success**: true/false based on whether actual and expected output match

### Delete the only chore card in list
  - **input**: sequence of clicks and data entry
    - This follows immediately after the previous test so one chore is already on the screen
    - Click the checkbox on the chore card 
  - **expected output**: what we expect the input to do. UI changes, console output, etc.
    - Implemented later if possible: Confetti or some sound effect
    - Local storage chore array size is 0
  - **actual output**: what actually happens after the input
  - **success**: true/false based on whether actual and expected output match

### Heavy Chore add to Empty List
  - **input**:
    - Clear Local Storage
    - Repeat 20 times
      - Click on add chore button
      - Enter all chore information in relevant boxes
        - An array with information for each box can be created
      - Click the submit chore button
  - **expected output**: what we expect the input to do. UI changes, console output, etc.
    - Local storage array should have 20 entries (array size 20)
    - Parsing JSON object in each element must have information as input
      - recreate arrays from json objects in local storage
      - compare with arrays used to populate 
  - **actual output**: what actually happens after the input
  - **success**: true/false based on whether actual and expected output match

### Delete all chore cards in list
  - **input**: sequence of clicks and data entry
    - This follows immediately after the previous test so multiple chores are already on the screen
    - Click the checkbox on each chore card 
  - **expected output**: what we expect the input to do. UI changes, console output, etc.
    - Implemented later if possible: Confetti or some sound effect
    - Local storage chore array size is 0
  - **actual output**: what actually happens after the input
  - **success**: true/false based on whether actual and expected output match

### Date sorting for chore priority
  - **input**: sequence of clicks and data entry
    - Click add chore and enter all relevant information
    - Add another chore in the same way but with earlier due date
  - **expected output**: what we expect the input to do. UI changes, console output, etc.
    - Two chores in the local storage chores array
    - Chores sorted such that earlier date chore is before the chore before it
  - **actual output**: what actually happens after the input
  - **success**: true/false based on whether actual and expected output match

### Multiple cascading Date sorting for chore priority
  - **input**: sequence of clicks and data entry
    - Perform 20 adds from an array of chores sorted in descending order of dates (reverse order of what should be done)
      - Click add chore and enter all relevant information
  - **expected output**: what we expect the input to do. UI changes, console output, etc.
    - 20 chores in the local storage chores array
    - Chores sorted such that earlier date chores are before the chore before it
  - **actual output**: what actually happens after the input
  - **success**: true/false based on whether actual and expected output match
