describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has navbar link to home page', () => {
    cy.findByTestId('navbar').within(() => {
      cy.findByText('venue').and('have.attr', 'href').and('equal', '/');
    });
  });

  it('displays appropriate error message when initial venue fetch fails', () => {
    cy.findByText('Failed to retrieve venues.').should('not.exist');

    cy.intercept('api/venues', {
      statusCode: 500,
      body: 'Error',
    });

    cy.findByText('Failed to retrieve venues.').should('be.visible');
    cy.findByText("Oops, something's gone wrong. Please try again.").should('be.visible');
  });
});
