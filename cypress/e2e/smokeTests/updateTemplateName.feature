Feature: Update Template Name Functionality 

    Scenario: Validate that the user can update the name of template
        Given The user navigates to the board
        When Clicks on template title
        And Types the new name in textarea field
        Then The name of the template will be updated successfully