/// <reference types="cypress" />

it.skip('complex query parameter - does not work', () => {
  // does this test work?
  // does it accurately matches the "order[price]" query parameter?
  cy.intercept({
    pathname: '/sorted',
    query: {
      'order[price]': 'asc',
    },
  }).as('asc')
  cy.intercept({
    pathname: '/sorted',
    query: {
      'order[price]': 'desc',
    },
  }).as('desc')
  cy.visit('/sorted.html')
  // the "asc" call should happen
  cy.wait('@asc')
  // confirm the "desc" network alias never happens
  cy.get('@desc.all').should('have.length', 0)
})

// instead of a query object, use the "path" that includes the query
// as a simple string. Use a regular expression to
// match the "order[price]=" even if it is somewhere
// in the URL middle
it('matches the complex query parameter name using regex', () => {
  // spy on the "sorted.html" document under alias "html"

  // spy on the "order[price]=asc" call under alias "asc"

  // spy on the "order[price]=desc" call under alias "desc"

  cy.visit('/sorted.html')
  // confirm the "html" and "asc" network calls happen
  // and the "desc" network call does not happen
})
