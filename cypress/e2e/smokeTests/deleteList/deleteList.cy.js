///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import SherdActions from '../../../pageObjects/shared/actions.cy';
import DeleteListActions from '../../../pageObjects/deleteList/actions.cy';
import DeleteListAssertions from '../../../pageObjects/deleteList/assertions.cy';

const sherdActions = new SherdActions();
const boardName = 'My First Board';
const listName = 'List 1';
const deleteListActions = new DeleteListActions();
const deleteListAssertions = new DeleteListAssertions();

before(() => {
  cy.login();
  sherdActions.createBoard(boardName);
  sherdActions.createList(listName);
});

When('The user clicks on List actions button', () => {
  deleteListActions.clickOnListActionsBtn();
});
When('Chooses Archive this list option', () => {
  deleteListActions.chooseArchiveThisListOption();
});
Then('The list will be archived successfully.', () => {
  deleteListAssertions.checkListInArchivedItems(listName);
});

after(() => {
  cy.wait(2000);
  cy.get('[title="Go back."]').click();
  cy.get('[title="Close the board menu."]').click();
  sherdActions.deleteCurrentBoard();
});
