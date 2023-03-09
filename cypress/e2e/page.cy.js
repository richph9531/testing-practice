it('google', () => {
  cy.visitIntURL('https://google.com');
  expect(true).to.equal(true)
});

it('local app', () => {
  cy.visitIntURL('http://localhost:3000');
  cy.get('[data-testid="heading"]').should('exist')
});