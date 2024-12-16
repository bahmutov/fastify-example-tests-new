/// <reference types="cypress" />

beforeEach(() => {
  // spy on every network call
  // and log to the "console" the following request parts
  // - method
  // - URL
  // https://on.cypress.io/intercept
  // spy on every network call
  // and throw an error if the response status is an error
  // code (like 404, anything above or equal to 400)
  // question: do you still see the "console.log" messages from the above intercept?
  // give the request an alias "check404"
})

// unskip the test to see it in action
it.skip('loads a page with some 404 resources', () => {
  cy.visit('/bundles.html')
})
