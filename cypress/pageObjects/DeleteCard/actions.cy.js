class DeleteCardActions {
  clickOnCardName(cardName) {
    cy.contains(cardName).click();
    return this;
  }
  clickOnArchiveLink() {
    cy.contains('Archive').click();
    return this;
  }
  clickOnDeleteLink() {
    cy.wait(1500);
    cy.contains('Delete').click();
    return this;
  }
  clickOnDeleteButton() {
    cy.wait(1500);
    cy.get('.nch-button--danger').click();
    return this;
  }
}

export default DeleteCardActions;
