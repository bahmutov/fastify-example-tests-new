/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'

it('retries getting all network calls', () => {
  // spy on the "GET /random-digit" calls the application makes
  // give the network intercept alias "random"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the page "lucky7.html"
  // https://on.cypress.io/visit
  // get all network calls using the alias "random"
  // and confirm the response body from at least one
  // call includes "n: 7" value
  // Tip: it might take a while for the server to return 7
})

it('Bonus: checks all responses using cy.map', () => {
  // spy on the "GET /random-digit" calls the application makes
  // give the network intercept alias "random"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the page "lucky7.html"
  // https://on.cypress.io/visit
  // get all network calls using the alias "random"
  // map each intercepted call to its response "n" property
  // confirm the list includes the value 7
  // Tip: it might take a while for the server to return 7
})
