import SharedActions from '../shared/actions.cy';

const sharedActions = new SharedActions();

class HideTemplateActions {
  clicksOnTemplateName() {
    cy.findByTestId('card-name').click();
    return this;
  }

  clicksOnHideFromListLink() {
    cy.contains('Hide from list').click();
    sharedActions.closeCardModule();
  }
}

export default HideTemplateActions;
