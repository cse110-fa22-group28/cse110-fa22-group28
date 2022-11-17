# Meeting Minutes Team 28 11/13/22

**Topic: Getting correctly formatted logs**

**Location: Zoom**

**Start: 11:00am End: 12:30pm**

## Attendance
- Vaughan Chase
- Ojeen Gammah

## Agenda
Figure out how to get correctly formatted logs into files
By default, can only change how errors are outputted into console
Cannot change how they are outputted to file, will only output to greatest level of granularity VERBOSE
See, LOG_FILE environment variable
## Discussion
Ideas include 
Using python to parse only relevant information, should be easy as data is structured by tags and sequence
Figuring out how to access github console output and pipe it into a file
Use python to search the super linter directory for code that might be able to access console, i.e search for keywords like output and console