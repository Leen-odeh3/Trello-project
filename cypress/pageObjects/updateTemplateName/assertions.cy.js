import SharedActions from '../shared/actions.cy';
import SharedAssertions from '../shared/assertions.cy';

const sharedActions = new SharedActions();
const sharedAssertions = new SharedAssertions();

class UpdateTemplateNameAssertions {
  checkUpdatedNameInPopUP(updatedName) {
    sharedAssertions.checkCardOrTemplateTitleInModule(updatedName);
    return this;
  }
  checkUpdatedNameInList(updatedName) {
    sharedActions.closeCardModule();
    cy.findByTestId('card-name').should('contain', updatedName);
    return this;
  }
}
export default UpdateTemplateNameAssertions;
