/// <reference types="cypress" />

// we have defined 3 intercepts in this spec file
// i1: middleware intercept
// i2: an intercept in a "beforeEach" hook
// i3: an intercept in the test itself

beforeEach(() => {
  cy.intercept(
    { method: 'GET', path: '/fruits', middleware: true },
    Cypress._.noop,
  ).as('i1')
  cy.intercept({ method: 'GET', path: '/fruits' }).as('i2')
})

it('processes the intercepts in the fixed order', () => {
  cy.intercept({ method: 'GET', path: '/fruits' }).as('i3')
  cy.visit('/fruits.html')

  // confirm the order of the intercepts
  // should be i1, i3, i2
})
