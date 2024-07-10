class CreateBoardActions {
  clickOnCreateBtnInNavbar() {
    cy.findByTestId('header-create-menu-button').click();
    return this;
  }
  chooseCreateBoardOption() {
    cy.findByTestId('header-create-board-button').click();
    return this;
  }
  typeBoardTitleInInputField(boardName) {
    cy.findByTestId('create-board-title-input').type(boardName);
    return this;
  }
  clickOnCreateBtn() {
    cy.findByTestId('create-board-submit-button').click();
    return this;
  }
}

export default CreateBoardActions;
