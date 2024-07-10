class DeleteListActions {
  clickOnListActionsBtn() {
    cy.wait(2000);
    cy.findByTestId('list-edit-menu-button').click();
    return this;
  }
  chooseArchiveThisListOption() {
    cy.get('.js-close-list').click();
    return this;
  }
}

export default DeleteListActions;
