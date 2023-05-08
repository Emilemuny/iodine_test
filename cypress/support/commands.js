// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe'

Cypress.Commands.add("getPayCorElement", function(selector){
    return cy.iframe('#gnewtonIframe').find(`[ns-qa="${selector}"]`).should('be.visible')
})

Cypress.Commands.add("getPayCorElementContains", function(selector, text){
    cy.wait(10000)
    return cy.iframe('#gnewtonIframe').find(`${selector}`).contains(text).should('be.visible')
})

Cypress.Commands.add("getPayCorElement2", function(selector){
    cy.wait(10000)
    return cy.iframe('#gnewtonIframe').find(`${selector}`).should('be.visible')
})

Cypress.Commands.add("getPayCorContinueSubmitBtn", function(selector){
    cy.wait(10000)
    return cy.iframe('#gnewtonIframe').find(`[ns-qa="${selector}"]`).should('be.visible')
})

