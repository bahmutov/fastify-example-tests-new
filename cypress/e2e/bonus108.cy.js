/// <reference types="cypress" />
// @ts-check

it('shows rounded float sent by the server', () => {
  // spy on the GET /random-float network call
  // give the intercept alias "random"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the "random-float.html" page
  cy.visit('/random-float.html')
  // wait for the network call "@random"
  // https://on.cypress.io/wait
  //
  // and grab from the response body the property "n"
  // https://on.cypress.io/its
  //
  // the number should be between 0 and 1
  //
  // the page should show a number in the format "0.<digit>"
  // https://on.cypress.io/contains
  //
  // grab its inner text by invoking the jQuery method "text"
  // and parse text to float
  //
  // the result should be close to the number sent by the server
  // within +/- 0.05
})
