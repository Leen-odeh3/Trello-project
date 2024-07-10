import SharedActions from '../shared/actions.cy';
import SharedAssertions from '../shared/assertions.cy';

const sharedActions = new SharedActions();
const sharedAssertions = new SharedAssertions();

class CreateCardTemplateAssertions {
  checkPopUpTitle() {
    cy.wait(3000);
    cy.get('h3').should('contain', 'This is a Template card.');
    return this;
  }
  checkTemplateTitleInPopUp(templateName) {
    sharedAssertions.checkCardOrTemplateTitleInModule(templateName);
    return this;
  }
  checkTemplateLinkHaveGreenCheckInPopUp() {
    cy.get('[title="Convert this template back to a normal card."]')
      .find('.icon-check.light')
      .should('exist');
    return this;
  }
  checkTemplateBadgeInCard() {
    sharedActions.closeCardModule();
    cy.findByTestId('badge-card-template').should(
      'contain',
      'This card is a template.'
    );
    return this;
  }
}

export default CreateCardTemplateAssertions;
