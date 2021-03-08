describe('home page', () => {
  it('has navbar link to home page', () => {
    cy.visit('/');

    cy.findByTestId('navbar').within(() => {
      cy.findByText('venue').and('have.attr', 'href').and('equal', '/');
    });
  });

  it('displays appropriate error message when initial venue fetch fails', () => {
    cy.visit('/');

    cy.findByText('Failed to retrieve venues.').should('not.exist');

    cy.intercept('/venues', {
      statusCode: 500,
      body: 'Error',
    }).as('fetch');

    cy.wait('@fetch');

    cy.findByText('Failed to retrieve venues.').should('be.visible');
    cy.findByText("Oops, something's gone wrong. Please try again.").should('be.visible');
  });

  it('displays all venues in the response', () => {
    cy.visit('/');
    cy.findByTestId('venue-id-1').should('not.exist');

    cy.intercept('/venues', {
      fixture: 'venues.json',
    }).as('fetch');

    cy.wait('@fetch');

    cy.findByTestId('venue-id-1').within(() => {
      cy.findByText('Almost Famous').should('be.visible');
      cy.findByText("Here's something new to Leeds: an ultra-cool burger bar.").should('be.visible');
      cy.findByTestId('venue-thumbnail')
        .should('have.attr', 'src')
        .should('equal', 'http://leedsbeer.info/wp-content/uploads/2014/08/IMG_20140826_174337.jpg');
      cy.findByTestId('details')
        .should('contain', 'Where: 23-25 Great George St, Leeds LS1 3AL')
        .and('contain', 'Phone: Unknown');

      cy.findByTestId('tags').within(() => {
        cy.get('span').should(($span) => {
          expect($span).to.have.length(1);
          expect($span.eq(0).text().toUpperCase()).to.contain('FOOD');
        });
      });
    });

    cy.findByTestId('venue-id-2').within(() => {
      cy.findByText('Angelica').should('be.visible');
      cy.findByText('Atop Trinity shopping centre, this bar will delight those who love a good roof garden.').should(
        'be.visible'
      );
      cy.findByTestId('venue-thumbnail')
        .should('have.attr', 'src')
        .should('equal', 'http://leedsbeer.info/wp-content/uploads/2014/05/IMG_20140505_133542.jpg');
      cy.findByTestId('details')
        .should('contain', 'Where: Level 6, Trinity Leeds, 70 Boar Lane, Leeds LS1 6HW')
        .and('contain', 'Phone: 0113 897 0099');

      cy.findByTestId('tags').within(() => {
        cy.get('span').should(($span) => {
          expect($span).to.have.length(3);
          expect($span.eq(0).text().toUpperCase()).to.contain('BEER GARDEN');
          expect($span.eq(1).text().toUpperCase()).to.contain('COFFEE');
          expect($span.eq(2).text().toUpperCase()).to.contain('FOOD');
        });
      });
    });

    cy.findByTestId('venue-id-3').within(() => {
      cy.findByText("Archie's Bar & Kitchen").should('be.visible');
      cy.findByText('Ossett complete their dominance of Granary Wharf with this disco kitchen.').should('be.visible');
      cy.findByTestId('venue-thumbnail')
        .should('have.attr', 'src')
        .should('equal', 'http://leedsbeer.info/wp-content/uploads/2015/09/IMG_20150918_175536338.jpg');
      cy.findByTestId('details')
        .should('contain', 'Where: Arches V & W, The Dark Arches, Granary Wharf, Leeds LS1 4BR')
        .and('contain', 'Phone: 0113 243 1001');

      cy.findByTestId('tags').within(() => {
        cy.get('span').should(($span) => {
          expect($span).to.have.length(6);
          expect($span.eq(0).text().toUpperCase()).to.contain('BEER GARDEN');
          expect($span.eq(1).text().toUpperCase()).to.contain('BREAKFAST');
          expect($span.eq(2).text().toUpperCase()).to.contain('COFFEE');
          expect($span.eq(3).text().toUpperCase()).to.contain('DANCE FLOOR');
          expect($span.eq(4).text().toUpperCase()).to.contain('FOOD');
          expect($span.eq(5).text().toUpperCase()).to.contain('JUKEBOX');
        });
      });
    });
  });

  it('filter the displayed venues based on the search value', () => {
    cy.intercept('/venues', {
      fixture: 'venues.json',
    }).as('fetch');

    cy.visit('/');

    cy.wait('@fetch');

    cy.findByText('Almost Famous').should('be.visible');
    cy.findByText('Angelica').should('be.visible');
    cy.findByText("Archie's Bar & Kitchen").should('be.visible');

    cy.findByLabelText('Search').invoke('attr', 'placeholder').should('equal', 'search by venue name');
    cy.findByLabelText('Search').type('a');

    cy.findByText('Almost Famous').should('be.visible');
    cy.findByText('Angelica').should('be.visible');
    cy.findByText("Archie's Bar & Kitchen").should('be.visible');

    cy.findByLabelText('Search').type('n');

    cy.findByText('Angelica').should('be.visible');
    cy.findByText('Almost Famous').should('not.exist');
    cy.findByText("Archie's Bar & Kitchen").should('not.exist');

    cy.findByLabelText('Search').clear();

    cy.findByText('Almost Famous').should('be.visible');
    cy.findByText('Angelica').should('be.visible');
    cy.findByText("Archie's Bar & Kitchen").should('be.visible');
  });
});
