/// <reference types="cypress" />

describe(`Home Page Tests`, () => {
  beforeEach(() => {
    cy.visit(`https://phillsatellite.github.io/PhillipWisniewski/PhillipWisniewski_Resume#`);
  });

    //These tests focus on everything on the landing page
    it(`Name should be displayed correctly`, () => {
      cy.get(`h1`)
      .should(`be.visible`)
      .and(`contain`, `Phillip Wisniewski`);
    })

    it(`Text should display the job title and location`, () => {
      cy.get(`[data-cy=info]`)
      .should(`be.visible`)
      .and(`contain`, `QA Engineer | Hickory, North Carolina`);
    })

    it(`validates picture appears at top`, () => {
      cy.get(`.profile-pic`)
      .should(`be.visible`);
    })

    it(`Validates Contact Me button appears`, () => {
      cy.get('{data-cy=contactMeButton]')
      .should(`be.visible`)
      .and(`contain.text`, `Contact Me`);
    })

    //These tests focus on the Contact Me modal and validates content inside
    it(`Should open and verify contact modal`, () => {
      cy.openModal()
      cy.get(`[data-cy=contactHeader]`).should(`be.visible`).and(1`contain.text`, `Let's talk!`)
      cy.get(`#emailButton`).should(`be.visible`).and(`contain.text`, `Email Me`)
      cy.get(`#linkedInButton`).should(`be.visible`).and(`contain.text`, `LinkedIn`)
      cy.get(`#githubButton`).should(`be.visible`).and(`contain.text`, `Github`);
    })

    //This clicks the LinkedIn button and validates the link is correct
    it('LinkedIn button should open the correct LinkedIn profile', () => {
      cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
      
      cy.openModal()
      cy.get('#linkedInButton').click();

      cy.get('@windowOpen').should('have.been.calledWith', 'https://www.linkedin.com/in/phillip-wisniewski-9472aa224');
    })

    //This clicks the Github button and validates the link is correct
    it('Github button should open the correct Github profile', () => {
      cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
      
      cy.openModal()
      cy.get('#githubButton').click();

      cy.get('@windowOpen').should('have.been.calledWith', 'https://github.com/phillsatellite');
    })

    it(`Clicks and validates the close button`, () => {
      cy.openModal()
      cy.get(`.close`)
      .should(`be.visible`).and(`contain.text`, `Close`)
      .click();
    })
  })
