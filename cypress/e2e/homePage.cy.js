describe(`Home Page Tests`, () => {
  beforeEach(() => {
    cy.visit(`https://phillsatellite.github.io/PhillipWisniewski/PhillipWisniewski_Resume`);
  });

    it(`should display the name Phillip Wisniewski`, () => {
      cy.get(`h1`)
      .should(`be.visible`)
      .should(`contain`, `Phillip Wisniewski`);
    })

    it(`should display the job title and location`, () => {
      cy.get(`[data-cy="info"]`)
      .should(`be.visible`)
      .should(`contain`, `QA Engineer | Hickory, North Carolina`);
    })
  })
