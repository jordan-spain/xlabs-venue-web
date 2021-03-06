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

  it.only('displays all venues in the response', () => {
    cy.findByTestId('venue-id-1').should('not.exist');

    cy.intercept('api/venues', {
      fixture: 'venues.json',
    });

    cy.findByTestId('venue-id-1').within(() => {
      cy.findByText('Almost Famous').should('be.visible');
      cy.findByText("Here's something new to Leeds: an ultra-cool burger bar.").should('be.visible');
      cy.findByTestId('venue-thumbnail')
        .should('have.attr', 'src')
        .should('equal', 'http://leedsbeer.info/wp-content/uploads/2014/08/IMG_20140826_174337.jpg');
      cy.findByText('Where: 23-25 Great George St, Leeds LS1 3AL').should('be.visible');
      cy.findByText('Phone: Unknown').should('be.visible');
    });

    cy.findByTestId('venue-id-2').within(() => {
      cy.findByText('Angelica').should('be.visible');
      cy.findByText('Atop Trinity shopping centre, this bar will delight those who love a good roof garden.').should(
        'be.visible'
      );
      cy.findByTestId('venue-thumbnail')
        .should('have.attr', 'src')
        .should('equal', 'http://leedsbeer.info/wp-content/uploads/2014/05/IMG_20140505_133542.jpg');
      cy.findByText('Where: Level 6, Trinity Leeds, 70 Boar Lane, Leeds LS1 6HW').should('be.visible');
      cy.findByText('Phone: 0113 897 0099').should('be.visible');
    });

    cy.findByTestId('venue-id-3').within(() => {
      cy.findByText("Archie's Bar & Kitchen").should('be.visible');
      cy.findByText('Ossett complete their dominance of Granary Wharf with this disco kitchen.').should('be.visible');
      cy.findByTestId('venue-thumbnail')
        .should('have.attr', 'src')
        .should('equal', 'http://leedsbeer.info/wp-content/uploads/2015/09/IMG_20150918_175536338.jpg');
      cy.findByText('Where: Arches V & W, The Dark Arches, Granary Wharf, Leeds LS1 4BR').should('be.visible');
      cy.findByText('Phone: 0113 243 1001').should('be.visible');
    });
  });
});
