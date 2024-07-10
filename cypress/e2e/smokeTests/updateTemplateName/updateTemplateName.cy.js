///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ShardDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import UpdateTemplateNameActions from '../../../pageObjects/updateTemplateName/actions.cy';
import UpdateTemplateNameAssertions from '../../../pageObjects/updateTemplateName/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const shardDataUtils = new ShardDataUtils();
const updateTemplateNameAction = new UpdateTemplateNameActions();
const updateTemplateNameAssertion = new UpdateTemplateNameAssertions();
const sharedAction = new SharedActions();
const boardName = 'My Board';
const listName = 'My List';
const templateName = 'My Template';
const updatedName = 'My NEW Template';
let boardUrl;
let boardId;
let listId;

before(() => {
  shardDataUtils.createBoard(boardName).then((res) => {
    boardUrl = res.body.url;
    boardId = res.body.id;
    shardDataUtils.createList(boardId, listName).then((res) => {
      listId = res.body.id;
      shardDataUtils.createCardTemplate(listId, templateName);
    });
  });
  cy.login();
});

Given('The user navigates to the board', () => {
  sharedAction.openBoard(boardUrl);
});
When('Clicks on template title', () => {
  updateTemplateNameAction.clicksOnTemplateTitle();
});
When('Types the new name in textarea field', () => {
  updateTemplateNameAction.typesTheNewNameInTextareaField(updatedName);
});
Then('The name of the template will be updated successfully', () => {
  updateTemplateNameAssertion
    .checkUpdatedNameInPopUP(updatedName)
    .checkUpdatedNameInList(updatedName);
});

after(() => {
  shardDataUtils.deleteBoard(boardId);
});
