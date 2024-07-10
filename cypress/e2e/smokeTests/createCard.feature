Feature: Create Card Functionality

    Scenario: Validate that the user can create a new card
        Given The user navigates to the board
        When Clicks on Add a card button
        And Types card title in textarea field
        And Clicks on Add card button
        Then The card will be created successfully
     