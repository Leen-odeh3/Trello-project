Feature: Move Template To Any List Functionality

    Scenario: Validate that the user can move template to any list.
        Given The user navigates to the board
        When Right clicks on template title
        And Clicks on Move button
        And Chooses the list to move to
        And Clicks on Move submit input
        Then The template will be moved successfully