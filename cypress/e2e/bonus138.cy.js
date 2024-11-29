/// <reference types="cypress" />

it('loads the data on the slow page (test 1)', () => {
  cy.visit('/slow-page.html')
  cy.get('#loading').should('have.text', 'loading...')
  cy.get('#loading', { timeout: 5500 }).should(
    'have.text',
    'data loaded',
  )
})

it('loads the data on the slow page (test 2)', () => {
  cy.visit('/slow-page.html')
  cy.get('#loading').should('have.text', 'loading...')
  cy.get('#loading', { timeout: 5500 }).should(
    'have.text',
    'data loaded',
  )
})

it('loads the data on the slow page (test 3)', () => {
  cy.visit('/slow-page.html')
  cy.get('#loading').should('have.text', 'loading...')
  cy.get('#loading', { timeout: 5500 }).should(
    'have.text',
    'data loaded',
  )
})
