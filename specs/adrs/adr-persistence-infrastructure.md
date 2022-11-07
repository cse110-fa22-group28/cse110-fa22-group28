# Decision to use JSON files for Local First Persistence 

## Context and Problem Statement

Our application requires the use of persistence to store the chores even after the user exits the app. We need to decide whether these would be best stored on the user's device or on a cloud-hosted database. This has been defined as a project constraint so this document primarily discusses why this makes sense for our project. 

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Primary Driver: Constraints placed on the project by the Instructional Team
* Secondary Driver: The stability and security of our application
* Tertiary Driver: Simplicity of implementation and use

## Considered Options

* JSON files
* MySQL database
* AWS DynamoDB

## Decision Outcome

Chosen option: JSON Files, because these provide a simple and effective way to store the data we require for our project while not taking up too much space on the User's system. Additionally, it satisfies the local first storage constraint imposed on the project.
- One of the options that meet the project constraints by not relying on cloud hosting of data
- Do not require a tabulated structure and only keep track of relevant keys and information needed by the application

<!-- This is an optional element. Feel free to remove. -->
## Pros and Cons of the Options

### JSON Files

* Good, because it is simple to implement with very few complexities that could lead to application failure
* Good, because it takes up very little space on client systems compared to other local-first approaches considered
* Good, because it conforms to constraints placed on the project  

* Neutral, because it is not very human-readable. However, users will not be interacting with these files, and testing with small datasets before deployment will still be easy to do with JSON files.

* Bad, because they do not show relations between tasks/entries
* Bad, because they do not allow direct data filtering to search for specific attributes. This will need to be implemented separately


### MySQL

* Good, because it allows relationships tasks/entries to be displayed/stored
* Good, because it allows simple filtering of tasks for quick searches
* Good, because the table generated is easy to read which will make debugging easier
* Good, because when normalized, it will reduce redundancy.

* Neutral, because requires some additional space on client machines to store tabulated form.
* Neutral, because many features it provides are not required by the application

* Bad, because it is a little harder to implement and will require the use of additional libraries
* Bad, because not all team members have used this before and time will need to be spent in learning

### AWS DynamoDB

* Bad, because it violated project constraints
* Bad, because it will require extensive research and has a steep learning curve
* Bad, because data will e stored on a cloud-based service making using the application without an internet connection impossible
* Bad, because having the data on a cloud service limits the control we have over it and minor changes to the infrastructure could break the current version of our application.

<!-- This is an optional element. Feel free to remove. -->
## More Information

This decision is a tentative decision that may be revisited in team meetings post-Sprint 2. This is because attempting to implement local first persistence with JSON files may reveal problems we have not considered with this approach that may make us lean more in favor of the other options listed.
 
###### Credit: This template was designed by the owners of the `Architectural Decision Records` [repository](https://github.com/adr/madr/blob/main/template/adr-template.md). 

