/// <reference types="cypress" />

// for advice how to properly pass sensitive information
// read the blog post
// https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
const email = 'test@acme.com'
const password = 'abcdef'

it(
  'makes authenticated request',
  {
    baseUrl: 'http://localhost:7007',
    viewportHeight: 500,
  },
  () => {
    cy.visit('/')
    // click the "Login" link
    // https://on.cypress.io/contains
    // https://on.cypress.io/click
    cy.contains('a', 'Login').click()
    // you should end up on the /login page
    // https://on.cypress.io/location
    cy.location('pathname').should('equal', '/login')
    // enter email and password
    // https://on.cypress.io/type
    cy.get('input[name=email]').type(email)
    cy.get('input[name=password]').type(password)
    // and click the "Login" button
    cy.contains('button', 'Login').click()
    // you should end up on the home page
    cy.location('pathname').should('equal', '/')
    // the page shows "logged in" message
    cy.contains('logged in').should('be.visible')
    // make the request to "POST /info" endpoint
    // https://on.cypress.io/request
    // the body of the response should be equal to
    // {username: joe, isAdmin: false}
    //
    cy.log('**delete the session cookie**')
    // https://on.cypress.io/clearcookie
    //
    // make the request again, but allow it to fail
    // and confirm the server responds with 401 status code
    //
  },
)
