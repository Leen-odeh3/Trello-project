Feature: create new board


    Scenario: Validate that the user can create a new board
        Given The user login to trello website
        When Clicks on create button in navbar
        And Chooses Create Board option 
        And Types board title in Board Title input field
        And Clicks on Create button
        Then The Board will be created successfully