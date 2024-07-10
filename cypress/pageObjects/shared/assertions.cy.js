class SharedAssertions {
  checkCardOrTemplateTitleInModule(title) {
    cy.get('.js-card-detail-title-input').should('have.value', title);
  }

  checkCardOrTemplateAbsence(listId, cardOrTemplateId) {
    cy.get(`[data-list-id = ${listId}]`)
      .find(cardOrTemplateId)
      .should('not.exist');
  }
}

export default SharedAssertions;