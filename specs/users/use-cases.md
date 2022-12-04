# Use Cases

## Use Case #1
- **Case name / number:** 01 - Adding new chores
- **Primary Actor:** a user who needs to complete a new chore and needs to keep track of it on the app
- **Goal:** add a chore to the app and start to track it
- **Precondition:** the chore list is empty, or the new chore is not on the list
- **Basic Flow:** the app tracks the chore added by the user and displays the chore information from the user inputs
- **Mechanics:** user clicks ‘+’ button at the bottom of the homepage, then writes the chore name with specific due date and its priority.
- **Postcondition:** a new chore has been added to the chore lists in the homepage, and is ready to display the chore information when the user clicks on it.

## Use Case #2
- **Case name / number:** 02 - Setting priorities
- **Primary Actor:** a user who has many chores to do but don’t know which one to start
- **Goal:** sort the chores by their priorities so the user will do the chore that has higher priority
- **Precondition:** the chore list is made but chores are not sorted with priority
- **Basic Flow:** The app sorts the chores by their priority range defined by the user. The range cannot go below 1(the lowest priority) and cannot exceed 10(the highest priority).
- **Mechanics:** When the user clicks the chore, the chore information page is displayed, and the user clicks the 'set priority’ button, then a set of numbers ranging from 1 to 10 is displayed and to be selected. Set priority function can also be done in case 01 - adding new chores.
- **Postcondition:** chores are sorted by their priority number and chores with higher priorities are displayed at the top of the chore list in the homepage.

## Use Case #3
- **Case name / number:** 03 - Setting up reminders
- **Primary Actor:** A user who needs to set a reminder for a chore to do
- **Goal:**  Set a reminder with date and time in the app and store it for when the time is up
- **Precondition:** The chore is named and being created
- **Basic Flow:** The date and time are entered when creating the chore; the time is stored and the user is alerted to do the chore when the time is reached
- **Mechanics:** After filling in the date and time, the time along with the name of the chore will be stored in a database. This will be tracked and when the real time is reached, the alert sounds.
- **Postcondition:** The reminder is either ignored or checked off


## Use Case #4
- **Case name / number:** 04 – Chore information
- **Primary Actor:** A user who needs to check up on details about an individual chore
- **Goal:** Have a popup for when the user clicks on a chore that displays all the details
- **Precondition:** The specified chore is already created
- **Basic Flow:** The app finds and takes from all the information about the chore in the database, and displays it on the popup
- **Mechanics:** When the user clicks the information about the chore, they can either ‘X’ off or ‘edit’ the information.
- **Postcondition:** Screen is back to original state (home screen) if ‘X’ is clicked, information edit screen is shown if ‘edit’ is clicked

## Use Case #5
- **Case name / number:** 05 - Assign chores to others
- **Primary Actor:** A user who lives in an apartment or a shared living space looking to distribute chores among roommates
- **Goal:** specify assignee/s to a specific chore
- **Precondition:** The chore is added and visible in the chore list
- **Basic Flow:** the assignee's/assignees' name is/are being added to the chore query in the database
- **Mechanics:** The user click on the chore to open chore information (accomplishes by case 04 - Chore information) and choose assignees they want to add.
- **Postcondition:** The assignees are added as tags that correspond to the assignee names and is visble when the chore card is clicked and brings up chore information screen.

## Use Case #6
- **Case name / number:** 06 - Preloaded Chores
- **Primary Actor:** A user who does the same chores weekly / monthly
- **Goal:** populate chore list with preloaded chores weekly / monthly so the user doesn't have to manual add them
- **Precondition:** The chores from previous week or month is saved for reuse
- **Basic Flow:** Pull the data of last week's or last month's chores make a copy of those datas and label the copy as this week's chores
- **Mechanics:** The user add frequency to chores when they first add the chores (accomplishes by case 01 - Adding Chore).
- **Postcondition:** The chores are autopopulated weekly/monthly depending on the specified frequency. The frequency is displayed in the chore information screen. 