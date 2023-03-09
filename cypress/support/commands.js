import 'cypress-wait-until';

Cypress.Commands.add('visitIntURL', (url) => {
  return cy.visit(url, {
    headers: { 'Skip-bot': 'true' },
  });
});

Cypress.Commands.add('waitUntilAppeared', (selector, timeout = 12000) => {
  cy.waitUntil(() => Cypress.$(selector).length, { timeout });
});
