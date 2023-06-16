/// <reference types="cypress" />

// let's revisit "Bonus 89" lesson

// a better way to handle sensitive information
// is describe in my blog post "Keep passwords secret in E2E tests"
// https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
const username = 'test_cy'
const password = 'secure12$1'

it('requests a protected page', () => {
  // can you make cy.request with basic authentication
  // WITHOUT using the "auth" option in the cy.request command?
  // https://on.cypress.io/request
  // encode the username and password like the browser does
  // set the basic auth header
  // and make the cy.request call
  // can you visit the protected page '/protected'
  // WITHOUT using the "auth" option in the cy.visit command?
  // https://on.cypress.io/visit
  //
  // confirm the text "Secret stuff" is visible
  // https://on.cypress.io/contains
})
