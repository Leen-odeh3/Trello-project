class DeleteCardAssertions {
  checkCardExistence(cardName) {
    cy.contains(cardName).should('not.exist');
    return this;
  }
}

export default DeleteCardAssertions;
