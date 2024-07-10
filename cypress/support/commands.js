Cypress.Commands.add('login', () => {
  cy.intercept('https://trello.com/1/resources/templates/categories').as(
    'loginResponce'
  );
  cy.visit('/login');
  cy.fixture('loginCredentials.json').then((loginData) => {
    cy.get('#username').type(loginData.email);
    cy.get('#login-submit').click();
    cy.wait(2000);
    cy.get('#password').type(loginData.password);
    cy.get('#login-submit').click();
    cy.wait('@loginResponce');
  });
});

Cypress.Commands.add('findByTestId', (testId) => {
  cy.get(`[data-testid=${testId}]`);
});