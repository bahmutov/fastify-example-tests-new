/// <reference types="cypress" />

it('hides API calls we are not interested in', () => {
  // get the Cypress version major and minor
  // https://on.cypress.io/version
  //
  // log the parsed version major and minor numbers
  // to the Cypress Command Log
  //
  // if the version is >= 12.8.0
  //  figure out the best strategy for hiding the calls
  //  we are not interested in (like "POST /track")
  //  1: hide only the "POST /track" calls
  //  2: hide all fetch API calls
  // https://on.cypress.io/intercept
  cy.visit('/calculator.html')
  cy.get('#num1').type(20)
  cy.get('#num2').type(6)
  cy.intercept('POST', '/calculate').as('calculate')
  cy.get('#add').click()
  cy.contains('#answer', 26)
})
