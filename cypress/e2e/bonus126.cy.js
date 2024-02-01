/// <reference types="cypress" />

beforeEach(() => {
  // look at the Cypress catalog of application events
  // and use the appropriate event to catch the URL change
  // https://on.cypress.io/catalog-of-events
  // from the URL get the search part
  // and confirm it does not contain "/" or ":" characters
  // which means the URL was not encoded properly
  // https://en.wikipedia.org/wiki/Percent-encoding
  //
  // Note: you cannot call any "cy" commands in the callback
  // https://glebbahmutov.com/blog/cypress-out-of-band/
  // instead just validate the URL and throw an error
  cy.visit('/my-profile-page.html')
})

// this is an example that catches the incorrectly encoded URL search parameters
it.skip('checks if the URL search params were encoded - fails', () => {
  cy.contains('a#login-raw', 'Log in').click()
})

it('checks if the URL search params were encoded - passes', () => {
  cy.contains('a#login-encoded', 'Log in').click()
})
