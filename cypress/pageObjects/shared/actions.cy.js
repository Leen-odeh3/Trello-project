import CreateBoardActions from '../createBoard/actions.cy';
import CreateListActions from '../createList/actions.cy';

const createBoardActions = new CreateBoardActions();
const createListActions = new CreateListActions();

class SharedActions {
  createBoard(boardName) {
    createBoardActions.clickOnCreateBtnInNavbar();
    createBoardActions.chooseCreateBoardOption();
    createBoardActions.typeBoardTitleInInputField(boardName);
    createBoardActions.clickOnCreateBtn();
  }
  createList(listName) {
    createListActions.typeListTitleInTextareaField(listName);
    createListActions.clickOnAddListBtn();
  }
  deleteCurrentBoard() {
    cy.wait(2000);
    cy.get('[aria-label="Show menu"]').click();
    cy.contains('Close board').click();
    cy.findByTestId('close-board-confirm-button').click();
    cy.findByTestId('close-board-delete-board-button').click();
    cy.findByTestId('close-board-delete-board-confirm-button').click();
  }

  openBoard(url) {
    cy.visit(url);
    return this;
  }
  closeCardModule() {
    cy.findByTestId('CloseIcon').first().click();
  }
}

export default SharedActions;
