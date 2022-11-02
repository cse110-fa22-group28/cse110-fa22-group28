# Chore Tracker
### Team Stonks (28) Project Pitch

## Statement of Purpose

<div align="center"><strong>To help users track, prioritize and complete chores through positive reinforcment and ease of use. We believe <em>tracking your chores should not itself become a chore</em>.</strong></div>

## Our Goals

- To make it easier for users to remember and complete their chores
- To make co-habitation (living with roommates) easier and reduce conflicts
- To elegantly integrate chores into users' lives without disrupting their work
- To make chores not seem like punishments
- To ensure clean and hygenic living

## The User

*Overall our team aims to help people with the following characteristics:*
- They have a lot of chores but they're too busy (e.g. with all the cse 110 homework) to do them
- They have a lack of motivation to do chores because other things are more important/fun
- They're unable to get their chores organized (e.g. don't know which one is most important/needs to be done first)
- They forget which chores they need to do, or how to do those chores
- They want to distribute chores amongst their roommates

*This section provides a further description of possible users, the problems they may face, and the way that the app can solve those problems.*

### Personas
*The characteristics of some possible users are described here.*

Name: Kentucky Grandpa <br>
Age, gender: 67, man<br>
Marital status: Divorced<br>
Occupation: Retired<br>
Hobbies: Walking with his dog Fred<br>
Technology familiarity: ⚫⚪⚪⚪⚪ 1/5 <br>
Devices used: computer<br>
Quote: “Can you repeat this again for me?”<br>
<br>
Short Description: Kentucky is an old man trying to remember everything but in most cases, he fails. Because he is not good at using new technology like smartphones, so he is limited to using the reminder apps developed by other companies since they are too complicated. He needs someone to remind him what chores he has to do today. This app will help him because the app itself is easy for everyone to use (that is, it is very user-friendly.) He also needs a chores app including a reminder system to let him know what he has to do for today (like what food he has to buy, does he need to sweep/mop the floor?). 

<hr>

Name: Luke Lazy <br>
Age, gender: 17, man <br>
Marital status: Single<br>
Occupation: High School Student<br>
Hobbies: Gaming
Technology familiarity: ⚫⚫⚫⚫⚫ 5/5  <br>
Devices used: computer and smartphone <br>
Quote: “Play this video game first and then I will do my work.” <br>
<br>
Short Description: Luke is a high school student living with his parents. He loves playing video games and spends a lot of time playing video games. He is lazy so he does not like to do chores, even sweeping/mopping the floor in his own bedroom. His parents don’t want to do all the chores for him so they decide to have this app to help their son to do his chores by assigning their son to do his own chores. <br>

<hr>

Name: Amanda Fish <br>
Age, gender: 19, woman <br>
Marital status: Single <br>
Occupation: College Student majoring in Cognitive Science <br>
Hobbies: Hanging out with friends <br>
Technology familiarity: ⚫⚫⚫⚫⚪ 4/5 <br>
Devices used: computer and smartphone <br>
Quote: “Dealing with an issue in a peaceful way is the most important thing.” <br>
<br>

Short Description: Amanda is a second-year college student living on campus. She lives in a double bedroom sharing the room with another roommate. In their dorm, there are 5 people in total, so they have to share the public space with other 4 roommates. Amanda is worried about splitting the chores with her roommates. Her roommates are friendly and nice, but just not that aware of cleaning the space after their use. She does not want to do all the chores anymore but does not want to have a fight against her roommates because of chores. She hopes this app will help her to split the chores with everyone and improve this situation in a more peaceful way.  <br>

*More personas linked [here](../users/personas.md)*

### Use Cases
*Some useful functionalities to address chore-related issues are listed here.*

- Use Case #1
  - **Case name / number:** 01 - Adding new chores
  - **Primary Actor:** a user who needs to complete a new chore and needs to keep track of it on the app
  - **Goal:** add a chore to the app and start to track it

- Use Case #2
  - **Case name / number:** 02 - Setting priorities
  - **Primary Actor:** a user who has many chores to do but don’t know which one to start
  - **Goal:** sort the chores by their priorities so the user will do the chore that has higher priority

- Use Case #3
  - **Case name / number:** 03 - Setting up reminders
  - **Primary Actor:** A user who needs to set a reminder for a chore to do
  - **Goal:**  Set a reminder with date and time in the app and store it for when the time is up

- Use Case #4
  - **Case name / number:** 04 – Chore information
  - **Primary Actor:** A user who needs to check up on details about an individual chore
  - **Goal:** Have a popup for when the user clicks on a chore that displays all the details

- Use Case #5
  - **Case name / number:** 05 - Assign chores to others
  - **Primary Actor:** A user who lives in an apartment or a shared living space looking to distribute chores among roommates  
  - **Goal:** specify assignee/s to a specific chore 

- Use Case #6
  - **Case name / number:** 06 - Preloaded Chores
  - **Primary Actor:** A user who does the same chores weekly / monthly
  - **Goal:** populate chore list with preloaded chores weekly / monthly so the user doesn't have to manual add them

*More detailed use cases linked [here](../users/use-cases.md)*

### User Stories
*The following scenarios demonstrate how the previously mentioned personas would explicitly benefit from the previously mentioned features.*

*More user stories linked [here](../users/user-stories.md)*

## The App

*Our team believes that a web app with the following types of features can effectively address the issues faced by our prospective users.*
- Scheduling
  - Schedule chores to be done on/by a specific date
  - Schedule recurring chores to be done every few days/weeks
- Chore Organization
  - Listing chores by priority
  - Grouping chores by similarity
- Motivation
  - Reminders
  - Rewards/Punishments for doing/not doing chores
  - Chore "status" indicators (i.e. how dirty the object of interest is)
- Chore Information Storage
  - Storing previously completed chores to be reused
  - Preloading app with possible chores
  - Storing instructions/materials needed for each chore
- Collaboration/Assignment
  - Assigning roommates to specific tasks
  - Tracking chore completion statistics between roomates (i.e. leaderboard style)
  - Networking capability between roommates' devices (local-first based on central machine)

*Of the above features, the implementation of the following shall comprise our Minimum Viable Product (MVP)*
- Scheduling by date
- Chore organization by some priority metric
- Motivation via any of the methods listed earlier
- Persistent storage of both incomplete and previously completed chores
- Chore assignment to multiple roommates on a single device (no networking)
*Our MVP shall run on a browser rather than being a separate app*

## Project Risks/Rabbit Holes

**Possible Ideas (to be expanded over the next few days)**
- The app may become too difficult to use. Ease of use is our one of our primary objectives, as mentioned in our statement of purpose
- It is easier to run this app in a 
- UI should be appealing, but attempting to make this perfect could become a rabbit hole
- Chores need to be stored efficiently and persistently, which is a significant challenge
- Most users may respond best to push notifications, but we are unsure how difficult it is to implement these
- Assigning tasks to roommates likely works better if the same chore list can be accessed on multiple devices, which is difficult. Unless we find a relatively easy way to exchange information between multiple devices, we'll need to make the roommate assignment feature appealing and usable enough to make up for the lack of networking
