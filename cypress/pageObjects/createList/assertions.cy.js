class CreateListAssertions {
  checkListVisibilityAndContainsListName(listName) {
    cy.findByTestId('list-wrapper').should('be.visible');
    cy.findByTestId('list-name').should('contain', listName);

    return this;
  }
}

export default CreateListAssertions;
