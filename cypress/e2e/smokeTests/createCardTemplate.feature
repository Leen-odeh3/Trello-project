Feature: Create New Card Template Functionality

    Scenario: Validate that the user can create new card template
        Given The user navigates to the board 
        When Clicks on create template icon button
        And Clicks on Create a new template button
        And Types template title in textarea field
        And Clicks on Add button
        Then The template will be created successfully 