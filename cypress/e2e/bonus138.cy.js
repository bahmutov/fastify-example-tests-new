/// <reference types="cypress" />

let response

beforeEach(() => {
  // speed up the "GET /delay/*" calls
  // the application makes in each test:
  //
  // spy on the very first "GET /delay/*" call
  // and store its response in the "response" variable
  // https://on.cypress.io/intercept
  // for other calls we will use the stored response
  // by setting it as a stub response
  cy.visit('/slow-page.html')
  cy.get('#loading').should('have.text', 'loading...')
})

it('loads the data on the slow page (test 1)', () => {
  cy.get('#loading', { timeout: 5500 }).should(
    'have.text',
    'data loaded',
  )
})

it('loads the data on the slow page (test 2)', () => {
  cy.get('#loading', { timeout: 5500 }).should(
    'have.text',
    'data loaded',
  )
})

it('loads the data on the slow page (test 3)', () => {
  cy.get('#loading', { timeout: 5500 }).should(
    'have.text',
    'data loaded',
  )
})
