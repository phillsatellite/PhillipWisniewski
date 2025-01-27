/// <reference types="cypress" />

describe(`Home Page Tests`, () => {
  beforeEach(() => {
    cy.visit(`https://phillsatellite.github.io/PhillipWisniewski/PhillipWisniewski_Resume#`);
  });

    it(`should display the name Phillip Wisniewski`, () => {
      cy.get(`h1`)
      .should(`be.visible`)
      .and(`contain`, `Phillip Wisniewski`);
    })

    it.skip(`should display the job title and location`, () => {
      cy.get(`[data-cy="info"]`)
      .should(`be.visible`)
      .and(`contain`, `QA Engineer | Hickory, North Carolina`);
    })

    it(`Should open and verify contact modal`, () => {
      cy.openModal()
      .should(`be.visible`)
      .and(`contain`, `Let's talk!`);
    })
  })
