///<reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ShardDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import CreateCardTemplateActions from '../../../pageObjects/createCardTemplate/actions.cy';
import CreateCardTemplateAssertions from '../../../pageObjects/createCardTemplate/assertions.cy';
import SharedActions from '../../../pageObjects/shared/actions.cy';

const dataUtils = new ShardDataUtils();
const createCardTemplateAction = new CreateCardTemplateActions();
const createCardTemplateAssertion = new CreateCardTemplateAssertions();
const sharedAction = new SharedActions();

const boardName = 'My Board';
const templateName = 'My Template';
let boardUrl;
let boardId;

before(() => {
  dataUtils.createBoard(boardName).then((res) => {
    boardUrl = res.body.url;
    boardId = res.body.id;
  });
  cy.login();
});

Given('The user navigates to the board', () => {
  sharedAction.openBoard(boardUrl);
});
When('Clicks on create template icon button', () => {
  createCardTemplateAction.clicksOnCreateTemplateIconButton();
});
When('Clicks on Create a new template button', () => {
  createCardTemplateAction.clicksOnCreateANewTemplateButton();
});
When('Types template title in textarea field', () => {
  createCardTemplateAction.typesTemplateTitleInTextareaField(templateName);
});
When('Clicks on Add button', () => {
  createCardTemplateAction.clicksOnAddButton();
});
Then('The template will be created successfully', () => {
  createCardTemplateAssertion
    .checkPopUpTitle()
    .checkTemplateTitleInPopUp(templateName)
    .checkTemplateLinkHaveGreenCheckInPopUp()
    .checkTemplateBadgeInCard();
});

after(() => {
  dataUtils.deleteBoard(boardId);
});
