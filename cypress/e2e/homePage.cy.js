/// <reference types="cypress" />

describe(`Home Page Tests`, () => {
  beforeEach(() => {
    cy.visit(`https://phillsatellite.github.io/PhillipWisniewski/PhillipWisniewski_Resume#`);
  });

    //These tests focus on everything on the landing page
    it(`should display the name Phillip Wisniewski`, () => {
      cy.get(`h1`)
      .should(`be.visible`)
      .and(`contain`, `Phillip Wisniewski`);
    })

    it(`should display the job title and location`, () => {
      cy.get(`[data-cy=info]`)
      .should(`be.visible`)
      .and(`contain`, `QA Engineer | Hickory, North Carolina`);
    })

    it(`validates picture appears at top`, () => {
      cy.get(`.profile-pic`)
      .should(`be.visible`);
    })

    it(`Validates Contact Me button appears`, () => {
      cy.get('[onclick="openModal()"]')
      .should(`be.visible`)
      .and(`contain.text`, `Contact Me`);
    })

    //These tests focus on the Contact Me modal on the landing page
    it(`Should open and verify contact modal`, () => {
      cy.openModal()
      .should(`be.visible`)
      .and(`contain.text`, `Let's talk!`);
    })

    it(`All 3 buttons appear`, () => {
      cy.openModal()
      cy.get(`#emailButton`).should(`be.visible`).and(`contain.text`, `Email Me`);
    })
  })
