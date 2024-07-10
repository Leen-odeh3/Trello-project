Feature: Delete Existing Card Functionality

    Scenario: Validata that the user can delete an existing card.
        Given The user navigates to the board
        When Clicks on card name
        And Clicks on Archive link
        And Clicks on Delete link
        And Clicks on Delete button
        Then The card will be deleted successfully