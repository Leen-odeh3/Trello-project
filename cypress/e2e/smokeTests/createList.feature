Feature: Create new List

    Scenario: Validate that the user can create a new list.
        When The user types list title in Enter List Title textarea field
        And Clicks on Add list button
        Then The list will be created successfully. 