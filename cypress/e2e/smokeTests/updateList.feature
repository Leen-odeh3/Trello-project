Feature: Update a List

    Scenario: Validate that the user can update a list.
        When The user clicks on list title header
        And Types new list title in textarea field
        Then The list title will be updated successfully. 