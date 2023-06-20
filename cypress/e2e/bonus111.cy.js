/// <reference types="cypress" />

// for advice how to properly pass sensitive information
// read the blog post
// https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
const email = 'test@acme.com'
const password = 'abcdef'

it(
  'sets the session cookie',
  { baseUrl: 'http://localhost:7007', viewportHeight: 500 },
  () => {
    cy.visit('/')
    // click the "Login" link
    // https://on.cypress.io/contains
    // https://on.cypress.io/click
    //
    // you should end up on the /login page
    // https://on.cypress.io/location
    //
    // enter email and password
    // https://on.cypress.io/type
    //
    // and click the "Login" button
    //
    // you should end up on the home page
    //
    // the page shows "logged in" message
    //
    // and the cookie "sessionId" exists
    // https://on.cypress.io/getcookie
    //

    cy.log('**the session exists**')
    // reload the page and confirm the user
    // is still logged in
    // https://on.cypress.io/reload
    //

    cy.log('**log out**')
    // click on the "Logout" link
    //
    // the page should show the "Login" text
    //
    // the old session should not be restored on reload
    // https://on.cypress.io/reload
    //
    // the page still shows the "Login" text
  },
)
