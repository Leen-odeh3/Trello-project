///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ShardDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import HideTemplateActions from '../../../pageObjects/hideTemplate/actions.cy';
import HideTemplateAssertions from '../../../pageObjects/hideTemplate/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const shardDataUtils = new ShardDataUtils();
const hideTemplateAction = new HideTemplateActions();
const hideTemplateAssertion = new HideTemplateAssertions();
const sharedAction = new SharedActions();

const boardName = 'My Board';
const listName = 'My List';
const templateName = 'My Template';
let boardUrl;
let boardId;
let listId;
let templateId;

before(() => {
  shardDataUtils.createBoard(boardName).then((res) => {
    boardUrl = res.body.url;
    boardId = res.body.id;
    shardDataUtils.createList(boardId, listName).then((res) => {
      listId = res.body.id;
      shardDataUtils.createCardTemplate(listId, templateName).then((res) => {
        templateId = res.body.id;
      });
    });
  });
  cy.login();
});

Given('The user navigates to the board', () => {
  sharedAction.openBoard(boardUrl);
});
When('Clicks on template name', () => {
  hideTemplateAction.clicksOnTemplateName();
});
When('Clicks on Hide from list link', () => {
  hideTemplateAction.clicksOnHideFromListLink();
});
Then('The template will be hidden successfully', () => {
  hideTemplateAssertion.checkTemplateInList(listId, templateId);
});

after(() => {
  shardDataUtils.deleteBoard(boardId);
});
