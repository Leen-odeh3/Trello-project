Feature: Hide Template Functionality

    Scenario: Validate that the user can hide template from list
        Given The user navigates to the board
        When Clicks on template name
        And Clicks on Hide from list link
        Then The template will be hidden successfully