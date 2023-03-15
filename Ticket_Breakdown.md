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

Ticket 1: Update database schema to include a new column for custom IDs

Description: Add a new column to the Agents table to store the custom IDs provided by Facilities. Update any necessary database queries and scripts to handle this new column.

Acceptance criteria:

A new column named "custom_id" is added to the Agents table in the database.
Database queries and scripts are updated to handle the new "custom_id" column.
Time/effort estimate: 4 hours

Implementation details:

Create a new migration file to add the "custom_id" column to the Agents table.
Update the Agents model to include a new attribute for "custom_id".
Update any necessary database queries and scripts to include the new "custom_id" column.

Ticket 2: Add custom ID field to Facility's Agent assignment form

Description: Update the Facility's Agent assignment form to include a field for custom IDs.

Acceptance criteria:

The Facility's Agent assignment form includes a new input field for custom IDs.
The form successfully saves custom IDs to the Agents table.
Time/effort estimate: 2 hours

Implementation details:

Update the Facility's Agent assignment form to include a new input field for custom IDs.
Add validation to ensure custom IDs are unique.
Update the Agent model's create function to include custom ID when creating a new agent.

Ticket 3: Update the Shifts list to display custom IDs

Description: Update the getShiftsByFacility function to return the custom ID of the assigned Agent (if it exists) instead of the internal database ID.

Acceptance criteria:

The getShiftsByFacility function returns the custom ID of the assigned Agent (if it exists) instead of the internal database ID.
The metadata about the Agent assigned to each Shift is updated to include custom ID (if it exists).
Time/effort estimate: 3 hours

Implementation details:

Modify the getShiftsByFacility function to join the Agents table and return the custom ID if it exists, otherwise return the internal database ID.
Update the metadata about the Agent assigned to each Shift to include custom ID (if it exists).

Ticket 4: Update generateReport function to use custom IDs

Description: Update the generateReport function to use the custom ID instead of the internal database ID when generating reports.

Acceptance criteria:

The generateReport function uses the custom ID instead of the internal database ID when generating reports.
Reports are generated successfully with custom IDs.
Time/effort estimate: 2 hours

Implementation details:

Modify the generateReport function to use the custom ID when generating reports.
Update the report template to display custom IDs.

Ticket 5: Add API endpoint for Facility to retrieve custom IDs

Description: Add a new API endpoint for Facilities to retrieve custom IDs for their assigned Agents.

Acceptance criteria:

A new API endpoint is added for Facilities to retrieve custom IDs for their assigned Agents.
The API endpoint returns a JSON object containing the custom ID for each Agent assigned to the Facility.
Time/effort estimate: 4 hours

Implementation details:

Create a new API endpoint to handle requests for custom IDs.
Update the Facility's dashboard to include a link to the new API endpoint.
Update the backend to return a JSON object containing the custom ID for each Agent assigned to the Facility.
