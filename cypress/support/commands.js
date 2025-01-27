/// <reference types="cypress" />

//This opens the Contact Me modal 
Cypress.Commands.add('openModal', () => {
    cy.get('[onclick="openModal()"]').click(); 
    cy.get(`.modal-content`).should('be.visible'); 
});