import { APIKey, APIToken } from '../../support/constants.cy';

class ShardDataUtils {
  createBoard = (boardName) => {
    return cy.request(
      'POST',
      `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`
    );
  };
  createList = (boardId, listName) => {
    return cy.request(
      'POST',
      `https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`
    );
  };
  deleteBoard = (boardId) => {
    return cy.request(
      'DELETE',
      `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`
    );
  };

  createCard = (listId, cardName) => {
    return cy.request(
      'POST',
      `https://api.trello.com/1/cards?name=${cardName}&idList=${listId}&key=${APIKey}&token=${APIToken}`
    );
  };

  createCardTemplate = (listId, templateName) => {
    return cy.request(
      'POST',
      `https://api.trello.com/1/cards?name=${templateName}&idList=${listId}&isTemplate=true&key=${APIKey}&token=${APIToken}`
    );
  };
}

export default ShardDataUtils;
