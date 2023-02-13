# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Add customId property on Agents Database

- Acceptance criteria: customId prop is created in Agents Database
- Time/effort estimate: 1 point/half day

Ticket 2: Change `getShiftsByFacility` to add customId metadata to each agent

- Acceptance criteria: customId metadata is added to each agent that has it on the call to `getShiftsByFacility`
- Time/effort estimate: 1 point/half day

Ticket 2: Change `generateReport` to add custom Id data about each agent to the PDF report

- Acceptance criteria: custom Id data is added to each agent that has it on the call to `generateReport`
- Time/effort estimate: 1 point/half day

Ticket 3: Add unit tests to check if the methods are working properly

- Acceptance criteria:
  - unit tests are done to confirm `generateReport` is adding the custom ID to the PDF document
  - unit tests are done to confirm `getShiftsByFacility` is adding the customID to the metadata of each agent
- Time/effort estimate: 3 points/2 days
