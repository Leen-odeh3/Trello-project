class UpdateListAssertions {
  checkNewListName(newlistName) {
    cy.findByTestId('list-name').should('contain', newlistName);
    return this;
  }
}

export default UpdateListAssertions;
