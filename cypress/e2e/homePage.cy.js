describe(`Home Page Tests`, () => {
  beforeEach(() => {
    cy.visit(`https://phillsatellite.github.io/PhillipWisniewski/PhillipWisniewski_Resume#`);
  });

  it(`Should display the name `, () => {
    cy.get(`h1`).should(`be.visible`);
    cy.contains(`Phillip Wisniewski`);
  });

  it(`Should display title, number, and location`, () => {
    cy.contains(`QA Engineer | 443-547-9255 | Hickory, North Carolina`).should(`be.visible`);
  })
});
