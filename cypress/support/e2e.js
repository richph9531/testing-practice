// require('../../.blueprint/config/cypress/commands');

require('./commands');

// returning false here prevents Cypress from
// // failing the test in case of uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
