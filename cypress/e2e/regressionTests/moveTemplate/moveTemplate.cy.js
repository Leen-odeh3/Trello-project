///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ShardDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import MoveTemplateActions from '../../../pageObjects/moveTemplate/actions.cy';
import MoveTemplateAssertions from '../../../pageObjects/moveTemplate/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const shardDataUtils = new ShardDataUtils();
const moveTemplateAction = new MoveTemplateActions();
const moveTemplateAssertion = new MoveTemplateAssertions();
const sharedAction = new SharedActions();

const boardName = 'My Board';
const listName = 'My List';
const templateName = 'My Template';
const destinationListName = 'My Destination List';
let boardUrl;
let boardId;
let listId;
let templateId;
let destinationListId;
before(() => {
  shardDataUtils.createBoard(boardName).then((res) => {
    boardUrl = res.body.url;
    boardId = res.body.id;
    shardDataUtils.createList(boardId, destinationListName).then((res) => {
      destinationListId = res.body.id;
    });
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
When('Right clicks on template title', () => {
  cy.wait(1500);
  moveTemplateAction.rightClicksOnTemplateTitle();
});
When('Clicks on Move button', () => {
  moveTemplateAction.clicksOnMoveButton();
});
When('Chooses the list to move to', () => {
  moveTemplateAction.choosesTheList(destinationListId);
});
When('Clicks on Move submit input', () => {
  moveTemplateAction.clicksOnMoveSubmitInput();
});
Then('The template will be moved successfully', () => {
  moveTemplateAssertion
    .checkOriginalList(listId, templateId)
    .checkTheDestinationList(destinationListId, templateName);
});

after(() => {
  shardDataUtils.deleteBoard(boardId);
});
