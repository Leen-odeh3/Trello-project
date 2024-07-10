const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    // specPattern: '**/*.{feature,cy.js}',
    specPattern: '**/*.feature',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    baseUrl: 'https://trello.com/',
  },
  screenshotsFolder: 'MyScreens',
});
