//list-card-composer-add-card-button
class CreateCardActions {
  openBoard(url) {
    cy.visit(url);
    return this;
  }
  clicksOnAddACardButton() {
    cy.contains('Add a card').first().click();
    return this;
  }
  TypesCardTitleInTextareaField(cardName) {
    cy.findByTestId('list-card-composer-textarea').type(cardName);
    return this;
  }

  clicksOnAddCardButton() {
    cy.findByTestId('list-card-composer-add-card-button').click();
    return this;
  }
}

export default CreateCardActions;
