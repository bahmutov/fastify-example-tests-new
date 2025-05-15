/// <reference types="cypress" />

// show full error messages
chai.config.truncateThreshold = 0

it('checks if every CSS resource is loaded', () => {
  // spy on all CSS resources
  // https://on.cypress.io/intercept
  cy.visit('/css-404')
  cy.contains('h1', 'CSS 404')
  // check if all CSS resources are loaded
  // Note: you do not know how many CSS resources are loaded
  // https://on.cypress.io/get
  // plus validate the status codes
})
