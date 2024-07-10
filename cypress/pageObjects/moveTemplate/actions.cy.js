class MoveTemplateActions {
  rightClicksOnTemplateTitle() {
    cy.findByTestId('card-name').rightclick();
    return this;
  }

  clicksOnMoveButton() {
    cy.findByTestId('quick-card-editor-move').click();
    return this;
  }

  choosesTheList(destinationListName) {
    cy.findByTestId('move-card-popover-select-list-destination').select(
      destinationListName
    );
    return this;
  }

  clicksOnMoveSubmitInput() {
    cy.findByTestId('move-card-popover-move-button').click();
    return this;
  }
}

export default MoveTemplateActions;
