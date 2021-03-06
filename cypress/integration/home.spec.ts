describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has navbar link to home page', () => {
    cy.findByTestId('navbar').within(() => {
      cy.findByText('venue').and('have.attr', 'href').and('equal', '/');
    });
  });
});
