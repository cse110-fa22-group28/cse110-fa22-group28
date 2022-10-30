# Chore Tracker
### Team Stonks (28) Project Pitch

## Statement of Purpose

<div align="center"><strong>To help users track, prioritize and complete chores through positive reinforcment and ease of use. We believe <em>tracking your chores should not itself become a chore</em>.</strong></div>

## Our Goals

## The User

**General Theme (to be expanded upon in user-centered thinking docs):** Our team is aiming to help people with the following characteristics:
- They have a lot of chores but they're too busy (e.g. with all the cse 110 homework) to do them
- They have a lack of motivation to do chores because other things are more important/fun
- They're unable to get their chores organized (e.g. don't know which one is most important/needs to be done first)
- They want to distribute chores amongst their roommates

## The App

**General Theme (to be expanded upon in ADRs, system design charts, etc.)** Our team plans to make a web app with the following types of features. *Note: only the italicized features shall be included in our Minimum-Viable Product. All other features shall be added on iteratively depending on time constraints*:
- *Scheduling*
  - *Schedule chores to be done on/by a specific date*
  - *Schedule recurring chores to be done every few days/weeks*
- *Chore Organization*
  - *Listing chores by priority*
  - Grouping chores by similarity
- *Motivation*
  - Reminders
  - Rewards/Punishments for doing/not doing chores
  - Chore "status" indicators (i.e. how dirty the object of interest is)
- Chore Information Storage
  - Storing previously completed chores to be reused
  - Preloading app with possible chores
  - Storing instructions/materials needed for each chore
- Collaboration/Assignment
  - Assigning roommates to specific tasks
  - Networking capability between roommates' devices (local-first based on central machine)

## Project Risks/Rabbit Holes

**Possible Ideas (to be expanded over the next few days)**
- The app may become too difficult to use. Ease of use is our primary objective (i.e. using the chore app should *itself* not become a chore)
- UI should be appealing, but attempting to make this perfect could become a rabbit hole
- Chores need to be stored efficiently and persistently, which may require some database tool (e.g. MySQL), but we are unsure what database tools we are allowed to use
- Most users may respond best to push notifications, but we are unsure how difficult it is to implement these
- Working with roommates, although not part of our minimum viable product, may require some use of networking, which is difficult
