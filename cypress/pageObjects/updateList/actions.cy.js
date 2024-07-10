class UpdateListActions {
  clickOnListTitleHeader() {
    cy.wait(2200);
    cy.findByTestId('list-header').click();
    return this;
  }
  typeNewListTitleInTextareaField(newListName) {
    cy.findByTestId('list-name-textarea')
      .clear()
      .type(newListName + '{enter}');
    return this;
  }
}

export default UpdateListActions;
