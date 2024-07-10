///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import SherdActions from '../../../pageObjects/shared/actions.cy';
import UpdateListActions from '../../../pageObjects/updateList/actions.cy';
import UpdateListAssertions from '../../../pageObjects/updateList/assertions.cy';

const sherdActions = new SherdActions();
const boardName = 'My First Board';
const updateListActions = new UpdateListActions();
const listName = 'List 1';
const newListName = 'List 100000';
const updateListAssertions = new UpdateListAssertions();

before(() => {
  cy.login();
  sherdActions.createBoard(boardName);
  sherdActions.createList(listName);
});

When('The user clicks on list title header', () => {
  updateListActions.clickOnListTitleHeader();
});
When('Types new list title in textarea field', () => {
  updateListActions.typeNewListTitleInTextareaField(newListName);
});
Then('The list title will be updated successfully.', () => {
  updateListAssertions.checkNewListName(newListName);
});

after(() => {
  sherdActions.deleteCurrentBoard();
});
