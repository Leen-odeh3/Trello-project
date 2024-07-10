class CreateListActions {
  typeListTitleInTextareaField(listName) {
    cy.findByTestId('list-name-textarea').type(listName);
    return this;
  }
  clickOnAddListBtn() {
    cy.findByTestId('list-composer-add-list-button').click();
    return this;
  }
}

export default CreateListActions;
