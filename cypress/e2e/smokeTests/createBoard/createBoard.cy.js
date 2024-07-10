///<reference types="cypress"/>
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import CreateBoardActions from '../../../pageObjects/createBoard/actions.cy';
import CreateBoardAssertions from '../../../pageObjects/createBoard/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const createBoardActions = new CreateBoardActions();
const createBoardAssertions = new CreateBoardAssertions();
const sharedActions = new SharedActions();

const boardName = 'My First Board';

Given('The user login to trello website', () => {
  cy.login();
});
When('Clicks on create button in navbar', () => {
  createBoardActions.clickOnCreateBtnInNavbar();
});
When('Chooses Create Board option', () => {
  createBoardActions.chooseCreateBoardOption();
});
When('Types board title in Board Title input field', () => {
  createBoardActions.typeBoardTitleInInputField(boardName);
});
When('Clicks on Create button', () => {
  createBoardActions.clickOnCreateBtn();
});
Then('The Board will be created successfully', () => {
  createBoardAssertions
    .checkBoardNameContainValue(boardName)
    .checkBoardNameIsVisible();
});

after(() => {
  sharedActions.deleteCurrentBoard();
});
