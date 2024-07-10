Feature: Delete a List

    Scenario: Validate that the user can archive a list.
        When The user clicks on List actions button
        And Chooses Archive this list option
        Then The list will be archived successfully. 