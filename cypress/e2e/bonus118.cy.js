/// <reference types="cypress" />

it('shows the parsed query returned by the server', () => {
  // spy on the "sorted.html" network call
  // under the alias "html"

  cy.visit('/sorted.html')
  // confirm the "html" network call happens

  // the request goes to the backend the backend sends
  // back the JSON with the query parameters
  cy.contains('pre', '"query":')
})

it('matches using a simple query parameter', () => {
  // spy on the "sorted.html" network call
  // under the alias "html"

  // spy on the "page=2" query
  // under the alias "second"

  // spy on the "page=3" query
  // under the alias "third"

  cy.visit('/sorted.html')
  // confirm the "html" and the "second" aliases happen

  // confirm the "third" network alias never happens
})
