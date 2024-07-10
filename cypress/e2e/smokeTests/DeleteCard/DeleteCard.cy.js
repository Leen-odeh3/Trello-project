///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ShardDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import DeleteCardActions from '../../../pageObjects/DeleteCard/actions.cy';
import DeleteCardAssertions from '../../../pageObjects/DeleteCard/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const dataUtils = new ShardDataUtils();
const deleteCardAction = new DeleteCardActions();
const deleteCardAssertion = new DeleteCardAssertions();
const sharedAction = new SharedActions();
const boardName = 'My Board';
const listName = 'My List';
const cardName = 'My card';
let boardUrl;
let boardId;
let listId;

before(() => {
  dataUtils.createBoard(boardName).then((res) => {
    boardUrl = res.body.url;
    boardId = res.body.id;
    dataUtils.createList(boardId, listName).then((res) => {
      //   cy.log(res);
      listId = res.body.id;
      dataUtils.createCard(listId, cardName);
    });
  });
  cy.login();
});

Given('The user navigates to the board', () => {
  sharedAction.openBoard(boardUrl);
  cy.screenshot({ capture: 'fullPage' });
});
When('Clicks on card name', () => {
  deleteCardAction.clickOnCardName(cardName);
});
When('Clicks on Archive link', () => {
  deleteCardAction.clickOnArchiveLink();
});
When('Clicks on Delete link', () => {
  deleteCardAction.clickOnDeleteLink();
});
When('Clicks on Delete button', () => {
  deleteCardAction.clickOnDeleteButton();
});
Then('The card will be deleted successfully', () => {
  deleteCardAssertion.checkCardExistence(cardName);
});

after(() => {
  dataUtils.deleteBoard(boardId);
});
