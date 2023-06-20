/// <reference types="cypress" />

// for advice how to properly pass sensitive information
// read the blog post
// https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
const email = 'test@acme.com'
const password = 'abcdef'

it(
  'logs in using request',
  {
    baseUrl: 'http://localhost:7007',
    viewportHeight: 500,
  },
  () => {
    // make a "POST /login" request to log in
    // pass the email and the password object as the body
    // https://on.cypress.io/request
    //
    // the cookie "sessionId" should be set by the successful cy.request
    // https://on.cypress.io/getcookie
    //
    // make the request to "POST /info" endpoint
    // https://on.cypress.io/request
    // the body of the response should be equal to
    // {username: joe, isAdmin: false}
  },
)
